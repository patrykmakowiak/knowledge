---
sidebar_position: 1
---

# General rules & definitions

## Time to market (product startup company)
Sometimes you have to focus more on features than best practices. Such a situation may occur at the initial stage of building a startup.
You can create the best e2e, integration, and unit tests to increase the reliability of the application, but the startup could fail due to a long time to market. 

🏆 Is important to pay the technical debt in the future!

## Technical debt

### What is technical debt?
*Technical Debt is a metaphor, so the real question is whether or not the debt metaphor is helpful about thinking about how to deal with design problems, and how to communicate that thinking.* [Martin Fowler](https://martinfowler.com/bliki/TechnicalDebt.html).

### Definition
Everyone can have their own definition of technical debt, so it is important to discuss and unify it in your environment.

The definition that I use and highly recommend. 👇
```
[The architecture we would like to have] - [current architecture] = [technical debt]
```
This is not a whim! "Would like to have" is based on our knowledge and experience.
Architecture is a broad topic but let me give you a few examples:
- quality of the code
- tests
- documentation
- databases
- observability
- design patterns
- dependencies
- and more ...

Try to imagine a situation where your team selects MySQL for persistent data in your small application. Based on your team's experience, this database is a great choice. Time flies, and the scale of the application grows. After this time, due to the performance issues, it is a better choice to use MongoDB (document database). How do you want to communicate this problem to business? Is this example technical debt or not? Using the definition above the answer is simple: it is technical debt.

### Scenarios where technical debt arises
- long time life cycle of development and maintenance (for example, technologies become deprecated)
- short term approach
- willingness to provide a solution faster
- lack of domain knowledge
- lack of technical knowledge

### What causes non-payment of debt?
- increased risk that an error occurs
- more complex and slower application development
- a worse frame of mind for programmers
- a larger threshold in the project

## Sort by string format of the date
When you want to sort out your documents (catalogs, files, pages and so much more) you can start the name with the date [YYYY-MM-DD].

### Why?
This particular format is easy to sort by string (sorting by string is equal to sorting by the date which you declare).

### Examples
- [2022-11-06] Refinement
- [2022-11-06] Retro
- [2022-11-06] Microservices training

And you will have the sorted list of the refinements 👍
- [2022-11-20] Refinement
- [2022-11-10] Refinement
- [2022-10-20] Refinement
