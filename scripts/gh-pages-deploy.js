const projectName = 'portfoliov1';
const execa = require('execa');
const fs = require('fs');


const replaces = [
  {
    file: './src/router.js',
    find: "mode: 'history'",
    replace: "mode: 'hash'",
  },
  {
    file: './vue.config.js',
    find: "publicPath: '/'",
    replace: `publicPath: '/${projectName}/'`,
  },
];

(async () => {
  try {

    replaces.forEach(({ file, find, replace }) => {
      fs.readFile(file, function (err, data) {
        if (err) throw err;
        const regex = new RegExp(find, 'gm');
        data = data.toString();
        data = data.replace(regex, replace);
        fs.writeFile(file, data, function (err) {
          err;
        });
      });
    })

    await execa('git', ['checkout', '--orphan', 'gh-pages']);

    console.log('Building started...');
    await execa('npm', ['run', 'build']);

    const folderName = fs.existsSync('dist') ? 'dist' : 'build';
    await execa('git', ['--work-tree', folderName, 'add', '--all']);
    await execa('git', ['--work-tree', folderName, 'commit', '-m', 'gh-pages']);
    console.log('Pushing to gh-pages...');
    await execa('git', ['push', 'origin', 'HEAD:gh-pages', '--force']);
    await execa('rm', ['-r', folderName]);
    await execa('git', ['checkout', '-f', 'master']);
    await execa('git', ['branch', '-D', 'gh-pages']);

    replaces.forEach(({ file, find, replace }) => {
      fs.readFile(file, function (err, data) {
        if (err) throw err;
        const regex = new RegExp(replace, 'gm');
        data = data.toString();
        data = data.replace(regex, find);
        fs.writeFile(file, data, function (err) {
          err;
        });
      });
    })

    console.log('Successfully deployed, check your settings');
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();