import React from "react";

export default function Loader() {
  return (
    <div
      class="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent text-color-font rounded-full"
      role="status"
      aria-label="loading"
    >
      <span class="sr-only">Loading...</span>
    </div>
  );
}
