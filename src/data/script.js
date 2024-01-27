const fs = require('fs');
const path = require('path');

const createMap = (destPath, createPath) => {
  let dirObj = {};
  function inspectionFindFile(destPath) {
    try {
      fs.readdirSync(destPath, { withFileTypes: true }).forEach((file) => {
        const newPath = `${destPath}/${file.name}`;

        if (file.isDirectory()) {
          inspectionFindFile(newPath);
        } else {
          const parentDirname = path.basename(path.dirname(newPath));
          const key = `${parentDirname}/${file.name.split('.')[0]}`;
          const value = newPath.substring(9);
          dirObj[key] = value;
        }
      });
    } catch (err) {
      return console.error('Read Error', err);
    }
  }
  inspectionFindFile(destPath);

  fs.writeFile(createPath, JSON.stringify(dirObj), function (err) {
    console.log(`${createPath} 생성완료`);
  });
};

const iconDir = './public/assets/img/icon';
const illustDir = './public/assets/img/illust';

createMap(iconDir, './src/data/iconMap.json');
createMap(illustDir, './src/data/illustMap.json');
