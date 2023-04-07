import cn from 'clsx'
import { Statistic } from 'components/Statistic/Statistic'
import { Header } from 'components/layout/Header/Header'
import { Layout } from 'components/layout/Layout'
import React from 'react'

import { Loader } from 'components/ui/Loader'

import bgImage from '/images/profile-bg.jpg'

import sLayout from '../../layout/layout.module.scss'

import s from './profile.module.scss'
import { useProfile } from './useProfile'

export const Profile: React.FC = () => {
	const { data, isLoading } = useProfile()
	console.log(data)

	return (
		<>
			<div
				className={cn(sLayout.wrapper, sLayout.otherPage)}
				style={{ backgroundImage: `url(${bgImage})`, height: 356 }}
			>
				<Header backLink='/' />
				<div className={s.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								src='/images/header/user.svg'
								alt='Profile'
								height='56'
								draggable={false}
							/>
							<h1 className={sLayout.heading}>{data?.email}</h1>
						</>
					)}
				</div>
				<Statistic />
			</div>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div className={s.before_after}>
					{data?.images?.map((image, index) => (
						<div key={image}>
							<div className={s.heading}>
								{index === 1 ? 'After' : 'Before'}
							</div>
							<img
								src={image}
								alt=''
								draggable={false}
								style={{ borderRadius: 14 }}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
