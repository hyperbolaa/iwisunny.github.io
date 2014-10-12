---
layout: post
title: jQuery type effect plugin
tags: jQuery plugin
---

Let's kick it old-school, with the absolute CLASSIC typewriter effect. I couldn't 
find a decent jQuery version of this effect that worked, so I pluginified some vintage 
javascript.

<iframe style="width: 95%; height: 300px" src="http://jsfiddle.net/JKirchartz/JEpWV/embedded/" allowfullscreen="allowfullscreen" frameborder="0">
</iframe>

One little "bug" here is that I'm not handling any dom elements, so the raw
html code is displayed while it's writing, but as soon as it's written the dom
handles it as elements, you could pre-parse the html and write the elements
wholesale but that's far beyond the scope of this simple solution.


If you wanna see the whole shebang check the [jsfiddle](http://jsfiddle.net/JKirchartz/JEpWV/)
