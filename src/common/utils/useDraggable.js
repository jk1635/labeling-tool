import { useState, useEffect } from "react";

const useDraggable = el => {
  const [{ x, y }, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseDown = e => {
      const preX = e.pageX - x;
      const preY = e.pageY - y;

      const handleMouseMove = e => {
        const newX = e.pageX - preX;
        const newY = e.pageY - preY;
        setOffset({ x: newX, y: newY });
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener(
        "mouseup",
        () => {
          document.removeEventListener("mousemove", handleMouseMove);
        },
        { once: true }
      );
    };

    el.current.addEventListener("mousedown", handleMouseDown);
    el.current.removeEventListener("click", handleMouseDown);
  }, [x, y]);

  useEffect(() => {
    el.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }, [x, y]);
};

export default useDraggable;
