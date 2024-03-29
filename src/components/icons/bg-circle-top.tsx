function MobileCircle() {
  return (
    <svg
      width="375"
      height="812"
      viewBox="0 0 375 812"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="decorative-top-mobile sm:hidden fixed top-0 bottom-0 left-0 z-[-1] pointer-events-none user-select-none"
    >
      <circle
        cx="-113.5"
        cy="323.5"
        r="416.5"
        className="stroke-[#EDF1F9] dark:stroke-[#2D3949]"
        strokeWidth="144"
      />
    </svg>
  );
}

function Circle() {
  return (
    <svg
      width="540"
      height="608"
      viewBox="0 0 540 608"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="decorative-top hidden sm:block fixed top-0 left-0 z-[-1] pointer-events-none user-select-none h-[60vh]"
    >
      <circle
        cx="-50.5"
        cy="75.5"
        r="416.5"
        className="stroke-[#EDF1F9] dark:stroke-[#2D3949]"
        strokeWidth="144"
      />
    </svg>
  );
}

export function BgCircleTop() {
  return (
    <>
      <MobileCircle />
      <Circle />
    </>
  );
}
