---
layout: post
title: Remember Mailto?
published: false
tags: article
---

>"How do I send this to my Mom..." she asked herself scrolling up and down the page; "...I can tweet or add it to pinterest," she sighed in resignation as opening a new tab and navigating all the way to the compose pane in gmail.

There's a bit of debate about what to include to share your pages, but often the simplest form is forgotten.
It's not hard to send an email, the issue is that it requires a plugin or an external email app.
If you don't have either it will open an email app that just happens to be on your computer but not associated to any email account
which is extra annoying. Firefox, Opera, and Chrome are supposed to take you to your web/e-mail provider; looks like IE is the ugly duckling yet again...

Anyhow... Back in the day we'd use the `mailto:` URI scheme to let users send us emails (uphill, both ways!) We'd make a link like

    <a href="mailto:webmaster@example.com?subject=Hello&body=I%20like%20your%20site">

but the mailto protocol is more versatile than that, You can do `cc` and `bcc` and even have multiple recipients by separating addresses with commas.

    mailto:user@example.com,user2@example.com?cc=user3@example.com&bcc=user4@example.com

Since this is a URI it has to be URI encoded so: `%20` for space, `%3F` for question mark, and so on...
(AFAIK iPhone is the only device to have a problem with this- urls in the body shouldn't be url encoded)
Also, a `To` address is completely unneccessary! You're not going to know who to send it to now, are ya?
So it's a short hop to making something like this

    mailto:?subject=I%20thought%20you%20would%20like%20this&body=http://example.com/some/page

So there you have it, a butt-simple way to share a page via email.


##links:
* [RFC-6068](http://www.ietf.org/rfc/rfc6068.txt)
* [mailto generator](http://www.mailto.co.uk/)
