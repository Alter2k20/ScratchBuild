# ScratchBuild

Certainly! Here's the conversation in Markdown format:

---

# CSS Cheatsheets

## 1. CSS Transitions

### Overview

CSS transitions allow you to smoothly animate property changes over a specified duration. Key components include:

-   `transition-property`: Specifies the properties to animate.
-   `transition-duration`: Sets the duration of the transition.
-   `transition-timing-function`: Defines the timing curve (e.g., ease-in-out).
-   `transition-delay`: Determines the wait time before the transition starts.

Example:

```css
.element {
	transition: background-color 0.3s ease-in-out;
}
```

## 2. CSS Animations

### Overview

CSS animations provide more complex effects. Key components include:

-   `animation-name`: Specifies keyframes.
-   `animation-duration`: Sets animation duration.
-   `animation-timing-function`: Defines timing.
-   `animation-delay`: Determines delay before animation starts.
-   `animation-iteration-count`: Sets the number of repeats.

Example (pulsating effect):

```css
.element {
	animation: pulse 2s infinite;
}
@keyframes pulse {
	0%,
	100% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.1);
	}
}
```

## 3. CSS Gradients

### Linear Gradient

Transitions colors along an imaginary line:

```css
.element {
	background: linear-gradient(
		to right,
		red,
		orange,
		yellow,
		green,
		blue,
		indigo
	);
}
```

### Radial Gradient

Transitions colors from a center point:

```css
.element {
	background: radial-gradient(circle, red, yellow, green);
}
```

### Conic Gradient

Transitions colors around a circle:

```css
.element {
	background: conic-gradient(at top, red, yellow, green);
}
```

For more details, check out the [MDN Web Docs on CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) and the [CSS Transitions Cheatsheet](https://www.kirupa.com/html5/css_transitions_cheatsheet.htm). Happy styling! 😊🎨

---

Feel free to use this Markdown snippet as a reference! Let me know if you need anything else. 😊👍

Certainly! Let's dive into CSS variables (also known as custom properties) and how they can enhance your styling workflow. 🎨

## 4. CSS Variables (Custom Properties):

-   CSS variables allow you to define reusable values that can be used throughout your stylesheets.
-   They are declared using the `--variable-name` syntax.
-   Example:
    ````css
        :root {
        	--primary-color: #007bff;
        	--font-size: 16px;
        }
        ```
    ````
-   Access them using the `var()` function:
    ````css
       .element {
       	color: var(--primary-color);
       	font-size: var(--font-size);
       }
       ```
    ````

## 5. Inheritance:

-   CSS variables can inherit their values from parent elements.
-   If no value is set for a variable on an element, it uses the value from its parent.
-   Example:
    ````css
        .child {
        	--primary-color: red; /* Inherits from parent */
        	color: var(--primary-color);
        }
        ```
    ````

## 6. Functions:

-   CSS functions allow dynamic calculations and transformations.
-   Common functions include:
    -   `calc()`: Perform arithmetic operations.
    -   `rgba()`: Define colors with alpha transparency.
    -   `var()`: Access CSS variables.
    -   `url()`: Specify image or font URLs.
-   Example:
    ````css
        .element {
        	width: calc(100% - 20px);
        	background-color: rgba(255, 0, 0, 0.5);
        	font-family: "Open Sans", sans-serif;
        	background-image: url("image.jpg");
        }
        ```
    ````

Remember, CSS variables improve maintainability and flexibility in your stylesheets. For more details, check out the [MDN Web Docs on CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). Happy styling! 😊👍
