# Multiple condition or else if

In Angular templates, there isn't a direct else-if syntax like in languages such as JavaScript or TypeScript. However, you can achieve a similar effect using nested ng-template elements along with ngIf. Let's break down how to handle multiple conditions or else-if scenarios in Angular templates:

## Basic If Condition

First, let's revisit the basic *ngIf condition for displaying content based on a single condition:

```html
<div *ngIf="isCondition1">
  Content to display when isCondition1 is true
</div>
```

## Using ng-template for else-if Condition

To implement an else-if condition or handle multiple conditions in Angular templates, you can nest ng-template elements. Here's how you can structure it:

```html
<div *ngIf="isCondition1; else elseBlock1">
  Content to display when isCondition1 is true
</div>
<ng-template #elseBlock1>
  <div *ngIf="isCondition2; else elseBlock2">
    Content to display when isCondition1 is false and isCondition2 is true
  </div>
  <ng-template #elseBlock2>
    <div *ngIf="isCondition3">
      Content to display when both isCondition1 and isCondition2 are false and isCondition3 is true
    </div>
    <div *ngIf="!isCondition3">
      Content to display when none of the conditions is true
    </div>
  </ng-template>
</ng-template>
```
