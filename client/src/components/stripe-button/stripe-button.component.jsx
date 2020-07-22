import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_ZxRQRfhbTy8MbSt48rgEaCvW00CdGnomeC';

	const onToken = token => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token
			}
		}).then(response => {
			alert('Your payment was successful')
		}).catch(error => {
			console.log('Payment Error: ', error);
			alert('There was an issue with your payment!. Please make sure you use the provided credit card');
		});
	};


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