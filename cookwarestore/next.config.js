// module.exports = {
//   webpack: (config) => {
//     config.experiments = { topLevelAwait: true };
//     return config;
//   },
// };
module.exports = {
  webpack: (config, options) => {
    config.experiments = {
      topLevelAwait: true,
    };
    return config;
  },
};
