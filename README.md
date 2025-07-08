# Jericobots - Website & Catalog 🤖

Welcome to the Jericobots repository\! This is a website project built with Next.js and Tailwind CSS, serving as a product catalog and homepage for a fictional tech company, Jericobots, which focuses on AI and Robotics.

This documentation is designed to help developers, especially beginners, understand how the application works, its code structure, and how to run it locally.

## 📋 Table of Contents

  - [✨ Application Overview](https://www.google.com/search?q=%23-application-overview)
  - [🛠️ Prerequisites & Installation](https://www.google.com/search?q=%23%EF%B8%8F-prerequisites--installation)
  - [🚀 How to Use](https://www.google.com/search?q=%23-how-to-use)
  - [📂 Code Structure](https://www.google.com/search?q=%23-code-structure)
  - [🤔 Common Troubleshooting](https://www.google.com/search?q=%23-common-troubleshooting)
  - [🗺️ Development Roadmap](https://www.google.com/search?q=%23%EF%B8%8F-development-roadmap)

-----

## ✨ Application Overview

**Jericobots** is an interactive website showcasing a technology company's profile. Its goals are to:

1.  **Showcase Products**: Display a catalog of featured products in AI, Robotics, and Automation.
2.  **Build Brand Image**: Enhance the company's image as a pioneer in industrial technology.
3.  **Attract Clients & Talent**: Through case studies, a blog, and a careers page.

The application is fully responsive and designed with a modern aesthetic suitable for the B2B tech industry.

-----

## 🛠️ Prerequisites & Installation

Before you begin, make sure you have the following software installed on your computer:

  * [Node.js](https://nodejs.org/) (v18.0 or later)
  * [Bun](https://bun.sh/) (Used as the package manager & runtime)
  * [Git](https://git-scm.com/)

### Installation Steps

1.  **Clone the Repository**
    Open your terminal and run the following command:

    ```bash
    git clone https://<YOUR_REPOSITORY_URL>.git
    cd jericobots
    ```

2.  **Install Dependencies**
    This project uses `bun` as its package manager. Run the command:

    ```bash
    bun install
    ```

    This command will read the `package.json` file and install all the necessary packages.

-----

## 🚀 How to Use

Once the installation is complete, you can run the local development server.

1.  **Run the Development Server**

    ```bash
    bun run dev
    ```

2.  **Open in Browser**
    Open your browser and navigate to [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000). You should see the Jericobots homepage.

Any changes you make to the code (e.g., in `src/app/page.tsx`) will automatically be reflected in the browser, thanks to Next.js's Hot Reloading feature.

-----

## 📂 Code Structure

The project's folder structure is designed to be easy to manage and scale. Here is an explanation of the main directories and files:

```
jericobots/
├── .next/              # Build directory (auto-generated)
├── public/             # Static assets like images & fonts
├── src/
│   ├── app/
│   │   ├── globals.css   # Global CSS file
│   │   ├── layout.tsx    # Main application layout (includes <html> and <body> tags)
│   │   └── page.tsx      # Main application page (/)
│   │
│   ├── components/
│   │   ├── sections/     # Large components for each page section (Hero, Footer, etc.)
│   │   └── ui/           # Small, reusable UI components (Button, Card, etc.)
│   │
│   └── libs/
│       └── utils.ts      # Utility functions (e.g., the 'cn' function for merging Tailwind classes)
│
├── package.json        # List of project dependencies and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration & path aliases
└── netlify.toml        # Configuration for deploying on Netlify (optional)
```

### Key File Functions

  * **`src/app/page.tsx`**: This is the main entry point for your homepage. It imports and arranges all the components from `src/components/sections/` to build the complete view.
  * **`src/app/layout.tsx`**: This file wraps the entire application. It's where you define global metadata (like the browser tab title), load fonts, and set up the basic HTML structure.
  * **Components in `src/components/sections/`**: Each file here (e.g., `HeroSection.tsx`, `Footer.tsx`) represents a major section of the page. Breaking the page down like this makes it easier to manage.
  * **Components in `src/components/ui/`**: Contains the UI components from `shadcn/ui` that you have customized. These components (like `Button` and `Card`) are used throughout the application to maintain visual consistency.
  * **`libs/utils.ts`**: Contains the `cn` utility function, which is very helpful for conditionally combining class names in Tailwind CSS.

-----

## 🤔 Common Troubleshooting

Here are some common issues you might encounter and how to solve them:

1.  **Error: "Module not found: Can't resolve '@/libs/utils'"**

      * **Cause**: The path alias (`@/`) is not configured correctly, or the folder name is wrong.
      * **Solution**: Ensure you have a `src/libs` directory (not `src/lib`) and that your `tsconfig.json` contains the correct `paths` configuration.

2.  **Browser Tab Title Doesn't Change**

      * **Cause**: The Next.js development server is using a cache.
      * **Solution**: Stop the server (`Ctrl + C`) and restart it (`bun run dev`). Also, make sure that metadata is only defined in `src/app/layout.tsx`.

3.  **Tailwind CSS Styles Are Not Applying**

      * **Cause**: The configuration in `tailwind.config.ts` might be incorrect.
      * **Solution**: Make sure the `content` property in `tailwind.config.ts` includes all file paths that use Tailwind classes (`./src/**/*.{js,ts,jsx,tsx,mdx}`).

-----

## 🗺️ Development Roadmap

This project has a lot of potential for future development. Here are some ideas:

  * [ ] **Product Detail Pages**: Create dynamic pages for each product in the catalog.
  * [ ] **Full Blog System**: Integrate a CMS (like Sanity or Contentful) or use Markdown files to manage blog posts.
  * [ ] **Functional Contact Forms**: Connect the "Schedule a Demo" and "Contact" forms to an email service or backend.
  * [ ] **Dark Mode**: Implement a toggle to switch between light and dark themes.
  * [ ] **Animations & Interactivity**: Add more animations (e.g., with Framer Motion) to enhance the user experience.

