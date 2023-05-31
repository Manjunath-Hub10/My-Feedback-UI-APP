import React from "react";
import Card from './shared/Card';
import { useState } from "react";
import {FaThumbsUp, FaTimes} from 'react-icons/fa';

function FeedbackItem({id, rating, text, item, handleDelete}){
    const [countLike, setCountLike] = useState(0);
    const handleLike = (id, oldCount) => {
      oldCount++;
      setCountLike(oldCount);
    };
    return (
        <>
        <Card>
            <div className="num-display">{item.rating}</div>
                <button onClick={() => handleDelete(item.id)}
                    className='close'>
                    <FaTimes color="purple"/>
                </button>
                <button className="edit" onClick={() => handleLike(item.id, countLike)}>
                    <FaThumbsUp color="purple" />
                    <div>{countLike} likes</div>
                </button>
            <div className="text-display">{item.text}</div>
        </Card>
        </>
    );
}


export default FeedbackItem;