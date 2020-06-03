import React from 'react';

function Film(props) {
    const { film } = props
    return (
        <div>
            <h3>
                <strong></strong>
                {film.title}
            </h3>
            {film.release_date}
            <section>{film.body}</section>
        </div>

    )
};
export default Film