const Blog = () => (
    <section className="bg-[#1f1f2e] py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-white text-2xl font-bold mb-4">All Creative Works, Selected projects.</h2>
        <button className="text-yellow-400 mb-6">Explore more →</button>
        <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg hover:shadow-yellow-400/20 hover:shadow-2xl transition duration 800 ease-in-out">ProjMate - Full-Stack Collaborative Platform</div>
            <div className="bg-gray-800 p-4 rounded-lg hover:shadow-yellow-400/20 hover:shadow-2xl transition duration 800 ease-in-out">Torrent to GDrive Discord Bot</div>
            <div className="bg-gray-800 p-4 rounded-lg hover:shadow-yellow-400/20 hover:shadow-2xl transition duration 800 ease-in-out">Matrix Calculator in C</div>
        </div>
    </section>
);

export default Blog;
