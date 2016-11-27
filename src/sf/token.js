"user strict";
var request=require("superagent");
var cheerio=require("cheerio");
var token={
    getToken:function(config){
        return new Promise((resolve,reject)=>{
            request.get(config.writeUrl)
                .set(config.tokenHeaders)
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
                        var token={_:buildToken().SF.token};
                        //console.log(token);
                        resolve(token);
                    }
                })
        });
    }
}
module.exports=token;