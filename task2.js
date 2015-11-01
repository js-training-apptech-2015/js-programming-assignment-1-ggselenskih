function solution2(a,b){
    maxXOR=0;
    while (a<b){
        var c=a+1;
        while (c<=b){
            curXOR=a^c;
            if (maxXOR<curXOR){
                maxXOR=curXOR;
            }
            c++;
            
        }
        a++;
    }

    return console.log(maxXOR);
} 
