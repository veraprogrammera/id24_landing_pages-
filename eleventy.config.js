module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");

  return {
    dir: {
      input: ".",
      includes: "src/_includes",
      output: "_site"
    }
  };
};