# Medieval Philosophy & Illuminated Manuscripts Website

A beautifully designed website inspired by authentic medieval illuminated manuscripts, featuring ornate borders, decorative elements, and the rich color palette of historical manuscripts.

---

## 📝 Quick Start Guide for Editing

**Welcome!** This guide will help you edit the website content easily. You don't need to know how to code - just follow these simple instructions.

### 🎯 What You Can Edit

1. **Your Bio** (`index.html`) - Your name, title, and bio text
2. **Publications** (`publications.html`) - Add, remove, or edit your publications
3. **CV** (`cv.html`) - Update the CV PDF file
4. **Footer** (`footer.html`) - Your contact info and links

### 📋 Step-by-Step Editing Guide

#### 1. Editing Your Bio (index.html)

1. Open `index.html` in any text editor (Notepad, VS Code, etc.)
2. Look for the comment at the top that says "EDITING INSTRUCTIONS"
3. Find these sections to edit:
   - **Your name**: Look for `JJ` and replace it with your name
   - **Your title**: Find "Researcher in Medieval Philosophy & Illuminated Manuscripts" and change it
   - **Bio text**: Replace all the "lorem ipsum" placeholder text with your actual bio
4. **Save the file** when done

**Important**: Only change the text content, not the HTML tags (the things in `< >` brackets).

#### 2. Adding/Editing Publications (publications.html)

1. Open `publications.html`
2. Each publication is in an `<article>` block
3. **To add a new publication**:
   - Copy an entire `<article>...</article>` block
   - Paste it before the closing `</div>` tag
   - Edit the title, journal, year, abstract, and links
4. **To remove a publication**: Delete the entire `<article>...</article>` block
5. **To edit**: Just change the text inside the tags

#### 3. Updating Your CV (cv.html)

1. Create your CV as a PDF file
2. Name it `cv.pdf` (or change the filename in `cv.html` if you use a different name)
3. Put the PDF file in the same folder as `cv.html`
4. The website will automatically display it

#### 4. Updating Footer/Contact Info (footer.html)

1. Open `footer.html`
2. Edit these sections:
   - **Email**: Change `mailto:jj@example.com` to your email
   - **Twitter**: Change the Twitter URL to your profile
   - **ORCID**: Change the ORCID URL to yours
   - **Copyright year**: Update the year
   - **Your name**: Change "JJ" to your name
3. **To add more links**: Copy an existing `<a>` tag and change the URL and text

### ⚠️ Important: What NOT to Edit

**DO NOT change:**
- Any class names (like `class="manuscript-inner"`)
- HTML tags or structure
- Files in the `<head>` section (except the title)
- `styles.css` or `script.js` files
- The navigation menu structure

### 🖼️ Adding Images/Media

**Note**: You can provide images/media files, but they should be added by someone with technical knowledge to ensure they're properly integrated.

### 💻 How to View Your Changes

1. After editing, save the file
2. Open the HTML file in a web browser (double-click it)
3. Refresh the page to see your changes

### 🚀 Publishing Your Changes

If this website is connected to GitHub:
1. Save your changes
2. Commit and push to GitHub (or ask for help with this step)
3. The website will automatically update

---

## 🎨 Design Features

- **Authentic parchment background** with aged paper texture and subtle variations
- **Ornate decorative borders** on all four sides with:
  - Acanthus leaf patterns in deep blues and greens
  - Terracotta/rust red accents
  - Gold bezants (decorative dots) scattered throughout
  - Floral elements and strawberry motifs
- **Ornate initial letters** styled like authentic manuscript initials:
  - Blue initials with gold outlines and red borders (like the 'O' in manuscripts)
  - Red initials with white and gold decoration (like the 'I' in manuscripts)
- **Illustration area** with multi-layered gold and colored borders
- **Rubrics** (red text) for special words and phrases
- **Rich authentic color palette**:
  - Deep indigo/ultramarine blues (#1a237e, #283593)
  - Terracotta/rust reds (#b71c1c, #c62828)
  - Forest/sage greens (#1b5e20, #2e7d32)
  - Gold accents (#D4AF37, #FFD700)
  - Creamy parchment tones
- **Responsive design** that adapts to all screen sizes
- **Subtle animations** on decorative elements

## Design Elements

The website authentically recreates key features of illuminated manuscripts:

1. **Four-Sided Ornate Borders**: Intricate floral and foliate patterns on all sides
2. **Ornate Initial Letters**: Large decorated drop caps with multiple colored borders
3. **Illustration Frame**: Multi-layered border frame for images (gold, red, blue)
4. **Gold Bezants**: Scattered gold dots throughout borders
5. **Foliage Patterns**: Acanthus leaves and floral motifs in manuscript colors
6. **Rubrics**: Red text for emphasis (traditional in manuscripts)
7. **Medieval Typography**: Cinzel for headings/initials, Cormorant Garamond for body text

## 🎨 Advanced Customization (For Technical Users)

### Adding Your Own Images
Replace the placeholder in the `.illustration-placeholder` div with your own image:
```html
<div class="illustration-placeholder">
    <img src="your-image.jpg" alt="Manuscript illustration" />
</div>
```

### Customizing Colors
Edit `styles.css` to adjust the color palette:
- Blues: `#1a237e`, `#283593`, `#0d47a1`
- Reds: `#b71c1c`, `#c62828`
- Greens: `#1b5e20`, `#2e7d32`
- Gold: `#D4AF37`, `#FFD700`
- Parchment: `#f5e6d3`, `#f0dfc8`

### Adding More Decorative Elements
You can add SVG patterns or images to the borders by modifying the `.border-foliage` classes in `styles.css`.

**Note**: Only edit `styles.css` if you're comfortable with CSS. For most users, editing the HTML files is sufficient.

## 💻 Technical Details

### Usage
Simply open `index.html` in a web browser. No build process or dependencies required - it's pure HTML, CSS, and JavaScript.

### File Structure
- `index.html` - Main bio page
- `publications.html` - Publications listing
- `cv.html` - CV/Resume page
- `footer.html` - Footer content (loaded dynamically)
- `styles.css` - All styling and design
- `script.js` - Interactive features and dynamic sizing
- `background.png` - The manuscript background image

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS gradients and modern features for the decorative effects.

## Inspiration

This design is based on authentic illuminated manuscripts from the medieval period, featuring the characteristic color palette, border decorations, and ornate initial letters found in historical manuscripts.

