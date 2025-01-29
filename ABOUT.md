## BCC Conference FE

### Description

This is a frontend application for BCC Conference, part of Freepass challenge by BCC FILKOM UB. It is designed following the best practices and recommendations to ensure a clean, maintainable, and scalable codebase. It is also built with security in mind to protect against common security threats. The requirements and features are implemented based on [Freepass BE](https://github.com/bccfilkom-be/freepass-2025).

### Tech Stack

The application is built using [TypeScript](https://www.typescriptlang.org/) for strong typing, [pnpm](https://pnpm.io/) as a fast package manager, and [React](https://reactjs.org/) for building UI. It leverages [Next.js](https://nextjs.org/) to enable server-side rendering and static site generation. For styling, it uses [TailwindCSS](https://tailwindcss.com/).


### Getting started

1. Clone the repository
```
  git clone https://github.com/ahargunyllib/freepass-fe-bcc-2025.git
  cd freepass-fe-bcc-2025
  git switch nugraha-billy viandy
```

2. Set up the environment variables by copying .env.example
```
  cp .env.example .env
```
Update configuration values as needed.

3. Install the required the dependencies
```
  pnpm install
```

4. Run the development server
```
  pnpm dev
```
5. Open http://localhost:3000 with your browser to see the result.

### Architecture

The project is structured using a feature-based approach to ensure scalability, modularity, and maintainability. The `src` directory is organized into three main sections:

- **`app`**: Contains global application-level components, pages, layouts, and configurations, including the main entry point for pages and global styles.
- **`features`**: Houses feature-specific modules, where each module includes its own actions, services, components, containers, and types to encapsulate functionality and logic for that feature.
- **`shared`**: Includes reusable components, hooks, libraries, and utilities that are shared across different features and pages, promoting consistency and code reusability.

## Documentation

This frontend is connected to the backend API, which is hosted at [https://freepass-be-bcc-2025.ahargunyllib.tech/](https://freepass-be-bcc-2025.ahargunyllib.tech/)

For database schema documentation, see [here](https://dbdocs.io/ahargunyllib/freepass-be-bcc-2025), powered by [dbdocs.io](https://dbdocs.io/).

For API documentation, see [here](https://bcc-conference-api-docs.ahargunyllib.tech) or [here](https://qvfbebhy7x.apidog.io), powered by [Apidog](https://apidog.com/).

For more information about the backend, see [here](https://github.com/ahargunyllib/freepass-be-bcc-2025).

## Credentials

- **Admin**:
  - **Email**: admin1@gmail.com
  - **Password**: password

### Features

- **State Management**: Utilizes [Zustand](https://github.com/pmndrs/zustand), a minimalistic state management solution for React, to handle global state across the application.
- **Form Handling**: Employs [React Hook Form](https://react-hook-form.com/), a library that manages forms efficiently with minimal re-renders, offering built-in validation and integration with [Zod](https://github.com/colinhacks/zod).
- **Data Fetching**: Integrates [React Query](https://tanstack.com/query/latest), a data-fetching library that simplifies data management by handling caching, synchronization, and background updates.
- **Search Query Management**: Incorporates [Nuqs](https://github.com/nuqs/nuqs), a utility for creating and managing complex search query systems in React applications.
- **Table Management**: Utilizes [TanStack Table](https://tanstack.com/table/latest), a powerful and flexible table library for displaying large datasets, supporting features like pagination, sorting, and filtering.
- **Schema Validation**: Employs [Zod](https://github.com/colinhacks/zod), a TypeScript-first schema validation library used for form validation and data parsing.
- **Code Formatting**: Utilizes [Biome](https://github.com/biome/biome), a tool for managing and formatting code in a consistent and optimized way across the project.
- **Animations**: Integrates [Motion](https://motion.dev/), a library for adding animations to React components, enabling smoother transitions and interactions.
