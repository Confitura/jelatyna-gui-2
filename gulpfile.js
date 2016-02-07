var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('copy', function () {
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('dist/app'));
});
gulp.task('compile', function () {
    return gulp.src("app/**/*.ts")
        .pipe(ts({
            "target": "ES5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }))
        .pipe(gulp.dest("dist/app"))
});



gulp.task('build', ['compile', 'copy']);
gulp.task('watch', ['build'], function () {
    gulp.watch(['app/**/*.ts'], ['compile']);
    gulp.watch(['app/**/*.html'], ['copy']);
});