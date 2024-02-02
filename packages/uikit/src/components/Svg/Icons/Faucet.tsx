import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <image width="24" height="24" href="https://png.pngtree.com/png-clipart/20220404/original/pngtree-airdrop-gold-coin-vector-icon-png-image_7515745.png" />
    </Svg>
  );
};

export default Icon;
