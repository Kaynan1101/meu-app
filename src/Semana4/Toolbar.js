import "./Toolbar.css";

export function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function Toolbar() {
  return (
    <div className="toolbar-container">
      <AlertButton message={"Playing!"}>Play Movie</AlertButton>
      <AlertButton message={"Uploading!"}>Upload Image</AlertButton>
    </div>
  );
}
