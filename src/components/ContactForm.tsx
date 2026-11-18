import { useState, type FormEvent } from 'react';
import type { ContactFormCopy } from '../data/mockData';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface ContactFormProps {
	endpoint?: string;
	copy: ContactFormCopy;
}

export default function ContactForm({ endpoint = '', copy }: ContactFormProps) {
	const [status, setStatus] = useState<{ kind: 'success' | 'error'; message: string } | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setStatus(null);
		const form = event.currentTarget;

		if (!endpoint) {
			setStatus({
				kind: 'error',
				message: copy.endpointMissing,
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
			setStatus({ kind: 'success', message: copy.successMessage });
		} catch (error) {
			setStatus({
				kind: 'error',
				message: error instanceof Error ? `${copy.errorPrefix} ${error.message}` : copy.genericError,
			});
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<form className="space-y-5" onSubmit={handleSubmit}>
			<div className="grid gap-5 sm:grid-cols-2">
				<div className="space-y-2">
					<label className="form-label" htmlFor="contact-name">{copy.nameLabel}</label>
					<Input id="contact-name" name="name" autoComplete="name" placeholder={copy.namePlaceholder} required />
				</div>
				<div className="space-y-2">
					<label className="form-label" htmlFor="contact-email">{copy.emailLabel}</label>
					<Input id="contact-email" name="email" type="email" autoComplete="email" placeholder={copy.emailPlaceholder} required />
				</div>
			</div>
			<div className="space-y-2">
				<label className="form-label" htmlFor="contact-company">{copy.businessLabel}</label>
				<Input id="contact-company" name="company" autoComplete="organization" placeholder={copy.businessPlaceholder} />
			</div>
			<div className="space-y-2">
				<label className="form-label" htmlFor="contact-message">{copy.messageLabel}</label>
				<Textarea id="contact-message" name="message" placeholder={copy.messagePlaceholder} required rows={4} />
			</div>
			<div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
				<Button type="submit" disabled={isSubmitting}>
					{isSubmitting ? copy.submittingLabel : copy.submitLabel} <span aria-hidden="true">↗</span>
				</Button>
				<p className="text-xs leading-5 text-slate-600">{copy.followUpNote}</p>
			</div>
			{status && (
				<p className={status.kind === 'success' ? 'form-status-success' : 'form-status-error'} role={status.kind === 'error' ? 'alert' : 'status'} aria-live="polite">
					{status.message}
				</p>
			)}
		</form>
	);
}
