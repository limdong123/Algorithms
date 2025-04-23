def solution(n):
    answer = -1
    m = 1
    
    while(m**2 <= n):
        if(m**2 == n):
            answer = (m+1)**2
            break
        else:
            m += 1
            
    
    
    return answer