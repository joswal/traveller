const gulp = require("gulp"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    simplevars = require("postcss-simple-vars"),
    nested = require("postcss-nested"),
    cssimport = require("postcss-import"),
    watch = require("gulp-watch"),
    browserSync = require("browser-Sync").create();

gulp.task("css", () => {
    return gulp
        .src("./app/assets/css/style.css")
        .pipe(postcss([cssimport, simplevars, nested, autoprefixer]))
        .on("error", (errorInfo) => {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest("./app/temp/css/"));
});

gulp.task("cssInject", ["css"], () => {
    return gulp
        .src("./app/temp/css/")
        .pipe(browserSync.stream());
});