import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

interface Enquiry {
  id: string;
  timestamp: string;
  name: string;
  phone: string;
  treatment: string;
  area?: string;
  preferredDate?: string;
  notes?: string;
}

const enquiriesFilePath = path.join(process.cwd(), "enquiries.json");

function getEnquiries(): Enquiry[] {
  try {
    if (fs.existsSync(enquiriesFilePath)) {
      const data = fs.readFileSync(enquiriesFilePath, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Error reading enquiries file:", err);
  }
  return [];
}

function saveEnquiries(enquiries: Enquiry[]) {
  try {
    fs.writeFileSync(enquiriesFilePath, JSON.stringify(enquiries, null, 2), "utf-8");
  } catch (err) {
    console.error("Error saving enquiries file:", err);
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Submit new enquiry/booking
  app.post("/api/enquiries", (req, res) => {
    const { name, phone, treatment, area, preferredDate, notes } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: "Name and phone are required" });
    }

    const newEnquiry: Enquiry = {
      id: "ENQ-" + Date.now().toString(36).toUpperCase(),
      timestamp: new Date().toISOString(),
      name,
      phone,
      treatment: treatment || "General Consultation",
      area: area || "N/A",
      preferredDate: preferredDate || "As soon as possible",
      notes: notes || ""
    };

    const existing = getEnquiries();
    existing.unshift(newEnquiry);
    saveEnquiries(existing);

    console.log("New enquiry logged for Google Sheets connector:", newEnquiry);

    return res.json({
      success: true,
      message: "Enquiry logged successfully. Ready for Google Sheets export.",
      enquiry: newEnquiry,
      totalEnquiries: existing.length
    });
  });

  // API Route: List all enquiries
  app.get("/api/enquiries", (req, res) => {
    const enquiries = getEnquiries();
    res.json({ enquiries, count: enquiries.length });
  });

  // API Route: Download CSV for Google Sheets
  app.get("/api/enquiries/csv", (req, res) => {
    const enquiries = getEnquiries();
    const headers = ["ID", "Timestamp", "Customer Name", "Phone / WhatsApp", "Treatment", "Target Area", "Preferred Date", "Notes"];
    
    const rows = enquiries.map(e => [
      `"${e.id}"`,
      `"${e.timestamp}"`,
      `"${e.name.replace(/"/g, '""')}"`,
      `"${e.phone.replace(/"/g, '""')}"`,
      `"${e.treatment.replace(/"/g, '""')}"`,
      `"${(e.area || '').replace(/"/g, '""')}"`,
      `"${(e.preferredDate || '').replace(/"/g, '""')}"`,
      `"${(e.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="ammuri_aesthetics_enquiries.csv"');
    res.send(csvContent);
  });

  // Vite development middleware vs Static Production serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
