'use client';

import { PageHeaderProps } from "@/lib/types";
import { motion } from "framer-motion";

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <section
      className="relative flex items-center justify-center min-h-[280px] md:min-h-[340px] bg-primary overflow-hidden"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}
    >
      {backgroundImage && <div className="absolute inset-0 bg-black/70" />}
      <div className="relative z-10 text-center px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-primary-foreground/80 text-lg max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="gold-bar mx-auto mt-6"
        />
      </div>
    </section>
  );
};

export default PageHeader;