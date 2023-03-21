import React, { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import { Menu } from './Menu'

import s from './hamburger.module.scss'

export const Hamburger: React.FC = () => {
	const [isShow, setShow] = useState<boolean>(false)

	return (
		<div className={s.wrapper}>
			<button onClick={() => setShow(!isShow)}>
				{isShow ? <IoClose color='white' /> : <CgMenuRight color='white' />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}
