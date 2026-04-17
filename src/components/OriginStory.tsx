import { motion } from 'motion/react';

export default function OriginStory() {
  return (
    <section id="about" className="py-24 bg-paper bg-ayoya-brown/5 relative overflow-hidden">
      {/* Texture abstract element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ayoya-amber/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-ayoya-amber font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Hành trình di sản</span>
              <h2 className="text-4xl md:text-6xl font-serif text-ayoya-brown mb-8 leading-[1.1]">
                Báu Vật Đất Võ <br />
                <span className="italic">Gửi Trọn Niềm Tin</span>
              </h2>
              
              <div className="prose prose-ayoya text-ayoya-brown/70 leading-relaxed space-y-6 max-w-lg">
                <p className="font-medium text-ayoya-brown italic border-l-2 border-ayoya-amber pl-6 py-2">
                  Tại sao lại là Rượu xoa bóp võ thuật cổ truyền Bình Định? 
                </p>
                <p>
                  Câu chuyện bắt nguồn từ những lò võ truyền thống tại Binh Định. Sau những giờ luyện tập cường độ cao, các võ sư dùng loại "rượu mã tiền - thuốc võ" bí truyền để phục hồi thể lực, thông kinh lạc và đánh tan các vết bầm.
                </p>
                <p>
                  Chúng tôi kế thừa công thức ấy, kết hợp cùng quy trình "Tận tâm": từ việc trực tiếp chọn lựa từng vị thảo dược phơi khô dưới nắng giòn, đến khâu đóng gói tỉ mỉ như một món quà từ đất mẹ. Đó là bằng chứng thép cho giá trị "Chất lượng" mà AYOYA cam kết.
                </p>
              </div>

              <div className="pt-8 flex flex-wrap gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-serif text-ayoya-brown tracking-tighter italic">Bình Định</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ayoya-brown/40">Gốc gác thương hiệu</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-serif text-ayoya-brown tracking-tighter italic">Tận Tâm</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ayoya-brown/40">Quy trình thủ công</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-6 relative">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true }}
               className="space-y-6"
            >
              <div className="organic-border overflow-hidden aspect-[3/4] modern-zen-shadow bg-white p-2">
                <img 
                  src="https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776444400/%C4%91%C3%B4ng_y_codzsc.jpg?auto=format&fit=crop&q=80&w=800" 
                  alt=" " 
                  className="w-full h-full object-cover rounded-[35px] 5px [35px] 5px"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="px-4">
                <h4 className="font-serif italic text-ayoya-brown">Thảo mộc tuyển chọn</h4>
                <p className="text-[10px] uppercase text-ayoya-brown/40 mt-1">Nguồn dược liệu sạch</p>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9, y: -20 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               viewport={{ once: true }}
               className="space-y-6 mt-12"
            >
              <div className="organic-border overflow-hidden aspect-[3/4] modern-zen-shadow bg-white p-2">
                <img 
                  src="https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776444643/%C4%91%C3%B3ng_g%C3%B3i_f1mam2.png?auto=format&fit=crop&q=80&w=800" 
                  alt=" " 
                  className="w-full h-full object-cover rounded-[35px] 5px [35px] 5px"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="px-4">
                <h4 className="font-serif italic text-ayoya-brown">Đóng gói tỉ mỉ</h4>
                <p className="text-[10px] uppercase text-ayoya-brown/40 mt-1">Gửi trọn tâm tình</p>
              </div>
            </motion.div>
            
            {/* Visual seal element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-dashed border-ayoya-amber/30 flex items-center justify-center p-2">
               <div className="w-full h-full rounded-full bg-ayoya-brick/10 flex flex-col items-center justify-center text-ayoya-brick leading-none">
                  <span className="text-[10px] font-bold tracking-tighter">AYOYA</span>
                  <span className="text-[16px] font-serif italic">100%</span>
                  <span className="text-[10px] font-bold tracking-tighter">THIÊN NHIÊN</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
