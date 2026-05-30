import { PageLayout } from "../components/PageLayout";
import { BANNER_URL } from "../lib/constants";
import { Card, Btn, SectionHeading, CoconutDivider } from "../components/shared";

const BOARD_MEMBERS = [
  { name: "Mr. Christopher Gentles", role: "Board Chairman, Appointed Director" },
  { name: "Mr. Demetrie Adams", role: "Audit & Risk Management Committee Chairman, Appointed Director" },
  { name: "Mr. Dennis Lecky", role: "Elected Director" },
  { name: "Mr. Nicholas Jones", role: "Project Approval & Review Committee Chairperson, Elected Director" },
  { name: "Mrs. Leza Jaddoo-Davis", role: "Elected Director" },
  { name: "Mrs. Sandra Ennis", role: "Finance Committee Chairperson, Elected Director" },
  { name: "Mrs. Sheryll Hamilton", role: "Human Resource Committee Chairperson, Appointed Director" },
  { name: "Mr. Stephen Black", role: "Elected Director" },
  { name: "Mr. Shaun O'B Cameron", role: "General Manager" },
  { name: "Miss Nashell Blackwood", role: "Corporate Secretary / Legal Officer" },
];

const IMPACT = [
  { icon: "🥥", stat: "170.5M+", label: "Coconuts Produced", note: "+2% this year" },
  { icon: "👨‍🌾", stat: "593+", label: "Farmers Supported / Trained", note: "+4% this year" },
  { icon: "🌱", stat: "49.7K+", label: "Seedlings Distributed", note: "+1.3% this year" },
  { icon: "🌴", stat: "17K+", label: "Coconut Acreage", note: "+1.3% this year" },
];

const RESEARCH_AREAS = [
  "Plant Breeding & Pathology",
  "Crop Disease Management",
  "Weed Control Systems",
  "Tissue Culture",
  "Crop Cover Efficiency",
  "Germination Improvement",
  "Soil Testing",
  "Optimising Fertiliser Levels",
  "Soil Conservation Measures",
];

function initials(name: string) {
  return name
    .replace(/^(Mr\.|Mrs\.|Miss|Dr\.)\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export function About() {
  return (
    <PageLayout>
    <div style={{ background: "#faf7f0" }}>
      {/* Banner */}
      <div style={{ position: "relative", overflow: "hidden", maxHeight: 220 }}>
        <img src={BANNER_URL} alt="CIB 80th Anniversary" style={{ width: "100%", objectFit: "cover", display: "block", maxHeight: 220 }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right,rgba(10,40,15,0.68) 0%,rgba(10,40,15,0.3) 60%,transparent 100%)",
            display: "flex",
            alignItems: "center",
            padding: "0 2rem",
          }}
        >
          <div>
            <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f0d080", margin: "0 0 0.4rem" }}>WHO WE ARE</p>
            <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", color: "#fff", fontSize: "clamp(1.5rem,4vw,2.6rem)", margin: 0 }}>About Us</h1>
          </div>
        </div>
      </div>

      {/* ── WHO WE ARE ──────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 780 }}>
          <p style={{ color: "#6b6355", fontSize: "1.05rem", lineHeight: 1.8, margin: 0 }}>
            At the heart of Jamaica's thriving coconut industry, we are dedicated to fostering growth,
            innovation, and sustainability. Our organisation is committed to supporting coconut
            farmers, processors, and traders by providing resources, research, and partnerships that
            drive the industry forward. With a focus on quality and efficiency, we aim to enhance the
            socio-economic conditions of all stakeholders involved in the coconut sector. Our efforts
            are rooted in a deep respect for tradition while embracing modern advancements to ensure a
            vibrant and sustainable future for Jamaica's coconut industry.
          </p>
        </div>
      </section>

      {/* ── MISSION & VISION ────────────────────────────────────────────────── */}
      <section className="section--sm" style={{ background: "#e8f5ec" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
          <Card style={{ borderLeft: "4px solid #1a6b2e", padding: "1.5rem" }}>
            <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9922a", margin: "0 0 0.5rem" }}>OUR MISSION</p>
            <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", color: "#1a6b2e", margin: "0 0 0.75rem", fontSize: "1.25rem" }}>Mission</h3>
            <p style={{ color: "#6b6355", fontSize: 14, lineHeight: 1.75, margin: 0 }}>
              To promote the interest of the Jamaican coconut industry and its stakeholders, by
              encouraging and facilitating the efficient production of coconuts, providing ongoing
              research support, developing marketing opportunities locally and globally, and
              administering regulations for the purchase, sale, and importation of coconut products
              and substitutes, in order to develop a profitable and sustainable industry.
            </p>
          </Card>
          <Card style={{ borderLeft: "4px solid #c9922a", padding: "1.5rem" }}>
            <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9922a", margin: "0 0 0.5rem" }}>OUR VISION</p>
            <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", color: "#1a6b2e", margin: "0 0 0.75rem", fontSize: "1.25rem" }}>Vision</h3>
            <p style={{ color: "#6b6355", fontSize: 14, lineHeight: 1.75, margin: 0 }}>
              To lead, facilitate and co-ordinate a vibrant and efficient coconut industry which will
              improve the socio-economic conditions of the coconut growers, processors, traders and
              other stakeholders who rely on the crop for a livelihood.
            </p>
          </Card>
        </div>
      </section>

      {/* ── IMPACT REPORT ───────────────────────────────────────────────────── */}
      <section className="section" style={{ background: "#faf7f0" }}>
        <div className="container">
          <SectionHeading eyebrow="HOW WE ARE DOING" title="Impact Report" sub="Our initiatives have made a meaningful difference in the Jamaican coconut industry." center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
            {IMPACT.map((i) => (
              <Card key={i.stat} style={{ textAlign: "center", background: "#fff" }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>{i.icon}</div>
                <div
                  style={{
                    fontFamily: "'Playfair Display',Georgia,serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#1a6b2e",
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {i.stat}
                </div>
                <div style={{ fontWeight: 600, fontSize: 13, color: "#1c1c1c", marginBottom: 4 }}>{i.label}</div>
                <div style={{ fontSize: 11, color: "#6b6355" }}>{i.note}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CoconutDivider />

      {/* ── RESEARCH ────────────────────────────────────────────────────────── */}
      <section className="section" style={{ background: "#f0ead8" }}>
        <div className="container">
          <SectionHeading eyebrow="RESEARCH & DEVELOPMENT" title="Our Research Department" sub="Advancing Jamaica's coconut industry through science and innovation." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "2rem", alignItems: "start" }}>
            <div>
              <p style={{ color: "#6b6355", lineHeight: 1.8, fontSize: 15, margin: "0 0 1.25rem" }}>
                Our research department focuses on various areas to advance the productivity and
                sustainability of Jamaica's coconut industry. We collaborate with UWI, the Ministry
                of Agriculture, and international partners to ensure growers benefit from the latest
                scientific developments.
              </p>
              <Btn href="/about">Learn More About Research</Btn>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {RESEARCH_AREAS.map((area) => (
                <div
                  key={area}
                  style={{
                    background: "#fff",
                    borderRadius: 8,
                    border: "1px solid #ddd6c4",
                    padding: "0.6rem 0.85rem",
                    fontSize: 13,
                    color: "#3a3a2e",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ color: "#1a6b2e", fontSize: 14 }}>✓</span>
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOARD MEMBERS ───────────────────────────────────────────────────── */}
      <section className="section" style={{ background: "#faf7f0" }}>
        <div className="container">
          <SectionHeading eyebrow="MEET THE TEAM" title="Board Members" sub="The Board consists of nine members, four appointed by the Minister of Agriculture and Fisheries, and five elected by registered coconut growers." center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 14 }}>
            {BOARD_MEMBERS.map((m) => (
              <Card key={m.name} style={{ textAlign: "center", padding: "1.25rem 0.75rem" }}>
                {/* Avatar circle */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#1a6b2e,#2d8a45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 0.75rem",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#fff",
                    fontFamily: "'Source Sans 3',sans-serif",
                    border: "2px solid #c9922a",
                    flexShrink: 0,
                  }}
                >
                  {initials(m.name)}
                </div>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#1c1c1c", marginBottom: 4 }}>{m.name}</div>
                <div style={{ fontSize: 11, color: "#6b6355", lineHeight: 1.4 }}>{m.role}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
    </PageLayout>
  );
}
