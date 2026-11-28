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
