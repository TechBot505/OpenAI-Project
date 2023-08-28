import React, { useState, useEffect } from 'react';
import { useLazyGetSummaryQuery } from '../services/article';
import '../static/content.css';
import mainlogo from '../assets/Name.png';
import copy from '../Copy.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const hexhead = {
  color: '#848484'
};

export default function Input() {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allUpdatedArticle, setAllUpdatedArticle] = useState([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setArticle({ ...article, url: e.target.value });
  }

  const copySummary = (summary) => {
    navigator.clipboard.writeText(summary);
    toast.success('Summary copied to clipboard!');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { url: article.url, summary: data.summary };
      setIsLoading(false);
      setAllUpdatedArticle([newArticle, ...allUpdatedArticle]);
      setArticle({ url: "", summary: data.summary });
    }
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(allUpdatedArticle));
  }, [allUpdatedArticle]);

  useEffect(() => {
    const allArticleShow = localStorage.getItem('items');
    if (allArticleShow) {
      setAllUpdatedArticle(JSON.parse(allArticleShow));
    }
  }, []);

  return (
    <div className="dev">
      <div>
        <center>
          <img height={105} width={350} src={mainlogo} alt="Logo"/>
          <h5 className='heading'>Summarize any website, anywhere.</h5>
        </center>
      </div>
      <br />
      <div>
        <form type="post" onSubmit={handleSubmit}>
          <div className='ept'>
            <input
              className="inp"
              type="url"
              placeholder='Enter the URL: '
              onChange={handleChange}
              style={{width: '350px', height: '40px'}}
              value={article.url}
            />
            <button className="butn" type="submit">Summarize</button>
          </div>
        </form>
        <br />
        <br />
      </div>
      <div className="storedUrl">
        <center>
          <ul>
            {allUpdatedArticle.map((item, index) => (
              <div className="arri" key={index}>
                <li>{item.url}</li>
                <button onClick={() => copySummary(item.summary)}>
                  <img src={copy} alt="Copy"/>
                </button>
              </div>
            ))}
          </ul>
        </center>
        {isLoading ? 
          <div className="loader-container"> 
            <div className="loader"></div>
          </div> :
          <div className='summary'>
            <div className='bjing'>
              <h4>Summary</h4>
              <button onClick={() => copySummary(article.summary)}>
                <img src={copy} alt="Copy"/>
              </button>
            </div>
            <br/>
            <br/>
            <p>{article.summary}</p>
          </div>
        }
      </div>
    </div>
  )
}
