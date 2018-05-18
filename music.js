alert("sala de música, precione g para guitarra e b para bateria")
var audios= document.querySelectorAll("audio")
var gplaying= false
var dplaying= false
document.onkeypress=function(e){
if(e.key==="g"){
if(gplaying)
audios[0].pause()
else
audios[0].play()
gplaying= !gplaying
}
if(e.key==="b")
if(dplaying)
audios[1].play()
else
audios[1].pause()
dplaying= !dplaying
if(e.key==="q")
speechSynthesis.speak(new SpeechSynthesisUtterance("a regra de aquisição número 147 diz: nunca gaste mais do que o necessário."))
}