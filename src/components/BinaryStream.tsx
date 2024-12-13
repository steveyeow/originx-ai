import { motion } from 'framer-motion';
import React from 'react';

export const BinaryStream = () => {
  const streamPatterns = [
    '[ SYSTEM_CORE_ACTIVE ]',
    '[ QUANTUM_SYNC_ENABLED ]',
    '[ NEURAL_BRIDGE_CONNECTED ]',
    '[ MEMORY_BUFFER_STABLE ]',
    '> initializing_neural_pathways',
    '> optimizing_quantum_states',
    '[ SYNAPTIC_LINK_VERIFIED ]',
    '[ CONSCIOUSNESS_MATRIX_STABLE ]',
    '> calibrating_ai_cores',
    '[ QUANTUM_ENTANGLEMENT_READY ]'
  ];

  const [flashingElements, setFlashingElements] = React.useState<Array<{
    id: number;
    pattern: string;
    position: { top: number; left: number };
  }>>([]);

  const [isVisible, setIsVisible] = React.useState(true);

  const getNewPosition = (existingPositions: Array<{ top: number; left: number }>) => {
    let attempts = 0;
    while (attempts < 100) {
      const newPos = {
        top: Math.random() * 100,
        left: Math.random() * 100
      };
      
      const isOverlapping = existingPositions.some(pos => 
        Math.abs(pos.top - newPos.top) < 10 && 
        Math.abs(pos.left - newPos.left) < 15
      );
      
      if (!isOverlapping) return newPos;
      attempts++;
    }
    return null;
  };

  const getNewPattern = (usedPatterns: string[]) => {
    const allPatterns = [
      `[ NEURAL_SYNC: ${(Math.random() * 0.2 + 0.8).toFixed(3)} ]`,
      `[ SYNAPSE_ACTIVITY: ${Math.floor(Math.random() * 1000 + 9000)} ]`,
      `[ NEURAL_PLASTICITY: ${(Math.random() * 0.3 + 0.7).toFixed(2)} ]`,
      
      `[ QUANTUM_ENTANGLEMENT: ${(Math.random() * 20 + 80).toFixed(1)}% ]`,
      `[ QUBIT_COHERENCE: ${(Math.random() * 0.1 + 0.9).toFixed(3)} ]`,
      `[ QUANTUM_STATE_VECTOR: ${Math.floor(Math.random() * 1000)}q ]`,
      
      `[ DEEP_LEARNING_DEPTH: ${Math.floor(Math.random() * 100 + 900)} ]`,
      `[ ATTENTION_ENTROPY: ${(Math.random() * 0.5 + 0.5).toFixed(3)} ]`,
      `[ MODEL_TEMPERATURE: ${(Math.random() * 0.7 + 0.3).toFixed(2)} ]`,
      
      '[ QUANTUM_SUPREMACY_ACHIEVED ]',
      '[ NEURAL_BREAKTHROUGH_DETECTED ]',
      '[ CONSCIOUSNESS_EMERGENCE_WARNING ]'
    ];
    
    const availablePatterns = allPatterns.filter(p => !usedPatterns.includes(p));
    return availablePatterns[Math.floor(Math.random() * availablePatterns.length)];
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFlashingElements(prev => {
        const current = prev.filter(el => el.id > Date.now() - 5000);
        
        if (current.length < 8) {
          const usedPatterns = current.map(el => el.pattern);
          const usedPositions = current.map(el => el.position);
          
          const newPosition = getNewPosition(usedPositions);
          if (newPosition) {
            const newPattern = getNewPattern(usedPatterns);
            if (newPattern) {
              current.push({
                id: Date.now() + Math.random(),
                pattern: newPattern,
                position: newPosition
              });
            }
          }
        }
        
        return current;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, Math.random() * 2500 + 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
      >
        {[...Array(4)].map((_, index) => (
          <div
            key={`stream-${index}`}
            className="absolute top-0 h-full"
            style={{
              left: `${index * 24}%`,
              width: '500px',
              overflow: 'hidden',
              opacity: 0.15,
            }}
          >
            <motion.div
              className="absolute top-0 w-full"
              initial={{ y: 0 }}
              animate={{ y: '-100%' }}
              transition={{
                duration: 150,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="font-mono whitespace-pre relative"
                  style={{
                    fontSize: '14px',
                    lineHeight: '3',
                    color: 'rgba(34, 211, 238, 0.5)',
                    textShadow: '0 0 12px rgba(34, 211, 238, 0.3)',
                  }}
                >
                  {streamPatterns[Math.floor(Math.random() * streamPatterns.length)]}
                </div>
              ))}
            </motion.div>
          </div>
        ))}

        {flashingElements.map(element => (
          <motion.div
            key={element.id}
            className="absolute font-mono whitespace-pre"
            style={{
              top: `${element.position.top}%`,
              left: `${element.position.left}%`,
              fontSize: '12px',
              color: element.pattern.includes('NEURAL') 
                ? 'rgba(34, 211, 238, 0.6)' 
                : element.pattern.includes('QUANTUM')
                  ? 'rgba(34, 211, 238, 0.5)' 
                  : 'rgba(34, 211, 238, 0.4)', 
              textShadow: element.pattern.includes('NEURAL')
                ? '0 0 8px rgba(34, 211, 238, 0.3), 0 0 12px rgba(34, 211, 238, 0.15)'
                : element.pattern.includes('QUANTUM')
                  ? '0 0 8px rgba(34, 211, 238, 0.3), 0 0 12px rgba(34, 211, 238, 0.15)'
                  : '0 0 8px rgba(34, 211, 238, 0.3), 0 0 12px rgba(34, 211, 238, 0.15)',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: [0, 0.9, 0],
              scale: [0.95, 1.02, 0.95],
            }}
            transition={{
              duration: Math.random() * 0.5 + 1,
              ease: "easeInOut",
            }}
            onAnimationComplete={() => {
              setFlashingElements(prev => 
                prev.filter(el => el.id !== element.id)
              );
            }}
          >
            {element.pattern}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};