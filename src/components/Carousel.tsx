import { useRef, useState } from 'react'
import { MaskIcon } from './ui'
import slideMask from '../assets/icons/slide-mask.svg'
import arrowLeft from '../assets/icons/arrow-left.svg'
import arrowRight from '../assets/icons/arrow-right.svg'
import dot from '../assets/icons/dot.svg'
import dotActive from '../assets/icons/dot-active.svg'
import photo1 from '../assets/photos/photo1.jpg'
import photo2 from '../assets/photos/photo2.jpg'
import photo3 from '../assets/photos/photo3.jpg'
import photo4 from '../assets/photos/photo4.jpg'
import photo5 from '../assets/photos/photo5.jpg'
import photo6 from '../assets/photos/photo6.jpg'
import photo7 from '../assets/photos/photo7.jpg'
import photo8 from '../assets/photos/photo8.jpg'

const PHOTOS = [
  { src: photo1, caption: 'me! @ Ghana vs. Croatia FIFA World Cup Fan Festival (where we lost 1-2 💔)' },
  { src: photo2, caption: '🏞️🏞️🏞️' },
  { src: photo3, caption: 'gingerbread house building w friends' },
  { src: photo4, caption: 'sunrise @ OCMD' },
  { src: photo5, caption: 'sid rich’s orc raid @ rice university #srrdfa' },
  { src: photo6, caption: 'houston @ nite' },
  { src: photo7, caption: 'orioles game w my sisterss' },
  { src: photo8, caption: 'birds in accra, ghana' },
]

// Slot geometry from Figma "Carousel2" (145:5984), in px of the 876×404 "Slides Box".
const BOX_W = 876
const BOX_H = 404
const SLOTS: Record<number, { x: number; y: number; w: number; h: number; z: number; o: number }> = {
  [-2]: { x: 38, y: 80, w: 240, h: 244, z: 10, o: 1 },
  [-1]: { x: 102, y: 40, w: 320, h: 324, z: 20, o: 1 },
  0: { x: 238, y: 0, w: 400, h: 404, z: 30, o: 1 },
  1: { x: 454, y: 40, w: 320, h: 324, z: 20, o: 1 },
  2: { x: 598, y: 80, w: 240, h: 244, z: 10, o: 1 },
}
const HIDDEN = { x: 318, y: 80, w: 240, h: 244, z: 0, o: 0 }

const pct = (v: number, of: number) => `${(v / of) * 100}%`

/** About-page photo carousel: 8 photos, centred card + two on each side, arrows and dots. */
export function Carousel() {
  const [active, setActive] = useState(0)
  const n = PHOTOS.length
  const go = (i: number) => setActive(((i % n) + n) % n)
  const touchX = useRef<number | null>(null)

  return (
    <section aria-roledescription="carousel" aria-label="Photos" className="flex w-full flex-col items-center gap-[18px] md:px-16">
      <div
        className="relative aspect-[876/404] w-full max-w-[876px] select-none"
        style={{ maskImage: `url("${slideMask}")`, WebkitMaskImage: `url("${slideMask}")`, maskSize: '100% 100%', WebkitMaskSize: '100% 100%' }}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return
          const dx = e.changedTouches[0].clientX - touchX.current
          if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1))
          touchX.current = null
        }}
      >
        {PHOTOS.map((photo, i) => {
          const d = ((i - active + n + n / 2) % n) - n / 2 // -4..3
          const s = SLOTS[d] ?? HIDDEN
          const isCenter = d === 0
          return (
            <button
              key={photo.src}
              type="button"
              tabIndex={s.o && !isCenter ? 0 : -1}
              aria-hidden={!s.o}
              aria-label={isCenter ? photo.caption : `Show photo: ${photo.caption}`}
              onClick={() => go(i)}
              className={`absolute overflow-hidden rounded-[min(40px,4.6vw)] bg-white transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)] ${isCenter ? 'cursor-default' : 'cursor-pointer'}`}
              style={{ left: pct(s.x, BOX_W), top: pct(s.y, BOX_H), width: pct(s.w, BOX_W), height: pct(s.h, BOX_H), zIndex: s.z, opacity: s.o }}
            >
              <img src={photo.src} alt={photo.caption} draggable={false} className="pointer-events-none size-full object-cover" />
            </button>
          )
        })}
      </div>

      <div className="flex items-center justify-center gap-1 p-2 text-[#999]">
        <button type="button" onClick={() => go(active - 1)} aria-label="Previous photo" className="cursor-pointer p-2 transition-transform hover:-translate-x-0.5">
          <MaskIcon src={arrowLeft} size={24} />
        </button>
        <div className="flex items-center gap-[7px] p-2">
          {PHOTOS.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              aria-label={`Go to photo ${i + 1}`}
              aria-current={i === active}
              onClick={() => go(i)}
              className="cursor-pointer rounded-full transition-transform duration-200 hover:scale-125"
            >
              {i === active ? <img src={dotActive} alt="" width={12} height={12} className="block" /> : <img src={dot} alt="" width={8} height={8} className="block" />}
            </button>
          ))}
        </div>
        <button type="button" onClick={() => go(active + 1)} aria-label="Next photo" className="cursor-pointer p-2 transition-transform hover:translate-x-0.5">
          <MaskIcon src={arrowRight} size={24} />
        </button>
      </div>

      <p aria-live="polite" className="min-h-[15px] max-w-[428px] text-center font-caption text-[12px] text-mauve">
        {PHOTOS[active].caption}
      </p>
    </section>
  )
}
