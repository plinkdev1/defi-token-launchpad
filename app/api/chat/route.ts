import { generateText } from "ai"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const lastMessage = messages[messages.length - 1]

    const systemPrompt = `You are the Treezures Labs AI assistant. You help users understand:
- Treasury governance and tokenomics
- Funding opportunities and application process
- DeFi concepts and blockchain technology
- The Treezures ecosystem and its features

Be helpful, concise, and professional. If asked about specific numbers or data, refer users to the Governance page for the most up-to-date information.`

    const { text } = await generateText({
      model: "xai/grok-3-fast",
      system: systemPrompt,
      prompt: lastMessage.content,
      maxTokens: 500,
    })

    return Response.json({ content: text })
  } catch (error) {
    console.error("Chat API error:", error)
    return Response.json({ content: "I apologize, but I encountered an error. Please try again." }, { status: 500 })
  }
}
