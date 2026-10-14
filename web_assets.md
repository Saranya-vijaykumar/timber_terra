### Web Deployment Assets Generated for Timber & Terra

I have generated the production-ready web deployment assets for **Timber & Terra**, using the architectural design system and reference screens:

---

### Assets Created:

1. **Favicon & PWA App Icon** (`favicon.ico` / `favicon-192.png` / `favicon-512.png`)
   - **Visual Direction:** A crisp, minimalist monogram pairing the dual "T&T" glyphs with clean architectural joinery accents in warm timber gold and stone cream, set against a full-bleed deep forest green (`#183d32`) canvas.
   - **Optimization:** Designed with high contrast and legible geometry engineered to remain sharp at small tab sizes (16×16, 32×32) and scalable for PWA home screen badges.

2. **Apple Touch Icon** (`apple-touch-icon.png`, 180×180)
   - **Visual Direction:** An elevated architectural seal combining the interlocking timber monogram with refined structural framing vectors and warm metallic gold linework on a solid `#183d32` background.
   - **iOS Specifications:** Full-bleed continuous background without pre-rounded borders, allowing iOS to apply its native squircle corner mask cleanly without clipping or unwanted padding.

3. **Web App Manifest** (`manifest.json`)
   - **Document Artifact:** Stored and available on the workspace canvas.
   - **Configuration:**
     - Theme and background colors mapped to brand forest green (`#183d32`).
     - Standalone PWA display mode with portrait-primary orientation.
     - Icon declarations for 192×192, 512×512 (any/maskable), and 180×180 Apple touch icons.
     - Quick-access app shortcuts for **Services**, **Project Gallery**, **Pricing Guide**, and **Book Consultation**.

---

### Integration Snippet for `<head>`:

```html
<!-- Favicons & App Icons -->
<link rel="icon" type="image/png" sizes="32x32" href="/assets/brand/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/brand/favicon-16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/brand/apple-touch-icon.png">

<!-- Web Manifest & Theme -->
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#183d32">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```