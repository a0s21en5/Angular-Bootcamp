# Property Binding in Angular

1. **What is Property Binding?**
   Property binding in Angular allows you to set the value of an HTML element's property or attribute to a data-bound expression. It binds data from the component to the DOM (Document Object Model).

2. **Difference Between Property Binding and Interpolation**
   - **Property Binding**: Binds data to an HTML element's property. It uses square brackets (`[property]="expression"`).
   - **Interpolation**: Inserts a value into the HTML template. It uses double curly braces (`{{ expression }}`).

   The main difference is that property binding sets a property or attribute of an element, while interpolation inserts a value directly into the HTML content.

3. **Example to Understand Property Binding**

   Suppose we have a component with a property `userName` that we want to bind to the `value` attribute of an input element:

   ```html
   <!-- Component Template -->
   <input type="text" [value]="userName">
   ```

   Here, [value]="userName" binds the value of the userName property from the component to the value attribute of the <input> element.

   In contrast, interpolation would display the value directly in the HTML content, like this:

   ```html
   <!-- Component Template -->
   <p>Welcome, {{ userName }}!</p>
   ```
