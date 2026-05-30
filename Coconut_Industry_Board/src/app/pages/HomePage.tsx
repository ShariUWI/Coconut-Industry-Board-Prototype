import { Link } from "react-router";
import { BANNER_URL, wa, PHONE, MAPS } from "../lib/constants";
import { Card, Btn, Badge, SectionHeading } from "../components/shared";
import { PageLayout } from "../components/PageLayout";

const NEWS_ITEMS = [
  {
    img: "https://www.intracen.org/sites/default/files/styles/content_full/public/media/image/media_image/2023/10/04/babylove_ice_cream.jpeg?itok=x5z0t13A",
    date: "Oct 5, 2025",
    title: "Caribbean coconut brands tap into the US market",
    excerpt: "Three brands travelled to the Natural Products Expo East 2023 in Philadelphia to tap into the US market.",
    href: "https://intracen.org/news-and-events/news/caribbean-coconut-brands-tap-into-the-us-market",
    by: "IntraCen",
  },
  {
    img: "https://menafn.com/updates/pr/2023-04/29/CNG_7f267image_story.jpg",
    date: "Apr 29, 2025",
    title: "Promoting Natural Caribbean Coconut Products At Expo Jamaica",
    excerpt: "ITC brings two brands to the largest trade show in the Caribbean for better business and market connections.",
    href: "https://menafn.com/1106138867/Promoting-Natural-Caribbean-Coconut-Products-At-Expo-Jamaica",
    by: "MENAFN",
  },
  {
    img: "https://www.intracen.org/sites/default/files/styles/content_full/public/media/image/media_image/2023/07/26/unfss_fao_itc_booth_20230726.jpg?itok=G7JSZjhd",
    date: "Jul 26, 2023",
    title: "Partnerships for sustainable food systems convene in Rome",
    excerpt: "ITC's agribusiness team went to Rome to showcase sustainable food system programmes at the UN Food Systems Summit.",
    href: "https://intracen.org/news-and-events/news/partnerships-for-sustainable-food-systems-convene-in-rome",
    by: "IntraCen",
  },
];

export function HomePage() {
  return (
    <PageLayout>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* ── ANNIVERSARY BANNER ─────────────────────────────────────────────── */}
        <div style={{ position: "relative", overflow: "hidden", minHeight: "clamp(260px, 30vw, 320px)" }}>
          <img
            src={BANNER_URL}
            alt="Coconut Industry Board 80th Anniversary"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          {/* overlay CTAs */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(10,40,15,0.7) 0%, rgba(10,40,15,0.25) 70%, transparent 100%)",
              display: "flex",
              alignItems: "center",
              padding: "1rem 2rem",
            }}
          >
            <div style={{ maxWidth: 560 }}>
              <h1
                style={{
                  fontFamily: "'Playfair Display',Georgia,serif",
                  color: "#fff",
                  fontSize: "clamp(1.35rem,3vw,2.15rem)",
                  margin: "0 0 0.45rem",
                  lineHeight: 1.2,
                  textShadow: "0 2px 12px rgba(0,0,0,0.4)",
                }}
              >
                The Coconut<br />Industry Board
              </h1>
              <p
                style={{
                  color: "rgba(255,255,255,0.88)",
                  fontSize: "clamp(0.78rem,1.35vw,0.95rem)",
                  margin: "0 0 0.75rem",
                  lineHeight: 1.45,
                }}
              >
                Jamaica's trusted statutory body for coconut industry development since 1945 — supporting growers, products and sustainable agriculture.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <Btn href="/about">Learn More</Btn>
                <Btn variant="whatsapp" href={wa("Hello CIB! I'd like to place an order.")}>💬 Order on WhatsApp</Btn>
              </div>
            </div>
          </div>
        </div>

        {/* ── QUICK-ACCESS STRIP ──────────────────────────────────────────────── */}
        <div style={{ display: "none" }}>
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
              gap: 0,
            }}
          >
            {[
              { icon: "🛒", label: "Shop Products", to: "/shop" },
              { icon: "💬", label: "Order on WhatsApp", href: wa("Hello CIB! I'd like to order."), external: true, accent: true },
              { icon: "📝", label: "Register as a Grower", to: "/register" },
              { icon: "📞", label: "Call Now", href: PHONE, external: true },
              { icon: "📍", label: "Get Directions", href: MAPS, external: true },
            ].map((item) => {
              const inner = (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                    padding: "14px 8px",
                    cursor: "pointer",
                    borderRight: "1px solid rgba(255,255,255,0.12)",
                    background: item.accent ? "#c9922a" : undefined,
                    transition: "background 0.15s",
                    textAlign: "center",
                  }}
                >
                  <span style={{ fontSize: 22 }}>{item.icon}</span>
                  <span
                    style={{
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 700,
                      fontFamily: "'Source Sans 3',sans-serif",
                      lineHeight: 1.25,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              );
              if (item.href)
                return (
                  <a key={item.label} href={item.href} style={{ textDecoration: "none" }} target={item.external ? "_blank" : undefined} rel="noreferrer">
                    {inner}
                  </a>
                );
              return (
                <Link key={item.label} to={item.to!} style={{ textDecoration: "none" }}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>

        {/* ── ABOUT INTRO ─────────────────────────────────────────────────────── */}
        <section className="section" style={{ background: "#faf7f0" }}>
          <div
            className="container"
            style={{
              maxWidth: 760,
              textAlign: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Source Sans 3',sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#c9922a",
                  margin: "0 0 0.5rem",
                }}
              >
                About Us
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display',Georgia,serif",
                  color: "#1a6b2e",
                  fontSize: "clamp(1.5rem,3vw,2rem)",
                  margin: "0 0 1rem",
                }}
              >
                Growing Jamaica's Coconut Industry
              </h2>
              <p style={{ color: "#6b6355", lineHeight: 1.75, margin: "0 0 1rem", fontSize: 15 }}>
                The Jamaican Coconut Industry Board and its stakeholders promote the sustainable
                cultivation of coconuts, provide ongoing research, create local and international
                marketing opportunities, and oversee laws governing coconut products and substitutes.
              </p>
              <p style={{ color: "#6b6355", lineHeight: 1.75, margin: "0 0 1.5rem", fontSize: 15 }}>
                We aim to improve the socioeconomic circumstances of coconut growers, processors,
                traders, and other stakeholders who depend on the crop for a living.
              </p>
              <Btn href="/about">Learn More</Btn>
            </div>
          </div>
        </section>

        {/* ── THE COCONUT SHOP ────────────────────────────────────────────────── */}
        <section
          style={{
            background: "linear-gradient(135deg,#0f4520 0%,#1a6b2e 100%)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -60,
              top: -40,
              fontSize: 260,
              opacity: 0.06,
              pointerEvents: "none",
              lineHeight: 1,
            }}
          >
            🥥
          </div>
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "2rem",
              alignItems: "center",
              padding: "3.5rem 1.25rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Source Sans 3',sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#f0d080",
                  margin: "0 0 0.5rem",
                }}
              >
                We Manufacture & Sell
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display',Georgia,serif",
                  color: "#fff",
                  fontSize: "clamp(1.5rem,3vw,2rem)",
                  margin: "0 0 1rem",
                }}
              >
                Coconut-Based Products
              </h2>
              <p style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.75, margin: "0 0 1rem", fontSize: 15 }}>
                The Coconut Shop, the Board's retail outlet, is located at our head office at
                18 Waterloo Road in Kingston, Jamaica. We sell a wide range of coconut products
                including Jelly Coconuts, Coconut Water, Coconut Oil, Coconut Treats and Snacks.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <Btn href="/shop" variant="gold">🛒 Browse Products</Btn>
                <Btn href={wa("Hello CIB, I'd like to place a product order.")} variant="whatsapp">💬 Order on WhatsApp</Btn>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2,1fr)",
                  gap: 10,
                }}
              >
                {[
                  { emoji: "🥤", name: "Coconut Water" },
                  { emoji: "🫙", name: "Coconut Oil" },
                  { emoji: "🥥", name: "Jelly Coconuts" },
                  { emoji: "🍬", name: "Coconut Treats" },
                ].map((p) => (
                  <Link
                    key={p.name}
                    to="/shop"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      borderRadius: 12,
                      padding: "1rem",
                      textAlign: "center",
                      textDecoration: "none",
                      transition: "background 0.15s",
                      display: "block",
                    }}
                  >
                    <div style={{ fontSize: 36, marginBottom: 6 }}>{p.emoji}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{p.name}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ANNUAL REGISTRATION ─────────────────────────────────────────────── */}
        <section className="section" style={{ background: "#f0ead8" }}>
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Source Sans 3',sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#c9922a",
                  margin: "0 0 0.5rem",
                }}
              >
                Annual Registration
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display',Georgia,serif",
                  color: "#1a6b2e",
                  fontSize: "clamp(1.5rem,3vw,2rem)",
                  margin: "0 0 1rem",
                }}
              >
                Annual Registration of Coconut Growers
              </h2>
              <p style={{ color: "#6b6355", lineHeight: 1.75, margin: "0 0 1.5rem", fontSize: 15 }}>
                Join our growing community of coconut growers. Registered growers gain access to
                CIB's support services, quality planting material, training programmes, and
                market connections — helping your farm and livelihood grow.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <Btn href="/register">Register Now</Btn>
                <Btn href="/register" variant="outline">Download Form</Btn>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { icon: "🎓", title: "Training Access", desc: "Workshops and farming best-practice sessions" },
                { icon: "🌱", title: "Quality Seedlings", desc: "Disease-resistant seedlings from CIB's nursery" },
                { icon: "📈", title: "Market Opportunities", desc: "Connect with buyers and processors" },
                { icon: "📰", title: "Industry Updates", desc: "Latest trends and research in the sector" },
              ].map((b) => (
                <Card key={b.title} style={{ padding: "1rem", background: "#fff" }}>
                  <div style={{ fontSize: 28, marginBottom: 6 }}>{b.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: "#1a6b2e", marginBottom: 3 }}>{b.title}</div>
                  <div style={{ fontSize: 12, color: "#6b6355", lineHeight: 1.5 }}>{b.desc}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESEARCH ────────────────────────────────────────────────────────── */}
        <section className="section" style={{ background: "#faf7f0" }}>
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="https://coconutindustryboard.org/images/home-section1.png"
                alt="Coconut"
                style={{ borderRadius: 16, width: "100%", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'Source Sans 3',sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#c9922a",
                  margin: "0 0 0.5rem",
                }}
              >
                Research & Development
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display',Georgia,serif",
                  color: "#1a6b2e",
                  fontSize: "clamp(1.5rem,3vw,2rem)",
                  margin: "0 0 1rem",
                }}
              >
                Our Research Department
              </h2>
              <p style={{ color: "#6b6355", lineHeight: 1.75, margin: "0 0 1.5rem", fontSize: 15 }}>
                Our research department focuses on plant breeding and pathology, crop disease
                management, weed control, tissue culture, crop cover efficiency, germination
                improvement, soil testing, and implementing soil conservation measures.
              </p>
              <Btn href="/about">Learn More</Btn>
            </div>
          </div>
        </section>

        {/* ── NEWS ────────────────────────────────────────────────────────────── */}
        <section className="section" style={{ background: "#e8f5ec" }}>
          <div className="container">
            <SectionHeading
              eyebrow="Industry News and Updates"
              title="View the latest news regarding farming and agriculture."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                gap: 16,
              }}
            >
              {NEWS_ITEMS.map((n) => (
                <Card key={n.title} hover style={{ display: "flex", flexDirection: "column", padding: 0, overflow: "hidden" }}>
                  <img
                    src={n.img}
                    alt={n.title}
                    style={{ width: "100%", height: 160, objectFit: "cover" }}
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 12, color: "#6b6355", marginBottom: 6 }}>
                      <span style={{ fontWeight: 600 }}>By {n.by}</span> &nbsp;|&nbsp; {n.date}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display',Georgia,serif",
                        fontSize: 15,
                        color: "#1c1c1c",
                        margin: "0 0 8px",
                        lineHeight: 1.35,
                      }}
                    >
                      {n.title}
                    </h3>
                    <p style={{ fontSize: 13, color: "#6b6355", lineHeight: 1.6, flex: 1, margin: "0 0 12px" }}>
                      {n.excerpt}
                    </p>
                    <a
                      href={n.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#1a6b2e", fontWeight: 700, fontSize: 13, textDecoration: "none" }}
                    >
                      Read More →
                    </a>
                  </div>
                </Card>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Btn href="/resources" variant="outline">View More Stories</Btn>
            </div>
          </div>
        </section>

        {/* ── CAMPAIGN ────────────────────────────────────────────────────────── */}
        <section
          style={{
            background: "linear-gradient(135deg,#0f4520,#5c3d1a)",
            padding: "3.5rem 0",
          }}
        >
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <Badge color="#c9922a" text="#fff">#ClaimTheFreshness</Badge>
              <h2
                style={{
                  fontFamily: "'Playfair Display',Georgia,serif",
                  color: "#fff",
                  fontSize: "clamp(1.4rem,3vw,2rem)",
                  margin: "0.75rem 0 0.6rem",
                }}
              >
                Claim the Freshness with CIB
              </h2>
              <p style={{ color: "rgba(255,255,255,0.78)", maxWidth: 560, margin: "0 auto 1.5rem", fontSize: 15 }}>
                Fresh Jamaican coconut products, farmer stories, recipes, and wellness tips — all from the Coconut Industry Board.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
                gap: 12,
                marginBottom: "1.75rem",
              }}
            >
              {[
                { icon: "🎥", tag: "#ShareTheCocoLove", title: "Influencer Taste Tests", sub: "Authentic reactions to CIB's fresh products" },
                { icon: "👨‍🍳", tag: "#CocoJammin", title: "Cooking with Coconuts", sub: "Recipes from Jamaica's finest kitchens" },
                { icon: "✨", tag: "#CIB_CocoLove", title: "Coconut Wellness", sub: "Natural beauty from the coconut palm" },
                { icon: "🌴", tag: "#KnowYourCoconut", title: "Farmer Success Stories", sub: "Growers thriving with CIB's support" },
              ].map((c) => (
                <div
                  key={c.title}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 12,
                    padding: "1.1rem",
                  }}
                >
                  <div style={{ fontSize: 30, marginBottom: 6 }}>{c.icon}</div>
                  <div style={{ fontSize: 11, color: "#f0d080", fontWeight: 700, marginBottom: 4 }}>{c.tag}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#fff", marginBottom: 4 }}>{c.title}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>{c.sub}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10 }}>
              <Btn href="/shop" variant="gold">🛒 Shop the Coconut Collective</Btn>
              <Btn href={wa("Hello CIB! I'd like to share a coconut recipe idea.")} variant="whatsapp">🍳 Share Your Recipe</Btn>
            </div>
            <p style={{ textAlign: "center", color: "rgba(255,255,255,0.45)", fontSize: 12, marginTop: "1rem" }}>
              Follow us: 📸 @coconutindustryboardja &nbsp;·&nbsp; 🐦 @tcibja
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
