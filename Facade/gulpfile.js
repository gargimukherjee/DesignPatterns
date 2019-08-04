var gulp = require("gulp");
var browserSync = require('browser-sync');
var browserify = require("browserify");
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
var paths = {
    pages: ['src/*.html']
};

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));




gulp.task("index", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});


gulp.task("bundle", ["index"], function(){
    return watchedBrowserify
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest("dist"));
})

gulp.task('watch', ['bundle'], function()
{
    var watcher = gulp.watch('./src/**/*', ['refresh']);
    watcher.on('change', function(event)
    {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

// Static server
gulp.task('browser-sync', ['watch'], function()
{
    return browserSync({ server:  { baseDir: './dist' } });
});

gulp.task("default", ["browser-sync"]);

gulp.task('refresh', ['bundle'], browserSync.reload);





