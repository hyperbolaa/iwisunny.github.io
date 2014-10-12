---
title: "jQuery Plugin: Fish-Menu"
layout: post
tags: jQuery plugin
---

Here we go, at it again... with a new plugin called fish-menu... heavily based on [jquery.ui.potato.menu](http://labs.makotokw.com/s/jquery/menu) by [Makoto_KW](http://makotokw.com/en/)   

I've modified the code in many ways, adding a few features such as:

  * [hoverIntent](http://cherne.net/brian/resources/jquery.hoverIntent.html) Support
  * Drop-down textual marker, such as »
  * Miniaturization, helps speed download  
  * No jQuery UI, helps reduce HTTP requests

Use is as easy as the original potato menu, by simply using nested unordered
lists, like this:


{% highlight html %}    
    <ul id="menu1">  
        <li><a href="#">Item 1</a></li>  
        <li><a href="#">Item 2</a></li>  
        <li>  
            <a href="#">Item 3</a>  
            <ul>  
                <li><a href="#">Sub Item A</a></li>  
                <li><a href="#">Sub Item B</a></li>  
            </ul>  
        </li>  
    </ul>
{% endhighlight %}

And then throwing some javascript/css at it like this:

{% highlight html %}    
    <link rel="stylesheet" type="text/css" href="jquery.fish.css" />  
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" type="text/javascript"></script>  
    <script src="js/jquery.hoverIntent.min.js" type="text/javascript"></script>  
    <script src="js/jquery.fish.menu.js" type="text/javascript"></script>  
    <script type="text/javascript">  
    $(document).ready(function(){  
    $('#menu1').fishMenu();  
    });  
    </script>
{% endhighlight %}

and Ka-Pow, drop-down jQuery menus in 2.66KB (minified)

DOWNLOAD: [FULL](http://jkirchartz-jquery-repository.googlecode.com/files/jquery.fish.menu.js) 
[MINI](http://jkirchartz-jquery-repository.googlecode.com/files/jquery.fish.menu-min.js) 
[CSS](http://jkirchartz-jquery-repository.googlecode.com/files/jquery.fish.css)

I have noticed a bug in ie6 (it exists in the original potato menu too) and I
can't really figure it out, the li's in the sub-nav appear to float left, if
anybody has any insight let me know (it's not the pseudo-element bug)

