/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  externalDir: true,
  webpack: (config) => {
    config.module.rules.forEach((rule) => {
      if (
        rule.test && rule.test.toString().includes('tsx|ts')
      ) {
        rule.include = [
          ...rule.include,
          require('path').join(__dirname, '../shared'), //sharedディレクトリもトランスパイルの対象にする
        ];
      }
    });
    return config
  },
}
