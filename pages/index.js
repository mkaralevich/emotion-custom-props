import React from "react";
import { Global, css } from "@emotion/core";
import { STYLES_BASE } from "../components/base";
import { STYLES_THEME } from "../components/theme";
import Intro from "../components/Intro";

export default function Site() {
	return (
		<>
			<Global
				styles={css`
					${STYLES_BASE}
					${STYLES_THEME}
				`}
			/>
			<Intro />
		</>
	);
}
