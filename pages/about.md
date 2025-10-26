---
layout: page
title: About Pack 3472
subtitle: Our Pack, Our Mission, Our Values
permalink: /about/
---

## About Pack 3472

Pack 3472 is a vibrant Cub Scout pack chartered by {{ site.data.pack-info.chartered_organization }} and serving families in the {{ site.data.pack-info.district }} District of the {{ site.data.pack-info.council }}. We've been providing character-building adventures for elementary school children since our founding.

### Our Mission

We aim to build character, develop citizenship, and promote personal fitness in youth through fun, hands-on activities and outdoor adventures. Every scout in Pack 3472 learns valuable life skills while making friends and creating memories that last a lifetime.

### What is Cub Scouting?

Cub Scouting is part of the Boy Scouts of America (BSA) program designed for boys and girls in kindergarten through 5th grade. Through age-appropriate activities, games, crafts, and adventures, Cub Scouts learn the values of the Scout Oath and Law while having fun.

**Scout Oath:**

> On my honor I will do my best  
> To do my duty to God and my country  
> and to obey the Scout Law;  
> To help other people at all times;  
> To keep myself physically strong,  
> mentally awake, and morally straight.

**Scout Law:**

> A Scout is: Trustworthy, Loyal, Helpful, Friendly, Courteous, Kind, Obedient, Cheerful, Thrifty, Brave, Clean, and Reverent.

## Our Program

### Rank Progression

Cub Scouts progress through age-based ranks, earning badges and awards as they complete adventures and learn new skills:

{% for den in site.data.dens %}

#### {{ den.rank }} ({{ den.grade }} Grade, Ages {{ den.age_range }})

{{ den.description }}

**Meets**: {{ den.meeting_day }}s at {{ den.meeting_time }}
{% if den.location %}**Location**: {{ den.location }}{% endif %}
**Den Leader**: {% assign leader = site.data.leaders | where: "name", den.leader | first %}{{ leader.name }}

---

{% endfor %}

### Activities & Adventures

Our pack participates in a wide variety of activities throughout the year:

- **Pack Meetings**: Monthly gatherings with games, ceremonies, and recognition
- **Den Meetings**: Weekly small-group activities focused on specific adventures and skills
- **Camping**: Weekend campouts at local and regional scout camps
- **Service Projects**: Community service to help others and give back
- **STEM Activities**: Science, technology, engineering, and math challenges
- **Sports & Fitness**: Physical activities promoting health and teamwork
- **Field Trips**: Educational visits to museums, fire stations, and local businesses
- **Family Events**: Picnics, holiday parties, and family camping

### Awards & Recognition

Scouts earn recognition for their accomplishments:

- **Rank Badges**: Earned by completing adventures and requirements for each rank
- **Adventure Loops/Pins**: Awarded for completing specific themed activities
- **Belt Loops**: Earned for achieving sports and academic achievements
- **Religious Emblems**: Recognition for spiritual development (various faiths)
- **Arrow of Light**: Cub Scouting's highest award, earned in 5th grade

## Leadership

Pack 3472 is led by dedicated volunteer leaders committed to providing a quality scouting experience:

{% for leader in site.data.leaders %}

### {{ leader.name }}

**{{ leader.role }}**

{% if leader.photo %}
<img src="{{ leader.photo | relative_url }}" alt="{{ leader.name }}" class="leader-photo">
{% endif %}

{{ leader.bio }}

{% if leader.email %}
📧 [{{ leader.email }}](mailto:{{ leader.email }})
{% endif %}

---

{% endfor %}

## Pack Values

**Fun**: Scouting is an adventure! We believe kids learn best when they're having fun.

**Character**: We instill values of honesty, respect, responsibility, and integrity.

**Family**: We welcome families to participate and support their scouts' journey.

**Inclusion**: Pack 3472 welcomes all families regardless of background or experience.

**Safety**: The safety and well-being of our scouts is our top priority.

## Our History

[Add pack history - when founded, notable achievements, traditions, etc.]

## Pack Traditions

- Opening and closing ceremonies at pack meetings
- Recognition ceremonies for rank advancements
- Blue & Gold Banquet celebrating Scouting's anniversary
- Pinewood Derby race competition
- Raingutter Regatta sailboat race
- Camp-o-ree summer camping event
- Bridging ceremony when Webelos cross to Scouts BSA

---

Ready to join the adventure?

[Join Pack 3472](/pages/join){:.btn .btn-primary} [Contact Us](/pages/contact){:.btn .btn-secondary}
