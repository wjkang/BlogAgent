/**
 * Created by Administrator on 2016/12/15.
 */
var config={
    writeUrl: "https://segmentfault.com/write",
    postUrl:"https://segmentfault.com/api/articles/add",
    tokenHeaders: {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "AcceptEncoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
        "Cache-Control": "max-age=0",
        "Host": "segmentfault.com",
        "Referer": "https://segmentfault.com/",
        "Upgrade-Insecure-Requests": 1,
        "User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:49.0) Gecko/20100101 Firefox/49.0"
    },
    postHeaders: {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "AcceptEncoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
        "Host": "segmentfault.com",
        "Referer": "https://segmentfault.com/write",
        "Upgrade-Insecure-Requests": 1,
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:49.0) Gecko/20100101 Firefox/49.0"
    }
}
module.exports=config;