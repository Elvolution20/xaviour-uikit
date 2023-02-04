import React from "react";

import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 42 42" {...props}>
      <image width="42" height="42" href="/images/egg/logo.png"/>
    </Svg>
  );
};

export default Icon;
