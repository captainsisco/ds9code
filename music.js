alert("sala de música, precione g para guitarra e b para bateria")
var audios= document.querySelectorAll("audio")
document.onkeypress=function(e){
if(e.key==="g")
audios[0].play()
if(e.key==="b")
audios[1].play()
if(e.key==="v")
audios[0].pause()
if(e.key==="c")
audios[1].pause()
}