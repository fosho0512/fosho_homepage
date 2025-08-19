export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    const publicKey = process.env.EMAILJS_PUBLIC_KEY || "ADrMZJpxjlRV0PkDL";
    const serviceId = process.env.EMAILJS_SERVICE_ID || "service_t5ovtcj";
    const templateId = process.env.EMAILJS_TEMPLATE_ID || "template_zuza2zn";
    
    res.json({ 
      publicKey,
      serviceId,
      templateId
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}