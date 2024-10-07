import type { Page } from '../payload-types'

export const staticHome: Page = {
  id: '',
  title: 'Home',
  slug: 'home',
  createdAt: '',
  updatedAt: '',
  meta: {
    title: 'Inicio',
    description: 'El mejor proyecto de la clase de Sistemas de Internet - UNI 2024',
  },
  hero: {
    type: 'lowImpact',
    richText: [
      {
        children: [
          {
            text: 'EL CRM DEL FUTURO',
          },
        ],
        type: 'h1',
      },
      {
        children: [
          {
            text: '¡Bienvenido a su tienda de comercio electrónico! ',
          },
          {
            text: 'Su base de datos está vacía.',
            bold: true,
          },
          {
            text: ' Para sembrar su base de datos con algunos productos y páginas, ',
          },
          {
            type: 'link',
            linkType: 'custom',
            url: '/admin',
            children: [
              {
                text: 'acceda al panel de control del administrador',
              },
            ],
          },
          {
            text: ' y haga clic en "Sembrar su base de datos». Si ya ha sembrado su base de datos, ',
          },
          {
            text: 'es posible que tenga que actualizar esta página para borrar la solicitud almacenada en caché.',
            bold: true,
          },
        ],
      },
      {
        children: [
          {
            text: 'El código de esta plantilla es completamente de código abierto y puede encontrarse en ',
          },
          {
            type: 'link',
            linkType: 'custom',
            url: 'https://github.com/payloadcms/payload/tree/main/templates/ecommerce',
            newTab: true,
            children: [
              {
                text: 'aquí',
              },
            ],
          },
          {
            text: '.',
          },
        ],
      },
    ],
    media: '',
  },
  layout: [
    {
      richText: [
        {
          children: [
            {
              text: 'Siembra tu base de datos',
            },
          ],
          type: 'h4',
        },
        {
          children: [
            {
              text: 'Su base de datos está vacía. Para sembrar su base de datos, ',
            },
            {
              type: 'link',
              linkType: 'custom',
              url: '/admin',
              children: [
                {
                  text: 'acceda al panel de control del administrador',
                },
              ],
            },
            {
              text: ' y haga clic en "sembrar su base de datos".',
            },
          ],
        },
      ],
      links: [
        {
          link: {
            type: 'custom',
            url: '/admin',
            label: 'Ir al panel de control',
            appearance: 'primary',
            reference: null,
          },
        },
      ],
      blockName: 'CTA',
      blockType: 'cta',
    },
  ],
}
