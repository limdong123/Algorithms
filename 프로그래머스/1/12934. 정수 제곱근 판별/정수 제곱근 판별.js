function solution(n) {
    var answer = 0;
    
    let n_n = Math.sqrt(n)
    
    answer = (n_n+1) * (n_n+1)
    
    if(parseInt(answer) != answer){
        answer = -1
    }
    
    return answer;
}