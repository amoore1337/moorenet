import * as React from "react";
import type { SVGProps } from "react";
const SvgMoorenetLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 125 125"
    {...props}
  >
    <rect
      width={123}
      height={123}
      x={1}
      y={1}
      fill="#334155"
      stroke="#020617"
      strokeWidth={2}
      rx={19}
    />
    <g filter="url(#a)">
      <path
        fill="#fff"
        d="M16.88 99V28.92h18.24l2.688 28.8h.384l2.688-28.8h18.24V99H46.16l1.152-48h-.384L42.32 85.56h-8.64L29.072 51h-.384l1.152 48zm48.96 0V28.92h17.28l9.216 44.16h.384V28.92h13.44V99H88.88l-9.216-44.16h-.384V99z"
      />
      <path
        fill="#020617"
        d="M16.88 99h-2v2h2zm0-70.08v-2h-2v2zm18.24 0 1.991-.186-.169-1.814H35.12zm2.688 28.8-1.991.186.169 1.814h1.822zm.384 0v2h1.822l.17-1.814zm2.688-28.8v-2h-1.822l-.17 1.814zm18.24 0h2v-2h-2zm0 70.08v2h2v-2zm-12.96 0-2-.048-.049 2.048h2.049zm1.152-48 2 .048L49.36 49h-2.049zm-.384 0v-2h-1.751l-.231 1.736zM42.32 85.56v2h1.751l.232-1.736zm-8.64 0-1.982.264.231 1.736h1.751zM29.072 51l1.983-.264L30.823 49h-1.751zm-.384 0v-2h-2.049l.05 2.048zm1.152 48v2h2.049l-.05-2.048zm-10.96 0V28.92h-4V99zm-2-68.08h18.24v-4H16.88zm16.249-1.814 2.688 28.8 3.982-.372-2.688-28.8zm4.679 30.614h.384v-4h-.384zm2.375-1.814 2.688-28.8-3.982-.372-2.688 28.8zm.697-26.986h18.24v-4H40.88zm16.24-2V99h4V28.92zm2 68.08H46.16v4h12.96zm-10.96 2.048 1.151-48-3.998-.096-1.152 48zM47.311 49h-.384v4h.384zm-2.366 1.736-4.608 34.56 3.965.528 4.608-34.56zM42.32 83.56h-8.64v4h8.64zm-6.657 1.736-4.608-34.56-3.965.528 4.608 34.56zM29.072 49h-.384v4h.384zm-2.383 2.048 1.152 48 3.998-.096-1.152-48zM29.84 97H16.88v4h12.96zm36 2h-2v2h2zm0-70.08v-2h-2v2zm17.28 0 1.958-.409-.332-1.591H83.12zm9.216 44.16-1.958.409.332 1.591h1.626zm.384 0v2h2v-2zm0-44.16v-2h-2v2zm13.44 0h2v-2h-2zm0 70.08v2h2v-2zm-17.28 0-1.958.409.332 1.591h1.626zm-9.216-44.16 1.958-.409-.332-1.591h-1.626zm-.384 0v-2h-2v2zm0 44.16v2h2v-2zm-11.44 0V28.92h-4V99zm-2-68.08h17.28v-4H65.84zm15.322-1.591 9.216 44.16 3.916-.818-9.216-44.16zM92.336 75.08h.384v-4h-.384zm2.384-2V28.92h-4v44.16zm-2-42.16h13.44v-4H92.72zm11.44-2V99h4V28.92zm2 68.08H88.88v4h17.28zm-15.322 1.591-9.216-44.16-3.916.818 9.216 44.16zM79.664 52.84h-.384v4h.384zm-2.384 2V99h4V54.84zm2 42.16H65.84v4h13.44z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={97.28}
        height={78.08}
        x={16.88}
        y={28.92}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={4} dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.00784314 0 0 0 0 0.0235294 0 0 0 0 0.0901961 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_4" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1_4"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgMoorenetLogo;
