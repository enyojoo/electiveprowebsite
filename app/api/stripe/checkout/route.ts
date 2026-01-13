import { NextRequest, NextResponse } from "next/server"
import { getStripe } from "@/lib/stripe"
import { BRAND_APP_URL } from "@/lib/brand-constants"

export async function POST(request: NextRequest) {
  try {
    const { priceId } = await request.json()

    if (!priceId) {
      return NextResponse.json({ error: "Price ID is required" }, { status: 400 })
    }

    const stripe = getStripe()
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${BRAND_APP_URL}/pricing?success=true`,
      cancel_url: `${BRAND_APP_URL}/pricing?canceled=true`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    const errorMessage = error instanceof Error ? error.message : "Failed to create checkout session"
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
