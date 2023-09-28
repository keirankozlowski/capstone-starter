import { useState } from "react";
import { addReview, fetchAllReviews } from "../../helpers/fetching";

export default function CreateReview({ setReviews, token }) {
    const [rating, setRating] = useState('');
    const [body, setBody] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        async function createReview() {
            const newReview = {
                rating,
                body
            }
            const result = await addReview(newReview, token);
            const updateReview = await fetchAllReviews();
            setReviews(updateReview.reviews);
            return result;
        }
        createReview();

        setRating('');
        setBody('');
    }

    return(
        <><h3>Add a review</h3>
            <form onSubmit={submitHandler}>
                <input placeholder="rating" value={rating} onChange={(e) => setRating(e.target.value)} />
                <br /><br />
                <input placeholder="body" value={body} onChange={(e) => setBody(e.target.value)} /><br/>
    
                <button type="submit">Create Review</button>
            </form>
        </>
    );
}