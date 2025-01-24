import { useParams } from 'react-router-dom';

function CheckoutPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Checkout</h1>
      <p>You're buying product with ID: {id}</p>
    </div>
  );
}

export default CheckoutPage;
