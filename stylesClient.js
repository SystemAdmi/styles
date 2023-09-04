const style = document.createElement('style')
style.textContent = `
.container__grid {
    -moz-column-gap: 1.25rem;
    column-gap: 1.25rem;
    display: grid;
    grid-template-columns: 4fr 4fr 4fr;
    grid-template-rows: .92fr .5fr .81fr .5fr .1fr;
    margin-top: 2rem;
    row-gap: 1.25rem
}

.container__grid .grid__cell-styling {
    background-clip: padding-box;
    background-color: hsla(0,0%,100%,.07);
    border-radius: 20px;
    padding: 2rem
}

.container__grid .grid__cell-styling.animation__element.waiting {
    opacity: 0
}

.container__grid .grid__cell-styling .grid__cell-styling--iconBox {
    background-color: #fff;
    border-radius: 10px;
    color: #000;
    display: inline-block;
    height: 2.5rem;
    text-align: center;
    width: 2.5rem
}

.container__grid .grid__cell-styling .grid__cell-styling--iconBox img {
    height: 2.3rem;
    margin-top: .1rem;
    width: 2.3rem
}

.container__grid .grid__cell-styling .grid__cell-styling--iconBox i {
    font-size: 25px;
    line-height: 40px
}

.container__grid .grid__cell-styling .grid__cell-styling--image {
    display: inline-block;
    float: right;
    height: 8rem;
    width: 8rem
}

.container__grid .grid__cell-styling .grid__cell-styling--badge {
    display: inline-block;
    float: right
}

.container__grid .grid__cell-styling .grid__cell-styling--badge .badge {
    font-size: 13.5px;
    height: 1.5rem;
    line-height: 13px;
    width: 3.9rem
}

.container__grid .grid__cell-styling .grid__cell-styling--heading {
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    margin: 2rem 0
}

.container__grid .grid__cell-styling .grid__cell-styling--text {
    color: hsla(0,0%,100%,.8);
    font-size: 16px;
    line-height: 24px
}

.container__grid .animation__fadeIn {
    animation-duration: 2s;
    animation-fill-mode: both
}

@keyframes fadeInSticky {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.container__grid .animation__fadeIn .fadeInSticky {
    animation-name: fadeInSticky
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translate3d(0,-50px,0)
    }

    to {
        opacity: 1;
        transform: none
    }
}

.container__grid .animation__fadeIn .fadeInDown {
    animation-name: fadeInDown
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translate3d(0,50px,0)
    }

    to {
        opacity: 1;
        transform: none
    }
}

.container__grid .animation__fadeIn .fadeInUp {
    animation-name: fadeInUp
}

@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translate3d(50px,0,0)
    }

    to {
        opacity: 1;
        transform: none
    }
}

.container__grid .animation__fadeIn .fadeInLeft {
    animation-name: fadeInLeft
}

@keyframes fadeInRight {
    0% {
        opacity: 0;
        transform: translate3d(-50px,0,0)
    }

    to {
        opacity: 1;
        transform: none
    }
}

.container__grid .animation__fadeIn .fadeInRight {
    animation-name: fadeInRight
}

.container__grid .animation__fadeIn.animation__fadeIn_Down {
    animation: fadeInDown
}

.container__grid #grid__cell-chat {
    background: linear-gradient(114.88deg,#389aff,#181624);
    display: flex;
    flex-direction: row-reverse;
    gap: 2.8rem;
    grid-column: 1/span 3;
    grid-row: 1;
    padding-left: 5rem
}

.container__grid #grid__cell-chat.in-view {
    animation: fadeInDown 2s
}

.container__grid #grid__cell-chat .grid__cell-styling--chat {
    display: flex;
    flex-basis: 76%
}

.container__grid #grid__cell-chat .grid__cell-styling--text-container {
    display: flex;
    flex-basis: 40%;
    flex-direction: column;
    justify-content: center
}

.container__grid #grid__cell-singleplayer,.container__grid #grid__cell-widgets {
    display: flex;
    flex-direction: row-reverse;
    grid-column: 1/span 3;
    grid-row: 5;
    padding: 0;
    position: relative
}

.container__grid #grid__cell-singleplayer.grid__cell-styling,.container__grid #grid__cell-widgets.grid__cell-styling {
    background: 0 0
}

.container__grid #grid__cell-singleplayer.in-view,.container__grid #grid__cell-widgets.in-view {
    animation: fadeInUp 2s
}

.container__grid #grid__cell-singleplayer .grid__cell-styling--chat,.container__grid #grid__cell-widgets .grid__cell-styling--chat {
    display: flex;
    flex-basis: 76%
}

.container__grid #grid__cell-singleplayer .grid__cell-styling--chat img,.container__grid #grid__cell-widgets .grid__cell-styling--chat img {
    align-self: center
}

.container__grid #grid__cell-singleplayer .grid__cell-styling--text-container,.container__grid #grid__cell-widgets .grid__cell-styling--text-container {
    background-color: rgba(13,17,24,.9);
    border-radius: 20px;
    bottom: -84px;
    left: 16px;
    padding: 1rem;
    position: absolute;
    width: 35%
}

.container__grid #grid__cell-singleplayer .grid__cell-styling--text-container .grid__cell-styling--heading,.container__grid #grid__cell-widgets .grid__cell-styling--text-container .grid__cell-styling--heading {
    margin-top: 1rem
}

.container__grid #grid__cell-feature1 {
    grid-column: 1;
    grid-row: 2/span 2
}

.container__grid #grid__cell-feature1.in-view {
    animation: fadeInRight 2s
}

.container__grid #grid__cell-feature2 {
    grid-column: 2;
    grid-row: 2/span 2;
    height: 100%
}

.container__grid #grid__cell-feature2.in-view {
    animation: fadeInSticky 2.5s
}

.container__grid #grid__cell-feature2 .screenshot {
    left: -25%;
    position: relative;
    width: 150%
}

.container__grid #grid__cell-feature2 .screenshot canvas {
    pointer-events: none!important;
    touch-action: unset!important
}

.container__grid #grid__cell-feature3 {
    grid-column: 3;
    grid-row: 2
}

.container__grid #grid__cell-feature3.in-view {
    animation: fadeInLeft 2s
}

.container__grid #grid__cell-feature4 {
    grid-column: 1;
    grid-row: 4
}

.container__grid #grid__cell-feature4.in-view {
    animation: fadeInRight 2s
}

.container__grid #grid__cell-feature5 {
    grid-column: 3;
    grid-row: 3/span 2
}

.container__grid #grid__cell-feature5.in-view {
    animation: fadeInLeft 2.5s
}

.container__grid #grid__cell-feature6 {
    grid-column: 1;
    grid-row: 4;
    position: relative
}

.container__grid #grid__cell-feature6.in-view {
    animation: fadeInRight 2s
}

.container__grid #grid__cell-feature6 .ingame-account-manager {
    bottom: 0;
    cursor: default;
    margin-left: -2rem;
    position: absolute;
    width: 100%
}

.container__grid #grid__cell-feature6 .ingame-account-manager .account-section {
    display: flow-root;
    position: relative;
    width: 100%
}

.container__grid #grid__cell-feature6 .ingame-account-manager .account-section .account-box {
    background-color: #050505;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    float: right;
    margin-right: 20px;
    padding: 3px;
    width: 180px
}

.container__grid #grid__cell-feature6 .ingame-account-manager .account-section .account-box .account {
    padding: 7px;
    transition: all .3s
}

.container__grid #grid__cell-feature6 .ingame-account-manager .account-section .account-box .account:hover {
    background-color: hsla(236,6%,48%,.2);
    border-radius: 10px
}

.container__grid #grid__cell-feature6 .ingame-account-manager .user-line {
    background-color: #141414;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flow-root;
    padding-bottom: 12px;
    position: relative;
    width: 100%
}

.container__grid #grid__cell-feature6 .ingame-account-manager .user-line .current-user-box {
    background-color: #050505;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    float: right;
    margin-right: 20px;
    padding: 10px 10px 7px;
    width: 180px
}

.container__grid #grid__cell-feature6 .ingame-account-manager .user .username {
    font-size: 15px;
    font-weight: 700;
    margin-left: 5px;
    margin-right: 20px;
    vertical-align: middle
}

.container__grid #grid__cell-feature6 .ingame-account-manager .user i {
    color: #fff;
    vertical-align: middle
}

.container__grid #grid__cell-feature7 {
    grid-column: 2;
    grid-row: 4
}

.container__grid #grid__cell-feature7.in-view {
    animation: fadeInSticky 2s
}

.container__grid .grid__cell-singleplayer {
    grid-column: 1;
    grid-row: 8
}

@media(max-width: 1000px) {
    .container__grid {
        grid-template-columns:100%;
        grid-template-rows: unset
    }

    .container__grid #grid__cell-chat {
        flex-direction: column-reverse;
        grid-column: 1;
        grid-row: 1;
        padding-left: 2rem
    }

    .container__grid #grid__cell-feature1 {
        grid-column: 1;
        grid-row: 2
    }

    .container__grid #grid__cell-feature2 {
        grid-column: 1;
        grid-row: 3
    }

    .container__grid #grid__cell-feature3 {
        grid-column: 1;
        grid-row: 4
    }

    .container__grid #grid__cell-feature4 {
        grid-column: 1;
        grid-row: 5
    }

    .container__grid #grid__cell-feature5 {
        grid-column: 1;
        grid-row: 6
    }

    .container__grid #grid__cell-feature6 {
        grid-column: 1;
        grid-row: 7
    }

    .container__grid #grid__cell-feature7 {
        grid-column: 1;
        grid-row: 8
    }

    .container__grid #grid__cell-singleplayer,.container__grid #grid__cell-widgets {
        flex-direction: column;
        grid-column: 1;
        grid-row: 9;
        overflow: hidden
    }

    .container__grid #grid__cell-singleplayer.grid__cell-styling,.container__grid #grid__cell-widgets.grid__cell-styling {
        background-color: hsla(0,0%,100%,.07)
    }

    .container__grid #grid__cell-singleplayer .grid__cell-styling--text-container,.container__grid #grid__cell-widgets .grid__cell-styling--text-container {
        background-color: unset;
        position: static;
        top: unset;
        width: unset
    }
}

.cosmetics__container h1,.cosmetics__container h3 {
    margin-bottom: 1rem
}

.cosmetics__container .cosmetics-header {
    margin-bottom: 0
}

@media screen and (min-width: 768px) {
    .cosmetics__container .cosmetics-header {
        margin-bottom:-122px
    }
}

@media screen and (min-width: 576px) {
    .cosmetics__container .cosmetics-header {
        margin-bottom:-90px
    }
}

.cosmetics__container select {
    border: 1px solid #0a0e11;
    color: #e2e2e2
}

.cosmetics__container .btn-check:active+.btn,.cosmetics__container .btn-check:checked+.btn {
    background-color: #0a56a5
}

.cosmetics__container .cosmetics__container-styling:not(:last-of-type) {
    margin-bottom: 2rem
}

.cosmetics__container .cosmetics__container-styling {
    display: flex
}

.cosmetics__container .cosmetics__container-styling .cosmetics__styling--canvas {
    flex-basis: 75%
}

.cosmetics__container .cosmetics__container-styling .cosmetics__styling--canvas canvas#cosmetics__canvas-wings {
    margin-left: 10rem
}

.cosmetics__container .cosmetics__container-styling .cosmetics__styling--text {
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
    justify-content: center
}

.cosmetics__container .cosmetics__container-styling .cosmetics__styling--text.lm-box-trans {
    align-self: center;
    max-height: 15rem;
    padding: 2rem
}

.cosmetics__container .cosmetics__container-styling .cosmetics__styling--text h3 {
    font-size: 1.7rem;
    margin-bottom: .5rem;
    text-align: center
}

.cosmetics__container .cosmetics__container-styling.reverse {
    flex-direction: row-reverse
}

@media(max-width: 1280px) {
    .bg-section-3.pt-16 {
        padding-top:8rem!important
    }
}

@media(max-width: 450px) {
    .cosmetics__container h3 {
        line-height:20px
    }

    .cosmetics__container .cosmetics__container-styling,.cosmetics__container .cosmetics__container-styling.reverse {
        flex-direction: column
    }

    .cosmetics__container .cosmetics__container-styling .cosmetics__styling--canvas #cosmetics__canvas-pets,.cosmetics__container .cosmetics__container-styling.reverse .cosmetics__styling--canvas #cosmetics__canvas-pets {
        margin-left: 2rem
    }

    .cosmetics__container .cosmetics__container-styling .cosmetics__styling--canvas #cosmetics__canvas-wings,.cosmetics__container .cosmetics__container-styling.reverse .cosmetics__styling--canvas #cosmetics__canvas-wings {
        margin-bottom: 1rem;
        margin-left: 1rem;
        margin-top: 2rem
    }

    .cosmetics__container .cosmetics__container-styling .cosmetics__styling--canvas #cosmetics__canvas-aura,.cosmetics__container .cosmetics__container-styling.reverse .cosmetics__styling--canvas #cosmetics__canvas-aura {
        margin-bottom: 1.5rem;
        margin-left: 2.75rem;
        margin-top: 3rem
    }

    .cosmetics__container .cosmetics__container-styling .cosmetics__styling--text p,.cosmetics__container .cosmetics__container-styling.reverse .cosmetics__styling--text p {
        margin-top: 1rem;
        text-align: center
    }
}

.container__voicechat {
    margin-bottom: 12rem;
    margin-top: 12rem
}

.container__voicechat .container.lm-box-trans {
    background: linear-gradient(156deg,#491c5e,#1d65a9 72%);
    border: none;
    border-radius: 20px;
    max-height: 20rem
}

@keyframes floating-circular {
    0% {
        transform: rotate(0) translateX(5px)
    }

    to {
        transform: rotate(1turn) translateX(5px) rotate(-1turn)
    }
}

@keyframes floating-vertical-left {
    0% {
        transform: translateY(58%)
    }

    50% {
        transform: translateY(54%)
    }

    to {
        transform: translateY(58%)
    }
}

@keyframes floating-vertical-right {
    0% {
        transform: translateY(55%)
    }

    50% {
        transform: translateY(57%)
    }

    to {
        transform: translateY(55%)
    }
}

.container__voicechat .container.lm-box-trans .floating-island {
    bottom: 50%;
    position: absolute
}

.container__voicechat .container.lm-box-trans .voicechat-island-left-wrapper {
    animation: floating-vertical-left 8s infinite;
    height: 150%;
    left: -6rem;
    transform: translateX(-50%)
}

.container__voicechat .container.lm-box-trans .voicechat-island-left-wrapper .voicechat-island-left {
    height: 100%
}

.container__voicechat .container.lm-box-trans .voicechat-island-left-wrapper .voicechat-speaker-left {
    height: 5.68%;
    left: 82%;
    position: absolute;
    top: 1%
}

.container__voicechat .container.lm-box-trans .voicechat-island-right-wrapper {
    animation: floating-vertical-right 6s infinite;
    height: 170%;
    right: -9rem;
    transform: translateX(50%)
}

.container__voicechat .container.lm-box-trans .voicechat-island-right-wrapper .voicechat-island-right {
    height: 100%
}

.container__voicechat .container.lm-box-trans .voicechat-island-right-wrapper .voicechat-speaker-right {
    height: 5.68%;
    left: 40%;
    position: absolute;
    top: 0
}

.container__voicechat .container .voicechat__text-container {
    padding-bottom: 4rem;
    padding-top: 4rem;
    text-align: center
}

.container__voicechat .container .voicechat__text-container h1 {
    margin-bottom: 2rem
}

.container__voicechat .container .voicechat__text-container p {
    color: hsla(0,0%,100%,.8);
    font-size: 20px;
    line-height: 30px
}

@media(max-width: 1280px) {
    .container__voicechat {
        margin-top:16rem
    }

    .container__voicechat .container .voicechat__text-container {
        padding-top: 1rem
    }

    .container__voicechat .container.lm-box-trans .voicechat-island-left-wrapper {
        left: -9rem
    }

    .container__voicechat .container.lm-box-trans .voicechat-island-right-wrapper {
        right: -13rem
    }

    .container__voicechat .container.lm-box-trans .voicechat__text-container {
        padding-left: 8rem!important;
        padding-right: 8rem!important;
        padding-top: 2rem
    }
}

@media(max-width: 1000px) {
    .container__voicechat .container.lm-box-trans .voicechat-island-left-wrapper {
        left:-11rem
    }

    .container__voicechat .container.lm-box-trans .voicechat-island-right-wrapper {
        right: -15rem
    }

    .container__voicechat .container.lm-box-trans .voicechat__text-container {
        padding-bottom: 2rem;
        padding-top: 3rem
    }

    .container__voicechat .container.lm-box-trans .voicechat__text-container h1 {
        font-size: 37px
    }

    .container__voicechat .container.lm-box-trans .voicechat__text-container p {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 0
    }
}

@media(max-width: 768px) {
    .container__voicechat {
        margin-bottom:8rem
    }

    .container__voicechat .container.lm-box-trans img {
        display: none!important
    }

    .container__voicechat .container.lm-box-trans .voicechat__text-container {
        padding-left: 2rem!important;
        padding-right: 2rem!important;
        padding-top: 2rem
    }

    .container__voicechat .container.lm-box-trans .voicechat__text-container h1 {
        font-size: 32px;
        line-height: 37px
    }

    .container__voicechat .container.lm-box-trans .voicechat__text-container p {
        font-size: 16px;
        line-height: 22px
    }
}

@media(max-width: 667px) {
    .container__voicechat {
        margin-top:3rem;
        padding-left: 0;
        padding-right: 0
    }

    .container__voicechat .container .voicechat__text-container {
        padding-left: 2rem;
        padding-right: 2rem
    }
}

.mc-color.mc-0 {
    color: #000
}

.mc-color.mc-0,.mc-color.mc-1 {
    font-style: normal;
    font-weight: 400;
    text-decoration: none
}

.mc-color.mc-1 {
    color: #00a
}

.mc-color.mc-2 {
    color: #0a0
}

.mc-color.mc-2,.mc-color.mc-3 {
    font-style: normal;
    font-weight: 400;
    text-decoration: none
}

.mc-color.mc-3 {
    color: #0aa
}

.mc-color.mc-4 {
    color: #a00
}

.mc-color.mc-4,.mc-color.mc-5 {
    font-style: normal;
    font-weight: 400;
    text-decoration: none
}

.mc-color.mc-5 {
    color: #a0a
}

.mc-color.mc-6 {
    color: #fa0
}

.mc-color.mc-6,.mc-color.mc-7 {
    font-style: normal;
    font-weight: 400;
    text-decoration: none
}

.mc-color.mc-7 {
    color: #aaa
}

.mc-color.mc-8 {
    color: #555
}

.mc-color.mc-8,.mc-color.mc-9 {
    font-style: normal;
    font-weight: 400;
    text-decoration: none
}

.mc-color.mc-9 {
    color: #55f
}

.mc-color.mc-a {
    color: #5f5
}

.mc-color.mc-a,.mc-color.mc-b {
    font-style: normal;
    font-weight: 400;
    text-decoration: none
}

.mc-color.mc-b {
    color: #5ff
}

.mc-color.mc-c {
    color: #f55
}

.mc-color.mc-c,.mc-color.mc-d {
    font-style: normal;
    font-weight: 400;
    text-decoration: none
}

.mc-color.mc-d {
    color: #f5f
}

.mc-color.mc-e {
    color: #ff5
}

.mc-color.mc-e,.mc-color.mc-f {
    font-style: normal;
    font-weight: 400;
    text-decoration: none
}

.mc-color.mc-f {
    color: #fff
}

.mc-color {
    color: unset
}

.mc-r {
    color: #fff;
    font-style: normal;
    font-weight: 400;
    text-decoration: none
}

.mc-l {
    font-weight: 700
}

.mc-m {
    text-decoration: line-through
}

.mc-n {
    text-decoration: underline
}

.mc-o {
    font-style: italic
}

.chat-container {
    -webkit-touch-callout: none;
    max-height: 500px;
    min-height: 400px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.chat-container img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none
}

.chat-container .chat-selector {
    background-color: #0d0d0d;
    border-radius: 10px 10px 0 0;
    cursor: grab
}

.chat-container .chat-selector:active {
    cursor: grabbing
}

.chat-container .chat-selector .chat-selector-item {
    cursor: pointer;
    font-weight: 700;
    text-align: center;
    transition: background-color .2s linear
}

.chat-container .chat-selector .chat-selector-item span {
    height: -moz-fit-content;
    height: fit-content;
    margin-left: 5px;
    margin-right: 5px
}

.chat-container .chat-selector .chat-selector-item.chat-selector-user .chat-selector-icon {
    image-rendering: pixelated
}

.chat-container .chat-selector .chat-selector-item:first-child {
    border-radius: 10px 0 0 0
}

.chat-container .chat-selector .chat-selector-item:hover {
    background-color: hsla(0,0%,5%,.93)
}

.chat-container .chat-selector .chat-selector-item.active {
    background-color: #0d4a74
}

.chat-container .chat-selector .chat-selector-item.active:hover {
    background-color: rgba(13,74,116,.8)
}

.chat-container .chat-selector .chat-selector-item.chat-selector-add {
    background-color: #202021;
    border-radius: 0 10px 0 0;
    cursor: not-allowed
}

.chat-container .chat-selector .chat-selector-item.chat-selector-add:hover {
    background-color: rgba(32,32,33,.9)
}

.chat-container .chat-selector .chat-selector-item.chat-selector-add .chat-selector-add-icon {
    width: 30px
}

.chat-container .chat {
    background-color: rgba(5,5,6,.7);
    border-radius: 0 0 10px 10px;
    bottom: 40px;
    overflow-x: hidden;
    overflow-y: scroll;
    position: absolute;
    top: 40px;
    width: 100%
}

.chat-container .chat .chat-messages {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 2px;
    min-height: 99%;
    overflow-x: hidden;
    position: absolute;
    width: 100%
}

.chat-container .chat .chat-messages .server-message {
    color: #fff;
    padding-left: 10px;
    padding-right: 10px
}

.chat-container .chat .chat-messages .server-message:first-child {
    margin-top: auto;
    padding-top: 10px
}

.chat-container .chat .chat-messages .server-message:last-child {
    padding-bottom: 10px
}

.chat-container .chat .chat-messages .chat-message {
    color: #fff;
    display: flex;
    height: auto;
    margin: 8px 0 0;
    overflow: hidden;
    padding-left: 20px;
    padding-right: 20px;
    width: 70%
}

.chat-container .chat .chat-messages .chat-message:first-child {
    margin-top: auto;
    padding-top: 20px
}

.chat-container .chat .chat-messages .chat-message:last-child {
    padding-bottom: 20px
}

.chat-container .chat .chat-messages .chat-message .user {
    display: flex;
    height: 20px;
    margin-bottom: 10px;
    position: relative
}

.chat-container .chat .chat-messages .chat-message .user .avatar {
    height: 24px;
    image-rendering: pixelated;
    order: 1;
    width: 24px
}

.chat-container .chat .chat-messages .chat-message .user .text {
    display: flex;
    height: 20px;
    order: 2
}

.chat-container .chat .chat-messages .chat-message .user .text .username {
    color: #fff;
    font-weight: 700;
    margin-left: 10px;
    margin-right: 10px;
    order: 1
}

.chat-container .chat .chat-messages .chat-message .user .text .time {
    color: #989898;
    order: 2
}

.chat-container .chat .chat-messages .chat-message .message {
    background-color: hsla(0,0%,8%,.8);
    border-radius: 0 10px 10px 10px;
    font-weight: 700;
    margin-left: 30px
}

.chat-container .chat .chat-messages .me {
    align-self: end
}

.chat-container .chat .chat-messages .me .user {
    justify-content: end
}

.chat-container .chat .chat-messages .me .user .text .username {
    order: 2
}

.chat-container .chat .chat-messages .me .user .text .time {
    order: 1
}

.chat-container .chat .chat-messages .me .user .avatar {
    order: 3
}

.chat-container .chat .chat-messages .me .message {
    background-color: #1167a3;
    border-radius: 10px 0 10px 10px;
    margin-right: 30px
}

.chat-container .chat-input-wrapper {
    bottom: 0;
    position: absolute;
    width: 100%
}

.chat-container .chat-input-wrapper .chat-input {
    background-color: hsla(0,0%,8%,.8);
    border: none;
    border-radius: 10px;
    color: #fff;
    height: 35px;
    outline: none;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%
}

.chat-container .chat-input-wrapper .chat-input:focus {
    background-color: hsla(0,0%,8%,.9);
    border: none
}

@keyframes slider {
    0% {
        transform: translateY(100%)
    }

    to {
        transform: translateY(-100%)
    }
}

.drag-transition {
    transition: transform .3s ease-in-out
}

@media(max-width: 576px) {
    .chat-container .chat .chat-messages .chat-message,.chat-container .chat .chat-messages .me .chat-message {
        width:100%
    }

    .chat-container .chat .chat-messages .chat-message .message,.chat-container .chat .chat-messages .me .chat-message .message {
        width: 75%;
        word-break: break-word
    }
}

.version-section .carousel-item {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center
}

.version-section .carousel-item img {
    height: 200px
}

.version-section .version-blocks {
    margin-top: 1rem
}

.version-section .version-blocks span {
    background-color: hsla(0,0%,100%,.07);
    border-radius: 10px;
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 3.5rem;
    min-width: 4rem;
    padding: 0 .5rem;
    text-align: center
}

.grid.version-blocks {
    gap: var(--bs-gap,1rem)
}

@media(max-width: 576px) {
    .version-section {
        margin-top:10rem
    }

    .version-section .version-blocks span {
        font-size: 1.5rem;
        line-height: 2.5rem;
        min-width: 4rem;
        padding: .25rem
    }
}

.container__blog {
    margin-bottom: 6rem;
    text-align: left
}

.container__blog .container__blog-content {
    margin: auto;
    padding: 3rem;
    position: relative
}

.container__blog .container__blog-content .heading {
    padding: 1rem 3rem;
    text-align: center
}

@media(max-width: 667px) {
    .container__blog .container__blog-content .heading {
        padding:0
    }
}

.container__blog .container__blog-content a {
    text-decoration: none
}

.container__blog .container__blog-content #blog-glide {
    margin-top: 20px
}

.container__blog .container__blog-content .blog-preview {
    margin-left: auto;
    margin-right: auto;
    transition: all .1s;
    width: 80%
}

.container__blog .container__blog-content .blog-preview p {
    margin-bottom: unset
}

.container__blog .container__blog-content .blog-preview img {
    border-radius: 15px;
    margin-bottom: 15px
}

.container__blog .container__blog-content .blog-preview:hover {
    opacity: .8
}

.container__blog .container__blog-content .blog-preview time {
    color: #999;
    display: block;
    font-size: 12px;
    text-align: right;
    width: 100%
}

.container__blog .container__blog-content .beta__content-heading h1 {
    font-size: 38px;
    margin-bottom: 0
}

.container__blog .container__blog-content .beta__content-heading h3 {
    color: hsla(0,0%,100%,.6);
    font-size: 26px
}

.widget-container {
    -webkit-touch-callout: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    max-height: 500px;
    min-height: 400px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.widget-container .widget-editor-background {
    background-image: url(/page/static/images/widget-editor-background.2c21d202.png);
    background-position: bottom;
    background-size: cover;
    border-radius: 20px;
    height: 500px;
    position: relative;
    touch-action: unset;
    width: 100%
}

.widget-container .widget-editor-background.lines {
    outline: 4px solid #fff;
    outline-offset: -9px
}

.widget-container .widget-editor-background .widget-bg {
    height: 94%;
    position: absolute;
    right: 2%
}

.widget-container .widget-editor-background div.module {
    font-size: 1.2rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,.85)
}

@media(max-width: 993px) {
    .widget-container .widget-editor-background div.module {
        font-size:1rem
    }
}

@media(max-width: 768px) {
    .widget-container .widget-editor-background div.module {
        font-size:1rem
    }
}

@media(max-width: 576px) {
    .widget-container .widget-editor-background div.module {
        font-size:.8rem
    }
}

.widget-container .widget-editor-background .rendered-widget {
    position: absolute;
    white-space: nowrap
}

.widget-container .widget-editor-background .widget-editor {
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    background-color: rgba(40,44,51,.6);
    border-radius: 10px;
    height: 84%;
    left: 5%;
    overflow: hidden;
    position: absolute;
    top: 10%;
    width: 30%;
    z-index: 100
}

@media(max-width: 993px) {
    .widget-container .widget-editor-background .widget-editor {
        height:114.7%;
        right: -5.7%;
        scale: .8;
        top: -7.4%;
        width: 68.4%
    }
}

@media(max-width: 768px) {
    .widget-container .widget-editor-background .widget-editor {
        height:114.8%;
        right: -5.3%;
        scale: .8;
        top: -7.4%;
        width: 71.2%
    }
}

@media(max-width: 576px) {
    .widget-container .widget-editor-background .widget-editor {
        height:140.8%;
        right: -15%;
        scale: .65;
        top: -19.8%;
        width: 105.4%
    }
}

.widget-container .widget-editor-background .widget-editor .trashcan {
    opacity: 0;
    transition: opacity .1s ease-in-out;
    visibility: hidden
}

.widget-container .widget-editor-background .widget-editor .trashcan i {
    font-size: 7rem
}

.widget-container .widget-editor-background .widget-editor .bar {
    background-color: rgba(18,24,36,.6);
    border-radius: 10px 10px 0 0;
    cursor: grab;
    height: 35px;
    position: relative
}

.widget-container .widget-editor-background .widget-editor .bar:active {
    cursor: grabbing
}

.widget-container .widget-editor-background .widget-editor .bar .title {
    font-weight: 700;
    left: 15px;
    position: absolute;
    top: 5px
}

.widget-container .widget-editor-background .widget-editor .bar .search {
    background-color: #b8babe;
    border: none;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
    right: 4px;
    top: 5px
}

.widget-container .widget-editor-background .widget-editor .bar .search:focus {
    outline: none
}

.widget-container .widget-editor-background .widget-editor .content {
    height: calc(100% - 35px);
    overflow-x: hidden;
    overflow-y: hidden;
    padding: 15px;
    transition: opacity .1s ease-in-out
}

.widget-container .widget-editor-background .widget-editor .content .category {
    padding-bottom: 10px
}

.widget-container .widget-editor-background .widget-editor .content .category .category-title {
    display: block;
    font-weight: 700;
    line-height: 10px
}

.widget-container .widget-editor-background .widget-editor .content .category .category-sub-title {
    color: #afacb4;
    display: block
}

.widget-container .widget-editor-background .widget-editor .content .grid {
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(auto-fill,170px)
}

.widget-container .widget-editor-background .widget-editor .content .grid:first-child {
    animation: alternate
}

.widget-container .widget-editor-background .widget-editor .content .grid .widget {
    align-items: center;
    background-color: hsla(236,6%,48%,.5);
    border: 1px solid rgba(58,59,70,.9);
    border-radius: 5px;
    cursor: grab;
    display: flex;
    height: 40px;
    image-rendering: pixelated;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    width: 170px
}

.widget-container .widget-editor-background .widget-editor .content .grid .widget:hover {
    background-color: hsla(233,7%,55%,.5)
}

.widget-container .widget-editor-background .widget-editor .content .grid .widget:active {
    cursor: grabbing
}

.widget-container .widget-editor-background .widget-editor .content .grid .widget.disabled {
    background-color: rgba(75,76,70,.5);
    cursor: not-allowed
}

.widget-container .widget-editor-background .widget-editor .content .grid .widget span.name {
    font-size: 12px;
    margin-top: 2px;
    white-space: nowrap
}

.widget-container .widget-editor-background .widget-editor .content .grid .widget .icon {
    margin-left: 5px;
    margin-right: 8px;
    margin-top: 5px
}

.reset-transition {
    transition: left .3s ease-in-out,top .3s ease-in-out
}

.addons-container {
    background-clip: padding-box;
    background-color: hsla(0,0%,100%,.09);
    border: 8px solid rgba(180,160,161,.09);
    border-radius: 40px;
    padding: 4rem
}

.addons-container .sub-heading {
    text-align: center
}

.addons-container .addon-container {
    background-size: cover;
    border-radius: 10px;
    height: 160px;
    margin-top: 20px;
    position: relative
}

.addons-container .addon-container .layer {
    background-color: rgba(0,0,0,.6);
    border-radius: 10px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: .3s;
    width: 100%
}

.addons-container .addon-container .layer:hover {
    background-color: rgba(40,44,51,.1)
}

.addons-container .addon-container .layer .addon-info {
    height: 100%;
    padding: 10px
}

.addons-container .addon-container .layer .addon-info img.icon {
    border-radius: 10px;
    height: 100px;
    margin-top: 40px
}

.addons-container .addon-container .layer .addon-info .info {
    display: inline-block;
    margin-bottom: 0;
    margin-top: 30px
}

.addons-container .addon-container .layer .addon-info .info .stars {
    display: block;
    font-size: 10px;
    opacity: .7
}

.addons-container .addon-container .layer .addon-info .info .stars i {
    color: #ff0
}

.addons-container .addon-container .layer .addon-info .info .title {
    font-size: 22px;
    font-weight: 700;
    line-height: 0;
    margin-bottom: 0;
    margin-top: 10px
}

.addons-container .addon-container .layer .addon-info .info .desc {
    color: #cecece;
    font-size: 12px;
    height: 56px;
    line-height: 14px;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis
}

.glide {
    box-sizing: border-box;
    position: relative;
    width: 100%
}

.glide * {
    box-sizing: inherit
}

.glide__slides,.glide__track {
    overflow: hidden
}

.glide__slides {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    touch-action: pan-Y;
    transform-style: preserve-3d;
    white-space: nowrap;
    width: 100%;
    will-change: transform
}

.glide__slide,.glide__slides--dragging {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.glide__slide {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    flex-shrink: 0;
    height: 100%;
    white-space: normal;
    width: 100%
}

.glide__slide a {
    -webkit-user-drag: none;
    -webkit-user-select: none;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none
}

.glide__arrows,.glide__bullets {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.glide--rtl {
    direction: rtl
}

body {
    -webkit-font-smoothing: antialiased;
    background-color: #080f16;
    background-image: url(/page/static/images/lm4_website_bg.5575359f.jpg);
    background-image: -webkit-image-set(url(/page/static/images/lm4_website_bg.7da273cc.avif) 1x,url(/page/static/images/lm4_website_bg.f5d5076a.webp) 1x,url(/page/static/images/lm4_website_bg.5575359f.jpg) 1x);
    background-image: image-set(url(/page/static/images/lm4_website_bg.7da273cc.avif) 1x,url(/page/static/images/lm4_website_bg.f5d5076a.webp) 1x,url(/page/static/images/lm4_website_bg.5575359f.jpg) 1x);
    background-position-y: 40rem;
    background-repeat: no-repeat;
    background-size: contain
}

img {
    -webkit-touch-callout: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

#header {
    padding-top: 1rem
}

#lm4-header {
    height: 43rem;
    position: absolute;
    top: 0;
    width: 100%
}

#lm4-header.with-banner {
    margin-top: 25px
}

.bg-glow {
    background: url(/page/static/images/lm4_glow_small.e2cab8d1.png) no-repeat;
    background-position: 0 0;
    background-size: cover;
    height: 2000px;
    left: -500px;
    position: absolute;
    right: 0;
    top: -470px;
    z-index: 0
}

h1 {
    font-size: 52px;
    font-weight: 600
}

@media(max-width: 667px) {
    h1 {
        font-size:42px
    }
}

p.sub-heading {
    color: hsla(0,0%,100%,.6);
    font-size: 20px;
    line-height: 30px
}

.btn-plus {
    background-color: #f7cc50;
    border-color: #7d6e44;
    color: #000;
    font-size: .9rem;
    font-weight: 700;
    margin-left: 10px;
    padding: .5rem 1rem
}

#index-video {
    max-width: 100%
}

.bg-section-1 .gradient__main {
    background-image: url(/page/static/images/lm4_website_overlay_blue.47502d8a.png);
    background: linear-gradient(180deg,#0a56a5 42rem,transparent 0);
    margin-top: 0!important;
    max-width: unset;
    padding-top: 10rem
}

.bg-section-1 .gradient__main .grid {
    margin-left: auto;
    margin-right: auto;
    max-width: 1250px
}

.bg-section-1 .gradient__main .grid h3 {
    line-height: 20px;
    margin-bottom: 0!important;
    padding-top: 4rem
}

.bg-section-1 .gradient__main .grid h3 strong {
    font-weight: 700
}

.bg-section-1 .gradient__main .grid h1 {
    margin-bottom: 0!important
}

.bg-section-1 .gradient__main .grid .download-subtitle {
    color: #fff;
    display: block;
    font-size: .7rem
}

.bg-section-2 h1,.bg-section-3 h1 {
    line-height: 60px
}

.performance__list {
    margin-top: 2rem
}

.performance__list ul {
    padding-left: 0
}

.performance__list p {
    display: inline-block;
    font-size: 1.4rem;
    line-height: 28px;
    vertical-align: middle
}

@media(max-width: 667px) {
    .performance__list p {
        font-size:1rem
    }
}

@media(max-width: 993px) {
    .performance__list p {
        font-size:1rem
    }
}

.performance__list i {
    color: #0d6efd;
    font-size: 2rem;
    margin-right: 1.5rem
}

.performance-comparison {
    padding-left: 3rem!important;
    padding-right: 3rem!important
}

.performance-comparison .grid {
    gap: unset
}

.performance-comparison .grid.mb-2 {
    min-height: 3rem
}

.performance-comparison .icon {
    align-self: center;
    color: #fff;
    font-size: 1.9rem
}

.performance-comparison .icon#icon__laby img {
    filter: drop-shadow(0 0 10px #1b77bd);
    width: 35px
}

.performance-comparison .icon#icon__minecraft img {
    width: 35px
}

.performance-comparison .row:not(:first-child) .progress-bar {
    background-color: grey!important
}

.performance-comparison .grid .g-col-1 {
    grid-column: 1;
    margin-top: 0;
    text-align: center;
    width: 42px
}

.performance-comparison .grid .ps-4 {
    grid-column: 2/span 11;
    padding-left: 1rem!important
}

.performance-comparison p.text__hint-fps {
    color: #4b5c74;
    font-size: .85rem;
    font-weight: 500;
    margin-bottom: 0;
    margin-left: .3rem;
    margin-top: 1rem
}

.performance-comparison .progress {
    background-color: unset;
    border-radius: .55rem;
    height: .8rem
}

.performance-comparison .progress .progress-bar {
    background-color: #93999f;
    border-radius: .55rem
}

.performance-comparison .progress .progress-bar.w-20 {
    width: 20%!important
}

.performance-comparison .progress .progress-bar.w-50 {
    width: 50%!important
}

.performance-comparison .progress .progress-bar.w-67 {
    width: 67%!important
}

.performance-comparison .progress .progress-bar.highlighted {
    background-color: #0d6efd
}

.performance-comparison .fps {
    font-size: .9rem;
    font-weight: 600
}

.style-comparison.mt-7 {
    margin-top: 3rem!important
}

.style-comparison .switch-state-label span {
    display: block;
    height: 100%;
    margin-top: .7em
}

.container__image-switcher {
    overflow: hidden
}

.container__image-switcher .image-switcher {
    aspect-ratio: 2559/1389;
    border-radius: 20px;
    height: auto;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    transform: scale(1.7) rotate(-5deg) translate(1%,14%)
}

.image-switcher img {
    height: auto;
    position: absolute;
    width: 200%
}

.btn-cosmetic {
    border: 1px solid #0a0e11
}

#customizer-options {
    display: none
}

.switch-active {
    margin-left: -100%
}

.switch-blur {
    animation: blur .5s cubic-bezier(.61,.26,.28,.87)
}

.switch-background {
    transition: margin-left .5s cubic-bezier(1,0,0,1)
}

.switch-foreground {
    transition: margin-left .5s cubic-bezier(.61,.26,.28,.87)
}

@keyframes blur {
    0% {
        -webkit-filter: brightness(1) blur(0)
    }

    50% {
        -webkit-filter: brightness(1.6) blur(1px)
    }

    to {
        -webkit-filter: brightness(1) blur(0)
    }
}

@keyframes fire {
    0% {
        transform: rotate(0deg)
    }

    25% {
        transform: rotate(3deg)
    }

    50% {
        transform: rotate(0deg)
    }

    75% {
        transform: rotate(-3deg)
    }

    to {
        transform: rotate(0deg)
    }
}

@keyframes floating-allay {
    0% {
        transform: translateY(0)
    }

    50% {
        transform: translateY(20%)
    }

    to {
        transform: translateY(0)
    }
}

#cosmetic-customizer {
    height: 651px;
    pointer-events: none!important
}

.cosmetic-header {
    transform: translateY(20px)
}

.index-alert {
    z-index: 1
}

.versions-overview {
    position: relative
}

.versions-overview .allay {
    animation: floating-allay 6s infinite;
    height: 22.24%;
    left: 57%;
    position: absolute
}

.versions-overview .fire {
    animation: fire .5s infinite;
    animation-timing-function: step-end;
    height: 8.13%;
    image-rendering: pixelated;
    position: absolute;
    transform-origin: 50% 80%
}

.versions-overview .fire1 {
    animation-delay: .5s;
    left: 70.5%;
    top: 72.5%
}

.versions-overview .fire2 {
    animation-delay: .2s;
    left: 77.1%;
    top: 70.2%
}

.versions-overview .fire3 {
    left: 71.5%;
    top: 80%
}

.versions-overview .frog {
    height: 25%;
    left: -6%;
    position: absolute;
    top: 73%
}

.speech-bubble {
    background: #fff;
    border-radius: .4em;
    color: #000;
    font-family: Comic Sans MS,serif;
    padding: 5px;
    position: relative;
    transform: translate(-50%,-250%);
    transition: opacity .2s ease-in-out
}

.speech-bubble:after {
    border: 11px solid transparent;
    border-bottom: 0;
    border-top-color: #fff;
    bottom: 0;
    content: "";
    height: 0;
    left: 50%;
    margin-bottom: -10px;
    margin-left: -10px;
    position: absolute;
    width: 0
}

@media(max-width: 993px) {
    .bg-section-1 img {
        height:auto;
        width: 90%
    }
}

@media(max-width: 768px) {
    body {
        background-position-y:39rem
    }

    body header #lm4-header {
        height: 39rem
    }

    .bg-section-1 .gradient__main {
        background: linear-gradient(180deg,#0a56a5 38rem,transparent 0);
        padding-top: 5rem
    }

    .bg-section-1 .content {
        margin-top: 6rem!important
    }

    .bg-section-1 h1 {
        font-size: 1.7rem!important
    }

    .bg-section-1 h3 {
        font-size: 1.2rem!important
    }
}

@media(max-width: 667px) {
    .bg-section-1 .content {
        margin-top:6rem!important
    }

    .bg-section-1 h1 {
        font-size: 1.4rem!important
    }

    .bg-section-1 h3 {
        font-size: 1rem!important
    }
}

@media(max-width: 576px) {
    body {
        background-position-y:30rem
    }

    body header #lm4-header {
        height: 31rem
    }

    .bg-section-1 .gradient__main {
        background: linear-gradient(180deg,#0a56a5 30rem,transparent 0)
    }

    .bg-section-1 .content {
        margin-top: 2rem!important
    }

    .bg-section-1 h1 {
        font-size: 1.4rem!important
    }

    .bg-section-1 h3 {
        font-size: 1rem!important
    }
}

@media(max-width: 450px) {
    body {
        background-position-y:26rem
    }

    body header #lm4-header {
        height: 26rem
    }

    .bg-section-1 h1 {
        font-size: 1rem!important;
        line-height: 18px;
        margin: auto;
        margin-top: .5rem!important;
        width: 75%
    }

    .bg-section-1 h3 {
        font-size: .8rem!important;
        padding-top: 2.5rem
    }

    .bg-section-1 img {
        width: 80%
    }

    .bg-section-1 .gradient__main {
        background: linear-gradient(180deg,#0a56a5 25rem,transparent 0)
    }

    .bg-section-1 .gradient__main .grid a.btn.btn-secondary {
        font-size: .7rem;
        padding: .25rem .6rem
    }

    .bg-section-2 .mt-7 {
        margin-top: 4rem!important
    }

    .bg-section-2 h1 {
        font-size: 30px;
        line-height: 40px
    }

    .bg-section-2 .p-4 {
        padding: 1rem!important
    }

    .bg-section-2 .me-3 {
        margin-right: 0!important
    }

    .bg-section-2 .grid.mb-2 {
        gap: unset
    }

    .bg-section-2 .grid.mb-2 .ps-4 {
        padding-left: 1rem!important
    }

    .bg-section-2 .text__hint-fps {
        font-size: .7rem!important;
        line-height: 15px;
        margin-top: 1.25rem!important
    }

    .bg-section-2 .image-switcher {
        transform: scale(1.9) rotate(-7deg) translate(10px,20px)
    }

    p.sub-heading {
        font-size: 16px;
        line-height: 22px
    }
}

.cosmetic-customizer-wrapper .easter-egg {
    height: 60px;
    margin-bottom: -10px;
    margin-top: 8px
}

.lm-download .bg-section-1 .gradient__main {
    padding-bottom: 1rem;
    padding-top: 6rem
}

.singleplayer-container .bg-image {
    background-image: url(/page/static/images/singleplayer_background.db579acf.png);
    background-size: cover;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    height: 100%
}

@media(max-width: 993px) {
    .singleplayer-container .bg-image {
        border-bottom-left-radius:0;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px
    }
}

.singleplayer-container .bg-image .inner-wrapper {
    height: 100%;
    min-height: 400px
}

@media(max-width: 667px) {
    .singleplayer-container .bg-image .inner-wrapper {
        position:relative
    }
}

.singleplayer-container .bg-image .inner-wrapper .render-wrapper {
    bottom: 0;
    height: 190px;
    left: 35%;
    margin-right: 20px;
    margin-top: 20px;
    overflow: hidden;
    position: absolute
}

@media(max-width: 667px) {
    .singleplayer-container .bg-image .inner-wrapper .render-wrapper {
        display:none
    }
}

.singleplayer-container .bg-image .inner-wrapper .render-wrapper img.skin-render {
    height: 200px;
    transform: scaleX(-1)
}

.singleplayer-container .bg-image .inner-wrapper .render-wrapper img.skin-render.one {
    height: 220px;
    margin-right: 10px;
    margin-top: 30px
}

.singleplayer-container .bg-image .inner-wrapper .skin-wrapper-main {
    bottom: 0;
    height: 270px;
    left: 17%;
    overflow: hidden;
    position: absolute
}

@media(max-width: 667px) {
    .singleplayer-container .bg-image .inner-wrapper .skin-wrapper-main {
        left:4%
    }
}

.singleplayer-container .bg-image .inner-wrapper .skin-wrapper-main img {
    height: 350px
}

.singleplayer-container .bg-image .inner-wrapper h4 {
    bottom: 0;
    font-weight: 700;
    left: 30px;
    position: absolute;
    text-transform: uppercase
}

@media(max-width: 993px) {
    .singleplayer-container .bg-image .inner-wrapper h4 {
        bottom:auto;
        padding: 20px
    }
}

.singleplayer-container .col-lg-7 {
    padding-right: 0
}

.singleplayer-container .col-lg-5 {
    padding-left: 0
}

.singleplayer-container .content-section {
    background-color: #0690f6;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    padding: 30px 30px 0
}

@media(max-width: 993px) {
    .singleplayer-container .content-section {
        border-bottom-left-radius:30px;
        border-bottom-right-radius: 30px;
        border-top-right-radius: 0
    }
}

.singleplayer-container .content-section h2 {
    margin-bottom: 0
}

.singleplayer-container .content-section h2.right {
    text-align: right
}

.singleplayer-container .content-section p.description {
    color: #e3e3e3;
    font-size: 18px;
    margin: 30px auto;
    max-width: 300px
}

.singleplayer-container .content-section .invite-menu-wrapper {
    margin-left: auto;
    margin-right: auto;
    text-align: center
}

.singleplayer-container .content-section .invite-menu-wrapper .invite-menu {
    background-color: rgba(0,0,0,.6);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: inline-block;
    min-width: 300px;
    padding: 20px 20px 7px;
    text-align: left
}

.singleplayer-container .content-section .invite-menu-wrapper .invite-menu .account {
    margin-bottom: 15px
}

.singleplayer-container .content-section .invite-menu-wrapper .invite-menu .account:last-child {
    margin-bottom: 0
}

.singleplayer-container .content-section .invite-menu-wrapper .invite-menu .account .username,.singleplayer-container .content-section .invite-menu-wrapper .invite-menu .account img {
    cursor: default
}

.singleplayer-container .content-section .invite-menu-wrapper .invite-menu .account .username {
    font-size: 17px;
    margin-left: 7px;
    margin-right: 12px
}

.singleplayer-container .content-section .invite-menu-wrapper .invite-menu .account .btn {
    background-color: #e8e8e8;
    border-radius: 3px;
    float: right;
    font-size: 11px;
    font-weight: 700;
    padding: 4px 10px;
    text-transform: uppercase
}

.launcher img {
    width: 90%
}

.skin-browser video {
    border-radius: 15px;
    float: right;
    width: 90%
}

.four-header .play-btn {
    background-color: #0a56a5;
    bottom: 20px;
    color: #fff;
    font-weight: 700;
    position: absolute
}

.four-header video {
    border-top-left-radius: 34px;
    border-top-right-radius: 34px
}

.download-last {
    margin: auto;
    max-width: 95%;
    width: 550px
}

.download-last h1 {
    font-size: 36px
}

h1 {
    color: white;
    margin-left: 50px;
}
p {
    color: white;
}
.bottomContent {
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    color: white;
    padding: 10px;
    width: 100%;
    height: 100px;
    position: fixed;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.start_button {
    display: inline-block;
    border-radius: 10px;
    border: none;
    background: #1875FF;
    color: white;
    font-family: inherit;
    text-align: center;
    font-size: 30px;
    box-shadow: 0px 20px 56px -11px #1875FF;
    width: 10em;
    padding: 1em;
    transition: all 0.4s;
    cursor: pointer;
    position: fixed;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 100px;
}
   
.start_button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.4s;
}

.start_button:hover {
    box-shadow: 0px 30px 56px -5px #1875FF;
    width: 410px;
    height: 110px;
}
.buttonPlay {
 display: flex;
 align-items: center;
 justify-content: center;
 height: 50px;
 position: relative;
 padding: 0 20px;
 font-size: 18px;
 text-transform: uppercase;
 border: 0;
 box-shadow: hsl(210deg 87% 36%) 0px 7px 0px 0px;
 background-color: hsl(210deg 100% 44%);
 border-radius: 12px;
 overflow: hidden;
 transition: 31ms cubic-bezier(.5, .7, .4, 1);
}

.buttonPlay:before {
 content: attr(alt);
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 inset: 0;
 font-size: 15px;
 font-weight: bold;
 color: white;
 letter-spacing: 4px;
 opacity: 1;
}

.buttonPlay:active {
 box-shadow: none;
 transform: translateY(7px);
 transition: 35ms cubic-bezier(.5, .7, .4, 1);
}

.buttonPlay:hover:before {
 transition: all .0s;
 transform: translateY(100%);
 opacity: 0;
}

.buttonPlay i {
 color: white;
 font-size: 15px;
 font-weight: bold;
 letter-spacing: 4px;
 font-style: normal;
 transition: all 2s ease;
 transform: translateY(-20px);
 opacity: 0;
}

.buttonPlay:hover i {
 transition: all .2s ease;
 transform: translateY(0px);
 opacity: 1;
}

.buttonPlay:hover i:nth-child(1) {
 transition-delay: 0.045s;
}

.buttonPlay:hover i:nth-child(2) {
 transition-delay: calc(0.045s * 3);
}

.buttonPlay:hover i:nth-child(3) {
 transition-delay: calc(0.045s * 4);
}

.buttonPlay:hover i:nth-child(4) {
 transition-delay: calc(0.045s * 5);
}

.buttonPlay:hover i:nth-child(6) {
 transition-delay: calc(0.045s * 6);
}

.buttonPlay:hover i:nth-child(7) {
 transition-delay: calc(0.045s * 7);
}

.buttonPlay:hover i:nth-child(8) {
 transition-delay: calc(0.045s * 8);
}

.buttonPlay:hover i:nth-child(9) {
 transition-delay: calc(0.045s * 9);
}

.buttonPlay:hover i:nth-child(10) {
 transition-delay: calc(0.045s * 10);
}
`
document.head.appendChild(style)
