// ─────────────────────────────────────────────────────────────────────────────
// SBI Saarthi — scenario engine data
// Each scenario carries the multi-agent reasoning trace (what the AI crew "thinks")
// and the trilingual customer-facing message (what the human actually receives).
// Numbers are illustrative, for demonstration.
// ─────────────────────────────────────────────────────────────────────────────

export type Lang = 'en' | 'hi' | 'ta'

export type AgentKey =
  | 'sensor'
  | 'memory'
  | 'orchestrator'
  | 'insight'
  | 'guardrail'
  | 'personalize'
  | 'deliver'
  | 'action'

export interface AgentMeta {
  name: string
  color: string
}

export const AGENTS: Record<AgentKey, AgentMeta> = {
  sensor: { name: 'SENSOR', color: '#37D6C3' },
  memory: { name: 'MEMORY', color: '#6E8BFF' },
  orchestrator: { name: 'ORCHESTRATOR', color: '#F6B53D' },
  insight: { name: 'INSIGHT', color: '#A6E22E' },
  guardrail: { name: 'GUARDRAIL', color: '#5FE0A8' },
  personalize: { name: 'PERSONALIZE', color: '#FF7A8A' },
  deliver: { name: 'DELIVER', color: '#9AA3B5' },
  action: { name: 'ACTION', color: '#F6B53D' },
}

export interface AgentLine {
  agent: AgentKey
  text: string
  highlight?: boolean
}

export interface LocalizedMessage {
  greeting: string
  body: string
  cta: string
  success: string
}

export type Accent = 'saffron' | 'teal' | 'iris' | 'rose' | 'lime'

export const ACCENT_HEX: Record<Accent, string> = {
  saffron: '#F6B53D',
  teal: '#37D6C3',
  iris: '#6E8BFF',
  rose: '#FF7A8A',
  lime: '#A6E22E',
}

export interface Scenario {
  id: string
  label: string
  short: string
  moment: string
  channel: 'WhatsApp' | 'YONO' | 'Voice'
  persona: { name: string; sub: string }
  accent: Accent
  steps: AgentLine[]
  onAction: AgentLine[]
  message: Record<Lang, LocalizedMessage>
  outcome: { label: string; value: string }
}

export const LANGS: { id: Lang; label: string; native: string }[] = [
  { id: 'en', label: 'English', native: 'English' },
  { id: 'hi', label: 'Hindi', native: 'हिंदी' },
  { id: 'ta', label: 'Tamil', native: 'தமிழ்' },
]

export const SCENARIOS: Scenario[] = [
  // ── 1. Idle money ──────────────────────────────────────────────────────────
  {
    id: 'idle',
    label: 'Idle money',
    short: 'Idle balance · 40 days',
    moment: '₹85,000 sitting idle for 40 days',
    channel: 'WhatsApp',
    persona: { name: 'Ravi K.', sub: 'Savings · Pune' },
    accent: 'saffron',
    steps: [
      { agent: 'sensor', text: 'moment.detected → SAVINGS_IDLE  ₹85,000 · idle 40d' },
      { agent: 'memory', text: 'profile → Ravi K. · risk=moderate · lang=hi · best=WhatsApp@11:00' },
      { agent: 'orchestrator', text: 'plan → engage=TRUE · priority=HIGH · frequency_cap=OK' },
      { agent: 'insight', text: 'NBA → SWEEP_FD · propensity=0.82 · gain≈+₹3,140/yr · liquid=yes' },
      { agent: 'guardrail', text: 'consent(AA)✓ suitability✓ spam_cap✓ scam=none → APPROVE', highlight: true },
      { agent: 'personalize', text: 'compose → tone=warm · lang=hi · channel=WhatsApp · cta=one_tap' },
      { agent: 'deliver', text: '→ WhatsApp · delivered · awaiting consent…' },
    ],
    onAction: [
      { agent: 'action', text: 'EXECUTE sweep_fd(₹50,000 @7.10%) → BOOKED · ref SBI/FD/8842', highlight: true },
      { agent: 'orchestrator', text: 'outcome=CONVERTED · reward=+1 · update_policy(channel,timing)' },
    ],
    message: {
      en: {
        greeting: 'Namaste Ravi 👋',
        body: '₹85,000 has been resting in your savings for 40 days. I can move ₹50,000 into a 7.1% Sweep-FD — about ₹3,140 more this year, and it stays instantly withdrawable. Shall I set it up?',
        cta: 'Yes, open the Sweep-FD',
        success: 'Done — ₹50,000 booked at 7.10%. Ref SBI/FD/8842. You’ll earn ~₹3,140 more this year, fully liquid. 🎉',
      },
      hi: {
        greeting: 'नमस्ते रवि 👋',
        body: 'आपके बचत खाते में ₹85,000 पिछले 40 दिनों से बिना उपयोग पड़े हैं। मैं ₹50,000 को 7.1% वाली स्वीप-FD में लगा सकता हूँ — इस साल लगभग ₹3,140 ज़्यादा, और पैसा कभी भी निकाला जा सकता है। शुरू कर दूँ?',
        cta: 'हाँ, स्वीप-FD खोलें',
        success: 'हो गया — ₹50,000 को 7.10% पर बुक कर दिया। संदर्भ: SBI/FD/8842। इस साल लगभग ₹3,140 अधिक, पूरी तरह तरल। 🎉',
      },
      ta: {
        greeting: 'வணக்கம் ரவி 👋',
        body: 'உங்கள் சேமிப்புக் கணக்கில் ₹85,000 கடந்த 40 நாட்களாகப் பயன்படுத்தப்படாமல் உள்ளது. ₹50,000-ஐ 7.1% ஸ்வீப்-FD-யில் மாற்றலாம் — இந்த ஆண்டு சுமார் ₹3,140 கூடுதல், எப்போது வேண்டுமானாலும் எடுக்கலாம். தொடங்கட்டுமா?',
        cta: 'ஆம், ஸ்வீப்-FD திற',
        success: 'முடிந்தது — ₹50,000 7.10%-ல் பதிவு செய்யப்பட்டது. குறிப்பு: SBI/FD/8842. இந்த ஆண்டு சுமார் ₹3,140 கூடுதல். 🎉',
      },
    },
    outcome: { label: 'Idle funds mobilised', value: '₹50,000' },
  },

  // ── 2. EMI shield ──────────────────────────────────────────────────────────
  {
    id: 'emi',
    label: 'EMI shield',
    short: 'EMI at risk · salary delayed',
    moment: 'EMI due in 3 days, salary not credited',
    channel: 'WhatsApp',
    persona: { name: 'Meera S.', sub: 'Home loan · Indore' },
    accent: 'teal',
    steps: [
      { agent: 'sensor', text: 'moment.detected → EMI_AT_RISK  ₹24,300 due 05-Jul · salary=MISSING' },
      { agent: 'memory', text: 'profile → Meera S. · home_loan · on_time_streak=22mo · lang=hi' },
      { agent: 'orchestrator', text: 'plan → engage=TRUE · intent=PROTECT(non-sales) · priority=URGENT' },
      { agent: 'insight', text: 'options → [shift_date·1x] [part_pay] [remind] · recommend=shift_date' },
      { agent: 'guardrail', text: 'eligibility(1 free shift/yr)✓ penalty=0 · CIBIL_safe✓ → APPROVE', highlight: true },
      { agent: 'personalize', text: 'compose → tone=reassuring · lang=hi · channel=WhatsApp' },
      { agent: 'deliver', text: '→ WhatsApp · delivered · awaiting choice…' },
    ],
    onAction: [
      { agent: 'action', text: 'EXECUTE emi.shift_due_date(05→10 Jul) → DONE · 0 penalty · CIBIL safe', highlight: true },
      { agent: 'orchestrator', text: 'outcome=BOUNCE_PREVENTED · trust+ · reward=+1' },
    ],
    message: {
      en: {
        greeting: 'Hi Meera 👋',
        body: 'Your home-loan EMI of ₹24,300 is due on 5 Jul, but I notice your salary hasn’t arrived yet. To protect your 22-month on-time streak, I can shift this month’s date to 10 Jul — no penalty, no credit-score impact. Want me to?',
        cta: 'Yes, shift to 10 Jul',
        success: 'Sorted — EMI date moved to 10 Jul, zero penalty, your CIBIL stays clean. I’ll remind you on 9 Jul. 🙏',
      },
      hi: {
        greeting: 'नमस्ते मीरा 👋',
        body: 'आपकी होम-लोन EMI ₹24,300 की देय तिथि 5 जुलाई है, पर मुझे दिख रहा है कि सैलरी अभी नहीं आई। आपकी 22 महीने की समय-पर भुगतान साख बचाने के लिए मैं इस बार तिथि 10 जुलाई कर सकता हूँ — कोई जुर्माना नहीं, क्रेडिट स्कोर पर असर नहीं। कर दूँ?',
        cta: 'हाँ, 10 जुलाई कर दें',
        success: 'हो गया — EMI तिथि 10 जुलाई कर दी, कोई जुर्माना नहीं, आपका CIBIL सुरक्षित। 9 जुलाई को याद दिला दूँगा। 🙏',
      },
      ta: {
        greeting: 'வணக்கம் மீரா 👋',
        body: 'உங்கள் வீட்டுக் கடன் EMI ₹24,300 ஜூலை 5-ஆம் தேதி செலுத்த வேண்டும், ஆனால் உங்கள் சம்பளம் இன்னும் வரவில்லை. உங்கள் 22 மாத சரியான நேரக் கட்டண சாதனையைக் காக்க, இம்மாதம் தேதியை ஜூலை 10 ஆக மாற்றலாம் — அபராதம் இல்லை, கடன் மதிப்பெண் பாதிப்பு இல்லை. மாற்றட்டுமா?',
        cta: 'ஆம், ஜூலை 10 ஆக மாற்று',
        success: 'முடிந்தது — EMI தேதி ஜூலை 10 ஆக மாற்றப்பட்டது, அபராதம் இல்லை, CIBIL பாதுகாப்பு. ஜூலை 9-ல் நினைவூட்டுகிறேன். 🙏',
      },
    },
    outcome: { label: 'EMI bounce prevented', value: '₹24,300' },
  },

  // ── 3. Dormant revival ─────────────────────────────────────────────────────
  {
    id: 'dormant',
    label: 'Dormant revival',
    short: 'Dormant · 9 months',
    moment: 'Account dormant 9 months — vernacular voice',
    channel: 'Voice',
    persona: { name: 'Anand P.', sub: 'Savings · Tier-3 · Salem' },
    accent: 'iris',
    steps: [
      { agent: 'sensor', text: 'moment.detected → DORMANT  no_txn=9mo · balance=₹1,210' },
      { agent: 'memory', text: 'profile → Anand P. · tier-3 · lang=ta · digital_literacy=low · channel=Voice' },
      { agent: 'orchestrator', text: 'plan → engage=TRUE · intent=REACTIVATE · channel=Voice(vernacular)' },
      { agent: 'insight', text: 'hook → micro_goal RD ₹500/mo + re-KYC(video) · propensity=0.61' },
      { agent: 'guardrail', text: 'DND_registry✓ call_window(10-18h)✓ consent_script✓ → APPROVE', highlight: true },
      { agent: 'personalize', text: 'compose → voice=ta · tone=respectful · pace=slow' },
      { agent: 'deliver', text: '→ Voice · outbound · connected 0:38 · transcript ↓' },
    ],
    onAction: [
      { agent: 'action', text: 'EXECUTE account.reactivate + rd.open(₹500/mo) → DONE · re-KYC sent', highlight: true },
      { agent: 'orchestrator', text: 'outcome=REVIVED · dormant→active · reward=+1' },
    ],
    message: {
      en: {
        greeting: '📞 Saarthi voice call · in Tamil',
        body: '“Vanakkam Anand. Your SBI account has been quiet for a while. Shall I help restart it in 2 minutes — and open a small ₹500/month recurring deposit so your savings grow? I’ll send a video-KYC link, no branch visit needed.”',
        cta: 'Reactivate + start ₹500 RD',
        success: 'Welcome back! Account reactivated, ₹500/mo RD opened, video-KYC link sent on SMS. 🌱',
      },
      hi: {
        greeting: '📞 सारथी वॉइस कॉल · तमिल में',
        body: '“वणक्कम् आनंद। आपका SBI खाता कुछ समय से शांत है। क्या मैं इसे 2 मिनट में फिर चालू करने में मदद करूँ — और ₹500/महीने की छोटी RD खोल दूँ ताकि बचत बढ़े? वीडियो-KYC लिंक भेज दूँगा, शाखा जाने की ज़रूरत नहीं।”',
        cta: 'फिर चालू करें + ₹500 RD',
        success: 'वापसी पर स्वागत है! खाता फिर चालू, ₹500/माह RD खुली, वीडियो-KYC लिंक SMS पर भेजा। 🌱',
      },
      ta: {
        greeting: '📞 சார்த்தி குரல் அழைப்பு · தமிழில்',
        body: '“வணக்கம் ஆனந்த். உங்கள் SBI கணக்கு சில காலமாக செயலற்று உள்ளது. அதை 2 நிமிடத்தில் மீண்டும் இயக்க உதவட்டுமா — மேலும் ₹500/மாதம் சிறிய RD திறந்து சேமிப்பை வளர்க்கலாமா? வீடியோ-KYC இணைப்பு அனுப்புகிறேன், கிளைக்குச் செல்ல வேண்டாம்.”',
        cta: 'மீண்டும் இயக்கு + ₹500 RD',
        success: 'மீண்டும் வரவேற்கிறோம்! கணக்கு செயல்படுத்தப்பட்டது, ₹500/மாத RD திறக்கப்பட்டது, வீடியோ-KYC இணைப்பு SMS-ல் அனுப்பப்பட்டது. 🌱',
      },
    },
    outcome: { label: 'Dormant account revived', value: 'Active' },
  },

  // ── 4. Tax saver ───────────────────────────────────────────────────────────
  {
    id: 'tax',
    label: 'Tax saver',
    short: 'FY-end · 80C empty',
    moment: 'Year-end tax window closing, 30% slab',
    channel: 'YONO',
    persona: { name: 'Priya R.', sub: 'Salaried · Bengaluru' },
    accent: 'lime',
    steps: [
      { agent: 'sensor', text: 'moment.detected → TAX_WINDOW  FY-end 28d · 80C_used=₹0 · slab=30%' },
      { agent: 'memory', text: 'profile → Priya R. · risk=mod-high · goal=wealth · lang=en' },
      { agent: 'orchestrator', text: 'plan → engage=TRUE · intent=ADVISE+ACT · priority=HIGH' },
      { agent: 'insight', text: 'NBA → ELSS_SIP ₹12,500/mo · tax_saved≈₹46,800 · 3 funds risk-matched' },
      { agent: 'guardrail', text: 'suitability(risk-fit)✓ MF_disclaimer✓ consent✓ → APPROVE', highlight: true },
      { agent: 'personalize', text: 'compose → tone=advisory · lang=en · channel=YONO · show=fund_options' },
      { agent: 'deliver', text: '→ YONO card · delivered · awaiting selection…' },
    ],
    onAction: [
      { agent: 'action', text: 'EXECUTE elss_sip.start(₹12,500/mo · SBI LongTermEquity) → ACTIVE · NACH set', highlight: true },
      { agent: 'orchestrator', text: 'outcome=CONVERTED · cross_sell=MF · reward=+1' },
    ],
    message: {
      en: {
        greeting: 'Hi Priya 👋',
        body: 'The financial year ends in 28 days and your 80C is still empty. A ₹12,500/month ELSS SIP could save you about ₹46,800 in tax — and stay invested for growth. I’ve shortlisted 3 SBI funds matched to your risk. Start the top pick?',
        cta: 'Start ₹12,500/mo ELSS SIP',
        success: 'Started — ELSS SIP of ₹12,500/mo is active (SBI Long Term Equity), auto-debit set. Est. tax saved ₹46,800. 📈  Mutual funds are subject to market risk.',
      },
      hi: {
        greeting: 'नमस्ते प्रिया 👋',
        body: 'वित्तीय वर्ष 28 दिनों में समाप्त हो रहा है और आपका 80C अभी खाली है। ₹12,500/महीने की ELSS SIP से लगभग ₹46,800 टैक्स बच सकता है — और निवेश बढ़ता भी रहेगा। मैंने आपके जोखिम के अनुसार 3 SBI फंड चुने हैं। सबसे ऊपर वाला शुरू करें?',
        cta: '₹12,500/माह ELSS SIP शुरू करें',
        success: 'शुरू — ₹12,500/माह की ELSS SIP सक्रिय (SBI Long Term Equity), ऑटो-डेबिट सेट। अनुमानित टैक्स बचत ₹46,800। 📈  म्यूचुअल फंड बाज़ार जोखिम के अधीन हैं।',
      },
      ta: {
        greeting: 'வணக்கம் பிரியா 👋',
        body: 'நிதியாண்டு 28 நாட்களில் முடிகிறது, உங்கள் 80C இன்னும் காலியாக உள்ளது. ₹12,500/மாதம் ELSS SIP மூலம் சுமார் ₹46,800 வரி சேமிக்கலாம் — மேலும் வளர்ச்சிக்காக முதலீடும் தொடரும். உங்கள் இடர்ப்பாட்டுக்கு ஏற்ப 3 SBI ஃபண்டுகளைத் தேர்ந்தெடுத்துள்ளேன். முதலாவதைத் தொடங்கலாமா?',
        cta: '₹12,500/மாதம் ELSS SIP தொடங்கு',
        success: 'தொடங்கப்பட்டது — ₹12,500/மாத ELSS SIP செயலில் (SBI Long Term Equity), தானியங்கி பற்று அமைக்கப்பட்டது. மதிப்பிட்ட வரி சேமிப்பு ₹46,800. 📈  பரஸ்பர நிதிகள் சந்தை இடர்ப்பாட்டுக்கு உட்பட்டவை.',
      },
    },
    outcome: { label: 'Tax saved (est.)', value: '₹46,800' },
  },

  // ── 5. Scam shield ─────────────────────────────────────────────────────────
  {
    id: 'scam',
    label: 'Scam shield',
    short: 'Scam pattern · payment paused',
    moment: 'Risky transfer matches a known scam',
    channel: 'YONO',
    persona: { name: 'Karthik V.', sub: 'UPI user · Chennai' },
    accent: 'rose',
    steps: [
      { agent: 'sensor', text: 'moment.detected → SCAM_PATTERN  new_payee · ₹40,000 · "KYC-unblock" link' },
      { agent: 'memory', text: 'profile → Karthik V. · payee_history=0 · device_change=NO' },
      { agent: 'orchestrator', text: 'plan → intent=PROTECT · priority=CRITICAL · interrupt=TRUE' },
      { agent: 'insight', text: 'risk → mule_match=0.91 · social_eng_markers=4 → STOP' },
      { agent: 'guardrail', text: 'soft_block payment · require_2nd_confirm · log_fraud_signal', highlight: true },
      { agent: 'personalize', text: 'compose → tone=calm-firm · lang=en · channel=push_interrupt' },
      { agent: 'deliver', text: '→ payment PAUSED · alert delivered · awaiting user…' },
    ],
    onAction: [
      { agent: 'action', text: 'EXECUTE payment.cancel + payee.report → BLOCKED · ₹40,000 saved', highlight: true },
      { agent: 'orchestrator', text: 'outcome=FRAUD_AVERTED · trust++ · reward=+1' },
    ],
    message: {
      en: {
        greeting: '⚠️ Hold on, Karthik',
        body: 'You’re about to send ₹40,000 to a brand-new payee linked to a “KYC-unblock” SMS. This matches a known scam pattern — SBI never asks you to pay to unblock KYC. I’ve paused the transfer. Is this someone you truly know?',
        cta: 'Cancel & report (recommended)',
        success: 'Good call — transfer cancelled and the payee reported. ₹40,000 stays safe. If anyone pressures you to pay, it’s a scam. 🛡️',
      },
      hi: {
        greeting: '⚠️ रुकिए, कार्तिक',
        body: 'आप ₹40,000 एक बिल्कुल नए पाने वाले को भेजने वाले हैं, जो “KYC-अनब्लॉक” SMS से जुड़ा है। यह एक ज्ञात धोखाधड़ी पैटर्न से मेल खाता है — SBI कभी KYC अनब्लॉक के लिए भुगतान नहीं माँगता। मैंने ट्रांसफ़र रोक दिया है। क्या आप इन्हें सचमुच जानते हैं?',
        cta: 'रद्द करें और रिपोर्ट करें',
        success: 'सही फ़ैसला — ट्रांसफ़र रद्द और पाने वाला रिपोर्ट किया। ₹40,000 सुरक्षित। अगर कोई भुगतान का दबाव डाले, तो वह धोखा है। 🛡️',
      },
      ta: {
        greeting: '⚠️ பொறுங்கள், கார்த்திக்',
        body: 'நீங்கள் ₹40,000-ஐ “KYC-அன்பிளாக்” SMS-உடன் இணைந்த புதிய நபருக்கு அனுப்பவிருக்கிறீர்கள். இது அறியப்பட்ட மோசடி முறையுடன் பொருந்துகிறது — KYC அன்பிளாக் செய்ய SBI ஒருபோதும் பணம் கேட்காது. பரிமாற்றத்தை நிறுத்திவிட்டேன். இவரை நீங்கள் உண்மையில் அறிவீர்களா?',
        cta: 'ரத்து செய்து புகாரளி',
        success: 'சரியான முடிவு — பரிமாற்றம் ரத்து, நபர் புகாரளிக்கப்பட்டார். ₹40,000 பாதுகாப்பு. யாராவது வற்புறுத்தினால் அது மோசடி. 🛡️',
      },
    },
    outcome: { label: 'Fraud averted', value: '₹40,000' },
  },
]
