# Write a Vehicle class with

-   attributes that represent the color, the name and the number of wheels of the vehicle.
-   a method getPropsString that returns a string with all vehicule properties (ex : "_key1_ has a value of _val1_, _key2_ has a value of _val2_, ...")
-   a method _logTypeAndProps_ that logs "Vehicle specs : " followed by the the output of _getPropsString_.

Then, write the _Motorcyle_ and _Car_ classes that inherit from _Vehicle_.

In the _Car_ class, write a mehtod that only makes sense for cars and not motorcycles (ex: 'lockDoors').

In _Vehicle_'s derived classes, override the _logTypeAndProps_ method to specify whether the object is an instance of _Motorcycle_ or _Car_ (ex: print "Car specs : ..." or "Motorcycle specs : ..." instead of "Vehicle specs : ...").
