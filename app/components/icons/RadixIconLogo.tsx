import * as React from "react";
import type { SVGProps } from "react";
const SvgRadixIconLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    style={{
      marginRight: 3,
    }}
    viewBox="0 0 25 25"
    {...props}
  >
    <path
      fill="currentcolor"
      d="M12 25a8 8 0 1 1 0-16zM12 0H4v8h8zM17 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
    />
  </svg>
);
export default SvgRadixIconLogo;
