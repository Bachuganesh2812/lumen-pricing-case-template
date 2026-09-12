# LUMEN Germany: EDA & KPI business case

## Executive recommendation

Launch an 8-week pilot in **Berlin and Munich from late September, with demand activation in October**, at a **€2.19 retail price**. Lead with **Gym & Office** and **DTC subscription**; use selective grocery as a scale channel after repeat purchase is proven. This is a premium-accessible entry: it gives the CMO a credible price signal while protecting the CFO’s need for a short learning and payback cycle.

The deliberate sacrifice is maximum first-order acceptance and maximum unit margin. €1.79 is too thin for a premium story; €2.59 nearly halves acceptance. €2.19 is the best initial test of willingness to pay.

## EDA findings

- Germany’s market context indicates a large, growing opportunity; the energy/focus subcategory and 2026 total market headline make the problem worth a focused beachhead rather than a national launch.
- Berlin has the strongest launch case: 18% share of modeled market and 9% regional CAGR. Munich follows at 15% and 9% CAGR. Together they create a concentrated learning footprint.
- The German survey has 420 respondents. Stated preferred channels are Retail/Grocery 46.4% (195), DTC Online 28.3% (119), and Gym & Office 25.2% (106). Mean LUMEN purchase intent is 7.21/10.
- The price test shows acceptance of 61.7% at €1.79, 51.7% at €2.19, and 26.7% at €2.59. Retail contribution per unit is €0.40 / €0.63 / €0.86 at those prices; DTC is €0.77 / €1.16 / €1.54; Gym & Office is €0.81 / €1.13 / €1.45.
- Marketing funnel performance supports an owned-channel-first learning loop. Blended channel CACs are approximately €28.14 for Referral/Subscription, €37.53 for Influencer/Content, €45.79 for Paid Social, and €60.13 for Retail Sampling. LTV:CAC is near 2.7–2.9x across these historical channels, so the 3:1 target is a gate, not an assumption.
- Competitor average prices cluster around PulsUp €1.09, Mate Libre €1.60, VoltFit €2.41, and Root & Rise €2.85. €2.19 places LUMEN above mass and heritage value cues but below the most premium benchmark.
- Seasonality peaks in October (index 122) and November (115). Seed in September, then use October for the cleanest demand read.
- Home-market historical sales contain an intentional unusual spike and duplicate-row risk. Analysis should de-duplicate at the grain of country × channel × week and flag outliers; it should not be used as a direct Germany forecast.

## KPI framework and business justification

| KPI | Why it matters | Decision trigger | Action |
|---|---|---|---|
| Contribution per unit | Converts shelf price into money available for acquisition, distribution and learning. | ≥ €0.90 blended | Protect price; reduce discounting before cutting margin. |
| LTV:CAC | Ensures growth creates value, not just trial volume. | ≥ 3:1 | Shift budget toward the channel/segment with best payback. |
| 60-day repeat purchase | The best early signal that LUMEN is more than a novelty. | ≥ 30% | Scale the repeating segment; diagnose product/message if below. |
| Channel conversion | Identifies where German intent becomes behavior. | DTC ≥ 4% pilot target | Improve creative, landing page or offer before increasing spend. |
| Promo dependency | Protects premium positioning and prevents demand being rented. | <25% of units on promo | Prefer sampling and creator proof over blanket price cuts. |
| Trial-to-subscription rate | Turns the efficient DTC loop into retained revenue. | ≥15% of DTC buyers | Invest in onboarding, replenishment and referral mechanics. |
| City-level CAC and repeat | Prevents a national average from hiding a weak market. | Berlin/Munich both pass gates | Expand only the city-channel cells that pass. |

## Launch operating plan

1. **September:** build waitlist, creator seeding and Gym & Office sampling in Berlin/Munich. Keep the shelf price anchored at €2.19.
2. **October–November:** run the 8-week pilot. Track KPIs by city × channel × segment; do not expose survey PII in the product or deployment.
3. **December gate:** add selective grocery only if repeat is at least 30%, blended contribution is at least €0.90, and LTV:CAC reaches 3:1. Otherwise, fix the failing cell and extend the test.

## Data governance and limitations

The app uses aggregate metrics and qualitative quotes only. `customer_survey.csv` contains name/email-style fields, but these are intentionally excluded from the frontend and any derived output. No external API or API key is used. Results are directional because Germany has no LUMEN sales history; the pilot exists to replace survey intent with observed behavior.

### Regional analysis note

The dashboard now exposes all 16 German Bundesländer. The source data directly provides city-level signals for Berlin, Munich, Hamburg and Cologne plus an “Other Germany” aggregate; it does not provide observed state-level income or sales. Therefore the state cards are transparent modeled proxies: they combine the available city/region share and CAGR signals with an income-index assumption used only for prioritization. They should guide pilot sequencing, not be presented as measured regional demand. The first-wave recommendation remains Berlin and Bavaria/Munich, followed by Hamburg, Hesse/Frankfurt, Baden-Württemberg/Stuttgart and North Rhine-Westphalia after the repeat and LTV:CAC gates pass.
