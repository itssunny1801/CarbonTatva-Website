import React, { useState } from 'react';
import { ExternalLink, Send, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';

const RD = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/support@carbontatva.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error("FormSubmit activation required or submission denied.");
      }
      
      setShowSuccess(true);
      e.target.reset();
    } catch (error) {
       console.error(error);
       alert("Error submitting form. Please try again.");
    } finally {
       setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Research &amp; Development | CarbonTatva AI</title>
        <meta name="description" content="Explore CarbonTatva AI's research in carbon intelligence, emissions quantification, and climate data science. Peer-reviewed papers and proprietary ESG research." />
        <link rel="canonical" href="https://carbontatva.com/rd" />
      </Helmet>
      {showSuccess && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            animation: "fadeIn 0.2s ease-out",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "3rem",
              borderRadius: "24px",
              textAlign: "center",
              maxWidth: "400px",
              width: "90%",
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "rgba(16, 185, 129, 0.1)",
                color: "var(--primary-green)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
              }}
            >
              <CheckCircle2 size={32} />
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: "var(--text-main)",
                fontWeight: "800",
              }}
            >
              Request Sent!
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                marginBottom: "2rem",
                lineHeight: "1.6",
              }}
            >
              We have successfully received your details. Our team will contact
              you shortly.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="btn btn-primary"
              style={{ width: "100%", padding: "0.875rem", fontSize: "1.1rem" }}
            >
              Done
            </button>
          </div>
        </div>
      )}
      <main
        className="animate-fade-in"
        style={{ background: "var(--bg-secondary)", paddingBottom: "6rem" }}
      >
        <div className="container" style={{ paddingTop: "4rem" }}>
          {/* Intro Section */}
          <section className="rd-intro" style={{ maxWidth: "1200px" }}>
            <h1
              className="hero-title offering-title"
              style={{
                marginBottom: "1.5rem",
                textAlign: "center",
                margin: "0 auto 1.5rem",
              }}
            >
              Research & <span>Development</span>
            </h1>
            <p
              className="hero-subtitle"
              style={{
                margin: "0 auto 3rem",
                color: "var(--text-muted)",
                fontSize: "1.2rem",
                lineHeight: "1.8",
                maxWidth: "1100px",
                padding: "0 1rem",
              }}
            >
              Our work at CarbonTatva.AI is grounded in rigorous research at the
              intersection of climate, energy, and AI. As founders, we have
              actively contributed to advancing methodologies in energy demand
              forecasting and climate impact analysis. This research underpins
              our product capabilities, enabling us to build accurate, scalable,
              and regulation-ready solutions for real-world emissions
              measurement, forecasting, and decision-making.
            </p>
          </section>

          {/* Papers Section */}
          <section className="papers-grid">
            {/* Paper 1 — Springer */}
            <div className="paper-card">
              <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "1rem", fontSize: "0.8rem" }}>
                Journal · Springer Nature · Oct 23, 2025
              </div>
              <h2 className="paper-title">
                Energy Transition Modeling: Short-Term Electricity Demand
                Forecasting Using Seq2Seq Encoder–Decoder Model
              </h2>
              <div className="paper-authors" style={{ marginBottom: "0.5rem" }}>
                Book: <em>Materials, Devices and Systems for Sustainability, IITK Directions, Volume 8</em>
              </div>
              <p className="paper-summary">
                This paper demonstrates a framework involving data processing on
                input consumption data and deploying machine learning models to
                forecast future demand based on consumption patterns and weather
                features.
              </p>
              <div className="paper-authors" style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
                Supervisor: Prof. Rajeev Jindal, Department of Sustainable Energy
                Engineering, IIT Kanpur
              </div>
              <a
                href="https://link.springer.com/chapter/10.1007/978-981-96-7295-0_10"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ marginTop: "1.25rem" }}
              >
                Show Publication{" "}
                <ExternalLink size={18} style={{ marginLeft: "8px" }} />
              </a>
            </div>

            {/* Paper 2 — IEEE */}
            <div className="paper-card">
              <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "1rem", fontSize: "0.8rem" }}>
                Journal · IEEE Xplore · Sep 5, 2025
              </div>
              <h2 className="paper-title">
                A Smartphone-Based Hybrid Model for Real-Time Monitoring of
                Aggressive Driving Behavior using Multidimensional Dynamic Time
                Warping
              </h2>
              <p className="paper-summary">
                This study proposes a hybrid model that uses multi-dimensional
                Dynamic Time Warping (DTW) and machine learning techniques to
                predict driver behaviour.
              </p>
              <div className="paper-authors" style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
                Supervisor: Dr. Rahul Kumar Dubey, BOSCH Research
              </div>
              <a
                href="https://ieeexplore.ieee.org/document/11139729"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ marginTop: "1.25rem" }}
              >
                Show Publication{" "}
                <ExternalLink size={18} style={{ marginLeft: "8px" }} />
              </a>
            </div>

            {/* Paper 3 — Conference */}
            <div className="paper-card">
              <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "1rem", fontSize: "0.8rem" }}>
                Conference · 2nd Global Conference on Decarbonizing India
              </div>
              <h2 className="paper-title">
                Climate Change: Impact of Global Warming on India’s Electricity
                Consumption
              </h2>
              <p className="paper-summary">
                In this study, we model the relationship between temperature and
                residential electricity consumption of Indian states. Our
                framework offers a way to predict, and potentially, prepare for
                the changes in electricity consumption because of the
                fluctuations in temperature due to global warming.
              </p>
              <div className="paper-authors" style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
                Supervisor: Prof. Rajeev Jindal, Department of Sustainable Energy
                Engineering, IIT Kanpur
              </div>
              <button
                className="btn btn-primary"
                style={{ marginTop: "1.25rem", opacity: 0.7, cursor: "default" }}
                disabled
              >
                Publication Link Coming Soon
              </button>
            </div>
          </section>

          {/* Collaboration Section */}
          <section className="collab-section">
            <div className="collab-content">
              <h2
                style={{
                  fontSize: "2.5rem",
                  color: "var(--text-main)",
                  marginBottom: "1.5rem",
                  fontWeight: "800",
                }}
              >
                Request for <span>collaboration</span>
              </h2>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: "1.8",
                  fontSize: "1.1rem",
                  marginBottom: "1.5rem",
                }}
              >
                We are always looking to collaborate with academic institutions,
                research labs, and industry partners working at the intersection
                of AI and climate.
              </p>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: "1.8",
                  fontSize: "1.1rem",
                  marginBottom: "1.5rem",
                }}
              >
                Whether it is joint research, pilot projects, data partnerships,
                or grant initiatives, we aim to build solutions that drive
                real-world impact.
              </p>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: "1.8",
                  fontSize: "1.1rem",
                }}
              >
                Reach out to us at{" "}
                <a
                  href="mailto:support@carbontatva.com"
                  className="collab-email"
                >
                  support@carbontatva.com
                </a>{" "}
                or fill out the following form to explore collaboration
                opportunities.
              </p>
            </div>

            <div className="collab-form-container">
              <form onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="_subject"
                  value="New Collaboration Request from Website"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} />

                <div style={{ display: "flex", gap: "1.5rem" }}>
                  <div style={{ flex: 1 }}>
                    <label
                      className="form-label"
                      style={{ fontSize: "0.9rem", marginBottom: "0.25rem" }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-input"
                      style={{ padding: "0.6rem 1rem" }}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label
                      className="form-label"
                      style={{ fontSize: "0.9rem", marginBottom: "0.25rem" }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-input"
                      style={{ padding: "0.6rem 1rem" }}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    marginTop: "1.5rem",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <label
                      className="form-label"
                      style={{ fontSize: "0.9rem", marginBottom: "0.25rem" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      style={{ padding: "0.6rem 1rem" }}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label
                      className="form-label"
                      style={{ fontSize: "0.9rem", marginBottom: "0.25rem" }}
                    >
                      Contact No.
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-input"
                      style={{ padding: "0.6rem 1rem" }}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>

                <div style={{ marginTop: "1.5rem" }}>
                  <label
                    className="form-label"
                    style={{ fontSize: "0.9rem", marginBottom: "0.25rem" }}
                  >
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="organization"
                    className="form-input"
                    style={{ padding: "0.6rem 1rem" }}
                    placeholder="University or Company"
                    required
                  />
                </div>

                <div style={{ marginTop: "1.5rem" }}>
                  <label
                    className="form-label"
                    style={{ fontSize: "0.9rem", marginBottom: "0.25rem" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    style={{ minHeight: "80px", padding: "0.6rem 1rem" }}
                    placeholder="How would you like to collaborate?"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    padding: "0.875rem",
                    fontSize: "1.1rem",
                    width: "100%",
                    maxWidth: "300px",
                    marginTop: "1.5rem",
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <span style={{ display: "flex", alignItems: "center" }}>
                      Submit Request{" "}
                      <Send size={18} style={{ marginLeft: "8px" }} />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RD;
