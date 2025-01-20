# Unhandled Exception Crashing Node.js Server

This repository demonstrates a common issue in Node.js applications: unexpected crashes due to unhandled exceptions.  The provided code simulates an unhandled exception that causes the server to abruptly terminate without proper cleanup.

## Problem

The `bug.js` file contains a Node.js HTTP server. A `setTimeout` function simulates an unexpected error (accessing an undeclared variable) after a 1 second delay. The current `process.on('uncaughtException', ...)` error handling is insufficient as it only logs the error and forcefully exits the process, leading to a crash.

## Solution

The `bugSolution.js` file demonstrates a more robust approach.  It uses a `process.on('uncaughtException')` event listener to handle the exception gracefully, logging the error to a file or centralized logging service, and performing a clean server shutdown before exiting.