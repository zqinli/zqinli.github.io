---
title: Publications
layout: page
permalink: /publications/
---

{% assign publications = site.publications | sort: "year" | reverse %}
<div class="publication-list">
  {% for publication in publications %}
    {% include publication-card.html publication=publication %}
  {% endfor %}
</div>
