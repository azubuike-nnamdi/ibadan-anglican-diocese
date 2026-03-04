import { Card, CardContent } from "@/components/ui/card";
import { churchInterior } from "@/constants/images";
import { NewsItem } from "@/lib/types";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  item: NewsItem;
  index?: number;
}

const NewsCard = ({ item, index = 0 }: NewsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/news#${item.slug}`}>
        <Card className="hover-lift overflow-hidden border-border group cursor-pointer shadow-none">
          <div className="aspect-video overflow-hidden">
            <Image
              src={churchInterior}
              width={1000}
              height={1000}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <CardContent className="p-5">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
              <Calendar className="h-3 w-3 text-secondary" />
              <span>{format(new Date(item.date), "MMM dd, yyyy")}</span>
            </div>
            <h3 className="font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{item.excerpt}</p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default NewsCard;
