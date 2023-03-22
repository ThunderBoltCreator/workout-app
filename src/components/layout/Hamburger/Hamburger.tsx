import React, { useRef, useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import { Menu } from './Menu'

import s from './hamburger.module.scss'
import useOnClickOutside from 'hooks/useClickOutside'

export const Hamburger: React.FC = () => {
	const { ref, isShow, setShow } = useOnClickOutside(false)

	return (
		<div className={s.wrapper} ref={ref}>
			<button onClick={() => setShow(!isShow)}>
				{isShow ? <IoClose color='white' /> : <CgMenuRight color='white' />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}
