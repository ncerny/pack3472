# Google Calendar Integration Contract

**Date**: 2025-10-26  
**Feature**: Pack 3472 Website - Calendar Integration  
**Purpose**: Define integration points for Google Calendar embedding and subscription

## Overview

Pack 3472 uses Google Calendar to manage pack events. The website will:

1. Embed the calendar for visual browsing
2. Provide subscription links (iCal, Google Calendar)
3. Display upcoming events in various site sections

---

## Google Calendar Configuration

### Calendar Settings

**Calendar ID**: `pack3472@group.calendar.google.com` (example)

**Permissions**:

- Make calendar public
- Share with specific people (pack leaders) for editing
- Public access: "See all event details"

**Timezone**: America/Chicago (or appropriate timezone)

**Event Categories** (using colors):

- Pack Meeting (Blue)
- Den Meeting (Green)
- Campout (Orange)
- Service Project (Purple)
- Fundraiser (Red)
- Family Event (Pink)

---

## Embedding Options

### Option 1: Full Calendar Embed (Recommended for Calendar Page)

**HTML**:

```html
<iframe
  src="https://calendar.google.com/calendar/embed?src=pack3472%40group.calendar.google.com&ctz=America%2FChicago"
  style="border: 0"
  width="800"
  height="600"
  frameborder="0"
  scrolling="no"
>
</iframe>
```

**Customization Parameters**:

- `src`: URL-encoded calendar ID
- `ctz`: Timezone (America/Chicago)
- `mode`: MONTH (default), WEEK, or AGENDA
- `showTitle`: 0 (hide) or 1 (show)
- `showNav`: 0 (hide) or 1 (show)
- `showDate`: 0 (hide) or 1 (show)
- `showPrint`: 0 (hide) or 1 (show)
- `showTabs`: 0 (hide) or 1 (show)
- `showCalendars`: 0 (hide) or 1 (show)
- `bgcolor`: %23FFFFFF (hex color, URL-encoded)

**Example with customization**:

```html
<iframe
  src="https://calendar.google.com/calendar/embed?src=pack3472%40group.calendar.google.com&ctz=America%2FChicago&mode=AGENDA&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&bgcolor=%23FFFFFF"
  width="100%"
  height="600"
  frameborder="0"
  scrolling="no"
  loading="lazy"
>
</iframe>
```

**Responsive Wrapper**:

```html
<div
  class="calendar-embed"
  style="position: relative; padding-bottom: 75%; height: 0; overflow: hidden;"
>
  <iframe
    src="..."
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    frameborder="0"
    scrolling="no"
  >
  </iframe>
</div>
```

---

### Option 2: Agenda View Embed (Compact List)

**HTML**:

```html
<iframe
  src="https://calendar.google.com/calendar/embed?src=pack3472%40group.calendar.google.com&ctz=America%2FChicago&mode=AGENDA&showTitle=0&showPrint=0"
  width="100%"
  height="400"
  frameborder="0"
>
</iframe>
```

**Best for**: Homepage, sidebar widgets

---

### Option 3: Custom Events List (Google Calendar API)

**Not Recommended** for this project (requires API key, JavaScript, complexity)

**Alternative**: Use Jekyll plugin to fetch and cache calendar events at build time

---

## Subscription Links

### Add to Google Calendar

**Direct Link**:

```html
<a
  href="https://calendar.google.com/calendar/r?cid=pack3472@group.calendar.google.com"
>
  Add to Google Calendar
</a>
```

**Button Example**:

```html
<a
  href="https://calendar.google.com/calendar/r?cid=pack3472@group.calendar.google.com"
  class="button button-primary"
>
  <img
    src="/assets/images/google-calendar-icon.svg"
    alt=""
    width="20"
    height="20"
  />
  Add to Google Calendar
</a>
```

---

### iCal/ICS Subscription

**iCal URL**:

```
https://calendar.google.com/calendar/ical/pack3472%40group.calendar.google.com/public/basic.ics
```

**Usage**:

```html
<a
  href="https://calendar.google.com/calendar/ical/pack3472%40group.calendar.google.com/public/basic.ics"
>
  Subscribe via iCal (Apple Calendar, Outlook)
</a>
```

**Instructions for Users**:

1. Copy the iCal link
2. Open your calendar app (Apple Calendar, Outlook, etc.)
3. Add calendar by URL
4. Paste the iCal link
5. Calendar will sync automatically

---

### Webcal Protocol (Direct Subscribe)

**HTML**:

```html
<a
  href="webcal://calendar.google.com/calendar/ical/pack3472%40group.calendar.google.com/public/basic.ics"
>
  Subscribe to Calendar
</a>
```

**Note**: `webcal://` protocol opens user's default calendar app

---

## Calendar Page Implementation

### Full Page Layout

```html
<!-- calendar.html -->
<div class="calendar-page">
  <header class="page-header">
    <h1>Pack Calendar</h1>
    <p>View all upcoming pack events and meetings</p>
  </header>

  <div class="calendar-actions">
    <a
      href="https://calendar.google.com/calendar/r?cid=pack3472@group.calendar.google.com"
      class="button button-primary"
    >
      Add to Google Calendar
    </a>
    <a
      href="webcal://calendar.google.com/calendar/ical/pack3472%40group.calendar.google.com/public/basic.ics"
      class="button button-secondary"
    >
      Subscribe via iCal
    </a>
  </div>

  <div class="calendar-embed-wrapper">
    <iframe
      src="https://calendar.google.com/calendar/embed?src=pack3472%40group.calendar.google.com&ctz=America%2FChicago"
      width="100%"
      height="600"
      frameborder="0"
    >
    </iframe>
  </div>

  <div class="calendar-help">
    <h2>How to Subscribe</h2>
    <ul>
      <li>
        <strong>Google Calendar:</strong> Click "Add to Google Calendar" above
      </li>
      <li>
        <strong>Apple Calendar:</strong> Click "Subscribe via iCal" and confirm
      </li>
      <li>
        <strong>Outlook:</strong> Copy iCal link and add as internet calendar
      </li>
    </ul>
  </div>
</div>
```

---

## Homepage Calendar Widget

### Upcoming Events Component

**Jekyll Liquid Template** (using events collection):

```liquid
<!-- _includes/upcoming-events.html -->
<section class="upcoming-events">
  <h2>Upcoming Events</h2>

  {% assign upcoming = site.events | where_exp: "event", "event.date >= site.time" | sort: "date" | limit: 5 %}

  {% if upcoming.size > 0 %}
    <ul class="event-list">
      {% for event in upcoming %}
        <li class="event-item">
          <time datetime="{{ event.date | date_to_xmlschema }}">
            <span class="event-date-day">{{ event.date | date: "%d" }}</span>
            <span class="event-date-month">{{ event.date | date: "%b" }}</span>
          </time>
          <div class="event-details">
            <h3>{{ event.title }}</h3>
            <p class="event-meta">
              <span class="event-type">{{ event.event_type | capitalize }}</span>
              {% if event.location.name %}
                • <span class="event-location">{{ event.location.name }}</span>
              {% endif %}
            </p>
          </div>
          <a href="{{ event.url }}" class="event-link">Details →</a>
        </li>
      {% endfor %}
    </ul>

    <a href="/calendar/" class="button button-secondary">View Full Calendar</a>
  {% else %}
    <p>No upcoming events scheduled. Check back soon!</p>
  {% endif %}
</section>
```

**Alternative**: Embed agenda view

```html
<section class="upcoming-events">
  <h2>Upcoming Events</h2>
  <iframe
    src="https://calendar.google.com/calendar/embed?src=pack3472%40group.calendar.google.com&ctz=America%2FChicago&mode=AGENDA&showTitle=0&showPrint=0&showTabs=0"
    width="100%"
    height="300"
    frameborder="0"
  >
  </iframe>
  <a href="/calendar/" class="button button-secondary">View Full Calendar</a>
</section>
```

---

## Event Creation Workflow

### For Pack Leaders

**Step 1: Access Calendar**

- Go to [calendar.google.com](https://calendar.google.com)
- Sign in with pack Google account
- Navigate to "Pack 3472" calendar

**Step 2: Create Event**

- Click date/time or "Create" button
- Fill in event details:
  - **Title**: Clear, descriptive (e.g., "Pack Meeting", "Fall Campout")
  - **Date/Time**: Start and end times
  - **Location**: Full address (enables map link)
  - **Description**: Event details, what to bring, RSVP info
  - **Calendar**: Ensure "Pack 3472" is selected
  - **Color**: Choose category color

**Step 3: Optional Settings**

- **Visibility**: Default to public (respects calendar settings)
- **Notification**: Add email reminders for leaders
- **Recurring**: Set if weekly meeting

**Step 4: Save**

- Click "Save"
- Event appears on website within minutes (calendar embed)
- Manual event pages updated with next site rebuild

### Event Information Standards

**Required Fields**:

- Title (descriptive, no abbreviations)
- Date and time (with timezone)
- Location with full address
- Description (minimum: what, when, where, who, cost)

**Optional but Recommended**:

- What to bring
- RSVP requirements
- Cost details
- Contact person
- Link to related forms (permission slips)

**Examples**:

**Good Event**:

```
Title: Fall Campout at Camp Big Sky
Date: Oct 15-17, 2024, 6:00 PM - 11:00 AM
Location: Camp Big Sky, 456 Forest Rd, Oakville, IL 62702
Description:
Join us for our annual fall campout! Family event - siblings welcome.

Cost: $25 per scout, $10 per additional family member

What to bring:
• Sleeping bag
• Warm clothes
• Water bottle
• Flashlight
• Personal items

RSVP by Oct 8 to cubmaster@pack3472.org
Permission slip required: [link]

Questions? Contact John Smith, Cubmaster
```

**Bad Event** (avoid):

```
Title: Campout
Date: Oct 15
Location: Camp
Description: Camping trip
```

---

## Synchronization

### Website → Google Calendar

- Manual event creation in Google Calendar by pack leaders
- Events appear immediately in embedded calendar
- Jekyll events collection updated separately for custom display

### Google Calendar → Website

- Embedded calendar auto-updates (no action needed)
- Manual events collection (\_ events/) stays in sync via:
  - Pack leaders create event in Google Calendar
  - Pack leaders create matching event page in Netlify CMS
  - Future enhancement: Script to auto-generate event pages from calendar

---

## Error Handling

### Calendar Doesn't Load

**Symptoms**: Blank space where calendar should be

**Possible Causes**:

- Calendar not public
- Incorrect calendar ID
- iframe blocked (Content Security Policy)
- Network/firewall issues (user's end)

**Fallback**:

```html
<div class="calendar-embed-wrapper">
  <iframe src="..." frameborder="0"></iframe>
  <p class="calendar-fallback" style="display: none;">
    Unable to load calendar.
    <a
      href="https://calendar.google.com/calendar/embed?src=pack3472%40group.calendar.google.com"
      target="_blank"
    >
      View calendar in new window →
    </a>
  </p>
</div>

<script>
  // Show fallback if iframe fails to load
  setTimeout(function () {
    var iframe = document.querySelector('.calendar-embed-wrapper iframe');
    if (!iframe || !iframe.contentWindow) {
      document.querySelector('.calendar-fallback').style.display = 'block';
    }
  }, 3000);
</script>
```

---

## Privacy & Security

### Public Information Only

**Safe to include**:

- Event name and description
- Date, time, location (public venue)
- What to bring
- Cost
- Contact email (pack email, not personal)

**Never include**:

- Scout full names
- Scout personal information
- Home addresses
- Personal phone numbers
- School names (unless chartered organization)

### Calendar Permissions

**Pack Leaders** (editing access):

- Cubmaster
- Committee Chair
- Webmaster

**Public** (view-only access):

- Parents
- Prospective families
- Community

---

## Testing Checklist

- [ ] Calendar embed loads on calendar page
- [ ] Calendar displays correct timezone
- [ ] Past events appear correctly
- [ ] Future events visible
- [ ] Event details clickable in embed
- [ ] "Add to Google Calendar" link works
- [ ] iCal subscription link works
- [ ] Webcal link opens calendar app
- [ ] Responsive on mobile devices
- [ ] Accessible (keyboard navigation, screen reader)
- [ ] Calendar loading has fallback message
- [ ] Events on homepage show correctly
- [ ] Event pages link to calendar
- [ ] Calendar accessible from main navigation

---

## Maintenance

### Weekly

- Verify upcoming events are accurate
- Check for event changes/cancellations

### Monthly

- Review past events (archive if needed)
- Confirm event categories (colors) consistent

### Quarterly

- Audit calendar permissions
- Review and update recurring events

### Annually

- Plan major events for upcoming year
- Update meeting schedule (if changed)
- Review calendar workflow with new leaders

---

## Future Enhancements

**Phase 2 Possibilities**:

- Google Calendar API integration for custom event display
- Automatic event page generation from calendar
- RSVP integration with Google Forms
- Event reminder emails
- Calendar sync with other pack systems
- Attendance tracking integration

---

## Documentation for Leaders

**Quick Guide**: "How to Add a Calendar Event"

1. Go to calendar.google.com and sign in
2. Open "Pack 3472" calendar
3. Click date or "Create" button
4. Fill in:
   - Event title (be descriptive!)
   - Date and time
   - Location (full address)
   - Description (include all details)
5. Choose color for event type
6. Click "Save"
7. Event appears on website immediately!

**Tips**:

- Add events at least 2 weeks in advance
- Include all important details in description
- Double-check date/time/location
- Use consistent naming (e.g., "Pack Meeting" not "Mtg")
- Link to permission slips if needed

---

## Support

**Issues?**

- **Calendar not public**: Admin must enable in calendar settings
- **Wrong timezone**: Update calendar settings
- **Event not showing**: Check calendar visibility settings
- **Can't edit calendar**: Request access from webmaster

**Questions?**
Contact: webmaster@pack3472.org
