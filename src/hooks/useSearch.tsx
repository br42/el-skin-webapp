import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import { setSearch } from 'store/slices/searchSlice';

export function useSearch () {
  const dispatch = useDispatch<AppDispatch>();
  const busca = useSelector((state: RootState) => state.search.busca);
  
  return {
    busca,
    setBusca: (busca: string) => {
      dispatch(setSearch(busca));
    }
  };
}

export default useSearch;
