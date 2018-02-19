def divisors(integer):
    list = [int(integer/(a+2)) for a in reversed(range(int(integer/2))) if not integer%(a+2)]
    return list if len(list) else '{0} is prime'.format(integer)
