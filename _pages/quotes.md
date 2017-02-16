---
layout: archive
title: Quotes
permalink: /quotes/
header:
  teaser: /assets/images/header/teaser/ada-lovelace.jpg
  image: /assets/images/header/ada-lovelace.jpg
  caption: "Portrait of Ada Lovelace -- Photo credit: [**Science & Society Picture Library**](http://www.scienceandsociety.co.uk/results.asp?image=10312035)"
---

{% for post in site.quotes %}
  <div class="archive__item">
    <article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">
      <h2 class="archive__item-title" itemprop="headline">
          <a href="{{ post.url | absolute_url }}" rel="permalink">{{ post.title }}</a>
      </h2>
      <p class="archive__item-excerpt" itemprop="description">{{ post.content | markdownify }}</p>
      <p class="page__meta"><i class="fa fa-user-circle-o" aria-hidden="true"></i> {{ post.author }}</p>
    </article>
  </div>
{% endfor %}
