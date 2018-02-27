# Codewars - Image Processing

## Problem
Process the given image data by multiplying each pixel by the values of the given weights matrix.

Parameters
imageData: a flat (one-dimensional) array of the image data. The data is organized by row and then by column, and then one byte for each color channel red, green, and blue. These values will always be integers in the range 0-255.
For example, given the image:
A B C
D E F
G H I
The input array would be:

[
  A_Red, A_Green, A_Blue, B_Red, B_Green, B_Blue, C_Red, C_Green, C_Blue, 
  D_Red, D_Green, D_Blue, E_Red, E_Green, E_Blue, F_Red, F_Green, F_Blue,
  G_Red, G_Green, G_Blue, H_Red, H_Green, H_Blue, I_Red, I_Green, I_Blue
]
height: the number of rows of the image.
width: the number of columns of the image.
weights: an n x n array giving the weights for each of the neighboring pixels. The size of this array, n, will always be odd, with the center being the weight of the pixel itself. The array is by row and then column. I.e. weights[y][x]

Return
An array of the image data adjusted by the weighted average per pixel's neighborhood. Where the weights matrix specifies pixels outside the actual image, use the values of the closest pixel. (E.g. extend the edges as far as necessary to provide values for the matrix.) Each value should be in the range 0-255.
For more information about image processing please see wikipedia


## Link
https://www.codewars.com/kata/5239078120eeabe18f0000da
