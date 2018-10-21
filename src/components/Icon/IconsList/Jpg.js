import React from 'react'

export default function Jpg(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width={props.size}
			height={props.size}
			viewBox="0 0 36 36"
			{...props}
		>
			<g fill="none" fillRule="evenodd">
				<g transform="translate(5 1)">
					<path
						fill="#7242DA"
						d="M26.876 7.009L20.78.439a1 1 0 0 0-1.466 1.359l5.829 6.283V28.31A3.694 3.694 0 0 1 21.454 32H5.689A3.693 3.693 0 0 1 2 28.31V5.689a3.693 3.693 0 0 1 3.689-3.69h8.5v7.69a1 1 0 0 0 1 1h7.143a1 1 0 1 0 0-2h-6.143V.999a1 1 0 0 0-1-1h-9.5A5.695 5.695 0 0 0 0 5.69v22.62A5.696 5.696 0 0 0 5.689 34h15.765a5.696 5.696 0 0 0 5.689-5.69V7.69c0-.252-.096-.495-.267-.68"
					/>
				</g>
				<path
					fill="#7242DA"
					d="M17.608 24.67h-.694v-2.054h.694a1.027 1.027 0 0 1 0 2.055m0-4.055h-1.694a1 1 0 0 0-1 1v6.118a1 1 0 1 0 2 0V26.67h.694a3.028 3.028 0 0 0 0-6.055M11.972 21.691v4a1.027 1.027 0 1 1-2.055 0 1 1 0 1 0-2 0 3.028 3.028 0 0 0 6.055 0v-4a1 1 0 1 0-2 0M25.113 22.357c.56 0 1.084.236 1.481.666a1 1 0 0 0 1.469-1.357 3.985 3.985 0 0 0-2.95-1.309c-2.262 0-4.103 1.926-4.103 4.292 0 2.366 1.841 4.292 4.103 4.292 2.043 0 3.75-1.53 4.056-3.64a.996.996 0 0 0-.99-1.143h-2.82a1 1 0 1 0 0 2h1.333c-.39.481-.96.783-1.579.783-1.159 0-2.103-1.028-2.103-2.292 0-1.264.944-2.292 2.103-2.292"
				/>
			</g>
		</svg>
	)
}
