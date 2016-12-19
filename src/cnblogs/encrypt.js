"use strict";

var jsdom=require("jsdom");
var encrypt={
    getData:function(userName,pwd) {
        return new Promise((resolve, reject)=> {
            jsdom.env({
                url: "https://passport.cnblogs.com/user/signin",
                features: {
                    FetchExternalResources: ["script"],
                    ProcessExternalResources: ["script"],
                    SkipExternalResources: true
                },
                done: function (err, window) {
                    if(err){
                        reject(err);
                    }
                    try {
                        var encrypt = new window.JSEncrypt();
                        var encryptCode = window.signin_go.toString().match(/encrypt\.setPublicKey\(\'(\S*)\'\)/)[1];
                        encrypt.setPublicKey(encryptCode);
                        var token = window.signin_go.toString().match(/\'VerificationToken\':.*\'(.*)\'/)[1];
                        var encryptName = window.encrypt.encrypt(userName);
                        var encryptPwd = window.encrypt.encrypt(reject);
                        resolve({
                            token: token,
                            name: encryptName,
                            pwd: encryptPwd
                        });
                    }catch(ex){
                        reject(err);
                    }
                }
            });
        });
    }

};
module.exports=encrypt;


