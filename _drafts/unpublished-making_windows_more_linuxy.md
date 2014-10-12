---
title: Making Windows More Linuxy
tags: article windows console terminal bash cygwin mintty mingw cmder babun chocolatey conEmu
---

Switching to windows from linux seems counter-intuitive, but to make the transition lets painless you can install a few programs in a breeze and be running a familiar system
Window's `cmd.exe` is a strange parallel universe vaguely remniscent of DOS and the days of yore it hasn't changed much since then.
Fortunately we also have `powershell` which ships default with Windows Vista, 7, and Server 2008; I'm sure it's great if you're a Windows sysadmin, but for me it looks more like their ugly superstrong step-child they hide in the cellar and feed baby-ruth bars.
In Powershell some of the commands you're used to still work, but generally because their aliased to their new equivalents, for example `cd` is aliased to `Set-Location` and `dir` does `Get-ChildItem`.
So there's two pre-installed 'doze consoles, they're kind of alright, but nothing like what [linux][1] does. 

What windows is sorely lacking though is a package manager, and here [Chocolatey NuGet][2] really takes the cake. 
They've got over 2000 unique packages, and more than 4 million downloads with their system; and installation is a snap.
You'll need administrator privileges, so hit the windows key and type `cmd` then hit <kbd>ctrl</kbd><kbd>shift</kbd><kbd>enter</kbd>. According to [their website][2] to install, run:

    @powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin

now installing packages is as simple as 

    choco install cygwin conemu

So that's just what we'll do - install [Cygwin][3] so we can get a decent linux-ish environment to develop in, and `cyg-get` so we can have our linux-ish packages managed, and [ConEmu][4] because we'll need an awesome terminal emulator to run it in
Now that you've been triply "blessed by the chocolatey gods," you're ready to setup ConEmu, you can run it by typing the following into cmd

	"C:\Program Files\ConEmu\ConEmu64.exe"

The first time running this there is a dialogue, here you can set ConEmu to be portable, automatically update, and a few other options.
I prefer to keep my config as an xml file in the ConEmu directory, and automatic updates are a nice plus.
After this modal ConEmu opens with `cmd.exe` running, you can click the arrow next to the green plus icon in the upper right to see some pre-defined shells, unfortunately the defaults expect Cygwin to be in it's default directory `C:\Cygwin` but chocolatey installs it in C:\tools\cygwin`.
To fix this, open the ConEmu settings by Right click where the tabs are and select 'settings', or press <kbd>Win</kbd><kbd>alt</kbd><kbd>p</kbd>. 
Under 'Startup' on the right, select 'Tasks', click on the `{Cygwin Bash}` task, and change the directory cygwin is installed, iiand t should now read

	%SystemDrive%\tools\CygWin\bin\sh.exe --login -i

if your current user isn't admin, you can append `-new_console:a` to that to tell conemu to startup as admin. Also you can use `mintty.exe` instead of `sh.exe` if you prefer, [mintty][5] is based on the front-end of [PuTTY][6]

Now lets set it as our default terminal, on the left select 'Startup' then the radio button for "Specified named task", and select `{Cygwin Bash}`, click `Save Settings`

Now's the time to make it dev-friendly, chocolatey provides a shortcut to cyg-get via `choco cygwin`, this will open the cygwin GUI package manager and install the apropriate files and their dependancies.

    choco cygwin vim git ncurses

To continue setting everything up, prepare a few symlinks

    $>cd /
    $>ln -s /cygdrive/c/Users/ /home
    $>cd ~
    $>ln -s ./Dropbox/projects /projects

So far this cygwin installation is the best I've used... sorry [cmder][7] and [babun][8].

For myself I'll spruce this up a bit more by pulling my dotfiles,  

    $>git clone https://github.com/jkirchartz/dotfiles.git
    $>dotfiles/make.sh



[1] {% post_url Linux For Web-Devs On Windows %}
[2] http://chocolatey.org/
[3] http://cygwin.org/
[4] https://code.google.com/p/conemu-maximus5/
[5] https://code.google.com/p/mintty/
[6] http://www.putty.org/
[7] http://bliker.github.io/cmder/
[8] http://babun.github.io 


