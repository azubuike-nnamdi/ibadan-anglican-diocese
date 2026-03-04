'use client';

import PageHeader from "@/components/page-header";
import { bishopPortrait, churchInterior } from "@/constants/images";
import { fadeUp } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";


export default function AboutUs() {
  return (
    <main>
      <PageHeader title="About the Diocese" subtitle="A legacy of faith, worship, and service since the 19th century" backgroundImage={churchInterior} />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <section>
              <motion.div {...fadeUp}>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our History</h2>
                <div className="gold-bar mb-6" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    The Diocese of Ibadan was established in 1952 as part of the Province of West Africa, Anglican Communion. It emerged from the historic missionary activities of the Church Missionary Society (CMS) which began work in the Ibadan area in the mid-19th century.
                  </p>
                  <p>
                    Over the decades, the Diocese has grown from a handful of parishes to over 120 churches spread across Ibadan and its environs. The Diocese has been instrumental in establishing schools, hospitals, and community development projects that have positively impacted millions of lives.
                  </p>
                  <p>
                    Today, the Diocese of Ibadan stands as one of the largest and most vibrant dioceses in the Church of Nigeria, Anglican Communion, continuing its mission of proclaiming the Gospel, nurturing believers, and serving the community.
                  </p>
                </div>
              </motion.div>
              <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="pt-5">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To proclaim the Lordship of Jesus Christ through evangelism, discipleship, and compassionate service to all people, building a community of faith rooted in the Anglican tradition.
                </p>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A vibrant, growing, and united Diocese impacting our community and the world for Christ through worship, witness, and works of mercy.
                </p>
              </motion.div>

            </section>

            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
              <Image src={bishopPortrait} alt="The Bishop" className="rounded-lg shadow-lg w-full mb-6" width={1000} height={1000} />

            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-3">Our Core Values</h2>
            <div className="gold-bar mx-auto" />
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Faith", desc: "Grounded in the Holy Scriptures and the traditions of the Anglican Communion." },
              { title: "Worship", desc: "Liturgical excellence and heartfelt praise in all our gatherings." },
              { title: "Service", desc: "Compassionate outreach to the poor, vulnerable, and marginalized." },
              { title: "Unity", desc: "One body in Christ, celebrating our diversity while pursuing common purpose." },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-none border border-border text-center"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
