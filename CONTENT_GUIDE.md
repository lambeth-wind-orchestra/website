# Content Guide

This guide is for anyone who needs to update the text, events, or pages on the Lambeth Wind Orchestra website. You don't need to know how to code to make these changes, but you will need to edit **Markdown** files.

## Adding or Editing Events

Events are stored in `src/content/events/`. Each event is a Markdown file with "frontmatter" at the top.

Example event file (`20250712-garden-museum.md`):

```markdown
---
name: LWO at the Garden Museum
description: Join us for an afternoon of music at the Garden Museum!
date: 2025-07-12
time: 'Timing TBC'
location: Garden Museum
type: concert
tags: ['Summer', 'South London']
---

Join Lambeth Wind Orchestra for a delightful afternoon...
```

## Editing Pages

General pages (Home, About, Contact, Join) are stored in `src/content/pages/`.

Example page file (`home.md`):

```markdown
---
title: Welcome to Lambeth Wind Orchestra
description: 'A friendly community wind orchestra based in Herne Hill.'
hero:
  title: 'Music for the Community'
  description: 'A vibrant, inclusive wind orchestra...'
  primary_cta: 'Upcoming Events'
  secondary_cta: 'About LWO'
---

Lambeth Wind Orchestra is more than just a band...
```

## Images

Images should be placed in `public/images/`. You can then reference them in your Markdown files.
