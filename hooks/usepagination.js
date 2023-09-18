import { useMemo } from "react";

const usepagination = ({   totalCount, pageSize, siblingCount = 1, currentPage }) => {
  const pagintionRage = useMemo(() => {
const totalPageRange = Math.ceil(  totalCount / pageSize)
  }, [  totalCount,, pageSize, siblingCount , currentPage]);

  return pagintionRage;
};

export default usepagination;
