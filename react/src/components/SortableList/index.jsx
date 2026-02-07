import { useState } from "react";
import "./style.css";

/**
 *
 * (0, 0) means the cursor will be at the top-left corner of the drag image during the drag.
 */

const listInitialData = new Array(100).fill(".").map((_, i) => i + 1);
function SortableList() {
  const [list, setList] = useState(listInitialData);
  const [startIndex, setStartIndex] = useState(-1);
  const [swapIndex, setSwapIndex] = useState(-1);
  const [dragPosition, setDragPosition] = useState("top");

  const reset = () => {
    setStartIndex(-1);
    setSwapIndex(-1);
  };

  const handleDragStart = (e, i) => {
    setStartIndex(i);
    const originalRow = e.currentTarget;
    e.dataTransfer.effectAllowed = "link";

    // clone original image
    const drawImage = originalRow.cloneNode(true);
    drawImage.style.position = "absolute";
    drawImage.style.pointerEvents = "none";
    drawImage.style.opacity = "0.8";
    drawImage.style.transform = "scale(1.2";
    drawImage.style.backgroundColor = "red";
    drawImage.style.width = "200px";
    drawImage.style.top = "-1000px";
    drawImage.style.left = "-1000px";

    document.body.appendChild(drawImage);
    e.dataTransfer.setDragImage(drawImage, 0, 0);

    // Remove it from the dom
    setTimeout(() => {
      document.body.removeChild(drawImage);
    }, 0);
  };
  const handleDrop = () => {
    const factor = dragPosition === "top" ? 0 : 1;
    const dropIndex = swapIndex + factor;
    setList(swapArrayItems(list, startIndex, dropIndex));
  };

  function swapArrayItems(arr, currentIndex, swapIndex) {
    const newArr = [...arr];
    const [item] = newArr.splice(currentIndex, 1);
    newArr.splice(swapIndex, 0, item);
    return newArr;
  }

  const handleDragOver = (e, i) => {
    e.preventDefault();

    const rect = e.currentTarget.getBoundingClientRect();
    const midPoint = rect.top + rect.height / 2;
    if (e.clientY < midPoint) {
      setDragPosition("top");
    } else {
      setDragPosition("bottom");
    }
    setSwapIndex(i);
  };
  return (
    <div className="sortable-list">
      {list.map((item, i) => {
        let classes = "list-item";

        if (startIndex === i) classes += " grabbing";
        if (swapIndex === i) classes += " dropzone";

        return (
          <div
            onDragStart={(e) => handleDragStart(e, i)}
            onDragEnd={reset}
            onDragOver={(e) => handleDragOver(e, i)}
            onDrop={() => {
              reset();
              handleDrop();
            }}
            key={i}
            className={classes}
            draggable
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default SortableList;
