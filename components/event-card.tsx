import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

import { DioceseEvent } from "@/lib/types";
import { format } from "date-fns";

interface EventCardProps {
  event: DioceseEvent;
  index?: number;
}

const EventCard = ({ event, index = 0 }: EventCardProps) => {
  const dateObj = new Date(event.date);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="hover-lift overflow-hidden border-border shadow-none">
        <CardContent className="p-0">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-24 bg-primary text-primary-foreground flex flex-row sm:flex-col items-center justify-center p-4 gap-2 sm:gap-0">
              <span className="text-2xl sm:text-3xl font-bold font-serif">{format(dateObj, "dd")}</span>
              <span className="text-xs uppercase tracking-wider">{format(dateObj, "MMM yyyy")}</span>
            </div>
            <div className="flex-1 p-5">
              <Badge variant="secondary" className="mb-2 bg-secondary/20 text-secondary-foreground text-xs">
                {event.category}
              </Badge>
              <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{event.title}</h3>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-secondary" />
                  {event.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-secondary" />
                  {event.location}
                </span>
              </div>
              <Link href={`/events/${event.slug}`}>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EventCard;
