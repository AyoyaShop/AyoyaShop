import { useState } from 'react';
import { PRODUCT_GALLERIES } from '../data';
import { thumb } from '../lib/thumb';

interface Props {
  productId: string;
  image: string;
  alt: string;
}

// Product card photo. With a mouse, hovering fades to the product's second photo,
// which is only downloaded once the pointer first arrives.
export default function CardPhoto({ productId, image, alt }: Props) {
  const [seen, setSeen] = useState(false);
  const [over, setOver] = useState(false);
  const [ready, setReady] = useState(false);
  const second = PRODUCT_GALLERIES[productId]?.[1];

  return (
    <span
      className="relative block w-full h-full overflow-hidden"
      onPointerEnter={event => {
        if (event.pointerType !== 'mouse') return;
        setSeen(true);
        setOver(true);
      }}
      onPointerLeave={() => setOver(false)}
    >
      <img
        loading="lazy"
        src={thumb(image)}
        alt={alt}
        referrerPolicy="no-referrer"
        className={`w-full h-full object-cover transition-transform duration-700 ${over ? 'scale-105' : ''}`}
      />
      {second && seen && (
        <img
          src={thumb(second)}
          alt=""
          referrerPolicy="no-referrer"
          onLoad={() => setReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${over && ready ? 'opacity-100 scale-105' : 'opacity-0'}`}
        />
      )}
    </span>
  );
}
