var jsdom=require("jsdom");
jsdom.env({
    url: "https://passport.cnblogs.com/user/signin",
    features: {
        FetchExternalResources: ["script"],
        ProcessExternalResources: ["script"],
        SkipExternalResources: false
    },
    done: function (err, window) {
        var $ = window.return_url;
        console.log($)
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
