---
layout: page
permalink: /projects/
title: Projects
description: Selected layout, IC-mask, and digital-design work - from industry and coursework.
nav: true
nav_order: 2
---

<!-- _pages/projects.md - data in _data/projects.yml, styles in assets/css/main.scss -->

{% for grp in site.data.projects %}

  <section class="proj-group">
    <h2 class="cv-section-title">
      <span class="cv-section-icon"><i class="fa-solid {{ grp.icon }}"></i></span>
      {{ grp.group }}
    </h2>
    {% if grp.note %}<p class="proj-group-note">{{ grp.note }}</p>{% endif %}

    <div class="proj-grid">
      {% for item in grp.items %}
        <article class="project-card">
          <div class="project-card-body">
            <span class="project-cat">{{ item.category }}</span>
            <h3 class="project-title">{{ item.title }}</h3>
            <p class="project-desc">{{ item.description }}</p>
          </div>
          {% if item.tech %}
            <div class="project-tech">
              {% for t in item.tech %}<span class="tech-tag">{{ t }}</span>{% endfor %}
            </div>
          {% endif %}
        </article>
      {% endfor %}
    </div>

  </section>
{% endfor %}
