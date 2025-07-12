# Tutorial: portfolio-next-blog

This project is a personal **website** serving as a *portfolio* and *blog*.
It's built using the **Next.js** framework, which handles different web
pages and navigation. Blog posts are written in **MDX**, a special
format mixing text and interactive elements. The site's look and feel
are powered by the **Chakra UI** library, enhanced with *custom components*,
and includes features like a *dark mode* and a blog post *views counter*.
It also fetches data for displaying content and interacting with a simple
backend for the views counter.


## Visual Overview

```mermaid
flowchart TD
    A0["Next.js Pages & Routing
"]
    A1["MDX Blog Content
"]
    A2["Chakra UI Framework
"]
    A3["Layouts
"]
    A4["Data Fetching & API Routes
"]
    A5["Custom UI Components
"]
    A6["Views Counter Feature
"]
    A7["Dark Mode
"]
    A0 -- "Use Layouts" --> A3
    A0 -- "Manage Data/APIs" --> A4
    A0 -- "Display MDX" --> A1
    A2 -- "Provides Styling" --> A0
    A3 -- "Built With UI" --> A2
    A3 -- "Includes Counter" --> A6
    A4 -- "Supports Counter" --> A6
    A5 -- "Extends UI" --> A2
    A7 -- "Uses UI Hooks" --> A2
    A5 -- "Handles Mode" --> A7
    A1 -- "Adapts to Mode" --> A7
```
