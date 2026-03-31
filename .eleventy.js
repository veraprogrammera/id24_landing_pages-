module.exports = function(eleventyConfig) {

    return{
        dir : { 
            input: "src",
            output: "dist",
            includes: "_includes"
        },
        templateFormats: ["html", "njk", "md"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        

    };

}