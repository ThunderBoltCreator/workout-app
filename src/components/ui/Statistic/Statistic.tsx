import React from 'react'

import { statistic } from './statistic.data'
import s from './statistic.module.scss'

export const Statistic: React.FC = () => {
	const items = statistic.map(({ title, value }, index) => (
		<li key={index}>
			<span className={s.title}>{title}</span>
			<span className={s.value}>{value}</span>
		</li>
	))

	return <ul className={s.wrapper}>{items}</ul>
}
