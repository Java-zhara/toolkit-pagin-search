import { IPost } from '../store/types/IPost';

export enum sortTypes {
  INC = 'INC',
  DESC = 'DESC',
}

export const sortedSomething = (data: IPost[], sortType: sortTypes): IPost[] => {
  const newSortData = [...data].sort((a, b) => {
    if (a.id > b.id) {
      return sortType === sortTypes.INC ? -1 : 1;
    }
    if (a.id < b.id) {
      return sortType === sortTypes.INC ? 1 : -1;
    }
    return 0;
  });
  return newSortData;
};
