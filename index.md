---
title: Home
layout: default
---

<section class="section intro">
  <p>I am a master's student in Computer Science and Technology at the School of Computer Science, SCNU, advised by Prof. <a href="http://www.shuangyinli.cn/">Shuangyin Li</a>. Before that, I received my B.Sc. in Computer Science and Technology from SCNU.</p>
</section>

<section class="section">
  <h2>News</h2>
  {% include news-list.html %}
</section>

<section class="section">
  <h2>Publications</h2>
  {% assign publications = site.publications | sort: "year" | reverse %}
  <div class="publication-list">
    {% for publication in publications %}
      {% include publication-card.html publication=publication %}
    {% endfor %}
  </div>
</section>
