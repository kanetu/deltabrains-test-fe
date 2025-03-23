# DeltaBrains Test Frontend

## Overview

DeltaBrains Test Frontend is a React-based project configured with Webpack, TypeScript, and various modern libraries to support UI development, state management, and form validation.

## Tech Stack

### Framework & Core Libraries

- **React** (19.0.0) - UI library for building components
- **React DOM** (19.0.0) - React rendering in the browser
- **TypeScript** (5.1.6) - Type safety for JavaScript

### Build & Configuration

- **Webpack** (5.75.0) - Module bundler
- **Webpack CLI** (5.0.1) - Webpack command-line tool
- **Webpack Dev Server** (4.11.1) - Local development server
- **Babel** - JavaScript compiler with TypeScript and React presets

### State Management

- **@tanstack/react-query** (5.10.0) - Data fetching and caching
- **React Hook Form** (7.54.2) - Form state management

### UI & Styling

- **Tailwind CSS** (4.0.11) - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Lucide React** (0.477.0) - Icon library

### Routing

- **React Router DOM** (6.16.0) - Declarative routing for React

### Form Handling & Validation

- **React Hook Form** (7.54.2) - Form state management
- **Zod** (3.24.2) - Schema validation
- **@hookform/resolvers** (4.1.3) - Integration between React Hook Form and Zod

### Utilities

- **Axios** (1.8.4) - Promise-based HTTP client
- **Date-fns** (4.1.0) - Date utility functions
- **Clsx** (2.1.1) - Conditional className management
- **Tailwind Merge** (3.0.2) - Merge Tailwind classes
- **Sonner** (2.0.1) - Notifications and toast messages

### Applied Techniques

- **Debounce**
- **Skeleton**
- **Lazy loading**

## Setup & Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (latest LTS recommended)
- npm or yarn

### Install Dependencies

```sh
npm install
# or
yarn install
```

### Run Development Server

```sh
npm run dev
```

### Build for Production

```sh
npm run build
```

### Run Tests

```sh
npm run test
```
