---
layout: post
title: "Project: BAMP Festival of Homes mobile site"
tags: portfolio
---

[![](http://2.bp.blogspot.com/--9bknh6sbAA/Ttke0KomNGI/AAAAAAAAAz0/On-M0zfzX5U/s320/BAMP-screenshots_01.jpg)](http://2.bp.blogspot.com/--9bknh6sbAA/Ttke0KomNGI/AAAAAAAAAz0/On-M0zfzX5U/s1600/BAMP-screenshots_01.jpg)

Here's the [Builders Association in the Metropolitan
Pittsburgh](http://www.pghhomebuilders.com/) Festival of Homes mobile site at
[bamp.songwhale.com](http://bamp.songwhale.com)

This little humdinger has a back end written with
[python](http://python.org/)/[django](https://www.djangoproject.com/), I'm
also using [geopy](http://code.google.com/p/geopy/) to assist in calculating
distances for the map. The front end uses [Google Maps
APIv3](http://code.google.com/apis/maps/documentation/javascript/) HTML5 and
CSS3. Django's built-in admin back end made data-entry a breeze, although I
wish it had built-in table alteration, changing your models is a pain in the
butt, I didn't want to figure out [South](http://south.aeracode.org/) with
very little data to migrate.

This was my first time running an [nginx](http://nginx.org/) server, it's a
big difference from apache. The configs are a lot cleaner, definitely more
like python than markup. The [uwsgi](http://projects.unbit.it/uwsgi/) was used
to run python and since it's packaged with nginx setup was a breeze. The
Database was in postgres, although I could've used
[postGIS](http://postgis.refractions.net/) to do the distance calculations and
bypass geopy, I was already in too deep to change it. This is a pretty nice
stack.

I kept the design minimal and fluid to support the widest array of browsers.
Django's templating is awesome, you can do a lot with it without getting in
the way of your html.
