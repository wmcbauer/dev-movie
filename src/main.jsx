import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/routes.jsx';
import CreateGlobalStyles from './styles/Globalstyles.js';
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
		<CreateGlobalStyles />
	</StrictMode>,
);
