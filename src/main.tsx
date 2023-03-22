import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MyRoutes } from 'routes/Routes'

import './assets/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<MyRoutes />
		</BrowserRouter>
	</React.StrictMode>
)
