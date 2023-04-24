import React from "react";

export default function Loader() {
  return (
    <div
      class="animate-spin inline-block w-5 h-5 border-[3px] border-current border-t-transparent text-color-font rounded-full"
      role="status"
      aria-label="loading"
    >
      <span class="sr-only">Loading...</span>
    </div>
  );
}
