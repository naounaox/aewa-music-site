/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {
      stage: 0, // これにより最新の CSS 機能がサポートされます
    },
  },
};

export default config;
