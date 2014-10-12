---
layout: post
title: "JQuery Plugin: Letterpresser"
tags: Javascript JQuery Plugin
---

This plugin adds the Letterpress style to any assigned tag.

Here's what it looks like:

<a href="http://3.bp.blogspot.com/_KHL6Vvj96Eo/Slzi8kMa0oI/AAAAAAAAAiM/g4mhv-ePzYs/s1600-h/letterpresser_screenshot.gif">
<img src="http://3.bp.blogspot.com/_KHL6Vvj96Eo/Slzi8kMa0oI/AAAAAAAAAiM/g4mhv-ePzYs/s400/letterpresser_screenshot.gif" alt="" /></a>

and this is the code needed for this example:

{% highlight html %}
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" type="text/javascript"></script>
    <script src="jquery.letterpress.js" type="text/javascript"></script>
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

This is a CSS / Graphic effect that usually requires a bit of planning and is kind-of hard
to throw into dynamic content, or content you have no control over the markup of. No extra 
tags, or css required. No duplicate text needed.

Here's the basics:

{% highlight javascript %}
    $(".letterpress").letterpress();
{% endhighlight %}

You can, however, edit the styles easily with these 4 options:

{% highlight javascript %}
    color, highlight, topOffset, leftOffset
{% endhighlight %}

Which can be implemented as such:

{% highlight javascript %}
    $(".letterpress").letterpress({color: '#000', highlight: '#0ff', topOffset: '1px', leftOffset: '1px'});
{% endhighlight %}

[Download the JS here](http://jkirchartz-jquery-repository.googlecode.com/files/jquery.letterpresser.js)

