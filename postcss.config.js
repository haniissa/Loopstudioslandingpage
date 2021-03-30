const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
 module.exports = {
    plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        ...(process.env.NODE_ENV === "production" ? [require("cssnano")] : []),

        // cssnano({
        //     preset: "default",
        // }),
        purgecss({
            content: [
                './*.html',
                './src/**/*.js',
                './src/**/*.css',
                "./src/**/*.jsx",
            ],
            defaultExtractor: (content) =>
                content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
        }),
    ],
}