---
title: "My First Weeks as a Full Stack Developer"
pubDate: "2025-10-10"
description: "Reflections from my first dev job: learning team dynamics, tools, pipelines, and why trust matters more than flashy code."
draft: false
---

I recently started working as a Full Stack Developer, and there are a few things I would like to talk about that just might not be as one would expect when starting to work as a dev, in the hopes of that it may help someone down the road, but also to put order to a few ideas that have been running around in my head.

![FirstWeeksFullStack](/blog-images/FirstWeeksFullStack.jpg)

## Do not try to impress with flashy code

First off, in our eagerness of wanting to demonstrate how right they were to hire us, our first impulse might be to try to get as fast as possible to writing some flashy code to impress our coworkers, equals and superiors alike. While transmitting professionality and a willingness to be productive are obviously good qualities to have, I've come to realize that they are not the most important for standing out when starting in a new place.

Writing some clever piece of code to signal your abilities may seem like the right move, but more likely it will demonstrate a lack of care or understanding for the product you will be having to familiarize yourself with. But I get ahead of myself.

## Understand your team first

The first days at any new dev job, if thought out right, will be a lot more about getting to know the team you'll be working with. Your coworkers, their areas of responsibility, knowing who to go to for what, even who you share your desk with, their timings, the hours and their habits. Maybe you need to understand first what the company does, what their products are, what their goals are in the short and mid-term.

It's easy to narrow our view to the code, but showing a willingness to understand the needs of the company as a whole first, and then tracing a line from those to what you do and understanding how you can support those goals through your work, your code, can put a lot of your peers and bosses at ease fast. If you've made a career change from another path, here is where your experience in other jobs may shine. Try to demonstrate nuance in your understanding of what they do. Anticipate possible roadblocks they might have had, or wonder about how they might try to solve future problems that will come up. By doing so you will show an alignment with their work that will be appreciated.

## Build rapport early

Once situated a bit more in your role, and with better knowledge of exactly what they hired you to do, it's time to turn to your peers. They'll no doubt have some questions in their mind about how it will be to work with you, doubts that you can calm in the short run if you are proactive. Be friendly, and try to build rapport fast without being overeager.

Code is created by humans, and you will have to deal with other humans in your day-to-day so this will be just about as important as your own code. Your coworkers will not only think about what you can do, but also how easy you are to work with.

## Study the culture

For this you will need to carefully study what the culture is. Are people reserved and serious and mostly talk about business topics? Is the culture more casual and relaxed and do they place importance on getting along with your peers and thus talk about more topics than work? Can everybody chime in on different topics or do the domain experts only have say? Are processes strictly followed or are problems solved in a brainstorming manner? Also, try to notice if there are coworkers there that don't follow the main culture as much and how they are valued. Gauge if isolated but heavily productive individual contributors are encouraged or tolerated. That alone will tell you a lot, and using that information to adapt to the team will give you breathing room in the short run.

What a culture say they value and what they actually value may be two entirely different things. Keep in mind what they say, and contrast with their reality. A company may say they *value work-life balance*, yet praise people who stay online until midnight and respond to emails on weekends. The message is clear: balance is a slogan, overwork is what gets rewarded. A company might claim they *encourage learning and experimentation*, but if every mistake is treated like a failure and people are afraid to ask questions, then the real value is risk avoidance, not growth. They may promote *teamwork* as a core value, but if promotions always go to the loudest voices rather than the people who lift others up, you’re not in a collaborative culture, you’re in a political one.

## Get familiar with your tools

Next up I'd say get familiar with your tools. You might need to work with a new IDE, or a different OS, or both. Task planners, messaging apps, email apps. Spend some time watching some brief tutorials about their main features, print out some cheat sheets for shortcuts and practice them. It might seem dumb, and it will slow you down a bit in the short term, but it will improve your productivity and familiarity with them. If you set up the basics right you'll be a lot faster in the midterm. If you need to use these tools in a public way take some time to consider what is the correct way to use them. Notice how your coworkers use them. If your coworkers write to you to fix something through an IM app instead of submitting a detailed ticket through the specific process, try to understand if this is the appropriate way of doing things in their culture or if your coworker is a bit of a wildcard and adapt your own behavior in consequence.

## Learn the pipeline and documentation

Pipelines. To get the code you write in your IDE to Prod there will be no doubt a few steps involved. Understand how PRs should be written, who should be involved and when. Learn if you need to IM someone, or update a task planner or even send an email to someone to get that done.

This is also a nice introduction to talk about documentation. This can vary wildly from place to place. Some places might have such an abundance of information that you'll have trouble knowing where to find what. In other places there might not be any documentation at all and you will have to learn everything on the go. I've read a lot about how new devs can get some wins in fast by improving documentation when they have to use them, because they are in the perfect position to see what is lacking and contribute it, but I'd say honestly try to understand first if it's something that is valued, because if not you might just give the impression that you are wasting your time on pointless thing or might even be afraid to code.

## Respect the existing code

As you can see there are a lot of things that are very important in your first few days, a lot more than your coding abilities, and you will need to get a handle on those. But when those are said and done we will still need to talk about your coding. **For me, the key insight of my journey is this: your code will need to show respect for the code that is already there.**

You can't just go running wild and implement a big new flashy feature and say, look at how this will improve your product, because by doing so you might break another ten things. Your coworkers will not appreciate that. Your autonomy will be reduced fast if you do so, because they'll get the impression that you might do more damage than good. When you implement things, start small, but precise. It can be as simple as trying to understand where exactly would the best place to perform an operation on a variable. Should it be right as it appears from the backend, so you normalize it for the entire flow? Should the operation be done defensively at various points so you increase the robustness of your app? Should it be right before it is shown to the user? One surgical operation in the correct place with a thorough explanation in your PR of why you think that it should be there and not somewhere else will earn you a lot more goodwill than a clever loop, for example. Focus on making thoughtful, high-quality contributions that improve the codebase without causing collateral damage.

Take a simple example: parsing a number that arrives from the backend as a string. It might seem logical to normalize it immediately at the top of the data flow, but doing so can easily introduce hidden bugs if other parts of the system depend on that value being a string. Suddenly, a small “cleanup” creates type mismatches in multiple components and breaks formatting, comparisons, or business logic somewhere down the line. Your eagerness to do things the "correct" way will not be appreciated here.

## Ask before changing anything

Small implementations that do not break other things in the code and that adapt to the way things are being done already inside your repos is the way to go here. If you see things that might be improved or that are inconsistent do not, I repeat, do not take the initiative and fix them without being asked. The chances that you will do this perfectly and will thus be appreciated are tiny, and the risk that you’ll break something, step on someone’s toes, or violate an unspoken team convention is huge.

If you see something ask the most appropriate person in a casual way first. "Hey, I've seen that this specific part of the code works in this manner, is that something that is intended, is it a quirk or an unintended side effect of something else, or was this implemented this way for a specific reason?", before even thinking of trying to lobby for a change.

Showing care for the existing code will earn you trust fast, and trust will give you autonomy, with which you will be able to do bigger and better things. For me, that is the key to impressing in your role fast.

## Conclusions

**At the end of the day, your first dev job is not about trying to look impressive, it is about becoming reliable.** Your technical skills got you in the door, but it is your ability to understand the team, respect the codebase and make thoughtful, low-risk contributions that will earn you trust. Trust is everything. It is what gives you autonomy, responsibility and the chance to work on problems that actually matter. Start small, ask why before you change things and show consistency. If you focus on being dependable rather than flashy, your impact will grow naturally, long before you even realise it.
