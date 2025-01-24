import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

 const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  const handleDownload = () => {
    // Corrected File URL
    const fileUrl = "https://drive.google.com/file/d/1n68vIssWC6nCAXMHgLjzsvkAZTQU-yQn/view?usp=sharing";
    const fileName = "Utkarsh-resume.pdf";
  
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName; // Sets the file name for the download
    document.body.appendChild(link); // Append the anchor to the document
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up by removing the anchor element
  };
  

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12} id="resume">
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Download the resume from here...</h3>
              
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                 
                  <button type="submit" onClick={handleDownload}>Downlaod Resume</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}

export default Newsletter;