// The free reading library. Files live on the shop's Google Drive, shared as "anyone with the link".
// Only books believed to be out of copyright get a download; add one here only after checking that.

export interface BookFile {
  label: string;
  driveId: string;
  format: string;
  bytes: number;
  pages?: number;
}

export interface Book {
  slug: string;
  group: BookGroupId;
  title: string;
  author: string;
  printing: string;
  language: string;
  intro: string;
  cover?: { src: string; width: number; height: number };
  files: BookFile[];
}

export type BookGroupId = 'kinh-dien' | 'lich-su' | 'van-hoc' | 'phat-giao';

export const BOOK_GROUPS: { id: BookGroupId; title: string; note: string }[] = [
  {
    "id": "kinh-dien",
    "title": "Kinh điển gốc",
    "note": "Sách nền tảng của Nho gia, Pháp gia và văn học Việt."
  },
  {
    "id": "lich-su",
    "title": "Lịch sử – Danh nhân",
    "note": "Sử, địa lý, phong tục và chuyện người xưa."
  },
  {
    "id": "van-hoc",
    "title": "Văn học – Truyện cổ",
    "note": "Truyện, thơ, tục ngữ, từ điển và tiếng Việt."
  },
  {
    "id": "phat-giao",
    "title": "Phật giáo",
    "note": "Sự tích, triết học và lịch sử Phật giáo."
  }
];

// status: the slug of a book above, 'buy' (still in copyright) or 'none' (no download here yet).
export const READING_LIST: { school: string; works: { title: string; by: string; status: string }[] }[] = [
  {
    "school": "Nho gia",
    "works": [
      {
        "title": "Nho Giáo",
        "by": "Trần Trọng Kim",
        "status": "nho-giao"
      },
      {
        "title": "Vương Dương Minh",
        "by": "Trần Trọng Kim",
        "status": "vuong-duong-minh"
      },
      {
        "title": "Luận Ngữ và Khổng Tử",
        "by": "Nguyễn Hiến Lê",
        "status": "buy"
      },
      {
        "title": "Mạnh Tử",
        "by": "Nguyễn Hiến Lê",
        "status": "buy"
      },
      {
        "title": "Đại Học, Trung Dung",
        "by": "Đoàn Trung Còn dịch",
        "status": "buy"
      },
      {
        "title": "Tứ Thư Bình Giải",
        "by": "Lý Minh Tuấn",
        "status": "buy"
      },
      {
        "title": "Kinh Dịch",
        "by": "Ngô Tất Tố dịch",
        "status": "none"
      },
      {
        "title": "Kinh Dịch, đạo của người quân tử",
        "by": "Nguyễn Hiến Lê",
        "status": "buy"
      },
      {
        "title": "Kinh Thi",
        "by": "Tạ Quang Phát dịch",
        "status": "none"
      },
      {
        "title": "Kinh Lễ",
        "by": "Nguyễn Tôn Nhan dịch",
        "status": "buy"
      },
      {
        "title": "Kinh Thư Diễn Nghĩa",
        "by": "Lê Quý Đôn",
        "status": "none"
      },
      {
        "title": "Tuân Tử",
        "by": "Giản Chi, Nguyễn Hiến Lê",
        "status": "buy"
      }
    ]
  },
  {
    "school": "Pháp gia và mưu lược",
    "works": [
      {
        "title": "Hàn Phi Tử",
        "by": "Giản Chi, Nguyễn Hiến Lê",
        "status": "buy"
      },
      {
        "title": "The Book of Lord Shang",
        "by": "J. J. L. Duyvendak",
        "status": "the-book-of-lord-shang"
      },
      {
        "title": "Quỷ Cốc Tử mưu lược toàn thư",
        "by": "Nhiều bản dịch",
        "status": "buy"
      },
      {
        "title": "Chiến Quốc Sách",
        "by": "Giản Chi, Nguyễn Hiến Lê",
        "status": "buy"
      },
      {
        "title": "Lã Thị Xuân Thu",
        "by": "Phan Văn Các dịch",
        "status": "buy"
      }
    ]
  },
  {
    "school": "Đạo gia",
    "works": [
      {
        "title": "Lão Tử Đạo Đức Kinh",
        "by": "Nguyễn Hiến Lê",
        "status": "buy"
      },
      {
        "title": "Lão Tử Tinh Hoa",
        "by": "Nguyễn Duy Cần",
        "status": "buy"
      },
      {
        "title": "Trang Tử và Nam Hoa Kinh",
        "by": "Nguyễn Duy Cần",
        "status": "buy"
      }
    ]
  },
  {
    "school": "Sử Việt",
    "works": [
      {
        "title": "Đại Việt Sử Ký Toàn Thư",
        "by": "Bản dịch hiện hành",
        "status": "buy"
      },
      {
        "title": "Đại Nam Thực Lục",
        "by": "Quốc Sử Quán triều Nguyễn",
        "status": "buy"
      },
      {
        "title": "Khâm Định Việt Sử Thông Giám Cương Mục",
        "by": "Quốc Sử Quán triều Nguyễn",
        "status": "buy"
      },
      {
        "title": "Đại Nam Liệt Truyện",
        "by": "Quốc Sử Quán triều Nguyễn",
        "status": "buy"
      },
      {
        "title": "Phủ Biên Tạp Lục, Kiến Văn Tiểu Lục",
        "by": "Lê Quý Đôn",
        "status": "buy"
      },
      {
        "title": "Vân Đài Loại Ngữ",
        "by": "Lê Quý Đôn",
        "status": "none"
      },
      {
        "title": "Gia Định Thành Thông Chí",
        "by": "Trịnh Hoài Đức",
        "status": "none"
      }
    ]
  },
  {
    "school": "Văn học và truyện cổ Việt Nam",
    "works": [
      {
        "title": "Truyện Kiều",
        "by": "Nguyễn Du; Văn Hòe chú giải",
        "status": "truyen-kieu"
      },
      {
        "title": "Truyện Cổ Nước Nam",
        "by": "Nguyễn Văn Ngọc",
        "status": "truyen-co-nuoc-nam"
      },
      {
        "title": "Nguyễn Trãi toàn tập",
        "by": "Bản dịch hiện hành",
        "status": "buy"
      },
      {
        "title": "Kho Tàng Truyện Cổ Tích Việt Nam",
        "by": "Nguyễn Đổng Chi",
        "status": "buy"
      },
      {
        "title": "Tục Ngữ, Ca Dao, Dân Ca Việt Nam",
        "by": "Vũ Ngọc Phan",
        "status": "buy"
      }
    ]
  }
];

export const BOOKS: Book[] = [
  {
    "slug": "nho-giao",
    "group": "kinh-dien",
    "title": "Nho Giáo",
    "author": "Trần Trọng Kim",
    "printing": "Bản điện tử của Wikisource",
    "language": "Tiếng Việt",
    "intro": "Bộ khảo cứu về Nho giáo gồm bốn quyển và một phụ lục. Sách đi từ Khổng Tử, Mạnh Tử, Tuân Tử qua các đời Hán, Tống, Minh, Thanh đến Nho giáo ở Việt Nam.",
    "files": [
      {
        "label": "Quyển 1",
        "driveId": "1AVbzFp8GNUjubGqc4Q1m8i934TFb1GlL",
        "format": "EPUB",
        "bytes": 4531209
      },
      {
        "label": "Quyển 2",
        "driveId": "1Sa93GXqNCNkORVQSS7-s7Q5AfIhdGNsZ",
        "format": "EPUB",
        "bytes": 4490550
      },
      {
        "label": "Quyển 3",
        "driveId": "1XTxelCM3dT_ALCsmrS4enNdzUbDSYbqD",
        "format": "EPUB",
        "bytes": 4542907
      },
      {
        "label": "Quyển 4",
        "driveId": "1YfENyibwn5sUpKEkK6LTJ_7aYeNzxKU4",
        "format": "EPUB",
        "bytes": 4560794
      },
      {
        "label": "Phụ lục",
        "driveId": "1vlrGRvHnto68DOyy2ks1phY9VRYJMJlm",
        "format": "EPUB",
        "bytes": 4390839
      }
    ]
  },
  {
    "slug": "vuong-duong-minh",
    "group": "kinh-dien",
    "title": "Vương Dương Minh",
    "author": "Trần Trọng Kim",
    "printing": "Đánh máy lại theo bản Tân Việt 1960",
    "language": "Tiếng Việt",
    "intro": "Trần Trọng Kim giới thiệu cuộc đời và học thuyết của Vương Dương Minh, nhà Nho đời Minh với thuyết lương tri và tri hành hợp nhất.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1pNKpMF4iyS1aFC065FagyGU3g20iagE2",
        "format": "EPUB",
        "bytes": 779307
      }
    ],
    "cover": {
      "src": "/books/vuong-duong-minh.webp",
      "width": 386,
      "height": 602
    }
  },
  {
    "slug": "the-book-of-lord-shang",
    "group": "kinh-dien",
    "title": "The Book of Lord Shang (Thương Quân Thư)",
    "author": "J. J. L. Duyvendak dịch",
    "printing": "London, 1928",
    "language": "Tiếng Anh",
    "intro": "Bản dịch tiếng Anh sách Thương Quân Thư, kèm lời dẫn và chú giải. Đây là một tác phẩm tiêu biểu của phái Pháp gia Trung Hoa.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1Zvet0avNM-KL7xcI7sL__OaYx_Szoh0p",
        "format": "PDF",
        "bytes": 114467990,
        "pages": 372
      }
    ],
    "cover": {
      "src": "/books/the-book-of-lord-shang.webp",
      "width": 480,
      "height": 682
    }
  },
  {
    "slug": "truyen-kieu",
    "group": "kinh-dien",
    "title": "Truyện Kiều",
    "author": "Nguyễn Du; Văn Hòe chú giải",
    "printing": "",
    "language": "Tiếng Việt",
    "intro": "Có hai bản: bản của Văn Hòe với chú giải, hiệu đính và bình luận; và bản chỉ có lời thơ, nhẹ máy, hợp đọc trên điện thoại.",
    "files": [
      {
        "label": "Bản chú giải của Văn Hòe",
        "driveId": "1lHN644qa_2WlBNpcQaIZTv73mq7p3N1T",
        "format": "PDF",
        "bytes": 10357509,
        "pages": 720
      },
      {
        "label": "Bản chỉ có thơ",
        "driveId": "1FhGZ7fCRGAmVexYqjBmWmkxMqDAhF6Gb",
        "format": "PDF",
        "bytes": 1015246,
        "pages": 190
      }
    ],
    "cover": {
      "src": "/books/truyen-kieu.webp",
      "width": 480,
      "height": 710
    }
  },
  {
    "slug": "truyen-co-nuoc-nam",
    "group": "kinh-dien",
    "title": "Truyện Cổ Nước Nam",
    "author": "Ôn Như Nguyễn Văn Ngọc",
    "printing": "",
    "language": "Tiếng Việt",
    "intro": "Nguyễn Văn Ngọc sưu tầm và kể lại truyện cổ dân gian Việt Nam, chia hai phần: Người ta và Muông chim. Phần Người ta có vài bản in để bạn chọn.",
    "files": [
      {
        "label": "Người ta, bản in lần thứ tư",
        "driveId": "1Hnt9vrCO-dlIxjeqw7G1vjRg4bVSWwq4",
        "format": "PDF",
        "bytes": 16185593,
        "pages": 220
      },
      {
        "label": "Người ta, bản in 1952",
        "driveId": "1JXYBZpsHu__kZ0IHreOP_gyPKelFxAKR",
        "format": "PDF",
        "bytes": 5443542,
        "pages": 168
      },
      {
        "label": "Người ta, bản đánh máy",
        "driveId": "1mXnsFKbj0n3-wQ0Jpgu3-7FGSodKM5NM",
        "format": "PDF",
        "bytes": 864133,
        "pages": 285
      },
      {
        "label": "Muông chim, tập 2",
        "driveId": "1ZhhG0If_PJKdLW4Vkg5mNNdSfqUfn3zl",
        "format": "PDF",
        "bytes": 11725634,
        "pages": 238
      },
      {
        "label": "Quyển 1, định dạng MOBI",
        "driveId": "1fliuRkV-BENv2JLtRh2OCAgm_baEW0es",
        "format": "MOBI",
        "bytes": 366916
      }
    ],
    "cover": {
      "src": "/books/truyen-co-nuoc-nam.webp",
      "width": 471,
      "height": 720
    }
  },
  {
    "slug": "co-loa",
    "group": "lich-su",
    "title": "Cổ Loa, kinh đô nước Âu Lạc (tiếng Pháp)",
    "author": "Gustave Dumoutier",
    "printing": "",
    "language": "Tiếng Pháp",
    "intro": "Nghiên cứu lịch sử và khảo cổ về thành Cổ Loa, nguyên tác tiếng Pháp có tên Étude historique et archéologique sur Cổ Loa.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1T-3T4oB2liEDL7XBYd0DH9s7fMS6Yso-",
        "format": "PDF",
        "bytes": 36487887,
        "pages": 117
      }
    ],
    "cover": {
      "src": "/books/co-loa.webp",
      "width": 480,
      "height": 644
    }
  },
  {
    "slug": "dai-viet-dia-du",
    "group": "lich-su",
    "title": "Đại Việt Địa Dư",
    "author": "Lương Văn Can",
    "printing": "Hà Nội, 1925",
    "language": "Tiếng Việt",
    "intro": "Địa lý nước ta viết thành thơ lục bát, đi qua từng tỉnh, có chú thích bên dưới.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1jCLYEHiv8e3CI_wPiyw7v3p_BU-OESFZ",
        "format": "PDF",
        "bytes": 3198912,
        "pages": 83
      }
    ],
    "cover": {
      "src": "/books/dai-viet-dia-du.webp",
      "width": 480,
      "height": 679
    }
  },
  {
    "slug": "guong-su-nam",
    "group": "lich-su",
    "title": "Gương Sử Nam",
    "author": "Hoàng Cao Khải",
    "printing": "Hà Nội, 1910",
    "language": "Tiếng Việt",
    "intro": "Hoàng Cao Khải bàn về việc nước ta giao thiệp với Pháp, với Trung Hoa và chuyện mở đất phương Nam.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1L-OPlyxc3dyMu6SymjnizKlmW4ds_70G",
        "format": "PDF",
        "bytes": 5526620,
        "pages": 44
      }
    ],
    "cover": {
      "src": "/books/guong-su-nam.webp",
      "width": 480,
      "height": 679
    }
  },
  {
    "slug": "hung-dao-vuong",
    "group": "lich-su",
    "title": "Hưng Đạo Vương, Bình Định Vương",
    "author": "Lê Văn Hòe",
    "printing": "Quốc Học Thư Xã, 1952",
    "language": "Tiếng Việt",
    "intro": "Bài nghiên cứu, phê bình về sự nghiệp của Hưng Đạo Vương Trần Quốc Tuấn và Bình Định Vương Lê Lợi, trong tủ sách Những bài học lịch sử.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1L5oSta3I27BHsoWcj_MUBn92OcjbF_fz",
        "format": "PDF",
        "bytes": 1317361,
        "pages": 52
      }
    ],
    "cover": {
      "src": "/books/hung-dao-vuong.webp",
      "width": 480,
      "height": 679
    }
  },
  {
    "slug": "nghi-le-tang-ma",
    "group": "lich-su",
    "title": "Le Rituel funéraire des Annamites (Nghi lễ tang ma của người Việt)",
    "author": "Gustave Dumoutier",
    "printing": "Hà Nội, 1902",
    "language": "Tiếng Pháp",
    "intro": "Công trình dân tộc học về nghi lễ tang ma của người Việt đầu thế kỷ XX, có nhiều hình vẽ minh họa.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1YK7zM0qD9amKjzR5qyheMbzEJ2q_pM1W",
        "format": "PDF",
        "bytes": 17122632,
        "pages": 344
      }
    ],
    "cover": {
      "src": "/books/nghi-le-tang-ma.webp",
      "width": 480,
      "height": 679
    }
  },
  {
    "slug": "phu-nu-viet-nam",
    "group": "lich-su",
    "title": "Lược Luận Về Phụ Nữ Việt Nam",
    "author": "Lê Văn Hòe",
    "printing": "Quốc Học Thư Xã, 1944",
    "language": "Tiếng Việt",
    "intro": "Lê Văn Hòe bàn về người phụ nữ Việt Nam qua những chuyện xưa tích cũ.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1nndJFWeMgddysYZ-TiXCy5hAE9yQUOoQ",
        "format": "PDF",
        "bytes": 3898951,
        "pages": 57
      }
    ],
    "cover": {
      "src": "/books/phu-nu-viet-nam.webp",
      "width": 439,
      "height": 720
    }
  },
  {
    "slug": "luong-ngoc-quyen",
    "group": "lich-su",
    "title": "Lương Ngọc Quyến và cuộc khởi nghĩa Thái Nguyên 1917",
    "author": "Đào Trinh Nhất",
    "printing": "Tân Việt",
    "language": "Tiếng Việt",
    "intro": "Chuyện chí sĩ Lương Ngọc Quyến và cuộc khởi nghĩa Thái Nguyên năm 1917.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1Anx6vFF4YCIcjK_R_j0QUoMjUCtqfjr4",
        "format": "PDF",
        "bytes": 8178113,
        "pages": 57
      }
    ],
    "cover": {
      "src": "/books/luong-ngoc-quyen.webp",
      "width": 480,
      "height": 686
    }
  },
  {
    "slug": "nguyen-trai",
    "group": "lich-su",
    "title": "Nguyễn Trãi, anh hùng dân tộc",
    "author": "Trúc Khê Ngô Văn Triện",
    "printing": "",
    "language": "Tiếng Việt",
    "intro": "Chuyện Nguyễn Trãi, từ thân phụ Nguyễn Phi Khanh đến khi theo Lê Lợi dựng nghiệp ở Lam Sơn.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1zEzWXFQmmrcCC4dnMgv-rtax-XKOahU6",
        "format": "PDF",
        "bytes": 585195,
        "pages": 30
      }
    ],
    "cover": {
      "src": "/books/nguyen-trai.webp",
      "width": 480,
      "height": 622
    }
  },
  {
    "slug": "phan-dinh-phung",
    "group": "lich-su",
    "title": "Phan Đình Phùng",
    "author": "Đào Trinh Nhất",
    "printing": "Nhà in Mai Lĩnh",
    "language": "Tiếng Việt",
    "intro": "Tiểu sử cụ Phan Đình Phùng, nhà nho đỗ Đình nguyên rồi lãnh đạo cuộc kháng Pháp cuối thế kỷ XIX.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1DyoBTwIG0lfuJB6K7dI62KVck85v92D4",
        "format": "PDF",
        "bytes": 15553946,
        "pages": 295
      }
    ],
    "cover": {
      "src": "/books/phan-dinh-phung.webp",
      "width": 480,
      "height": 679
    }
  },
  {
    "slug": "khach-tru-nam-ky",
    "group": "lich-su",
    "title": "Thế lực khách trú và vấn đề di dân vào Nam Kỳ",
    "author": "Đào Trinh Nhất",
    "printing": "Hà Nội, 1924",
    "language": "Tiếng Việt",
    "intro": "Khảo cứu về thế lực kinh tế của người Hoa ở Nam Kỳ và việc đưa dân Bắc, Trung vào Nam lập nghiệp.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1zn0Qg0SC7f8H5BGnf80GRCql9BKv9MzV",
        "format": "PDF",
        "bytes": 15645191,
        "pages": 156
      }
    ],
    "cover": {
      "src": "/books/khach-tru-nam-ky.webp",
      "width": 480,
      "height": 699
    }
  },
  {
    "slug": "thi-tu-tung-thoai",
    "group": "lich-su",
    "title": "Thi Tù Tùng Thoại",
    "author": "Huỳnh Thúc Kháng",
    "printing": "",
    "language": "Tiếng Việt",
    "intro": "Huỳnh Thúc Kháng ghi lại chuyện đời tù và thơ văn trong tù giai đoạn 1908 – 1921.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1lRuB4w-o2EzbJk-wnXW_h0kTJRRqlC7a",
        "format": "PDF",
        "bytes": 38131226,
        "pages": 152
      }
    ],
    "cover": {
      "src": "/books/thi-tu-tung-thoai.webp",
      "width": 240,
      "height": 367
    }
  },
  {
    "slug": "vua-le-chieu-thong",
    "group": "lich-su",
    "title": "Vua Lê Chiêu Thống",
    "author": "Phan Trần Chúc",
    "printing": "Tái bản 1952",
    "language": "Tiếng Việt",
    "intro": "Chuyện lịch sử về vị vua cuối cùng của nhà Lê, còn có tên Bánh xe khứ quốc.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1XOfY2Fg2KxL_CXWz1cThz8vMcz1k2V8x",
        "format": "PDF",
        "bytes": 2483398,
        "pages": 188
      }
    ],
    "cover": {
      "src": "/books/vua-le-chieu-thong.webp",
      "width": 463,
      "height": 720
    }
  },
  {
    "slug": "chua-tau-kim-quy",
    "group": "van-hoc",
    "title": "Chúa Tàu Kim Quy",
    "author": "Hồ Biểu Chánh",
    "printing": "Viết năm 1922, bản đánh máy",
    "language": "Tiếng Việt",
    "intro": "Tiểu thuyết Nam Bộ: chàng Thủ Nghĩa mang oan phải tù đày, rồi trở về đền ơn trả oán.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1d0oDuEBkbGyf_nUNxSbnDjNKkJjsKmE8",
        "format": "PDF",
        "bytes": 575595,
        "pages": 99
      }
    ]
  },
  {
    "slug": "dai-nam-quac-am-tu-vi",
    "group": "van-hoc",
    "title": "Đại Nam Quấc Âm Tự Vị",
    "author": "Huỳnh Tịnh Của",
    "printing": "Sài Gòn, 1895",
    "language": "Tiếng Việt",
    "intro": "Bộ tự điển tiếng Việt của Huình Tịnh Paulus Của, có chữ Nôm và chữ Hán, giải nghĩa kèm thành ngữ, tục ngữ.",
    "files": [
      {
        "label": "Trọn bộ",
        "driveId": "18AuYF-rgPlycElXrTSk-Yw_fuZiCLqqg",
        "format": "PDF",
        "bytes": 152675030,
        "pages": 1211
      }
    ],
    "cover": {
      "src": "/books/dai-nam-quac-am-tu-vi.webp",
      "width": 480,
      "height": 720
    }
  },
  {
    "slug": "duong-thi",
    "group": "van-hoc",
    "title": "Đường Thi",
    "author": "Trần Trọng Kim",
    "printing": "Tân Việt",
    "language": "Tiếng Việt",
    "intro": "Trần Trọng Kim tuyển và dịch thơ Đường ra thơ Việt, kèm tiểu sử vắn tắt các nhà thơ.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1G3IbtWSo4zyE3VrdLIW7X71dE6Q_t_GY",
        "format": "PDF",
        "bytes": 18025522,
        "pages": 206
      }
    ],
    "cover": {
      "src": "/books/duong-thi.webp",
      "width": 480,
      "height": 679
    }
  },
  {
    "slug": "noi-long-do-chieu",
    "group": "van-hoc",
    "title": "Nỗi Lòng Đồ Chiểu",
    "author": "Phan Văn Hùm",
    "printing": "In lần thứ hai, Tân Việt",
    "language": "Tiếng Việt",
    "intro": "Cuộc đời và tâm sự yêu nước của nhà thơ Nguyễn Đình Chiểu.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1v5fFmxyY176yTXiNkTqcMD7C5QCe76p6",
        "format": "PDF",
        "bytes": 8751057,
        "pages": 110
      }
    ],
    "cover": {
      "src": "/books/noi-long-do-chieu.webp",
      "width": 455,
      "height": 720
    }
  },
  {
    "slug": "quang-tap-viem-van",
    "group": "van-hoc",
    "title": "Quảng Tập Viêm Văn",
    "author": "Edmond Nordemann",
    "printing": "Hà Nội, 1898",
    "language": "Tiếng Việt, tiếng Pháp",
    "intro": "Tuyển tập văn Việt cho người học tiếng, gồm các tích truyện hay nói và giấy tờ việc quan, kèm bảng giải nghĩa từ.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1ZYvRYuaa0XwoY0ngQOCc8QXZkBGUir0S",
        "format": "PDF",
        "bytes": 20825782,
        "pages": 180
      }
    ],
    "cover": {
      "src": "/books/quang-tap-viem-van.webp",
      "width": 478,
      "height": 720
    }
  },
  {
    "slug": "quoc-van-trich-diem",
    "group": "van-hoc",
    "title": "Quốc Văn Trích Diễm",
    "author": "Dương Quảng Hàm",
    "printing": "In lần thứ hai, 1925",
    "language": "Tiếng Việt",
    "intro": "Tuyển các bài văn quốc ngữ để học sinh bậc cao đẳng tiểu học tập đọc và học làm văn.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1a70luqE34INNBQEiMr0KeUzYQhNMa5w9",
        "format": "PDF",
        "bytes": 31555863,
        "pages": 249
      }
    ],
    "cover": {
      "src": "/books/quoc-van-trich-diem.webp",
      "width": 468,
      "height": 720
    }
  },
  {
    "slug": "than-tien",
    "group": "van-hoc",
    "title": "Thần Tiền",
    "author": "Tản Đà",
    "printing": "Hương Sơn xuất bản",
    "language": "Tiếng Việt",
    "intro": "Tản Đà mượn những lời đối đáp để bàn chuyện đồng tiền và cảnh giàu nghèo ở đời.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1ire1SbFaLNoaXrwwIu-O-PXJn6Ml_ur4",
        "format": "PDF",
        "bytes": 7823339,
        "pages": 108
      }
    ],
    "cover": {
      "src": "/books/than-tien.webp",
      "width": 435,
      "height": 720
    }
  },
  {
    "slug": "tuc-ngu-luoc-giai",
    "group": "van-hoc",
    "title": "Tục Ngữ Lược Giải",
    "author": "Lê Văn Hòe",
    "printing": "Quốc Học Thư Xã, 1952",
    "language": "Tiếng Việt",
    "intro": "Giải nghĩa tục ngữ Việt Nam, xếp theo vần chữ cái, gộp ba tập.",
    "files": [
      {
        "label": "Tập 1 – 3",
        "driveId": "1Xt_pZXzmgaDhWBkl5N25I-KAEXs658UT",
        "format": "PDF",
        "bytes": 8817651,
        "pages": 357
      }
    ],
    "cover": {
      "src": "/books/tuc-ngu-luoc-giai.webp",
      "width": 462,
      "height": 720
    }
  },
  {
    "slug": "viet-nam-van-pham",
    "group": "van-hoc",
    "title": "Việt Nam Văn Phạm",
    "author": "Trần Trọng Kim, Phạm Duy Khiêm, Bùi Kỷ",
    "printing": "In lần thứ hai, Lê Thăng",
    "language": "Tiếng Việt",
    "intro": "Sách văn phạm tiếng Việt, giải thích chữ viết, âm, các loại từ và phép đặt câu.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1QV7JfTM6yUHmtDopO3LhUs4hwUBRIjsU",
        "format": "PDF",
        "bytes": 26857048,
        "pages": 246
      }
    ],
    "cover": {
      "src": "/books/viet-nam-van-pham.webp",
      "width": 450,
      "height": 720
    }
  },
  {
    "slug": "phat-giao-triet-hoc",
    "group": "phat-giao",
    "title": "Phật Giáo Triết Học",
    "author": "Phan Văn Hùm",
    "printing": "In lần thứ hai, Tân Việt",
    "language": "Tiếng Việt",
    "intro": "Phan Văn Hùm trình bày tư tưởng triết học của Phật giáo, bắt đầu từ bối cảnh tư tưởng Ấn Độ cổ.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1dW4t8Ag-FH5fZ0zOKyp-Ta6Jhe2NQquL",
        "format": "PDF",
        "bytes": 12321203,
        "pages": 146
      }
    ],
    "cover": {
      "src": "/books/phat-giao-triet-hoc.webp",
      "width": 449,
      "height": 720
    }
  },
  {
    "slug": "phat-luc",
    "group": "phat-giao",
    "title": "Phật Lục",
    "author": "Trần Trọng Kim",
    "printing": "Lê Thăng, in lần thứ hai",
    "language": "Tiếng Việt",
    "intro": "Sách kể sự tích đức Phật và giải ý nghĩa việc thờ phụng, các vị Phật, Bồ Tát thường thấy trong chùa.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1c-HRGY6TgDOFl_7dICsQV9v0kx8AXS9H",
        "format": "PDF",
        "bytes": 45057664,
        "pages": 117
      }
    ],
    "cover": {
      "src": "/books/phat-luc.webp",
      "width": 452,
      "height": 720
    }
  },
  {
    "slug": "viet-nam-phat-giao-su-luoc",
    "group": "phat-giao",
    "title": "Việt Nam Phật Giáo Sử Lược",
    "author": "Thích Mật Thể",
    "printing": "Minh Đức tái bản",
    "language": "Tiếng Việt",
    "intro": "Lược sử Phật giáo Việt Nam, từ khi đạo Phật truyền vào đến thời của tác giả.",
    "files": [
      {
        "label": "Trọn cuốn",
        "driveId": "1rDyieuRfH6KLEJJc7XmS0oQEelyScNMQ",
        "format": "PDF",
        "bytes": 19848901,
        "pages": 247
      }
    ],
    "cover": {
      "src": "/books/viet-nam-phat-giao-su-luoc.webp",
      "width": 478,
      "height": 720
    }
  }
];
