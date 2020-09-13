# ASSESSMENT 2: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Why would you use the method `super()`?

  Your answer: You would use super() when using class inheritance and you want to access the parent class and pull in all variables from the class.

  Researched answer: The super() method refers to a parent class. It is used to call the constructor of a parent class and to access those properties and methods that belong to that parent class. If you use "extends" on a class you must use super() to access the properties in methods in the parent class or else you will receive a reference error.



2. What is the DOM? What is the virtual DOM?

  Your answer: The DOM stands for Document Object Model. It is how React can change the output on an application without reloading the entire page. The virtual DOM is what the changes are first logged to, it then gets updated virtually (in the background), and then the DOM is updated to display the change.

  Researched answer: 
  The DOM is a structured representation of HTML elements that is present in a web-app. It will contain a node for each HTML element as well. It allows developers to modify content via JavaScript. The Virtual DOM is a type of "lightweight" copy of the DOM. It is exactly the same as the DOM but it allows manipulation without the entire output on the screen being fully changed. Each time something is changed in a JSX file the virtual DOM is updated. It then compares the pre-updated DOM to the updated Virtual DOM, spots the difference and then makes those changes on the real DOM. It is a process known as "diffing".


3. What is a higher-order function?

  Your answer: A higher order function are functions that operate on other functions. They eitehr take other functions are arguments or return them.

  Researched answer: A higher order function is a function that accepts and/or returns another function. It is considered "higher-order" because instead of dealing with strings, numbers, or booleans, it takes it one step further to operate on functions. They can be used to store functions as variables, use them in arrays, assign them as methods, pass arguemnts, or return them from other functions. 



4. What is JSX?

  Your answer: JSX is a combination of HTML and Javascript fully named JavaScript XML. It lets us write HTML in React.

  Researched answer: JSX stands for Javascript XML. It allows us to write HTML as a JavaScript syntax extension in React. This way it can be passed to the DOM without any "createElement()" and/or "appendChild()". It is not required but it makes it easier to write React apps.  



5. What is React?

  Your answer: React is a Javascript libray developed by Facebook. It utilizes Node Modules and components to generate very fast, dynamic, applications that only refresh the component that needs changing through the DOM and virtual DOM.


  Researched answer: React is a Javascript Libray developed by Facebook. It makes creating interactive UIs much more painless. It is used for "client side" programming" which makes it a Frontend library. It utilizes the DOM and virtual DOM to make updates to single components on a page or app as seamless and efficient as possible.



6. What is yarn? What file(s) are updated when you run `$ yarn`?

  Your answer: Yarn is a Javascript packages manager. When $ yarn is ran it updates/generates your node-modules.

  Researched answer: Yarn is a new JavaScript package manager that aims for speed, and reliability. It allows you to use and share code with other developers. It is shared through a package. More specifically package.json that has all the code being shared. All the packages installed are often referred to as "modules". It was also developed by the almighty Facebook. Running '$ yarn' will default to 'yarn install" this will install the dependencies defined in a package.json file. 



7. What is localhost:3000? How do we use localhost:3000 in the development process?

  Your answer: Localhost:3000 is the local port used to display and run our React app on our local host server (our computer only). We use it so we can view our React app all compiled in our web browser. It will also display any errors if it runs into any while being compiled. 

  Researched answer: Localhost:3000 is a network address that points to your computer.Is is the port that React apps automatically connect to when you run "yarn start" in the terminal. It will be open in a new window/tab of your internet browser. It gives you a real-time view of your app as it is so far. It also will automatically update with any changes that you save in your react app files. So long as it is compiled correctly, passes to the Virtual DOM, and updated to the real DOM you will see the changes. This allows us to see our application without paying for a hosting service or any other backend work while still early on in the development/production process.  



8. What is an iterable in JavaScript? What data types are iterables? How can this information useful to you as a developer?

  Your answer: An iterable object is an object that defines a sequence and returns something. A data type that is considered a iterable are arrays. Most of these utilize built-in methods to help streamline your code. 

  Researched answer: An iterable is any object that returns a function that produces and iterator for its symbol. You can loop over all values in an iterable object by using a 'for loop'. Data types that are considered to be iterables are: arrays, strings, maps, and sets. Iterables are helpful because it can be difficult to manage the iteration on data for various types of data structures.  




9. STRETCH: What is hoisting in JavaScript?

  Your answer: I'm not sure what hoisting is in Javascript. However, I do know that when you hoist up a sail you are lifting it up to the top of the mast. So, perhaps it involves putting something to top of say perhaps a function? I will be sure to research a more complete answer and get back to you.

  Researched answer: Hoisting is Javascripts default behavior of moving declarations to the top. This allows us to use a variable in our code before it has actually been declared. Declarations are the only things that get hoisted. Initializations do not get hoisted. 



10. STRETCH: What are closures in JavaScript?

  Your answer: I am not certain what closures in JavaScript are. Again, I do know that closures in terms of school closures or road closures means that area is no longer accessible. Again, I'd like to think this may apply to a function. Once it is done running the closure ensures it stays complete so as not to keep running and bogging down the application.

  Researched answer: A closure is the combo of a function enclosed with references to its surrounding state (lexical environment). Meaning it gives you acces to an outer function's scopr from an inner function. In JavaScropt, closures are automatically created everytime a function is created. 


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- React state: The state object is a built-in object of a React component. It is where you store property values that belong to the component. When this state object changes, the component then re-renders.

- React props: Customization of a React component with different parameters is a React prop. They are a kind of global variable or object in React.

- React lifecycle methods: Each component in React has a lifecycle. This lifecycle has three phases: mounting, updating, and unmounting.
Mounting is when you initially upload a component to React DOM. Updating is whenever a component is updated. These updates must happen to the component's 'state' or 'props'. Finally, unmounting is when a component is removed from the DOM. This is not with React's one and only built-in method 'componentWillUnmount()'.

- API: API stands for Application Programming Interface. This means it allows to applications to talk to each other. Facebook, Yelp, Instagram, all have their own APIs. If you reference an apps API successfully you can generate that apps information in your own app. A good example is building a Yelp-like app that only focuses on restaurants. You can literally pull all of the restaurants in Yelp's database using their API.

- e.preventDefault(): e.preventDefault() is a method that stops the default action of an element from happening. If you don't want someone to be able to checkbox as normal you would use this method. 

- DOM events: DOM events are actions that occur as a result of the user or as a result of a state change of the elements of a DOM. A few common DOM events are: mouse events, these can range from clicking, double clicking, and mouse over. Touch events, keyboard events (keydown, keypress, keyup), form events(focus, blur, change, submit), or window events (scroll, resize, load, and unload).
