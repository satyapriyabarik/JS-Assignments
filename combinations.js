var inputval = document.getElementById('userinput');
var output = document.getElementById('output');
var finalop=[]
var c1=[]
var c2;
function combi(){
    finalop=[];c1=[];
 for(var i=0,j=1;i<inputval.value.length;i++,j++){
     finalop.push(inputval.value[i]);
     if(i<inputval.value.length-1){
     c1.push(inputval.value[i]+inputval.value[i+1])
     }
     c2 = inputval.value;
 }
 output.innerHTML=(finalop.concat(c1).concat(c2)).toString();
 
}
