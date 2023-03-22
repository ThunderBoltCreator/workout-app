import { useEffect, useRef, useState } from 'react'

function useOnClickOutside(initialValue: boolean) {
	const ref = useRef<HTMLDivElement>(null)
	const [isShow, setShow] = useState(initialValue)

	const handleClick = (event: MouseEvent) => {
		const el = ref?.current
		if (el && !el.contains(event.target as Node)) {
			setShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClick, true)
		return () => {
			removeEventListener('click', handleClick, true)
		}
	})

	return { ref, isShow, setShow }
}

export default useOnClickOutside
