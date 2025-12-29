# Reflections and Design Decisions – Recipe Discovery App

## Technology Choices

- **Vite + React + TypeScript**: Chosen for fast development, type safety, and modern tooling support.
- **React Router DOM**: For simple and scalable SPA navigation.
- **TheMealDB API**: Selected for its rich data and ease of use.

## Architecture and Structure

- **Reusable Components**: Card, Navbar, Spinner, Feedback, to keep code DRY and maintainable.
- **Custom Hooks**: `useFetch` for handling async fetches and `useLocalStorage` for syncing favorites state.
- **Context API**: For global favorites management, avoiding prop drilling.
- **Responsive CSS**: Media queries and flexible layouts for a pleasant UX on both mobile and desktop.

## UX/UI

- **Always-visible Navbar** with integrated search.
- **User Feedback**: Consistent spinner and error messages.
- **Clickable Cards** for intuitive navigation.
- **Favorites Button**: Instant feedback and local sync.

## Challenges and Solutions

- Handling async multiple fetches (favorites): Solved with `Promise.all`.
- Syncing favorites across pages: Solved with Context and custom hook.
- Responsive design: Tested on various widths, added targeted media queries.

### Most challenging part

The most challenging part was keeping the favorites data consistent across different views while handling asynchronous network calls. A concrete issue occurred when the app hydrated favorites from `localStorage` and then fetched full meal details for each saved id: components could mount before all details were available, producing transient UI states and occasional mismatches. The solution was to centralize favorites in a `FavoritesContext`, persist state with a `useLocalStorage` hook, and, when necessary, load multiple recipe details with `Promise.all` so the context can provide a single, consistent data shape to consuming components. I also added simple loading states and guarded component updates to avoid race conditions while hydration completes.

### Design decision

I created a compact `useFetch` hook that returns `{ data, loading, error }` rather than mixing data fetching logic across components. This keeps components focused on rendering and reduces duplicated code for handling loading and error states. It also makes it easier to add retries, caching, or request cancellation later. Centralizing fetch behavior simplified testing and debugging network-related problems during development.

## Possible Future Improvements

- User authentication and cloud-synced favorites.
- Automated testing (unit and E2E).
- More advanced animations and transitions.
- Improved accessibility (a11y).

## Conclusions

The project was designed to be educational, scalable, and easily extendable. Every decision was made for clarity, simplicity, and best practices.
