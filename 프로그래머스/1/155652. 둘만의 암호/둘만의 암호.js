function solution(s, skip, index) {
    var answer = '';
    const aph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    
    //aph에서 skip할 것들 삭제
    for(let i = 0; i < skip.length; i++){
        for(let j = 0; j < aph.length; j++){
            if(aph[j] === skip[i]){
                aph.splice(j,1)
                j--
            }
        }
    }
    console.log(aph.length)
    console.log(aph.indexOf("z"))
    console.log(aph[21+5-22])
    
    for(let i = 0; i < s.length; i++){
        idx = aph.indexOf(s[i])
        idx += index
        while(idx >= aph.length){
            idx -= aph.length
        }
        
        answer += aph[idx]
    }
    
    return answer;
}