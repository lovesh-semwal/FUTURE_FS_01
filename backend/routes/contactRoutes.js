const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: [process.env.EMAIL_USER],
        reply_to: email,
        subject: `Portfolio Contact: ${name}`,
        text: `
Name: ${name}
Email: ${email}

Message:
${message}
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend Error:", data);

      return res.status(500).json({
        message: "Failed to send message",
      });
    }

    res.status(200).json({
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Server Error:", error);

    res.status(500).json({
      message: "Failed to send message",
    });
  }
});

module.exports = router;