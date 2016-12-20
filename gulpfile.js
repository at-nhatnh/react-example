var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('jsx', function() {
  return gulp.src('js/demo.jsx')
    .pipe( react() )
    .pipe( gulp.dest('components'))
});
gulp.task('jsx', function() {
  return gulp.src(['js/layout/navigation_bar.jsx', 'js/layout/logo.jsx'])
    .pipe( react() )
    .pipe( gulp.dest('components/layout'))
});
