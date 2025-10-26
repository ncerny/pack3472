# Pack 3472 Website - Setup Guide

This guide will help you set up the Pack 3472 website for local development.

## Prerequisites

Before you begin, ensure you have:

- **Git** installed ([download](https://git-scm.com/downloads))
- **Ruby** 3.1 or higher ([installation guide](https://www.ruby-lang.org/en/documentation/installation/))
- **Bundler** gem installed (`gem install bundler`)
- **Node.js** 16 or higher (optional, for linting) ([download](https://nodejs.org/))
- A **text editor** (VS Code, Sublime Text, etc.)

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/pack3472/pack3472.org.git
cd pack3472.org
```

### 2. Install Dependencies

```bash
bundle install
```

This installs Jekyll and all required gems.

### 3. Run the Development Server

```bash
bundle exec jekyll serve
```

The site will be available at: **http://localhost:4000**

The server will automatically rebuild when you make changes.

### 4. Open in Your Browser

Visit `http://localhost:4000` to see the site.

## Project Structure

```
pack3472.org/
├── _config.yml           # Jekyll configuration
├── _layouts/             # Page templates
├── _includes/            # Reusable components
├── _data/                # Pack info, leaders, dens (YAML)
├── _events/              # Event posts
├── _announcements/       # Announcement posts
├── _galleries/           # Photo galleries
├── assets/
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript
│   └── images/           # Images and logos
├── pages/                # Static pages
├── docs/                 # Documentation
└── admin/                # Netlify CMS admin interface
```

## Development Workflow

### Making Changes

1. **Edit files** in your text editor
2. **Save** the file
3. Jekyll automatically rebuilds
4. **Refresh** your browser to see changes

### Creating Content

#### Add an Event

Create a new file in `_events/`:

```markdown
---
layout: event
title: 'Spring Campout'
date: 2024-05-15
time: 'Friday 6:00 PM - Sunday 11:00 AM'
location: 'Camp Wilderness'
---

Pack 3472 is heading to Camp Wilderness for our spring campout!

**What to bring:**

- Tent and sleeping bag
- Warm clothes
- Water bottle
- Flashlight
```

#### Add an Announcement

Create a new file in `_announcements/`:

```markdown
---
layout: announcement
title: 'Pack Meeting This Tuesday'
date: 2024-04-20
priority: high
---

Don't forget: Pack meeting this Tuesday at 6:30 PM!
```

#### Update Pack Information

Edit `_data/pack-info.yml`:

```yaml
pack_number: 3472
meeting_info:
  day: 'Tuesday'
  time: '6:30 PM - 7:30 PM'
contact:
  email: 'info@pack3472.org'
  phone: '(555) 123-4567'
```

### Testing

#### Build the Site

```bash
bundle exec jekyll build
```

Output goes to `_site/` directory.

#### Check for Errors

```bash
bundle exec jekyll doctor
```

#### Validate HTML

```bash
bundle exec htmlproofer ./_site --disable-external
```

## Deploying

### To GitHub Pages

1. **Commit your changes:**

   ```bash
   git add .
   git commit -m "Update pack information"
   ```

2. **Push to GitHub:**

   ```bash
   git push origin main
   ```

3. **GitHub Actions** automatically builds and deploys

4. **Live in 2-3 minutes** at pack3472.org

### Manual Deploy

If you need to deploy manually:

```bash
bundle exec jekyll build
# Upload _site/ contents to your hosting provider
```

## Common Commands

| Command                                 | Purpose                |
| --------------------------------------- | ---------------------- |
| `bundle exec jekyll serve`              | Run development server |
| `bundle exec jekyll build`              | Build production site  |
| `bundle exec jekyll serve --drafts`     | Preview draft posts    |
| `bundle exec jekyll serve --livereload` | Auto-reload browser    |
| `bundle exec jekyll clean`              | Clean build cache      |

## Configuration

### Site Settings

Edit `_config.yml` to change:

- Site title and description
- Contact email
- Social media links
- Plugin settings

**Note:** After changing `_config.yml`, restart the server.

### Custom Domain

1. Create `CNAME` file in project root
2. Add your domain: `pack3472.org`
3. Configure DNS with your registrar
4. Enable HTTPS in GitHub Pages settings

## Troubleshooting

### "Jekyll command not found"

Install Jekyll:

```bash
gem install jekyll bundler
```

### "Port 4000 already in use"

Kill the process:

```bash
kill -9 $(lsof -ti:4000)
```

Or use a different port:

```bash
bundle exec jekyll serve --port 4001
```

### "Bundle install fails"

Update RubyGems:

```bash
gem update --system
```

Then try again:

```bash
bundle install
```

### "Changes not showing"

1. Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
2. Clear Jekyll cache: `bundle exec jekyll clean`
3. Restart server

### "Sass compilation error"

Check your SCSS files for syntax errors.

Common issues:

- Missing semicolons
- Unclosed brackets
- Invalid property names

## Getting Help

- **Jekyll Docs**: https://jekyllrb.com/docs/
- **Ruby Docs**: https://www.ruby-lang.org/en/documentation/
- **GitHub Issues**: Report bugs in the repository
- **Pack Webmaster**: [webmaster@pack3472.org]

## Next Steps

- Read the [Admin Guide](./ADMIN-GUIDE.md) for content management
- Check the [Deployment Guide](./DEPLOYMENT.md) for production setup
- Review [Contributing Guidelines](../CONTRIBUTING.md) if making code changes

---

Happy developing! 🚀
