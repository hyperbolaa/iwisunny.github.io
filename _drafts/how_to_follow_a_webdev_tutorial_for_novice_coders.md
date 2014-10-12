---
layout: post
title: How to follow a Web-Dev Tutorial for novice coders
published: false
tags: article
---

Tutorials show you what to do to make whatever the author decides to tutorialize. They don't usually explain why things work but just throw out a whole bunch of information and expect you to understand.
This is fine for somebody whose experienced with the underlying technology, but it's clear as mud to the novice coder.
following tutorials word-for-word gets you what's described in the tutorial, understanding the underlying stuff is the hard part, so here I'll try to explain the basics of web-dev in a novice-friendly way.

#HTML
First let's look at some HTML, HTML5 to be exact. 

    <!doctype html>
    <html>
        <head>
            <title>Hello, world!</title>
        </head>
        <body>
            <h1>This is a section</h1>
            <section><h1>And this a subsection!</h1></section>
        </body>
    </html>

This is the structure of your document, a good way to think of it is that <em>Everything is boxes inside of boxes</em>.
It's like an [outline](http://gsnedders.html5.org/outliner/) of your document - `<h1>` - `<h6>` tags are the headings - and `<p>` tags for paragraphs, and each area separated into it's appropriate `<section>`, `<article>`, or `<div>` (which are funtionally the same.)
In HTML there's 2 types of elements - Block and Inline - [Block-level elements](http://www.tutorialchip.com/tutorials/html5-block-level-elements-complete-list/) are your boxes (`<section>, <article>, <div>, <p>, etc`), [Inline elements](http://www.tutorialchip.com/tutorials/inline-elements-list-whats-new-in-html5/) flow like the text in your document (`<a>, <span>, <em>, <strong>, etc`).



in css `.` denotes a class - `#` an id - and a plain `word` is a tag - so `div.class#id` in your css file would target `<div class="class" id="id"> </div>` in your html file.

CSS is cascading style sheet — so everything at the bottom of the file overrides things above it in the file

an ID should be a unique selector - so there should only be one `#home` ID on the whole page

a class can be anything - so you can have as many `.blue` classes as you want



