import React, { useState, useEffect } from 'react';
import { useLazyGetSummaryQuery } from '../services/article';

export default function Input() {

  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticle, setallArticle] = useState([]);
  const [allUpdatedArticle, setAllUpdatedArticle] = useState([]);
  
 
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setArticle({ ...article, url: e.target.value });
  }

  // const handleUrlClick = (index) => {
  //   setArticle(allArticle[index]?.summary);
  //   console.log(article);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticle = [newArticle, ...allArticle.slice(0, 4)];
      setIsLoading(false);
      setArticle(newArticle);
      setallArticle(updatedAllArticle);



    }
    // 
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(allArticle));
  }, [allArticle]);

  useEffect(() => {
    const allArticleShow = localStorage.getItem('items');
    console.log(allArticleShow);
    if (allArticleShow) {
     setAllUpdatedArticle(JSON.parse(allArticleShow));
      console.log(allUpdatedArticle)
    }
  }, []);


  return (
    <div className="dev">
      <img src="../../public/Content (1).png"/>
      <h3 className='heading'>"Summarize any article, anywhere."</h3>
      <div>
        <form type="post" onSubmit={handleSubmit}>

          <input type="url" placeholder='Enter the url of website ' onChange={handleChange}></input>
          <button type="submit" >Find Summary</button>

        </form>

      </div>
      <div className="storedUrl">
        <ul>
          {allUpdatedArticle.map((item, index) => (
            <div>
             {/* <button onClick={handleUrlClick}>Icon</button> */}
              <li key={index}>{item.url}</li>
            </div>
          
          ))}
        </ul>
        {isLoading ? 
          <div className="loader-container">
          <div className="loader"></div>
          </div> :
          <div className='summary'>
          <h1>Summary</h1>
          {article?.summary}
         </div>
         }
        
      </div>
    </div>
  )
}