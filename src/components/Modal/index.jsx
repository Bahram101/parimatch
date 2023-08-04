import "./modal.scss";

export const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "modal-block active" : "modal-block"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal-content active" : "modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
