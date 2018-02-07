# Codewars - Linear Regression of Y on X

## Problem
Linear Regression of Y on X
A linear regression line has an equation in the form Y = a + bX, where X is the explanatory variable and Y is the dependent variable. The parameter b represents the slope of the line, while a is called the intercept (the value of y when x = 0).
For more details visit the related wikipedia page.

The function that you have to write accepts two arguments, both in the form of a list/array, x and y, both representing the coordinates of the points to regress (so that, for example, the first point has coordinates (x[0], y[0]).

Your function should return a tuple (in Python) or an array (any other language) of two elements: a (intercept) and b (slope) in this order.

You must round your result to the first 4 decimal digits

Examples:

regression_line([25,30,35,40,45,50], [78,70,65,58,48,42]) === [114.381, -1.4457]

regressionLine([56,42,72,36,63,47,55,49,38,42,68,60], [147,125,160,118,149,128,150,145,115,140,152,155]) === [80.7777, 1.138]
## Link
https://www.codewars.com/kata/linear-regression-of-y-on-x/javascript
