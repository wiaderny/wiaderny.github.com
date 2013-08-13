---
layout: post
title: Textile as a custom processor in Marked
exc: Textile is a great markup language and it is fun to use in combination with the Marked app. Setting textile as you default markup language in Marked is straight forward if you don't fear terminal usage. This quick note will show you how.
---

Just recently a few fellow students were curious how to use [textile][1] as the markup language in [Marked][2], which is a great app by the way. In the first place you have to have textile, of course. The rest is quite trivial but you need to have Apple Developer Tools to be installed on your local machine.

- Download and install perl textile from [github][3].
- Run `which textile` in a terminal to determine your textile path.
- Set textile as your custom processor in Marked preferences as shown in the following image.[^1]

<img alt="Marked app textile as custom processor " src="../../assets/images/Bildschirmfoto-2013-01-11-um-21.29.46.png"/>

It's a good idea to actually tick the check-box if you want to use textile. I had it off in this screen-shot as I mostly stick with the markdown syntax. 

[1]: http://en.wikipedia.org/wiki/Textile_(markup_language)
[2]: http://markedapp.com
[3]: https://github.com/bradchoate/text-textile