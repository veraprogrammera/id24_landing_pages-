module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy("assets/");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};