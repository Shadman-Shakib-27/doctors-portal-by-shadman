import React from "react";

const Loading = () => {
  return (
    <div class="min-h-[30rem] flex flex-col shadow-sm rounded-xl">
      <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
        <div class="flex justify-center">
          <div
            class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-accent rounded-full"
            role="status"
            aria-label="loading"
          >
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
