import { css } from "@emotion/core";

export const STYLES_BASE = css`
	* {
		box-sizing: border-box;
		border: none;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	html,
	body {
		font-family: var(--sans);
		font-size: 16px;
		font-weight: normal;
		letter-spacing: 0.005em;
		line-height: var(--lh-default);
		color: var(--c-text);
		-webkit-text-size-adjust: 100%;
	}

	html,
	body,
	h1,
	h2,
	h3,
	h4,
	ul,
	ol,
	p,
	figure {
		padding: 0;
		margin: 0;
	}

	h1,
	h2,
	h3,
	h4 {
		font-size: var(--fs-default);
		line-height: var(--lh-default);
		font-weight: normal;
	}

	a {
		color: var(--c-text);
		text-decoration: none;
		border-bottom: 1px solid var(--c-none);
		transition: color 0.2s ease;

		&:hover {
			color: var(--c-tinted);
		}
	}

	ul,
	ol,
	li {
		list-style-type: none;
	}

	img,
	video {
		width: 100%;
		height: auto;
	}

	figure {
		line-height: 0;
	}
`;
