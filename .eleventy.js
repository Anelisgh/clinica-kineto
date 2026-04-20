const { HtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  // Passthrough Copy
  eleventyConfig.addPassthroughCopy("src/assets");

  // Plugins
  eleventyConfig.addPlugin(HtmlBasePlugin);

  return {
    pathPrefix: "/clinica-kineto/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
