module.exports = async function (eleventyConfig) {
  const { EleventyI18nPlugin } = await import("@11ty/eleventy");

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/_redirects");
  eleventyConfig.addPassthroughCopy("src/js/main.js");
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
