import React, { useState } from "react";

const ReferAndEarn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    refereeName: "",
    refereeEmail: "",
    course: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) newErrors[key] = "This field is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:5000/refer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          setMessage("Referral submitted successfully!");
          setFormData({
            name: "",
            email: "",
            refereeName: "",
            refereeEmail: "",
            course: "",
          });
          closeModal();
        } else {
          setMessage(data.error || "Something went wrong!");
        }
      } catch (error) {
        setMessage("Error submitting referral.");
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1>Refer & Earn</h1>
        <p>Refer a friend and earn rewards!</p>
        <button style={styles.button} onClick={openModal}>Refer Now</button>
      </div>

      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>Refer a Friend</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} style={styles.input} />
              {errors.name && <span style={styles.error}>{errors.name}</span>}

              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} style={styles.input} />
              {errors.email && <span style={styles.error}>{errors.email}</span>}

              <input type="text" name="refereeName" placeholder="Friend's Name" value={formData.refereeName} onChange={handleChange} style={styles.input} />
              {errors.refereeName && <span style={styles.error}>{errors.refereeName}</span>}

              <input type="email" name="refereeEmail" placeholder="Friend's Email" value={formData.refereeEmail} onChange={handleChange} style={styles.input} />
              {errors.refereeEmail && <span style={styles.error}>{errors.refereeEmail}</span>}

              <input type="text" name="course" placeholder="Course Name" value={formData.course} onChange={handleChange} style={styles.input} />
              {errors.course && <span style={styles.error}>{errors.course}</span>}

              <button type="submit" style={styles.button}>Submit</button>
            </form>
            <button onClick={closeModal} style={styles.closeButton}>Close</button>
            {message && <p style={styles.message}>{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { textAlign: "center", fontFamily: "Arial, sans-serif", padding: "20px" },
  hero: { backgroundColor: "#4a90e2", color: "white", padding: "50px", borderRadius: "10px" },
  button: { backgroundColor: "#ff9800", color: "white", padding: "10px 20px", border: "none", cursor: "pointer", borderRadius: "5px" },
  modalOverlay: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" },
  modal: { backgroundColor: "white", padding: "20px", borderRadius: "10px", width: "300px", textAlign: "center" },
  form: { display: "flex", flexDirection: "column" },
  input: { margin: "10px 0", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" },
  closeButton: { marginTop: "10px", backgroundColor: "red", color: "white", padding: "8px 16px", border: "none", cursor: "pointer", borderRadius: "5px" },
  error: { color: "red", fontSize: "12px" },
  message: { color: "green", fontSize: "14px", marginTop: "10px" }
};

export default ReferAndEarn;
