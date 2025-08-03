import React, { useState, useEffect } from "react";

// Helper function to format the date to show only the date (MM/DD/YYYY)
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(); // Formats as "MM/DD/YYYY"
};

const WatchCard = ({ watch }) => {
  // Fetch logged-in user details from localStorage
  const loggedInUser = (() => {
    try {
      const user = localStorage.getItem("user");
      return user ? JSON.parse(user) : null; // Parse if user data exists
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      return null; // Fallback to null if parsing fails
    }
  })();

  const [reviewDetails, setReviewDetails] = useState({
    gadget_id: watch.id,
    user_name: loggedInUser?.name || "", // Automatically use logged-in user's name
    rating: "",
    comment: "",
  });
  const [reviews, setReviews] = useState([]); // To store reviews
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch reviews when the component mounts
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch(`http://localhost:5000/reviews/${watch.id}`);
      const data = await response.json();

      if (response.ok) {
        setReviews(data); // Set fetched reviews
      } else {
        console.error("Failed to fetch reviews:", data.message);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false); // End loading
    }
  };

  const changeHandler = (e) => {
    setReviewDetails({ ...reviewDetails, [e.target.name]: e.target.value });
  };

  const addReview = async () => {
    const { gadget_id, user_name, rating, comment } = reviewDetails;

    if (!user_name || !rating || !comment) {
      alert("Please fill out all required fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/postreviews", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gadget_id, user_name, rating, comment }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Review added successfully!");
        setReviewDetails({
          gadget_id: watch.id,
          user_name: loggedInUser?.name || "", // Reset with logged-in user's name
          rating: "",
          comment: "",
        });
        fetchReviews(); // Refresh reviews after adding
      } else {
        alert(data.message || "Successfully added review.");
      }
    } catch (error) {
      console.error("Error adding review:", error);
      alert("An error occurred while adding the review. Please try again later.");
    }
  };

  // Helper function to render stars based on rating
  const renderStars = (rating) => {
    const filledStars = Array.from({ length: rating }, (_, index) => (
      <span key={index} className="star filled">&#9733;</span>
    ));
    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
      <span key={index + rating} className="star empty">&#9734;</span>
    ));
    return [...filledStars, ...emptyStars];
  };

  return (
    <div className="product-card">
      <img src={watch.image_url} alt={watch.model_name} />
      <h3>
        {watch.brand_name} {watch.model_name}
      </h3> 
      <div className="reviews-section">
        <h4>Customer Reviews</h4>
        {loading ? (
          <p>Loading reviews...</p>
        ) : reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="review-card">
              <p><strong>{review.user_name}</strong><strong className="rating" style={{ marginLeft: '20px' }}>{renderStars(review.rating)}</strong></p>
              <p>{review.comment}</p>
              <p>{formatDate(review.created_at)}</p> {/* Only the date */}
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to review!</p>
        )}
      </div>

      {/* Add Review Form */}
      <div className="add-review-form">
        <h4>Add a Review</h4>
        {!loggedInUser ? (
          <p>Please log in to add a review.</p> // Message for users who are not logged in
        ) : (
          <>
            <div className="mb-3">
              <h5>Rating:</h5>
              <select
                value={reviewDetails.rating}
                onChange={changeHandler}
                name="rating"
                className="bg-primary outline-none max-w-80 w-full py-3 px-4"
              >
                <option value="">Select rating</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <h5>Review:</h5>
              <textarea
                value={reviewDetails.comment}
                onChange={changeHandler}
                name="comment"
                placeholder="Write your review..."
                className="bg-primary outline-none max-w-80 w-full py-3 px-4"
              />
            </div>
            <button
              onClick={addReview}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Submit Review
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WatchCard;
