require('fs').readdirSync(__dirname + '/').forEach(function (file) {
    if ((is_dir(file) || file.match(/\.js$/) !== null) && file !== 'index.js') {
        var name = file.replace('.js', '');
        exports[name] = require('./' + file);
    }
});


function is_dir(path) {
    try {
        var stat = fs.lstatSync(path);
        return stat.isDirectory();
    } catch (e) {
        // lstatSync throws an error if path doesn't exist
        return false;
    }
}
