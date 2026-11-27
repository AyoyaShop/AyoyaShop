import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { TIKTOK_LINK, TIKTOK_PROFILE } from '../data';

interface Props {
  className?: string;
  label?: string;
  children: ReactNode;
}

// TIKTOK_LINK only opens inside the TikTok phone app, so mouse users get a code to scan instead.
// public/qr/tiktok-shop.svg encodes TIKTOK_LINK: regenerate it whenever that link changes.
export default function TikTokShopLink({ className, label, children }: Props) {
  const [open, setOpen] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const link = linkRef.current;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      link?.focus();
    };
  }, [open]);

  const handleClick = (event: MouseEvent) => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      event.preventDefault();
      setOpen(true);
    }
  };

  return (
    <>
      <a
        ref={linkRef}
        href={TIKTOK_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={className}
        onClick={handleClick}
      >
        {children}
      </a>
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="tiktok-qr-title"
              className="relative w-full max-w-sm bg-white text-ayoya-brown rounded-3xl p-8 text-center shadow-2xl"
              onClick={event => event.stopPropagation()}
            >
              <button
                ref={closeRef}
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center hover:bg-ayoya-brown/10 transition-colors"
                aria-label="Đóng"
              >
                <X size={20} />
              </button>
              <p id="tiktok-qr-title" className="text-2xl font-serif font-bold mt-4">
                Gian hàng TikTok Shop
              </p>
              <img
                src="/qr/tiktok-shop.svg"
                alt="Mã QR mở gian hàng Ayoya trên TikTok Shop"
                width={224}
                height={224}
                className="mx-auto my-5"
              />
              <p className="text-sm leading-relaxed">
                Mở camera điện thoại rồi quét mã để xem gian hàng và đánh giá trên ứng dụng TikTok.
              </p>
              <a
                href={TIKTOK_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-ayoya-brick underline underline-offset-4"
              >
                Xem kênh TikTok @ayoyashop trên máy tính
              </a>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
