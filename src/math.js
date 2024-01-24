function add(){
    Array.prototype.forEach.call(arguments, (x) => console.log(x) );
    let sum  = Array.prototype.reduce.call(arguments, ((cur,acc ) => cur +acc ));
    return function(y){
        
        
        console.log(sum);
        return   sum + y ;
    }
}

module.exports = add;