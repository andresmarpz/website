// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
const ContactForm = () => {
	const [state, handleSubmit] = useForm("mwkywjnj");
	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}
	return (
		<form
			className='sm:flex grid grid-cols-1'
			onSubmit={handleSubmit}>
			<div className='flex justify-center flex-col xsm:flex-row gap-2 mb-2'>
				<input
					className='border rounded px-2 py-1 max-w-lg w-full'
					placeholder='Name'
					id='name'
					name='name'
				/>
				<input
					className='border rounded px-2 py-1 max-w-lg w-full'
					placeholder='Email'
					id="email"
					type="email"
					name="email"
				/>
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
				/>
			</div>
			<div>
				<textarea
					className="border rounded w-full p-2"
					id="message"
					name="message"
					placeholder='Your message..'
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={state.errors}
				/>
			</div>
			<div className='flex justify-center'>
				<button className='shadow text-white px-2 py-1 min-w-80 xsm:max-w-160 rounded bg-gray-900 w-full' type="submit" disabled={state.submitting}>
					{state.submitting ? '..' : 'Send'}
				</button>

			</div>
		</form>
	);
}

export default ContactForm