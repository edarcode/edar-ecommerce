import { PagedSc } from "./style";
import ReactPaginate from "react-paginate";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/reducers/products/actions";

export default function Paged({ className }) {
  const dispatch = useDispatch();
  const { pageCount } = useSelector((state) => state.products);
  const { name, idCategory, min, max } = useSelector(
    (state) => state.filterOrderProducts
  );
  const handleOnChangePage = ({ selected }) => {
    dispatch(getAllProducts({ page: selected, name, idCategory, min, max }));
    window.scroll({
      top: 0,
    });
  };

  if (pageCount <= 1) return null;
  return (
    <PagedSc className={className}>
      <ReactPaginate
        previousLabel={<FaAngleDoubleLeft />}
        nextLabel={<FaAngleDoubleRight />}
        breakLabel="..."
        pageCount={pageCount ? pageCount : 0}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handleOnChangePage}
        activeLinkClassName="active"
        previousClassName="previous"
        nextClassName="next"
      />
    </PagedSc>
  );
}
