
import { loadStripe } from "@stripe/stripe-js";
export async function checkout({lineItems,description}) {    
   let stripePromise = null;
   let getStripe = () => {
      if (!stripePromise) {
         stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
      }
      return stripePromise;
   }
   const stripe = await getStripe();
  
   await stripe.redirectToCheckout({
     mode: "payment",
     lineItems,
     successUrl: `${process.env.NEXT_PUBLIC_BASE_URL}?session_id={CHECKOUT_SESSION_ID}?description=${description}`,
     cancelUrl: window.location.origin,
   
   }
   )
}