alert("ページを開いてくれてありがとう✨");
console.log("Javascriptが動いています！");

const button = document.getElementById("magicButton");
const message = document.getElementById("message");

button.addEventListener("click",function() {
  message.textContent = "✨　魔法がかかったよ！　✨";
});
