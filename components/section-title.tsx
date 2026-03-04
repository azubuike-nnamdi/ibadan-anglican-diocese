import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-10 md:mb-14 ${centered ? "text-center" : ""}`}
    >
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
      <div className={`gold-bar ${centered ? "mx-auto" : ""} mb-4`} />
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
