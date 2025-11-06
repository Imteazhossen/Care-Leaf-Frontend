
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// import { motion } from 'framer-motion';

const SERVICES = [
  {
    title: 'What is the main purpose of your project?',
    desc:
      'Our project focuses on detecting and classifying diseases in bottle gourd leaves using deep learning models to help farmers identify infections early and take preventive actions.',
  },
  {
    title: 'How does your system detect bottle gourd diseases?',
    desc:
      'The system uses a convolutional neural network (CNN) trained on images of healthy and infected bottle gourd leaves to automatically identify disease types and classify their severity levels.',
  },
  {
    title: 'What dataset do you use for training?',
    desc:
      'We built a custom dataset containing fresh and infected bottle gourd leaf images, collected from farms and open-source platforms, to ensure high model accuracy and generalization.',
  },
  {
    title: 'Can your model classify disease severity?',
    desc:
      'Yes, the model not only detects diseases but also classifies their severity into three stages—mild, moderate, and extreme—to support better crop management decisions.',
  },
  {
    title: 'What technologies are used in your project?',
    desc:
      'The system is developed using Python, TensorFlow, and PyTorch for deep learning, with image preprocessing handled through OpenCV and model evaluation done using performance metrics.',
  },
  {
    title: 'How will this project benefit farmers?',
    desc:
      'By using this AI-based disease detection system, farmers can quickly identify infections at an early stage, reduce crop loss, and increase productivity through timely treatments.',
  },
];


export default function FAQAccordion() {
  const [open, setOpen] = useState(0); // set to null if you want all closed by default

  return (
    <section className="mx-auto w-[100%]  px-8 md:px-40 py-20">
      <ul className="divide-y divide-green-400">
        {SERVICES.map((item, i) => {
          const expanded = open === i;

          // hover "scroll" effect: y goes up -> down -> back to rest
          const titleVariants = {
            rest: { y: 0 },
            hover: { y: [-8, 8, 0], transition: { duration: 0.6, ease: 'easeInOut', times: [0, 0.5, 1] } },
          };

          return (
            <li key={item.title} className={`${expanded ? 'rounded-lg bg-green-300 py-20 px-8 ' : 'py-4'}`}>
              {/* HEADER LINE */}
              <motion.button
                type="button"
                onClick={() => setOpen(expanded ? null : i)}
                className="group w-full flex items-start justify-between gap-4 text-left"
                aria-expanded={expanded}
                aria-controls={`svc-panel-${i}`}
                initial="rest"
                animate="rest"
                whileHover="hover"
              >
                <motion.span
                  variants={titleVariants}
                  className={`${
                    expanded
                      ? 'text-3xl sm:text-4xl md:text-3xl font-semibold leading-tight '
                      : 'text-xl sm:text-[22px] md:text-3xl font-semibold '
                  } text-green-700 `}
                >
                  {item.title}
                </motion.span>

                {/* + / – icon (36×36) */}
                <span
                  className={`mt-2 inline-flex h-7 w-7 items-center justify-center rounded-full
                              text-green-700 transition-transform duration-300
                              ${expanded ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 20 20" className="h-9 w-9 stroke-current">
                    <line x1="4" y1="10" x2="16" y2="10" strokeWidth="2.5" strokeLinecap="round" />
                    <line
                      x1="10"
                      y1="4"
                      x2="10"
                      y2="16"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className={expanded ? 'opacity-0' : 'opacity-100  transition-opacity'}
                    />
                  </svg>
                </span>
              </motion.button>

              {/* PANEL */}
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    id={`svc-panel-${i}`}
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="overflow-hidden rounded-lg bg-green-300"
                  >
                    <div className="pt-2 pl-0 sm:pl-1">
                      {/* description */}
                      <p className="max-w-3xl text-[15px] leading-7 text-left text-white">{item.desc}</p>

                    
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

