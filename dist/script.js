const projects = {
  audax: {
    index: "01",
    title: "Legacy Reporting Migration to Snowflake",
    kicker: "Work case study · Data · Analytics & BI · Confidential: no code or data shown",
    tags: ["Data", "Analytics & BI", "Work case study"],
    card: "Migrated 40M rows of legacy reporting to Snowflake at Audax Group, rebuilding report logic in reusable SQL and proving parity with 31 reconciliation checks before stakeholders switched over.",
    summary: "On Audax Group's Business Solutions team, I rebuilt assigned SQL Server reporting logic as reusable Snowflake CTEs and stored procedures. I wrote 31 reconciliation checks across row counts, totals, and business rules, and traced 200 vendor-invoice mismatches back to the source before cutover. I also right-sized Snowflake warehouses and clustered large invoice fact tables by date, reducing compute use by 22%.",
    proof: "31 checks compared SQL Server and Snowflake outputs. Each mismatch was traced to source before cutover; 22 Airflow DAGs then sustained 99% run success during the six-month co-op.",
    technologies: ["SQL Server", "Snowflake", "SQL", "dbt", "Airflow", "Python", "Alteryx", "Excel", "Tableau", "Power BI"],
    nodes: ["SQL Server reports", "Snowflake rebuild", "31 parity checks", "Trusted cutover"],
    flow: "Assigned SQL Server report logic was rebuilt in Snowflake and reconciled against legacy outputs before the broader team completed cutover.",
    note: "The diagram and sample query are synthetic. No client data is shown.",
    links: [{label: "Discuss the work", href: "#contact"}]
  },
  cloudApi: {
    index: "02",
    title: "Cloud Marketplace API on AWS",
    kicker: "Software · Cloud & DevOps",
    tags: ["Software", "Cloud & DevOps"],
    card: "A marketplace back end in Python (FastAPI) and Go, built with Bazel. It has authentication, ownership-based authorization, and 40+ integration tests, and deploys to Terraform-provisioned AWS through GitHub Actions.",
    summary: "This marketplace API uses FastAPI and PostgreSQL for the main service, with a small supporting Go component kept behind a clear service boundary in the two-language codebase. Bazel provides reproducible builds, while GitHub Actions runs the test and deployment stages. Terraform provisions the AWS environment, including EC2, an Application Load Balancer, Auto Scaling, RDS, and CloudWatch observability.",
    proof: "40+ Pytest integration tests exercise authentication, ownership-based authorization, and PostgreSQL behavior in CI. Terraform defines the AWS infrastructure used by the deployment.",
    technologies: ["Python", "FastAPI", "Go", "Bazel", "PostgreSQL", "SQLAlchemy", "Pytest", "GitHub Actions", "Terraform", "AWS EC2", "RDS", "ALB", "Auto Scaling", "CloudWatch"],
    nodes: ["Git push", "Bazel build + tests", "Terraform on AWS", "Live API"],
    flow: "Every change is built and tested in CI before it runs on infrastructure defined entirely in Terraform.",
    note: "Repository access is being prepared for public review.",
    linkChecks: ["Repository access is being prepared"]
  },
  food: {
    index: "03",
    title: "Two-City Food Inspections Pipeline",
    kicker: "Data · Analytics & BI · Public data",
    tags: ["Data", "Analytics & BI", "Public data"],
    card: "Combined 400K+ Chicago and Dallas food-inspection records into a shared Snowflake dimensional model, using Azure Data Factory for ingestion, Python and Alteryx for profiling and cleanup, and Power BI for cross-city analysis.",
    summary: "Azure Data Factory orchestrates movement from the two city portals into Snowflake with linked services, datasets, retries, and validation checkpoints. Python with ydata-profiling provides exploratory and data-quality profiles; Alteryx handles standardization, duplicate and null cleanup, date and text normalization, and business-rule checks. Snowflake holds the staging and star-schema layers, and Power BI presents comparable cross-city KPIs.",
    proof: "Source-to-warehouse row counts were reconciled alongside required-field, null, duplicate, accepted-code, and fact-to-dimension key checks before dashboard refreshes.",
    technologies: ["Azure Data Factory", "Python", "ydata-profiling", "Alteryx", "Snowflake", "SQL", "Power BI"],
    nodes: ["2 city portals", "Python + Alteryx", "ADF + Snowflake", "Cross-city Power BI"],
    flow: "Two cities' incompatible inspection data is ingested, profiled, cleaned, and conformed into one Snowflake model that Power BI compares side by side.",
    links: [{label: "Team repository", href: "https://github.com/SiddhiRavindra/DAMGFoodInspection"}],
    linkChecks: ["Architecture and pipeline stages are documented in the repository"]
  },
  orbit: {
    index: "04",
    title: "ORBIT Agentic Research Platform",
    kicker: "AI/ML · Software · Cloud & DevOps",
    tags: ["AI/ML", "Software", "Cloud & DevOps"],
    attribution: "Co-built with Bhargav Gandhi",
    card: "A multi-agent due-diligence assistant on LangGraph and Qdrant. It answers only from cited sources across 26,985 embedded passages, and an LLM-as-judge gate blocks unsupported answers before they ship.",
    summary: "AI research tools are fast but can produce unsupported claims, which is unacceptable in due diligence. ORBIT uses cooperating LangGraph agents to research companies from their own documents, stores 26,985 embedded passages in Qdrant, and passes every draft through an LLM-as-judge gate that requires source support. On a held-out RAG evaluation set, that gate reduced ungrounded answers by 40%. The FastAPI service runs on Kubernetes in Google Kubernetes Engine.",
    proof: "The LLM-as-judge gate was measured on a held-out RAG evaluation set: ungrounded answers fell 40%, across research covering 50 companies.",
    technologies: ["Python", "LangGraph", "Qdrant", "FastAPI", "MCP", "Anthropic API", "GCP", "GKE", "Kubernetes"],
    nodes: ["Company docs", "Qdrant retrieval", "Agent graph", "Judge-gated brief"],
    flow: "Agents research from embedded source documents, and a judge blocks any answer that lacks a citation.",
    linkChecks: ["Repository clone in progress"]
  },
  kafka: {
    index: "05",
    title: "Real-Time Event Pipeline (Kafka)",
    kicker: "Data · Software · Streaming",
    tags: ["Data", "Software", "Streaming"],
    card: "A Python Kafka pipeline that validates streaming market events in flight, routes schema-breaking messages to a dead-letter path, and writes clean records to PostgreSQL with idempotent upserts. It sustained 8K events per second in a Docker load test.",
    summary: "The pipeline reads market events from Kafka, validates each payload against its schema, routes failures to a dead-letter path, and writes clean records to PostgreSQL. Python consumers use idempotent upserts so replayed events do not create duplicate rows. The containerized system sustained 8K events per second in a Docker load test.",
    proof: "Injected schema-break tests showed the validation and dead-letter path caught 95% of malformed events. Idempotent PostgreSQL upserts protected against duplicate rows during replay.",
    technologies: ["Python", "Kafka", "PostgreSQL", "Docker", "Linux"],
    nodes: ["Market events", "Kafka + validation", "PostgreSQL", "Clean feed + alerts"],
    flow: "Events are validated in flight, failures are quarantined, and only clean records reach storage.",
    linkChecks: ["Repository clone in progress"]
  },
  avanade: {
    index: "06",
    title: "Client Reporting ETL Refactor",
    kicker: "Work case study · Data · Software · Confidential: no client details",
    tags: ["Data", "Software", "Work case study"],
    card: "Refactored assigned components of a client reporting ETL at Avanade (Accenture), replacing full refreshes with incremental dbt models on BigQuery and cutting the scheduled refresh from 90 minutes to 35.",
    summary: "At Avanade, I worked on refactoring assigned pipeline components by replacing full refreshes with incremental dbt models on BigQuery, orchestrated in Airflow. Comparing scheduled end-to-end runs before and after the change, refresh time fell from 90 minutes to 35. The work was part of three years of client delivery spanning integrations, data pipelines, code review, and mentoring.",
    proof: "Scheduled end-to-end refresh duration fell from 90 to 35 minutes. Automated tests and staged CI/CD deployments also contributed to a 60% reduction in the delivery team's release rollbacks.",
    technologies: ["dbt", "BigQuery", "Airflow", "SQL", "CI/CD"],
    nodes: ["Client systems", "Refactored ETL", "Reporting tables", "90 → 35 min"],
    flow: "A redesigned ETL cut the client's reporting refresh from 90 minutes to 35.",
    note: "Confidential work case study. No client details or code are shown.",
    links: [{label: "Discuss the work", href: "#contact"}]
  }
};

const tracks = {
  all: {
    label: "All tracks",
    subheadline: "Three years shipping client software at Avanade (Accenture), then data and software engineering at Audax Group and Northeastern. Pipelines, APIs, streaming, and AI systems, each with the tests that prove it.",
    metrics: [
      ["40M rows", "migrated to Snowflake", "Audax Group, verified with 31 reconciliation checks"],
      ["90 → 35 min", "client ETL refresh", "Avanade (Accenture)"],
      ["40+", "integration tests in CI", "Cloud marketplace API on AWS"]
    ],
    order: ["audax", "cloudApi", "food", "orbit", "kafka", "avanade"],
    featured: "audax",
    group: null,
    note: "Showing range across data, software, cloud, AI/ML, and analytics."
  },
  data: {
    label: "Data",
    subheadline: "Pipelines, warehouses, and migrations, with reconciliation built in. Snowflake, dbt, Airflow, Spark, and Kafka.",
    metrics: [["40M rows", "migrated to Snowflake", "Audax Group"], ["90 → 35 min", "ETL refresh", "Avanade (Accenture)"], ["22 DAGs", "at 99% run success", "During the six-month Audax co-op"]],
    order: ["audax", "food", "kafka", "avanade", "cloudApi", "orbit"], featured: "audax", group: "data", note: "Data engineering evidence first: migrations, modeled data, streaming, and ETL."
  },
  software: {
    label: "Software",
    subheadline: "Backend services and APIs in Python, Go, and Java, tested against real databases and shipped through CI/CD.",
    metrics: [["40+", "integration tests in CI", "Cloud marketplace API"], ["3 years", "shipping client software", "Avanade (Accenture)"], ["25K users", "enterprise portal", "Built and supported"]],
    order: ["cloudApi", "kafka", "orbit", "avanade", "audax", "food"], featured: "cloudApi", group: "software", note: "Software evidence first: APIs, streaming services, agent systems, and client delivery."
  },
  cloud: {
    label: "Cloud & DevOps",
    subheadline: "Infrastructure as code, CI/CD, and containerized services on AWS and GCP. Terraform, Docker, Kubernetes, and GitHub Actions.",
    metrics: [["60%", "fewer release rollbacks", "Avanade delivery team"], ["40+", "integration tests gating every deploy", "Cloud marketplace API"], ["9 min", "incident detection (MTTD)", "Campus systems"]],
    order: ["cloudApi", "orbit", "kafka", "avanade", "audax", "food"], featured: "cloudApi", group: "cloud", note: "Cloud evidence first: infrastructure as code, CI/CD, containers, and operational signals."
  },
  ai: {
    label: "AI/ML",
    subheadline: "Agentic and retrieval systems with evaluation built in: LangGraph, Qdrant, MCP, and LLM-as-judge gating.",
    metrics: [["26,985", "embedded passages", "ORBIT"], ["50", "companies researched", "ORBIT"], ["40%", "fewer ungrounded answers", "Held-out RAG evaluation set"]],
    order: ["orbit", "cloudApi", "kafka", "food", "audax", "avanade"], featured: "orbit", group: "ai", note: "AI/ML evidence first: retrieval, multi-agent orchestration, and evaluation gates."
  },
  analytics: {
    label: "Analytics & BI",
    subheadline: "Models and dashboards people trust. dbt, Snowflake, Power BI, Tableau, and Alteryx, plus the checks behind the numbers.",
    metrics: [["400K+", "inspection records modeled", "Chicago + Dallas"], ["11K", "supplier records profiled", "Audax Group"], ["31", "reconciliation checks", "Snowflake migration"]],
    order: ["food", "audax", "avanade", "cloudApi", "kafka", "orbit"], featured: "food", group: "analytics", note: "Analytics evidence first: conformed models, parity checks, profiling, and decision-ready outputs."
  }
};

const escapeHTML = (value) => String(value).replace(/[&<>"]/g, (character) => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;"})[character]);
const withPlaceholders = (value) => escapeHTML(value);

let activeLens = "all";
let activeProject = "audax";

function renderMetrics(track) {
  document.getElementById("hero-metrics").innerHTML = track.metrics.map(([metric, label, footnote]) => `
    <div class="metric-item"><strong>${withPlaceholders(metric)}</strong><span>${withPlaceholders(label)}</span><small>${withPlaceholders(footnote)}</small></div>
  `).join("");
}

function renderFeatured(projectId) {
  activeProject = projectId;
  const project = projects[projectId];
  const links = (project.links || []).map((link) => `<a href="${escapeHTML(link.href)}"${link.href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : ""}>${escapeHTML(link.label)} ↗</a>`).join("");
  const checks = (project.linkChecks || []).map((item) => withPlaceholders(item)).join(" · ");
  document.getElementById("featured-case").innerHTML = `
    <header class="case-header">
      <div><p class="case-kicker">${escapeHTML(project.kicker)}</p><h3>${escapeHTML(project.title)}</h3>${project.attribution ? `<p class="case-attribution">${escapeHTML(project.attribution)}</p>` : ""}</div>
      <p>${withPlaceholders(project.card)}</p>
    </header>
    <div class="case-blocks">
      <section class="case-block"><span>What I built</span><h4>The system</h4><p>${withPlaceholders(project.card)}</p></section>
      <section class="case-block"><span>How it works</span><h4>Architecture and decisions</h4><p>${withPlaceholders(project.summary)}</p></section>
      <section class="case-block"><span>How I know it works</span><h4>Evidence</h4><p>${withPlaceholders(project.proof)}</p></section>
    </div>
    <div class="case-meta">
      <div><div class="tech-list">${project.technologies.map((tech) => `<span>${withPlaceholders(tech)}</span>`).join("")}</div>${project.note ? `<p class="case-note">${withPlaceholders(project.note)}</p>` : ""}</div>
      <div class="case-links">${links}${checks ? `<span>${checks}</span>` : ""}</div>
    </div>`;
  document.querySelectorAll(".evidence-path").forEach((button) => button.classList.toggle("is-active", button.dataset.project === projectId));
  updateVerificationCount();
}

function renderEvidence(order) {
  document.getElementById("evidence-grid").innerHTML = order.map((projectId) => {
    const project = projects[projectId];
    return `<button type="button" class="evidence-path${projectId === activeProject ? " is-active" : ""}" data-project="${projectId}"><span class="path-name">${escapeHTML(project.title)}</span>${project.nodes.map((node) => `<span class="path-node">${escapeHTML(node)}</span>`).join("")}</button>`;
  }).join("");
  document.querySelectorAll(".evidence-path").forEach((button) => button.addEventListener("click", () => openProject(button.dataset.project)));
}

function renderProjectGrid(order) {
  document.getElementById("project-grid").innerHTML = order.map((projectId) => {
    const project = projects[projectId];
    return `<article class="project-card" data-project="${projectId}"><div class="project-card-index"><span>${project.index}</span><span>${escapeHTML(project.tags[0])}</span></div><h3>${escapeHTML(project.title)}</h3>${project.attribution ? `<p class="case-attribution">${escapeHTML(project.attribution)}</p>` : ""}<p>${withPlaceholders(project.card)}</p><div class="project-tags">${project.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("")}</div><button type="button" class="open-case" data-project="${projectId}">Open case study ↗</button></article>`;
  }).join("");
  document.querySelectorAll(".open-case").forEach((button) => button.addEventListener("click", () => openProject(button.dataset.project)));
}

function openProject(projectId) {
  renderFeatured(projectId);
  document.getElementById("work").scrollIntoView({behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"});
}

function updateVerificationCount() {
  const unique = new Set(Array.from(document.querySelectorAll(".placeholder")).map((element) => element.textContent.trim()));
  document.getElementById("verification-count").textContent = unique.size;
}

function applyLens(lensId) {
  activeLens = lensId;
  const track = tracks[lensId];
  document.getElementById("hero-subheadline").textContent = track.subheadline;
  document.getElementById("active-track-label").textContent = track.label;
  document.getElementById("project-order-note").textContent = track.note;
  renderMetrics(track);
  renderEvidence(track.order);
  renderProjectGrid(track.order);
  renderFeatured(track.featured);
  document.querySelectorAll(".lens-button").forEach((button) => {
    const selected = button.dataset.lens === lensId;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  document.querySelectorAll(".capability-group").forEach((group) => group.classList.toggle("is-highlighted", Boolean(track.group) && group.dataset.group === track.group));
  updateVerificationCount();
}

document.querySelectorAll(".lens-button").forEach((button) => button.addEventListener("click", () => applyLens(button.dataset.lens)));

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("site-nav");
const closeNavigation = () => { navToggle.setAttribute("aria-expanded", "false"); siteNav.classList.remove("is-open"); };
navToggle.addEventListener("click", () => { const open = navToggle.getAttribute("aria-expanded") === "true"; navToggle.setAttribute("aria-expanded", String(!open)); siteNav.classList.toggle("is-open", !open); });
siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeNavigation(); });

const systemScene = document.getElementById("system-scene");
const sceneRig = systemScene?.querySelector(".scene-rig");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (systemScene && sceneRig && !reduceMotion.matches) {
  const setSceneAngle = (x, y) => {
    sceneRig.style.setProperty("--scene-x", `${x.toFixed(2)}deg`);
    sceneRig.style.setProperty("--scene-y", `${y.toFixed(2)}deg`);
  };
  systemScene.addEventListener("pointermove", (event) => {
    const bounds = systemScene.getBoundingClientRect();
    const x = ((event.clientY - bounds.top) / bounds.height - .5) * -13;
    const y = ((event.clientX - bounds.left) / bounds.width - .5) * 18;
    setSceneAngle(x, y);
  });
  systemScene.addEventListener("pointerleave", () => setSceneAngle(-5, 7));
}

document.getElementById("year").textContent = new Date().getFullYear();
applyLens(activeLens);
