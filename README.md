# IPL-RCB

A React + Vite fan project themed around Royal Challengers Bengaluru. The app presents an RCB-inspired landing page with a trophy-led hero section, 2026 fixture highlights, squad visuals, official update cards, merchandise content, and supporting links in a single-page experience.

## Highlights

- RCB-themed hero section with the IPL trophy image and the "Ee Saala Cup Namde Again" message
- Verified 2026 fixture section with match timing and venue details
- Ticket and merchandise sections designed around the RCB visual identity
- Squad cards and player imagery served from local assets in `public/players`
- Official update and source-link sections for quick reference
- Responsive layout with animation and reveal effects

## Tech Stack

- React 19
- Vite 8
- Plain CSS
- ESLint

## Project Structure

```text
IPL-RCB/
|-- public/
|   `-- players/        # Player images, trophy photo, logos, and merch visuals
|-- src/
|   |-- App.jsx         # Main single-page UI and content
|   |-- app.css         # Full visual styling and responsive layout
|   |-- main.jsx        # React entry point
|   `-- assets/         # SVG and local design assets used by the app
|-- index.html
|-- package.json
`-- vite.config.js
```

## Getting Started

### Requirements

- Node.js `20.19+` or `22.12+`
- npm

### Install

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates the production build
- `npm run preview` previews the built app locally
- `npm run lint` runs ESLint

## Customization Notes

- Update page content and section data in `src/App.jsx`
- Update styling, layout, and responsive behavior in `src/app.css`
- Replace or add player and trophy images inside `public/players`
- If you rename or move images, update the matching paths in `src/App.jsx`

## License

The project source code is licensed under the MIT License. See `LICENSE` for the full text.

## Important Note

This is a fan-made frontend project built for learning and presentation purposes. The MIT License applies to the source code in this repository, but team names, logos, fixtures, and media assets may remain subject to their respective owners' rights.
