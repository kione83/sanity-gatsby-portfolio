export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61570f077e455f00b0f3362b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-t92cv51m',
                  apiId: '01def1e5-a350-4407-a71d-6174eb12be85'
                },
                {
                  buildHookId: '61570f07cd88d000ada16dfc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fpb31dg7',
                  apiId: '0745a387-ff70-4a48-b787-84d533c091e5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kione83/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fpb31dg7.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
