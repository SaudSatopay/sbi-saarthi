<div align="center">

# ✦ SBI Saarthi

### An Agentic AI Engagement Concierge for every customer

**Your bank, one step ahead.**

[**▶ Live demo**](https://saudsatopay.github.io/sbi-saarthi/) · SBI Hackathon @ Global Fintech Fest 2026 · Theme: *Agentic AI & Emerging Tech* · Problem statement: *Digital Engagement*

</div>

---

## The idea

Bank engagement today is **reactive** (it waits for you to open the app), **generic** (broadcast SMS and push → notification blindness) and **unactionable** (it tells you something; you do the work). For ~50 crore customers, a human relationship manager only exists for the wealthiest 1%.

**Saarthi flips all three.** It is a crew of autonomous AI agents that:

- **Senses** money-moments in real time — idle balance, an EMI at risk, a dormant account, a closing tax window, a scam pattern.
- **Reasons** about the right next-best-action for *that* customer.
- **Personalises** language, channel and timing (22 Indian languages, voice + text).
- **Acts** — one tap executes the outcome end-to-end (book the FD, shift the EMI, start the SIP, reactivate the account, block the scam).
- **Guards** every action behind consent, suitability, anti-spam and scam checks.
- **Learns** from every outcome to retune timing, channel and offers.

This is only possible with genuine **agentic AI** — autonomy, planning, tool-use, multi-agent orchestration and guardrails — not a chatbot.

## What this repo is

A **super-polished, interactive product demo**. On the left, a phone shows what the customer feels; on the right, a live console streams what the agent crew is *thinking*. Pick a money-moment, switch the language, and tap to act.

### Five hero scenarios
| Scenario | Moment | Outcome |
|---|---|---|
| 💤 Idle money | ₹85,000 idle for 40 days | Sweep-FD booked |
| 🛡️ EMI shield | EMI due, salary delayed | Bounce prevented |
| 📞 Dormant revival | Account dormant 9 months | Reactivated in Tamil, by voice |
| 🧾 Tax saver | FY-end, 80C empty | ELSS SIP started |
| ⚠️ Scam shield | Risky transfer detected | ₹40,000 saved |

Each runs the full **sense → reason → guard → personalise → act → learn** trace in English / हिंदी / தமிழ்.

## Tech stack

- **Frontend (this demo):** React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion
- **Proposed platform:** LangGraph / CrewAI multi-agent orchestration · Claude for reasoning & tool-use · AI4Bharat / Bhashini & Sarvam for 22-language voice · XGBoost / contextual bandits for next-best-action · Kafka event streams · Postgres + pgvector · Account Aggregator consent · OPA guardrails

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to /docs for GitHub Pages
```

## Architecture

```
Real-time signals
        ↓
   Sensor Agent ──────────────────────────────┐
        ↓                                      │
 Memory ⇄ Orchestrator · Planner ⇄ Learning Loop
        ↓
 Insight & NBA · Guardrail & Consent · Personalization · Action & Execution
        ↓
 Omnichannel delivery (YONO · WhatsApp · Voice · SMS)
        ↓
     Customer  ──► outcomes feed the Learning Loop
```

## Team

**SAS CODIES** — SBI Hackathon @ GFF 2026.

---

<div align="center">
<sub>Concept prototype for the SBI Hackathon. Not affiliated with State Bank of India. Figures shown are illustrative.</sub>
</div>
