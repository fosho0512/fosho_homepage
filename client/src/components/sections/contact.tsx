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
import { MapPin, Phone, Mail, Clock, MessageCircle, MessageSquare } from "lucide-react";

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
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: async (response) => {
      const result = await response.json();
      toast({
        title: "문의 접수 완료",
        description: result.message,
      });
      form.reset();
      setPrivacyConsent(false);
    },
    onError: (error: any) => {
      toast({
        title: "문의 접수 실패",
        description: error.message || "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
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
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 fade-in">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이름 *</FormLabel>
                      <FormControl>
                        <Input placeholder="홍길동" className="bg-gray-50 border-gray-200" {...field} />
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
                        <Input placeholder="○○치과의원" className="bg-gray-50 border-gray-200" {...field} />
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
                        <Input placeholder="010-0000-0000" className="bg-gray-50 border-gray-200" {...field} />
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
                          className="bg-gray-50 border-gray-200"
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
          
          {/* Office Info & Map */}
          <div className="fade-in">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">오시는 길</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-soft-teal h-5 w-5" />
                  <span>서울특별시 강남구 선릉로93길 54, 6층 6086호</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-soft-teal h-5 w-5" />
                  <span>02-1234-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-soft-teal h-5 w-5" />
                  <span>fosho0512@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-soft-teal h-5 w-5" />
                  <span>평일 09:00 - 18:00 (주말/공휴일 휴무)</span>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
}
