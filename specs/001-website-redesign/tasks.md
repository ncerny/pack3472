# Tasks: Pack 3472 Cub Scout Website Redesign

**Input**: Design documents from `/specs/001-website-redesign/`  
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, contracts/ ✅

**Tests**: Manual acceptance testing only (per constitution adaptation for static sites)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4, US5, US6)
- Include exact file paths in descriptions

## Path Conventions

Static Jekyll site structure at repository root. All paths relative to `/Users/ncerny/workspace/pack3472.org/`.

---

## Phase 1: Setup (Shared Infrastructure) ✅ COMPLETE

**Purpose**: Project initialization, Jekyll configuration, and basic structure

- [x] T001 Create Jekyll project structure with \_config.yml, Gemfile, and directory structure per plan.md
- [x] T002 [P] Configure Jekyll in \_config.yml with site title, description, URL, theme settings
- [x] T003 [P] Create Gemfile with Jekyll dependencies (jekyll, jekyll-feed, jekyll-seo-tag, jekyll-sitemap)
- [x] T004 [P] Setup GitHub repository settings for GitHub Pages deployment (enable Pages, set source branch)
- [x] T005 [P] Configure custom domain (pack3472.org) in GitHub Pages settings and CNAME file
- [x] T006 [P] Create basic layouts in \_layouts/ directory (default.html, page.html, post.html)
- [x] T007 [P] Create reusable includes in \_includes/ (header.html, footer.html, nav.html, head.html)
- [x] T008 [P] Setup asset directories (assets/css/, assets/js/, assets/images/, assets/fonts/)
- [x] T009 [P] Initialize CSS framework with BSA colors (gold #FFC72C, blue #003F87) in assets/css/main.css
- [x] T010 [P] Create data files directory structure (\_data/) for pack-info.yml, leaders.yml, dens.yml per data-model.md
- [x] T011 [P] Configure ESLint for JavaScript in .eslintrc.json with ES6+ standards
- [x] T012 [P] Configure Stylelint for CSS in .stylelint.json with BEM naming conventions
- [x] T013 [P] Create .github/workflows/deploy.yml for GitHub Actions CI/CD with Jekyll build
- [x] T014 [P] Create .github/workflows/test.yml for automated accessibility and link checks
- [x] T015 [P] Create docs/ADMIN-GUIDE.md with content management instructions for pack leaders
- [x] T016 [P] Create docs/SETUP.md with initial setup and development instructions
- [x] T017 [P] Create docs/DEPLOYMENT.md with deployment process documentation

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core components that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T018 Populate \_data/pack-info.yml with Pack 3472 details (name, number, meeting info, contact) per data-model.md
- [x] T019 [P] Populate \_data/leaders.yml with leadership roster per data-model.md
- [x] T020 [P] Populate \_data/dens.yml with den information per data-model.md
- [x] T021 Implement responsive navigation component in \_includes/nav.html with mobile hamburger menu
- [x] T022 [P] Implement header component in \_includes/header.html with pack logo and branding
- [x] T023 [P] Implement footer component in \_includes/footer.html with contact info and links
- [x] T024 Create default page layout in \_layouts/default.html assembling header, nav, content, footer
- [x] T025 [P] Implement base CSS styles in assets/css/base.css with typography, colors, spacing
- [x] T026 [P] Implement responsive grid system in assets/css/grid.css for mobile-first layout
- [x] T027 [P] Create CSS components in assets/css/components/ (buttons, cards, forms, badges)
- [x] T028 [P] Implement utility CSS classes in assets/css/utilities.css (spacing, display, colors)
- [ ] T029 [P] Optimize and add pack logo SVG to assets/images/logo.svg
- [ ] T030 [P] Add BSA Cub Scout branding assets to assets/images/badges/ per BSA guidelines
- [x] T031 [P] Create 404 error page in 404.html with helpful navigation back to main site
- [x] T032 [P] Implement SEO meta tags in \_includes/head.html with Jekyll SEO plugin
- [ ] T033 [P] Create sitemap.xml configuration for search engine indexing
- [x] T034 [P] Implement Google Analytics integration in \_includes/analytics.html (optional)
- [x] T035 Setup Netlify CMS configuration in admin/config.yml for content management per research.md
- [x] T036 Create Netlify CMS admin interface in admin/index.html for pack leader access

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Prospective Parent Discovers Pack (Priority: P1) 🎯 MVP

**Goal**: Enable prospective parents to understand Pack 3472, find meeting info, and make contact

**Independent Test**: A prospective parent can navigate to homepage, understand pack offerings, find meeting location/time, and submit contact form successfully

### Implementation for User Story 1

- [ ] T037 [P] [US1] Create homepage layout in \_layouts/home.html with hero section, info cards, CTA buttons
- [ ] T038 [P] [US1] Create homepage content in index.md with welcome message and pack overview
- [ ] T039 [US1] Implement hero section in \_includes/hero.html using pack-info.yml data with meeting location/time
- [ ] T040 [P] [US1] Create "About" page in pages/about.md with pack history, grade levels, ranks, BSA connection
- [ ] T041 [P] [US1] Create "Join Us" page in pages/join.md with registration steps, fees, what to expect
- [ ] T042 [US1] Implement call-to-action buttons in \_includes/cta-buttons.html (Join Pack 3472, Contact Us)
- [ ] T043 [US1] Create contact page in pages/contact.md with multiple contact methods
- [ ] T044 [US1] Implement contact form component in \_includes/contact-form.html with name, email, phone, message fields
- [ ] T045 [US1] Integrate Google Forms for contact submissions per contracts/google-drive-integration.md
- [ ] T046 [US1] Implement form validation and success confirmation in assets/js/contact-form.js
- [ ] T047 [P] [US1] Create membership info section in \_includes/membership-info.html displaying fees and payment options
- [ ] T048 [P] [US1] Add clickable phone number and email links with tel: and mailto: protocols
- [ ] T049 [P] [US1] Implement Google Maps integration for meeting location in \_includes/map-embed.html
- [ ] T050 [US1] Style homepage hero and CTA sections in assets/css/pages/home.css with fun, engaging design
- [ ] T051 [US1] Ensure mobile responsiveness for all US1 pages with viewport testing

**Acceptance Validation for User Story 1**:

- [ ] T052 [US1] Manual test: Prospective parent can find pack info within 30 seconds (SC-001)
- [ ] T053 [US1] Manual test: All contact methods work (form, email click, phone click)
- [ ] T054 [US1] Manual test: Join page clearly explains registration process and fees
- [ ] T055 [US1] Manual test: Mobile experience is smooth on iOS and Android devices
- [ ] T056 [US1] Accessibility test: Run WAVE/axe on homepage, about, join, contact pages
- [ ] T057 [US1] Performance test: Lighthouse score >90 for homepage and key pages

**Checkpoint**: At this point, User Story 1 should be fully functional - prospective parents can discover and contact Pack 3472

---

## Phase 4: User Story 2 - Current Pack Member Stays Informed (Priority: P1) 🎯 MVP

**Goal**: Enable current pack families to view upcoming events, read announcements, and stay updated

**Independent Test**: A current pack member can navigate to calendar/events, view upcoming activities, and read recent announcements

### Implementation for User Story 2

- [ ] T058 [P] [US2] Create Jekyll collection for events in \_config.yml (\_events collection)
- [ ] T059 [P] [US2] Create Jekyll collection for announcements in \_config.yml (\_announcements collection)
- [ ] T060 [P] [US2] Create event layout in \_layouts/event.html with title, date, time, location, description
- [ ] T061 [P] [US2] Create announcement layout in \_layouts/announcement.html with title, date, content
- [ ] T062 [P] [US2] Create calendar page in pages/calendar.md to display events
- [ ] T063 [US2] Implement Google Calendar embed in \_includes/calendar-embed.html per contracts/google-calendar-integration.md
- [ ] T064 [US2] Add calendar subscription links (iCal, Google Calendar, webcal) in \_includes/calendar-subscribe.html
- [ ] T065 [P] [US2] Create events listing component in \_includes/events-list.html showing upcoming events
- [ ] T066 [P] [US2] Create announcements page in pages/announcements.md
- [ ] T067 [US2] Implement announcements feed in \_includes/announcements-feed.html with chronological ordering
- [ ] T068 [US2] Add latest announcements widget to homepage in \_includes/latest-announcements.html
- [ ] T069 [US2] Create individual event detail pages using event layout with full information
- [ ] T070 [US2] Implement event categorization in assets/js/calendar.js (pack meeting, den meeting, campout, etc.)
- [ ] T071 [P] [US2] Style calendar page in assets/css/pages/calendar.css with mobile-friendly event cards
- [ ] T072 [P] [US2] Style announcements in assets/css/pages/announcements.css with clear date/time stamps
- [ ] T073 [US2] Add "Add to Calendar" buttons for individual events in \_includes/add-to-calendar.html
- [ ] T074 [US2] Implement event RSVP information display (link to Google Form per data-model.md)
- [ ] T075 [US2] Create sample events in \_events/ directory for testing (3-5 upcoming events)
- [ ] T076 [US2] Create sample announcements in \_announcements/ directory for testing (3-5 recent announcements)

**Acceptance Validation for User Story 2**:

- [ ] T077 [US2] Manual test: Current member can view upcoming events with all details (date, time, location)
- [ ] T078 [US2] Manual test: Calendar subscription links work (iCal downloads, Google Calendar adds)
- [ ] T079 [US2] Manual test: Announcements display in correct chronological order
- [ ] T080 [US2] Manual test: Latest announcements appear on homepage
- [ ] T081 [US2] Manual test: Mobile calendar view is easy to navigate and read
- [ ] T082 [US2] Accessibility test: Run WAVE/axe on calendar and announcements pages
- [ ] T083 [US2] Performance test: Calendar page loads in <3 seconds with embedded Google Calendar

**Checkpoint**: At this point, User Stories 1 AND 2 should both work - prospective parents can discover pack, current families can stay informed

---

## Phase 5: User Story 3 - Child Explores Fun Content (Priority: P2)

**Goal**: Enable elementary-aged children to browse engaging photos and learn about scouting activities

**Independent Test**: An elementary school child can navigate to photo galleries, view pack activity photos, and explore scouting information in age-appropriate format

### Implementation for User Story 3

- [ ] T084 [P] [US3] Create Jekyll collection for galleries in \_config.yml (\_galleries collection)
- [ ] T085 [P] [US3] Create gallery layout in \_layouts/gallery.html for photo albums
- [ ] T086 [P] [US3] Create galleries page in pages/gallery.md listing all photo albums
- [ ] T087 [US3] Implement photo grid component in \_includes/photo-grid.html with responsive masonry layout
- [ ] T088 [P] [US3] Integrate Cloudinary for image hosting and optimization per research.md
- [ ] T089 [US3] Implement lightbox/modal for full-size photo viewing in assets/js/lightbox.js
- [ ] T090 [P] [US3] Create ranks and badges information page in pages/ranks.md with age-appropriate descriptions
- [ ] T091 [P] [US3] Add fun facts section in \_includes/fun-facts.html with scouting activities and adventures
- [ ] T092 [US3] Implement child-friendly icons and illustrations in assets/images/icons/
- [ ] T093 [P] [US3] Style gallery page in assets/css/pages/gallery.css with colorful, engaging design
- [ ] T094 [P] [US3] Use large, readable fonts appropriate for elementary readers in assets/css/typography.css
- [ ] T095 [US3] Add playful CSS animations for hover effects in assets/css/animations.css
- [ ] T096 [P] [US3] Create sample photo galleries in \_galleries/ directory (3-5 albums with 10-15 photos each)
- [ ] T097 [US3] Implement gallery categories/tags (campouts, meetings, service projects) for browsing
- [ ] T098 [US3] Add photo captions with event name and date (no full scout names per FR-031)
- [ ] T099 [P] [US3] Create achievement badges visual display in \_includes/badges-display.html
- [ ] T100 [US3] Implement lazy loading for gallery images in assets/js/lazy-load.js for performance
- [ ] T101 [US3] Ensure all images have alt text for accessibility per WCAG 2.1 AA

**Acceptance Validation for User Story 3**:

- [ ] T102 [US3] Manual test: Child can navigate galleries with clear, age-appropriate labels
- [ ] T103 [US3] Manual test: Photos display in engaging grid format on mobile and desktop
- [ ] T104 [US3] Manual test: Lightbox works smoothly for viewing full-size images
- [ ] T105 [US3] Manual test: Ranks/badges page is readable and interesting for elementary students
- [ ] T106 [US3] Manual test: No identifying information compromises scout privacy (FR-031, FR-032)
- [ ] T107 [US3] Accessibility test: All images have descriptive alt text
- [ ] T108 [US3] Performance test: Gallery page loads quickly with image lazy loading

**Checkpoint**: At this point, User Stories 1, 2, AND 3 work - prospective parents, current families, and children all have engaging content

---

## Phase 6: User Story 4 - Pack Leader Manages Content (Priority: P2)

**Goal**: Enable pack leaders to update events, announcements, and photos without technical expertise

**Independent Test**: A pack leader can log into Netlify CMS, create/edit an event or announcement, upload photos, and publish changes to live site

### Implementation for User Story 4

- [ ] T109 [US4] Configure Netlify CMS collections in admin/config.yml for events, announcements, galleries
- [ ] T110 [US4] Define event content model in admin/config.yml matching \_events/ structure from data-model.md
- [ ] T111 [US4] Define announcement content model in admin/config.yml matching \_announcements/ structure
- [ ] T112 [US4] Define gallery content model in admin/config.yml matching \_galleries/ structure
- [ ] T113 [P] [US4] Configure Netlify CMS widgets (datetime, markdown, image upload, select) for content fields
- [ ] T114 [P] [US4] Setup Netlify Identity authentication for pack leader access
- [ ] T115 [US4] Create user roles in Netlify Identity (Cubmaster, Committee Chair, Den Leaders, Webmaster)
- [ ] T116 [P] [US4] Configure media library in admin/config.yml for Cloudinary integration
- [ ] T117 [P] [US4] Customize Netlify CMS interface with pack branding in admin/config.yml
- [ ] T118 [US4] Create editorial workflow in admin/config.yml for draft/preview/publish states
- [ ] T119 [P] [US4] Add validation rules to content models (required fields, date formats, text limits)
- [ ] T120 [P] [US4] Create content templates in admin/config.yml for common event types (pack meeting, campout)
- [ ] T121 [US4] Test Netlify CMS authentication flow and ensure pack leaders can log in
- [ ] T122 [US4] Create sample content through Netlify CMS to validate workflow
- [ ] T123 [P] [US4] Document content management process in docs/ADMIN-GUIDE.md with screenshots
- [ ] T124 [P] [US4] Create video tutorial or step-by-step guide for pack leaders in docs/
- [ ] T125 [US4] Setup GitHub branch protection to require CMS workflow for content changes

**Acceptance Validation for User Story 4**:

- [ ] T126 [US4] Manual test: Pack leader can log into admin interface with clear dashboard
- [ ] T127 [US4] Manual test: Creating new event takes <5 minutes with clear form labels (SC-004)
- [ ] T128 [US4] Manual test: Uploading photos works smoothly with multiple image support
- [ ] T129 [US4] Manual test: Draft mode allows preview before publishing
- [ ] T130 [US4] Manual test: Published changes appear on live site within minutes
- [ ] T131 [US4] Manual test: Non-technical pack leader can complete all tasks without help
- [ ] T132 [US4] Usability test: Have actual Cubmaster test the interface and provide feedback

**Checkpoint**: At this point, User Stories 1-4 work - site is self-sustainable with pack leader content management

---

## Phase 7: User Story 5 - Parent Accesses Resources (Priority: P3)

**Goal**: Enable parents to download forms, documents, handbooks, and calendars

**Independent Test**: A parent can navigate to resources section and successfully download permission slip, handbook, or calendar file

### Implementation for User Story 5

- [ ] T133 [P] [US5] Create resources page in pages/resources.md with document categories
- [ ] T134 [P] [US5] Setup Google Drive folder structure per contracts/google-drive-integration.md
- [ ] T135 [P] [US5] Configure Google Drive sharing permissions (anyone with link - viewer) per contract
- [ ] T136 [US5] Implement resources listing component in \_includes/resources-list.html organized by category
- [ ] T137 [P] [US5] Create data file \_data/resources.yml with document links, names, types, sizes per data-model.md
- [ ] T138 [US5] Implement file type icons in assets/images/icons/ (PDF, DOC, XLS, iCal)
- [ ] T139 [P] [US5] Add download buttons with file size display in \_includes/download-button.html
- [ ] T140 [P] [US5] Create document categories: forms, handbooks, calendars, policies per FR-017
- [ ] T141 [US5] Implement calendar download links (PDF, iCal formats) from Google Calendar
- [ ] T142 [P] [US5] Add Google Drive viewer embeds for preview in \_includes/drive-preview.html
- [ ] T143 [P] [US5] Style resources page in assets/css/pages/resources.css with clear category sections
- [ ] T144 [US5] Add search/filter functionality for documents in assets/js/resources-filter.js
- [ ] T145 [P] [US5] Create sample resources in Google Drive (permission slips, handbooks, calendars)
- [ ] T146 [US5] Populate \_data/resources.yml with shareable Google Drive links
- [ ] T147 [P] [US5] Implement file naming conventions per contracts/google-drive-integration.md
- [ ] T148 [US5] Configure Netlify CMS to allow pack leaders to update resources links

**Acceptance Validation for User Story 5**:

- [ ] T149 [US5] Manual test: Parent can find commonly needed documents within 1 minute
- [ ] T150 [US5] Manual test: All download links work correctly (Google Drive viewer/download)
- [ ] T151 [US5] Manual test: Calendar exports to iCal and Google Calendar successfully
- [ ] T152 [US5] Manual test: Document categories are clearly organized and labeled
- [ ] T153 [US5] Manual test: File types and sizes display correctly for user awareness
- [ ] T154 [US5] Manual test: Mobile users can easily download documents on phones
- [ ] T155 [US5] Accessibility test: Download buttons are keyboard navigable and screen reader friendly

**Checkpoint**: At this point, User Stories 1-5 work - all primary content and self-service resources available

---

## Phase 8: User Story 6 - Mobile User Browses On-the-Go (Priority: P2)

**Goal**: Ensure excellent mobile experience for all site functionality

**Independent Test**: A parent/scout can access website on smartphone, navigate all sections, and complete core tasks (view events, contact pack) smoothly

### Implementation for User Story 6

- [ ] T156 [P] [US6] Implement mobile-first CSS media queries in assets/css/responsive.css
- [ ] T157 [P] [US6] Create hamburger menu component in assets/js/mobile-menu.js for mobile navigation
- [ ] T158 [P] [US6] Optimize touch targets to minimum 44x44px per mobile UX guidelines
- [ ] T159 [US6] Test and refine navigation on iOS Safari and Android Chrome
- [ ] T160 [P] [US6] Implement tap-to-call phone links with tel: protocol validation
- [ ] T161 [P] [US6] Implement tap-to-email links with mailto: protocol validation
- [ ] T162 [P] [US6] Add "Get Directions" button that opens Google Maps/Apple Maps in \_includes/directions-button.html
- [ ] T163 [US6] Test calendar view on mobile and optimize event card layout for small screens
- [ ] T164 [US6] Implement swipe gestures for photo gallery navigation on mobile in assets/js/gallery-mobile.js
- [ ] T165 [P] [US6] Optimize images for mobile bandwidth with Cloudinary responsive images
- [ ] T166 [US6] Test and optimize page load times on 4G mobile connection (target <4s per FR-027)
- [ ] T167 [P] [US6] Implement "Add to Calendar" mobile-friendly buttons that work with native calendar apps
- [ ] T168 [P] [US6] Test contact form on mobile devices (iOS keyboard, Android keyboard)
- [ ] T169 [US6] Ensure all horizontal scrolling is eliminated on mobile viewports
- [ ] T170 [P] [US6] Test all interactive elements (buttons, links, forms) with finger touch on mobile

**Acceptance Validation for User Story 6**:

- [ ] T171 [US6] Manual test: Site layout adjusts perfectly to smartphone screen (iPhone, Android)
- [ ] T172 [US6] Manual test: Tap on meeting location opens maps app correctly
- [ ] T173 [US6] Manual test: Tap on phone number initiates call
- [ ] T174 [US6] Manual test: Calendar scrolling and event tapping works smoothly
- [ ] T175 [US6] Manual test: Contact form is easy to complete on mobile keyboard
- [ ] T176 [US6] Manual test: Photo galleries swipe smoothly and display well
- [ ] T177 [US6] Mobile performance test: Test on actual 4G connection for load times (SC-005)
- [ ] T178 [US6] Cross-device test: Test on multiple devices (iPhone 13+, Samsung Galaxy, iPad)
- [ ] T179 [US6] Lighthouse mobile test: Score >90 on mobile performance

**Checkpoint**: All user stories complete and independently functional - full site works excellently on mobile and desktop

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Quality improvements that affect multiple user stories and final production readiness

- [ ] T180 [P] Implement site-wide search with Lunr.js in assets/js/search.js per research.md
- [ ] T181 [P] Add search interface component in \_includes/search-box.html
- [ ] T182 [P] Optimize all images with Cloudinary transformations (compression, format, responsive)
- [ ] T183 [P] Add loading indicators for slow connections in assets/js/loading.js
- [ ] T184 [P] Implement progressive enhancement for JavaScript features with fallbacks
- [ ] T185 [P] Add Open Graph meta tags for social media sharing in \_includes/head.html
- [ ] T186 [P] Create custom 404 error page with helpful navigation in 404.html
- [ ] T187 [P] Implement cookie consent banner if analytics are used in \_includes/cookie-consent.html
- [ ] T188 Run full accessibility audit with WAVE and axe-core on all pages
- [ ] T189 Fix all WCAG 2.1 AA violations found in accessibility audit
- [ ] T190 Run Lighthouse performance audit on all pages
- [ ] T191 Optimize any pages with Lighthouse score <90
- [ ] T192 [P] Run cross-browser testing (Chrome, Safari, Firefox, Edge) on desktop and mobile
- [ ] T193 Fix any browser compatibility issues discovered
- [ ] T194 [P] Test all external integrations (Google Calendar, Drive, Forms) end-to-end
- [ ] T195 [P] Validate all forms with various input scenarios (valid, invalid, edge cases)
- [ ] T196 Run HTML validation with W3C validator on all pages
- [ ] T197 [P] Run CSS validation with W3C CSS validator
- [ ] T198 [P] Run ESLint on all JavaScript files and fix violations
- [ ] T199 Test site with screen readers (VoiceOver, NVDA) for accessibility
- [ ] T200 Test keyboard-only navigation through entire site
- [ ] T201 [P] Optimize DNS settings and configure CDN for performance
- [ ] T202 [P] Setup SSL certificate and ensure all resources load over HTTPS
- [ ] T203 [P] Create comprehensive README.md in repository root with project overview
- [ ] T204 Test site analytics (if implemented) to ensure tracking works correctly
- [ ] T205 [P] Prepare launch announcement content for pack families
- [ ] T206 Train pack leaders on using Netlify CMS with hands-on session
- [ ] T207 Validate all quickstart.md instructions work correctly from fresh clone
- [ ] T208 [P] Create backup and recovery documentation in docs/BACKUP.md
- [ ] T209 [P] Document common troubleshooting issues and solutions in docs/TROUBLESHOOTING.md
- [ ] T210 Final review: Verify all 42 functional requirements (FR-001 to FR-042) are met
- [ ] T211 Final review: Verify all 12 success criteria (SC-001 to SC-012) can be measured
- [ ] T212 Final review: Confirm BSA youth protection policies are followed (privacy, photos)
- [ ] T213 Schedule post-launch survey for pack families (SC-003, SC-012 measurement)
- [ ] T214 Setup monitoring for site uptime and performance
- [ ] T215 Deploy to production and verify all functionality on live domain

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phases 3-8)**: All depend on Foundational phase completion
  - User Story 1 (P1): Can start after Foundational - Core MVP
  - User Story 2 (P1): Can start after Foundational - Core MVP
  - User Story 3 (P2): Independent, can start after Foundational
  - User Story 4 (P2): Depends on US1, US2, US3 content structure existing
  - User Story 5 (P3): Independent, can start after Foundational
  - User Story 6 (P2): Should be tested throughout, finalized after all others
- **Polish (Phase 9)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - Independent
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - Independent
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - Independent
- **User Story 4 (P2)**: Depends on US1, US2, US3 to have content structure to manage
- **User Story 5 (P3)**: Can start after Foundational (Phase 2) - Independent
- **User Story 6 (P2)**: Cross-cutting, should test continuously alongside all others

### Within Each User Story

- Implementation tasks before validation tasks
- Core components before styling
- Functionality before optimization
- Story complete before moving to next priority

### Parallel Opportunities

**Setup Phase (all marked [P] can run in parallel)**:

- Configuration files (T002, T003, T011, T012)
- Directory setup (T006, T007, T008, T010)
- Documentation (T015, T016, T017)
- CI/CD setup (T013, T014)

**Foundational Phase (many marked [P] can run in parallel)**:

- Data files (T019, T020)
- Components (T022, T023, T026-T028, T031-T034)
- CSS files (T025-T028)
- Assets (T029, T030)

**Once Foundational completes, these can run in parallel**:

- User Story 1 (T037-T057) - Developer A
- User Story 2 (T058-T083) - Developer B
- User Story 3 (T084-T108) - Developer C
- User Story 5 (T133-T155) - Developer D

**User Story 4 must wait** for US1, US2, US3 to establish content structure

**User Story 6 mobile optimization** should be integrated throughout

---

## Parallel Example: Multiple User Stories

```bash
# After Foundational phase completes, launch user stories in parallel:

# Developer A: User Story 1 - Prospective Parent Discovery
Tasks: T037-T057 (homepage, about, join, contact pages)

# Developer B: User Story 2 - Current Member Communication
Tasks: T058-T083 (calendar, events, announcements)

# Developer C: User Story 3 - Child Engagement
Tasks: T084-T108 (galleries, photos, ranks/badges)

# Developer D: User Story 5 - Resources
Tasks: T133-T155 (resources page, downloads, Google Drive)

# After US1, US2, US3 complete:
# Developer A: User Story 4 - Content Management
Tasks: T109-T132 (Netlify CMS configuration)

# Throughout all phases:
# QA/Designer: User Story 6 - Mobile Optimization
Tasks: T156-T179 (mobile testing and refinement)
```

---

## Implementation Strategy

### MVP First (User Stories 1 + 2 Only)

1. Complete Phase 1: Setup (T001-T017)
2. Complete Phase 2: Foundational (T018-T036) - CRITICAL blocker
3. Complete Phase 3: User Story 1 (T037-T057) - Prospective parent discovery
4. Complete Phase 4: User Story 2 (T058-T083) - Current member communication
5. **STOP and VALIDATE**: Test US1 + US2 independently
6. Deploy MVP to production - core marketing and communication functions live!

**MVP Delivers**:

- Prospective parents can find pack and contact (SC-001, SC-002)
- Current families can view events and announcements (SC-003)
- Basic mobile functionality (partial US6)

### Incremental Delivery

1. **Foundation**: Setup + Foundational → Base site ready
2. **MVP Launch**: Add US1 + US2 → Deploy/Demo (marketing + communication)
3. **Engagement**: Add US3 → Deploy (child-friendly content)
4. **Sustainability**: Add US4 → Deploy (pack leader content management)
5. **Self-Service**: Add US5 → Deploy (resources and downloads)
6. **Mobile Polish**: Complete US6 → Deploy (optimized mobile experience)
7. **Production Ready**: Complete Polish → Final launch

Each increment adds value without breaking previous functionality.

### Parallel Team Strategy (Fast Track)

With 4 developers after Foundational phase completes:

1. **Week 1**: Team completes Setup + Foundational together
2. **Week 2-3**: Parallel development
   - Dev A: User Story 1 (T037-T057)
   - Dev B: User Story 2 (T058-T083)
   - Dev C: User Story 3 (T084-T108)
   - Dev D: User Story 5 (T133-T155)
   - QA: Mobile testing (partial US6)
3. **Week 4**: Integration
   - Dev A: User Story 4 (T109-T132) - needs US1-3 complete
   - All: User Story 6 finalization (T156-T179)
4. **Week 5**: Polish phase (T180-T215)

**Timeline**: 5 weeks with parallel team, 8-10 weeks with sequential development

---

## Success Metrics Mapping

Tasks mapped to Success Criteria from spec.md:

- **SC-001** (30 second discovery): T037-T049 (US1 homepage and info architecture)
- **SC-002** (25% inquiry increase): T043-T046 (US1 contact form), T048 (clickable contact)
- **SC-003** (90% monthly checks): T058-T076 (US2 calendar and announcements)
- **SC-004** (<5 min content creation): T109-T125 (US4 Netlify CMS)
- **SC-005** (<2s load, <4s mobile): T166, T177, T183, T190-T191 (performance optimization)
- **SC-006** (search ranking): T032-T033, T185 (SEO optimization)
- **SC-007** (60% mobile traffic): T156-T179 (US6 mobile optimization)
- **SC-008** (95% response rate): Process metric, enabled by T043-T046 (contact form)
- **SC-009** (zero accessibility complaints): T056, T082, T107, T188-T189, T199-T200 (WCAG testing)
- **SC-010** (weekly content updates): T109-T132 (US4 CMS enables sustainability)
- **SC-011** (40% session duration increase): T084-T101 (US3 engaging content)
- **SC-012** (80% parent satisfaction): Post-launch survey (T213)

---

## Notes

- **[P]** tasks = different files, no dependencies, can run in parallel
- **[Story]** label (US1-US6) maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Manual acceptance testing per constitution adaptation for static sites
- Commit after each task or logical group
- Stop at checkpoints to validate story independently before proceeding
- Focus on MVP (US1 + US2) first for fastest time-to-value
- Static site = no backend tests, focus on accessibility, performance, integration testing
- All 215 tasks map to 42 functional requirements and 6 user stories

**Total Task Count**: 215 tasks

- Phase 1 Setup: 17 tasks
- Phase 2 Foundational: 19 tasks (BLOCKING)
- Phase 3 US1: 21 tasks (P1 MVP)
- Phase 4 US2: 26 tasks (P1 MVP)
- Phase 5 US3: 25 tasks (P2)
- Phase 6 US4: 24 tasks (P2)
- Phase 7 US5: 23 tasks (P3)
- Phase 8 US6: 24 tasks (P2)
- Phase 9 Polish: 36 tasks

**Suggested MVP Scope**: Phases 1-4 (83 tasks) = US1 + US2 for core marketing and communication
