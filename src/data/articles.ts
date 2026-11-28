// Articles under /bai-viet, each approved by the shop before it goes up.
// Text blocks may hold links written [label](address); addresses starting with "/" stay on the site.
export type ArticleBlock =
  | { type: 'h2' | 'h3' | 'p' | 'li' | 'quote'; text: string }
  | { type: 'img'; src: string; alt: string; width: number; height: number }
  | { type: 'table'; rows: string[][] }; // the first row is the header

export interface Article {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  published: string; // YYYY-MM-DD
  productIds: string[]; // product pages that link to this article
  lead?: string; // shown above the photo, for a question that should be answered at once
  hero: { src: string; alt: string; width: number; height: number };
  blocks: ArticleBlock[];
  notes: string[];
}

export const ARTICLES: Article[] = [
  {
    "slug": "dau-xoa-bop-vo-thuat-binh-dinh-cho-nguoi-tap-the-thao",
    "title": "Dầu xoa bóp võ thuật cổ truyền Bình Định: cách dùng cho người tập võ và chơi thể thao",
    "seoTitle": "Dầu xoa bóp võ thuật Bình Định cho người tập thể thao",
    "description": "Tìm hiểu dầu xoa bóp võ thuật cổ truyền Bình Định: thành phần, cách dùng, giá bán và lưu ý an toàn cho người tập võ, chơi thể thao.",
    "published": "2026-11-28",
    "productIds": [
      "dau-vo"
    ],
    "lead": "Tập võ, chạy bộ, đá bóng, cầu lông hay tập tạ đều làm nhiều nhóm cơ hoạt động liên tục. Sau buổi tập, vai, lưng, bắp chân hay đùi căng mỏi là chuyện thường gặp.",
    "hero": {
      "src": "/articles/dau-xoa-bop-vo-thuat-binh-dinh-cho-nguoi-tap-the-thao/dau-xoa-bop-vo-thuat-cho-nguoi-tap-the-thao.webp",
      "alt": "Chai dầu xoa bóp võ thuật cổ truyền Bình Định đặt cạnh găng tay tập võ",
      "width": 1280,
      "height": 720
    },
    "blocks": [
      {
        "type": "p",
        "text": "Ngoài nghỉ ngơi và giãn cơ, nhiều người có thói quen xoa bóp vùng cơ mỏi. Bài này nói rõ dùng dầu thế nào, và lúc nào tuyệt đối không nên xoa."
      },
      {
        "type": "h2",
        "text": "1. Xoa bóp sau tập giúp gì, và không thay được gì?"
      },
      {
        "type": "p",
        "text": "Thoa dầu rồi xoa nhẹ cho cảm giác ấm, hơi the mát và dễ chịu ở vùng da được chăm sóc, mỗi người cảm nhận một khác. Chỗ hay được chú ý:"
      },
      {
        "type": "li",
        "text": "Vai và lưng, khi tập võ, nâng tạ, chơi môn dùng tay."
      },
      {
        "type": "li",
        "text": "Bắp chân và đùi, khi chạy, nhảy, đá bóng."
      },
      {
        "type": "li",
        "text": "Cánh tay, cẳng tay, khi đấm, đỡ, đánh cầu."
      },
      {
        "type": "p",
        "text": "Dầu không thay cho khởi động, giãn cơ, nghỉ ngơi, và không phải cách chữa bong gân, rách cơ hay gãy xương."
      },
      {
        "type": "h2",
        "text": "2. Chai dầu có gì đáng chú ý?"
      },
      {
        "type": "p",
        "text": "Bài thuốc xoa bóp này được dùng ở võ đường Hồng Khanh của gia đình chúng tôi tại Bình Định từ năm 1983, sau những buổi luyện tập cường độ cao. Xem [Chuyện nhà võ](/ve-chung-toi)."
      },
      {
        "type": "li",
        "text": "Thành phần: lưu hội (lô hội), đại hoàng, bạch chỉ, nhị trà, huyết kiệt, hồng hoa, tam nại (địa liền), lá bạc hà, đại hồi, gừng khô, tá dược rượu vừa đủ (công thức ghi cho chai 500ml)."
      },
      {
        "type": "li",
        "text": "Sản xuất tại Hoài Nhơn, Bình Định."
      },
      {
        "type": "li",
        "text": "Chai 100ml gọn để mang theo; chai 500ml cho người dùng thường xuyên."
      },
      {
        "type": "li",
        "text": "Hạn sử dụng 36 tháng; bảo quản nơi khô ráo, dưới 30°C, xa tầm tay trẻ em."
      },
      {
        "type": "h2",
        "text": "3. Cách xoa bóp sau khi tập"
      },
      {
        "type": "p",
        "text": "Chỉ xoa trên vùng da lành, cơ căng mỏi bình thường. Chỗ sưng, nóng, đỏ, bầm hay đau nhiều sau va chạm thì không xoa."
      },
      {
        "type": "img",
        "src": "/articles/dau-xoa-bop-vo-thuat-binh-dinh-cho-nguoi-tap-the-thao/xoa-bop-bap-chan-sau-buoi-tap.webp",
        "alt": "Xoa bóp nhẹ bắp chân sau buổi tập",
        "width": 1280,
        "height": 720
      },
      {
        "type": "li",
        "text": "Lau sạch, để da khô."
      },
      {
        "type": "li",
        "text": "Lắc đều chai."
      },
      {
        "type": "li",
        "text": "Đổ một ít ra tay rồi thoa lên vùng cần chăm sóc."
      },
      {
        "type": "li",
        "text": "Xoa vòng tròn nhẹ tay 5 – 10 phút, ngày 2 – 3 lần; không day ấn mạnh, thấy đau thêm thì dừng."
      },
      {
        "type": "li",
        "text": "Rửa tay bằng xà phòng."
      },
      {
        "type": "p",
        "text": "Da ngứa, rát, nổi mẩn thì ngưng dùng và rửa sạch."
      },
      {
        "type": "h2",
        "text": "4. Bị bầm, sưng đau sau va chạm: có xoa dầu không?"
      },
      {
        "type": "p",
        "text": "Không. Vừa bị đá trúng, ngã hay va mạnh thì cơ, khớp có thể đang tổn thương. Trong một hai ngày đầu:"
      },
      {
        "type": "img",
        "src": "/articles/dau-xoa-bop-vo-thuat-binh-dinh-cho-nguoi-tap-the-thao/tui-chuom-lanh-so-cuu-sau-va-cham.webp",
        "alt": "Túi chườm lạnh bọc khăn để sơ cứu sau va chạm",
        "width": 1280,
        "height": 720
      },
      {
        "type": "li",
        "text": "Dừng tập, đừng cố chịu đau tập tiếp."
      },
      {
        "type": "li",
        "text": "Che chở chỗ đau, hạn chế cử động gây đau."
      },
      {
        "type": "li",
        "text": "Chườm lạnh bằng túi đá bọc khăn, mỗi lần khoảng 15 – 20 phút; không áp đá thẳng lên da."
      },
      {
        "type": "li",
        "text": "Băng ép nhẹ và kê cao chỗ đau."
      },
      {
        "type": "li",
        "text": "Không xoa bóp, day ấn và không bôi dầu làm ấm lên chỗ đang sưng bầm."
      },
      {
        "type": "p",
        "text": "Đau dữ dội, sưng to, bầm lan rộng, tay chân biến dạng, tê bì hoặc không đứng, không cầm nắm được thì đi cơ sở y tế ngay. Đọc thêm: [chấn thương dập cơ](https://orthoinfo.aaos.org/en/diseases--conditions/muscle-contusion-bruise/) của Viện Phẫu thuật Chỉnh hình Hoa Kỳ và [chấn thương thể thao](https://www.niams.nih.gov/health-topics/sports-injuries/diagnosis-treatment-and-steps-to-take) của Viện Khớp và Cơ Xương Hoa Kỳ (tiếng Anh)."
      },
      {
        "type": "h2",
        "text": "5. Ai không nên dùng?"
      },
      {
        "type": "li",
        "text": "Phụ nữ mang thai."
      },
      {
        "type": "li",
        "text": "Trẻ dưới 30 tháng tuổi."
      },
      {
        "type": "li",
        "text": "Người có tiền sử động kinh hoặc co giật."
      },
      {
        "type": "p",
        "text": "Chỉ dùng ngoài da, không uống; không thoa lên vết thương hở, da trầy, mắt, miệng, niêm mạc. Da nhạy cảm nên thử một ít ở mặt trong cánh tay trước."
      },
      {
        "type": "h2",
        "text": "6. Mua dầu xoa bóp ở đâu?"
      },
      {
        "type": "li",
        "text": "Chai 100ml: 79.000đ."
      },
      {
        "type": "li",
        "text": "2 chai 100ml: 153.000đ."
      },
      {
        "type": "li",
        "text": "Chai 500ml: 370.000đ."
      },
      {
        "type": "p",
        "text": "[Xem và đặt Dầu Xoa Bóp Võ Thuật Cổ Truyền Bình Định](/san-pham/dau-vo). Giá có thể thay đổi. Bạn được đồng kiểm khi nhận hàng; điều kiện đổi trả xem tại [chính sách đổi trả](/chinh-sach/chinh-sach-doi-tra)."
      },
      {
        "type": "p",
        "text": "Muốn biếu cha mẹ, xem bài [Dầu xoa bóp: món quà nhỏ dành tặng cha mẹ](/bai-viet/dau-xoa-bop-binh-dinh-tang-cha-me)."
      }
    ],
    "notes": [
      "Người viết: Nguyễn Tuấn Kiệt, Ayoya Shop. Điện thoại/Zalo: 0933.458.485. Địa chỉ: 6A/3 Nguyễn Du, Phường Bình Hòa, TP.HCM.",
      "Nội dung không thay thế tư vấn, chẩn đoán hoặc điều trị y tế."
    ]
  },
  {
    "slug": "vi-sao-can-xong-nha",
    "title": "Vì sao cần xông nhà? Ý nghĩa phong thủy và những điều nên biết",
    "seoTitle": "Vì sao cần xông nhà? Ý nghĩa và những điều cần biết",
    "description": "Vì sao nhiều gia đình có thói quen xông nhà? Tìm hiểu ý nghĩa phong thủy, thời điểm phù hợp và lưu ý an toàn khi sử dụng trầm hương.",
    "published": "2026-11-28",
    "productIds": [
      "tram-huong-xong-nha"
    ],
    "lead": "Chuyển về nhà mới, sửa lại nhà hay bước sang năm mới, nhiều gia đình nghĩ đến chuyện xông nhà. Người xem đó là nghi thức cầu bình an, người chỉ muốn nhà ấm cúng và đánh dấu một khởi đầu.",
    "hero": {
      "src": "/articles/vi-sao-can-xong-nha/goi-tram-huong-xong-nha-nhu-y-cat-tuong.webp",
      "alt": "Gói Trầm Hương Xông Nhà Như Ý – Cát Tường của Ayoya Shop",
      "width": 1280,
      "height": 720
    },
    "blocks": [
      {
        "type": "p",
        "text": "Vậy vì sao nhiều nhà xông, nên xông lúc nào, và dùng trầm hương cần để ý gì? Bài này trả lời từng ý và giới thiệu gói Trầm Hương Xông Nhà Như Ý – Cát Tường."
      },
      {
        "type": "h2",
        "text": "1. Vì sao nhiều gia đình có thói quen xông nhà?"
      },
      {
        "type": "p",
        "text": "Xông nhà là tập tục dân gian, không bắt buộc với nhà nào. Người ta thường làm vì ba lẽ."
      },
      {
        "type": "h3",
        "text": "Theo quan niệm phong thủy"
      },
      {
        "type": "p",
        "text": "Nhà lâu ngày đóng kín, thiếu sáng, ít gió được coi là tích khí tù đọng, uế khí. Theo quan niệm này, hương trầm và thảo mộc giúp làm mới không gian, xua điều không may và đón vận tốt."
      },
      {
        "type": "h3",
        "text": "Trong sinh hoạt"
      },
      {
        "type": "p",
        "text": "Xông nhà thường đi cùng việc tổng vệ sinh, mở cửa đón nắng gió, và hương trầm quen thuộc làm không khí trang nghiêm, ấm cúng. Còn nhà có mùi ẩm mốc, mùi sơn hay thức ăn tồn đọng thì cần tìm đúng nguồn mùi mà xử lý và thông gió, khói trầm không thay được việc đó."
      },
      {
        "type": "h3",
        "text": "Về tinh thần"
      },
      {
        "type": "img",
        "src": "/articles/vi-sao-can-xong-nha/don-dep-mo-cua-truoc-khi-xong-nha.webp",
        "alt": "Dọn dẹp và mở cửa đón nắng trước khi xông nhà",
        "width": 1280,
        "height": 720
      },
      {
        "type": "p",
        "text": "Sau một giai đoạn khó khăn, dọn nhà, xếp lại đồ đạc, mở cửa rồi làm một nghi thức hợp niềm tin của gia đình có thể là cái mốc để bắt đầu lại. Giá trị nằm ở lòng thành và sự chăm chút nơi ở, không ở chỗ đốt thật nhiều."
      },
      {
        "type": "h2",
        "text": "2. Khi nào nên xông nhà?"
      },
      {
        "type": "li",
        "text": "Chuyển về nhà mới."
      },
      {
        "type": "li",
        "text": "Khai trương cửa hàng, văn phòng."
      },
      {
        "type": "li",
        "text": "Cuối năm, sau khi tổng vệ sinh."
      },
      {
        "type": "li",
        "text": "Đầu năm mới."
      },
      {
        "type": "li",
        "text": "Sau khi sửa chữa nhà cửa và đã dọn sạch bụi."
      },
      {
        "type": "p",
        "text": "Đây là những dịp nhiều người chọn theo tập tục, không phải quy định. Muốn biết một năm nên xông ra sao cuối năm, xem [Cách xông nhà cuối năm](/bai-viet/cach-xong-nha-cuoi-nam)."
      },
      {
        "type": "h2",
        "text": "3. Gói Trầm Hương Xông Nhà Như Ý – Cát Tường có gì?"
      },
      {
        "type": "img",
        "src": "/articles/vi-sao-can-xong-nha/tram-huong-go-thom-va-thao-moc-xong-nha.webp",
        "alt": "Trầm, gỗ thơm và thảo mộc dùng xông nhà",
        "width": 1280,
        "height": 720
      },
      {
        "type": "p",
        "text": "Mỗi gói có sẵn đồ để xông, khỏi phải mua rời:"
      },
      {
        "type": "li",
        "text": "1 Linh Phù và 1 rùa phong thủy."
      },
      {
        "type": "li",
        "text": "Nụ trầm hương."
      },
      {
        "type": "li",
        "text": "1 cây than 10 viên."
      },
      {
        "type": "li",
        "text": "Khay xông."
      },
      {
        "type": "p",
        "text": "Nguyên liệu gồm ba nhóm: bột thơm (trầm hương, bách xanh, đại hồi, sả, vỏ bưởi, quế...), thảo dược có gai theo dân gian (bạch tật lê, thương nhĩ tử, câu đằng, muối sống) và gỗ thơm (đàn hương, trầm gió, ngọc am...). Hạn sử dụng 12 tháng, giá 125.000đ một gói."
      },
      {
        "type": "p",
        "text": "[Xem Trầm Hương Xông Nhà Như Ý – Cát Tường](/san-pham/tram-huong-xong-nha)"
      },
      {
        "type": "h2",
        "text": "4. Cách xông theo hướng dẫn trên gói"
      },
      {
        "type": "li",
        "text": "Đặt khay chịu nhiệt ở chỗ vững, đốt than cho hồng đều."
      },
      {
        "type": "li",
        "text": "Cho gỗ và thảo dược có gai vào trước, rồi rắc từng ít bột thơm, rắc thêm muối sống. Lớp trước cháy hết mới thêm lớp sau để khỏi ngạt khói."
      },
      {
        "type": "li",
        "text": "Mở cửa cho thoáng, cầm khay đi khắp nhà, chú ý gầm giường, phòng ngủ, nhà vệ sinh, bếp."
      },
      {
        "type": "li",
        "text": "Liệu trình đủ là 4 gói, mỗi lần cách nhau 3 – 4 ngày."
      },
      {
        "type": "p",
        "text": "Than tắt giữa chừng thì xem [cách đốt than và nụ trầm](/bai-viet/dot-than-va-nu-tram-khong-bi-tat)."
      },
      {
        "type": "h2",
        "text": "5. An toàn khi xông nhà"
      },
      {
        "type": "li",
        "text": "Than cháy sinh khí CO không màu, không mùi. Mở hết cửa khi xông, không đốt trong phòng đóng kín, không đốt rồi đi ngủ hay ra khỏi nhà."
      },
      {
        "type": "li",
        "text": "Ai thấy nhức đầu, chóng mặt, buồn nôn, khó thở thì ra ngay chỗ thoáng; không đỡ thì đi khám."
      },
      {
        "type": "li",
        "text": "Người hen suyễn, dị ứng, bệnh hô hấp, phụ nữ mang thai và trẻ nhỏ nên tránh khói ([khuyến cáo về hương liệu của Hội Phổi Hoa Kỳ](https://www.lung.org/clean-air/indoor-air/indoor-air-pollutants/fragrances), tiếng Anh)."
      },
      {
        "type": "li",
        "text": "Để khay xa rèm, giấy, vải, đồ gỗ; không rời mắt khi còn lửa, đợi than nguội hẳn mới đổ."
      },
      {
        "type": "li",
        "text": "Ở căn hộ, chung cư, khói dễ làm hệ thống báo cháy kêu: nên dùng [thảo dược xông nhà](/san-pham/thao-moc-xong-nha) và xông bằng cách đun nước."
      },
      {
        "type": "h2",
        "text": "6. Có phải xông nhà mới được bình an, may mắn?"
      },
      {
        "type": "p",
        "text": "Không. Xông nhà là tập tục mang ý nghĩa văn hóa và tinh thần, ai thấy hợp thì làm. Một ngôi nhà đáng sống trước hết cần sạch, thoáng, an toàn và là nơi cả nhà được nghỉ ngơi, thương yêu nhau."
      },
      {
        "type": "p",
        "text": "Nếu muốn tìm đồ xông, bạn xem [gói trầm hương](/san-pham/tram-huong-xong-nha) và [gói thảo dược](/san-pham/thao-moc-xong-nha); giá và hướng dẫn cập nhật ở từng trang."
      }
    ],
    "notes": [
      "Người viết: Nguyễn Tuấn Kiệt, Ayoya Shop. Điện thoại/Zalo: 0933.458.485. Địa chỉ: 6A/3 Nguyễn Du, Phường Bình Hòa, TP.HCM.",
      "Bài viết không thay thế tư vấn y tế hoặc hướng dẫn phòng cháy chữa cháy."
    ]
  },
  {
    "slug": "dau-xoa-bop-binh-dinh-tang-cha-me",
    "title": "Dầu xoa bóp võ thuật cổ truyền Bình Định: món quà nhỏ dành tặng cha mẹ",
    "seoTitle": "Dầu xoa bóp võ thuật cổ truyền Bình Định: Quà tặng cha mẹ",
    "description": "Tìm hiểu dầu xoa bóp võ thuật cổ truyền Bình Định 100ml: giá bán, cách dùng, lưu ý an toàn và gợi ý món quà thiết thực dành tặng cha mẹ.",
    "published": "2026-11-28",
    "productIds": [
      "dau-vo"
    ],
    "lead": "Có những điều cha mẹ ít khi nói ra: bờ vai mỏi sau ngày làm việc, cái lưng nhức khi vận động nhiều. Con cái thường chỉ nhận ra khi về thăm nhà.",
    "hero": {
      "src": "/articles/dau-xoa-bop-binh-dinh-tang-cha-me/dau-xoa-bop-vo-thuat-binh-dinh-100ml.webp",
      "alt": "Chai dầu xoa bóp võ thuật cổ truyền Bình Định đặt trên bàn gỗ",
      "width": 1280,
      "height": 720
    },
    "blocks": [
      {
        "type": "p",
        "text": "Một chai dầu đặt sẵn trên bàn để cha mẹ dùng khi cần, hay để con có dịp ngồi xuống xoa vai cho cha mẹ, là món quà nhỏ mà gần gũi. Bài này nói về chai dầu xoa bóp võ thuật cổ truyền Bình Định: có gì, dùng thế nào và ai không nên dùng."
      },
      {
        "type": "h2",
        "text": "1. Chuyện của chai dầu"
      },
      {
        "type": "p",
        "text": "Gia đình chúng tôi gắn bó với võ đường Hồng Khanh tại Bình Định từ năm 1983. Sau mỗi buổi luyện tập cường độ cao, người trong lò dùng bài thuốc xoa bóp của gia đình. Chai dầu hôm nay làm theo bài thuốc ấy. Xem thêm ở [Chuyện nhà võ](/ve-chung-toi)."
      },
      {
        "type": "p",
        "text": "Khi xoa, bạn thấy ấm nhẹ lan dần và hơi the mát, không nóng rát. Cảm nhận mỗi người mỗi khác. Dầu không phải thuốc trị đau nhức xương khớp và không thay việc đi khám."
      },
      {
        "type": "h2",
        "text": "2. Chai dầu gồm những gì?"
      },
      {
        "type": "img",
        "src": "/articles/dau-xoa-bop-binh-dinh-tang-cha-me/duoc-lieu-ngam-dau-xoa-bop.webp",
        "alt": "Một số dược liệu dùng ngâm dầu xoa bóp",
        "width": 1280,
        "height": 720
      },
      {
        "type": "li",
        "text": "Thành phần: lưu hội (lô hội), đại hoàng, bạch chỉ, nhị trà, huyết kiệt, hồng hoa, tam nại (địa liền), lá bạc hà, đại hồi, gừng khô, tá dược rượu vừa đủ (công thức ghi cho chai 500ml)."
      },
      {
        "type": "li",
        "text": "Sản xuất tại Hoài Nhơn, Bình Định."
      },
      {
        "type": "li",
        "text": "Hạn sử dụng 36 tháng kể từ ngày sản xuất."
      },
      {
        "type": "li",
        "text": "Bảo quản nơi khô ráo, dưới 30°C, xa tầm tay trẻ em."
      },
      {
        "type": "p",
        "text": "Cha mẹ từng dị ứng với thành phần nào thì đọc kỹ nhãn trước khi mua."
      },
      {
        "type": "h2",
        "text": "3. Ai không nên dùng?"
      },
      {
        "type": "li",
        "text": "Phụ nữ mang thai."
      },
      {
        "type": "li",
        "text": "Trẻ dưới 30 tháng tuổi."
      },
      {
        "type": "li",
        "text": "Người có tiền sử động kinh hoặc co giật."
      },
      {
        "type": "p",
        "text": "Dầu chỉ xoa ngoài da, tuyệt đối không uống; không bôi lên vết thương hở, da trầy xước, mắt, miệng, niêm mạc."
      },
      {
        "type": "p",
        "text": "Cha mẹ loãng xương nặng, có bệnh mạch máu, rối loạn đông máu, đang uống thuốc chống đông hoặc nhiều bệnh nền thì nên hỏi nhân viên y tế trước khi xoa bóp."
      },
      {
        "type": "h2",
        "text": "4. Cách xoa bóp nhẹ nhàng cho cha mẹ"
      },
      {
        "type": "img",
        "src": "/articles/dau-xoa-bop-binh-dinh-tang-cha-me/con-xoa-bop-vai-cho-cha-me.webp",
        "alt": "Con nhẹ nhàng xoa vai cho cha mẹ",
        "width": 1280,
        "height": 720
      },
      {
        "type": "li",
        "text": "Lắc đều chai trước khi dùng."
      },
      {
        "type": "li",
        "text": "Chọn vùng da sạch, khô, lành lặn, ví dụ vai hay lưng."
      },
      {
        "type": "li",
        "text": "Đổ một ít dầu, thoa đều rồi xoa vòng tròn nhẹ tay 5 – 10 phút, ngày 2 – 3 lần."
      },
      {
        "type": "li",
        "text": "Không ấn mạnh vào xương, khớp; không bẻ, vặn cổ hay lưng."
      },
      {
        "type": "li",
        "text": "Cha mẹ thấy đau thêm, rát hay khó chịu thì dừng."
      },
      {
        "type": "li",
        "text": "Xoa xong rửa tay bằng xà phòng."
      },
      {
        "type": "p",
        "text": "Da nhạy cảm nên thử một ít ở mặt trong cánh tay trước. Ngứa, rát, nổi mẩn thì ngưng dùng và rửa sạch."
      },
      {
        "type": "h2",
        "text": "5. Khi nào nên đi khám thay vì xoa dầu?"
      },
      {
        "type": "p",
        "text": "Đau kéo dài hoặc tăng dần, tê bì tay chân, khớp sưng nóng đỏ thì đưa cha mẹ đi khám. Một bên chân tự nhiên sưng, đau, nóng, đỏ thì tuyệt đối không xoa vào đó và cần đi khám sớm, vì có thể là vấn đề mạch máu nghiêm trọng."
      },
      {
        "type": "p",
        "text": "Đừng để việc xoa bóp làm chậm chuyện đi khám. Đọc thêm: [Massage trị liệu: điều cần biết](https://www.nccih.nih.gov/health/massage-therapy-what-you-need-to-know) của Viện Y tế Quốc gia Hoa Kỳ và [lưu ý xoa bóp cho người cao tuổi](https://www.elderly.gov.hk/english/healthy_ageing/personal_care/massage.html) của Dịch vụ Y tế Người cao tuổi Hồng Kông (tiếng Anh)."
      },
      {
        "type": "h2",
        "text": "6. Mua dầu xoa bóp ở đâu?"
      },
      {
        "type": "li",
        "text": "Chai 100ml: 79.000đ."
      },
      {
        "type": "li",
        "text": "2 chai 100ml: 153.000đ."
      },
      {
        "type": "li",
        "text": "Chai 500ml: 370.000đ."
      },
      {
        "type": "p",
        "text": "[Xem Dầu Xoa Bóp Võ Thuật Cổ Truyền Bình Định](/san-pham/dau-vo). Giá có thể thay đổi. Bạn được đồng kiểm khi nhận hàng, trả tiền khi nhận hoặc chuyển khoản; điều kiện đổi trả xem tại [chính sách đổi trả](/chinh-sach/chinh-sach-doi-tra)."
      },
      {
        "type": "p",
        "text": "Muốn biếu thêm món chăm đôi chân, xem bài [Quà Tết biếu cha mẹ](/bai-viet/qua-tet-bieu-cha-me); túi ngâm chân có những người không dùng được, bạn đọc kỹ trước."
      },
      {
        "type": "p",
        "text": "Một buổi tối ngồi bên cha mẹ, hỏi han vài câu rồi xoa nhẹ đôi vai, đôi khi là điều đáng quý nhất."
      }
    ],
    "notes": [
      "Người viết: Nguyễn Tuấn Kiệt, Ayoya Shop. Điện thoại/Zalo: 0933.458.485.",
      "Nội dung không thay thế tư vấn, chẩn đoán hoặc điều trị y tế."
    ]
  },
  {
    "slug": "qua-tet-bieu-cha-me",
    "title": "Quà Tết biếu cha mẹ: món quà chăm sóc thân tình và thiết thực",
    "seoTitle": "Quà Tết biếu cha mẹ: Chọn quà sức khỏe sao cho phù hợp?",
    "description": "Gợi ý quà Tết biếu cha mẹ gồm dầu xoa bóp và túi ngâm chân thảo dược. Xem thành phần, cách dùng và những lưu ý an toàn cho người lớn tuổi.",
    "published": "2026-11-28",
    "productIds": [
      "dau-vo",
      "ngam-chan-moc-an"
    ],
    "lead": "Tết là dịp con cháu bày tỏ lòng biết ơn. Quà ý nghĩa không cần đắt: món cha mẹ dùng được trong sinh hoạt hằng ngày thường được nhớ lâu.",
    "hero": {
      "src": "/articles/qua-tet-bieu-cha-me/bo-qua-tet-bieu-cha-me.webp",
      "alt": "Bộ quà Tết Biếu Cha Mẹ gồm hai chai dầu xoa bóp và bịch thảo dược ngâm chân",
      "width": 1280,
      "height": 720
    },
    "blocks": [
      {
        "type": "p",
        "text": "Nếu muốn biếu theo hướng chăm sóc cơ thể, bạn có thể xem [bộ quà Biếu Cha Mẹ](/bo-qua-tet) gồm 2 chai dầu xoa bóp 100ml và 10 túi thảo dược ngâm chân. Trước khi mua, hãy đọc phần ai không nên dùng ở dưới."
      },
      {
        "type": "h2",
        "text": "1. Bộ quà Biếu Cha Mẹ gồm những gì?"
      },
      {
        "type": "li",
        "text": "2 chai [Dầu Xoa Bóp Võ Thuật Cổ Truyền Bình Định](/san-pham/dau-vo), 100ml một chai, dùng xoa ngoài da."
      },
      {
        "type": "li",
        "text": "10 túi lọc [Thảo Dược Ngâm Chân Mộc An](/san-pham/ngam-chan-moc-an), pha nước ngâm chân."
      },
      {
        "type": "p",
        "text": "Giá bộ 228.000đ, đúng bằng giá mua lẻ. Khách có mã in trên menu hoặc thư cảm ơn của shop thì còn 182.400đ; mỗi số điện thoại dùng mã một lần."
      },
      {
        "type": "img",
        "src": "/articles/qua-tet-bieu-cha-me/bich-thao-duoc-ngam-chan-moc-an.webp",
        "alt": "Bịch thảo dược ngâm chân Mộc An 10 túi lọc",
        "width": 1280,
        "height": 720
      },
      {
        "type": "h2",
        "text": "2. Trước khi biếu: cha mẹ có dùng được không?"
      },
      {
        "type": "p",
        "text": "Đồ dùng trên cơ thể thì hợp người quan trọng hơn món nhiều hay ít. Bạn nên hỏi thăm bệnh nền và tình trạng sức khỏe của cha mẹ trước."
      },
      {
        "type": "h3",
        "text": "Không dùng túi ngâm chân cho"
      },
      {
        "type": "li",
        "text": "Người mắc tiểu đường."
      },
      {
        "type": "li",
        "text": "Người bị giãn tĩnh mạch."
      },
      {
        "type": "li",
        "text": "Người có vết thương hở ở chân."
      },
      {
        "type": "li",
        "text": "Phụ nữ mang thai."
      },
      {
        "type": "li",
        "text": "Người vừa ăn no."
      },
      {
        "type": "p",
        "text": "Người tiểu đường có thể bị giảm cảm giác ở bàn chân nên không biết nước quá nóng hay chân đang trầy. [Viện Đái tháo đường và Bệnh thận Hoa Kỳ (NIDDK)](https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/foot-problems) khuyên họ không ngâm chân. Với người giãn tĩnh mạch, [hướng dẫn của Anh (NICE)](https://www.nice.org.uk/guidance/cg168/ifp/chapter/information-about-varicose-veins) khuyên tránh những thứ làm triệu chứng nặng thêm, trong đó có tắm nước nóng (hai trang đều bằng tiếng Anh). Người có bệnh tuần hoàn nên hỏi nhân viên y tế trước."
      },
      {
        "type": "h3",
        "text": "Không dùng dầu xoa bóp cho"
      },
      {
        "type": "li",
        "text": "Phụ nữ mang thai."
      },
      {
        "type": "li",
        "text": "Trẻ dưới 30 tháng tuổi."
      },
      {
        "type": "li",
        "text": "Người có tiền sử động kinh hoặc co giật."
      },
      {
        "type": "p",
        "text": "Dầu chỉ xoa ngoài da, tuyệt đối không uống; không bôi lên vết thương hở, mắt, miệng, niêm mạc. Da nhạy cảm nên thử một ít ở mặt trong cánh tay."
      },
      {
        "type": "p",
        "text": "Nếu cha mẹ thuộc một trong các nhóm trên, bạn nên chọn món quà khác thay vì cố dùng đủ cả bộ."
      },
      {
        "type": "h2",
        "text": "3. Cách ngâm chân bằng túi thảo dược"
      },
      {
        "type": "p",
        "text": "Chỉ áp dụng cho người không thuộc nhóm nêu trên."
      },
      {
        "type": "img",
        "src": "/articles/qua-tet-bieu-cha-me/chau-nuoc-ngam-chan-thao-duoc.webp",
        "alt": "Chậu nước ngâm chân với túi thảo dược, nhiệt kế và khăn khô",
        "width": 1280,
        "height": 720
      },
      {
        "type": "li",
        "text": "Cho 1 túi lọc vào chậu, thêm 1 – 2 lít nước sôi, đợi khoảng 5 phút."
      },
      {
        "type": "li",
        "text": "Pha thêm nước mát cho còn khoảng 38 – 42°C, đo bằng nhiệt kế. Đừng để người giảm cảm giác nóng lạnh tự ước chừng."
      },
      {
        "type": "li",
        "text": "Ngâm 15 – 20 phút, xoa nhẹ lòng bàn chân. Thấy nóng rát hay khó chịu thì nhấc chân ra."
      },
      {
        "type": "li",
        "text": "Lau khô bằng khăn mềm, nhất là các kẽ ngón; không cần rửa lại."
      },
      {
        "type": "h2",
        "text": "4. Cách dùng dầu xoa bóp"
      },
      {
        "type": "img",
        "src": "/articles/qua-tet-bieu-cha-me/chai-dau-xoa-bop-vo-thuat-binh-dinh.webp",
        "alt": "Chai dầu xoa bóp võ thuật cổ truyền Bình Định",
        "width": 1280,
        "height": 720
      },
      {
        "type": "li",
        "text": "Lắc đều chai."
      },
      {
        "type": "li",
        "text": "Đổ một ít lên vùng da sạch, khô."
      },
      {
        "type": "li",
        "text": "Xoa nhẹ theo vòng tròn 5 – 10 phút, ngày 2 – 3 lần."
      },
      {
        "type": "li",
        "text": "Xoa xong rửa tay, tránh để dầu dính vào mắt, miệng."
      },
      {
        "type": "p",
        "text": "Khi xoa thường thấy ấm nhẹ, hơi the mát; mỗi người cảm nhận một khác. Da ngứa, rát, nổi mẩn thì ngưng dùng và rửa sạch bằng nước."
      },
      {
        "type": "h2",
        "text": "5. Khi nào nên đi khám?"
      },
      {
        "type": "p",
        "text": "Dầu và túi ngâm không thay thuốc, cũng không thay việc đi khám. Đau nhức kéo dài hoặc tăng dần, tê bì thường xuyên, chân sưng, da nóng đỏ thì nên đưa cha mẹ đến cơ sở y tế. Người tiểu đường thấy chân loét, nứt, phồng rộp, sưng hay đỏ thì đi khám, đừng tự ngâm hay xoa."
      },
      {
        "type": "h2",
        "text": "6. Mua bộ quà Biếu Cha Mẹ ở đâu?"
      },
      {
        "type": "p",
        "text": "Đặt tại trang [Bộ quà Tết](/bo-qua-tet). Bạn được đồng kiểm khi nhận hàng, trả tiền khi nhận hoặc chuyển khoản; điều kiện đổi trả xem tại [chính sách đổi trả](/chinh-sach/chinh-sach-doi-tra)."
      },
      {
        "type": "p",
        "text": "Chọn món hợp sức khỏe và thói quen của cha mẹ, sự chăm sóc bắt đầu từ những điều giản dị mỗi ngày."
      }
    ],
    "notes": [
      "Người viết: Nguyễn Tuấn Kiệt, Ayoya Shop. Điện thoại/Zalo: 0933.458.485.",
      "Nội dung không thay thế tư vấn, chẩn đoán hoặc điều trị y tế."
    ]
  },
  {
    "slug": "lau-don-ban-tho-ngay-tet",
    "title": "Lau dọn bàn thờ ngày Tết: cách bao sái đúng và an toàn",
    "seoTitle": "Lau dọn bàn thờ ngày Tết: Cách bao sái đúng và an toàn",
    "description": "Hướng dẫn lau dọn bàn thờ ngày Tết: thời điểm bao sái, chuẩn bị khăn lau, cách pha nước lau bàn thờ Cửu Vị Hương và lưu ý bảo vệ đồ thờ.",
    "published": "2026-11-28",
    "productIds": [
      "nuoc-lau-ban-tho"
    ],
    "lead": "Cuối năm, nhiều gia đình lau dọn bàn thờ, còn gọi là bao sái, để nơi thờ cúng sạch sẽ, trang nghiêm trước khi đón năm mới.",
    "hero": {
      "src": "/articles/lau-don-ban-tho-ngay-tet/ban-tho-gia-tien-don-tet.webp",
      "alt": "Bàn thờ gia tiên được lau dọn sạch sẽ trước ngày Tết",
      "width": 1280,
      "height": 720
    },
    "blocks": [
      {
        "type": "p",
        "text": "Việc này không chỉ là phủi bụi. Bạn cần để ý thứ tự làm, cách pha nước lau, độ ẩm của khăn và chất liệu từng món đồ để gỗ, đồng, sứ và lớp sơn không bị hỏng."
      },
      {
        "type": "h2",
        "text": "1. Khi nào nên lau dọn bàn thờ ngày Tết?"
      },
      {
        "type": "p",
        "text": "Nhiều nhà bao sái vào những ngày cuối năm, trước giao thừa. Không có một ngày bắt buộc cho mọi nhà: bạn chọn lúc hợp sinh hoạt và nếp nhà mình."
      },
      {
        "type": "li",
        "text": "Cuối năm: bao sái tổng thể, lau đồ thờ và khu vực quanh bàn thờ."
      },
      {
        "type": "li",
        "text": "Trước ngày lễ, ngày giỗ: lau nhẹ cho gọn gàng."
      },
      {
        "type": "li",
        "text": "Ngày thường: lau bụi khi cần, không phải lần nào cũng hạ hết đồ xuống."
      },
      {
        "type": "h2",
        "text": "2. Chuẩn bị trước khi bao sái bàn thờ"
      },
      {
        "type": "img",
        "src": "/articles/lau-don-ban-tho-ngay-tet/chai-nuoc-lau-ban-tho-cuu-vi-huong.webp",
        "alt": "Chai nước lau bàn thờ Cửu Vị Hương 500ml",
        "width": 1280,
        "height": 720
      },
      {
        "type": "li",
        "text": "Một khăn mềm sạch để thấm nước lau và một khăn khô mềm để lau lại; khăn dùng riêng cho bàn thờ."
      },
      {
        "type": "li",
        "text": "Nước sạch hoặc nước lau chuyên dụng có hướng dẫn rõ ràng."
      },
      {
        "type": "li",
        "text": "Một khay hay mặt phẳng sạch để tạm đặt những món được phép di chuyển."
      },
      {
        "type": "p",
        "text": "[Nước Lau Bàn Thờ Cửu Vị Hương](/san-pham/nuoc-lau-ban-tho) chai 500ml gồm nước tinh khiết và tinh chất 9 loại thảo mộc: mùi già, quế, đại hồi, đinh hương, gừng, hương nhu, bạc hà, sả, vỏ bưởi. Không cồn, không chất tẩy công nghiệp. Giá 87.000đ."
      },
      {
        "type": "h2",
        "text": "3. Cách pha nước lau bàn thờ Cửu Vị Hương"
      },
      {
        "type": "p",
        "text": "Dùng nguyên chất, hoặc pha loãng với nước ấm theo tỷ lệ 1:3."
      },
      {
        "type": "li",
        "text": "Nguyên chất: cho một ít ra khăn mềm, thấm đều, đừng để khăn quá ướt."
      },
      {
        "type": "li",
        "text": "Pha 1:3: một phần nước lau với ba phần nước ấm, ví dụ 50ml nước lau với 150ml nước ấm; khuấy nhẹ rồi thấm khăn."
      },
      {
        "type": "p",
        "text": "Tỷ lệ 1:3 là của riêng sản phẩm này, không phải công thức chung cho mọi loại. Không pha thêm giấm, cồn, thuốc tẩy hay chất tẩy rửa khác."
      },
      {
        "type": "h2",
        "text": "4. Năm bước lau dọn bàn thờ ngày Tết"
      },
      {
        "type": "h3",
        "text": "Bước 1: Xin phép theo nếp nhà"
      },
      {
        "type": "p",
        "text": "Nhiều gia đình thắp nhang, khấn xin phép tổ tiên và các vị được thờ trước khi bao sái. Lời khấn và cách làm theo phong tục từng nhà."
      },
      {
        "type": "h3",
        "text": "Bước 2: Sắp xếp, hạ đồ thờ cho phù hợp"
      },
      {
        "type": "p",
        "text": "Xem món nào được di chuyển, hạ nhẹ tay và đặt lên khay sạch. Riêng bát hương, bài vị và những món có ý nghĩa thờ cúng riêng, nếu nhà có lệ không xê dịch thì giữ nguyên chỗ."
      },
      {
        "type": "h3",
        "text": "Bước 3: Lau từ trên xuống dưới"
      },
      {
        "type": "p",
        "text": "Lau chỗ cao trước, rồi đến đồ thờ, mặt bàn và cuối cùng là chân bàn, để bụi không rơi lại vào phần đã sạch. Không chà mạnh, không dùng vật cứng cạo vết bám."
      },
      {
        "type": "h3",
        "text": "Bước 4: Thấm nước lau vào khăn, không đổ lên đồ thờ"
      },
      {
        "type": "img",
        "src": "/articles/lau-don-ban-tho-ngay-tet/lau-ban-tho-bang-khan-mem.webp",
        "alt": "Dùng khăn mềm thấm nước lau để vệ sinh bàn thờ",
        "width": 1280,
        "height": 720
      },
      {
        "type": "p",
        "text": "Cho nước lau vào khăn rồi mới lau. Làm vậy nước không chảy vào khe, mối nối và chỗ khó khô. Đồ gỗ sơn, đồ có lớp phủ và đồ đồng nên thử ở một góc khuất trước; thấy đổi màu hay xỉn thì dừng."
      },
      {
        "type": "h3",
        "text": "Bước 5: Lau khô rồi sắp lại"
      },
      {
        "type": "p",
        "text": "Dùng khăn khô lau hết phần ẩm, đợi đồ khô hẳn mới đặt về chỗ và sắp theo cách bày quen thuộc của gia đình."
      },
      {
        "type": "h2",
        "text": "5. Lưu ý theo từng chất liệu"
      },
      {
        "type": "li",
        "text": "Gỗ và gỗ sơn: khăn không quá ướt, không để nước đọng, không chà mạnh chỗ chạm khắc. Gỗ mộc hoặc lớp sơn đã xuống cấp thì hỏi thợ trước."
      },
      {
        "type": "li",
        "text": "Sơn son thếp vàng: lau rất nhẹ bằng khăn mềm, thử ở chỗ khuất; không dùng bàn chải cứng hay chất tẩy mài mòn."
      },
      {
        "type": "li",
        "text": "Đồ đồng: mỗi món một lớp hoàn thiện khác nhau, đừng mặc định nước lau nào cũng hợp; thử ở góc khuất."
      },
      {
        "type": "li",
        "text": "Đồ sứ, thủy tinh: lau nhẹ, đặt chắc tay để tránh va đập."
      },
      {
        "type": "h2",
        "text": "6. Bảo quản nước lau bàn thờ"
      },
      {
        "type": "li",
        "text": "Đậy kín sau khi dùng, để nơi khô ráo, thoáng mát, tránh nắng và nguồn nhiệt."
      },
      {
        "type": "li",
        "text": "Để xa tầm tay trẻ nhỏ."
      },
      {
        "type": "li",
        "text": "Thấy màu, mùi hay trạng thái khác thường thì không dùng."
      },
      {
        "type": "li",
        "text": "Hạn sử dụng 12 tháng kể từ ngày sản xuất."
      },
      {
        "type": "h2",
        "text": "7. Chuẩn bị bàn thờ đón Tết cùng Ayoya"
      },
      {
        "type": "img",
        "src": "/articles/lau-don-ban-tho-ngay-tet/bo-ban-tho-ngay-xuan.webp",
        "alt": "Bộ Bàn Thờ Ngày Xuân gồm nhang trầm, nụ trầm và nước lau bàn thờ",
        "width": 1280,
        "height": 720
      },
      {
        "type": "p",
        "text": "Bạn có thể mua riêng [chai nước lau bàn thờ](/san-pham/nuoc-lau-ban-tho), hoặc lấy [bộ Bàn Thờ Ngày Xuân](/bo-qua-tet) giá 341.000đ, gồm một hộp nhang trầm, một hộp nụ trầm và một chai nước lau: lau dọn xong là có sẵn hương cho bàn thờ."
      },
      {
        "type": "p",
        "text": "Đọc thêm: [Chọn nhang bàn thờ](/bai-viet/chon-nhang-ban-tho) và [Cách đốt than xông và nụ trầm không bị tắt](/bai-viet/dot-than-va-nu-tram-khong-bi-tat)."
      }
    ],
    "notes": [
      "Người viết: Nguyễn Tuấn Kiệt, Ayoya Shop. Điện thoại/Zalo: 0933.458.485.",
      "Bài viết hướng dẫn vệ sinh tham khảo; đồ thờ quý hoặc đã cũ nên hỏi thợ chuyên môn."
    ]
  },
  {
    "slug": "chon-nhang-ban-tho",
    "title": "Chọn nhang bàn thờ: nên dùng nhang trầm hay nhang quế?",
    "seoTitle": "Chọn nhang bàn thờ: Nên thắp nhang trầm hay nhang quế?",
    "description": "So sánh nhang trầm, nhang quế cây và nhang quế bó An Mộc Hương về thành phần, mùi hương, quy cách, giá bán và cách bảo quản.",
    "published": "2026-11-28",
    "productIds": [
      "nhang-tram-cao-cap",
      "nhang-que",
      "nhang-bo-que"
    ],
    "lead": "Chọn nhang bàn thờ là chọn mùi hương cả nhà thấy dễ chịu, rồi đến lượng khói, quy cách và túi tiền. Người thích hương trầm dịu, người quen mùi quế ấm, đậm.",
    "hero": {
      "src": "/articles/chon-nhang-ban-tho/so-sanh-ba-loai-nhang-ban-tho.webp",
      "alt": "Ba loại nhang bàn thờ: nhang trầm hương, nhang quế cây và nhang quế dạng bó",
      "width": 1280,
      "height": 720
    },
    "blocks": [
      {
        "type": "p",
        "text": "Bài này so sánh ba loại nhang thương hiệu An Mộc Hương, sản xuất tại Long An: nhang trầm hương, nhang quế cây và nhang quế dạng bó."
      },
      {
        "type": "h2",
        "text": "1. So sánh nhanh ba loại nhang bàn thờ"
      },
      {
        "type": "table",
        "rows": [
          [
            "Tiêu chí",
            "Trầm hương",
            "Quế cây",
            "Quế bó"
          ],
          [
            "Nguyên liệu",
            "Bột trầm hương",
            "90% vỏ quế",
            "90% vỏ và lá quế"
          ],
          [
            "Mùi",
            "Trầm dịu",
            "Quế ấm",
            "Quế đậm"
          ],
          [
            "Quy cách",
            "50 cây, 30cm",
            "180 cây, 250g",
            "180 cây, 250g"
          ],
          [
            "Giá",
            "95.000đ",
            "109.000đ",
            "67.000đ"
          ],
          [
            "Mỗi cây",
            "khoảng 1.900đ",
            "khoảng 600đ",
            "khoảng 370đ"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Cả ba đều kết dính bằng bời lời và dùng tăm tre. Giá là giá trên web lúc viết bài, có thể thay đổi."
      },
      {
        "type": "h2",
        "text": "2. Nên thắp nhang trầm hay nhang quế?"
      },
      {
        "type": "p",
        "text": "Không có một loại hợp cho mọi nhà. Bạn chọn theo mùi mình thích, thói quen thắp và không gian thờ."
      },
      {
        "type": "h3",
        "text": "Nhang trầm hương: cho người thích mùi trầm dịu"
      },
      {
        "type": "img",
        "src": "/articles/chon-nhang-ban-tho/nhang-tram-huong-an-moc-huong.webp",
        "alt": "Hộp nhang trầm hương An Mộc Hương 50 cây",
        "width": 1280,
        "height": 720
      },
      {
        "type": "p",
        "text": "Làm từ bột trầm hương thiên nhiên, kết dính bằng keo bời lời, tăm tre. Mùi trầm đặc trưng, ít khói theo mô tả sản phẩm, được nhiều nhà thắp bàn thờ Phật, tổ tiên và những dịp trang nghiêm. Hộp 50 cây, dài 30cm, giá 95.000đ."
      },
      {
        "type": "p",
        "text": "[Xem Nhang Trầm Hương Cao Cấp](/san-pham/nhang-tram-cao-cap)"
      },
      {
        "type": "h3",
        "text": "Nhang quế cây: cho người thích mùi quế ấm"
      },
      {
        "type": "img",
        "src": "/articles/chon-nhang-ban-tho/nhang-que-cao-cap-an-moc-huong.webp",
        "alt": "Hộp nhang quế cao cấp An Mộc Hương",
        "width": 1280,
        "height": 720
      },
      {
        "type": "p",
        "text": "Mùi quế ấm, quen thuộc, hợp thắp hằng ngày. Thành phần 90% vỏ quế, 10% keo bời lời và tăm tre. Hộp 180 cây, khối lượng 250g, giá 109.000đ, dễ cất trong hộp."
      },
      {
        "type": "p",
        "text": "[Xem Nhang Quế Cao Cấp](/san-pham/nhang-que)"
      },
      {
        "type": "h3",
        "text": "Nhang quế dạng bó: cho nhà thắp thường xuyên"
      },
      {
        "type": "img",
        "src": "/articles/chon-nhang-ban-tho/bo-nhang-que-an-moc-huong.webp",
        "alt": "Bó nhang quế An Mộc Hương",
        "width": 1280,
        "height": 720
      },
      {
        "type": "p",
        "text": "Vỏ và lá quế nghiền mịn (90%), 10% keo bời lời và tăm tre, mùi quế đậm. Bó 180 cây, khối lượng 250g, giá 67.000đ, thấp nhất trong ba loại."
      },
      {
        "type": "p",
        "text": "[Xem Nhang Vỏ & Lá Quế Dạng Bó](/san-pham/nhang-bo-que)"
      },
      {
        "type": "h2",
        "text": "3. Gia đình nên chọn loại nào?"
      },
      {
        "type": "li",
        "text": "Thích hương trầm dịu: nhang trầm hương."
      },
      {
        "type": "li",
        "text": "Thích mùi quế ấm, muốn có hộp cất gọn: nhang quế cây."
      },
      {
        "type": "li",
        "text": "Thắp nhiều, muốn tiết kiệm: nhang quế dạng bó."
      },
      {
        "type": "p",
        "text": "Chưa quyết được thì chọn mùi mà người trong nhà dễ chịu nhất. Nếu dùng lư thác khói, bạn cần nụ chứ không phải nhang cây: xem [nụ trầm hương](/san-pham/nu-tram-huong) và [nụ quế](/san-pham/nu-que)."
      },
      {
        "type": "h2",
        "text": "4. Bảo quản nhang cho khỏi ẩm, giữ mùi"
      },
      {
        "type": "li",
        "text": "Để nơi khô ráo, tránh gần nhà tắm, bồn rửa, chỗ có hơi nước."
      },
      {
        "type": "li",
        "text": "Lấy xong đóng kín hộp, túi."
      },
      {
        "type": "li",
        "text": "Tránh nắng gắt và nguồn nhiệt."
      },
      {
        "type": "li",
        "text": "Không để lẫn với đồ có mùi mạnh."
      },
      {
        "type": "h3",
        "text": "Vì sao màu nhang nhạt dần?"
      },
      {
        "type": "p",
        "text": "Nhang không dùng chất giữ màu nên màu có thể nhạt theo thời gian. Đừng chỉ nhìn màu: kiểm tra thêm xem nhang có ẩm mốc, mùi lạ, cong gãy hay khó cháy không."
      },
      {
        "type": "h2",
        "text": "5. Lưu ý khi thắp nhang trong nhà và chung cư"
      },
      {
        "type": "p",
        "text": "Ít khói không có nghĩa là không phát thải. Bất cứ thứ gì đang cháy đều sinh khói và hạt bụi mịn, nên không thắp nhang trong phòng đóng kín hay phòng máy lạnh không thông gió."
      },
      {
        "type": "li",
        "text": "Thắp vừa đủ, cắm chân nhang chắc để tàn không rơi vào đồ dễ cháy."
      },
      {
        "type": "li",
        "text": "Đặt bát hương vững, xa rèm, giấy, vải."
      },
      {
        "type": "li",
        "text": "Mở cửa cho thoáng khi đang thắp."
      },
      {
        "type": "li",
        "text": "Không để trẻ nhỏ, thú cưng lại gần; không để nhang cháy mà không có người trông."
      },
      {
        "type": "li",
        "text": "Nhà có trẻ nhỏ, người già hay người nhạy với khói nên thắp ít hơn."
      },
      {
        "type": "p",
        "text": "Tham khảo: [Cơ quan Bảo vệ Môi trường Hoa Kỳ về bụi mịn trong nhà](https://www.epa.gov/indoor-air-quality-iaq/sources-indoor-particulate-matter-pm) và [Bộ Y tế Canada về không khí trong nhà](https://www.canada.ca/en/health-canada/services/healthy-home/guide.html) (tiếng Anh)."
      }
    ],
    "notes": [
      "Người viết: Nguyễn Tuấn Kiệt, Ayoya Shop. Điện thoại/Zalo: 0933.458.485.",
      "Bài viết không thay thế tư vấn y tế chuyên môn."
    ]
  },
  {
    "slug": "dot-than-va-nu-tram-khong-bi-tat",
    "title": "Cách đốt than xông và nụ trầm không bị tắt giữa chừng",
    "seoTitle": "Cách đốt than xông và nụ trầm không bị tắt giữa chừng",
    "description": "Hướng dẫn mồi than xông, đốt nụ trầm thác khói không bị tắt, cách bảo quản chống ẩm và chính sách hỗ trợ đổi trả 7 ngày tại Ayoya Shop.",
    "published": "2026-11-28",
    "productIds": [
      "than-vien-xong-nha",
      "nu-tram-huong",
      "nu-que"
    ],
    "lead": "Than vừa châm đã tắt, nụ trầm cháy nửa chừng rồi ngừng khói: thường là do mồi chưa đủ lửa, lỗ thông khí của lư bị bít, hoặc than, nụ đã hút ẩm.",
    "hero": {
      "src": "/articles/dot-than-va-nu-tram-khong-bi-tat/than-vien-va-nu-tram-canh-lu-thac-khoi.webp",
      "alt": "Than viên xông nhà và nụ trầm hương đặt cạnh lư thác khói",
      "width": 1280,
      "height": 853
    },
    "blocks": [
      {
        "type": "p",
        "text": "Bài này hướng dẫn từng bước cách đốt than xông và nụ trầm, cách cất giữ, và cần làm gì nếu đã làm đúng mà vẫn không cháy."
      },
      {
        "type": "h2",
        "text": "1. Cách đốt than xông cho bén lửa đều"
      },
      {
        "type": "p",
        "text": "Viên than cần đủ nhiệt trước khi dùng. Chỉ nóng một góc thì than dễ tắt ngay khi đặt vào khay hoặc khi bỏ thảo dược lên."
      },
      {
        "type": "h3",
        "text": "Bước 1: Chuẩn bị"
      },
      {
        "type": "li",
        "text": "[Than viên tròn xông nhà](/san-pham/than-vien-xong-nha). Mỗi gói thảo dược xông nhà đã kèm sẵn 1 khay nhôm và 2 viên than."
      },
      {
        "type": "li",
        "text": "Kẹp gắp than, đồ khò."
      },
      {
        "type": "li",
        "text": "Khay chịu nhiệt đặt trên đế chắc chắn, xa rèm, giấy, vải và đồ gỗ."
      },
      {
        "type": "h3",
        "text": "Bước 2: Mồi than"
      },
      {
        "type": "img",
        "src": "/articles/dot-than-va-nu-tram-khong-bi-tat/moi-than-xong-do-hong.webp",
        "alt": "Viên than xông được giữ bằng kẹp và khò cho đỏ hồng",
        "width": 1280,
        "height": 853
      },
      {
        "type": "p",
        "text": "Kẹp viên than, khò đều toàn mặt khoảng 40 – 60 giây đến khi đỏ hồng. Thời gian tùy viên than khô hay ẩm, nên nhìn màu than là chính. Không dùng tay chạm vào than đang cháy hoặc còn nóng."
      },
      {
        "type": "h3",
        "text": "Bước 3: Đợi than cháy ổn định"
      },
      {
        "type": "p",
        "text": "Đặt than vào khay, đợi cháy đều rồi mới làm bước tiếp theo."
      },
      {
        "type": "h3",
        "text": "Bước 4: Bỏ thảo dược từng ít một"
      },
      {
        "type": "p",
        "text": "Rắc từng lượng nhỏ lên mặt than. Phủ kín một lúc làm than thiếu khí, nguội nhanh và tắt."
      },
      {
        "type": "h2",
        "text": "2. Cách đốt nụ trầm trên lư thác khói"
      },
      {
        "type": "p",
        "text": "[Nụ trầm hương cao cấp](/san-pham/nu-tram-huong) gồm 95% bột trầm hương và 5% vỏ cây bời lời để kết dính, không pha hóa chất. Vì vậy bước mồi lửa và luồng khí rất quan trọng. [Nụ quế](/san-pham/nu-que) đốt theo cách tương tự."
      },
      {
        "type": "h3",
        "text": "Bước 1: Xem nụ và lư"
      },
      {
        "type": "li",
        "text": "Nụ không bị mềm, ẩm, méo hay vỡ đầu."
      },
      {
        "type": "li",
        "text": "Lỗ thông khí dưới lư không bị tro cũ hoặc bụi bít."
      },
      {
        "type": "li",
        "text": "Lư đặt trên mặt phẳng vững."
      },
      {
        "type": "h3",
        "text": "Bước 2: Mồi ở đầu nụ"
      },
      {
        "type": "p",
        "text": "Dùng bật lửa đốt đầu nụ cho cháy đỏ hồng một đoạn không quá ngắn, đến khi có khói ngược phát ra. Đừng vội đặt lên lư khi mới châm."
      },
      {
        "type": "h3",
        "text": "Bước 3: Đặt nụ đúng chỗ"
      },
      {
        "type": "img",
        "src": "/articles/dot-than-va-nu-tram-khong-bi-tat/nu-tram-huong-tren-lu-thac-khoi.webp",
        "alt": "Nụ trầm hương đang cháy trên lư thác khói, khói chảy xuống",
        "width": 1280,
        "height": 720
      },
      {
        "type": "p",
        "text": "Đặt nụ vào đúng vị trí trên đỉnh lư thác khói. Khói đi qua lỗ trong nụ và lư rồi chảy xuống, nên cần loại lư dành cho nụ thác khói và các lỗ dẫn không bị tắc."
      },
      {
        "type": "h3",
        "text": "Bước 4: Giữ lỗ thông khí thoáng"
      },
      {
        "type": "p",
        "text": "Đợi lư nguội rồi dọn tro ở lỗ thông khí, đường dẫn khói và chỗ đặt nụ. Không cạy mạnh bằng vật nhọn để khỏi hỏng lư."
      },
      {
        "type": "h2",
        "text": "3. Vì sao than xông và nụ trầm bị tắt giữa chừng?"
      },
      {
        "type": "table",
        "rows": [
          [
            "Nguyên nhân",
            "Thường thấy",
            "Cách xử lý"
          ],
          [
            "Mồi chưa đủ",
            "Đỏ một chỗ rồi tắt",
            "Mồi lại cho đỏ đều"
          ],
          [
            "Bị ẩm",
            "Khó bén lửa, cháy yếu",
            "Kiểm tra chỗ cất, để khô"
          ],
          [
            "Phủ nhiều thảo dược",
            "Than nguội nhanh",
            "Bỏ từng ít một"
          ],
          [
            "Lỗ khí bị tắc",
            "Nụ tắt, khói không chảy xuống",
            "Dọn tro, thông lỗ"
          ],
          [
            "Lư không hợp",
            "Nụ cháy mà không thành thác",
            "Dùng lư cho nụ thác khói"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Không phải lần tắt nào cũng do người đốt. Đã kiểm tra đủ mà vẫn không cháy, bạn nhắn shop."
      },
      {
        "type": "h2",
        "text": "4. Bảo quản than và nụ trầm cho khỏi ẩm"
      },
      {
        "type": "img",
        "src": "/articles/dot-than-va-nu-tram-khong-bi-tat/bao-quan-than-va-nu-tram.webp",
        "alt": "Than xông và nụ trầm cất kín ở chỗ khô ráo",
        "width": 1280,
        "height": 720
      },
      {
        "type": "li",
        "text": "Lấy xong thì đóng kín: cho vào túi zip hoặc hộp kín."
      },
      {
        "type": "li",
        "text": "Để nơi khô, không đặt sát nền nhà, bồn rửa hay nhà tắm."
      },
      {
        "type": "li",
        "text": "Tránh nắng gắt và không để sát bếp."
      },
      {
        "type": "li",
        "text": "Cất riêng viên đã ẩm, đừng trộn với viên còn khô."
      },
      {
        "type": "li",
        "text": "Thấy ẩm, mốc, biến dạng hay mùi lạ thì không dùng."
      },
      {
        "type": "h2",
        "text": "5. An toàn khi đốt than và nụ trầm"
      },
      {
        "type": "h3",
        "text": "Với than xông"
      },
      {
        "type": "li",
        "text": "Than cháy sinh khí CO không màu, không mùi. Khi đốt phải mở hết cửa, không đốt trong phòng đóng kín, không đốt rồi đi ngủ."
      },
      {
        "type": "li",
        "text": "Ai thấy nhức đầu, chóng mặt, buồn nôn thì ra ngay chỗ thoáng; không đỡ thì đi khám."
      },
      {
        "type": "li",
        "text": "Ở căn hộ, chung cư, khói dễ làm hệ thống báo cháy kêu: thảo dược xông nhà nên chuyển sang cách đun nước."
      },
      {
        "type": "li",
        "text": "Dùng kẹp và khay chịu nhiệt, không để than cháy mà không có người trông; đợi nguội hẳn mới đổ."
      },
      {
        "type": "h3",
        "text": "Với nụ trầm"
      },
      {
        "type": "li",
        "text": "Đặt lư vững, xa rèm, giấy, vải; để xa trẻ em và thú cưng."
      },
      {
        "type": "li",
        "text": "Không rời mắt khi nụ đang cháy, không đốt khi đi ngủ hay sắp ra khỏi nhà."
      },
      {
        "type": "li",
        "text": "Giữ phòng thoáng; khó chịu với khói thì tắt và mở cửa."
      },
      {
        "type": "h2",
        "text": "6. Đốt đúng mà vẫn không cháy thì sao?"
      },
      {
        "type": "p",
        "text": "Than hoặc nụ không cháy dù đã đốt đúng hướng dẫn được hỗ trợ đổi trả trong 7 ngày kể từ ngày nhận hàng. Trường hợp này không cần còn nguyên như chưa dùng."
      },
      {
        "type": "li",
        "text": "Nhắn Zalo hoặc gọi 0933.458.485."
      },
      {
        "type": "li",
        "text": "Gửi video mở hộp quay rõ mã vận đơn, cùng ảnh hoặc video lúc nụ, than không cháy."
      },
      {
        "type": "li",
        "text": "Shop xác nhận rồi gửi hàng mới hoặc hoàn tiền."
      },
      {
        "type": "p",
        "text": "Điều kiện đầy đủ xem tại [chính sách đổi trả](/chinh-sach/chinh-sach-doi-tra)."
      },
      {
        "type": "h2",
        "text": "7. Sản phẩm trong bài"
      },
      {
        "type": "li",
        "text": "[Than Viên Tròn Xông Nhà](/san-pham/than-vien-xong-nha): 25.000đ gói 10 viên."
      },
      {
        "type": "li",
        "text": "[Nụ Trầm Hương Cao Cấp](/san-pham/nu-tram-huong): 159.000đ hộp 30 nụ."
      },
      {
        "type": "p",
        "text": "Cách xông nhà từng bước xem tại bài [Cách xông nhà cuối năm bằng thảo dược](/bai-viet/cach-xong-nha-cuoi-nam)."
      }
    ],
    "notes": [
      "Người viết: Nguyễn Tuấn Kiệt, Ayoya Shop. Điện thoại/Zalo: 0933.458.485.",
      "Bài viết hướng dẫn cách dùng và cất giữ sản phẩm, không thay thế tư vấn y tế hoặc hướng dẫn phòng cháy chữa cháy."
    ]
  },
  {
    "slug": "mot-goi-xong-nha-dung-may-lan",
    "title": "Một gói thảo dược xông nhà dùng được mấy lần?",
    "seoTitle": "Một gói thảo dược xông nhà dùng được mấy lần? Giải đáp",
    "description": "Một gói thảo dược xông nhà dùng được mấy lần? Xem cách dùng, bảo quản, giá gói lẻ và combo Như Ý – Cát Tường. Chọn đúng sản phẩm tại Ayoya Shop.",
    "published": "2026-11-28",
    "productIds": [
      "thao-moc-xong-nha"
    ],
    "lead": "Một gói Thảo Dược Xông Nhà Như Ý – Cát Tường dùng cho một lần xông. Bạn dùng trọn gói cho mỗi lần, không chia nhỏ, để đủ định lượng của sản phẩm.",
    "hero": {
      "src": "/articles/mot-goi-xong-nha-dung-may-lan/mot-goi-thao-duoc-xong-nha-250g.webp",
      "alt": "Một gói thảo dược xông nhà Như Ý – Cát Tường 250g",
      "width": 1280,
      "height": 853
    },
    "blocks": [
      {
        "type": "p",
        "text": "Vậy xông nhà mấy lần thì đủ? Nên mua gói lẻ hay combo? Mở túi rồi bảo quản thế nào? Bài này trả lời từng câu, và giúp bạn phân biệt gói xông nhà với gói xông tắm Mộc An để khỏi mua nhầm."
      },
      {
        "type": "h2",
        "text": "1. Một gói thảo dược xông nhà dùng được mấy lần?"
      },
      {
        "type": "p",
        "text": "Câu trả lời là một gói cho một lần xông. Mỗi gói 250g, phối từ 38 vị thảo mộc."
      },
      {
        "type": "li",
        "text": "Mỗi gói có sẵn 1 khay nhôm, 2 viên than, nụ trầm hương và 1 Phong Long Phù."
      },
      {
        "type": "li",
        "text": "Mỗi đơn tặng 1 thẻ rùa phong thủy, kèm 1 tờ hướng dẫn sử dụng và 1 menu, dù mua mấy gói."
      },
      {
        "type": "p",
        "text": "Một gói dùng một lần không có nghĩa là phải xông nhiều ngày liền. Xông bao nhiêu lần là tùy nhu cầu, nếp nhà và sinh hoạt của mỗi gia đình."
      },
      {
        "type": "h2",
        "text": "2. Xông nhà mấy lần thì đủ?"
      },
      {
        "type": "p",
        "text": "Không có số lần bắt buộc cho mọi nhà. Bạn chọn theo nhu cầu."
      },
      {
        "type": "h3",
        "text": "2.1. Xông theo liệu trình 4 gói"
      },
      {
        "type": "p",
        "text": "Shop khuyên dùng đủ liệu trình 4 gói, mỗi lần cách nhau 3 – 4 ngày: tổng cộng 4 gói cho 4 lần xông. Nếu không có nhu cầu xông nhiều lần, bạn không nhất thiết mua đủ 4 gói."
      },
      {
        "type": "h3",
        "text": "2.2. Xông theo dịp"
      },
      {
        "type": "li",
        "text": "Trước Tết: xông sau khi đã dọn dẹp xong."
      },
      {
        "type": "li",
        "text": "Khi về nhà mới: làm theo nếp của gia đình."
      },
      {
        "type": "li",
        "text": "Trước ngày khai trương: dọn sạch và để mặt bằng thơm mùi thảo mộc trước khi đón khách."
      },
      {
        "type": "p",
        "text": "Nếu chỉ làm một lần cho một dịp, một gói là đủ."
      },
      {
        "type": "h2",
        "text": "3. Bảo quản thảo dược xông nhà"
      },
      {
        "type": "h3",
        "text": "3.1. Khi chưa mở túi"
      },
      {
        "type": "li",
        "text": "Để nơi khô ráo, thoáng mát, tránh nắng chiếu trực tiếp."
      },
      {
        "type": "li",
        "text": "Không để gần bếp, nhà tắm hay chỗ ẩm."
      },
      {
        "type": "li",
        "text": "Không để cạnh đồ có mùi mạnh làm lẫn hương."
      },
      {
        "type": "h3",
        "text": "3.2. Khi đã mở túi"
      },
      {
        "type": "li",
        "text": "Gói kín miệng túi, hoặc cho vào túi zip, hộp kín."
      },
      {
        "type": "li",
        "text": "Đặt lại chỗ khô ráo, thoáng mát."
      },
      {
        "type": "li",
        "text": "Không dùng nếu thảo dược ẩm mốc, đổi khác hoặc có mùi lạ."
      },
      {
        "type": "p",
        "text": "Tốt nhất là dùng hết gói ngay khi mở."
      },
      {
        "type": "h3",
        "text": "3.3. Hạn sử dụng"
      },
      {
        "type": "p",
        "text": "Thảo Dược Xông Nhà Như Ý – Cát Tường có hạn sử dụng 12 tháng."
      },
      {
        "type": "h2",
        "text": "4. Nên mua gói lẻ hay combo?"
      },
      {
        "type": "p",
        "text": "Xông một lần thì gói lẻ là đủ. Nếu theo lịch 4 lần hoặc muốn để sẵn cho dịp khác, mua combo rẻ hơn."
      },
      {
        "type": "img",
        "src": "/articles/mot-goi-xong-nha-dung-may-lan/goi-le-va-combo-thao-duoc-xong-nha.webp",
        "alt": "Các lựa chọn gói lẻ và combo thảo dược xông nhà của Ayoya Shop",
        "width": 1280,
        "height": 720
      },
      {
        "type": "table",
        "rows": [
          [
            "Loại",
            "Giá bán",
            "Trung bình mỗi gói",
            "So với mua lẻ"
          ],
          [
            "1 gói dùng thử",
            "70.000đ",
            "70.000đ",
            "–"
          ],
          [
            "Combo 3 gói",
            "204.000đ",
            "68.000đ",
            "Tiết kiệm 6.000đ"
          ],
          [
            "5 gói",
            "325.000đ",
            "65.000đ",
            "Tiết kiệm 25.000đ"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Mỗi gói trong combo đều có đủ khay nhôm, 2 viên than, nụ trầm hương và Phong Long Phù. Thẻ rùa, tờ hướng dẫn và menu thì mỗi đơn một bản."
      },
      {
        "type": "h3",
        "text": "Nên chọn loại nào?"
      },
      {
        "type": "li",
        "text": "1 gói: dùng thử, hoặc chỉ xông một dịp."
      },
      {
        "type": "li",
        "text": "Combo 3 gói: nhà có nhu cầu xông hơn một lần."
      },
      {
        "type": "li",
        "text": "5 gói: đủ cho lịch 4 lần và còn một gói dự phòng."
      },
      {
        "type": "p",
        "text": "Chỉ nên mua số gói bạn dùng hết trong hạn sử dụng. Phí giao hàng tùy địa chỉ và khối lượng kiện, bạn xem tổng tiền ở bước đặt hàng."
      },
      {
        "type": "p",
        "text": "[Xem và đặt Thảo Dược Xông Nhà Như Ý – Cát Tường](/san-pham/thao-moc-xong-nha)"
      },
      {
        "type": "h2",
        "text": "5. Phân biệt gói xông nhà và gói xông tắm Mộc An"
      },
      {
        "type": "p",
        "text": "Các gói này đều là thảo mộc khô đóng túi nhưng dùng vào việc khác nhau, nên bạn đọc kỹ tên trước khi đặt."
      },
      {
        "type": "img",
        "src": "/articles/mot-goi-xong-nha-dung-may-lan/phan-biet-goi-xong-nha-va-xong-tam-moc-an.webp",
        "alt": "Gói thảo dược xông nhà Như Ý – Cát Tường và gói xông tắm cơ thể Mộc An",
        "width": 1280,
        "height": 720
      },
      {
        "type": "h3",
        "text": "5.1. Thảo Dược Xông Nhà Như Ý – Cát Tường"
      },
      {
        "type": "p",
        "text": "Dùng để xông không gian nhà cửa. 38 vị thảo mộc, 250g một gói, hạn sử dụng 12 tháng, giá gói lẻ 70.000đ."
      },
      {
        "type": "h3",
        "text": "5.2. Trầm Hương Xông Nhà Như Ý – Cát Tường"
      },
      {
        "type": "p",
        "text": "Cũng để xông nhà, lấy trầm hương làm chủ đạo. Trong gói có sẵn 1 Linh Phù, 1 rùa phong thủy, nụ trầm hương, 1 cây than (10 viên) và khay xông. Giá 125.000đ, hạn sử dụng 12 tháng."
      },
      {
        "type": "p",
        "text": "Gói này xông trên than. Mở hết cửa khi xông; than cháy sinh khí CO nên không đốt trong phòng đóng kín. Ở căn hộ, chung cư dễ làm hệ thống báo cháy kêu, bạn nên dùng gói thảo dược và xông bằng cách đun nước."
      },
      {
        "type": "p",
        "text": "[Xem Trầm Hương Xông Nhà Như Ý – Cát Tường](/san-pham/tram-huong-xong-nha)"
      },
      {
        "type": "h3",
        "text": "5.3. Thảo Dược Xông & Tắm Cơ Thể Mộc An"
      },
      {
        "type": "p",
        "text": "Dùng để xông và tắm cơ thể, không phải để xông nhà. 21 vị thảo mộc, nấu cùng 5 – 6 lít nước. Giá gói lẻ 43.000đ, combo 3 gói 125.000đ, 4 gói 160.000đ."
      },
      {
        "type": "li",
        "text": "Mỗi gói tặng kèm trà gừng. Mua từ 4 gói trở lên được tặng thêm 1 thẻ rùa phong thủy."
      },
      {
        "type": "li",
        "text": "Một gói cho một lần xông và tắm; muốn dùng nhẹ hơn có thể chia 2 – 3 lần."
      },
      {
        "type": "li",
        "text": "Không xông quá 3 lần mỗi tuần, không xông khi vừa ăn no, đang say hoặc sốt cao."
      },
      {
        "type": "li",
        "text": "Phụ nữ mang thai hoặc sau sinh, người có bệnh nền nên hỏi người có chuyên môn trước."
      },
      {
        "type": "li",
        "text": "Hạn sử dụng 18 tháng; mở túi rồi nên dùng trong 3 tháng."
      },
      {
        "type": "p",
        "text": "[Xem Thảo Dược Xông & Tắm Cơ Thể Mộc An](/san-pham/la-xong-moc-an)"
      },
      {
        "type": "h3",
        "text": "5.4. So sánh nhanh"
      },
      {
        "type": "table",
        "rows": [
          [
            "Tiêu chí",
            "Như Ý – Cát Tường",
            "Trầm Hương Như Ý",
            "Mộc An"
          ],
          [
            "Dùng để",
            "Xông nhà",
            "Xông nhà",
            "Xông và tắm"
          ],
          [
            "Cách dùng",
            "Trên than hoặc đun nước",
            "Trên than",
            "Nấu nước"
          ],
          [
            "Giá lẻ",
            "70.000đ",
            "125.000đ",
            "43.000đ"
          ],
          [
            "Hạn dùng",
            "12 tháng",
            "12 tháng",
            "18 tháng"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "6. Câu hỏi thường gặp"
      },
      {
        "type": "h3",
        "text": "Một gói xông nhà dùng được mấy lần?"
      },
      {
        "type": "p",
        "text": "Một gói cho một lần xông, dùng trọn gói."
      },
      {
        "type": "h3",
        "text": "Một liệu trình cần bao nhiêu gói?"
      },
      {
        "type": "p",
        "text": "4 gói, mỗi lần cách nhau 3 – 4 ngày. Đây là lịch shop khuyên dùng, không bắt buộc."
      },
      {
        "type": "h3",
        "text": "Mở túi rồi có để dành được không?"
      },
      {
        "type": "p",
        "text": "Được nếu gói kín và để nơi khô ráo, nhưng nên dùng sớm. Thảo dược ẩm mốc hay có mùi lạ thì bỏ."
      },
      {
        "type": "h3",
        "text": "Mua 5 gói có lợi không?"
      },
      {
        "type": "p",
        "text": "Trung bình còn 65.000đ một gói, rẻ hơn mua lẻ 70.000đ. Chỉ cần một lần thì mua gói lẻ."
      },
      {
        "type": "h3",
        "text": "Gói xông nhà dùng để xông tắm được không?"
      },
      {
        "type": "p",
        "text": "Không. Muốn xông và tắm cơ thể, bạn chọn gói Mộc An."
      },
      {
        "type": "h2",
        "text": "7. Kết luận"
      },
      {
        "type": "p",
        "text": "Một gói thảo dược xông nhà dùng cho một lần xông. Cần một dịp thì mua gói lẻ; theo lịch nhiều lần thì combo 3 gói hoặc 5 gói tiết kiệm hơn. Nhớ chọn đúng gói: xông nhà và xông tắm là hai sản phẩm khác nhau."
      },
      {
        "type": "p",
        "text": "Cách xông từng bước, giờ nên xông và bài khấn xem tại bài [Cách xông nhà cuối năm bằng thảo dược](/bai-viet/cach-xong-nha-cuoi-nam)."
      }
    ],
    "notes": [
      "Người viết: Nguyễn Tuấn Kiệt, Ayoya Shop. Điện thoại/Zalo: 0933.458.485. Địa chỉ: 6A/3 Nguyễn Du, Phường Bình Hòa, TP.HCM. Email: ayoyashop@gmail.com.",
      "Bài viết không thay thế tư vấn y tế chuyên môn."
    ]
  },
  {
    "slug": "cach-xong-nha-cuoi-nam",
    "title": "Cách xông nhà cuối năm bằng thảo dược: hướng dẫn từng bước đón Tết",
    "seoTitle": "Cách xông nhà cuối năm bằng thảo dược, làm từng bước",
    "description": "Cách xông nhà cuối năm bằng thảo dược: chuẩn bị, xông trên than hoặc đun nước, giờ nên xông, bài khấn và lưu ý an toàn. Xem hướng dẫn tại Ayoya Shop.",
    "published": "2026-11-28",
    "productIds": [
      "thao-moc-xong-nha"
    ],
    "hero": {
      "src": "/articles/cach-xong-nha-cuoi-nam/goi-thao-duoc-xong-nha-nhu-y-cat-tuong.webp",
      "alt": "Gói thảo dược xông nhà Như Ý – Cát Tường của Ayoya Shop",
      "width": 1280,
      "height": 720
    },
    "blocks": [
      {
        "type": "p",
        "text": "Xông nhà là phong tục lâu đời của người Việt. Cuối năm, sau khi dọn dẹp, nhiều gia đình xông nhà bằng thảo dược để đón Tết. Theo quan niệm phong thủy dân gian, đây là cách thanh tẩy uế khí, xua điều không may và cầu một năm mới bình an, hanh thông."
      },
      {
        "type": "p",
        "text": "Vậy cách xông nhà cuối năm thế nào cho đúng? Cần chuẩn bị gì, nên xông lúc nào, khấn ra sao và phải cẩn thận điều gì? Ayoya Shop hướng dẫn bạn từng bước dưới đây."
      },
      {
        "type": "h2",
        "text": "1. Xông nhà cuối năm có ý nghĩa gì?"
      },
      {
        "type": "p",
        "text": "Với nhiều gia đình, xông nhà là lúc gác lại chuyện cũ và đón khởi đầu mới. Ngoài dịp cuối năm và Tết, người ta còn xông khi về nhà mới, khai trương văn phòng, cửa hàng, hoặc sau khi đi dự tang lễ về."
      },
      {
        "type": "p",
        "text": "Về sinh hoạt, đây cũng là dịp cả nhà dọn dẹp, mở cửa cho thoáng và để hương thảo mộc lan trong từng phòng."
      },
      {
        "type": "h2",
        "text": "2. Xông nhà cuối năm cần chuẩn bị những gì?"
      },
      {
        "type": "h3",
        "text": "2.1. Thảo dược xông nhà"
      },
      {
        "type": "p",
        "text": "[Thảo Dược Xông Nhà Như Ý – Cát Tường](/san-pham/thao-moc-xong-nha) gồm 38 vị thuốc nam và thuốc bắc, khối lượng 250g một gói. Mỗi gói có sẵn 1 khay nhôm, 2 viên than, nụ trầm hương và 1 Phong Long Phù. Mỗi đơn tặng 1 thẻ rùa vàng phong thủy, kèm 1 tờ hướng dẫn sử dụng và 1 menu, dù mua mấy gói."
      },
      {
        "type": "img",
        "src": "/articles/cach-xong-nha-cuoi-nam/thao-duoc-xong-nha-tren-met-tre.webp",
        "alt": "Thảo dược xông nhà trải trên mẹt tre",
        "width": 1280,
        "height": 853
      },
      {
        "type": "li",
        "text": "Thành phần tiêu biểu: bột trầm hương, bách xanh, sả, vỏ bưởi, quế, đại hồi, thảo quả, kim ngân, bạch chỉ, hương nhu, ngải cứu, kinh giới, quế chi, cùng nhóm thảo mộc có gai theo phong thủy dân gian và các loại gỗ, lá thơm khác."
      },
      {
        "type": "li",
        "text": "Nguồn gốc: trầm hương thu hái tại Tiên Phước, Quảng Nam."
      },
      {
        "type": "li",
        "text": "Liều lượng: một gói cho một lần xông."
      },
      {
        "type": "li",
        "text": "Hạn sử dụng 12 tháng; bảo quản nơi khô ráo, thoáng mát."
      },
      {
        "type": "h3",
        "text": "2.2. Dụng cụ"
      },
      {
        "type": "li",
        "text": "Xông trên than: mỗi gói đã có 1 khay nhôm và 2 viên than; chuẩn bị thêm đế lót chịu nhiệt, kẹp gắp than và quạt tay."
      },
      {
        "type": "li",
        "text": "Xông bằng nước: một nồi có nắp, 2 – 3 lít nước sạch, bếp đun, lót tay cách nhiệt."
      },
      {
        "type": "h3",
        "text": "2.3. Dọn nhà trước khi xông"
      },
      {
        "type": "li",
        "text": "Quét dọn, lau các bề mặt, gom rác."
      },
      {
        "type": "li",
        "text": "Mở tất cả cửa chính và cửa sổ. Theo quan niệm dân gian, mở cửa để đón vượng khí; về an toàn, mở cửa để thoáng và tránh ngạt khói."
      },
      {
        "type": "li",
        "text": "Bật hết đèn trong nhà để tăng dương khí, theo lệ xông nhà."
      },
      {
        "type": "li",
        "text": "Cất rèm, giấy và đồ dễ cháy ra xa chỗ đặt lò; đưa trẻ nhỏ, vật nuôi sang chỗ khác."
      },
      {
        "type": "h2",
        "text": "3. Hướng dẫn cách xông nhà cuối năm bằng thảo dược"
      },
      {
        "type": "p",
        "text": "Xông trên than là cách chính. Cách đun nước thường dùng cho căn hộ, chung cư, để khói không làm hệ thống báo cháy kêu."
      },
      {
        "type": "h3",
        "text": "Cách 1 (ưu tiên): xông thảo dược trên than hồng"
      },
      {
        "type": "li",
        "text": "Đốt than cho đỏ hồng đều. Với than viên, khò đều mặt than khoảng 40 – 60 giây."
      },
      {
        "type": "li",
        "text": "Đặt than vào lò, rồi đặt thảo dược lên trên cho cháy tự nhiên. Bỏ từng ít một để than không tắt."
      },
      {
        "type": "li",
        "text": "Cho Phong Long Phù kèm trong gói vào đốt cùng thuốc xông."
      },
      {
        "type": "li",
        "text": "Mang khay than đi khắp nhà theo thứ tự từ trong ra ngoài."
      },
      {
        "type": "li",
        "text": "Có thể dùng quạt tay hoặc quạt gió đẩy khói đến góc khuất, chỗ ẩm thấp. Quạt nhẹ để tàn than không bay."
      },
      {
        "type": "h3",
        "text": "Cách 2: đun nước thảo dược, dành cho căn hộ, chung cư"
      },
      {
        "type": "img",
        "src": "/articles/cach-xong-nha-cuoi-nam/xong-nha-bang-nuoc-thao-duoc.webp",
        "alt": "Nồi nước thảo dược đun để xông nhà",
        "width": 1280,
        "height": 720
      },
      {
        "type": "li",
        "text": "Lấy nụ trầm hương (đã để sẵn trong gói xông) và Phong Long Phù ra đốt riêng, không cho vào nồi."
      },
      {
        "type": "li",
        "text": "Cho một gói thảo dược vào nồi, đổ 2 – 3 lít nước, đậy nắp và đun sôi."
      },
      {
        "type": "li",
        "text": "Sau khi nước sôi 5 – 7 phút, mang nồi đi quanh nhà, xông từ trong ra ngoài, từ trên xuống dưới."
      },
      {
        "type": "li",
        "text": "Nồi rất nóng: dùng lót tay dày, đi chậm, dọn lối đi trước và không để trẻ nhỏ đứng gần."
      },
      {
        "type": "h3",
        "text": "Xông xong làm gì"
      },
      {
        "type": "li",
        "text": "Theo lệ, lấy muối ném mạnh trước nhà, cửa hàng hoặc văn phòng."
      },
      {
        "type": "li",
        "text": "Đợi than và tro nguội hẳn, rồi bỏ tro thuốc xông ra bên ngoài nhà."
      },
      {
        "type": "h2",
        "text": "4. Xông nhà cuối năm vào ngày nào, giờ nào?"
      },
      {
        "type": "p",
        "text": "Nhiều gia đình xông sau khi đã dọn dẹp, trong những ngày cuối tháng Chạp, thường từ sau ngày 23 đến trước giao thừa."
      },
      {
        "type": "p",
        "text": "Giờ nên xông là sáng sớm hoặc chiều tối. Theo lệ xưa, nên chọn giờ hoàng đạo của ngày xông."
      },
      {
        "type": "h3",
        "text": "Bài khấn khi xông nhà"
      },
      {
        "type": "p",
        "text": "Cho Phong Long Phù vào lò than đốt cùng thuốc xông, di chuyển khắp nhà rồi khấn:"
      },
      {
        "type": "quote",
        "text": "“Ba hồn bảy vía, ba hồn chín vía quanh đây, vía lành thì giữ, vía dữ mời đi. Tống khứ hung khí, uế khí, yêu khí, tà khí, cởi dị phong long, tiêu sản, ma cũ, ma mới, người quá khứ, khô cốt cấp cấp tẩu tán…”"
      },
      {
        "type": "h2",
        "text": "5. Xông nhà ở chung cư cần lưu ý gì?"
      },
      {
        "type": "img",
        "src": "/articles/cach-xong-nha-cuoi-nam/xong-nha-chung-cu.webp",
        "alt": "Phòng khách căn hộ mở cửa thông thoáng trước khi xông nhà",
        "width": 1280,
        "height": 720
      },
      {
        "type": "li",
        "text": "Dùng cách đun nước, để khói không làm hệ thống báo cháy kêu."
      },
      {
        "type": "li",
        "text": "Xem quy định phòng cháy của ban quản lý trước khi làm."
      },
      {
        "type": "li",
        "text": "Không che đầu báo khói, không tắt thiết bị báo cháy."
      },
      {
        "type": "li",
        "text": "Mở cửa ban công và cửa sổ trong lúc xông và một lúc sau đó."
      },
      {
        "type": "h2",
        "text": "6. Lưu ý an toàn khi xông nhà bằng thảo dược"
      },
      {
        "type": "h3",
        "text": "6.1. Khi đốt than"
      },
      {
        "type": "li",
        "text": "Than cháy sinh khí CO không màu, không mùi, có thể gây ngộ độc. Không đốt than trong phòng đóng kín."
      },
      {
        "type": "li",
        "text": "Không để lò than cháy khi không có người trông, không đốt rồi đi ngủ."
      },
      {
        "type": "li",
        "text": "Ai thấy nhức đầu, chóng mặt, buồn nôn thì ra ngay chỗ thoáng; không đỡ thì đi khám."
      },
      {
        "type": "li",
        "text": "Không dùng tay trần chạm vào than đang cháy hoặc vừa tắt."
      },
      {
        "type": "h3",
        "text": "6.2. Ai nên tránh khói và hơi thảo dược"
      },
      {
        "type": "li",
        "text": "Người bị hen suyễn hoặc bệnh hô hấp."
      },
      {
        "type": "li",
        "text": "Người dị ứng, nhạy với mùi hương ([khuyến cáo của Hội Phổi Hoa Kỳ về hương liệu](https://www.lung.org/clean-air/indoor-air/indoor-air-pollutants/fragrances), tiếng Anh)."
      },
      {
        "type": "li",
        "text": "Phụ nữ mang thai, trẻ nhỏ và người cao tuổi."
      },
      {
        "type": "h3",
        "text": "6.3. Dùng đúng cách"
      },
      {
        "type": "li",
        "text": "Chỉ dùng để xông không gian; không uống, ngâm hay đắp lên da."
      },
      {
        "type": "li",
        "text": "Không hít trực tiếp khói hoặc hơi đậm đặc."
      },
      {
        "type": "li",
        "text": "Chỉ dùng một gói cho mỗi lần xông."
      },
      {
        "type": "h2",
        "text": "7. Chọn gói thảo dược xông nhà nào để đón Tết?"
      },
      {
        "type": "h3",
        "text": "7.1. Gói Thảo Dược Xông Nhà Như Ý – Cát Tường"
      },
      {
        "type": "p",
        "text": "Giá 70.000đ một gói, 204.000đ combo 3 gói, 325.000đ 5 gói. Mỗi gói 250g, có sẵn 1 khay nhôm, 2 viên than, nụ trầm hương và 1 Phong Long Phù. Mỗi đơn tặng thêm 1 thẻ rùa phong thủy."
      },
      {
        "type": "p",
        "text": "[Xem gói thảo dược xông nhà Như Ý – Cát Tường](/san-pham/thao-moc-xong-nha)"
      },
      {
        "type": "h3",
        "text": "7.2. Trọn bộ Xông Nhà Đón Tết"
      },
      {
        "type": "img",
        "src": "/articles/cach-xong-nha-cuoi-nam/tron-bo-xong-nha-don-tet.webp",
        "alt": "Trọn bộ Xông Nhà Đón Tết của Ayoya Shop",
        "width": 1280,
        "height": 853
      },
      {
        "type": "p",
        "text": "Bộ giá 182.000đ, gồm 1 gói thảo dược xông nhà, 10 viên than và 1 chai nước lau bàn thờ."
      },
      {
        "type": "p",
        "text": "[Xem trọn bộ Xông Nhà Đón Tết](/bo-qua-tet)"
      },
      {
        "type": "p",
        "text": "Khi nhận hàng, bạn nên đồng kiểm tình trạng và số lượng cùng nhân viên giao hàng trước khi trả tiền. Điều kiện đổi trả trong 7 ngày xem tại [chính sách đổi trả](/chinh-sach/chinh-sach-doi-tra)."
      },
      {
        "type": "h2",
        "text": "8. Câu hỏi thường gặp về cách xông nhà cuối năm"
      },
      {
        "type": "h3",
        "text": "Xông nhà cuối năm có nhất thiết phải dùng than không?"
      },
      {
        "type": "p",
        "text": "Xông trên than là cách chính. Nếu ở căn hộ, chung cư, bạn đun thảo dược với nước theo cách 2."
      },
      {
        "type": "h3",
        "text": "Một gói đun với bao nhiêu nước?"
      },
      {
        "type": "p",
        "text": "Một gói đun với 2 – 3 lít nước. Sau khi sôi 5 – 7 phút thì bắt đầu mang nồi đi xông."
      },
      {
        "type": "h3",
        "text": "Một lần xông dùng mấy gói?"
      },
      {
        "type": "p",
        "text": "Một gói cho một lần xông."
      },
      {
        "type": "h3",
        "text": "Có nên xông nhà vào ngày 30 Tết không?"
      },
      {
        "type": "p",
        "text": "Được, nếu hợp với nếp nhà và lịch sinh hoạt. Không bắt buộc phải đúng ngày này."
      },
      {
        "type": "h3",
        "text": "Người bị hen suyễn có nên ở trong phòng khi xông nhà không?"
      },
      {
        "type": "p",
        "text": "Không nên, kể cả khi xông bằng cách đun nước."
      },
      {
        "type": "h2",
        "text": "9. Kết luận"
      },
      {
        "type": "p",
        "text": "Xông nhà cuối năm không cần cầu kỳ: dọn nhà sạch, mở cửa, chọn cách phù hợp và giữ an toàn. Theo cách nghĩ của người xưa, xông nhà chỉ là điều kiện “cần”, góp phần làm nhẹ những điều không may; điều kiện “đủ” nằm ở cách mình sống và tạo phước, không phải cứ xông là gặp ngay điều lành."
      },
      {
        "type": "p",
        "text": "Nếu đang chuẩn bị đón Tết, bạn có thể xem các [sản phẩm thảo mộc của Ayoya Shop](/thao-moc). Chúc gia đình bạn đón năm mới sạch sẽ, ấm áp và an yên."
      }
    ],
    "notes": [
      "Người viết: Nguyễn Tuấn Kiệt, Ayoya Shop. Điện thoại/Zalo: 0933.458.485. Địa chỉ: 6A/3 Nguyễn Du, Phường Bình Hòa, TP.HCM. Email: ayoyashop@gmail.com.",
      "Bài viết không thay thế tư vấn y tế hoặc hướng dẫn phòng cháy chữa cháy."
    ]
  }
];
