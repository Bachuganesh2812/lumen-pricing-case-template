# LUMEN cockpit validation checklist

## Business logic

- Recommended price remains €2.19, the midpoint candidate from the price-test exhibit.
- Acceptance declines as price increases; the dashboard uses the three observed candidate anchors and interpolates between them for scenario exploration.
- Channel contribution uses the channel economics logic: Retail/Grocery is lowest, Gym & Office is stronger, and DTC is strongest.
- Blended net contribution is weighted by the channel mix slider.
- LTV:CAC responds to channel mix and price pressure; the 3:1 target remains a scale gate.
- Price Position now changes across `value-led`, `premium-accessible`, and `premium-stretch` and compares the selected price with VoltFit (€2.41) and Root & Rise (€2.85).
- Channel Mix now changes the donut, owned/grocery split, profit bar labels, and blended economics.
- Reset restores €2.19 and 60% owned-channel mix.

## Market strategy

- Default regional view is Germany-wide.
- A state selection replaces the country panel with that state’s proxy metrics and action.
- The map uses the 16-state GeoJSON boundary file; shapes are not hand-drawn.
- The seasonality chart was replaced by the recommended September introductory-offer and onboarding → October conversion/replenishment → November scale plan.
- Regional metrics are labeled as modeled proxies because the data room contains no German LUMEN sales data.

## Design and interaction

- Light and dark themes remain available.
- Map is contained inside its card and uses responsive SVG sizing.
- State names are available through native SVG hover titles.
- Header price, economics price, competitor price matching, and reset are linked.
- Assumptions remain visible in the collapsible section.

## Privacy and deployment

- Customer name/email fields are not loaded into the frontend.
- No API keys or external runtime services are used.
- Vercel can serve the static files and `germany-states.geojson` directly.
