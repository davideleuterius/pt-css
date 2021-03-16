const gulp   = require( 'gulp' );
const less   = require( 'gulp-less' );
const prefix = require( 'gulp-autoprefixer' );
const cssmin = require( 'gulp-cssmin');
const concat = require( 'gulp-concat' );


gulp.task('css', function() {
  var srcfile = './styles/style.less';
  return gulp.src(srcfile)
    .pipe(less().on('error', function(err) {
    console.log(err);
    }))
    .pipe(prefix())
    /*
    .pipe(cssmin().on('error', function(err) {
      console.log(err);
    }))
    */
    .pipe(gulp.dest('./css'));
});


gulp.task("watch", function() {
  gulp.watch('./styles/**/*.less', gulp.parallel('css'));
});
