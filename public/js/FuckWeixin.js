function is_weixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/\sQQ/i) == " qq" ) {
        return true;
    } else {
        return false;
    }
}
var isWeixin = is_weixin();
// var isWeixin = false;
var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;

function loadHtml() {
    var div = document.createElement('div');
    div.id = 'weixin-tip';
    div.innerHTML = '<p>拒绝内置浏览器获取最佳浏览体验</p>';
    document.body.appendChild(div);
}

function loadStyleText(cssText) {
    var style = document.createElement('style');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    try {
        style.appendChild(document.createTextNode(cssText));
    } catch (e) {
        style.styleSheet.cssText = cssText; //ie9以下
    }
    var head = document.getElementsByTagName("head")[0]; //head标签之间加上style样式
    head.appendChild(style);
}

var cssText = "#weixin-tip{position: fixed; left:0; top:0; background: rgba(207, 211, 215, 0.8); filter:alpha(opacity=80); width: 100%; height:56px; z-index: 6;} #weixin-tip p{text-align: center; line-height: 56px; font-family: Roboto,sans-serif; font-size: 20px; font-weight: 600; color: #d73a4a;}";
if (isWeixin) {
    loadHtml();
    loadStyleText(cssText);
}
