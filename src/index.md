---
title: NJK in MD DEMO
layout: _base.njk
---

{% extends "page.njk" %}

{% block header %}

  # {{ title }}

{% endblock %}


{% block main %}

  ## Importing Blocks

  This is a demo `block` in the page element.

  {% call blk.image("https://source.unsplash.com/ACt8ycSzpdE/640x480") %}
    Here's an image from a block call and its description. The button below comes from an import and is injected by the block template.
  {% endcall %}

  ```js
  code blocks are disabled for indent purposes, but fenced codeblocks still work.
  ```

  ## Using `with context` at imports

  {{ blk.card("photo-1") }}
  {{ blk.card("photo-3") }}

{% endblock %}
