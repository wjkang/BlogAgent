"use strict";
var en=require("./encrypt");
var cookie=require("./cookie");
var post=require("./post");

var cnblogs={
    postBlog:function(blog,name,pwd) {
        return new Promise((resolve,reject)=>{
            en.getData(name,pwd)
                .then(cookie.getCookie)
                .then((data)=>{
                    return post.postBlog(blog,data);
                })
                .then(data=>resolve(data))
                .catch(ex=>reject(ex));
        });
    }
}
module.exports=cnblogs;
