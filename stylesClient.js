const style = document.createElement('style')
style.textContent = `
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
