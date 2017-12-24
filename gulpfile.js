const gulp = require('gulp');
const ts = require('gulp-typescript');

gulp.task('typescript', () => {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            outDir: 'dist',
            sourceMap: true,
            noImplicitAny: false
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('html', () => {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['typescript', 'html']);