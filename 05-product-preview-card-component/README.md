# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Product preview card component solution](#frontend-mentor---product-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](./design/desktop-design.jpg)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Responsive design with media queries

### What I learned

During this learning process, I found out how to use the <picture> element and <source> tag to show different images for different devices. This helps my webpage load faster and look better on any screen size. It also makes my webpage more flexible and responsive. This technique improves the user experience and helps me understand more about responsive design.

```html
<picture class="image-container">
  <source
    media="(max-width: 600px)"
    srcset="./images/image-product-mobile.jpg"
  />
  <img src="./images/image-product-desktop.jpg" alt="purfume-image" />
</picture>
```

### Continued development

In the future, I will study responsive design more deeply and use it in my work. I hope this will bring a better experience to users on all devices.

### Useful resources

- [MDN Web Docs on Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [W3Schools Guide to HTML Picture Tag](https://www.w3schools.com/html/html_images_picture.asp)

## Author

- Frontend Mentor - [@KNChang](https://www.frontendmentor.io/profile/kn070648)
