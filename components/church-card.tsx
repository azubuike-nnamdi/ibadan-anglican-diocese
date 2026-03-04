import { Card, CardContent } from "@/components/ui/card";
import { churchInterior } from "@/constants/images";
import { Church } from "@/lib/types";
import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ChurchCardProps {
  church: Church;
  index?: number;
}

const ChurchCard = ({ church, index = 0 }: ChurchCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/churches/${church.slug}`}>
        <Card className="hover-lift overflow-hidden group cursor-pointer border-border shadow-none">
          <div className="aspect-16/10 overflow-hidden">
            <Image
              src={churchInterior}
              width={1000}
              height={1000}
              alt={church.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <CardContent className="p-5">
            <h3 className="font-serif font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
              {church.name}
            </h3>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-1">
              <MapPin className="h-3.5 w-3.5 text-secondary" />
              <span>{church.location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-secondary" />
              <span>{church.serviceTimes[0]}</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ChurchCard;
