import React from 'react'

import img from '/images/three-dots.svg'

export const Loader: React.FC = () => {
	return <img src={img} alt='loader' draggable={false} width={90} />
}
