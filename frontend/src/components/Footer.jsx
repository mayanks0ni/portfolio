const Footer = ({ DiscordIcon, InstagramIcon, GithubIcon, LinkedInIcon }) => (
    <footer className="bg-[#1f1f2e] py-10 text-center text-gray-500 text-sm">
        <p>Thanks for scrolling, that's all folks.</p>
        <div className="flex justify-center mt-2 space-x-4">
            <a href="#"><img src={DiscordIcon} alt="Discord" className="w-6 h-6 hover:opacity-70" /></a>
            <a href="#"><img src={InstagramIcon} alt="Instagram" className="w-6 h-6 hover:opacity-70" /></a>
            <a href="github.com/mayanks0ni"><img src={GithubIcon} alt="Github" className="w-6 h-6 hover:opacity-70" /></a>
            <a href="linkedin.com/mayanks0ni"><img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6 hover:opacity-70" /></a>
        </div>
    </footer>
);

export default Footer;