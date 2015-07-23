---
layout: page
show_meta: false
title: "Style your content!"
subheadline: "Layouts of Feeling Responsive"
header:
    image_fullwidth: "banner_principal.jpg"
permalink: "/galeria/"
---
<ul>
    {% for post in site.categories.galeria %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>