function Con_A_Decimal(decimal,base){
    //Esta funcion cualquier numero a decimal 
    // ejemplo1: un binario es base 2  Con_A_Decimal(100110,2)
    // ejemplo2: un hexadecimal es base 16  Con_A_Decimal('F4A9',16)
    var str = (''+decimal);
    var res = 0;
    var hex = {'A':10,'B':11,'C':12,'D':13,'E':14,'F':15}
    for(var x = 0; x < str.length; x++){
        var aux= str.substr(-1*(x+1),1);
        if(isNaN(aux)){
            aux = hex[aux.toUpperCase()];
        }
        res += Math.pow(base,x)*parseInt(aux);
    }
    console.log(res)
}