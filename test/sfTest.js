"use strict";
var sf = require("../src/sf/doPost");
var http=require("http");
var query = require("querystring");
var config = {
    writeUrl: "https://segmentfault.com/write",
    postUrl:"https://segmentfault.com/api/articles/add",
    tokenHeaders: {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "AcceptEncoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
        "Cache-Control": "max-age=0",
        "Cookie": "Hm_lvt_e23800c454aa573c0ccb16b52665ac26=1480042218,1480049341,1480050350,1480056908; sf_remember=585ebc30c1ae3b05a4633c777219f2f4; __jsluid=ee6b8a36e03924b1a60b54e683709183; Hm_lpvt_e23800c454aa573c0ccb16b52665ac26=1480057545; PHPSESSID =web6~ro0cd50592ceiqp65isfimid26",
        "Host": "segmentfault.com",
        "Referer": "https://segmentfault.com/",
        "Upgrade-Insecure-Requests": 1,
        "User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:49.0) Gecko/20100101 Firefox/49.0"
    },
    postHeaders: {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "AcceptEncoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
        "Cookie": "Hm_lvt_e23800c454aa573c0ccb16b52665ac26=1480042218,1480049341,1480050350,1480056908; sf_remember=585ebc30c1ae3b05a4633c777219f2f4; __jsluid=ee6b8a36e03924b1a60b54e683709183; Hm_lpvt_e23800c454aa573c0ccb16b52665ac26=1480057545; PHPSESSID =web6~ro0cd50592ceiqp65isfimid26",
        "Host": "segmentfault.com",
        "Referer": "https://segmentfault.com/write",
        "Upgrade-Insecure-Requests": 1,
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:49.0) Gecko/20100101 Firefox/49.0"
    },
    data:{
        title:"后端自动添加21212",
        text:"本文章由工具自动发布",
        blogId:1200000006808837,
        tags:[1040000000089436,1040000000089434],

    }

}
/*sf.doPost(config).then(data=> {
    //console.log(data);
}).catch(ex=> {
    //console.log(ex);
});*/
var server=new http.Server();
server.on('request', function(req, res){
    if(req.method=="POST"){
        var postdata = "";
        req.addListener("data",function(postchunk){
            postdata += postchunk;
        })

        //POST结束输出结果
        req.addListener("end",function(){
            var params = query.parse(postdata);
            console.log(params);
        })
    }
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end(JSON.stringify({result:1}));
});
server.listen(3000, function(){
    console.log('在端口3000启动了服务器');
});
