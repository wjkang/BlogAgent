"user strict";
var axios=require("axios");
var token={
    getToken:function(config){
        return new Promise((resolve,reject)=>{
            axios.get(config.url,{
                handlers:config.headers,
                proxy:config.proxy,
                responseType:"text"
            }).then(response=>{
                 var data=response.data;
                console.log(response);
                resolve(data);
            }).catch(ex=>{
                reject("token"+ex);
            })
        });
    }
}
module.exports=token;