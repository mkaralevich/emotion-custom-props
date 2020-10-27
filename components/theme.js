import { css } from "@emotion/core";
import { bp } from "./common";

export const STYLES_THEME = css`
	:root {
		/* Z-indices */
		--z-1: 10;
		--z-2: 20;
		--z-3: 30;
		--z-4: 40;
		--z-5: 50;

		/* Spaces */
		--s-0: 0;
		--s-025: 2px;
		--s-05: 4px;
		--s-1: 8px;
		--s-2: 16px;
		--s-3: 24px;
		--s-4: 32px;
		--s-5: 48px;
		--s-6: 64px;
		--s-7: 80px;
		--s-8: 96px;
		--s-9: 112px;
		--s-10: 128px;
		--s-11: 192px;

		/* Aliased spaces */
		--s-sm: var(--s-2);
		--s-md: var(--s-4);
		--s-lg: var(--s-10);

		@media (${bp.sm}) {
			--s-sm: var(--s-2);
			--s-md: var(--s-3);
			--s-lg: var(--s-8);
		}

		/* Fonts */
		--sans: "Helvetica Neue", -apple-system, sans-serif;
		--serif: "Times New Roman", sans-serif;

		/* Font sizes */
		--fs-default: 1.125rem;
		--fs-heading: 1rem;
		--fs-lead: 2rem;
		--fs-desc: 0.875rem;
		--fs-entry: 1.15rem;

		@media (${bp.lg}) {
			--fs-default: 1rem;
			--fs-heading: 0.875rem;
			--fs-lead: 1.85rem;
		}
		@media (${bp.sm}) {
			--fs-default: 1rem;
			--fs-heading: 0.85rem;
			--fs-lead: 1.25rem;
		}

		/* Line heights */
		--lh-default: 1.45;
		--lh-heading: 1.45;
		--lh-lead: 1.25;
		--lh-entry: 1.25;

		/* Letter spacings */
		--ls-default: 0.005em;
		--ls-heading: 0.02em;

		/* Default color scheme */
		--c-bg: #fff;
		--c-ui: rgba(0 0 0 / 8%);
		--c-text: rgba(0 0 0 / 88%);
		--c-tinted: rgba(0 0 0 / 56%);
		--c-none: rgba(0 0 0 / 0%);

		/* Layout */
		--w-p: 35rem;
		--w-lead: 50rem;

		@media (${bp.sm}) {
			--w-p: auto;
			--w-lead: auto;
		}

		--b-radius: 0.125rem;
	}

	/* PROJECT THEMES */
	.black {
		--c-bg: black;
		--c-text: white;
		--c-tinted: rgba(255 255 255 / 48%);
	}
	.aliceblue {
		--c-bg: aliceblue;
	}
	.white {
		--c-bg: white;
	}
	.grey {
		--c-bg: grey;
		--c-text: white;
		--c-tinted: rgba(255 255 255 / 56%);
	}
	.lightslategray {
		--c-bg: lightslategray;
		--c-text: white;
		--c-tinted: rgba(255 255 255 / 56%);
	}
	.dimgray {
		--c-bg: dimgray;
		--c-text: white;
		--c-tinted: rgba(255 255 255 / 56%);
	}
	.lightyellow {
		--c-bg: lightyellow;
	}
	.antiquewhite {
		--c-bg: antiquewhite;
	}
	.whitesmoke {
		--c-bg: whitesmoke;
	}
`;
