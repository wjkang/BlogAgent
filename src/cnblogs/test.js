/**
 * Created by Administrator on 2016/12/20.
 */

var en=require("./encrypt");
var cookie=require("./cookie");
var post=require("./post");

en.getData("usename","pwd")
    .then(cookie.getCookie)
    .then((data)=>{
        return post.postBlog({},data);
    })
    .then((data)=>console.log(data))
    .catch((ex)=>console.log(ex));