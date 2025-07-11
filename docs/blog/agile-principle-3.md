---
title: "Agile Principle #3"
description: "Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale."
date: 2017-11-21
categories: ["Agile"]
author: "Mark Ewer"
image: /assets/images/agile-principle-3.jpg
---

<Breadcrumbs />

# Agile Principle #3

![Agile Principle 3 Hero](/assets/images/agile-principle-3.jpg)

Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.

As discussed in parts 1 and 2 of this series on Agile, it is a goal for Agile projects to deliver value to the customer through frequent releases and use the feedback on those releases to drive change into the product for competitive advantage. Of course, this implies that the software actually works and that we can deliver it quickly. Agile teams use automation to decrease the amount of effort required to deliver your software and ensure that it works when delivered.

## Agile Practice 3.1: Automated Testing

If the team is rapidly incorporating changes from feedback throughout the project period of performance then you need to know the changes you make today will not break the work you did yesterday or weeks ago. The way Agile teams do this is by developing automated tests in conjunction with the actual product. Automated tests take a few forms but perhaps the most important are Unit Tests and Acceptance Tests.

![Red-Green-Refactor Cycle](/assets/images/Red-Green-Refactor.png)

The Red-Green-Refactor cycle is fundamental to Test-Driven Development (TDD). Write a failing test (Red), make it pass (Green), then improve the code (Refactor) while keeping tests green.

Unit Tests are used to validate small blocks of application source code in isolation from the rest of the system. They must execute fast, so these tests avoid interaction with databases, file systems, or network services. The developers must be able to run these tests easily and often to give instant feedback on the impact of any change.

Acceptance Tests are a little different. These tests are also automated and often use the same testing framework as the Unit Tests but they test larger features of the application and how those features interact with each other. These tests are used to prove the software can perform the actions described in the product requirements. Traceability from Acceptance Test to Requirement should be obvious because the test should validate what the requirement says the software should do. These tests will naturally take longer to run than Unit Tests but the team will still get invaluable feedback to prevent regressions and mistakes if these tests are run often.

## Agile Practice 3.2: Continuous Integration

If the project has tests, then you need to run them regularly. The practice of Continuous Integration is to set up an automation server to monitor the application source code for changes and run all the tests every time there is a change. The continuous feedback and early detection of mistakes keeps the software in working condition all the time.

![Code Merge Process](/assets/images/Merge.jpg)

But, Continuous Integration is more than just running tests, it is the practice of all developers checking into the same branch in source control all the time. Every check-in is a merge and an integration so there is never a time when two branches go "out of sync". This saves time because there will not be any lengthy integration steps and reduces risk because the product is always integrated.

![Deployment Pipeline](/assets/images/Pipeline.jpg)

The deployment pipeline ensures that code flows smoothly from development to production through automated processes.

## Agile Practice 3.3: Continuous Delivery

Agile teams go one step farther than just running automated tests; They perform automated delivery. Agile teams seek to optimize their delivery to be faster and faster every time they do a delivery. The key to making the delivery faster is to automate all of the deployment steps. Most teams will use the same automation system that runs their unit tests to perform deployments. As the team continues to automate more steps in the deployment pipeline the timescale for deployments becomes shorter and shorter and the "batch size" of each change will also become smaller and smaller.

Some teams automatically deliver to a quality assurance platform and alert the testers. At some point it becomes easier for the team to make a change, deploy it, and evaluate user feedback than it is to maintain a complicated or gated quality assurance system. As the size of changes gets smaller and the release cycle gets shorter it becomes easier and easier to deliver the change directly into production. If a change can be rolled back and replaced in an hour then the risk of deploying it to production is minimal.

For more information about the origin of the Agile Principles, see the [Agile Manifesto](http://www.agilemanifesto.org/principles.html) site.

<SharePost />
