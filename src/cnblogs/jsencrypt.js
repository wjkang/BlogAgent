var jsdom=require("jsdom");
jsdom.env({
    url: "https://passport.cnblogs.com/user/signin",
    features: {
        FetchExternalResources: ["script"],
        ProcessExternalResources: ["script"],
        SkipExternalResources: false
    },
    done: function (err, window) {
        var encrypt = new window.JSEncrypt();
        var encryptCode = window.signin_go.toString().match(/encrypt\.setPublicKey\(\'(\S*)\'\)/)[1];
        encrypt.setPublicKey(encryptCode);
        var token=window.signin_go.toString().match(/\'VerificationToken\':.*\'(.*)\'/)[1];
        var encryptName=encrypt.encrypt("977865769@qq.com");
        var encryptPwd=encrypt.encrypt("977865769");
        console.log({
            token:token,
            name:encryptName,
            pwd:encryptPwd
        });
    }
});
/*
jsdom.env(
    '<p><a class="the-link" href="https://github.com/tmpvar/jsdom">jsdom!</a></p>',
    ["https://passport.cnblogs.com/scripts/jsencrypt.min.js"],
    function (err, window) {
        var en=new window.JSEncrypt();
        en.setPublicKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCp0wHYbg/NOPO3nzMD3dndwS0MccuMeXCHgVlGOoYyFwLdS24Im2e7YyhB0wrUsyYf0/nhzCzBK8ZC9eCWqd0aHbdgOQT6CuFQBMjbyGYvlVYU2ZP7kG9Ft6YV6oc9ambuO7nPZh+bvXH0zDKfi02prknrScAKC0XhadTHT3Al0QIDAQAB');
        var encrypted_input1 = en.encrypt("97786454545");
        var encrypted_input2 = en.encrypt(343434);
        console.log(encrypted_input1)

    }
);*/
