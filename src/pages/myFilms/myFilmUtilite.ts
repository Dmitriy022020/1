import {TFilm} from "../../types/common";

export const releaseFilter = (item: TFilm, release: string): boolean => {
  return release === '' || release === item.release_date.toString().slice(0, 4)
};

