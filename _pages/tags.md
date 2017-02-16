---
layout: archive
permalink: /tags/
title: "Posts by Tags"
author_profile: true
header:
  teaser: /assets/images/header/teaser/gift-tag.jpg
  image: /assets/images/header/gift-tag.jpg
  caption: "Photo credit: [**Dennis van Zuijlekom**](https://www.flickr.com/photos/dvanzuijlekom/)"
---

{% assign documents = site.quotes %}
{% for post in site.posts %}
  {% assign documents = documents | push: post %}
{% endfor %}

{% capture nothing %}
{% include group-by-array collection=documents field="tags" %}
{% endcapture %}{% assign nothing = null %}

{% for tag in group_names %}
  {% assign posts = group_items[forloop.index0] %}
<h2 class="tagname" id="{{ tag | slugify }}">{{ tag }}</h2>
<ul>
  {% for post in posts %}
  <li><a href="{{ post.url | absolute_url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
{% endfor %}