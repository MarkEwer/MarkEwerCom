---
title: "Agile Principle #7"
description: "Working software is the primary measure of progress."
date: 2018-04-18
categories: ["Agile"]
author: "Mark Ewer"
image: /assets/images/agile-principle-7.jpg
---

<Breadcrumbs />

# Agile Principle #7

![Agile Principle 7 Hero](/assets/images/agile-principle-7.jpg)

Working software is the primary measure of progress.

Project managers like to track the team's activities and calculate Gantt charts and build graphs to show how much work the team is doing. I have worked on a project that used a full Earned Value Management system with all the process controls that implies. After my many years of experience what I can tell you that I have seen is if the software doesn't run then it isn't done.

![Traditional Gantt Chart](/assets/images/Gantt.png)

Traditional project management tools like Gantt charts focus on task completion rather than working software delivery. Thinking about a software project like building a house is the wrong mental construct. When building a house you will need to line up all the sub-contractors and make sure that all the tasks in your project plan have their predecessors and successors defined correctly because you can't let the drywall guy hang gypsum board if the electrical hasn't been approved by the inspector yet.

Agile software development takes a different mental model of how this works. Instead of trying to line up all the events so that we never have to change anything after it is done, we intentionally build the system so it is easy to change. If building a house could follow this thought pattern then you would hang all the gypsum board on hinges that can open so you could change the electrical even after the drywall is installed. Obviously, this doesn't work for home builders, but it can (and does) work for software development.

The fact that agile means embracing the fact that the electrical may need to be changed at a later date means we need a different way to calculate and report the project's completion metrics. The way we do that is by tracking the number of features in the software that actually work and can be shipped to a customer. We want to get the application in front of users early and often so we can use their feedback to adapt the product.

![Finishing Line](/assets/images/Finish.png)

The goal is to reach the finish line with working software, not just completed tasks.

## Agile Practice 7.1: Definition of Done

Here is a good piece of advice for any agile team leader, define what "done" means for your product when you start and reiterate it to your team every sprint. Done doesn't mean coded, it doesn't mean tested, and it doesn't mean integrated. It means it is has been shipped and your team has not more actions related to it. The confusing part of this is that it is different for each project. For example, the team I am on now is working with a non-agile customer so the definition of done for us is when we have something approved by the external testing team. In other cases it may not be until actual end users can access the application. In the modern world of mobile development done often means that the feature is available in the app store.

## Agile Practice 7.2: Decomposition by Product Features

Because we want to track completion as working software, we should restructure how we track our team's task list to mirror this principle. Break down your project by features instead of work-tasks. In traditional PMI terms this is a Work Breakdown Structure (WBS) that lists components of the final product instead of actions the team must perform to build those features. Instead of tracking a task like "build reporting database schema" we should track a task like "user can print report". Sometimes an example helps to illustrate this point, so here is a comparison of two WBSs.

This first WBS is a traditional PMI inspired structure.

### Construction of a House – Action WBS

1. Internal
   - 1.1. Electrical
   - 1.2. Rough-in electrical
   - 1.3. Install and terminate
   - 1.4. HVAC equipment
2. Plumbing
   - 2.1. Rough-in plumbing
   - 2.2. Set plumbing fixtures
   - 2.3. Test and clean
3. Foundation
   - 3.1. Excavate
   - 3.2. Pour concrete
   - 3.3. Cure and strip forms
4. Steel Erection
   - 4.1. Steel columns
   - 4.2. Beams
   - 4.3. Joist
5. External
   - 5.1. Masonry Work
   - 5.2. Lay masonry
   - 5.3. Install roof drains
   - 5.4. Install tile in toilet rooms
   - 5.5. Roofing
6. Building Finishes
   - 6.1. Paint walls
   - 6.2. Ceiling tile
   - 6.3. Hang wallpaper
   - 6.4. Carpet
   - 6.5. Hardware

Next, I have an example of how a house project might be structured if it were developed using Agile. Now, I know this won't work for a house because the cost of rework is too high. But, if you follow good engineering practices the cost of software rework can be kept very low.

### Construction of a House – Agile WBS

1. Living Room
   - 1.1. Foundation
   - 1.2. Steel
   - 1.3. HVAC
   - 1.4. Electrical
   - 1.5. Paint
   - 1.6. Hardware
   - 1.7. Roofing
2. Dining Room
   - 2.1. Foundation
   - 2.2. Steel
   - 2.3. HVAC
   - 2.4. Electrical
   - 2.5. Wallpaper
   - 2.6. Hardware
   - 2.7. Roofing
3. Kitchen
   - 3.1. Foundation
   - 3.2. Steel
   - 3.3. HVAC
   - 3.4. Electrical
   - 3.5. Sink
   - 3.6. Gas stove
   - 3.7. Garbage disposal
   - 3.8. Cabinets
   - 3.9. Paint
   - 3.10. Hardware
   - 3.11. Roofing
4. Bedroom
   - 4.1. Foundation
   - 4.2. Steel
   - 4.3. HVAC
   - 4.4. Electrical
   - 4.5. Paint
   - 4.6. Hardware
   - 4.7. Roofing
5. Bathroom
   - 5.1. Foundation
   - 5.2. Steel
   - 5.3. Sink
   - 5.4. Toilet
   - 5.5. Shower
   - 5.6. HVAC
   - 5.7. Electrical
   - 5.8. Paint
   - 5.9. Hardware
   - 5.10. Tile
   - 5.11. Roofing

As you look at these two WBSs you should quickly see that the agile one is structured around the idea that we are going to build and finish each room before we move on to the next one. The definition of "done" for the kitchen may be that the homeowner can cook a meal while the definition of done for the bedroom may be the homeowner can sleep. Agile is incremental, so we are going to build and ship each room to get feedback on that room before we move on to the next one. This let's us learn from our user what they like and don't like so we can change it in future iterations. What if we ship the Living Room and the end users tell us they don't like the grey color of the shingles on the roof and they want tan instead. Well, in the next iteration we will change the color of the shingles and build the other rooms with the new color. We will have wasted some time and money to throw out the old the grey shingles, but we only failed on this task for one room instead of the whole house. Agile doesn't stop you from making mistakes; it brings them to light sooner so you can correct them before your project runs out of money.

<SharePost />
