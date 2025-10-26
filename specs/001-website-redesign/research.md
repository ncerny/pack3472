# Research: Pack 3472 Website Technology Stack

**Date**: 2025-10-26  
**Feature**: Pack 3472 Cub Scout Website Redesign  
**Purpose**: Evaluate technology options and establish technical approach for free, maintainable static website with Google Workspace integration

## Executive Summary

**Recommended Approach**: Jekyll static site generator + GitHub Pages hosting + Netlify CMS for content management

**Key Findings**:

- Static site generators provide best balance of simplicity, performance, and cost
- GitHub Pages offers best free hosting with custom domain support
- Netlify CMS provides non-technical content editing without leaving GitHub ecosystem
- Google Workspace integration straightforward with embeds and iframes
- This stack meets all constitutional requirements and project constraints

---

## Research Areas

### 1. Static Site Generator Selection

**Decision**: Jekyll (primary recommendation) with Hugo as alternative

**Rationale**:

- **Jekyll**: Native GitHub Pages support, no build configuration needed, Ruby-based, extensive plugin ecosystem, excellent documentation
- **Hugo**: Fastest build times, Go-based (single binary), excellent documentation, slightly steeper learning curve
- **11ty**: JavaScript-based, very flexible, growing ecosystem, requires more setup

**Jekyll Selected Because**:

1. Zero configuration with GitHub Pages (add files, push, it deploys)
2. Mature ecosystem with 10+ years of development
3. Extensive themes specifically for organizations like scout packs
4. Large community = easy to find help
5. Liquid templating is simple for non-developers to understand
6. Built-in support for data files (YAML/JSON) for structured content

**Alternatives Considered**:

- **Google Sites**: Too limiting for design requirements, no version control
- **WordPress**: Requires PHP hosting (not free), database, security updates, overkill for static content
- **Wix/Squarespace**: Not free, vendor lock-in, can't use GitHub/Firebase
- **Hand-coded HTML**: Not maintainable by non-technical volunteers

**Implementation Details**:

```yaml
# _config.yml structure
title: Pack 3472
description: Cub Scouts Pack 3472
baseurl: ''
url: 'https://pack3472.org'
theme: minimal-mistakes # or custom theme

plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
```

---

### 2. Hosting Platform Comparison

**Decision**: GitHub Pages (primary) with Firebase Hosting as alternative

**Comparison**:

| Feature           | GitHub Pages     | Firebase Hosting       | Google Sites |
| ----------------- | ---------------- | ---------------------- | ------------ |
| Cost              | Free             | Free tier (10GB/month) | Free         |
| Custom Domain     | ✅ Yes           | ✅ Yes                 | ⚠️ Limited   |
| SSL/HTTPS         | ✅ Automatic     | ✅ Automatic           | ✅ Automatic |
| Build Integration | ✅ Jekyll native | ⚠️ Manual config       | ❌ N/A       |
| Version Control   | ✅ Git native    | ⚠️ Separate            | ❌ None      |
| CDN               | ✅ Global        | ✅ Global              | ✅ Google    |
| Bandwidth         | ✅ 100GB/month   | ✅ 10GB/month          | ✅ Unlimited |
| Deploy Method     | Git push         | CLI/GitHub Actions     | Web UI       |
| Admin Complexity  | Low              | Medium                 | Lowest       |

**GitHub Pages Selected Because**:

1. Completely free, no limits for public repos
2. Native Jekyll integration (push to deploy)
3. Git version control built-in
4. GitHub Actions for CI/CD
5. Custom domain support included
6. Excellent uptime and performance

**Firebase Hosting Alternative**:

- Use if need dynamic features later (Cloud Functions)
- Better analytics integration
- More control over caching/headers
- Requires firebase-tools CLI and GitHub Actions setup

**Implementation**:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-ruby@v1
      - run: |
          gem install bundler
          bundle install
          bundle exec jekyll build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

---

### 3. Content Management Solution

**Decision**: Netlify CMS (free, open-source)

**Rationale**:

- Web-based UI for editing content (no GitHub knowledge required)
- Saves changes as Git commits (maintains version control)
- Free and open-source
- Works with any static site generator
- Authentication via GitHub OAuth
- Editorial workflow with draft/publish states

**Alternatives Considered**:

| Option                    | Pros                              | Cons                                     | Cost      |
| ------------------------- | --------------------------------- | ---------------------------------------- | --------- |
| **Netlify CMS**           | Web UI, Git commits, free, proven | Requires initial setup                   | Free      |
| **Forestry.io**           | Beautiful UI, easy setup          | Free tier limited, company shutdown 2023 | Free tier |
| **GitHub Web UI**         | No setup, direct editing          | Not user-friendly for non-technical      | Free      |
| **Google Forms → GitHub** | Familiar interface                | Complex automation needed                | Free      |
| **Contentful**            | Professional CMS                  | Overkill, limited free tier              | Paid      |

**Netlify CMS Configuration**:

```yaml
# admin/config.yml
backend:
  name: github
  repo: pack3472/pack3472.org
  branch: main

media_folder: 'assets/images/uploads'
public_folder: '/assets/images/uploads'

collections:
  - name: 'announcements'
    label: 'Announcements'
    folder: '_posts'
    create: true
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Date', name: 'date', widget: 'datetime' }
      - { label: 'Body', name: 'body', widget: 'markdown' }

  - name: 'events'
    label: 'Events'
    folder: '_events'
    create: true
    fields:
      - { label: 'Event Name', name: 'title', widget: 'string' }
      - { label: 'Date', name: 'date', widget: 'datetime' }
      - { label: 'Location', name: 'location', widget: 'string' }
      - { label: 'Description', name: 'body', widget: 'markdown' }
```

**Training Approach**:

1. 30-minute video walkthrough of CMS interface
2. Quick reference guide with screenshots
3. Practice session for pack leaders
4. Backup: GitHub web interface for emergencies

---

### 4. Google Workspace Integration

**Research Areas**:

1. Google Calendar embedding
2. Google Drive document linking
3. Google Forms integration
4. Google Groups mailing list

#### 4.1 Google Calendar Integration

**Decision**: Embed public Google Calendar using iframe

**Implementation**:

```html
<!-- _includes/calendar.html -->
<div class="calendar-embed">
  <iframe
    src="https://calendar.google.com/calendar/embed?src=CALENDAR_ID&ctz=America%2FNew_York"
    style="border: 0"
    width="800"
    height="600"
    frameborder="0"
    scrolling="no"
  >
  </iframe>
</div>

<!-- Subscribe buttons -->
<div class="calendar-subscribe">
  <a
    href="https://calendar.google.com/calendar/ical/CALENDAR_ID/public/basic.ics"
  >
    Add to Calendar
  </a>
</div>
```

**Best Practices**:

- Make calendar public (but don't publish full emails/names in event details)
- Use calendar categories for event types (Pack Meeting, Den Meeting, Campout, etc.)
- Include location with Google Maps links
- Update timezone for local area

#### 4.2 Google Drive Integration

**Decision**: Public folder with view-only links

**Implementation**:

```markdown
<!-- resources.md -->

## Forms and Documents

### Permission Slips

- [Campout Permission Slip](https://drive.google.com/file/d/FILE_ID/view)
- [Field Trip Permission](https://drive.google.com/file/d/FILE_ID/view)

### Handbooks

- [Cub Scout Handbook (external)](https://www.scouting.org/...)
- [Pack 3472 Parent Guide](https://drive.google.com/file/d/FILE_ID/view)
```

**Folder Structure**:

```
Pack 3472 Public Documents/
├── Forms/
│   ├── Permission Slips/
│   └── Registration/
├── Handbooks/
├── Calendars/
└── Meeting Minutes/ (optional)
```

**Security Considerations**:

- Anyone with link can view (don't include sensitive info)
- Use view-only permissions
- Separate private folder for internal documents
- Regular audit of public folder contents

#### 4.3 Google Forms Integration

**Decision**: Link to Google Forms for contact/registration

**Implementation**:

```html
<!-- contact.md or join.md -->
<div class="contact-form">
  <h2>Get in Touch</h2>
  <p>Questions about joining Pack 3472? Fill out our quick form!</p>
  <a href="https://forms.gle/FORM_ID" class="button button-primary">
    Contact Us
  </a>
</div>

<!-- Or embed the form -->
<iframe
  src="https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true"
  width="640"
  height="800"
  frameborder="0"
  marginheight="0"
  marginwidth="0"
>
  Loading…
</iframe>
```

**Form Responses**:

- Configure form to send email notifications to pack leaders
- Set up auto-response thanking submitter
- Form responses go to Google Sheet for tracking

#### 4.4 Google Groups Mailing List

**Decision**: Link to subscription page with clear instructions

**Implementation**:

```html
<!-- join.md or communications section -->
<div class="mailing-list">
  <h3>Stay Updated via Email</h3>
  <p>Join our Google Group to receive pack announcements and updates.</p>
  <a href="https://groups.google.com/g/pack3472" class="button">
    Join Mailing List
  </a>
</div>
```

**Instructions for Users**:

1. Click "Join group"
2. Sign in with Google account (or create one)
3. Choose email frequency (each message, daily digest, weekly)

---

### 5. Design System & Accessibility

**Decision**: Custom design system based on BSA colors + playful elements

**Color Palette**:

```css
/* BSA Official Colors */
--bsa-red: #ce1126;
--bsa-blue: #003f87;

/* Pack 3472 Palette */
--primary: #003f87; /* BSA Blue */
--secondary: #fdb913; /* Gold/Yellow - playful */
--accent: #ce1126; /* BSA Red */
--success: #00843d; /* Forest green */
--neutral-dark: #2c3e50;
--neutral-light: #ecf0f1;
--background: #ffffff;

/* Cub Scout Den Colors (optional for den pages) */
--lion-gold: #fdb913;
--tiger-orange: #ff6b35;
--wolf-green: #00843d;
--bear-blue: #0096d6;
--webelos-teal: #006b54;
```

**Typography**:

```css
/* Headings - playful but readable */
font-family: 'Fredoka', 'Comic Neue', 'Arial Rounded', sans-serif;

/* Body - professional and readable */
font-family: 'Open Sans', 'Segoe UI', Helvetica, Arial, sans-serif;

/* Size scale (1.25 ratio) */
--text-xs: 0.8rem;
--text-sm: 1rem;
--text-base: 1.25rem;
--text-lg: 1.563rem;
--text-xl: 1.953rem;
--text-2xl: 2.441rem;
--text-3xl: 3.052rem;
```

**Accessibility Requirements (WCAG 2.1 AA)**:

- ✅ Color contrast ratio ≥4.5:1 for normal text
- ✅ Color contrast ratio ≥3:1 for large text (18pt+)
- ✅ All images have alt text
- ✅ Semantic HTML (headings hierarchy, landmarks, lists)
- ✅ Keyboard navigation (tab order, focus indicators)
- ✅ Form labels and error messages
- ✅ Skip to main content link
- ✅ Resizable text (up to 200% without breaking layout)

**Testing Tools**:

- axe DevTools (browser extension)
- WAVE (web accessibility evaluation tool)
- Lighthouse (automated audits)
- Manual keyboard navigation testing
- Screen reader testing (NVDA on Windows, VoiceOver on Mac/iOS)

---

### 6. Image Optimization & Photo Galleries

**Decision**: Cloudinary free tier for image hosting and optimization

**Rationale**:

- Free tier: 25GB storage, 25GB bandwidth/month
- Automatic image optimization and responsive images
- CDN delivery for fast loading
- API for programmatic upload
- Transformation URLs (resize, crop, format)

**Alternative**: GitHub repo + manual optimization

- Pros: No external dependency, all in one place
- Cons: Manual optimization required, larger repo size, slower loading

**Implementation**:

```html
<!-- Gallery using Cloudinary -->
<div class="photo-gallery">
  <img
    src="https://res.cloudinary.com/pack3472/image/upload/c_fill,w_400,h_300,q_auto/campout-2024-fall.jpg"
    alt="Scouts roasting marshmallows at fall campout"
    loading="lazy"
  />
</div>
```

**Gallery Library**: Lightbox2 or PhotoSwipe (free, accessible)

---

### 7. Performance Optimization Strategy

**Target Metrics**:

- Lighthouse Performance Score: >90
- First Contentful Paint: <1.8s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.8s
- Cumulative Layout Shift: <0.1

**Optimization Techniques**:

1. **Images**:

   - WebP format with JPEG fallback
   - Responsive images (`srcset`, `sizes`)
   - Lazy loading below the fold
   - Cloudinary automatic optimization

2. **CSS**:

   - Critical CSS inline in `<head>`
   - Defer non-critical CSS
   - Minification in production
   - CSS custom properties for theming

3. **JavaScript**:

   - Minimal JavaScript (progressive enhancement)
   - Defer/async loading
   - Code splitting if needed
   - Minification in production

4. **Fonts**:

   - System font stack fallback
   - `font-display: swap`
   - Preload critical fonts
   - Subset fonts to needed characters

5. **Caching**:

   - Service worker for offline support (optional)
   - Cache-Control headers
   - Versioned assets (cache busting)

6. **HTML**:
   - Semantic structure
   - Minification
   - Remove unused code

**Monitoring**:

- Lighthouse CI in GitHub Actions
- PageSpeed Insights monthly checks
- Real User Monitoring (optional: free tier of Vercel Analytics)

---

### 8. Search Functionality

**Decision**: Lunr.js (client-side search, no backend needed)

**Rationale**:

- Free, open-source
- Works with static sites
- No server required
- Privacy-friendly (no external search service)
- Good for small-medium sites

**Implementation**:

```javascript
// Generate search index at build time
// _plugins/search_index_generator.rb

// Client-side search
// assets/js/search.js
var idx = lunr(function () {
  this.field('title', { boost: 10 });
  this.field('content');
  this.field('tags');
  this.ref('url');
});

// Add documents from JSON
searchData.forEach(function (doc) {
  idx.add(doc);
});

// Search function
function search(query) {
  return idx.search(query);
}
```

**Alternative**: Google Custom Search

- Pros: Better results, managed by Google
- Cons: Ads on free tier, external dependency, slower

---

## Deployment & CI/CD

**Strategy**: GitHub Actions for automated deployment

**Workflow**:

1. Developer/admin pushes to `main` branch
2. GitHub Actions triggers
3. Build Jekyll site
4. Run tests (HTML validation, accessibility, link checking)
5. Deploy to GitHub Pages (or Firebase)

**GitHub Actions Workflow**:

```yaml
name: Build and Deploy
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.1'
          bundler-cache: true

      - name: Build site
        run: bundle exec jekyll build

      - name: Test HTML
        run: bundle exec htmlproofer ./_site --disable-external

      - name: Accessibility tests
        run: npm run test:a11y

      - name: Lighthouse CI
        run: npm run test:lighthouse

      - name: Deploy
        if: github.ref == 'refs/heads/main'
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

---

## Security Considerations

**Threat Model**: Low-risk public website

**Security Measures**:

1. **HTTPS**: Enforced by GitHub Pages
2. **No User Authentication**: No login system to secure
3. **No User-Generated Content**: All content from trusted pack leaders
4. **No Database**: Static files, no SQL injection risk
5. **No Secrets**: API keys for Google services only (public calendar, forms)
6. **Content Security Policy**: Restrict inline scripts, external resources
7. **Youth Protection**: No full names, addresses, or identifying info in photos
8. **Git History**: Sensitive data never committed (use .gitignore)

**Monitoring**:

- GitHub Dependabot for dependency vulnerabilities
- Annual security audit of Google permissions
- Review public Drive folder quarterly

---

## Training & Documentation

**Pack Leader Training Plan**:

1. **Initial Setup Session** (1 hour):

   - Overview of website structure
   - How to access Netlify CMS
   - Creating announcements and events
   - Uploading photos
   - Editing pages

2. **Quick Reference Materials**:

   - One-page cheat sheet (PDF)
   - Video tutorials (5-10 minutes each)
   - Screenshots with annotations
   - FAQ document

3. **Ongoing Support**:
   - Designated "webmaster" contact
   - Monthly check-in (first 3 months)
   - Slack/email support channel

**Documentation Deliverables**:

- `ADMIN-GUIDE.md`: Complete admin instructions
- `SETUP.md`: Technical setup for developers
- `DEPLOYMENT.md`: Deployment and troubleshooting
- `CONTENT-GUIDE.md`: Writing style guide and best practices

---

## Cost Analysis

**Total Annual Cost: $0-50**

| Item                           | Cost       | Notes                   |
| ------------------------------ | ---------- | ----------------------- |
| Hosting (GitHub Pages)         | $0         | Free for public repos   |
| Hosting (Firebase alternative) | $0         | Free tier sufficient    |
| Domain (pack3472.org)          | $12-15     | If renewal needed       |
| SSL Certificate                | $0         | Included with hosting   |
| Cloudinary (images)            | $0         | Free tier: 25GB storage |
| Netlify CMS                    | $0         | Open-source             |
| Google Workspace               | $0         | Already owned           |
| Development Tools              | $0         | All open-source         |
| **Total**                      | **$12-15** | Domain only             |

**Comparison to Alternatives**:

- WordPress hosting: $60-120/year
- Wix: $180-300/year
- Squarespace: $180-420/year
- Custom development: $2,000-5,000 upfront

---

## Risk Assessment

| Risk                       | Likelihood | Impact | Mitigation                                                                  |
| -------------------------- | ---------- | ------ | --------------------------------------------------------------------------- |
| Pack leaders can't use CMS | Low        | High   | Netlify CMS is user-friendly; provide training; fallback to GitHub web UI   |
| GitHub/Firebase outage     | Very Low   | Medium | Both have excellent uptime; content in Git can deploy elsewhere             |
| Google Workspace changes   | Low        | Medium | Use standard embed codes; avoid proprietary APIs                            |
| Photo privacy violation    | Low        | High   | Training on youth protection; review process; never use full names          |
| Website outdated/stale     | Medium     | Medium | Schedule regular content audits; make updating easy                         |
| Technical debt             | Low        | Low    | Static sites have minimal dependencies; Jekyll is mature                    |
| Loss of webmaster          | Medium     | Medium | Document everything; train multiple leaders; simple enough anyone can learn |

---

## Recommendations Summary

### Immediate Decisions (Phase 0)

1. ✅ **Static Site Generator**: Jekyll
2. ✅ **Hosting**: GitHub Pages (primary), Firebase (backup)
3. ✅ **CMS**: Netlify CMS
4. ✅ **Image Hosting**: Cloudinary free tier
5. ✅ **Search**: Lunr.js client-side
6. ✅ **Google Integration**: Embeds (Calendar, Drive, Forms)

### Phase 1 Tasks

1. Create data model for content structure
2. Design API contracts (Google integrations)
3. Create quickstart guide for development setup
4. Set up repository structure
5. Configure Netlify CMS

### Success Criteria Met

- ✅ Zero-cost hosting ($0-15/year)
- ✅ Maintainable by non-technical volunteers
- ✅ Google Workspace integration
- ✅ Performance targets achievable
- ✅ Accessibility requirements feasible
- ✅ Visual appeal (customizable design)
- ✅ Version control and review process

---

## Next Steps

1. Review and approve research findings
2. Proceed to Phase 1: Data Model design
3. Create contracts for Google integrations
4. Generate quickstart development guide
5. Update agent context with technology stack
