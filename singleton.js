let i = 0;
let singleton = {};

class Singleton{
    constructor (config){
        if (singleton[config.prop]) return singleton[config.prop];
        if (!(this instanceof Singleton)) return singleton[config.prop] = new Singleton(config);
        this.prop = config.prop;
        this.counter = ++i;
        singleton[config.prop] = this;
    }
}
module.exports = Singleton;