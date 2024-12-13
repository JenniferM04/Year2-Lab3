module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");

  eleventyConfig.addWatchTarget(".src/css/");

  eleventyConfig.on("eleventy.before", async ({ dir, runMode, outputMode }) => {
      // Run me before the build starts
  });
  return {
      dir: {
          output: "dist",
          input: "content"
      }
  }
}
module.exports = function(eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
      callbacks: {
        ready: function(err, bs) {
          const content404 = fs.readFileSync('_site/404.html');
          bs.addMiddleware('*', (req, res) => {
            res.write(content404);
            res.end();
          });
        }
      }
    });
  };
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src");
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("posts", (collection) =>
    collection.getFilteredByGlob("./content/posts/*.md").sort((a, b) => b.date - a.date)
  );

  return {
    dir: {
      input: "content",
      output: "dist"
    }
  };
};

module.exports = function (eleventyConfig) {
  // Add a collection for blog posts sorted by date
  eleventyConfig.addCollection("posts", (collection) => {
    return collection
      .getFilteredByGlob("./content/posts/*.md") // Adjust path if needed
      .sort((a, b) => b.date - a.date); // Sort posts by date, newest first
  });

  return {
    dir: {
      input: "content",
      output: "dist"
    }
  };
};

module.exports = function (eleventyConfig) {
  // Add your collections here
  eleventyConfig.addCollection("techPosts", (collection) => {
    return collection
      .getFilteredByGlob("./content/posts/*.md") // Adjust path if needed
      .filter((item) => item.data.category === "Technology");
  });

  // Return the configuration object
  return {
    dir: {
      input: "content", // Input folder
      output: "dist"    // Output folder
    }
  };
};