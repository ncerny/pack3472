# Quickstart: Pack 3472 Website Development

**Date**: 2025-10-26  
**Feature**: Pack 3472 Cub Scout Website Redesign  
**Purpose**: Get developers up and running quickly

## Prerequisites

- Git installed
- Ruby 3.1+ (for Jekyll)
- Bundler gem (`gem install bundler`)
- Node.js 16+ and npm (for build tools)
- Text editor (VS Code recommended)
- GitHub account with repository access

---

## Quick Setup (5 Minutes)

### 1. Clone Repository

```bash
git clone https://github.com/pack3472/pack3472.org.git
cd pack3472.org
```

### 2. Install Dependencies

```bash
# Install Ruby dependencies
bundle install

# Install Node dependencies (if using npm)
npm install
```

###3. Configure

```bash
# Copy example config
cp _config.example.yml _config.yml

# Edit with your settings
nano _config.yml
```

**Required Config**:

```yaml
title: 'Pack 3472'
email: info@pack3472.org
baseurl: ''
url: 'http://localhost:4000' # Development
google_calendar_id: 'YOUR_CALENDAR_ID@group.calendar.google.com'
```

### 4. Run Development Server

```bash
bundle exec jekyll serve --livereload
```

**Access**: http://localhost:4000

**Live Reload**: Changes auto-refresh browser

---

## Project Structure

```
pack3472.org/
├── _config.yml           # Site configuration
├── _data/               # Data files (YAML/JSON)
│   ├── pack-info.yml
│   ├── leaders.yml
│   ├── dens.yml
│   └── resources.yml
├── _events/             # Event collection (Markdown)
├── _posts/              # Announcements (Markdown)
├── _layouts/            # Page templates
├── _includes/           # Reusable components
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── pages/               # Site pages
│   ├── index.md
│   ├── about.md
│   ├── calendar.md
│   ├── join.md
│   └── resources.md
├── admin/               # Netlify CMS
│   ├── index.html
│   └── config.yml
└── Gemfile              # Ruby dependencies
```

---

## Common Tasks

### Create New Event

```bash
# Create file: _events/YYYY-MM-DD-event-slug.md
```

```yaml
---
title: 'Pack Meeting - November'
date: 2024-11-05
start_time: '6:30 PM'
end_time: '7:30 PM'
event_type: 'pack_meeting'
location:
  name: 'Lincoln Elementary School'
  address: '123 Main St'
---
Monthly pack meeting. All ranks attend!
```

### Create New Announcement

```bash
# Create file: _posts/YYYY-MM-DD-title.md
```

```yaml
---
title: 'Pack Meeting Cancelled - Weather'
date: 2024-11-05
categories: [announcement]
priority: high
---
Tonight's meeting is cancelled due to weather.
Stay safe and see you next week!
```

### Update Pack Information

Edit `_data/pack-info.yml`:

```yaml
meeting_info:
  day: 'Tuesday'
  time: '6:30 PM - 7:30 PM'
contact:
  email: 'info@pack3472.org'
  phone: '(555) 123-4567'
```

### Add Resource/Document

Edit `_data/resources.yml`:

```yaml
resources:
  - category: 'forms'
    title: 'New Permission Slip'
    file_url: 'https://drive.google.com/file/d/FILE_ID/view'
    file_type: 'PDF'
    updated_date: 2024-11-01
```

---

## Styling

### CSS Organization

```
assets/css/
├── main.scss           # Main stylesheet (imports all)
├── _variables.scss     # Colors, fonts, spacing
├── _base.scss          # Base styles, resets
├── _layout.scss        # Layout, grid
├── _components/        # Component styles
│   ├── _header.scss
│   ├── _footer.scss
│   ├── _buttons.scss
│   └── _cards.scss
└── _pages/            # Page-specific styles
    ├── _home.scss
    └── _calendar.scss
```

### Theme Colors

```scss
// _variables.scss
$primary: #003f87; // BSA Blue
$secondary: #fdb913; // Gold
$accent: #ce1126; // BSA Red
```

---

## Testing

### Run Accessibility Tests

```bash
npm run test:a11y
```

### Check HTML Validity

```bash
bundle exec htmlproofer ./_site --disable-external
```

### Test Responsive Design

- Chrome DevTools: Toggle device toolbar (Cmd+Shift+M)
- Test on: iPhone SE, iPad, Desktop

---

## Building for Production

### Build Site

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

### Output

- Generated files: `_site/` directory
- Ready to deploy to GitHub Pages or Firebase

---

## Deployment

### GitHub Pages (Automatic)

```bash
git add .
git commit -m "Update content"
git push origin main
```

**GitHub Actions automatically**:

1. Builds site
2. Runs tests
3. Deploys to GitHub Pages
4. Site live at https://pack3472.org

### Manual Firebase Deploy

```bash
firebase deploy --only hosting
```

---

## Content Management (Netlify CMS)

### Access CMS

1. Go to https://pack3472.org/admin/
2. Sign in with GitHub
3. Edit content via web interface

### CMS Features

- **Events**: Create/edit events
- **Announcements**: Create/edit posts
- **Resources**: Update document links
- **Media**: Upload images
- **Draft/Publish**: Editorial workflow

---

## Troubleshooting

### Jekyll Won't Start

**Error**: "Could not find gem..."

```bash
bundle install
```

**Error**: Port 4000 in use

```bash
bundle exec jekyll serve --port 4001
```

### Calendar Not Loading

- Check `google_calendar_id` in `_config.yml`
- Verify calendar is public
- Clear browser cache

### Images Not Showing

- Check path (relative to site root)
- Verify file exists in `assets/images/`
- Check file name case-sensitive

---

## Development Workflow

1. **Pull Latest**:

   ```bash
   git pull origin main
   ```

2. **Create Branch** (optional):

   ```bash
   git checkout -b update-content
   ```

3. **Make Changes**:

   - Edit files
   - Check in browser (http://localhost:4000)

4. **Test**:

   ```bash
   bundle exec jekyll build
   npm run test
   ```

5. **Commit & Push**:

   ```bash
   git add .
   git commit -m "Descriptive message"
   git push origin main
   ```

6. **Auto-Deploy**: GitHub Actions deploys to live site

---

## Key Commands Reference

| Command                                 | Purpose                 |
| --------------------------------------- | ----------------------- |
| `bundle exec jekyll serve`              | Start dev server        |
| `bundle exec jekyll build`              | Build production site   |
| `bundle exec jekyll serve --livereload` | Auto-refresh on changes |
| `bundle exec jekyll serve --drafts`     | Preview draft posts     |
| `bundle exec jekyll clean`              | Remove built files      |
| `bundle install`                        | Install/update gems     |
| `npm run test`                          | Run all tests           |
| `npm run test:a11y`                     | Accessibility tests     |

---

## Resources

### Documentation

- **Jekyll**: https://jekyllrb.com/docs/
- **Liquid**: https://shopify.github.io/liquid/
- **Netlify CMS**: https://decapcms.org/docs/
- **GitHub Pages**: https://docs.github.com/pages

### Pack 3472 Specific

- **GitHub Repo**: https://github.com/pack3472/pack3472.org
- **Live Site**: https://pack3472.org
- **CMS Admin**: https://pack3472.org/admin/
- **Google Calendar**: [Pack calendar link]
- **Google Drive**: [Public documents folder]

### Support

- **Technical Issues**: webmaster@pack3472.org
- **Content Questions**: cubmaster@pack3472.org
- **Bug Reports**: GitHub Issues

---

## Next Steps

1. ✅ Set up development environment
2. ✅ Run site locally
3. → Customize theme and colors
4. → Add pack-specific content
5. → Configure Google integrations
6. → Set up Netlify CMS
7. → Deploy to production
8. → Train pack leaders on CMS

**Ready to develop!** 🚀

---

## Quick Reference

**Start working**:

```bash
cd pack3472.org
bundle exec jekyll serve --livereload
# Open http://localhost:4000
```

**Update content**:

1. Edit markdown files
2. Changes auto-reload
3. Commit when ready
4. Push to deploy

**Need help?**: See full documentation in `/docs/` directory
