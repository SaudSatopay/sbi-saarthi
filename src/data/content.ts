// Static content for the marketing/explainer sections.
// Impact figures are illustrative projections for the hackathon demo.

export interface Stat {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
  sub: string
}

export const STATS: Stat[] = [
  { value: 34, prefix: '+', suffix: '%', label: 'Monthly active engagement', sub: 'vs. broadcast push notifications' },
  { value: 1240, prefix: '₹', suffix: ' cr', label: 'Idle funds mobilised', sub: 'projected, across the base' },
  { value: 2.1, suffix: 'M', decimals: 1, label: 'Dormant accounts revived', sub: 'reactivated in-language' },
  { value: 18, prefix: '+', suffix: '%', label: 'Cross-sell conversion', sub: 'next-best-action vs. generic offers' },
  { value: 22, suffix: '', label: 'Indian languages', sub: 'voice + text, Bharat-first' },
  { value: 1.8, prefix: '<', suffix: 's', decimals: 1, label: 'Decision latency', sub: 'sense → reason → act' },
]

export interface Diff {
  index: string
  title: string
  body: string
  accent: 'saffron' | 'teal' | 'iris' | 'rose' | 'lime'
}

export const DIFFERENTIATORS: Diff[] = [
  {
    index: '01',
    title: 'Proactive, not reactive',
    body: 'Saarthi reaches the customer at the money-moment — it never waits for them to open the app.',
    accent: 'saffron',
  },
  {
    index: '02',
    title: 'Action, not advice',
    body: 'One tap executes the outcome end-to-end — book the FD, shift the EMI, start the SIP. The loop closes.',
    accent: 'teal',
  },
  {
    index: '03',
    title: 'Vernacular & voice-first',
    body: '22 Indian languages over text and voice — built for the 400M+ who will never use an English app.',
    accent: 'iris',
  },
  {
    index: '04',
    title: 'Guardrails-first',
    body: 'Every action clears consent, suitability, anti-spam and scam checks before it ever reaches a human.',
    accent: 'lime',
  },
  {
    index: '05',
    title: 'Revives the dormant',
    body: 'Turns silent accounts and single-product users into engaged relationships — defending against fintech churn.',
    accent: 'rose',
  },
]

export interface FlowStep {
  key: string
  title: string
  detail: string
}

export const FLOW: FlowStep[] = [
  { key: 'sense', title: 'Sense', detail: 'Event streams surface a moment that matters' },
  { key: 'decide', title: 'Decide', detail: 'Orchestrator weighs priority & frequency' },
  { key: 'reason', title: 'Reason', detail: 'Insight runs propensity / next-best-action' },
  { key: 'guard', title: 'Guard', detail: 'Consent, suitability, scam & spam checks' },
  { key: 'personalise', title: 'Personalise', detail: 'Language, channel and timing chosen' },
  { key: 'act', title: 'Act', detail: 'One-tap execution on banking APIs' },
  { key: 'learn', title: 'Learn', detail: 'Outcomes retrain timing & offers' },
]

export const TECH: { group: string; items: string[] }[] = [
  { group: 'Agents', items: ['LangGraph', 'CrewAI', 'Claude (reasoning + tool-use)', 'Fine-tuned SLMs'] },
  { group: 'Language & voice', items: ['AI4Bharat / Bhashini', 'Sarvam ASR–TTS', '22 languages'] },
  { group: 'Decisioning', items: ['XGBoost / LightGBM', 'Contextual bandits', 'Feast feature store'] },
  { group: 'Data & realtime', items: ['Apache Kafka', 'Postgres + pgvector', 'Redis'] },
  { group: 'Channels', items: ['YONO in-app', 'WhatsApp Business', 'Voice bot', 'SMS'] },
  { group: 'Trust & consent', items: ['Account Aggregator', 'OPA policy engine', 'Audit trail'] },
]

export interface ArchNode {
  id: string
  label: string
  sub: string
  kind: 'signal' | 'agent' | 'orchestrator' | 'channel' | 'support'
}

export const TEAM = {
  name: 'SAS CODIES',
  members: [
    { name: 'Saud Satopay', org: '' },
    { name: 'Aryan Walunj', org: '' },
    { name: 'Sahil Addagatla', org: '' },
  ],
  theme: 'Agentic AI & Emerging Tech',
  problem: 'Digital Engagement',
  event: 'SBI Hackathon @ Global Fintech Fest 2026',
}
