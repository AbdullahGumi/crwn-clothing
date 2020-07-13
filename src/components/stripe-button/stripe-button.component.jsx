import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'YOUR_API_KEY';

	const onToken = token => {
		console.log(token);
		alert('Payment Successful')
	}


	return (
		<StripeCheckout 
			label ='pay now'
			name= 'CRWN Clothing ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description ={`Your total is $${price}`} 
			amount = {priceForStripe}
			panelLabel ='Pay Now'
			token ={onToken}
			stripeKey={publishableKey}
		/>
		);
};

export default StripeCheckoutButton;