"use strict";
var token=require("./token");
var post=require("./post");
var config=require("./config");
var sf={
    postBlog:function(postData){
        config.postHeaders.Cookie=postData.cookie;
        config.tokenHeaders.Cookie=postData.cookie;
        config.data=postData.data;
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
