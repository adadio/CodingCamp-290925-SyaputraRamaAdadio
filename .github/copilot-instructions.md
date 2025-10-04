# Copilot Instructions for CodingCamp-290925-SyaputraRamaAdadio

## Project Overview
This is a simple browser-based Todo List app with a playful theme ("cosmic task" and flying dragon animation). The project consists of:
- `index.html`: Main HTML structure, includes Tailwind via CDN, links to local CSS and JS.
- `css/style.css`: Custom styles, including a flying dragon animation.
- `js/script.js`: Handles all app logic (add, delete, filter, toggle status).
- `NAGA TERB.gif`: Dragon image for animation (referenced in CSS).

## Architecture & Data Flow
- All logic is client-side JavaScript, manipulating the DOM directly.
- Tasks are stored in a local array (`todos`), not persisted between reloads.
- UI is rendered by `renderTodos()` in `js/script.js`, which updates the `<tbody id="todoList">`.
- Actions (add, delete, filter, toggle) are handled by button event listeners and inline `onclick` attributes.

## Key Patterns & Conventions
- **No frameworks**: Pure HTML, CSS, and vanilla JS. Tailwind is loaded but not used in custom CSS.
- **Class naming**: Custom classes (e.g., `.todo-app`, `.todo-form`, `.todo-actions`) are used for layout, not Tailwind utility classes.
- **Animation**: The flying dragon uses a CSS keyframes animation (`.flying-dragon`).
- **Status**: Task status is toggled with a check button, showing "✅ Done" or "⏳ Pending".
- **Filtering**: The filter button shows only pending tasks.
- **Date input**: Tasks require a date, limited to `2025-12-31`.

## Developer Workflow
- **No build step**: Open `index.html` directly in the browser to run.
- **No tests**: There are no automated tests or test frameworks.
- **Debugging**: Use browser DevTools for JS and CSS debugging.
- **Adding features**: Update `js/script.js` for logic, `css/style.css` for styles, and `index.html` for structure.

## Integration Points
- **External dependencies**: Tailwind CSS is loaded via CDN, but not actively used in custom styles.
- **Image asset**: `NAGA TERB.gif` is used for the dragon animation (ensure the file exists for full effect).

## Example: Adding a New Action Button
- Add a `<button>` in the `todo-actions` section of `index.html`.
- Add an event listener in `js/script.js`.
- Update `renderTodos()` if the action affects the task list display.

## File References
- Main entry: `index.html`
- Styles: `css/style.css`
- Logic: `js/script.js`
- Asset: `NAGA TERB.gif`

---
**For AI agents:**
- Focus on direct DOM manipulation and simple JS logic.
- Avoid introducing frameworks or build tools.
- Keep UI/UX playful and simple.
- Document any new conventions or patterns in this file.
