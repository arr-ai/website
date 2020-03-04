---
title: 'Arrai'
date: 2018-11-28T15:14:39+10:00
---

The ultimate data engine.

Does it have arrays?
No, 
No it does not

But that's the point...



{{<startplay>}}

{{<playground id = 1 comment = "Evaluate an expression: arrai eval" input = "41 + 1" output = "42" >}}

{{<playground id = 2 comment = "Evaluate count of string: arrai eval" input = "'123456789' count" output = "9">}}

{{<playground id = 3 comment = "Evaluate a collection of values: arrai eval" input = "'[1,2,3,4] >> .^2" output = "[1,4,9,16]">}}

{{<playground id = 4 comment = "Filter a collection of values: arrai eval" input = "{(a:1, b:2), (a:2, b:3), (a:2, b:4)} where .a=2" output = "{(a:2, b:4)}">}}

{{<playground id = 5 comment = "Operations for filtering a stream of values: arrai eval" input = "'123456789' count" output = "9">}}

{{<playground id = 6 comment = "Operations for filtering a stream of values: arrai eval" input = "{(a:1, b:2), (a:2, b:3), (a:2, b:4)} where .a=2 and .b=3" output = "9">}}


{{<endplay>}}