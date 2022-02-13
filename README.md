# 11ty njk-in-md demo

This repository contains a demo of Nunjucks blocks includes with macros and templates, in Markdown source files.

## Purposes

My first intention was to create a collection of reusable components ready to be used in my markdown files, without losing the ability to write markdown content. This way, I can create complex pages with sub-blocks and components, and use them to tag parts in my markdown files.

## Run the Demo

1. Clone this repository and enter the folder
2. Install the dependencies with `npm install`
3. Run the demo with `npm start` and point your browser to http://localhost:8080

The demo codebase is located in the `src` folder, starting with the `src/index.md` markdown file.

## How it works?

This is a very standard 11ty config, with two subtle details in the `.eleventy.js` config file:

1. Markdown files uses the Nunjuck engine for template pre-rendering, by setting `markdownTemplateEngine: "njk"` 11ty option
2. Indent code blocks are disabled in markdown-it to prevent unwanted code blocks due to your markdown/templates indent by setting `markdownIt.disable(["code"])`. Fenced codeblocks stil work.

### Layout vs Templates

Markdown pages uses a layout as in a regular 11ty config. Here, the `src/_includes/_base.njk` file.

Because of the `markdownTemplateEngine` option, markdown files can also use Nunjucks instructions. In the `src/index.md`, we use an `{% extends 'page.njk' %}` instruction. Our markdown file is now using the `src/_includes/page.njk` file as a template.

The template here defined several blocks our markdown will have to file to settle content.

### Macros and Includes

The template `src/_includes/page.njk` import collections of components in the shape of macros. It allows the markdown file to use those macros anywhere. They're defined in the `src/_includes/utils/*` files.

In the demo, we've got a `image` block and a `btn` component. They act as regular Nunjucks macros. Thanks to the Nunjucks `caller()` instruction, you can define internal content to those blocks as well as passing parameters.
