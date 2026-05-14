import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/GeoGenesis/blog',
    component: ComponentCreator('/GeoGenesis/blog', 'c7d'),
    exact: true
  },
  {
    path: '/GeoGenesis/blog/archive',
    component: ComponentCreator('/GeoGenesis/blog/archive', '4d8'),
    exact: true
  },
  {
    path: '/GeoGenesis/blog/authors',
    component: ComponentCreator('/GeoGenesis/blog/authors', '6fd'),
    exact: true
  },
  {
    path: '/GeoGenesis/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/GeoGenesis/blog/authors/all-sebastien-lorber-articles', 'f74'),
    exact: true
  },
  {
    path: '/GeoGenesis/blog/authors/yangshun',
    component: ComponentCreator('/GeoGenesis/blog/authors/yangshun', '820'),
    exact: true
  },
  {
    path: '/GeoGenesis/blog/first-blog-post',
    component: ComponentCreator('/GeoGenesis/blog/first-blog-post', 'a29'),
    exact: true
  },
  {
    path: '/GeoGenesis/blog/long-blog-post',
    component: ComponentCreator('/GeoGenesis/blog/long-blog-post', '1aa'),
    exact: true
  },
  {
    path: '/GeoGenesis/blog/mdx-blog-post',
    component: ComponentCreator('/GeoGenesis/blog/mdx-blog-post', 'ee5'),
    exact: true
  },
  {
    path: '/GeoGenesis/blog/tags',
    component: ComponentCreator('/GeoGenesis/blog/tags', '560'),
    exact: true
  },
  {
    path: '/GeoGenesis/blog/tags/docusaurus',
    component: ComponentCreator('/GeoGenesis/blog/tags/docusaurus', '8c8'),
    exact: true
  },
  {
    path: '/GeoGenesis/blog/tags/facebook',
    component: ComponentCreator('/GeoGenesis/blog/tags/facebook', 'eb4'),
    exact: true
  },
  {
    path: '/GeoGenesis/blog/tags/hello',
    component: ComponentCreator('/GeoGenesis/blog/tags/hello', 'adf'),
    exact: true
  },
  {
    path: '/GeoGenesis/blog/tags/hola',
    component: ComponentCreator('/GeoGenesis/blog/tags/hola', '73f'),
    exact: true
  },
  {
    path: '/GeoGenesis/blog/welcome',
    component: ComponentCreator('/GeoGenesis/blog/welcome', '615'),
    exact: true
  },
  {
    path: '/GeoGenesis/markdown-page',
    component: ComponentCreator('/GeoGenesis/markdown-page', 'a9d'),
    exact: true
  },
  {
    path: '/GeoGenesis/docs',
    component: ComponentCreator('/GeoGenesis/docs', '7a5'),
    routes: [
      {
        path: '/GeoGenesis/docs',
        component: ComponentCreator('/GeoGenesis/docs', '1ef'),
        routes: [
          {
            path: '/GeoGenesis/docs',
            component: ComponentCreator('/GeoGenesis/docs', '858'),
            routes: [
              {
                path: '/GeoGenesis/docs/category/tutorial---basics',
                component: ComponentCreator('/GeoGenesis/docs/category/tutorial---basics', 'c70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GeoGenesis/docs/category/tutorial---extras',
                component: ComponentCreator('/GeoGenesis/docs/category/tutorial---extras', '70e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GeoGenesis/docs/intro',
                component: ComponentCreator('/GeoGenesis/docs/intro', 'f96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GeoGenesis/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/GeoGenesis/docs/tutorial-basics/congratulations', '532'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GeoGenesis/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/GeoGenesis/docs/tutorial-basics/create-a-blog-post', '39e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GeoGenesis/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/GeoGenesis/docs/tutorial-basics/create-a-document', '101'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GeoGenesis/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/GeoGenesis/docs/tutorial-basics/create-a-page', '914'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GeoGenesis/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/GeoGenesis/docs/tutorial-basics/deploy-your-site', '7d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GeoGenesis/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/GeoGenesis/docs/tutorial-basics/markdown-features', '48f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GeoGenesis/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/GeoGenesis/docs/tutorial-extras/manage-docs-versions', '9a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/GeoGenesis/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/GeoGenesis/docs/tutorial-extras/translate-your-site', '873'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/GeoGenesis/',
    component: ComponentCreator('/GeoGenesis/', '5da'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
