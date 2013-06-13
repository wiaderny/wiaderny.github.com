---
layout: post
date: 2013-01-10 23:16:44
title: Collaborative Editing with Markdown
---

Just recently I had to make up my mind about how to collaborate on simple memo files which would be synchronized using [dropbox](http://db.tt/tfvLVYN) across heterogeneous systems. Proprietary file formats would of course drop out. Besides, no one wanted to install an additional program.[^2] 

A very intuitive possibility was to use the great and straightforward [mardown syntax](http://daringfireball.net/projects/markdown/syntax).[^1] By mardown's design you are able to compile an input document to an output document with markdown. However, we had three individual memo files, so everyone of us could write into his own `.md` file and two style files which we wanted to be compiled into one single `.html` file. For compiling multiple input files into one output file [pandoc](http://johnmacfarlane.net/pandoc/) comes in really handy.

If you are on a Unix/Mac machine you can compile multiple input files to one file by running following commands in a terminal window


{% highlight bash %}
$ cd <YOURDIRECTORY>
# => Change directory to where your files are located
$ pandoc *.md > memos.html
# => Take all .md files in <YOURDIRECTORY> and compile a single html file
{% endhighlight %}

Using Windows you might get an input error using the above mentioned command. Therefore it seems better to run following commands in your `cmd.exe`.


{% highlight bash %}
$ cd <YOURDIRECTORY>
# => Change directory to where your files are located
$ pandoc -o memos.html input_1.md input_2.md input_n.md 
# => Compile a single .html using all specified input files
{% endhighlight %}

Using pandoc and dropbox for collaborative editing of simple memos across heterogeneous systems seems to work just fine. However pandoc as a processor is much more powerful and I can only recommend you take a look for yourself.










[^1]: I actually use Markdown to produce every note I write on this very website. It is extremely useful and I cannot stress how much I recommend it for plain writing.

[^2]: Although there are many great programs for that kind of work, like [SubEthaEdit](http://www.codingmonkeys.de/subethaedit/), inter alia.
