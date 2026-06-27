---
title: Home
layout: default
---

<section class="section">
  <h2>Biography</h2>
  <p>Zhenqin Li is a master student at South China Normal University. His research interests include large language models, question-answer generation, retrieval-augmented generation, AI agents, diffusion models, knowledge graphs, and the balance between semantic diversity and factual consistency in data generation.</p>
</section>

<section class="section">
  <h2>News</h2>
  {% include news-list.html %}
</section>

<section class="section">
  <h2>Selected Publications</h2>
  {% assign selected_publications = site.publications | where: "selected", true | sort: "year" | reverse %}
  <div class="publication-list">
    {% for publication in selected_publications %}
      {% include publication-card.html publication=publication %}
    {% endfor %}
  </div>
</section>

<section class="section">
  <h2>Activities</h2>
  {% include activities-list.html %}
</section>
