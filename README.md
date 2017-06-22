multi-replace
==

A way to replace multiple strings inside a single string with one command.

Usage
===
```
let longString = 'This is a really long string, and I want to replace a few sub strings here';

let replaceRules = {
    'really': 'very',
    'I': 'we',
    'string': 'striiiiing'
};

const multiReplace = require('multi-replace');
let newString = multiReplace(longString, replaceRules);

// The result should look like this :
// longString = 'This is a very long striiiiing, and we want to replace a few sub striiiiings here';

// By default, the replace is case sensitive.
// If we don't want it to be case sensitive, then we can add an option like so :
newString = multiReplace(longString, replaceRules, { caseSensitive: false });
```
