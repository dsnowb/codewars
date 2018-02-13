# Codewars - Traffic Jam

## Problem
Story
Well, here I am stuck in another traffic jam.

Damn all those courteous people!

Cars are trying to enter the main road from side-streets somewhere ahead of me and people keep letting them cut in.

Each time somebody is let in the effect ripples back down the road, so pretty soon I am not moving at all.

(Sigh... late again...)

Visually
The diagram below shows lots of cars all attempting to go North.

the a,b,c... cars are on the main road with me (X)
the B cars and C cars are merging from side streets
          |  a  |   
          |  b  | ↑  
  --------+  c  |  
     BBBBBB  d  |   
  --------+  e  |  
          |  f  | ↑
          |  g  |   
  --------+  h  |
      CCCCC  i  |
  --------+  j  | ↑
          |  k  |
          |  l  |
          |  m  |
          |  X  | 

This can be represented as

mainRoad = "abcdefghijklmX"
sideStreets = ["","","","BBBBBB","","","","","CCCCC"]
Kata Task
Assume every car on the main road will "give way" to 1 car entering from each side street.

Return a string representing the cars (up to and including me) in the order they exit off the top of the diagram.

Notes
My car is the only X, and I am always on the main road
Other cars may be any alpha-numeric character (except X of course)
There are no "gaps" between cars
Assume side streets are always on the left (as in the diagram)
The sideStreets array length may vary but is never more than the length of the main road
A pre-loaded Util.display(mainRoad,sideStreets) method is provided which may help to visualise the data

## Link
https://www.codewars.com/kata/5a26073ce1ce0e3c01000023
