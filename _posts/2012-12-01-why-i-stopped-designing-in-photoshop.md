---
layout: post
title: Why I Stopped Designing in Photoshop
tags: article
---

When I was learning design I was glued to photoshop. 
Touching every filter and tool, researching customisation and automation.
Working hard to improve my skills, and learning all the tricks and [etiquette](http://photoshopetiquette.com), but it was hogging my time.
It was all fluff, web browsers don't care about your layer-naming scheme or how well you use smart objects.
The web is open, free, and unpredictable; Photoshop is none of those things.
It's a monolith of photo manipulation and drawing tools, it exists purely for creating and improving stunning images.
It's not a web devlopment tool, it's a graphics tool, and you should always use the right tool for the task at hand.

##PX

Everything you do in Photoshop has to be pixel-perfect, snapping to the pixel grid ensures jpegs are crisp and don't have any jagged edges or odd artifacts. 
Only one small problem: on the web, [there is no such thing as pixel perfect](http://jkirchartz.com/2012/07/there-is-no-such-thing-as-pixel-perfect.html).
There's just no telling what a pixel will be on the end-user's screen. 
When viewed at smaller resolutions set pixel values don't change, so if you have a combined total of `960px` of margins, padding, and images on a `320px` wide screen you're not giving the user the best experience.
There's another bug when using IE6-8, if you set your font with a pixel height it won't resize like modern browsers and this hurts your site's accessability.

##Mockups

Sometimes mockups are neccessary, but I don't use them often. 
It's much faster to prototype instead and it gives you a great head start to the final product. 
Clients love seeing progress, and if you let them play with the minimum viable product they feel much more involved in the process. 
This also allows them to give you feedback quicker, spot mistakes, and ask questions &mdash; all valuable time savers. 

##Don't take my word for it

>A PSD/PNG should be nothing more than an idea of a website. It should give clues and a direction to the build, but ultimately should not be treated as a final design. Following PSDs to the pixel will lead to ill-considered code, and code is your final product, not an image. For example, if your PSD uses three shades of very similar blue, the build should pick and honour just one. There is no point repeating similar declarations in your CSS when a happy middle-ground is more efficient, easier and quicker. A PSD is a clue, not a contract.

&mdash; [Harry Roberts](http://the-pastry-box-project.net/harry-roberts/2012-november-20/)

>Throughout my career, I’ve watched immensely talented designers waste a shitload of time creating fully fleshed-out comps of what a website could look like. Pixels get pushed, details are sweated, pages are printed out, hung on walls, and presented to clients. Clients squawk their feedback, then designers act on it. They repeat this dance until everyone is content (or until nobody gives a shit anymore, which happens more often than you’d think). Only then do those pristine comps get handed (more like shoved) over to developers to build.
>
>It’s an increasingly-pathetic process that makes less and less sense in this multi-device age. I’m not making a case for ditching Photoshop altogether and designing solely in the browser (where are the blend modes in Chrome dev tools again?) but rather better understanding how we use Photoshop in modern web design

&mdash; [Brad Frost](http://bradfrostweb.com/blog/post/the-post-psd-era/)

