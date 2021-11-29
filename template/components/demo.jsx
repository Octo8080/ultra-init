import React from "react";

const Links = function () {
  return (
    <div class="flex justify-center m-3">
      <div class="block">
        <div class="flex justify-center m-3">
          <h3 class="text-3xl">Demo</h3>
        </div>
        <div class="flex justify-center m-3">
          <div class="flex-1 m-1">
            <a
              class="text-2xl md:hover:underline"
              href="https://react18.ultrajs.dev"
              target="_blank"
            >
              React 18
            </a>
          </div>
          <div class="flex-2 m-1">
            <a
              class="text-2xl md:hover:underline"
              href="https://threejs.ultrajs.dev/"
              target="_blank"
            >
              Threejs, react, no build, no bundle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
