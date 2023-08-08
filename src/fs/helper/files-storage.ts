/* eslint-disable prefer-const */
import { diskStorage } from 'multer';
// import path = require('path');
import Generator from '../../function/Generator';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs-extra');

export const writeFileToStorage = {
  storage: diskStorage({
    destination: async (_req, file, cb) => {
        console.log(file, 'FILE++++');
        
      let d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      const dir = `./public/${process.env.STORAGE_NAME}/${year}/${month}/${day}`;
      fs.mkdirsSync(dir);
      cb(null, dir);
    },
    filename: async (_req, _file, cb) => {
      // const fileExtension: string = path.extname(file.originalname);
      const generatedName = await Generator.generate(32);
      // const fileName: string = 'img_' + generatedName + fileExtension;
      const fileName: string = generatedName;
      cb(null, fileName);
    },
  }),
};
