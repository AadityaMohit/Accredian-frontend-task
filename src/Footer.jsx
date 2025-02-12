import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        <div style={styles.column}>
          <h3 style={styles.heading}>Programs</h3>
          <ul style={styles.list}>
            {[
              "Data Science & AI",
              "Product Management",
              "Business Analytics",
              "Digital Transformation",
              "Marketing",
              "Strategy & Leadership",
              "General Management",
              "Healthcare",
            ].map((program, index) => (
              <li key={index} style={styles.listItem}>
                {program}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Contact Us</h3>
          <p>Email: support@accredian.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Office: Tower 4, Tech Park, Bangalore</p>
          <div style={styles.socialIcons}>
            {["facebook", "twitter", "linkedin", "instagram"].map((platform, index) => (
              <span key={index} style={styles.icon}>
                <i className={`fab fa-${platform}`}></i>
              </span>
            ))}
          </div>
        </div>

        {/* Accreditation & Links */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Accredian</h3>
          <ul style={styles.list}>
            {["Careers", "Terms & Conditions", "Privacy Policy", "FAQs", "Contact Us"].map((link, index) => (
              <li key={index} style={styles.listItem}>
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>

       <div style={styles.bottomText}>
        <p>© 2025 Accredian. All rights reserved.</p>
      </div>

       <button style={styles.floatingButton}>Schedule a Call</button>
    </footer>
  );
};

const styles = {
  footer: { backgroundColor: "#111", color: "#fff", padding: "40px 20px", fontFamily: "Arial, sans-serif", position: "relative" },
  container: { display: "flex", justifyContent: "space-around", flexWrap: "wrap" },
  column: { flex: 1, minWidth: "200px", padding: "10px" },
  heading: { fontSize: "18px", marginBottom: "10px", borderBottom: "2px solid #007AFF", paddingBottom: "5px" },
  list: { listStyle: "none", padding: 0 },
  listItem: { marginBottom: "8px", cursor: "pointer", transition: "0.3s", color: "#ddd" },
  listItemHover: { color: "#007AFF" },
  socialIcons: { display: "flex", gap: "10px", marginTop: "10px" },
  icon: { fontSize: "20px", cursor: "pointer", transition: "0.3s" },
  bottomText: { textAlign: "center", marginTop: "20px", fontSize: "12px", color: "#888" },
  floatingButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#007AFF",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default Footer;
