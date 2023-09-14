import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import DemoData from "./DemoData.json";

export default function NewsComponent() {
    const [pageNumber, setPageNumber] = useState(1);
    const [data, setData] = useState([]);
    const pageSize = 10;
    const url = `https://newsapi.org/v2/everything?pageSize=${pageSize}&apiKey=398674dffbd849df94e0e54785d51b7f&page=${pageNumber}`;

    const goToNextPage = ()=> {
        let currPage = pageNumber;
        setPageNumber(currPage + 1);
    }

    const goToPrevPage = ()=> {
        let currPage = pageNumber;
        setPageNumber(currPage - 1);
    }

    const fetchFunc = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setData(data.articles);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchFunc();
    }, []);

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
            <button style={{visibility : pageNumber > 1 ? "visible" : "hidden"}} className='btn btn-dark m-1' onClick={goToPrevPage} > &larr;Previous</button>  
                <button className="btn btn-dark m-1" onClick={goToNextPage}> Next Page &rarr;</button>
            </div>
        </div>
    );
}
