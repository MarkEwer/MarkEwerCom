---
title: "SmartUI Architecture Pattern"
description: "In my experience working on brown-field software I have come to see a pattern. Most existing products follow the same architectural pattern."
date: 2018-07-21
categories: ["Architecture", "Software Development"]
author: "Mark Ewer"
---

<Breadcrumbs />

# SmartUI Architecture Pattern

In my experience working on [brown-field](https://en.wikipedia.org/wiki/Brownfield_(software_development)) software I have come to see a pattern. It seems that most existing products that my customers bring to me follow the same architectural pattern. This pattern is what I call the Smart Client pattern. In this pattern, each user interface screen includes the business logic for making that screen work. Each screen is developed in a largely independent way and the communication between screens is accomplished by saving data in the database that is then opened on a different screen.

In this pattern, we treat each screen of the application like a mini-application. Each UI component will have its own code that encompasses all the business logic for that component. I call it a Smart Client because all the "smarts" are in the client screens. This will include data validation, business rules, data access code, and whatever else is needed to make that screen work. Communication between screens is limited to parameters passed when a screen is opened. The way to be successful with this kind of application is to avoid screens that communicate with each other – you should keep them "stand alone" as much as you can. You should also use as many code generators, automated UI scaffold builders, or other automated tools as you can. [Meta-programming](https://en.wikipedia.org/wiki/Metaprogramming) is your friend in this kind of application and you should use as many rapid application development enhancement tools as you can get your hands on.

Let's consider the example of a contact list. The first screen of the contact list is a list of contacts. For this we start with a database model that we build in SQL Server Manager. SQLSM has good tools for defining tables and relationships and we will use them to make developing our database as quick and painless as possible. Next, we will use a data access layer generator like [LLBLGen Lite](http://www.llblgen.com/pages/Lite.aspx) to create data classes based on our tables. This takes almost no time at all and we have a data access layer with [CRUD (Create, Read, Update, & Delete)](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) options built for us without writing any code yet. Now we can turn to the UI layer. For this we will use a scaffolding tool like [WPF CRUD Generator](http://www.codeproject.com/Articles/36975/WPF-CRUD-Generator-Scaffolding) to generate the data input forms for our application. This tool will not generate the application entirely, but all we have to do is supply some metadata and navigation information to tell the generator how to build the UI forms and 80% of the applications user interface is generated for us. Lastly, all we have left to do is put a little polish on the final application and we are ready to let out testers start using the application.

As you can see from this example, we used as many tools as possible to speed our delivery. The goal is to ship an application with as little effort as possible and using code generators, RAD tools, and the CRUD pattern for data access makes that happen.

## PROS

• Application is completed in minimal time.
• Generated UI means all screens have consistent look and behavior.
• Customer views the outcome as an early "win".
• Easy for a junior developer to understand because they can read the documentation for the code generator.

## CONS

• Generated application code is largely unreadable.
• Making changes to a screens or model classes is very difficult because the generators will overwrite your changes if you run them again.
• Making changes to generators is much more difficult than making changes to screens.
• Even a small change to the database schema will break the entire application.

## Appropriate Use

It is appropriate to use this kind of application architecture on a software system that will never become large. If the system has a finite size of one to ten screens total, then this may be acceptable. The customer will need to understand the trade-off that the RAD tools cause the application's UI to become much less flexible. It may not meet their requirements exactly but they will just have to accept the "80%" solution to benefit from the cost reduction.

Using this style of development on larger applications has a very different result. And, the drawback is subtle because it takes a few months to discover that you have made a bad architectural design choice. Let's consider what would have happened with the application described above if it had a larger number of screens. The application goes into production very early and it initially appears that this was a great cost savings. But, then the bug reports start to roll in. The highly inflexible nature of the code built with RAD tools slows down the implementation of bug fixes. Almost immediately the team gets a bug report for something that the RAD tool just doesn't do, so they code a "hack" around that second of the application to make it work differently. This hacked in code has an operational pattern that is completely different and doesn't "fit" with the rest of the application. Each bug report causes another hack and yet another style of coding. Over time as different programmers work on the project the hacks build up and the difficulty to implement even minor changes takes an extremely long amount of time. After being in production for six months, the team has spent as much time (and money) on maintenance as they did on the initial development thereby negating the initial cost savings. And, to make matters worse, every time the deploy an update to the application it causes as many or more bugs than it solves. A year after the initial development, the customer fires the software development contractor and solicits bids from other companies only to discover that the next contractor suggests scrapping the whole thing and starting over.

<SharePost />
