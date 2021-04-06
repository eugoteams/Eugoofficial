---
path: confirm-test
date: 2021-04-06T22:21:07.319Z
title: Confirm Test
description: Depending on the gatsby starter you used, you may need to include
  gatsby-transformer-sharp and gatsby-plugin-sharp as well, and make sure they
  are installed and included in your gatsby-config.
image: assets/paris-on-a-budget.jpg
tags:
  - code
---


[@hackhat](https://github.com/hackhat) this a bit of a edge case, normally people don't even touch these folders, or if they do they delete both of them, either by using a script, or using an auxiliary package to handle that situation.\
And controlling the scenario you mentioned could be a bit tricky, as both folders are automatically generated, if not present they are generated and their content filled by gatsby and if they are gatsby goes about it's business, starts incrementally making the checks needed and updating the contents incrementally. And if everything is working properly you get an ok, or like it happened to you it throws an error.\
I believe that this should be a case to be handled by the actual developer, not the tool itself. Before issuing production build and/or issuing the development command you should do some "house cleaning" (pardon the bad pun) beforehand and always getting the correct/actual data/contents you have. And i might be completely off on this, and feel free to correct me, but it's a defensive strategy i adopted that's been working for me since i've discovered gatsby in the past year.