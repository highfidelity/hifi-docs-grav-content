---
title: 'Script'
taxonomy:
    category:
        - docs
---

# clearInterval()

[setInterval()](https://wiki.highfidelity.com/wiki/SetInterval()) is used to run a specified callback function at a specified interval.

`clearInterval()` is used to stop calls scheduled using [setInterval()](https://wiki.highfidelity.com/wiki/SetInterval()).

## Function

`clearInterval(valueReturnedBySetInterval) // Return value`

## Arguments

**valueReturnedBySetInterval: valueReturnedBySetInterval**: The value returned by [setInterval()](https://wiki.highfidelity.com/wiki/SetInterval())

## Examples

In this example, `setInterval()` is used to print a line to the debug log once every 1000 milliseconds. The repeating call is stopped by using `clearInterval()`.

```
var multiple_timer = Script.setInterval(function() {
    print("Repeating timer fired!"); 
}, 1000);

// Stops the repeating timer
Script.clearInterval(multiple_timer);

```

You should not see any output from this example as the call is stopped.