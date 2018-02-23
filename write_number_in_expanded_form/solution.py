def expanded_form(num):
    return ' + '.join([str(int(x) * 10**(len(list(str(num))) - i - 1)) for i,x in enumerate(list(str(num))) if x!='0'])
