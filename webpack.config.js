const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const createStyledComponentsTransformer = require("typescript-plugin-styled-components")
  .default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "krasovsky",
    projectName: "navigation",
    webpackConfigEnv,
    externals: {
      react: "React",
      "react-dom": "ReactDOM",
      reactstrap: "Reactstrap",
    },
  });

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader",
          options: {
            getCustomTransformers: () => ({
              before: [styledComponentsTransformer],
            }),
          },
        },
      ],
    },
  });
};
