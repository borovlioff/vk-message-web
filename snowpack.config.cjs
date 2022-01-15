// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

const sveltePreprocess =  require('svelte-preprocess');

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports =  {
  env: {
    SNOWPACK_PUBLIC_API_URL: 'http://localhost:3000',
  },
  mount: {
  },
  //exclude: ['**/node_modules/**/*', '**/package-lock.json', '**/package.json', '**/snowpack.config.js', '**/tsconfig.json'],
  plugins: [
    ['@snowpack/plugin-typescript',  { args: "--project ./tsconfig.json" } ],
    ['@snowpack/plugin-svelte', { preprocess: sveltePreprocess() }],
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
 
  },
};
