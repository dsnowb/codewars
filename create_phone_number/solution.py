def create_phone_number(n):
    n = ''.join([str(a) for a in n])
    return "({0}) {1}-{2}".format(n[:3], n[3:6], n[6:])
