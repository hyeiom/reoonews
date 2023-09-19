import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import DemoData from "./DemoData.json";

export default function NewsComponent() {
    const [pageNumber, setPageNumber] = useState(1);
    const [data, setData] = useState([]);
    const pageSize = 10;
    const apiKey = '398674dffbd849df94e0e54785d51b7f';

    const fetchNews = async (page) => {
        try {
            const url = `https://newsapi.org/v2/everything?pageSize=${pageSize}&apiKey=${apiKey}&page=${page}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result.articles);
        } catch (error) {
            console.error(error);
        }
    };

    const handlePrevClick = () => {
        if (pageNumber > 1) {
            const prevPage = pageNumber - 1;
            setPageNumber(prevPage);
            fetchNews(prevPage);
        }
    }
    
    const handleNextClick = () => {
        const nextPage = pageNumber + 1;
        setPageNumber(nextPage);
        fetchNews(nextPage);
    }

    useEffect(() => {
        fetchNews(pageNumber);
    }, [pageNumber]);

    return (
        <div className="container">
            <h2>NewsX - Top Headlines</h2> <br />
            <div className="row">
                {data && data.length > 0 ? (
                    data.map((item, index) => (
                        <div className="col col-md4" key={index}>
                            <NewsItem
                                title={item.title}
                                description={item.description}
                                imageUrl={item.urlToImage}
                                url={item.url || "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-7509.jpg"}
                            />
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
                {DemoData.articles && DemoData.articles.length > 0 && DemoData.articles.map((item, index) => (
                    <div className="col col-md4" key={index}>
                        <NewsItem
                            title={item.title}
                            description={item.description}
                            imageUrl={item.urlToImage}
                        />
                    </div>
                ))}
            </div>

            <div className="container d-flex justify-content-between">
                <button disabled={pageNumber <= 1} className='btn btn-dark m-1' onClick={handlePrevClick}> &larr; Previous</button>  
                <button className="btn btn-dark m-1" onClick={handleNextClick}>Next Page &rarr;</button>
            </div>
        </div>
    );
}
