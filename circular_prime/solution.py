def circular_prime(n):
    if n == 1: return False
    nl = list(str(n))    
    for j in range(len(nl)):
        for i in range(2,int(n/2)):
            if (not n%i) or n-i <= 0: return False
        front = nl.pop()
        nl.insert(0,front)
        n = int(''.join(nl))
    
    return True
