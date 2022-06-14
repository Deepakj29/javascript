
//Removal of specific string 
function remove(str,pos){
    var q=str.slice(0,pos)+str.slice(pos+1,str.length);
    return(q);
    
}
console.log("Removal of string:");
console.log(remove("deepak",0));
console.log(remove("deepak",4));



//Swap an array
function swap(arr){
    [arr[0],arr[arr.length-1]]=[arr[arr.length-1],arr[0]];
    return arr;
}
console.log("Swap of array element:");
console.log(swap([1,2,3,4,5]));



//sum of numbers
function sum(num){
 
    var sum1=0;
    while(num>0){
        sum1+=num;
        num=Math.floor(num/2);
    }
    return sum1;
}
console.log("sum of numbers:");
console.log(sum(8));



//Factorial 
function factorial(n){
var fact=1,n;
while(n>=1){
    fact=fact*n;
    n=n-1;
}
console.log("factorial of given num is"+ fact);
console.log(fact);
}console.log(factorial(5));


//palindrome
function palindrome(input){
    var a=0;
    var b=input.length-1;
    while(a<b){
        if(input[a]!=input[b]){
            return false;
        }
        a++;
        b--;
    }
    return true;
}
console.log("The give string is palindrome:")
console.log(palindrome("madam"))

//pyramid partten
document.write("<br/>"); 
var p=5;
var a="^";
for(var m=1;m<=p;m++){
    for(var k=1;k<=m;k++){
        console.log(a);
    }
   console.log("\n"); 
}


//Rotate string
var a="Deepak";
var j;
var i=a.length-1;
console.log(a);
while(i>=0){
j=a.charAt(i);
console.log(j);
i--;
}

  

//fabinnoci
var a,b,result;
a=0;
b=1;
result=b;
for(var i=1;i<10;i++){
    console.log(result);
    result=a+b;
    a=b;
    b=result;
}
