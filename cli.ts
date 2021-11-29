import { render } from "https://deno.land/x/mustache/mod.ts";

let appName = "";
while (true) {
  const tmp = prompt("App name?");
  if (!tmp) continue;
  if (tmp.length > 0) {
    appName = tmp;
    break;
  }
}

const download = async (path: string) => {
  const res = await fetch(path);
  const body = new Uint8Array(await res.arrayBuffer());
  return new TextDecoder().decode(body);
};

const makefile = await download(
  "https://cdn.deno.land/ultra/versions/v0.6/raw/examples/boilerplate/makefile"
);
const importmap = await download(
  "https://cdn.deno.land/ultra/versions/v0.6/raw/examples/boilerplate/importmap.json"
);
const server = await download(
  "https://cdn.deno.land/ultra/versions/v0.6/raw/examples/boilerplate/server.js"
);
const app = await download(
  "https://cdn.deno.land/ultra_init/versions/0.0.6/raw/template/app.jsx"
);

const demo = await download(
  "https://cdn.deno.land/ultra_init/versions/0.0.6/raw/template/components/demo.jsx"
);
const links = await download(
  "https://cdn.deno.land/ultra_init/versions/0.0.6/raw/template/components/links.jsx"
);
const repositry = await download(
  "https://cdn.deno.land/ultra_init/versions/0.0.6/raw/template/components/repositry.jsx"
);

Deno.mkdirSync(appName);
Deno.writeTextFileSync(`${appName}/makefile`, makefile);
Deno.writeTextFileSync(`${appName}/importmap.json`, importmap);
Deno.writeTextFileSync(`${appName}/server.js`, server);
Deno.mkdirSync(`${appName}/src`);
Deno.mkdirSync(`${appName}/src/components`);
const renderdApp = `${app}`.replace(/{{appName}}/g, appName);
Deno.writeTextFileSync(`${appName}/src/app.jsx`, renderdApp);
Deno.writeTextFileSync(`${appName}/src/components/demo.jsx`, demo);
Deno.writeTextFileSync(`${appName}/src/components/links.jsx`, links);
Deno.writeTextFileSync(`${appName}/src/components/repositry.jsx`, repositry);
