"use strict";
var axios=require("axios");
var post={
    post:function(config,token){
        return new Promise((resolve,reject)=>{
            axios.post(config.url,{
                data:config.data,
                handlers:config.headers,
                params:token
            }).then(data=>{
                resolve(data);
            }).catch(ex=>{
                reject("post"+ex);
            })
        })
    }
}
module.exports=post;