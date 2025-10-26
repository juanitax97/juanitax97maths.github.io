---
layout: default
title: Accueil
---

# Exercices de maths

<h1>Liste des exercices</h1>

<ul>
  {% for exo in site.exercices %}
    <li>
      <a href="{{ exo.url | relative_url }}">{{ exo.title }}</a>
      {% if exo.tags %}
        <small> — {{ exo.tags | join: ", " }}</small>
      {% endif %}
    </li>
  {% endfor %}
</ul>