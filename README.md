# Demo: Using functions in Angular template expressions

This repository contains a _very_ simple demo of what happens when you use functions in Angular template expressions, as well as a few solutions and how they perform.

Since this is just a demo, this won't be updated, or probably even fixed. If the information presented here is incorrect, there are tons of resources out there that will explain the issues much better!

# Why this demo?

Using functions in Angular template expressions (example [here](https://github.com/aelders-ncino/angular-template-expression-functions/blob/928074da074082e0694eb3a79f8d465ff61ee471/src/app/period/period.component.html#L1)) is generally a very bad idea.

Why?

Change detection!

In Angular, function expressions like these will run _every time_ a change detection cycle runs. That could be hundreds of times a second in large applications. This takes time and CPU cycles.

# What is change detection, and what causes it to run?

Angular change detection is the mechanism by which Angular determines whether the data model has changed and updates the view accordingly. There are several events that can trigger change detection in Angular:

- User events: When a user interacts with the application by clicking a button, entering data in a form, or performing any other action that changes the state of the application, Angular runs change detection to update the view.

- XHR requests: When an asynchronous HTTP request is made to the server and the response is received, Angular runs change detection to update the view with the new data.

- Timer events: When a timer is set using JavaScript's setInterval() or setTimeout() functions, Angular runs change detection periodically to update the view.

- Component lifecycle events: When a component is initialized, its inputs change, or it is destroyed, Angular runs change detection to update the view accordingly.

- Zone.js events: Angular uses Zone.js to track asynchronous operations such as XHR requests, timer events, and user events. When any of these events occur, Zone.js triggers change detection to update the view.

In general, any event that changes the state of the application or its components can trigger Angular change detection to run and update the view.

# Ok, so why are functions bad?

Functions in Angular template expressions can be a bad idea because they can have a negative impact on performance and can make the code harder to understand and debug. Here are some reasons why:

- Performance: Functions in template expressions can be called multiple times during change detection, which can result in performance issues. If a function is complex or performs expensive operations, it can slow down the rendering of the application.

- Debugging: When an error occurs in a function used in a template expression, it can be difficult to debug. The error message may not provide enough context to determine where the error occurred in the template, which can make it harder to fix the problem.

- Readability: Functions used in template expressions can make the code harder to understand, especially if the functions are complex or perform multiple operations. It can also make it harder to maintain the code, as changes to the function can affect multiple places in the template.

- Testing: Functions in template expressions can make it harder to write tests, as it can be difficult to test the behavior of a function in the context of the template.

# Ok, so functions are bad, mkay? What can I do instead?

There are several alternate solutions to using functions in Angular template expressions. Here are some of them:

1. Use property binding: Property binding is a way to bind a component property to an element property in the template. By using property binding, you can update the value of a property without calling a function. For example, instead of calling a function to calculate the total price of a shopping cart, you can bind the total price property to a component property and update it whenever the cart changes.

2. Use pipes: Pipes are a way to transform data in the template. By using pipes, you can transform the data without calling a function. For example, instead of calling a function to format a date, you can use the built-in date pipe to format the date.

3. Use ngIf and ngSwitch directives: The ngIf and ngSwitch directives are used to conditionally display elements in the template. By using these directives, you can control the visibility of elements without calling a function. For example, you can use ngIf to show or hide a button based on the value of a component property.

4. Use template variables: Template variables are a way to reference elements in the template. By using template variables, you can reference elements without calling a function. For example, you can use a template variable to reference an input element and retrieve its value in the component.

5. Use computed properties: Computed properties are properties that are calculated based on other properties. By using computed properties, you can calculate a value without calling a function. For example, you can define a computed property for the total price of a shopping cart, which is calculated based on the price and quantity of each item in the cart.

By using these alternate solutions, you can avoid using functions in template expressions, which can improve performance, readability, and maintainability of your Angular application.

# Documentation and Resources

- Property binding: https://angular.io/guide/property-binding

- Pipes: https://angular.io/guide/pipes

- ngIf and ngSwitch directives: https://angular.io/guide/structural-directives

- Template variables: https://angular.io/guide/template-reference-variables

- Computed properties: https://angular.io/guide/computed-properties

In addition to these resources, I would also recommend checking out the official Angular documentation for a more comprehensive understanding of Angular concepts and best practices: https://angular.io/docs.
