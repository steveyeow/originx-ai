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
            className="text-2xl md:text-3xl lg:text-5xl font-jetbrains-mono font-bold mb-8 tracking-tight"
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
              letterSpacing: '0.02em',
              lineHeight: 1.5
            }}
          >
            <span className="block whitespace-nowrap">build real-time generative information services</span>
            <span className="block whitespace-nowrap">for the rest of us</span>
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
                href="https://www.threegen.ai/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-[#FFD700] font-jetbrains-mono transition-all duration-300
                  hover:text-[#FFE55C] underline underline-offset-4 decoration-1"
              >
                <span className="text-xl tracking-wide">Threegen.AI</span>
                <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
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
            </div>
          </motion.div>
          
          {/* Footer */}
          <motion.div
            className="fixed bottom-6 left-0 right-0 z-20 px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex justify-between items-center">
              {/* Twitter/X Icon - Left */}
              <motion.a
                href="https://x.com/OriginX_AI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#000810]/50 backdrop-blur-sm rounded-full p-2"
                whileHover={{ scale: 1.1 }}
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-4 h-4 text-[#7AECFF] hover:text-[#A5F1FF] transition-colors duration-300"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>

              {/* Copyright - Right */}
              <div className="bg-[#000810]/50 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-[#7AECFF] font-jetbrains-mono text-sm">
                  Copyright © 2025 OriginX.AI
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
