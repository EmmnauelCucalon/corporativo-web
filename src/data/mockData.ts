export interface Service {
	number: string;
	label: string;
	title: string;
	description: string;
}

export interface Project {
	client: string;
	title: string;
	category: string;
	description: string;
	image: string;
	imageAlt: string;
	services: string[];
}

const whatsappMessage = 'Hola, me gustaría cotizar un proyecto web. ¿Podrían ayudarme?';

export const contactInfo = {
	phone: '+505 7893-5283',
	phoneHref: 'tel:+50578935283',
	whatsappUrl: `https://wa.me/50578935283?text=${encodeURIComponent(whatsappMessage)}`,
} as const;

export const services: Service[] = [
	{
		number: '01',
		label: 'PRESENCIA DIGITAL',
		title: 'Sitios corporativos de alto rendimiento',
		description: 'Experiencias digitales claras y veloces que fortalecen tu marca y convierten visitas en oportunidades.',
	},
	{
		number: '02',
		label: 'CONTENIDO AUTÓNOMO',
		title: 'Catálogos digitales autoadministrables',
		description: 'Gestiona productos, servicios y contenido desde un CMS flexible, sin depender de un equipo técnico.',
	},
	{
		number: '03',
		label: 'INGENIERÍA A MEDIDA',
		title: 'Arquitectura web a medida',
		description: 'Integraciones y plataformas diseñadas alrededor de tus procesos, tus usuarios y tus metas de crecimiento.',
	},
];

export const projects: Project[] = [
	{
		client: 'LABORATORIO MENDIETA',
		title: 'Ciencia y confianza, en una experiencia más cercana.',
		category: 'SALUD',
		description: 'Una presencia digital renovada para ayudar a pacientes y profesionales a encontrar servicios e información con claridad.',
		image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1600&q=85',
		imageAlt: 'Profesional de laboratorio trabajando con muestras clínicas',
		services: ['Sitio corporativo', 'Estrategia UX', 'Desarrollo Jamstack'],
	},
	{
		client: 'NORTE ESTUDIO',
		title: 'Un portafolio digital tan distintivo como su trabajo.',
		category: 'ARQUITECTURA',
		description: 'Un catálogo editorial que organiza proyectos y hace más simple explorar cada detalle.',
		image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
		imageAlt: 'Interior contemporáneo con luz natural y materiales cálidos',
		services: ['Catálogo digital', 'Dirección visual'],
	},
	{
		client: 'VERDE ORIGEN',
		title: 'Una experiencia de compra simple y consciente.',
		category: 'COMERCIO',
		description: 'Un escaparate digital optimizado para presentar productos y facilitar la decisión de compra.',
		image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85',
		imageAlt: 'Selección de frutas y vegetales frescos en un mercado',
		services: ['Comercio digital', 'Estrategia UX'],
	},
];
