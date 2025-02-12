import React from "react";

const HowToRefer = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        How Do I <span style={styles.highlight}>Refer?</span>
      </h2>
      <div style={styles.stepsContainer}>
         <div style={styles.step}>
          <div style={styles.iconContainer}>
            <img src="https://img.icons8.com/ios/50/add-user-male.png" alt="Submit Referral" style={styles.icon} />
          </div>
          <p style={styles.text}>Submit referrals easily via our website’s referral section.</p>
        </div>

         <div style={styles.step}>
          <div style={styles.iconContainer}>
            <img src="https://img.icons8.com/ios/50/checklist.png" alt="Earn Rewards" style={styles.icon} />
          </div>
          <p style={styles.text}>Earn rewards once your referral joins an Accredian program.</p>
        </div>

         <div style={styles.step}>
          <div style={styles.iconContainer}>
            <img src="https://img.icons8.com/ios/50/money-bag.png" alt="Receive Bonus" style={styles.icon} />
          </div>
          <p style={styles.text}>Referrer receives a bonus 30 days after program enrollment.</p>
        </div>
      </div>
      <button style={styles.referButton}>Refer Now</button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "40px", backgroundColor: "#F8FAFF", fontFamily: "Arial, sans-serif" },
  heading: { fontSize: "24px", fontWeight: "bold", marginBottom: "20px", color: "#222" },
  highlight: { color: "#007AFF" },
  stepsContainer: { display: "flex", justifyContent: "center", alignItems: "center", gap: "50px", position: "relative" },
  step: { textAlign: "center", maxWidth: "200px", backgroundColor: "#fff", padding: "20px", borderRadius: "50%", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" },
  iconContainer: { width: "60px", height: "60px", margin: "0 auto 10px", display: "flex", alignItems: "center", justifyContent: "center" },
  icon: { width: "50px", height: "50px", filter: "invert(28%) sepia(98%) saturate(2016%) hue-rotate(200deg) brightness(92%) contrast(85%)" },
  text: { fontSize: "14px", color: "#333" },
  referButton: { marginTop: "20px", backgroundColor: "#007AFF", color: "#fff", padding: "12px 20px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" },
};

export default HowToRefer;
