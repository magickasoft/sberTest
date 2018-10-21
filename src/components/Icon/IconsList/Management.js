import React from 'react'

export default function Management(props) {
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
					d="M37.978 26.902l7.242 1.957 5.318-5.297-1.93-7.253-7.246-1.955-5.313 5.296 1.93 7.252zm7.688 5.13c-.13 0-.261-.017-.391-.051l-8.916-2.41a1.5 1.5 0 0 1-1.058-1.062l-2.373-8.925a1.5 1.5 0 0 1 .392-1.448l6.538-6.518a1.493 1.493 0 0 1 1.449-.386l8.92 2.406a1.5 1.5 0 0 1 1.059 1.063l2.372 8.927a1.5 1.5 0 0 1-.39 1.448l-6.544 6.519a1.499 1.499 0 0 1-1.058.437zm-32.872 31.64c-.384 0-.768-.146-1.061-.439L1.44 52.937a1.5 1.5 0 0 1 0-2.12l9.819-9.822a27.489 27.489 0 0 1-3.01-12.484c0-15.17 12.342-27.51 27.512-27.51.79 0 1.639.045 2.595.14.359.034.694.198.942.461l1.194 1.262a1.5 1.5 0 0 1-.05 2.112L25.42 19.424l4.794 14.364 14.745 5.106L59.477 24.94a1.472 1.472 0 0 1 1.07-.418c.4.008.779.176 1.054.464l1.212 1.271c.248.26.394.601.413.96l.006.135c.02.384.04.77.04 1.16 0 15.17-12.341 27.512-27.511 27.512a27.562 27.562 0 0 1-12.957-3.248 1.5 1.5 0 1 1 1.414-2.646 24.562 24.562 0 0 0 11.543 2.894c13.515 0 24.51-10.997 24.51-24.513l-.001-.172-13.894 13.355a1.494 1.494 0 0 1-1.53.336l-16.311-5.649a1.5 1.5 0 0 1-.931-.942l-5.33-15.964a1.5 1.5 0 0 1 .384-1.556L37.083 4.045A19.975 19.975 0 0 0 35.76 4C22.245 4 11.25 14.996 11.25 28.511c0 4.198 1.094 8.354 3.163 12.018a1.499 1.499 0 0 1-.245 1.8L4.62 51.876l8.175 8.175 3.692-3.68a1.5 1.5 0 0 1 2.118 2.123l-4.753 4.74a1.494 1.494 0 0 1-1.06.437z"
				/>
			</svg>
		)
	}

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
				<path
					fill={props.fill || '#4A4A4A'}
					d="M22.748 13.243l2.91.786 2.137-2.128-.776-2.916-2.912-.786-2.134 2.128.775 2.916zm3.207 2.902c-.087 0-.175-.01-.261-.034l-4.025-1.088a1 1 0 0 1-.706-.708l-1.072-4.03a1 1 0 0 1 .26-.967l2.953-2.943a.998.998 0 0 1 .967-.257l4.028 1.087c.344.093.614.363.706.708l1.072 4.032a1 1 0 0 1-.261.965l-2.955 2.944c-.19.19-.445.291-.706.291z"
				/>
				<path
					fill={props.fill || '#4A4A4A'}
					d="M6.865 36a.996.996 0 0 1-.707-.293L.293 29.841a.999.999 0 0 1 0-1.414l5.52-5.522a15.816 15.816 0 0 1-1.682-7.084C4.131 7.097 11.227 0 19.951 0c1.543 0 3.08.227 4.565.675a1 1 0 0 1 .419 1.665l-7.548 7.547 2.221 6.468 6.504 2.253 7.413-7.412a1 1 0 0 1 1.672.444c.381 1.393.574 2.8.574 4.181 0 8.724-7.096 15.821-15.82 15.821-2.59 0-5.167-.646-7.45-1.868a1 1 0 0 1 .943-1.763 13.845 13.845 0 0 0 6.507 1.631c7.62 0 13.82-6.2 13.82-13.821 0-.629-.046-1.265-.138-1.904l-6.549 6.548a1 1 0 0 1-1.034.238l-7.556-2.618a.994.994 0 0 1-.618-.62l-2.582-7.519a.996.996 0 0 1 .238-1.032l6.721-6.72A13.774 13.774 0 0 0 19.951 2c-7.62 0-13.82 6.2-13.82 13.821 0 2.367.617 4.71 1.784 6.776a1 1 0 0 1-.164 1.199l-5.337 5.338 4.451 4.452 2.797-2.796a.999.999 0 1 1 1.414 1.414l-3.504 3.503a.996.996 0 0 1-.707.293"
				/>
			</g>
		</svg>
	)
}