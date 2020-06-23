# JS Katas - Mushroom

Resolve every Kata in its own file, following its description bellow.

Launch the unit tests in order to check the correct solution of the Katas.

The solutions must be uploaded to a public github/gitlab repository.

## How to test the code

This project uses `mocha` for testing and `babel` to use ES Modules in the spec files.

Run `npm install` to install all the project dependencies.\
Run `npm test` to check all the test files.\
Run `npm run test1` to check only the tests with the #kata-1 `describe` section, i.e. kata-1.spec.js file.\
Run `npm run test2` to check only the tests with the #kata-2 `describe` section, i.e. kata-2.spec.js file.\
Run `npm run test3` to check only the tests with the #kata-3 `describe` section, i.e. kata-3.spec.js file.

### Kata 1

Write a function that returns true when an integer is a palindrome. A palindrome is a word that is read the same backward as forward, such as `madam` or `racecar`.

|   | Example 1 | Example 2 | Example 3 |
|---|---|---|---|
| Input | 121 | -121 | 10 |
| **Output** | **true** | **false** | **false** |
| Reversed Input | 121 | 121- | 01 |

### Kata 2

Given an array of words, find the longest common prefix.\
Return an empty string `''` when no common prefix is found.

Example 1:

    Input: ['banana','ball','basket']
    Output: 'ba'

Example 2:

    Input: ['Saruman','SALUTES', 'sAuron']
    Output: 'sa'

Example 3:

    Input: ['mouse','cat','dog']
    Output: ''
    Explanation: No common prefix found.

### Kata 3

Write a method to know if a string of `words` follows the given `pattern`.

Assume `pattern` and `words` contain only lowercase letters, are never an empty string `''`, and `words` can always be separated by a single space.

Example 1:

    Input: pattern = 'abba', words = 'red green green red'
    Output: true

Example 2:

    Input: pattern = 'abba', words = 'red green green blue'
    Output: false

Example 3:

    Input: pattern = 'aaaa', words = 'red green green red'
    Output: false

Example 4:

    Input: pattern = 'abba', words = 'red red red red'
    Output: false

**Hint:** Try using an object to store data.
