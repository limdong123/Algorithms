function solution(keymap, targets) {
    var answer = [];
    
    //["ABACD", "BCEFD"]	["ABCD","AABB"]	[9, 4]
    //1 + 1 + 2 + 5
    //1 + 1 + 1 + 1
    //["AA"]	["B"]	[-1]
    //불가능
    //["AGZ", "BSSS"]	["ASA","BGZ"]	[4, 6]
    //1 + 2 + 1
    //1 + 2 + 3
    
    //배열 두개 순회 
    //->원하는 알파벳나오면 그 인덱스 answer에 추가(둘다 돌았는데 안나오면 -1)  
    //->출력
    
    let text = ""
    let answer_num = 0
    for(let i = 0; i < targets.length; i++){ //targets 도는 배열
        for(let j = 0; j < targets[i].length; j++){ //targets[i]의 알파벳 순환 배열 
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