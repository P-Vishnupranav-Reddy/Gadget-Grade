import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Rewards = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tasks] = useState([
    "Write a review for a product you've purchased.",
    "Share your feedback on a recent gadget.",
    "Help others by rating your experience."
  ]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || !user.name) {
      setError('User not logged in');
      setLoading(false);
      return;
    }

    const user_name = user.name;

    axios
      .get(`http://localhost:5000/reviews1?user_name=${user_name}`)
      .then((response) => {
        setReviews(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching reviews');
        console.error(err);
        setLoading(false);
      });
  }, []);

  const getRewardMessage = (count) => {
    if (count >= 10) {
      return "🎉 Congratulations! You've earned a Rs.300 gift card!";
    } else if (count >= 5) {
      return "🌟 Great job! You're close to earning a reward!";
    } else {
      return "Keep writing reviews to earn exciting rewards!";
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const reviewCount = reviews.length;

  return (
    <div className="rewards-container">
      <h1 className="rewards-header">Rewards Page</h1>
      <div className="user-stats">
        <h2>Hi there!</h2>
        <p>You have written <strong>{reviewCount}</strong> reviews.</p>
        <p>{getRewardMessage(reviewCount)}</p>
      </div>
      {reviewCount >= 10 && (
        <div className="reward-box">
          <h3>🎁 Claim Your Reward</h3>
          <p>You've earned a Rs.300 gift card! Check your email for details.</p>
        </div>
      )}
      <div className="tasks-section">
        <h2>Tasks to Earn More Rewards</h2>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rewards;