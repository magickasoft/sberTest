import React from 'react'

export default function Law(props) {
	if (props.grad) {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={props.size}
				height={props.size}
				viewBox="0 0 64 64"
			>
				<defs>
					<linearGradient id="a" x1="100%" x2="0%" y1="50%" y2="50%">
						<stop offset="0%" stopColor="#8DD010" />
						<stop offset="100%" stopColor="#15B639" />
					</linearGradient>
				</defs>
				<path
					fill="url(#a)"
					fillRule="evenodd"
					d="M32.5 63C15.131 63 1 48.869 1 31.5S15.131 0 32.5 0c2.127 0 4.254.214 6.323.635a1.5 1.5 0 0 1-.599 2.94A28.69 28.69 0 0 0 32.5 3C16.785 3 4 15.785 4 31.5S16.785 60 32.5 60 61 47.215 61 31.5c0-10.858-6.035-20.628-15.749-25.498a1.499 1.499 0 1 1 1.344-2.681C57.331 8.701 64 19.499 64 31.5 64 48.869 49.869 63 32.5 63zm0-12.963a18.487 18.487 0 0 1-13.113-5.423c-7.231-7.23-7.231-18.997 0-26.228 7.23-7.23 18.996-7.23 26.226 0a1.5 1.5 0 1 1-2.121 2.121c-6.062-6.06-15.924-6.06-21.984 0-6.061 6.061-6.061 15.924 0 21.986 6.06 6.061 15.922 6.061 21.984 0a1.5 1.5 0 1 1 2.121 2.121A18.487 18.487 0 0 1 32.5 50.037z"
				/>
			</svg>
		)
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.size}
			height={props.size}
			viewBox="0 0 36 36"
			{...props}
		>
			<g fill="#4A4A4A" fillRule="evenodd">
				<path d="M18 34C9.178 34 2 26.822 2 18S9.178 2 18 2c1.078 0 2.158.108 3.21.321a1.001 1.001 0 0 1-.397 1.961A14.187 14.187 0 0 0 18 4C10.28 4 4 10.28 4 18s6.28 14 14 14 14-6.28 14-14c0-4.6-2.262-8.908-6.05-11.527a1 1 0 0 1 1.137-1.645A16.014 16.014 0 0 1 34 18c0 8.822-7.178 16-16 16" />
				<path d="M18 27.519a9.493 9.493 0 0 1-6.733-2.784c-3.714-3.713-3.714-9.756 0-13.47 3.712-3.71 9.753-3.71 13.466 0a1 1 0 1 1-1.414 1.415c-2.933-2.932-7.706-2.932-10.638 0-2.934 2.934-2.934 7.707 0 10.64 2.932 2.932 7.705 2.932 10.638 0a.999.999 0 1 1 1.414 1.415A9.493 9.493 0 0 1 18 27.519" />
			</g>
		</svg>
	)
}
