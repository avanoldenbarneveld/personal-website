# Personal Website

A modern personal website built with Astro, featuring a blog with content collections and markdown support.

## ✨ Features

- **Fast & Modern**: Built with Astro for optimal performance
- **Blog System**: Full-featured blog with content collections
- **Markdown Support**: Write blog posts in markdown with frontmatter
- **Responsive Design**: Clean, modern UI that works on all devices
- **TypeScript**: Full TypeScript support for better development experience
- **Static Site Generation**: Fast loading and great SEO

## 🚀 Project Structure

```text
/
├── public/                 # Static assets
├── src/
│   ├── content/
│   │   ├── blog/          # Blog posts (markdown files)
│   │   └── config.ts      # Content collections configuration
│   ├── layouts/
│   │   └── Layout.astro   # Main layout component
│   ├── pages/
│   │   ├── index.astro    # Home page
│   │   ├── about.astro    # About page
│   │   ├── contact.astro  # Contact page
│   │   └── blog/
│   │       ├── index.astro    # Blog listing page
│   │       └── [...slug].astro # Individual blog post pages
│   └── styles/
│       └── global.css     # Global styles
└── package.json
```

## 📝 Blog Features

### Writing Blog Posts

Create new blog posts by adding `.md` files to `src/content/blog/`. Each post should have frontmatter:

```markdown
---
title: "Your Post Title"
pubDate: "2025-01-15"
description: "A brief description of your post"
draft: false
---

# Your Content Here

Write your blog post content in markdown...
```

### Frontmatter Options

- `title` (required): The title of your blog post
- `description` (required): A brief description for SEO and previews
- `pubDate` (required): Publication date (YYYY-MM-DD format)
- `updatedDate` (optional): Last updated date
- `heroImage` (optional): Path to a hero image
- `draft` (optional): Set to `true` to hide from blog listing

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and visit `http://localhost:4321`

4. **View your blog** at `http://localhost:4321/blog`

## 📚 Adding Content

### New Blog Post

1. Create a new `.md` file in `src/content/blog/`
2. Add the required frontmatter
3. Write your content in markdown
4. Set `draft: false` when ready to publish
5. The post will automatically appear in your blog listing

### Example Blog Post

```markdown
---
title: "My Amazing Blog Post"
pubDate: "2025-01-15"
description: "This is a description of my amazing blog post"
draft: false
---

# My Amazing Blog Post

This is the content of my blog post. You can use all standard markdown features:

## Headers
- Lists
- **Bold text**
- *Italic text*
- [Links](https://example.com)

## Code Blocks

```javascript
console.log("Hello, world!");
```

The possibilities are endless!
```

## 🎨 Customization

- **Styling**: Modify `src/styles/global.css` for custom styles
- **Layout**: Update `src/layouts/Layout.astro` for site-wide changes
- **Pages**: Add new pages in `src/pages/` for additional sections
- **Content**: Configure content collections in `src/content/config.ts`

## 📦 Deployment

This site can be deployed to any static hosting service:

- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use GitHub Actions for deployment
- **Any static host**: Build with `npm run build` and upload the `dist/` folder

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
