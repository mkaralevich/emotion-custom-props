import React from "react";
import { css } from "@emotion/core";
import * as C from "./common";

const s_root = css`
	color: var(--c-tinted);
	height: 100vh;
	${C.text.lead}
	${C.box.center}
`;

export default function Intro() {
	return <main css={s_root}>hello</main>;
}
