import { AddMovie } from '../SecondPage/AllMoviesPageContent';

export default class SearchResults extends AddMovie {
    componentDidMount() {
       // To not execute componentDidMount from super 
    }

    componentDidUpdate(prevProps) {
        const { movieData } = this.props;
        movieData !== prevProps.movieData && this.setState({
            allMovies: movieData.results || [],
            NextPage: movieData.pagination.links.next || "",
            CurrentPage: movieData.pagination.currentPage || 0,
            numberOfPages: movieData.pagination.numberOfPages || 0
         }); 
    }
}
