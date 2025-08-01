const readline=require('readline').createInterface({
input:process.stdin,
output:process.stdout

});
readline.question('enter a number for calulation', input=>{
let n=parseInt(input);
let i=1 
do{ console.log(n + "*" + i +"=" + (n *i) ); i++;}
while(i<=10) 
readline.close();


})