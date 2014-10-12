---
layout: post
title: How to style the List Component with AS3
tags: Flash
---

Back in the good ol' days to style the list component's over state it was just:

{% highlight actionscript %}
    myList.setStyle("rollOverColor","0xDDDDDD"); 
{% endhighlight %}

But flash had to become more OOP-like, and EMCA-like so that went out the window
&hellip; After playing for several hours with the setStyle, setRendererStyle, and any 
other class/command with Style in the name I finally figured out the new secret 
that Adobe doesn't really let on in it's help files, or on LiveDocs.
Without further ado, the code to style a list component's over state is:

{% highlight actionscript %}
    var newBG:MovieClip = new MovieClip();
    newBG.graphics.beginFill(0xFF00FF);
    newBG.graphics.drawRect(0,0,200,30);
    newBG.graphics.endFill();
    myList.setRendererStyle("overSkin", newBG);
{% endhighlight %}

You can also use Sprite, and Shape in place of the movie clip so&hellip; after a few 
nights of pulling my hair out, I found it &hellip; and sure, it's cool to be able to draw 
anything into that background with the drawing API, but it sucks that instead of just 
changing a setting, you've gotta do all that.

I hope this helps somebody else out there.

