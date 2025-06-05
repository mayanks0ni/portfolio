const Header = () => (
    <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-3xl font-bold text-yellow-400">🟡</div>
        <nav className="space-x-8 text-gray-300">
            {/* <a href="#" className="hover:text-yellow-400">Services</a>
            <a href="#" className="hover:text-yellow-400">Works</a> */}
            <a href="#" className="hover:text-yellow-400">Portfolio</a>
        </nav>
    </header>
);

export default Header;
