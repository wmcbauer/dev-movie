import { Route, Routes } from 'react-router-dom';

import Movie from '../containers/movie';
import Series from '../containers/series';
import Home from '../containers/Home';
import DefaultLayout from '../layout/defautlayout';

function Router() {
	return (
		<Routes>
			<Route element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/filmes" element={<Movie />} />
				<Route path="/series" element={<Series />} />
			</Route>
		</Routes>
	);
}
export default Router;
