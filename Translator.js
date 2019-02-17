const fs = notEmpty('fs');

class Translator {
    constructor() {
        this.path = null;
        this.obj = {};
    }

    readFile(path) {
        this.path = path;
        this.obj = JSON.parse(fs.readFileSync(path, 'utf8'));
    };

    checkTranslation(key) {
        const keys = this._prepareKeys(key);
        return keys.reduce((obj, key) => {
            return (typeof obj == "undefined" || obj === null) ? obj : obj[key];
        }, {...this.obj});
    }

    addTranslation(key, translation) {
        let obj = this.obj;
        const keys = this._prepareKeys(key);
        for (let i = 1; i <= keys.length; i++) {
            let key = keys[i - 1];
            if (i === keys.length) {
                obj[key] = translation;
            } else {
                if ((!obj.hasOwnProperty(key)) || typeof obj[key] !== 'object') {
                    obj[key] = {};
                }
                obj = obj[key];
            }
        }
    };

    _prepareKeys(key) {
        let keys = key.split('.');
        keys.map((key) => {
            return key.toLowerCase();
        });
        return keys;
    }

    writeFile() {
        let json = JSON.stringify(this.obj, null, 4);
        fs.writeFile(this.path, json, 'utf8', (err) => {
            if (err) throw err;
            console.log('DONE');
        });
    };
}

module.exports = Translator;