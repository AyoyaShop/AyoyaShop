export const SHOPEE_LINK = 'https://vn.shp.ee/dKiXxDRN';
export const TIKTOK_LINK = 'https://vt.tiktok.com/ZS4qEo8dm/?page=TikTokShop';

export const CONTACT_INFO = {
  address: '6A/3 Nguyễn Du, Phường Bình Hòa, TP.HCM',
  phone: '0933.458.485',
  phoneHref: 'tel:0933458485',
  zaloHref: 'https://zalo.me/0933458485',
  email: 'ayoyashop@gmail.com',
  facebook: 'https://www.facebook.com/ayoyashop',
  instagram: 'https://www.instagram.com/kiandli777'
};

export const BANK_INFO = {
  bankName: 'ACB',
  bankBin: '970416',
  accountNumber: '191800499',
  accountHolder: 'NGUYEN TUAN KIET'
};

// Google Apps Script Web App URL that receives order submissions and appends them to a Google Sheet.
export const ORDER_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwaKRNtKadrzXDslUNUI9mkBzSAs7GCu5Ue8hGlIuUAbrvlsLT2TcPASyKrSn5ZEZLi/exec';

// Google Apps Script Web App URL that receives promo-newsletter opt-ins and appends them to a Google Sheet.
export const SUBSCRIBE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzodaVNZ9InPxwMtYEWuZctet-R7-sIc3WCkn9vawibGrrKeIgRUHg3-KNp0ZmX3l8/exec';

// Shipping fee zones based on SPX Express's published rate card (effective 01/02/2024).
// Nội thành/Ngoại thành share one tier, Nội tỉnh/Nội miền share another, Đặc biệt/Liên miền share the third.
export const SHIPPING_ZONES = [
  {
    id: 'noi-tinh',
    label: 'TP.HCM / Bình Dương',
    tier1: 18000, // 0-1kg
    tier2: 20000, // 1-1.5kg
    tier3: 23000, // 1.5-2kg
    extraPer500g: 2000
  },
  {
    id: 'mien-nam',
    label: 'Tỉnh/thành khác ở Miền Nam',
    tier1: 22000,
    tier2: 24000,
    tier3: 27000,
    extraPer500g: 2000
  },
  {
    id: 'lien-mien',
    label: 'Miền Trung / Tây Nguyên / Miền Bắc',
    tier1: 22000,
    tier2: 27000,
    tier3: 30000,
    extraPer500g: 5000
  }
];

export const CATEGORIES = [
  { id: 'cham-soc-co-the', label: 'Chăm sóc cơ thể' },
  { id: 'xong-nha-phong-thuy', label: 'Xông nhà & Phong thủy' },
  { id: 'tho-cung', label: 'Thờ cúng' },
  { id: 'suc-khoe', label: 'Sức khỏe' }
];

export function calcShippingFee(weightGrams: number, zoneId: string): number {
  const zone = SHIPPING_ZONES.find(z => z.id === zoneId) ?? SHIPPING_ZONES[0];
  const kg = weightGrams / 1000;
  if (kg <= 1) return zone.tier1;
  if (kg <= 1.5) return zone.tier2;
  if (kg <= 2) return zone.tier3;
  const extraSteps = Math.ceil((kg - 2) / 0.5);
  return zone.tier3 + extraSteps * zone.extraPer500g;
}

export const PRODUCTS = [
  {
    id: 'dau-vo',
    category: 'cham-soc-co-the',
    title: 'Dầu Xoa Bóp Võ Thuật Cổ Truyền Bình Định',
    subtitle: 'Tinh hoa miền đất Võ - Thông kinh lạc, nhẹ thân tâm',
    description: 'Sản phẩm mang tính di sản, kế thừa tinh hoa võ học Bình Định. Kết hợp công thức bí truyền và cốt rượu lâu năm.',
    benefits: 'Hỗ trợ giảm cảm giác đau nhức, cảm giác ấm nồng lan tỏa giúp thư giãn cơ xương khớp.',
    ingredients:
      'Lưu hội (Lô hội), Đại hoàng, Bạch chỉ, Nhị trà, Huyết kiệt, Hồng hoa, Tam nại (Địa liền), Mã tiền, Long não, tá dược rượu vừa đủ (công thức cho chai 500ml).',
    usage:
      'Lắc đều chai trước khi dùng. Đổ một lượng dầu vừa đủ lên vùng da sạch và khô, thoa đều và xoa bóp nhẹ nhàng theo vòng tròn từ 5-10 phút tại vùng cần chăm sóc, có thể dùng nhiều lần trong ngày.',
    warnings:
      'Chỉ dùng ngoài da, KHÔNG ĐƯỢC UỐNG. Không dùng cho phụ nữ có thai, trẻ em dưới 30 tháng tuổi, trẻ có tiền sử co giật/động kinh. Không bôi lên mắt, niêm mạc, vết thương hở. Ngừng sử dụng nếu có dấu hiệu mẫn cảm. Để xa tầm tay trẻ em.',
    origin: 'Sản xuất tại Hoài Nhơn, Bình Định. Hạn sử dụng 36 tháng kể từ ngày sản xuất. Bảo quản nơi khô ráo, nhiệt độ dưới 30°C.',
    image: 'https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776438151/XOA_B%C3%93P_6_lfilv2.png?auto=format&fit=crop&q=80&w=800',
    video: 'https://res.cloudinary.com/dfb8mvzhc/video/upload/v1776437376/xoabop_leoaaz.mp4',
    cta: 'Trải nghiệm sự an yên',
    link: 'https://vn.shp.ee/GA43KvdT',
    badges: ['Bí truyền', 'Cốt rượu lâu năm'],
    price: 60000,
    priceUnit: 'Chai 100ml',
    weightGrams: 265,
    priceOptions: [
      { label: '2 Chai 100ml', price: 115000, weightGrams: 570 },
      { label: 'Chai 500ml', price: 275000, weightGrams: 650 }
    ]
  },
  {
    id: 'thao-moc-xong-nha',
    category: 'xong-nha-phong-thuy',
    title: 'Thảo Dược Xông Nhà Như Ý - Cát Tường',
    subtitle: 'Thanh tẩy uế khí - Khởi sinh cát tường',
    description: 'Gói thảo dược 38 vị quý hiếm (Trầm hương, Quế chi, Đại hồi, Thảo quả...). Năng lượng sạch từ thiên nhiên.',
    benefits: 'Không gian thơm ngát, dễ chịu hơn, đón nhận năng lượng tích cực theo quan niệm phong thủy dân gian.',
    ingredients:
      'Hơn 38 vị thảo mộc thiên nhiên: bột trầm hương, bách xanh, sả, vỏ bưởi, quế, đại hồi, thảo quả, kim ngân, bạch chỉ, hương nhu, ngải cứu, kinh giới, quế chi, cùng nhóm thảo mộc có gai theo phong thủy dân gian (bạch tật lê, câu đằng, thương nhĩ tử...) và các loại gỗ, lá thơm tự nhiên khác.',
    usage:
      'Cách 1 (xông khói): đốt than chuyên dụng, rắc thảo dược lên khay, mang đi khắp nhà theo thứ tự từ trong ra ngoài. Cách 2 (xông hơi nước, phù hợp chung cư): đun sôi 1 gói với 5-7 lít nước, mang nồi xông hơi quanh nhà. Nên xông vào sáng sớm hoặc chiều tối, mở cửa thông thoáng khi xông.',
    warnings:
      'Chỉ dùng để xông không gian, không dùng cho mục đích khác. Xông nơi thoáng khí, tránh hít trực tiếp khói đậm đặc trong thời gian dài. Để xa tầm tay trẻ em và vật liệu dễ cháy.',
    origin: 'Nguyên liệu trầm hương thu hái tại Tiên Phước, Quảng Nam. Hạn sử dụng 12 tháng. Bảo quản nơi khô ráo, thoáng mát.',
    image: 'https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776440289/%C3%B4ng_l%C3%A3o_phong_th%E1%BB%A7y_vtmurx.png?auto=format&fit=crop&q=80&w=800',
    video: 'https://res.cloudinary.com/dfb8mvzhc/video/upload/v1776440319/7736771989880_f9ltno.mp4',
    cta: 'Thanh tẩy không gian',
    link: 'https://vt.tiktok.com/ZS9LbvTHMTVWL-nDl6P/',
    badges: ['38 vị thảo mộc', 'Xông nhà Như Ý - Cát Tường'],
    price: 60000,
    priceUnit: 'Gói dùng thử',
    weightGrams: 320,
    priceOptions: [
      { label: 'Combo 3 gói', price: 171000, weightGrams: 1500 },
      { label: '5 Gói siêu tiết kiệm', price: 275000, weightGrams: 2200 }
    ]
  },
  {
    id: 'la-xong-moc-an',
    category: 'cham-soc-co-the',
    title: 'Thảo Dược Xông & Tắm Cơ Thể Mộc An',
    subtitle: 'TThân khỏe tâm an & Tẩy trần thanh tịnh',
    description: '100% Thảo dược tự nhiên: Kết hợp tinh túy từ các loại lá thơm, thảo mộc quý, cam kết không hương liệu, không chất bảo quản.',
    benefits: 'Khơi thông dòng chảy năng lượng, gột rửa bụi trần và tìm lại sự thư thái trọn vẹn cho cả thân thể lẫn tâm hồn.',
    ingredients:
      '21 vị thảo mộc 100% tự nhiên: sả, hương nhu, bạc hà, tía tô, kinh giới, gừng, quế chi, đại hồi, vỏ bưởi, ngải cứu, lá tre, lá bưởi, bạch chỉ, huyết đằng, cúc tần, khuynh diệp, trần bì, lá ổi, ngũ trảo, hoa cúc, hoa nhài.',
    usage:
      'Cho gói xông nấu cùng 5-6 lít nước, đậy nắp nấu sôi rồi xông. Trùm chăn kín, mở hé vung cho hơi thoát ra vừa sức chịu đựng, xông 10-15 phút. Sau khi xông, dùng nước xông pha loãng để tắm/lau người trong vòng 2 tiếng. Không xông quá 3 lần/tuần, không xông khi vừa ăn no, đang say hoặc sốt cao.',
    warnings:
      'Không xông liên tục mỗi ngày. Phụ nữ sau sinh nên tham khảo ý kiến người có chuyên môn trước khi dùng (sinh thường nên đợi 5-7 ngày, sinh mổ đợi vết mổ khô hẳn). Tránh xông khi đang sốt cao hoặc say rượu.',
    origin: 'Hạn sử dụng 18 tháng. Sử dụng trong vòng 3 tháng sau khi mở túi, bảo quản nơi khô ráo.',
    image: 'https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776506403/x%C3%B4ng_c%C6%A1_th%E1%BB%83_1_sowj2u.png?auto=format&fit=crop&q=80&w=800',
    video: 'https://res.cloudinary.com/dfb8mvzhc/video/upload/v1776441157/xongtam_fomnwn.mp4',
    cta: 'Chăm sóc cơ thể',
    link: 'https://vt.tiktok.com/ZS9LgeM9mft9m-5arsI/',
    badges: ['Dịu nhẹ cho mọi làn da, kể cả da nhạy cảm', 'Hỗ trợ lưu thông khí huyết và giải tỏa căng thẳng hiệu quả'],
    price: 35000,
    priceUnit: 'Gói dùng thử',
    weightGrams: 340,
    priceOptions: [
      { label: 'Combo 3 gói', price: 99000, weightGrams: 1700 },
      { label: '4 Gói siêu tiết kiệm', price: 124000, weightGrams: 2200 }
    ]
  }
];

export const MORE_PRODUCTS = [
  {
    id: 'tram-huong-xong-nha',
    category: 'xong-nha-phong-thuy',
    title: 'Trầm Hương Xông Nhà Như Ý - Cát Tường',
    description: 'Gói xông nhà lấy trầm hương thượng hạng làm chủ đạo, kết hợp cùng các thảo mộc quý. Giúp thanh lọc không gian, mang lại hương thơm thư thái và đón nhận năng lượng tích cực theo quan niệm phong thủy dân gian.',
    benefits: '',
    ingredients:
      '3 nhóm nguyên liệu chọn lọc: Bột thơm (trầm hương, bách xanh, đại hồi, sả, vỏ bưởi, quế, ớt khô, ngân tinh, hương nhu, ngải cứu, kinh giới, quế chi, thương truật, cúc tần...); Thảo dược có gai theo dân gian (quỷ kiến sầu, thương nhĩ tử, câu đằng, muối sống); Gỗ quý (đàn hương, trầm gió, ngọc am, hương thảo, thảo quả, bồ kết).',
    usage:
      'Chuẩn bị khay chịu nhiệt, đốt than cho hồng đều. Cho các loại gỗ, thảo dược có gai vào khay trước, sau đó rắc từng ít bột thơm lên, rắc thêm muối sống — chỉ thêm khi lớp trước đã cháy hết. Cầm khay xông di chuyển khắp nhà, chú trọng gầm giường, phòng ngủ, nhà vệ sinh, bếp. Mở cửa thông thoáng khi xông. Liệu trình đầy đủ gồm 4 gói, mỗi lần cách nhau 3-4 ngày.',
    warnings:
      'Chỉ thêm bột khi lớp than trước đã cháy hết để tránh ngạt khói. Vật phẩm phong thủy đi kèm (Linh Phù, Rùa phong thủy) mang ý nghĩa theo quan niệm dân gian, không cam kết hiệu quả tuyệt đối hay kết quả tức thời.',
    origin:
      'Nguyên liệu sạch, chọn lọc kỹ càng. Hạn sử dụng 12 tháng. Bảo quản nơi khô ráo, thoáng mát. Quà tặng kèm mỗi đơn: 1 Linh Phù, 1 Rùa phong thủy, nụ trầm hương, 1 cây than (10 viên) và khay xông.',
    subtitle: '',
    video: '',
    badges: [] as string[],
    image: '/products/tram-huong-xong-nha-nhu-y-cat-tuong.webp',
    price: 95000,
    priceUnit: 'gói',
    weightGrams: 300,
    priceOptions: [] as { label: string; price: number; weightGrams: number }[]
  },
  {
    id: 'nuoc-lau-ban-tho',
    category: 'tho-cung',
    title: 'Nước Lau Bàn Thờ Cửu Vị Hương',
    description: 'Dung dịch lau dọn bàn thờ chiết xuất từ 9 loại thảo mộc tự nhiên, không cồn, không chất tẩy công nghiệp. Giúp làm sạch, sáng bóng đồ thờ và mang lại không gian thờ cúng thanh tịnh.',
    benefits: '',
    ingredients:
      'Nước tinh khiết + tinh chất 9 loại thảo mộc: mùi già, quế, đại hồi, đinh hương, gừng, hương nhu, bạc hà, sả, vỏ bưởi. Không cồn, không chất tẩy công nghiệp.',
    usage:
      'Dùng nguyên chất hoặc pha loãng theo tỷ lệ 1:3 với nước ấm. Dùng khăn mềm sạch (riêng cho bàn thờ) thấm dung dịch, lau nhẹ nhàng lên đồ thờ cúng, sau đó lau khô lại để không còn ẩm ướt. Nên vệ sinh 1-2 lần/tuần hoặc trước các dịp lễ, mùng 1, rằm, bao sái cuối năm.',
    warnings: '',
    origin:
      'Nguyên liệu sạch, nguồn gốc thiên nhiên từ thực vật. Hạn sử dụng 12 tháng kể từ ngày sản xuất. Bảo quản nơi khô ráo, thoáng mát.',
    subtitle: '',
    video: '',
    badges: [] as string[],
    image: '/products/nuoc-lau-ban-tho-cuu-vi-huong.webp',
    price: 65000,
    priceUnit: 'chai 500ml',
    weightGrams: 650,
    priceOptions: [] as { label: string; price: number; weightGrams: number }[]
  },
  {
    id: 'ngam-chan-moc-an',
    category: 'cham-soc-co-the',
    title: 'Thảo Dược Ngâm Chân Mộc An',
    description: 'Túi lọc 12 vị thảo dược ấm nóng (gừng, quế chi, ngải cứu, lá lốt...) giúp thư giãn, hỗ trợ tuần hoàn và mang lại cảm giác dễ chịu, ngủ ngon hơn sau một ngày dài.',
    benefits: '',
    ingredients:
      '12 vị thảo mộc thiên nhiên: gừng già, quế chi, ngải cứu, lá lốt, hồng hoa, hương nhu, bạch chỉ, dây đau xương, bạc hà, thương truật cùng các thảo dược khác.',
    usage:
      'Cho 1 túi lọc vào 1-2 lít nước sôi, đợi khoảng 5 phút để tinh chất hòa tan. Pha thêm nước lạnh cho nhiệt độ giảm còn khoảng 38-42°C. Ngâm chân 15-20 phút kết hợp xoa bóp nhẹ nhàng. Lau khô, không cần rửa lại bằng nước.',
    warnings:
      'Chống chỉ định — không dùng cho phụ nữ mang thai, người tiểu đường, giãn tĩnh mạch, có vết thương hở ở chân, hoặc ngay sau khi ăn no.',
    origin: 'Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.',
    subtitle: '',
    video: '',
    badges: [] as string[],
    image: '/products/thao-duoc-ngam-chan-moc-an.webp',
    price: 6000,
    priceUnit: 'túi lẻ (35g)',
    weightGrams: 50,
    priceOptions: [
      { label: '10 túi/bịch', price: 56000, weightGrams: 400 },
      { label: '15 túi/bịch', price: 79000, weightGrams: 580 },
      { label: 'Combo 2 bịch (30 túi)', price: 113000, weightGrams: 950 }
    ]
  },
  {
    id: 'dau-goi-moc-an',
    category: 'cham-soc-co-the',
    title: 'Dầu Gội Thảo Dược Mộc An',
    description: 'Dầu gội 11in1 làm thủ công từ bồ kết, bồ hòn, lá neem, hà thủ ô... không chất bảo quản, không sulfate. Giúp sạch gàu, dịu ngứa da đầu và nuôi dưỡng tóc chắc khỏe.',
    benefits: '',
    ingredients:
      '11 vị thảo mộc thiên nhiên: bồ kết (tách hạt nướng), bồ hòn, lá neem, hà thủ ô, núc nác, hương nhu, me rừng, cỏ mần trầu, sả, vỏ bưởi, quế.',
    usage:
      'Cho 1 túi lọc (13g) vào 500ml nước, nấu sôi 5 phút (hoặc hãm với nước sôi khoảng 10 phút). Đổ ra thau, pha thêm nước lạnh cho nhiệt độ giảm còn khoảng 40-45°C, dùng tay bóp nhẹ túi lọc để tinh chất hòa tan. Xối nước gội lên tóc, massage da đầu nhẹ nhàng, gội lại lần 2 nếu cần, xả sạch lại bằng nước mát. Không cần dùng thêm dầu xả.',
    warnings:
      'An toàn cho trẻ sơ sinh và da nhạy cảm, tuy nhiên tránh để nước gội dính vào mắt vì bồ kết có thể gây cay. Sản phẩm ít bọt tự nhiên (không dùng chất tạo bọt công nghiệp) nhưng vẫn làm sạch tốt.',
    origin: 'Xuất xứ Bình Dương. Hạn sử dụng 12 tháng kể từ ngày sản xuất. Bảo quản nơi khô ráo, thoáng mát.',
    subtitle: '',
    video: '',
    badges: [] as string[],
    image: '/products/dau-goi.png',
    price: 70000,
    priceUnit: 'bịch 30 túi lọc',
    weightGrams: 450,
    priceOptions: [] as { label: string; price: number; weightGrams: number }[]
  },
  {
    id: 'nu-que',
    category: 'tho-cung',
    title: 'Nụ Quế Cao Cấp',
    description: 'Nụ hương từ bột vỏ quế rừng nguyên chất và keo bời lời tự nhiên, dùng cho lư xông, tạo không gian ấm áp, hỗ trợ thư giãn khi thiền định.',
    benefits: '',
    ingredients: '95% bột quế kết hợp 5% vỏ cây bời lời, giữ nguyên kết dính tự nhiên, không pha hóa chất. Hộp 30 nụ.',
    usage:
      'Đốt nụ trầm hương thác khói: dùng bật lửa đốt đầu nụ đến khi cháy đỏ hồng, đợi có khói phát ra rồi đặt vào phần trên cùng của lư thác trầm. Đảm bảo lỗ thông khí bên dưới lư thông thoáng để khói lưu thông đều.',
    warnings:
      'Đặt lư ở vị trí vững chãi, cách xa vật dễ cháy (rèm, vải, giấy), để xa tầm tay trẻ em và thú cưng. Không rời mắt trong lúc đốt, đảm bảo phòng có thông gió.',
    origin: 'Thương hiệu An Mộc Hương. Đóng gói hộp nhựa chống ẩm. Bảo quản nơi khô ráo, thoáng mát.',
    subtitle: '',
    video: '',
    badges: [] as string[],
    image: '/products/nu-tram-huong-nu-que.webp',
    price: 61000,
    priceUnit: 'hộp 30 nụ',
    weightGrams: 150,
    priceOptions: [] as { label: string; price: number; weightGrams: number }[]
  },
  {
    id: 'nu-tram-huong',
    category: 'tho-cung',
    title: 'Nụ Trầm Hương Cao Cấp',
    description: 'Nụ trầm hương nguyên chất từ vùng nguyên liệu Tiên Phước, dùng xông phòng khách, phòng thờ, giúp không gian thư thái và dễ chịu hơn.',
    benefits: '',
    ingredients:
      '95% bột trầm hương kết hợp 5% vỏ cây bời lời tạo kết dính tự nhiên, không pha hóa chất hay nguyên liệu khác. Hộp 30 nụ.',
    usage:
      'Đốt nụ trầm hương thác khói: dùng bật lửa đốt đầu nụ đến khi cháy đỏ hồng, đợi có khói phát ra rồi đặt vào phần trên cùng của lư thác trầm. Đảm bảo lỗ thông khí bên dưới lư thông thoáng để khói lưu thông đều.',
    warnings:
      'Đặt lư ở vị trí vững chãi, cách xa vật dễ cháy (rèm, vải, giấy), để xa tầm tay trẻ em và thú cưng. Không rời mắt trong lúc đốt, đảm bảo phòng có thông gió.',
    origin: 'Thương hiệu An Mộc Hương. Đóng gói hộp nhựa chống ẩm. Bảo quản nơi khô ráo, thoáng mát.',
    subtitle: '',
    video: '',
    badges: [] as string[],
    image: '/products/nu-tram-huong-nu-que.webp',
    price: 119000,
    priceUnit: 'hộp 30 nụ',
    weightGrams: 150,
    priceOptions: [] as { label: string; price: number; weightGrams: number }[]
  },
  {
    id: 'nhang-que',
    category: 'tho-cung',
    title: 'Nhang Quế Cao Cấp',
    description: '90% vỏ và lá quế tự nhiên kết hợp keo bời lời, ít khói, mùi quế ấm áp, phù hợp thắp bàn thờ và không gian căn hộ kín.',
    benefits: '',
    ingredients: '90% vỏ quế, 10% keo bời lời và tăm tre tự nhiên, hương thơm quế ấm áp đặc trưng.',
    usage:
      'Thắp bàn thờ Phật, tổ tiên; hỗ trợ thanh lọc không khí; làm ấm không gian, phù hợp dùng khi yoga, thiền định; ít khói, thích hợp dùng ở văn phòng, căn hộ chung cư.',
    warnings:
      'Màu nhang sẽ nhạt dần theo thời gian do tính chất thiên nhiên, không dùng hóa chất giữ màu — đây là đặc điểm tự nhiên, không phải lỗi sản phẩm.',
    origin: 'Thương hiệu An Mộc Hương. Bảo quản nơi khô ráo, thoáng mát.',
    subtitle: '',
    video: '',
    badges: [] as string[],
    image: '/products/nhang-vo-que.webp',
    price: 82000,
    priceUnit: 'hộp 180 cây',
    weightGrams: 300,
    priceOptions: [] as { label: string; price: number; weightGrams: number }[]
  },
  {
    id: 'nhang-bo-que',
    category: 'tho-cung',
    title: 'Nhang Vỏ & Lá Quế Dạng Bó',
    description: 'Vỏ và lá quế rừng nghiền mịn kết dính tự nhiên, mùi thơm đậm đà, phù hợp nhu cầu thờ cúng hàng ngày với chi phí tiết kiệm.',
    benefits: '',
    ingredients: '90% vỏ và lá quế, 10% keo bời lời và tăm tre tự nhiên, hương thơm đậm đà từ lá quế.',
    usage:
      'Thắp bàn thờ Phật, tổ tiên; hỗ trợ thanh lọc không khí; làm ấm không gian, phù hợp dùng khi yoga, thiền định; ít khói, thích hợp dùng ở văn phòng, căn hộ chung cư.',
    warnings:
      'Màu nhang sẽ nhạt dần theo thời gian do tính chất thiên nhiên, không dùng hóa chất giữ màu — đây là đặc điểm tự nhiên, không phải lỗi sản phẩm.',
    origin: 'Thương hiệu An Mộc Hương. Bảo quản nơi khô ráo, thoáng mát.',
    subtitle: '',
    video: '',
    badges: [] as string[],
    image: '/products/nhang-vo-va-la-que.webp',
    price: 50000,
    priceUnit: 'bó',
    weightGrams: 280,
    priceOptions: [] as { label: string; price: number; weightGrams: number }[]
  },
  {
    id: 'nhang-tram-cao-cap',
    category: 'tho-cung',
    title: 'Nhang Trầm Hương Cao Cấp',
    description: 'Bột trầm hương thiên nhiên kết dính từ vỏ cây bời lời, tăm tre tự nhiên. Ít khói, phù hợp thắp bàn thờ Phật, tổ tiên và không gian văn phòng kín.',
    benefits: '',
    ingredients: 'Bột trầm hương tự nhiên, keo bời lời tạo kết dính, tăm tre tự nhiên. Hộp 50 cây, dài 30cm.',
    usage:
      'Thắp bàn thờ Phật, tổ tiên; hỗ trợ thanh lọc không khí; làm ấm không gian, phù hợp dùng khi yoga, thiền định; ít khói, thích hợp dùng ở văn phòng, căn hộ chung cư.',
    warnings:
      'Màu nhang sẽ nhạt dần theo thời gian do tính chất thiên nhiên, không dùng hóa chất giữ màu — đây là đặc điểm tự nhiên, không phải lỗi sản phẩm.',
    origin: 'Thương hiệu An Mộc Hương. Bảo quản nơi khô ráo, thoáng mát.',
    subtitle: '',
    video: '',
    badges: [] as string[],
    image: '/products/nhang-tram-huong.webp',
    price: 71000,
    priceUnit: 'hộp 50 cây',
    weightGrams: 150,
    priceOptions: [] as { label: string; price: number; weightGrams: number }[]
  },
  {
    id: 'than-vien-xong-nha',
    category: 'xong-nha-phong-thuy',
    title: 'Than Viên Tròn Xông Nhà',
    description: 'Than viên chuyên dụng cho xông thảo dược, mồi nhanh, ít khói, tỏa nhiệt đều và giữ lửa lâu, tối ưu cho mỗi lần xông nhà.',
    benefits: '',
    ingredients: '',
    usage:
      'Chuẩn bị khay chịu nhiệt (khay sứ, gốm hoặc lót giấy bạc), đặt ở vị trí vững chãi, cách xa vật dễ cháy. Dùng kẹp chuyên dụng giữ viên than, đốt đến khi bề mặt hồng đều rồi đặt vào khay — không dùng tay trần chạm vào than đang cháy hoặc vừa tắt. Rắc thảo mộc hoặc trầm hương lên than, để hương thơm lan tỏa trong không gian thông thoáng.',
    warnings:
      'Không đốt trong phòng kín hoàn toàn, không để trẻ em/thú cưng lại gần, không rời mắt trong lúc đốt. Sau khi dùng, đợi than nguội hoàn toàn trước khi bỏ vào thùng rác chuyên dụng cho tro/than.',
    origin: 'Kích thước 1cm x 3.2cm/viên. Bảo quản nơi khô ráo, thoáng mát, tránh ẩm để giữ khả năng bắt lửa tốt.',
    subtitle: '',
    video: '',
    badges: [] as string[],
    image: '/products/than.png',
    price: 19000,
    priceUnit: 'gói 10 viên',
    weightGrams: 200,
    priceOptions: [] as { label: string; price: number; weightGrams: number }[]
  },
  {
    id: 'rua-vang-phong-thuy',
    category: 'xong-nha-phong-thuy',
    title: 'Rùa Vàng Phong Thủy',
    description: 'Vật phẩm trang trí mang ý nghĩa văn hóa truyền thống, tượng trưng cho sự bảo vệ và kiên định. Phù hợp đặt trong ví, ốp điện thoại hoặc làm quà tặng.',
    benefits: '',
    ingredients: '',
    usage: '',
    warnings: 'Ý nghĩa mang tính biểu tượng văn hóa, không cam kết hiệu quả tâm linh cụ thể.',
    origin: 'Quy cách: thẻ bài 7cm x 5.8cm, rùa 1.7cm x 1cm. Bảo quản nơi khô ráo, tránh va đập mạnh.',
    subtitle: '',
    video: '',
    badges: [] as string[],
    image: '/products/rua-phong-thuy.jpeg',
    price: 13000,
    priceUnit: 'thẻ bài',
    weightGrams: 30,
    priceOptions: [] as { label: string; price: number; weightGrams: number }[]
  },
  {
    id: 'chai-ngu-coc-phong-thuy',
    category: 'xong-nha-phong-thuy',
    title: 'Chai Ngũ Cốc Phong Thủy',
    description: 'Chai thủy tinh chứa 5 loại ngũ cốc thật (gạo, lúa mì, ngô, đậu, mè), vật phẩm trang trí mang ý nghĩa văn hóa cầu chúc sung túc, đủ đầy cho không gian sống.',
    benefits: '',
    ingredients: '',
    usage: '',
    warnings: 'Ý nghĩa mang tính biểu tượng văn hóa, không cam kết hiệu quả tâm linh cụ thể.',
    origin: 'Chất liệu thủy tinh trong suốt, ruột gạo/lúa mì/ngô/đậu/mè tự nhiên. Bảo quản nơi khô ráo, tránh va đập mạnh, tránh ánh nắng trực tiếp.',
    subtitle: '',
    video: '',
    badges: [] as string[],
    image: '/products/chai-ngu-coc-phong-thuy.webp',
    price: 27000,
    priceUnit: 'chai 6cm',
    weightGrams: 80,
    priceOptions: [{ label: 'chai 7.5cm', price: 45000, weightGrams: 150 }]
  },
  {
    id: 'tao-xoan',
    category: 'suc-khoe',
    title: 'Viên Tảo Xoắn Ăn Ngon - Ngủ Ngon',
    description:
      'Thực phẩm bảo vệ sức khỏe gồm 2 loại viên riêng biệt — Ăn Ngon và Ngủ Ngon — kết hợp tinh hoa thảo dược thiên nhiên, hỗ trợ cải thiện cả ăn uống kém lẫn giấc ngủ không ngon.',
    benefits: '',
    ingredients:
      'Viên Ăn Ngon: Tảo Xoắn Spirulina, Đông Trùng Hạ Thảo, Hồng Sâm Korea, Đan Sâm, Đương Quy, Bạch Truật, Hoàng Kỳ. Viên Ngủ Ngon: Cao Bình Vôi, Đông Trùng Hạ Thảo, Cao Lạc Tiên, Cao Tâm Sen, Cao Nữ Lang.',
    usage:
      'Viên Ăn Ngon: 1 viên/ngày, uống trước bữa ăn (có thể dùng 2 viên/ngày nếu suy nhược cơ thể). Viên Ngủ Ngon: 1 viên/ngày, uống trước khi đi ngủ 30 phút - 1 giờ. Phù hợp với người suy nhược cơ thể, ăn uống kém, mệt mỏi, chán ăn, hoặc mất ngủ, ngủ không sâu giấc.',
    warnings:
      'Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh. Để xa tầm tay trẻ em. Không sử dụng khi mẫn cảm với bất kỳ thành phần nào của sản phẩm.',
    origin: 'Hạn sử dụng 36 tháng kể từ ngày sản xuất. Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp, nhiệt độ không quá 30°C.',
    subtitle: '',
    video: '',
    badges: [] as string[],
    image: '/products/vien-tao-xoan-an-ngon-ngu-ngon.jpg',
    price: 233000,
    priceUnit: 'hộp 60 viên',
    weightGrams: 250,
    priceOptions: [] as { label: string; price: number; weightGrams: number }[]
  },
  {
    id: 'beauty-collagen-c',
    category: 'suc-khoe',
    title: 'Beauty Collagen C+',
    description: 'Viên uống Fish Collagen Peptide nhập khẩu Nhật kết hợp chiết xuất Sâm Tố Nữ, Glutathione và Vitamin E. Hỗ trợ cải thiện nội tiết tố nữ, giúp làn da đều màu, sáng khỏe hơn từ bên trong.',
    benefits: '',
    ingredients:
      'Fish Collagen Peptide, Sâm tố nữ (Pueraria mirifica), sữa ong chúa, chiết xuất thông đỏ, Maca, Damiana, L-Glutathione, kẽm gluconate, Vitamin E và Biotin.',
    usage: 'Người lớn uống 1 viên/lần/ngày.',
    warnings:
      'Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh. Không dùng cho người mẫn cảm với bất kỳ thành phần nào của sản phẩm. Đối tượng sử dụng: phụ nữ có triệu chứng bốc hỏa, nám sạm da, nhăn da do thiếu hụt nội tiết tố.',
    origin:
      'Phân phối bởi Ayoya Shop. Giấy tiếp nhận đăng ký bản công bố sản phẩm số 4296/2021/ĐKSP, Cục An Toàn Thực Phẩm - Bộ Y Tế. Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.',
    subtitle: '',
    video: '',
    badges: [] as string[],
    image: '/products/beauty-collagen-c.webp',
    price: 215000,
    priceUnit: 'hộp 30 viên',
    weightGrams: 150,
    priceOptions: [] as { label: string; price: number; weightGrams: number }[]
  }
];

export const ALL_PRODUCTS = [...PRODUCTS, ...MORE_PRODUCTS];

export function getProductById(id: string) {
  return ALL_PRODUCTS.find(p => p.id === id);
}

export const CORE_VALUES = [
  {
    title: 'UY TÍN',
    description: 'Nền tảng sống còn. Minh bạch nguồn gốc, trung thực tư vấn. Kế thừa tinh hoa Bình Định.',
    icon: 'Shield'
  },
  {
    title: 'CHẤT LƯỢNG',
    description: 'Mỗi sản phẩm là một công trình tâm huyết, chế biến thủ công để giữ trọn dược tính.',
    icon: 'Sparkles'
  },
  {
    title: 'TẬN TÂM',
    description: 'Đồng hành chăm sóc sức khỏe và nuôi dưỡng tâm hồn, lắng nghe từng phản hồi nhỏ nhất.',
    icon: 'HeartHandshake'
  }
];

export const BLOGS = [
  {
    title: 'Mẹo chăm sóc sức khỏe không dùng thuốc',
    excerpt: 'Khám phá các phương pháp tự nhiên từ y học cổ truyền Bình Định để phục hồi thân tâm...',
    image: 'https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776480897/5meo_hu29y2.jpg?auto=format&fit=crop&q=80&w=600',
    link: 'https://www.nguyentuankiet.com.vn/2026/04/meo-cham-soc-suc-khoe-khong-dung-thuoc.html'
  },
  {
   title: 'Thanh tẩy Trường khí & Tái tạo Năng lượng Gia đạo',
    excerpt: 'Sự kết hợp diệu kỳ giữa dược tính của thảo mộc thiên nhiên và quy luật vận hành của năng lượng vũ trụ...',
    image: 'https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776502433/1a_dtrje5.jpg?auto=format&fit=crop&q=80&w=600',
    link: 'https://www.nguyentuankiet.com.vn/2026/04/thanh-tay-truong-khi-tai-tao-nang-luong.html'
  },
  {
    title: 'Dưỡng sinh Võ đạo: Giải cứu Cột sống & Thông kinh lạc cho người hiện đại',
    excerpt: 'Từ hàng thế kỷ trước, các bậc tiền nhân đã đúc kết nên một kho tàng di sản mang tên Võ Y Song Tu...',
    image: 'https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776505547/vo_binh_dinh_ud0cpl.jpg?auto=format&fit=crop&q=80&w=600',
    link: 'https://www.nguyentuankiet.com.vn/2026/04/duong-sinh-vo-ao-giai-cuu-cot-song.html'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Anh Minh Anh',
    role: 'Khách hàng thân thiết',
    content: 'Tôi đã cải thiện giấc ngủ rất nhiều sau 7 ngày dùng nhang quế Ayoya. Không gian thờ cúng trở nên thanh tịnh vô cùng.',
    videoThumbnail: 'https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776436632/%E1%BA%A3nh_ch%C3%A2n_dung_202604172136_lb79sp.jpg?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Chị Lan Hương',
    role: 'Người sống xanh',
    content: 'Combo xông nhà Như Ý thực sự mang lại luồng gió mới cho căn chung cư của mình. Mùi thơm thảo mộc tự nhiên rất dễ chịu.',
    videoThumbnail: 'https://res.cloudinary.com/dfb8mvzhc/image/upload/v1776436949/ch%C3%A2n_dung_1_202604172142_kvhhgy.jpg?auto=format&fit=crop&q=80&w=400'
  }
];

export const QUIZ_QUESTIONS = [
  {
    question: 'Bạn đang cảm thấy năng lượng của mình như thế nào?',
    options: [
      { text: 'Mệt mỏi, áp lực công việc', score: 'xanh' },
      { text: 'Cần sự bình an, tĩnh tại cho gia đạo', score: 'nâu' },
      { text: 'Đau nhức cơ thể sau vận động', score: 'đỏ' }
    ]
  },
  {
    question: 'Không gian sống của bạn hiện tại?',
    options: [
      { text: 'Cần thanh tẩy, làm sạch uế khí', score: 'xanh' },
      { text: 'Cần sự trang nghiêm, ấm cúng', score: 'nâu' },
      { text: 'Cần năng lượng mạnh mẽ, phục hồi', score: 'đỏ' }
    ]
  }
];

export const QUIZ_RESULTS = {
  xanh: {
    title: 'Thần Thảo Thanh Khiết',
    description: 'Bạn phù hợp với các dòng sản phẩm Xông nhà và Ngâm chân thảo mộc để thanh lọc áp lực.',
    product: 'thao-moc-xong-nha'
  },
  nâu: {
    title: 'Tĩnh Tâm Gia Đạo',
    description: 'Thảo dược Xông & Tắm Mộc An giúp thân khỏe tâm an, tẩy trần thanh tịnh và mang lại sự bình an cho gia đạo bạn.',
    product: 'la-xong-moc-an'
  },
  đỏ: {
    title: 'Hồi Sinh Thể Chất',
    description: 'Dầu võ Bình Định chính là "báu vật" giúp bạn phục hồi năng lượng và giảm cảm giác đau nhức.',
    product: 'dau-vo'
  }
};
