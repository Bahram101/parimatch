import "./modal.scss";

export const Modal = ({ active, setActive, width, children }) => {
  return (
    <div
      className={active ? "modal-block active" : "modal-block"}
      onClick={() => setActive(false)}
    >
      <div
        style={{ width }}
        className={active ? "modal-content active" : "modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
