import { useTheme } from '../theme'
import knobLight from '../assets/icons/toggle-knob-light.svg'
import knobDark from '../assets/icons/toggle-knob-dark.svg'
import sun from '../assets/icons/sun.svg'
import moon from '../assets/icons/moon.svg'

/**
 * Figma "light/dark toggle" (51:43): a 72×38 pill. Light mode = dark track with a
 * cream knob + sun on the right; dark mode = cream track with a dark knob + moon on
 * the left. The knob slides between the two, matching the prototype's transition.
 */
export function ThemeToggle({ vertical = false }: { vertical?: boolean }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  const pill = (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="keep-transition group relative block h-[38px] w-[72px] shrink-0 cursor-pointer rounded-[18.5px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-light"
    >
      {/* track */}
      <span
        aria-hidden
        className={`keep-transition absolute inset-0 rounded-[18.5px] transition-colors duration-500 ${isDark ? 'bg-[#faf9f6]' : 'bg-[#27201c]'}`}
      />
      {/* knob: left 4px in dark mode, left 38px in light mode */}
      <span
        aria-hidden
        className={`keep-transition absolute top-1 left-1 size-[30px] transition-transform duration-500 ease-[cubic-bezier(.65,0,.35,1)] group-hover:scale-105 ${isDark ? 'translate-x-0' : 'translate-x-[34px]'}`}
      >
        <img src={knobLight} alt="" width={30} height={30} className={`keep-transition absolute inset-0 transition-opacity duration-500 ${isDark ? 'opacity-0' : 'opacity-100'}`} />
        <img src={knobDark} alt="" width={30} height={30} className={`keep-transition absolute inset-0 transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`} />
        <img
          src={sun}
          alt=""
          width={24}
          height={24}
          className={`keep-transition absolute top-[3px] left-[3px] transition-[opacity,rotate] duration-500 ${isDark ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
        />
        {/* Figma rotates the moon 90° to cancel the vertical navbar's -90°; upright when horizontal */}
        <img
          src={moon}
          alt=""
          width={24}
          height={24}
          className={`keep-transition absolute top-[3px] left-[3px] transition-[opacity,rotate] duration-500 ${isDark ? `${vertical ? 'rotate-90' : 'rotate-0'} opacity-100` : `${vertical ? 'rotate-0' : '-rotate-90'} opacity-0`}`}
        />
      </span>
    </button>
  )

  if (!vertical) return pill
  // In the side navbar the toggle is rotated -90° so "light" (knob right) sits at the top.
  return (
    <div className="flex h-[72px] w-[38px] items-center justify-center">
      <div className="-rotate-90">{pill}</div>
    </div>
  )
}
