function solution(n) {
    var answer = "";
    let s = String(n)
    s = s.split("").sort((a,b) => b-a)
    
    for(let i = 0; i < s.length; i++){
        answer += s[i]
    }
    
    answer = Number(answer)
    
    return answer;
}