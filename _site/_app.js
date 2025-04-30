// instant page
import 'instant.page';

// icons
import 'iconify-icon';

// twind
import { install, injectGlobal } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';
import presetLineclamp from '@twind/preset-line-clamp';
import presetTypography from '@twind/preset-typography';

install({
  presets: [presetAutoprefix(), presetTailwind(), presetLineclamp(), presetTypography({
    extend: {
      DEFAULT: {
        css: {
          '.prose': {
            '--tw-prose-body': 'currentColor',
            '--tw-prose-headings': 'theme(colors.zinc[500])',
            '--tw-prose-lead': '',
            '--tw-prose-links': 'theme(colors.pri[400])',
            '--tw-prose-bold': 'theme(colors.white)',
            '--tw-prose-counters': 'theme(colors.zinc[500])',
            '--tw-prose-bullets': 'theme(colors.zinc[500])',
            '--tw-prose-hr': 'theme(colors.zinc[800])',
            '--tw-prose-quotes': 'currentColor',
            '--tw-prose-quote-borders': 'theme(colors.zinc[600])',
            '--tw-prose-captions': '',
            '--tw-prose-code': '',
            '--tw-prose-pre-code': '',
            '--tw-prose-pre-bg': '',
            '--tw-prose-th-borders': 'theme(colors.zinc[600])',
            '--tw-prose-td-borders': 'theme(colors.zinc[600])',
          }
        }
      }
    }
  })],
  darkMode: 'class',
  hash: false,
  // tailwind config
  theme: {
    extend: {
      colors: ({ theme }) => ({
        pri: theme('colors.emerald'),
        sec: theme('colors.lime'),
        slate: { 950: '#020617' },
        gray: { 950: '#030712' },
        zinc: { 950: '#09090B' },
        neutral: { 950: '#0A0A0A' },
        stone: { 950: '#0C0A09' },
        red: { 950: '#450A0A' },
        orange: { 950: '#431407' },
        amber: { 950: '#451A03' },
        yellow: { 950: '#422006' },
        lime: { 950: '#1A2E05' },
        green: { 950: '#052E16' },
        emerald: { 950: '#022C22' },
        teal: { 950: '#042F2E' },
        cyan: { 950: '#083344' },
        sky: { 950: '#082F49' },
        blue: { 950: '#172554' },
        indigo: { 950: '#1E1B4B' },
        violet: { 950: '#2E1065' },
        purple: { 950: '#3B0764' },
        fuchsia: { 950: '#4A044E' },
        pink: { 950: '#500724' },
        rose: { 950: '#4C0519' },
      }),
      fontFamily: ({ theme }) => ({
        goblin: ['Pirata One', ...theme('fontFamily.sans')],
      }),
      keyframes: {
        'gradient': {
          'to': { 'background-position': '-200% center' },
        }
      },
      animation: {
        'gradient': 'gradient 4s linear infinite',
      },
    },
  },
  // custom rules
  rules: [
    ['text-wrap-(unset|wrap|nowrap|balance|pretty)', 'textWrap'],
    ['bg-noise', {'background-image': 'url(/_assets/img/bg-chalk.png), url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 4\' width=\'4\' height=\'4\'><rect x=\'0\' y=\'0\' width=\'2\' height=\'2\' fill=\'rgba(0,0,0,1)\'></rect></svg>")'}],
    ['container-', ({ $$ }) => `mx-auto w-full max-w-${$$}`],
  ],
});

injectGlobal`
  /* layers: defaults, base, components, shortcuts, utilities, overrides */
  @layer base {
    /* .some-selector,#some-selector { @apply text-wrap-balance; } */
    [x-cloak] { @apply hidden; }
    .btn { @apply
      text-(sec-500 2xl)
      leading-none
      font-goblin
      inline-flex
      items-center
      justify-center
      gap-2
      relative
      overflow-hidden
      rounded-full
      ring-(1 inset white/25)
      shadow-lg
      before:(
        content-['']
        w-full
        aspect-square
        bg-[linear-gradient(90deg,_theme(colors.sec.900/0)_0%,_theme(colors.sec.900)_35%,_theme(colors.sec.200)_50%,_theme(colors.sec.900)_65%,_theme(colors.sec.900/0)_100%)]
        absolute
        z-[-1]
        transition
        animate-[spin_3s_linear_infinite]
      )
      after:(
        content-['']
        bg-zinc-900
        bg-[length:100%_0%]
        bg-gradient-to-b
        bg-no-repeat
        from-white/30
        via-transparent
        to-transparent
        absolute
        inset-px
        z-[-1]
        rounded-[inherit]
        transition-all
      )
      transition
      hover:(text-sec-100 after:(shadow-[inset_0_1px_0_rgb(255_255_255_/_.75)] bg-[length:100%_100%]));
    }
    .dialog {
      @apply
      m-0
      p-0
      w-full
      max-w-none
      h-full
      max-h-none
      min-h-screen
      bg-transparent
      text-[inherit]
      invisible
      grid
      items-end
      justify-items-center
      fixed
      inset-0
      pointer-events-none
      overflow-y-hidden
      [overscroll-behavior:contain]
      opacity-0
      motion-safe:(transition-all)
      [&[open]]:(pointer-events-auto visible opacity-100)
      [&[open]_.dialog-box]:(translate-y-0 scale-100)
      [&::backdrop]:(bg-black/70 backdrop-blur-sm)
      md:items-center;
    }
    .dialog-box { @apply my-6 p-6 w-11/12 max-w-lg max-h-[calc(100vh-5em)] bg-zinc-800 col-start-1 row-start-1 overflow-y-auto [overscroll-behavior:contain] translate-y-3 rounded-xl shadow-2xl scale-90 motion-safe:(transition-all); }
    .dialog-title { @apply mb-6 text-(white 3xl) leading-none font-goblin flex items-end gap-4 [&>small]:(text-base leading-tight opacity-70); }
    .dialog-backdrop { @apply text-transparent grid col-start-1 row-start-1 self-stretch justify-self-stretch fixed inset-0 -z-[1]; }
    .link { @apply text-sec-600 transition hover:(text-sec-300 underline); }
    .divider { @apply flex items-center gap-6 [&:before,&:after]:(content-[''] h-px bg-[linear-gradient(90deg,_theme(colors.sec.900)_0%,_theme(colors.sec.900)_35%,_theme(colors.sec.200)_50%,_theme(colors.sec.900)_65%,_theme(colors.sec.900)_100%)] grow opacity-50); }
    .tippy-box[data-state="hidden"] { @apply opacity-0 translate-y-1; }
    [data-tippy-root] { @apply max-w-[calc(100vw-10px)]; }
    .tippy-box { @apply bg-black text-(white/80 xs) font-semibold relative outline-0 opacity-100 rounded translate-y-0 motion-safe:(transition duration-75); }
    .tippy-box[data-placement^="top"] > .tippy-arrow { @apply bottom-0 before:(bottom-[-7px] left-0 border-(t-[8px] r-[8px] b-0 l-[8px] t-[initial])) origin-top; }
    .tippy-box[data-placement^="bottom"] > .tippy-arrow { @apply top-0 before:(top-[-7px] left-0 border-(t-0 r-[8px] b-[8px] l-[8px] b-[initial])) origin-bottom; }
    .tippy-box[data-placement^="left"] > .tippy-arrow {@apply right-0 before:(right-[-7px] border-(t-[8px] r-0 b-[8px] l-[8px] l-[initial])) origin-left; }
    .tippy-box[data-placement^="right"] > .tippy-arrow { @apply left-0 before:(left-[-7px] border-(t-[8px] r-[8px] b-[8px] l-0 r-[initial]) origin-right); }
    .tippy-arrow { @apply w-4 h-4 text-black absolute before:(content-[''] absolute border-(transparent solid)); }
    .tippy-content { @apply py-1.5 px-3 relative z-[1]; }
  }
`

// alpinejs
import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';
import tippy from 'tippy.js';

document.addEventListener('alpine:init', () => {
  // tooltip
  // magic: $tooltip
  Alpine.magic('tooltip', el => message => {
    let instance = tippy(el, { content: message, trigger: 'manual' })
    instance.show()
    setTimeout(() => {
      instance.hide()
      setTimeout(() => instance.destroy(), 150)
    }, 2000)
  });
  // directive: x-tooltip
  Alpine.directive('tooltip', (el, { expression }, { evaluate }) => {
    tippy(el, { content: evaluate(expression) })
  });
});

Alpine.plugin([focus]);
window.Alpine = Alpine;
Alpine.start();
