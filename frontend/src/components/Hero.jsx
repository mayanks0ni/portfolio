const Hero = ({ profilePic, DiscordIcon, InstagramIcon, GithubIcon, LinkedInIcon }) => (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 space-y-8 md:space-y-0">
        <div>
            <h1 className="text-5xl font-bold text-white">Mayank Soni</h1>
            <p className="text-lg text-gray-400 mt-4 max-w-md">
                Full-Stack Developer, Graphics Designer and Video Editor
            </p>
            <div className="mt-6 flex space-x-4 text-gray-400">
                <a href="#"><img src={DiscordIcon} alt="Discord" className="w-6 h-6 hover:opacity-70" /></a>
                <a href="#"><img src={InstagramIcon} alt="Instagram" className="w-6 h-6 hover:opacity-70" /></a>
                <a href="github.com/mayanks0ni"><img src={GithubIcon} alt="Github" className="w-6 h-6 hover:opacity-70" /></a>
                <a href="linkedin.com/mayanks0ni"><img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6 hover:opacity-70" /></a>
            </div>
            <button className="mt-6 text-yellow-400 hover:underline">My story →</button>
        </div>
        <div className="relative w-72 mx-auto mt-20">
            {/* Blurred ambient background */}
            <img
                src={profilePic}
                alt="ambient"
                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-60 rounded-xl z-0"
            />

            {/* Main image */}
            <img
                src={profilePic}
                alt="main"
                className="relative w-full h-full object-cover rounded-xl z-10"
            />
        </div>
    </section>
);

export default Hero;