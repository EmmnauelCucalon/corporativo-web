import type { TextareaHTMLAttributes } from 'react';

export function Textarea({ className = '', ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
	return <textarea className={`form-input min-h-32 resize-y ${className}`} {...props} />;
}
