# 🚀 Proyecto Agencia - [Nombre del Cliente]
Plantilla base optimizada con Astro, Tailwind CSS, shadcn/ui y Sanity.

## Estructura del frontend

```text
src/
├── components/
│   ├── ui/                 # Primitivas de formulario reutilizables
│   ├── ContactForm.tsx     # Única isla React interactiva
│   ├── Hero.astro
│   ├── Navbar.astro
│   ├── Portfolio.astro
│   ├── Process.astro
│   └── Services.astro
├── data/
│   └── mockData.ts         # Datos de muestra tipados, listos para migrar a GROQ
├── layouts/
│   └── Layout.astro        # SEO y estructura HTML común
├── pages/
│   └── index.astro         # Ensamble de la página principal
└── styles/
    └── global.css
```

La página usa datos locales de `src/data/mockData.ts`; todavía no consulta contenido de Sanity. Para conectar el formulario, configura `PUBLIC_CONTACT_ENDPOINT` con una URL que acepte un `POST` JSON con `name`, `email`, `company` y `message`.

## 📋 Checklist de Configuración Inicial

- [ ] **1. Base de Datos Aislada:** Entrar a [Sanity Manage](https://sanity.io/manage), crear un proyecto nuevo para el cliente y copiar el `projectId`.
- [ ] **2. Conectar Código:** Reemplazar el `projectId` en el archivo `astro.config.mjs` y en la configuración de la carpeta `/studio`.
- [ ] **3. Llenar SEO Genérico:** Levantar el servidor local (`npm run dev`), entrar al panel de Sanity y registrar el "Nombre del Sitio" y el "Logo" en los Ajustes Globales.
- [ ] **4. Despliegue en Vercel:** Subir el repositorio clonado a GitHub e importarlo como un nuevo proyecto en Vercel.
- [ ] **5. Webhook de Actualización:** Crear el gancho web en Vercel y pegarlo en la pestaña API del proyecto en Sanity para automatizar las publicaciones.