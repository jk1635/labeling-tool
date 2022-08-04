import React, { useRef, useEffect } from "react";
import styled from "styled-components";

// utils
import useDraggable from "../utils/useDraggable";

const DraggableItem = ({ children }) => {
  const cardRef = useRef(null);
  useDraggable(cardRef);

  return (
    <div style={{ cursor: "grab" }} ref={cardRef}>
      {children}
    </div>
  );
};

const LabelingBox = () => {
  const ref = useRef(null);
  const refLeft = useRef(null);
  const refTop = useRef(null);
  const refRight = useRef(null);
  const refBottom = useRef(null);

  useEffect(() => {
    const resizeableEle = ref.current;
    const styles = window.getComputedStyle(resizeableEle);
    let width = parseInt(styles.width, 10);
    let height = parseInt(styles.height, 10);
    let x = 0;
    let y = 0;

    // resizeableEle.style.top = "100px";
    // resizeableEle.style.left = "100px";

    // Right
    const onMouseMoveRightResize = event => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width + dx;
      resizeableEle.style.width = `${width}px`;
    };

    const onMouseUpRightResize = event => {
      document.removeEventListener("mousemove", onMouseMoveRightResize);
    };

    const onMouseDownRightResize = event => {
      x = event.clientX;
      resizeableEle.style.left = styles.left;
      resizeableEle.style.right = null;
      document.addEventListener("mousemove", onMouseMoveRightResize);
      document.addEventListener("mouseup", onMouseUpRightResize);
    };

    // Top
    const onMouseMoveTopResize = event => {
      const dy = event.clientY - y;
      height = height - dy;
      y = event.clientY;
      resizeableEle.style.height = `${height}px`;
    };

    const onMouseUpTopResize = event => {
      document.removeEventListener("mousemove", onMouseMoveTopResize);
    };

    const onMouseDownTopResize = event => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizeableEle);
      resizeableEle.style.bottom = styles.bottom;
      resizeableEle.style.top = null;
      document.addEventListener("mousemove", onMouseMoveTopResize);
      document.addEventListener("mouseup", onMouseUpTopResize);
    };

    // Bottom
    const onMouseMoveBottomResize = event => {
      const dy = event.clientY - y;
      height = height + dy;
      y = event.clientY;
      resizeableEle.style.height = `${height}px`;
    };

    const onMouseUpBottomResize = event => {
      document.removeEventListener("mousemove", onMouseMoveBottomResize);
    };

    const onMouseDownBottomResize = event => {
      y = event.clientY;
      const styles = window.getComputedStyle(resizeableEle);
      resizeableEle.style.top = styles.top;
      resizeableEle.style.bottom = null;
      document.addEventListener("mousemove", onMouseMoveBottomResize);
      document.addEventListener("mouseup", onMouseUpBottomResize);
    };

    // Left
    const onMouseMoveLeftResize = event => {
      const dx = event.clientX - x;
      x = event.clientX;
      width = width - dx;
      resizeableEle.style.width = `${width}px`;
    };

    const onMouseUpLeftResize = event => {
      document.removeEventListener("mousemove", onMouseMoveLeftResize);
    };

    const onMouseDownLeftResize = event => {
      x = event.clientX;
      resizeableEle.style.right = styles.right;
      resizeableEle.style.left = null;
      document.addEventListener("mousemove", onMouseMoveLeftResize);
      document.addEventListener("mouseup", onMouseUpLeftResize);
    };

    // Mouse down event listener
    const resizerRight = refRight.current;
    resizerRight.addEventListener("mousedown", onMouseDownRightResize);
    const resizerTop = refTop.current;
    resizerTop.addEventListener("mousedown", onMouseDownTopResize);
    const resizerBottom = refBottom.current;
    resizerBottom.addEventListener("mousedown", onMouseDownBottomResize);
    const resizerLeft = refLeft.current;
    resizerLeft.addEventListener("mousedown", onMouseDownLeftResize);

    return () => {
      resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
      resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
      resizerBottom.removeEventListener("mousedown", onMouseDownBottomResize);
      resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
    };
  }, []);

  return (
    <DraggableItem>
      <Resizeable ref={ref}>
        <ResizerR className='card' ref={refRight}></ResizerR>
        <ResizerT className='card' ref={refTop}></ResizerT>
        <ResizerB className='card' ref={refBottom}></ResizerB>
        <ResizerL className='card' ref={refLeft}></ResizerL>
      </Resizeable>
    </DraggableItem>
  );
};

const Resizeable = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  min-width: 15px;
  min-height: 15px;
  border: 5px solid var(--main);
  border-radius: 3px;
  background-color: rgb(86, 104, 217, 0.2);
  user-select: none;
`;

const ResizerR = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 5px;
  height: 100%;
  z-index: 2;
  cursor: col-resize;
`;

const ResizerT = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  z-index: 2;
  cursor: row-resize;
`;

const ResizerB = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5px;
  z-index: 2;
  cursor: row-resize;
`;

const ResizerL = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  z-index: 2;
  cursor: col-resize;
`;

export default LabelingBox;
