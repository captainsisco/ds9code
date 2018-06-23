//alert("vamos comer x!");
function speech (text){
	var s= new SpeechSynthesisUtterance(text);
s.lang="pt-BR"
s.rate=1
s.pitch=2.9
return s;
}
//speechSynthesis.speak(speech("aqquisition rule number 38: never trust woman to make negotiations."));
var input= document.querySelector("input")
var button= document.querySelector("button")
button.onclick= function (){
speechSynthesis.speak(speech(input.value))
}