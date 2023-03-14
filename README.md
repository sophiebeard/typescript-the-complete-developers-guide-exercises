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

## Map Project
- A user and company will be randomly generated with their location, this will then be shown on a map. 
- FakerJS is used to generate random names and locations. 

### To Run
```
npx parcel index.html
```
Creates a server running at http://localhost:1234. Load this in the browser to see the application. 

## Sorting Project
- This code will be able to sort input data in a predictable way - e.g. alphabetical or numerical.
- I have created a build directory (for .js files) and an src directory (for .ts files). 
- The application will use the Bubble sort method in order to sort input arrays. 
- Type guard for a primitive value (number, boolean, symbol, string), use
```
typeof
```
- Type guard for every other type of value, use
```
instanceof
```
- Interfaces
  - Sets up a contract between different classes.
  - Use when we have very different objects that we want to work together. 
  - Promotes loose coupling.
- Inheritance/Abstract classes
  - Sets up a contract between different classes. 
  - Use when we are trying to build up a definition of an object. 
  - Strongly couples classes together. 

### To Compile
```
tsc index.ts
tsc --init
```
The generated tsconfig.json file was edited for outDir (holds the compiled code) and rootDir (holds the source code). Following this, the code can simply be run using:
```
tsc -w
```
This continuously recompiles the code when changes are made. 
### To Run
In a separate terminal: 
```
node build/index.js
```
```
npm init -y
npm install nodemon concurrently
```
The package.json file is edited so that the code can be compiled and run concurrently using:
```
npm start
```

## Match of the Day Project
- Data from a spreadsheet will be taken in in CSV format. It will then be loaded into a NodeJS application, parsed, statistically analysed and reported. 
- Load the data: Documentation was followed from 'https://nodejs.org/api/'.
- enum (short for enumeration) is an object that stores some very closely related values. These values are always either numbers or strings. 
- parseDate: takes a string with a date format, and returns a Date object. 
- Generics:
  - Like function arguments, but for types in class/function definitions. 
  - Allows us to define the type of a property/argument/return value at a future point. 
  - Used heavily when writing reusable code. 
- "Favour object composition over class inheritance" - Design Patterns. 

### Set Up
```
npm init -y
tsc --init
npm install nodemon concurrently 
npm install @types/node
```

### To Run
```
npm start
```