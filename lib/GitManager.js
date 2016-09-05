/**
 * Created by samuel on 2016/8/24.
 */


import fs from  'fs';


export class GitManager{

    constructor(git_root){
        this.git_root = git_root;
    }


    listRepositories(){

        fs.readdir(this.git_root,function (err,files) {

            if(err){
                console.error(err.message);
            }

            files.forEach(function(item,index,arr){
                console.log(item + ' has been scanned!');
            });

        });

    }



}