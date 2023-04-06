import React from 'react';

function DisplayData(props) {
    const { items } = props;

    if (!items) {
        return <div>Loading...</div>;
    }

    return (
        <ul>
            {items.map(article => (
                <li key={article.url}>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                </li>
            ))}
        </ul>
    );
}
export default DisplayData