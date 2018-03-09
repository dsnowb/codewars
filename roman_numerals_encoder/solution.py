def solution(n):
    tens = {0:'I',1:'X',2:'C',3:'M'}
    fivs = {0:'V',1:'L',2:'D'}
    num = [int(x) for x in reversed(list(str(n)))]
    roman = []
    
    for idx,val in enumerate(num):
        five = False
        if val==9:
            roman.append('{}{}'.format(tens[idx],tens[idx+1]))
            val-=9
        if val>=5:
            five = True
            val-=5
        if val==4:
            roman.append('{}{}'.format(tens[idx],fivs[idx]))
            val-=4
        while val > 0:
            roman.append(tens[idx])
            val-=1
        if five: roman.append(fivs[idx])
        
    return ''.join(reversed(roman))
