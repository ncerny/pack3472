# Deployment Guide - Pack 3472 Website

This guide explains how to deploy the Pack 3472 website to production.

## Deployment Options

### Option 1: GitHub Pages (Recommended)

**Cost**: Free  
**Difficulty**: Easy  
**Build Time**: 2-3 minutes

#### Initial Setup

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - Save

2. **Configure Custom Domain** (optional)
   - Add `CNAME` file to repository root:
     ```
     pack3472.org
     ```
   - In GitHub Settings → Pages:
     - Custom domain: `pack3472.org`
     - Check "Enforce HTTPS"

3. **DNS Configuration**
   At your domain registrar, add:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: pack3472.github.io
   ```

4. **Push to Deploy**
   ```bash
   git push origin main
   ```

5. **Check Deployment**
   - Go to repository → Actions tab
   - Watch the build progress
   - Site live in 2-3 minutes

### Option 2: Firebase Hosting

**Cost**: Free (up to 10GB/month)  
**Difficulty**: Medium  
**Build Time**: 1-2 minutes

#### Initial Setup

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Project**
   ```bash
   firebase init hosting
   ```
   
   Choose:
   - Public directory: `_site`
   - Single-page app: No
   - GitHub Actions: Yes

4. **Build Site**
   ```bash
   bundle exec jekyll build
   ```

5. **Deploy**
   ```bash
   firebase deploy
   ```

#### Custom Domain

1. In Firebase Console:
   - Go to Hosting → Custom domain
   - Add `pack3472.org`
   - Follow DNS instructions

2. Configure DNS at your registrar as instructed

### Option 3: Netlify

**Cost**: Free  
**Difficulty**: Easy  
**Build Time**: 1-2 minutes

#### Setup

1. **Connect Repository**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Connect GitHub account
   - Select `pack3472.org` repository

2. **Build Settings**
   - Build command: `jekyll build`
   - Publish directory: `_site`
   - Add environment variable:
     - Key: `JEKYLL_ENV`
     - Value: `production`

3. **Custom Domain**
   - Go to Domain settings
   - Add custom domain: `pack3472.org`
   - Follow DNS instructions

4. **Deploy**
   - Automatically deploys on `git push`
   - Can trigger manual deploys in Netlify dashboard

## Continuous Deployment

### GitHub Actions (Included)

The repository includes `.github/workflows/deploy.yml`:

**Triggers**:
- Push to `main` branch
- Push to `001-website-redesign` branch
- Manual workflow dispatch

**Process**:
1. Checkout code
2. Setup Ruby 3.1
3. Install dependencies
4. Build Jekyll site
5. Deploy to GitHub Pages

**Monitoring**:
- View in GitHub → Actions tab
- Get email on failures
- Build logs available

### Manual Deployment

If automated deployment fails:

```bash
# Build site locally
bundle exec jekyll build

# Verify build
ls _site/

# Push to hosting provider
# (method depends on provider)
```

## Pre-Deployment Checklist

Before deploying to production:

- [ ] All content reviewed and approved
- [ ] No broken links (`htmlproofer`)
- [ ] Lighthouse score > 90
- [ ] Accessibility tests pass (WAVE, axe)
- [ ] Mobile testing complete
- [ ] Cross-browser testing done
- [ ] Contact forms working
- [ ] Calendar integration tested
- [ ] Google Drive links verified
- [ ] SSL certificate enabled
- [ ] Custom domain configured
- [ ] Analytics configured (optional)
- [ ] Backups configured

## Environment Variables

### Production Settings

Set these in your deployment platform:

```bash
JEKYLL_ENV=production
BUNDLE_WITHOUT=development:test
```

### GitHub Pages
- Automatically set by GitHub Actions

### Firebase
- Configure in `.firebaserc` and `firebase.json`

### Netlify
- Set in Netlify dashboard → Build settings

## SSL/HTTPS

### GitHub Pages
- Automatically provided (Let's Encrypt)
- Enable in Settings → Pages → "Enforce HTTPS"

### Firebase
- Automatically provided (SSL certificate)
- Configured during domain setup

### Netlify
- Automatically provided (Let's Encrypt)
- Auto-renews certificates

## Deployment Verification

After deployment, verify:

1. **Homepage loads**
   - Visit https://pack3472.org
   - Check for errors in browser console

2. **All pages accessible**
   - Test navigation menu
   - Check events, announcements, gallery

3. **Forms working**
   - Submit test contact form
   - Verify email received

4. **External integrations**
   - Google Calendar embed visible
   - Resource links work
   - Maps integration functioning

5. **Performance**
   - Run Lighthouse audit
   - Check mobile speed

6. **Security**
   - SSL certificate valid
   - No mixed content warnings
   - HTTPS redirect working

## Rollback Procedure

If deployment has critical issues:

### GitHub Pages

```bash
# Revert last commit
git revert HEAD
git push origin main

# Or rollback to specific commit
git reset --hard <commit-hash>
git push origin main --force
```

### Firebase

```bash
# View release history
firebase hosting:releases:list

# Rollback to previous version
firebase hosting:rollback
```

### Netlify

- Go to Deploys tab
- Find previous working deploy
- Click "Publish deploy"

## Monitoring

### Uptime Monitoring

Free services:
- **UptimeRobot**: https://uptimerobot.com
- **Pingdom**: https://pingdom.com (free plan)
- **StatusCake**: https://statuscake.com

Setup:
1. Create account
2. Add monitor for `https://pack3472.org`
3. Set check frequency: 5 minutes
4. Add email alerts

### Performance Monitoring

- **Lighthouse CI**: Included in GitHub Actions
- **Google PageSpeed Insights**: Manual checks
- **WebPageTest**: Detailed analysis

### Error Tracking

Check regularly:
- GitHub Actions logs for build failures
- Browser console for JavaScript errors
- 404 pages in analytics

## Backup Strategy

### Automated Backups

Git repository is your backup:
- All content in version control
- Push to GitHub regularly
- Tag releases: `git tag v1.0.0`

### Additional Backups

1. **Export from Netlify CMS**
   - Content is in Git
   - Just pull repository

2. **Database Backup** (if using)
   - Not needed for static site

3. **Media Backup**
   - Download from Cloudinary
   - Or backup `assets/images/` directory

## Post-Deployment Tasks

After successful deployment:

1. **Announce Launch**
   - Email pack families
   - Post on social media
   - Share at pack meeting

2. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools

3. **Monitor First Week**
   - Check analytics daily
   - Review any error reports
   - Gather feedback

4. **Train Pack Leaders**
   - Schedule training session
   - Walk through Admin Guide
   - Answer questions

## Maintenance Schedule

### Weekly
- Review analytics
- Check for 404 errors
- Update content as needed

### Monthly
- Review site performance
- Update dependencies
- Check backup integrity

### Quarterly
- Full security audit
- Performance optimization
- Content review and cleanup

### Annually
- Renew domain
- Review hosting costs
- Major content refresh

## Troubleshooting

### "Build failed in GitHub Actions"

1. Check Actions tab for error message
2. Common causes:
   - YAML syntax error in content
   - Missing dependencies
   - Ruby version mismatch
3. Fix locally, test, then push

### "Site not updating after push"

1. Check GitHub Actions completed successfully
2. Clear browser cache (Ctrl+Shift+R)
3. Wait 5 minutes for CDN propagation

### "Custom domain not working"

1. Verify DNS settings (use `dig pack3472.org`)
2. Check SSL certificate status
3. Ensure CNAME file present in repo
4. Wait 24-48 hours for DNS propagation

### "SSL certificate error"

1. Disable and re-enable HTTPS in settings
2. Wait 24 hours for certificate provisioning
3. Contact platform support if persists

## Getting Help

- **GitHub Pages**: https://docs.github.com/pages
- **Firebase**: https://firebase.google.com/support
- **Netlify**: https://docs.netlify.com
- **Jekyll**: https://jekyllrb.com/docs/deployment/
- **Pack Webmaster**: [webmaster@pack3472.org]

---

**Congratulations!** Your Pack 3472 website is live! 🎉
