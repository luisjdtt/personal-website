module.exports = function (eleventyConfig) {

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
      layouts: "_layouts",
    },
  };
};
