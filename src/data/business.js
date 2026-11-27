export const business = {
  name: 'First Choice Electricians',
  category: 'Electrician',
  rating: '5.0',
  reviewCount: 14,
  address: '314 Omar St, Los Angeles, CA 90013, United States',
  addressShort: '314 Omar St, Los Angeles, CA 90013',
  street: '314 Omar St',
  city: 'Los Angeles',
  state: 'CA',
  zip: '90013',
  country: 'United States',
  phoneDisplay: '(323) 924-3273',
  phoneTel: 'tel:+13239243273',
  phoneRaw: '3239243273',
  website: 'https://www.firstchoiceelectriciansla.com/',
  mapsShare: 'https://maps.app.goo.gl/UmRdT2Xbr2KK26ru9',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.889239025026!2d-118.2424498!3d34.046712199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c78c56c0be3b%3A0x52897ffa2382a4e5!2sFirst%20Choice%20Electricians!5e0!3m2!1sen!2sin!4v1795781017250!5m2!1sen!2sin',
  email: 'info@firstchoiceelectriciansla.com',
  geo: { lat: 34.0467, lng: -118.2424 },
  images: {
    heroPanel:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
    testing:
      'https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=2067&auto=format&fit=crop',
    wiring:
      'https://images.unsplash.com/photo-1565514020179-0a7cb9d8b34b?q=80&w=2070&auto=format&fit=crop',
  },
};

export const services = [
  {
    slug: 'residential-electrician-los-angeles',
    name: 'Residential Electrician',
    short:
      'Complete home electrical services — repairs, installations, upgrades, and safety inspections for Los Angeles homes.',
    icon: 'Home',
    tagline: 'Dependable residential electrical work for Los Angeles homeowners.',
    intro:
      'First Choice Electricians is the residential electrician Los Angeles homeowners call for everything from a faulty outlet to a full panel upgrade. We handle repairs, new installations, wiring, lighting, and safety inspections for houses, apartments, and condos across the city — with clean workmanship and straightforward communication on every visit.',
    problems: [
      'Outlets that are dead, loose, or warm to the touch',
      'Breakers that trip repeatedly under normal household load',
      'Flickering or dimming lights when appliances switch on',
      'Older homes with outdated or ungrounded wiring',
      'Panels that cannot support added circuits or modern appliances',
      'Rooms that need additional outlets, lighting, or ceiling fans',
    ],
    benefits: [
      'Safe, code-compliant work performed to National Electrical Code standards',
      'Proper grounding and protection for every circuit in your home',
      'A reliable electrical system that supports modern household demands',
      'Clear explanations and upfront guidance before any work begins',
    ],
    expect:
      'Our electrician asks about the symptoms you are seeing, inspects the affected circuits and devices, and explains what is needed in plain language. Repairs and installations are completed cleanly with quality parts, and the work area is left tidy before we leave.',
    faqs: [
      {
        q: 'Do you work on older Los Angeles homes with outdated wiring?',
        a: 'Yes. Many Los Angeles homes have older wiring that needs repair or replacement. We inspect the wiring, identify hazards, and replace or repair it to current code while respecting the character of your home.',
      },
      {
        q: 'Can you add outlets or lighting to a room that does not have enough?',
        a: 'Yes. We run new circuits and install additional outlets, switches, and lighting where you need them, sized correctly and protected for safe everyday use.',
      },
      {
        q: 'How do I schedule a residential electrician in Los Angeles?',
        a: 'Call (323) 924-3273 to speak directly with First Choice Electricians. We schedule every job by phone so the work can be discussed in detail before arrival.',
      },
    ],
  },
  {
    slug: 'commercial-electrician-los-angeles',
    name: 'Commercial Electrician',
    short:
      'Electrical services for Los Angeles businesses — repairs, installations, panel work, and code compliance.',
    icon: 'Zap',
    tagline: 'Reliable commercial electrical service for Los Angeles businesses.',
    intro:
      'Los Angeles businesses depend on First Choice Electricians for commercial electrical work that keeps operations running safely. From repairing circuits and upgrading panels to installing lighting and dedicated equipment circuits, we deliver code-compliant electrical service for offices, retail spaces, restaurants, and small businesses across the city.',
    problems: [
      'Business circuits that trip under equipment load',
      'Outdated panels that cannot support modern business equipment',
      'Lighting failures in retail or office spaces',
      'Need for dedicated circuits for kitchen, HVAC, or server equipment',
      'Code compliance issues requiring correction',
      'Damaged or worn wiring in older commercial buildings',
    ],
    benefits: [
      'Minimized downtime with prompt, efficient service',
      'Code-compliant work that passes inspection',
      'Properly sized circuits for commercial equipment loads',
      'Safe, reliable electrical systems for employees and customers',
    ],
    expect:
      'We assess your business electrical needs, verify panel capacity, and complete repairs or installations with minimal disruption to your operations. Every circuit is tested under load before the work is considered complete.',
    faqs: [
      {
        q: 'Can you install dedicated circuits for commercial equipment?',
        a: 'Yes. We install dedicated circuits for kitchen equipment, HVAC units, servers, and other business loads, sized correctly and protected to code.',
      },
      {
        q: 'Do you work on electrical systems in older commercial buildings?',
        a: 'Yes. We repair and upgrade wiring, panels, and circuits in older Los Angeles commercial buildings to meet current code and support modern equipment.',
      },
      {
        q: 'How quickly can a commercial electrician come out?',
        a: 'Call (323) 924-3273 and we will schedule service as quickly as possible. We understand that electrical issues affect your business and prioritize prompt response.',
      },
    ],
  },
  {
    slug: 'electrical-repair-los-angeles',
    name: 'Electrical Repair',
    short:
      'Fast, safe diagnosis and repair for faulty circuits, outlets, breakers, and power issues.',
    icon: 'Wrench',
    tagline: 'Accurate diagnosis and lasting repair for any electrical fault.',
    intro:
      'When outlets stop working, breakers keep tripping, or lights flicker without warning, you need an electrician who finds the real cause and fixes it the first time. First Choice Electricians provides thorough electrical repair across Los Angeles, diagnosing hidden faults and restoring safe, reliable power to your home or business.',
    problems: [
      'Outlets that are dead, loose, or warm to the touch',
      'Circuit breakers that trip repeatedly under normal load',
      'Flickering or dimming lights when appliances switch on',
      'Burning smell or discoloration around switches and outlets',
      'Switches that buzz, spark, or feel hot during use',
      'Partial power loss or outlets that work intermittently',
    ],
    benefits: [
      'Accurate diagnosis that targets the root cause, not just the symptom',
      'Repairs performed to current National Electrical Code standards',
      'Reduced risk of electrical fires, shocks, and equipment damage',
      'Restored reliability so your electrical system works as it should',
    ],
    expect:
      'We ask clear questions about the symptoms you are seeing, inspect the affected circuits and devices, and explain what is happening in plain language before any work begins. Repairs are completed cleanly with quality parts, and the area is left safe and tidy.',
    faqs: [
      {
        q: 'How fast can you come out for an electrical repair in Los Angeles?',
        a: 'Call (323) 924-3273 and we will schedule your repair as quickly as possible. Same-day and next-day appointments are common depending on demand and your location within Los Angeles.',
      },
      {
        q: 'Can you fix a breaker that keeps tripping?',
        a: 'Yes. Repeated tripping usually means an overloaded circuit, a short, or a faulty breaker. We diagnose the underlying cause and repair it so the breaker protects your system correctly.',
      },
      {
        q: 'Is a warm outlet an emergency?',
        a: 'A warm or discolored outlet can indicate a dangerous connection and should be inspected promptly. Stop using the outlet and call for a repair so the hazard can be corrected safely.',
      },
    ],
  },
  {
    slug: 'electrical-panel-upgrade-los-angeles',
    name: 'Electrical Panel Upgrade',
    short:
      'Replace outdated or undersized panels with a safe, modern, higher-capacity service.',
    icon: 'ShieldCheck',
    tagline: 'Modern panels that deliver the capacity and protection your property needs.',
    intro:
      'An outdated or undersized electrical panel limits what you can safely power and increases the risk of overheating. First Choice Electricians performs electrical panel upgrades across Los Angeles, replacing old fuse boxes and 60-amp panels with modern, properly rated breaker panels that meet today\'s demands for EV charging, air conditioning, and modern appliances.',
    problems: [
      'Panel that cannot support adding a new circuit or appliance',
      'Fuse box that needs frequent replacement',
      'Panel with visible corrosion, warmth, or burning marks',
      'Lights dim across the property when large loads start',
      'Panel older than 25 years or rated below 100 amps',
    ],
    benefits: [
      'Sufficient capacity for EV chargers, AC, and modern appliances',
      'Modern breaker protection with proper labeling and grounding',
      'Reduced fire risk from overloaded or corroded components',
      'A panel that passes inspection and supports future expansion',
    ],
    expect:
      'We assess your current service size and household load, recommend the correct panel rating, and perform a complete replacement including the main breaker, grounding, and individual circuits. The new panel is tested and clearly labeled.',
    faqs: [
      {
        q: 'How do I know if my panel needs an upgrade?',
        a: 'Common signs include frequent breaker trips, a fuse box, a panel rated under 100 amps, visible damage, or the need to add high-draw appliances like an EV charger. We can evaluate your panel and recommend the right size.',
      },
      {
        q: 'How long does a panel upgrade take?',
        a: 'A typical residential panel upgrade is completed within a day, though the exact time depends on the panel location and the condition of existing wiring. We give you a clear timeframe before starting.',
      },
      {
        q: 'Will I lose power during the upgrade?',
        a: 'Power is temporarily interrupted while the old panel is replaced and the new one is connected. We minimize downtime and restore service as quickly as possible.',
      },
    ],
  },
  {
    slug: 'circuit-breaker-repair-los-angeles',
    name: 'Circuit Breaker Repair',
    short:
      'Diagnosis and repair of breakers that trip, fail to reset, or will not stay on.',
    icon: 'AlertTriangle',
    tagline: 'Stop nuisance tripping and restore reliable circuit protection.',
    intro:
      'A circuit breaker that trips constantly or will not reset is more than an inconvenience — it is a warning that something in your electrical system needs attention. First Choice Electricians provides circuit breaker repair throughout Los Angeles, identifying whether the problem is the breaker itself, an overloaded circuit, or a hidden fault downstream.',
    problems: [
      'Breaker trips every time a specific appliance runs',
      'Breaker will not reset or trips immediately after resetting',
      'Breaker feels warm or shows signs of scorching',
      'Multiple outlets lose power when a single breaker trips',
      'Breaker buzzes or feels loose in the panel',
    ],
    benefits: [
      'Correct identification of overload, short, or faulty breaker',
      'Replacement with properly rated, brand-compatible breakers',
      'Restored protection so the breaker trips only for real faults',
      'Lower risk of overheating and electrical fire',
    ],
    expect:
      'We test the circuit under load, check the breaker and its connections, and inspect downstream devices for faults. If a replacement is needed, the correct breaker is installed and the circuit is verified before the panel is closed.',
    faqs: [
      {
        q: 'Why does my breaker trip only when I use one appliance?',
        a: 'That usually means the appliance draws more current than the circuit can safely supply, or there is a fault on that circuit. We measure the load and recommend either relocating the appliance, adding a dedicated circuit, or repairing the fault.',
      },
      {
        q: 'Should I keep resetting a tripped breaker?',
        a: 'No. A breaker that trips repeatedly is doing its job by protecting you. Repeatedly resetting it can be dangerous. Call for a diagnosis so the cause can be corrected.',
      },
      {
        q: 'Can a bad breaker damage my appliances?',
        a: 'A faulty breaker can allow voltage fluctuations that stress connected equipment. Repairing or replacing it protects both your wiring and your appliances.',
      },
    ],
  },
  {
    slug: 'electrical-wiring-los-angeles',
    name: 'Electrical Wiring',
    short:
      'New wiring, rewiring, and wiring repair for safe, reliable power delivery.',
    icon: 'Cable',
    tagline: 'Correct, code-compliant wiring for renovations, additions, and repairs.',
    intro:
      'Wiring is the backbone of your electrical system, and old or improperly installed wiring is a leading cause of house fires. First Choice Electricians handles electrical wiring and rewiring throughout Los Angeles, from running new circuits in additions to replacing aging wiring that can no longer safely serve your property.',
    problems: [
      'Knob-and-tube or aluminum wiring that needs replacement',
      'Extension cords used as permanent wiring',
      'Renovations or additions that need new circuits run',
      'Wiring that lacks a ground connection',
      'Damaged wiring from rodents, remodeling, or age',
    ],
    benefits: [
      'Modern, grounded wiring sized for your actual electrical load',
      'Reduced fire and shock risk from outdated or damaged wiring',
      'Support for new circuits, outlets, and appliances',
      'A wiring system that meets current code and passes inspection',
    ],
    expect:
      'We inspect accessible wiring, identify what needs replacement or addition, and run new cable with proper boxes, grounding, and connections. Every new or replaced circuit is tested and correctly labeled at the panel.',
    faqs: [
      {
        q: 'How do I know if my home needs rewiring?',
        a: 'Signs include two-prong ungrounded outlets, knob-and-tube or aluminum wiring, frequent breaker trips, and any visible damage. We can inspect your wiring and recommend what should be replaced.',
      },
      {
        q: 'Is aluminum wiring dangerous?',
        a: 'Older aluminum wiring can overheat at connections and is a known fire risk. We can evaluate your aluminum wiring and repair or replace the connections to make the system safe.',
      },
      {
        q: 'Can you run wiring for a room addition?',
        a: 'Yes. We run new circuits, install boxes and outlets, and coordinate with your renovation to deliver safe, inspected wiring for additions and remodels.',
      },
    ],
  },
  {
    slug: 'lighting-installation-los-angeles',
    name: 'Lighting Installation',
    short:
      'Indoor and outdoor lighting, recessed LEDs, dimmers, and landscape lighting.',
    icon: 'Lightbulb',
    tagline: 'Beautiful, efficient lighting installed safely and to code.',
    intro:
      'Good lighting transforms a space, and safe installation keeps it that way. First Choice Electricians handles lighting installation throughout Los Angeles, from recessed LED retrofits and dimmer switches to outdoor security and landscape lighting, all installed with proper junction boxes, wiring, and switching.',
    problems: [
      'Old recessed fixtures that are not rated for LED bulbs',
      'Rooms with too few lights or uneven illumination',
      'No dimmer control on existing fixtures',
      'Outdoor areas without security or pathway lighting',
      'Fixtures installed without proper junction boxes',
    ],
    benefits: [
      'Energy-efficient LED lighting that lowers electric bills',
      'Even, comfortable illumination designed for each space',
      'Dimmer control for ambiance and additional energy savings',
      'Outdoor lighting that improves safety and curb appeal',
    ],
    expect:
      'We help plan fixture placement, verify circuit capacity, and install each light with the correct box, wiring, and switch. Recessed fixtures are checked for insulation contact ratings, and every circuit is tested before the work is finished.',
    faqs: [
      {
        q: 'Can you replace old recessed lights with LEDs?',
        a: 'Yes. We retrofit existing recessed cans with LED trims or integrated fixtures, including IC-rated options where insulation is present, for a clean upgrade without rewiring the ceiling.',
      },
      {
        q: 'Do you install outdoor and landscape lighting?',
        a: 'Yes. We install security lights, pathway lighting, and landscape fixtures with proper weatherproof boxes and GFCI protection for safe outdoor operation.',
      },
      {
        q: 'Can any light be put on a dimmer?',
        a: 'The fixture and bulb must both be dimmable, and the dimmer must be compatible with the bulb type. We verify compatibility before installing a dimmer to avoid flickering and noise.',
      },
    ],
  },
  {
    slug: 'outlet-installation-los-angeles',
    name: 'Outlet Installation',
    short:
      'Installation and replacement of outlets, including GFCI, USB, and outdoor receptacles.',
    icon: 'Plug',
    tagline: 'Safe, convenient outlets where you need them — installed to code.',
    intro:
      'Loose, dead, or missing outlets are more than inconvenient — they are safety and usability problems. First Choice Electricians installs and replaces outlets throughout Los Angeles, adding GFCI protection in kitchens, baths, and outdoor areas where it is required, and installing modern options like USB and tamper-resistant receptacles.',
    problems: [
      'Outlets that are loose, recessed, or no longer hold plugs firmly',
      'Rooms that do not have enough outlets for everyday use',
      'No GFCI protection in kitchens, bathrooms, or outdoors',
      'Two-prong outlets that need grounding for modern devices',
      'Outdoor areas that need weatherproof receptacles',
    ],
    benefits: [
      'Secure, properly wired outlets that hold plugs safely',
      'Required GFCI protection where water and power meet',
      'Convenient modern devices including USB-integrated outlets',
      'Additional receptacles so you can stop relying on extension cords',
    ],
    expect:
      'We inspect each location, verify the wiring and box condition, and install the correct receptacle with proper connections. Where required, GFCI protection is added and the circuit is tested for proper operation.',
    faqs: [
      {
        q: 'Why do my plugs fall out of the outlet?',
        a: 'Worn outlet contacts lose their grip over time, which can cause arcing and heat. The outlet should be replaced. We swap worn receptacles with new, properly rated units.',
      },
      {
        q: 'Do I need GFCI outlets in my kitchen?',
        a: 'Current code requires GFCI protection for kitchen countertops, bathrooms, garages, and outdoor outlets. We add GFCI receptacles or breakers where they are missing.',
      },
      {
        q: 'Can you add USB outlets or smart switches?',
        a: 'Yes. We install USB-integrated receptacles, dimmers, timers, and smart switches as part of an outlet or switch upgrade, provided the existing wiring supports them.',
      },
    ],
  },
  {
    slug: 'ceiling-fan-installation-los-angeles',
    name: 'Ceiling Fan Installation',
    short:
      'Safe mounting, wiring, and balancing of ceiling fans with remote and light kits.',
    icon: 'Fan',
    tagline: 'Securely mounted, balanced ceiling fans that run quietly for years.',
    intro:
      'A ceiling fan needs more than a hook in the ceiling — it requires a fan-rated box, proper support, and correct wiring, especially when a light kit or remote is included. First Choice Electricians installs ceiling fans throughout Los Angeles, ensuring every fan is securely mounted, balanced, and safely wired.',
    problems: [
      'Existing fan box that is not rated to support a ceiling fan',
      'Fan that wobbles, clicks, or hums during operation',
      'No existing ceiling wiring where a fan is wanted',
      'Fan with a light kit that needs a separate wall switch',
      'Remote-controlled fan that needs proper receiver wiring',
    ],
    benefits: [
      'Fan-rated support box that safely carries the weight and motion',
      'Properly balanced fan that runs quietly without wobble',
      'Correct wiring for light kits, remotes, and wall controls',
      'Improved comfort and lower cooling costs year-round',
    ],
    expect:
      'We inspect the existing box and replace it with a fan-rated support if needed, run wiring for new installations, mount and balance the fan, and verify the light kit and controls all work before finishing.',
    faqs: [
      {
        q: 'Can you install a ceiling fan where there is no existing light?',
        a: 'Yes. We can run new wiring and install a fan-rated box in a ceiling that has no existing fixture, then mount and wire the fan and any wall switch.',
      },
      {
        q: 'Why does my ceiling fan wobble?',
        a: 'Wobble is usually caused by unbalanced blades, a loose mounting, or a non-fan-rated box. We balance the blades, tighten the mount, and replace the box if it is not rated for fan use.',
      },
      {
        q: 'Can you add a remote to an existing ceiling fan?',
        a: 'Yes. We install compatible remote receivers so you can control fan speed and lighting without rewiring the wall switch.',
      },
    ],
  },
  {
    slug: 'ev-charger-installation-los-angeles',
    name: 'EV Charger Installation',
    short:
      'Level 2 EV charger installation with dedicated circuits and safe wiring.',
    icon: 'BatteryCharging',
    tagline: 'Charge at home with a safe, dedicated Level 2 EV charging station.',
    intro:
      'As electric vehicles become common across Los Angeles, a dedicated home charger is the convenient way to keep your battery full. First Choice Electricians installs Level 2 EV chargers with a properly sized dedicated circuit, correct wiring, and the grounding and protection your charger requires.',
    problems: [
      'No dedicated circuit available for a Level 2 charger',
      'Slow Level 1 charging that cannot keep up with daily driving',
      'Panel that needs an upgrade to support a 40-amp or 50-amp circuit',
      'Outdoor charger that needs weatherproof installation',
      'Charger that needs hardwiring versus a 14-50 receptacle',
    ],
    benefits: [
      'Much faster charging than a standard wall outlet',
      'Dedicated circuit sized correctly for your charger and vehicle',
      'Safe installation with proper grounding and breaker protection',
      'Options for hardwired or receptacle-based chargers, indoor or outdoor',
    ],
    expect:
      'We confirm your charger\'s requirements and your panel\'s capacity, install a dedicated circuit with the correct breaker and wiring, mount the charger, and test it with your vehicle before completing the job.',
    faqs: [
      {
        q: 'Do I need a panel upgrade for an EV charger?',
        a: 'It depends on your panel capacity and existing load. We evaluate your panel and, if needed, upgrade it to safely support the dedicated 40-amp or 50-amp circuit a Level 2 charger requires.',
      },
      {
        q: 'Can you install an EV charger outdoors?',
        a: 'Yes. We install outdoor-rated chargers with weatherproof enclosures and GFCI protection so the charger is safe in all conditions.',
      },
      {
        q: 'How long does EV charger installation take?',
        a: 'A straightforward installation with adequate panel capacity is usually completed in a few hours. A panel upgrade or new wiring run adds time, which we outline beforehand.',
      },
    ],
  },
];

export const serviceAreas = [
  {
    slug: 'electrician-los-angeles',
    name: 'Los Angeles',
    intro:
      'First Choice Electricians is based in Los Angeles and provides electrical repair, installation, panel upgrades, lighting, and EV charger installation throughout the city. From our home base on Omar St, we serve homes and businesses across Los Angeles with safe, code-compliant electrical work and straightforward phone scheduling.',
    faqs: [
      {
        q: 'Are you based in Los Angeles?',
        a: 'Yes. First Choice Electricians is located at 314 Omar St, Los Angeles, CA 90013, and we serve properties across the city. Call (323) 924-3273 to confirm service at your address.',
      },
      {
        q: 'What electrical services do you offer in Los Angeles?',
        a: 'We offer residential and commercial electrical service, electrical repair, panel upgrades, circuit breaker repair, wiring, lighting, outlet, ceiling fan, and EV charger installation throughout Los Angeles.',
      },
    ],
  },
  {
    slug: 'electrician-downtown-los-angeles',
    name: 'Downtown Los Angeles',
    intro:
      'Downtown Los Angeles has a mix of historic buildings, lofts, and modern businesses that all need dependable electrical service. First Choice Electricians provides electrical repair, panel upgrades, wiring, and lighting installation for Downtown LA properties, handling the unique needs of older buildings and busy commercial spaces.',
    faqs: [
      {
        q: 'Can you upgrade electrical panels in Downtown LA loft buildings?',
        a: 'Yes. We upgrade panels in Downtown Los Angeles lofts and apartments, replacing outdated service with modern, properly rated panels that meet today\'s electrical demands.',
      },
      {
        q: 'Do you provide commercial electrical service in Downtown Los Angeles?',
        a: 'Yes. We handle commercial electrical repairs, dedicated circuits, and lighting for Downtown LA businesses, with prompt service to minimize downtime.',
      },
    ],
  },
  {
    slug: 'electrician-echo-park',
    name: 'Echo Park',
    intro:
      'Echo Park\'s mix of historic homes and newer builds often benefits from electrical updates, and First Choice Electricians provides electrical repair, wiring, lighting installation, and panel upgrades for the 90026 area. Whether you are updating an older Craftsman or adding modern lighting to a hillside home, we deliver careful, code-compliant work.',
    faqs: [
      {
        q: 'Can you rewire older Echo Park homes?',
        a: 'Yes. Many Echo Park homes have older wiring that needs replacement. We inspect, repair, and rewire to current code while respecting the character of historic homes.',
      },
      {
        q: 'Do you install lighting for Echo Park homes?',
        a: 'Yes. We install recessed LEDs, dimmers, and outdoor lighting for Echo Park properties, including hillside homes that need weatherproof outdoor fixtures.',
      },
    ],
  },
  {
    slug: 'electrician-silver-lake',
    name: 'Silver Lake',
    intro:
      'Silver Lake homeowners call First Choice Electricians for electrical repair, lighting installation, EV charger installation, and panel upgrades in the 90026 and 90039 areas. With many mid-century homes updating to modern electrical demands, we deliver clean, safe, code-compliant electrical work.',
    faqs: [
      {
        q: 'Can you install an EV charger at a Silver Lake home?',
        a: 'Yes. We install Level 2 EV chargers with dedicated circuits for Silver Lake residences, including panel upgrades when needed to support the additional load.',
      },
      {
        q: 'Do you upgrade panels for Silver Lake mid-century homes?',
        a: 'Yes. Many Silver Lake homes have original panels that need upgrading. We replace them with modern, properly rated panels that support modern appliances and EV charging.',
      },
    ],
  },
  {
    slug: 'electrician-chinatown',
    name: 'Chinatown',
    intro:
      'First Choice Electricians serves Chinatown, providing electrical repair, wiring, panel upgrades, and lighting installation for the 90012 area. From restaurants and small businesses needing dedicated equipment circuits to older buildings requiring wiring updates, we deliver dependable, safety-focused electrical work.',
    faqs: [
      {
        q: 'Can you install dedicated circuits for Chinatown restaurants?',
        a: 'Yes. We install dedicated circuits for kitchen equipment and other business loads in Chinatown restaurants and commercial spaces, sized and protected to code.',
      },
      {
        q: 'Do you handle electrical repair in older Chinatown buildings?',
        a: 'Yes. We repair and upgrade wiring, panels, and circuits in older Chinatown buildings to meet current code and support modern use.',
      },
    ],
  },
  {
    slug: 'electrician-boyle-heights',
    name: 'Boyle Heights',
    intro:
      'Boyle Heights homeowners and businesses rely on First Choice Electricians for electrical repair, panel upgrades, lighting installation, and wiring in the 90063 and 90033 areas. With many older homes that benefit from wiring and panel updates, we provide careful, safety-focused electrical service.',
    faqs: [
      {
        q: 'Can you upgrade an electrical panel in Boyle Heights?',
        a: 'Yes. We replace outdated and undersized panels in Boyle Heights homes with modern, properly rated panels that meet current demand.',
      },
      {
        q: 'Do you repair outlets and switches in Boyle Heights?',
        a: 'Yes. We repair and replace outlets and switches in Boyle Heights, including adding GFCI protection where it is required by current code.',
      },
    ],
  },
  {
    slug: 'electrician-koreatown',
    name: 'Koreatown',
    intro:
      'First Choice Electricians serves Koreatown, providing electrical repair, wiring, and panel upgrade services for the 90020 and 90010 areas. With many older multi-unit buildings that benefit from wiring and panel updates, we deliver careful, safety-focused electrical work for residents and property owners.',
    faqs: [
      {
        q: 'Can you rewire older Koreatown apartment units?',
        a: 'Yes. We repair and replace aging wiring in older Koreatown buildings, adding grounded outlets and proper protection where needed.',
      },
      {
        q: 'Do you upgrade electrical panels for Koreatown multi-unit buildings?',
        a: 'Yes. We evaluate and upgrade panels in Koreatown multi-unit properties to support modern loads safely and meet current code.',
      },
    ],
  },
  {
    slug: 'electrician-westlake',
    name: 'Westlake',
    intro:
      'Westlake homeowners and property managers call First Choice Electricians for electrical repair, outlet installation, panel upgrades, and lighting in the 90057 and 90004 areas. With many older apartment buildings that need wiring and panel attention, we provide dependable, code-compliant electrical service.',
    faqs: [
      {
        q: 'Can you repair electrical issues in Westlake apartment buildings?',
        a: 'Yes. We repair outlets, switches, breakers, and lighting for Westlake apartment buildings, coordinating with property owners and managers.',
      },
      {
        q: 'Do you upgrade panels for Westlake properties?',
        a: 'Yes. We upgrade outdated panels in Westlake homes and multi-unit buildings to support modern electrical loads safely.',
      },
    ],
  },
  {
    slug: 'electrician-arts-district',
    name: 'Arts District',
    intro:
      'The Arts District\'s converted warehouses and creative workspaces have unique electrical needs, and First Choice Electricians provides electrical repair, dedicated circuits, lighting installation, and panel upgrades for the 90013 area. From studio lighting to equipment circuits, we deliver safe, code-compliant work for this growing neighborhood.',
    faqs: [
      {
        q: 'Can you install dedicated circuits for Arts District workshops and studios?',
        a: 'Yes. We install dedicated circuits for studio equipment, tools, and lighting loads in Arts District live/work spaces, sized and protected to code.',
      },
      {
        q: 'Do you upgrade panels in converted Arts District buildings?',
        a: 'Yes. We upgrade panels in converted warehouse and loft spaces to support modern residential and creative-use electrical demands.',
      },
    ],
  },
  {
    slug: 'electrician-highland-park',
    name: 'Highland Park',
    intro:
      'Highland Park homeowners call First Choice Electricians for electrical repair, lighting installation, EV charger installation, and panel upgrades in the 90042 area. With many Craftsman and period homes that benefit from wiring and panel updates, we deliver careful, safety-focused electrical work.',
    faqs: [
      {
        q: 'Can you install an EV charger at a Highland Park home?',
        a: 'Yes. We install Level 2 EV chargers with dedicated circuits for Highland Park residences, including panel upgrades when needed.',
      },
      {
        q: 'Do you update wiring in older Highland Park homes?',
        a: 'Yes. We carefully replace outdated wiring in older Highland Park homes while preserving walls and finishes wherever possible.',
      },
    ],
  },
];
