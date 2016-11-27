"use strict";
var request=require("superagent");
var post={
    post:function(config,token){
        return new Promise((resolve,reject)=>{
            request.post(config.postUrl)
                .set(config.postHeaders)
                .send(config.data)
                .query(token)
                .end((err,res)=>{
                    if (err || !res.ok) {
                        reject("post"+err);
                    } else {
                        var data=res;
                        console.log(data.text);
                        resolve(data);
                    }
                })
        })
    }
}
module.exports=post;