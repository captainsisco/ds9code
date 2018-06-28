var tabela= [
["m",26,2,"c","carro","30 min",13.3],
["m",23,1,"s","ônibus","35 min",11.8],
["f",41,5,"v","apé","2h50 min",8.9],
["m",49,3,"p","apé","45 min",13.9],
["f",19,5,"s","carro","1h",11.6],
["f",20,4,"s","apé","1h20min",16],
["m",27,20,"s","carro","45 min",19.5],
["m",38,3,"c","apé","2h15min",9.3],
["m",27,2,"p","o","1h30 min",10.2],
["f",50,7,"c","apé","45 min",12.4],
["m",52,2,"s","apé","1h40 min",10.7],
["f",48,4,"c","a","1h15 min",14.7],
["m",28,4,"c","apé","1h",16.6],
["m",36,4,"c","c","1h30 min",12.5],
["f",31,3,"s","o","2h",8.2],
["m",56,3,"v","a","30 min",15.4],
["f",41,6,"s","c","2h30 min",18.8],
["m",44,1,"c","o","50 min",12.1],
["f",29,2,"p","a","40 min",5],
["m",31,3,"c","o","2h45 min",7.6],
];
//document.write(tabela[2][5])
var maioridade= 0;
var menorrenda= 55;
var sf= 0;
var cm= 0;
var cf= 0;
var mv= 0;
for(var i= 0; i<tabela.length; i++){
sf= sf+tabela[i][2];						
	if(tabela[i][6]<menorrenda){
menorrenda= tabela[i][6];
}
if(tabela[i][1] > maioridade){
	maioridade= tabela[i][1];
}}
	for(var i1=0; i1<tabela.length; i1++){
if(tabela[i1][0]=="m"){
cm= cm+1;
}
if(tabela[i1][0]=="f"){
cf= cf+1;
}}
for(var i2=0; i2<tabela.length; i2++){
mv= mv+tabela[i2][2];
}


function speech (text){
	var s= new SpeechSynthesisUtterance(text);
s.lang="pt-BR"
s.rate=1
s.pitch=2.9
return s;
}
var button= document.querySelector("button");
button.onclick= function (){
speechSynthesis.speak(speech("the mediun of visits that go visit the parc is: "+mv+" there are: "+cm+" man and "+cf+"women that go in the parc"));
}