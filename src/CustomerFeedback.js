import React from 'react';

function CustomerFeedback() {
  const feedback = [
    {
      image: <img src='https://randomuser.me/api/portraits/men/51.jpg'/>,
      name: 'Jenny Wilson',
      rating: 5,
      comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
    },
    {
      image: <img src='https://randomuser.me/api/portraits/women/60.jpg'/>,
      name: 'Dianne Russell',
      rating: 5,
      comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
    },
    {
      image: <img src='https://randomuser.me/api/portraits/men/77.jpg'/>,
      name: 'Devon Lane',
      rating: 5,
      comment: 'Normally wings are wings, but theirs are lean meaty and tender, and also perfectly crisp.',
    },
  ];

  return (
    <div className="customer-feedback">
      <h3>Customer's Feedback</h3>
      <ul>
        {feedback.map((fb, index) => (
          <li key={index}>
            <span>{fb.image}</span>
            <span>{fb.name}</span>
            <span>{'⭐'.repeat(fb.rating)}</span>
            <p>{fb.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerFeedback;
