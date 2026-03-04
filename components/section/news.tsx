'use client'

import { news } from "@/data";
import NewsCard from "../news-card";
import PageHeader from "../page-header";

const News = () => {
  return (
    <main>
      <PageHeader title="News & Announcements" subtitle="Stay informed about happenings across the Diocese of Ibadan" />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <NewsCard key={item.slug} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;
