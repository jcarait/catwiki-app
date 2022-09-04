# Cat Wiki

A collection of information all about cats, built as a full stack application with React and Node JS. It currently has a search function with provides images of the selected cat breed.

## Demo

---

Live Demo: [Link](https://catwiki-challenge.herokuapp.com/)

## Development

---

### Motivation

This application was created as a challenge to build a full stack application using React and Node with a third party API. The client-side should not use the API directly, everything should be handled server-side.

It was also good to have a chance at working with Material UI since there have been developers, and feedback from the community, who mentioned this as an alternative to many other great CSS frameworks.

The application was built with a focus on clean coding, code hygeine and Test Driven Development (TDD).

## Site

---

### Home Page

![a web page with title, search bar and cat](/home-page.jpg)

### Cat Profile Page

![a web page with results of multiple images of cats](/cat-profile-page.jpg)

## Built With

---

- [ReactJS](https://reactjs.org/) - React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
- [Material UI](https://mui.com/) - MUI offers a comprehensive suite of UI tools to help you ship new features faster.
- [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express.js](https://expressjs.com/) - minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Usage

---

This project was built with Yarn, you can install the dependencies from the _root_ folder with

```
yarn install
```

Alternatively, _delete the **yarn.lock**_ files in the root, /client and /server folder and use

```
cd server && npm install && cd ../client && npm install
```

## Tests

---

Before running tests, close the server if it is running.

Then from the root folder, run

```
npm test
```

or

```
yarn test
```
