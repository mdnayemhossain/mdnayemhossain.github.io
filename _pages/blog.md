---
layout: page
permalink: /blog/
title: Blog
description:
nav: true
nav_order: 5
---

<!-- Blog post list styled exactly like the Research page (bibliography layout). -->

<!-- Sort-by-date control (same sleek pill as the Research page) -->
<div class="pub-sort">
  <button id="pub-sort-toggle" class="pub-sort-btn" type="button" data-order="desc" aria-label="Sort posts by date">
    <i class="fa-solid fa-arrow-down-wide-short"></i>
    <span class="pub-sort-label">Newest first</span>
  </button>
</div>

<div class="publications">
  <ol class="bibliography">
    {% assign posts = site.posts | sort: "date" | reverse %}
    {% for post in posts %}
      <li>
        <div class="row">
          <!-- Date badge (in place of the arXiv venue badge) -->
          <div class="col col-sm-2 abbr">
            <abbr class="badge rounded w-100">{{ post.date | date: "%b %d, %Y" }}</abbr>
          </div>
          <!-- Post (in place of the paper) -->
          <div class="col-sm-8">
            <div class="title">
              {% if post.redirect == blank %}
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              {% elsif post.redirect contains '://' %}
                <a href="{{ post.redirect }}" target="_blank" rel="noopener">{{ post.title }}</a>
              {% else %}
                <a href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
              {% endif %}
            </div>
            {% if post.description %}
              <div class="author">{{ post.description }}</div>
            {% endif %}
            <!-- Categories + tags (in place of the Abs / arXiv / PDF buttons) -->
            <div class="links">
              {% for category in post.categories %}
                <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}" class="btn btn-sm z-depth-0" role="button">{{ category }}</a>
              {% endfor %}
              {% for tag in post.tags %}
                <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}" class="btn btn-sm z-depth-0" role="button">{{ tag }}</a>
              {% endfor %}
            </div>
          </div>
        </div>
      </li>
    {% endfor %}
  </ol>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("pub-sort-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      document.querySelectorAll("ol.bibliography").forEach(function (list) {
        var items = Array.prototype.slice.call(list.children);
        items.reverse().forEach(function (li) {
          list.appendChild(li);
        });
      });
      var wasDesc = btn.getAttribute("data-order") === "desc";
      btn.setAttribute("data-order", wasDesc ? "asc" : "desc");
      btn.querySelector(".pub-sort-label").textContent = wasDesc ? "Oldest first" : "Newest first";
      btn.querySelector("i").className = wasDesc ? "fa-solid fa-arrow-up-wide-short" : "fa-solid fa-arrow-down-wide-short";
    });
  });
</script>
