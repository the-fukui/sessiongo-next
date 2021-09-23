const { build } = require('esbuild')

build({
  entryPoints: ['./src/index.ts'],
  outbase: './src',
  outdir: './dist',
  bundle: true,
  platform: 'node',
  plugins: [
    // alias({
    //   "@web": ["./src/web"],
    //   "@shared": ["./src/shared"],
    //   "@graphql": ["./src/graphql"]
    // })
  ]
})