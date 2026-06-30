import { defineConfig } from "vitest/config";

// Unit tests for the wrapper's public-API logic (module forRoot/fcRoot, service, pipe).
// Pure logic — no TestBed/templates — so plain vitest + esbuild is sufficient and avoids
// pulling karma/jasmine (which would reintroduce vulnerabilities, see GATE 5).
export default defineConfig({
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        experimentalDecorators: true,
        useDefineForClassFields: false,
      },
    },
  },
  test: {
    globals: true,
    environment: "node",
    include: ["projects/angular-fusioncharts/src/**/*.spec.ts"],
  },
});
