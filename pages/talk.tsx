import ContactForm from "@/components/ContactForm";

export default function Talk() {
    return (
        <main className="mt-12">
            <h1 className="text-2xl font-bold text-black">Let's Talk</h1>
            <p className="text-lg text-gray-700">
                If you have any question or suggestion about the site, or just
                feel like talking, I'd be happy to have a chat!
            </p>
            <br />
            <p className="text-lg text-gray-700">
                You can leave me a message below, find me in{' '}
                <a href="https://twitter.com/andresmarpz">
                    <b className="underline">Twitter</b>
                </a>{' '}
                /{' '}
                <a href="https://linkedin.com/in/andresmarpz">
                    <b className="underline">LinkedIn</b>
                </a>
                , or email me at
                <b> andresmarpz@gmail.com</b>
            </p>

            <div className="mt-12"><ContactForm /></div>
        </main>
    );
}
