def isValidWalk(walk):
    if len(walk) != 10: return False
    n, s, e, w = 0,0,0,0
    for i in walk:
        if walk[i] == 'n': n = n + 1
        elif walk[i] == 's': s = s + 1
        elif walk[i] == 'e': e = e + 1
        else: w = w + 1
    if n == s and e == w: return True
    return False
