// Utility to unwrap .default from ESM/CommonJS interop
export function getModuleFn(mod: any) {
  return (mod && typeof mod === 'object' && mod.default) ? mod.default : mod;
}
