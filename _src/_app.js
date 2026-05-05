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
            '--tw-prose-headings': 'theme(colors.pri[200])',
            '--tw-prose-lead': '',
            '--tw-prose-links': 'theme(colors.sec[400])',
            '--tw-prose-bold': 'theme(colors.white)',
            '--tw-prose-counters': 'theme(colors.zinc[500])',
            '--tw-prose-bullets': 'theme(colors.zinc[500])',
            '--tw-prose-hr': 'theme(colors.pri[900])',
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
      screens: {
        xs: '480px',
      },
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
        'header': {
          // 'to': { 'background-position': '-200% center' },
          '0%': { 'transform': 'translateY(-6px)' },
          '50%': { 'transform': 'translateY(6px)' },
          '100%': { 'transform': 'translateY(-6px)' },
        },
      },
      animation: {
        'header': 'header 5s ease infinite',
      },
    },
  },
  // custom rules
  rules: [
    ['text-wrap-(unset|wrap|nowrap|balance|pretty)', 'textWrap'],
    ['container-', ({ $$ }) => `mx-auto w-full max-w-${$$}`],
  ],
});

injectGlobal`
  /* layers: defaults, base, components, shortcuts, utilities, overrides */
  @layer base {
    :focus-visible { @apply outline-(& 2 current offset-2); }
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
        inset-x-0
        z-[-1]
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
      shadow-(lg zinc-950/50)
      transition-[color,box-shadow]
      hover:(text-sec-100 scale-105 after:(shadow-[inset_0_1px_0_rgb(255_255_255_/_.75)] bg-[length:100%_100%]));
    }

    .tabs {
      @apply flex flex-wrap;
      --border: 1px;
      --depth: 1;
      --noise: 0;
      --tabs-height: auto;
      --tabs-direction: row;
      --tab-height: calc(0.25rem * 10);
      height: var(--tabs-height);
      flex-direction: var(--tabs-direction);
    }

    .tab {
      @apply [--tab-bg:color-mix(in_oklab,theme(colors.pri.500),transparent_85%)] [--color-neutral:theme(colors.black)] text-current hover:text-white relative inline-flex cursor-pointer appearance-none flex-wrap items-center justify-center text-center select-none;
      --tab-p: 0.75rem;
      --tab-border-color: black;
      --tab-radius-ss: 0;
      --tab-radius-se: 0;
      --tab-radius-es: 0;
      --tab-radius-ee: 0;
      --tab-order: 0;
      --tab-radius-min: calc(0.75rem - var(--border));
      --tab-radius-limit: min(0.25rem, var(--tab-radius-min));
      --tab-radius-grad:
        #0000 calc(69% - var(--border)),
        var(--tab-border-color) calc(69% - var(--border) + 0.25px),
        var(--tab-border-color) 69%,
        var(--tab-bg) calc(69% + 0.25px);
      border-color: #0000;
      order: var(--tab-order);
      height: var(--tab-height);
      font-size: 0.875rem;
      padding-inline: var(--tab-p);

      &:is(input[type="radio"]) {
        &:after {
          --tw-content: attr(aria-label);
          content: var(--tw-content);
        }
      }
      &:is(label) {
        @apply relative;
        input {
          @apply absolute inset-0 cursor-pointer appearance-none opacity-0;
        }
      }

      &:checked,
      &:is(label:has(:checked)),
      &:is(.tab-active, [aria-selected="true"], [aria-current="true"], [aria-current="page"]) {
        & + .tab-content {
          @apply block;
        }
      }
      &:not(
        :checked,
        label:has(:checked),
        :hover,
        .tab-active,
        [aria-selected="true"],
        [aria-current="true"],
        [aria-current="page"]
      ) {
        @apply text-white/50;
      }

      &:not(input):empty {
        @apply grow cursor-default;
      }

      &:focus {
        @apply outline-hidden;
      }

      &:focus-visible,
      &:is(label:has(:checked:focus-visible)) {
        outline: 2px solid currentColor;
        outline-offset: -5px;
      }

      &[disabled] {
        @apply pointer-events-none opacity-40;
      }
    }

    .tab-content {
      @apply order-1 hidden border-transparent;
      --tabcontent-radius-ss: var(--radius-box);
      --tabcontent-radius-se: var(--radius-box);
      --tabcontent-radius-es: var(--radius-box);
      --tabcontent-radius-ee: var(--radius-box);

      --tabcontent-order: 1;
      width: 100%;
      height: calc(100% - var(--tab-height) + var(--border));
      margin: var(--tabcontent-margin);
      order: var(--tabcontent-order);
      border-width: 0;
      border-start-start-radius: var(--tabcontent-radius-ss);
      border-start-end-radius: var(--tabcontent-radius-se);
      border-end-start-radius: var(--tabcontent-radius-es);
      border-end-end-radius: var(--tabcontent-radius-ee);
    }

    .tabs-box {
      @apply pb-px;
      --tabs-box-radius: calc(3 * 0.25rem);
      border-radius: calc(min(var(--tab-height) / 2, 0.25rem) + min(0.25rem, var(--tabs-box-radius)));
      box-shadow:
        0 -0.5px oklch(100% 0 0 / calc(var(--depth) * 0.1)) inset,
        0 0.5px oklch(0% 0 0 / calc(var(--depth) * 0.05)) inset;

      & > .tab {
        @apply rounded;
        border-style: none;

        &:focus-visible,
        &:is(label:has(:checked:focus-visible)) {
          outline-offset: 2px;
        }
        &:focus-visible {
          @apply z-1;
        }
      }

      & > :is(.tab-active, [aria-selected="true"], [aria-current="true"], [aria-current="page"]):not(.tab-disabled,[disabled]),
      & > :is(input:checked),
      & > :is(label:has(:checked)) {
        background-color: var(--tab-bg);
        box-shadow:
          0 1px oklch(100% 0 0 / calc(var(--depth) * 0.1)) inset,
          0 1px 1px -1px color-mix(in oklab, var(--color-neutral) calc(var(--depth) * 50%), #0000),
          0 1px 6px -4px color-mix(in oklab, var(--color-neutral) calc(var(--depth) * 100%), #0000);
        @media (forced-colors: active) {
          border: 1px solid;
        }
      }
      & > .tab-content {
        @apply mt-1;
        /* Compensate for p-1 */
        height: calc(100% - var(--tab-height) + var(--border) - 0.5rem);
        border-radius: calc(
          min(var(--tab-height) / 2, 0.25rem) +
            min(0.25rem, var(--tabs-box-radius)) - var(--border)
        );
      }
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
    .dialog-box { @apply my-6 border-(1 sec-300/10) w-11/12 max-w-lg max-h-[calc(100vh-5em)] bg-(zinc-950 noise) flex-(& col) col-start-1 row-start-1 translate-y-3 rounded-xl shadow-2xl scale-90 before:(content-[''] h-48 bg-gradient-to-b from-white/10 absolute inset-x-0 top-0 z-[-1] shadow-[inset_0_1px_0_rgba(255,255,255,.25)] rounded-[inherit]) motion-safe:(transition-all); }
    .dialog-header { @apply p-6 border-(b sec-300/10) flex items-center justify-between shrink-0 sticky top-0; }
    .dialog-title { @apply text-(white 3xl) leading-none font-goblin flex items-end gap-4 [&>small]:(text-base leading-tight opacity-70); }
    .dialog-body { @apply p-6 grow overflow-y-auto [overscroll-behavior:contain]; }
    .dialog-backdrop { @apply text-transparent grid col-start-1 row-start-1 self-stretch justify-self-stretch fixed inset-0 -z-[1]; }
    .link { @apply text-sec-600 transition hover:(text-sec-300 underline); }
    .divider { @apply flex items-center gap-6 [&:before,&:after]:(content-[''] h-px bg-[linear-gradient(90deg,_theme(colors.sec.900)_0%,_theme(colors.sec.900)_35%,_theme(colors.sec.200)_50%,_theme(colors.sec.900)_65%,_theme(colors.sec.900)_100%)] grow opacity-50); }
    .divider-middle { @apply flex items-center gap-6 [&:after]:(content-[''] h-px order-2 bg-[linear-gradient(90deg,_theme(colors.sec.900)_0%,_theme(colors.sec.900)_35%,_theme(colors.sec.200)_50%,_theme(colors.sec.900)_65%,_theme(colors.sec.900)_100%)] grow opacity-50); }
    .tippy-box[data-state="hidden"] { @apply opacity-0 translate-y-1; }
    [data-tippy-root] { @apply max-w-[calc(100vw-10px)]; }
    .tippy-box { @apply bg-pri-50 text-(pri-900 xs) font-normal relative outline-0 opacity-100 rounded translate-y-0 motion-safe:(transition duration-75); }
    .tippy-box[data-placement^="top"] > .tippy-arrow { @apply bottom-0 before:(bottom-[-7px] left-0 border-(t-[8px] r-[8px] b-0 l-[8px] t-[initial])) origin-top; }
    .tippy-box[data-placement^="bottom"] > .tippy-arrow { @apply top-0 before:(top-[-7px] left-0 border-(t-0 r-[8px] b-[8px] l-[8px] b-[initial])) origin-bottom; }
    .tippy-box[data-placement^="left"] > .tippy-arrow {@apply right-0 before:(right-[-7px] border-(t-[8px] r-0 b-[8px] l-[8px] l-[initial])) origin-left; }
    .tippy-box[data-placement^="right"] > .tippy-arrow { @apply left-0 before:(left-[-7px] border-(t-[8px] r-[8px] b-[8px] l-0 r-[initial]) origin-right); }
    .tippy-arrow { @apply w-4 h-4 text-pri-50 absolute before:(content-[''] absolute border-(transparent solid)); }
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
