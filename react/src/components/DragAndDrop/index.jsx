import { useEffect, useRef } from "react";
import "./style.css";
/**
 *
 * @returns Steps in drag and drop:
 *
 * 1. add draggable = true attribute to the Element
 * 2. Drag events:
 *  a) dragStart => Fired once. Whe we start dragging.
 *  b) drag => Fired Continuously while we are dragging.
 *  c) dragEnd => Fired once when drop completes or get cancelled.
 *
 *  d) dragEnter => Fired Once when dragged element enters a valid drop zone. We can notify user by changing cass of the drop zone.
 *  e) dragLeave => Fired when the dragged element leave the drop zone.
 *  f) dragOver => Fired continuously as the dragged element is moved over a drop target.
 *  g) drop => Fired when the dragged element is dropped onto a valid drop target.
 *
 *
 */
function DragAndDrop() {
  const dragRef = useRef();
  const basketRef = useRef();

  useEffect(() => {
    const dragEl = dragRef.current;
    const basketEl = basketRef.current;

    dragEl.addEventListener("dragstart", (e) => {
      console.log("Drag Start");
      if (e.dataTransfer) {
        e.dataTransfer.setData("text/plain", e.target.innerHTML);
      }
    });
    dragEl.addEventListener("drag", () => {
      // console.log("Dragging...");
    });
    dragEl.addEventListener("dragend", () => {
      console.log("Drag end...");
    });

    basketEl.addEventListener("dragenter", () => {
      console.log("drag enter");
      basketEl.style.backgroundColor = "lightgreen";
    });
    basketEl.addEventListener("dragleave", () => {
      // console.log("drag leave");
      basketEl.style.backgroundColor = "white";
    });
    basketEl.addEventListener("dragover", (e) => {
      console.log("drag over");
      e.preventDefault(); // without dragover and inside it preventing event. The drop event wont fire.
    });
    basketEl.addEventListener("drop", (e) => {
      console.log("drop element");
      e.preventDefault(); // adding it, if not, droping files from download, Browser will open that file by default in new tab.

      if (e.dataTransfer) {
        const btnElementInnerData = e.dataTransfer.getData("text");
        const newBtn = document.createElement("button");
        newBtn.innerHTML = btnElementInnerData;
        basketEl.appendChild(newBtn);
      }
    });
  }, []);
  return (
    <div>
      <button draggable ref={dragRef}>
        Drag Me!
      </button>

      <div ref={basketRef} className="drop-box"></div>
    </div>
  );
}

export default DragAndDrop;
