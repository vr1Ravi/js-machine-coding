/**
 *
 * Popover :- attachin an element which pops up when we perform certain action on element.
 * Dialog :- Behaviour is same. But the real difference is we cannot inetract with behind elements of dialog, when it appears
 * Other difference is focus.
 */
import { useState } from "react";
import { createPortal } from "react-dom";
import "./style.css";
import { createContext, useContext } from "react";
import { useRef } from "react";

const PopOverContext = createContext();

function PopOver({ children }) {
  const [isContentOpen, setIsContentOpen] = useState(false);
  const contentRef = useRef(null);
  const actionRef = useRef(null);

  const togglePopOver = () => {
    const newValue = !isContentOpen;
    setIsContentOpen(newValue);

    if (newValue) {
      const { top: bTop, height: bHeight } =
        actionRef.current.getBoundingClientRect();
      contentRef.current.style.top = `${bTop + bHeight + 10}px`;
    }
  };

  return (
    <PopOverContext.Provider
      className="pov-over"
      value={{ togglePopOver, contentRef, isContentOpen, actionRef }}
    >
      <div className="pop-over">{children}</div>
    </PopOverContext.Provider>
  );
}

function Action({ label, node, children }) {
  const { togglePopOver, actionRef } = useContext(PopOverContext);
  const actionElement = children ?? node ?? label ?? "Show";

  return (
    <button className="action" onClick={togglePopOver} ref={actionRef}>
      {actionElement}
    </button>
  );
}

function Content({ children }) {
  const { isContentOpen, contentRef } = useContext(PopOverContext);

  return createPortal(
    <div
      ref={contentRef}
      className={`${!isContentOpen && "hidden-content"} content-box`}
    >
      {children}
    </div>,
    document.body,
  );
}

PopOver.Action = Action;
PopOver.Content = Content;
export default PopOver;
