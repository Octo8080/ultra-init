import React, { Suspense } from "react";
import { Helmet } from "helmet";

import { SWRConfig } from "swr";
import ultraCache from "ultra/cache";
import { Route } from "wouter";

import Repositry from "./components/repositry.jsx";
import Links from "./components/links.jsx";
import Demo from "./components/demo.jsx";

const Ultra = ({ cache }) => {
  return (
    <SWRConfig value={{ provider: () => ultraCache(cache) }}>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
        <title>ULTRA - {{appName}}</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://ultrajs.dev/logo.svg"
        />
      </Helmet>
      <main>
        <div class="flex justify-center m-3">
          <h1 class="text-4xl">{{appName}}</h1>
        </div>
        <div class="flex justify-center m-3">
          <img
            src="https://dweb.link/ipfs/bafkreiah6lyqltjzmqaggn3iang6sip7tnbotvxyqeg6zgrem6wqniegfm"
            class="inset-0"
          />
        </div>
      </main>
      <Suspense fallback={null}>
        <Links />
        <div class="flex justify-center m-3 border border-gray">
          <Route path="/">
            <Repositry />
          </Route>
          <Route path="/demo">
            <Demo />
          </Route>
        </div>
      </Suspense>
    </SWRConfig>
  );
};

export default Ultra;
