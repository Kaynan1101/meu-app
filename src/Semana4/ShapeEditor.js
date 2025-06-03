import { useState } from "react";
import "./ShapeEditor.css";

const initialShapes = [
  { id: 0, type: "circle", x: 50, y: 100 },
  { id: 1, type: "square", x: 150, y: 100 },
  { id: 2, type: "circle", x: 250, y: 100 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function moveCirclesDown() {
    setShapes((shapes) =>
      shapes.map((shape) =>
        shape.type === "circle" ? { ...shape, y: shape.y + 50 } : shape
      )
    );
  }

  function moveCirclesUp() {
    setShapes((shapes) =>
      shapes.map((shape) =>
        shape.type === "circle" ? { ...shape, y: shape.y - 50 } : shape
      )
    );
  }

  return (
    <>
      <button onClick={moveCirclesDown}>Mover círculos para baixo</button>
      <button onClick={moveCirclesUp}>Mover círculos para cima</button>
      <div className="shape-editor-area">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className="shape-editor-shape"
            style={{
              left: shape.x,
              top: shape.y,
              borderRadius: shape.type === "circle" ? "50%" : 0,
            }}
          />
        ))}
      </div>
    </>
  );
}
