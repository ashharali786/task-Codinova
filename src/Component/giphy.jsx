import { React, useEffect, useState } from "react";
import "../Component/giphy.css";
import axios from "axios";
import Pagination from "./pagination";

const Giphy = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const getData = async () => {
      const result = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "6dUK5QhVzjp1hs13YjhtskPtPvSNLsz6",
          limit: 2000
        },
      });
      console.log(result);
      console.log(result.data.pagination.total_count);
      setData(result.data.data);
    };

    getData();
  }, []);

  const renderGifs = () => {
    return currentItems.map((elem) => {
      return (
        <div key={elem.id} className="gif">
          <img src={elem.images.fixed_height.url} alt="gifs" />
        </div>
      );
    });
  };

  const onSearchHandle = (event) => {
    setSearch(event.target.value);
  };

  const onSubmitHandle = async (event) => {
      event.preventDefault();
    const result = await axios("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "6dUK5QhVzjp1hs13YjhtskPtPvSNLsz6",
        q: search,
      },
    });
    setData(result.data.data);
  };

  const setPaginate = (pageNo) => {
    setCurrentPage(pageNo)
  }

  return (
    <div className="container">
      <form action="/" method="get" id="gif-form">
        <label htmlFor="header-search">
          <h3>Search Your Favourite Giphy Here</h3>
        </label>
        <input
          value={search}
          onChange={onSearchHandle}
          type="text"
          className="bar"
          id="header-search"
          placeholder="Search..."
          name="search"
          autocomplete="off"
        />
        <br />
        <button
          onClick={onSubmitHandle}
          type="submit"
          value="find"
          class="btn btn2"
        >
          Search
        </button>
      </form>
        <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        setPaginate={setPaginate}
        />
      <div className="container gifs">{renderGifs()}</div>
    </div>
  );
};
export default Giphy;
