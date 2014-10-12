---
layout: post
title: Slate, Vimium, and never touching the mouse again.
tags: article
---

It's no secret, I'm VIM fan. Any time I have to take my hands off the keyboard to mess with a GUI I have issues.
My palms get all sweaty, I break out in hives, and have a vague feeling like I'm playing a game of whack-a-mole.
Well, it may not be *that* bad, but I'm sick of it. So I decided to do something about it.

I split my time almost equally been my editor and my browser, why not use the same keyboard shortcuts?
Enter [Vimium](http://vimium.github.io), a customizable Google Chrome extension that gives you vim-like control over your browser.
All the commands are spot on, `G` and `gg` scroll you to the bottom or top of the page, respectively.
Hitting `f` will display a character next to all the links on a page, hitting that letter opens the associated link.
A quick `gs` will allow you to view source, easier to remember than `opt+cmd+U` (`Ctrl+U` on windows, lucky bastards.)
Even marks work as expected!

So now I can browse without the cursor, how can I manage windows?
`Cmd+tab` is woefully under-powered, and windows has Aero; why not improve both?
[Slate](https://github.com/jigish/slate) does just that by offering custom configuration and tons of options.
By [default](https://github.com/jigish/slate/blob/master/Slate/default.slate) Slate is easy to use, but via custom configuration
you can tweak your way to the perfect environment. I've done everything I could come up with to
[my Slate config](https://github.com/JKirchartz/dotfiles/blob/master/slate) to make it work more
like vim, and it's fantastic! (I stole a lot from other's configs, that's the beauty of config files and sharing)
With my config `Cmd+ctrl+E` (default is `Cmd+esc`) will show a character for each open window, even if they're hidden behind others.
`Cmd+ctrl+[hjkl]` uses the standard vim keys for placing a window on the half of the screen indicated by the direction (default are arrow keys, IIRC).

Even better, they're BOTH free, open-source, and (the icing on the cake) hosted on github; so you can inspect the code at your leisure.

## links

* [Vimium](https://github.com/philc/vimium)
* [Slate](https://github.com/jigish/slate)




