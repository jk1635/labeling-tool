import React from "react";

// recoil
import { useRecoilValue } from "recoil";
import { boxState } from "../common/recoil/atoms";

// components
import { ImageData, LabelingBox } from "../common/components";

const Home = () => {
  const boxes = useRecoilValue(boxState);
  return (
    <ImageData>
      {boxes.map(box => (
        <LabelingBox key={box} />
      ))}
    </ImageData>
  );
};

export default Home;
