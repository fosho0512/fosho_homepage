import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../lib/storage';
import { insertContactSchema } from '../shared/schema';
import { z } from 'zod';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
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
  } else if (req.method === 'GET') {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}