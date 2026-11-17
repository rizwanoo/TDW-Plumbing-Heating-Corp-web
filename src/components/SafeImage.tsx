import React, {useState} from 'react';
import {Wrench} from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: 'eager' | 'lazy';
}

export function SafeImage({
  src,
  alt,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  loading = 'lazy',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#172B4D] via-[#174EA6] to-[#2678E8] text-[#FFFDF7] p-8 text-center ${className}`}
      >
        <Wrench className="w-8 h-8 text-[#F4B942] mb-3" strokeWidth={1.75} />
        <p className="text-sm font-medium max-w-xs text-[#FFFDF7]/90">{alt}</p>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-[#172B4D]/5 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={imgClassName}
      />
    </div>
  );
}
