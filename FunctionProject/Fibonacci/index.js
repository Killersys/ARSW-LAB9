var bigInt = require("big-integer");

var mem = [];

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth
    let nth_1 = bigInt.one;
    let nth_2 = bigInt.zero;
    let answer = bigInt.zero;

    if (nth < 0)
        throw 'must be greater than 0'
    else if (nth === 0)
        answer = nth_2
    else if (nth === 1)
        answer = nth_1
    else {
        if(nth+1>mem.length){
            mem = [];
            for(var i=0;i<nth+1;i++){
                mem.push(-1);}}
        answer = recursiveFibonacci(nth);}
    context.res = {
        body: answer.toString()};}

function recursiveFibonacci(n){
    if(n==0 || n==1){
        return bigInt.one;
    }else{
        if(mem[n]!=-1) { 
			return mem[n];}
			else {
			mem[n] = recursiveFibonacci(n-1).add(recursiveFibonacci(n-2));
			return mem[n];}}}