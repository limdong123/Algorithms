function solution(arr)
{
    var answer = [arr[0]];
    let num = arr[0];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== num){
            num = arr[i]
            answer.push(num)
        }
    }
    
    return answer;
}