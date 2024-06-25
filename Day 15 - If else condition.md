# Using If-Else Conditions in Angular

## Define Property for If Condition

In Angular, you can define a boolean property in your component's TypeScript file to control the visibility or behavior based on conditions.

```typescript
// Example component
export class MyComponent {
  isConditionMet: boolean = true;
}
```

## Apply Basic If Condition

To conditionally display or hide elements in your template based on the property defined:

```html
<!-- Example template -->
<div *ngIf="isConditionMet">
  <!-- Content to display when condition is true -->
</div>
```

## Using If-Else Condition

Angular doesn't have a direct syntax for if-else in templates like some other frameworks. However, you can achieve the same result using ngIf and ng-template with ngIf-else:

```html
<!-- Example template with if-else -->
<div *ngIf="isConditionMet; else elseBlock">
  <!-- Content to display when condition is true -->
</div>
<ng-template #elseBlock>
  <!-- Content to display when condition is false -->
</ng-template>
```

## In this setup

- ngIf="isConditionMet" shows the content if isConditionMet is true.

- ng-template #elseBlock defines an alternate block of content to display when isConditionMet is false.
