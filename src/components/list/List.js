import React from 'react';

const List = ({children,items}) => {
    return (
        items.map((item) => children(item))
    )
}

export default List;
