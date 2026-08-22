import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { getProductById } from '../data';
import { calcOriginalPrice } from '../lib/pricing';

function formatPrice(price: number): string {
  return `${price.toLocaleString('vi-VN')}đ`;
}

const COMPARISON_IDS = ['thao-moc-xong-nha', 'tram-huong-xong-nha', 'la-xong-moc-an'];

const PURPOSE: Record<string, string> = {
  'thao-moc-xong-nha': 'Xông thanh tẩy không gian nhà ở',
  'tram-huong-xong-nha': 'Xông thanh tẩy không gian, lấy trầm hương làm chủ đạo',
  'la-xong-moc-an': 'Xông và tắm chăm sóc cơ thể'
};

export default function SimilarProductsComparison() {
  const products = COMPARISON_IDS.map(id => getProductById(id)).filter(Boolean) as NonNullable<ReturnType<typeof getProductById>>[];

  if (products.length < 3) return null;

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-ayoya-brown mb-4 underline underline-offset-8 decoration-ayoya-amber/30">
            Phân biệt <span className="italic">3 dòng thảo dược xông</span>
          </h2>
          <p className="max-w-2xl mx-auto text-ayoya-brown/60 tracking-wider text-[10px] md:text-sm uppercase">
            Chọn đúng sản phẩm cho đúng nhu cầu
          </p>
        </div>

        <div className="overflow-x-auto">
          <motion.table
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full min-w-[640px] bg-ayoya-cream/20 rounded-[32px] border border-ayoya-brown/10 overflow-hidden"
          >
            <thead>
              <tr className="border-b border-ayoya-brown/10">
                <th className="p-6 text-left font-serif text-lg italic text-ayoya-brown/40 w-40">Tiêu chí</th>
                {products.map(p => (
                  <th key={p.id} className="p-6 text-left">
                    <Link to={`/san-pham/${p.id}`} className="font-serif text-lg text-ayoya-brown hover:text-ayoya-brick transition-colors">
                      {p.title}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-ayoya-brown/5">
                <td className="p-6 font-medium text-ayoya-brown/70">Công dụng chính</td>
                {products.map(p => (
                  <td key={p.id} className="p-6 text-sm text-ayoya-brown/70">
                    {PURPOSE[p.id]}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-ayoya-brown/5">
                <td className="p-6 font-medium text-ayoya-brown/70">Giá khởi điểm</td>
                {products.map(p => (
                  <td key={p.id} className="p-6 text-sm">
                    <span className="block text-xs text-ayoya-brown/40 line-through">{formatPrice(calcOriginalPrice(p.price))}</span>
                    <span className="font-bold text-ayoya-brown">{formatPrice(p.price)}</span>{' '}
                    <span className="font-normal text-ayoya-brown/50">/ {p.priceUnit}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-6 font-medium text-ayoya-brown/70">Xem chi tiết</td>
                {products.map(p => (
                  <td key={p.id} className="p-6">
                    <Link
                      to={`/san-pham/${p.id}`}
                      className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-ayoya-brown text-ayoya-brown hover:bg-ayoya-brown hover:text-white transition-all"
                    >
                      Xem sản phẩm
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </motion.table>
        </div>
      </div>
    </section>
  );
}
