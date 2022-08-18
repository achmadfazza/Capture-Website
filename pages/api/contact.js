import nodemailer from "nodemailer";

export default async (req, res) => {
	const { name, email, subjects, message } = req.body;
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD,
		},
	});

	try {
		await transporter.sendMail({
			from: email,
			to: "fazachmd@gmail.com",
			subject: `Capture Inc ${subjects}`,
			html: `<h4>Anda mendapat Pesan Dari Capture Inc</h4>
      <p><strong>Nama: </strong> ${name}</p>
      <p><strong>Email: </strong> ${email}</p>
      <p><strong>Subject: </strong> ${subjects}</p>
      <p><strong>Message: </strong> ${message}</p>
      `,
		});
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() });
	}
	return res.status(200).json({ error: "" });
};
