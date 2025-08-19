import { randomUUID } from 'crypto';

// In-memory storage
const contacts = new Map();

function createContact(insertContact) {
  const id = randomUUID();
  const contact = { 
    ...insertContact,
    message: insertContact.message || null,
    id,
    createdAt: new Date()
  };
  contacts.set(id, contact);
  return contact;
}

function getContacts() {
  return Array.from(contacts.values()).sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );
}

export default async function handler(req, res) {
  console.log('API Contact called:', req.method, req.body);
  
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
      console.log('Processing POST request:', req.body);
      const { name, hospitalName, phoneNumber, message } = req.body || {};
      
      // Basic validation
      if (!name || !name.trim()) {
        return res.status(400).json({ 
          success: false, 
          message: "이름은 필수입니다"
        });
      }
      if (!hospitalName || !hospitalName.trim()) {
        return res.status(400).json({ 
          success: false, 
          message: "병원명은 필수입니다"
        });
      }
      if (!phoneNumber || !phoneNumber.trim() || phoneNumber.length < 10) {
        return res.status(400).json({ 
          success: false, 
          message: "올바른 연락처를 입력해주세요"
        });
      }
      
      const validatedData = { name, hospitalName, phoneNumber, message };
      const contact = createContact(validatedData);
      
      console.log("New contact form submission:", contact);
      
      res.status(200).json({ success: true, message: "문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다." });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
        error: error.message
      });
    }
  } else if (req.method === 'GET') {
    try {
      const contactsList = getContacts();
      res.json(contactsList);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ message: "서버 오류가 발생했습니다." });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}