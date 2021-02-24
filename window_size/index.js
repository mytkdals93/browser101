const app = document.getElementById("app");
app.innerHTML = `<h1>window.screen <span id="screen"></span></h1>`;
app.innerHTML +=`<p>모니터 사이즈</p>`
app.innerHTML += `<h1>window.screen.availWH <span id="screen-avail"></span></h1>`;
app.innerHTML +=`<p>모니터 사이즈 (작업표시줄 제외)</p>`
app.innerHTML += `<h1>window.outer <span id="outer"></span></h1>`;
app.innerHTML +=`<p>브라우저 가장 바깥 테두리의 사이즈(북마크, 주소창등 포함)</p>`
app.innerHTML += `<h1>window.inner <span id="inner"></span></h1>`;
app.innerHTML +=`<p>브라우저 안쪽 테두리(탭 불포함)</p>`
app.innerHTML += `<h1>documentElement.clientWidth <span id="client-width"></span></h1>`;
app.innerHTML +=`<p>도큐멘트 사이즈</p>`

const screen = document.getElementById("screen");
const screenAvail = document.getElementById("screen-avail");
const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
const clientWidth = document.getElementById("client-width");

(function(){
    screen.innerHTML = `${window.screen.width}, ${window.screen.height}`;
    screenAvail.innerHTML = `${window.screen.availWidth}, ${window.screen.availHeight}`;
    outer.innerHTML = `${window.outerWidth}, ${window.outerHeight}`;
    inner.innerHTML = `${window.innerWidth}, ${window.innerHeight}`;
    clientWidth.innerHTML = `${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;
})()

window.addEventListener("resize",()=>{
    screen.innerHTML = `${window.screen.width}, ${window.screen.height}`;
    screenAvail.innerHTML = `${window.screen.availWidth}, ${window.screen.availHeight}`;
    outer.innerHTML = `${window.outerWidth}, ${window.outerHeight}`;
    inner.innerHTML = `${window.innerWidth}, ${window.innerHeight}`;
    clientWidth.innerHTML = `${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;
})