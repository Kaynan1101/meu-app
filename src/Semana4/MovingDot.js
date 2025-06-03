import { useState } from "react";
import "./MovingDot.css";

export default function MovingDot() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="movingdot-area"
      onPointerMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      <div
        className="movingdot-dot"
        style={{
          left: pos.x - 10,
          top: pos.y - 10,
        }}
      />
    </div>
  );
}
