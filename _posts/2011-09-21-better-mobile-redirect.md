---
layout: post
title: Better Mobile Redirect
tags: html javascript
---


Here is a simple reusable javascript redirect that uses the [Mobile Link Discovery Spec](http://www.sixapart.jp/docs/tech/mobile_link_discovery_en.html) 
which describes a link tag that tells the browser where to find an Alternate for Hand-Held devices: `<link href="< Mobile URI >" media="handheld" rel="alternate">`.
The script is detecting user-agents, which is "evil" but Not every site needs or wants the 
whole [Responsive Design](http://www.alistapart.com/articles/responsive-web-design/) bundle, 
and that has [it's problems](http://www.webdesignshock.com/responsive-design-problems/). 
Sometimes you just gotta redirect, try using the link tag with the script below:  

<script src="https://gist.github.com/1232304.js?file=redirect.js">
</script>

Then you'd have html like this:

<script src="https://gist.github.com/1232304.js?file=test.html">
</script>

And away you go... I'm only testing for iPhone, iPad, Android, Blackberry, and WebOs. They run
the market right now so I don't feel too bad for leaving out the fray, if
you're logging your visitors user agents you can tweak the regex as needed.
