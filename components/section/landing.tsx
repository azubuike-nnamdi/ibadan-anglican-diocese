'use client'

import { bishopPortrait, heroCathedral } from "@/constants/images";
import { ABOUT_URL, CHURCHES_URL, EVENTS_URL, NEWS_URL, YOUTH_URL } from "@/constants/routes";
import { churches, events, news } from "@/data";
import { motion } from "framer-motion";
import { BookOpen, CalendarDaysIcon, ChevronRight, ChurchIcon, HeartPulseIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ChurchCard from "../church-card";
import EventCard from "../event-card";
import NewsCard from "../news-card";
import SectionTitle from "../section-title";
import { Button } from "../ui/button";


const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const Landing = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroCathedral} alt="Cathedral" className="w-full h-full object-cover" width={1000} height={1000} />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">Welcome to</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              The Diocese of Ibadan
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Anglican Communion — Proclaiming Christ, Building Faith, Serving Community
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href={CHURCHES_URL}>
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
                  Find a Church <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href={ABOUT_URL}>
                <Button size="lg" variant="outline" className="bg-transparent text-white ">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bishop Welcome */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div {...fadeUp}>
              <div className="relative">
                <Image
                  src={bishopPortrait}
                  width={1000}
                  height={1000}
                  alt="The Bishop of Ibadan"
                  className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-lg -z-10" />
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
              <p className="text-gold-accent font-semibold tracking-wider uppercase text-sm mb-2">From the Bishop&apos;s Desk</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Welcome Message</h2>
              <div className="gold-bar mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                &quot;Grace and peace to you in the name of our Lord Jesus Christ. The Diocese of Ibadan continues to be a beacon of faith, love, and service in our great city and beyond. We invite you to join us in worship, fellowship, and the transformative work of the Gospel.&quot;
              </p>
              <p className="font-serif text-foreground font-semibold">Most Rev. Dr. Joseph Akinfenwa</p>
              <p className="text-sm text-muted-foreground">Bishop, Diocese of Ibadan</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats / Departments */}
      <section className="section-padding bg-primary">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: ChurchIcon, label: "Churches", value: "120+" },
              { icon: UsersIcon, label: "Clergy", value: "200+" },
              { icon: CalendarDaysIcon, label: "Annual Events", value: "50+" },
              { icon: HeartPulseIcon, label: "Outreach Programs", value: "30+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
                <p className="font-serif text-3xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <SectionTitle title="Upcoming Events" subtitle="Join us for worship, fellowship, and spiritual growth" />
          <div className="grid gap-5 max-w-3xl mx-auto">
            {events.slice(0, 3).map((event, i) => (
              <EventCard key={event.slug} event={event} index={i} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={EVENTS_URL}>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Events <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionTitle title="Latest News" subtitle="Stay updated with happenings across the Diocese" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.slice(0, 3).map((item, i) => (
              <NewsCard key={item.slug} item={item} index={i} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={NEWS_URL}>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                All News <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Find a Church */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <SectionTitle title="Find a Church" subtitle="Discover an Anglican parish near you in Ibadan" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {churches.slice(0, 3).map((church, i) => (
              <ChurchCard key={church.slug} church={church} index={i} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={CHURCHES_URL}>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Churches <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Youth CTA */}
      <section className="section-padding bg-diocese-background">
        <div className="container-narrow text-center">
          <motion.div {...fadeUp}>
            <BookOpen className="h-10 w-10 text-secondary mx-auto mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Youth Ministry
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8 text-lg">
              Empowering the next generation of Anglican leaders through discipleship, education, and fellowship.
            </p>
            <Link href={YOUTH_URL}>
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
                Explore Youth Ministry <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
