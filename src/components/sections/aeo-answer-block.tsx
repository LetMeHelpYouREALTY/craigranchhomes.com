type AeoAnswerBlockProps = {
  question: string;
  answer: string;
  bullets?: ReadonlyArray<string>;
};

/**
 * Direct-answer block for answer engines / featured snippets.
 * Keep one primary Q&A per page above the fold content when possible.
 */
export default function AeoAnswerBlock({
  question,
  answer,
  bullets,
}: AeoAnswerBlockProps) {
  return (
    <section id='aeo-direct-answer' className='py-10 bg-white'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='rounded-lg border border-[#3A8DDE]/30 bg-[#F7F9FC] p-6 md:p-8'>
          <h2 className='text-2xl font-bold text-[#0A2540] mb-3'>{question}</h2>
          <p className='text-gray-700 leading-relaxed text-lg'>{answer}</p>
          {bullets && bullets.length > 0 ? (
            <ul className='mt-4 space-y-2 text-gray-700 list-disc pl-5'>
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
