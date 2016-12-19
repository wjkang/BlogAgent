"use strict";
var request=require("superagent");
var cookie={
    getCookie:function(data){
        return new Promise((resolve,reject)=>{
                request.post("")
                    .set(config.postHeaders)
                    .send(config.data)
                    .end((err,res)=>{
                        if (err || !res.ok) {
                            reject("post"+err);
                        } else {
                            var data=res;
                            resolve(data);
                        }
                    });
        });
    }
}
