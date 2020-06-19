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

Given a 32-bit signed integer, reverse digits of an integer.

**Note:** Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2<sup>31</sup>, 2<sup>31</sup> − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

|   | Example 1 | Example 2 | Example 3 |
|---|---|---|---|
| Input | 123 | -123 | 120 |
| **Output** | **321** | **-321** | **21** |

### Kata 3

Given an array of words (strings), find the longest common prefix.\
Return an empty string ('') when no common prefix is found.

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
