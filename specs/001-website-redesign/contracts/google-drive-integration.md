# Google Drive Integration Contract

**Date**: 2025-10-26  
**Feature**: Pack 3472 Website - Document Storage & Sharing  
**Purpose**: Define integration for Google Drive documents, forms, and resources

## Overview

Pack 3472 uses Google Drive to store and share pack documents, forms, handbooks, and other resources. The website will link to these documents for download/viewing.

---

## Google Drive Folder Structure

### Public Folder Organization

```
Pack 3472 Public Documents/
├── Forms/
│   ├── Permission Slips/
│   │   ├── Campout Permission Slip.pdf
│   │   ├── Field Trip Permission.pdf
│   │   └── Swimming Permission.pdf
│   ├── Registration/
│   │   ├── New Scout Registration Form.pdf
│   │   └── Youth Protection Acknowledgment.pdf
│   └── Medical/
│       └── Medical Form (link to BSA form).pdf
├── Handbooks/
│   ├── Pack 3472 Parent Guide.pdf
│   ├── Pack Bylaws.pdf
│   └── Leader Handbook.pdf
├── Calendars/
│   ├── 2024-2025 Pack Calendar.pdf
│   └── 2024-2025 Pack Calendar.ics
├── Fundraising/
│   ├── Popcorn Order Form.pdf
│   └── Fundraising Guidelines.pdf
└── Resources/
    ├── BSA Resources (links to external).md
    ├── Uniform Guide.pdf
    └── Rank Requirements Checklist.pdf
```

### Private Folder (Not Linked from Website)

```
Pack 3472 Private/
├── Treasurer/
├── Advancement Records/
├── Meeting Minutes/
└── Leader Resources/
```

---

## Sharing Permissions

### Public Documents Folder

**Permission Level**: "Anyone with the link can view"

**Settings**:

- Sharing: Link sharing ON
- Access: Viewer
- Prevent downloads: NO (users need to download forms)
- Restrict to domain: NO (open to public)

**How to Set**:

1. Right-click folder → Share
2. Change to "Anyone with the link"
3. Set role to "Viewer"
4. Copy link
5. Click "Done"

### Individual File Sharing

**Each file inherits folder permissions** OR **set individually**:

1. Right-click file → Share
2. "Anyone with the link" → "Viewer"
3. Copy link
4. Use link on website

---

## Link Formats

### Folder Link

```
https://drive.google.com/drive/folders/FOLDER_ID?usp=sharing
```

### File View Link (Recommended)

```
https://drive.google.com/file/d/FILE_ID/view?usp=sharing
```

### File Download Link (Direct Download)

```
https://drive.google.com/uc?export=download&id=FILE_ID
```

### File Preview Link (Embedded)

```
https://drive.google.com/file/d/FILE_ID/preview
```

---

## Website Integration

### Resources Page Implementation

**Jekyll Data File** (`_data/resources.yml`):

```yaml
resources:
  - category: 'forms'
    title: 'Campout Permission Slip'
    description: 'Required for all overnight campouts. Please complete and bring to event.'
    file_url: 'https://drive.google.com/file/d/FILE_ID/view'
    file_type: 'PDF'
    file_size: '250 KB'
    updated_date: 2024-09-01
    icon: 'file-pdf'

  - category: 'forms'
    title: 'Field Trip Permission'
    description: 'Required for day trips and off-site activities.'
    file_url: 'https://drive.google.com/file/d/FILE_ID/view'
    file_type: 'PDF'
    file_size: '180 KB'
    updated_date: 2024-09-01
    icon: 'file-pdf'
```

**Resources Page Template**:

```html
<!-- resources.html -->
<div class="resources-page">
  <h1>Resources & Downloads</h1>

  {% assign categories = site.data.resources | group_by: "category" %} {% for
  category in categories %}
  <section class="resource-category">
    <h2>{{ category.name | capitalize }}</h2>

    <div class="resource-grid">
      {% for resource in category.items %}
      <div class="resource-card">
        <div class="resource-icon">
          <i class="icon-{{ resource.icon }}"></i>
        </div>
        <div class="resource-info">
          <h3>{{ resource.title }}</h3>
          <p>{{ resource.description }}</p>
          <p class="resource-meta">
            {{ resource.file_type }} • {{ resource.file_size }} {% if
            resource.updated_date %} • Updated {{ resource.updated_date | date:
            "%B %Y" }} {% endif %}
          </p>
        </div>
        <div class="resource-actions">
          <a
            href="{{ resource.file_url }}"
            target="_blank"
            rel="noopener"
            class="button button-primary"
          >
            View / Download
          </a>
        </div>
      </div>
      {% endfor %}
    </div>
  </section>
  {% endfor %}
</div>
```

---

### Embedding PDF Preview (Optional)

**Direct Embed**:

```html
<div class="pdf-embed">
  <iframe
    src="https://drive.google.com/file/d/FILE_ID/preview"
    width="100%"
    height="600"
    frameborder="0"
    allow="autoplay"
  >
  </iframe>
</div>
```

**Best for**: Viewing documents inline (handbooks, calendars)

**Not recommended for**: Forms (better to download and fill)

---

### Download Button Styles

**HTML**:

```html
<a
  href="https://drive.google.com/file/d/FILE_ID/view"
  target="_blank"
  rel="noopener noreferrer"
  class="download-button"
  download
>
  <svg class="icon" width="20" height="20">
    <use xlink:href="#icon-download"></use>
  </svg>
  <span>Download Permission Slip (PDF, 250 KB)</span>
</a>
```

**CSS**:

```css
.download-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.2s;
}

.download-button:hover {
  background: var(--primary-dark);
}

.download-button .icon {
  flex-shrink: 0;
}
```

---

## Event Pages - Linking Required Forms

**Event Front Matter**:

```yaml
---
title: 'Fall Campout 2024'
date: 2024-10-15
required_forms:
  - title: 'Campout Permission Slip'
    url: 'https://drive.google.com/file/d/FILE_ID/view'
    file_type: 'PDF'
  - title: 'Medical Form'
    url: 'https://drive.google.com/file/d/FILE_ID/view'
    file_type: 'PDF'
---
```

**Event Template**:

```html
{% if page.required_forms.size > 0 %}
<section class="event-forms">
  <h2>Required Forms</h2>
  <p>Please complete and bring these forms to the event:</p>
  <ul class="form-list">
    {% for form in page.required_forms %}
    <li>
      <a href="{{ form.url }}" target="_blank" rel="noopener">
        {{ form.title }} ({{ form.file_type }})
      </a>
    </li>
    {% endfor %}
  </ul>
</section>
{% endif %}
```

---

## Google Forms Integration

### Contact Form

**Form Setup**:

1. Create Google Form in Drive
2. Add fields:
   - Name (required)
   - Email (required, validated)
   - Phone (optional)
   - Scout's Name (optional)
   - Scout's Age/Grade (optional)
   - Message (required, paragraph)
3. Set up email notifications
4. Configure auto-response
5. Get shareable link

**Link Form from Website**:

```html
<div class="contact-section">
  <h2>Get in Touch</h2>
  <p>Questions about joining Pack 3472? We'd love to hear from you!</p>

  <a
    href="https://forms.gle/FORM_SHORT_ID"
    class="button button-primary"
    target="_blank"
  >
    Contact Us
  </a>

  <!-- OR embed the form -->
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
</div>
```

**Form Response Handling**:

1. Responses go to Google Sheet
2. Email notification to pack leaders (configure in form settings)
3. Auto-response thanks the submitter
4. Pack leader follows up within 48 hours

---

## Folder Link in Footer

**Quick Access to All Documents**:

```html
<footer class="site-footer">
  <div class="footer-links">
    <a
      href="https://drive.google.com/drive/folders/PUBLIC_FOLDER_ID"
      target="_blank"
    >
      All Pack Documents
    </a>
  </div>
</footer>
```

---

## File Naming Conventions

### Best Practices

**Format**: `Document-Title-YYYY-MM-DD.extension`

**Examples**:

- ✅ `Campout-Permission-Slip-2024-09-01.pdf`
- ✅ `Pack-Calendar-2024-2025.pdf`
- ✅ `Parent-Guide-2024-Updated.pdf`
- ❌ `form.pdf` (not descriptive)
- ❌ `Permission Slip (1).pdf` (spaces, duplicates)

**Guidelines**:

- Use hyphens (not spaces or underscores)
- Include date if document updates regularly
- Be descriptive
- Avoid special characters
- Keep under 50 characters if possible

---

## Version Control

### Updating Documents

**Process**:

1. Create new version of document
2. Upload to Drive (replaces old file)
3. Google Drive maintains same file ID (links don't break!)
4. Update `updated_date` in `_data/resources.yml`
5. Commit and deploy website

**OR**:

1. Delete old file, upload new file (new file ID)
2. Get new share link
3. Update `file_url` in `_data/resources.yml`
4. Update `updated_date`
5. Commit and deploy

**Recommendation**: Replace file (Option 1) to maintain consistent links

---

## Security & Privacy

### Public vs. Private

**Safe for public Drive folder**:

- Permission slips (blank forms)
- Registration forms (blank)
- Handbooks and guides
- Calendar (no personal info)
- Fundraising materials
- Generic resources

**Never in public folder**:

- Completed forms with scout info
- Financial records
- Advancement records
- Meeting minutes (may contain sensitive discussions)
- Leader personal information
- Email lists with addresses

### Youth Protection

**Forms Must**:

- Be blank templates only
- Never include pre-filled scout names
- Never include roster information
- Include privacy notice if collecting data

**Documents Must**:

- Use first names only or "scouts"
- No photos with full names
- No home addresses or phone numbers

---

## Accessibility

### PDF Requirements

**All PDFs must be**:

- Text-based (not scanned images) OR OCR'd
- Tagged for screen readers
- Have proper heading structure
- Include alt text for images
- Have fillable form fields (if applicable)

**Creating Accessible PDFs**:

1. Start with accessible source (Word doc with headings)
2. Export to PDF with tags
3. Use Adobe Acrobat to add form fields
4. Add alternative descriptions
5. Test with screen reader

**Alternative**: Provide Word doc version alongside PDF

---

## Monitoring & Maintenance

### Weekly

- Check that all links work (no 404s)
- Verify new documents are accessible
- Review recent uploads for naming consistency

### Monthly

- Audit folder organization
- Remove outdated documents (or move to archive)
- Update dates on revised documents
- Check permissions haven't changed

### Quarterly

- Review all public documents for accuracy
- Update handbooks and guides
- Verify compliance with youth protection

### Annually

- Complete content audit
- Archive previous year's calendars
- Update all year-specific forms
- Review folder structure for improvements

---

## Error Handling

### Link Doesn't Work

**Possible Causes**:

- File deleted or moved
- Permissions changed to private
- File ID incorrect
- User doesn't have Google account (if restricted)

**Solutions**:

- Verify file exists in Drive
- Check sharing settings
- Re-copy link if file moved
- Update website with correct link

**Fallback Message**:

```html
<p class="resource-error">
  Unable to access this document?
  <a href="mailto:info@pack3472.org">Contact us</a>
  and we'll send it directly.
</p>
```

---

## Testing Checklist

- [ ] All resource links open correctly
- [ ] Links open in new tab (target="\_blank")
- [ ] Files can be downloaded
- [ ] PDF preview works (if embedded)
- [ ] File permissions are "Anyone with link can view"
- [ ] No personal information in public folder
- [ ] File sizes listed accurately
- [ ] Updated dates reflect actual updates
- [ ] Mobile users can access files
- [ ] Google Forms submit successfully
- [ ] Form responses reach pack leaders
- [ ] Auto-responses sent to form submitters

---

## Future Enhancements

**Phase 2 Possibilities**:

- Automatic resource sync (Drive API)
- Version history display
- Search across all documents
- Document preview before download
- Categorized search/filters
- Download statistics tracking

---

## Documentation for Pack Leaders

### Quick Guide: Adding a New Document

1. **Upload to Google Drive**:

   - Go to [drive.google.com](https://drive.google.com)
   - Navigate to "Pack 3472 Public Documents"
   - Navigate to appropriate subfolder
   - Click "New" → "File upload"
   - Select your file
   - Wait for upload to complete

2. **Set Sharing**:

   - Right-click uploaded file
   - Click "Share"
   - Change to "Anyone with the link"
   - Set role to "Viewer"
   - Click "Copy link"
   - Click "Done"

3. **Add to Website**:

   - Go to Netlify CMS
   - Navigate to "Resources" data
   - Click "Add Resource"
   - Fill in:
     - Title: Document name
     - Description: What it's for
     - File URL: Paste Google Drive link
     - File Type: PDF, DOC, etc.
     - File Size: Check in Drive
     - Category: Choose from list
     - Updated Date: Today's date
   - Click "Save" and "Publish"

4. **Verify**:
   - Visit pack website resources page
   - Find your document
   - Click link to test
   - Confirm file opens correctly

**That's it!** The document is now available on the website.

---

## Support

**Issues?**

- **Can't access file**: Check sharing settings
- **Wrong file displayed**: Verify file ID in link
- **File won't download**: Check browser settings, try different browser
- **Need to update file**: Upload new version, get new link if ID changed

**Questions?**
Contact: webmaster@pack3472.org
