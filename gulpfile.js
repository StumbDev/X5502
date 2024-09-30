const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const exec = require('gulp-exec');
const path = require('path');
const babel = require('gulp-babel');

// Create a TypeScript project using tsconfig.json
const tsProject = ts.createProject('tsconfig.json');

// Task to compile TypeScript files



gulp.task('compile-ts', function () {
    return tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

// Task to copy package.json to dist directory
gulp.task('copy-package-json', function () {
    return gulp.src('package.json')
        .pipe(gulp.dest('dist'));
});

// Task to install dependencies in the dist directory
gulp.task('install-deps', function (done) {
    gulp.src('dist/package.json') // Target package.json in the dist directory
        .pipe(exec('npm install --production', {
            cwd: path.join(__dirname, 'dist')  // Change the working directory to the dist folder
        }))
        .pipe(exec.reporter());
    done();
});

// Task to create binaries using pkg
gulp.task('pkg', function (done) {
    const options = {
        continueOnError: false,
        pipeStdout: false,
    };

    gulp.src('./dist/index.js')  // Point to the main output JS file
        .pipe(exec('pkg ./dist/index.js --out-path ./bin -t node16-linux-x64,node16-win-x64,node16-mac-x64,node16-mac-arm64,node16-win-arm64,node16-linux-arm64', options))
        .pipe(exec.reporter());

    done();
});

// Watch for changes in TypeScript files
gulp.task('watch', function () {
    gulp.watch('src/**/*.ts', gulp.series('compile-ts', 'pkg'));
});

gulp.task('babel', function () {
    return gulp.src('dist/**/*.js') // Adjust the path as necessary
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});
// Default task (runs when you execute `gulp`)
gulp.task('default', gulp.series('compile-ts', 'copy-package-json', 'install-deps', 'pkg', 'babel', 'watch'));
