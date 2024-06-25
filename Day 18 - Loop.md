# Using *ngFor in Angular

Angular's `*ngFor` directive is used to iterate over a collection of data and render it dynamically in the HTML template. It's particularly useful for displaying lists of items, whether those items are simple arrays or arrays of objects.

## Iterating over a Simple Array

If you have a simple array of strings or numbers, you can use `*ngFor` to loop through each item and display it.

```html
<!-- Example of iterating over a simple array -->
<ul>
  <li *ngFor="let item of simpleArray">{{ item }}</li>
</ul>
```

## Iterating over an Array of Objects

When working with arrays of objects, you can access each object's properties inside the loop to display specific information.

```html
<!-- Example of iterating over an array of objects -->
<ul>
  <li *ngFor="let obj of arrayOfObjects">
    {{ obj.propertyName }}
  </li>
</ul>
```
