# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a javascript framework that lets us build reusable ui components and single page applications that can update their content quickly and without refreshing the page.

1. What does it mean to think in react?

Thining in react means breaking up the ui into a heirarchy and setting things up in a way that the data flows to the componenets needed. Often this means holding the state in the parent of all the children and passing data down to them.

1. Describe state.

It's hard to describe this without saying that state is the state of the componenet. When state changes that means that a value or property changed on the componenet and that it's time to re-render it to reflect those changes. State is data held.

1. Describe props.

Props are data that's passed from a parent componenet down to its child. Where state is data held, props are data passed around.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect effects something outside of the function scope. If a function changes the value of a global variable, that is a side effect.
