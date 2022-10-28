"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[782],{7900:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=o(7462),s=(o(7294),o(3905));o(1839);const a={},n="How to Add Swagger Open API Spec!",c={unversionedId:"api-specification/how-to-add-swagger",id:"api-specification/how-to-add-swagger",title:"How to Add Swagger Open API Spec!",description:"1. Add your YAML or JSON to /documentation/static",source:"@site/docs/api-specification/how-to-add-swagger.md",sourceDirName:"api-specification",slug:"/api-specification/how-to-add-swagger",permalink:"/project-instructors/docs/api-specification/how-to-add-swagger",draft:!1,editUrl:"https://github.com/Capstone-Projects-2022-Fall/project-instructors/edit/main/documentation/docs/api-specification/how-to-add-swagger.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Laravel Backend App",permalink:"/project-instructors/docs/api-specification/application"},next:{title:"Hosting your API Documentation",permalink:"/project-instructors/docs/api-specification/javadoc"}},r={},d=[{value:"1. Add your YAML or JSON to <code>/documentation/static</code>",id:"1-add-your-yaml-or-json-to-documentationstatic",level:2},{value:"2. Edit your <code>docusaurus.config.js</code> file",id:"2-edit-your-docusaurusconfigjs-file",level:2},{value:"3. Check your results",id:"3-check-your-results",level:2}],u={toc:d};function p(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"how-to-add-swagger-open-api-spec"},"How to Add Swagger Open API Spec!"),(0,s.kt)("h2",{id:"1-add-your-yaml-or-json-to-documentationstatic"},"1. Add your YAML or JSON to ",(0,s.kt)("inlineCode",{parentName:"h2"},"/documentation/static")),(0,s.kt)("p",null,"You'll notice there is already an ",(0,s.kt)("inlineCode",{parentName:"p"},"openapi.yml.yaml")," file provided, you could simply replace this or add a new one. "),(0,s.kt)("h2",{id:"2-edit-your-docusaurusconfigjs-file"},"2. Edit your ",(0,s.kt)("inlineCode",{parentName:"h2"},"docusaurus.config.js")," file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="docusaurus.config.js" highlight={8}',title:'"docusaurus.config.js"',highlight:"{8}"},"   [\n      'redocusaurus',\n      {\n        // Plugin Options for loading OpenAPI files\n        specs: [\n          {\n            id: 'using-single-yaml',\n            spec: 'static/openapi.yml.yaml',\n            route: '/api/',\n          },\n        ],\n        // Theme Options for modifying how redoc renders them\n        theme: {\n          // Change with your site colors\n          customCss: require.resolve('./src/css/custom.css'),\n        },\n      },\n    ],\n")),(0,s.kt)("h2",{id:"3-check-your-results"},"3. Check your results"))}p.isMDXComponent=!0}}]);