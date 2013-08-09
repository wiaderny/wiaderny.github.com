---
layout: post
date: 2013-08-08 12:00:00
title: A migration from WordPress to Jekyll
subtitle: How my website found a cozy home on github
exc: After some fine years with WordPress I decided to move to something more lightweight. My hosting contract would end in a few days so I spent some time and migrated from WordPress to Jekyll. Here is how I did it.
---

The time with WordPress was fine. I don't deny it. However, every now and then it occurred to me that this otherwise great CMS was somehow bloated, not light enough, with too many features that I would never use and which distracted me more than supported me whenever I just wanted to take a quick note from time to time.

At the same time I have to admit that I got used to WordPress and was too jovial to migrate the whole system. After all, I heard of other systems but they all required PHP, Databases and weren't lightweight either. Motivated by an expiring agreement with my hosting-provider, I decided to quarry for alternatives and ended up with what seemed to be just perfect. I learned about Jekyll and liked it from the beginning. 

It just had everything I wanted from a CMS, not more and not less. In fact, it is very versatile, extremely lightweight and gets along without PHP and Databases, which was just great because I could switch to static hosting. On top of that, Jekyll allows to write content in Markdown, which is superb because it let's you focus on what you write rather than how it looks and you can write in your favorite text-app. Of course, that also means, that all of your content is stored in plain text files and not in Databases.

Now there is not really anything new or unique in the way I set up this blog. In fact, I just followed the documentation, which is really comprehensive. You should probably take a look on the official [Jekyll wiki page](https://github.com/mojombo/jekyll/wiki).

### Preparing for the migration

The migration process is really simple. You need to install `hpricot` by running `gem install hpricot` if it isn't already installed on your machine. Then you can export your WordPress blog using the build-in export utility. I assume you saved your file as `wordpress.xml`. Finally, run the command below and the system will generate a `.markdown` file per post.

{% highlight bash %}
$ ruby -rubygems -e 'require "jekyll/jekyll-import/wordpressdotcom";
  JekyllImport::WordpressDotCom.process({ :source => "wordpress.xml" })'
{% endhighlight %}

Now that you have separate `.markdown` files for each post, you can start to set up your blog. 


### Setting Jekyll up on GitHub

After registering on GitHub, set up a new repository named username.github.com in your profile. If you are completely new to Jekyll, you could give Jekyll-Bootstrap a try by running the following in your terminal.

{% highlight bash %}
$ git clone https://github.com/plusjade/jekyll-bootstrap.git username.github.com
$ cd username.github.com
$ git remote set-url origin git@github.com:username/username.github.com.git
$ git push origin master
{% endhighlight %}

You should receive an email after a few minutes which will inform you about the successful build. Browse to username.github.com to take a look.

If you want to set up Jekyll-Bootstrap locally you should have Jekyll installed, and then run the following command. After that you can browse to http://localhost:4000 and take a look.

{% highlight bash %}
$ git clone https://github.com/plusjade/jekyll-bootstrap.git
$ cd jekyll-bootstrap
$ jekyll serve -w
{% endhighlight %}

Put all of your `.markdown` files in the `_post` folder and refresh your page to see Jekyll in action.

I will continue this post once I find some time. Until then, I wish you success with setting up your Jekyll powered blog.





