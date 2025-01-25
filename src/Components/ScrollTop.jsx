import React from "react";

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <button
      className="button1 fixed bottom-4 right-4 p-3 bg-gray-100 text-gray-800 rounded-full shadow-lg hover:bg-gray-200 transition-all"
      id="scrollToTop"
      onClick={handleScrollToTop}
    >
      <svg
        viewBox="0 0 384 512"
        className="svgIcon w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
