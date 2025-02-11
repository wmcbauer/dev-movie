import getImages from '../../utils/getImages';
import { Container } from './styles';

function Cards(item) {
	return (
		<Container>
			<img src={getImages(item.poster_path)} alt="imagem-top-filmes" />
			<h3>{item.original_title}</h3>
		</Container>
	);
}

export default Cards;
