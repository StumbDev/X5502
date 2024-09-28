const gulp = require('gulp');
const ts = require('gulp-typescript');
const coffee = require('gulp-coffee');
const { exec } = require('child_process');

// Compile TypeScript
gulp.task('typescript', function () {
  return gulp.src('src/**/*.ts')
    .pipe(ts({ noImplicitAny: true }))
    .pipe(gulp.dest('dist'));
});

// Compile CoffeeScript
gulp.task('coffee', function () {
  return gulp.src('src/**/*.coffee')
    .pipe(coffee({ bare: true }))
    .pipe(gulp.dest('dist'));
});

// Helper function to run pkg with different targets
function buildExecutable(target, output, done) {
  exec(`pkg . --targets ${target} --output executables/${output}`, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
}

// Windows builds
gulp.task('pkg-windows-x64', function (done) {
  buildExecutable('node16-win-x64', 'x5502-win-x64.exe', done);
});
gulp.task('pkg-windows-arm64', function (done) {
  buildExecutable('node16-win-arm64', 'x5502-win-arm64.exe', done);
});
gulp.task('pkg-windows-x86', function (done) {
  buildExecutable('node16-win-x86', 'x5502-win-x86.exe', done);
});

// Linux builds
gulp.task('pkg-linux-x64', function (done) {
  buildExecutable('node16-linux-x64', 'x5502-linux-x64', done);
});
gulp.task('pkg-linux-arm64', function (done) {
  buildExecutable('node16-linux-arm64', 'x5502-linux-arm64', done);
});
gulp.task('pkg-linux-armv7', function (done) {
  buildExecutable('node16-linux-armv7', 'x5502-linux-armv7', done);
});

// MacOS builds
gulp.task('pkg-mac-x64', function (done) {
  buildExecutable('node16-macos-x64', 'x5502-macos-x64', done);
});
gulp.task('pkg-mac-arm64', function (done) {
  buildExecutable('node16-macos-arm64', 'x5502-macos-arm64', done);
});

// Task to create executables for all platforms and architectures
gulp.task('pkg-all', gulp.series(
  // Windows
  'pkg-windows-x64',
  'pkg-windows-arm64',
  'pkg-windows-x86',
  // Linux
  'pkg-linux-x64',
  'pkg-linux-arm64',
  'pkg-linux-armv7',
  // MacOS
  'pkg-mac-x64',
  'pkg-mac-arm64'
));

// Default task: compile and build executables for all architectures
gulp.task('default', gulp.series('typescript', 'coffee', 'pkg-all'));
