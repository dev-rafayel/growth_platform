import { FaqProps } from './types';

export function Faq({ title, items }: FaqProps) {
  return (
    <section className="faq">
      <h2 className="faq-title">{title}</h2>

      <div className="faq-list">
        {items.map((item) => (
          <details className="faq-item" key={item.id}>
            <summary className="faq-question">{item.question}</summary>
            <p className="faq-answer">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
