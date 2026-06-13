import React from "react";
import { ArrowRight, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const About = () => {
  const foundersInterns = [
    // { name: 'Aryan Saini', linkedin: 'https://www.linkedin.com/in/aryan-saini-4b7797288/', photo: '/interns/aryan.jpeg' },
    { name: 'Prince Yadav', linkedin: 'https://www.linkedin.com/in/prince-yadav-1403py/', photo: '/interns/prince.jpeg' },
    { name: 'Rajat', linkedin: 'https://www.linkedin.com/in/rajat-b92183207/', photo: '/interns/rajat.jpeg' },
    { name: 'Rishika Rathore', linkedin: 'https://www.linkedin.com/in/rishika-kumari-4bab2522a/', photo: '/interns/rishika.jpeg' },
    { name: 'Tanishq Soni', linkedin: 'https://www.linkedin.com/in/tanishq-soni-946a66293/', photo: '/interns/tanishq.jpeg' },
    { name: 'Mayank Raj', linkedin: 'https://www.linkedin.com/in/mayank-raj-186699314/', photo: null },
    { name: 'Roushan Raj', linkedin: 'https://www.linkedin.com/in/roushan-raj-22a0a4280/', photo: null },
    { name: 'Murukesh M', linkedin: 'https://www.linkedin.com/in/murukesh-m/', photo: null },
    { name: 'Antima Agarwal', linkedin: 'https://www.linkedin.com/in/antima-agarwal-22234b293?utm_source=share_via&utm_content=profile&utm_medium=member_android', photo: null },
    { name: 'Prakriti Yadav', linkedin: 'https://www.linkedin.com/in/prakriti-yadav?utm_source=share_via&utm_content=profile&utm_medium=member_android', photo: null }
  ];

  const devInterns = [
    { name: 'Ahmed Adnan', linkedin: 'https://www.linkedin.com/in/ahmed-adnan-00943a197/', photo: '/interns/ahmed.jpeg' },
    { name: 'Ankit Kumar Dubey', linkedin: 'https://www.linkedin.com/in/ankit-kumar-dubey-830847293/', photo: '/interns/ankit.jpeg' },
    { name: 'Anku Kr Singh', linkedin: null, photo: '/interns/anku.jpeg' },
    { name: 'Archisman Dhar', linkedin: 'https://www.linkedin.com/in/archisman-dhar/', photo: '/interns/archisman.jpeg' },
    { name: 'Harsh Gupta', linkedin: 'https://www.linkedin.com/in/varun-malviya-6ab47a18a/', photo: '/interns/harsh.jpeg' },
    { name: 'Kushal Agarwal', linkedin: 'https://www.linkedin.com/in/kushal-agrawal-1b2722298/', photo: '/interns/kushal.jpeg' },
    { name: 'Meghana Kadari', linkedin: 'https://www.linkedin.com/in/meghana-kadari-3556b9320/', photo: '/interns/meghana.jpeg' },
    { name: 'Pratyush Biswal', linkedin: 'https://www.linkedin.com/in/pratyush-biswal-289444163/', photo: '/interns/pratyush.jpeg' },
    { name: 'Sanvi Jain', linkedin: 'https://www.linkedin.com/in/sanvi-jain-0a9a2b280/', photo: '/interns/sanvi.jpeg' },
    { name: 'Shourya Mathur', linkedin: 'https://www.linkedin.com/in/shourya-mathur-56918221a/', photo: '/interns/shourya.jpeg' },
    { name: 'Shreyansh Devangan', linkedin: 'https://www.linkedin.com/in/shreyansh-dewangan-85a4bb283/', photo: '/interns/shreyansh.jpeg' },
    { name: 'Tanmay Prasad', linkedin: 'https://www.linkedin.com/in/tanmayprasad02/', photo: '/interns/tanmay.jpeg' },
    { name: 'Vaibhar Meena', linkedin: 'https://www.linkedin.com/in/vaibhav-meena-b93832311/', photo: '/interns/vaibhav.jpeg' },
    { name: 'Varun Malviya', linkedin: 'https://www.linkedin.com/in/varun-malviya-6ab47a18a/', photo: '/interns/varun.jpeg' },
    { name: 'Vibhor Srivastava', linkedin: 'https://www.linkedin.com/in/vibhor-srivastava-496b4327b/', photo: '/interns/vibhor.jpeg' },
    { name: 'Vivek', linkedin: 'https://www.linkedin.com/in/vivek-80ba11279/', photo: '/interns/vivek.jpeg' },
    { name: 'Yash Pathak', linkedin: 'https://www.linkedin.com/in/yash-pathak-24802128b/', photo: '/interns/yash.jpeg' },
    { name: 'Aaruj Singh Sisodiya', linkedin: 'https://www.linkedin.com/in/aaruj-singh-sisodiya-71a964290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', photo: null },
    { name: 'Rahul Kumar', linkedin: 'https://www.linkedin.com/in/rahulkm2/', photo: null },
    { name: 'Humayun Ahmad', linkedin: 'https://www.linkedin.com/in/humayun-ahmad-43b644294?utm_source=share_via&utm_content=profile&utm_medium=member_android', photo: null },
    { name: 'Atanu Biswas', linkedin: 'https://www.linkedin.com/in/ataanuuu', photo: null },
    { name: 'Kanishk Dhariwal', linkedin: 'https://www.linkedin.com/in/kanishk-dhariwal-aa1b62288?utm_source=share_via&utm_content=profile&utm_medium=member_android', photo: null },
    { name: 'Mohd Fahad', linkedin: 'https://www.linkedin.com/in/mohd-fahad-038017279/', photo: null },
    { name: 'Mitin Jangid', linkedin: 'https://www.linkedin.com/in/mitin-jangid-8b154a278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', photo: null },
    { name: 'Harshit Agarwal', linkedin: 'https://www.linkedin.com/in/harshit-agarwal-75041326a/', photo: null },
    { name: 'Mayank Agrawal', linkedin: 'https://www.linkedin.com/in/mayank-agrawal-64a120290/', photo: null },
    { name: 'Waqar Moid', linkedin: 'https://www.linkedin.com/in/waqar-moid-754a0427b', photo: null },
    { name: 'Suryans Kumar Verma', linkedin: 'https://www.linkedin.com/in/suryans-kumar-verma-44230a344?utm_source=share_via&utm_content=profile&utm_medium=member_android', photo: null },
    { name: 'Harsha Sharma', linkedin: 'https://www.linkedin.com/in/harsha-sharma-b2b23b314/', photo: null },
    { name: 'Snehasish Haldar', linkedin: 'https://www.linkedin.com/in/snehasish-haldar-b2a375284/', photo: null },
    { name: 'Adarsh', linkedin: 'https://www.linkedin.com/in/adarsh-kuntal-395ab11b5', photo: null },
    { name: 'Nirjala Kushwaha', linkedin: 'https://www.linkedin.com/in/nirjala-kushwaha-5a2b47315', photo: null },
    { name: 'Ayush Dubey', linkedin: 'https://www.linkedin.com/in/ayush-dubey-8605291ab/', photo: null },
    { name: 'Nikhil N', linkedin: 'https://in.linkedin.com/in/nikhil-n-37a500285', photo: null },
    { name: 'Sarvesh Bharambe', linkedin: 'https://www.linkedin.com/in/sarvesh-bharambe-7709a4371/', photo: null },
    { name: 'Rohan Kumar', linkedin: 'https://www.linkedin.com/in/rohankr21/', photo: null },
    { name: 'Ayush', linkedin: 'https://www.linkedin.com/in/ayush-kumar-754772287/', photo: null },
    { name: 'Divyansh Gupta', linkedin: 'https://www.linkedin.com/in/divyansh-gupta-497a59283', photo: null },
    { name: 'Sunny Kumar', linkedin: 'https://www.linkedin.com/in/sunny-kumar-iitk/', photo: null }
  ];

  const designInterns = [
    { name: "Deepanshi Mishra", linkedin: "https://www.linkedin.com/in/deepanshi-mishra-179b502a8/", photo: '/interns/deepanshi.png' },
    {
      name: "Ojasva",
      linkedin: "https://www.linkedin.com/in/ojasva-tripathi-377b91241/",
      photo: "/interns/ojasva.jpeg",
    },

    {
      name: "Shefali Maheshwari",
      linkedin: 'https://www.linkedin.com/in/shefali-maheshwari-36044918b/',
      photo: "/interns/shefali.jpeg",
    },
  ];

  const renderInterns = (internList) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem', marginBottom: '5rem', width: '100%' }}>
      {internList.map((intern, idx) => (
        <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '160px' }}>
          <div style={{ width: '120px', height: '120px', borderRadius: '30px', backgroundColor: 'var(--border-light)', marginBottom: '1.25rem', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <img src={intern.photo} alt={intern.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: intern.photo ? 'block' : 'none' }} />
          </div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.4rem', lineHeight: '1.2' }}>{intern.name}</h4>
          {intern.linkedin && (
            <a href={intern.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2', display: 'flex', alignItems: 'center', justifyItems: 'center', opacity: '0.8', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <main
      className="animate-fade-in"
      style={{ background: "white", paddingBottom: "4rem" }}
    >
      <Helmet>
        <title>About Us | CarbonTatva AI</title>
        <meta name="description" content="Meet the team behind CarbonTatva AI — founders and interns building intelligent carbon emissions accounting and ESG intelligence solutions for a sustainable future." />
        <link rel="canonical" href="https://carbontatva.com/about" />
      </Helmet>
      <div className="container">
        {/* Company Section */}
        <section className="about-company-section">
          <div className="about-text-content">
            <div className="about-header-mobile-flex">
              <h1
                className="hero-title"
                style={{
                  textAlign: "left",
                  marginBottom: "1.5rem",
                  fontSize: "3rem",
                }}
              >
                About the <span>company</span>
              </h1>
              <img src="/CarbonTatvaAi_logo.png" alt="CarbonTatva AI" className="mobile-only-logo hide-on-desktop" />
            </div>
            <p
              className="hero-subtitle"
              style={{ textAlign: "left", marginBottom: "1.5rem" }}
            >
              CarbonTatva AI is an AI-native platform that enables businesses to
              measure, monitor, and forecast carbon emissions. Built for India’s
              regulatory landscape, it transforms operational data into
              actionable insights for compliance and decarbonisation.
            </p>
            <p
              className="hero-subtitle"
              style={{ textAlign: "left", marginBottom: "2rem" }}
            >
              Powered by proprietary models, we deliver end-to-end climate
              intelligence to help organisations optimise costs and accelerate
              their path to net-zero.
            </p>
            <p
              className="hero-subtitle"
              style={{
                textAlign: "left",
                fontWeight: "600",
                color: "var(--text-main)",
                fontSize: "1.25rem",
                marginBottom: "0.5rem",
              }}
            >
              We are building AI-powered climate intelligence to measure,
              monitor, and reduce emissions.
            </p>
            <Link
              to="/demo"
              className="btn btn-primary"
              style={{ padding: "1rem 3rem", fontSize: "1.25rem", display: "inline-flex", alignItems: "center" }}
            >
              <LogIn size={20} style={{ marginRight: "10px" }} />
              Book a Demo
            </Link>
          </div>
          <div className="about-logo-container hide-on-mobile">
            <img src="/CarbonTatvaAi_logo.png" alt="CarbonTatva AI" />
          </div>
        </section>

        {/* Team Section */}
        <section
          className="interns-section"
          style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}
        >
          <h2
            className="hero-title"
            style={{
              fontSize: "3rem",
              marginBottom: "4rem",
              textAlign: "center",
              margin: "0 auto 4rem",
            }}
          >
            Our <span>team</span>
          </h2>

          <h3
            style={{
              fontSize: "2rem",
              textAlign: "center",
              marginBottom: "3rem",
              color: "var(--text-main)",
            }}
          >
            Founder's Office
          </h3>
          {renderInterns(foundersInterns)}

          <h3
            style={{
              fontSize: "2rem",
              textAlign: "center",
              marginBottom: "3rem",
              color: "var(--text-main)",
            }}
          >
            Developer
          </h3>
          {renderInterns(devInterns)}

          <h3
            style={{
              fontSize: "2rem",
              textAlign: "center",
              marginBottom: "3rem",
              color: "var(--text-main)",
            }}
          >
            Design Interns
          </h3>
          {renderInterns(designInterns)}
        </section>
      </div>
    </main>
  );
};

export default About;
