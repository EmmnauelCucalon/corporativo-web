export interface NavigationLink {
	label: string;
	href: string;
}

export interface PricingPackage {
	name: string;
	price: string;
	payment?: string;
	delivery?: string;
	includes: string[];
	recommended: boolean;
	whatsappUrl: string;
}

export interface PortfolioProject {
	name: string;
	url: string;
	description: string;
}

export interface ProcessStep {
	number: string;
	title: string;
	description: string;
}

export interface ContactFormCopy {
	nameLabel: string;
	namePlaceholder: string;
	emailLabel: string;
	emailPlaceholder: string;
	businessLabel: string;
	businessPlaceholder: string;
	messageLabel: string;
	messagePlaceholder: string;
	submitLabel: string;
	submittingLabel: string;
	followUpNote: string;
	endpointMissing: string;
	successMessage: string;
	errorPrefix: string;
	genericError: string;
}

export const siteContent = {
	name: 'Cucalón Studio',
	title: 'Cucalón Studio | Diseño y desarrollo web en Managua, Nicaragua',
	description:
		'Diseño y desarrollo de sitios web rápidos y profesionales para MIPYMES y empresas en Managua, Nicaragua.',
	hero: {
		eyebrow: 'DISEÑO Y DESARROLLO WEB · MANAGUA, NICARAGUA',
		title: 'Una web profesional para que tu negocio proyecte solidez y venda más.',
		description:
			'Creamos sitios web rápidos, claros y adaptados a celulares para MIPYMES y empresas que quieren crecer sin complicaciones técnicas.',
		primaryAction: 'Ver paquetes de apertura',
		secondaryAction: 'Cotizar por WhatsApp',
		supportingNote: 'Una presencia digital profesional, sin vueltas ni complicaciones técnicas.',
	},
	pricing: {
		eyebrow: 'TARIFAS DE APERTURA',
		title: 'Una solución clara para cada etapa de tu negocio.',
		description: 'Paquetes profesionales, precios transparentes y un proceso directo.',
		recommendedLabel: 'Recomendado',
		includesLabel: 'Incluye:',
		deliveryLabel: 'Entrega:',
		quoteAction: 'Cotizar este paquete',
		note: 'Tarifas especiales de apertura. Pago 50% al iniciar y 50% al entregar. El costo anual del dominio (.com) corre por cuenta del negocio.',
	},
	portfolio: {
		eyebrow: 'PORTAFOLIO',
		title: 'Trabajo pensado para negocios reales.',
		featuredLabel: 'CASO DESTACADO',
		visitAction: 'Visitar sitio',
		futureCase: 'Más proyectos se sumarán pronto.',
		futureCaseAction: 'Hablemos de tu negocio',
	},
	process: {
		eyebrow: 'UN PROCESO SENCILLO',
		title: 'De la idea al lanzamiento, paso a paso.',
		description: 'Siempre sabrás qué sigue y qué necesitamos de tu parte.',
	},
	contact: {
		eyebrow: 'CONTACTO',
		title: 'Hablemos de tu próximo proyecto.',
		description: 'Cuéntanos qué necesita tu negocio y encontremos juntos el siguiente paso.',
		whatsappAction: 'Cotizar por WhatsApp',
		mobileWhatsappAction: 'WhatsApp',
		phoneLabel: 'Teléfono',
		locationLabel: 'Ubicación',
		form: {
			nameLabel: 'Nombre',
			namePlaceholder: 'Tu nombre',
			emailLabel: 'Correo electrónico',
			emailPlaceholder: 'nombre@empresa.com',
			businessLabel: 'Negocio (opcional)',
			businessPlaceholder: 'Nombre de tu negocio',
			messageLabel: '¿Qué necesitas para tu negocio?',
			messagePlaceholder: 'Cuéntanos brevemente sobre tu proyecto...',
			submitLabel: 'Enviar consulta',
			submittingLabel: 'Enviando...',
			followUpNote: 'Usaremos tus datos para responder a esta consulta.',
			endpointMissing: 'El formulario aún no está conectado. Configura PUBLIC_CONTACT_ENDPOINT para habilitar el envío.',
			successMessage: 'Gracias por escribirnos. Nos pondremos en contacto pronto.',
			errorPrefix: 'No se pudo enviar tu mensaje.',
			genericError: 'No se pudo enviar tu mensaje.',
		} satisfies ContactFormCopy,
	},
	footer: {
		tagline: 'Diseño y desarrollo web en Managua, Nicaragua.',
		copyright: 'Todos los derechos reservados.',
	},
} as const;

export const navigationLinks: NavigationLink[] = [
	{ label: 'Paquetes', href: '#paquetes' },
	{ label: 'Portafolio', href: '#portafolio' },
	{ label: 'Proceso', href: '#proceso' },
	{ label: 'Contacto', href: '#contacto' },
];

export const contactInfo = {
	phone: '+505 7893-5283',
	phoneHref: 'tel:+50578935283',
	whatsappUrl:
		'https://wa.me/50578935283?text=Hola%20Emmanuel%2C%20me%20interesa%20cotizar%20un%20proyecto%20web%20para%20mi%20negocio.',
	location: 'Managua, Nicaragua',
} as const;

function packageWhatsappUrl(packageName: string) {
	const message = `Hola Emmanuel, me interesa cotizar el paquete ${packageName} para mi negocio.`;
	return `https://wa.me/50578935283?text=${encodeURIComponent(message)}`;
}

export const pricingPackages: PricingPackage[] = [
	{
		name: 'Presencia Express (One-Page)',
		price: '$80 – $120 USD',
		payment: 'pago único',
		delivery: '3 a 4 días hábiles',
		includes: [
			'1 página estructurada (Inicio, Servicios, Ubicación, WhatsApp)',
			'Diseño adaptado a celulares',
			'1 ronda de ajustes',
		],
		recommended: false,
		whatsappUrl: packageWhatsappUrl('Presencia Express (One-Page)'),
	},
	{
		name: 'Catálogo Inicial',
		price: '$160 – $220 USD',
		payment: 'pago único',
		delivery: '5 a 7 días hábiles',
		includes: [
			'Presentación del negocio',
			'Catálogo de hasta 15 productos',
			'Botón directo de pedido a WhatsApp',
			'1 ronda de ajustes',
		],
		recommended: true,
		whatsappUrl: packageWhatsappUrl('Catálogo Inicial'),
	},
	{
		name: 'Mantenimiento Básico',
		price: '$15 – $20 USD / mes',
		includes: ['Alojamiento gestionado', 'Hasta 2 cambios menores al mes (precios, textos o fotos)'],
		recommended: false,
		whatsappUrl: packageWhatsappUrl('Mantenimiento Básico'),
	},
];

export const projects: PortfolioProject[] = [
	{
		name: 'Laboratorio Mendieta',
		url: 'https://laboratoriomendieta.com',
		description:
			'Sitio corporativo y catálogo digital de productos químicos e higiénicos, optimizado para carga rápida y navegación clara.',
	},
];

export const processSteps: ProcessStep[] = [
	{
		number: '01',
		title: 'Recolección de material',
		description: 'Reunimos textos, fotos e información clave para presentar tu negocio con claridad.',
	},
	{
		number: '02',
		title: 'Diseño y desarrollo',
		description: 'Damos forma al sitio y lo preparamos para verse y funcionar bien en celulares.',
	},
	{
		number: '03',
		title: 'Revisión y ajustes',
		description: 'Revisas el resultado y aplicamos la ronda de ajustes incluida en tu paquete.',
	},
	{
		number: '04',
		title: 'Lanzamiento',
		description: 'Publicamos tu sitio y lo dejamos listo para compartir con tus clientes.',
	},
];
