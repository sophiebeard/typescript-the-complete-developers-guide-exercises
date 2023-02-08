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