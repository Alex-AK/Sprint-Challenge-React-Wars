# Answers

1.  What is React JS and what problems does it try and solve?

- React JS is a JavaScript user interface library designed by facebook to be able to build scalable UIs driven by a large amount of data. It uses a virtual DOM to compare and update bits of the UI only as needed. It tries to solve the issues of speed and scalability when dealing with large data sets.

2.  What does it mean to `think` in react?

- React has principles it uses to compartmentalize bits of the UI into ‘components’. Since each component is a separate part of the UI, you can easily build reusable components. Each component can manage and handle events of it’s data without affecting the other components.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

- Class components have an object called state which holds data. This data can be used as background information only needed for functionality, or it can be data that will be rendered onto the UI. If the class has data associated with it, it’s called a stateful component.
- A functional / presentational component does not have data directly stored within it. Although, it can use the data stored in parent class components through passing in props. Functional components are often styled with CSS and used for building the aesthetics of the UI and displaying state data from it’s parent (ie a title, or content text).

4.  Describe state.

- State is an object inside of class components used to store data. State is immutable, but the data inside of state can be altered through the setState method associated with the Component class (included in React). State can be passed down to children through props. State inside of one component cannot be accessed from another component unless they are associated with each other.

5.  Describe props.

- Props are attributes associated with components. Props can be passed through component trees through arguments. Props are flexible and can take various values including state from parent components. If a child component needs access to the parent’s state, the state is passed through props to it’s children.
