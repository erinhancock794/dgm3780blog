---
title: Rethinking Reactiviy
date: "2021-02-23T23:46:37.121Z"
---

In this [video](https://www.youtube.com/watch?v=AdNJ3fydeao&feature=emb_title), Rich Harris talked about radical simplicity when referring to how Tesla changed the underlying assumptions about how to create engines. While ICEs have multiple moving parts, Tesla's engines only have two. He related this to how Svelte works. Svelte is designed to be efficient and fast, and it does that by shifting the assumption for how frameworks should work. For example, Svelte is rendered during the compile stage instead of the browser. 

He also mentioned topological ordering, which runs like a spreadsheet instead of just top to bottom. This means that functions and components are only used when they are called, making functionality quicker. I liked that he emphasized that what really matters is functionality, and not WHERE functionality occurs. And that in the end, the true measure of success is the user experience instead of speed. 

I thought it was cool that React requires 40% more code than Svelte, and it's often slower. Svelte has a minimalistic approach. It uses labeled statements (```$:```) to bind variables and make components reactive. When you add JavaScript to HTML (instead of the other way around), it can be compiled to different outputs depending on the needs of the project.  
