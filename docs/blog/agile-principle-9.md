---
title: "Agile Principle #9"
description: "Continuous attention to technical excellence and good design enhances agility."
date: 2018-06-08
categories: ["Agile"]
author: "Mark Ewer"
---

<Breadcrumbs />

# Agile Principle #9

Continuous attention to technical excellence and good design enhances agility.

It has happened to me many times when I am working on a project with another developer and I suggest a change to the code that makes it more reusable and my teammate says to me "I don't want to spend time that we bill to the customer working on reusability when this code isn't going to be reused anyway." The question is a solid one. Why would you want to spend time on building code that embodies technical excellence when the customer may not even care? The answer is also simple but not obvious. The obvious answer is that the customer often doesn't care how well structured the code is as long as the application works. But, the real answer is that it costs less for the customer and they do care about that! Let me explain.

Let's say that we get a change request to build a widget editor page for a customer. Because this is a "simple" change request the developer builds it without following the accepted best practices for development like SOLID. This works out for the current change request because the change is small and the developer can picture all the moving parts in her head without need for architecture patterns. After she has spent two weeks on the task and she gets near the end of the change request implementation she sends it to me for a code review. I comment that we should use dependency injection (the 'D' in SOLID) and build up some unit tests.

She replies to my comment with the typical response; "But, I am almost done with this. If I go back and refactor these components and add unit tests it will take me an extra two days to finish. I can't do that! I have already told the customer that I would be finished today." So, the developer delivers the code without refactoring and the customer puts it in production. And, it works out okay. The beta-testing identified a couple of bugs, but the developer was able to fix them and get the customer to accept the change. In her mind, disregarding the suggestion to refactor the code with best practices just saved two days of work. But, this isn't the end of the story…

The customer is excited by the new widget editor and it is saving them time. So, they decide to build on the success they have started and expand the widget editor to be a full-blown widget management system. When the team of three developers that will implement this larger change request get started they spend two days trying to figure out the existing code and determine that it is just not usable for the requested expansion because it isn't written to be reusable. So, the team spends another two days to refactor and rebuild the existing code so that it can work in the new larger system.

Now, pay attention. In the first change request the developer "saved" two days for one developer by not following best practices. But, in the second change request the decision to avoid best practices "cost" four days for three developers. The first developer just wasted 10 man-days of the customers time and money. It is very rare in the world of software development that taking the short-term benefit you can gain by using bad practices actually works out to be a good thing for the customer. It does often let you pass the problem on to the next developer. In my opinion, using bad practices to "kick the can down the road" so the next developer has to deal with your mess is an unethical business practice for software development.

<SharePost />
