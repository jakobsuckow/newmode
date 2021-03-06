const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-template-js": hot(preferDefault(require("/Users/jakobsuckow/CODE/newmode/src/templates/postTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jakobsuckow/CODE/newmode/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jakobsuckow/CODE/newmode/src/pages/index.js")))
}

