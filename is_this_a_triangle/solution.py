def is_triangle(a, b, c):
    from math import fabs
    if a >= b and a >= c:
        hyp = a
        leg1 = b
        leg2 = c
    elif b >= a and b >= c:
        hyp = b
        leg1 = a
        leg2 = c
    else:
        hyp = c
        leg1 = a
        leg2 = b
    return True if hyp > fabs(leg1 - leg2) and hyp < fabs(leg1 + leg2) else False
