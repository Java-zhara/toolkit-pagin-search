import { useEffect, useState } from 'react';

// import { fetchPosts } from './store/reduсers/ActionCreators';
import { postsFetching } from './store/reduсers/PostSlice';
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { Pagination } from './components/Pagination/Pagination';
import { CustomCheckbox } from './components/CustomCheckbox/CustomCheckbox';

import { IPost } from './store/types/IPost';

import { sortedSomething, sortTypes } from './utils/Sort';
import { searchSomething } from './utils/Search';
import { pagination } from './utils/Paginat';

import './App.css';

const POST_PER_PAGE = 10;

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { posts, isLoading, error } = useAppSelector((state) => state.postReducer);

  const [currentPagePost, setCurrentPagePost] = useState<IPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearcValue] = useState('');
  const [sortType, setSortType] = useState(sortTypes.DESC);
  const [totalElements, setTotalElements] = useState(0);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearcValue(e.target.value);
  };

  const sortHandler = () => {
    setSortType((prevSortType) => (prevSortType === sortTypes.INC ? sortTypes.DESC : sortTypes.INC));
  };

  useEffect(() => {
    dispatch(postsFetching());
    // dispatch(fetchPosts());
  }, []);

  useEffect(() => {
    const searchPosts = searchSomething(posts, searchValue);
    setTotalElements(searchPosts.length);
    const sortPosts = sortedSomething(searchPosts, sortType);
    const paginationPosts = pagination(sortPosts, currentPage);
    setCurrentPagePost(paginationPosts);
  }, [posts, currentPage, sortType, searchValue]);

  return (
    <div className='App'>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <div className='search-sort'>
        <input className='input' value={searchValue} type='text' placeholder='Search...' onChange={handleChangeValue} />
        <button type='button' onClick={sortHandler}>
          SORT
        </button>
        <CustomCheckbox />
      </div>
      {currentPagePost.map((post) => (
        <div key={post.id} className='post'>
          <span style={{ fontWeight: 'bold' }}>{post.id}</span>
          <span>{post.title}</span>
        </div>
      ))}
      <Pagination currentPage={currentPage} totalElements={totalElements} getPaginate={setCurrentPage} />
    </div>
  );
};
