import { IPost } from '../store/types/IPost';

export const pagination = (data: IPost[], currentPage: number, postsPerPage: number): IPost[] => {
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  return data.slice(firstPostIndex, lastPostIndex);
};
