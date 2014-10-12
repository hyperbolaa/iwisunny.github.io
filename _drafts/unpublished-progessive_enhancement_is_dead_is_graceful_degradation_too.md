---
layout: post
title: Progessive Enhancement is dead, did Graceful Degradation die with it?
published: false
tags: javascript, mvc
---

With the way browsers have been adopting standards, it's becoming easier to make device-independent rich web apps with javascript. 
Frameworks like [AngularJS][1] and [Ember.js][2] are amazing front-end MVC's, but often you see people using them in ways that break the web.
Some people like to make excuses about it, saying the pay-off is worth it, but even Ember's site proudly proclaims "Build JavaScript apps that don't break the web!"

[Progressive Engancement is Dead][3], but did Graceful Degradation die with it?
Progressive Enhancement and Graceful Degradation are two ways of looking at the same problem: legacy browsers &amp; devices.
Your end user might have JS disabled, or might be using IE5.5 for some mysterious reason, they might even visit with, _\*GASP\*_ lynx or elinks.

The point of the web isn't to share the sleekest UI or use cool new toys, it's to share information.
[Sigh Javascript][4] is setup specificially to shame developers who break the web, by using these incredible MVCs, but don't account for unsupportive devices.
It's not gonna kill you to add `<noscript>Javascript is required to view this page</noscript>` or some other indicator as to why your site appears broken.
It's certainly a better choice than having a bunch of potential users think you or your company can't even throw together a simple webpage!

[1] http://http://www.angularjs.org/
[2] http://emberjs.com/
[3] http://tomdale.net/2013/09/progressive-enhancement-is-dead/
[4] http://sighjavascript.tumblr.com/

