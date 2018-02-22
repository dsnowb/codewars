def dirReduc(arr):
    flipD = {'NORTH':'SOUTH', 'SOUTH':'NORTH', 'EAST':'WEST', 'WEST':'EAST'}
    i = 0
    while i < len(arr) - 1:
        if flipD[arr[i]] == arr[i+1]:
            del(arr[i+1])
            del(arr[i])
            i = 0
        else: i+=1
    
    return arr  
