// ReviewModel.js
const ReviewModel = {
    id: null,
    customerName: '',
    reviewText: '',
  };
  export default ReviewModel;
  const reviews = [
    {
      ...ReviewModel,
      id: 1,
      customerName: 'Customer 1',
      reviewText: "I bought the scented candle for my wife, and she absolutely loves it! The fragrance is amazing and it lasts for a long time.",
    },
    {
      ...ReviewModel,
      id: 2,
      customerName: 'Customer 2',
      reviewText: "The personalized slippers are so comfortable! Perfect gift idea, I highly recommend it.",
    },
    {
      ...ReviewModel,
      id: 3,
      customerName: 'Customer 3',
      reviewText: "The decorative lamp I ordered fits beautifully in my living room. Thank you for the quick delivery and amazing quality!",
    },
    {
      ...ReviewModel,
      id: 4,
      customerName: 'Customer 4',
      reviewText: "Amazing quality of products :heart_eyes:",
    },
  ];
  export { ReviewModel, reviews };









