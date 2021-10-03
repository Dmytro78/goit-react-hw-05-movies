import axios from 'axios';

const API_KEY = '22640330-7a3d8d7b0f506b04b575708a2';
const BASE_URL = 'https://pixabay.com/api/';

export default function fetchImages({
  searchQuery = '',
  currentPage = 1
}) {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
}
