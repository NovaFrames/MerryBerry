import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import multer from "multer";

const app = express();
app.use(cors());
app.use(express.json()); // <-- ADD THIS ✅
app.use(express.urlencoded({ extended: true })); // for form submissions

// Setup multer (for file upload)
const storage = multer.memoryStorage(); // keep file in memory
const upload = multer({ storage });

// API endpoint for job applications
app.post("/api/apply", upload.single("resume"), async (req, res) => {
  const { name, email, phone, message, jobTitle } = req.body;
  const file = req.file; // uploaded resume file

  try {
    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "novaframesdev@gmail.com", // 🔁 replace
        pass: "xuwojpijsjburdxg", // 🔁 app password
      },
    });

    // Mail to company (HR)
    const mailOptionsHR = {
      from: `"Career Portal" <novaframesdev@gmail.com>`,
      to: "novaframesdev@gmail.com",
      subject: `📩 New Application for ${jobTitle}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #fefce8; padding: 30px; border-radius: 16px; max-width: 650px; margin: auto; border: 1px solid #eab308; box-shadow: 0 6px 20px rgba(0,0,0,0.12);">
            
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 25px;">
              <h1 style="color: #1e293b; font-size: 28px; margin: 0;">New Job Application</h1>
              <p style="font-size: 14px; color: #6b7280; margin-top: 6px;">A candidate has applied via Merry Berry Career Portal</p>
            </div>
      
            <!-- Application Details Card -->
            <div style="background: #fff; padding: 22px; border-radius: 12px; border: 1px solid #facc15; box-shadow: inset 0 2px 5px rgba(0,0,0,0.05);">
              <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #111827;">
                <tr>
                  <td style="padding: 10px; font-weight: bold; width: 120px; color:#374151;">Job Title</td>
                  <td style="padding: 10px;">${jobTitle}</td>
                </tr>
                <tr style="background: #fef9c3;">
                  <td style="padding: 10px; font-weight: bold; color:#374151;">Name</td>
                  <td style="padding: 10px;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; color:#374151;">Email</td>
                  <td style="padding: 10px;">
                    <a href="mailto:${email}" style="color:#2563eb; text-decoration:none;">${email}</a>
                  </td>
                </tr>
                <tr style="background: #fef9c3;">
                  <td style="padding: 10px; font-weight: bold; color:#374151;">Phone</td>
                  <td style="padding: 10px;">
                    <a href="tel:${phone}" style="color:#2563eb; text-decoration:none;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px; font-weight: bold; vertical-align: top; color:#374151;">Message</td>
                  <td style="padding: 10px; line-height: 1.6; color:#111827;">${message}</td>
                </tr>
              </table>
            </div>
      
            <!-- Call to Action -->
            <div style="text-align: center; margin-top: 25px;">
              <a href="mailto:${email}" style="display:inline-block; padding: 12px 24px; background: #facc15; color: #000; font-weight: 600; text-decoration: none; border-radius: 8px; box-shadow: 0 3px 8px rgba(0,0,0,0.15); transition: background 0.3s;">
                📧 Reply to Candidate
              </a>
            </div>
      
            <!-- Footer -->
            <p style="text-align:center; margin-top: 30px; font-size: 12px; color: #6b7280;">
              📌 Sent automatically from <strong>Merry Berry Career Portal</strong>
            </p>
          </div>
      `,
      attachments: file
        ? [
            {
              filename: file.originalname,
              content: file.buffer,
            },
          ]
        : [],
    };

    // Mail to applicant
    const mailOptionsUser = {
      from: `"Merry Berry Careers" <novaframesdev@gmail.com>`,
      to: email,
      subject: "Thank you for applying!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #fffbe6; border: 2px solid #facc15; border-radius: 10px;">
          <h2 style="color: #facc15;">Dear ${name},</h2>
          <p>Thank you for applying for the position of <b>${jobTitle}</b> at <b>Merry Berry</b>.</p>
          <p>We have received your application and our team will review it shortly.</p>
          <br/>
          <p>Best Regards,<br/>Merry Berry Team</p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptionsHR);
    await transporter.sendMail(mailOptionsUser);

    res.json({
      success: true,
      message: "Application sent with resume & Thank you mail delivered!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to send application" });
  }
});

// ========== ENQUIRY (no file) ==========
app.post("/api/enquiry", async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "novaframesdev@gmail.com",
        pass: "xuwojpijsjburdxg",
      },
    });

    // Mail to HR
    const mailOptionsHR = {
      from: `"Enquiry Portal" <novaframesdev@gmail.com>`,
      to: "novaframesdev@gmail.com",
      subject: `📩 New Enquiry for ${service}`,
      html: ` <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #fefce8; padding: 30px; border-radius: 16px; max-width: 650px; margin: auto; border: 1px solid #eab308; box-shadow: 0 6px 20px rgba(0,0,0,0.12);">
            
           <div style="text-align: center; margin-bottom: 25px;">
      <h1 style="color: #1e293b; font-size: 28px; margin: 0;">New Enquiry</h1>
      <p style="font-size: 14px; color: #6b7280; margin-top: 6px;">A customer has submitted an enquiry via Merry Berry Portal</p>
    </div>
    <div style="background: #fff; padding: 22px; border-radius: 12px; border: 1px solid #facc15;">
      <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #111827;">
        <tr>
          <td style="padding: 10px; font-weight: bold; width: 120px; color:#374151;">Service</td>
          <td style="padding: 10px;">${service}</td>
        </tr>
        <tr style="background: #fef9c3;">
          <td style="padding: 10px; font-weight: bold; color:#374151;">Name</td>
          <td style="padding: 10px;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; color:#374151;">Email</td>
          <td style="padding: 10px;">
            <a href="mailto:${email}" style="color:#2563eb; text-decoration:none;">${email}</a>
          </td>
        </tr>
        <tr style="background: #fef9c3;">
          <td style="padding: 10px; font-weight: bold; color:#374151;">Phone</td>
          <td style="padding: 10px;">
            <a href="tel:${phone}" style="color:#2563eb; text-decoration:none;">${phone}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; vertical-align: top; color:#374151;">Message</td>
          <td style="padding: 10px; line-height: 1.6; color:#111827;">${message}</td>
        </tr>
      </table>
    </div>
      
            <!-- Call to Action -->
            <div style="text-align: center; margin-top: 25px;">
              <a href="mailto:${email}" style="display:inline-block; padding: 12px 24px; background: #facc15; color: #000; font-weight: 600; text-decoration: none; border-radius: 8px; box-shadow: 0 3px 8px rgba(0,0,0,0.15); transition: background 0.3s;">
                📧 Reply to Candidate
              </a>
            </div>
      
            <!-- Footer -->
            <p style="text-align:center; margin-top: 30px; font-size: 12px; color: #6b7280;">
              📌 Sent automatically from <strong>Merry Berry Career Portal</strong>
            </p>
          </div>`,
    };

    // Mail to applicant
    const mailOptionsUser = {
      from: `"Merry Berry Enquiry" <novaframesdev@gmail.com>`,
      to: email,
      subject: "Thank you for your enquiry!",
      html: ` <div style="font-family: Arial, sans-serif; padding: 20px; background: #fffbe6; border: 2px solid #facc15; border-radius: 10px;">
          <h2 style="color: #facc15;">Dear ${name},</h2>
          <p>We received your enquiry regarding <b>${service}</b>. our team will review it shortly.</p>
          <br/>
          <p>Best Regards,<br/>Merry Berry Team</p>
        </div>`,
    };

    await transporter.sendMail(mailOptionsHR);
    await transporter.sendMail(mailOptionsUser);

    res.json({ success: true, message: "Enquiry mail sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Failed to send enquiry" });
  }
});

app.listen(5000, () =>
  console.log("🚀 Server running on http://localhost:5000")
);
