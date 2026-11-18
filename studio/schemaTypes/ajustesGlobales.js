import {defineField, defineType} from 'sanity'

export const ajustesGlobales = defineType({
  name: 'ajustesGlobales',
  title: 'Ajustes Globales y SEO',
  type: 'document',
  fields: [
    defineField({
      name: 'nombreSitio',
      title: 'Nombre del Sitio Web',
      type: 'string',
    }),
    defineField({
      name: 'descripcionSEO',
      title: 'Descripción para Google',
      type: 'text',
    }),
    defineField({
      name: 'logoPrincipal',
      title: 'Logo Principal',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
