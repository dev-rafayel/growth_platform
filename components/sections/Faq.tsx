import type { FaqSection } from '@/lib/strapi/types';

export function Faq({ section }: { section: FaqSection }) {
  return (
    <section className="faq">
      <h2 className="faq-title">{section.title}</h2>

      <div className="faq-list">
        {section.items.map((item) => (
          <details className="faq-item" key={item.id}>
            <summary className="faq-question">{item.question}</summary>
            <p className="faq-answer">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
