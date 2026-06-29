import { Benefit, VitalMethodStep, StepCard, Testimonial, FAQItem } from './types';

export const HERO_DATA = {
  headline: "Recupera tu energía, tu salud y tu mejor versión desde hoy.",
  subheadline: "Soy tu coach de salud y te acompaño a transformar tus hábitos con un método simple, natural y efectivo.",
  productHighlight: "Con el poder antioxidante de MultyDrink.",
  bullets: [
    "Más energía y vitalidad diaria",
    "Mejor digestión y absorción intestinal",
    "Fortalece tu sistema inmune de forma natural",
    "Ingredientes naturales, orgánicos y funcionales"
  ],
  coachImage: "/src/assets/images/wellness_coach_portrait_1782582910502.jpg",
  productImage: "/src/assets/images/multydrink_product_1782582896280.jpg",
  ctaPrimary: "Comienza Tu Transformación →",
  ctaSecondary: "Agendar Llamada Gratis 📞"
};

export const TRUST_INDICATORS = [
  {
    id: "lives",
    value: "+12,000",
    label: "Personas transformadas",
    description: "Vidas impactadas con éxito"
  },
  {
    id: "experience",
    value: "4+ Años",
    label: "De experiencia",
    description: "Acompañamiento profesional personalizado"
  },
  {
    id: "natural",
    value: "100% Natural",
    label: "Ingredientes premium",
    description: "Sin químicos ni aditivos artificiales"
  },
  {
    id: "results",
    value: "Resultados",
    label: "Comprobados",
    description: "Respaldado por testimonios reales"
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: "energy",
    title: "Más Energía y Vitalidad",
    description: "Combate la fatiga crónica y despierta con entusiasmo gracias a nutrientes celulares que optimizan tu mitocondria.",
    iconName: "Zap"
  },
  {
    id: "digestion",
    title: "Mejor Digestión",
    description: "Di adiós a la inflamación y pesadez estomacal. Tu intestino volverá a absorber nutrientes de forma ligera y eficiente.",
    iconName: "Activity"
  },
  {
    id: "focus",
    title: "Enfoque y Claridad Mental",
    description: "Mejora tu concentración y elimina la neblina cerebral con el poder protector de los antioxidantes neuronales.",
    iconName: "Brain"
  },
  {
    id: "aging",
    title: "Apoyo al Envejecimiento Saludable",
    description: "Protege tus células del daño oxidativo cotidiano, promoviendo la regeneración y la longevidad activa.",
    iconName: "Sparkles"
  },
  {
    id: "habits",
    title: "Hábitos Saludables Diarios",
    description: "Aprende a integrar rutinas simples que no interrumpen tu agenda y transforman tu bienestar de manera sostenible.",
    iconName: "Calendar"
  }
];

export const VITAL_METHOD: VitalMethodStep[] = [
  {
    letter: 'V',
    title: "Vitalidad Diaria",
    description: "Recupera tu energía desde la raíz celular.",
    extendedDescription: "Optimizamos tu energía interna regulando tus ciclos circadianos, nutrición rica en fitonutrientes y descanso reparador para que rindas al máximo sin depender del café en exceso."
  },
  {
    letter: 'I',
    title: "Intestino Saludable",
    description: "Mejora tu digestión y absorción integral.",
    extendedDescription: "El 90% de la serotonina y gran parte de tu inmunidad se crea en el intestino. Sanamos tu microbiota mediante alimentos fermentados, enzimas digestivas y prebióticos de MultyDrink."
  },
  {
    letter: 'T',
    title: "Transformación Progresiva",
    description: "Pequeños hábitos, grandes cambios.",
    extendedDescription: "Evitamos cambios drásticos e insostenibles. Implementamos micro-hábitos que se insertan de forma fluida en tu rutina de profesional ocupado, asegurando adherencia a largo plazo."
  },
  {
    letter: 'A',
    title: "Antioxidantes Naturales",
    description: "Protege tus células del estrés oxidativo.",
    extendedDescription: "Neutralizamos los radicales libres causados por el estrés de la vida moderna mediante una dosis diaria concentrada de los polifenoles y adaptógenos más potentes de la naturaleza."
  },
  {
    letter: 'L',
    title: "Longevidad",
    description: "Vive más y mejor cada día con salud vibrante.",
    extendedDescription: "Diseñamos una estrategia integral de envejecimiento saludable que no solo añade años a tu vida, sino vitalidad a tus años, permitiéndote disfrutar plenamente en cada etapa."
  }
];

export const PRODUCT_SHOWCASE = {
  title: "MultyDrink®",
  subtitle: "Tu aliado antioxidante para cada día.",
  description: "Una bebida botánica premium rica en antioxidantes y compuestos naturales que apoyan tu vitalidad, energía y bienestar integral.",
  bullets: [
    "Rico en antioxidantes naturales de uva y hongo reishi",
    "Apoya tu energía diaria de manera constante y sin bajones",
    "Ingredientes botánicos premium rigurosamente seleccionados",
    "Favorece tu bienestar digestivo e inmunológico integral"
  ],
  buttonText: "Conoce Más del Producto →",
  image: "/src/assets/images/multydrink_product_1782582896280.jpg",
  ingredients: [
    { name: "Extracto de Uva", role: "Rico en Resveratrol y potentes polifenoles" },
    { name: "Hongo Reishi", role: "Adaptógeno para el sistema inmune y estrés" },
    { name: "Acerola", role: "Concentrado de Vitamina C biodisponible" },
    { name: "Café Cherry", role: "Antioxidantes cerebrales y enfoque natural" },
    { name: "Miel Silvestre", role: "Suave endulzante funcional e inmunoestimulante" }
  ]
};

export const TRANSFORMATION_STEPS: StepCard[] = [
  {
    stepNumber: 1,
    title: "Guía Gratuita",
    description: "Descarga mi guía con los 5 hábitos clave para más energía y bienestar.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=600"
  },
  {
    stepNumber: 2,
    title: "Hábitos Diarios",
    description: "Aplica hábitos simples que transforman tu energía, digestión y enfoque celular.",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587caaec?auto=format&fit=crop&q=80&w=600"
  },
  {
    stepNumber: 3,
    title: "Coaching Uno a Uno",
    description: "Te acompaño de cerca para crear un plan personalizado que se adapte a tu estilo de vida.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
  },
  {
    stepNumber: 4,
    title: "MultyDrink®",
    description: "Integramos MultyDrink en tu rutina diaria para potenciar tu salud desde adentro.",
    image: "/src/assets/images/multydrink_product_1782582896280.jpg"
  },
  {
    stepNumber: 5,
    title: "Resultados Reales",
    description: "Vive con más energía, claridad mental, ligereza digestiva y bienestar sustentable.",
    image: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?auto=format&fit=crop&q=80&w=600"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "carolina",
    name: "Carolina M.",
    stars: 5,
    text: "Recuperé mi energía y mi digestión mejoró muchísimo. MultyDrink ha sido clave en mi transformación. Ya no siento pesadez después de comer y rindo el doble.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    designation: "Emprendedora, 34 años",
    metrics: "Energía restablecida + Digestión ligera"
  },
  {
    id: "andres",
    name: "Andrés R.",
    stars: 5,
    text: "Me siento mucho más enfocado, con más energía y una increíble claridad mental. Lo recomiendo al 100%. El Método VITAL se adaptó perfecto a mi agitada agenda de oficina.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    designation: "Consultor de Finanzas, 42 años",
    metrics: "Neblina cerebral eliminada + Alto rendimiento"
  },
  {
    id: "maria",
    name: "María G.",
    stars: 5,
    text: "Desde que tomo MultyDrink mi sistema inmune está más fuerte y me enfermo muchísimo menos. Mis niveles de inflamación bajaron drásticamente. ¡Es un antes y un después!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    designation: "Directora de Ventas, 48 años",
    metrics: "Defensas reforzadas + Antiinflamatorio"
  }
];

export const COMMUNITY_FEATURES = [
  {
    id: "support",
    title: "Grupo Privado de Soporte",
    description: "Acceso exclusivo a nuestra comunidad en Telegram donde compartimos dudas, logros y motivación diaria junto a otros profesionales en su camino de salud.",
    iconName: "Users"
  },
  {
    id: "coaching",
    title: "Sesiones de Coaching Semanal",
    description: "Clases grupales en vivo por Zoom para revisar hábitos, resolver dudas nutricionales y profundizar en las estrategias del Método VITAL.",
    iconName: "Video"
  },
  {
    id: "education",
    title: "Contenido Educativo Exclusivo",
    description: "Recetarios funcionales, guías de biohacking de la longevidad, y videos cortos con tips prácticos para mantener una salud vibrante en la vida real.",
    iconName: "BookOpen"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Qué es MultyDrink y cómo ayuda a mi salud?",
    answer: "MultyDrink es una bebida botánica premium cargada de poderosos antioxidantes de origen 100% natural. Su fórmula combina extractos de uva (ricos en resveratrol), hongo reishi, acerola (alta vitamina C), té verde y café cherry. Juntos, combaten el daño celular oxidativo, reducen la inflamación sistémica, apoyan tu digestión y te devuelven una energía limpia y duradera sin los picos de excitación del café convencional."
  },
  {
    id: "faq-2",
    question: "¿En qué consiste exactamente el Método VITAL?",
    answer: "El Método VITAL es mi sistema integral de coaching diseñado especialmente para profesionales ocupados. Se basa en 5 pilares: Vitalidad celular, Intestino saludable, Transformación progresiva (micro-hábitos), Antioxidantes naturales y Longevidad activa. En lugar de imponerte dietas restrictivas que abandonas a las dos semanas, te enseño hábitos sumamente sencillos y de alto impacto que se asimilan de forma natural en tu vida."
  },
  {
    id: "faq-3",
    question: "¿Cómo funciona la llamada de coaching gratuita?",
    answer: "Es una llamada de diagnóstico de 15 minutos sin compromiso. En ella conversaremos sobre tus principales retos actuales (falta de energía, indigestión, estrés) y evaluaremos tus hábitos cotidianos. Te daré un diagnóstico honesto y un plan de acción con los primeros 3 pasos prácticos que puedes dar desde el primer día para comenzar tu transformación."
  },
  {
    id: "faq-4",
    question: "¿Cuándo empezaré a notar los resultados?",
    answer: "La mayoría de las personas informan un aumento notable de energía y una digestión más ligera durante los primeros 7 a 10 días de integrar MultyDrink y aplicar las primeras guías de hábitos. Las transformaciones más profundas en tu composición corporal, claridad mental y sistema inmunológico se consolidan entre los 30 y 90 días de constancia."
  },
  {
    id: "faq-5",
    question: "¿Hacen envíos a todo el país y qué garantía tengo?",
    answer: "Sí, realizamos envíos exprés rápidos y seguros a todo el territorio nacional (entrega en 24 a 48 horas). Ofrecemos pasarelas de pago 100% seguras con tarjeta o transferencia. Además, confiamos tanto en el poder del método y el producto que te ofrecemos una Garantía de Satisfacción de 30 días: si no sientes la diferencia, te devolvemos el importe."
  }
];

export const FOOTER_TRUST_ITEMS = [
  {
    iconName: "Truck",
    title: "Envíos a todo el país",
    description: "Rápidos y seguros"
  },
  {
    iconName: "ShieldCheck",
    title: "Pago 100% seguro",
    description: "y totalmente confiable"
  },
  {
    iconName: "CheckCircle2",
    title: "Garantía de satisfacción",
    description: "30 días de prueba"
  }
];
