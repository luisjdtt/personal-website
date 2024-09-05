# My Personal Website 🌐

A simple and elegant personal website built with Eleventy and Tailwind CSS to showcase my portfolio and skills. 🚀

## Features ✨

- Responsive design 📱💻
- Built with HTML and CSS 🎨
- Utilizes Tailwind CSS for styling 🌈
- Minimalist and clean layout 🧹

## Getting Started 🏁

1. Clone the repository 📂
2. In two terminals, run `npm run watch:css` and `npm run start` 🖥️

## Build 🛠️

Run `npm run build` to build the project 🏗️

## Eleventy 🚀

You need to understand the basics of Eleventy to customize this website. Understand layout, data, and templates. 📚

## Jampack 📦

Jampack is a tool to optimize static websites for best user experience and best Core Web Vitals scores.

It is a postprocessing tool that takes the output of the ssg (eleventy) and optimizes the website for best user experience and best Core Web Vitals scores.

Check the docs [here](https://jampack.divriots.com/) for more information and possible configurations.

It is important to test the website locally after optimization because it is not 100% accurate. After running `npm run build`, test the webiste using something like http-server to make sure that the website is working as expected.

```bash
npx http-server _site
```

`npm run build` already has the jampack command.

## Things to do

- [X] Add proper meta alternative tags for SEO due to having multiple languages.
- [X] Fix animations using proper s_ prefix 
- [X] Add 404 page with proper permalink
- [X] Fix scroll behavior on content overflow with animations
- [ ] Verify redirects file to make sure it works
- [ ] Add a Google Drive link to download my resume
- [ ] Review semantic tags of the website
- [ ] Use Date.now() for the footer instead of hardcoding the year

