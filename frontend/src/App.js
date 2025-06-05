import profilePic from './assets/profile.jpg'; // Replace with your actual image path
import DiscordIcon from './assets/icons/discord.svg'
import InstagramIcon from './assets/icons/instagram.svg'
import GithubIcon from './assets/icons/github.svg'
import LinkedInIcon from './assets/icons/linkedin.svg'
import { Header, Hero, Services, Logo, Blog, Testimonial, Chatbox, Contact, Footer } from './components/index'

function App() {
  return (
    <div className="bg-[#1f1f2e] text-white font-sans leading-relaxed">
      <Header></Header>
      <Hero profilePic={profilePic} DiscordIcon={DiscordIcon} InstagramIcon={InstagramIcon} GithubIcon={GithubIcon} LinkedInIcon={LinkedInIcon}></Hero>
      <Services></Services>
      <Logo></Logo>
      <Blog></Blog>
      <Testimonial testi={profilePic}></Testimonial>
      <Chatbox></Chatbox>
      <Contact></Contact>
      <Footer DiscordIcon={DiscordIcon} InstagramIcon={InstagramIcon} GithubIcon={GithubIcon} LinkedInIcon={LinkedInIcon}></Footer>
    </div>
  );
}

export default App;
