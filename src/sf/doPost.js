"use strict";
var token=require("./token");
var post=require("./post");
var sf={
    doPost:function(config){
       return new Promise((resolve,reject)=>{
           token.getToken(config)
               .then(data=>{
                  return post.post(config,data);
               }).then(data=>{
                  resolve(data);
               }).catch(ex=>{
                  reject(ex);
               });
       })
    }
}
module.exports=sf;
