import React from 'react';

const Block = () => {
  return (
    <div className='grid grid-cols-1 gap-5 mx-5'>
      <div tabindex="0" class="collapse group">
        <div class="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <h2>How will you improve the performance of a React Application?</h2>
        </div>
        <div class="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>
            React builds and maintains an internal representation of the rendered UI (Virtual DOM). When a component’s props or state changes, React compares the newly returned element with the previously rendered one. When the two are not equal, React will update the DOM. Therefore, we have to be careful when changing the state.
            Data immutability is not an architecture or design pattern, it’s an opinionated way of writing code. This forces you to think about how you structure your application data flow. In my opinion, data immutability is a practice that revolves around a strict unidirectional data flow. Data immutability, which comes from the functional programming world, can be applied to the design of front-end apps. It can have many benefits, such as:</p>
        </div>
      </div>

      <div tabindex="0" class="collapse group">
        <div class="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <h2>What are the different ways to manage a state in a React application?</h2>
        </div>
        <div class="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p> Managing state in your React apps isn’t as simple as using useState or useReducer. Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?

            In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.
            Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?

            When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

            There are four main types of state you need to properly manage in your React apps,
            Local state,
            Global state,
            Server state,
            URL state
          </p>
        </div>
      </div>

      <div tabindex="0" class="collapse group">
        <div class="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <h2>How does prototypical inheritance work?

          </h2>
        </div>
        <div class="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p> When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.</p>
        </div>
      </div>

      <div tabindex="0" class="collapse group">
        <div class="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <h2>What is a unit test? Why should write unit tests?</h2>
        </div>
        <div class="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
            A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.
          </p>
        </div>
      </div>
      <div tabindex="0" class="collapse group">
        <div class="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <h2> How will you implement a search to find products by name?</h2>
        </div>
        <div class="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
          <p>In the HTML code of search bar, we gave the input an id=”searchbar” and onkeyup we called, the function “search_animal”. onkeyup calls the function every time a key is released on the keyboard.

            We first get our input using getElementById. Make sure to convert it to lower case to avoid case sensitivity while searching. An array of documents is stored in x. This contains every list that has id=”animals”. After that a loop is run to check if innerHTML of every document includes the input substring if it doesn’t, the display property is set to ‘None’ so that it is invisible on the front end.

            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Block;