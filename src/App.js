import React, { useState } from 'react';
import { ARTICLES } from './articles';
import './style.css';

export default function App() {
  const [data, setData] = useState(ARTICLES);

  const sortByVote = () => {
    let sortedArticles = ARTICLES.sort((a, b) => {
      return b.upvotes - a.upvotes;
    });
    setData([...sortedArticles]);
  };

  const sortByDate = () => {
    let sortedArticles = ARTICLES.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setData([...sortedArticles]);
  };

  return (
    <div>
      <div>
        <label>Sort By </label>
        <button onClick={sortByVote}>Most Upvoted</button>
        <button onClick={sortByDate}>Most Recent</button>
        <hr />
        <table>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Upvotes</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((article) => (
              <tr key={article.upvotes}>
                <td>{article.title}</td>
                <td>{article.upvotes}</td>
                <td>{article.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
