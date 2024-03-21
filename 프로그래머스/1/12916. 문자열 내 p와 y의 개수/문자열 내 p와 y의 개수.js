function solution(s){
    var answer = true;
    
    let P = 0
    let Y = 0

    let big_s = s.toUpperCase()
    console.log(big_s)
    
    for(let i = 0; i < s.length; i++){
        if(big_s[i] === "P"){
            P++
        }else if(big_s[i] === "Y"){
            Y++
        }
    }
    
    if(P !== Y){
        answer = false
    }

    return answer;
}