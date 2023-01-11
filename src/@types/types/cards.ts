export type CardsType = {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
};

export type CardsTypePayload = {
  poginationSelect: number;
  searchValue: string;
  selectAutor: number | undefined;
  selectLocation:number | undefined;
  createdFrom?: string;
  createdBefore?: string;
};

export type AutorType = {
  id: number;
  name: string;
};

export type LocationsType = {
  id: number;
  location: string;
};

export type FilterDataType = {
  id: number;
  location?: string;
  name?: string;
};
