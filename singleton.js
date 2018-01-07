const pgp = require('pg-promise')();

//let db = pgp("postgres://petrsql:petrsql@localhost:5432/livedb");



let i = 0;
let singleton = {};

/**
 * @param {string}          config.dbName   имя базы данных
 * @param {string}          config.userName имя пользователя
 * @param {string}          config.password пароль
 * @param {string}          config.host     хост
 * @param {string|number}   config.port     порт
 */
class Singleton{
    constructor(config){
        if(!config || !config.dbName || !config.userName || !config.password || !config.host || !config.port) {
            if(!Object.keys(singleton).length) return console.error('singleton is empty');
            return singleton[Object.keys(singleton)[0]]
        }
        //if (singleton[config.prop]) return singleton[config.prop];
        if (!(this instanceof Singleton)) return singleton[config.dbName] = new Singleton(config);
        this.dbName = config.dbName;
        this.db = pgp(`postgres://${config.userName}:${config.password}@${config.host}:${config.port}/${config.dbName}`);

        this.counter = ++i;
        singleton[config.dbName] = this;
    };

    getList(){
        return this.dbName;
    }
}
module.exports = Singleton;