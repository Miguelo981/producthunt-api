import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm");

await build({
  entryPoints: ["./index.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  importMap: 'deno.json',
  package: {
    name: "producthunt-api",
    version: Deno.args[0],
    description: "Unofficial producthunt API wrapper for Nodejs and Deno.",
    keywords: ['api', 'nodejs', 'producthunt', 'mrbeast', 'deno', 'producthunt-api'],
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/Miguelo981/producthunt-api.git",
    },
    bugs: {
      url: "https://github.com/Miguelo981/producthunt-api/issues",
    },
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});