// Utility to unwrap .default from ESM/CommonJS interop
export function getModuleFn(mod) {
    return (mod && typeof mod === 'object' && mod.default) ? mod.default : mod;
}
//# sourceMappingURL=getModuleFn.js.map