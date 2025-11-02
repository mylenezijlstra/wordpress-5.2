<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Jungle Travels</title>
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
</head>
<body>
<header class="site-header">
  <div class="branding">
    <h1>Jungle Travels</h1>
  </div>

  <button class="menu-toggle" aria-label="Menu">&#9776;</button>

  <nav class="main-nav">
    <ul>
      <li><a href="#maleisie">Maleisië</a></li>
      <li><a href="#thailand">Thailand</a></li>
      <li><a href="#indonesie">Indonesië</a></li>
      <li><a href="#vietnam">Vietnam</a></li>
    </ul>
  </nav>
</header>


<div class="intro-banner">
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');

    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  });
</script>

