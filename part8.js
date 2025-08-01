const readline=require('readline').createInterface({
input:process.stdin,
output:process.stdout

});
readline.question('enter a number', input=>{
let n=Number (input);
 
for(let i=2; i <=n; i++){
    let isPrime = true;
    for (let j=2; j<i; j++){
        if (1%j ==0){
            isPrime= false
        }
    }
    if (isPrime)
    {console.log(i);}
}
readline.close();


})