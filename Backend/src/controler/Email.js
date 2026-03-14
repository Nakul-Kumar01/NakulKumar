const axios = require("axios");

const handleEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body.data;
  //  console.log(name,email,subject,message)
    const response = await axios.post(
  "https://api.emailjs.com/api/v1.0/email/send",
  {
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_ID,
    user_id: process.env.EMAILJS_PUBLIC_KEY,
    accessToken: process.env.EMAILJS_PRIVATE_KEY,  // private key ko access token se likhte hai
    template_params: {
      name,
      email,
      subject,
      message,
    },
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
);

    return res.status(200).json({ success: true, message: "Email sent!" });
  } catch (err) {
    console.error(err.response?.data || err.message);
    return res.status(500).json({ success: false, message: "Email failed" });
  }
};

module.exports = handleEmail;
