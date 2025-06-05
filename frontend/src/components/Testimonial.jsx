const Testimonial = ({ testi }) => (
    <section className="bg-[#1f1f2e] py-16 px-6 max-w-7xl mx-auto text-center">
        <img src={testi} alt="testimonial"  className="mx-auto rounded-full mb-4 transition-all duration-700 ease-in-out hover:scale-110 hover:opacity-90 rotate-x-50 rotate-z-45"/>
        <p className="italic text-gray-400 max-w-xl mx-auto">
            “Amazing! At vero eos et accusamus et justo odio dignissimos...”
        </p>
        <p className="mt-2 text-sm text-white font-bold">Mayank Soni</p>
    </section>
);

export default Testimonial;