function solution(left, right) {
    var answer = 0;
    let num = 0
    
    for(let i = left; i <= right; i++){
        num = 0
        for(let j = 1; j <= i; j++){
            if(i%j === 0){
                num++
            }
        }
        if(num%2 === 0){
            answer += i
        }else{
            answer -= i
        }
    }
    
    return answer;
}