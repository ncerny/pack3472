---
layout: home
title: Pack 3472 Cub Scouts - Leawood, KS
hero_title: PACK 3472
hero_subtitle: Leawood, KS
---

## Welcome!

We are glad you have found your way to the Pack 3472 website! Our pack welcomes both boys and girls in grades K-5! We are a very active, outdoor focused pack! Our Cub Scouts attend Prairie Star, Sunrise Point, Overland Trail, Barstow, AMI, and multiple other schools so all are welcome!

If you and your son/daughter would like to learn more about Cub Scouting, we'd love to have you visit one of our monthly Pack meetings where we gather all of the kids together for fun activities!

### When We Meet

**{{ site.data.pack-info.meeting_info.frequency }}**  
**Time**: {{ site.data.pack-info.meeting_info.time }}

We are returning to an exciting, action-pack year of activities! Our Pack IS sensitive to Covid needs and will monitor the current conditions and guidelines with our Health Committee of several doctors. The SAFTEY of our Scouts and families is as paramount as HAVING FUN, BEING GOOD SCOUTS, and BEING OUTDOORS!!

### Chartering Organization

**{{ site.data.pack-info.chartered_organization_full }}**

[Join Pack 3472](/pages/join){:.btn .btn-primary} [Contact Us](/pages/contact){:.btn .btn-secondary}

---

## Pack 3472 In Action!

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
