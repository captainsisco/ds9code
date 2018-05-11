alert("deep space nine" )
var audios= document.querySelectorAll("audio")
document.onkeypress=function(e){
if(e.key==="t")
audios[0].play()
if(e.key==="p")
audios[1].play()
if(e.key==="e")
audios[0].pause()
if(e.key==="r")
audios[1].pause()
}