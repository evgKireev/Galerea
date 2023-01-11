import { API, PER_PAGE } from '../../@types/constant';
import { CardsTypePayload } from '../../@types/types/cards';

const fetchGetCards = ({
  poginationSelect,
  searchValue,
  selectAutor,
  selectLocation,
}: CardsTypePayload) => {
  return API.get(`/paintings`, {
    _limit: PER_PAGE,
    _page: poginationSelect,
    q: searchValue,
    authorId: selectAutor,
    locationId: selectLocation,
  });
};

const fetchGetCardsCreated = ({
  poginationSelect,
  searchValue,
  selectAutor,
  createdFrom,
  createdBefore,
  selectLocation,
}: CardsTypePayload) => {
  return API.get(`/paintings`, {
    _limit: PER_PAGE,
    _page: poginationSelect,
    created_gte: createdFrom,
    created_lte: createdBefore,
    q: searchValue,
    authorId: selectAutor,
    locationId: selectLocation,
  });
};

const fetchGetLocations = () => {
  return API.get(`/locations`);
};

const fetchGetAuthors = () => {
  return API.get(`/authors`);
};

export default {
  fetchGetCards,
  fetchGetLocations,
  fetchGetAuthors,
  fetchGetCardsCreated,
};
