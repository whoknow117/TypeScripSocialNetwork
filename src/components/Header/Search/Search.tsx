import React from 'react';
import classes from './Search.module.scss';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {
    return (
        <div className={classes.form}>
            <div className={classes.search}>
                <input className={classes.input} type="text" />
            </div>
            <div>
                <button className={classes.btn}>
                    <SearchIcon/>
                </button>
            </div>
        </div>
    )

}


export default Search;