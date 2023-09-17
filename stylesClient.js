const style = document.createElement('style')
style.textContent = `
.notification {
    font-family: TikTokFont, PingFangSC, sans-serif;
    font-weight: 600;
    position: fixed;
    top: 16px;
    left: 0px;
    color: rgb(255, 255, 255);
    z-index: 2003;
    width: 100%;
    pointer-events: none;
    user-select: none;
}

.notification-notice {
    padding: 8px 0px;
    text-align: center;
}

@keyframes slideInDown {
    0% {
        transform: translateY(-250%);
    }
    100% {
        transform: translateY(0%);
    }
}

@keyframes slideOutUp {
    0% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(-250%);
    }
}

.notification-notice-content {
    background-color: rgba(84, 84, 84, 0.92);
    display: inline-block;
    padding: 10px 8px;
    pointer-events: all;
    max-width: 100%;
    border-radius: 4px;
    animation: slideInDown 0.6s ease, slideOutUp 0.4s ease 2s;
}

.main {
    width: 50vw;
    direction: ltr;
}

body a, body abbr, body acronym, body address, body applet, body article, body aside, body audio, body b, body big, body blockquote, body body, body canvas, body caption, body center, body cite, body code, body dd, body del, body details, body dfn, body div, body dl, body dt, body em, body embed, body fieldset, body figcaption, body figure, body footer, body form, body h1, body h2, body h3, body h4, body h5, body h6, body header, body hgroup, body html, body i, body iframe, body img, body ins, body kbd, body label, body legend, body li, body mark, body menu, body nav, body object, body ol, body output, body p, body pre, body q, body ruby, body s, body samp, body section, body small, body span, body strike, body strong, body sub, body summary, body sup, body table, body tbody, body td, body tfoot, body th, body thead, body time, body tr, body tt, body u, body ul, body var, body video {
    font-family: TikTokFont,Arial,Tahoma,PingFangSC,sans-serif;
}

* {
	margin: 0;
	padding: 0;
}

html {
	overflow: hidden;
}

body {
	height: 100%;
}
`
document.head.appendChild(style)
