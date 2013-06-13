---
layout: post
published: true
date: 2012-05-14 18:53:00
title: How to exclude pages from wordpress search
---

By default WordPress returns all posts and pages when an user runs a search. But mostly users are searching for an log entry rather than a static page. To make your search results more relevant consider editing your `functions.php` file by adding following code:

{% highlight javascript %}
function SearchFilter($query) {
if ($query->is_search) {
$query->set('post_type', 'post');
}
return $query;
}
{% endhighlight %}

add_filter('pre_get_posts','SearchFilter');
Abovementioned code executes the search and returns only `post_type` data.

However, to exclude individual pages it might be a good idea to consider the use of the Simply Exclude Plugin by Paul Menard.