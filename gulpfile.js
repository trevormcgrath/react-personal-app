var elixir = require('laravel-elixir');
// Require the module.
var gulpRequireTasks = require('gulp-require-tasks');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');
});

// Call it when neccesary.
gulpRequireTasks({
    // Pass any options to it. Please see below.
    path: __dirname + '/tasks/'

});
