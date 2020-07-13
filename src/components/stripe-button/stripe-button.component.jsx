import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_ZxRQRfhbTy8MbSt48rgEaCvW00CdGnomeC';

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