const triangle = (
  <svg
    className="triangle"
    width="81"
    height="70"
    viewBox="0 0 81 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <mask id="path-1-inside-1_215_71" fill="white">
        <path d="M81 0V70H0L81 0Z" />
      </mask>
      <path
        d="M81 0H82.5V-3.27882L80.0192 -1.13492L81 0ZM81 70V71.5H82.5V70H81ZM0 70L-0.980795 68.8651L-4.02977 71.5H0V70ZM79.5 0V70H82.5V0H79.5ZM81 68.5H0V71.5H81V68.5ZM0.980795 71.1349L81.9808 1.13492L80.0192 -1.13492L-0.980795 68.8651L0.980795 71.1349Z"
        fill="#7F96FF"
        mask="url(#path-1-inside-1_215_71)"
      />
    </g>
  </svg>
);

const triangleDown = (
  <svg
    className="triangle-down"
    width="114"
    height="58"
    viewBox="0 0 114 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <mask id="path-1-inside-1_271_234" fill="white">
        <path d="M113.137 0.568543L56.5685 57.1371L-1.99661e-06 0.568544L113.137 0.568543Z" />
      </mask>
      <path
        d="M113.137 0.568543L114.198 1.6292L116.758 -0.931457L113.137 -0.931457L113.137 0.568543ZM56.5685 57.1371L55.5079 58.1977L56.5685 59.2584L57.6292 58.1977L56.5685 57.1371ZM-1.99661e-06 0.568544L-2.01219e-06 -0.931455L-3.62132 -0.931455L-1.06066 1.6292L-1.99661e-06 0.568544ZM112.076 -0.492117L55.5079 56.0764L57.6292 58.1977L114.198 1.6292L112.076 -0.492117ZM57.6292 56.0764L1.06066 -0.492116L-1.06066 1.6292L55.5079 58.1977L57.6292 56.0764ZM-1.98102e-06 2.06854L113.137 2.06854L113.137 -0.931457L-2.01219e-06 -0.931455L-1.98102e-06 2.06854Z"
        fill="#7F96FF"
        mask="url(#path-1-inside-1_271_234)"
      />
    </g>
  </svg>
);

const circle = (
  <svg
    className="circle-line"
    width="47"
    height="47"
    viewBox="0 0 47 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="23.5" cy="23.5" r="22.75" stroke="white" strokeWidth="1.5" />
  </svg>
);

const line = (
  <svg
    className="line"
    width="44"
    height="1372"
    viewBox="0 0 44 1372"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="42.75"
      y1="3.27835e-08"
      x2="42.7499"
      y2="1372"
      stroke="#DCE3F8"
      strokeWidth="1.5"
    />
    <line
      x1="0.75"
      y1="3.27835e-08"
      x2="0.74994"
      y2="1372"
      stroke="#DCE3F8"
      strokeWidth="1.5"
    />
  </svg>
);

export { triangle, circle, line, triangleDown };
