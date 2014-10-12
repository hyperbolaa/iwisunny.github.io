---
title: "JQuery Extension: fixPng"
layout: post
tags: jQuery plugin
---

PNGs and IE6, sounds like a recipe for trouble. Well you could always use the lovely [DD_belatedPNG](http://www.dillerdesign.com/experiment/DD_belatedPNG/) but to call it you need to add a class to each element containing a png. Adding a class is fine unless you have user-generated content & no control over the back end, and they like to use semi-transparent PNGs. So today I cobbled together a little jQuery extention to search through and find all PNGs (in images, and backgrounds) and add a class to their container, then call DD_belatedPNG... probably not the most elegant solution, but a solution none the less.  

{% highlight javascript %}
    $.extend({
    /* Usage:
    * $.fixPng();
    */
    fixPng: function(){  
    if($.browser.msie && $.browser.version=="6.0"){  
    if(typeof DD_belatedPNG.fix == "function"){  
    var imgsrc, styleS;  
    $("img").each(function(){  
    imgsrc = $(this).attr('src');  
    if(imgsrc.split(".")[1] == "png"){  
    $(this).addClass("fixPng");  
    }});  
    $("*").each(function(){  
    styleS = $(this).css("background-image");  
    if(styleS != "none"){  
    var tmpS = styleS.substring(styleS.length-4,styleS.length-1);  
    if(tmpS == "png"){  
    $(this).addClass("fixPng");  
    }}});  
    }  
    DD_belatedPNG.fix(".fixPng");  
    }   
    }  
    });
{% endhighlight %}
