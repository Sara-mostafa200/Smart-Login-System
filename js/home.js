
var hometitle= document.querySelector("#home p");
var namedata = localStorage.getItem("name")

console.log(namedata);


hometitle.prepend("welcome "+ namedata)

