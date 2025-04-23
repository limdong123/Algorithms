def solution(n):
    answer = 0
    
    list_n = list(map(int, str(n)))
    list_n.sort(reverse = False)
    
    for i in range(len(list_n)):
        print(i, list_n[i])
        answer += (list_n[i])*10**(i)    
    return answer