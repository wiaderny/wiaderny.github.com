---
layout: post
date: 2013-05-13 13:10:55
title: Install GnuPG on Mountain Lion
subtitle: For the privacy concerned that don't fear terminal usage
image: gnu-on-ml.jpg
caption: dummy
exc: GPG-Tools was working crazy hard over the last couple of months and finally delivered their GPGMail2 plug-in for the mail app. If you don't want the hassle of a non working encryption when you update to OSX Mavericks, you should go for the terminal version.
update: August 7, 2013
---

With the introduction of OS X 10.8 a very handy plugin for the native mail app was rendered unusable -- <del>although the guys from GPG-Tools are working on an update to make their tool work with the native mail app</del> luckily the guys from [GPG-Tools][1] worked hard an finally delivered their GPGMail2 plug-in.
However, some people might still considering installing [Gnu Privacy Guard][2] on their local machines, to not fall victim to any characteristics of a future OS update. If this sounds like you, this log will (hopefully) be a handy note on how to install this great piece.

After you have opened your Terminal, you start-off by downloading the desired version (and its corresponding signature) from gnupg.org.

{% highlight bash %}
$ curl -O ftp://ftp.gnupg.org/gcrypt/gnupg/gnupg-1.4.tar.gz 
{% endhighlight %}

To ensure the originality of your obtained file you should consider to run following command 

{% highlight bash %}
$ openssl sha1 gnupg-1.4.12.tar.gz
{% endhighlight %}

what should yield you a value of `790587e440ec7d429b120db7a96a237badc638fd`. If it does not, stop here and contact the guys at gnupg.
I assume however, that you got a valid distribution. You may untar, change directory and configure your 

{% highlight bash %}
$ tar -xzf gnupg-1.4.12.tar.gz
$ cd gnupg-1.4.12 
$ ./configure
{% endhighlight %}

I assume that you do not yield any error when running the tests, so that we are good to go and install with the well known method, namely `make`, `make check` and finalize this procedure with  `sudo make install`.

Now that everything is set up, it's time to generate some random numbers and afterwards our keys.

{% highlight bash %}
gpg (GnuPG) 1.4; Copyright (C) 2012 Free Software Foundation, Inc. 
This is free software: you are free to change and redistribute it. 
There is NO WARRANTY, to the extent permitted by law. 
Bitte wählen Sie, welche Art von Schlüssel Sie möchten: 
(1) RSA und RSA (voreingestellt) 
(2) DSA und Elgamal 
(3) DSA (nur unterschreiben/beglaubigen) 
(4) RSA (nur signieren/beglaubigen) 
Ihre Auswahl?
{% endhighlight %}

According to your system language the output will vary. Nevertheless you are free to choose whatever suits your needs most, I have chosen (1). Next steps are pretty straight forward and self explanatory. After the process will be finished you will end up with a generated public and private key. Some important functions for you may be the `--list keys` option, which yields all available keys in your `pubring.pgp` file, or the command 

{% highlight bash %}
$ gpg --armor --export you@youremail.tld
{% endhighlight %}

This will yield your public key block which you can save and send to your addressees so they will be able to encrypt their messages for you. To import a public key, just use the `--import` command which should be followed by the key file you want to use. Encrypting a file can be achieved by the first command, decrypting by the second.

{% highlight bash %}
$ gpg --output outfile --encrypt --recipient name@domain.tld inputfile 
$ gpg --output inputfile --decrypt outfile
{% endhighlight %}

[1]: https://www.gpgtools.org/
[2]: http://www.gnupg.org/