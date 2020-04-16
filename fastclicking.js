var nos=document.querySelectorAll(".numbers");
var play=document.querySelector(".ln1");
var bsc=document.querySelectorAll(".val");
var show=document.querySelector(".showscore");
var time=document.querySelector(".time");
var total=document.querySelector(".new");
var prevar=0;
var best=[];
var stop=0;
var temp=0;
for(i=0;i<nos.length;i++){
	nos[i].addEventListener("click",function(){
		this.style.background="black";
		var check=this.textContent;
		if(prevar==(Number(check)-1)){
			prevar+=1;
			if(check==1){
			stop=setInterval(runtime,100);
		    }else if(check==40){
			    clearInterval(stop);
			    this.textContent="";
			    show.textContent="Your Score is "+time.textContent+" sec";
			    for(var j=0;j<40;j++){
                	nos[j].style.width=0;
                	nos[j].style.padding=0;
                	nos[j].style.margin=0;
                }
			    total.classList.add("hide");
			    temp=time.textContent;
                dobestscores(temp);
			    finalbsc(best);  
		    }
		}else{
			eraseall();
			show.textContent="GAME OVER!!!";
			for(var j=0;j<40;j++){
                	nos[j].style.width=0;
                	nos[j].style.padding=0;
                	nos[j].style.margin=0;
                }
			total.classList.add("hide");
		}
		this.textContent="";
});
}
function runtime(){
	time.textContent=((Number(time.textContent)*10)+1)/10;
}
function allocatenos(){
	for(var j=0;j<40;j++){
    	nos[j].style.width="20px";
	    nos[j].style.padding="10px 10px";
	    nos[j].style.margin="1px";
    }
	for(var i=0;i<nos.length;i++){
	while(nos[i].textContent==""){
		var k=0;
		var randint=getRandomInt(40);
		for(var j=0;j<i;j++){
			if(nos[j].textContent==randint){
				k++;
				break;
			}
		}
		if(k==0){
			nos[i].textContent=randint;
			nos[i].style.background="grey";
			nos[i].style.width="20px";
	        nos[i].style.padding="10px 10px";
	        nos[i].style.margin="1px";
		}
	}
}
finalbsc(best); 
}
function finalbsc(best){
	var tmp=[];
	for(var i=0;i<best.length;i++){
		var str=(i+1)+". "+best[i]+" sec";
		tmp.push(str);
	}
	var j=0;
	for(;j<tmp.length;j++){
		bsc[j].textContent=tmp[j];
	}
	for(;j<5;j++){
		bsc[j].textContent=j+1+". NIL";
	}
}
allocatenos();
function sortarr(best){
	for(var i=0;i<best.length;i++){
		for(var j=i+1;j<best.length;j++){
			if(best[i]>best[j]){
				var tem=best[i];
				best[i]=best[j];
				best[j]=tem;
			}
		}
	}
}
function allcomplete(){
	var complete=true;
	for(var i=0;i<nos.length;i++){
		if(nos[i].textContent!=""){
			complete=false;
		}
	}
	return complete;
}
function dobestscores(temp){
	if(best.length<5){
		best.push(Number(temp));
		if(best.length>1){
		sortarr(best);	
		}		
	}else{
		if(Number(temp)<best[4])
			best[4]=temp;
			sortarr(best);
	}
}
function eraseall(){
	for(var i=0;i<nos.length;i++){
	nos[i].style.background="black";
	nos[i].textContent="";
}
}
function getRandomInt(max) {
  return Math.floor(Math.random() * (max)) + 1;  
}
play.addEventListener("click",function(){
prevar=0;
clearInterval(stop);
show.textContent="";
total.classList.remove("hide");
for(var i=0;i<nos.length;i++){
	nos[i].style.background="grey";
	nos[i].textContent="";
}
time.textContent=0;
allocatenos();
});
//keep a pre text var to check if wrongly pressed
//and if wrongly pressed show wrong ans
//show ans as NIL-at start itself if b[i]==""then nil
//for opacity multiply it with 0.2