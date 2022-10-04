# How to Add Swagger Open API Spec!

## 1. Add your YAML or JSON to `/documentation/static`

You'll notice there is already an `openapi.yml.yaml` file provided, you could simply replace this or add a new one. 

## 2. Edit your `docusaurus.config.js` file

```javascript title="docusaurus.config.js" highlight={8}
   [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            id: 'using-single-yaml',
            spec: 'static/openapi.yml.yaml',
            route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
```

## 3. Check your results
