# Appfigures Reviews Explorer

````markdown:README.md
# Appfigures Reviews Explorer

A web application for exploring and analyzing user reviews of the Twitter iOS app, built with Next.js, TypeScript, and React.

## Project Overview

This application allows users to explore user reviews of the Twitter iOS app with features for filtering, grouping, and detailed review analysis.

### Key Features & Objectives

#### Metadata Display
- Display metadata for the Twitter iOS app
- Fetch and display reviews data from the Appfigures API

#### Totals Label
- Show total number of reviews based on active filters (keyword, star rating)
- Dynamic updates based on filter changes

#### Search Results Grouped by Date
- Group reviews into categories:
  - Today
  - Yesterday
  - This Week
  - Last Week
  - This Month
- Intelligent date-based organization

#### Review Details
- Display comprehensive review information:
  - Star rating
  - Review title
  - Review body
  - Author
  - Date

#### Pagination
- Initial load of 25 reviews
- "Load more" functionality for additional reviews
- Reset pagination on filter changes

## Technical Implementation

### Project Structure
```bash
/pages
  /index.tsx
/lib
  /api.ts         # API interaction logic
/components
  /ReviewList.tsx # List of reviews
  /ReviewItem.tsx # Single review component
  /FilterOptions.tsx # Filters for keyword and star rating
  /ErrorBoundary.tsx # Component to handle errors gracefully
/utils
  /formatDate.ts   # Helper to format review dates
  /filterReviews.ts # Helper to filter reviews
/styles
  /globalStyles.ts  # Global styles for layout
````

### Core Features Implementation

1. **Metadata**

   - AppMetadata component for app information display
   - Integration with Appfigures API

2. **Totals Label**

   - Dynamic count tracking
   - Real-time updates with filter changes

3. **Date Grouping**

   - Intelligent date categorization
   - Dynamic section generation

4. **Review Details**

   - Comprehensive review information display
   - Formatted date presentation

5. **Pagination**
   - Batch loading of reviews
   - Smooth loading transitions

### Tech Stack

- Next.js
- TypeScript
- React
- Styled Components/CSS Modules

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

## Deployment

The application can be deployed on [Vercel](https://vercel.com/) for optimal performance with Next.js.

## Future Enhancements

- Cronjob implementation for periodic data fetching
- Database integration for local data storage
- Advanced filtering capabilities
- Performance optimizations
- Enhanced UI animations

```

```
