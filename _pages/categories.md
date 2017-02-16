---
layout: archive
permalink: /categories/
title: "Posts by Category"
header:
  teaser: /assets/images/header/teaser/sinclair-spectrum.jpg
  image: /assets/images/header/sinclair-spectrum.jpg
  caption: "ZX Spectrum -- Photo credit: [**Andy Bowd**](https://www.flickr.com/photos/bowdie/)"
---

{% capture nothing %}
{% include group-by-array collection=site.posts field="categories" %}
{% endcapture %}{% assign nothing = null %}

{% for category in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ category | slugify }}" class="archive__subtitle">{{ category }}</h2>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}
