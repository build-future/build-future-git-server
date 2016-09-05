/**
 * Created by samuel on 2016/9/4.
 */


import Global from '../Global.js';


import Path from 'path';

export default class AppConfig{


    static init(){

        var packageJsonObject = require(Global.packageConfig);

        let appConfigData = require(Path.resolve('.',packageJsonObject.configs['app.config']));

        AppConfig.config = appConfigData;

    }

}

AppConfig.init();