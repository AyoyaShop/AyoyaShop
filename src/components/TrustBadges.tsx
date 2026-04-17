import { ShieldCheck, Truck, MessageCircle } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    { icon: ShieldCheck, text: 'Hoàn tiền 100% nếu phát hiện hóa chất' },
    { icon: Truck, text: 'Đồng kiểm - Kiểm tra hàng trước khi nhận' },
    { icon: MessageCircle, text: 'Tư vấn 24/7 từ chuyên gia thảo mộc' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-6 border-y border-ayoya-brown/5 lowercase italic text-xs tracking-wider text-ayoya-brown/50">
      {badges.map((Badge, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <Badge.icon size={16} strokeWidth={1.5} className="text-ayoya-green" />
          <span>{Badge.text}</span>
        </div>
      ))}
    </div>
  );
}
