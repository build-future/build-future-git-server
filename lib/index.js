/**
 * Created by samuel on 2016/9/4.
 */



import { GitManager } from './GitManager.js';

import AppConfig from './config/AppConfig.js';

import * as Path from 'path';


function startServer() {

    console.log('Git Server Started !');

    // console.log(process.argv);

    let git_root = AppConfig.config.git_root;

    console.log(Path.resolve('.',git_root));

    let gm = new GitManager(Path.resolve('.',git_root));

    gm.listRepositories();

}


startServer();