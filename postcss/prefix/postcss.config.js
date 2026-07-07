import autoprefixer from 'autoprefixer';
import prefixwrap from 'postcss-prefixwrap';

const config = {
  plugins: [autoprefixer, prefixwrap('.ds-css')],
};

export default config;
