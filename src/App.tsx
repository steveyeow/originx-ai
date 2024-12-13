import { motion } from 'framer-motion';
import '@fontsource/jetbrains-mono';
import { BinaryStream } from './components/BinaryStream';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#000810] to-[#001220] overflow-hidden">
      <BinaryStream />
      
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-jetbrains-mono font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              color: '#FAFAFA',
              textShadow: `
                0 0 10px rgba(250, 250, 250, 0.8),
                0 0 20px rgba(250, 250, 250, 0.6),
                0 0 30px rgba(250, 250, 250, 0.4),
                0 0 40px rgba(250, 250, 250, 0.3),
                0 0 70px rgba(250, 250, 250, 0.2)
              `,
              letterSpacing: '0.02em'
            }}
          >
            Building AGI For The Rest Of Us
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg text-[#7AECFF] mb-16 font-jetbrains-mono max-w-3xl mx-auto tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              textShadow: '0 0 15px rgba(122, 236, 255, 0.3)',
              opacity: 0.85
            }}
          >
            ensure it inspires free will and enriches collective enlightenment
          </motion.p>
          
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.p
              className="text-gray-400 font-jetbrains-mono mb-6 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              
            </motion.p>
            <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
              <a 
                href="https://bealive.ai/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-[#FFD700] font-jetbrains-mono transition-all duration-300
                  hover:text-[#FFE55C] underline underline-offset-4 decoration-1"
              >
                <span className="text-xl tracking-wide">Alive AI</span>
                <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
              <a 
                href="https://wandai.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-[#FFD700] font-jetbrains-mono transition-all duration-300
                  hover:text-[#FFE55C] underline underline-offset-4 decoration-1"
              >
                <span className="text-xl tracking-wide">Wand AI</span>
                <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;