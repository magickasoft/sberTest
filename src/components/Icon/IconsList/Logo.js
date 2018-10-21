import React from 'react'

export default function Logo(props) {
	return (
        <svg
		  viewBox="0 0 135 20"
		  width={props.size}
          height={props.size}
          {...props}
		>
            <text color="rgb(0, 177, 64)" x="3" y="24" fontFamily="Arial" fontSize="20">Parts Pedigree</text>
        </svg>
	)
}
