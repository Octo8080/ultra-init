import React from "react";
import { Link } from "wouter";
const Links = function () {
  return (
    <div class="flex justify-center m-3">
      <div class="block">
        <div class="flex justify-center m-3">
          <div class="flex-1 m-1">
          <span class="text-2xl md:hover:underline"><Link href="/">Repositry</Link></span>
          </div>
          <div class="flex-2 m-1">
            <span class="text-2xl md:hover:underline"><Link href="/demo">Demo</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
