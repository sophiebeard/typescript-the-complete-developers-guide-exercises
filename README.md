# typescript-the-complete-developers-guide-exercises
A Typescript playground to follow along with the Typescript: The Complete Developer's Guide course on Udemy

The course can be found at [Udemy.com](https://www.udemy.com/)

## Initial Set-Up
```
npm install -g typescript ts-node
```
The installation can be checked using the command
```
tsc --help
```
tsc stands for Typescript Compiler which will compile the TS code into JS. 
Axios will be used in the demo project, therefore:
```
npm install axios@0.27.2
```


## Make a network request to fetch some JSON and print the result
Using an outside API. In this exercise, a few bugs will be intentionally added, to understand how Typescript works as a debugger. 
The API is accessed from - https://jsonplaceholder.typicode.com/ . This is a fake API used for testing and learning. 
Typescript is always written in .ts files. Typescript code cannot be run directly in the browser, it has to be compiled into JS and then executed in JS. 
To compile 
```
tsc index.ts
```
To run
```
node index.js
```
This prints the todo in the console.
```
ts-node index.ts
```
combines these two commands into one.
Interfaces in typescript are used to define the structure of an object. The goal of Typescript is to catch errors during development. 