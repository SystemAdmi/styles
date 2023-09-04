const style = document.createElement('style')
style.textContent = `

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
