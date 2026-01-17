# Pages CMS Guide for Blazing Star Therapy

This guide explains how to use Pages CMS to edit your website content easily.

## What is Pages CMS?

Pages CMS is a content management system that connects to your GitHub repository and allows you to edit content through a web interface without needing to write code.

## Getting Started

1. **Connect Your Repository**
   - Go to https://app.pagescms.org
   - Connect your repository: `yesmannow/eads-private-practice-site`
   - Select the `main` branch

2. **Access the CMS**
   - Once connected, you'll see a dashboard with all editable content
   - The `.pages.yml` file defines what you can edit

## What You Can Edit

### Site Settings (`Site Settings`)
Edit global site information:
- Site name and tagline
- Contact information (phone, email, location)
- Office hours
- Insurance information
- Professional credentials
- Call-to-action buttons

**Location:** `content/site-settings.json`

### Navigation Menu (`Navigation Menu`)
Add, remove, or reorder menu items:
- Menu item labels
- URL paths

**Location:** `content/navigation.json`

### Homepage (`Homepage`)
Edit the main landing page:
- Hero section (title, subtitle, background image)
- Feature cards (Why Choose Blazing Star Therapy)
- About preview section
- Call-to-action buttons

**Location:** `content/homepage.json`

### About Page (`About Page`)
Edit your personal story and practice information:
- Hero section
- Your story paragraphs
- Images for your story
- Blazing Star flower information

**Location:** `content/about-page.json`

### FAQs (`Frequently Asked Questions`)
Manage your frequently asked questions:
- Add new FAQs
- Edit existing questions and answers
- Organize by category (General, Fees, Services, etc.)
- Set display order

**Location:** `content/faqs/` (collection of files)

### Fees & Policies (`Fees & Policies`)
Update pricing and policy information:
- Session fees
- Insurance providers accepted
- Payment methods
- Cancellation policy
- Superbill information

**Location:** `content/fees-policies.json`

### Specialties (`Specialties & Services`)
Manage your service offerings:
- Add new specialties
- Edit descriptions
- Categorize services
- Add featured images

**Location:** `content/specialties/` (collection of files)

### Resources (`Resources`)
Create blog posts or resource articles:
- Write articles
- Add images
- Set publication dates
- Categorize content

**Location:** `content/resources/` (collection of files)

## Media Management

### Images
- Upload images to `public/images/`
- Organize by folders (e.g., `home page`, `about`, etc.)
- Supported formats: JPG, PNG, GIF, WebP, SVG

### Documents
- Upload PDFs and documents to `public/docs/`
- Accessible at `/docs/` on your website

## Tips for Editing

1. **Rich Text Editor**
   - Use the rich text editor for longer content
   - You can format text, add links, and insert images
   - Images uploaded here are automatically optimized

2. **Lists/Collections**
   - For items like FAQs or features, you can add/remove items
   - Drag to reorder items
   - Each item can be collapsed for easier management

3. **Required Fields**
   - Fields marked with * are required
   - You must fill these in before saving

4. **URL Slugs**
   - When creating FAQs or resources, use lowercase letters, numbers, and hyphens
   - Example: `consultation-offered` ✅
   - Example: `Consultation Offered!` ❌

5. **Saving Changes**
   - Click "Save" to save your changes
   - Changes are committed to your repository
   - Your site will rebuild automatically (if connected to a hosting service)

## Common Tasks

### Update Contact Information
1. Go to **Site Settings**
2. Find the **Contact Information** section
3. Update phone, email, or location
4. Click **Save**

### Add a New FAQ
1. Go to **Frequently Asked Questions**
2. Click **Add New**
3. Enter the question and answer
4. Choose a category
5. Set the display order (lower numbers appear first)
6. Click **Save**

### Update Homepage Hero
1. Go to **Homepage**
2. Find the **Hero Section**
3. Update title, subtitle, or background image
4. Click **Save**

### Change Navigation Menu
1. Go to **Navigation Menu**
2. Add, remove, or reorder menu items
3. Update labels and URLs
4. Click **Save**

## Need Help?

- **Pages CMS Documentation:** https://pagescms.org/docs
- **Configuration Reference:** The `.pages.yml` file in your repository root defines all editable content

## Important Notes

⚠️ **Backup First**: Before making major changes, consider creating a backup branch in GitHub.

⚠️ **Preview Changes**: Some hosting services (like Vercel) will create preview deployments for each change, allowing you to see changes before they go live.

⚠️ **File Format**: Content is stored as JSON files. Don't edit these files directly in GitHub unless you're comfortable with JSON syntax.

⚠️ **Images**: When uploading images, use descriptive filenames and appropriate sizes. Large images may slow down your site.

## Next Steps

After setting up Pages CMS, you may want to:
1. Update your Next.js site to read from the content files (if not already configured)
2. Test the CMS by making a small change
3. Train team members on how to use the CMS
4. Set up automatic deployments so changes go live automatically

---

**Last Updated:** This guide corresponds to the `.pages.yml` configuration file in your repository.
