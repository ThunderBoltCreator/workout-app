import s from './line.module.scss'

interface ILineProps {
	index: number
	length: number
}
const Line: React.FC<ILineProps> = ({ index, length }) => {
	return (
		<>
			{index % 2 !== 0 && index !== length - 1 ? (
				<div className={s.line} />
			) : null}
		</>
	)
}

export default Line
