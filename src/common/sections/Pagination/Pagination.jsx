import React from 'react'

  {limitOfPages.map((item) => {
    return (
      <span
        onClick={() => this.changeCurrentPage(item)}
        key={item}
        className={
          item === this.props.currenPage ? "active-page" : "page"
        }
      >
        {item}
      </span>
    );
  })}

