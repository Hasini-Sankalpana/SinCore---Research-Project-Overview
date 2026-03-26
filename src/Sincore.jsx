import { useMemo, useState } from "react";
import projectLogo from "./Assets/SinCore logo.png";
import teamHasini from "./Assets/Team member - Hasini Sankalpana.jpeg";
import teamNimeth from "./Assets/Team member - Nimeth Indunu.jpeg";
import teamPasindu from "./Assets/Team member - Pasindu Dilshan.jpeg";
import supervisorImg from "./Assets/Supervisor.jpeg";
import coSupervisorImg from "./Assets/External Supervisor.jpeg";
import {
  Database,
  Search,
  Languages,
  Brain,
  FileText,
  BarChart3,
  FlaskConical,
  Network,
  ShieldCheck,
  GraduationCap,
  Users,
  ChevronRight,
  CheckCircle2,
  CircleDot,
  Layers3,
  Workflow,
  Boxes,
  Sparkles,
  Scale,
  Target,
  BookOpen,
  Wrench,
  ArrowRight,
  GitBranch,
  Server,
  MessageSquareText,
} from "lucide-react";

const navItems = [
  "Home",
  "Overview",
  "Problem",
  "Objectives",
  "Research Gap",
  "Contributions",
  "Literature",
  "Architecture",
  "Pipeline",
  "Methodology",
  "Evaluation",
  "Results",
  "Discussion",
  "Limitations",
  "Future Work",
  "Technologies",
  "Team",
];

const heroStats = [
  { label: "Primary Focus", value: "Sinhala Native-Script RAG" },
  { label: "Core Retrieval", value: "Hybrid BM25 + Dense Search" },
  { label: "Language Handling", value: "Morphology-Aware Processing" },
  { label: "Outcome Goal", value: "Grounded Sinhala Answers" },
];

const problemPoints = [
  "Most modern NLP systems are optimized for high-resource languages, leaving Sinhala underrepresented in retrieval and generation research.",
  "Existing Sinhala workflows often depend on transliteration, multilingual transfer, or code-mixed processing instead of preserving native-script fidelity.",
  "Sinhala morphology creates variation in word forms, making exact lexical matching and semantic representation more difficult.",
  "Low availability of standardized, domain-diverse corpora makes benchmarking, reproducibility, and fair comparison harder.",
  "Generative models can produce fluent but unsupported answers unless responses are grounded in retrieved evidence.",
];

const objectives = {
  main: "Build a native-script Retrieval-Augmented Generation framework for Sinhala that improves retrieval quality, contextual grounding, and answer reliability in low-resource settings.",
  specific: [
    "Curate and preprocess a domain-diverse Sinhala corpus from public information sources.",
    "Design morphology-aware text representations that better handle inflectional variation.",
    "Develop a hybrid retrieval system that combines lexical precision and semantic similarity.",
    "Integrate retrieval outputs with a Sinhala-capable language model for evidence-grounded generation.",
    "Establish an evaluation workflow for embeddings, retrieval, and end-to-end generation quality.",
  ],
};

const gaps = [
  {
    title: "Native-Script Processing Gap",
    text: "Many existing approaches adapt Sinhala through transliteration or multilingual fallback instead of treating native-script Sinhala as a first-class input.",
  },
  {
    title: "Morphology-Aware Modeling Gap",
    text: "Morphological variation is not adequately represented in generic multilingual pipelines, reducing retrieval alignment across related word forms.",
  },
  {
    title: "Corpus and Benchmarking Gap",
    text: "Sinhala datasets are often fragmented, domain-limited, and not structured for consistent retrieval and RAG evaluation.",
  },
  {
    title: "Grounding and Factuality Gap",
    text: "Without evidence-grounded generation, Sinhala QA systems remain vulnerable to hallucination and unsupported responses.",
  },
];

const contributions = [
  "A fully native-script Sinhala research workflow instead of a transliteration-first design.",
  "A morphology-aware retrieval representation using segmented, stemmed, and token-level features.",
  "A hybrid retrieval architecture combining BM25-based lexical matching with dense vector search.",
  "A structured corpus and question-answer evaluation setup to support measurable benchmarking.",
  "A grounded response generation workflow where retrieved chunks are assembled into evidence context before answer generation.",
  "An end-to-end research framework that connects data preparation, indexing, retrieval, and generation in one pipeline.",
];

const literatureAreas = [
  "Low-resource NLP and language inequality",
  "Corpus development and data curation for underrepresented languages",
  "Script-aware preprocessing and tokenization",
  "Morphology-aware embedding and representation learning",
  "Retrieval-Augmented Generation in low-resource settings",
  "Fact grounding, hallucination reduction, and RAG evaluation",
];

const architectureBlocks = [
  {
    title: "Data Sources",
    icon: Database,
    text: "Sinhala-native public information sources collected into a structured research corpus.",
  },
  {
    title: "Preprocessing Layer",
    icon: FileText,
    text: "Cleaning, normalization, field organization, and preparation of self-contained text units.",
  },
  {
    title: "Morphology Layer",
    icon: Languages,
    text: "Segmented, stemmed, and token-level representations for Sinhala text.",
  },
  {
    title: "Embedding Layer",
    icon: Brain,
    text: "Sentence-level vector representations generated for semantic retrieval.",
  },
  {
    title: "Lexical Index",
    icon: Search,
    text: "BM25-based retrieval for exact and term-sensitive matching.",
  },
  {
    title: "Vector Index",
    icon: Boxes,
    text: "Dense retrieval over embedded Sinhala text for semantic similarity search.",
  },
  {
    title: "Fusion & Ranking",
    icon: Scale,
    text: "Weighted combination of lexical and dense retrieval signals.",
  },
  {
    title: "Generation Layer",
    icon: MessageSquareText,
    text: "Retrieved evidence is assembled into context and passed to the answering model.",
  },
];

const offlinePipeline = [
  "Source identification and data acquisition",
  "JSON/JSONL dataset organization",
  "Cleaning and normalization of Sinhala text",
  "Construction of self-contained text fields",
  "Chunk preparation where needed",
  "Morphological processing and linguistic enrichment",
  "Embedding generation for semantic search",
  "BM25 lexical indexing",
  "Vector indexing and metadata storage",
  "Preparation of QA and evaluation resources",
];

const onlinePipeline = [
  "User submits a Sinhala query",
  "Query cleaning and preprocessing",
  "Morphology-aware query representation",
  "Query embedding generation",
  "Lexical retrieval over BM25 indexes",
  "Dense retrieval over vector index",
  "Score fusion and ranking",
  "Top relevant chunks selected as evidence",
  "Context assembly for answering",
  "Grounded Sinhala response generation",
];

const methodologySections = [
  {
    title: "Research Design",
    points: [
      "Iterative design and experimentation process",
      "System development combined with empirical evaluation",
      "Comparative testing across baseline and enhanced configurations",
    ],
  },
  {
    title: "Data Collection & Preparation",
    points: [
      "Selection of reliable Sinhala information sources",
      "Structured extraction into machine-readable format",
      "Cleaning, normalization, and text field construction",
      "Preparation of retrieval-ready document units",
    ],
  },
  {
    title: "Morphological Processing",
    points: [
      "Represent Sinhala text beyond surface forms only",
      "Support segmented and stemmed views of the same content",
      "Capture token-level features useful for retrieval",
    ],
  },
  {
    title: "Embedding Strategy",
    points: [
      "Evaluate candidate embedding models for Sinhala retrieval",
      "Fine-tune selected embeddings on QA-style relevance data",
      "Use vector representations for semantic similarity search",
    ],
  },
  {
    title: "Retrieval Design",
    points: [
      "Lexical retrieval for exact and term-sensitive matching",
      "Dense retrieval for semantic similarity",
      "Hybrid fusion to combine strengths of both modes",
      "Experiment with retrieval weights and ranking behavior",
    ],
  },
  {
    title: "Generation Workflow",
    points: [
      "Build answer context from the top retrieved chunks",
      "Use controlled prompting to keep answers grounded",
      "Generate concise Sinhala responses based on supplied evidence",
    ],
  },
];

const evaluationSections = [
  {
    title: "Embedding Models Evaluation",
    metrics: [
      "Base model comparison",
      "Fine-tuned model comparison",
      "Recall@10",
      "nDCG",
      "MRR",
      "Mean Rank",
    ],
    text: "Multiple embedding models are evaluated before and after fine-tuning to identify the most suitable model for the Sinhala retrieval pipeline.",
  },
  {
    title: "Generation Evaluation",
    metrics: ["Exact Match", "Token F1", "BLEU", "Grounding review"],
    text: "Ongoing...",
  },
];

const resultCards = [
  {
    title: "Embedding Stage",
    text: "Embedding experiments are used to compare baseline and fine-tuned models for Sinhala retrieval-oriented representation quality.",
  },
  {
    title: "Retrieval Stage",
    text: "Hybrid retrieval is analyzed against lexical-only and semantic-only settings to identify the strongest balance of precision and recall.",
  },
  {
    title: "Morphology Stage",
    text: "Morphology-aware processing is compared against non-morphology baselines to measure its contribution to relevance matching.",
  },
  {
    title: "Generation Stage",
    text: "The response generation workflow is reviewed to determine how well retrieved context improves answer faithfulness and clarity.",
  },
];

const discussionPoints = [
  "Hybrid retrieval is valuable because lexical matching and semantic similarity solve different retrieval weaknesses.",
  "Morphology-aware processing helps especially when Sinhala word forms vary but still refer to the same core meaning.",
  "Good retrieval quality is a prerequisite for grounded generation; generation quality depends on context quality.",
  "System design must balance research ambition with practical constraints such as compute cost, model size, and deployment feasibility.",
];

const limitations = [
  "Corpus size and diversity can still be expanded further.",
  "Morphological processing quality depends on tool reliability and coverage of real-world Sinhala variation.",
  "Generation performance is limited by the size, training quality, and serving constraints of the selected language model.",
  "Evaluation in low-resource settings is challenging because benchmark data and human review protocols are still limited.",
  "Production deployment considerations such as latency, scale, and continuous updates are beyond the current research scope.",
];

const futureWork = [
  "Expand corpus coverage to additional domains and richer document types.",
  "Improve morphology analysis with stronger Sinhala-specific tools and validation.",
  "Introduce reranking or stronger post-retrieval filtering for better chunk selection.",
  "Use larger or more capable answer generation models when infrastructure allows.",
  "Strengthen human evaluation with clearer factuality, fluency, and cultural grounding criteria.",
  "Extend the framework into a more production-ready public-facing system.",
];

const technologies = [
  "Python",
  "FastAPI",
  "PyTorch",
  "Sentence Transformers",
  "BM25",
  "Pinecone",
  "LLM Models",
  "Evaluation Pipelines",
];

const technologyIcons = {
  Python: "https://cdn.simpleicons.org/python/3776AB",
  FastAPI: "https://cdn.simpleicons.org/fastapi/009688",
  PyTorch: "https://cdn.simpleicons.org/pytorch/EE4C2C",
  "Sentence Transformers": "https://cdn.simpleicons.org/huggingface/FFD21E",
  BM25: "https://cdn.simpleicons.org/elasticsearch/005571",
  "Pinecone / Vector Search": "https://cdn.simpleicons.org/pinecone/14B8A6",
  "JSON / JSONL": "https://cdn.simpleicons.org/json/FFFFFF",
  "YAML Configuration": "https://cdn.simpleicons.org/yaml/CB171E",
  "LLM Integration": "https://cdn.simpleicons.org/openai/FFFFFF",
  "Evaluation Pipelines": "https://cdn.simpleicons.org/pytest/0A9EDC",
};

const team = [
  {
    name: "Hasini Sankalpana De Silva",
    role: "Research Student",
    focus:
      "Retrieval, morphology-aware processing, evaluation, and system integration",
  },
  {
    name: "Nimeth Indunu Dasanayake",
    role: "Research Student",
    focus: "Research implementation and project development",
  },
  {
    name: "Pasindu Dilshan Dasanayake",
    role: "Research Student",
    focus: "Research implementation and project development",
  },
  {
    name: "Dr. Nalaka Lankasena",
    role: "Internal Supervisor",
    focus: "Academic guidance and research supervision",
  },
  {
    name: "Dr. Iroshan Aberathne",
    role: "Co-Supervisor",
    focus: "Technical guidance and industry-oriented direction",
  },
];

function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="scroll-mt-24 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
              {description}
            </p>
          )}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/20 ${className}`}
    >
      {children}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3 text-slate-200">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
          <p className="leading-7 text-slate-300">{item}</p>
        </div>
      ))}
    </div>
  );
}

export default function SinhalaRagResearchWebsiteFull() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const quickLinks = useMemo(
    () => [
      { label: "Explore Architecture", href: "#architecture" },
      { label: "See Evaluation", href: "#evaluation" },
      { label: "View Results", href: "#results" },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_26%),linear-gradient(to_bottom,rgba(15,23,42,1),rgba(2,6,23,1))]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={projectLogo}
              alt="SinCore logo"
              className="h-14 w-14 object-contain"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Research Website
              </p>
              <h1 className="text-base font-bold text-white md:text-lg">
                SinCore
              </h1>
            </div>
          </a>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-slate-950/95">
            <div className="mx-auto grid max-w-7xl gap-3 px-6 py-4 sm:grid-cols-2 lg:grid-cols-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="px-6 pb-14 pt-16 md:pb-20 md:pt-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-200">
                <Sparkles className="h-4 w-4" />
                Low-Resource Language Research
              </div>
              <h2 className="mt-6 max-w-5xl text-4xl font-black leading-tight text-white md:text-6xl">
                Native-Script Sinhala Retrieval-Augmented Generation Framework
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                This research explores how morphology-aware processing, hybrid
                retrieval, and grounded generation can be combined to build a
                more reliable Sinhala question-answering workflow for
                low-resource language settings.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#overview"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  Explore Research
                </a>
                <a
                  href="#architecture"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
                >
                  View Architecture
                </a>
                <a
                  href="#results"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
                >
                  View Results
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {heroStats.map((stat) => (
                <Card key={stat.label}>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">
                    {stat.value}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Section
          id="overview"
          eyebrow="Project Overview"
          title="Why this research matters"
          description="Sinhala remains underrepresented in modern retrieval and generation systems despite being widely used by native speakers. This research focuses on preserving native-script fidelity, improving retrieval quality, and reducing unsupported answers through a grounded RAG workflow."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-cyan-300" />
                <h3 className="text-xl font-semibold text-white">
                  Research Focus
                </h3>
              </div>
              <p className="mt-4 leading-7 text-slate-300">
                The project is centered on a Sinhala-first retrieval and
                answering pipeline that treats the language as a native-script
                research target rather than adapting it only through
                multilingual shortcuts.
              </p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-cyan-300" />
                <h3 className="text-xl font-semibold text-white">Core Goal</h3>
              </div>
              <p className="mt-4 leading-7 text-slate-300">
                Improve answer reliability by grounding generated responses in
                retrieved Sinhala evidence instead of depending only on what a
                model memorized during pretraining.
              </p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-cyan-300" />
                <h3 className="text-xl font-semibold text-white">
                  Research Value
                </h3>
              </div>
              <p className="mt-4 leading-7 text-slate-300">
                The framework aims to contribute to low-resource NLP by
                connecting corpus development, morphology-aware processing,
                retrieval design, and response grounding in one system.
              </p>
            </Card>
          </div>
        </Section>

        <Section
          id="problem"
          eyebrow="Research Problem"
          title="What challenge is being addressed"
          description="The project addresses the combined difficulty of low-resource Sinhala processing, morphological complexity, weak benchmarking resources, and unreliable generation without grounding."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {problemPoints.map((item) => (
              <Card key={item} className="h-full">
                <div className="flex items-start gap-3">
                  <CircleDot className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="leading-7 text-slate-300">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="objectives"
          eyebrow="Objectives"
          title="What the research aims to achieve"
          description="The study combines system development and evaluation to create a Sinhala-native framework that is technically meaningful and measurable."
        >
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <Card>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Main Objective
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                {objectives.main}
              </p>
            </Card>
            <Card>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Specific Objectives
              </p>
              <div className="mt-5 space-y-4">
                {objectives.specific.map((item, idx) => (
                  <div key={item} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-bold text-cyan-200">
                      {idx + 1}
                    </div>
                    <p className="leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        <Section
          id="research-gap"
          eyebrow="Research Gap"
          title="Where current approaches still fall short"
          description="The research is motivated by multiple connected gaps rather than a single missing feature."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {gaps.map((gap) => (
              <Card key={gap.title}>
                <h3 className="text-xl font-semibold text-white">
                  {gap.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">{gap.text}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="contributions"
          eyebrow="Research Contributions"
          title="What this project contributes"
          description="The work contributes a connected Sinhala research workflow that links representation, retrieval, grounding, and evaluation."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {contributions.map((item) => (
              <Card key={item}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="leading-7 text-slate-300">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="literature"
          eyebrow="Literature Foundation"
          title="Key areas studied before building the system"
          description="The project is informed by prior work in low-resource NLP, morphology-aware modeling, RAG systems, and evaluation methodology."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {literatureAreas.map((area) => (
              <Card key={area} className="h-full">
                <div className="flex items-start gap-3">
                  <BookOpen className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="leading-7 text-slate-300">{area}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="architecture"
          eyebrow="System Architecture"
          title="High-level view of the framework"
          description="The architecture combines data preparation, text processing, retrieval infrastructure, and evidence-grounded answer generation."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {architectureBlocks.map((block, idx) => {
              const Icon = block.icon;
              return (
                <Card key={block.title}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mb-3 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    Step {idx + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {block.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-300">{block.text}</p>
                </Card>
              );
            })}
          </div>
        </Section>

        <Section
          id="pipeline"
          eyebrow="Workflow Pipelines"
          title="Offline preparation and online answering flow"
          description="Separating preparation-time and query-time operations makes the overall research design easier to understand."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <div className="flex items-center gap-3">
                <Workflow className="h-6 w-6 text-cyan-300" />
                <h3 className="text-xl font-semibold text-white">
                  Knowledge Preparation Layer
                </h3>
              </div>
              <div className="mt-6 space-y-3">
                {offlinePipeline.map((step, idx) => (
                  <div
                    key={step}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-bold text-cyan-200">
                      {idx + 1}
                    </div>
                    <p className="leading-7 text-slate-300">{step}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <div className="flex items-center gap-3">
                <GitBranch className="h-6 w-6 text-cyan-300" />
                <h3 className="text-xl font-semibold text-white">
                  Query Processing Layer
                </h3>
              </div>
              <div className="mt-6 space-y-3">
                {onlinePipeline.map((step, idx) => (
                  <div
                    key={step}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-bold text-cyan-200">
                      {idx + 1}
                    </div>
                    <p className="leading-7 text-slate-300">{step}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        <Section
          id="methodology"
          eyebrow="Methodology"
          title="How the research is carried out"
          description="The methodology is structured to cover both system construction and performance validation."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {methodologySections.map((section) => (
              <Card key={section.title}>
                <h3 className="text-xl font-semibold text-white">
                  {section.title}
                </h3>
                <div className="mt-5">
                  <BulletList items={section.points} />
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="evaluation"
          eyebrow="Evaluation Framework"
          title="How system quality is measured"
          description="The project does not evaluate only final answers. It separately examines embeddings, retrieval, morphology-aware improvements, and end-to-end generation behavior."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {evaluationSections.slice(1).map((section) => (
              <Card key={section.title}>
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-cyan-300" />
                  <h3 className="text-xl font-semibold text-white">
                    {section.title}
                  </h3>
                </div>
                <p className="mt-4 leading-7 text-slate-300">{section.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {section.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1.5 text-sm text-cyan-100"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </Card>
            ))}

            <Card className="lg:col-span-2 overflow-hidden border-cyan-400/20 bg-gradient-to-br from-slate-900/95 to-slate-950/95 p-0">
              <div className="border-b border-white/10 bg-white/5 px-6 py-5">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                      Model Comparison
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      Embedding Models Evaluation
                    </h3>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                      Multiple candidate embedding models were evaluated in
                      their base form and again after fine-tuning to select the
                      strongest model for semantic retrieval.
                    </p>
                  </div>
                  <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
                    Selected Model: mMiniLM
                  </div>
                </div>
              </div>

              <div className="grid gap-6 p-6 lg:grid-cols-2">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
                  <div className="border-b border-white/10 bg-cyan-400/10 px-5 py-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      Base Models
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[520px] text-left text-sm text-slate-300">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/[0.03] text-slate-200">
                          <th className="px-5 py-4 font-semibold">Model</th>
                          <th className="px-4 py-4 font-semibold">Recall@10</th>
                          <th className="px-4 py-4 font-semibold">nDCG</th>
                          <th className="px-4 py-4 font-semibold">MRR</th>
                          <th className="px-4 py-4 font-semibold">Mean Rank</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/5 transition hover:bg-white/[0.04]">
                          <td className="px-5 py-4 font-medium text-white">
                            SinBERT
                          </td>
                          <td className="px-4 py-4">0.170</td>
                          <td className="px-4 py-4">0.111</td>
                          <td className="px-4 py-4">0.093</td>
                          <td className="px-4 py-4">676.6</td>
                        </tr>
                        <tr className="border-b border-white/5 transition hover:bg-white/[0.04]">
                          <td className="px-5 py-4 font-medium text-white">
                            mMiniLM
                          </td>
                          <td className="px-4 py-4">0.046</td>
                          <td className="px-4 py-4">0.029</td>
                          <td className="px-4 py-4">0.023</td>
                          <td className="px-4 py-4">1236.1</td>
                        </tr>
                        <tr className="transition hover:bg-white/[0.04]">
                          <td className="px-5 py-4 font-medium text-white">
                            mBERT
                          </td>
                          <td className="px-4 py-4">0.022</td>
                          <td className="px-4 py-4">0.009</td>
                          <td className="px-4 py-4">0.005</td>
                          <td className="px-4 py-4">1012.2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.06]">
                  <div className="border-b border-emerald-400/15 bg-emerald-400/10 px-5 py-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
                      Fine-Tuned Models
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[520px] text-left text-sm text-slate-200">
                      <thead>
                        <tr className="border-b border-emerald-400/10 bg-white/[0.03]">
                          <th className="px-5 py-4 font-semibold">Model</th>
                          <th className="px-4 py-4 font-semibold">Recall@10</th>
                          <th className="px-4 py-4 font-semibold">nDCG</th>
                          <th className="px-4 py-4 font-semibold">MRR</th>
                          <th className="px-4 py-4 font-semibold">Mean Rank</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/5 transition hover:bg-white/[0.05]">
                          <td className="px-5 py-4 font-medium text-white">
                            SinBERT
                          </td>
                          <td className="px-4 py-4">0.557</td>
                          <td className="px-4 py-4">0.475</td>
                          <td className="px-4 py-4">0.412</td>
                          <td className="px-4 py-4">35.6</td>
                        </tr>
                        <tr className="border-b border-white/5 bg-emerald-400/[0.08] transition hover:bg-emerald-400/[0.12]">
                          <td className="px-5 py-4 font-semibold text-white">
                            mMiniLM
                          </td>
                          <td className="px-4 py-4 font-semibold text-emerald-100">
                            0.788
                          </td>
                          <td className="px-4 py-4 font-semibold text-emerald-100">
                            0.682
                          </td>
                          <td className="px-4 py-4 font-semibold text-emerald-100">
                            0.631
                          </td>
                          <td className="px-4 py-4 font-semibold text-emerald-100">
                            12.9
                          </td>
                        </tr>
                        <tr className="transition hover:bg-white/[0.05]">
                          <td className="px-5 py-4 font-medium text-white">
                            mBERT
                          </td>
                          <td className="px-4 py-4">0.128</td>
                          <td className="px-4 py-4">0.106</td>
                          <td className="px-4 py-4">0.086</td>
                          <td className="px-4 py-4">448.5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 px-6 py-6">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                  Key Insight
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300 md:col-span-2 xl:col-span-2">
                    Fine-tuning improved every model across recall, ranking, and
                    relevance metrics, showing that task-specific adaptation was
                    important for Sinhala retrieval.
                  </div>
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100">
                    mMiniLM achieved the highest Recall@10.
                  </div>
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100">
                    mMiniLM also achieved the strongest nDCG and MRR.
                  </div>
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm leading-6 text-emerald-100">
                    It produced the lowest Mean Rank, so it was selected as the
                    final embedding model.
                  </div>
                </div>
              </div>
            </Card>
            <Card className="lg:col-span-2 overflow-hidden border-blue-400/20 bg-gradient-to-br from-slate-900/95 to-slate-950/95 p-0">
              <div className="border-b border-white/10 bg-white/5 px-6 py-5">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                      Method Comparison
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      Retrieval Evaluation
                    </h3>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                      Lexical, semantic, and hybrid retrieval methods were
                      evaluated to identify the most effective strategy for
                      retrieving relevant Sinhala content.
                    </p>
                  </div>
                  <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
                    Best Method: Hybrid
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="overflow-hidden rounded-3xl border border-blue-400/20 bg-blue-400/[0.05]">
                  <div className="border-b border-blue-400/15 bg-blue-400/10 px-5 py-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                      Retrieval Performance Comparison
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left text-sm text-slate-200">
                      <thead>
                        <tr className="border-b border-blue-400/10 bg-white/[0.03]">
                          <th className="px-5 py-4 font-semibold">
                            Retrieval Method
                          </th>
                          <th className="px-4 py-4 font-semibold">Recall@1</th>
                          <th className="px-4 py-4 font-semibold">Recall@3</th>
                          <th className="px-4 py-4 font-semibold">Recall@5</th>
                          <th className="px-4 py-4 font-semibold">MRR</th>
                          <th className="px-4 py-4 font-semibold">
                            Precision@5
                          </th>
                          <th className="px-4 py-4 font-semibold">
                            Coverage@5
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/5 transition hover:bg-white/[0.05]">
                          <td className="px-5 py-4 font-medium text-white">
                            BM25 (Lexical)
                          </td>
                          <td className="px-4 py-4">0.19</td>
                          <td className="px-4 py-4">0.40</td>
                          <td className="px-4 py-4">0.50</td>
                          <td className="px-4 py-4">0.297</td>
                          <td className="px-4 py-4">0.13</td>
                          <td className="px-4 py-4">0.31</td>
                        </tr>
                        <tr className="border-b border-white/5 transition hover:bg-white/[0.05]">
                          <td className="px-5 py-4 font-medium text-white">
                            Vector (Semantic)
                          </td>
                          <td className="px-4 py-4">0.28</td>
                          <td className="px-4 py-4">0.52</td>
                          <td className="px-4 py-4">0.60</td>
                          <td className="px-4 py-4">0.406</td>
                          <td className="px-4 py-4">0.176</td>
                          <td className="px-4 py-4">0.415</td>
                        </tr>
                        <tr className="bg-blue-400/[0.08] transition hover:bg-blue-400/[0.12]">
                          <td className="px-5 py-4 font-semibold text-white">
                            Hybrid
                          </td>
                          <td className="px-4 py-4 font-semibold text-blue-100">
                            0.32
                          </td>
                          <td className="px-4 py-4 font-semibold text-blue-100">
                            0.58
                          </td>
                          <td className="px-4 py-4 font-semibold text-blue-100">
                            0.66
                          </td>
                          <td className="px-4 py-4 font-semibold text-blue-100">
                            0.452
                          </td>
                          <td className="px-4 py-4 font-semibold text-blue-100">
                            0.19
                          </td>
                          <td className="px-4 py-4 font-semibold text-blue-100">
                            0.449
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 px-6 py-6">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                  Key Insight
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300 xl:col-span-2">
                    Hybrid retrieval achieved the strongest overall performance,
                    showing that combining lexical precision with semantic
                    similarity produced more reliable retrieval than either
                    method alone.
                  </div>
                  <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-4 text-sm leading-6 text-blue-100">
                    Hybrid produced the highest Recall@1, Recall@3, and
                    Recall@5.
                  </div>
                  <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-4 text-sm leading-6 text-blue-100">
                    It also achieved the best MRR, Precision@5, and Coverage@5,
                    making it the final retrieval strategy.
                  </div>
                </div>
              </div>
            </Card>
            {/* Morphology Comparison */}
            <Card className="lg:col-span-2 overflow-hidden border-violet-400/20 bg-gradient-to-br from-slate-900/95 to-slate-950/95 p-0">
              <div className="border-b border-white/10 bg-white/5 px-6 py-5">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                      System Comparison
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      Morphology Comparison
                    </h3>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                      Retrieval performance was compared between the
                      non-morphology baseline and the morphology-aware system
                      across lexical, semantic, and hybrid retrieval modes.
                    </p>
                  </div>
                  <div className="inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-200">
                    Better System: Morph
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="overflow-hidden rounded-3xl border border-violet-400/20 bg-violet-400/[0.05]">
                  <div className="border-b border-violet-400/15 bg-violet-400/10 px-5 py-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
                      Morphology-Aware vs Non-Morphology Comparison
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px] text-left text-sm text-slate-200">
                      <thead>
                        <tr className="border-b border-violet-400/10 bg-white/[0.03]">
                          <th className="px-5 py-4 font-semibold">
                            System Type
                          </th>
                          <th className="px-4 py-4 font-semibold">
                            Retrieval Mode
                          </th>
                          <th className="px-4 py-4 font-semibold">Recall@1</th>
                          <th className="px-4 py-4 font-semibold">Recall@3</th>
                          <th className="px-4 py-4 font-semibold">Recall@5</th>
                          <th className="px-4 py-4 font-semibold">MRR</th>
                          <th className="px-4 py-4 font-semibold">
                            Precision@5
                          </th>
                          <th className="px-4 py-4 font-semibold">
                            Coverage@5
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/5 transition hover:bg-white/[0.05]">
                          <td className="px-5 py-4 font-medium text-white">
                            Non-Morph
                          </td>
                          <td className="px-4 py-4">Lexical</td>
                          <td className="px-4 py-4">0.13</td>
                          <td className="px-4 py-4">0.33</td>
                          <td className="px-4 py-4">0.43</td>
                          <td className="px-4 py-4">0.23</td>
                          <td className="px-4 py-4">0.10</td>
                          <td className="px-4 py-4">0.26</td>
                        </tr>
                        <tr className="border-b border-white/5 transition hover:bg-white/[0.05]">
                          <td className="px-5 py-4 font-medium text-white">
                            Non-Morph
                          </td>
                          <td className="px-4 py-4">Semantic</td>
                          <td className="px-4 py-4">0.26</td>
                          <td className="px-4 py-4">0.50</td>
                          <td className="px-4 py-4">0.58</td>
                          <td className="px-4 py-4">0.39</td>
                          <td className="px-4 py-4">0.17</td>
                          <td className="px-4 py-4">0.40</td>
                        </tr>
                        <tr className="border-b border-white/10 transition hover:bg-white/[0.05]">
                          <td className="px-5 py-4 font-medium text-white">
                            Non-Morph
                          </td>
                          <td className="px-4 py-4">Hybrid</td>
                          <td className="px-4 py-4">0.27</td>
                          <td className="px-4 py-4">0.51</td>
                          <td className="px-4 py-4">0.59</td>
                          <td className="px-4 py-4">0.40</td>
                          <td className="px-4 py-4">0.175</td>
                          <td className="px-4 py-4">0.41</td>
                        </tr>

                        <tr>
                          <td colSpan={8} className="px-5 py-2">
                            <div className="my-1 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
                          </td>
                        </tr>

                        <tr className="border-b border-white/5 bg-violet-400/[0.06] transition hover:bg-violet-400/[0.1]">
                          <td className="px-5 py-4 font-semibold text-white">
                            Morph
                          </td>
                          <td className="px-4 py-4 font-medium text-violet-100">
                            Lexical
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            0.19
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            0.40
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            0.50
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            0.297
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            0.13
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            0.31
                          </td>
                        </tr>
                        <tr className="border-b border-white/5 bg-violet-400/[0.06] transition hover:bg-violet-400/[0.1]">
                          <td className="px-5 py-4 font-semibold text-white">
                            Morph
                          </td>
                          <td className="px-4 py-4 font-medium text-violet-100">
                            Semantic
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            0.28
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            0.52
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            0.60
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            0.406
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            0.176
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            0.415
                          </td>
                        </tr>
                        <tr className="bg-violet-400/[0.12] transition hover:bg-violet-400/[0.16]">
                          <td className="px-5 py-4 font-semibold text-white">
                            Morph
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            Hybrid
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            0.32
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            0.58
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            0.66
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            0.452
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            0.19
                          </td>
                          <td className="px-4 py-4 font-semibold text-violet-100">
                            0.449
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 px-6 py-6">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                  Key Insight
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300 xl:col-span-2">
                    The morphology-aware system outperformed the non-morphology
                    baseline across all retrieval modes, showing that explicit
                    handling of Sinhala word variation improved retrieval
                    effectiveness.
                  </div>
                  <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-4 text-sm leading-6 text-violet-100">
                    The biggest gains appear in lexical retrieval, where
                    morphology-aware processing improves exact-term matching and
                    ranking.
                  </div>
                  <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-4 text-sm leading-6 text-violet-100">
                    The morphology-aware hybrid setting achieved the strongest
                    overall result, making it the best-performing configuration
                    in the comparison.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        <Section
          id="results"
          eyebrow="Results Structure"
          title="What the research reports and compares"
          description="This website section is designed to show the categories of outcomes clearly, without turning the page into long thesis-style paragraphs."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {resultCards.map((card) => (
              <Card key={card.title} className="h-full">
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">{card.text}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <Card>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Comparison View
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                Baseline vs Improved System
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                Show comparisons between non-morphology and morphology-aware
                retrieval, as well as lexical, semantic, and hybrid modes.
              </p>
            </Card>
            <Card>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Metric View
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                Retrieval and Generation Metrics
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                Highlight the most meaningful metrics visually so viewers can
                understand system quality without reading dense analysis
                sections.
              </p>
            </Card>
            <Card>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Interpretation View
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                Key Findings
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                Summarize what improved, where the system still struggles, and
                why the research design choices matter for Sinhala NLP.
              </p>
            </Card>
          </div>
        </Section>

        <Section
          id="discussion"
          eyebrow="Discussion"
          title="What the findings suggest"
          description="The discussion connects technical observations with the bigger low-resource language problem the project is trying to solve."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {discussionPoints.map((point) => (
              <Card key={point}>
                <div className="flex items-start gap-3">
                  <FlaskConical className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="leading-7 text-slate-300">{point}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="limitations"
          eyebrow="Limitations"
          title="What remains constrained in the current research stage"
          description="A strong research website should also communicate the boundaries of the current work clearly and honestly."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {limitations.map((item) => (
              <Card key={item}>
                <div className="flex items-start gap-3">
                  <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="leading-7 text-slate-300">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="future-work"
          eyebrow="Future Work"
          title="How the project can be extended"
          description="The current framework opens several paths for stronger retrieval, improved generation, and broader real-world use."
        >
          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {futureWork.map((item) => (
              <Card key={item} className="h-full">
                <div className="flex items-start gap-3">
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="leading-7 text-slate-300">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="technologies"
          eyebrow="Technologies"
          title="Core tools, models, and infrastructure"
          description="The implementation combines retrieval, modeling, API serving, data processing, and experiment support tools."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {technologies.map((tech) => (
              <Card
                key={tech}
                className="flex min-h-[120px] items-center justify-center text-center"
              >
                <div>
                  {technologyIcons[tech] ? (
                    <img
                      src={technologyIcons[tech]}
                      alt=""
                      className="mx-auto h-6 w-6"
                      loading="lazy"
                    />
                  ) : (
                    <Wrench className="mx-auto h-6 w-6 text-cyan-300" />
                  )}
                  <p className="mt-3 font-medium text-slate-200">{tech}</p>
                </div>
              </Card>
            ))}
          </div>
        </Section>
        <section id="team" className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Team & Academic Details
          </p>
          <h3 className="mt-3 text-3xl font-bold text-white">
            Project information
          </h3>
          <div className="mt-8 space-y-10">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Team Members
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
                  <img
                    src={teamHasini}
                    alt="De Silva G.H.S."
                    className="mx-auto h-32 w-32 rounded-full object-cover ring-2 ring-cyan-400/30"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    De Silva G.H.S.
                  </p>
                  <p className="text-sm text-slate-400">ICT/21/823</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
                  <img
                    src={teamNimeth}
                    alt="Dasanayake D.A.N.I."
                    className="mx-auto h-32 w-32 rounded-full object-cover object-[50%_30%] ring-2 ring-cyan-400/30"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    Dasanayake D.A.N.I.
                  </p>
                  <p className="text-sm text-slate-400">ICT/21/821</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
                  <img
                    src={teamPasindu}
                    alt="Dasanayake D.M.P.D."
                    className="mx-auto h-32 w-32 rounded-full object-cover ring-2 ring-cyan-400/30"
                  />
                  <p className="mt-4 text-lg font-semibold text-white">
                    Dasanayake D.M.P.D.
                  </p>
                  <p className="text-sm text-slate-400">ICT/21/822</p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
                  <img
                    src={supervisorImg}
                    alt="Supervisor"
                    className="h-28 w-28 shrink-0 rounded-full object-cover ring-2 ring-cyan-400/30"
                  />
                  <div className="mt-4 sm:ml-6 sm:mt-0">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                      Supervisor
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-200">
                      Dr. Nalatha Lakarsena
                    </p>
                    <p className="mt-1 text-slate-300">
                      Senior Lecturer (Grade I)
                    </p>
                    <p className="text-sm text-slate-400">
                      Faculty of Technology
                    </p>
                    <p className="text-sm text-slate-400">
                      University of Sri Jayewardenepura
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
                  <img
                    src={coSupervisorImg}
                    alt="Co-Supervisor"
                    className="h-28 w-28 shrink-0 rounded-full object-cover ring-2 ring-cyan-400/30"
                  />
                  <div className="mt-4 sm:ml-6 sm:mt-0">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                      Co-Supervisor
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-200">
                      Dr. Iroshan Aberathne
                    </p>
                    <p className="mt-1 text-slate-300">
                      Head of Engineering – Sinorbis (Australia)
                    </p>
                    <p className="text-sm text-slate-400">
                      Former Senior Lecturer
                    </p>
                    <p className="text-sm text-slate-400">
                      Faculty of Technology, University of Sri Jayewardenepura
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                  University
                </p>
                <p className="mt-4 text-lg font-semibold text-slate-200">
                  University of Sri Jayewardenepura
                </p>
                <p className="mt-1 text-slate-300">Faculty of Technology</p>
                <p className="text-slate-300">
                  Department of Information and Communication Technology
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                  Academic Year
                </p>
                <p className="mt-4 text-lg font-semibold text-slate-200">
                  2020–2021
                </p>
                <p className="mt-1 text-slate-300">Sixth Batch • Group 12</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
