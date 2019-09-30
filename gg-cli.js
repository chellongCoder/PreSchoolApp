#!/usr/bin/env node
const fs = require('fs-extra');
const chalk = require('chalk');
const ejs = require('ejs');
const ignoreFiles = ['.DS_Store'];
const argv = require('yargs')
.usage('Usage: $0 <command> [options]')
.command('create', 'Create Component / Screen / ...', yargs => {
}).argv
function createComponent(name) {
    createFromTemplate('components', name);
    const exportCmd = `\nexport { default as ${name} } from './${name}';`;
    fs.appendFileSync('./src/components/index.tsx', exportCmd);    
    console.log(chalk.blue('\t*. ') + ' Export component ' + chalk.yellow(`./src/components/index.tsx`));
}
function createScreen(name) {
    createFromTemplate('screens', name);
}
function createFromTemplate(nameType, name) {
    const path = `./src/${nameType}/${name}`;
    fs.mkdirSync(path);
    console.log(chalk.blue('\t*. ') + ' Create folder    ' + chalk.yellow(`./src/${nameType}/${name}`));

    fs.readdir(`./templates/${nameType}`, (err, items) => {
        if (err) reject(err);
        items.forEach(element => {
            const fileName = element.replace('.template', '');
            const data = String(fs.readFileSync(`./templates/${nameType}/${element}`));
            fs.writeFileSync(`${path}/${fileName}`, ejs.render(data, {'name': name}));
            console.log(chalk.blue('\t*. ') + ' Write file       ' + chalk.yellow(`${path}/${fileName}`));
        });
    });
}
function generateIcon() {
    const utilIconPath = './src/utils/icons.ts';
    fs.readdir(`./assets/icons`, (err, items) => {
        let writeStream = fs.createWriteStream(utilIconPath);
        items.forEach(element => {
            const ic_name = 'IC_' + element.replace(/-icon.*/g , '').toUpperCase();
            writeStream.write(`export const ${ic_name} = require('../../assets/icons/${element}');\n`);
            console.log(chalk.green('\t*.') + ' Export   ' + chalk.yellow(`${element}`));
        });
        writeStream.end();
    });
}
function generateImage() {
    const utilIconPath = './src/utils/images.ts';
    fs.readdir(`./assets`, (err, items) => {
        let writeStream = fs.createWriteStream(utilIconPath);
        items.forEach(element => {
            if (fs.lstatSync(`./assets/${element}`).isFile() && ignoreFiles.indexOf(element) < 0) {
                const img_name = 'IMG_' + element.replace(/\.(png|jpeg|jpg)/g , '').toUpperCase();
                writeStream.write(`export const ${img_name} = require('../../assets/${element}');\n`);
                console.log(chalk.green('\t*.') + ' Export   ' + chalk.yellow(`${element}`));
            }
        });
        writeStream.end();
    });
}

const params = argv._;
if (params[0] == 'create') {
    if (params[1] == 'component') {
        createComponent(params[2]);
    }
    if (params[1] == 'screen') {
        createScreen(params[2]);
    }
} else if (params[0] == 'generate') {
    if (params[1] == 'icon') {
        generateIcon();
    }
    else if (params[1] == 'image') {
        generateImage();
    }
    else if (params[1] == 'assets') {
        generateIcon();
        generateImage();
    }
} else {
    console.log('command not valid');
}