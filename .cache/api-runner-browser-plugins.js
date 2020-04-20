module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"defaultLayouts":{"default":"/Users/vassagovon/myProject/venv3/Github/BLOG/node_modules/@pauliescanlon/gatsby-theme-terminal/src/layouts/PageLayout.js"}},
    },{
      plugin: require('../node_modules/@pauliescanlon/gatsby-theme-terminal/gatsby-browser.js'),
      options: {"plugins":[],"source":["posts","projects"]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-151521286-1"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
