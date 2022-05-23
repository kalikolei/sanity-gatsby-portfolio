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
                  buildHookId: '628c18fafc7c7f157a4a092c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-du967ftt',
                  apiId: '41f98775-7388-418e-8b2f-187a88565152'
                },
                {
                  buildHookId: '628c18fbab6e6515efd6be70',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-guqa8dss',
                  apiId: 'a9b1c97d-89d5-4a6c-bc89-73fb6a5d3f19'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kalikolei/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-guqa8dss.netlify.app',
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
