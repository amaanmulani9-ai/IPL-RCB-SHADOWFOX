import { useEffect, useState } from "react";
import stadiumMap from "./assets/chinnaswamy-venue-map.svg";

const RCB_LOGO = "https://www.royalchallengers.com/themes/custom/rcbbase/images/rcb-logo-new.png";
const HERO_TROPHY = "/players/IPL-Trophy.webp";

const FIXTURES = [
  {
    match: 1,
    iso: "2026-03-28T19:30:00+05:30",
    opponent: "Sunrisers Hyderabad",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    home: true,
    phase: "Opening night",
  },
  {
    match: 11,
    iso: "2026-04-05T19:30:00+05:30",
    opponent: "Chennai Super Kings",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    home: true,
    phase: "Phase 1",
  },
  {
    match: 16,
    iso: "2026-04-10T19:30:00+05:30",
    opponent: "Rajasthan Royals",
    venue: "Barsapara Stadium, Guwahati",
    home: false,
    phase: "Phase 1",
  },
  {
    match: 20,
    iso: "2026-04-12T19:30:00+05:30",
    opponent: "Mumbai Indians",
    venue: "Wankhede Stadium, Mumbai",
    home: false,
    phase: "Phase 1",
  },
  {
    match: 23,
    iso: "2026-04-15T19:30:00+05:30",
    opponent: "Lucknow Super Giants",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    home: true,
    phase: "Phase 2",
  },
  {
    match: 26,
    iso: "2026-04-18T15:30:00+05:30",
    opponent: "Delhi Capitals",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    home: true,
    phase: "Phase 2",
  },
  {
    match: 34,
    iso: "2026-04-24T19:30:00+05:30",
    opponent: "Gujarat Titans",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    home: true,
    phase: "Phase 2",
  },
  {
    match: 39,
    iso: "2026-04-27T19:30:00+05:30",
    opponent: "Delhi Capitals",
    venue: "Arun Jaitley Stadium, Delhi",
    home: false,
    phase: "Phase 2",
  },
  {
    match: 42,
    iso: "2026-04-30T19:30:00+05:30",
    opponent: "Gujarat Titans",
    venue: "Narendra Modi Stadium, Ahmedabad",
    home: false,
    phase: "Phase 2",
  },
  {
    match: 50,
    iso: "2026-05-07T19:30:00+05:30",
    opponent: "Lucknow Super Giants",
    venue: "Ekana Stadium, Lucknow",
    home: false,
    phase: "Phase 2",
  },
  {
    match: 54,
    iso: "2026-05-10T19:30:00+05:30",
    opponent: "Mumbai Indians",
    venue: "Shaheed Veer Narayan Singh Stadium, Raipur",
    home: true,
    phase: "Phase 2",
  },
  {
    match: 57,
    iso: "2026-05-13T19:30:00+05:30",
    opponent: "Kolkata Knight Riders",
    venue: "Shaheed Veer Narayan Singh Stadium, Raipur",
    home: true,
    phase: "Phase 2",
  },
  {
    match: 61,
    iso: "2026-05-17T15:30:00+05:30",
    opponent: "Punjab Kings",
    venue: "HPCA Stadium, Dharamshala",
    home: false,
    phase: "Phase 2",
  },
  {
    match: 67,
    iso: "2026-05-22T19:30:00+05:30",
    opponent: "Sunrisers Hyderabad",
    venue: "Rajiv Gandhi International Stadium, Hyderabad",
    home: false,
    phase: "Phase 2",
  },
];

const SQUAD_CORE = [
  {
    name: "Rajat Patidar",
    role: "Captain / Batter",
    tag: "C",
    note: "Leads the title defence at the top of the middle order.",
    link: "https://www.royalchallengers.com/rcb-squad/rajat-patidar",
    photo: "https://royalchallengers.com/s3/files/styles/s/public/2026-03/rajat.png?itok=1rBGxE2K",
  },
  {
    name: "Virat Kohli",
    role: "Batter",
    tag: "VK",
    note: "Still the emotional center of the batting group.",
    link: "https://www.royalchallengers.com/rcb-squad/virat-kohli",
    photo: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2026-03/virat.png?itok=gLKCBlX6",
  },
  {
    name: "Phil Salt",
    role: "Wicketkeeper / Batter",
    tag: "WK",
    note: "Powerplay aggression and quick starts.",
    link: "https://www.royalchallengers.com/rcb-squad/phil-salt",
    photo: "https://royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/salt%20%282%29_0.png?itok=ZEsoqmrP",
  },
  {
    name: "Devdutt Padikkal",
    role: "Batter",
    tag: "LHB",
    note: "Left-hand balance through the top order.",
    link: "https://www.royalchallengers.com/rcb-squad/devdutt-padikkal-0",
    photo: "https://royalchallengers.com/s3/files/styles/s/public/2026-03/2%20%286%29_0.png?itok=JtPpjGfi",
  },
  {
    name: "Jitesh Sharma",
    role: "Wicketkeeper / Finisher",
    tag: "WK",
    note: "Part of the warm-up buzz with Patidar before the opener.",
    link: "https://www.royalchallengers.com/rcb-squad/jitesh-sharma",
    photo: "https://royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/jitesh%20%281%29.png?itok=vzEgLMOu",
  },
  {
    name: "Tim David",
    role: "Power Hitter",
    tag: "6S",
    note: "Late-innings pressure release valve.",
    link: "https://www.royalchallengers.com/rcb-squad/tim-david-0",
    photo: "https://royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/david_0.png?itok=8nRMvk9p",
  },
  {
    name: "Krunal Pandya",
    role: "All-rounder",
    tag: "AR",
    note: "Left-arm control and matchup flexibility.",
    link: "https://www.royalchallengers.com/rcb-squad/krunal-pandya",
    photo: "https://royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/krunal_0.png?itok=kfuF_oaj",
  },
  {
    name: "Bhuvneshwar Kumar",
    role: "Bowler",
    tag: "PP",
    note: "New-ball movement and death-over calm.",
    link: "https://www.royalchallengers.com/rcb-squad/bhuvneshwar-kumar",
    photo: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2026-03/bhuvi_0.png?itok=ktTs4_Xt",
  },
  {
    name: "Josh Hazlewood",
    role: "Bowler",
    tag: "SEA",
    note: "Availability remains a key watch item entering the season.",
    link: "https://www.royalchallengers.com/rcb-squad/josh-hazlewood-0",
    photo: "https://royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/hazelwood%20%281%29_0.png?itok=CUVbTBcO",
  },
  {
    name: "Nuwan Thushara",
    role: "Bowler",
    tag: "PAC",
    note: "Slingy pace option with a different release profile.",
    link: "https://www.royalchallengers.com/rcb-squad/nuwan-thushara",
    photo: "https://royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/nuwan.png?itok=bY1cyFxY",
  },
  {
    name: "Suyash Sharma",
    role: "Spinner",
    tag: "LEG",
    note: "Young legspin control in the middle overs.",
    link: "https://www.royalchallengers.com/rcb-squad/suyash-sharma",
    photo: "https://royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/suyash%20%281%29.png?itok=QkPUrpgu",
  },
  {
    name: "Jacob Duffy",
    role: "Bowler",
    tag: "NZ",
    note: "Seam depth after the mini-auction reshuffle.",
    link: "https://www.royalchallengers.com/rcb-squad/jacob-duffy",
    photo: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2026-03/2%20%287%29.png?itok=6eqEXFPl",
  },
];

const TOP_BANNER_PLAYERS = [
  {
    name: "Rajat Patidar",
    photo: "https://royalchallengers.com/s3/files/styles/s/public/2026-03/rajat.png?itok=1rBGxE2K",
    className: "player-rajat",
  },
  {
    name: "Virat Kohli",
    photo: "https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2026-03/virat.png?itok=gLKCBlX6",
    className: "player-virat",
  },
  {
    name: "Phil Salt",
    photo: "https://royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/salt%20%282%29_0.png?itok=ZEsoqmrP",
    className: "player-phil",
  },
  {
    name: "Krunal Pandya",
    photo: "https://royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/krunal_0.png?itok=kfuF_oaj",
    className: "player-krunal",
  },
];

const HEADLINES = [
  {
    date: "Mar 25, 2026",
    kicker: "Availability",
    title: "Mo Bobat shares latest update about Josh Hazlewood's availability",
    excerpt:
      "RCB's official site says the management addressed Hazlewood's status and the alternatives around Yash Dayal.",
    link: "https://www.royalchallengers.com/rcb-cricket-news/news/mo-bobat-shares-latest-update-about-josh-hazlewoods-availability",
  },
  {
    date: "Mar 24, 2026",
    kicker: "Squad update",
    title: "Yash Dayal to skip IPL 2026 due to personal situation",
    excerpt:
      "The club confirmed on March 24, 2026 that Dayal will not be part of IPL 2026.",
    link: "https://www.royalchallengers.com/rcb-cricket-news/news/yash-dayal-to-skip-ipl-2026-due-to-personal-situation",
  },
  {
    date: "Mar 23, 2026",
    kicker: "Warm-up form",
    title: "Jitesh Sharma and Rajat Patidar light up RCB's first warm-up game",
    excerpt:
      "Official pre-season coverage highlighted Patidar and Jitesh as early batting standouts.",
    link: "https://www.royalchallengers.com/rcb-cricket-news/news/jitesh-sharma-rajat-patidar-light-up-rcbs-first-warm-up-game-ahead-of-ipl",
  },
  {
    date: "Mar 25, 2026",
    kicker: "Rising story",
    title: "Mangesh Yadav's journey moves from club grind to first-team spotlight",
    excerpt:
      "RCB's latest feature set tracks Mangesh Yadav's rise into the senior setup.",
    link: "https://www.royalchallengers.com/rcb-cricket-news/news/from-being-sent-home-to-being-mvp-mangesh-yadavs-club-cricket-turning-point",
  },
  {
    date: "Mar 25, 2026",
    kicker: "India call-ups",
    title: "Four RCB players named in the BCCI WT20I squad for South Africa",
    excerpt:
      "The club's official homepage listed four RCB picks when the BCCI announced the squad.",
    link: "https://www.royalchallengers.com/rcb-cricket-news/news/four-rcb-players-named-as-bcci-announce-wt20i-squad-for-south-africa-series",
  },
  {
    date: "Mar 22, 2026",
    kicker: "Title memory",
    title: "Rajat Patidar reflects on RCB's IPL 2025 trophy win",
    excerpt:
      "The current campaign is framed by the club itself as a 2025 title defence.",
    link: "https://www.royalchallengers.com/rcb-cricket-news/news/we-have-definitely-done-something-rajat-patidar-reflects-on-rcbs-ipl-2025",
  },
];

const MERCH_ITEMS = [
  {
    name: "RCB Replica Jersey 2026",
    price: "Rs 2,299",
    tag: "New jersey",
    summary:
      "The main 2026 matchday look with sponsor print, crest front, and the full red-navy RCB identity from the latest drop.",
    detail: "Matchday look",
    audience: "Men",
    image: "/players/71418701_1.jpg",
    link: "https://in.puma.com/in/en/rcb-launch",
    featured: true,
  },
  {
    name: "RCB W Replica Tee 2026",
    price: "Rs 2,299",
    tag: "Replica",
    summary: "Official women's 2026 replica jersey in the same crest, sponsor, and gradient finish seen in the current RCB drop.",
    detail: "Women",
    audience: "Replica fit",
    image: "/players/71418301_1.jpg",
    link: "https://in.puma.com/in/en/pd/puma-x-rcb-2026-womens-league-replica-womens-jersey/714183",
  },
  {
    name: "RCB Takedown Tee 2026",
    price: "Rs 1,299",
    tag: "Casual wear",
    summary: "A lighter club tee with the split navy-red body and oversized lion graphic for everyday fanwear.",
    detail: "Street fit",
    audience: "Women",
    image: "/players/71419701_1.jpg",
    link: "https://in.puma.com/in/en/rcb-launch",
  },
  {
    name: "RCB 2026 Royalcat Comfort Slides",
    price: "Rs 3,499",
    tag: "Footwear",
    summary: "Adjustable slides in club red and navy for the off-pitch part of the 2026 RCB range.",
    detail: "Off-pitch",
    audience: "Unisex",
    image: "/players/40883801_1.jpg",
    link: "https://in.puma.com/in/en/pd/puma-x-rcb-2026-royalcat-comfort-slides/408838",
  },
  {
    name: "RCB 2026 Palermo Leather Sneakers - Navy Blue",
    price: "Rs 7,999",
    tag: "Premium",
    summary: "A navy-and-gold Palermo pair that picks up the calmer side of the 2026 RCB palette without losing the crest energy.",
    detail: "Deep blue",
    audience: "Unisex",
    image: "/players/40883901_1.jpg",
    link: "https://in.puma.com/in/en/rcb-launch",
  },
  {
    name: "RCB 2026 Palermo Leather Sneakers - Red",
    price: "Rs 7,999",
    tag: "Premium",
    summary: "The red Palermo version pushes the loudest club-color take from the same footwear release.",
    detail: "Club red",
    audience: "Unisex",
    image: "/players/40883902_1.jpg",
    link: "https://in.puma.com/in/en/rcb-launch",
  },
  {
    name: "RCB Men's Cricket Cap - Navy",
    price: "Rs 799",
    tag: "Accessory",
    summary: "Classic navy cap with the large gold lion crest, red under-brim pop, and adjustable back fit.",
    detail: "Matchday cap",
    audience: "Men",
    image: "/players/2720501_1.jpg",
    link: "https://in.puma.com/in/en/pd/puma-x-royalchallengers-bangalore-mens-cricket-cap/027205",
  },
  {
    name: "RCB Retro Polo - Green",
    price: "Rs 2,999",
    tag: "Lifestyle",
    summary: "Green retro polo with the Play Bold script panel for a more lifestyle-led RCB look.",
    detail: "Retro polo",
    audience: "Men",
    image: "/players/63469803_1.jpg",
    link: "https://in.puma.com/in/en/pd/puma-x-rcb-mens-retro-polo/634698",
  },
  {
    name: "RCB Striper Polo - Pinkscape",
    price: "Rs 2,799",
    tag: "Lifestyle",
    summary: "Relaxed striper polo in pinkscape with a cleaner off-duty club vibe than the game jersey.",
    detail: "Pinkscape",
    audience: "Men",
    image: "/players/63469701_1.jpg",
    link: "https://in.puma.com/in/en/pd/puma-x-rcb-mens-striper-polo/634697",
  },
  {
    name: "RCB Striper Polo - Wild Green",
    price: "Rs 2,799",
    tag: "Lifestyle",
    summary: "The wild green version adds another non-matchday colorway while keeping the RCB crest front and center.",
    detail: "Wild green",
    audience: "Men",
    image: "/players/63469704_1.jpg",
    link: "https://in.puma.com/in/en/pd/puma-x-rcb-mens-striper-polo/634697",
  },
];

const TICKET_FEATURES = [
  {
    label: "Stand view",
    title: "Seat map and stand-driven booking",
    body: "The official ticket flow includes stand view navigation, stand names, stand colors, gate details, and seat-by-seat selection before checkout.",
  },
  {
    label: "Hospitality",
    title: "Premium stands and hospitality rules",
    body: "The ticket system includes dedicated hospitality stands and separate food and beverage terms for those premium areas.",
  },
  {
    label: "M-ticket",
    title: "QR entry without a printout",
    body: "The FAQ flow says fans can download the M-ticket from the order section and scan the QR code directly at the venue for entry.",
  },
  {
    label: "Payments",
    title: "UPI, net banking, and card checkout",
    body: "The official checkout supports UPI, net banking, and Visa or Mastercard credit and debit cards through the ticketing flow.",
  },
  {
    label: "Seat race",
    title: "Live warnings when seats disappear",
    body: "The app surfaces messages like 'Seats Are Being Taken' and warns when another user locks or buys the same seat first.",
  },
  {
    label: "Timer",
    title: "3-minute booking window",
    body: "The checkout flow warns that buyers only have three minutes to complete the booking before the held seats are released.",
  },
];

const TICKET_TOUCHPOINTS = [
  { title: "Primary route", value: "/ticket" },
  { title: "Venue", value: "M. Chinnaswamy Stadium, Bengaluru" },
  { title: "Powered by", value: "Ticketgenie" },
  { title: "Live CTA", value: "BUY TICKETS" },
];

const SEASON_NOTES = [
  {
    title: "Opening night is official",
    body: "The first BCCI schedule release on March 11, 2026 starts RCB's campaign on Saturday, March 28, 2026 against Sunrisers Hyderabad in Bengaluru at 7:30 PM IST.",
  },
  {
    title: "Second phase is locked in",
    body: "The BCCI's March 26, 2026 announcement confirms RCB play three second-phase home games in Bengaluru and two more home fixtures in Raipur.",
  },
  {
    title: "No fake points table",
    body: "This build avoids predicted standings and invented scorelines. It only surfaces verified RCB schedule and official club updates.",
  },
];

const OFFICIAL_LINKS = [
  {
    label: "RCB home",
    href: "https://www.royalchallengers.com/",
  },
  {
    label: "RCB shop",
    href: "https://shop.royalchallengers.com/",
  },
  {
    label: "RCB fixtures",
    href: "https://www.royalchallengers.com/fixtures",
  },
  {
    label: "RCB news",
    href: "https://www.royalchallengers.com/rcb-cricket-news/news",
  },
  {
    label: "RCB squad",
    href: "https://www.royalchallengers.com/team",
  },
  {
    label: "IPL 2026 schedule",
    href: "https://documents.iplt20.com/smart-images/1774525332894_TATA_IPL_2026-Schedule.pdf",
  },
  {
    label: "BCCI phase 2 note",
    href: "https://www.iplt20.com/news/4256/bcci-announces-schedule-for-second-phase-of-tata-ipl-2026",
  },
];

const FOOTER_SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/royalchallengers.bengaluru",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/RoyalChallengersBangalore/",
    icon: "facebook",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCCq1xDJMBRF61kiOgU90_kw",
    icon: "youtube",
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/rcbtweets?lang=en",
    icon: "twitter",
  },
];

const FOOTER_LINKS = [
  { label: "Home", href: "https://www.royalchallengers.com/" },
  { label: "About Us", href: "https://www.royalchallengers.com/about-us" },
  { label: "News", href: "https://www.royalchallengers.com/rcb-cricket-news" },
  { label: "Fixtures", href: "https://www.royalchallengers.com/fixtures" },
  { label: "Privacy and Cookie Notice", href: "https://www.royalchallengers.com/privacy-policy" },
  { label: "Rcb Tv", href: "https://www.royalchallengers.com/videos/rcb-tv" },
  { label: "Team", href: "https://www.royalchallengers.com/rcb-squad" },
  { label: "Terms & Conditions", href: "https://www.royalchallengers.com/terms-conditions" },
  { label: "Shop T&C", href: "https://www.royalchallengers.com/shop-terms-conditions" },
  { label: "Photos", href: "https://www.royalchallengers.com/rcb-cricket-photos" },
  { label: "Shop", href: "https://shop.royalchallengers.com/merchandise" },
  { label: "Contact Us", href: "https://www.royalchallengers.com/contact-us" },
];

const FOOTER_APPS = [
  {
    label: "Google Play",
    href: "https://play.google.com/store/apps/details?id=com.interactech.rcb&hl=en_IN",
  },
  {
    label: "App Store",
    href: "https://apps.apple.com/in/app/rcb-official-app/id516455943",
  },
];

function formatDate(iso, options) {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    ...options,
  }).format(new Date(iso));
}

function sameKolkataDay(left, right) {
  const leftKey = formatDate(left.toISOString(), {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const rightKey = formatDate(right.toISOString(), {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return leftKey === rightKey;
}

function getFixtureStatus(iso, now) {
  const start = new Date(iso);
  const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);

  if (now >= start && now <= end) return "live";
  if (sameKolkataDay(start, now)) return "today";
  if (now < start) return "upcoming";
  return "final";
}

function buildMatchLabel(fixture) {
  return fixture.home ? `RCB vs ${fixture.opponent}` : `${fixture.opponent} vs RCB`;
}

function useIstClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60 * 1000);
    return () => window.clearInterval(timer);
  }, []);

  return now;
}

function Navbar() {
  return (
    <header className="nav-shell">
      <nav className="nav">
        <a className="brand" href="#top">
          <span className="brand-mark">
            <img src={RCB_LOGO} alt="RCB logo" />
          </span>
          <span className="brand-copy">
            <strong>Royal Challengers Bengaluru</strong>
            <span>IPL 2026 Matchday Build</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="#fixtures">Fixtures</a>
          <a href="#tickets">Tickets</a>
          <a href="#squad">Squad</a>
          <a href="#headlines">Headlines</a>
          <a href="#merch">Merch</a>
          <a href="#sources">Sources</a>
        </div>
      </nav>
    </header>
  );
}

function TopBanner() {
  return (
    <section className="top-banner">
      <div className="top-banner-pattern" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, index) => (
          <span key={index}>PLAYBOLD</span>
        ))}
      </div>

      <div className="top-banner-copy" data-reveal="left" style={{ "--reveal-order": 0 }}>
        <span className="top-banner-kicker">Welcome to the</span>
        <h2>
          House of
          <br />
          <span>RCB</span>
        </h2>
        <p>
          Official squad visuals, ticket flow, venue map, fixtures, and club energy all in one
          matchday page.
        </p>
      </div>

      <div className="top-banner-players" data-reveal="right" style={{ "--reveal-order": 1 }}>
        {TOP_BANNER_PLAYERS.map((player) => (
          <img
            key={player.name}
            className={`banner-player ${player.className}`}
            src={player.photo}
            alt={player.name}
            loading="eager"
          />
        ))}
      </div>
    </section>
  );
}

function Hero({ now, liveFixture, nextFixture }) {
  const featuredFixture = liveFixture ?? nextFixture ?? FIXTURES[FIXTURES.length - 1];
  const featuredStatus = liveFixture ? "Live window" : nextFixture ? "Next match" : "Latest scheduled";

  return (
    <section className="hero" id="top">
      <div className="hero-backdrop" />
      <div className="hero-grid">
        <div className="hero-copy" data-reveal="left" style={{ "--reveal-order": 0 }}>
          <div className="hero-trophy">
            <img src={HERO_TROPHY} alt="IPL trophy" loading="eager" />
          </div>
          <h1>
            Ee Saala Cup
            <br />
            <span>Namde Again.</span>
          </h1>
          <p className="hero-text">
            This app is now a full Royal Challengers Bengaluru build with verified 2026 fixtures,
            current official club headlines, a new merchandise section, and an RCB jersey-inspired
            visual system instead of the old CSK fan mockup and black-heavy background.
          </p>
          <div className="hero-meta">
            <div className="meta-card">
              <span className="meta-label">IST now</span>
              <strong>
                {formatDate(now.toISOString(), {
                  weekday: "short",
                  day: "2-digit",
                  month: "short",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </strong>
            </div>
            <div className="meta-card">
              <span className="meta-label">Season frame</span>
              <strong>Ee Saala Cup Namde Again</strong>
            </div>
            <div className="meta-card">
              <span className="meta-label">Verified against</span>
              <strong>RCB + IPL official releases + store highlights</strong>
            </div>
          </div>
        </div>

        <div className="hero-panel" data-reveal="right" style={{ "--reveal-order": 1 }}>
          <div className="hero-panel-top">
            <span className={`status-pill ${liveFixture ? "is-live" : "is-upcoming"}`}>
              {featuredStatus}
            </span>
            <span className="phase-pill">{featuredFixture.phase}</span>
          </div>
          <h2>{buildMatchLabel(featuredFixture)}</h2>
          <p className="hero-panel-date">
            {formatDate(featuredFixture.iso, {
              weekday: "long",
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
            {" - "}
            {formatDate(featuredFixture.iso, {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}{" "}
            IST
          </p>
          <p className="hero-panel-venue">{featuredFixture.venue}</p>
          <div className="hero-panel-grid">
            <div>
              <span>League matches</span>
              <strong>14</strong>
            </div>
            <div>
              <span>Home dates</span>
              <strong>7</strong>
            </div>
            <div>
              <span>Phase 2 home split</span>
              <strong>3 BLR + 2 Raipur</strong>
            </div>
            <div>
              <span>Latest club headlines</span>
              <strong>Mar 25, 2026</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MatchPulse({ liveFixture, nextFixture }) {
  const fixture = liveFixture ?? nextFixture ?? FIXTURES[FIXTURES.length - 1];
  const stateLabel = liveFixture ? "Live match window" : nextFixture ? "On deck" : "Schedule complete";

  return (
    <section className="pulse-strip">
      <div className="pulse-item" data-reveal style={{ "--reveal-order": 0 }}>
        <span className="pulse-label">Match pulse</span>
        <strong>{stateLabel}</strong>
      </div>
      <div className="pulse-item pulse-wide" data-reveal style={{ "--reveal-order": 1 }}>
        <span className="pulse-label">Focus fixture</span>
        <strong>{buildMatchLabel(fixture)}</strong>
      </div>
      <div className="pulse-item pulse-wide" data-reveal style={{ "--reveal-order": 2 }}>
        <span className="pulse-label">Venue</span>
        <strong>{fixture.venue}</strong>
      </div>
      <div className="pulse-item" data-reveal style={{ "--reveal-order": 3 }}>
        <span className="pulse-label">Kickoff</span>
        <strong>
          {formatDate(fixture.iso, {
            day: "2-digit",
            month: "short",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}{" "}
          IST
        </strong>
      </div>
    </section>
  );
}

function Fixtures({ now }) {
  return (
    <section className="section" id="fixtures">
      <div className="section-head" data-reveal>
        <div>
          <span className="eyebrow">Official 2026 schedule</span>
          <h2>RCB fixtures, not predictions</h2>
        </div>
        <p>
          These 14 league fixtures are based on the IPL 2026 schedule released by the BCCI on
          March 11 and March 26, 2026.
        </p>
      </div>

      <div className="fixture-grid">
        {FIXTURES.map((fixture) => {
          const status = getFixtureStatus(fixture.iso, now);

          return (
            <article
              className={`fixture-card status-${status}`}
              key={fixture.match}
              data-reveal
              style={{ "--reveal-order": fixture.match % 6 }}
            >
              <div className="fixture-top">
                <span className="fixture-match">Match {fixture.match}</span>
                <span className={`fixture-status status-${status}`}>{status}</span>
              </div>
              <h3>{buildMatchLabel(fixture)}</h3>
              <p className="fixture-date">
                {formatDate(fixture.iso, {
                  weekday: "short",
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
                {" - "}
                {formatDate(fixture.iso, {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}{" "}
                IST
              </p>
              <p className="fixture-venue">{fixture.venue}</p>
              <div className="fixture-tags">
                <span>{fixture.home ? "Home" : "Away"}</span>
                <span>{fixture.phase}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Tickets() {
  return (
    <section className="section ticket-section" id="tickets">
      <div className="section-head" data-reveal>
        <div>
          <span className="eyebrow">Official ticket experience</span>
          <h2>Ticketing flow pulled from the real RCB ticket page</h2>
        </div>
        <p>
          The official route is built around Ticketgenie and includes stand view selection,
          hospitality flows, QR M-tickets, live seat warnings, and direct support channels.
        </p>
      </div>

      <div className="ticket-layout">
        <article className="ticket-feature" data-reveal="left" style={{ "--reveal-order": 0 }}>
          <div className="ticket-feature-top">
            <span className="ticket-pill">Ticket HQ</span>
            <span className="ticket-pill ticket-pill-alt">Matchday access</span>
          </div>
          <h3>Built around seat choice, fast checkout, and QR entry</h3>
          <p className="ticket-copy">
            I used the official <code>/ticket</code> experience as the source here. It exposes real
            matchday signals like stand view, hospitality stands, M-ticket download, payment
            options, booking time limits, and seat-lock conflict messages.
          </p>

          <div className="ticket-touchpoints">
            {TICKET_TOUCHPOINTS.map((item, index) => (
              <div className="ticket-touchpoint" key={item.title} data-reveal style={{ "--reveal-order": index + 1 }}>
                <span>{item.title}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <div className="ticket-cta-row">
            <a className="ticket-primary" href="https://shop.royalchallengers.com/ticket" target="_blank" rel="noreferrer">
              Open official ticket page
            </a>
            <a className="ticket-secondary" href="mailto:rcbtickets@ticketgenie.in">
              rcbtickets@ticketgenie.in
            </a>
          </div>

          <p className="ticket-note">
            Corporate and hospitality contact from the official flow:{" "}
            <a href="mailto:corporatebookings@ticketgenie.in">corporatebookings@ticketgenie.in</a>
          </p>
        </article>

        <div className="ticket-grid">
          {TICKET_FEATURES.map((item, index) => (
            <article className="ticket-card" key={item.title} data-reveal style={{ "--reveal-order": index % 6 }}>
              <span className="ticket-label">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>

      <article className="ticket-map-card" data-reveal style={{ "--reveal-order": 2 }}>
        <div className="ticket-map-head">
          <div>
            <span className="ticket-label">Venue map</span>
            <h3>M. Chinnaswamy Stadium stand view</h3>
          </div>
          <p>
            Added as a visual venue guide inside the ticket section so fans can understand the stand
            layout before jumping into the official booking flow.
          </p>
        </div>
        <div className="ticket-map-frame">
          <img src={stadiumMap} alt="M. Chinnaswamy Stadium Bengaluru stand view map" />
        </div>
      </article>
    </section>
  );
}

function Squad() {
  return (
    <section className="section section-dark" id="squad">
      <div className="section-head" data-reveal>
        <div>
          <span className="eyebrow">Squad core</span>
          <h2>RCB group built for balance and finish</h2>
        </div>
        <p>
          This is a focused matchday core pulled from the official RCB squad page, with notes that
          match the start of the 2026 season.
        </p>
      </div>

      <div className="squad-grid">
        {SQUAD_CORE.map((player, index) => (
          <a
            className="player-card"
            href={player.link}
            key={player.name}
            target="_blank"
            rel="noreferrer"
            data-reveal
            style={{ "--reveal-order": index % 6 }}
          >
            <div className="player-image-wrap">
              <img className="player-image" src={player.photo} alt={player.name} loading="lazy" />
              <img className="player-crest" src={RCB_LOGO} alt="" aria-hidden="true" />
              <div className="player-top">
                <span className="player-badge">{player.tag}</span>
                <span className="player-role">{player.role}</span>
              </div>
            </div>
            <div className="player-body">
              <h3>{player.name}</h3>
              <p>{player.note}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Headlines() {
  return (
    <section className="section" id="headlines">
      <div className="section-head" data-reveal>
        <div>
          <span className="eyebrow">Latest official RCB updates</span>
          <h2>Fresh club headlines from March 22-25, 2026</h2>
        </div>
        <p>
          Every card here points back to the official Royal Challengers Bengaluru website so the
          content stays grounded in real club updates.
        </p>
      </div>

      <div className="headline-grid">
        {HEADLINES.map((item, index) => (
          <a
            className="headline-card"
            href={item.link}
            key={item.title}
            target="_blank"
            rel="noreferrer"
            data-reveal
            style={{ "--reveal-order": index % 6 }}
          >
            <span className="headline-kicker">{item.kicker}</span>
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
            <div className="headline-date">{item.date}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Merchandise() {
  const featured = MERCH_ITEMS.find((item) => item.featured) ?? MERCH_ITEMS[0];
  const collection = MERCH_ITEMS.filter((item) => item !== featured);

  return (
    <section className="section merch-section" id="merch">
      <div className="section-head" data-reveal>
        <div>
          <span className="eyebrow">Official merchandise</span>
          <h2>2026 jersey, polo, footwear, and fanwear drop</h2>
        </div>
        <p>
          Your local product shots are now part of the page, so this section feels closer to the
          real RCB store instead of a text-only merch list.
        </p>
      </div>

      <div className="merch-layout">
        <article className="merch-feature" data-reveal="left" style={{ "--reveal-order": 0 }}>
          <div className="merch-feature-media">
            <img className="merch-feature-image" src={featured.image} alt={featured.name} loading="lazy" />
          </div>
          <div className="merch-feature-top">
            <span className="merch-tag">{featured.tag}</span>
            <span className="merch-price">{featured.price}</span>
          </div>
          <h3>{featured.name}</h3>
          <p className="merch-copy">{featured.summary}</p>
          <div className="merch-detail-row">
            <span className="merch-detail">{featured.detail}</span>
            <span className="merch-detail merch-detail-soft">{featured.audience}</span>
          </div>
          <div className="merch-swatches" aria-label="RCB jersey palette">
            <span className="swatch swatch-red" />
            <span className="swatch swatch-blue" />
            <span className="swatch swatch-gold" />
          </div>
          <p className="merch-note">
            Palette direction: club red, deep blue, and signature gold. The page background now
            follows that same jersey mix instead of leaning black.
          </p>
          <a className="merch-link" href={featured.link} target="_blank" rel="noreferrer">
            Shop official RCB merch
          </a>
        </article>

        <div className="merch-grid">
          {collection.map((item, index) => (
            <a
              className="merch-card"
              href={item.link}
              key={item.name}
              target="_blank"
              rel="noreferrer"
              data-reveal
              style={{ "--reveal-order": index % 6 }}
            >
              <div className="merch-media">
                <img className="merch-image" src={item.image} alt={item.name} loading="lazy" />
              </div>
              <div className="merch-card-top">
                <span className="merch-tag">{item.tag}</span>
                <span className="merch-price">{item.price}</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
              <div className="merch-card-bottom">
                <div className="merch-detail">{item.detail}</div>
                <div className="merch-detail merch-detail-soft">{item.audience}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeasonNotes() {
  return (
    <section className="section section-accent">
      <div className="section-head" data-reveal>
        <div>
          <span className="eyebrow">Build notes</span>
          <h2>What changed in this RCB conversion</h2>
        </div>
        <p>
          The old build used fictional CSK-heavy content. This version pivots the whole experience
          to verified RCB context and removes predicted tables and fake editorial filler.
        </p>
      </div>

      <div className="note-grid">
        {SEASON_NOTES.map((note, index) => (
          <article className="note-card" key={note.title} data-reveal style={{ "--reveal-order": index }}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Sources() {
  return (
    <section className="section" id="sources">
      <div className="section-head" data-reveal>
        <div>
          <span className="eyebrow">Official links</span>
          <h2>Open the source trail</h2>
        </div>
        <p>
          Use these to cross-check the schedule, team page, and club news that power the current
          RCB build.
        </p>
      </div>

      <div className="source-grid">
        {OFFICIAL_LINKS.map((item, index) => (
          <a
            className="source-card"
            href={item.href}
            key={item.label}
            target="_blank"
            rel="noreferrer"
            data-reveal
            style={{ "--reveal-order": index % 6 }}
          >
            <span>{item.label}</span>
            <strong>Open</strong>
          </a>
        ))}
      </div>
    </section>
  );
}

function SocialIcon({ name }) {
  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5.2" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4.3" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.4" cy="6.7" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M13.4 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4H16V5.5c-.2 0-.9-.1-1.8-.1-1.8 0-3 .9-3 3.2v2.6H8.8V14h2.4v7h2.2Z"
        />
      </svg>
    );
  }

  if (name === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M21.3 8.2a2.8 2.8 0 0 0-2-2C17.6 5.7 12 5.7 12 5.7s-5.6 0-7.3.5a2.8 2.8 0 0 0-2 2A29.7 29.7 0 0 0 2.2 12c0 1.3.1 2.6.5 3.8a2.8 2.8 0 0 0 2 2c1.7.5 7.3.5 7.3.5s5.6 0 7.3-.5a2.8 2.8 0 0 0 2-2c.3-1.2.5-2.5.5-3.8 0-1.3-.2-2.6-.5-3.8ZM10.2 15.3V8.7l5 3.3-5 3.3Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M19 4h2.8l-6.2 7.1L23 20h-5.9l-4.6-6-5.2 6H4.5l6.6-7.5L4 4h6l4.1 5.4L19 4Zm-1 14.3h1.5L9.2 5.6H7.5L18 18.3Z"
      />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#top" aria-label="Royal Challengers Bengaluru home">
          <img src={RCB_LOGO} alt="RCB logo" />
        </a>

        <div className="footer-right">
          <p className="footer-copy">© Royal Challengers Sports Pvt. Ltd.</p>
          <div className="footer-socials">
            {FOOTER_SOCIALS.map((item) => (
              <a
                key={item.label}
                className="footer-social"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                title={item.label}
              >
                <SocialIcon name={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-license">
        <span className="footer-license-kicker">Fan-made credit</span>
        <strong>AMAAN MULANI</strong>
        <p>
          Fan-made website concept. All rights to Royal Challengers Bengaluru, IPL, team marks,
          logos, merchandise, and media belong to their respective official owners.
        </p>
        <p>
          All links on this page are provided to open or redirect to official RCB, IPL, Puma, app
          store, or other official partner handles.
        </p>
      </div>

      <div className="footer-data">
        <div className="footer-links" aria-label="Official footer links">
          {FOOTER_LINKS.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer-apps">
          <span>Connect with RCB Players on the RCB App. Download Now</span>
          <div className="footer-app-links">
            {FOOTER_APPS.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function IntroOverlay({ phase }) {
  const title = "FAN MADE WEBSITE";

  return (
    <div className={`intro-overlay ${phase === "exit" ? "is-exit" : ""}`} aria-hidden="true">
      <div className="intro-aura intro-aura-left" />
      <div className="intro-aura intro-aura-right" />

      <div className="intro-panel">
        <div className="intro-logo-shell">
          <img src={RCB_LOGO} alt="" />
        </div>
        <span className="intro-kicker">AMAAN MULANI</span>
        <h2 className="intro-title" aria-label={title}>
          {Array.from(title).map((char, index) => (
            <span key={`${char}-${index}`} style={{ "--intro-index": index }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
        <p className="intro-copy">
          RCB fan-made website with motion style and official-handle redirects.
        </p>
        <div className="intro-progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const now = useIstClock();
  const [introPhase, setIntroPhase] = useState("enter");
  const introActive = introPhase !== "done";
  const liveFixture = FIXTURES.find((fixture) => getFixtureStatus(fixture.iso, now) === "live");
  const nextFixture = FIXTURES.find((fixture) => new Date(fixture.iso) > now);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const exitDelay = media.matches ? 750 : 2200;
    const exitDuration = media.matches ? 120 : 700;

    const exitTimer = window.setTimeout(() => setIntroPhase("exit"), exitDelay);
    const doneTimer = window.setTimeout(() => setIntroPhase("done"), exitDelay + exitDuration);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("intro-lock", introActive);

    return () => {
      document.body.classList.remove("intro-lock");
    };
  }, [introActive]);

  useEffect(() => {
    if (introActive) return undefined;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return undefined;

    document.body.classList.add("motion-safe");
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));

      return () => {
        observer.disconnect();
        document.body.classList.remove("motion-safe");
        nodes.forEach((node) => node.classList.remove("is-visible"));
      };
  }, [introActive]);

  return (
    <div className={`app-shell ${introActive ? "is-intro-active" : "is-app-ready"}`}>
      {introPhase !== "done" && <IntroOverlay phase={introPhase} />}
      <Navbar />
      <main>
        <TopBanner />
        <Hero now={now} liveFixture={liveFixture} nextFixture={nextFixture} />
        <MatchPulse liveFixture={liveFixture} nextFixture={nextFixture} />
        <Fixtures now={now} />
        <Tickets />
        <Squad />
        <Headlines />
        <Merchandise />
        <SeasonNotes />
        <Sources />
      </main>
      <Footer />
    </div>
  );
}
