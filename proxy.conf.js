const proxy = [
  {
    context: "/api",
    target: "https://www.festicket.com",
    pathRewrite: { "^/api": "/api" }
  }
];
module.exports = proxy;
