---
title: Unit Testing
date: "2021-02-04T23:46:37.121Z"
---

Unit testing is used in web development to ensure that the code written is working as intended, and will not introduce new bugs. It helps reduce code complexity as well as helping the developer know what to do next. When I am reading new code and I'm not sure if I understand what it's supposed to do, I will look at the unit tests to help  me decipher it. 

A unit is a specific piece of code, like a function. A single unit could have multiple tests depending on its complexity. 

Test Driven Development (TDD) is when you write your unit tests first, then write your code. This helps make the code cleaner, more precise, and less prone to produce unintended bugs. Once you write a test, run all tests, and then write your code. Run the tests again, and refactor code until all tests are passing again. It's helpful to keep each unit test small so that if something in the future breaks that test, you'll know exactly what functionality is broken instead of having to guess which aspect of the test broke. 

TDD can lead to more productive, higher quality code writing. It forces the programmer to think about how the functionality will be used by clients. 

As forward-thinking as TDD is, there are some limitations. Certain types of code doesn't work well with TDD, like user-interfaces and database programs. It also requires support from an entire team. If not implemented correctly, managers may see this extensive test writing as a waste of time. Another drawback to TDD is that it's sometimes very easy to pass a unit test if it's not written correctly. If tests (and code) is written just to get them to pass, then it probably would be a waste of time. 

Unit testing is a great way to write succinct, highly functional code. 