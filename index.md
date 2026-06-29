---
title: Home
layout: default
---

<section class="section intro">
  <p>I am an M.Sc. student in Computer Science and Technology at the School of Computer Science, SCNU, advised by Prof. <a href="http://www.shuangyinli.cn/">Shuangyin Li</a>. Before that, I received my B.Sc. in Computer Science and Technology from SCNU.</p>
</section>

<section class="section">
  <h2>News</h2>
  {% include news-list.html limit=3 %}
  {% if site.data.news.size > 3 %}
  <p class="more-link-wrap">
    <a class="more-link" href="{{ '/news/' | relative_url }}">More</a>
  </p>
  {% endif %}
</section>

<section class="section">
  <h2>Publications</h2>
  {% assign publications = site.publications | sort: "year" | reverse %}
  {% assign selected_publications = publications | where: "selected", true %}
  <div class="publication-list">
    {% for publication in selected_publications limit: 3 %}
      {% include publication-card.html publication=publication %}
    {% endfor %}
  </div>
  {% if selected_publications.size > 3 %}
  <p class="more-link-wrap">
    <a class="more-link" href="{{ '/publications/' | relative_url }}">More</a>
  </p>
  {% endif %}
</section>
