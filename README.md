# gatsby-plugin-preload

Gatsby plugin to add `<link rel="preload" .../>` tags to the header.

## Install

`npm install --save gatsby-plugin-preload`

## How to use

- In your `gatsby-config.js`:
```js
plugins: [
  ...

  {
    resolve: 'gatsby-plugin-preload',
    options: {
      preloaders: [
        {
          href: "style.css",
          as: "style"
        },
        {
          href: "data.json",
          as: "fetch",
          crossOrigin: "anonymous" 
        },
        {
          href: "sintel-short.mp4",
          as: "video",
          type: "video/mp4"
        }
      ]
    }
  }
]
```

- Results in:
```html
<head>
  ...
  
  <link rel="preload" href="style.css" as="style"/>
  <link rel="preload" href="data.json" as="fetch" crossorigin="anonymous"/>
  <link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4"/>
</head>
```

