/**
 *
 * Popover :- attachin an element which pops up when we perform certain action on element.
 * Dialog :- Behaviour is same. But the real difference is we cannot inetract with behind elements of dialog, when it appears
 * Other difference is focus.
 */

function PopOver() {
  return <div>PopOver</div>;
}

function Action({ label, node, children }) {
  if (children) {
    return <button>{children}</button>;
  }
  if (node) {
    return <button>{node}</button>;
  }
  return <buttonn>{label}</buttonn>;
}

function Content({ children }) {
  return <div className="content">{children}</div>;
}

PopOver.Action = Action;
PopOver.Content = Content;
export default PopOver;
