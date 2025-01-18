# TypeScript Bug: Passing Array to Function Expecting String

This repository demonstrates a common TypeScript error: passing an array to a function that expects a string.  The `greeter` function is designed to accept a string, but when an array is passed, a runtime error occurs.  The solution showcases how to correctly handle this by either modifying the function signature or pre-processing the array before passing it to the function.

## Bug

The `bug.ts` file contains the original buggy code.  The function `greeter` expects a single string, but an array is passed to it causing an error.