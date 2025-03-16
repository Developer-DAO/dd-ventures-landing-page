import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <Layout>
      <SEO />
      <main id="main-content" role="main">
        <Hero />
        <About />
      </main>
    </Layout>
  );
} 