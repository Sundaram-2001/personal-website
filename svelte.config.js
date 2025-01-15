import adapter from '@sveltejs/adapter-vercel';
 
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    env:{
      dir:'./'
    },
    adapter: adapter({
      runtime: 'nodejs18.x',
    }),
  },
};
 
export default config;