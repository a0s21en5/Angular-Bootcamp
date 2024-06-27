# Nested Loop in Angular

## 1. Define and Initialize Array

```typescript
// Define and initialize a nested array in Angular component
mainArray: any[] = [
  { id: 1, name: 'Item 1', nestedArray: ['Subitem A', 'Subitem B', 'Subitem C'] },
  { id: 2, name: 'Item 2', nestedArray: ['Subitem D', 'Subitem E'] },
  { id: 3, name: 'Item 3', nestedArray: ['Subitem F'] }
];
```

## 2. Apply Outer Loop (ngFor)

```html
<!-- Iterate through the main array using ngFor -->
<div *ngFor="let item of mainArray">
  <h3>{{ item.name }}</h3>

  <!-- Nested Array -->
  <ul>
    <!-- Apply inner ngFor to iterate through the nested array -->
    <li *ngFor="let subitem of item.nestedArray">{{ subitem }}</li>
  </ul>
</div>
```
