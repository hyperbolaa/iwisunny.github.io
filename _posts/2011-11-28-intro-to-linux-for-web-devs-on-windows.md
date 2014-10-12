---
layout: post
title: Intro to Linux for Web Devs on Windows
tags: tutorial
---

I've been spending a lot of time using the linux CLI lately, and I know it can
seem difficult at first. When I started with computers everything ran off the
CLI and nobody got all freaked out, that was back before color monitors, now
we have color monitors in our pockets so don't worry, it's not that hard, you
can do this.

## Logging In:

To remotely access a server you'll need a telnet/ssh client, for windows
[PuTTY](http://www.putty.org/) is a good choice , so [download &amp; install
PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).  When
you open putty you'll see a space for your host name or IP address for the
server you're going to access,  input the relevant information and hit open at
the bottom of the window. You'll be promped for your username &amp; password when
PuTTY connects. Now take a deep breath, you're in a linux CLI, huzzah!

To learn more about PuTTY check [the PuTTY
docs](http://the.earth.li/~sgtatham/putty/0.61/htmldoc/).

## Getting Around:

On windows you can list folders and directories like `C:/Program Files/` or 
`` C:\Program Files\ ``, on linux it's `/var/www/html` (for apache's default html
directory), so linux is /-only, where windows doesn't care if you use / or \.

Let's see where we are on the server, type in `pwd` at the command line (you
should see /home/ or /root/).

To see what files are in this folder type `ls`, this will print out columns of
files in the current directory, but if you want to see more details you can
add to this command with flags, `ls -a` will list all files, `ls -l` will list
details about the files, you can mix these flags like `ls -al` to list details
for all files. You'll notice a .. and a . directory, In linux the path to the
current directory is `./` and the path to the parent directory is `../` Not
much fun being stuck in one place huh?

Here's the last command in this section `cd` just typing in `cd` will usually
take you to your home directory, which is where you currently are anyhow if
you've been following along. cd is there to help you Change Directories, so to
move to the parent directory of your current folder you do `cd ../` but you
can move anywhere with this command as long as you know where you're going. If
this is an apache server try `cd /var/www/html` to get to the default main
directory for the files. Some servers keep this directory at `/sites` so you
could try there too.

Here's a quick reference of commands for moving around:

* `pwd` = display current directory path (Print Working Directory)
* `ls` = list files, you can add flags to see more info on each file, I like to use `ls -alF` (LiSt) 
* `cd` = change directory, use `cd ../` to move up one directory, or `cd /var/www/html` to move to an entirely different directory (Change Directory)

for more on these, check the wikipedia pages for
[cd](http://en.wikipedia.org/wiki/Cd_\(command\)),
[ls](http://en.wikipedia.org/wiki/Ls), and
[pwd](http://en.wikipedia.org/wiki/Pwd).

## Editing Text-based files:

[My favorite is VIM](/2013/04/vim_quick_start_cheatsheet_and_links.html), so to try it out simply type `vim` into the
command line to create a new file and lets go. Notice that typing isn't
changing anything? yeah, vim has input mode and command mode, and you start in
command mode. So hit `i` to switch from command mode to input mode and you can
finally start typing, to get back to control mode hit `esc`, and to save and
quit (from command mode) use `:wq`; to quit immediately without saving use
`:q!`. Vim is super powerful but this switching thing is radically different than most windows-based 
text editors. The [learning curve is steep](http://yehudakatz.com/2010/07/29/everyone-who-tried-to-convince-me-to-use-vim-was-wrong/), but worth it.
There have been books written about using VIM, it's a
huge entity unto itself to [learn more about VIM](http://www.vim.org/docs.php)
try [their docs](http://www.vim.org/docs.php) or check out this nice [VIM
Cheat-sheet](http://michael.peopleofhonoronly.com/vim/).

Lets use something simpler for now: [nano](http://www.nano-editor.org/). type
in `nano` at the command line to open a new file, start typing you're already
in input mode, and there's a UI so it tells you what commands are available,
but there's much more than meets the eye. To open an existing file use `nano
filename.ext` at the command line

Unlike VIM nano doesn't have code-highlighting by default so to set this up
you have to edit `/etc/nanorc`, so type `nano /etc/nanorc` at the command line
the section we're looking for starts on line 240, so hit `ctrl+/` and type
`240` hit enter and you'll see a list of nanorc files, erase the # before each
one you want code highlight for, then hit `ctrl+x` it prompts you to save
changes, hit `Y`, then it prompts for the file name just hit `Enter` to keep
it the same.

Here's a few nano commands that are useful:

* `ctrl+k` = cut, you can cut out multiple lines by hitting this repeatedly.
* `ctrl+u` = uncut, you can re-insert cutout lines by hitting this repeatedly.
* `ctrl+/` = goto line #
* `ctrl+w` = search for a word or phrase, there are a few options here, 'M-R' is a regex search, try hitting `esc+r` to use this (M stand for Meta-key, so try the Apple key or Windows key if esc doesn't work).

Nano's UI shows options you can use to translate keystrokes you should know
that `^` is the control key and `M` is the escape key.

For more information on nano, read [the Nano docs](http://www.nano-editor.org/dist/v2.2/nano.html)

## Moving, Copying, Renaming, and Deleting files:

Sometimes things are in the wrong place, or you don't want to overwrite a file
to test out something, so how the heck do you move or copy or rename or delete
files!? The commands are mv, cp, and rm.

Moving a file is `mv path/to/file/location/name.ext
/path/to/new/location/name.ext` if you're currently in the directory with your
file use `mv file.ext /path/to/wherever/your/putting/it/file.ext` you just
got to know where you're moving the file to, to move it up a directory use `mv
file.ext ../`, multiple files are easy too `mv file1 file2 ~/` would move
those files to your home directory.

Copying a file is done with `cp filetocopy.ext newfile.ext` you can also copy
the file to a new directory, you can even copy a directory with `cp
/dir/to/copy/ ~/new/dir/`

Deleting files can be done with `rm file.ext` you can delete a directory and
it's content with the recursive flag `rm -r`, and the flag to force a deletion is `-f` but be
careful, `rm -rf /` can delete the whole root directory and totally screw up
the server. Most platforms and admins protect against this but it's better to
be safe than sorry.

## Conclusion:

The Command line can be intimidating at first, but don't fear it's power. It
can be a very helpful tool. For a more in-depth look read the [Ultimate Linux Guide For Windows Users](http://www.dedoimedo.com/computers/ultimate-linux-guide-for-windows-users.html), and for more information check out
[http://linuxcommand.org/](http://linuxcommand.org/), [TuxFiles' intro to the
Linux CLI](http://www.tuxfiles.org/linuxhelp/cli.html) and [Hypexr's Bash
Tutorial](http://www.hypexr.org/bash_tutorial.php). You can also add a linux
shell to your windows machine with [cygwin](http://www.cygwin.com/), [mingw](http://www.mingw.org) \(this is what git-bash uses\) or lightweight
alternative [gow](https://github.com/bmatzelle/gow/wiki/). If you'd like an excellent terminal emulator in a snap, try [Cmder](http://bliker.github.io/cmder/), it packages up [ConEmu](https://code.google.com/p/conemu-maximus5/) and a few other things with a nice config file to provide a beautiful environment.
