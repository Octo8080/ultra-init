import React from "react";

const Links = function () {
  return (
    <div class="flex justify-center m-3">
      <div class="block">
        <div class="flex justify-center m-3">
          <h3 class="text-3xl">Repositry</h3>
        </div>
        <div class="flex justify-center m-3">
          <a
            class="text-2xl md:hover:underline"
            href="https://github.com/exhibitionist-digital/ultra"
            target="_blank"
          >
            github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
