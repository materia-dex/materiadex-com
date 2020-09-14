# gatsby-plugin-algolia-docsearch

Easily add Algolia DocSearch to your Gatsby site.

Inspired by the code at [https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-tagmanager](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-tagmanager)

## Install

`npm install --save gatsby-plugin-algolia-docsearch`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-algolia-docsearch`,
    options: {
      apiKey: "ALGOLIA_DOCUSEARCH_API_KEY", // required
      indexName: "ALGOLIA_DOCUSEARCH_INDEX_NAME", // required
      inputSelector: "ALGOLIA_DOCUSEARCH_INPUT_SELCTOR", // required
      appId: "ALGOLIA_DOCUSEARCH_APP_ID", // optional
      debug: false, // (bool) Optional. Default `false`
      loadCss: true // (bool) Optional. Default `true`
      deferJs: false // (bool) Optional. Default `false`
    }
  }
];
```

The fields `apiKey`, `indexName` and `inputSelector` must be set. This plugin has been configured not to throw when one
of these is missing, rather, it will simply do nothing. If you are running your own custom implementation of DocSearch,
you'll also need to provide your `appId`.

By default, this plugin loads the DocSearch CSS from a CDN. However you can stop it from doing that
by setting `loadCss` to `false`. This is useful if you are using your own custom CSS and want to
use your own workflow.

In addition, you can set `deferJs` to `true` which adds the `defer` attribute to the script tag that
loads the CDN hosted DocSearch js file. This may be useful if you find that the script is holding up
rendering of your site.

Now all that you need to do it add an `input` type element anywhere on the page with a selector that matches the `inputSelector`
field in your `options` object to enjoy Algolia DocSearch in your Gatsby project!

## Element Check

This plugin uses the [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) API to watch for changes to your
DOM tree and then call the `docsearch` function once at least once instance of the element is found in the tree.

It's a pretty neat API with support for all browsers including IE11. (<= IE10 won't be able to use this plugin however)

A small amount of overhead may occur on initial load due to this function watching the DOM tree however, once the element is found successfully
the observer is destroyed.
