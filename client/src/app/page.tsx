import Header from "@/components/Header";
import LogoCard from "@/components/LogoCard";

const logos = [
  { src: "/logos/CSECU_convocation_logo.png", title: "CSECU Convocation 2025 Logo", meta: "CSECU · 2025" },
  { src: "/logos/H2F_wears_logo.png", title: "H2F Wears", meta: "Begum Rokeya University · 2024" },
  { src: "/logos/The_Odyssey_Quest_logo.png", title: "The Odyssey Quest", meta: "University of Chittagong· 2024" },
  { src: "/logos/pohela_boishakh_wordmark.png", title: "CUESS Pohela Boishakh", meta: "Chittagon University Entreprenuer & Startup Society· 2025" },
  { src: "/logos/ParkEase_Logo Mica_Version.png", title: "ParkEase Logo", meta: "ParkEase· 2025" },
  { src: "/logos/CUAC_VR_2024_chest_design.png", title: "CUAC VR 2024 Wordmark", meta: "Chittagong University Adventure Club· 2024" },
  { src: "/logos/GNG_Logo_.svg", title: "Gadget N Goods", meta: "Izaz Bin Azam · 2024" },
  { src: "/logos/the_milestone_project_logo.png", title: "The Milestone Project", meta: "Begum Rokeya University · 2024" },
];

export default function Page() {
  return (
    <>
      <Header />
      <main id="work" className="mx-auto max-w-6xl px-6 pb-24">
        <section className="mb-10">
          <div className="card p-6 lg:p-8 card-hover">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold">
                  Selected <span className="accent-grad">Logo Marks</span>
                </h2>
                {/* <p className="muted mt-1">A decent collection of my .</p> */}
              </div>
              <a
                className="px-4 py-2 rounded-xl text-sm text-white bg-gradient-to-r from-blue-500 to-violet-500 focus-ring"
                href="mailto:you@email.com?subject=Logo%20project"
              >
                Start a project
              </a>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {logos.map((l, i) => <LogoCard key={i} {...l} />)}
        </section>

        <section id="about" className="mt-16">
          <div className="card p-6 lg:p-8">
            <h3 className="text-xl font-semibold">About</h3>
            <p className="mt-2 text-zinc-700 leading-relaxed">
              I design simple, distinctive marks with strong shape language,
              scalable to any medium. Available for freelance & collaborations.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a className="hairline px-3 py-2 rounded-xl text-sm hover:bg-zinc-50 focus-ring text-blue-600" href="https://www.facebook.com/sahib.bhaya/">Facebook</a>
              <a className="hairline px-3 py-2 rounded-xl text-sm hover:bg-zinc-50 focus-ring text-black-600" href="https://www.linkedin.com/in/sahibabbas/">LinkedIn</a>
               <a
        className="hairline px-3 py-2 rounded-xl text-sm hover:bg-zinc-50 focus-ring text-green-600"
        href="https://wa.me/8801887928676"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
            </div>
            <p className="muted mt-6 text-sm">© {new Date().getFullYear()} Sahib Abbas Bahar Chowdhury</p>
          </div>
        </section>
      </main>
    </>
  );
}