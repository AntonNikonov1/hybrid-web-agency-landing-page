import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PainBlock from "./components/PainBlock";
import Methodology from "./components/Methodology";
import Comparison from "./components/Comparison";
import Portfolio from "./components/Portfolio";
import Offer from "./components/Offer";
import Guarantee from "./components/Guarantee";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

// const App: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate initial loading for animation impact
//     const timer = setTimeout(() => setIsLoading(false), 1200);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-[#050505] selection:bg-[#0070f3] selection:text-white">
//       <AnimatePresence>
//         {isLoading ? (
//           <motion.div
//             key="loader"
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black"
//             exit={{ opacity: 0, scale: 1.1 }}
//             transition={{ duration: 0.8, ease: "circOut" }}
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-white text-4xl font-black tracking-tighter"
//             >
//               HYBRID<span className="text-[#0070f3]">_</span>ENGINEERING
//             </motion.div>
//           </motion.div>
//         ) : (
//           <motion.div
//             key="content"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
//             <Header />
//             <main>
//               <Hero />
//               <PainBlock />
//               <Methodology />
//               <Comparison />
//               <Portfolio />
//               <Offer />
//               <Guarantee />
//               <FAQ />
//             </main>
//             <Footer />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for animation impact
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return <h1>HELLO</h1>;
};

export default App;
