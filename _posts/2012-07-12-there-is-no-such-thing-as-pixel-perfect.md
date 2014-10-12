---
layout: post
title: "There is no such thing as pixel-perfect web design"
tags: article
---

There, I said it. Now get the phrase out of your head, it doesn't exist, please stop trying. 
Far too often you'll hear some paraphrasing of the complaint "But it doesn't look like it did in Photoshop" 

##  Well, Why not?

For starters, a web browser **isn't** Photoshop; but pixel-perfect design is
still unattainable. I mean what _is_ a
[pixel](https://en.wikipedia.org/wiki/Pixel)? splitting the word "pix-el" is
short for Picture Element, the smallest unit of a picture. Chances are you're
reading this on a computer, it's monitor probably has square pixels; but look
closely at your TV and you might see rectangular pixels, magnify your
newspaper and you'll find round ones. If you happen to have a newer MacBook /
iPhone / iPad, they use the amazing [Retina
display](http://www.apple.com/iphone/features/retina-display.html) which packs
4 pixels in the place of 1. This unit of measurement is vastly different in
every format, and we haven't even left the sofa.


[![Close-up of different pixels](http://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pixel_geometry_01_Pengo.jpg/600px-Pixel_geometry_01_Pengo.jpg) ](http://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pixel_geometry_01_Pengo.jpg/600px-Pixel_geometry_01_Pengo.jpg)

<div class="img-metadata">
(each set of 3 colors is a pixel) <a href="https://en.wikipedia.org/wiki/File:Pixel_geometry_01_Pengo.jpg">[source]</a>
</div>


## Moving the Web Forward

In our current market place, there are hundreds of web-ready devices and
smartphones (and [refrigerators](http://www.gizmag.com/go/1132/)) that are
trying to access your site. Unfortunately this also causes problems because
the screen dimensions on these devices vary greatly. As time passes this
fragmentation problem will probably only get worse.


[![graph showing trend of growing screen sizes on Android
handsets](http://www.carrypad.com/files/2012/02/android-handset-screen-sizes-over-time.png) ](http://www.carrypad.com/files/2012/02/android-handset-screen-sizes-over-time.png)

<div class="img-metadata">
<a href="http://www.carrypad.com/2012/02/08/report-android-handset-screens-growing-over-time-5-screens-the-norm-by-end-of-2013-where-will-it-stop/">(source)</a>
</div>


This graph is just screen dimensions for Android phones! Nevermind the completely proprietary nature of [feature
phones](http://www.phonescoop.com/glossary/term.php?gid=310) and the world of
tablets. You have absolutely no control over the screen dimensions your client
is using, or what resolution they're running, because of this there is no way
to do a pixel-perfect design that looks _good_ everywhere. If you try prepare
to spend your resources on [herding
cats](https://www.youtube.com/watch?v=Pk7yqlTMvp8).

## Don't take my word for it

> For me, “ideal” on the web isn’t about pixel-perfection anymore, but about
> seeking the most pragmatic approach to balancing different kinds of content
> with an ever-increasing number of screen sizes and resolutions. 

&mdash; [Trent Walton](http://trentwalton.com/2012/06/19/fluid-type/)

> A pixel is not a pixel. There are different kind of pixels: CSS pixels, density independent pixels and device pixels. 

&mdash; [Peter-Paul Koch](http://twitter.com/smashingmag/status/253785972377010176)

> The important thing to keep in mind is that we need to stop thinking about the web in pixels and think about it more in views and how our designs will be displayed in these different views.

&mdash; [Patrick Cox](http://tympanus.net/codrops/2012/10/30/becoming-device-agnostic/)

##  What's the solution?

It's just not possible to plan for every single device, so you'll just have to
embrace uncertainty. [Responsive design](http://www.alistapart.com/articles/responsive-web-design/) will help adapt, but it has its
[problems](http://www.webdesignshock.com/responsive-design-problems/), you
could also make a separate mobile site (and you _could_ make that responsive),
mix solutions until you find what works for you and your client. There's more
planning and experimentation in developing for the web today than there was a
decade ago, and who knows what the future will bring. Technology is there to
help, even if it does complicate things sometimes.


BTW, the physical pixel on the device has nothing to do with the CSS pixel, because [in CSS pixels are angular measurements](http://inamidst.com/stuff/notes/csspx), i.e. they are non-linear.
