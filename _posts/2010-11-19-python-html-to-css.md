---
layout: post
title: "Python - HTML to CSS"
tags: python
---

I surely couldn't have been the first to think of this, but wouldn't it be great if you could write your HTML, 
then convert it to CSS? Yeah, I know they're not really the same, but the CSS has to be attached to something. 
Why not pull it out and have a skeleton CSS file made for you? This short python script will read in HTML, and 
spit out all the CSS selectors it can find. I plan on adding this to a larger project, so it's just a funtion and the call.

<script src="https://gist.github.com/1118350.js"> 
</script>

I'm using regex to get rid of everything that _isn't_ HTML, then [BeautifulSoup](http://www.crummy.com/software/BeautifulSoup/) to parse the HTML into tags, ids, and classes. 
I then remove duplicates by converting the list to a set and back, sort the lists, and add the appropriate CSS selector and brackets. 
Then it writes the CSS to a file. This last line runs the function, the first argument is the input HTML file, and the second is the 
output CSS file. You'll have to change this to reflect your desired filenames.

I'm sure there are a few things I can do to optimize this, or at least reduce the line count, but I'm new to python 
so I'll save that for another day. Like I said I plan to add this to a larger project so I'm going to take out the 
file I/O for that and just feed in strings; but until then, enjoy!
