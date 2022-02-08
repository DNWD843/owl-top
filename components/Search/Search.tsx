import {SearchProps} from './Search.props';
import styles from './Search.module.css';
import classNames from 'classnames';
import React, {EventHandler, KeyboardEventHandler, useState} from 'react';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import SearchIcon from './searchIcon.svg';
import {useRouter} from "next/router";

export const Search = ({className, ...props}: SearchProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>('');

  const goToNewUrl = () => {
    router.push({
      pathname: '/search',
      query: {
        q: searchValue
      }
    })
      .then(() => setSearchValue(''));
  };

  const handleKeyDown = (evt: { key: string; }) => {
    if (evt.key === 'Enter') {
      goToNewUrl();
    }
  };

  return (
    <div className={classNames(className, styles.search)} {...props}>
      <Input
        type="search"
        className={styles.input}
        placeholder="Поиск..."
        value={searchValue}
        onChange={(evt) => setSearchValue(evt.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance="primary"
        className={styles.button}
        onClick={goToNewUrl}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};
