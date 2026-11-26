# Wavecrest — Swimming Academy HTML Template

A responsive, multi-page HTML/CSS/JavaScript template for swimming academies serving children, teens and adults.

## Three distinct experiences

- **Public website:** energetic, image-led pages for programme discovery, coaches, facilities, schedules, enquiries and trial booking.
- **Member portal:** a swimmer-centred learning journey with enrolments, upcoming sessions, attendance, coach-assessed skill milestones, fees, messages and profile settings.
- **Admin workspace:** an operations-oriented interface for member, coach, programme, batch, enrolment, attendance, assessment, fee, messaging and reporting workflows.

The two dashboards intentionally do not share the same visual hierarchy or purpose. The member portal emphasizes the individual swimmer's progress; the admin workspace emphasizes operational records and actions.

## Run locally

1. Extract the project folder.
2. Open `index.html` in a modern browser, or serve the folder with a local static server (recommended for consistent browser behavior).
3. Use the public header links to explore the website. The login page includes direct links to the member and admin demonstrations.

No build step or package installation is required. Bootstrap 5.3.3, Lucide icons and Google Fonts are loaded from CDNs, so an internet connection is required for those external resources.

## Folder structure

```
wavecrest-swimming-academy/
├── index.html            Home 1
├── README.md
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── css/              style.css, rtl.css, admin-dashboard.css, member-dashboard.css
│   ├── js/               main.js, data.js, admin-dashboard.js, member-dashboard.js
│   └── images/           brand (logo + favicons), hero, programs, coaches, gallery, ...
├── documentation/        documentation.html
└── pages/                all other pages
    ├── about.html, programs.html, coaches.html, ... (public pages)
    ├── admin-dashboard/
    └── member-dashboard/
```

`assets/js/data.js` detects where the page lives and exposes `WC_ROOT`, so images and links work from both the project root and `pages/`.

## Brand system

- Deep Navy Blue: `#063B5C`
- Ocean Blue: `#087EAA`
- Aqua Turquoise: `#35C6D9`
- Fonts: Sora for headings; Inter for body text and interface labels.

All theme colors are defined as CSS custom properties in `assets/css/style.css`. Desktop and tablet horizontal padding is 30px; mobile padding is 18px. Dark/light and LTR/RTL preferences are stored in localStorage.

## Page map

### Public website
`index.html` (project root) and, inside `pages/`: `index-2.html`, `about.html`, `programs.html`, `program-details.html`, `coaches.html`, `coach-details.html`, `batch-timings.html`, `book-now.html`, `booking-confirmation.html`, `facilities.html`, `gallery.html`, `pricing.html`, `blog.html`, `blog-details.html`, `contact.html`, `login.html`, `register.html`, `forgot-password.html`, `404.html`, `coming-soon.html`.

### Member portal
`pages/member-dashboard/` — overview, enrolments, schedule, attendance, skill progress, payments, messages, profile and settings.

### Admin workspace
`pages/admin-dashboard/` — overview, members, coaches, programs, batches, enrolments, attendance, assessments, payments, messages, reports and settings.

## Demo behavior and technical boundaries

The template includes client-side interactions for navigation, theme and RTL switching, program filters, timetable filters, gallery filtering/lightbox, blog search, multi-step booking validation, member-portal navigation, editable admin sample records and report CSV export.

Data is sample content. Some admin edits persist only in the current browser using localStorage. Booking requests are stored locally for the confirmation screen. These are not server records.

The static template does **not** provide secure authentication, role-based access control, real-time seat reservation, database persistence, email delivery, payment collection, live fee status, or automated swimming assessment. Those functions require a backend or third-party service. Never expose private API credentials in browser JavaScript.

## Customize the sample data

Edit `assets/js/data.js` to update public programme cards, coach profiles, timetable examples and journal entries. Member and admin dashboard sample records are in `assets/js/member-dashboard.js` and `assets/js/admin-dashboard.js`.

Before publishing, replace sample names, contact details, prices, schedules, testimonials, facility details and images. Verify coach credentials and all safety/facility claims. Obtain appropriate image permissions and guardian consent before publishing identifiable photographs of children.

## Images and fonts

All images now load from local files under `assets/images/` (no remote Unsplash links); the current files are placeholders. Replace them with licensed academy photography and place optimized files in the matching folders under `assets/images/` (`hero`, `kids`, `adults`, `coaches`, `programs`, `facilities`, `gallery`, `blog`). Update `assets/js/data.js` and the page templates to use local asset paths when deploying offline or in production.

Sora and Inter are loaded from Google Fonts. Lucide icons are loaded from the Lucide CDN. No emoji are used as interface icons.

## Integration guide

- **Authentication:** implement secure sign-in, registration, password recovery and server-side role checks.
- **Booking/scheduling:** connect batch availability, seat locking, enrolment approval, calendar sync and confirmation emails.
- **Payments:** integrate a payment provider and verify payment status server-side before showing paid/receipt states.
- **Forms/newsletter:** connect a form provider (for example Formspree or Netlify Forms) and a mailing service.
- **Maps:** replace the contact-page map placeholder with a verified Google Maps embed.
- **Reports:** connect real operational data and authorization checks before enabling exports.

## Folder overview

- `assets/css/` — public, member and admin design systems; responsive, dark and RTL support.
- `assets/js/` — public content/data, booking and page behavior, member demo and admin demo.
- `assets/images/` — categorized image asset directories for production replacements.
- `documentation/` — extended setup and customization notes.

## Reference direction

The template takes broad structural inspiration from SwimLabs' professional program presentation, Goldfish Swim School's age-aware family-facing discovery and British Swim School's safety-first progression messaging. It does not reproduce their proprietary layouts, copy, branding or assets.

## Version

1.0.0 — Initial template build.
