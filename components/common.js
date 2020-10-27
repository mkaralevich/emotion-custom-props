import { css } from "@emotion/core";

/* Breakpoints */
export const bp = [, 24, 52, 64, 80];

bp.xsm = `max-width: ${bp[1]}em`;
bp.sm = `max-width: ${bp[2]}em`;
bp.md = `max-width: ${bp[3]}em`;
bp.lg = `max-width: ${bp[4]}em`;

/* Typography */
export const text = {
	default: css`
		font-size: var(--fs-default);
		line-height: var(--lh-default);
	`,
	lead: css`
		font-size: var(--fs-lead);
		line-height: var(--lh-lead);
	`,
	heading: css`
		font-size: var(--fs-heading);
		line-height: var(--lh-heading);
		letter-spacing: var(--ls-heading);
		text-transform: uppercase;
	`,
};

export const box = {
	center: css`
		display: flex;
		align-items: center;
		justify-content: center;
	`
}