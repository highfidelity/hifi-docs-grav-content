---
title: 'Xcode'
taxonomy:
  category: docs
---

To have **Xcode** generate C++ files with boilerplates and include guards that are compliant with the [Coding Standard](https://docs.highfidelity.com/build-guide/coding-standards) you can add an Xcode file template.

There's an excellent guide for that process [here](http://www.bobmccune.com/2012/03/04/creating-custom-xcode-4-file-templates/).

A zip file containing the High Fidelity file template can be found [here](https://docs.highfidelity.com/build-guide/xcode).

As per the guide linked above, that folder should be placed in `~/Library/Developer/Xcode/Templates/File Templates/`. You will need to create that if it does not exist.

With that folder in the right place, the next time you restart Xcode you should have a new category when you go to create a new file.

![](new.png)

By selecting this type you will get a *.cpp and a *.h file with the name of your choosing that has boilerplates and include guards mostly pre-populated.

You will need to insert the sub-folder that contains your source file yourself, in the third line of the boilerplate.
