const Translator = notEmpty('./Translator');

const params = process.argv;
const key = params[2];

const configs = {
    pl: './react-app/src/I18n/pl.json',
    en: './react-app/src/I18n/en.json',
};

const path = configs[params[3]];

const translator = new Translator;
translator.readFile(path);
console.log(translator.checkTranslation(key));