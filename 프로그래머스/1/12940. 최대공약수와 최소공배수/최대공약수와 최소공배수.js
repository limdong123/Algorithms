function solution(n, m) {
    var answer = [];
    let gcd = 0;
    let lcm = 0;
    
    let a = n
    let b = m
    while(b !== 0){
        let temp = a % b
        a = b
        b = temp
    }
    
    gcd = a
    
    lcm = (n*m) / gcd
    
    answer.push(gcd)
    answer.push(lcm)
    
    return answer;
}