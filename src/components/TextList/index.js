import React from 'react'
import PropTypes from 'prop-types'
import css from './styles.less'

const TextList = props => {
	const { type, children }  = props

	return (
		<div className={css.listStyle}>
			{type === "number" &&
				<div className={css.numberList}>
					{children}
				</div>
			}
			{type === "dot" &&
				<div className={css.dotList}>
					{children}
				</div>
			}
			{type === "alphabet" &&
			<div className={css.alphabetList}>
				{children}
			</div>
			}
		</div>
	)
}

TextList.propTypes = {
	type: PropTypes.string,
}

TextList.defaultProps = {
	type: "dot",
}

export default TextList
