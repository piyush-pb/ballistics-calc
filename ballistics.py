from math import *
from numpy import *
import numpy

A = float(input("Enter the cross-sectional area of a bullet m2 :"))
V0 = float(input("Enter initial muzzel speed or bullet speed in m/s :"))
m = float(input("Enter mass of bullet in kg :"))
h = float(input("Enter height of bullet from ground in meter :"))
g = 9.8
t = sqrt( (2* h) /g)
c = 0.295
rho = 1.2
D = float(input("Enter the distance of target in meter :"))
v = V0
x = (V0 * t)- ( c * rho * A * (pow(v,2)) * (pow(t,2)))/( 2 * m)
hypo = sqrt((pow(x,2)+pow(h,2)))
J = (h/x)
Q = ((numpy.arctan(J))*57.32)
Y = x-D
U = Y*tan(Q)*.017455
W = h-U
print("optimum angle of the muzzle :" + str(Q))
print("the target will hit at this height when parallel to ground :" + str(U))
