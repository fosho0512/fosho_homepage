import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get EmailJS public key
  app.get("/api/emailjs-key", (req, res) => {
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      return res.status(500).json({ error: "EmailJS public key not configured" });
    }
    res.json({ publicKey });
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // In a real application, you would send an email here
      console.log("New contact form submission:", contact);
      
      res.json({ success: true, message: "문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다." });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "입력 정보를 확인해주세요",
          errors: error.errors 
        });
      }
      
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." 
      });
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
