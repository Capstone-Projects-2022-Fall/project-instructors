# Hosting your API Documentation

To host your JavaDoc, PyDoc, or any HTML generated API docs in Docusaurus you should add them to the `documentation/static` directory. Any files in the static directory will be accessible from the root of your website. [See static asset documentation for more](https://docusaurus.io/docs/static-assets).  

:::warning Docusaurus is React based and uses its own router
While you can statically host assets like JavaDoc. The default behavior for linking pages may produce unexpected results. 
For example : 
```md
[Please visit our JavaDoc for more information.](/edu/temple/cis3296/package-summary.html)
```

You would expect to open the JavaDoc but resolves in a 404. Go ahead try it.
[Please visit our JavaDoc for more information.](/edu/temple/cis3296/package-summary.html)

This is because the ReactDOM will first look for a React page, but it doesn't exist. If you actually refresh the page it will take you to your javadoc. This is obviously not a great user experience.
:::

:::success Use an `<a/>` tag!

```html
<a target="_blank" href="/edu/temple/cis3296/package-summary.html">Please visit our JavaDoc for more information.</a>
```

Using `target="_blank"` forces the browser to open a new page which avoids the React Router.

:::

<a target="_blank" href="/edu/temple/cis3296/package-summary.html">Please visit our JavaDoc for more information.</a>
