module.exports = function (eleventyConfig) {
  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  eleventyConfig.setLibrary("md", markdownIt(options).disable(["code"]));

  eleventyConfig.addNunjucksFilter("findBySlug", function (arr, slug) {
    const post = arr.find(({ fileSlug }) => fileSlug === slug);
    return post;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["md", "html", "njk"],
  };
};
