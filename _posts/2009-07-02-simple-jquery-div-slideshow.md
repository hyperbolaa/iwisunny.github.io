---
layout: post
title: "Code: Simple JQuery Div Slideshow"
tags: Javascript jQuery
---

Here's a super-simple DIV slideshow with JQuery based on one for prototype/scriptaculous, it can be found <a href="http://snippets.dzone.com/posts/show/1068">here</a>. The beauty is that it can contain anything 
a div can. I've been using it for just a single image link, but you can put anything in there. Here's the HTML:

{% highlight html %}
    <div id="slideshow1" class="slide">
        <div>frame 1</div>
    </div>
    <div id="slideshow2" class="slide" style="display: none">
        <div>frame 2</div>
    </div>
    <div id="slideshow3" class="slide" style="display: none">
        <div>frame 3</div>
    </div>
    <div id="slideshow4" class="slide" style="display: none">
        <div>frame 4</div>
    </div>
{% endhighlight %}

And the Javascript

{% highlight javascript %}
    function startSlides(start, end, delay) {
        setTimeout(slideshow(start,start,end, delay), delay);
    }
    function slideshow(frame, start, end, delay) {
        return (function() {
        $('#slideshow' + frame).fadeOut();
        if (frame == end) { frame = start; } else { frame += 1; }
        setTimeout(function(){$('#slideshow' + frame ).fadeIn();}, 850);
        setTimeout(slideshow(frame, start, end, delay), delay + 850);
    })
    }
    // usage: startSlides(first frame, end frame, delay time);
    startSlides(1, 4, 5000);
{% endhighlight %}

I chose 850 as a delay offset on the fade-in because it meshes well with jquery's default timing.
You can fiddle with the numbers as you see fit. Here's what it looks like

<iframe height="350" src="http://jsfiddle.net/JKirchartz/CcWgv/embedded/result,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

If you need more power, check out Malsup's [Cycle](http://www.malsup.com/jquery/cycle/) plugin.

