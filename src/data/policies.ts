export interface PolicySection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Policy {
  slug: string;
  title: string;
  seoDescription: string;
  intro: string;
  sections: PolicySection[];
  closing?: string;
}

export const POLICIES: Policy[] = [
  {
    slug: 'chinh-sach-bao-mat',
    title: 'Chính sách bảo mật',
    seoDescription: 'Chính sách bảo mật thông tin khách hàng của AYOYA Shop — mục đích thu thập, phạm vi, cam kết lưu trữ và quyền lợi của khách hàng.',
    intro:
      'Tại AYOYA Shop, chúng tôi hiểu rằng thông tin cá nhân của Quý khách là tài sản quý giá nhất. Chúng tôi cam kết bảo vệ quyền riêng tư này bằng sự tử tế và các tiêu chuẩn bảo mật cao nhất, đúng với tinh thần "Trọng chữ Tín" của người làm nghề y thuật và võ đạo.',
    sections: [
      {
        heading: '1. Mục đích thu thập thông tin cá nhân',
        paragraphs: ['Việc thu thập dữ liệu trên website hoặc các kênh thương mại điện tử của AYOYA Shop giúp chúng tôi:'],
        bullets: [
          'Hỗ trợ vận chuyển: giao các sản phẩm thảo mộc, dầu xoa bóp đến đúng địa chỉ Quý khách yêu cầu.',
          'Tư vấn chuyên sâu: lưu lại các trao đổi về tình trạng sức khỏe (đau mỏi vai gáy, mất ngủ...) hoặc nhu cầu phong thủy để tư vấn lộ trình sử dụng sản phẩm phù hợp nhất.',
          'Chăm sóc khách hàng: gửi thông báo về các chương trình ưu đãi, kiến thức dưỡng sinh dành riêng cho khách hàng AYOYA.',
          'Nâng cao trải nghiệm: cải thiện chất lượng dịch vụ dựa trên phản hồi và thói quen mua sắm của Quý khách.'
        ]
      },
      {
        heading: '2. Phạm vi thu thập thông tin',
        paragraphs: ['Các thông tin chúng tôi có thể yêu cầu Quý khách cung cấp bao gồm:'],
        bullets: [
          'Thông tin liên lạc: họ tên, số điện thoại, địa chỉ giao nhận hàng.',
          'Thông tin giao dịch: lịch sử mua hàng, giá trị đơn hàng, phương thức thanh toán.',
          'Thông tin tư vấn (tự nguyện): các ghi chú về tình trạng thể chất hoặc nhu cầu tâm linh để cá nhân hóa liệu trình thảo mộc.'
        ]
      },
      {
        heading: '3. Cam kết bảo mật và lưu trữ dữ liệu',
        bullets: [
          'Hệ thống bảo vệ: dữ liệu được truyền tải qua giao thức mã hóa SSL (Secure Sockets Layer) để đảm bảo thông tin không bị rò rỉ trên mạng.',
          'Thời gian lưu trữ: thông tin cá nhân được lưu trữ cho đến khi có yêu cầu hủy bỏ từ Quý khách hoặc khi không còn mục đích sử dụng phù hợp với chính sách này.',
          'Giới hạn truy cập: chỉ nhân sự phụ trách trực tiếp đơn hàng và tư vấn mới có quyền tiếp cận thông tin của Quý khách để thực hiện nhiệm vụ hỗ trợ.'
        ]
      },
      {
        heading: '4. Chia sẻ thông tin với bên thứ ba',
        paragraphs: ['AYOYA Shop cam kết KHÔNG bán, chia sẻ hay trao đổi thông tin cá nhân của khách hàng cho bất kỳ bên thứ ba nào vì mục đích thương mại. Chúng tôi chỉ cung cấp thông tin cho:'],
        bullets: [
          'Đối tác vận chuyển (SPX Express) để phục vụ việc giao hàng.',
          'Cổng thanh toán/ngân hàng để xác nhận và xử lý các giao dịch chuyển khoản.',
          'Cơ quan pháp luật khi có yêu cầu chính thức từ cơ quan chức năng theo quy định của pháp luật Việt Nam.'
        ]
      },
      {
        heading: '5. Quyền lợi của khách hàng',
        bullets: [
          'Quyền kiểm tra, cập nhật hoặc điều chỉnh thông tin cá nhân.',
          'Quyền yêu cầu AYOYA Shop ngưng gửi các thông báo, ưu đãi qua Zalo/điện thoại.',
          'Quyền yêu cầu xóa bỏ hoàn toàn thông tin cá nhân khỏi hệ thống lưu trữ của chúng tôi.'
        ]
      },
      {
        heading: '6. Cơ chế tiếp nhận và giải quyết khiếu nại',
        paragraphs: ['Nếu Quý khách phát hiện thông tin cá nhân bị sử dụng sai mục đích hoặc phạm vi đã thông báo, vui lòng liên hệ ngay với chúng tôi qua:'],
        bullets: ['Hotline: 0933.458.485', 'Email: ayoyashop@gmail.com', 'Địa chỉ: 6A/3 Nguyễn Du, Phường Bình Hòa, TP.HCM'],
      }
    ],
    closing: 'Sự tin tưởng của Quý khách là kim chỉ nam cho mọi hoạt động của chúng tôi. Chúng tôi bảo mật thông tin của bạn như cách chúng tôi gìn giữ những công thức thảo mộc bí truyền — bằng sự cẩn trọng và lòng chân thành.'
  },
  {
    slug: 'chinh-sach-van-chuyen',
    title: 'Chính sách vận chuyển',
    seoDescription: 'Chính sách vận chuyển AYOYA Shop — phạm vi giao hàng toàn quốc qua SPX Express, quy chuẩn đóng gói, thời gian giao hàng và chính sách đồng kiểm.',
    intro:
      'Tại AYOYA Shop, chúng tôi hiểu rằng mỗi sản phẩm thảo mộc, nụ trầm hay chai dầu xoa bóp đều mang theo tâm huyết của người làm nghề và sự kỳ vọng về sức khỏe của Quý khách. Vì vậy, chúng tôi thiết lập quy trình vận chuyển nghiêm ngặt để đảm bảo "tinh túy thảo mộc" được bảo toàn nguyên vẹn từ kho hàng đến tận tay Quý khách.',
    sections: [
      {
        heading: '1. Phạm vi giao hàng',
        paragraphs: [
          'AYOYA Shop thực hiện giao hàng trên toàn quốc (63 tỉnh thành) thông qua đối tác vận chuyển SPX Express, nhằm đảm bảo hàng hóa đến được cả những khu vực vùng sâu, vùng xa.'
        ]
      },
      {
        heading: '2. Quy chuẩn đóng gói đặc thù',
        paragraphs: ['Ý thức được tính chất đặc biệt của sản phẩm, AYOYA áp dụng tiêu chuẩn đóng gói riêng biệt:'],
        bullets: [
          'Đối với nụ trầm/nhang thảo mộc: đặt trong hộp cứng, lót màng xốp giảm chấn để tránh va đập gây gãy vỡ trong quá trình di chuyển.',
          'Đối với dầu xoa bóp (chất lỏng): miệng chai được niêm phong kỹ, bọc màng co và quấn nhiều lớp xốp nổ chống tràn, đặt trong hộp carton tiêu chuẩn.',
          'Đối với thảo mộc khô: đóng gói trong túi zip hoặc hũ kín để đảm bảo không bị ẩm mốc và giữ trọn mùi hương tự nhiên.'
        ]
      },
      {
        heading: '3. Thời gian giao hàng dự kiến',
        bullets: [
          'Khu vực TP.HCM / Bình Dương: 1 – 2 ngày làm việc.',
          'Tỉnh/thành khác ở Miền Nam: 2 – 4 ngày làm việc.',
          'Miền Trung / Tây Nguyên / Miền Bắc: 3 – 7 ngày làm việc.'
        ],
        paragraphs: ['(Thời gian giao hàng không tính Chủ nhật và các ngày Lễ, Tết theo quy định.)']
      },
      {
        heading: '4. Phí vận chuyển',
        paragraphs: [
          'Phí vận chuyển được tính theo khu vực và tổng khối lượng sản phẩm trong đơn hàng, hiển thị rõ ràng ngay khi Quý khách chọn khu vực giao hàng ở bước thanh toán — không thu phí ẩn.',
          'Do phí vận chuyển cập nhật theo thời gian thực từ hệ thống đối tác SPX, tổng giá trị thanh toán thực tế có thể dao động nhẹ (khoảng 1.000đ – 10.000đ) tùy chính sách phụ phí tại thời điểm bàn giao kiện hàng.'
        ]
      },
      {
        heading: '5. Theo dõi đơn hàng',
        paragraphs: [
          'Ngay sau khi đơn hàng được gửi đi, AYOYA Shop sẽ cung cấp mã vận đơn cho Quý khách qua Zalo. Quý khách có thể tự kiểm tra hành trình đơn hàng trên hệ thống SPX Express hoặc liên hệ hotline của Shop để được hỗ trợ tra cứu.'
        ]
      },
      {
        heading: '6. Trách nhiệm khi nhận hàng (Chính sách đồng kiểm)',
        paragraphs: ['Để đảm bảo quyền lợi tuyệt đối, AYOYA Shop khuyến khích Quý khách thực hiện đồng kiểm cùng nhân viên giao hàng:'],
        bullets: [
          'Kiểm tra tình trạng bao bì và số lượng sản phẩm.',
          'Nếu phát hiện sản phẩm bị vỡ, rò rỉ hoặc không đúng mẫu mã đã đặt, Quý khách có quyền từ chối nhận hàng và liên hệ ngay với AYOYA để được hỗ trợ.',
          'Quý khách nên quay video quá trình mở hộp hàng (unboxing) để làm cơ sở giải quyết nhanh nhất các khiếu nại về sau.'
        ]
      },
      {
        heading: '7. Các trường hợp bất khả kháng',
        paragraphs: [
          'Trong các trường hợp thiên tai, dịch bệnh hoặc sự cố vận tải ngoài tầm kiểm soát, AYOYA Shop sẽ chủ động thông báo cho Quý khách về việc chậm trễ và phối hợp với đơn vị vận chuyển để giao hàng sớm nhất có thể.'
        ]
      }
    ],
    closing: 'Chúng tôi không chỉ giao sản phẩm, chúng tôi giao sự an tâm và sức khỏe. Mỗi kiện hàng được gửi đi đều mang theo sự cẩn trọng cao nhất để xứng đáng với sự tin tưởng của Quý khách.'
  },
  {
    slug: 'chinh-sach-doi-tra',
    title: 'Chính sách đổi trả',
    seoDescription: 'Chính sách đổi trả AYOYA Shop — điều kiện, quy trình 4 bước và chi phí đổi trả trong vòng 7 ngày kể từ khi nhận hàng.',
    intro:
      'Tại AYOYA Shop, sự hài lòng của Quý khách về sức khỏe và trải nghiệm tinh thần là ưu tiên hàng đầu. Chúng tôi cam kết thực hiện chính sách đổi trả minh bạch, tận tâm, dựa trên tinh thần thượng võ và sự trung thực trong kinh doanh.',
    sections: [
      {
        heading: '1. Điều kiện áp dụng đổi trả',
        paragraphs: ['Quý khách sẽ được hỗ trợ đổi trả sản phẩm trong các trường hợp sau:'],
        bullets: [
          'Sản phẩm lỗi do nhà sản xuất: thảo mộc bị ẩm mốc, dầu xoa bóp có mùi lạ, nụ trầm không cháy hoặc mất mùi dù chưa sử dụng.',
          'Sự cố do vận chuyển: sản phẩm bị vỡ, rò rỉ, hộp hàng bị móp méo nghiêm trọng ảnh hưởng đến chất lượng bên trong.',
          'Giao sai đơn hàng: sản phẩm không đúng mẫu mã, chủng loại hoặc số lượng như Quý khách đã đặt.',
          'Thời hạn: trong vòng 07 ngày kể từ ngày nhận hàng thành công.'
        ]
      },
      {
        heading: '2. Yêu cầu đối với sản phẩm đổi trả',
        bullets: [
          'Sản phẩm còn nguyên tem mác, bao bì và chưa qua sử dụng (đặc biệt đối với dầu xoa bóp và các loại thảo mộc dùng để uống/tắm).',
          'Có video clip mở hộp hàng (unboxing) quay rõ mã vận đơn và tình trạng lỗi của sản phẩm — đây là căn cứ quan trọng nhất để AYOYA làm việc với đơn vị vận chuyển và bảo vệ quyền lợi cho Quý khách.'
        ]
      },
      {
        heading: '3. Các trường hợp không áp dụng đổi trả',
        bullets: [
          'Sản phẩm đã quá hạn 07 ngày kể từ khi nhận hàng.',
          'Sản phẩm đã bị mở niêm phong, đã qua sử dụng hoặc bảo quản sai cách (để nơi ẩm ướt làm hỏng thảo mộc/trầm).',
          'Khách hàng thay đổi ý định mua hàng vì lý do chủ quan (không thích mùi hương, không muốn mua nữa...) mà không phải do lỗi của Shop.'
        ]
      },
      {
        heading: '4. Quy trình đổi trả',
        bullets: [
          'Bước 1: Liên hệ Hotline 0933.458.485 hoặc nhắn Zalo cho AYOYA.',
          'Bước 2: Cung cấp video mở hàng và hình ảnh sản phẩm lỗi.',
          'Bước 3: AYOYA xác nhận và hướng dẫn Quý khách gửi trả hàng (nếu cần).',
          'Bước 4: Shop gửi sản phẩm mới hoặc hoàn tiền cho Quý khách trong vòng 3-5 ngày làm việc.'
        ]
      },
      {
        heading: '5. Chi phí đổi trả',
        bullets: [
          'Lỗi từ AYOYA hoặc vận chuyển: Shop chịu 100% phí ship hai chiều và chi phí phát sinh.',
          'Lỗi từ phía khách hàng (nếu Shop chấp nhận hỗ trợ đổi): Quý khách vui lòng thanh toán phí ship theo quy định của đơn vị vận chuyển.'
        ]
      }
    ],
    closing: 'Chúng tôi coi trọng niềm tin của Quý khách hơn một đơn hàng. Nếu có bất kỳ sơ sót nào, hãy cho AYOYA cơ hội được khắc phục bằng sự chân thành nhất.'
  },
  {
    slug: 'huong-dan-thanh-toan',
    title: 'Hướng dẫn thanh toán',
    seoDescription: 'Hướng dẫn thanh toán AYOYA Shop — thanh toán khi nhận hàng (COD) hoặc chuyển khoản ngân hàng qua mã QR VietQR.',
    intro: 'AYOYA Shop hỗ trợ hai phương thức thanh toán khi bạn đặt hàng trực tiếp trên website:',
    sections: [
      {
        heading: '1. Thanh toán khi nhận hàng (COD)',
        paragraphs: [
          'Quý khách thanh toán trực tiếp bằng tiền mặt cho nhân viên giao hàng ngay khi nhận. Quý khách nên kiểm tra tình trạng và số lượng sản phẩm (đồng kiểm) trước khi thanh toán.'
        ]
      },
      {
        heading: '2. Chuyển khoản ngân hàng qua VietQR',
        paragraphs: [
          'Khi chọn phương thức "Chuyển khoản" ở bước thanh toán, hệ thống sẽ tự tạo mã QR VietQR với đúng số tiền cần thanh toán để Quý khách quét bằng ứng dụng ngân hàng bất kỳ.',
          'Thông tin tài khoản: Ngân hàng ACB, chủ tài khoản NGUYEN TUAN KIET, số tài khoản 191800499.',
          'Sau khi chuyển khoản, AYOYA sẽ xác nhận đơn hàng và liên hệ với Quý khách trong thời gian sớm nhất.'
        ]
      },
      {
        heading: '3. Cam kết minh bạch',
        paragraphs: [
          'Giá thanh toán cuối cùng luôn bao gồm giá sản phẩm và phí vận chuyển, được hiển thị rõ ràng trước khi Quý khách xác nhận đặt hàng — không phát sinh chi phí ẩn.'
        ]
      },
      {
        heading: '4. Hỗ trợ giải đáp',
        paragraphs: ['Mọi thắc mắc về thanh toán, vui lòng liên hệ:'],
        bullets: ['Hotline: 0933.458.485', 'Zalo: zalo.me/0933458485']
      }
    ]
  }
];

export function getPolicyBySlug(slug: string): Policy | undefined {
  return POLICIES.find(p => p.slug === slug);
}
