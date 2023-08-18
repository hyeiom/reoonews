import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

import DemoData from "./DemoData.json";


export default function NewsComponent() {

    const articles = DemoData.articles;
    const pageSize = 10; // Set the desired number of articles to fetch
    const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&apiKey=398674dffbd849df94e0e54785d51b7f`;
    const fetchFunc = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d.articles))
    }
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchFunc();
    }, [])
    var  count;

    return (
        <>
           

            <div className="container">
            <h2>NewsX - Top Headlines</h2>  <br />
                <div className="row">

                    {data.map((item, index) => {
                        { count = count + 1 }
                        return (

                            <div className="col col-md4" key={index}>
                                <NewsItem title={item.title} description={item.description} imageUrl={item.urlToImage} url={(item.url) == null ? "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-7509.jpg": item.url} />
                            </div>
                        );
                    })}

                    {articles.map((item, index) => {
                        { count = count + 1 }
                        return (

                            <div className="col col-md4" key={index}>
                                <NewsItem title={item.title} description={item.description} imageUrl={item.urlToImage} />
                            </div>
                        );
                    })}
                    {/* <NewsItem title={articls.title} description={articles.description} imageUrl={articles.urlToImage} />  */}


                </div>
            </div>

            {console.log(count)}
            


            

        </>
    )
}
