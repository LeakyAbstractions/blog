---
layout: null
---
'use strict';
{% capture nothing %}

{% assign documents = site.quotes %}

{% for post in site.posts %}
  {% assign documents = documents | push: post %}
{% endfor %}

{% include group-by-array collection=documents field="tags" %}

{% endcapture %}{% assign nothing = null %}

var siteTags = [
{% for tag in group_names %}{% assign posts = group_items[forloop.index0] %}
  {'tag': '{{ tag }}', 'posts': {{ posts | size }}}{% unless forloop.last %},{% endunless %}
{% endfor %}
];
