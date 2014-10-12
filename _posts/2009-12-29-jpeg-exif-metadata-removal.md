---
title: "Jpeg EXIF Metadata Removal"
layout: post
tags: exif hacks
---

Image Optimization is a fun game, trying to get just the right compression ratio to balance file size and appearance. There are a ton of tricks out there, but as a Photoshop user you generally end up with some pretty big files that are just small images. Today I had an icon, 71x30px that was 40.1kb after I resized it from a larger jpeg that was 38kb.  

Where does all this extra data come from? Metadata. Cameras throw it in,
[flickr](http://flickr.com/) reads it and shows the setting your 
[Cannon](http://www.usa.canon.com/consumer/controller?act=ProductCatIndex1Act&fcategoryid=1
01) used to get that photo. Photoshop throws some junk in too. The real evil
is thumbnails, [Cat Schwartz](http://en.wikipedia.org/wiki/Catherine_Schwartz)
had a bit of a [scandal](http://graphicssoft.about.com/b/2003/07/26/techtvs-cat-schwartz-exposed-is-photoshop-to-blame.htm) 
6 years ago with thumbnails of
un-cropped photos in the metadata that were, shall we say, not suitable for work. These
thumbnails can almost DOUBLE your file size. It's just part and parcel of
[EXIF](http://en.wikipedia.org/wiki/Exchangeable_image_file_format) (the
Exchangeable Image File format) standard, a bunch of useful data that takes up
a bunch of space, and isn't important to the end user.


How do you get rid of EXIF? On OSX you could use [Image
Optim](http://imageoptim.pornel.net/), which is totally sweet, if you own a
mac. On a PC you run into a bunch of poorly written, virus laden, scam-ware
programs that may or may not work. Fortunately for us, there's an [Open
Source](http://en.wikipedia.org/wiki/Open_Source) community. So we'll do this
with some [FOSS](http://en.wikipedia.org/wiki/Free_and_open_source_software).

1. Create a folder for all your image files (which you should do anyhow)
2. download JHEAD to that folder ([jhead.exe](http://www.sentex.net/~mwandel/jhead/jhead.exe) | [main page](http://www.sentex.net/~mwandel/jhead/)) 
3. Create .BAT file (plain text renamed to .BAT) containing
   `jhead.exe -purejpg *i`
4. Run it.

What this does is strip out any EXIF and other metadata in the files in that
folder. Just does away with anything that isn't purely essential for a jpeg to
be an image, thus saving quite a bit on file size, bandwidth, and hopefully
some embarrassment.
