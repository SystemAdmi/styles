const style = document.createElement('style')
style.textContent = `
h1 {
    color: white;
    margin-left: 50px;
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

.play_button {
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
   
.play_button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.4s;
}

.play_button:hover {
    box-shadow: 0px 30px 56px -5px #1875FF;
    width: 410px;
    height: 110px;
}
`
document.head.appendChild(style)
