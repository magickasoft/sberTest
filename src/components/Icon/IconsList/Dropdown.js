import React from 'react'

export default function Dropdown(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.size}
			height={props.size}
			viewBox="0 0 16 16"
			{...props}
		>
			<path
				fill="#4A4A4A"
				fillRule="evenodd"
				d="M11.32 7.127a.6.6 0 1 0-.849-.848l-2.55 2.55-2.55-2.55a.6.6 0 1 0-.849.85l2.974 2.973a.6.6 0 0 0 .848 0l2.976-2.975z"
			/>
		</svg>
	)
}
