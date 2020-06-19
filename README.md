# js-katas-template

Use this template to create your own katas project.\
This project uses `mocha` for testing and `babel` to use ES Modules in the spec files.

You can add as many katas as you want, just add a new `kata-N.js` file into the `src` folder, and his own `kata-N.spec.js` file into the `test` folder.

**Note:** *The katas and tests here are mere examples. Use this as a template for your own project and add some real katas to it.*

## How to test the code

Run `npm install` to install all the project dependencies.\
Run `npm test` to check all the test files.\
Run `npm run test1` to check only the tests with the #kata-1 `describe` section, i.e. kata-1.spec.js file.\
Run `npm run test2` to check only the tests with the #kata-2 `describe` section, i.e. kata-2.spec.js file.\
Run `npm run test3` to check only the tests with the #kata-3 `describe` section, i.e. kata-3.spec.js file.

### Kata 1

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

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

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string ''.

Example 1:

    Input: ['flower','flow','flight']
    Output: 'fl'

Example 2:

    Input: ['dog','racecar','car']
    Output: ''
    Explanation: There is no common prefix among the input strings.

**Note:** All given inputs are in lowercase letters a-z.
