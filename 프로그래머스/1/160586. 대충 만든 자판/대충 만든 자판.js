function solution(keymap, targets) {
    var answer = [];
    
    let text = ""
    let answer_num = 0
    for(let i = 0; i < targets.length; i++){ 
        for(let j = 0; j < targets[i].length; j++){ 
            text = targets[i][j] 
            let num = 101
            for(let k = 0; k < keymap.length; k++){
                let nowNum = keymap[k].indexOf(text)
                if(nowNum != -1){
                    num = Math.min(num,nowNum)
                }
            }
            if(num === 101){
                answer_num = -1
                break
            }
            answer_num += num +1
        }
        answer.push(answer_num)
        answer_num = 0
    }
    
    return answer;
}