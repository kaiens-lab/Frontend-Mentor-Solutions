# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Recipe page solution](#frontend-mentor---recipe-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### Screenshot

![](./design/desktop-design.jpg)

### Links

- Live Site URL: []

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- BEM
- CSS Counters

### What I learned

For this project, I learned the basics of CSS Counters to improve the layout.
This feature is great for making ordered lists or adding numbers to elements without manually writing them in HTML.

```css
/* Define and initialize the counter */
.component__list--numbers {
  counter-reset: my-counter;
}

/* Increment the counter */
.component__list-item--numbers {
  counter-increment: my-counter;
}

/* Use the counter */
.component__list--numbers .component__list-item::before,
.component__list-item--numbers::before {
  content: counter(my-counter) ". ";
}
```

### Useful resources

- [MDN](https://www.w3schools.com/css/css_counters.asp) - helped me understand CSS Counters

## Author

- Frontend Mentor - [@KN Chang](https://www.frontendmentor.io/profile/KNchang)
