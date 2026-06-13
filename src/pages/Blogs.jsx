import React from "react";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

const placeholderPosts = Array(6).fill(null).map((_, i) => ({
  id: i + 1,
  title: "Article Title",
  author: "Author Name",
  date: "—",
  excerpt: "Article excerpt and summary will appear here once content is available.",
}));

const Blogs = () => {
  return (
    <>
    <main className="animate-fade-in" style={{ background: "white", paddingBottom: "4rem" }}>
      <Helmet>
        <title>Blogs &amp; Articles | CarbonTatva AI</title>
        <meta name="description" content="Insights, research, and perspectives on carbon intelligence, ESG reporting, and climate action from the CarbonTatva AI team." />
        <link rel="canonical" href="https://carbontatva.com/blogs" />
      </Helmet>
      <div className="container">

        {/* Page Header */}
        <section style={{ padding: "4rem 0 3rem", textAlign: "center" }}>
          <h1 className="hero-title" style={{ fontSize: "3rem", margin: "0 auto 1rem" }}>
            Blogs & <span>Articles</span>
          </h1>
          <p className="hero-subtitle" style={{ margin: "0 auto" }}>
            Insights, research, and perspectives on carbon intelligence and climate action.
          </p>
        </section>

        {/* Blog Grid */}
        <section style={{ marginBottom: "4rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}>
            {placeholderPosts.map((post) => (
              <div key={post.id} className="paper-card" style={{ display: "flex", flexDirection: "column" }}>

                {/* Image Placeholder */}
                <div style={{
                  width: "100%",
                  paddingBottom: "56.25%",
                  backgroundColor: "var(--border-light)",
                  borderRadius: "12px",
                  marginBottom: "1.5rem",
                  position: "relative",
                }} />

                {/* Date · Author */}
                <p className="paper-authors" style={{ fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                  {post.date}&nbsp;·&nbsp;{post.author}
                </p>

                {/* Title */}
                <h3 className="paper-title" style={{ marginBottom: "0.75rem" }}>{post.title}</h3>

                {/* Excerpt */}
                <p className="paper-summary" style={{ flex: 1 }}>{post.excerpt}</p>

                {/* Read More */}
                <div style={{ marginTop: "1rem" }}>
                  <button className="btn btn-primary">
                    Read More <ArrowRight size={16} style={{ marginLeft: "8px" }} />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Load More */}
        <div style={{ textAlign: "center" }}>
          <button className="btn btn-primary" style={{ padding: "1rem 3rem", fontSize: "1.15rem" }}>
            Load More <ArrowRight size={20} style={{ marginLeft: "10px" }} />
          </button>
        </div>

      </div>
    </main>
    <Footer />
    </>
  );
};

export default Blogs;
