---
title: 'Modules'
taxonomy:
    category:
        - docs
---



The JavaScript API supports defining custom modules using de facto standard CommonJS / Node.js conventions.

> Modules offer a powerful way to split larger problems and solutions into smaller-sized chunks, which can sometimes make code much easier to reuse and maintain.

> Helper libraries and shared APIs can be created as a JavaScript module and then used across different scripts by importing with [Script.require](https://wiki.highfidelity.com/index.php?title=Require()&action=edit&redlink=1).

> In some cases, the module author and its user might be the same developer -- like when using modules as a way to organize internal project dependencies. In other cases, the module author and its users might be completely different -- for example, a developer well-versed in Quaternions could create a module for performing common tasks, in a way that exposes a simple API that no longer depends on particular knowledge of Quaternions to leverage as a shortcut from user scripts.



## Defining a JS module

Typically a module will define values to export (or "share") by assigning properties to the [module.exports](https://wiki.highfidelity.com/index.php?title=Module.exports&action=edit&redlink=1), which is a global-like Object that the system defines as an empty Object when first loading a script with [Script.require](https://wiki.highfidelity.com/index.php?title=Require()&action=edit&redlink=1).

It is up to the module author to decide what values should be exported or not -- which can range from sharing a single helper function up to exporting a full API.

CommonJS offers two related conventions for exporting values, but usually just one of these approaches is used per each module script:

- Defining properties one at a time -- eg: `module.exports.key = value;`
- Overriding the whole exports value -- eg: `module.exports = { key: value, ... };`

It is also possible to define properties on a special "free variable" named `exports` -- eg: `exports.key = value;`. However, this is considered by some to be a legacy approach (see below for more details).

### Exporting individual values

```
// mymodule.js
module.exports.foo = 'bar';
module.exports.add = function(a, b) {
    return a + b;
};

```

### Exporting a whole API

```
// mymodule.js
module.exports = {
  foo: 'bar',
  add: function(a,b) {
    return a + b;
  }
};
```

### Exporting a single helper function

```
// subtract.js
function subtract(a, b) {
    return a - b;
}

module.exports = subtract;

```

### Exporting through `exports`

Similar to other CommonJS-compatible platforms, exported values can be assigned as properties on an implicit variable named `exports`.

```
// mymodule.js (legacy `exports` convention)
exports.foo = 'bar';
exports.add = function(a, b) {
    return a + b;
};

```

The initial value of `exports` will be strictly equal to the Object reference contained in `module.exports` -- so, by default, the following two lines say the same thing:

```
// module
exports.foo = 'bar';
module.exports.foo = 'bar';

```

However, it is only possible to override the entire module export with `module.exports = value;` -- `exports = value;` will not work.

## Importing modules

Modules can be imported using [Script.require(moduleId)](https://wiki.highfidelity.com/index.php?title=Require()&action=edit&redlink=1), where `moduleId` is either an absolute URL or an file path starting with `/`, `./`, or `../`. Relative paths are automatically resolved in context of the current script or module path.

```
// myscript.js
var mymod = Script.require('./mymodule.js');
print(mymod.foo, mymod.add(2, 2)); // prints "bar 4"

var subtract = Script.require('./subtract.js');
print(subtract(4, 2)); // prints "2"

var config = Script.require('./config.json');
print(config.width, config.height); // prints "800 600"

```

### JSON modules

Module filenames ending in ".json" are interpreted as JSON and the *parsed result* automatically becomes the exported value:

```
({
  "name": "custom configuration (myconfig.json)",
  "width": 800,
  "height": 600
})

```

```
var config = Script.require('./myconfig.json');
print(config.width, config.height); // outputs "800 600"

```

JSON modules can be loaded from the local filesytem and so long as only relative paths are used (like above), the .json and .js can later be uploaded together onto a web server or ATP without having to change any internal paths used in the script.

## Organizing projects

Depending on the project, you might want to have your custom modules reside in a sibling folder next to scripts and other resources. One example project layout:

```
// [project root]
//     readme.md
//     modules/
//         mymodule.js
//         config.json
//     scripts/
//         myscript.js
//     resources/
//         app-icon.svg
//         webview.html
//

// [project root]/scripts/myscript.js
var config = Script.require('../modules/config.json');
var mymod = Script.require('../modules/mymodule.js');
var absoluteIconURL = Script.resolvePath('../resources/app-icon.svg');

mymod.createWidget({ name: config.name, absoluteIconURL: absoluteIconURL })

```

## Misc. Notes

- Modules can be loaded from the local filesystem, but access is limited in the same way as [Script.include](https://wiki.highfidelity.com/wiki/Include()).


- Modules are cached per script engine by their fully-resolved URL. When cached, all subsequent calls to `require` (for the same resolved URL) will return a reference to the previous `module.exports` value.

### Module scopes

- Every Module is evaluated in its own scope -- so for example top-level `var`'s remain local to the current module only. This means that with modules, there is often no need or benefit in wrapping your whole script file in a closure like `(function() { ... module definitions })()`).


- Modules are executed in the same script engine as they are required from. This means they can still access and create global variables when needed. As a result, it is possible to upgrade legacy "include" libraries (which export values using global variables) to work both as [Script.include](https://wiki.highfidelity.com/wiki/Include()) and [Script.require](https://wiki.highfidelity.com/index.php?title=Require()&action=edit&redlink=1) dependencies.

### The `module` Object

`module` is a system-defined "free variable", which makes it similar to a global in that it's available across the entire script file -- but it is effectively a top-level local variable that only the current script can see.

In addition to `module.exports`, several other properties are available through the `module` Object:

- `module.id` -- a String value that contains the fully-resolved URL used to load the current module.
- `module.parent` -- an Object reference to the parent module (if any) that required this module.
- `module.children` -- an Array containing references to any child modules that were required by this module.
- `module.loaded` -- a Boolean value indicating whether this module is fully-loaded; typically this will be true, but when the system detects cyclic dependencies the value will initially be false and the module will have to wait (eg: using Script.setTimeout or Script.update) for the cycles to be resolved before proceeding with initialization.

