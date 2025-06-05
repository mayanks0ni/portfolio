const Contact = () => (
    <section className="bg-[#2a2a3d] py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
            <h3 className="text-white text-xl font-bold">Got a project? Let's talk.</h3>
            <p className="text-gray-400 mt-2">Feel free to drop a message anytime.</p>
            <a href="#" className="text-yellow-400 inline-block mt-4">mayanks86027@gmail.com→</a>
        </div>
        <form className="space-y-4">
            <input className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500" placeholder="What’s your name?" />
            <input className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500" placeholder="Your fancy email" />
            <textarea className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-500" placeholder="Tell me about your project"></textarea>
            <button type="submit" className="text-yellow-400 hover:underline">→</button>
        </form>
    </section>
);

export default Contact;