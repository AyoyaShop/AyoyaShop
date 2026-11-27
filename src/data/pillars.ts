// The three product lines the shop is built around. Only the massage oil is tied to the family's
// dojo recipe: do not give incense or feng-shui items that origin.
export interface Pillar {
  slug: 'thao-moc' | 'tram-huong' | 'phong-thuy';
  title: string;
  tagline: string;
  intro: string;
  seoDescription: string;
  image: string;
  imagePosition?: string;
  ids: string[];
  about: { heading: string; text: string }[];
  note?: string;
}

export const BRAND_DESCRIPTION =
  'Hội tụ tinh hoa thảo mộc, trầm hương và phong thủy; trân trọng giá trị truyền thống, hướng đến đời sống an nhiên.';

export const PILLARS: Pillar[] = [
  {
    slug: 'thao-moc',
    title: 'Thảo mộc',
    tagline: 'Tinh túy thiên nhiên',
    intro: 'Dầu xoa bóp theo bài thuốc gia đình, thảo dược xông nhà, xông tắm, ngâm chân và dầu gội túi lọc.',
    seoDescription:
      'Thảo mộc AYOYA: dầu xoa bóp võ thuật Bình Định, thảo dược xông nhà, xông tắm, ngâm chân và dầu gội thảo dược. Đồng kiểm khi nhận hàng.',
    image: '/photos/xuong-phoi-800.webp',
    ids: ['dau-vo', 'thao-moc-xong-nha', 'la-xong-moc-an', 'ngam-chan-moc-an', 'dau-goi-moc-an'],
    about: [
      {
        heading: 'Chọn theo việc cần làm',
        text: 'Xoa bóp tại chỗ: dầu xoa bóp. Xông tắm cơ thể: gói Mộc An. Ngâm chân buổi tối: túi ngâm chân. Gội đầu: dầu gội túi lọc. Dọn nhà, xông nhà: gói Như Ý – Cát Tường.'
      },
      {
        heading: 'Dùng cho đúng',
        text: 'Mỗi trang sản phẩm ghi rõ thành phần, cách dùng, lưu ý và cách bảo quản. Đọc phần lưu ý trước khi dùng, nhất là với phụ nữ mang thai và trẻ nhỏ.'
      }
    ],
    note: 'Nội dung mang tính tham khảo theo kinh nghiệm dân gian, không thay thế tư vấn y tế.'
  },
  {
    slug: 'tram-huong',
    title: 'Trầm hương',
    tagline: 'Hương trầm tĩnh tại',
    intro: 'Nhang, nụ trầm và trầm xông nhà cho phòng thờ, phòng khách và những buổi tối cần yên.',
    seoDescription:
      'Trầm hương AYOYA: nhang trầm, nụ trầm hương và trầm xông nhà cho phòng thờ, phòng khách. Cách đốt và bảo quản. Đồng kiểm khi nhận hàng.',
    image: '/products/nhang-tram-huong.webp',
    // The photo carries a printed caption along its top edge, so crop from the bottom up.
    imagePosition: '50% 100%',
    ids: ['nu-tram-huong', 'nhang-tram-cao-cap', 'tram-huong-xong-nha'],
    about: [
      { heading: 'Chọn dạng nào', text: 'Nhang cây cho bàn thờ hằng ngày. Nụ trầm cho lư thác khói. Gói trầm xông nhà đốt cùng than khi dọn nhà.' },
      { heading: 'Đốt và bảo quản', text: 'Đốt nơi thoáng khí, xa rèm, giấy và tầm tay trẻ em; không rời mắt khi còn lửa. Cất nơi khô ráo, đậy kín để tránh ẩm.' }
    ]
  },
  {
    slug: 'phong-thuy',
    title: 'Phong thủy',
    tagline: 'Hài hòa không gian sống',
    intro: 'Hai món nhỏ để bày trong nhà, mang theo người hoặc làm quà.',
    seoDescription: 'Vật phẩm phong thủy AYOYA: thẻ rùa vàng để trong ví và chai ngũ cốc bày bàn làm việc, kệ trang trí, làm quà.',
    image: '/products/rua-vang-2.webp',
    ids: ['rua-vang-phong-thuy', 'chai-ngu-coc-phong-thuy'],
    about: [
      { heading: 'Thẻ rùa vàng', text: 'Thẻ 7 x 5,8 cm, đặt trong ví, ốp điện thoại hoặc làm quà. Theo quan niệm dân gian, rùa tượng trưng cho sự bảo vệ và kiên định.' },
      { heading: 'Chai ngũ cốc', text: 'Chai thủy tinh đựng năm loại hạt: gạo, lúa mì, ngô, đậu, mè. Bày trên kệ, bàn làm việc, tránh nắng trực tiếp. Mang ý cầu chúc sung túc, đủ đầy.' }
    ]
  }
];
