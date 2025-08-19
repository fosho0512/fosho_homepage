import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import consultationImage from "@assets/Image_fx (2)_1755220067017.jpg";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      hospitalName: "",
      phoneNumber: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      if (!privacyConsent) {
        throw new Error("개인정보 수집 및 이용에 동의해주세요.");
      }
      
      // 폼 유효성 검사
      if (!data.name.trim()) {
        throw new Error("이름을 입력해주세요.");
      }
      if (!data.hospitalName.trim()) {
        throw new Error("병원명을 입력해주세요.");
      }
      if (!data.phoneNumber.trim()) {
        throw new Error("연락처를 입력해주세요.");
      }
      
      try {
        // EmailJS Public Key 가져오기 (서버에서)
        let publicKey;
        try {
          const keyResponse = await fetch('/api/emailjs-key');
          const keyData = await keyResponse.json();
          publicKey = keyData.publicKey;
        } catch (keyError) {
          console.warn('서버에서 키를 가져올 수 없음, 기본값 사용');
          // 기본값으로 사용자가 제공한 키 사용
          publicKey = "ADrMZJpxjlRV0PkDL";
        }
        
        if (!publicKey) {
          throw new Error("EmailJS Public Key가 설정되지 않았습니다.");
        }
        
        console.log('EmailJS 초기화 중...');
        emailjs.init(publicKey);
        
        // EmailJS로 이메일 전송
        const emailData = {
          name: data.name,
          hospital: data.hospitalName,
          phone: data.phoneNumber,
          message: data.message || "문의 내용이 없습니다."
        };
        
        console.log('이메일 전송 중...', emailData);
        const emailResult = await emailjs.send(
          'service_t5ovtcj',
          'template_zuza2zn',
          emailData
        );
        console.log('이메일 전송 성공:', emailResult);
        
        // 서버에 데이터 저장
        const serverResponse = await apiRequest("POST", "/api/contact", data);
        console.log('서버 저장 성공');
        return serverResponse;
      } catch (emailError: any) {
        console.error('EmailJS 오류:', emailError);
        
        // EmailJS 오류 상세 분석
        if (emailError.status === 404) {
          throw new Error("EmailJS 계정 또는 서비스를 찾을 수 없습니다. Public Key를 확인해주세요.");
        } else if (emailError.status === 401) {
          throw new Error("EmailJS 인증 실패. Public Key가 올바르지 않습니다.");
        } else if (emailError.status === 400) {
          throw new Error("EmailJS 요청 오류. Service ID 또는 Template ID를 확인해주세요.");
        } else if (emailError.text) {
          throw new Error(`이메일 전송 실패: ${emailError.text}`);
        } else if (emailError.message && emailError.message.includes('json')) {
          throw new Error("EmailJS 응답 오류. Service ID와 Template ID를 확인해주세요.");
        } else {
          throw new Error(`이메일 전송 중 오류: ${emailError.message || '알 수 없는 오류'}`);
        }
      }
    },
    onSuccess: async (response) => {
      const result = await response.json();
      toast({
        title: "상담 신청 완료",
        description: "상담 신청이 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.",
      });
      form.reset();
      setPrivacyConsent(false);
    },
    onError: (error: any) => {
      console.error('상담 신청 오류:', error);
      
      // 구체적인 오류 메시지 표시
      let errorMessage = "상담 신청 중 오류가 발생했습니다.";
      
      if (error.message) {
        errorMessage = error.message;
      } else if (error.status === 404) {
        errorMessage = "이메일 서비스에 문제가 있습니다. 관리자에게 문의해주세요.";
      } else if (error.status) {
        errorMessage = `서버 오류 (${error.status}): 잠시 후 다시 시도해주세요.`;
      }
      
      toast({
        title: "상담 신청 실패",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    // 추가 폼 검증
    const errors = form.formState.errors;
    if (Object.keys(errors).length > 0) {
      console.log('폼 유효성 검사 오류:', errors);
      return;
    }
    
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-cool-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            지금 상담하세요
          </h2>
          <p className="text-lg text-gray-600">병원 마케팅의 새로운 시작, 포쇼마케팅과 함께하세요</p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden fade-in">
          <div className="grid lg:grid-cols-2">
            {/* Contact Form */}
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">무료 상담 신청</h3>
                <p className="text-gray-600">전문가와 직접 상담받으세요</p>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이름 *</FormLabel>
                        <FormControl>
                          <Input placeholder="홍길동" className="bg-gray-50 border-gray-200 placeholder:opacity-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="hospitalName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>병원명 *</FormLabel>
                        <FormControl>
                          <Input placeholder="○○치과의원" className="bg-gray-50 border-gray-200 placeholder:opacity-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>연락처 *</FormLabel>
                        <FormControl>
                          <Input placeholder="010-0000-0000" className="bg-gray-50 border-gray-200 placeholder:opacity-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>문의 내용</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4} 
                            placeholder="마케팅 관련 문의사항을 자세히 적어주세요" 
                            className="bg-gray-50 border-gray-200 placeholder:opacity-50"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="privacy" 
                      checked={privacyConsent}
                      onCheckedChange={(checked) => setPrivacyConsent(checked as boolean)}
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      개인정보 수집 및 이용에 동의합니다. (필수)
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-warm-orange hover:bg-orange-500 text-white py-4 rounded-lg font-semibold text-lg"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "전송 중..." : "무료 상담 신청"}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Consultation Image */}
            <div className="relative">
              <img 
                src={consultationImage} 
                alt="Professional marketing consultant with analytics dashboard" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
