import * as React from "react";
import type { SVGProps } from "react";
const SvgReactLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="-10.5 -9.45 21 18.9"
    {...props}
  >
    <circle r={2} fill="currentColor" />
    <g stroke="currentColor">
      <ellipse rx={10} ry={4.5} />
      <ellipse rx={10} ry={4.5} transform="rotate(60)" />
      <ellipse rx={10} ry={4.5} transform="rotate(120)" />
    </g>
  </svg>
);
export default SvgReactLogo;
