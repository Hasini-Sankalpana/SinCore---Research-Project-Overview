import { useState, useEffect, useRef } from "react";
import sinCoreLogo from "./Assets/SinCore logo.png";
import teamHasini from "./Assets/Team member - Hasini Sankalpana.jpeg";
import teamNimeth from "./Assets/Team member - Nimeth Indunu.jpeg";
import teamPasindu from "./Assets/Team member - Pasindu Dilshan.jpeg";
import supervisorPhoto from "./Assets/Supervisor.jpeg";
import coSupervisorPhoto from "./Assets/External Supervisor.jpeg";
import {
  Database, Search, Languages, Brain, FileText,
  ShieldCheck, GraduationCap, ChevronRight,
  CheckCircle2, Workflow, Boxes, Scale, Target, BookOpen,
  Wrench, ArrowRight, GitBranch, MessageSquareText, Menu, X,
} from "lucide-react";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid,
  LineChart, Line,
} from "recharts";

/* ── Scroll animation hook ── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

function Counter({ value, suffix = "", decimals = 0 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const end = parseFloat(value);
    const steps = 60;
    const inc = end / steps;
    const timer = setInterval(() => {
      cur += inc;
      if (cur >= end) { setCount(end); clearInterval(timer); }
      else setCount(parseFloat(cur.toFixed(decimals)));
    }, 20);
    return () => clearInterval(timer);
  }, [inView, value]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ══ DATA ══ */
const navItems = ["Home","Overview","Problem","Objectives","Research Gap","Contributions","Literature","Architecture","Pipeline","Methodology","Evaluation","Discussion","Limitations","Future Work","Technologies","Team"];

const problemPoints = [
  "Most modern NLP systems are optimized for high-resource languages, leaving Sinhala underrepresented in retrieval and generation research.",
  "Existing Sinhala workflows often depend on transliteration or multilingual transfer instead of preserving native-script fidelity.",
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
  { title: "Native-Script Processing Gap", text: "Many existing approaches adapt Sinhala through transliteration or multilingual fallback instead of treating native-script Sinhala as a first-class input.", grad: "from-violet-500 to-purple-600" },
  { title: "Morphology-Aware Modeling Gap", text: "Morphological variation is not adequately represented in generic multilingual pipelines, reducing retrieval alignment across related word forms.", grad: "from-rose-500 to-pink-600" },
  { title: "Corpus and Benchmarking Gap", text: "Sinhala datasets are often fragmented, domain-limited, and not structured for consistent retrieval and RAG evaluation.", grad: "from-amber-500 to-orange-600" },
  { title: "Grounding and Factuality Gap", text: "Without evidence-grounded generation, Sinhala QA systems remain vulnerable to hallucination and unsupported responses.", grad: "from-cyan-500 to-blue-600" },
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
  { text: "Low-resource NLP and language inequality", icon: BookOpen },
  { text: "Corpus development and data curation for underrepresented languages", icon: Database },
  { text: "Script-aware preprocessing and tokenization", icon: FileText },
  { text: "Morphology-aware embedding and representation learning", icon: Brain },
  { text: "Retrieval-Augmented Generation in low-resource settings", icon: Search },
  { text: "Fact grounding, hallucination reduction, and RAG evaluation", icon: ShieldCheck },
];

const architectureBlocks = [
  { title: "Data Sources", icon: Database, text: "Sinhala-native public information sources collected into a structured research corpus.", color: "from-violet-500 to-purple-600" },
  { title: "Preprocessing", icon: FileText, text: "Cleaning, normalization, field organization, and preparation of self-contained text units.", color: "from-blue-500 to-indigo-600" },
  { title: "Morphology Layer", icon: Languages, text: "Segmented, stemmed, and token-level representations for Sinhala text.", color: "from-cyan-500 to-blue-600" },
  { title: "Embedding Layer", icon: Brain, text: "Sentence-level vector representations generated for semantic retrieval.", color: "from-teal-500 to-emerald-600" },
  { title: "Lexical Index", icon: Search, text: "BM25-based retrieval for exact and term-sensitive matching.", color: "from-green-500 to-teal-600" },
  { title: "Vector Index", icon: Boxes, text: "Dense retrieval over embedded Sinhala text for semantic similarity search.", color: "from-amber-500 to-orange-600" },
  { title: "Fusion & Ranking", icon: Scale, text: "Weighted combination of lexical and dense retrieval signals.", color: "from-orange-500 to-rose-600" },
  { title: "Generation Layer", icon: MessageSquareText, text: "Retrieved evidence is assembled into context and passed to the answering model.", color: "from-rose-500 to-pink-600" },
];

const offlinePipeline = ["Source identification and data acquisition","JSON/JSONL dataset organization","Cleaning and normalization of Sinhala text","Construction of self-contained text fields","Chunk preparation where needed","Morphological processing and linguistic enrichment","Embedding generation for semantic search","BM25 lexical indexing","Vector indexing and metadata storage","Preparation of QA and evaluation resources"];
const onlinePipeline = ["User submits a Sinhala query","Query cleaning and preprocessing","Morphology-aware query representation","Query embedding generation","Lexical retrieval over BM25 indexes","Dense retrieval over vector index","Score fusion and ranking","Top relevant chunks selected as evidence","Context assembly for answering","Grounded Sinhala response generation"];

const methodologySections = [
  { title: "Research Design", icon: "🔬", accent: "border-l-violet-400", pts: ["Iterative design and experimentation process","System development combined with empirical evaluation","Comparative testing across baseline and enhanced configurations"] },
  { title: "Data Collection & Preparation", icon: "📦", accent: "border-l-blue-400", pts: ["Selection of reliable Sinhala information sources","Structured extraction into machine-readable format","Cleaning, normalization, and text field construction","Preparation of retrieval-ready document units"] },
  { title: "Morphological Processing", icon: "🔤", accent: "border-l-cyan-400", pts: ["Represent Sinhala text beyond surface forms only","Support segmented and stemmed views of the same content","Capture token-level features useful for retrieval"] },
  { title: "Embedding Strategy", icon: "🧠", accent: "border-l-teal-400", pts: ["Evaluate candidate embedding models for Sinhala retrieval","Fine-tune selected embeddings on QA-style relevance data","Use vector representations for semantic similarity search"] },
  { title: "Retrieval Design", icon: "🔍", accent: "border-l-amber-400", pts: ["Lexical retrieval for exact and term-sensitive matching","Dense retrieval for semantic similarity","Hybrid fusion to combine strengths of both modes","Experiment with retrieval weights and ranking behavior"] },
  { title: "Generation Workflow", icon: "💬", accent: "border-l-rose-400", pts: ["Build answer context from the top retrieved chunks","Use controlled prompting to keep answers grounded","Generate concise Sinhala responses based on supplied evidence"] },
];

/* ── Evaluation 1: Embedding ── */
const embeddingBaseData = [
  { model: "SinBERT",  "Recall@10": 17.0, nDCG: 11.1, MRR: 9.3  },
  { model: "mMiniLM",  "Recall@10": 4.6,  nDCG: 2.9,  MRR: 2.3  },
  { model: "mBERT",    "Recall@10": 2.2,  nDCG: 0.9,  MRR: 0.5  },
];
const embeddingFTData = [
  { model: "SinBERT",  "Recall@10": 55.7, nDCG: 47.5, MRR: 41.2 },
  { model: "mMiniLM",  "Recall@10": 78.8, nDCG: 68.2, MRR: 63.1 },
  { model: "mBERT",    "Recall@10": 12.8, nDCG: 10.6, MRR: 8.6  },
];
const embeddingRadarData = [
  { metric: "Recall@10", SinBERT: 55.7, mMiniLM: 78.8, mBERT: 12.8 },
  { metric: "nDCG",      SinBERT: 47.5, mMiniLM: 68.2, mBERT: 10.6 },
  { metric: "MRR",       SinBERT: 41.2, mMiniLM: 63.1, mBERT: 8.6  },
];
const embeddingMeanRank = [
  { model: "SinBERT",  Base: 676.6, FT: 35.6  },
  { model: "mMiniLM",  Base: 1236.1, FT: 12.9 },
  { model: "mBERT",    Base: 1012.2, FT: 448.5 },
];

/* ── Evaluation 2: Retrieval ── */
const retrievalData = [
  { name: "Recall@1",    BM25: 19, Semantic: 28, Hybrid: 32 },
  { name: "Recall@3",    BM25: 40, Semantic: 52, Hybrid: 58 },
  { name: "Recall@5",    BM25: 50, Semantic: 60, Hybrid: 66 },
  { name: "MRR",         BM25: 29.7, Semantic: 40.6, Hybrid: 45.2 },
  { name: "Precision@5", BM25: 13, Semantic: 17.6, Hybrid: 19 },
  { name: "Coverage@5",  BM25: 31, Semantic: 41.5, Hybrid: 44.9 },
];

/* ── Evaluation 3: Morphology ── */
const morphBarData = [
  { mode: "Lexical",  "Non-Morph": 13, Morph: 19 },
  { mode: "Semantic", "Non-Morph": 26, Morph: 28 },
  { mode: "Hybrid",   "Non-Morph": 27, Morph: 32 },
];
const morphLineData = [
  { metric: "R@1",  "Non-Morph": 27, Morph: 32 },
  { metric: "R@3",  "Non-Morph": 51, Morph: 58 },
  { metric: "R@5",  "Non-Morph": 59, Morph: 66 },
  { metric: "MRR",  "Non-Morph": 40.0, Morph: 45.2 },
  { metric: "P@5",  "Non-Morph": 17.5, Morph: 19 },
  { metric: "C@5",  "Non-Morph": 41.0, Morph: 44.9 },
];

/* ── Evaluation 4a: LLM ── */
const llmCompData = [
  { model: "Qwen2-7B",   "Base EM": 22.3, "FT EM": 72.3, "Base F1": 22.2, "FT F1": 73.2, "Base BERT": 84.8, "FT BERT": 85.0 },
  { model: "Mistral-7B", "Base EM": 21.3, "FT EM": 62.3, "Base F1": 23.5, "FT F1": 53.2, "Base BERT": 85.7, "FT BERT": 63.9 },
  { model: "LLaMA-3-8B", "Base EM": 41.5, "FT EM": 53.9, "Base F1": 41.5, "FT F1": 88.7, "Base BERT": 84.5, "FT BERT": 95.5 },
];
const llmRadarData = [
  { metric: "EM",   Qwen2: 72.3, Mistral: 62.3, LLaMA3: 53.9 },
  { metric: "F1",   Qwen2: 73.2, Mistral: 53.2, LLaMA3: 88.7 },
  { metric: "BERT", Qwen2: 85.0, Mistral: 63.9, LLaMA3: 95.5 },
];

/* ── Evaluation 4b: RAG ── */
const ragLexicalData = [
  { metric: "Token F1",       score: 34.6 },
  { metric: "BLEU",           score: 7.1  },
  { metric: "ROUGE-L F1",     score: 30.7 },
  { metric: "ROUGE-L Recall", score: 32.0 },
  { metric: "ROUGE-L Prec.",  score: 32.1 },
];

const discussionPoints = [
  { text: "Hybrid retrieval outperforms lexical and semantic alone - combining both modes captures what each individually misses.", bg: "bg-violet-50 border-violet-200", icon: "🔀" },
  { text: "Morphology-aware processing yields consistent gains across all retrieval modes, especially lexical, by bridging surface-form variation.", bg: "bg-blue-50 border-blue-200", icon: "🔤" },
  { text: "Fine-tuning with QLoRA delivers strong task-specific adaptation even under compute constraints - validating the approach for low-resource NLP.", bg: "bg-teal-50 border-teal-200", icon: "⚡" },
  { text: "Retrieval quality is a prerequisite for generation quality - the grounding gains observed depend directly on the hybrid retrieval results.", bg: "bg-emerald-50 border-emerald-200", icon: "⛓️" },
  { text: "Meta-LLaMA-3-8B-Instruct achieves the best balance of lexical accuracy and semantic relevance across all three evaluation metrics.", bg: "bg-amber-50 border-amber-200", icon: "🏆" },
  { text: "A groundedness rate of 88% confirms that RAG architecture effectively prioritizes factual correctness over exact phrasing.", bg: "bg-rose-50 border-rose-200", icon: "🛡️" },
];
const limitations = [
  "Corpus size and diversity can still be expanded to cover more domains and document types.",
  "Morphological processing quality depends on tool reliability and real-world Sinhala variation coverage.",
  "Generation performance is bounded by the size and serving constraints of the selected language model.",
  "Evaluation in low-resource settings is challenging; benchmark data and human review protocols remain limited.",
  "Production deployment considerations such as latency, scale, and continuous updates are beyond the current research scope.",
];
const futureWork = [
  { text: "Expand corpus coverage to additional domains and richer document types.", grad: "from-violet-500 to-purple-600" },
  { text: "Improve morphology analysis with stronger Sinhala-specific tools and validation.", grad: "from-blue-500 to-cyan-600" },
  { text: "Introduce reranking or stronger post-retrieval filtering for better chunk selection.", grad: "from-teal-500 to-emerald-600" },
  { text: "Use larger or more capable answer generation models when infrastructure allows.", grad: "from-amber-500 to-orange-600" },
  { text: "Strengthen human evaluation with clearer factuality, fluency, and cultural grounding criteria.", grad: "from-rose-500 to-pink-600" },
  { text: "Extend the framework into a more production-ready public-facing system.", grad: "from-indigo-500 to-blue-600" },
];
const technologies = [
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", bg: "bg-blue-50" },
  { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688", bg: "bg-teal-50" },
  { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C", bg: "bg-red-50" },
  { name: "HuggingFace", icon: "https://cdn.simpleicons.org/huggingface/FFD21E", bg: "bg-amber-50" },
  { name: "Elasticsearch", icon: "https://cdn.simpleicons.org/elasticsearch/005571", bg: "bg-indigo-50" },
  { name: "Pinecone", icon: null, bg: "bg-teal-50" },
  { name: "JSON / JSONL", icon: null, bg: "bg-gray-50" },
  { name: "LLM Models", icon: null, bg: "bg-violet-50" },
  { name: "Eval Pipelines", icon: null, bg: "bg-rose-50" },
  { name: "Sentence Transformers", icon: null, bg: "bg-cyan-50" },
];

/* ── Shared chart tooltip ── */
const ChartTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl bg-white border border-gray-100 shadow-xl px-4 py-3 text-xs">
      <p className="font-bold text-gray-700 mb-1.5">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="font-semibold">
          {p.name}: <span className="text-gray-800">{p.value}</span>
        </p>
      ))}
    </div>
  );
};

/* ── Section wrapper ── */
function Section({ id, eyebrow, eyebrowColor = "text-indigo-500", title, description, children, alt = false }) {
  return (
    <section id={id} className={`scroll-mt-20 px-6 py-16 md:py-20 ${alt ? "bg-gray-50" : "bg-white"}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl mb-10">
          <span className={`inline-block text-xs font-black tracking-widest uppercase ${eyebrowColor} mb-3`}>{eyebrow}</span>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-gray-900">{title}</h2>
          {description && <p className="mt-4 text-base leading-7 text-gray-500 md:text-lg">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/* ── Stat card ── */
function StatCard({ label, value, suffix, grad, decimals = 0 }) {
  return (
    <div className={`rounded-2xl bg-gradient-to-br ${grad} p-5 shadow-lg`}>
      <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2">{label}</p>
      <p className="text-3xl font-extrabold text-white"><Counter value={value} suffix={suffix} decimals={decimals} /></p>
    </div>
  );
}

/* ── Eval stage header ── */
function EvalStageHeader({ number, icon, title, subtitle, accentBg }) {
  return (
    <div className={`rounded-2xl p-5 mb-6 flex items-center gap-5 ${accentBg}`}>
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md">
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-0.5">Stage {number} of 5</p>
        <h3 className="text-xl font-extrabold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}

/* ── Results table ── */
function ResultsTable({ columns, rows, winnerIdx }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
      <table style={{borderCollapse:"collapse",width:"100%"}}>
        <thead>
          <tr>
            {columns.map(c => (
              <th key={c} style={{background:"#f8fafc",fontSize:"11px",fontWeight:800,textTransform:"uppercase",letterSpacing:".06em",color:"#6b7280",padding:"10px 14px",textAlign:"left",borderBottom:"2px solid #e5e7eb"}}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={ri === winnerIdx ? {background:"#f0fdf4"} : {}}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  padding:"10px 14px",
                  fontSize:"13px",
                  color: ri === winnerIdx ? "#065f46" : "#374151",
                  fontWeight: ri === winnerIdx ? 700 : 400,
                  borderBottom:"1px solid #f3f4f6",
                  borderLeft: ri === winnerIdx && ci === 0 ? "3px solid #10b981" : "none",
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Setup pill ── */
function SetupPill({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white border border-gray-100 px-4 py-3 shadow-sm">
      <span className="text-xl">{icon}</span>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{label}</p>
        <p className="text-sm font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

/* ── Key insight box ── */
function InsightBox({ text, color = "indigo" }) {
  const colors = {
    indigo: "bg-indigo-50 border-indigo-100 text-indigo-800",
    teal:   "bg-teal-50 border-teal-100 text-teal-800",
    amber:  "bg-amber-50 border-amber-100 text-amber-800",
    emerald:"bg-emerald-50 border-emerald-100 text-emerald-800",
    violet: "bg-violet-50 border-violet-100 text-violet-800",
    rose:   "bg-rose-50 border-rose-100 text-rose-800",
  };
  return (
    <div className={`rounded-xl border p-4 ${colors[color]}`}>
      <p className="text-xs font-black uppercase tracking-widest mb-1.5">Key Insight</p>
      <p className="text-sm leading-6 font-medium">{text}</p>
    </div>
  );
}

/* ── Donut SVG ── */
function Donut({ pct, color, label, size = 130 }) {
  const r = 48; const circ = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width={size} height={size} viewBox="0 0 110 110">
        <circle cx="55" cy="55" r={r} fill="none" stroke="#f3f4f6" strokeWidth="13"/>
        <circle cx="55" cy="55" r={r} fill="none" stroke={color} strokeWidth="13"
          strokeDasharray={`${(pct/100)*circ} ${circ}`} strokeDashoffset={circ/4} strokeLinecap="round"/>
        <text x="55" y="52" textAnchor="middle" fontSize="17" fontWeight="800" fill="#1f2937">{pct}%</text>
        <text x="55" y="67" textAnchor="middle" fontSize="8.5" fill="#9ca3af" fontWeight="600">rate</text>
      </svg>
      <p className="text-xs font-bold text-gray-600 text-center max-w-[100px]">{label}</p>
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export default function SinhalaRag() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [evalStage, setEvalStage] = useState("embedding");
  const [embTab, setEmbTab] = useState("bar");
  const [retTab, setRetTab] = useState("bar");
  const [morphTab, setMorphTab] = useState("bar");
  const [llmTab, setLlmTab] = useState("table");

  const evalStages = [
    { id:"embedding",  label:"🧬 Embedding",  short:"Embedding Models"  },
    { id:"retrieval",  label:"🔍 Retrieval",   short:"Retrieval Methods" },
    { id:"morphology", label:"🔤 Morphology",  short:"Morphology Impact" },
    { id:"llm",        label:"🤖 LLM",         short:"LLM Selection"     },
    { id:"rag",        label:"💬 RAG",          short:"RAG Generation"    },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Sora', 'DM Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width:5px; } ::-webkit-scrollbar-thumb { background:#6366f1; border-radius:9px; }
        @keyframes float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:.4} }
        .orb1 { animation: float 7s ease-in-out infinite; }
        .orb2 { animation: float2 9s ease-in-out 2s infinite; }
        .orb3 { animation: float 11s ease-in-out 4s infinite; }
        .hover-lift { transition: transform .22s, box-shadow .22s; }
        .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 24px 48px rgba(99,102,241,.13); }
        .gtext { background: linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .mesh { background: radial-gradient(at 20% 10%, hsla(260,90%,96%,.95) 0, transparent 50%), radial-gradient(at 80% 5%, hsla(200,80%,94%,.85) 0, transparent 40%), radial-gradient(at 5% 85%, hsla(330,70%,95%,.75) 0, transparent 45%), radial-gradient(at 90% 80%, hsla(270,70%,96%,.8) 0, transparent 40%), #fafafa; }
        .stage-btn { padding:10px 18px; border-radius:12px; font-size:13px; font-weight:700; transition:all .25s; color:#6b7280; border:2px solid transparent; cursor:pointer; background:transparent; white-space:nowrap; }
        .stage-btn:hover { background:#f3f4f6; color:#374151; }
        .stage-btn.active { background:linear-gradient(135deg,#6366f1,#8b5cf6); color:#fff; box-shadow:0 6px 20px rgba(99,102,241,.3); }
        .sub-tab { padding:7px 16px; border-radius:10px; font-size:12px; font-weight:700; transition:all .2s; color:#9ca3af; cursor:pointer; background:transparent; border:none; }
        .sub-tab:hover { background:#f3f4f6; color:#374151; }
        .sub-tab.active { background:#e0e7ff; color:#4338ca; }
      `}</style>

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a href="#home" className="flex items-center gap-3">
            <img src={sinCoreLogo} alt="SinCore" className="h-9 w-9 rounded-xl object-contain bg-slate-950 shadow-lg ring-1 ring-gray-100" />
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-indigo-400">Research</p>
              <h1 className="text-sm font-extrabold text-gray-900 leading-none">SinCore</h1>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {["Overview","Architecture","Evaluation","Discussion","Team"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="px-3.5 py-2 rounded-lg text-sm font-semibold text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all">{item}</a>
            ))}
          </nav>
          <button onClick={() => setMobileOpen(v=>!v)} className="lg:hidden rounded-xl border border-gray-200 p-2 hover:bg-gray-100 transition">
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-gray-100 bg-white px-6 py-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {navItems.map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g,"-")}`} onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-gray-50 border border-gray-100 px-3 py-2 text-xs font-semibold text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition">{item}</a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="home" className="mesh relative overflow-hidden px-6 pt-20 pb-32 md:pt-28 md:pb-40">
        <div className="orb1 absolute top-10 right-16 h-72 w-72 rounded-full pointer-events-none" style={{background:"radial-gradient(circle,rgba(165,180,252,.45),transparent 70%)"}} />
        <div className="orb2 absolute bottom-8 left-8 h-56 w-56 rounded-full pointer-events-none" style={{background:"radial-gradient(circle,rgba(249,168,212,.35),transparent 70%)"}} />
        <div className="orb3 absolute top-1/2 right-1/3 h-36 w-36 rounded-full pointer-events-none" style={{background:"radial-gradient(circle,rgba(103,232,249,.3),transparent 70%)"}} />
        <div className="absolute top-24 right-32 h-24 w-24 rounded-full border-2 border-dashed border-indigo-200 pointer-events-none" style={{animation:"spin-slow 18s linear infinite"}} />
        <div className="mx-auto max-w-6xl relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-indigo-200 bg-white/80 backdrop-blur px-4 py-2 text-xs font-bold text-indigo-600 mb-8 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-indigo-500" style={{animation:"pulse-dot 1.6s ease-in-out infinite"}} />
              Low-Resource Language Research · University of Sri Jayewardenepura
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-5xl font-extrabold text-gray-900 leading-[1.08] tracking-tight md:text-6xl lg:text-7xl max-w-4xl">
              Native-Script <span className="gtext">Sinhala</span><br />RAG Framework
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500 md:text-xl">
              Combining morphology-aware processing, hybrid retrieval, and evidence-grounded generation to build a reliable Sinhala question-answering workflow for low-resource settings.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#overview" className="rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all" style={{background:"linear-gradient(135deg,#6366f1,#8b5cf6)"}}>Explore Research</a>
              <a href="#architecture" className="rounded-xl border-2 border-gray-200 bg-white/80 backdrop-blur px-6 py-3 text-sm font-bold text-gray-700 hover:border-indigo-300 hover:text-indigo-700 transition-all shadow-sm">View Architecture</a>
              <a href="#evaluation" className="rounded-xl border-2 border-gray-200 bg-white/80 backdrop-blur px-6 py-3 text-sm font-bold text-gray-700 hover:border-indigo-300 hover:text-indigo-700 transition-all shadow-sm">See Evaluations</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <Section id="overview" eyebrow="Project Overview" title="Why this research matters"
        description="Sinhala remains underrepresented in modern retrieval and generation systems. This research focuses on native-script fidelity, retrieval quality, and grounded answer generation.">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            {icon:GraduationCap,title:"Research Focus",text:"A Sinhala-first retrieval and answering pipeline that treats the language as a native-script research target rather than adapting it through multilingual shortcuts.",grad:"from-violet-500 to-purple-600"},
            {icon:ShieldCheck,title:"Core Goal",text:"Improve answer reliability by grounding generated responses in retrieved Sinhala evidence instead of depending only on what a model memorized during pretraining.",grad:"from-blue-500 to-cyan-600"},
            {icon:Target,title:"Research Value",text:"The framework connects corpus development, morphology-aware processing, retrieval design, and response grounding in one coherent system for low-resource NLP.",grad:"from-rose-500 to-pink-600"},
          ].map((item,i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i*.1}>
                <div className="hover-lift rounded-2xl border border-gray-100 bg-white p-6 shadow-sm h-full">
                  <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${item.grad} flex items-center justify-center mb-4 shadow-lg`}><Icon className="h-5 w-5 text-white" /></div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm leading-6 text-gray-500">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ── PROBLEM ── */}
      <Section id="problem" eyebrow="Research Problem" title="What challenge is being addressed"
        description="The project addresses low-resource Sinhala processing, morphological complexity, weak benchmarking, and unreliable generation without grounding." alt>
        <div className="grid gap-4 lg:grid-cols-2">
          {problemPoints.map((item,i) => (
            <Reveal key={item} delay={i*.07}>
              <div className="hover-lift rounded-2xl bg-white border border-gray-100 shadow-sm p-5 flex items-start gap-4 h-full">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white shadow-md" style={{background:"linear-gradient(135deg,#6366f1,#8b5cf6)"}}>{i+1}</div>
                <p className="text-sm leading-6 text-gray-600">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── OBJECTIVES ── */}
      <Section id="objectives" eyebrow="Objectives" title="What the research aims to achieve">
        <div className="grid gap-5 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <div className="rounded-2xl p-7 h-full flex flex-col justify-center shadow-xl" style={{background:"linear-gradient(135deg,#6366f1,#8b5cf6)"}}>
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white mb-5">Main Objective</span>
              <p className="text-base leading-7 text-white/90">{objectives.main}</p>
            </div>
          </Reveal>
          <Reveal delay={.1}>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 mb-5">Specific Objectives</span>
              <div className="space-y-4">
                {objectives.specific.map((item,idx) => (
                  <div key={item} className="flex gap-3 items-start">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-white shadow" style={{background:"linear-gradient(135deg,#6366f1,#8b5cf6)"}}>{idx+1}</div>
                    <p className="text-sm leading-6 text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── RESEARCH GAP ── */}
      <Section id="research-gap" eyebrow="Research Gap" title="Where current approaches fall short" alt>
        <div className="grid gap-5 md:grid-cols-2">
          {gaps.map((gap,i) => (
            <Reveal key={gap.title} delay={i*.09}>
              <div className="hover-lift rounded-2xl bg-white border border-gray-100 p-6 shadow-sm h-full">
                <div className={`h-1.5 w-10 rounded-full bg-gradient-to-r ${gap.grad} mb-4`} />
                <h3 className="font-bold text-gray-900 mb-2">{gap.title}</h3>
                <p className="text-sm leading-6 text-gray-500">{gap.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── CONTRIBUTIONS ── */}
      <Section id="contributions" eyebrow="Research Contributions" title="What this project contributes">
        <div className="grid gap-4 lg:grid-cols-2">
          {contributions.map((item,i) => (
            <Reveal key={item} delay={i*.07}>
              <div className="hover-lift rounded-2xl bg-white border border-gray-100 p-5 shadow-sm flex items-start gap-3 h-full">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-500" />
                <p className="text-sm leading-6 text-gray-600">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── LITERATURE ── */}
      <Section id="literature" eyebrow="Literature Foundation" title="Key areas studied" alt>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {literatureAreas.map((area,i) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.text} delay={i*.07}>
                <div className="hover-lift rounded-2xl bg-white border border-gray-100 p-5 shadow-sm flex items-start gap-3 h-full">
                  <div className="h-8 w-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0"><Icon className="h-4 w-4 text-indigo-500" /></div>
                  <p className="text-sm leading-6 text-gray-600">{area.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ── ARCHITECTURE ── */}
      <Section id="architecture" eyebrow="System Architecture" title="High-level view of the framework"
        description="The architecture combines data preparation, text processing, retrieval infrastructure, and evidence-grounded answer generation.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {architectureBlocks.map((block,idx) => {
            const Icon = block.icon;
            return (
              <Reveal key={block.title} delay={idx*.07}>
                <div className="hover-lift rounded-2xl border border-gray-100 bg-white p-5 shadow-sm h-full relative overflow-hidden">
                  <div className="absolute top-2 right-3 text-5xl font-black text-gray-100 select-none leading-none">{String(idx+1).padStart(2,"0")}</div>
                  <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${block.color} flex items-center justify-center mb-4 shadow-md`}><Icon className="h-5 w-5 text-white" /></div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1.5">{block.title}</h3>
                  <p className="text-xs leading-5 text-gray-500">{block.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ── PIPELINE ── */}
      <Section id="pipeline" eyebrow="Workflow Pipelines" title="Offline preparation and online answering flow" alt>
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            {title:"Knowledge Preparation",icon:Workflow,steps:offlinePipeline,grad:"from-violet-500 to-purple-600",light:"bg-violet-100 text-violet-800"},
            {title:"Query Processing",icon:GitBranch,steps:onlinePipeline,grad:"from-blue-500 to-cyan-600",light:"bg-blue-100 text-blue-800"},
          ].map((p,pi) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={pi*.1}>
                <div className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
                  <div className={`bg-gradient-to-r ${p.grad} px-6 py-4 flex items-center gap-3`}><Icon className="h-5 w-5 text-white" /><h3 className="font-bold text-white">{p.title} Layer</h3></div>
                  <div className="p-5 space-y-1.5">
                    {p.steps.map((step,idx) => (
                      <div key={step} className="flex gap-3 items-start rounded-xl hover:bg-gray-50 px-3 py-2 transition-colors">
                        <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${p.light}`}>{idx+1}</span>
                        <p className="text-sm text-gray-600">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ── METHODOLOGY ── */}
      <Section id="methodology" eyebrow="Methodology" title="How the research is carried out">
        <div className="grid gap-5 lg:grid-cols-2">
          {methodologySections.map((s,i) => (
            <Reveal key={s.title} delay={i*.08}>
              <div className={`hover-lift rounded-2xl bg-white border border-gray-100 border-l-4 ${s.accent} p-6 shadow-sm h-full`}>
                <div className="flex items-center gap-2 mb-4"><span className="text-2xl">{s.icon}</span><h3 className="font-bold text-gray-900">{s.title}</h3></div>
                <div className="space-y-2.5">
                  {s.pts.map(pt => (
                    <div key={pt} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-400" />
                      <p className="text-sm leading-5 text-gray-600">{pt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ════════════════════════════════════════
          EVALUATION — UNIFIED SECTION
      ════════════════════════════════════════ */}
      <section id="evaluation" className="scroll-mt-20 px-6 py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl">

          {/* Section header */}
          <Reveal className="max-w-2xl mb-6">
            <span className="inline-block text-xs font-black tracking-widest uppercase text-indigo-500 mb-3">Evaluation</span>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-gray-900">System evaluation across all stages</h2>
            <p className="mt-4 text-base leading-7 text-gray-500">
              Each stage of the system pipeline was independently evaluated with its own setup, metrics, and baselines - all presented in a consistent structure.
            </p>
          </Reveal>

          {/* Stage selector */}
          <Reveal>
            <div className="mb-10 overflow-x-auto pb-2">
              <div className="flex gap-2 w-fit bg-white border border-gray-200 rounded-2xl p-2 shadow-sm">
                {evalStages.map(s => (
                  <button key={s.id} onClick={() => setEvalStage(s.id)}
                    className={`stage-btn ${evalStage === s.id ? "active" : ""}`}>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ━━━━ STAGE 1: EMBEDDING ━━━━ */}
          {evalStage === "embedding" && (
            <div className="space-y-6">
              <Reveal>
                <EvalStageHeader number={1} icon="🧬" title="Embedding Model Evaluation"
                  subtitle="Selecting the best dense vector model for Sinhala semantic retrieval"
                  accentBg="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100" />
              </Reveal>

              {/* Setup */}
              <Reveal delay={.05}>
                <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Experimental Setup</p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <SetupPill icon="🤖" label="Models Compared" value="SinBERT · mMiniLM · mBERT" />
                    <SetupPill icon="📋" label="Evaluation Data" value="Sinhala QA dataset (Q + relevant + hard negatives)" />
                    <SetupPill icon="⚗️" label="Conditions" value="Base (zero-shot) & Fine-tuned (contrastive learning)" />
                    <SetupPill icon="📏" label="Metrics" value="Recall@10 · nDCG · MRR · Mean Rank" />
                  </div>
                </div>
              </Reveal>

              {/* Sub tabs */}
              <Reveal delay={.08}>
                <div className="flex gap-1 bg-gray-100 rounded-xl p-1 w-fit">
                  {[{id:"bar",label:"📊 Score Comparison"},{id:"radar",label:"🕸️ Radar View"},{id:"rank",label:"📉 Mean Rank"}].map(t => (
                    <button key={t.id} onClick={() => setEmbTab(t.id)} className={`sub-tab ${embTab===t.id?"active":""}`}>{t.label}</button>
                  ))}
                </div>
              </Reveal>

              {embTab === "bar" && (
                <Reveal delay={.1}>
                  <div className="grid gap-5 lg:grid-cols-2">
                    <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                      <h4 className="font-bold text-gray-800 text-sm mb-1">Base Models — Recall@10 · nDCG · MRR</h4>
                      <p className="text-xs text-gray-400 mb-4">SinBERT leads zero-shot due to Sinhala-specific pretraining</p>
                      <ResponsiveContainer width="100%" height={240}>
                        <BarChart data={embeddingBaseData} barGap={5} barCategoryGap="30%">
                          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                          <XAxis dataKey="model" tick={{fontSize:12,fontWeight:700,fill:"#374151"}} />
                          <YAxis tick={{fontSize:11,fill:"#9ca3af"}} unit="%" domain={[0,25]} />
                          <Tooltip content={<ChartTooltip />} />
                          <Legend wrapperStyle={{fontSize:12,fontWeight:600}} />
                          <Bar dataKey="Recall@10" fill="#c4b5fd" radius={[4,4,0,0]} />
                          <Bar dataKey="nDCG"      fill="#a78bfa" radius={[4,4,0,0]} />
                          <Bar dataKey="MRR"       fill="#8b5cf6" radius={[4,4,0,0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                      <h4 className="font-bold text-gray-800 text-sm mb-1">Fine-Tuned Models — Recall@10 · nDCG · MRR</h4>
                      <p className="text-xs text-gray-400 mb-4">mMiniLM surges after fine-tuning to lead all metrics</p>
                      <ResponsiveContainer width="100%" height={240}>
                        <BarChart data={embeddingFTData} barGap={5} barCategoryGap="30%">
                          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                          <XAxis dataKey="model" tick={{fontSize:12,fontWeight:700,fill:"#374151"}} />
                          <YAxis tick={{fontSize:11,fill:"#9ca3af"}} unit="%" domain={[0,90]} />
                          <Tooltip content={<ChartTooltip />} />
                          <Legend wrapperStyle={{fontSize:12,fontWeight:600}} />
                          <Bar dataKey="Recall@10" fill="#6ee7b7" radius={[4,4,0,0]} />
                          <Bar dataKey="nDCG"      fill="#34d399" radius={[4,4,0,0]} />
                          <Bar dataKey="MRR"       fill="#10b981" radius={[4,4,0,0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </Reveal>
              )}

              {embTab === "radar" && (
                <Reveal delay={.1}>
                  <div className="grid gap-5 lg:grid-cols-2">
                    <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                      <h4 className="font-bold text-gray-800 text-sm mb-4">Fine-Tuned Multi-Metric Radar</h4>
                      <ResponsiveContainer width="100%" height={280}>
                        <RadarChart data={embeddingRadarData}>
                          <PolarGrid stroke="#e5e7eb" />
                          <PolarAngleAxis dataKey="metric" tick={{fontSize:12,fill:"#6b7280",fontWeight:600}} />
                          <Radar name="SinBERT" dataKey="SinBERT" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.15} strokeWidth={2} />
                          <Radar name="mMiniLM" dataKey="mMiniLM" stroke="#6366f1" fill="#6366f1" fillOpacity={0.22} strokeWidth={2.5} />
                          <Radar name="mBERT"   dataKey="mBERT"   stroke="#ec4899" fill="#ec4899" fillOpacity={0.1}  strokeWidth={2} />
                          <Legend wrapperStyle={{fontSize:12,fontWeight:600}} />
                          <Tooltip content={<ChartTooltip />} />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="space-y-3">
                      {[
                        { model:"SinBERT",  recall:55.7, ndcg:47.5, mrr:41.2, color:"#f59e0b", note:"Strong baseline; limited FT gain" },
                        { model:"mMiniLM",  recall:78.8, ndcg:68.2, mrr:63.1, color:"#6366f1", note:"Best FT performance — selected" },
                        { model:"mBERT",    recall:12.8, ndcg:10.6, mrr:8.6,  color:"#ec4899", note:"Lags after FT; poor Sinhala fit" },
                      ].map(m => (
                        <div key={m.model} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-bold text-gray-900 text-sm">{m.model}</p>
                            <span className="text-xs text-gray-400">{m.note}</span>
                          </div>
                          {[{l:"Recall@10",v:m.recall},{l:"nDCG",v:m.ndcg},{l:"MRR",v:m.mrr}].map(x => (
                            <div key={x.l} className="flex items-center gap-3 mb-1">
                              <span className="w-20 text-xs font-bold text-gray-400">{x.l}</span>
                              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-2 rounded-full" style={{width:`${x.v}%`,background:m.color}} />
                              </div>
                              <span className="w-12 text-right text-xs font-bold" style={{color:m.color}}>{x.v}%</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {embTab === "rank" && (
                <Reveal delay={.1}>
                  <div className="grid gap-5 lg:grid-cols-2">
                    <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                      <h4 className="font-bold text-gray-800 text-sm mb-1">Mean Rank — Base vs Fine-Tuned</h4>
                      <p className="text-xs text-gray-400 mb-4">Lower is better — mMiniLM drops from rank 1236 to just 12.9</p>
                      <ResponsiveContainer width="100%" height={260}>
                        <BarChart data={embeddingMeanRank} barGap={6} barCategoryGap="35%">
                          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                          <XAxis dataKey="model" tick={{fontSize:12,fontWeight:700,fill:"#374151"}} />
                          <YAxis tick={{fontSize:11,fill:"#9ca3af"}} />
                          <Tooltip content={<ChartTooltip />} />
                          <Legend wrapperStyle={{fontSize:12,fontWeight:600}} />
                          <Bar dataKey="Base" fill="#fca5a5" radius={[4,4,0,0]} />
                          <Bar dataKey="FT"   fill="#6366f1" radius={[4,4,0,0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="space-y-4">
                      <ResultsTable
                        columns={["Model","Base Mean Rank","FT Mean Rank","Improvement"]}
                        rows={[
                          ["SinBERT",  "676.6",  "35.6",  "↓ 641"],
                          ["mMiniLM",  "1236.1", "12.9",  "↓ 1223"],
                          ["mBERT",    "1012.2", "448.5", "↓ 564"],
                        ]}
                        winnerIdx={1}
                      />
                      <InsightBox color="violet" text="mMiniLM's mean rank collapses from 1236 to 12.9 after fine-tuning — the largest absolute improvement of any model — confirming it as the best embedding choice for Sinhala retrieval." />
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Results table */}
              <Reveal delay={.15}>
                <div className="grid gap-5 lg:grid-cols-2">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Base Model Results (Table 3)</p>
                    <ResultsTable
                      columns={["Model","Recall@10","nDCG","MRR","Mean Rank"]}
                      rows={[
                        ["SinBERT","0.170","0.111","0.093","676.6"],
                        ["mMiniLM","0.046","0.029","0.023","1236.1"],
                        ["mBERT",  "0.022","0.009","0.005","1012.2"],
                      ]}
                      winnerIdx={0}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Fine-Tuned Results (Table 4)</p>
                    <ResultsTable
                      columns={["Model","Recall@10","nDCG","MRR","Mean Rank"]}
                      rows={[
                        ["SinBERT","0.557","0.475","0.412","35.6"],
                        ["⭐ mMiniLM","0.788","0.682","0.631","12.9"],
                        ["mBERT",  "0.128","0.106","0.086","448.5"],
                      ]}
                      winnerIdx={1}
                    />
                  </div>
                </div>
              </Reveal>

              {/* Stats + insight */}
              <Reveal delay={.2}>
                <div className="grid gap-4 md:grid-cols-4">
                  <StatCard label="mMiniLM Recall@10" value={78.8} suffix="%" grad="from-indigo-500 to-purple-600" decimals={1} />
                  <StatCard label="mMiniLM nDCG"      value={68.2} suffix="%" grad="from-blue-500 to-cyan-600"    decimals={1} />
                  <StatCard label="mMiniLM MRR"       value={63.1} suffix="%" grad="from-teal-500 to-emerald-600" decimals={1} />
                  <StatCard label="mMiniLM Mean Rank" value={12.9} suffix=""  grad="from-rose-500 to-pink-600"    decimals={1} />
                </div>
              </Reveal>
              <Reveal delay={.22}>
                <InsightBox color="indigo" text="Fine-tuning with contrastive learning is critical - baselines  mMiniLM's Recall@10 jumps from 4.6% to 78.8% (+74pp). Despite SinBERT's Sinhala-specific pretraining advantage in zero-shot, the general multilingual mMiniLM adapts far more effectively to task-specific fine-tuning, making it the selected model for the retrieval pipeline." />
              </Reveal>
            </div>
          )}

          {/* ━━━━ STAGE 2: RETRIEVAL ━━━━ */}
          {evalStage === "retrieval" && (
            <div className="space-y-6">
              <Reveal>
                <EvalStageHeader number={2} icon="🔍" title="Retrieval System Evaluation"
                  subtitle="Comparing lexical, semantic, and hybrid retrieval across 6 ranking metrics"
                  accentBg="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100" />
              </Reveal>

              <Reveal delay={.05}>
                <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Experimental Setup</p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <SetupPill icon="📋" label="Evaluation Dataset" value="Gold standard · 100 Sinhala queries" />
                    <SetupPill icon="🔢" label="Retrieval Config" value="Top-K = 5 per query · No queries skipped" />
                    <SetupPill icon="⚙️" label="Systems Tested" value="BM25 · Vector Search · Hybrid (fusion)" />
                    <SetupPill icon="📏" label="Metrics" value="Recall@1/3/5 · MRR · Precision@5 · Coverage@5" />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={.08}>
                <div className="flex gap-1 bg-gray-100 rounded-xl p-1 w-fit">
                  {[{id:"bar",label:"📊 All Metrics"},{id:"line",label:"📈 Recall Curve"}].map(t => (
                    <button key={t.id} onClick={() => setRetTab(t.id)} className={`sub-tab ${retTab===t.id?"active":""}`}>{t.label}</button>
                  ))}
                </div>
              </Reveal>

              {retTab === "bar" && (
                <Reveal delay={.1}>
                  <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                    <h4 className="font-bold text-gray-800 text-sm mb-1">All 6 Metrics — BM25 vs Semantic vs Hybrid</h4>
                    <p className="text-xs text-gray-400 mb-4">Hybrid retrieval leads on every single metric — no exceptions</p>
                    <ResponsiveContainer width="100%" height={320}>
                      <BarChart data={retrievalData} barGap={4} barCategoryGap="22%">
                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                        <XAxis dataKey="name" tick={{fontSize:12,fontWeight:700,fill:"#374151"}} />
                        <YAxis tick={{fontSize:11,fill:"#9ca3af"}} unit="%" domain={[0,75]} />
                        <Tooltip content={<ChartTooltip />} />
                        <Legend wrapperStyle={{fontSize:12,fontWeight:600}} />
                        <Bar dataKey="BM25"     name="BM25 (Lexical)"    fill="#fbbf24" radius={[4,4,0,0]} />
                        <Bar dataKey="Semantic" name="Vector (Semantic)" fill="#60a5fa" radius={[4,4,0,0]} />
                        <Bar dataKey="Hybrid"   name="Hybrid"            fill="#6366f1" radius={[4,4,0,0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Reveal>
              )}

              {retTab === "line" && (
                <Reveal delay={.1}>
                  <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                    <h4 className="font-bold text-gray-800 text-sm mb-1">Recall@K Curve — K = 1, 3, 5</h4>
                    <p className="text-xs text-gray-400 mb-4">Hybrid consistently widens its lead as K increases</p>
                    <ResponsiveContainer width="100%" height={280}>
                      <LineChart data={[{k:"@1",BM25:19,Semantic:28,Hybrid:32},{k:"@3",BM25:40,Semantic:52,Hybrid:58},{k:"@5",BM25:50,Semantic:60,Hybrid:66}]}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                        <XAxis dataKey="k" tick={{fontSize:13,fontWeight:700,fill:"#374151"}} />
                        <YAxis tick={{fontSize:11,fill:"#9ca3af"}} unit="%" domain={[0,75]} />
                        <Tooltip content={<ChartTooltip />} />
                        <Legend wrapperStyle={{fontSize:12,fontWeight:600}} />
                        <Line type="monotone" dataKey="BM25"     stroke="#fbbf24" strokeWidth={2.5} dot={{r:5}} />
                        <Line type="monotone" dataKey="Semantic" stroke="#60a5fa" strokeWidth={2.5} dot={{r:5}} />
                        <Line type="monotone" dataKey="Hybrid"   stroke="#6366f1" strokeWidth={3}   dot={{r:6,fill:"#6366f1"}} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Reveal>
              )}

              <Reveal delay={.15}>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Full Results (Table 5)</p>
                  <ResultsTable
                    columns={["Method","Recall@1","Recall@3","Recall@5","MRR","Precision@5","Coverage@5"]}
                    rows={[
                      ["BM25 (Lexical)","0.19","0.40","0.50","0.297","0.13","0.31"],
                      ["Vector (Semantic)","0.28","0.52","0.60","0.406","0.176","0.415"],
                      ["⭐ Hybrid","0.32","0.58","0.66","0.452","0.19","0.449"],
                    ]}
                    winnerIdx={2}
                  />
                </div>
              </Reveal>

              <Reveal delay={.2}>
                <div className="grid gap-4 md:grid-cols-3">
                  <StatCard label="Hybrid Recall@5"  value={66}   suffix="%" grad="from-indigo-500 to-purple-600" />
                  <StatCard label="Hybrid MRR"        value={45.2} suffix="%" grad="from-blue-500 to-cyan-600"    decimals={1} />
                  <StatCard label="Hybrid Coverage@5" value={44.9} suffix="%" grad="from-teal-500 to-emerald-600" decimals={1} />
                </div>
              </Reveal>
              <Reveal delay={.22}>
                <InsightBox color="teal" text="Hybrid retrieval outperforms both lexical and semantic approaches on all 6 metrics. Semantic retrieval consistently beats BM25, confirming the importance of dense embeddings for a morphologically complex language like Sinhala where exact keyword matching fails. Hybrid fusion captures the precision of BM25 and the contextual understanding of dense search simultaneously." />
              </Reveal>
            </div>
          )}

          {/* ━━━━ STAGE 3: MORPHOLOGY ━━━━ */}
          {evalStage === "morphology" && (
            <div className="space-y-6">
              <Reveal>
                <EvalStageHeader number={3} icon="🔤" title="Morphology Impact Evaluation"
                  subtitle="Quantifying the retrieval gains from morphology-aware preprocessing"
                  accentBg="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100" />
              </Reveal>

              <Reveal delay={.05}>
                <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Experimental Setup</p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <SetupPill icon="📋" label="Evaluation Dataset" value="Gold dataset · 100 Sinhala queries" />
                    <SetupPill icon="🆚" label="Configurations" value="Non-Morphology (raw text) vs Morphology-Aware" />
                    <SetupPill icon="🔧" label="Morph Processing" value="Segmentation · Normalization · Lemma · Morphemes" />
                    <SetupPill icon="📏" label="Metrics" value="Recall@1/3/5 · MRR · Precision@5 · Coverage@5" />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={.08}>
                <div className="flex gap-1 bg-gray-100 rounded-xl p-1 w-fit">
                  {[{id:"bar",label:"📊 Recall@1 by Mode"},{id:"line",label:"📈 All Metrics (Hybrid)"}].map(t => (
                    <button key={t.id} onClick={() => setMorphTab(t.id)} className={`sub-tab ${morphTab===t.id?"active":""}`}>{t.label}</button>
                  ))}
                </div>
              </Reveal>

              {morphTab === "bar" && (
                <Reveal delay={.1}>
                  <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                    <h4 className="font-bold text-gray-800 text-sm mb-1">Recall@1 — Non-Morph vs Morph across all retrieval modes</h4>
                    <p className="text-xs text-gray-400 mb-4">Morphology helps most in lexical retrieval where surface-form matching is weakest</p>
                    <ResponsiveContainer width="100%" height={260}>
                      <BarChart data={morphBarData} barGap={6} barCategoryGap="35%">
                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                        <XAxis dataKey="mode" tick={{fontSize:13,fontWeight:700,fill:"#374151"}} />
                        <YAxis tick={{fontSize:11,fill:"#9ca3af"}} unit="%" domain={[0,40]} />
                        <Tooltip content={<ChartTooltip />} />
                        <Legend wrapperStyle={{fontSize:12,fontWeight:600}} />
                        <Bar dataKey="Non-Morph" fill="#d1d5db" radius={[4,4,0,0]} />
                        <Bar dataKey="Morph"     fill="#f59e0b" radius={[4,4,0,0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Reveal>
              )}

              {morphTab === "line" && (
                <Reveal delay={.1}>
                  <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                    <h4 className="font-bold text-gray-800 text-sm mb-1">Hybrid Configuration — All 6 Metrics</h4>
                    <p className="text-xs text-gray-400 mb-4">Morphology-aware system leads across every metric in hybrid mode</p>
                    <ResponsiveContainer width="100%" height={270}>
                      <LineChart data={morphLineData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                        <XAxis dataKey="metric" tick={{fontSize:12,fontWeight:700,fill:"#374151"}} />
                        <YAxis tick={{fontSize:11,fill:"#9ca3af"}} unit="%" />
                        <Tooltip content={<ChartTooltip />} />
                        <Legend wrapperStyle={{fontSize:12,fontWeight:600}} />
                        <Line type="monotone" dataKey="Non-Morph" stroke="#d1d5db" strokeWidth={2.5} dot={{r:4,fill:"#d1d5db"}} />
                        <Line type="monotone" dataKey="Morph"     stroke="#f59e0b" strokeWidth={3}   dot={{r:5,fill:"#f59e0b"}} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Reveal>
              )}

              <Reveal delay={.15}>
                <div className="grid gap-5 lg:grid-cols-2">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Non-Morphology Baseline</p>
                    <ResultsTable
                      columns={["Mode","R@1","R@3","R@5","MRR","P@5","C@5"]}
                      rows={[
                        ["Lexical", "0.13","0.33","0.43","0.23","0.10","0.26"],
                        ["Semantic","0.26","0.50","0.58","0.39","0.17","0.40"],
                        ["Hybrid",  "0.27","0.51","0.59","0.40","0.175","0.41"],
                      ]}
                      winnerIdx={2}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Morphology-Aware System (Table 6)</p>
                    <ResultsTable
                      columns={["Mode","R@1","R@3","R@5","MRR","P@5","C@5"]}
                      rows={[
                        ["Lexical", "0.19","0.40","0.50","0.297","0.13","0.31"],
                        ["Semantic","0.28","0.52","0.60","0.406","0.176","0.415"],
                        ["⭐ Hybrid","0.32","0.58","0.66","0.452","0.19","0.449"],
                      ]}
                      winnerIdx={2}
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={.2}>
                <div className="grid gap-4 md:grid-cols-3">
                  <StatCard label="Hybrid R@5 (Morph)" value={66}   suffix="%" grad="from-amber-500 to-orange-600" />
                  <StatCard label="Gain vs Non-Morph"  value={7}    suffix="pp" grad="from-orange-500 to-red-500"  />
                  <StatCard label="MRR Improvement"     value={5.2}  suffix="pp" grad="from-yellow-500 to-amber-600" decimals={1} />
                </div>
              </Reveal>
              <Reveal delay={.22}>
                <InsightBox color="amber" text="Morphological preprocessing consistently improves performance across all retrieval modes and metrics, not just lexical. The biggest gains are in lexical retrieval (Recall@1: +6pp) where surface-form variation previously caused mismatches. Even dense semantic retrieval benefits — lemma normalization and morpheme-level segmentation improve embedding quality and alignment between queries and documents." />
              </Reveal>
            </div>
          )}

          {/* ━━━━ STAGE 4: LLM ━━━━ */}
          {evalStage === "llm" && (
            <div className="space-y-6">
              <Reveal>
                <EvalStageHeader number={4} icon="🤖" title="LLM Evaluation"
                  subtitle="Selecting the best instruction-tuned model for Sinhala question answering"
                  accentBg="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100" />
              </Reveal>

              <Reveal delay={.05}>
                <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Experimental Setup</p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <SetupPill icon="🤖" label="Models Compared" value="Qwen2-7B · Mistral-7B · LLaMA-3-8B" />
                    <SetupPill icon="⚗️" label="Fine-Tuning" value="QLoRA — identical LR, batch size & LoRA params" />
                    <SetupPill icon="📋" label="Evaluation" value="Same prompt used for all models" />
                    <SetupPill icon="📏" label="Metrics" value="Exact Match (EM) · Token F1 · BERTScore" />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={.08}>
                <div className="flex gap-1 bg-gray-100 rounded-xl p-1 w-fit">
                  {[{id:"table",label:"📋 Score Table"},{id:"bar",label:"📊 Bar Charts"},{id:"radar",label:"🕸️ Radar"}].map(t => (
                    <button key={t.id} onClick={() => setLlmTab(t.id)} className={`sub-tab ${llmTab===t.id?"active":""}`}>{t.label}</button>
                  ))}
                </div>
              </Reveal>

              {llmTab === "table" && (
                <Reveal delay={.1}>
                  <div className="grid gap-5 lg:grid-cols-2">
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Baseline (Zero-Shot)</p>
                      <ResultsTable
                        columns={["Model","EM","F1","BERTScore"]}
                        rows={[
                          ["Qwen2-7B-Instruct",         "0.2231","0.2221","0.8480"],
                          ["Mistral-7B-Instruct-v0.2",  "0.2131","0.2345","0.8568"],
                          ["⭐ Meta-LLaMA-3-8B-Instruct","0.4154","0.4152","0.8446"],
                        ]}
                        winnerIdx={2}
                      />
                      <p className="text-xs text-gray-400 mt-2">LLaMA-3 leads zero-shot on EM and F1. All models show high BERTScore (~0.84–0.86).</p>
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Fine-Tuned — QLoRA (Table 7)</p>
                      <ResultsTable
                        columns={["Model","EM","F1","BERTScore"]}
                        rows={[
                          ["Qwen2-7B-Instruct",         "0.7231","0.7321","0.8500"],
                          ["Mistral-7B-Instruct-v0.2",  "0.6231","0.5321","0.6385"],
                          ["⭐ Meta-LLaMA-3-8B-Instruct","0.5385","0.8866","0.9545"],
                        ]}
                        winnerIdx={2}
                      />
                      <p className="text-xs text-gray-400 mt-2">LLaMA-3 achieves highest F1 and BERTScore. Mistral's BERTScore drops — signs of overfitting.</p>
                    </div>
                  </div>
                </Reveal>
              )}

              {llmTab === "bar" && (
                <Reveal delay={.1}>
                  <div className="grid gap-5 lg:grid-cols-3">
                    {[
                      { key:"EM",    label:"Exact Match",    bkey:"Base EM", ftkey:"FT EM",   bcolor:"#c7d2fe", ftcolor:"#6366f1" },
                      { key:"F1",    label:"Token-level F1", bkey:"Base F1", ftkey:"FT F1",   bcolor:"#fed7aa", ftcolor:"#f97316" },
                      { key:"BERT",  label:"BERTScore",      bkey:"Base BERT", ftkey:"FT BERT", bcolor:"#a7f3d0", ftcolor:"#10b981" },
                    ].map(m => (
                      <div key={m.key} className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5">
                        <h4 className="font-bold text-gray-800 text-sm mb-4">{m.label}</h4>
                        <ResponsiveContainer width="100%" height={220}>
                          <BarChart data={llmCompData} barGap={4} barCategoryGap="30%">
                            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                            <XAxis dataKey="model" tick={{fontSize:10,fontWeight:700,fill:"#374151"}} />
                            <YAxis tick={{fontSize:10,fill:"#9ca3af"}} unit="%" domain={[0,100]} />
                            <Tooltip content={<ChartTooltip />} />
                            <Legend wrapperStyle={{fontSize:10,fontWeight:600}} />
                            <Bar dataKey={m.bkey}  name="Base"       fill={m.bcolor} radius={[3,3,0,0]} />
                            <Bar dataKey={m.ftkey} name="Fine-Tuned" fill={m.ftcolor} radius={[3,3,0,0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}

              {llmTab === "radar" && (
                <Reveal delay={.1}>
                  <div className="grid gap-5 lg:grid-cols-2">
                    <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                      <h4 className="font-bold text-gray-800 text-sm mb-4">Fine-Tuned — All 3 Metrics Radar</h4>
                      <ResponsiveContainer width="100%" height={280}>
                        <RadarChart data={llmRadarData}>
                          <PolarGrid stroke="#e5e7eb" />
                          <PolarAngleAxis dataKey="metric" tick={{fontSize:13,fill:"#6b7280",fontWeight:700}} />
                          <Radar name="Qwen2-7B"   dataKey="Qwen2"  stroke="#6366f1" fill="#6366f1" fillOpacity={0.18} strokeWidth={2.5} />
                          <Radar name="Mistral-7B" dataKey="Mistral" stroke="#f97316" fill="#f97316" fillOpacity={0.13} strokeWidth={2} />
                          <Radar name="LLaMA-3-8B" dataKey="LLaMA3" stroke="#10b981" fill="#10b981" fillOpacity={0.2}  strokeWidth={3} />
                          <Legend wrapperStyle={{fontSize:12,fontWeight:600}} />
                          <Tooltip content={<ChartTooltip />} />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="space-y-3">
                      {[
                        { model:"Qwen2-7B",   em:72.3, f1:73.2, bert:85.0, color:"#6366f1", note:"Highest EM; limited semantic gain" },
                        { model:"Mistral-7B", em:62.3, f1:53.2, bert:63.9, color:"#f97316", note:"BERTScore decline — overfitting" },
                        { model:"LLaMA-3-8B", em:53.9, f1:88.7, bert:95.5, color:"#10b981", note:"Best F1 + BERT — selected ✓" },
                      ].map(m => (
                        <div key={m.model} className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-bold text-gray-900 text-sm">{m.model}</p>
                            <span className="text-xs text-gray-400">{m.note}</span>
                          </div>
                          {[{l:"EM",v:m.em},{l:"F1",v:m.f1},{l:"BERT",v:m.bert}].map(x => (
                            <div key={x.l} className="flex items-center gap-3 mb-1">
                              <span className="w-10 text-xs font-bold text-gray-400">{x.l}</span>
                              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-2 rounded-full" style={{width:`${x.v}%`,background:m.color}} />
                              </div>
                              <span className="w-12 text-right text-xs font-bold" style={{color:m.color}}>{x.v}%</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              <Reveal delay={.2}>
                <div className="grid gap-4 md:grid-cols-3">
                  <StatCard label="LLaMA-3 BERTScore" value={95.45} suffix="%" grad="from-emerald-500 to-teal-600"    decimals={1} />
                  <StatCard label="LLaMA-3 F1 (FT)"   value={88.66} suffix="%" grad="from-indigo-500 to-blue-600"    decimals={1} />
                  <StatCard label="Qwen2 EM (FT)"      value={72.31} suffix="%" grad="from-violet-500 to-purple-600"  decimals={1} />
                </div>
              </Reveal>
              <Reveal delay={.22}>
                <InsightBox color="emerald" text="Meta-LLaMA-3-8B-Instruct is selected as the generation model. While Qwen2-7B achieves the highest Exact Match (0.7231), LLaMA-3 achieves the best balance across all three metrics — including the highest BERTScore (0.9545) and F1 (0.8866). Mistral's BERTScore collapse to 0.6385 after fine-tuning signals overfitting and rules it out. For low-resource Sinhala QA, semantic consistency matters more than surface-level exact matches." />
              </Reveal>
            </div>
          )}

          {/* ━━━━ STAGE 5: RAG ━━━━ */}
          {evalStage === "rag" && (
            <div className="space-y-6">
              <Reveal>
                <EvalStageHeader number={5} icon="💬" title="End-to-End RAG Evaluation"
                  subtitle="Measuring generation quality and faithfulness of the full retrieval-augmented pipeline"
                  accentBg="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-100" />
              </Reveal>

              <Reveal delay={.05}>
                <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Experimental Setup</p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <SetupPill icon="📋" label="Evaluation Set"   value="50 Sinhala queries · Full coverage" />
                    <SetupPill icon="🔍" label="Retrieval"        value="Top-5 chunks · Hybrid retrieval" />
                    <SetupPill icon="🤖" label="Generator"        value="Meta-LLaMA-3-8B · QLoRA fine-tuned" />
                    <SetupPill icon="📏" label="Dimensions"       value="Answer Correctness · Semantic · Groundedness" />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={.1}>
                <div className="grid gap-5 lg:grid-cols-2">
                  {/* Lexical chart */}
                  <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                    <h4 className="font-bold text-gray-800 text-sm mb-1">Lexical & Structural Overlap (Table 8)</h4>
                    <p className="text-xs text-gray-400 mb-4">Token F1 · BLEU · ROUGE-L — generated vs reference answers</p>
                    <ResponsiveContainer width="100%" height={230}>
                      <BarChart data={ragLexicalData} layout="vertical" barCategoryGap="28%">
                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" horizontal={false} />
                        <XAxis type="number" tick={{fontSize:11,fill:"#9ca3af"}} unit="%" domain={[0,45]} />
                        <YAxis type="category" dataKey="metric" tick={{fontSize:11,fontWeight:700,fill:"#374151"}} width={105} />
                        <Tooltip content={<ChartTooltip />} />
                        <Bar dataKey="score" name="Score (%)" fill="#8b5cf6" radius={[0,5,5,0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Groundedness donuts */}
                  <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                    <h4 className="font-bold text-gray-800 text-sm mb-1">Groundedness & Faithfulness (Table 9)</h4>
                    <p className="text-xs text-gray-400 mb-6">How well generated responses are supported by retrieved evidence</p>
                    <div className="flex items-center justify-around gap-2">
                      <Donut pct={88} color="#10b981" label="Groundedness Rate"       size={130} />
                      <Donut pct={83} color="#6366f1" label="Mean Grounding (×100)"   size={130} />
                      <Donut pct={17} color="#f97316" label="Unsupported Claim Rate"  size={130} />
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Full table */}
              <Reveal delay={.15}>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Complete Results Summary</p>
                  <ResultsTable
                    columns={["Dimension","Metric","Score","Interpretation"]}
                    rows={[
                      ["Lexical",    "Token-level F1",       "0.3458", "Moderate overlap — relevant content captured"],
                      ["Lexical",    "BLEU",                 "0.071",  "Low n-gram match; paraphrasing causes underestimation"],
                      ["Structural", "ROUGE-L F1",           "0.307",  "Reasonable sequence-level structural similarity"],
                      ["Structural", "ROUGE-L Recall",       "0.320",  "Good coverage of reference answer content"],
                      ["Structural", "ROUGE-L Precision",    "0.321",  "Generated text aligns with reference structure"],
                      ["⭐ Grounding", "Groundedness Mean",  "0.83",   "Most answers strongly supported by retrieved context"],
                      ["⭐ Grounding", "Groundedness Rate",  "0.88",   "88% of answers grounded in retrieved documents"],
                      ["⭐ Grounding", "Unsupported Claim Rate","0.17", "Only 17% lacks document support — low hallucination"],
                    ]}
                    winnerIdx={-1}
                  />
                </div>
              </Reveal>

              <Reveal delay={.2}>
                <div className="grid gap-4 md:grid-cols-3">
                  <StatCard label="Groundedness Rate" value={88}   suffix="%" grad="from-emerald-500 to-teal-600"  />
                  <StatCard label="Mean Groundedness" value={83}   suffix="%" grad="from-indigo-500 to-blue-600"   />
                  <StatCard label="Hallucination Rate" value={17}  suffix="%" grad="from-orange-500 to-rose-600"   />
                </div>
              </Reveal>
              <Reveal delay={.22}>
                <InsightBox color="rose" text="The RAG system's most important result is its groundedness: 88% of generated answers are directly supported by retrieved evidence, with only a 17% unsupported claim rate. While lexical overlap metrics (BLEU: 0.071, F1: 0.346) appear moderate, this is expected in generative settings where correct answers can be expressed in varied phrasing. Groundedness is a more reliable quality indicator than surface-level lexical overlap for Sinhala RAG evaluation." />
              </Reveal>
            </div>
          )}

        </div>
      </section>

      {/* ── DISCUSSION ── */}
      <Section id="discussion" eyebrow="Discussion" title="What the findings suggest"
        description="Cross-stage insights from embedding, retrieval, morphology, LLM selection, and end-to-end RAG evaluation.">
        <div className="grid gap-4 lg:grid-cols-2">
          {discussionPoints.map((point,i) => (
            <Reveal key={point.text} delay={i*.08}>
              <div className={`hover-lift rounded-2xl border ${point.bg} p-5 shadow-sm flex items-start gap-4 h-full`}>
                <span className="text-2xl">{point.icon}</span>
                <p className="text-sm leading-6 text-gray-700">{point.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── LIMITATIONS ── */}
      <Section id="limitations" eyebrow="Limitations" title="What remains constrained" alt>
        <div className="grid gap-4 lg:grid-cols-2">
          {limitations.map((item,i) => (
            <Reveal key={item} delay={i*.07}>
              <div className="hover-lift rounded-2xl bg-white border border-gray-100 p-5 shadow-sm flex items-start gap-3 h-full">
                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
                <p className="text-sm leading-6 text-gray-600">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── FUTURE WORK ── */}
      <Section id="future-work" eyebrow="Future Work" title="How the project can be extended">
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {futureWork.map((item,i) => (
            <Reveal key={item.text} delay={i*.07}>
              <div className="hover-lift rounded-2xl bg-white border border-gray-100 p-5 shadow-sm flex items-start gap-3 h-full">
                <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${item.grad} flex items-center justify-center shrink-0 shadow-md`}><ArrowRight className="h-4 w-4 text-white" /></div>
                <p className="text-sm leading-6 text-gray-600">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── TECHNOLOGIES ── */}
      <Section id="technologies" eyebrow="Technologies" title="Core tools, models, and infrastructure" alt>
        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {technologies.map((tech,i) => (
            <Reveal key={tech.name} delay={i*.05}>
              <div className={`hover-lift rounded-2xl border border-gray-100 ${tech.bg} p-5 flex flex-col items-center text-center shadow-sm cursor-default`}>
                {tech.icon
                  ? <img src={tech.icon} alt="" className="h-8 w-8 mb-3" loading="lazy" />
                  : <div className="h-8 w-8 mb-3 rounded-lg bg-white shadow flex items-center justify-center"><Wrench className="h-4 w-4 text-indigo-400" /></div>
                }
                <p className="text-xs font-bold text-gray-700">{tech.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── TEAM ── */}
      <section id="team" className="scroll-mt-20 px-6 py-16 md:py-20" style={{background:"linear-gradient(135deg,#f5f3ff 0%,#eff6ff 50%,#f0fdf4 100%)"}}>
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl mb-10">
            <span className="inline-block text-xs font-black tracking-widest uppercase text-indigo-500 mb-3">Team & Academic Details</span>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-gray-900">Project information</h2>
          </Reveal>
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Research Students</p>
          <div className="grid gap-5 sm:grid-cols-3 mb-8">
            {[
              { name: "De Silva G.H.S.", preferred: "Hasini Sankalpana", id: "ICT/21/823", photo: teamHasini, ring: "ring-violet-200" },
              { name: "Dasanayake D.A.N.I.", preferred: "Nimeth Indunu", id: "ICT/21/821", photo: teamNimeth, ring: "ring-blue-200" },
              { name: "Dasanayake D.M.P.D.", preferred: "Pasindu Dilshan", id: "ICT/21/822", photo: teamPasindu, ring: "ring-teal-200" },
            ].map((m,i) => (
              <Reveal key={m.name} delay={i*.1}>
                <div className="hover-lift rounded-2xl bg-white border border-gray-100 shadow-sm p-7 flex flex-col items-center text-center">
                  <div className={`h-24 w-24 rounded-full overflow-hidden shadow-lg ring-4 ${m.ring} mb-4`}>
                    <img src={m.photo} alt={`Portrait of ${m.preferred}`} className="h-full w-full object-cover object-top" />
                  </div>
                  <p className="text-sm font-semibold text-indigo-600">{m.preferred}</p>
                  <p className="font-bold text-gray-900 mt-0.5">{m.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{m.id}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Supervisors</p>
          <div className="grid gap-5 md:grid-cols-2 mb-8">
            {[
              { role: "Supervisor", name: "Dr. Nalaka Lankasena", title: "Senior Lecturer (Grade I)", dept: "Faculty of Technology", uni: "University of Sri Jayewardenepura", photo: supervisorPhoto, ring: "ring-emerald-200", tag: "bg-emerald-50 text-emerald-700" },
              { role: "Co-Supervisor", name: "Dr. Iroshan Aberathne", title: "Head of Engineering – Sinorbis (Australia)", dept: "Former Senior Lecturer, Faculty of Technology", uni: "University of Sri Jayewardenepura", photo: coSupervisorPhoto, ring: "ring-amber-200", tag: "bg-amber-50 text-amber-700" },
            ].map((s,i) => (
              <Reveal key={s.name} delay={i*.1}>
                <div className="hover-lift rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                  <div className="flex items-start gap-4">
                    <div className={`h-16 w-16 shrink-0 rounded-full overflow-hidden shadow-lg ring-2 ${s.ring}`}>
                      <img src={s.photo} alt={`Portrait of ${s.name}`} className="h-full w-full object-cover object-top" />
                    </div>
                    <div>
                      <span className={`inline-block rounded-full px-3 py-0.5 text-xs font-bold ${s.tag} mb-2`}>{s.role}</span>
                      <p className="font-bold text-gray-900">{s.name}</p>
                      <p className="text-sm text-gray-500">{s.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{s.dept}</p>
                      <p className="text-xs text-gray-400">{s.uni}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {label:"University",main:"University of Sri Jayewardenepura",sub1:"Faculty of Technology",sub2:"Department of Information and Communication Technology"},
              {label:"Academic Year",main:"2020–2021",sub1:"Sixth Batch",sub2:"Group 12"},
            ].map(item => (
              <Reveal key={item.label}>
                <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                  <p className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-3">{item.label}</p>
                  <p className="font-bold text-gray-900">{item.main}</p>
                  <p className="text-sm text-gray-500">{item.sub1}</p>
                  <p className="text-sm text-gray-500">{item.sub2}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white px-6 py-8">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={sinCoreLogo} alt="SinCore" className="h-8 w-8 rounded-lg object-contain bg-slate-950 shadow ring-1 ring-gray-100" />
            <span className="font-extrabold text-gray-800">SinCore</span>
          </div>
          <p className="text-xs text-gray-400 text-center">Native-Script Sinhala RAG Framework · University of Sri Jayewardenepura · 2020–2021</p>
          <div className="flex gap-1.5">
            {["#6366f1","#8b5cf6","#ec4899","#f59e0b","#10b981","#06b6d4"].map(c => (
              <div key={c} className="h-2.5 w-2.5 rounded-full" style={{background:c}} />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
