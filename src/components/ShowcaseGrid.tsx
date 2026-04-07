import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";
import showcase3 from "@/assets/showcase-3.jpg";
import showcase4 from "@/assets/showcase-4.jpg";

const items = [
  { img: showcase1, title: "Cohort Learning", label: "Fig. 1A", offset: false },
  { img: showcase2, title: "Executive Focus", label: "Fig. 2B", offset: true },
  { img: showcase3, title: "Live Sessions", label: "Fig. 3C", offset: false },
  { img: showcase4, title: "Startup Pitching", label: "Fig. 4D", offset: false },
];

const ShowcaseGrid = () => (
  <section className="py-20 px-4 md:px-6">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 text-left">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">The Experience</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2">
          Where <em className="font-serif italic">Theory</em> Meets Practice
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {items.map((item) => (
          <div
            key={item.label}
            className={`group relative aspect-[3/4] rounded-2xl overflow-hidden bg-card ${
              item.offset ? "lg:translate-y-10" : ""
            }`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover filter grayscale-[100%] group-hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              width={768}
              height={1024}
            />
            <div className="absolute top-3 left-3 px-2.5 py-1.5 rounded-xl backdrop-blur-xl" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[10px] text-foreground/70">{item.label}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
              <h3 className="font-serif italic text-base text-foreground">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ShowcaseGrid;
