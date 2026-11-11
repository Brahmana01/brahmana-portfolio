import { useEffect, useState } from "react";
import "./RotatingProfilePhoto.css";

export type ProfilePhoto = {
  src: string;
  alt: string;
};

type RotatingProfilePhotoProps = {
  photos: ProfilePhoto[];
  intervalMs?: number;
};

type RotationState = {
  order: number[];
  position: number;
};

function shuffleArray(items: number[]): number[] {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function createInitialOrder(length: number): number[] {
  if (length <= 1) return [0];

  return [
    0,
    ...shuffleArray(
      Array.from({ length: length - 1 }, (_, index) => index + 1)
    ),
  ];
}

function createNextOrder(
  length: number,
  previousIndex: number
): number[] {
  const order = shuffleArray(
    Array.from({ length }, (_, index) => index)
  );

  // Hindari foto terakhir muncul kembali secara langsung.
  if (order.length > 1 && order[0] === previousIndex) {
    [order[0], order[1]] = [order[1], order[0]];
  }

  return order;
}

export default function RotatingProfilePhoto({
  photos,
  intervalMs = 5000,
}: RotatingProfilePhotoProps) {
  const [rotation, setRotation] = useState<RotationState>(() => ({
    order: createInitialOrder(photos.length),
    position: 0,
  }));

  useEffect(() => {
    if (photos.length <= 1) return;

    const interval = window.setInterval(() => {
      setRotation((current) => {
        if (current.position < current.order.length - 1) {
          return {
            ...current,
            position: current.position + 1,
          };
        }

        const previousIndex =
          current.order[current.position];

        return {
          order: createNextOrder(photos.length, previousIndex),
          position: 0,
        };
      });
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [photos.length, intervalMs]);

  // Preload seluruh foto agar pergantian lebih halus.
  useEffect(() => {
    photos.forEach((photo) => {
      const image = new Image();
      image.src = photo.src;
    });
  }, [photos]);

  if (photos.length === 0) return null;

  const activeIndex = rotation.order[rotation.position];
  const activePhoto = photos[activeIndex];

  if (!activePhoto) return null;

  return (
    <img
      key={activePhoto.src}
      src={activePhoto.src}
      alt={activePhoto.alt}
      className="rotating-profile-photo"
      loading="eager"
      decoding="async"
      draggable={false}
    />
  );
}
