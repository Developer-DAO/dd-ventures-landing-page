import { motion } from 'framer-motion';
import { ParticleBackground } from './ParticleBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors">
      <ParticleBackground />
      <div className="container relative z-10 text-center px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block text-gray-900 dark:text-white">
              Welcome to
            </span>
            <span className="block mt-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-400">
              Developer DAO Ventures
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-xl sm:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Empowering the next generation of Web3 and AI entrepreneurs through a global network of developers and support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#about"
              className="btn btn-primary w-full sm:w-auto px-8 py-4 text-lg"
            >
              Learn More
            </a>
            <a
              href="https://airtable.com/appDMMIARfSeiovpk/shrZExypPetXEx6Ox"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-full sm:w-auto px-8 py-4 text-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 