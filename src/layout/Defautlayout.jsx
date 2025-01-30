import { Outlet } from 'react-router-dom';
//import Header from '../components/Header';

function DefaultLayout() {
	return (
		<>
			{/*<Header />*/}
			<Outlet />
			<footer>esse é o rodapé</footer>
		</>
	);
}
export default DefaultLayout;
