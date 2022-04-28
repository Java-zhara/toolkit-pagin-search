import { IPost } from "../store/types/IPost";

export const searchSomething = (data: IPost[], searchData: string) => {
  const param = "title"; // param: keyof IPost
  const newSearchData = data.filter((item) => {
    return item[param].toLowerCase().includes(searchData.toLowerCase().trim());
  });
  return newSearchData;
};
