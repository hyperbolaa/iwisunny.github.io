---
layout: post
title: "JQuery Plugin update: Letterpress2"
name: jquery-plugin-update-letterpress2
tags: jQuery plugin
---

A While back I coded a plugin to apply the letterpress effect, since then I've decided
that css's text-shadow property was a better way to go, but some browsers don't support
text-shadow \*cough\* IE \*cough\* this is a slight mod to check for IE &amp; apply the letterpress 
plugin to them, and use text-shadow on browsers that support it.  

Here's what it looks like:

[![](http://3.bp.blogspot.com/_KHL6Vvj96Eo/Slzi8kMa0oI/AAAAAAAAAiM/g4mhv-ePzYs
/s400/letterpresser_screenshot.gif)](http://3.bp.blogspot.com/_KHL6Vvj96Eo/Slz
i8kMa0oI/AAAAAAAAAiM/g4mhv-ePzYs/s1600-h/letterpresser_screenshot.gif)


and this is the code needed for this example:

{% highlight html %}    
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" type="text/javascript"></script>  
    <script src="jquery.letterpress2.js" type="text/javascript"></script>  
    <style>  
    .all {  
    font-family:Helvetica, Arial, Sans;  
    }  
    h1 {  
    background:#2bf;  
    }  
    h2 {  
    background:#f2b;  
    }  
    h3 {  
    background:#b2f;  
    }  
    </style>  
    <script type="text/javascript">  
    $(document).ready(function(){  
    $("h1").letterpress({color: '#000', highlight: '#0ff', topOffset: '1px', leftOffset: '1px'});  
    $("h2").letterpress({color: '#000', highlight: '#f0f', leftOffset: '1px'});  
    $("h3").letterpress({color: '#000', highlight: '#f6f'});  
    $("h4").letterpress({topOffset: '2px', leftOffset: '2px'});  
    });  
    </script>  
    <div class="all">  
    <h1>Lorem ipsum dolor sit amet</h1>  
    <h2>Lorem ipsum dolor sit amet</h2>  
    <h3>Lorem ipsum dolor sit amet</h3>  
    <h4>Lorem ipsum dolor sit amet</h4>  
    </div>  
{% endhighlight %}    



This is a CSS / Graphic effect that usually requires a bit of planning and is
kind-of hard to throw into dynamic content, or content you have no control
over the markup of. No extra tags, or css required. No duplicate text needed.


Here's the basics:


{% highlight javascript %}    
    $(".letterpress").letterpress();
{% endhighlight %}


You can, however, edit the styles easily with these 5 options:

{% highlight javascript %}
    color, highlight, blur, topOffset, leftOffset
{% endhighlight %}

note: The blur will only be applied if text-shadow is being used.


These attributes can be implemented like this:

{% highlight javascript %}
    $(".letterpress").letterpress({color: '#000', highlight: '#0ff', topOffset: '1px', blur: '1px', leftOffset: '1px'});
{% endhighlight %}

[Download the JS here](http://jkirchartz-jquery-repository.googlecode.com/files/jquery.letterpress2.js)
