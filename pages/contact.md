---
layout: page
title: Contact Pack 3472
subtitle: Get in Touch - We'd Love to Hear From You!
permalink: /contact/
---

## Contact Us

Have questions about Pack 3472 or Cub Scouting? Want to visit a meeting? We're here to help!

### Quick Contact

<div class="contact-methods">
  <div class="contact-method">
    <span class="contact-method__icon">📧</span>
    <h3>Email</h3>
    <a href="mailto:{{ site.data.pack-info.contact.email }}">{{ site.data.pack-info.contact.email }}</a>
  </div>
  
  <div class="contact-method">
    <span class="contact-method__icon">📞</span>
    <h3>Phone</h3>
    <a href="tel:{{ site.data.pack-info.contact.phone | remove: '-' | remove: '(' | remove: ')' | remove: ' ' }}">{{ site.data.pack-info.contact.phone }}</a>
  </div>
  
  <div class="contact-method">
    <span class="contact-method__icon">📍</span>
    <h3>Visit Us</h3>
    <p>{{ site.data.pack-info.meeting_info.day }}s at {{ site.data.pack-info.meeting_info.time }}</p>
    <a href="{{ site.data.pack-info.meeting_info.location.google_maps_url }}" target="_blank" rel="noopener">Get Directions</a>
  </div>
</div>

### Meeting Location

**{{ site.data.pack-info.meeting_info.location.name }}**  
{{ site.data.pack-info.meeting_info.location.address }}  
{{ site.data.pack-info.meeting_info.location.city }}, {{ site.data.pack-info.meeting_info.location.state }} {{ site.data.pack-info.meeting_info.location.zip }}

{% include map-embed.html %}

---

## Send Us a Message

Fill out the form below and we'll get back to you within 24 hours!

{% include contact-form.html %}

---

## Pack Leadership

### Cubmaster

{% assign cubmaster = site.data.leaders.leaders | where: "role", "Cubmaster" | first %}
**{{ cubmaster.name }}**  
📧 [{{ cubmaster.email }}](mailto:{{ cubmaster.email }})

### Committee Chair

{% assign chair = site.data.leaders.leaders | where: "role", "Committee Chair" | first %}
**{{ chair.name }}**  
📧 [{{ chair.email }}](mailto:{{ chair.email }})

### Den Leaders

{% for leader in site.data.leaders.leaders %}
{% if leader.role contains "Den Leader" %}
**{{ leader.name }}** - {{ leader.role }}  
📧 [{{ leader.email }}](mailto:{{ leader.email }})

{% endif %}
{% endfor %}

---

## Frequently Asked Questions

Before reaching out, you might find answers to common questions on our [Join Us](/pages/join#frequently-asked-questions) page.

**Quick Answers:**

- **When do you meet?** {{ site.data.pack-info.meeting_info.day }}s at {{ site.data.pack-info.meeting_info.time }}
- **Where do you meet?** {{ site.data.pack-info.meeting_info.location.name }}
- **Who can join?** Boys and girls in kindergarten through 5th grade
- **How much does it cost?** Approximately ${{ site.data.pack-info.fees.registration }} annually
- **Can I visit before joining?** Absolutely! No RSVP needed.

---

## Connect With Us

{% if site.data.pack-info.contact.facebook %}
[Facebook]({{ site.data.pack-info.contact.facebook }}){:.btn .btn-outline target="\_blank"}
{% endif %}

{% if site.data.pack-info.contact.instagram %}
[Instagram]({{ site.data.pack-info.contact.instagram }}){:.btn .btn-outline target="\_blank"}
{% endif %}

---

## Other Resources

- [Boy Scouts of America](https://www.scouting.org/){:target="\_blank"}
- [{{ site.data.pack-info.council }}]({{ site.data.pack-info.council_website }}){:target="\_blank"}
- [Cub Scout Parent Resources](https://www.scouting.org/programs/cub-scouts/preview-adventures/){:target="\_blank"}
