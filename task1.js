function solution1(a,b,c){
    if ( a < b && c > 0 && typeof(a)=="number" && typeof(b)=="number" && typeof(c)=="number"){
        return console.log(Math.ceil((b-a)/c) + " days"); 
        
    }
    else {
        return console.log("bad data");
    }
} 
