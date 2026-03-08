import { useEffect } from 'react';
import projectLogo from './Assets/SinCore logo.png';
import supervisorImg from './Assets/Supervisor.jpeg';
import coSupervisorImg from './Assets/External Supervisor.jpeg';
import teamHasini from './Assets/Team member - Hasini Sankalpana.jpeg';
import teamNimeth from './Assets/Team member - Nimeth Indunu.jpeg';
import teamPasindu from './Assets/Team member - Pasindu Dilshan.jpeg';
import openaiLogo from './Assets/openai logo.png';
import pineconeLogo from './Assets/pinecone logo.png';

export default function SinhalaRagResearchWebsite() {
  useEffect(() => {
    let link = document.querySelector('link[rel="icon"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = projectLogo;
  }, []);
  const navItems = [
    "Home",
    "About",
    "Problem",
    "Objectives",
    "Gap",
    "Architecture",
    "Methodology",
    "Features",
    "Technologies",
    "Results",
    "Team",
  ];

  const gaps = [
    {
      title: "Native-Script Processing Gap",
      text: "Existing Sinhala NLP approaches often depend on transliteration or code-mixed pipelines instead of preserving native-script fidelity.",
    },
    {
      title: "Morphology-Aware Modeling Gap",
      text: "Sinhala's rich morphology is not adequately captured by common multilingual models, reducing semantic quality and retrieval accuracy.",
    },
    {
      title: "Corpus and Standardization Gap",
      text: "Available Sinhala datasets are fragmented, domain-limited, and difficult to use for reproducible research and benchmarking.",
    },
    {
      title: "Fact-Aware Retrieval Gap",
      text: "There is limited infrastructure for grounding Sinhala generation in retrieved evidence to reduce hallucinations.",
    },
  ];

  const objectives = [
    "Curate and preprocess a domain-diverse Sinhala corpus using native-script sources.",
    "Design morphology-aware representations for Sinhala text processing and retrieval.",
    "Build a hybrid retrieval pipeline combining lexical and semantic retrieval.",
    "Integrate retrieval-grounded LLM generation for more reliable Sinhala responses.",
    "Support future evaluation and extensibility for low-resource language research.",
  ];

  const methodology = [
    {
      title: "Data Acquisition",
      text: "Collect Sinhala-native textual data from relevant public-domain sources and organize it into a structured corpus.",
    },
    {
      title: "Preprocessing & Chunking",
      text: "Clean, normalize, segment, and chunk documents to prepare them for retrieval and downstream generation tasks.",
    },
    {
      title: "Morphology-Aware Layer",
      text: "Generate segmented and stemmed representations to better preserve Sinhala linguistic structure.",
    },
    {
      title: "Hybrid Retrieval",
      text: "Combine BM25 lexical search with dense vector retrieval to balance exact matching and semantic similarity.",
    },
    {
      title: "Grounded Generation",
      text: "Pass the top retrieved chunks into an LLM so final answers are generated from retrieved evidence rather than unsupported internal memory.",
    },
    {
      title: "Serving & Integration",
      text: "Expose the workflow through a modular backend architecture that supports retrieval, generation, and future experimentation.",
    },
  ];

  const features = [
    "Sinhala native-script processing",
    "Morphology-aware text representation",
    "Hybrid lexical + semantic retrieval",
    "Retrieval-grounded answer generation",
    "Domain-diverse corpus pipeline",
    "Extensible research-oriented architecture",
  ];

  const technologies = [
    { name: "Python", iconUrl: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "FastAPI", iconUrl: "https://cdn.simpleicons.org/fastapi/009688" },
    { name: "OpenAI", iconUrl: openaiLogo },
    { name: "Pinecone", iconUrl: pineconeLogo },
    { name: "BM25", iconUrl: null },
    { name: "Sentence Transformers", iconUrl: "https://cdn.simpleicons.org/huggingface/FFD21E" },
    { name: "PyTorch", iconUrl: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
    { name: "YAML Configuration", iconUrl: null },
    { name: "JSONL Data Pipeline", iconUrl: null },
  ];

  const TechIcon = ({ tech }) => {
    if (tech.iconUrl) {
      return (
        <img
          src={tech.iconUrl}
          alt=""
          className="h-6 w-6 shrink-0 opacity-95"
          loading="lazy"
        />
      );
    }
    const iconMap = {
      "BM25": (
        <svg className="h-6 w-6 shrink-0 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
      "YAML Configuration": (
        <svg className="h-6 w-6 shrink-0 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      "JSONL Data Pipeline": (
        <svg className="h-6 w-6 shrink-0 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
    };
    return iconMap[tech.name] || null;
  };

  const results = [
    "Processed Sinhala document chunks prepared for retrieval",
    "Morphology-aware intermediate representations",
    "Hybrid retrieval outputs with improved contextual relevance",
    "Grounded responses generated from retrieved evidence",
    "Structured QA/training data for future model improvement",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img src={projectLogo} alt="SinCore RAG Project Logo" className="h-10 w-10 object-contain md:h-12 md:w-12" />
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300">RESEARCH WEBSITE</p>
              <h1 className="text-lg font-bold text-white">Sinhala Native-Script RAG Framework</h1>
            </div>
          </div>
          <nav className="hidden gap-5 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_left,rgba(59,130,246,0.14),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
                <img src={projectLogo} alt="" className="h-5 w-5 rounded object-contain" aria-hidden />
                Final Year Research Project
              </span>
              <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
                A Native-Script Retrieval-Augmented Generation Framework for the Sinhala Language
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                An academic research project focused on Sinhala-native text processing, morphology-aware retrieval, and LLM-grounded response generation for low-resource language applications.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#about" className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]">
                  Explore Research
                </a>
                <a href="#architecture" className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5">
                  View Architecture
                </a>
                <a href="#methodology" className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5">
                  View Methodology
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/20">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Project Focus</p>
                <div className="mt-4 space-y-3 text-slate-200">
                  <p>• Native-script Sinhala text processing</p>
                  <p>• Morphology-aware representation</p>
                  <p>• Hybrid retrieval pipeline</p>
                  <p>• Retrieval-grounded LLM generation</p>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Research Context</p>
                <p className="mt-4 leading-7 text-slate-300">
                  Designed to address the challenges of low-resource Sinhala NLP through a unified architecture that combines data preparation, retrieval, and grounded generation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">About the Project</p>
              <h3 className="mt-3 text-3xl font-bold text-white">Why this research matters</h3>
            </div>
            <div className="space-y-5 text-slate-300 leading-8">
              <p>
                Natural Language Processing has advanced rapidly for high-resource languages, but Sinhala remains underrepresented in modern retrieval and generation systems.
              </p>
              <p>
                Existing approaches frequently rely on transliteration, multilingual transfer, or code-mixed pipelines, which weaken script fidelity and limit accessibility for native Sinhala users.
              </p>
              <p>
                This project proposes an integrated framework that keeps Sinhala in its native script while improving retrieval quality and grounding generated responses in retrieved evidence.
              </p>
            </div>
          </div>
        </section>

        <section id="problem" className="mx-auto max-w-7xl px-6 py-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Research Problem</p>
            <p className="mt-4 max-w-5xl text-lg leading-8 text-slate-300">
              Sinhala remains underserved in retrieval-augmented generation research due to native-script processing limitations, morphological complexity, fragmented corpora, and the lack of reliable grounding mechanisms for generation. These challenges reduce retrieval accuracy, weaken semantic representation, and increase hallucination risk in generative workflows.
            </p>
          </div>
        </section>

        <section id="objectives" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Objectives</p>
              <h3 className="mt-3 text-3xl font-bold text-white">Research direction</h3>
              <p className="mt-4 text-slate-300 leading-7">
                The project aims to build a Sinhala-native framework that combines retrieval and generation while preserving linguistic authenticity and improving factual grounding.
              </p>
            </div>
            <div className="grid gap-4">
              {objectives.map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-bold text-cyan-200">
                      {index + 1}
                    </div>
                    <p className="leading-7 text-slate-200">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gap" className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Research Gap</p>
              <h3 className="mt-3 text-3xl font-bold text-white">What current systems are missing</h3>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {gaps.map((gap) => (
              <div key={gap.title} className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
                <h4 className="text-xl font-semibold text-white">{gap.title}</h4>
                <p className="mt-4 leading-7 text-slate-300">{gap.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="architecture" className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">System Architecture</p>
          <h3 className="mt-3 text-3xl font-bold text-white">Unified Sinhala RAG + LLM workflow</h3>
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {[
              ["Data Sources", "Sinhala-native corpus collection and domain-diverse textual resources."],
              ["Preprocessing", "Cleaning, normalization, sentence splitting, and chunk creation."],
              ["Morphology-Aware Layer", "Segmented and stemmed representations for better Sinhala linguistic handling."],
              ["Indexing", "BM25 lexical indexing and dense vector indexing for retrieval."],
              ["Hybrid Retrieval", "Parallel lexical and semantic search with score fusion."],
              ["Context Assembly", "Top retrieved chunks are organized into grounded evidence context."],
              ["LLM Generation", "Final response is generated using retrieved evidence to reduce hallucination."],
              ["Serving Layer", "Integrated system exposure for experimentation, demonstration, and future deployment."],
            ].map(([title, text], idx) => (
              <div key={title} className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/15 font-bold text-cyan-200">
                  {idx + 1}
                </div>
                <h4 className="text-lg font-semibold text-white">{title}</h4>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="methodology" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Methodology</p>
              <h3 className="mt-3 text-3xl font-bold text-white">Research and implementation approach</h3>
              <p className="mt-4 text-slate-300 leading-7">
                The methodology follows an iterative design-science approach that combines corpus preparation, morphology-aware representation, retrieval design, and grounded generation.
              </p>
            </div>
            <div className="space-y-4">
              {methodology.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 leading-7 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Key Features</p>
          <h3 className="mt-3 text-3xl font-bold text-white">Core capabilities of the project</h3>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200">
                {feature}
              </div>
            ))}
          </div>
        </section>

        <section id="technologies" className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Technologies Used</p>
            <h3 className="mt-3 text-3xl font-bold text-white">Tools and frameworks</h3>
            <div className="mt-8 flex flex-wrap gap-4">
              {technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100 transition hover:border-cyan-400/40 hover:bg-cyan-400/15"
                >
                  <TechIcon tech={tech} />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Results & Outputs</p>
              <h3 className="mt-3 text-3xl font-bold text-white">What the system produces</h3>
              <p className="mt-4 text-slate-300 leading-7">
                This research emphasizes system capabilities and structured outputs rather than overstating final evaluation metrics. The website can later be extended with quantitative results once finalized.
              </p>
            </div>
            <div className="grid gap-4">
              {results.map((result) => (
                <div key={result} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200">
                  {result}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Team & Academic Details</p>
          <h3 className="mt-3 text-3xl font-bold text-white">Project information</h3>
          <div className="mt-8 space-y-10">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Team Members</p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
                  <img src={teamHasini} alt="De Silva G.H.S." className="mx-auto h-32 w-32 rounded-full object-cover ring-2 ring-cyan-400/30" />
                  <p className="mt-4 text-lg font-semibold text-white">De Silva G.H.S.</p>
                  <p className="text-sm text-slate-400">ICT/21/823</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
                  <img src={teamNimeth} alt="Dasanayake D.A.N.I." className="mx-auto h-32 w-32 rounded-full object-cover ring-2 ring-cyan-400/30" />
                  <p className="mt-4 text-lg font-semibold text-white">Dasanayake D.A.N.I.</p>
                  <p className="text-sm text-slate-400">ICT/21/821</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
                  <img src={teamPasindu} alt="Dasanayake D.M.P.D." className="mx-auto h-32 w-32 rounded-full object-cover ring-2 ring-cyan-400/30" />
                  <p className="mt-4 text-lg font-semibold text-white">Dasanayake D.M.P.D.</p>
                  <p className="text-sm text-slate-400">ICT/21/822</p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
                  <img src={supervisorImg} alt="Supervisor" className="h-28 w-28 shrink-0 rounded-full object-cover ring-2 ring-cyan-400/30" />
                  <div className="mt-4 sm:ml-6 sm:mt-0">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Supervisor</p>
                    <p className="mt-2 text-lg font-semibold text-slate-200">Dr. Nalatha Lakarsena</p>
                    <p className="mt-1 text-slate-300">Senior Lecturer (Grade I)</p>
                    <p className="text-sm text-slate-400">Faculty of Technology</p>
                    <p className="text-sm text-slate-400">University of Sri Jayewardenepura</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
                  <img src={coSupervisorImg} alt="Co-Supervisor" className="h-28 w-28 shrink-0 rounded-full object-cover ring-2 ring-cyan-400/30" />
                  <div className="mt-4 sm:ml-6 sm:mt-0">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Co-Supervisor</p>
                    <p className="mt-2 text-lg font-semibold text-slate-200">Dr. Iroshan Viratne</p>
                    <p className="mt-1 text-slate-300">Head of Engineering – Sinorbis (Australia)</p>
                    <p className="text-sm text-slate-400">Former Senior Lecturer</p>
                    <p className="text-sm text-slate-400">Faculty of Technology, University of Sri Jayewardenepura</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">University</p>
                <p className="mt-4 text-lg font-semibold text-slate-200">University of Sri Jayewardenepura</p>
                <p className="mt-1 text-slate-300">Faculty of Technology</p>
                <p className="text-slate-300">Department of Information and Communication Technology</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Academic Year</p>
                <p className="mt-4 text-lg font-semibold text-slate-200">2020–2021</p>
                <p className="mt-1 text-slate-300">Sixth Batch • Group 12</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-white">Sinhala Native-Script RAG Research Project</p>
          <div className="text-sm text-slate-400">Contact details • Repository link • Department information</div>
        </div>
      </footer>
    </div>
  );
}
