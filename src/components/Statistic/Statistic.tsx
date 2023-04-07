import React from 'react'

import { useProfile } from 'components/pages/Profile/useProfile'

import s from './statistic.module.scss'

export const Statistic: React.FC = () => {
	const { data } = useProfile()

	return (
		<div className={s.wrapper}>
			{data?.statistics?.map((item, index) => (
				<div key={index} className={s.count}>
					<div className={s.heading}>{item.label}</div>
					<div className={s.number}>{item.value}</div>
				</div>
			))}
		</div>
	)
}
