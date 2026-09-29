export type Cadence = "per-project" | "as-needed" | "daily" | "weekly" | "monthly" | "quarterly" | "half-yearly" | "annual";

export type Raci = {
  r?: string;
  a: string;
  c?: string;
  i?: string;
};

export type Activity = {
  name: string;
  note: string;
  cadence: Cadence;
  // Due date in plain words, e.g. "7th of every month".
  deadline?: string;
  raci: Raci;
};

export type Workstream = {
  title: string;
  activities: Activity[];
};

export type Pillar = {
  slug: string;
  index: string;
  name: string;
  head?: string;
  group: string;
  // Extra roster roles to list in the People panel that don't appear in any
  // activity's RACI.
  people?: string[];
  workstreams: Workstream[];
};

// Fixed org roles mapped to the person currently holding them. Roles that
// change per-project or per-engagement (Solutions Architect, Project Lead,
// QA Lead, etc.) are intentionally left out and shown as role names only.
// Placeholder names below — swap in real people, or eventually source this
// from Salesforce (see salesforce/ + ops-atlas-salesforce-plan memory).
export const roster: Record<string, string> = {
  "Head of Delivery": "Ananya Rao",
  "Head of Pre-Sales": "Karthik Menon",
  "Head of Marketing": "Priya Nair",
  "Head of HR": "Sanjay Verma",
  "Head of Finance": "Lakshmi Iyer",
  "Head of Accounts": "Rahul Desai",
  "Head of Recruitment": "Divya Shah",
  "Resourcing Manager": "Arjun Kapoor",
  "HR Executive": "Meera Pillai",
};

export const cadenceLabel: Record<Cadence, string> = {
  "per-project": "Per Project",
  "as-needed": "As Needed",
  daily: "Daily",
  weekly: "Weekly",
  monthly: "Monthly",
  quarterly: "Quarterly",
  "half-yearly": "Half-Yearly",
  annual: "Annual",
};

export const pillars: Pillar[] = [
  {
    slug: "marketing",
    index: "01",
    name: "Marketing & Branding",
    group: "Go-to-Market & Delivery",
    workstreams: [
      {
        title: "Content & Social",
        activities: [
          {
            name: "Social media posting",
            note: "Publish scheduled posts on the company LinkedIn page first, then other channels; encourage employees to share them",
            cadence: "daily",
            deadline: "Every working day",
            raci: { r: "Marketing Associate", a: "Head of Marketing" },
          },
          {
            name: "Content calendar review",
            note: "Plan next week's posts, blogs & assets",
            cadence: "weekly",
            raci: { r: "Content Lead", a: "Head of Marketing", c: "Delivery (case studies)" },
          },
          {
            name: "Blogs & Thought-Leadership Articles",
            note: "Write Salesforce-focused blogs and articles with input from consultants",
            cadence: "monthly",
            deadline: "2 articles a month",
            raci: { r: "Content Lead", a: "Head of Marketing", c: "Solutions Architect, Delivery" },
          },
          {
            name: "Case Studies & Client Testimonials",
            note: "Write case studies and collect client testimonials after Go-Live; only publish with the client's written approval",
            cadence: "as-needed",
            deadline: "After each Go-Live, once the client approves",
            raci: { r: "Content Lead", a: "Head of Marketing", c: "Delivery", i: "Pre-Sales" },
          },
          {
            name: "Sales Collateral",
            note: "Keep the company deck, service one-pagers and capability decks up to date",
            cadence: "quarterly",
            deadline: "Every quarter",
            raci: { r: "Content Lead", a: "Head of Marketing", c: "Pre-Sales", i: "Sales Team" },
          },
        ],
      },
      {
        title: "Website & Digital",
        activities: [
          {
            name: "Inbound inquiry routing",
            note: "Triage website & form inquiries to Pre-Sales",
            cadence: "daily",
            raci: { r: "Marketing Associate", a: "Head of Marketing", i: "Pre-Sales" },
          },
          {
            name: "Website & analytics review",
            note: "Track SEO rankings, traffic and conversions",
            cadence: "weekly",
            deadline: "Every week",
            raci: { r: "Digital Marketing", a: "Head of Marketing" },
          },
          {
            name: "Website Content Updates",
            note: "Update service pages, case studies and the careers page",
            cadence: "monthly",
            deadline: "Every month",
            raci: { r: "Digital Marketing", a: "Head of Marketing", c: "Delivery, HR" },
          },
          {
            name: "Salesforce Partner Profile Upkeep",
            note: "Keep the Salesforce partner / AppExchange profile current (certifications, case studies, services)",
            cadence: "quarterly",
            deadline: "Every quarter",
            raci: { r: "Digital Marketing", a: "Head of Marketing", c: "Pre-Sales" },
          },
        ],
      },
      {
        title: "Campaigns & Events",
        activities: [
          {
            name: "Campaign performance report",
            note: "Reach, engagement & pipeline-influenced review",
            cadence: "monthly",
            raci: { r: "Digital Marketing", a: "Head of Marketing", i: "Leadership" },
          },
          {
            name: "Email Campaigns & Nurture",
            note: "Send targeted email campaigns and nurture sequences to prospects",
            cadence: "monthly",
            deadline: "Every month",
            raci: { r: "Digital Marketing", a: "Head of Marketing", c: "Pre-Sales" },
          },
          {
            name: "Campaign & event planning",
            note: "Plan next quarter's campaigns, webinars & sponsorships",
            cadence: "quarterly",
            raci: { r: "Head of Marketing", a: "Leadership", c: "Pre-Sales" },
          },
          {
            name: "Webinar / Event Execution",
            note: "Run the webinars and events planned each quarter: speakers, registrations and follow-up",
            cadence: "as-needed",
            deadline: "As per the quarterly plan",
            raci: {
              r: "Marketing Associate",
              a: "Head of Marketing",
              c: "Pre-Sales, Solutions Architect",
              i: "Leadership",
            },
          },
          {
            name: "Marketing Budget & ROI Tracking",
            note: "Track marketing spend against budget and the pipeline it generates",
            cadence: "quarterly",
            deadline: "Every quarter",
            raci: { r: "Head of Marketing", a: "Leadership", c: "Finance" },
          },
          {
            name: "Salesforce Ecosystem Events",
            note: "Take part in Salesforce events (Dreamforce, World Tours, Trailblazer community groups)",
            cadence: "annual",
            deadline: "As per the Salesforce events calendar",
            raci: { r: "Head of Marketing", a: "Leadership", c: "Pre-Sales" },
          },
        ],
      },
      {
        title: "Brand Governance",
        activities: [
          {
            name: "Newsletter send",
            note: "Compile & send the monthly company newsletter",
            cadence: "monthly",
            raci: { r: "Content Lead", a: "Head of Marketing", c: "Delivery, HR" },
          },
          {
            name: "Employer Branding",
            note: "Promote OmniCloud as an employer: careers posts, campus branding and coverage of employee events",
            cadence: "as-needed",
            deadline: "As and when",
            raci: { r: "Content Lead", a: "Head of Marketing", c: "HR, Recruitment" },
          },
          {
            name: "Brand refresh & guideline review",
            note: "Review logo and brand guidelines, and keep the PowerPoint and Word templates used by Delivery and Pre-Sales on brand",
            cadence: "annual",
            deadline: "Every year, with the brand review",
            raci: { r: "Head of Marketing", a: "Leadership", c: "Delivery, Pre-Sales", i: "All Departments" },
          },
        ],
      },
    ],
  },
  {
    slug: "pre-sales",
    index: "02",
    name: "Pre-Sales & Business Development",
    group: "Go-to-Market & Delivery",
    workstreams: [
      {
        title: "Lead & Pipeline Management",
        activities: [
          {
            name: "Prospecting & Outbound Outreach",
            note: "Find and contact target accounts through LinkedIn Sales Navigator, referrals and partner leads",
            cadence: "daily",
            deadline: "Every working day",
            raci: { r: "BDR", a: "Head of Pre-Sales", c: "Marketing" },
          },
          {
            name: "Lead triage & inbox review",
            note: "Qualify new inbound leads on Budget, Authority, Need and Timeline (BANT) and route them to a Sales Rep",
            cadence: "daily",
            deadline: "Within 2 working days of a new lead",
            raci: { r: "BDR", a: "Head of Pre-Sales", c: "Sales Rep", i: "Marketing" },
          },
          {
            name: "Pipeline review",
            note: "Stage, value and next-step review across open opportunities",
            cadence: "weekly",
            raci: { r: "Sales Team", a: "Head of Pre-Sales", i: "Leadership" },
          },
        ],
      },
      {
        title: "Proposals & SOWs",
        activities: [
          {
            name: "CRM / opportunity update",
            note: "Keep deal stage, value & notes current",
            cadence: "daily",
            raci: { r: "Sales Rep", a: "Head of Pre-Sales" },
          },
          {
            name: "Client Discovery / Requirements Call",
            note: "Understand the prospect's business problem, current Salesforce setup and scope",
            cadence: "as-needed",
            deadline: "After a lead is qualified",
            raci: { r: "Solutions Architect", a: "Head of Pre-Sales", c: "Sales Rep", i: "Delivery" },
          },
          {
            name: "NDA with Prospect",
            note: "Sign a mutual NDA (OmniCloud Mutual NDA template) before detailed requirements or pricing are shared",
            cadence: "as-needed",
            deadline: "Before sharing detailed information",
            raci: { r: "Sales Rep", a: "Head of Pre-Sales", c: "Leadership", i: "Finance" },
          },
          {
            name: "Solution Demo / Proof of Concept",
            note: "Show a tailored Salesforce demo or small proof of concept for the prospect's key use cases",
            cadence: "as-needed",
            deadline: "Before the proposal is sent",
            raci: { r: "Solutions Architect", a: "Head of Pre-Sales", c: "Delivery", i: "Sales Rep" },
          },
          {
            name: "Proposal / SOW drafting cycle",
            note: "Scope the work, estimate effort, team mix and timeline, and draft statements of work",
            cadence: "weekly",
            deadline: "Estimate ready before pricing",
            raci: { r: "Solutions Architect", a: "Head of Pre-Sales", c: "Delivery, Finance" },
          },
          {
            name: "Pricing & Deal Approval",
            note: "Set pricing and get margin and discount approval before the proposal goes out",
            cadence: "as-needed",
            deadline: "Before the proposal is sent",
            raci: { r: "Head of Pre-Sales", a: "Leadership", c: "Finance", i: "Sales Rep" },
          },
          {
            name: "RFP / RFI Responses",
            note: "Prepare responses to RFPs and RFIs, including case studies (from Marketing) and consultant profiles (from Delivery)",
            cadence: "as-needed",
            deadline: "By the RFP due date",
            raci: {
              r: "Solutions Architect",
              a: "Head of Pre-Sales",
              c: "Delivery, Marketing, Finance",
              i: "Leadership",
            },
          },
          {
            name: "Negotiation & Contract Closure",
            note: "Negotiate terms and get the MSA / SOW signed, then hand over to Delivery via the Internal Kick-off",
            cadence: "as-needed",
            deadline: "After the proposal is accepted",
            raci: { r: "Sales Rep", a: "Head of Pre-Sales", c: "Finance, Leadership, Delivery" },
          },
        ],
      },
      {
        title: "Partner Relations",
        activities: [
          {
            name: "Partner alignment call",
            note: "Salesforce & ISV partner sync on pipeline and enablement",
            cadence: "monthly",
            raci: { r: "Partner Manager", a: "Head of Pre-Sales", c: "Marketing" },
          },
          {
            name: "Salesforce Deal Registration",
            note: "Register qualified opportunities in the Salesforce Partner portal",
            cadence: "as-needed",
            deadline: "When an opportunity is qualified",
            raci: { r: "Partner Manager", a: "Head of Pre-Sales", c: "Sales Rep" },
          },
          {
            name: "Partner tier / certification renewal",
            note: "Maintain partner tier requirements & certifications",
            cadence: "annual",
            raci: { r: "Partner Manager", a: "Head of Pre-Sales", c: "Delivery, HR", i: "Leadership" },
          },
        ],
      },
      {
        title: "Forecasting & Planning",
        activities: [
          {
            name: "Revenue forecast",
            note: "Roll up committed / best-case / pipeline forecast",
            cadence: "monthly",
            raci: { r: "Head of Pre-Sales", a: "Leadership", c: "Finance" },
          },
          {
            name: "Win / Loss Review",
            note: "Review won and lost deals to learn what worked and why deals were lost",
            cadence: "monthly",
            deadline: "First week of every month",
            raci: { r: "Head of Pre-Sales", a: "Leadership", c: "Delivery, Marketing", i: "Sales Team" },
          },
          {
            name: "Territory & target planning",
            note: "Set quotas and territory splits for the coming quarter",
            cadence: "quarterly",
            raci: { r: "Head of Pre-Sales", a: "Leadership", i: "Sales Team" },
          },
          {
            name: "Account Growth / Upsell Review",
            note: "Find upsell and cross-sell opportunities with existing clients",
            cadence: "quarterly",
            deadline: "Every quarter",
            raci: { r: "Sales Rep", a: "Head of Pre-Sales", c: "Delivery Managers", i: "Leadership" },
          },
        ],
      },
    ],
  },
  {
    slug: "delivery",
    index: "03",
    name: "Delivery & Consulting Operations",
    group: "Go-to-Market & Delivery",
    workstreams: [
      {
        title: "Kickoff: Handover & Staffing",
        activities: [
          {
            name: "Internal Kick-off (Sales → Delivery handoff)",
            note: "Transfer deal context (signed SOW, scope, client context & commercials) from Sales to Delivery before an SA is staffed",
            cadence: "per-project",
            deadline: "Before an SA is staffed",
            raci: {
              r: "Sales Rep",
              a: "Head of Pre-Sales",
              c: "Head of Delivery",
              i: "Delivery Manager, Client Stakeholders",
            },
          },
          {
            name: "Resource allocation & staffing assignment",
            note: "HR identifies and assigns available resources to the incoming project",
            cadence: "per-project",
            raci: {
              r: "HR Executive",
              a: "Head of Delivery",
              c: "Resourcing Manager, Head of HR",
              i: "Delivery Manager",
            },
          },
        ],
      },
      {
        title: "Engagement Lifecycle",
        activities: [
          {
            name: "Claude Project Setup",
            note: "Set up the Google Drive and Claude Project the whole engagement will run on",
            cadence: "per-project",
            deadline: "Before Discovery Prep starts",
            raci: { r: "Delivery Manager", a: "Head of Delivery", c: "Solutions Architect", i: "Project Lead" },
          },
          {
            name: "Discovery Prep",
            note: "Build the workshop agenda, open the registry and prepare the kickoff deck",
            cadence: "per-project",
            deadline: "Before the Client Kick-off Call",
            raci: { r: "Solutions Architect", a: "Delivery Manager", c: "Sales Rep", i: "Client Sponsor" },
          },
          {
            name: "Client Kick-off Call",
            note: "Present the deck, confirm agenda and sequence, and complete the registry",
            cadence: "per-project",
            deadline: "Kick-off day; agenda + registry redlined the same day",
            raci: { r: "Delivery Manager", a: "Head of Delivery", c: "Solutions Architect", i: "Client Stakeholders" },
          },
          {
            name: "Discovery Workshops",
            note: "Run each topic and capture decisions, questions and risks",
            cadence: "per-project",
            deadline: "After each session: RAID Log + Status Report updated",
            raci: { r: "Solutions Architect", a: "Delivery Manager", c: "Client Stakeholders", i: "Client Sponsor" },
          },
          {
            name: "Design Review & Sign-off",
            note: "Consolidate discovery into a design doc and translate it into a backlog",
            cadence: "per-project",
            deadline: "After Discovery; before Build",
            raci: { r: "Solutions Architect", a: "Head of Delivery", c: "Client Sponsor", i: "Delivery Manager" },
          },
          {
            name: "Build",
            note: "Provision sandboxes and build against the backlog",
            cadence: "weekly",
            deadline: "Every sprint; plan vs. completed stories reconciled weekly",
            raci: { r: "Project Lead", a: "Solutions Architect", c: "Delivery Manager", i: "Client Sponsor" },
          },
          {
            name: "Sprint Demos",
            note: "Show working software each sprint",
            cadence: "per-project",
            deadline: "End of each sprint; deck sent to client 24h before the demo",
            raci: { r: "Project Lead", a: "Delivery Manager", c: "Solutions Architect", i: "Client Stakeholders" },
          },
          {
            name: "Internal E2E Testing",
            note: "Validate every feature, by persona, before UAT",
            cadence: "per-project",
            deadline: "Starts weeks before Build completes; finished before UAT",
            raci: { r: "QA Lead", a: "Solutions Architect", c: "Project Lead", i: "Delivery Manager" },
          },
          {
            name: "UAT",
            note: "Client tests; triage feedback (minor fixes now, major items to backlog)",
            cadence: "per-project",
            deadline: "After Internal E2E Testing; client note per major item",
            raci: { r: "QA Lead", a: "Delivery Manager", c: "Solutions Architect", i: "Client Sponsor" },
          },
          {
            name: "Client Sign-off",
            note: "Get formal written approval that UAT has passed",
            cadence: "per-project",
            deadline: "After UAT passes; before Go-Live",
            raci: { r: "Delivery Manager", a: "Head of Delivery", c: "Solutions Architect", i: "Client Sponsor, Finance" },
          },
          {
            name: "Go-Live",
            note: "Deploy to production",
            cadence: "per-project",
            deadline: "After Client Sign-off",
            raci: { r: "Project Lead", a: "Solutions Architect", c: "QA Lead", i: "Client Sponsor, Leadership" },
          },
          {
            name: "Hypercare",
            note: "Stabilise, confirm parity with UAT, and hand over to support",
            cadence: "daily",
            deadline: "Starts right after Go-Live; memo at close",
            raci: { r: "Project Lead", a: "Delivery Manager", c: "Solutions Architect", i: "Client Sponsor" },
          },
        ],
      },
      {
        title: "Active Project Delivery",
        activities: [
          {
            name: "Project status stand-up",
            note: "15-min sync on blockers & priorities",
            cadence: "daily",
            raci: { r: "Project Lead", a: "Delivery Manager", i: "Client Stakeholders" },
          },
          {
            name: "Project health / RAG report",
            note: "Red-amber-green status rollup across active engagements",
            cadence: "weekly",
            raci: { r: "Project Lead", a: "Head of Delivery", i: "Leadership" },
          },
        ],
      },
      {
        title: "Resource & Staffing",
        activities: [
          {
            name: "Timesheet & utilization review",
            note: "Track billable vs. bench hours across delivery teams",
            cadence: "daily",
            raci: { r: "PMO", a: "Delivery Manager", c: "Finance" },
          },
          {
            name: "Resource allocation & bench review",
            note: "Match upcoming demand against available bench",
            cadence: "weekly",
            raci: { r: "Resourcing Manager", a: "Head of Delivery", c: "Finance, Pre-Sales" },
          },
        ],
      },
      {
        title: "Quality & Governance",
        activities: [
          {
            name: "Quality / code review audit",
            note: "Spot-check delivery quality against org standards",
            cadence: "monthly",
            raci: { r: "QA Lead", a: "Head of Delivery", i: "Project Leads" },
          },
          {
            name: "Quarterly business review (QBR)",
            note: "Value delivered, roadmap, and renewal risk per client",
            cadence: "quarterly",
            raci: { r: "Delivery Manager", a: "Head of Delivery", c: "Pre-Sales, Client Sponsor", i: "Leadership" },
          },
        ],
      },
      {
        title: "Client Success & Planning",
        activities: [
          {
            name: "Steering committee",
            note: "Executive-level checkpoint on scope, risk & budget",
            cadence: "monthly",
            raci: { r: "Delivery Manager", a: "Head of Delivery", c: "Client Sponsor", i: "Leadership" },
          },
          {
            name: "Capacity & headcount planning",
            note: "Forecast delivery capacity against the sales pipeline",
            cadence: "annual",
            raci: { r: "Head of Delivery", a: "Leadership", c: "Finance, HR" },
          },
        ],
      },
    ],
  },
  {
    slug: "hr",
    index: "04",
    name: "Human Resources",
    group: "People",
    workstreams: [
      {
        title: "Attendance & Leave",
        activities: [
          {
            name: "Attendance Tracking",
            note: "Check attendance and exceptions every week; close the month's attendance for payroll",
            cadence: "weekly",
            deadline: "Weekly check; month-end close before payroll",
            raci: { r: "HR Executive", a: "Head of HR", c: "Delivery Managers", i: "Finance" },
          },
          {
            name: "Leave Approval",
            note: "Review and approve or decline leave requests, and keep leave balances up to date",
            cadence: "as-needed",
            deadline: "As requests come in",
            raci: { r: "HR Executive", a: "Head of HR", c: "Delivery Managers" },
          },
          {
            name: "Employee Grievance",
            note: "Log and resolve employee concerns as they're raised; review open cases every week",
            cadence: "weekly",
            deadline: "Handled as raised; reviewed weekly",
            raci: { r: "HR Executive", a: "Head of HR", c: "Leadership" },
          },
        ],
      },
      {
        title: "Onboarding & Exits",
        activities: [
          {
            name: "Employee Recruitment (HR coordination)",
            note: "Raise hiring requests, coordinate with the Recruitment team and track open positions until they're filled",
            cadence: "as-needed",
            deadline: "When a new position is approved",
            raci: { r: "HR Executive", a: "Head of HR", c: "Recruitment, Delivery Managers", i: "Finance" },
          },
          {
            name: "Offer Letters",
            note: "Prepare and issue offer letters using the salary breakup from Finance, and track acceptance",
            cadence: "as-needed",
            deadline: "After the offer is approved",
            raci: { r: "HR Executive", a: "Head of HR", c: "Finance, Recruitment", i: "Delivery Managers" },
          },
          {
            name: "Employee Onboarding",
            note: "Joining formalities: documents, system access, ID, and health insurance enrolment",
            cadence: "as-needed",
            deadline: "On or before the joining date",
            raci: { r: "HR Executive", a: "Head of HR", c: "IT, Finance", i: "Delivery Managers" },
          },
          {
            name: "New joiner induction",
            note: "Orientation session for the week's new hires",
            cadence: "weekly",
            raci: { r: "HR Executive", a: "Head of HR", c: "Delivery" },
          },
          {
            name: "Employee Offboarding",
            note: "Resignation, notice period, handover, asset return, access removal, full & final settlement and relieving letter",
            cadence: "as-needed",
            deadline: "By the last working day",
            raci: { r: "HR Executive", a: "Head of HR", c: "IT, Finance", i: "Delivery Managers" },
          },
        ],
      },
      {
        title: "Payroll & Compliance",
        activities: [
          {
            name: "Payroll Processing (HR inputs)",
            note: "Compile attendance, leave and variable pay inputs and send them to Finance for salary processing",
            cadence: "monthly",
            deadline: "30th or 31st of every month",
            raci: { r: "HR Executive", a: "Head of HR", c: "Finance" },
          },
          {
            name: "Policy compliance check",
            note: "Verify statutory & internal policy adherence",
            cadence: "monthly",
            raci: { r: "HR Executive", a: "Head of HR", c: "Finance", i: "Leadership" },
          },
        ],
      },
      {
        title: "Performance & Development",
        activities: [
          {
            name: "Performance Review",
            note: "Half-yearly goal-setting and performance review across all delivery teams",
            cadence: "half-yearly",
            deadline: "June and December",
            raci: { r: "Head of HR", a: "Leadership", c: "Delivery Managers", i: "All Employees" },
          },
          {
            name: "Appraisals",
            note: "Compensation review, increments and promotions based on the performance review",
            cadence: "half-yearly",
            deadline: "July and January",
            raci: { r: "Head of HR", a: "Leadership", c: "Finance", i: "All Employees" },
          },
          {
            name: "Training & Certifications",
            note: "Plan and track employee trainings and certifications (e.g. Salesforce certifications)",
            cadence: "as-needed",
            deadline: "As planned",
            raci: { r: "HR Executive", a: "Head of HR", c: "Delivery Managers", i: "Finance" },
          },
          {
            name: "Events Planning",
            note: "Plan and run employee events and celebrations",
            cadence: "as-needed",
            deadline: "As planned",
            raci: { r: "HR Executive", a: "Head of HR", c: "Leadership, Marketing", i: "All Employees" },
          },
        ],
      },
    ],
  },
  {
    slug: "recruitment",
    index: "05",
    name: "Recruitment",
    group: "People",
    workstreams: [
      {
        title: "Sourcing & Screening",
        activities: [
          {
            name: "Profile Sourcing (as per job description)",
            note: "Source candidate profiles that match the job description for each open role, and reach out to them",
            cadence: "as-needed",
            deadline: "Whenever a position is open",
            raci: { r: "Recruiter", a: "Head of Recruitment", c: "Delivery Managers" },
          },
          {
            name: "Sourcing Channels: LinkedIn, Naukri, Sourcing Agency",
            note: "The channels used for sourcing: LinkedIn, Naukri and external sourcing agencies",
            cadence: "as-needed",
            deadline: "Whenever a position is open",
            raci: { r: "Recruiter", a: "Head of Recruitment" },
          },
          {
            name: "Resume Screening & Shortlisting",
            note: "Screen resumes against the job description and shortlist candidates for interviews",
            cadence: "as-needed",
            deadline: "Within days of receiving profiles",
            raci: { r: "Recruiter", a: "Head of Recruitment", c: "Delivery Managers" },
          },
        ],
      },
      {
        title: "Interview Pipeline",
        activities: [
          {
            name: "Interview Scheduling",
            note: "Schedule interviews with panels and candidates, and track each candidate's stage",
            cadence: "weekly",
            deadline: "Scheduled as needed; pipeline reviewed weekly",
            raci: { r: "Recruiter", a: "Head of Recruitment", c: "Delivery Managers" },
          },
          {
            name: "Salary Negotiation",
            note: "Negotiate salary with selected candidates within the approved budget",
            cadence: "weekly",
            deadline: "Negotiated as needed; open offers tracked weekly",
            raci: { r: "Recruiter", a: "Head of Recruitment", c: "HR, Finance" },
          },
          {
            name: "Offer Letter",
            note: "Issue the offer letter once salary is agreed",
            cadence: "as-needed",
            deadline: "After salary is agreed",
            raci: { r: "HR Executive", a: "Head of HR", c: "Recruiter, Finance", i: "Delivery Managers" },
          },
        ],
      },
      {
        title: "Campus Recruitment",
        activities: [
          {
            name: "Identify Potential Institutions",
            note: "Shortlist the colleges and institutions to hire from this year",
            cadence: "annual",
            deadline: "Once a year, before the campus season",
            raci: { r: "Head of Recruitment", a: "Leadership", c: "Delivery Managers", i: "HR" },
          },
          {
            name: "Package as per Institution Ranking",
            note: "Set the salary/stipend package for each institution tier based on its ranking",
            cadence: "annual",
            deadline: "Once a year, before the campus season",
            raci: { r: "Head of Recruitment", a: "Leadership", c: "Finance, HR" },
          },
          {
            name: "Share Job Description with Institutions",
            note: "Send the job description and package details to each institution's placement cell",
            cadence: "as-needed",
            deadline: "At the start of each campus drive",
            raci: { r: "Recruiter", a: "Head of Recruitment", c: "Delivery Managers" },
          },
          {
            name: "Campus Selection Process",
            note: "Run the selection rounds: aptitude test, coding test, technical interview and managerial round",
            cadence: "as-needed",
            deadline: "During each campus drive",
            raci: { r: "Recruiter", a: "Head of Recruitment", c: "Delivery Managers", i: "HR" },
          },
          {
            name: "Internship Offer",
            note: "Issue internship offers to selected students",
            cadence: "as-needed",
            deadline: "After the selection process",
            raci: { r: "Recruiter", a: "Head of Recruitment", c: "HR, Finance", i: "Delivery Managers" },
          },
          {
            name: "Intern Training & Assessment",
            note: "Train interns and assess them for conversion to full-time roles",
            cadence: "as-needed",
            deadline: "Through the internship",
            raci: { r: "Delivery Managers", a: "Head of Recruitment", c: "HR", i: "Leadership" },
          },
          {
            name: "Full-Time Offer (intern conversion)",
            note: "Make full-time offers to interns who pass the assessment",
            cadence: "as-needed",
            deadline: "At the end of the internship",
            raci: { r: "Recruiter", a: "Head of Recruitment", c: "HR, Finance", i: "Delivery Managers" },
          },
        ],
      },
      {
        title: "Reporting & Vendor Relations",
        activities: [
          {
            name: "Hiring report",
            note: "Openings, time-to-fill & source-of-hire rollup",
            cadence: "monthly",
            raci: { r: "Head of Recruitment", a: "Leadership", i: "HR" },
          },
          {
            name: "College / vendor relationship review",
            note: "Check in with campus & staffing vendor partners",
            cadence: "monthly",
            raci: { r: "Recruiter", a: "Head of Recruitment" },
          },
        ],
      },
      {
        title: "Workforce Planning",
        activities: [
          {
            name: "Workforce & headcount planning",
            note: "Align next year's hiring plan to delivery & sales forecast",
            cadence: "annual",
            raci: { r: "Head of Recruitment", a: "Leadership", c: "Finance, Delivery" },
          },
        ],
      },
    ],
  },
  {
    slug: "finance",
    index: "06",
    name: "Finance",
    group: "Finance",
    people: ["Head of Accounts"],
    workstreams: [
      {
        title: "Daily Accounting",
        activities: [
          {
            name: "Vendor invoice booking",
            note: "Book vendor invoices for the last & current month",
            cadence: "daily",
            deadline: "Daily",
            raci: { r: "Accounts Executive", a: "Head of Accounts" },
          },
          {
            name: "Bank updation",
            note: "Record bank transactions in the books",
            cadence: "daily",
            deadline: "Daily",
            raci: { r: "Accounts Executive", a: "Head of Accounts" },
          },
          {
            name: "Cash updation",
            note: "Record petty cash receipts & payments",
            cadence: "daily",
            deadline: "Daily",
            raci: { r: "Accounts Executive", a: "Head of Accounts" },
          },
          {
            name: "Accounting books updation",
            note: "Keep the ledgers up to date",
            cadence: "daily",
            deadline: "Daily",
            raci: { r: "Accounts Executive", a: "Head of Accounts" },
          },
        ],
      },
      {
        title: "Payables & Payments",
        activities: [
          {
            name: "Srinivas monthly payment",
            note: "Release the fixed monthly payment to Srinivas",
            cadence: "monthly",
            deadline: "1st of every month",
            raci: { r: "Accounts Executive", a: "Head of Accounts" },
          },
          {
            name: "Vendor payments",
            note: "Pay vendor invoices falling due",
            cadence: "monthly",
            deadline: "5th of every month",
            raci: { r: "Accounts Executive", a: "Head of Finance" },
          },
          {
            name: "Reimbursement payment",
            note: "Pay approved employee reimbursement claims",
            cadence: "monthly",
            deadline: "5th of every month",
            raci: { r: "Accounts Executive", a: "Head of Accounts", c: "HR" },
          },
          {
            name: "Airtel bill payment",
            note: "Pay the monthly Airtel bill",
            cadence: "monthly",
            deadline: "16th of every month",
            raci: { r: "Accounts Executive", a: "Head of Accounts" },
          },
          {
            name: "Office supplies & other payments",
            note: "Pay for office supplies & ad-hoc expenses",
            cadence: "as-needed",
            deadline: "As and when",
            raci: { r: "Accounts Executive", a: "Head of Accounts" },
          },
        ],
      },
      {
        title: "Billing & Collections",
        activities: [
          {
            name: "Timesheet follow-up & validation",
            note: "Chase & validate current-month timesheets",
            cadence: "weekly",
            deadline: "Weekly",
            raci: { r: "Accounts Executive", a: "Head of Accounts", c: "Delivery" },
          },
          {
            name: "Invoice preparation",
            note: "Prepare current-month invoices from validated timesheets",
            cadence: "monthly",
            deadline: "30th / 31st of every month",
            raci: { r: "Accounts Executive", a: "Head of Finance", c: "Delivery" },
          },
          {
            name: "Invoice submission to clients",
            note: "Send last month's invoices to clients",
            cadence: "monthly",
            deadline: "1st of every month",
            raci: { r: "Accounts Executive", a: "Head of Finance", i: "Delivery" },
          },
          {
            name: "AR / AP aging review",
            note: "Chase overdue receivables, flag payable due dates",
            cadence: "weekly",
            deadline: "Weekly",
            raci: { r: "Accounts Executive", a: "Head of Finance", i: "Leadership" },
          },
        ],
      },
      {
        title: "Payroll",
        activities: [
          {
            name: "Attendance validation",
            note: "Validate current-month attendance for payroll",
            cadence: "weekly",
            deadline: "Weekly",
            raci: { r: "Accounts Executive", a: "Head of Accounts", c: "HR" },
          },
          {
            name: "Salary calculation & preparation",
            note: "Compute current-month salaries",
            cadence: "monthly",
            deadline: "30th / 31st of every month",
            raci: { r: "Accounts Executive", a: "Head of Finance", c: "HR" },
          },
          {
            name: "Salary disbursement",
            note: "Pay last month's salaries",
            cadence: "monthly",
            deadline: "1st of every month",
            raci: { r: "Accounts Executive", a: "Head of Finance", i: "HR" },
          },
          {
            name: "Salary breakup for recruitment",
            note: "Share salary breakups with HR for new offers",
            cadence: "as-needed",
            deadline: "As and when",
            raci: { r: "Accounts Executive", a: "Head of Finance", c: "HR, Recruitment" },
          },
        ],
      },
      {
        title: "Employee Health Insurance",
        activities: [
          {
            name: "Health insurance data preparation",
            note: "Prepare employee data for the annual policy renewal",
            cadence: "annual",
            deadline: "1st March every year",
            raci: { r: "Accounts Executive", a: "Head of Finance", c: "HR" },
          },
          {
            name: "Health insurance payment processing",
            note: "Pay the annual group health insurance premium",
            cadence: "annual",
            deadline: "1st March every year",
            raci: { r: "Accounts Executive", a: "Head of Finance", c: "HR" },
          },
          {
            name: "Health insurance data prep – new joiner",
            note: "Prepare new joiner details for policy addition",
            cadence: "as-needed",
            deadline: "As and when",
            raci: { r: "Accounts Executive", a: "Head of Accounts", c: "HR" },
          },
          {
            name: "Health insurance payment – new joiner",
            note: "Pay the premium for new joiner additions",
            cadence: "as-needed",
            deadline: "As and when",
            raci: { r: "Accounts Executive", a: "Head of Accounts", c: "HR" },
          },
        ],
      },
      {
        title: "Monthly Statutory Compliance",
        activities: [
          {
            name: "TDS calculation & preparation",
            note: "Compute current-month TDS",
            cadence: "monthly",
            deadline: "30th / 31st of every month",
            raci: { r: "Accounts Executive", a: "Head of Accounts" },
          },
          {
            name: "EPF calculation & preparation",
            note: "Compute current-month EPF contributions",
            cadence: "monthly",
            deadline: "30th / 31st of every month",
            raci: { r: "Accounts Executive", a: "Head of Accounts", c: "HR" },
          },
          {
            name: "TDS payment",
            note: "Deposit last month's TDS",
            cadence: "monthly",
            deadline: "7th of every month",
            raci: { r: "Accounts Executive", a: "Head of Finance" },
          },
          {
            name: "Professional Tax payment",
            note: "Pay last month's Professional Tax",
            cadence: "monthly",
            deadline: "10th of every month",
            raci: { r: "Accounts Executive", a: "Head of Finance" },
          },
          {
            name: "Professional Tax return filing",
            note: "File last month's Professional Tax return",
            cadence: "monthly",
            deadline: "10th of every month",
            raci: { r: "Accounts Executive", a: "Head of Finance" },
          },
          {
            name: "GSTR-1 return filing",
            note: "File last month's invoices in the GST portal",
            cadence: "monthly",
            deadline: "11th of every month",
            raci: { r: "Accounts Executive", a: "Head of Finance" },
          },
          {
            name: "EPF payment",
            note: "Deposit last month's EPF",
            cadence: "monthly",
            deadline: "15th of every month",
            raci: { r: "Accounts Executive", a: "Head of Finance" },
          },
          {
            name: "GST calculation & payment",
            note: "Compute & pay last month's GST",
            cadence: "monthly",
            deadline: "20th of every month",
            raci: { r: "Accounts Executive", a: "Head of Finance" },
          },
          {
            name: "GSTR-3B return filing",
            note: "File last month's GSTR-3B in the GST portal",
            cadence: "monthly",
            deadline: "20th of every month",
            raci: { r: "Accounts Executive", a: "Head of Finance" },
          },
        ],
      },
      {
        title: "Close & Reporting",
        activities: [
          {
            name: "Bank reconciliation",
            note: "Reconcile last month's bank statements with the books",
            cadence: "monthly",
            deadline: "5th of every month",
            raci: { r: "Accounts Executive", a: "Head of Accounts" },
          },
          {
            name: "Profit & Loss account updation",
            note: "Update the monthly P&L",
            cadence: "monthly",
            deadline: "Monthly",
            raci: { r: "Head of Accounts", a: "Head of Finance", i: "Leadership" },
          },
          {
            name: "Balance sheet updation",
            note: "Update the monthly balance sheet",
            cadence: "monthly",
            deadline: "Monthly",
            raci: { r: "Head of Accounts", a: "Head of Finance", i: "Leadership" },
          },
          {
            name: "Board / investor reporting",
            note: "Prepare quarterly financial & operational reporting pack",
            cadence: "quarterly",
            deadline: "Quarterly",
            raci: { r: "Head of Finance", a: "Leadership" },
          },
        ],
      },
      {
        title: "Annual Tax & Compliance",
        activities: [
          {
            name: "Individual tax calculation",
            note: "Compute individual income tax liabilities",
            cadence: "annual",
            deadline: "30th June every year",
            raci: { r: "Accounts Executive", a: "Head of Accounts" },
          },
          {
            name: "Individual tax filings",
            note: "File individual income tax returns",
            cadence: "annual",
            deadline: "31st July every year",
            raci: { r: "Accounts Executive", a: "Head of Accounts" },
          },
          {
            name: "Tax audit details preparation",
            note: "Prepare schedules & details for the tax audit",
            cadence: "annual",
            deadline: "30th September every year",
            raci: { r: "Head of Accounts", a: "Head of Finance", c: "External Auditor" },
          },
          {
            name: "Tax audit filing",
            note: "File the tax audit report",
            cadence: "annual",
            deadline: "30th September every year",
            raci: { r: "Head of Accounts", a: "Head of Finance", c: "External Auditor" },
          },
          {
            name: "Corporate financials preparation",
            note: "Prepare the annual corporate financial statements",
            cadence: "annual",
            deadline: "31st October every year",
            raci: { r: "Head of Accounts", a: "Head of Finance", c: "External Auditor", i: "Leadership" },
          },
          {
            name: "Corporate tax filings",
            note: "File the corporate income tax return",
            cadence: "annual",
            deadline: "31st October every year",
            raci: { r: "Head of Accounts", a: "Head of Finance", c: "External Auditor" },
          },
          {
            name: "ROC return preparation",
            note: "Prepare annual ROC returns",
            cadence: "annual",
            deadline: "31st October every year",
            raci: { r: "Head of Accounts", a: "Head of Finance", c: "Company Secretary" },
          },
          {
            name: "ROC return filings",
            note: "File annual ROC returns",
            cadence: "annual",
            deadline: "30th November every year",
            raci: { r: "Head of Accounts", a: "Head of Finance", c: "Company Secretary" },
          },
        ],
      },
    ],
  },
];

export function getPillar(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}

export function cadenceMix(pillar: Pillar): Record<Cadence, number> {
  const mix: Record<Cadence, number> = {
    "per-project": 0,
    "as-needed": 0,
    daily: 0,
    weekly: 0,
    monthly: 0,
    quarterly: 0,
    "half-yearly": 0,
    annual: 0,
  };
  for (const ws of pillar.workstreams) {
    for (const act of ws.activities) {
      mix[act.cadence] += 1;
    }
  }
  return mix;
}

export function activityCount(pillar: Pillar): number {
  return pillar.workstreams.reduce((sum, ws) => sum + ws.activities.length, 0);
}

export function pillarRoster(pillar: Pillar): { role: string; name: string }[] {
  const seen = new Set<string>();
  const entries: { role: string; name: string }[] = [];
  for (const ws of pillar.workstreams) {
    for (const act of ws.activities) {
      for (const field of [act.raci.r, act.raci.a, act.raci.c, act.raci.i]) {
        if (!field) continue;
        for (const role of field.split(",").map((s) => s.trim())) {
          if (roster[role] && !seen.has(role)) {
            seen.add(role);
            entries.push({ role, name: roster[role] });
          }
        }
      }
    }
  }
  for (const role of pillar.people ?? []) {
    if (roster[role] && !seen.has(role)) {
      seen.add(role);
      entries.push({ role, name: roster[role] });
    }
  }
  return entries;
}
