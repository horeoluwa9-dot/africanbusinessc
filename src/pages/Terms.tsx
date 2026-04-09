import PageLayout from "@/components/PageLayout";

const Terms = () => (
  <PageLayout>
    <section className="pt-24 pb-20 px-4 md:px-6">
      <div className="mx-auto max-w-3xl">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Legal</span>
        <h1 className="text-4xl md:text-5xl text-foreground mt-3 mb-8">Terms of <em className="font-serif italic text-primary">Service</em></h1>
        <div className="space-y-6">
          {[
            { title: "Acceptance of Terms", content: "By accessing or using Africa Business College services, you agree to these terms and conditions." },
            { title: "Use of Services", content: "Our services are provided for educational purposes. You agree to use them responsibly and in accordance with applicable laws." },
            { title: "Account Responsibility", content: "You are responsible for maintaining the confidentiality of your account and all activities under it." },
            { title: "Intellectual Property", content: "All content, materials, and resources provided through ABC are the intellectual property of Africa Business College or its licensors." },
            { title: "Payment Terms", content: "Tuition and fees are as stated at the time of enrollment. Payment plans are subject to the terms agreed upon during enrollment." },
            { title: "Limitation of Liability", content: "ABC provides educational services on an as-is basis and is not liable for outcomes resulting from the application of knowledge gained." },
          ].map((s) => (
            <div key={s.title}>
              <h2 className="text-xl text-foreground font-light mb-2">{s.title}</h2>
              <p className="font-sans text-xs text-foreground/60">{s.content}</p>
            </div>
          ))}
          <p className="font-sans text-[10px] text-foreground/30">Last updated: April 2026</p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Terms;
