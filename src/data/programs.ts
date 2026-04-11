export interface Course {
  slug: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  modules: { title: string; lessons: string[] }[];
  instructor: string;
  tools: string[];
  outcomes: string[];
}

export interface Program {
  slug: string;
  title: string;
  description: string;
  duration: string;
  format: string;
  level: string;
  focus: string;
  category: string;
  courses: Course[];
}

export const allPrograms: Program[] = [
  {
    slug: "entrepreneurship",
    title: "Entrepreneurship",
    description: "Master the foundations of starting and scaling a business within the unique constraints of African markets.",
    duration: "6 Months", format: "Cohort-Based", level: "Beginner", focus: "Startups", category: "Entrepreneurship",
    courses: [
      { slug: "basics-of-entrepreneurship", title: "Basics of Entrepreneurship", description: "Understand the fundamentals of entrepreneurial thinking and opportunity recognition.", duration: "3 weeks", level: "Beginner", instructor: "Amina Diallo", tools: ["Business Model Canvas", "SWOT Analysis"], outcomes: ["Entrepreneurial mindset", "Opportunity evaluation skills"], modules: [
        { title: "What is Entrepreneurship?", lessons: ["Video: The Entrepreneurial Mindset", "Reading: African Entrepreneurs Who Changed Industries", "Assignment: Personal Vision Statement"] },
        { title: "Types of Ventures", lessons: ["Video: Social vs Commercial Ventures", "Reading: Venture Models in Africa", "Assignment: Venture Type Analysis"] },
        { title: "The Entrepreneurial Journey", lessons: ["Video: From Idea to Scale", "Simulation: Startup Decision Lab", "Assignment: Journey Map"] },
      ]},
      { slug: "opportunity-identification", title: "Opportunity Identification", description: "Learn systematic approaches to finding and validating business opportunities.", duration: "3 weeks", level: "Beginner", instructor: "Dr. Kwame Asante", tools: ["Market Mapping Tools", "Customer Interview Framework"], outcomes: ["Market gap analysis", "Opportunity scoring"], modules: [
        { title: "Market Research Fundamentals", lessons: ["Video: Research Methods", "Reading: African Market Data Sources", "Assignment: Market Survey"] },
        { title: "Customer Discovery", lessons: ["Video: Customer Interviews", "Reading: Jobs-to-be-Done Framework", "Assignment: Interview 10 Customers"] },
        { title: "Opportunity Evaluation", lessons: ["Video: Scoring Opportunities", "Simulation: Market Opportunity Lab", "Assignment: Opportunity Report"] },
      ]},
      { slug: "business-model-design", title: "Business Model Design", description: "Create robust business models tailored for African market conditions.", duration: "4 weeks", level: "Beginner", instructor: "Amina Diallo", tools: ["Business Model Canvas", "Revenue Model Templates"], outcomes: ["Business model creation", "Revenue strategy"], modules: [
        { title: "Business Model Canvas", lessons: ["Video: Canvas Overview", "Reading: Case Studies", "Assignment: Your First Canvas"] },
        { title: "Revenue Models", lessons: ["Video: Revenue Strategies", "Reading: Pricing in Africa", "Assignment: Revenue Plan"] },
        { title: "Value Proposition", lessons: ["Video: Value Design", "Assignment: Value Proposition Canvas"] },
        { title: "Model Validation", lessons: ["Video: Testing Assumptions", "Simulation: Business Model Lab", "Assignment: Validated Model"] },
      ]},
      { slug: "market-validation", title: "Market Validation", description: "Test your business hypotheses with real market data and customer feedback.", duration: "3 weeks", level: "Intermediate", instructor: "Yusuf Ibrahim", tools: ["Survey Tools", "Analytics Dashboard"], outcomes: ["Validation methodology", "Data-driven decisions"], modules: [
        { title: "Hypothesis Testing", lessons: ["Video: Lean Validation", "Reading: MVP Strategies", "Assignment: Hypothesis Map"] },
        { title: "MVP Development", lessons: ["Video: Building MVPs", "Assignment: Launch Your MVP"] },
        { title: "Market Feedback", lessons: ["Video: Analyzing Feedback", "Simulation: Market Validation Sim", "Assignment: Pivot or Persevere Report"] },
      ]},
      { slug: "fundraising-finance", title: "Fundraising & Finance", description: "Navigate the African fundraising landscape and manage startup finances.", duration: "4 weeks", level: "Intermediate", instructor: "Yusuf Ibrahim", tools: ["Financial Modeling", "Pitch Deck Templates"], outcomes: ["Fundraising strategy", "Financial management"], modules: [
        { title: "Startup Finance Basics", lessons: ["Video: Financial Statements", "Reading: Startup Accounting", "Assignment: Financial Model"] },
        { title: "Fundraising Strategy", lessons: ["Video: Funding Landscape in Africa", "Reading: Term Sheets", "Assignment: Fundraising Plan"] },
        { title: "Investor Relations", lessons: ["Video: Pitching to VCs", "Simulation: Fundraising Simulation", "Assignment: Pitch Deck"] },
        { title: "Financial Management", lessons: ["Video: Cash Flow Management", "Assignment: 12-Month Financial Projection"] },
      ]},
      { slug: "venture-scaling", title: "Venture Scaling", description: "Strategies for scaling your venture across African markets.", duration: "3 weeks", level: "Advanced", instructor: "Dr. Kwame Asante", tools: ["Strategy Frameworks", "Market Analysis"], outcomes: ["Scaling strategies", "Cross-border expansion"], modules: [
        { title: "Growth Strategies", lessons: ["Video: Growth Frameworks", "Reading: Scaling in Africa", "Assignment: Growth Plan"] },
        { title: "Cross-Border Expansion", lessons: ["Video: Market Entry Strategies", "Simulation: Market Expansion Sim", "Assignment: Expansion Strategy"] },
        { title: "Building Teams", lessons: ["Video: Hiring & Culture", "Assignment: Org Design"] },
      ]},
      { slug: "capstone-project", title: "Capstone Project", description: "Apply everything you've learned to build a real venture.", duration: "4 weeks", level: "Advanced", instructor: "Amina Diallo", tools: ["All Program Tools"], outcomes: ["Complete business plan", "Investor-ready pitch"], modules: [
        { title: "Project Planning", lessons: ["Video: Capstone Overview", "Assignment: Project Proposal"] },
        { title: "Execution", lessons: ["Workshop: Build Sprint", "Assignment: Progress Report"] },
        { title: "Presentation", lessons: ["Video: Presenting Your Venture", "Assignment: Final Pitch"] },
        { title: "Review", lessons: ["Peer Review Session", "Mentor Feedback", "Final Submission"] },
      ]},
    ]
  },
  {
    slug: "venture-building",
    title: "Venture Building",
    description: "Intensive, cohort-driven program focusing on the systematic creation and acceleration of new ventures.",
    duration: "12 Months", format: "Hybrid", level: "Advanced", focus: "Venture Creation", category: "Entrepreneurship",
    courses: [
      { slug: "venture-strategy", title: "Venture Strategy", description: "Strategic frameworks for building ventures in emerging markets.", duration: "4 weeks", level: "Advanced", instructor: "Dr. Kwame Asante", tools: ["Strategy Canvas", "Competitive Analysis"], outcomes: ["Strategic planning", "Market positioning"], modules: [
        { title: "Strategic Foundations", lessons: ["Video: Strategy Frameworks", "Reading: African Market Dynamics", "Assignment: Strategy Document"] },
        { title: "Competitive Positioning", lessons: ["Video: Competitive Analysis", "Assignment: Market Map"] },
        { title: "Strategic Execution", lessons: ["Video: From Strategy to Action", "Simulation: Strategy Lab", "Assignment: Execution Plan"] },
      ]},
      { slug: "product-development", title: "Product Development", description: "Build products that solve real problems in African markets.", duration: "4 weeks", level: "Advanced", instructor: "Ngozi Okafor", tools: ["Product Canvas", "User Research Tools"], outcomes: ["Product thinking", "User-centered design"], modules: [
        { title: "Product Discovery", lessons: ["Video: Discovery Methods", "Assignment: User Research Report"] },
        { title: "Product Design", lessons: ["Video: Design Thinking", "Assignment: Product Prototype"] },
        { title: "Product Launch", lessons: ["Video: Go-to-Market", "Simulation: Product Launch Sim", "Assignment: Launch Plan"] },
      ]},
      { slug: "growth-operations", title: "Growth & Operations", description: "Scale operations and drive growth across markets.", duration: "4 weeks", level: "Advanced", instructor: "Samuel Okonkwo", tools: ["Operations Dashboard", "Growth Frameworks"], outcomes: ["Operational excellence", "Growth strategy"], modules: [
        { title: "Operations Setup", lessons: ["Video: Building Operations", "Assignment: Ops Blueprint"] },
        { title: "Growth Engineering", lessons: ["Video: Growth Loops", "Assignment: Growth Experiment"] },
        { title: "Scaling Systems", lessons: ["Video: Systems Thinking", "Simulation: Operations Sim", "Assignment: Scale Plan"] },
      ]},
      { slug: "fundraising-advanced", title: "Advanced Fundraising", description: "Master advanced fundraising strategies for growth-stage ventures.", duration: "3 weeks", level: "Advanced", instructor: "Yusuf Ibrahim", tools: ["Financial Modeling", "Deal Structuring"], outcomes: ["Series A readiness", "Investor negotiations"], modules: [
        { title: "Growth-Stage Funding", lessons: ["Video: Series A Playbook", "Reading: African VC Landscape", "Assignment: Funding Strategy"] },
        { title: "Deal Structuring", lessons: ["Video: Term Sheet Negotiations", "Simulation: Fundraising Sim", "Assignment: Term Sheet Analysis"] },
      ]},
      { slug: "venture-capstone", title: "Venture Capstone", description: "Build and present a fully validated venture.", duration: "6 weeks", level: "Advanced", instructor: "Dr. Kwame Asante", tools: ["All Program Tools"], outcomes: ["Launched venture", "Investor pitch"], modules: [
        { title: "Venture Assembly", lessons: ["Workshop: Build Sprint 1", "Assignment: MVP Launch"] },
        { title: "Market Testing", lessons: ["Workshop: Build Sprint 2", "Assignment: Market Traction Report"] },
        { title: "Final Presentation", lessons: ["Demo Day Prep", "Final Pitch", "Program Completion"] },
      ]},
    ]
  },
  {
    slug: "digital-business",
    title: "Digital Business",
    description: "Leveraging emerging tech to transform traditional business models and capture value in the digital economy.",
    duration: "4 Months", format: "Online", level: "Beginner", focus: "Digital Transformation", category: "Technology",
    courses: [
      { slug: "digital-landscape", title: "The Digital Landscape", description: "Understanding the digital economy in Africa.", duration: "2 weeks", level: "Beginner", instructor: "Ngozi Okafor", tools: ["Market Analysis"], outcomes: ["Digital literacy", "Market understanding"], modules: [
        { title: "Digital Economy Overview", lessons: ["Video: Africa's Digital Revolution", "Reading: Key Trends", "Assignment: Landscape Analysis"] },
        { title: "Digital Business Models", lessons: ["Video: Platform Economics", "Assignment: Model Comparison"] },
      ]},
      { slug: "ecommerce-foundations", title: "E-Commerce Foundations", description: "Building and scaling online commerce platforms.", duration: "3 weeks", level: "Beginner", instructor: "Aisha Mohammed", tools: ["E-commerce Platforms", "Analytics"], outcomes: ["E-commerce strategy", "Platform selection"], modules: [
        { title: "E-Commerce Fundamentals", lessons: ["Video: E-Commerce Models", "Reading: African E-Commerce", "Assignment: Platform Evaluation"] },
        { title: "Building Your Store", lessons: ["Video: Store Setup", "Assignment: Launch Store"] },
        { title: "Growth & Optimization", lessons: ["Video: Conversion Optimization", "Simulation: E-Commerce Sim", "Assignment: Growth Plan"] },
      ]},
      { slug: "digital-marketing", title: "Digital Marketing", description: "Master digital marketing strategies for African audiences.", duration: "3 weeks", level: "Beginner", instructor: "Aisha Mohammed", tools: ["Analytics Dashboard", "Social Media Tools"], outcomes: ["Marketing strategy", "Campaign management"], modules: [
        { title: "Marketing Fundamentals", lessons: ["Video: Digital Channels", "Assignment: Channel Strategy"] },
        { title: "Content & Social", lessons: ["Video: Content Strategy", "Assignment: Content Calendar"] },
        { title: "Performance Marketing", lessons: ["Video: Paid Acquisition", "Assignment: Campaign Plan"] },
      ]},
      { slug: "data-analytics", title: "Data & Analytics", description: "Using data to drive business decisions.", duration: "3 weeks", level: "Intermediate", instructor: "Ngozi Okafor", tools: ["Analytics Dashboard", "Data Visualization"], outcomes: ["Data analysis", "Reporting skills"], modules: [
        { title: "Data Fundamentals", lessons: ["Video: Data-Driven Decisions", "Assignment: Data Analysis"] },
        { title: "Business Intelligence", lessons: ["Video: Dashboard Design", "Assignment: Build a Dashboard"] },
        { title: "Applied Analytics", lessons: ["Video: Predictive Analytics", "Simulation: Data Lab", "Assignment: Analytics Report"] },
      ]},
      { slug: "platform-strategy", title: "Platform Strategy", description: "Building platform businesses in emerging markets.", duration: "3 weeks", level: "Intermediate", instructor: "Ngozi Okafor", tools: ["Platform Canvas", "Network Analysis"], outcomes: ["Platform thinking", "Marketplace design"], modules: [
        { title: "Platform Economics", lessons: ["Video: Two-Sided Markets", "Reading: African Platforms", "Assignment: Platform Design"] },
        { title: "Building Network Effects", lessons: ["Video: Network Strategy", "Assignment: Growth Strategy"] },
        { title: "Platform Scaling", lessons: ["Video: Scaling Platforms", "Simulation: Platform Sim", "Assignment: Scale Plan"] },
      ]},
    ]
  },
  {
    slug: "investment-finance",
    title: "Investment & Finance",
    description: "Deep dive into capital structures, fundraising strategies, and financial management for high-growth firms.",
    duration: "8 Months", format: "Cohort-Based", level: "Advanced", focus: "Capital & Finance", category: "Finance",
    courses: [
      { slug: "financial-fundamentals", title: "Financial Fundamentals", description: "Core financial concepts for business leaders.", duration: "3 weeks", level: "Intermediate", instructor: "Yusuf Ibrahim", tools: ["Financial Modeling"], outcomes: ["Financial literacy", "Statement analysis"], modules: [
        { title: "Accounting Basics", lessons: ["Video: Financial Statements", "Assignment: Statement Analysis"] },
        { title: "Financial Analysis", lessons: ["Video: Ratio Analysis", "Assignment: Company Analysis"] },
        { title: "Corporate Finance", lessons: ["Video: Capital Structure", "Simulation: Finance Lab", "Assignment: Finance Report"] },
      ]},
      { slug: "investment-analysis", title: "Investment Analysis", description: "Evaluate investment opportunities in African markets.", duration: "4 weeks", level: "Advanced", instructor: "Yusuf Ibrahim", tools: ["Investment Evaluation", "Valuation Tools"], outcomes: ["Investment analysis", "Due diligence"], modules: [
        { title: "Valuation Methods", lessons: ["Video: DCF & Comparables", "Assignment: Valuation Exercise"] },
        { title: "Due Diligence", lessons: ["Video: DD Process", "Assignment: DD Checklist"] },
        { title: "Deal Structuring", lessons: ["Video: Term Sheets", "Simulation: Investment Sim", "Assignment: Deal Memo"] },
        { title: "Portfolio Management", lessons: ["Video: Portfolio Theory", "Assignment: Portfolio Strategy"] },
      ]},
      { slug: "venture-capital", title: "Venture Capital", description: "Understanding the VC ecosystem in Africa.", duration: "3 weeks", level: "Advanced", instructor: "Jean-Pierre Mbeki", tools: ["Deal Flow Tools", "Portfolio Tracking"], outcomes: ["VC mechanics", "Fund strategy"], modules: [
        { title: "VC Fundamentals", lessons: ["Video: How VC Works", "Reading: African VC Landscape", "Assignment: Fund Analysis"] },
        { title: "Deal Sourcing", lessons: ["Video: Finding Deals", "Assignment: Pipeline Build"] },
        { title: "Value Creation", lessons: ["Video: Post-Investment", "Simulation: VC Sim", "Assignment: Value-Add Plan"] },
      ]},
      { slug: "capital-markets", title: "Capital Markets", description: "Navigate African capital markets and public finance.", duration: "3 weeks", level: "Advanced", instructor: "Yusuf Ibrahim", tools: ["Market Analysis", "Trading Platforms"], outcomes: ["Market understanding", "Capital raising"], modules: [
        { title: "Market Structure", lessons: ["Video: African Markets", "Assignment: Market Analysis"] },
        { title: "Debt & Equity", lessons: ["Video: Capital Instruments", "Assignment: Instrument Comparison"] },
        { title: "IPO & Public Markets", lessons: ["Video: Going Public", "Simulation: Capital Markets Sim", "Assignment: IPO Analysis"] },
      ]},
      { slug: "fintech-innovation", title: "Fintech Innovation", description: "Financial technology transforming African financial services.", duration: "3 weeks", level: "Advanced", instructor: "Ngozi Okafor", tools: ["Fintech Platforms", "API Tools"], outcomes: ["Fintech landscape", "Innovation strategy"], modules: [
        { title: "Fintech Landscape", lessons: ["Video: African Fintech", "Reading: Mobile Money Revolution", "Assignment: Landscape Map"] },
        { title: "Building Fintech", lessons: ["Video: Fintech Architecture", "Assignment: Product Concept"] },
        { title: "Regulation & Scale", lessons: ["Video: Regulatory Frameworks", "Simulation: Fintech Lab", "Assignment: Compliance Plan"] },
      ]},
    ]
  },
  {
    slug: "innovation-leadership",
    title: "Innovation Leadership",
    description: "Developing the strategic mindset and leadership capabilities required to drive organizational innovation.",
    duration: "5 Months", format: "Hybrid", level: "Executive", focus: "Innovation", category: "Leadership",
    courses: [
      { slug: "leadership-fundamentals", title: "Leadership Fundamentals", description: "Core leadership principles for African business contexts.", duration: "3 weeks", level: "Executive", instructor: "Fatima Al-Hassan", tools: ["Leadership Assessment", "360 Feedback"], outcomes: ["Self-awareness", "Leadership style"], modules: [
        { title: "Leadership Styles", lessons: ["Video: Leadership in Africa", "Assignment: Self-Assessment"] },
        { title: "Building Teams", lessons: ["Video: Team Dynamics", "Assignment: Team Charter"] },
        { title: "Decision Making", lessons: ["Video: Strategic Decisions", "Simulation: Leadership Decision Lab", "Assignment: Decision Framework"] },
      ]},
      { slug: "innovation-strategy", title: "Innovation Strategy", description: "Drive innovation within organizations and markets.", duration: "3 weeks", level: "Executive", instructor: "Ngozi Okafor", tools: ["Innovation Canvas", "Design Thinking"], outcomes: ["Innovation frameworks", "Change management"], modules: [
        { title: "Innovation Frameworks", lessons: ["Video: Types of Innovation", "Assignment: Innovation Audit"] },
        { title: "Design Thinking", lessons: ["Video: Human-Centered Design", "Assignment: Design Sprint"] },
        { title: "Innovation Execution", lessons: ["Video: From Idea to Impact", "Simulation: Innovation Sim", "Assignment: Innovation Roadmap"] },
      ]},
      { slug: "organizational-change", title: "Organizational Change", description: "Lead transformational change in African organizations.", duration: "3 weeks", level: "Executive", instructor: "Fatima Al-Hassan", tools: ["Change Canvas", "Stakeholder Mapping"], outcomes: ["Change leadership", "Transformation skills"], modules: [
        { title: "Change Fundamentals", lessons: ["Video: Change Models", "Assignment: Change Assessment"] },
        { title: "Stakeholder Management", lessons: ["Video: Influence & Persuasion", "Assignment: Stakeholder Map"] },
        { title: "Executing Change", lessons: ["Video: Change Implementation", "Simulation: Change Lab", "Assignment: Change Plan"] },
      ]},
      { slug: "strategic-foresight", title: "Strategic Foresight", description: "Anticipate and shape the future of business in Africa.", duration: "3 weeks", level: "Executive", instructor: "Dr. Kwame Asante", tools: ["Scenario Planning", "Trend Analysis"], outcomes: ["Future thinking", "Strategic planning"], modules: [
        { title: "Trends & Signals", lessons: ["Video: Scanning the Environment", "Assignment: Trend Report"] },
        { title: "Scenario Planning", lessons: ["Video: Building Scenarios", "Assignment: Scenario Exercise"] },
        { title: "Strategy Design", lessons: ["Video: Adaptive Strategy", "Simulation: Foresight Lab", "Assignment: Strategic Vision"] },
      ]},
      { slug: "leadership-capstone", title: "Leadership Capstone", description: "Apply leadership principles to a real organizational challenge.", duration: "4 weeks", level: "Executive", instructor: "Fatima Al-Hassan", tools: ["All Program Tools"], outcomes: ["Applied leadership", "Organizational impact"], modules: [
        { title: "Challenge Definition", lessons: ["Workshop: Problem Framing", "Assignment: Challenge Brief"] },
        { title: "Solution Design", lessons: ["Workshop: Strategy Session", "Assignment: Solution Proposal"] },
        { title: "Presentation", lessons: ["Executive Presentation", "Peer Review", "Final Report"] },
      ]},
    ]
  },
  {
    slug: "technology-for-business",
    title: "Technology for Business",
    description: "Apply AI, machine learning, and emerging tech to solve real business challenges in African contexts.",
    duration: "6 Months", format: "Online", level: "Advanced", focus: "AI & Tech", category: "Technology",
    courses: [
      { slug: "tech-landscape", title: "Technology Landscape", description: "Overview of emerging technologies shaping African business.", duration: "2 weeks", level: "Intermediate", instructor: "Ngozi Okafor", tools: ["Tech Assessment Tools"], outcomes: ["Tech awareness", "Trend analysis"], modules: [
        { title: "Tech Trends in Africa", lessons: ["Video: Emerging Technologies", "Reading: African Tech Ecosystem", "Assignment: Tech Audit"] },
        { title: "Tech for Business", lessons: ["Video: Technology Applications", "Assignment: Use Case Analysis"] },
      ]},
      { slug: "ai-business", title: "AI for Business", description: "Practical applications of AI in African businesses.", duration: "4 weeks", level: "Advanced", instructor: "Ngozi Okafor", tools: ["AI Platforms", "Data Tools"], outcomes: ["AI strategy", "Implementation skills"], modules: [
        { title: "AI Fundamentals", lessons: ["Video: AI Concepts", "Assignment: AI Opportunity Map"] },
        { title: "AI Applications", lessons: ["Video: Business Use Cases", "Assignment: AI Business Case"] },
        { title: "Implementation", lessons: ["Video: Building AI Products", "Simulation: AI Lab", "Assignment: AI Implementation Plan"] },
        { title: "Ethics & Scale", lessons: ["Video: Responsible AI", "Assignment: Ethics Framework"] },
      ]},
      { slug: "digital-infrastructure", title: "Digital Infrastructure", description: "Building robust digital systems for African businesses.", duration: "3 weeks", level: "Advanced", instructor: "Samuel Okonkwo", tools: ["Architecture Tools", "Cloud Platforms"], outcomes: ["Systems design", "Infrastructure planning"], modules: [
        { title: "Cloud & Infrastructure", lessons: ["Video: Cloud Fundamentals", "Assignment: Infrastructure Plan"] },
        { title: "System Design", lessons: ["Video: Architecture Patterns", "Assignment: System Design"] },
        { title: "Security & Scale", lessons: ["Video: Cybersecurity", "Simulation: Infrastructure Lab", "Assignment: Security Audit"] },
      ]},
      { slug: "data-science-business", title: "Data Science for Business", description: "Leverage data science for business advantage.", duration: "4 weeks", level: "Advanced", instructor: "Ngozi Okafor", tools: ["Data Platforms", "Visualization Tools"], outcomes: ["Data skills", "Business intelligence"], modules: [
        { title: "Data Collection", lessons: ["Video: Data Strategy", "Assignment: Data Collection Plan"] },
        { title: "Analysis & Modeling", lessons: ["Video: Statistical Analysis", "Assignment: Data Model"] },
        { title: "Visualization", lessons: ["Video: Telling Stories with Data", "Assignment: Dashboard"] },
        { title: "Applied Data Science", lessons: ["Video: Prediction Models", "Simulation: Data Lab", "Assignment: Data Science Project"] },
      ]},
      { slug: "tech-capstone", title: "Tech Capstone", description: "Build a technology solution for an African business challenge.", duration: "4 weeks", level: "Advanced", instructor: "Ngozi Okafor", tools: ["All Program Tools"], outcomes: ["Working prototype", "Business pitch"], modules: [
        { title: "Problem Selection", lessons: ["Workshop: Problem Discovery", "Assignment: Problem Brief"] },
        { title: "Solution Building", lessons: ["Workshop: Build Sprint", "Assignment: Prototype"] },
        { title: "Presentation", lessons: ["Demo Day", "Final Report"] },
      ]},
    ]
  },
  {
    slug: "african-market-strategy",
    title: "African Market Strategy",
    description: "Navigating fragmented markets, cross-border trade, and localized consumer behavior across Africa.",
    duration: "3 Months", format: "Online", level: "Beginner", focus: "Market Strategy", category: "Strategy",
    courses: [
      { slug: "african-markets-overview", title: "African Markets Overview", description: "Understanding the diversity of African markets.", duration: "2 weeks", level: "Beginner", instructor: "Dr. Kwame Asante", tools: ["Market Analysis", "Country Profiles"], outcomes: ["Market knowledge", "Regional awareness"], modules: [
        { title: "Continental Overview", lessons: ["Video: Africa's Economic Landscape", "Reading: Key Markets", "Assignment: Market Profile"] },
        { title: "Regional Dynamics", lessons: ["Video: East, West, North, Southern Africa", "Assignment: Regional Comparison"] },
      ]},
      { slug: "consumer-behavior", title: "Consumer Behavior", description: "Understanding African consumer patterns and preferences.", duration: "3 weeks", level: "Beginner", instructor: "Aisha Mohammed", tools: ["Consumer Research Tools", "Survey Platforms"], outcomes: ["Consumer insights", "Behavioral analysis"], modules: [
        { title: "Consumer Psychology", lessons: ["Video: African Consumer Trends", "Assignment: Consumer Persona"] },
        { title: "Market Segmentation", lessons: ["Video: Segmentation Approaches", "Assignment: Segment Analysis"] },
        { title: "Consumer Research", lessons: ["Video: Research Methods", "Simulation: Consumer Lab", "Assignment: Research Report"] },
      ]},
      { slug: "cross-border-trade", title: "Cross-Border Trade", description: "Navigate cross-border commerce and trade agreements.", duration: "3 weeks", level: "Intermediate", instructor: "Dr. Kwame Asante", tools: ["Trade Analysis", "Regulatory Guides"], outcomes: ["Trade strategy", "Regulatory navigation"], modules: [
        { title: "Trade Frameworks", lessons: ["Video: AfCFTA & Trade Agreements", "Assignment: Trade Analysis"] },
        { title: "Market Entry", lessons: ["Video: Entry Strategies", "Assignment: Entry Plan"] },
        { title: "Regulatory Navigation", lessons: ["Video: Compliance", "Simulation: Trade Sim", "Assignment: Compliance Checklist"] },
      ]},
      { slug: "market-entry-strategy", title: "Market Entry Strategy", description: "Develop strategies for entering new African markets.", duration: "3 weeks", level: "Intermediate", instructor: "Dr. Kwame Asante", tools: ["Strategy Frameworks", "Financial Modeling"], outcomes: ["Entry strategy", "Market assessment"], modules: [
        { title: "Market Assessment", lessons: ["Video: Evaluating Markets", "Assignment: Market Scorecard"] },
        { title: "Strategy Design", lessons: ["Video: Go-to-Market", "Assignment: GTM Strategy"] },
        { title: "Execution Planning", lessons: ["Video: Implementation", "Simulation: Market Entry Sim", "Assignment: Execution Roadmap"] },
      ]},
      { slug: "strategy-capstone", title: "Strategy Capstone", description: "Develop a market strategy for a real African business opportunity.", duration: "3 weeks", level: "Intermediate", instructor: "Dr. Kwame Asante", tools: ["All Program Tools"], outcomes: ["Complete strategy", "Actionable plan"], modules: [
        { title: "Opportunity Selection", lessons: ["Workshop: Strategy Session", "Assignment: Opportunity Brief"] },
        { title: "Strategy Development", lessons: ["Workshop: Deep Dive", "Assignment: Strategy Document"] },
        { title: "Final Presentation", lessons: ["Strategy Presentation", "Peer Review", "Final Report"] },
      ]},
    ]
  },
];

export const getProgramBySlug = (slug: string) => allPrograms.find(p => p.slug === slug);

export const getCourseBySlug = (programSlug: string, courseSlug: string) => {
  const program = getProgramBySlug(programSlug);
  return program?.courses.find(c => c.slug === courseSlug);
};
