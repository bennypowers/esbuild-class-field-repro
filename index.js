import esbuild from 'esbuild'

await esbuild.build({
  format: 'esm',
  target: 'es2022',
  ts: true,
  entryPoints: ['element.ts']
})
