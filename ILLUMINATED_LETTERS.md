# Illuminated Manuscript Letters Resources

## Using Actual Illuminated Letter Images

For the most authentic look, you can replace the text-based initial letters with actual images of illuminated manuscript letters. Here are some resources:

### Free Resources:
1. **Karen's Whimsy Collections** - Free illuminated letters from historical manuscripts:
   - A-F: https://karenswhimsy.com/illuminated-letters/
   - G-L: https://karenswhimsy.com/illuminated-manuscript-letters/
   - S-Z: https://karenswhimsy.com/illuminated-lettering/

2. **Public Domain Manuscripts** - Many libraries offer high-resolution images:
   - British Library Digital Collections
   - Library of Congress Medieval Manuscripts
   - Digital Scriptorium

### How to Use Images:

Replace the initial letter span with an image:

```html
<span class="initial-wrapper initial-blue-wrapper">
    <span class="fleur-de-lis fleur-top-left">⚜</span>
    <span class="fleur-de-lis fleur-top-right">⚜</span>
    <span class="fleur-de-lis fleur-bottom-left">⚜</span>
    <span class="fleur-de-lis fleur-bottom-right">⚜</span>
    <img src="illuminated-O.png" alt="O" class="initial-letter-image" />
    <div class="initial-decoration"></div>
</span>
```

Then add this CSS:

```css
.initial-letter-image {
    width: 90px;
    height: auto;
    display: block;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
}
```

### Web Fonts for Illuminated Letters:

While not as authentic as images, these fonts can work:
- **Cinzel** (currently used) - Classical Roman style
- **Uncial** fonts - Medieval script style
- **Blackletter/Gothic** fonts - Medieval text style

### SVG-Based Letters:

You can also create custom SVG letters for a scalable solution that maintains the illuminated manuscript aesthetic.




