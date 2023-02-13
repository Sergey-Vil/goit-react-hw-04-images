import axios from 'axios';
import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Button from './Buton/Button';
import Loader from './Loader/Loader';

const ELEMENTS = 12;

export const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loader, setLoader] = useState(false);
  // const elements = 12,

  useEffect(() => {
    const fetchImg = async () => {
      if (search !== '') {
        try {
          setLoader(true);
          const response = await axios.get(
            `https://pixabay.com/api/?q=${search}&page=${page}&key=32799764-75091cc806dab77fae6a325d0&image_type=photo&orientation=horizontal&per_page=${ELEMENTS}`
          );

          if (response.data.hits.length) {
            setImages(prev => [...prev, ...response.data.hits]);
            setTotalPage(Math.ceil(response.data.total / ELEMENTS));
          }
        } catch (error) {
        } finally {
          setLoader(false);
        }
      }
    };

    fetchImg();
  }, [page, search]);

  const handleSearch = e => {
    e.preventDefault();

    if (search !== e.target.elements.search.value) {
      setSearch(e.target.elements.search.value);
      setImages([]);
      setPage(1);

      return;
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearch} search={search} />
      {loader && <Loader />}
      <ImageGallery images={images} />
      {images.length === 0 || totalPage === page ? null : (
        <Button onClick={handleLoadMore} loader={loader} />
      )}
    </div>
  );
};
