import React from 'react'

export default function SoundOff(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.size}
			height={props.size}
			viewBox="0 0 24 24"
			{...props}
		>
			<g fill="#fff" fillRule="evenodd">
				<path d="M14 2.07a.896.896 0 0 0-.98.193L6.37 8.915a.901.901 0 0 0 1.272 1.273l5.116-5.115v15.654l-5.115-5.115a.9.9 0 0 0-.638-.264H2.8v-4.903a.9.9 0 0 0-.111-1.794h-.79a.9.9 0 0 0-.899.9v6.698a.9.9 0 0 0 .9.9h4.733l6.388 6.388a.897.897 0 0 0 .98.194.9.9 0 0 0 .556-.83v-20A.9.9 0 0 0 14 2.068M20.246 12.9l1.598-1.598a.901.901 0 0 0-1.273-1.273l-1.598 1.598-1.598-1.598a.9.9 0 1 0-1.273 1.273L17.7 12.9l-1.598 1.598a.901.901 0 0 0 1.273 1.273l1.598-1.598 1.598 1.598a.897.897 0 0 0 1.273 0 .901.901 0 0 0 0-1.273L20.246 12.9z" />
			</g>
		</svg>
	)
}
