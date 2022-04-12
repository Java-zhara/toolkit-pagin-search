import { useEffect, useState } from "react";

import { fetchPosts } from "./store/reduсers/ActionCreators";
import { useAppDispatch, useAppSelector } from "./store/hooks/redux";
import { Pagination } from "./components/Pagination/Pagination";

import "./App.css";
import { IPost } from "./store/types/IPost";

export const App: React.FC = () => {
  const postsPerPage = 10;
  const dispatch = useAppDispatch();
  const { posts, isLoading, error } = useAppSelector(
    (state) => state.postReducer
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [valueTitle, setValueTitle] = useState("");
  const [search, setSearch] = useState<IPost[]>([]);
  const [currentPost, setCurrentPost] = useState<IPost[]>([]);

  const handleChangeValue = (e: any) => {
    setValueTitle(e.target.value);
    const searchTitle = posts.filter((postTitle) =>
      postTitle.title
        .toLowerCase()
        .trim()
        .includes(e.target.value.toLowerCase().trim())
    );
    setSearch(searchTitle);
    setCurrentPage(1);
  };

  useEffect(() => {
    setSearch(posts);
  }, [posts]);

  useEffect(() => {
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    setCurrentPost(search.slice(firstPostIndex, lastPostIndex));
  }, [currentPage, search]);

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <input
        className="input"
        value={valueTitle}
        type="text"
        placeholder="Search..."
        onChange={handleChangeValue}
      />
      {currentPost.map((post) => (
        <div key={post.id} className="post">
          <span style={{ fontWeight: "bold" }}>{post.id}</span>
          <span>{post.title}</span>
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        totalElements={search.length}
        getPaginate={setCurrentPage}
      />
    </div>
  );
};
export default App;
