import { useEffect } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { applySeo, SITE_URL } from '../lib/seo';

export default function ContactPage() {
  useEffect(() => {
    applySeo({
      title: 'Liên hệ | AYOYA Shop',
      description: `Liên hệ AYOYA Shop qua địa chỉ ${CONTACT_INFO.address}, hotline ${CONTACT_INFO.phone} hoặc Zalo để được tư vấn sản phẩm thảo mộc, phong thủy.`,
      url: `${SITE_URL}/lien-he`,
      image: 'https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776475858/chat_luong_tam_duc_final_kfwn1o.png'
    });
    window.scrollTo(0, 0);
  }, []);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.address)}&output=embed`;

  return (
    <div className="pt-28 pb-24 px-4 bg-paper bg-ayoya-cream/30 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-serif text-ayoya-brown mb-4 underline underline-offset-8 decoration-ayoya-amber/30">
            Liên hệ <span className="italic">AYOYA</span>
          </h1>
          <p className="text-ayoya-brown/60 tracking-wider text-[10px] md:text-sm uppercase">Chúng tôi luôn sẵn sàng lắng nghe bạn</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-ayoya-brown/10">
              <MapPin size={22} className="text-ayoya-amber flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-ayoya-brown/50 mb-1">Địa chỉ</p>
                <p className="text-ayoya-brown">{CONTACT_INFO.address}</p>
              </div>
            </div>

            <a
              href={CONTACT_INFO.phoneHref}
              className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-ayoya-brown/10 hover:border-ayoya-brown/30 transition-colors"
            >
              <Phone size={22} className="text-ayoya-amber flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-ayoya-brown/50 mb-1">Điện thoại</p>
                <p className="text-ayoya-brown">{CONTACT_INFO.phone}</p>
              </div>
            </a>

            <a
              href={CONTACT_INFO.zaloHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-ayoya-brown/10 hover:border-ayoya-brown/30 transition-colors"
            >
              <MessageCircle size={22} className="text-ayoya-amber flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-ayoya-brown/50 mb-1">Zalo</p>
                <p className="text-ayoya-brown">Chat trực tiếp với AYOYA</p>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-ayoya-brown/10 hover:border-ayoya-brown/30 transition-colors"
            >
              <Mail size={22} className="text-ayoya-amber flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-ayoya-brown/50 mb-1">Email</p>
                <p className="text-ayoya-brown">{CONTACT_INFO.email}</p>
              </div>
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden border border-ayoya-brown/10 modern-zen-shadow min-h-[320px]">
            <iframe
              title="Bản đồ cửa hàng AYOYA Shop"
              src={mapSrc}
              className="w-full h-full min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
