import React, { useState } from "react";

const ReferralBenefits = () => {
  const [selectedProgram, setSelectedProgram] = useState("Product Management");
  const [isEnrolled, setIsEnrolled] = useState(false);

  const programs = [
    { name: "Professional Certification in Product Management", referral: "₹7,500", bonus: "₹10,000" },
    { name: "Executive Program in Product Management", referral: "₹12,000", bonus: "₹15,000" },
    { name: "Advanced Certification in Project Management", referral: "₹9,000", bonus: "₹12,500" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        What Are The <span style={styles.highlight}>Referral Benefits?</span>
      </h2>

      {/* Sidebar & Table Container */}
      <div style={styles.content}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          {["Product Management", "Project Management", "Data Science", "Marketing"].map((category) => (
            <button
              key={category}
              style={selectedProgram === category ? styles.selectedSidebarItem : styles.sidebarItem}
              onClick={() => setSelectedProgram(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Table */}
        <div style={styles.tableContainer}>
          <div style={styles.enrollToggle}>
            <span>Enrolled</span>
            <input type="checkbox" checked={isEnrolled} onChange={() => setIsEnrolled(!isEnrolled)} />
          </div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHead}>Programs</th>
                <th style={styles.tableHead}>Referral Bonus</th>
                <th style={styles.tableHead}>More Bonus</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) => (
                <tr key={index}>
                  <td style={styles.tableCell}>{program.name}</td>
                  <td style={styles.tableCell}>{program.referral}</td>
                  <td style={styles.tableCell}>{program.bonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button style={styles.referButton}>Refer Now</button>

      {/* FAQ Section */}
      <div style={styles.faqContainer}>
        <h3>Frequently Asked <span style={styles.highlight}>Questions</span></h3>
        <div style={styles.faqItem}>
          <p>Do I need to have prior experience to receive the referral bonus?</p>
          <button style={styles.toggleButton}>+</button>
        </div>
        <div style={styles.faqItem}>
          <p>What are the minimum course completion eligibility criteria?</p>
          <button style={styles.toggleButton}>+</button>
        </div>
      </div>

      {/* CTA Section */}
      <div style={styles.ctaContainer}>
        <p>Want to dive deeper into the program?</p>
        <button style={styles.getStartedButton}>Get in Touch</button>
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "40px", fontFamily: "Arial, sans-serif", backgroundColor: "#F8FAFF" },
  heading: { fontSize: "24px", fontWeight: "bold", marginBottom: "20px", color: "#222" },
  highlight: { color: "#007AFF" },
  content: { display: "flex", justifyContent: "center", gap: "20px" },
  
  /* Sidebar */
  sidebar: { display: "flex", flexDirection: "column", width: "200px", backgroundColor: "#fff", padding: "10px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" },
  sidebarItem: { padding: "10px", border: "none", background: "none", cursor: "pointer", textAlign: "left", fontSize: "14px", color: "#333" },
  selectedSidebarItem: { padding: "10px", border: "none", background: "#007AFF", color: "#fff", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" },

  /* Table */
  tableContainer: { flex: 1, backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" },
  enrollToggle: { display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "10px", marginBottom: "10px" },
  table: { width: "100%", borderCollapse: "collapse" },
  tableHead: { backgroundColor: "#f1f1f1" },
  tableHead: { padding: "10px", borderBottom: "1px solid #ddd" },
  tableCell: { padding: "10px", borderBottom: "1px solid #ddd" },

  /* Button */
  referButton: { marginTop: "20px", backgroundColor: "#007AFF", color: "#fff", padding: "12px 20px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" },

  /* FAQ */
  faqContainer: { marginTop: "40px", textAlign: "left", maxWidth: "600px", margin: "auto" },
  faqItem: { display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "#fff", borderRadius: "5px", marginBottom: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" },
  toggleButton: { border: "none", background: "none", fontSize: "20px", cursor: "pointer", fontWeight: "bold", color: "#007AFF" },

  /* CTA */
  ctaContainer: { marginTop: "40px", backgroundColor: "#007AFF", color: "#fff", padding: "20px", borderRadius: "10px" },
  getStartedButton: { backgroundColor: "#fff", color: "#007AFF", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "14px" },
};

export default ReferralBenefits;
