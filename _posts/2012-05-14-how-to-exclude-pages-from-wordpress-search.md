---
layout: post
published: true
date: 2012-05-14 18:53:00
title: How to exclude pages from WordPress search
exc: By default WordPress returns all posts and pages when an user runs a search. However, most of the time users are searching for an log entry rather than a static page. To make search results more relevant a change in the functions.php is required.
---

By default WordPress returns all posts and pages when an user runs a search. However, most of the time users are searching for an log entry rather than a static page. To make your search results more relevant consider editing your `functions.php` file by adding following code:

{% highlight javascript %}
function SearchFilter($query) {
if ($query->is_search) {
$query->set('post_type', 'post');
}
return $query;
}
add_filter('pre_get_posts','SearchFilter');

{% endhighlight %}

Abovementioned code executes the search and returns only `post_type` data.

However, to exclude individual pages it might be a good idea to consider the use of the Simply Exclude Plugin by Paul Menard.