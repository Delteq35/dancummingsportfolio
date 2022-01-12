module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  // eleventyConfig.addPassthroughCopy("./src/img");
  // eleventyConfig.addPassthroughCopy({ "**/*.jpg": "img" });
  // eleventyConfig.addPassthroughCopy({ "**/*.png": "img" });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

