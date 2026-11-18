import { useState, type FormEvent } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface ContactFormProps {
	endpoint?: string;
}

export default function ContactForm({ endpoint = '' }: ContactFormProps) {
	const [status, setStatus] = useState<{ kind: 'success' | 'error'; message: string } | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setStatus(null);
		const form = event.currentTarget;

		if (!endpoint) {
			setStatus({
				kind: 'error',
				message: 'El formulario aún no está conectado. Configura PUBLIC_CONTACT_ENDPOINT para habilitar el envío.',
			});
			return;
		}

		setIsSubmitting(true);

		try {
			const formData = new FormData(form);
			const response = await fetch(endpoint, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(Object.fromEntries(formData.entries())),
			});

			if (!response.ok) {
				throw new Error(`El servicio respondió con el estado ${response.status}.`);
			}

			form.reset();
			setStatus({ kind: 'success', message: 'Gracias por escribirnos. Nos pondremos en contacto pronto.' });
		} catch (error) {
			setStatus({
				kind: 'error',
				message: error instanceof Error ? `No se pudo enviar tu mensaje. ${error.message}` : 'No se pudo enviar tu mensaje.',
			});
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<form className="space-y-5" onSubmit={handleSubmit}>
			<div className="grid gap-5 sm:grid-cols-2">
				<div className="space-y-2">
					<label className="form-label" htmlFor="contact-name">Nombre</label>
					<Input id="contact-name" name="name" autoComplete="name" placeholder="Tu nombre" required />
				</div>
				<div className="space-y-2">
					<label className="form-label" htmlFor="contact-email">Correo de trabajo</label>
					<Input id="contact-email" name="email" type="email" autoComplete="email" placeholder="nombre@empresa.com" required />
				</div>
			</div>
			<div className="space-y-2">
				<label className="form-label" htmlFor="contact-company">Empresa <span className="font-normal text-muted">(opcional)</span></label>
				<Input id="contact-company" name="company" autoComplete="organization" placeholder="Nombre de tu empresa" />
			</div>
			<div className="space-y-2">
				<label className="form-label" htmlFor="contact-message">¿Cómo podemos ayudarte?</label>
				<Textarea id="contact-message" name="message" placeholder="Cuéntanos brevemente sobre tu proyecto..." required rows={4} />
			</div>
			<div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
				<Button type="submit" disabled={isSubmitting}>
					{isSubmitting ? 'Enviando...' : 'Enviar mensaje'} <span aria-hidden="true">↗</span>
				</Button>
				<p className="text-xs leading-5 text-muted">Al enviar, aceptas que te contactemos sobre tu consulta.</p>
			</div>
			{status && (
				<p className={status.kind === 'success' ? 'form-status-success' : 'form-status-error'} role={status.kind === 'error' ? 'alert' : 'status'} aria-live="polite">
					{status.message}
				</p>
			)}
		</form>
	);
}
