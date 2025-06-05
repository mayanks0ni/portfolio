const Services = () => (
    <section className="bg-[#2a2a3d] py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
            <div>
                <h3 className="text-white font-semibold text-xl">Any Type Of Query & Discussion.</h3>
                <p className="text-gray-400 mt-2">Feel free to reach out anytime.</p>
                <a href="#" className="text-yellow-400 inline-block mt-4">mayanks86027@gmail.com →</a>
            </div>
            <div>
                <blockquote className="italic text-gray-400">"Every 60 seconds, a minute passes away in Africa."</blockquote>
                <div className="mt-4 text-sm text-gray-500">
                    <span className="font-semibold text-yellow-400">4</span> Years Experience<br />
                </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
                <div className="bg-yellow-400 text-black px-4 py-3 rounded-lg font-bold hover:scale-110 transition duration 400 ease-in-out">Full-Stack Developer - 2 Projects</div>
                <div className="bg-yellow-600 px-12 py-3 rounded-lg hover:scale-110 transition duration 400 ease-in-out">Course Related - 1 Project</div>
                <div className="bg-yellow-800 px-6 py-3 rounded-lg hover:scale-110 transition duration 400 ease-in-out">Content Creation - 20+ Projects</div>
            </div>
        </div>
    </section>
);

export default Services;