"user strict";
var request=require("superagent");
var cheerio=require("cheerio");
var token={
    getToken:function(config){
        return new Promise((resolve,reject)=>{
            request.get(config.url)
                .set(config.headers)
                .end((err,res)=>{
                    if (err || !res.ok) {
                        reject("token"+err);
                    } else {
                        var $=cheerio.load(res.text);
                        var tokenScript=$('script[id="loginModal"]').next().html();
                        if(!tokenScript){
                            reject("get token err");
                        }
                        var buildToken=new Function("var window={};"+tokenScript+";return window");
                        var token={_id:buildToken().SF.token};
                        console.log(token);
                        resolve(token);
                    }
                })
        });
    }
}
module.exports=token;