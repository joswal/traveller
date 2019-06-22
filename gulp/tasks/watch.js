const gulp = require("gulp"),
    watch = require("gulp-watch"),
    browserSync = require("browser-Sync").create();

gulp.task("watch", () => {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
    watch("./app/index.html", () => {
        gulp.start("html");
    });
    watch("./app/assets/css/**/*.css", () => {
        gulp.start("cssInject");
    });
});

gulp.task("html", () => browserSync.reload());