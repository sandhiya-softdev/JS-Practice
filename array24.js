let a =[2, 4, 7, 10];
let b=a.some(function(morethan){
    return morethan%2!==0;

});
console.log(b);
