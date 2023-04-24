import React from "react";

export default function Loader() {
  return (
    <div
      class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-teal-100 rounded-full"
      role="status"
      aria-label="loading"
    >
      <span class="sr-only">Loading...</span>
    </div>
  );
}
