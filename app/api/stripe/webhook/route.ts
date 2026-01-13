import { NextRequest, NextResponse } from "next/server"
import { getStripe } from "@/lib/stripe"
import Stripe from "stripe"

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(request: NextRequest) {
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "STRIPE_WEBHOOK_SECRET is not set" },
      { status: 500 }
    )
  }

  const body = await request.text()
  const signature = request.headers.get("stripe-signature")

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    const stripe = getStripe()
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error"
    console.error("Webhook signature verification failed:", errorMessage)
    return NextResponse.json(
      { error: `Webhook Error: ${errorMessage}` },
      { status: 400 }
    )
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session
      console.log("Checkout session completed:", session.id)
      // Handle successful checkout (e.g., update user subscription in database)
      break
    case "customer.subscription.created":
    case "customer.subscription.updated":
      const subscription = event.data.object as Stripe.Subscription
      console.log("Subscription updated:", subscription.id)
      // Handle subscription updates
      break
    case "customer.subscription.deleted":
      const deletedSubscription = event.data.object as Stripe.Subscription
      console.log("Subscription deleted:", deletedSubscription.id)
      // Handle subscription cancellation
      break
    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
