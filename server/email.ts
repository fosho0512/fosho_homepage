import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactFormData {
  name: string;
  hospitalName: string;
  phoneNumber: string;
  message?: string;
}

export async function sendContactNotification(contactData: ContactFormData): Promise<boolean> {
  try {
    const emailContent = `
새로운 상담 신청이 접수되었습니다.

신청자 정보:
- 이름: ${contactData.name}
- 병원명: ${contactData.hospitalName}
- 연락처: ${contactData.phoneNumber}
- 문의내용: ${contactData.message || '없음'}

접수 일시: ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}

포쇼마케팅 자동 알림 시스템
    `.trim();

    await mailService.send({
      to: 'fosho0512@gmail.com',
      from: 'noreply@foshomarketing.com', // SendGrid에서 인증된 발신자 이메일
      subject: `[포쇼마케팅] 새로운 상담 신청 - ${contactData.hospitalName}`,
      text: emailContent,
      html: `
        <div style="font-family: 'Noto Sans KR', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2C5282; border-bottom: 2px solid #38B2AC; padding-bottom: 10px;">
            새로운 상담 신청이 접수되었습니다
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2C5282; margin-bottom: 15px;">신청자 정보</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 100px;">이름:</td>
                <td style="padding: 8px 0;">${contactData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">병원명:</td>
                <td style="padding: 8px 0;">${contactData.hospitalName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">연락처:</td>
                <td style="padding: 8px 0;">${contactData.phoneNumber}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">문의내용:</td>
                <td style="padding: 8px 0;">${contactData.message || '없음'}</td>
              </tr>
            </table>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              접수 일시: ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}
            </p>
            <p style="color: #999; font-size: 12px; margin-top: 10px;">
              포쇼마케팅 자동 알림 시스템
            </p>
          </div>
        </div>
      `
    });
    
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}