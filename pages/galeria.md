---
layout: page
show_meta: false
title: "Galeria InspirAda na Computação"
subheadline: "Contribuições"
header:
    image_fullwidth: "banner_principal.jpg"
permalink: "/galeria/"
---
<ul>
    {% for post in site.categories.galeria %}
    <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>