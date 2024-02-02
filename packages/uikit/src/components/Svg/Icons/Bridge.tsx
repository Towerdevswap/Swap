import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <image width="22" height="22" href="https://cdn-icons-png.flaticon.com/128/948/948057.png" alt="bridge" />
    </Svg>
  );
};

export default Icon;
