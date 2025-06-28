---
title: "Agile Principles #11"
description: "The best architectures, requirements, and designs emerge from self-organizing teams."
date: 2018-10-20
categories: ["Agile"]
author: "Mark Ewer"
---

<Breadcrumbs />

# Agile Principles #11

The best architectures, requirements, and designs emerge from self-organizing teams.

This agile principle is a kind of subtle. It's not really obvious what you should do to ensure that your team is developing the best architectures, requirements or designs. But, that is the point; there is no single "right" answer for how to develop the best software systems. Instead of telling you "this is how you do it" an agile practitioner will take a more situational approach and tell you that your team needs to discover the best way to handle the problem domain you have been tasked with. The best way to foster this kind of discovery is to create a self-organizing team. So, the real question you should ask is "how do I create a self-organizing team?"

## Step 1: Choose the right people

If you are trying to start a team and you want them to self-organize then you will need to "seed" the team with some people who know what that means and how to do it. This is a key success criteria. You can't expect the team to just figure it out without some guidance. Each team really needs a good mentor to help them get started. This is one of the most important roles of the Agile Coach (or ScrumMaster)!

## Step 2: Set a team charter

Once you gather the team, you need the executive sponsor for that team to set a clear goal for the team's activities. This goal should be a business goal and it should be a long term goal. For example, a goal might be to deliver a new software system, or it might be to improve the company's engineering practices. Personally, I have had great success with setting a goal for the team to improve overall product quality. Improving quality forces the team to look inward on their own processes and make changes that better the product. I feel this helps to get the team members in the right mind-set because they aren't thinking about job security, competition, or other personal issues but instead gets them thinking about the product as a whole.

A good way to define the executive sponsor's guidance for the team is with a team charter. Make this a short (1-page) document that states the high-level goal and formally grants the team collective ownership of its own internal processes. This is your chance to really set the tone for the team. Make sure you tell the team that they are empowered to make their own decisions and set their own rules but that all the process and rule changes they make should be presented to the executive as part of a regular project review.

## Step 3: Make the team think about the process

The agile coach is really needed when the team is first starting off. Remember the old team formation cycle of Forming – Storming – Norming – Performing? Well, the charter is the forming stage, so as soon as you start work you are in the storming phase. As the coach, it is your job to guide the team through the storming and into the norming phase. Ask them lots of leading questions about their internal processes like "how could this be faster?" or "how does this improve ?" to get them thinking about process improvement. You don't want to tell them what engineering or analysis practices they should use; you want them to tell you what they are going to do. At this stage I like to send links to blog posts or articles on engineering practices to team members that show them best practices they could use and let them talk about it. The term "coach" makes a good analogy here; you should give them a playbook but let them pick the plays. The coach should share best practices and lessons-learned then let the team decide how to achieve their goal.

As an example, I was on a team that decided to change from using Alistair Cockburn style use case documents to Cucumber style scenarios. Use cases had been the company standard for some time and changing to something else was initially met with resistance within the team. As the agile coach, I called a retrospective meeting and had the team put together a pros and cons list on the whiteboard and talk it out. The team discussed replacing the creation of the use case and the test script with the Cucumber scenario. This would reduce the number of artifacts by one. It also had the benefit of moving the creation of the test script earlier in the process. Since this team's charter goal was to improve quality this made perfect sense. Collectively, they decided to give it trial run during the next sprint.

## Step 4: Conduct regular review meetings

Once you have set up the team and given them a charter, you need to ensure that the executive sponsor will maintain oversight of the team. This is not because you want the sponsor to control the team. In fact, you really want the team to control itself. But, knowing that the team will have to report what they have done to the sponsor will help keep them focused. In my experience, it has worked quite well to have the team show the sponsor one of each of the different kinds of work products the team is producing and explain how that artifact adds value to the project and contributes to the goal stated in the team charter.

To continue my example from above, when it came time to explain to the sponsor why the team decided to remove the Use Case and Test Script artifacts and replace them with a Cucumber Scenario, the team confidently stated that this change consolidated the creation of the use case and the test script into one step instead of two and moved the definition of the testable outcome earlier in the process so it improved testability. Reducing the number of steps made the team faster and improving testability made the product better so this was a win-win for the team.

## How does this improve architecture, requirements or designs?

The answer to this question is simple, it forces the team to find the "right" fit for this project. In the example above the use of Cucumber Scenarios turned out to be better than Use Cases, but that will not be the case for every project. Each project is different and you need to use the right tools for each one. Also, each team is different and you need the right tools to fit the team members. Software development is not a one-size-fits-all game so you need a team that is empowered to empirically discover the best tools and techniques for the project they are working on.

<SharePost />
