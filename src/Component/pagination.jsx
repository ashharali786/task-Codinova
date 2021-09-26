import React from "react";
import './pagination.css'

const Pagination = props => {
  const pageNo = [];

  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pageNo.push(i);
  }

  return (
    <nav>
      <ul class="pagination">
        {pageNo.map(num => {
          let classes = "page-item ";
          if (num === props.currentPage) {
            classes += "active";
          }

          return (
            <li className={classes}>
              <a
                onClick={() => props.setPaginate(num)}
                href="!#"
                className="page-link"
              >
                {num}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;