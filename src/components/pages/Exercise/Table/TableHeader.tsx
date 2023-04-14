import s from '../exercise.module.scss'

const TableHeader: React.FC = () => {
	const titles = ['Previous', 'Repeat & Weight', 'Completed']
	const renderHeaders = () => {
		return titles.map(title => (
			<div key={title}>
				<span>{title}</span>
			</div>
		))
	}
	return <div className={s.row}>{renderHeaders()}</div>
}

export default TableHeader
