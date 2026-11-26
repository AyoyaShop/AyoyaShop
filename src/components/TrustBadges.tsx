import { ShieldCheck, Truck, MessageCircle } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    { icon: ShieldCheck, text: 'Đổi trả trong 7 ngày theo chính sách' },
    { icon: Truck, text: 'Đồng kiểm - Kiểm tra hàng trước khi nhận' },
    { icon: MessageCircle, text: 'Tư vấn qua Zalo 0933.458.485' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-6 border-y border-ayoya-brown/5 text-sm text-ayoya-brown/80">
      {badges.map((Badge, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <Badge.icon size={16} strokeWidth={1.5} className="text-ayoya-green" />
          <span>{Badge.text}</span>
        </div>
      ))}
    </div>
  );
}
