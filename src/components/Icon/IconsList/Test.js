import React from 'react'

export default function Test(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={props.size}
			height={props.size}
			viewBox="0 0 36 36"
			{...props}
		>
			<g fill="#4A4A4A" fillRule="evenodd">
				<path d="M33 10.107a1 1 0 0 0-1 1v9.886a3.12 3.12 0 0 1-3.116 3.118H8.302c-.299 0-.583.135-.773.366L4 28.78V9.16a3.12 3.12 0 0 1 3.118-3.118L33.001 6A1 1 0 0 0 33 4h-.001l-25.882.042A5.122 5.122 0 0 0 2 9.16v22.418a.998.998 0 0 0 1.773.634l5.002-6.1h20.109A5.123 5.123 0 0 0 34 20.993v-9.886a1 1 0 0 0-1-1" />
				<path d="M22.924 11.577c0-1.752-2.021-3.125-4.601-3.125s-4.6 1.373-4.6 3.125a1 1 0 1 0 2 0c0-.396.987-1.125 2.6-1.125 1.614 0 2.6.73 2.6 1.125 0 .644-.3.864-1.41 1.34-.89.381-2.233.956-2.233 2.521v1.128a1 1 0 1 0 2 0v-1.128c0-.198.2-.332 1.02-.683 1.045-.448 2.624-1.123 2.624-3.178M18.288 19.218a1.249 1.249 0 1 0 0 2.498 1.25 1.25 0 0 0 0-2.498" />
			</g>
		</svg>
	)
}
