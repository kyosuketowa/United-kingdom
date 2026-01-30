# United-Kingdom Trip 2025

Travel itinerary for London, March 30 - April 6, 2025.

## Overview

A comprehensive travel guide for visiting London for the Japan vs England match at Wembley Stadium, with optional visits to Liverpool and a stopover in Munich.

## File Structure

```
United-kingdom/
├── index.html          # Redirect to itinerary
├── itinerary.html      # Main travel itinerary
├── manifest.json       # PWA manifest
├── sw.js               # Service worker for offline support
├── images/             # Image assets
│   └── icon.svg        # PWA/favicon icon (SVG)
└── README.md           # This file
```

## Schedule Summary

| Date | Day | Activity |
|------|-----|----------|
| 3/30 (Mon) | Travel | KIX → MUC → LHR |
| 3/31 (Tue) | **Match Day** | Japan vs England @ Wembley |
| 4/1 (Wed) | Flexible | London / Liverpool option |
| 4/2 (Thu) | Flexible | UK exploration |
| 4/3 (Fri) | Final UK Day | Prepare for early flight |
| 4/4 (Sat) | Travel | LHR → MUC |
| 4/5 (Sun) | Travel | MUC → PEK |
| 4/6 (Mon) | Return | PEK → HND → KIX |

## Features

- Countdown timer to departure
- Interactive daily schedule (collapsible sections)
- Packing checklist with LocalStorage persistence
- Current time display (JST/UK)
- Flight route visualization
- Weather information
- Transportation guide from Heathrow
- Essential travel information
- Print-friendly styling
- PWA support for offline viewing
- Fully responsive design

## View Online

Once deployed to GitHub Pages, the itinerary will be available at:
`https://[username].github.io/United-kingdom/`

## Local Development

Simply open `itinerary.html` in a web browser.

For PWA features (offline support), serve the files through a local web server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## Technologies

- HTML5 Semantic Elements
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome 6.5.1
- Google Fonts (Noto Sans JP)
- Progressive Web App (PWA)

## Notes

- Times are shown in local time with JST equivalents
- Schedule is subject to change based on conditions
- UK stay dates (4/1-4/2) are flexible for Liverpool visits

---

Created for trip planning purposes.
