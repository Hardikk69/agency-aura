import * as React from "react";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-20 md:h-12 md:w-12"
      >
        <path
          d="M12 18C10 18 9 20 10 22L42 50L10 78C9 80 10 82 12 82H34C37 82 39 81 41 79L76 54C79 52 79 48 76 46L41 21C39 19 37 18 34 18H12Z"
          fill="#FF4B33"
        />
      </svg>
    </div>
  );
}
