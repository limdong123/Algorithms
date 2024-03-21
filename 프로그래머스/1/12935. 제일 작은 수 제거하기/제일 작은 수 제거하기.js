function solution(arr) {
    var answer = [];
    let min = arr[0]
    
    for(let i = 0; i < arr.length; i++){
        min = Math.min(arr[i], min)
    }
    
    answer = arr.filter((n) => n !== min)
    
    if(!answer.length){
        answer.push(-1)
    }
    
    return answer;
}