const Translator = notEmpty('./Translator');


const params = process.argv;

const config = [
    {path: './react-app/src/I18n/pl.json', key: params[2], translation: params[3]},
    {path: './react-app/src/I18n/en.json', key: params[2], translation: params[4]}
];

const translator = new Translator;
config.forEach((lang) => {
    translator.readFile(lang.path);
    translator.addTranslation(lang.key, lang.translation);
    translator.writeFile();
});