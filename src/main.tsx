import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  ChevronDown,
  Compass,
  Footprints,
  Menu,
  MessageCircle,
  Mountain,
  RefreshCw,
  Route,
  ShieldCheck,
  Sparkles,
  Sunrise,
  Target,
  Waves,
  X
} from "lucide-react";
import "./styles.css";

const cycles = [
  [
    "01",
    "Current Reality",
    "Understand where you are today and what feels stuck, strong, or out of alignment."
  ],
  [
    "02",
    "North Star",
    "Define what success and fulfillment actually mean to you—not to everyone else."
  ],
  [
    "03",
    "Trap Patterns",
    "Recognize the recurring cycles that quietly interrupt your progress."
  ],
  [
    "04",
    "Meaningful Action",
    "Learn to move before perfect certainty or motivation arrives."
  ],
  [
    "05",
    "Decision-Making",
    "Separate facts from assumptions and make clearer, more intentional choices."
  ],
  [
    "06",
    "Reality Testing",
    "Test ideas in the real world before making major commitments."
  ],
  [
    "07",
    "Recovery",
    "Learn how to respond when plans fail, life changes, or setbacks hit."
  ],
  [
    "08",
    "Self-Trust",
    "Build confidence from evidence—not hype or empty encouragement."
  ],
  [
    "09",
    "Independence",
    "Begin using the system without waiting for someone else to guide every step."
  ],
  [
    "10",
    "Ownership",
    "Create your Personal Success Plan and take the process forward as your own."
  ]
];

const audienceItems = [
  "You know you are capable of more, but you are not sure where to focus that potential.",
  "You get excited about change, then lose momentum when life gets busy or uncertainty shows up.",
  "Your routine works on paper, but it does not feel like the life you want to keep repeating.",
  "You want guidance and accountability without being told what your life should look like.",
  "You are willing to take real-world action instead of only consuming motivation."
];

const outcomes = [
  [
    "A clear North Star",
    "Define what success, fulfillment, and direction actually mean for you."
  ],
  [
    "A better decision process",
    "Separate facts, fear, assumptions, and real-world evidence before making major moves."
  ],
  [
    "A repeatable way through setbacks",
    "Recover, adapt, and keep moving instead of treating difficulty as proof to quit."
  ],
  [
    "Evidence of self-trust",
    "Build confidence from actions you can point to, not hype you have to keep recreating."
  ],
  [
    "A Personal Success Plan",
    "Leave with a system you can continue using with increasing independence."
  ]
];

const included = [
  "Personal Starting Assessment",
  "Personal Starting Profile",
  "10 Personal Growth Cycles",
  "Human coaching at key decision points",
  "AI-supported continuity between sessions",
  "Find Your Line Homebase",
  "Evidence Log",
  "Monthly progress reviews",
  "Personal Success Plan"
];

const faqs = [
  [
    "What happens after I apply?",
    "Your application is reviewed first. If Find Your Line appears to be a good fit, we will explain the next step before you move forward."
  ],
  [
    "Who will I actually be working with?",
    "Find Your Line combines human guidance with AI-supported continuity. Human support is used for perspective, accountability, and important decision points. AI support helps maintain continuity and momentum between those moments."
  ],
  [
    "How much time should I expect to put into this?",
    "The program is designed to work alongside real life. The goal is steady, meaningful action—not hours of homework every week. Your exact pace can vary depending on the cycle and what you are working through."
  ],
  [
    "What does the AI support actually do?",
    "AI helps preserve continuity between sessions, organize reflections, surface patterns, and keep your current focus visible. It is a support tool inside the system, not a replacement for your own judgment or appropriate professional care."
  ],
  [
    "What if I do not know what my goal is?",
    "That is completely okay. Building clarity is one of the first jobs of the system."
  ],
  [
    "What if my goal changes?",
    "Goals are allowed to change. The system helps you distinguish between quitting because something became uncomfortable and intentionally changing direction because new information points somewhere better."
  ],
  [
    "Will you tell me what to do?",
    "Guidance and perspective may be offered, but the goal is to strengthen your ability to make your own decisions rather than create dependence."
  ],
  [
    "Is this therapy?",
    "No. Find Your Line is a personal-development and decision-support program. It does not diagnose or treat mental-health conditions and does not replace appropriate medical, legal, financial, addiction-treatment, or crisis services."
  ]
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showAllCycles, setShowAllCycles] = useState(false);
  const [investmentOpen, setInvestmentOpen] = useState(false);

  const navItems = useMemo(
    () => [
      ["Who it is for", "#fit"],
      ["How it works", "#how-it-works"],
      ["Homebase", "#dashboard"],
      ["Growth cycles", "#cycles"],
      ["FAQ", "#faq"]
    ],
    []
  );

  useEffect(() => {
    document.body.style.overflow = investmentOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [investmentOpen]);

  const scrollTo = (hash: string) => {
    setMobileOpen(false);
    setInvestmentOpen(false);

    setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({
        behavior: "smooth"
      });
    }, 20);
  };

  const openInvestment = () => {
    setMobileOpen(false);
    setInvestmentOpen(true);
  };

  const visibleCycles = showAllCycles ? cycles : cycles.slice(0, 5);

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <button
            className="brand"
            onClick={() => scrollTo("#top")}
            aria-label="Go to top"
          >
            <span className="brand-mark">
              <Route size={19} />
            </span>

            <span>
              <strong>Find Your Line</strong>
              <small>Choose your line. Own your direction.</small>
            </span>
          </button>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <button key={href} onClick={() => scrollTo(href)}>
                {label}
              </button>
            ))}

            <button
              className="investment-nav-link"
              onClick={openInvestment}
            >
              Your Investment
            </button>
          </nav>

          <div className="nav-actions">
            <button
              className="primary-button compact"
              onClick={() => scrollTo("#apply")}
            >
              Apply
            </button>

            <button
              className="menu-button"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mobile-nav">
            {navItems.map(([label, href]) => (
              <button key={href} onClick={() => scrollTo(href)}>
                {label}
              </button>
            ))}

            <button
              className="mobile-investment-link"
              onClick={openInvestment}
            >
              Your Investment
              <ArrowRight size={17} />
            </button>
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
              <div className="eyebrow">
                <Sparkles size={16} />
                Founding Member Pilot
              </div>

              <p className="brand-overline">FIND YOUR LINE</p>

              <h1>You know you’re capable of more.</h1>

              <p className="hero-lead strong-lead">
                You’re just tired of feeling stuck between where you are and
                where you know you could be.
              </p>

              <p className="hero-support">
                Find Your Line helps you turn that frustration into clarity,
                direction, and meaningful action—without pretending there is
                one right path for everyone.
              </p>

              <div className="hero-actions">
                <button
                  className="primary-button"
                  onClick={() => scrollTo("#apply")}
                >
                  Start My Application Now — $99
                  <ArrowRight size={18} />
                </button>

                <button
                  className="secondary-button"
                  onClick={() => scrollTo("#how-it-works")}
                >
                  See how it works
                </button>
              </div>

              <div className="micro-proof">
                <span>
                  <Check size={15} /> 10 Growth Cycles
                </span>

                <span>
                  <Check size={15} /> Human + AI support
                </span>

                <span>
                  <Check size={15} /> Personal Success Plan
                </span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="logo-card">
                <img
                  src="/find-your-line-logo-new.png"
                  alt="Find Your Line logo"
                />
              </div>

              <div className="nature-ribbon">
                <span>
                  <Waves size={17} /> Calm
                </span>

                <span>
                  <Sunrise size={17} /> Clarity
                </span>

                <span>
                  <Mountain size={17} /> Challenge
                </span>

                <span>
                  <Route size={17} /> Direction
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="fit" className="section fit-section">
          <div className="container fit-grid">
            <div className="fit-heading">
              <span className="section-kicker">This might be you</span>

              <h2>
                You do not need to be failing to know something needs to
                change.
              </h2>

              <p>
                Find Your Line is built for people who can feel there is more
                in them, but need a practical way to turn that feeling into
                movement.
              </p>
            </div>

            <div className="fit-list">
              {audienceItems.map(item => (
                <div className="fit-item" key={item}>
                  <span className="fit-check">
                    <Check size={17} />
                  </span>

                  <p>{item}</p>
                </div>
              ))}

              <button
                className="text-cta"
                onClick={() => scrollTo("#apply")}
              >
                This sounds like me
                <ArrowRight size={17} />
              </button>
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
                Off-road, there is rarely one perfect line through an obstacle.
                You read the terrain, choose a path, adjust when conditions
                change, and keep moving.
              </p>

              <p>
                Life works the same way. The goal is not to hand you someone
                else’s definition of success. It is to help you understand your
                terrain, choose your direction, test it in the real world, and
                build the confidence to keep navigating for yourself.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">How it works</span>

              <h2>
                Not motivation for a week. A better way to navigate what comes
                next.
              </h2>

              <p>
                The program combines guided reflection, real-world action,
                human coaching at key decision points, and AI-supported
                continuity between sessions.
              </p>
            </div>

            <div className="feature-grid">
              <article className="feature-card">
                <Compass />
                <h3>Define what matters</h3>

                <p>
                  Build your North Star around the life you actually want to
                  create.
                </p>
              </article>

              <article className="feature-card">
                <Brain />
                <h3>Understand the pattern</h3>

                <p>
                  Identify what repeatedly interrupts your progress and why it
                  happens.
                </p>
              </article>

              <article className="feature-card">
                <Target />
                <h3>Take meaningful action</h3>

                <p>
                  Turn insight into the smallest action that actually changes
                  something.
                </p>
              </article>

              <article className="feature-card">
                <RefreshCw />
                <h3>Adapt and recover</h3>

                <p>
                  Use setbacks as information instead of proof that you should
                  quit.
                </p>
              </article>

              <article className="feature-card">
                <BarChart3 />
                <h3>Build evidence</h3>

                <p>
                  Capture real examples of changed behavior and growing
                  self-trust.
                </p>
              </article>

              <article className="feature-card">
                <ShieldCheck />
                <h3>Own your direction</h3>

                <p>
                  The goal is increasing independence—not lifelong dependence
                  on a coach.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section system-loop-section">
          <div className="container loop-layout">
            <div>
              <span className="section-kicker">
                The Personal Success Loop
              </span>

              <h2>A repeatable process for the moment you feel stuck.</h2>

              <p>
                The goal is not to avoid hard terrain. It is to become better at
                reading it.
              </p>
            </div>

            <div className="loop-track">
              {[
                "NOTICE",
                "UNDERSTAND",
                "REFRAME",
                "CHOOSE",
                "ACT",
                "EVIDENCE"
              ].map((item, i) => (
                <React.Fragment key={item}>
                  <div className="loop-step">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </div>

                  {i < 5 && (
                    <ArrowRight className="loop-arrow" size={17} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <section className="section outcomes-section">
          <div className="container outcomes-layout">
            <div className="outcomes-copy">
              <span className="section-kicker">What changes</span>

              <h2>
                The goal is not to make you dependent on another system.
              </h2>

              <p>
                The goal is to help you become better at making decisions,
                taking action, recovering from setbacks, and trusting the
                evidence you build along the way.
              </p>
            </div>

            <div className="outcomes-grid">
              {outcomes.map(([title, desc], index) => (
                <article className="outcome-card" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="dashboard" className="section dashboard-section">
          <div className="container dashboard-grid">
            <div className="dashboard-copy">
              <span className="section-kicker">Your Homebase</span>

              <h2>
                Your direction should not disappear the moment life gets busy.
              </h2>

              <p>
                Homebase keeps the important pieces visible so you can return
                to your direction without rebuilding your thinking every time
                life gets noisy.
              </p>

              <ul className="plain-list">
                <li>
                  <Check size={17} /> Your North Star
                </li>

                <li>
                  <Check size={17} /> Your Current Chapter
                </li>

                <li>
                  <Check size={17} /> Your Current Focus
                </li>

                <li>
                  <Check size={17} /> Your Next Meaningful Move
                </li>

                <li>
                  <Check size={17} /> Your Trap Pattern
                </li>

                <li>
                  <Check size={17} /> Your Evidence Log
                </li>
              </ul>

              <button
                className="secondary-button dashboard-cta"
                onClick={() => scrollTo("#apply")}
              >
                Start My Application Now — $99
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="dashboard-mock">
              <div className="dash-top">
                <div>
                  <span className="dash-label">Find Your Line</span>
                  <h3>Your Homebase</h3>
                </div>

                <div className="avatar">
                  <Route size={20} />
                </div>
              </div>

              <div className="dash-card featured">
                <span>MY NORTH STAR</span>

                <p>
                  Build a life with more control, purpose, meaningful work, and
                  time for what matters.
                </p>
              </div>

              <div className="dash-two">
                <div className="dash-card">
                  <span>CURRENT FOCUS</span>

                  <p>
                    Validate the next career move with real-world evidence.
                  </p>
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

        <section className="section perspective-section">
          <div className="perspective-glow perspective-glow-a" />
          <div className="perspective-glow perspective-glow-b" />

          <div className="container perspective-wrap">
            <div className="perspective-copy">
              <span className="section-kicker">
                Get outside the noise
              </span>

              <h2>
                Clarity often shows up when the noise gets quiet.
              </h2>

              <p>
                Sometimes you need distance from the routine to see your
                situation differently. A trail, a sunrise, open water, or
                simply a quiet place can create enough space to think clearly
                about what comes next.
              </p>
            </div>

            <div className="perspective-cards">
              <article className="perspective-card">
                <Compass size={24} />
                <span>01</span>
                <h3>Clarity</h3>

                <p>
                  Step away from the noise and see where you really are.
                </p>
              </article>

              <article className="perspective-card">
                <Mountain size={24} />
                <span>02</span>
                <h3>Perspective</h3>

                <p>
                  Look at the terrain before deciding which line to take.
                </p>
              </article>

              <article className="perspective-card">
                <Route size={24} />
                <span>03</span>
                <h3>Direction</h3>

                <p>
                  Choose the next move and begin moving deliberately.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section founding-section">
          <div className="container founding-grid">
            <div className="founding-copy">
              <span className="section-kicker">
                Why a founding pilot?
              </span>

              <h2>Build it with real people, not assumptions.</h2>

              <p>
                Find Your Line is launching with a small founding group so the
                system can be tested, refined, and strengthened around
                real-world use.
              </p>

              <p>
                Founding members receive a closer level of involvement in that
                process and help shape what the program becomes—while still
                getting a structured system designed to move them toward
                greater clarity, action, and independence.
              </p>

              <button
                className="investment-inline-link"
                onClick={openInvestment}
              >
                Explore Your Investment
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="founding-principle">
              <MessageCircle size={28} />

              <blockquote>
                “We should never profit by convincing people they are incapable
                without us. The goal is to help them become more capable.”
              </blockquote>

              <span>Choose your line. Own your direction.</span>
            </div>
          </div>
        </section>

        <section id="cycles" className="section cycles-section">
          <div className="container">
            <div className="section-heading narrow">
              <span className="section-kicker">
                10 Personal Growth Cycles
              </span>

              <h2>
                Structure without pretending everyone should follow the same
                life path.
              </h2>

              <p>
                Each cycle develops a capability you can keep using after the
                program is over.
              </p>
            </div>

            <div className="cycles-list">
              {visibleCycles.map(([num, title, desc]) => (
                <article className="cycle-row" key={num}>
                  <span className="cycle-number">{num}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>

            <button
              className="secondary-button cycles-toggle"
              onClick={() => setShowAllCycles(v => !v)}
            >
              {showAllCycles
                ? "Show fewer cycles"
                : "See all 10 Growth Cycles"}

              <ChevronDown
                className={showAllCycles ? "rotate" : ""}
                size={18}
              />
            </button>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="container faq-grid">
            <div>
              <span className="section-kicker">FAQ</span>
              <h2>Clear answers before you apply.</h2>

              <p>
                Know what the program is, what it is not, and what happens
                next.
              </p>

              <button
                className="secondary-button faq-investment-button"
                onClick={openInvestment}
              >
                View Your Investment
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="faq-list">
              {faqs.map(([q, a], index) => (
                <div
                  className={`faq-item ${
                    openFaq === index ? "open" : ""
                  }`}
                  key={q}
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                  >
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

            <span className="section-kicker light">
              Founding Member Application
            </span>

            <h2>You do not need your entire life figured out.</h2>

            <p>
              You only need to be willing to start understanding what matters,
              what keeps getting in the way, and what your next meaningful move
              could be.
            </p>

            <div className="application-price">
              <span>Start your application now</span>
              <strong>$99</strong>
            </div>

            <form
              className="apply-form"
              onSubmit={e => {
                e.preventDefault();

                alert(
                  "Application form preview: connect this form to your secure backend before accepting live applications."
                );
              }}
            >
              <div className="form-grid">
                <label>
                  Name
                  <input required placeholder="Your name" />
                </label>

                <label>
                  Email
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label>
                What part of your life would you most like to change right now?

                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what feels stuck or underfulfilled..."
                />
              </label>

              <label>
                What have you already tried to change this?

                <textarea
                  required
                  rows={4}
                  placeholder="What have you tried, and what happened?"
                />
              </label>

              <label>
                Why now?

                <textarea
                  required
                  rows={4}
                  placeholder="Why are you considering doing something about this today?"
                />
              </label>

              <button className="light-button" type="submit">
                Start My Application — $99
                <ArrowRight size={18} />
              </button>

              <button
                className="application-investment-link"
                type="button"
                onClick={openInvestment}
              >
                Review the full program investment
              </button>

              <small>
                Connect this form to a secure backend before public launch so
                submissions can be received and reviewed.
              </small>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand">
              <span className="brand-mark">
                <Route size={19} />
              </span>

              <span>
                <strong>Find Your Line</strong>
                <small>Choose your line. Own your direction.</small>
              </span>
            </div>

            <p>Clarity. Resilience. Direction.</p>
          </div>

          <div className="footer-note">
            <p>
              Find Your Line is a personal-development program. It does not
              provide medical, mental-health, legal, financial,
              addiction-treatment, or crisis services and does not guarantee
              specific external outcomes.
            </p>

            <span>© 2026 Find Your Line. Founding pilot.</span>
          </div>
        </div>
      </footer>

      {investmentOpen && (
        <div className="investment-overlay">
          <div
            className="investment-backdrop"
            onClick={() => setInvestmentOpen(false)}
          />

          <section
            className="investment-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Your Investment"
          >
            <div className="investment-panel-header">
              <button
                className="investment-back"
                onClick={() => setInvestmentOpen(false)}
              >
                <ArrowLeft size={19} />
                Back
              </button>

              <button
                className="investment-close"
                onClick={() => setInvestmentOpen(false)}
                aria-label="Close investment information"
              >
                <X size={22} />
              </button>
            </div>

            <div className="investment-content">
              <div className="investment-intro">
                <span className="section-kicker">
                  Your Investment
                </span>

                <h2>
                  An investment in building a system you can keep using.
                </h2>

                <p>
                  Find Your Line is designed to create something more valuable
                  than a temporary burst of motivation: a repeatable way to
                  think, decide, act, recover, and move forward with greater
                  independence.
                </p>
              </div>

              <div className="investment-price-card">
                <span className="investment-label">
                  Founding Member Pilot
                </span>

                <div className="investment-start">
                  <strong>$99</strong>
                  <span>to begin</span>
                </div>

                <div className="investment-breakdown">
                  <div>
                    <span>Then</span>
                    <strong>11 × $200</strong>
                    <small>monthly payments</small>
                  </div>

                  <div>
                    <span>Total investment</span>
                    <strong>$2,299</strong>
                    <small>for the full program</small>
                  </div>
                </div>
              </div>

              <div className="investment-details-grid">
                <div className="investment-description">
                  <span className="section-kicker">
                    What you are investing in
                  </span>

                  <h3>
                    Not just information. A structured process for creating
                    change.
                  </h3>

                  <p>
                    Your investment supports a guided personal-growth system
                    built around understanding your current reality, defining
                    your direction, recognizing the patterns that interrupt
                    progress, taking meaningful action, and building evidence
                    that strengthens self-trust.
                  </p>

                  <p>
                    The long-term objective is increasing independence: helping
                    you develop a process you can continue using when new
                    decisions, setbacks, opportunities, and changes appear.
                  </p>
                </div>

                <div className="investment-includes">
                  <h3>Included in the program</h3>

                  {included.map(item => (
                    <div
                      className="investment-included-item"
                      key={item}
                    >
                      <span>
                        <Check size={16} />
                      </span>

                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="investment-founders">
                <div>
                  <span className="section-kicker">
                    Founding Member Pilot
                  </span>

                  <h3>
                    Help shape what Find Your Line becomes.
                  </h3>

                  <p>
                    The founding group is intentionally being used to test and
                    strengthen the program around real experiences instead of
                    assumptions. What we learn from this group will help shape
                    future versions of the system.
                  </p>
                </div>

                <Route size={42} />
              </div>

              <div className="investment-final-cta">
                <div>
                  <span>Ready to explore whether it fits?</span>
                  <h3>Start your application for $99.</h3>
                </div>

                <button
                  className="primary-button"
                  onClick={() => scrollTo("#apply")}
                >
                  Start My Application Now — $99
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
