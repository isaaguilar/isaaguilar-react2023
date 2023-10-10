const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common.js")

module.exports = (envVars) => {
  let { env } = envVars
  if (env !== "prod") {
    env = "dev"
  }
  const envConfig = require(`./webpack.${env}.js`)
  const config = merge(commonConfig, envConfig)
  return config
}
