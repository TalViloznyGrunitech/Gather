# GATHER

_Transform Connections into Unforgettable Experiences_

---

[![Last Commit](https://img.shields.io/github/last-commit/TalViloznyGrunitech/Gather)](https://github.com/TalViloznyGrunitech/Gather/commits/main)  
[![JavaScript](https://img.shields.io/github/languages/top/TalViloznyGrunitech/Gather)](https://github.com/TalViloznyGrunitech/Gather)  
[![License: MIT](https://img.shields.io/github/license/TalViloznyGrunitech/Gather)](./LICENSE)

---

## Built With

| Technology   | Purpose                                         |
| ------------ | ----------------------------------------------- |
| React        | Frontend UI components                          |
| Vite         | High-speed build & dev tooling                  |
| Firebase     | Authentication + real‑time database / data sync |
| JavaScript   | Core logic & interactions                       |
| CSS / HTML   | Layout & styling                                |
| ESLint       | Code quality & consistency                      |
| React Router | Client‑side routing                             |

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo / Live Site](#demo--live‑site)
- [Getting Started](#getting‑started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running‑locally)
  - [Running Tests](#running‑tests)
- [Project Structure](#project‑structure)
- [Usage Guide](#usage‑guide)
- [Roadmap & Future Plans](#roadmap‑future‑plans)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Gather is a modern, user‐friendly platform to **discover**, **join**, and **host** real‑world meetups. Whether you’re exploring tech events, organizing photography walks, planning fitness meetups, or having casual get‑togethers—it brings people together effortlessly.

It offers:

- A clean, intuitive user interface
- Real‑time data syncing & user authentication (Firebase)
- Ability to create, browse, RSVP, and manage events
- Personalized dashboard for attendees & organizers
- Messaging/integration for communication (if implemented)

---

## Features

Here are some current features, plus ideas in the pipeline:

| Current Features                                                  | Planned / Future Enhancements                            |
| ----------------------------------------------------------------- | -------------------------------------------------------- |
| Discover events by category                                       | Calendar export / sync (Google, iCal)                    |
| Host / create your own events with details (date, time, location) | Improved search & filter (by distance, popularity, tags) |
| RSVP / join events                                                | Notifications / reminders                                |
| Dashboard for my events & saved events                            | Media uploads (photos, videos)                           |
| Authentication (sign up / login)                                  | Mobile responsiveness / PWA support                      |

---

## Demo / Live Site

Check it out live:

[Gather Web App](https://gathergroupproject.vercel.app)

---

## Getting Started

These instructions will help you get a copy of the project up and running locally.

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn
- A Firebase project (with Firestore / Realtime Database, Authentication)
- Environment variables / credentials for Firebase

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/TalViloznyGrunitech/Gather.git
   cd Gather
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up your `.env` file (copy from `.env.example` if provided) with your Firebase config, API keys, etc.

### Running Locally

```bash
npm run dev
# or
yarn dev
```

This should start the development server (via Vite) and open at `localhost:3000` (or whatever port is configured).

## Project Structure

Here’s a high‑level look at how things are organized:

```
/public
/src
  /components
  /pages
  /routes
  /services
  /utils
  App.jsx / index.jsx
.vite.config.js
package.json
.eslint.config.js
README.md
```

You can describe what major directories / files do, e.g.:

- **components/** — reusable UI components (buttons, cards, navbar, etc.)
- **pages/** — routed views (Discover, My Events, Event Details, etc.)
- **services/** — API / Firebase interaction logic
- **utils/** — helpers, formatting, etc.

---

## Usage Guide

Walk users (or contributors) through how to do common tasks:

- How to sign up / log in
- Discovering events (browsing, filtering)
- Creating a new event
- RSVP / join / cancel joining
- Managing your hosted events
- Messaging or interacting with attendees

(Optional: include screenshots or animated gifs if you have them.)

---

## Roadmap & Future Plans

Here are goals you’re aiming toward. Helps other developers / collaborators see where the project is headed.

- Improve search & filtering (distance, tags, popularity)
- Add reminders / push notifications
- Add support for multimedia content for events
- Better mobile / responsive design
- Possibly offline mode or PWA capabilities
- User profiles with richer info (images, interests)

---

## Contributing

Thanks for considering contributing! Here are some guidelines:

1. Fork the repository
2. Make your feature / bug branch (`git checkout ‑b feature/SomeFeature`)
3. Commit changes with clear messages
4. Submit a pull request

Please make sure to follow the existing code style / conventions. ESLint is set up to enforce certain rules.

If you are adding substantial features, open an issue first to discuss.

---

## License

This project is licensed under the **MIT License** – see the [LICENSE](./LICENSE) file for details.

---

## Contact

- Contributors: Shada Diab, Johra Tareef, Tal Vilozny
- Email: _[TalVilozny@gmail.com]_
- Project link: https://github.com/TalViloznyGrunitech/Gather
