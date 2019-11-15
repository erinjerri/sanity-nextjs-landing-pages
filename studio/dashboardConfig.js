export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dcf13b0a62c728e4d53371e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ouuvnimz',
                  apiId: '990a3ee7-2b9f-429f-b17b-bd905a8d0405'
                },
                {
                  buildHookId: '5dcf13b034bd6a70c179047c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-h43rtqcw',
                  apiId: '036a5897-3fdd-48f3-b901-0fca4e888d5b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erinjerri/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-h43rtqcw.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
