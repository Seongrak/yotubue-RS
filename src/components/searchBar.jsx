import styles from "./searchBar.module.css";
import React, { memo, useRef } from "react";

const SearchBar = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
    inputRef.current.value = "";
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/images/logo.png" alt="youtube img" />
      <h1 className={styles.title}>Youtube</h1>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="button"
        />
      </button>
    </header>
  );
});
export default SearchBar;
