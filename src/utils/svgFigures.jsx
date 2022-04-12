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
        fill="white"
        mask="url(#path-1-inside-1_215_71)"
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

export { triangle, circle, line };
