'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

type Demo = {
  id: number;
  name: string;
  blurb: string;
  category: string;
};

const demos: Demo[] = [
  { id: 1, name: 'Nearby Missions Map', blurb: 'Browse live place-based missions across your city.', category: 'User' },
  { id: 2, name: 'QR Check-In Demo', blurb: 'Complete a real-world mission with a live QR flow.', category: 'User' },
  { id: 3, name: 'Wallet / Email Onboarding', blurb: 'Join Beacon X1 in seconds with wallet or email.', category: 'User' },
  { id: 4, name: 'Reward Claim Demo', blurb: 'Claim earned rewards after verified participation.', category: 'User' },
  { id: 5, name: 'Streak Engine Demo', blurb: 'See how repeated activity multiplies incentives.', category: 'User' },
  { id: 6, name: 'Badge Unlock Demo', blurb: 'Unlock proof-of-participation badges on-chain.', category: 'User' },
  { id: 7, name: 'Referral Loop Demo', blurb: 'Invite friends and grow city-by-city.', category: 'Growth' },
  { id: 8, name: 'Merchant Campaign Creator', blurb: 'Launch missions and rewards for any venue.', category: 'Merchant' },
  { id: 9, name: 'Merchant Dashboard', blurb: 'Track traffic, missions, and reward distribution.', category: 'Merchant' },
  { id: 10, name: 'Check-In History Feed', blurb: 'Follow live campaign participation in real time.', category: 'User' },
  { id: 11, name: 'City Heatmap Demo', blurb: 'Visualize traction by zone and density.', category: 'Analytics' },
  { id: 12, name: 'Campus Mode Demo', blurb: 'Run repeat engagement loops for schools and societies.', category: 'Growth' },
  { id: 13, name: 'Event Activation Demo', blurb: 'Turn events into on-chain engagement engines.', category: 'Growth' },
  { id: 14, name: 'Loyalty Rewards Demo', blurb: 'Reward returning users with tier-based incentives.', category: 'User' },
  { id: 15, name: 'Anti-Fraud Score Demo', blurb: 'Stack verification signals into a trust score.', category: 'Trust' },
  { id: 16, name: 'Venue Verification Flow', blurb: 'Show how trusted venues verify activity.', category: 'Trust' },
  { id: 17, name: 'Node Host Waitlist Demo', blurb: 'Capture future venue hosts for the node layer.', category: 'Node' },
  { id: 18, name: 'Node Host Dashboard Preview', blurb: 'Preview local node role and trust-weighted activity.', category: 'Node' },
  { id: 19, name: 'On-Chain Activity Panel', blurb: 'Watch reward events and campaign activity flow on X1.', category: 'Analytics' },
  { id: 20, name: 'Analytics + Growth Console', blurb: 'Measure DAU, referrals, repeat rate, and partner growth.', category: 'Analytics' },
];

const stats = [
  { label: 'Target pilot cities', value: '3+' },
  { label: 'Demo surfaces', value: '20' },
  { label: 'Node expansion layer', value: 'Venue-ready' },
  { label: 'Chain fit', value: 'Low-fee EVM' },
];

const roadmap = [
  {
    phase: 'Stage 01',
    title: 'Architecture + contract foundation',
    timeline: 'May 1 — May 20, 2026',
    detail: 'Finalize product flows, reward logic, smart contract design, and testnet setup.',
  },
  {
    phase: 'Stage 02',
    title: 'Mobile-first MVP + merchant tooling',
    timeline: 'May 21 — June 16, 2026',
    detail: 'Build user flows, mission discovery, check-ins, and merchant campaign controls.',
  },
  {
    phase: 'Stage 03',
    title: 'Pilot + verification layer',
    timeline: 'June 17 — July 15, 2026',
    detail: 'Run a live testnet pilot with QR verification, analytics, and anti-abuse logic.',
  },
  {
    phase: 'Stage 04',
    title: 'Mainnet launch + early growth',
    timeline: 'July 16 — August 21, 2026',
    detail: 'Launch core flows on mainnet and onboard initial venues, communities, and campus pilots.',
  },
];

const faqs = [
  {
    q: 'Why Beacon X1 first, nodes later?',
    a: 'Because onboarding people with a familiar rewards loop is easier than asking them to care about hardware on day one. Venue nodes become the trust layer after demand is proven.',
  },
  {
    q: 'What makes this a DePIN product?',
    a: 'Beacon X1 connects real-world places, verified presence, reward distribution, and future venue-hosted nodes into one local participation network.',
  },
  {
    q: 'Why is X1 EcoChain a good fit?',
    a: 'The product needs frequent low-cost transactions, lightweight verification flows, and a consumer-friendly path into nodes. That matches X1’s positioning well.',
  },
  {
    q: 'Who uses this first?',
    a: 'Merchants, campuses, events, and community hubs looking for repeat footfall, retention, and measurable on-chain engagement.',
  },
];

export function BeaconSite() {
  const [selectedDemo, setSelectedDemo] = useState<number>(1);
  const activeDemo = useMemo(() => demos.find((demo) => demo.id === selectedDemo) ?? demos[0], [selectedDemo]);

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark image-mark">
            <Image src="/beacon-logo.jpeg" alt="Beacon X1 logo" width={46} height={46} priority />
          </div>
          <div>
            <p className="brand-name">Beacon X1</p>
            <p className="brand-tag">Location-powered DePIN on X1 EcoChain</p>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#product">Product</a>
          <a href="#demos">Demos</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-actions">
          <button className="button ghost">Request Access</button>
          <button className="button primary">Launch on X1</button>
        </div>
      </header>

      <section className="hero section-spacing">
        <div className="hero-copy">
          <p className="eyebrow">Mobile-first DePIN for local commerce, campuses, and events</p>
          <h1>Turn real-world places into on-chain engagement hubs.</h1>
          <p className="lede">
            Beacon X1 brings location rewards, merchant campaigns, streaks, referrals, and future venue-powered
            verification into one premium growth layer built for X1 EcoChain.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#demos">
              Explore Live Demos
            </a>
            <a className="button ghost" href="#roadmap">
              View Roadmap
            </a>
          </div>
          <div className="hero-stats">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-panel depin-panel">
          <div className="panel-glow" />
          <div className="radar-ring ring-one" />
          <div className="radar-ring ring-two" />
          <div className="radar-ring ring-three" />
          <div className="network-line line-one" />
          <div className="network-line line-two" />
          <div className="network-line line-three" />
          <div className="network-node node-one" />
          <div className="network-node node-two" />
          <div className="network-node node-three" />
          <div className="network-node node-four" />
          <div className="network-node node-five" />
          <div className="hero-core-card">
            <div className="core-logo-wrap">
              <Image src="/beacon-logo.jpeg" alt="Beacon X1 mark" width={54} height={54} priority />
            </div>
            <span className="pill red">DePIN signal mesh</span>
            <h3>Mobile check-ins. Venue trust. Node expansion.</h3>
            <p>Beacon X1 is designed like real DePIN: location signals, merchant activation, verification rails, and a path to venue-hosted nodes.</p>
          </div>
          <div className="mission-card float-a">
            <span className="pill red">Nearby live</span>
            <h3>Oxford Street Mission</h3>
            <p>Check in, scan venue QR, unlock 12 points + city streak.</p>
            <div className="mini-bar">
              <div style={{ width: '72%' }} />
            </div>
          </div>
          <div className="mission-card float-b">
            <span className="pill dark">Merchant</span>
            <h3>Campus Week Campaign</h3>
            <p>1,204 check-ins • 327 rewards claimed • 19 node host leads</p>
          </div>
          <div className="mission-card float-c">
            <span className="pill red">On-chain</span>
            <h3>Reward event confirmed</h3>
            <p>Badge minted on X1 • Referral multiplier active • Trust score +8</p>
          </div>
          <div className="mesh-card mesh-left">
            <p className="eyebrow small">Signal density</p>
            <h3>148 live venue pings</h3>
            <p>Check-ins, QR proofs, referrals, and campaign events flowing into one local activity graph.</p>
          </div>
          <div className="mesh-card mesh-right">
            <p className="eyebrow small">Node path</p>
            <h3>24 venue hosts queued</h3>
            <p>Merchants and campuses graduate from campaign users into Beacon-powered verification hubs.</p>
          </div>
        </div>
      </section>

      <section className="section-spacing" id="product">
        <div className="section-heading">
          <p className="eyebrow">Why Beacon X1</p>
          <h2>A product that feels familiar to users and native to the chain.</h2>
          <p>
            Start with an easy rewards experience. Expand into a trust layer powered by venues, communities, and
            future X1-backed node hosts.
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <span className="feature-index">01</span>
            <h3>Proof-of-place onboarding</h3>
            <p>Wallet or email entry, nearby missions, QR proofs, streaks, rewards, and referrals with low friction.</p>
          </article>
          <article className="feature-card">
            <span className="feature-index">02</span>
            <h3>Merchant and campus rails</h3>
            <p>Campaign controls, loyalty loops, local analytics, and repeat engagement for real-world venues.</p>
          </article>
          <article className="feature-card">
            <span className="feature-index">03</span>
            <h3>Venue-powered trust mesh</h3>
            <p>QR flows now, stronger verification, signal scoring, and node participation later as demand appears.</p>
          </article>
        </div>
      </section>

      <section className="section-spacing ecosystem-strip">
        <div className="section-heading compact">
          <p className="eyebrow">Why X1 EcoChain</p>
          <h2>Designed for repeat, low-cost, measurable activity.</h2>
        </div>
        <div className="ecosystem-grid">
          <div className="ecosystem-card">
            <h3>Sub-cent DePIN actions</h3>
            <p>Perfect for check-ins, rewards, badges, referrals, mission events, and high-frequency local activity.</p>
          </div>
          <div className="ecosystem-card">
            <h3>Real node expansion path</h3>
            <p>Start with mobile usage, then convert venues and communities into trust anchors and local verification points.</p>
          </div>
          <div className="ecosystem-card">
            <h3>Built for street-level adoption</h3>
            <p>Mobile-first onboarding, practical user value, and low-fee execution make DePIN easier to adopt in emerging markets.</p>
          </div>
        </div>
      </section>

      <section className="section-spacing" id="demos">
        <div className="section-heading">
          <p className="eyebrow">Demo Lab</p>
          <h2>20 interactive demos built into one premium product surface.</h2>
          <p>Every demo is clickable, stateful, and designed to feel like part of a live product.</p>
        </div>
        <div className="demo-layout">
          <aside className="demo-sidebar">
            {demos.map((demo) => (
              <button
                key={demo.id}
                className={`demo-list-item ${selectedDemo === demo.id ? 'active' : ''}`}
                onClick={() => setSelectedDemo(demo.id)}
              >
                <span className="demo-order">{demo.id.toString().padStart(2, '0')}</span>
                <div>
                  <strong>{demo.name}</strong>
                  <p>{demo.blurb}</p>
                </div>
              </button>
            ))}
          </aside>

          <div className="demo-stage">
            <div className="demo-stage-head">
              <div>
                <p className="eyebrow small">{activeDemo.category} demo</p>
                <h3>{activeDemo.name}</h3>
              </div>
              <span className="pill red">Interactive</span>
            </div>
            <div className="demo-panel">{renderDemo(activeDemo.id)}</div>
          </div>
        </div>
      </section>

      <section className="section-spacing" id="roadmap">
        <div className="section-heading">
          <p className="eyebrow">Roadmap</p>
          <h2>Focused build, real pilot, fast launch.</h2>
          <p>A realistic 90–120 day path from architecture to live X1 deployment.</p>
        </div>
        <div className="roadmap-grid">
          {roadmap.map((item) => (
            <article className="roadmap-card" key={item.phase}>
              <span className="roadmap-phase">{item.phase}</span>
              <h3>{item.title}</h3>
              <p className="roadmap-time">{item.timeline}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-spacing faq-shell" id="faq">
        <div className="section-heading compact">
          <p className="eyebrow">FAQ</p>
          <h2>What matters most to reviewers, partners, and users.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <article className="faq-card" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band section-spacing">
        <div>
          <p className="eyebrow">Beacon X1</p>
          <h2>Build local engagement on X1.</h2>
          <p>Premium consumer onboarding now. Venue-powered trust and node participation next.</p>
        </div>
        <div className="hero-actions">
          <button className="button primary">View Demo Lab</button>
          <button className="button ghost">Request Early Access</button>
        </div>
      </section>
    </main>
  );
}

function renderDemo(id: number) {
  switch (id) {
    case 1:
      return <NearbyMissionsMapDemo />;
    case 2:
      return <QrCheckInDemo />;
    case 3:
      return <WalletOnboardingDemo />;
    case 4:
      return <RewardClaimDemo />;
    case 5:
      return <StreakEngineDemo />;
    case 6:
      return <BadgeUnlockDemo />;
    case 7:
      return <ReferralLoopDemo />;
    case 8:
      return <MerchantCampaignCreatorDemo />;
    case 9:
      return <MerchantDashboardDemo />;
    case 10:
      return <CheckInHistoryFeedDemo />;
    case 11:
      return <CityHeatmapDemo />;
    case 12:
      return <CampusModeDemo />;
    case 13:
      return <EventActivationDemo />;
    case 14:
      return <LoyaltyRewardsDemo />;
    case 15:
      return <AntiFraudScoreDemo />;
    case 16:
      return <VenueVerificationFlowDemo />;
    case 17:
      return <NodeHostWaitlistDemo />;
    case 18:
      return <NodeHostDashboardPreviewDemo />;
    case 19:
      return <OnChainActivityPanelDemo />;
    case 20:
      return <AnalyticsGrowthConsoleDemo />;
    default:
      return null;
  }
}

function NearbyMissionsMapDemo() {
  const [selected, setSelected] = useState('Soho');
  const zones = ['Soho', 'Campus', 'Waterfront', 'Old Town'];
  return (
    <div className="demo-grid two-col">
      <div className="map-panel">
        {zones.map((zone) => (
          <button key={zone} className={`map-dot ${selected === zone ? 'active' : ''}`} onClick={() => setSelected(zone)}>
            {zone}
          </button>
        ))}
      </div>
      <div className="info-card">
        <h4>{selected} mission cluster</h4>
        <p>12 active venues • 318 total check-ins • peak reward time 5pm–8pm</p>
        <div className="metric-row"><span>Mission density</span><strong>High</strong></div>
        <div className="metric-row"><span>Merchant interest</span><strong>Growing</strong></div>
      </div>
    </div>
  );
}

function QrCheckInDemo() {
  const [step, setStep] = useState(0);
  const steps = ['Ready to scan', 'QR accepted', 'Presence confirmed', 'Reward queued'];
  return (
    <div className="stack-gap">
      <div className="scan-box">QR</div>
      <div className="timeline-strip">
        {steps.map((label, index) => (
          <div key={label} className={`timeline-node ${index <= step ? 'active' : ''}`}>{label}</div>
        ))}
      </div>
      <button className="button primary" onClick={() => setStep((prev) => (prev + 1) % steps.length)}>Advance Check-In</button>
    </div>
  );
}

function WalletOnboardingDemo() {
  const [mode, setMode] = useState<'wallet' | 'email'>('wallet');
  return (
    <div className="stack-gap">
      <div className="toggle-row">
        <button className={`toggle ${mode === 'wallet' ? 'active' : ''}`} onClick={() => setMode('wallet')}>Wallet</button>
        <button className={`toggle ${mode === 'email' ? 'active' : ''}`} onClick={() => setMode('email')}>Email</button>
      </div>
      <div className="info-card">
        <h4>{mode === 'wallet' ? 'Connect wallet in one tap' : 'Start with email, add wallet later'}</h4>
        <p>{mode === 'wallet' ? 'Fast path for web3-native users.' : 'Simple path for merchants, campuses, and new users.'}</p>
        <button className="button primary">Continue</button>
      </div>
    </div>
  );
}

function RewardClaimDemo() {
  const [claimed, setClaimed] = useState(false);
  return (
    <div className="demo-grid two-col">
      <div className="reward-card-large">
        <span className="eyebrow small">Mission complete</span>
        <h4>Claim 24 Beacon Points</h4>
        <p>Verified check-in + streak bonus + referral boost.</p>
      </div>
      <div className="info-card">
        <p>Status</p>
        <h4>{claimed ? 'Reward claimed on X1' : 'Reward ready to claim'}</h4>
        <button className="button primary" onClick={() => setClaimed((prev) => !prev)}>{claimed ? 'Reset' : 'Claim Reward'}</button>
      </div>
    </div>
  );
}

function StreakEngineDemo() {
  const [days, setDays] = useState(3);
  return (
    <div className="stack-gap">
      <div className="info-card">
        <h4>{days}-day streak</h4>
        <p>Multiplier: {(1 + days * 0.1).toFixed(1)}x</p>
        <input type="range" min={1} max={14} value={days} onChange={(e) => setDays(Number(e.target.value))} />
      </div>
      <div className="mini-bar"><div style={{ width: `${(days / 14) * 100}%` }} /></div>
    </div>
  );
}

function BadgeUnlockDemo() {
  const badges = ['Explorer', 'Regular', 'Connector', 'Venue Favorite'];
  const [unlocked, setUnlocked] = useState<string[]>(['Explorer']);
  return (
    <div className="stack-gap">
      <div className="badge-grid">
        {badges.map((badge) => (
          <button key={badge} className={`badge-chip ${unlocked.includes(badge) ? 'active' : ''}`} onClick={() => setUnlocked((prev) => (prev.includes(badge) ? prev.filter((item) => item !== badge) : [...prev, badge]))}>
            {badge}
          </button>
        ))}
      </div>
      <p>{unlocked.length} badge{unlocked.length === 1 ? '' : 's'} unlocked on-chain.</p>
    </div>
  );
}

function ReferralLoopDemo() {
  const [referrals, setReferrals] = useState(4);
  return (
    <div className="demo-grid two-col">
      <div className="info-card">
        <h4>Your referral code</h4>
        <p>BX1-LONDON-09</p>
        <button className="button ghost" onClick={() => setReferrals((prev) => prev + 1)}>Simulate referral</button>
      </div>
      <div className="info-card">
        <h4>{referrals} successful invites</h4>
        <p>Growth bonus unlocked at 5 referrals.</p>
      </div>
    </div>
  );
}

function MerchantCampaignCreatorDemo() {
  const [reward, setReward] = useState(20);
  return (
    <div className="stack-gap">
      <div className="demo-grid two-col">
        <input className="input" defaultValue="Weekend check-in campaign" />
        <select className="input" defaultValue="QR check-in">
          <option>QR check-in</option>
          <option>Geofence</option>
          <option>Referral mission</option>
        </select>
      </div>
      <div className="info-card">
        <p>Reward budget</p>
        <h4>{reward} points</h4>
        <input type="range" min={5} max={100} value={reward} onChange={(e) => setReward(Number(e.target.value))} />
      </div>
      <button className="button primary">Create Campaign</button>
    </div>
  );
}

function MerchantDashboardDemo() {
  const [tab, setTab] = useState<'overview' | 'campaigns' | 'rewards'>('overview');
  return (
    <div className="stack-gap">
      <div className="toggle-row">
        {(['overview', 'campaigns', 'rewards'] as const).map((item) => (
          <button key={item} className={`toggle ${tab === item ? 'active' : ''}`} onClick={() => setTab(item)}>{item}</button>
        ))}
      </div>
      <div className="info-card">
        <h4>{tab === 'overview' ? 'Overview snapshot' : tab === 'campaigns' ? 'Campaign controls' : 'Reward ledger'}</h4>
        <p>{tab === 'overview' ? '1,204 visits • 327 claims • 28% repeat rate' : tab === 'campaigns' ? 'Manage active missions, timing, and reward rules.' : 'Track issued incentives and completion quality.'}</p>
      </div>
    </div>
  );
}

function CheckInHistoryFeedDemo() {
  const items = ['Alex checked in at Campus Hall', 'Maya claimed 12 points at Corner Cafe', 'Theo unlocked Regular badge'];
  const [feed, setFeed] = useState(items);
  return (
    <div className="stack-gap">
      {feed.map((item) => <div className="feed-item" key={item}>{item}</div>)}
      <button className="button ghost" onClick={() => setFeed((prev) => [`New live check-in at Beacon Market ${prev.length + 1}`, ...prev.slice(0, 4)])}>Add live event</button>
    </div>
  );
}

function CityHeatmapDemo() {
  const [intensity, setIntensity] = useState(62);
  return (
    <div className="stack-gap">
      <div className="heatmap-grid">
        {Array.from({ length: 9 }).map((_, index) => {
          const level = Math.max(15, Math.min(100, intensity - index * 6));
          return <div key={index} className="heat-cell" style={{ opacity: level / 100 }} />;
        })}
      </div>
      <input type="range" min={20} max={100} value={intensity} onChange={(e) => setIntensity(Number(e.target.value))} />
    </div>
  );
}

function CampusModeDemo() {
  const [mode, setMode] = useState('Orientation Week');
  return (
    <div className="demo-grid two-col">
      <div className="info-card">
        <h4>Campus campaign</h4>
        <select className="input" value={mode} onChange={(e) => setMode(e.target.value)}>
          <option>Orientation Week</option>
          <option>Society Quest</option>
          <option>Library Sprint</option>
        </select>
      </div>
      <div className="info-card">
        <h4>{mode}</h4>
        <p>Boost attendance, repeat check-ins, and participation streaks across campus hubs.</p>
      </div>
    </div>
  );
}

function EventActivationDemo() {
  const [count, setCount] = useState(180);
  return (
    <div className="stack-gap">
      <div className="info-card">
        <h4>Event engagement</h4>
        <p>{count} attendees activated • 74 rewards claimed • 22 referrals</p>
      </div>
      <button className="button primary" onClick={() => setCount((prev) => prev + 25)}>Simulate event surge</button>
    </div>
  );
}

function LoyaltyRewardsDemo() {
  const [tier, setTier] = useState(1);
  const labels = ['Bronze', 'Silver', 'Gold', 'Black'];
  return (
    <div className="stack-gap">
      <div className="badge-grid">
        {labels.map((label, index) => (
          <button key={label} className={`badge-chip ${tier === index + 1 ? 'active' : ''}`} onClick={() => setTier(index + 1)}>{label}</button>
        ))}
      </div>
      <div className="info-card">
        <h4>{labels[tier - 1]} loyalty</h4>
        <p>{10 * tier}% bonus rewards on repeat missions.</p>
      </div>
    </div>
  );
}

function AntiFraudScoreDemo() {
  const [qr, setQr] = useState(true);
  const [geo, setGeo] = useState(true);
  const [history, setHistory] = useState(false);
  const score = (qr ? 40 : 0) + (geo ? 35 : 0) + (history ? 25 : 0);
  return (
    <div className="stack-gap">
      <div className="toggle-row wrap">
        <button className={`toggle ${qr ? 'active' : ''}`} onClick={() => setQr((prev) => !prev)}>QR</button>
        <button className={`toggle ${geo ? 'active' : ''}`} onClick={() => setGeo((prev) => !prev)}>Geofence</button>
        <button className={`toggle ${history ? 'active' : ''}`} onClick={() => setHistory((prev) => !prev)}>Behavior</button>
      </div>
      <div className="info-card">
        <h4>Trust score: {score}</h4>
        <p>{score >= 75 ? 'High-confidence mission completion.' : 'Needs stronger verification.'}</p>
      </div>
    </div>
  );
}

function VenueVerificationFlowDemo() {
  const [approved, setApproved] = useState(false);
  return (
    <div className="stack-gap">
      <div className="timeline-strip compact">
        <div className="timeline-node active">Venue registered</div>
        <div className={`timeline-node ${approved ? 'active' : ''}`}>Verification approved</div>
        <div className={`timeline-node ${approved ? 'active' : ''}`}>Campaign trusted</div>
      </div>
      <button className="button primary" onClick={() => setApproved((prev) => !prev)}>{approved ? 'Reset Flow' : 'Approve Venue'}</button>
    </div>
  );
}

function NodeHostWaitlistDemo() {
  const [count, setCount] = useState(27);
  return (
    <div className="demo-grid two-col">
      <div className="info-card">
        <h4>Venue host waitlist</h4>
        <p>{count} venues interested in future Beacon X1 node hosting.</p>
      </div>
      <button className="button primary" onClick={() => setCount((prev) => prev + 1)}>Join waitlist</button>
    </div>
  );
}

function NodeHostDashboardPreviewDemo() {
  const [uptime, setUptime] = useState(96);
  return (
    <div className="stack-gap">
      <div className="info-card">
        <h4>Node health preview</h4>
        <p>{uptime}% uptime • 342 trust-weighted validations • 8 local campaigns</p>
      </div>
      <input type="range" min={85} max={100} value={uptime} onChange={(e) => setUptime(Number(e.target.value))} />
    </div>
  );
}

function OnChainActivityPanelDemo() {
  const [events, setEvents] = useState(['Reward minted • #10422', 'Referral recorded • #10419', 'Badge issued • #10414']);
  return (
    <div className="stack-gap">
      {events.map((event) => <div className="feed-item" key={event}>{event}</div>)}
      <button className="button ghost" onClick={() => setEvents((prev) => [`Mission completion • #10${430 + prev.length}`, ...prev.slice(0, 4)])}>Refresh activity</button>
    </div>
  );
}

function AnalyticsGrowthConsoleDemo() {
  const [city, setCity] = useState('London');
  const numbers: Record<string, { dau: string; repeat: string; partners: string }> = {
    London: { dau: '1,240', repeat: '29%', partners: '18' },
    Lagos: { dau: '980', repeat: '31%', partners: '12' },
    Nairobi: { dau: '760', repeat: '27%', partners: '9' },
  };
  return (
    <div className="stack-gap">
      <select className="input" value={city} onChange={(e) => setCity(e.target.value)}>
        {Object.keys(numbers).map((key) => <option key={key}>{key}</option>)}
      </select>
      <div className="demo-grid three-col">
        <div className="info-card"><span>DAU</span><h4>{numbers[city].dau}</h4></div>
        <div className="info-card"><span>Repeat rate</span><h4>{numbers[city].repeat}</h4></div>
        <div className="info-card"><span>Partners</span><h4>{numbers[city].partners}</h4></div>
      </div>
    </div>
  );
}
