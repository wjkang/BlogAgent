"use strict";
var request=require("superagent");
var cookie= {
    getCookie: function (data) {
        return new Promise((resolve, reject)=> {
            request.post("https://passport.cnblogs.com/user/signin")
                .set({
                    "Host": "passport.cnblogs.com",
                    "Connection": "keep-alive",
                    "Accept": "application/json, text/javascript, */*; q=0.01",
                    "Origin": "https://passport.cnblogs.com",
                    "X-Requested-With": "XMLHttpRequest",
                    "VerificationToken": data.token,
                    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36",
                    "Content-Type": "application/json; charset=UTF-8",
                    "Referer": "https://passport.cnblogs.com/user/signin",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "zh-CN,zh;q=0.8",
                    "Cookie": "AspxAutoDetectCookieSupport=1; SERVERID=9ffd301069c1081a14d128e0c97deda8|1482239649|1482239645"
                })
                .send({
                    "input1": data.name,
                    "input2": data.pwd,
                    "remember": false
                })
                .end((err, res)=> {
                    if (err || !res.ok) {
                        reject("get cookie err:" + err);
                    } else {
                        var headers=res.headers;
                        var cookie=headers["set-cookie"];
                        var cookieStr=cookie[0].match(/(.*); domain/)[1]+"; ";
                        cookieStr+=cookie[1].match(/(.*); domain/)[1];
                        resolve(cookieStr);
                    }
                });
        });
    }
}
module.exports=cookie;
