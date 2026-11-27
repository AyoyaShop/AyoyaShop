import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  { image: '/photos/xuong-phoi-800.webp', label: 'Phơi thảo mộc', alt: 'Sân phơi thảo mộc trên các nong tre' },
  { image: '/photos/xuong-chon-800.webp', label: 'Chọn lọc', alt: 'Chọn lọc thảo mộc khô trên nong' },
  { image: '/photos/xuong-dong-goi-800.webp', label: 'Đóng gói', alt: 'Cân và đóng gói thảo mộc vào túi giấy' }
];

const VIDEO = 'v1776477706/7737362006875_lxnlau';

export default function OriginStory() {
  return (
    <section id="about" className="bg-ayoya-brown text-ayoya-cream py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <figure className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl">
            <img
              loading="lazy"
              src="/photos/binh-khi-700.webp"
              alt="Giá binh khí gỗ tre trong võ đường"
              className="w-full aspect-[3/4] object-cover"
            />
          </figure>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-ayoya-amber mb-3">Hành trình di sản</p>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6">
              Báu Vật Đất Võ <br />
              <span className="italic">Gửi Trọn Niềm Tin</span>
            </h2>
            <p className="border-l-2 border-ayoya-amber pl-5 italic mb-5">
              Tại sao lại là Rượu xoa bóp võ thuật cổ truyền Bình Định?
            </p>
            <div className="space-y-4 leading-relaxed text-ayoya-cream/85">
              <p>
                Câu chuyện bắt nguồn từ những lò võ truyền thống tại Bình Định. Sau những giờ luyện tập cường độ cao, các võ sư
                dùng bài thuốc xoa bóp bí truyền để phục hồi thể lực, thông kinh lạc và làm dịu các vết bầm.
              </p>
              <p>
                Chúng tôi kế thừa công thức ấy, kết hợp cùng quy trình "Tận tâm": từ việc trực tiếp chọn lựa từng vị thảo dược
                phơi khô dưới nắng giòn, đến khâu đóng gói tỉ mỉ như một món quà từ đất mẹ. Đó là cách AYOYA giữ giá trị "Chất lượng".
              </p>
            </div>
            <Link
              to="/ve-chung-toi"
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold uppercase tracking-widest text-ayoya-amber hover:text-white transition-colors"
            >
              Đọc câu chuyện đầy đủ <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <h3 className="mt-14 mb-6 text-center text-2xl font-serif">Từ Sân Phơi <span className="italic">Đến Gói Thảo Mộc</span></h3>
        <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {STEPS.map(step => (
            <figure key={step.label} className="w-[78%] shrink-0 snap-center md:w-auto">
              <img loading="lazy" src={step.image} alt={step.alt} className="w-full aspect-[4/3] rounded-2xl object-cover" />
              <figcaption className="mt-2 text-center text-sm text-ayoya-cream/85">{step.label}</figcaption>
            </figure>
          ))}
        </div>

        <video
          className="mt-10 w-full max-w-4xl mx-auto aspect-video rounded-2xl object-cover bg-black"
          controls
          playsInline
          preload="none"
          poster={`https://res.cloudinary.com/dfb8mvzhc/video/upload/so_2,q_auto,w_720,c_limit/${VIDEO}.jpg`}
        >
          <source src={`https://res.cloudinary.com/dfb8mvzhc/video/upload/q_auto:eco,w_720,c_limit/${VIDEO}.mp4`} />
          Trình duyệt của bạn không hỗ trợ xem video.
        </video>
      </div>
    </section>
  );
}
