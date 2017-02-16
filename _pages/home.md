---
layout: archive
permalink: /
header:
  teaser: /assets/images/header/teaser/chimp.jpg
  image: /assets/images/header/chimp.jpg
  caption: "Photo credit: [**International Fund for Animal Welfare**](https://www.flickr.com/photos/animalrescueblog/)"
---

# Leaky Abstractions

This is my personal blog about **programming**, **technology** and **software engineering** in general. I may write about other interesting topics such as: **video games**, **music**, **books**, **art** or **Japan**.

## Recent Posts

{% for post in site.posts limit: 4 %}
  {% include archive-single.html %}
{% endfor %}
