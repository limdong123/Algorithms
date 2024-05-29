function solution(s) {
    var answer = 0;
    let X = 0
    let notX = 0
    let Xtext = s[0]
    
    for(let i = 0; i < s.length; i++){
        if(i == s.length-1) {
            answer++ 
                             break
        }
        if(Xtext === s[i]){
            X++
        }else if(Xtext !== s[i]){
            notX++
        }
        if(X !== notX) continue
        else if(X === notX){
                Xtext = s[i+1]
                answer++
             }
        
    }
    
    
    
    return answer;
}