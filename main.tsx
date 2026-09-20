import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Compass,
  Sparkles,
  RefreshCw,
  Brain,
  Target,
  ShieldCheck,
  BarChart3,
  MessageCircle,
  Menu,
  X,
  Waves,
  Sunrise,
  Mountain,
  Route,
  Footprints
} from "lucide-react";
import "./styles.css";

const cycles = [
  ["01", "Current Reality", "Understand where you are today and what feels stuck, strong, or out of alignment."],
  ["02", "North Star", "Define what success and fulfillment actually mean to you—not to everyone else."],
  ["03", "Trap Patterns", "Recognize the recurring cycles that quietly interrupt your progress."],
  ["04", "Meaningful Action", "Learn to move before perfect certainty or motivation arrives."],
  ["05", "Decision-Making", "Separate facts from assumptions and make clearer, more intentional choices."],
  ["06", "Reality Testing", "Test ideas in the real world before making major commitments."],
  ["07", "Recovery", "Learn how to respond when plans fail, life changes, or setbacks hit."],
  ["08", "Self-Trust", "Build confidence from evidence—not hype or empty encouragement."],
  ["09", "Independence", "Begin using the system without waiting for someone else to guide every step."],
  ["10", "Ownership", "Create your Personal Success Plan and take the process forward as your own."]
];

const faqs = [
  [
    "Is this therapy?",
    "No. Find Your Line is a personal-development and decision-support program. It does not diagnose or treat mental-health conditions and does not replace appropriate medical, legal, financial, addiction-treatment, or crisis services."
  ],
  [
    "What if I do not know what my goal is?",
    "That is completely okay. Clarity is one of the first things the system is designed to help you build."
  ],
  [
    "What if my goal changes?",
    "Goals are allowed to change. The system helps you distinguish between quitting because something became uncomfortable and intentionally changing direction because new information tells you something else fits better."
  ],
  [
    "Will you tell me what to do?",
    "Sometimes guidance and perspective will be offered, but the program is designed to strengthen your ability to make your own decisions rather than create dependence."
  ],
  [
    "Can you guarantee a specific result?",
    "No. We do not guarantee income, promotions, business success, lifestyle outcomes, or a specific timeline. We provide a structured process, tools, accountability, and guidance."
  ],
  [
    "How much does it cost?",
    "Founding Members start for $99, followed by 11 monthly payments of $200. Total program investment: $2,299."
  ]
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navItems = useMemo(() => [
    ["Why Find Your Line", "#why"],
    ["How it works", "#how-it-works"],
    ["Growth cycles", "#cycles"],
    ["Homebase", "#dashboard"],
    ["Pricing", "#pricing"],
    ["FAQ", "#faq"]
  ], []);

  const scrollTo = (hash: string) => {
    setMobileOpen(false);
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <button className="brand" onClick={() => scrollTo("#top")} aria-label="Go to top">
            <span className="brand-mark"><Route size={19} /></span>
            <span>
              <strong>Find Your Line</strong>
              <small>Choose your line. Own your direction.</small>
            </span>
          </button>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <button key={href} onClick={() => scrollTo(href)}>{label}</button>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="primary-button compact" onClick={() => scrollTo("#apply")}>Apply</button>
            <button className="menu-button" onClick={() => setMobileOpen(v => !v)} aria-label="Toggle menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mobile-nav">
            {navItems.map(([label, href]) => (
              <button key={href} onClick={() => scrollTo(href)}>{label}</button>
            ))}
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero section">
          <div className="water-glow water-glow-a" />
          <div className="water-glow water-glow-b" />
          <div className="sunrise-glow" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={16} /> Founding Member Pilot</div>
              <p className="brand-overline">FIND YOUR LINE</p>
              <h1>Choose your line.<br />Own your direction.</h1>
              <p className="hero-lead">
                A guided personal-growth system for people who know they are capable of more,
                but want greater clarity, stronger self-trust, and a practical way to keep moving
                when life gets difficult.
              </p>

              <div className="hero-actions">
                <button className="primary-button" onClick={() => scrollTo("#apply")}>
                  Start Your Line for $99 <ArrowRight size={18} />
                </button>
                <button className="secondary-button" onClick={() => scrollTo("#how-it-works")}>
                  Explore the system
                </button>
              </div>

              <div className="micro-proof">
                <span><Check size={15} /> $99 to start</span>
                <span><Check size={15} /> 11 monthly payments of $200</span>
                <span><Check size={15} /> 10 Growth Cycles</span>
                <span><Check size={15} /> Human + AI support</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="logo-card">
                <img src="/find-your-line-logo.png" alt="Find Your Line logo" />
              </div>
              <div className="nature-ribbon">
                <span><Waves size={17} /> Calm</span>
                <span><Sunrise size={17} /> Clarity</span>
                <span><Mountain size={17} /> Challenge</span>
                <span><Route size={17} /> Direction</span>
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="section quiet-section">
          <div className="container split-copy">
            <div>
              <span className="section-kicker">Why Find Your Line</span>
              <h2>The trail is different for everyone.</h2>
            </div>
            <div className="large-body">
              <p>
                Off-road, there is rarely one perfect line through an obstacle. You read the terrain,
                choose a path, adjust when conditions change, and keep moving.
              </p>
              <p>
                Life works the same way. Find Your Line brings that mindset into personal growth:
                understand where you are, define where you want to go, adapt when necessary, and own the direction you choose.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">How it works</span>
              <h2>Not motivation for a week. A better way to navigate what comes next.</h2>
              <p>
                The program combines guided reflection, real-world action, targeted human coaching,
                and AI-supported continuity between sessions.
              </p>
            </div>

            <div className="feature-grid">
              <article className="feature-card">
                <Compass />
                <h3>Define what matters</h3>
                <p>Build your North Star around the life you actually want to create.</p>
              </article>
              <article className="feature-card">
                <Brain />
                <h3>Understand the pattern</h3>
                <p>Identify what repeatedly interrupts your progress and why it happens.</p>
              </article>
              <article className="feature-card">
                <Target />
                <h3>Take meaningful action</h3>
                <p>Turn insight into the smallest action that actually changes something.</p>
              </article>
              <article className="feature-card">
                <RefreshCw />
                <h3>Adapt and recover</h3>
                <p>Use setbacks as information instead of proof that you should quit.</p>
              </article>
              <article className="feature-card">
                <BarChart3 />
                <h3>Build evidence</h3>
                <p>Capture real examples of changed behavior and growing self-trust.</p>
              </article>
              <article className="feature-card">
                <ShieldCheck />
                <h3>Own your direction</h3>
                <p>The goal is increasing independence—not lifelong dependence on a coach.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section system-loop-section">
          <div className="container loop-layout">
            <div>
              <span className="section-kicker">The Personal Success Loop</span>
              <h2>A repeatable process for the moment you feel stuck.</h2>
              <p>The goal is not to avoid hard terrain. It is to become better at reading it.</p>
            </div>
            <div className="loop-track">
              {["NOTICE", "UNDERSTAND", "REFRAME", "CHOOSE", "ACT", "EVIDENCE"].map((item, i) => (
                <React.Fragment key={item}>
                  <div className="loop-step">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </div>
                  {i < 5 && <ArrowRight className="loop-arrow" size={17} />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <section id="cycles" className="section cycles-section">
          <div className="container">
            <div className="section-heading narrow">
              <span className="section-kicker">10 Personal Growth Cycles</span>
              <h2>Progress that becomes progressively more yours.</h2>
              <p>
                The cycles create structure without pretending every person should follow the same life path.
              </p>
            </div>

            <div className="cycles-list">
              {cycles.map(([num, title, desc]) => (
                <article className="cycle-row" key={num}>
                  <span className="cycle-number">{num}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section water-section">
          <div className="container water-grid">
            <div>
              <span className="section-kicker">Nature is part of the identity</span>
              <h2>Calm enough to think. Strong enough to move.</h2>
              <p>
                The visual language of Find Your Line is inspired by hydro-blue water, clear mornings,
                mountain trails, and sunrise light—because the brand should feel like the same perspective
                people often find when they finally get outside the noise.
              </p>
            </div>
            <div className="palette">
              <div className="swatch hydro"><span>Hydro Blue</span></div>
              <div className="swatch aqua"><span>Aqua</span></div>
              <div className="swatch teal"><span>Deep Water</span></div>
              <div className="swatch sunrise"><span>Sunrise</span></div>
              <div className="swatch gold"><span>First Light</span></div>
              <div className="swatch cloud"><span>Cloud White</span></div>
            </div>
          </div>
        </section>

        <section id="dashboard" className="section dashboard-section">
          <div className="container dashboard-grid">
            <div className="dashboard-copy">
              <span className="section-kicker">Your Homebase</span>
              <h2>Everything important. Nothing distracting.</h2>
              <p>
                The customer Homebase keeps the system simple enough to use when life is actually happening.
              </p>
              <ul className="plain-list">
                <li><Check size={17} /> Your North Star</li>
                <li><Check size={17} /> Your Current Chapter</li>
                <li><Check size={17} /> Your Current Focus</li>
                <li><Check size={17} /> Your Next Meaningful Move</li>
                <li><Check size={17} /> Your Trap Pattern</li>
                <li><Check size={17} /> Your Evidence Log</li>
              </ul>
            </div>

            <div className="dashboard-mock">
              <div className="dash-top">
                <div>
                  <span className="dash-label">Find Your Line</span>
                  <h3>Your Homebase</h3>
                </div>
                <div className="avatar"><Route size={20} /></div>
              </div>

              <div className="dash-card featured">
                <span>MY NORTH STAR</span>
                <p>Build a life with more control, purpose, meaningful work, and time for what matters.</p>
              </div>

              <div className="dash-two">
                <div className="dash-card">
                  <span>CURRENT FOCUS</span>
                  <p>Validate the next career move with real-world evidence.</p>
                </div>
                <div className="dash-card">
                  <span>NEXT MOVE</span>
                  <p>Schedule one 20-minute conversation by Friday.</p>
                </div>
              </div>

              <div className="dash-card">
                <span>PATTERN I’M WATCHING</span>
                <p>Excitement → Overplanning → Overwhelm → Avoidance</p>
              </div>

              <div className="evidence-strip">
                <Footprints size={20} />
                <div>
                  <strong>Evidence +1</strong>
                  <span>You acted before feeling completely ready.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section pricing-section">
          <div className="container pricing-wrap">
            <div className="pricing-copy">
              <span className="section-kicker">Founding Member Pilot</span>
              <h2>Accessible enough to begin. Serious enough to matter.</h2>
              <p>
                Start with a smaller first commitment, then continue through an intentionally structured 12-month journey.
              </p>

              <div className="price-line">
                <strong>$99</strong>
                <span>to start</span>
              </div>

              <div className="payment-plan">
                <div>
                  <span className="payment-label">Then</span>
                  <strong>11 × $200</strong>
                  <span>monthly payments</span>
                </div>
                <div>
                  <span className="payment-label">Total</span>
                  <strong>$2,299</strong>
                  <span>program investment</span>
                </div>
              </div>

              <p className="pricing-note">
                The total cost is shown upfront. The program does not automatically renew into a paid continuation membership.
              </p>
            </div>

            <div className="price-card">
              <h3>Included</h3>
              {[
                "Personal Starting Assessment",
                "Personal Starting Profile",
                "10 Personal Growth Cycles",
                "AI-supported guidance",
                "Targeted human coaching",
                "Find Your Line Homebase",
                "Evidence Log",
                "Monthly progress reviews",
                "Personal Success Plan",
                "Founding Member lifetime core access upon meaningful completion"
              ].map(item => (
                <div className="price-item" key={item}><Check size={17} /> {item}</div>
              ))}

              <button className="primary-button full" onClick={() => scrollTo("#apply")}>
                Start Your Line for $99 <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        <section className="section values-section">
          <div className="container">
            <div className="value-quote">
              <MessageCircle size={28} />
              <blockquote>
                “We should never profit by convincing people they are incapable without us.
                The goal is to help them become more capable.”
              </blockquote>
              <p>Choose your line. Own your direction.</p>
            </div>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="container faq-grid">
            <div>
              <span className="section-kicker">FAQ</span>
              <h2>Clear answers before you apply.</h2>
            </div>
            <div className="faq-list">
              {faqs.map(([q, a], index) => (
                <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={q}>
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <span>{q}</span>
                    <ChevronDown size={20} />
                  </button>
                  {openFaq === index && <p>{a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="apply" className="section apply-section">
          <div className="container apply-card">
            <div className="apply-sun" />
            <span className="section-kicker light">Founding Member Application</span>
            <h2>You do not need your entire life figured out.</h2>
            <p>
              You only need to be willing to start understanding what matters, what keeps getting in the way,
              and what your next meaningful move could be.
            </p>

            <form
              className="apply-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Prototype form submitted. Connect this to your secure form backend before launch.");
              }}
            >
              <div className="form-grid">
                <label>
                  Name
                  <input required placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input required type="email" placeholder="you@example.com" />
                </label>
              </div>
              <label>
                What part of your life would you most like to change right now?
                <textarea required rows={4} placeholder="Tell us what feels stuck or underfulfilled..." />
              </label>
              <label>
                Why now?
                <textarea required rows={4} placeholder="Why are you considering doing something about this today?" />
              </label>
              <button className="light-button" type="submit">
                Start My Application <ArrowRight size={18} />
              </button>
              <small>
                This prototype does not transmit or store data until you connect it to a secure form service or backend.
              </small>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand">
              <span className="brand-mark"><Route size={19} /></span>
              <span>
                <strong>Find Your Line</strong>
                <small>Choose your line. Own your direction.</small>
              </span>
            </div>
            <p>Clarity. Resilience. Direction.</p>
          </div>

          <div className="footer-note">
            <p>
              Find Your Line is a personal-development program. It does not provide medical,
              mental-health, legal, financial, addiction-treatment, or crisis services and does not guarantee specific external outcomes.
            </p>
            <span>© 2026 Find Your Line. Founding pilot.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
