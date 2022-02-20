import { PagedSc } from "./style";
import ReactPaginate from "react-paginate";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/reducers/products/actions";

export default function Paged() {
  const dispatch = useDispatch();
  const { pageCount } = useSelector((state) => state.products);
  const handleOnChangePage = ({ selected }) => {
    dispatch(getAllProducts({ page: selected }));
    window.scroll({
      top: 0,
    });
  };
  return (
    <PagedSc>
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
