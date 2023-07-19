import { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios'

import Item from "./Item";

function Listing() {

    const [newsData, setNewsData] = useState([])

    const apiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8040cc3829fe453497ac472a132141d8"
    
    useEffect(()=>{
        axios.get(apiUrl).then(res=>{
            setNewsData(res.data.articles)
        }).catch(err=>{
            console.log("Error while fetching News...",err.message);
        })
    },[])


    return (
        <div className="container pt-5">
            <div className="row">
                <h1 className="heading">Latest News</h1>
                <div className="col-md-12 order-md-2 col-lg-12">
                    <div className="container-fluid">
                        <div className="row">
                            {
                                newsData.map((eachNews, i)=>(
                                    <Item 
                                        key={i}
                                        title={eachNews.title}
                                        desc={eachNews.description}
                                        url={eachNews.url}
                                        imageUrl={eachNews.urlToImage}
                                        author={eachNews.author}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Listing;
