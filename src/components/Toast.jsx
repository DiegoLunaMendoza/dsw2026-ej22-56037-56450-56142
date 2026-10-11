import "./Toast.css";

export default function Toast({ mensaje, tipo, visible }) {
  return (
    <div
      className={`toast toast-${tipo} ${visible ? "visible" : ""}`}
      role="status"
      aria-live="polite"
    >
      {mensaje}
    </div>
  );
}