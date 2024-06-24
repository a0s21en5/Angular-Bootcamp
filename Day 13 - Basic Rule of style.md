# Angular Style Rules

### Component Style

Component styles refer to CSS styles that are scoped to a specific Angular component. This encapsulation ensures that styles defined within a component only affect the elements of that component and are not inherited by other components.

### Global Style

Global styles are CSS styles that are applied globally throughout the application. These styles are typically defined in the `styles.css` or `styles.scss` file and can affect the appearance of multiple components or the entire application.

### Internal Style

Internal styles are styles defined within the component decorator metadata using the `styles` property. These styles are scoped to the component and override any global styles or external stylesheets imported into the application.

### Check Style with Multiple Component

When styling multiple components, it's important to maintain consistency and avoid conflicts. Use naming conventions, such as BEM (Block Element Modifier) or Angular's component-specific styles, to ensure styles are applied correctly and do not clash across different components.

These style rules help maintain a structured and maintainable codebase in Angular applications, ensuring clarity and separation of concerns between different components and global styles.
