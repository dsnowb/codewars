def valid_parentheses(string):
    expr = 0
    for i in range(len(string)):
        if string[i] == '(': expr += 1
        elif string[i] == ')': 
            expr -= 1
            if expr < 0: return False
    
    return False if expr != 0 else True
