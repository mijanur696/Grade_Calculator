function mysubmit(){
  var a =document.querySelector("#myinput1").value;
  var b =document.querySelector("#myinput2").value;
  var c =document.querySelector("#myinput3").value;
  var d =document.querySelector("#myinput4").value;
   var total=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d);
 
  
  var per = (total/400) * 100;
 

  let grade1=[];
  
  
  if(per<=100 && per>=80){
    grade1.push('Grade A')
  }
 else if(per>=60 && per<=79){
  grade1.push('Grade B')
  }

 else if(per>=40 && per<=59){
 grade1.push('Grade C')
  }
  else{
    grade1.push('Grade D')
  }
       document.getElementById("myh4").innerHTML="Your total number is " + total +' . ' + 'Your persentage is ' + per+'%'+'.'+ 'Your  '+grade1;
}


