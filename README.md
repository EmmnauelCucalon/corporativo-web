# Cucalón Studio

Sitio web de Cucalón Studio, estudio de diseño y desarrollo web para MIPYMES y empresas en Managua, Nicaragua.

## Desarrollo

```sh
npm run dev
npm run build
```

La página y sus secciones están implementadas en Astro. Los datos de navegación, contenido, paquetes, portafolio, proceso y contacto se centralizan en `src/data/mockData.ts`. El único componente interactivo es el formulario React de contacto.

## Estructura

```text
src/
├── components/
│   ├── ui/                 # Primitivas locales para el formulario
│   ├── Contact.astro
│   ├── ContactForm.tsx     # Isla React hidratada al ser visible
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── Navbar.astro
│   ├── Portfolio.astro
│   ├── Pricing.astro
│   └── Process.astro
├── data/
│   └── mockData.ts
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

El formulario está listo para conectarse a un servicio que acepte un `POST` JSON. Configura `PUBLIC_CONTACT_ENDPOINT` para habilitar el envío.
