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

<canvas id="tag-cloud" style="width: 100%" width="1600" height="600"></canvas>
<script type="text/javascript" src="{{ '/assets/js/wordcloud2.js' | prepend: site.baseurl }}"></script>
<script type="text/javascript" src="{{ '/assets/js/site-tags.js' | prepend: site.baseurl }}"></script>
<script type="text/javascript" src="{{ '/assets/js/tag-cloud.js' | prepend: site.baseurl }}"></script>

You may click on a tag to discover related [**blog posts**]({{ '/blog/' | prepend: site.baseurl }}) and [**programming quotes**]({{ '/quotes/' | prepend: site.baseurl }}).

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