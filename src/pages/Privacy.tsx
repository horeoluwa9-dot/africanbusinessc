import PageLayout from "@/components/PageLayout";

const Privacy = () => (
  <PageLayout>
    <section className="pt-24 pb-20 px-4 md:px-6">
      <div className="mx-auto max-w-3xl">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Legal</span>
        <h1 className="text-4xl md:text-5xl text-foreground mt-3 mb-8">Privacy <em className="font-serif italic text-primary">Policy</em></h1>
        <div className="prose prose-sm prose-invert max-w-none space-y-6">
          {[
            { title: "Information We Collect", content: "We collect information you provide directly, including name, email, phone number, and professional background when you apply or create an account." },
            { title: "How We Use Your Information", content: "Your information is used to process applications, deliver educational content, improve our services, and communicate important updates." },
            { title: "Data Protection", content: "We implement appropriate security measures to protect your personal data against unauthorized access, alteration, or destruction." },
            { title: "Third-Party Services", content: "We may use third-party services for analytics and communication. These services are bound by their own privacy policies." },
            { title: "Your Rights", content: "You have the right to access, correct, or delete your personal data. Contact us at privacy@africabusinesscollege.com for any requests." },
            { title: "Updates", content: "This policy may be updated periodically. We will notify you of significant changes through email or our platform." },
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

export default Privacy;
