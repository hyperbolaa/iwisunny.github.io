---
title: "New Plugin: Clickify"
layout: post
tags: jQuery plugin
---

Here's a quickly little plugin' tool, that I know people will find very useful. It's called Clickify, and it's an answer to a problem a lot of people are concerned about. Too often has somebody asked "How will users know where to click?" now we have your answer, Clickify automatically adds the text "(click here!)" to every "hyperlink" within a page, so that there will be no confusion as to where to click to visit a link.  

I'm sure that people are actually very confused whenever text becomes blue and
underlined, even more so when it changes their cursor to a hand. These new
"Links" as their colloquially called are so new and bewildering that some
users obviously need some assistance in understanding them.


Here's the source code:


{% highlight javascript %}    
    (function($) {  
    $.fn.clickify = function(){  
     $("a[href]").each(function(){  
      $(this).append(" (click here!)")   
     });  
    }  
    })(jQuery);  
{% endhighlight %}    


And it's simple to use! Just add `<script>$(function(){$.clickify()});</script>`
to your page and you're good to go!


for more on the subject visit:

[Good Usability's _Don't say click here on link text_](http://www.goodusability.co.uk/2009/01/dont-say-click-here-on-link-
text/)
