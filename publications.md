---
title: Publications
layout: page
permalink: /publications/
---

{% assign publications = site.publications | sort: "year" | reverse %}
{% assign publications_by_year = publications | group_by: "year" %}

{% for year_group in publications_by_year %}
<section class="publication-year-section">
  <h2>{{ year_group.name }}</h2>
  <div class="publication-list">
    {% for publication in year_group.items %}
      {% include publication-card.html publication=publication %}
    {% endfor %}
  </div>
</section>
{% endfor %}
