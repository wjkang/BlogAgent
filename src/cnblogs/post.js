"use strict";
var request=require("superagent");
var post={
    postBlog:function(data,cookieStr){
        return new Promise((resolve, reject)=> {
            request.post("https://i.cnblogs.com/EditPosts.aspx?opt=1 ")
                .set({
                    "Host": "i.cnblogs.com",
                    "Connection": "keep-alive",
                    "Cache-Control": "max-age=0",
                    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
                    "Origin": "https://i.cnblogs.com",
                    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Referer": "https://i.cnblogs.com/EditPosts.aspx?opt=1",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "zh-CN,zh;q=0.8",
                    "Cookie": "AspxAutoDetectCookieSupport=1; SERVERID=9ffd301069c1081a14d128e0c97deda8|1482239649|1482239645; "+cookieStr
                })
                .send(data)
                .end((err, res)=> {
                    if (err || !res.ok) {
                        reject("post blog err:" + err);
                    } else {
                        var headers=res.headers;
                        resolve(headers);
                    }
                });
        });
    }
};
module.exports=post;
