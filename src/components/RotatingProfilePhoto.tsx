
import { useEffect, useState } from "react";
import "./RotatingProfilePhoto.css";

const photos = [
  {
    src: "/images/profile/brahmana-purba.webp",
    alt: "Brahmana Purba, Information Technology student at Institut Teknologi Del, in a formal portrait.",
  },
  {
    src: "/images/profile/brahmana-purba-volcano.webp",
    alt: "Brahmana Purba at a volcanic mountain crater during a hiking activity.",
  },
  {
    src: "/images/profile/brahmana-purba-presentation.webp",
    alt: "Brahmana Purba presenting a mobile-based Batak Toba educational game project at Institut Teknologi Del.",
  },
  {
    src: "/images/profile/brahmana-purba-mt-sibayak.webp",
    alt: "Brahmana Purba at the summit of Mount Sibayak holding a summit sign.",
  },
  {
    src: "/images/profile/brahmana-purba-campus-activity.webp",
    alt: "Brahmana Purba participating in a campus activity while holding an Institut Teknologi Del flag.",
  },
];

function shufflePhotos() {
  const result = photos.map((_, index) => index);

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

export default function RotatingProfilePhoto() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let order = shufflePhotos();
    let position = 0;

    setActiveIndex(order[position]);

    const interval = window.setInterval(() => {
      position++;

      // Semua foto ditampilkan sekali
      // sebelum urutan acak berikutnya dimulai.
      if (position >= order.length) {
        order = shufflePhotos();
        position = 0;
      }

      setActiveIndex(order[position]);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className="rotating-profile-photo"
      aria-label="Photos of Brahmana Purba"
    >
      {photos.map((photo, index) => (
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          className={`rotating-profile-photo__image ${
            index === activeIndex ? "is-active" : ""
          }`}
          aria-hidden={index !== activeIndex}
          loading="eager"
          decoding="async"
        />
      ))}
    </div>
  );
}
