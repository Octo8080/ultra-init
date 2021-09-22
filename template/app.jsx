import { Helmet } from "helmet";
import React from "react";

const Ultra = () => {
  return (
    <div class="justify-center">
      <Helmet>
        <title>ULTRA - {{appName}}</title>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
      </Helmet>
      <main>
        <div class="flex justify-center m-3">
          <h1 class="text-4xl">{{appName}}</h1>
        </div>
        <div class="flex justify-center m-3">
          <img
            src="https://dweb.link/ipfs/bafkreiah6lyqltjzmqaggn3iang6sip7tnbotvxyqeg6zgrem6wqniegfm"
            class="inset-0 bg-gray-100"
          />
        </div>

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
                  Three.js x React
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Ultra;
