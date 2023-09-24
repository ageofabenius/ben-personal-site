export const ben_theme = {
    name: 'ben_theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "4px",
		"--theme-rounded-container": "4px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "var(--color-primary-100)",
		"--on-tertiary": "var(--color-primary-100)",
		"--on-success": "var(--color-primary-100)",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #ccc5b9 
		"--color-primary-50": "247 246 245", // #f7f6f5
		"--color-primary-100": "245 243 241", // #f5f3f1
		"--color-primary-200": "242 241 238", // #f2f1ee
		"--color-primary-300": "235 232 227", // #ebe8e3
		"--color-primary-400": "219 214 206", // #dbd6ce
		"--color-primary-500": "204 197 185", // #ccc5b9
		"--color-primary-600": "184 177 167", // #b8b1a7
		"--color-primary-700": "153 148 139", // #99948b
		"--color-primary-800": "122 118 111", // #7a766f
		"--color-primary-900": "100 97 91", // #64615b
		// secondary | #403d39 
		"--color-secondary-50": "226 226 225", // #e2e2e1
		"--color-secondary-100": "217 216 215", // #d9d8d7
		"--color-secondary-200": "207 207 206", // #cfcfce
		"--color-secondary-300": "179 177 176", // #b3b1b0
		"--color-secondary-400": "121 119 116", // #797774
		"--color-secondary-500": "64 61 57", // #403d39
		"--color-secondary-600": "58 55 51", // #3a3733
		"--color-secondary-700": "48 46 43", // #302e2b
		"--color-secondary-800": "38 37 34", // #262522
		"--color-secondary-900": "31 30 28", // #1f1e1c
		// tertiary | #252422 
		"--color-tertiary-50": "222 222 222", // #dedede
		"--color-tertiary-100": "211 211 211", // #d3d3d3
		"--color-tertiary-200": "201 200 200", // #c9c8c8
		"--color-tertiary-300": "168 167 167", // #a8a7a7
		"--color-tertiary-400": "102 102 100", // #666664
		"--color-tertiary-500": "37 36 34", // #252422
		"--color-tertiary-600": "33 32 31", // #21201f
		"--color-tertiary-700": "28 27 26", // #1c1b1a
		"--color-tertiary-800": "22 22 20", // #161614
		"--color-tertiary-900": "18 18 17", // #121211
		// success | #252422 
		"--color-success-50": "222 222 222", // #dedede
		"--color-success-100": "211 211 211", // #d3d3d3
		"--color-success-200": "201 200 200", // #c9c8c8
		"--color-success-300": "168 167 167", // #a8a7a7
		"--color-success-400": "102 102 100", // #666664
		"--color-success-500": "37 36 34", // #252422
		"--color-success-600": "33 32 31", // #21201f
		"--color-success-700": "28 27 26", // #1c1b1a
		"--color-success-800": "22 22 20", // #161614
		"--color-success-900": "18 18 17", // #121211
		// warning | #eb5e28 
		"--color-warning-50": "252 231 223", // #fce7df
		"--color-warning-100": "251 223 212", // #fbdfd4
		"--color-warning-200": "250 215 201", // #fad7c9
		"--color-warning-300": "247 191 169", // #f7bfa9
		"--color-warning-400": "241 142 105", // #f18e69
		"--color-warning-500": "235 94 40", // #eb5e28
		"--color-warning-600": "212 85 36", // #d45524
		"--color-warning-700": "176 71 30", // #b0471e
		"--color-warning-800": "141 56 24", // #8d3818
		"--color-warning-900": "115 46 20", // #732e14
		// error | #eb5e28 
		"--color-error-50": "252 231 223", // #fce7df
		"--color-error-100": "251 223 212", // #fbdfd4
		"--color-error-200": "250 215 201", // #fad7c9
		"--color-error-300": "247 191 169", // #f7bfa9
		"--color-error-400": "241 142 105", // #f18e69
		"--color-error-500": "235 94 40", // #eb5e28
		"--color-error-600": "212 85 36", // #d45524
		"--color-error-700": "176 71 30", // #b0471e
		"--color-error-800": "141 56 24", // #8d3818
		"--color-error-900": "115 46 20", // #732e14
		// surface | #fffcf2 
		"--color-surface-50": "255 255 253", // #fffffd
		"--color-surface-100": "255 254 252", // #fffefc
		"--color-surface-200": "255 254 252", // #fffefc
		"--color-surface-300": "255 254 250", // #fffefa
		"--color-surface-400": "255 253 246", // #fffdf6
		"--color-surface-500": "255 252 242", // #fffcf2
		"--color-surface-600": "230 227 218", // #e6e3da
		"--color-surface-700": "191 189 182", // #bfbdb6
		"--color-surface-800": "153 151 145", // #999791
		"--color-surface-900": "125 123 119", // #7d7b77
		
	}
}