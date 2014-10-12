---
layout: post
title: "VIM quick-start, cheat-sheet, and links"
tags: tutorial
---

If you've been [following me](http://twitter.com/jkirchartz) for a while, you might know my editor of choice is VIM,
it's very clean. There's nothing there to get in your way, except your own limitations, and those limitations can be
destroyed through practice. Havn't tried vim yet? What are you waiting for?

Vim is a text editor written by Bram Moolenaar and first released publicly in 1991. 
It is commonly found on unix-based operating systems. 
VIM is based off an older text editor, vi, and it's name is an acronym for Vi-Improved.
With vim Your fingers never have to leave the keyboard to command great power. The learning curve is a little steep but you can very quickly pick up new skills as you need them. The basic premise is that there is an Input mode
and a Command mode. By default you start in command mode, here you can move around the document, search, and do a fair bit of editing quickly. Insert mode is designed for adding (and removing) text, it's just like a normal text
editor.

##Quick Start/Cheat Sheet

###From the Command Line

* type "vim" into the command line to create a new untitled file
* type "vim /path/to/file.name" to open an existing file. (if the file doesn't exist, this creates it)
* to open multiple files list them like `vim file1.txt file2.sh`
    * you can switch to the next open file with the command `:bn`, or the previous one with `:bp`
    * to open in a split window `vim -o file.type file2.type file3.type` (lower case "o" for horizontal, uppercase for vertical split)
* open a file & jump to a particular line with `vim +10 file.type` for the 10th line (`+` alone will jump to the end of the file)
* open a file & jump to a particular word or phrase with `vim -c "/searchstring" file.type` (you can execute other commands with the `-c` flag too)
* find the differences between two files with `vim -d file.v1 file.v2` (this works like vimdiff)

###Working with VIM modes

* hit "i" to switch from command mode to input mode
* hit "v" to switch from command mode to visual mode
* hit "esc" to switch back to command mode

###VIM Commands

* type ":wq" or "ZZ" to save and quit
* type ":q!" to quit without saving
* moving the cursor
    * `j` move down one line
    * `k` move up one line
    * `h` move left one character
    * `l` move right one character
* to move to line 88 hit `88G` or `88gg`
* move to the begining of a file hit `gg`
* move to the end of the file hit `G`
* hitting `%` while the cursor is on a bracket like `[({})]` will find the matching bracket
* to delete a character hit `x`
* to cut a line hit `dd`
* to copy a line hit `yy`
* to cut or copy multiple lines put a number before the command like `5dd`
    * you can put a number before most commands to repeat them X many times.
* press `p` to paste after the current line
* press `P` to pase before the current line
* to delete from the cursor to the end of the line hit `d$`
* to delete from the cursor to the beginning of the line hit `d0`
* in command mode to search for `apple` type `/apple` and hit enter
    * to look for the next occurance hit `n`
* in command mode to find and replace all occurances in a line type `:s/original/replacement/g`
    * when searching you can use regular expressions
* in command mode to find and replace all occurances in a file type `:%s/original/replacement/g`
* for an interactive history of commands try `q:` (also does searched with `q\` or `q?`)


###VIM tips

* If the file is owned by root and you opened it as another user, you can escalate privileges and save with `:w !sudo tee %`
* the delimiter when using `:s` doesn't have to be `/` you can try `%` or `_` if you want to avoid fences like in `:s/\/usr\/local\/bin/\/common\/bin/` you can use `:s#/user/local/bin#/common/bin#`
* You can store a cursor location in a mark, vim allows 26 of these, you can set a mark with command `m` followed by a letter like `ma`
    * you can move to a line containing a mark using the `'` (single quote) command `'a` moves to the line containing the mark labeled `a`
    * you can move to the exact location of the mark using the `` ` `` (backquote) command `` `a `` moves to the mark labeled `a`
    * these are "movements" that can be combined with other statements like `` d`a `` to cut text from the cursor's location to the mark labeled `a`
* You can make macros with the `q` command, 
    * hit `qa` to create a macro named `a` (should show a record indicator) enter a series of commands and  hit `q` again to stop recording.
    * hit `@a` to execute the macro named `a`, you can execute the command multiple times in the standard way `23@a` will repeat it 23 times.

##Going Further

Vim is highly customizable, you can set shortcuts and preferences in the `.vimrc` file, usually located in your home directory.
There are a [ton of plugins (aka scripts)](http://www.vim.org/scripts/) available too. They're easy to manage with other scripts
like [Pathogen](https://github.com/tpope/vim-pathogen) or [Vundle](https://github.com/gmarik/vundle). 

If you want to get a headstart, my [dotfiles are available on github](https://github.com/jkirchartz/dotfiles), but there are a lot of people
doing that lately, for example there's a very nice VIM Distribution named [Janus](https://github.com/carlhuda/janus) that's worth a look.

##Links

* [Vim Interactive Tutorial](http://www.openvim.com/tutorial.html) (try it now!)
* [VIM docs](http://www.vim.org/docs.php)
* [VIM Cheat-sheet](http://michael.peopleofhonoronly.com/vim/)
* [VIM Keyboard Cheat-sheet](http://walking-without-crutches.heroku.com/image/images/vi-vim-cheat-sheet.png)
* [Leaning Vim the Pragmatic Way](http://jrmiii.com/2009/03/06/learning-vim-the-pragmatic-way.html)
* [Learning Vim for People Who Think Things Like Vim Are Weird and Hard](http://csswizardry.com/2014/06/vim-for-people-who-think-things-like-vim-are-weird-and-hard/)
* [VIM Regex](http://vimregex.com/)
* [Vim Tips Wiki](http://vim.wikia.com/wiki/Vim_Tips_Wiki)
* [Zzapper's Best of Vim Tips](http://zzapper.co.uk/vimtips.html)
* [Secrets of the Vim Ninja](http://bencrowder.net/files/vim-fu/)
* [Learn Vim Progressively](http://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/)
* [Vimbits](http://vimbits.com/)
* [VI Cheat Sheet](http://www.lagmonster.org/docs/vi.html)
* [Learning Vi & Vim editors (O'Reilly)](http://www.amazon.com/gp/product/059652983X)
* [Download Vim](http://www.vim.org/download.php)
* [Stack Overflow Question: What is your most productive shortcut with Vim?](http://stackoverflow.com/questions/1218390/what-is-your-most-productive-shortcut-with-vim/1220118)
* [Derek Wyatt's Vim Video Tutorials](http://www.derekwyatt.org/vim/vim-tutorial-videos/)
* [Vimcasts](http://vimcasts.org/)
* [usevim](http://usevim.com/)
* [VIM Adventures](http://vim-adventures.com/) (Learn VIM playing an RPG)
* [vimgolf](http://vimgolf.com/) (find the shortest way to complete the challenges)
* [shortcutFoo](https://www.shortcutfoo.com/) (Drills to learn your tools better)
* [frequently used vimdiff commands](http://stackoverflow.com/questions/5288875/vimdiff-what-are-the-most-frequently-used-commands-shortcuts-that-could-get-a-n)
