---
layout: home
title: Pack 3472 Cub Scouts
hero_title: Welcome to Pack 3472!
hero_subtitle: Adventure, Fun, and Learning for Elementary School Kids
---

## Welcome to Pack 3472!

We're a fun and active Cub Scout pack serving families in Springfield, IL. Our scouts explore the outdoors, learn new skills, make lifelong friends, and develop character through hands-on adventures.

### What We Do

Pack 3472 meets weekly for exciting activities including camping trips, service projects, STEM challenges, outdoor adventures, and community events. Scouts earn badges and ranks as they progress from kindergarten through 5th grade.

### Join Our Pack!

We welcome new scouts year-round! Cub Scouting is for boys and girls in kindergarten through 5th grade. No prior scouting experience is needed.

**Meeting Time**: {{ site.data.pack-info.meeting_info.day }}s at {{ site.data.pack-info.meeting_info.time }}  
**Location**: {{ site.data.pack-info.meeting_info.location.name }}

[Join Pack 3472](/pages/join){:.btn .btn-primary} [Contact Us](/pages/contact){:.btn .btn-secondary}

---

## Upcoming Events

Check out what's happening in Pack 3472! View our [full calendar](/pages/calendar) for all upcoming events.

{% include latest-events.html limit=3 %}

---

## Latest Announcements

Stay informed about important pack news and updates.

{% include latest-announcements.html limit=3 %}

[View All Announcements](/pages/announcements){:.btn .btn-outline}

---

## About Cub Scouts

Cub Scouting is the adventure for boys and girls in kindergarten through 5th grade. Through fun activities and adventures, Cub Scouts learn about character, citizenship, and personal fitness while having a blast with friends.

### Our Dens

{% for den in site.data.dens %}

<div class="den-card">
  <h4 class="badge badge-{{ den.rank | downcase }}">{{ den.rank }}</h4>
  <p><strong>{{ den.grade }} Grade</strong> (Ages {{ den.age_range }})</p>
  <p>{{ den.description }}</p>
</div>
{% endfor %}

[Learn More About Pack 3472](/pages/about){:.btn .btn-outline}
