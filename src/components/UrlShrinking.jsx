import "./UrlShrinking.css";
import { useState } from "react";
const UrlShrinking = () => {
    const [longUrl, setLongUrl] = useState("");
    const [shortCode, setShortCode] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const handelSubmit = () => {
        if (shortCode.length > 4) {
            setShortUrl("https://cpit405.co/$" + shortCode);
            console.log("Short Url: " + shortUrl);
        }
        else {
            const myid = Math.random().toString(36).substring(6);
            console.log("Id: " + myid);
            setShortUrl("https://cpit405.co/$" + myid);
            console.log("Short Url: " + shortUrl);
        }
    }
    const handelLongUrlChange = (e) => {
        setLongUrl(e.target.value);
    }
    const handelShortCodeChange = (e) => {
        setShortCode(e.target.value);
    }
    const handelShortUrlChange = (e) => {
        setShortUrl(e.target.value);
    }
    return (
        <div className="ShrinkUrlForm">
            <h1>Link Shrinker</h1>
            <div className="form">
                <label htmlFor="longUrl">Enter Long Url</label>
                <input type="text" name="" id="longUrl" value={longUrl}
                    onChange={handelLongUrlChange} />
                <label htmlFor="shortCode">Enter Short Code</label>
                <input type="text" name="" id="shortCode" value={shortCode}
                    onChange={handelShortCodeChange} />

            </div>
            <button className="submit" onClick={handelSubmit}>Shorten Url</button>
            <div className="results">
                <label htmlFor="shortUrl">Short Url</label>
                <input type="text" name="" id="shortUrl" readOnly value={shortUrl}
                    onChange={handelShortUrlChange} />

            </div>

        </div>
    )
}
export default UrlShrinking;