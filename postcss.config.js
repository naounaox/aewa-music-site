module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {
      stage: 0, // これにより最新の CSS 機能がサポートされます
    },
  },
};
