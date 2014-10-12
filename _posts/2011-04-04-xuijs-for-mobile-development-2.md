---
layout: post
title: "XUIjs for Mobile Development + 2 extensions"
tags: javascript
---

I recently stared playing with [xui.js](http://xuijs.com/) it's a really nice library targeted to mobile devices, 
and it's based on JQuery. I'd really like to stick with jQuery but jQuery Mobile is actually more like jQueryUI 
for mobile and I'm not into making everything on the mobile web look like native iPhone (because if users wanted 
that UI they'd buy an iPhone!)  

The thing with switching between xui and jQuery is that all the functions
aren't there. Fortunately you can extend XUIjs! I was porting [Marco van
Hylckama Vlieg's Simple jQuery Accordion](http://www.i-marco.nl/weblog/jquery-accordion-menu/) and needed jQuery's next and is function (I ended up
simplifying the code to do without the IS, but it might be useful to you)
Here's the extensions:

<script src="https://gist.github.com/901715.js"> 
</script>

