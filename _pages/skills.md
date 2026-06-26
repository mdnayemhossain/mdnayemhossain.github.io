---
layout: page
permalink: /skills/
title: Skills
description: Technical toolkit across IC layout, verification, simulation, and design.
nav: true
nav_order: 1
---

<!-- _pages/skills.md - data in _data/skills.yml, styles in assets/css/main.scss -->

<div class="skills-legend" aria-hidden="true">
  <span><i class="skill-dot" style="--lvl: 95%"></i> Expert</span>
  <span><i class="skill-dot" style="--lvl: 80%"></i> Advanced</span>
  <span><i class="skill-dot" style="--lvl: 65%"></i> Proficient</span>
  <span><i class="skill-dot" style="--lvl: 50%"></i> Familiar</span>
</div>

{% for grp in site.data.skills %}
  <section class="skill-group">
    <h2 class="cv-section-title">
      <span class="cv-section-icon"><i class="fa-solid {{ grp.icon }}"></i></span>
      {{ grp.group }}
    </h2>
    <div class="skill-grid">
      {% for item in grp.items %}
        <div class="skill-row">
          <div class="skill-head">
            <span class="skill-name">{{ item.name }}</span>
            <span class="skill-level">{{ item.level }}</span>
          </div>
          <div class="skill-bar" role="img" aria-label="{{ item.name }}: {{ item.level }}">
            <span class="skill-bar-fill" style="--pct: {{ item.pct }}%"></span>
          </div>
        </div>
      {% endfor %}
    </div>
  </section>
{% endfor %}
