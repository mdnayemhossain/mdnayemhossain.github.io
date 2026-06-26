---
layout: page
permalink: /research/
title: Research
description: 
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<!-- Sort-by-year control (sleek pill, arXiv-badge style) -->
<div class="pub-sort">
  <button id="pub-sort-toggle" class="pub-sort-btn" type="button" data-order="desc" aria-label="Sort publications by year">
    <i class="fa-solid fa-arrow-down-wide-short"></i>
    <span class="pub-sort-label">Newest first</span>
  </button>
</div>

<div class="publications">

{% bibliography %}

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
