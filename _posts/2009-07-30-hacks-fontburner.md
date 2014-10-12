---
title: "Hacks: FontBurner"
layout: post
tags: css hack
---

As you might have noticed <s>I've got</s> I had a couple crazy "non-standard" fonts
from [fontburner.com](http://www.fontburner.com/). [FontBurner](http://www.fontburner.com/) is a great tool for hosting [sIFR
(scalable inman flash replacement)](http://www.mikeindustries.com/blog/sifr/)
flash files & javascript to simply replace fonts & text with a small flash
file that displays it in the font of your choice. Currently fontburner has a
limited set of options regarding color/spacing etc. but with a little
ingenuity one is able to add this functionality themselves.

First let us look at how FontBurner works. When you goto their site choose
fonts, then which style of font to use. Once you've chosen a style you can
easily navigate through all the different type-faces, right below each example
is a 'get the code' button, which will give you this:

{% highlight html %}
    <link rel="stylesheet" href="http://www.fontburner.com/css/fontburner.css" type="text/css" media="screen" /> 
    <link rel="stylesheet" href="http://www.fontburner.com/css/fontburner_print.css" type="text/css" media="print" /> 
    <script src="http://www.fontburner.com/fontburner.js" type="text/javascript"></script> 
    <script type="text/javascript" src="http://www.fontburner.com/js/black/high_strung.php"></script> 
    <!-- sIFR fonts delivered by www.fontburner.com -->
{% endhighlight %}

Now you copy that code onto your page & it will replace h1, h2, h3 tags and
any dom element with a class or ID the same as the font-name.

Ok, so now let's do a little disection & investigation...

{% highlight html %}    
    <link rel="stylesheet" href="http://www.fontburner.com/css/fontburner.css" type="text/css" media="screen">  
{% endhighlight %}

Basically does the CSS image-replacement technique

{% highlight html %}    
    <link rel="stylesheet" href="http://www.fontburner.com/css/fontburner_print.css" type="text/css" media="print">  
{% endhighlight %}

Undoes the CSS image-replacement technique for print-only

{% highlight html %}    
    <script src="http://www.fontburner.com/fontburner.js" type="text/javascript"></script>  
{% endhighlight %}

The sIFR code itself

{% highlight html %}    
    <script type="text/javascript" src="http://www.fontburner.com/js/black/high_strung.php"></script>  
{% endhighlight %}

The motherload of hackability, this is where we will have our fun.

{% highlight html %}    
  <!-- sIFR fonts delivered by www.fontburner.com -->  
{% endhighlight %}

Attribution, let's leave this in there because they deserve some credit.

Alright let's see what's in that php file loaded as javascript:
    
{% highlight html %}    
    var high_strung = {  
    src: 'http://www.fontburner.com/flash/high_strung.swf'  
    };  
    sIFR.prefetch(high_strung);  
    sIFR.delayCSS  = true;  
    sIFR.activate(high_strung);  
      
    sIFR.replace(high_strung, {  
    selector: 'h1, h2, h3,  .high_strung, #high_strung'
    ,css: [
    '.sIFR-root {color:#000000;}'  
    ,'a {color:#000000; text-decoration: underline; font-weight:normal; }'  
    ,'a:link {color:#000000; text-decoration: underline; font-weight:normal; }'  
    ,'a:hover {color:#000000; text-decoration: underline; font-weight:normal; }'  
    ,'a:visited { color: #000000; text-decoration: underline }'  
    ,'em { color: #000000; font-style:normal; font-weight:normal; }'  
    ,'strong { color: #000000; font-weight:normal; font-style:normal; }'  
    ]  
    ,offsetTop:0  
    ,marginBottom: 0  
    ,verticalSpacing: 0  
    ,wmode: 'transparent'  
    });
{% endhighlight %}

Hey look, CSS... this is EXACTLY what we want, and editing this script will
give us much more control & options for fontburner. I suggest removing the h1,
h2, and h3 tags from the selectors string in line 9 of this code, you probably
shouldn't put CSS on a tag itself unless you're sure it's neccessary. Now lets
move down to that lovely CSS... here you can change the font color, text-
decoration, underling, weight, but there is a lot more you can do, hack away. So
now you can text-align and almost anything else in flash's limited css.

Now you might have some code that looks like this:

    
{% highlight html %}    
    <link rel="stylesheet" href="http://www.fontburner.com/css/fontburner.css" type="text/css" media="screen" />  
    <link rel="stylesheet" href="http://www.fontburner.com/css/fontburner_print.css" type="text/css" media="print" />  
    <script src="http://www.fontburner.com/fontburner.js" type="text/javascript"></script>  
    <!-- sIFR fonts delivered by www.fontburner.com -->  
    <script type="text/javascript">  
    var high_strung = {  
    src: 'http://www.fontburner.com/flash/high_strung.swf'  
    };  
    sIFR.prefetch(high_strung);  
    sIFR.delayCSS  = true;  
    sIFR.activate(high_strung);  
    sIFR.replace(high_strung, {  
    selector: '.high_strung, #high_strung'  
    ,css: [  
    '.sIFR-root {color:#F0E68C;text-align:center}'  
    ,'a {color:#F0E68C; text-decoration: underline; font-weight:normal; text-align:center}'  
    ,'a:link {color:#F0E68C; text-decoration: underline; font-weight:normal; text-align:center}'  
    ,'a:hover {color:#F0E68C; text-decoration: underline; font-weight:normal; text-align:center}'  
    ,'a:visited { color: #F0E68C; text-decoration: underline;text-align:center }'  
    ,'em { color: #F0E68C; font-style:normal; font-weight:normal; text-align:center}'  
    ,'strong { color: #F0E68C; font-weight:normal; font-style:normal;text-align:center }'  
    ]  
    ,offsetTop:0  
    ,marginBottom: 0  
    ,verticalSpacing: 0  
    ,wmode: 'transparent'  
    });  
    </script>
{% endhighlight %}

And you will have khaki-colour center-aligned text with a non-standard font.

