// ReviewModel.js

// Defining a model (object structure) for storing individual review information
const ReviewModel = {
  id: null,               // Unique identifier for the review (initialized as null)
  customerName: '',       // Name of the customer who wrote the review (empty string as a placeholder)
  reviewText: '',         // The content of the review (empty string as a placeholder)
};

// Exporting the ReviewModel object for use in other parts of the application
export default ReviewModel;

// Defining an array of reviews, each based on the ReviewModel structure
const reviews = [
  {
    ...ReviewModel,                    // Spread the ReviewModel object to inherit its properties
    id: 1,                              // Unique identifier for the review
    customerName: 'Customer 1',         // Customer's name for this review
    reviewText: "I bought the scented candle for my wife, and she absolutely loves it! The fragrance is amazing and it lasts for a long time.",  // Review content
  },
  {
    ...ReviewModel,                    // Spread the ReviewModel object to inherit its properties
    id: 2,                              // Unique identifier for the review
    customerName: 'Customer 2',         // Customer's name for this review
    reviewText: "The personalized slippers are so comfortable! Perfect gift idea, I highly recommend it.",  // Review content
  },
  {
    ...ReviewModel,                    // Spread the ReviewModel object to inherit its properties
    id: 3,                              // Unique identifier for the review
    customerName: 'Customer 3',         // Customer's name for this review
    reviewText: "The decorative lamp I ordered fits beautifully in my living room. Thank you for the quick delivery and amazing quality!",  // Review content
  },
  {
    ...ReviewModel,                    // Spread the ReviewModel object to inherit its properties
    id: 4,                              // Unique identifier for the review
    customerName: 'Customer 4',         // Customer's name for this review
    reviewText: "Amazing quality of products :heart_eyes:",  // Review content (emoji used in review)
  },
];

// Exporting both ReviewModel and reviews to be used in other parts of the application
export { ReviewModel, reviews };
