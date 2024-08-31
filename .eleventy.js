const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/_redirects");
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "en",
    // languages: ["en", "es"],
  });

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
