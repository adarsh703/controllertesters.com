import type { SupportedLang } from '../languages';
import type { FAQItem } from './indexContent';
import { localizedReactionMatrixFaqs } from './reactionMatrixFaqs';
import { localizedRankingTiers, localizedScienceCards, localizedTrainingTips } from './reactionMatrixLocalizedData';

export interface ReflexRankingTier {
  time: string;
  tier: string;
  category: string;
  desc: string;
  color: string;
}

export interface ReactionMatrixPageContent {
  title: string;
  description: string;
  keywords: string;
  heroBadge: string;
  heroHeading: string;
  heroSub: string;
  modesHeading: string;
  modesCards: Array<{ title: string; desc: string; tag: string }>;
  rankingBadge: string;
  rankingHeading: string;
  rankingSub: string;
  rankingTiers: ReflexRankingTier[];
  scienceBadge: string;
  scienceHeading: string;
  scienceCards: Array<{ tag: string; title: string; desc: string }>;
  trainingBadge: string;
  trainingHeading: string;
  trainingTips: Array<{ step: string; title: string; desc: string }>;
  faqHeading: string;
  faqSub: string;
  faqs: FAQItem[];
}

export const reactionMatrixContent: Record<SupportedLang, ReactionMatrixPageContent> = {
  en: {
    title: "Human Reaction Time Test & Controller Reflex Benchmark",
    description: "Free online human reaction time test and reflex benchmark. Measure simple reaction time and multi-choice decision speed with a gamepad, mouse, or keyboard.",
    keywords: "reaction time test, reflex test online, controller reaction test, gamepad reaction test, human benchmark reaction test, choice reaction time test, f1 reaction test",
    heroBadge: "Millisecond Reflex Telemetry",
    heroHeading: "Human Reaction Time Benchmark",
    heroSub: "Evaluate simple trigger reaction speed and multi-choice gamepad decision latency with high-precision sub-millisecond timers.",
    modesHeading: "Reflex Diagnostic Modes",
    modesCards: [
      { tag: "01", title: "F1 Start Lights Mode", desc: "Single-stimulus visual reaction test simulating the 5-red-light extinction sequence of Formula 1 starting grids." },
      { tag: "02", title: "Choice Reaction Matrix", desc: "Multi-stimulus cognitive decision benchmark measuring target recognition across 18 unique gamepad buttons." },
      { tag: "03", title: "Auditory Sound Reflex", desc: "High-frequency audio tone reaction benchmark testing cochlear nerve pathways versus visual retinal lag." }
    ],
    rankingBadge: "Reflex Classification",
    rankingHeading: "Human Reaction Time Ranking Scale",
    rankingSub: "Compare your millisecond reflex score against global esports benchmarks and athletic percentiles.",
    rankingTiers: localizedRankingTiers['en'],
    scienceBadge: "Neuroscience",
    scienceHeading: "The Science of Human Reflexes & Latency",
    scienceCards: localizedScienceCards['en'],
    trainingBadge: "Optimization Guide",
    trainingHeading: "How to Improve Your Reaction Time",
    trainingTips: localizedTrainingTips['en'],
    faqHeading: "Reaction Knowledge Base",
    faqSub: "Reaction Time & Reflex FAQ",
    faqs: localizedReactionMatrixFaqs['en']
  },
  'pt-br': {
    title: "Teste de Tempo de Reação & Reflexos | ControllerTesters.com",
    description: "Teste de reflexos e tempo de reação online grátis. Meça sua velocidade de reação visual e tomada de decisão com controle, mouse ou teclado.",
    keywords: "teste de reflexo, teste de tempo de reação, human benchmark controle, teste reflexo f1",
    heroBadge: "Telemetria de Reflexos em Milissegundos",
    heroHeading: "Benchmark de Tempo de Reação Humana",
    heroSub: "Avalie sua velocidade de reação visual e tomada de decisão com cronômetros de alta precisão.",
    modesHeading: "Modos de Diagnóstico de Reflexos",
    modesCards: [
      { tag: "01", title: "Modo Largada de F1", desc: "Simula o apagamento das 5 luzes vermelhas da Fórmula 1 para testar reflexo visual puro." },
      { tag: "02", title: "Matriz de Escolha Múltipla", desc: "Avalia a tomada de decisão rápida entre diferentes botões do controle." },
      { tag: "03", title: "Reflexo Auditivo", desc: "Testa a velocidade da via auditiva em comparação com o atraso da retina visual." }
    ],
    rankingBadge: "Classificação de Reflexos",
    rankingHeading: "Tabela de Classificação de Tempo de Reação",
    rankingSub: "Compare sua pontuação em milissegundos com atletas de e-sports e pilotos de F1.",
    rankingTiers: localizedRankingTiers['pt-br'],
    scienceBadge: "Neurociência",
    scienceHeading: "A Ciência dos Reflexos Humanos e Latência",
    scienceCards: localizedScienceCards['pt-br'],
    trainingBadge: "Guia de Treinamento",
    trainingHeading: "Como Melhorar seu Tempo de Reação",
    trainingTips: localizedTrainingTips['pt-br'],
    faqHeading: "Base de Conhecimento sobre Reflexos",
    faqSub: "Perguntas Frequentes",
    faqs: localizedReactionMatrixFaqs['pt-br']
  },
  tr: {
    title: "Reaksiyon Süresi Testi & Refleks Ölçümü | ControllerTesters.com",
    description: "Ücretsiz online insan reaksiyon süresi ve refleks testi. Gamepad, klavye veya fare ile milisaniye bazında refleks ölçümü.",
    keywords: "reaksiyon testi, refleks testi online, f1 reaksiyon testi, oyun kolu tepki testi",
    heroBadge: "Milisaniyelik Refleks Telemetrisi",
    heroHeading: "İnsan Reaksiyon Süresi Testi",
    heroSub: "Görsel ve bilişsel tepki hızınızı yüksek hassasiyetli zamanlayıcılarla ölçün.",
    modesHeading: "Refleks Test Modları",
    modesCards: [
      { tag: "01", title: "F1 Başlangıç Işıkları", desc: "Formula 1 başlangıç ışıklarının sönme anına göre görsel reaksiyon testi." },
      { tag: "02", title: "Çoklu Karar Matrisi", desc: "Farklı buton hedeflerine hızlı karar verme yeteneğinizi ölçer." },
      { tag: "03", title: "İşitsel Ses Refleksi", desc: "Sesli uyaranlara verilen tepki süresini ölçer." }
    ],
    rankingBadge: "Refleks Sıralaması",
    rankingHeading: "Reaksiyon Süresi Seviye Tablosu",
    rankingSub: "Milisaniye skorunuzu espor oyuncuları ve F1 pilotlarıyla karşılaştırın.",
    rankingTiers: localizedRankingTiers['tr'],
    scienceBadge: "Nörobilim",
    scienceHeading: "Refleksler ve İletim Hızının Bilimi",
    scienceCards: localizedScienceCards['tr'],
    trainingBadge: "Gelişim Rehberi",
    trainingHeading: "Reaksiyon Sürenizi Nasıl Geliştirebilirsiniz?",
    trainingTips: localizedTrainingTips['tr'],
    faqHeading: "Reaksiyon Bilgi Bankası",
    faqSub: "Sıkça Sorulan Sorular",
    faqs: localizedReactionMatrixFaqs['tr']
  },
  ar: {
    title: "اختبار سرعة رد الفعل والانعكاسات أونلاين | ControllerTesters.com",
    description: "اختبار مجاني لقياس زمن الاستجابة ورد الفعل البشري بالمللي ثانية ليد التحكم والفأرة ولوحة المفاتيح.",
    keywords: "اختبار سرعة رد الفعل, اختبار رد الفعل f1, قياس سرعة الاستجابة, reflex test",
    heroBadge: "قياسات رد الفعل بالمللي ثانية",
    heroHeading: "اختبار سرعة رد الفعل البشري",
    heroSub: "قياس سرعة الاستجابة البصرية والقرارات السريعة باستخدام أدوات توقيت فائقة الدقة.",
    modesHeading: "أوضاع فحص رد الفعل",
    modesCards: [
      { tag: "01", title: "إشارات انطلاق الفورمولا 1", desc: "محاكاة انطفاء أضواء F1 لقياس سرعة الاستجابة البصرية الخالصة." },
      { tag: "02", title: "مصفوفة الاختيار المتعدد", desc: "قياس سرعة المعالجة العقلية عند الضغط على الزر المطلوب." },
      { tag: "03", title: "رد الفعل الصوتي", desc: "اختبار سرعة الاستجابة للإشارات الصوتية مقارنة بالإشارات البصرية." }
    ],
    rankingBadge: "تصنيف المستويات",
    rankingHeading: "جدول تصنيف سرعة رد الفعل البشري",
    rankingSub: "قارن سرعتك بالمللي ثانية مع لاعبي الرياضات الإلكترونية المحترفين.",
    rankingTiers: localizedRankingTiers['ar'],
    scienceBadge: "علم الأعصاب",
    scienceHeading: "علم الاستجابة والانعكاسات العصبية",
    scienceCards: localizedScienceCards['ar'],
    trainingBadge: "دليل التدريب",
    trainingHeading: "كيف تطور وتحسن من سرعة رد فعلك؟",
    trainingTips: localizedTrainingTips['ar'],
    faqHeading: "قاعدة معرفة رد الفعل",
    faqSub: "الأسئلة الشائعة",
    faqs: localizedReactionMatrixFaqs['ar']
  },
  es: {
    title: "Test de Tiempo de Reacción & Reflejos | ControllerTesters.com",
    description: "Test de reflejos online gratuito. Mide tu tiempo de reacción visual y toma de decisiones con mando, ratón o teclado.",
    keywords: "test de reaccion, test de reflejos online, test f1 reaccion, medir reflejos",
    heroBadge: "Telemetría de Reflejos en Milisegundos",
    heroHeading: "Test de Tiempo de Reacción Humana",
    heroSub: "Evalúa tu velocidad de reacción ante estímulos visuales y decisiones complejas con mandos.",
    modesHeading: "Modos de Diagnóstico de Reflejos",
    modesCards: [
      { tag: "01", title: "Luces de Salida F1", desc: "Simulación de salida de Fórmula 1 para medir reflejos visuales directos." },
      { tag: "02", title: "Matriz de Decisión Múltiple", desc: "Evalúa el tiempo de decisión entre distintos botones del mando." },
      { tag: "03", title: "Reflejo Auditivo", desc: "Mide la velocidad de respuesta ante estímulos sonoros." }
    ],
    rankingBadge: "Clasificación de Reflejos",
    rankingHeading: "Tabla de Niveles de Tiempo de Reacción",
    rankingSub: "Compara tu marca en milisegundos con jugadores profesionales.",
    rankingTiers: localizedRankingTiers['es'],
    scienceBadge: "Neurociencia",
    scienceHeading: "La Ciencia de los Reflejos y la Latencia",
    scienceCards: localizedScienceCards['es'],
    trainingBadge: "Guía de Mejora",
    trainingHeading: "Cómo Mejorar tu Tiempo de Reacción",
    trainingTips: localizedTrainingTips['es'],
    faqHeading: "Base de Conocimiento de Reflejos",
    faqSub: "Preguntas Frecuentes",
    faqs: localizedReactionMatrixFaqs['es']
  },
  ja: {
    title: "反射神経測定テスト & 反応速度ベンチマーク | ControllerTesters.com",
    description: "無料のオンライン反射神経測定テスト。F1スタートシミュレーターやゲームパッドでの選択反応速度をミリ秒単位で計測。",
    keywords: "反射神経テスト, 反応速度測定, f1反射テスト, 反射神経ゲーム, コントローラー反応速度",
    heroBadge: "ミリ秒単位の反射テレメトリ",
    heroHeading: "反射神経・反応速度ベンチマーク",
    heroSub: "視覚刺激への反応速度と複数ボタンの判断速度を高精度タイマーで測定します。",
    modesHeading: "反射神経診断モード",
    modesCards: [
      { tag: "01", title: "F1スタートシグナル", desc: "5つのレッドシグナル消灯に反応する純粋な視覚反射テスト。" },
      { tag: "02", title: "選択反応マトリックス", desc: "指示されたボタンを瞬時に判断して押す認知判断テスト。" },
      { tag: "03", title: "聴覚反射テスト", desc: "音の合図に対する反応速度を計測。" }
    ],
    rankingBadge: "反射神経ランク",
    rankingHeading: "人間の反応速度 ランク付け基準",
    rankingSub: "あなたの反射速度をプロゲーマーやF1ドライバーと比較。",
    rankingTiers: localizedRankingTiers['ja'],
    scienceBadge: "脳科学",
    scienceHeading: "反射神経と伝達遅延のメカニズム",
    scienceCards: localizedScienceCards['ja'],
    trainingBadge: "トレーニング",
    trainingHeading: "反応速度を向上させる方法",
    trainingTips: localizedTrainingTips['ja'],
    faqHeading: "反射神経 ナレッジベース",
    faqSub: "よくある質問",
    faqs: localizedReactionMatrixFaqs['ja']
  },
  fr: {
    title: "Test de Temps de Réaction & Réflexes | ControllerTesters.com",
    description: "Test de réflexes en ligne gratuit. Mesurez votre temps de réaction visuel et décisionnel avec manette, souris ou clavier.",
    keywords: "test de reaction, test de reflexes, test f1 reaction, reflexe manette",
    heroBadge: "Télémétrie des Réflexes",
    heroHeading: "Test de Temps de Réaction Humaine",
    heroSub: "Mesurez votre vitesse de réflexe et de prise de décision au millième de seconde près.",
    modesHeading: "Modes de Diagnostic",
    modesCards: [
      { tag: "01", title: "Feux de Départ F1", desc: "Simulateur de départ F1 pour tester vos réflexes visuels." },
      { tag: "02", title: "Matrice de Choix Multiple", desc: "Évalue la rapidité de traitement de l'information." },
      { tag: "03", title: "Réflexe Auditif", desc: "Mesure le temps de réaction aux stimuli sonores." }
    ],
    rankingBadge: "Classement",
    rankingHeading: "Échelle de Classement des Réflexes",
    rankingSub: "Comparez votre score en millisecondes aux pilotes de course professionnels.",
    rankingTiers: localizedRankingTiers['fr'],
    scienceBadge: "Neurosciences",
    scienceHeading: "La Science des Réflexes Humains",
    scienceCards: localizedScienceCards['fr'],
    trainingBadge: "Entraînement",
    trainingHeading: "Comment Améliorer Vos Réflexes",
    trainingTips: localizedTrainingTips['fr'],
    faqHeading: "Base de Connaissances Réflexes",
    faqSub: "Foire Aux Questions",
    faqs: localizedReactionMatrixFaqs['fr']
  },
  de: {
    title: "Reaktionszeit-Test & Reflex Benchmark | ControllerTesters.com",
    description: "Kostenloser Online-Reaktionszeittest. Messen Sie visuelle Reaktionsgeschwindigkeit und Entscheidungszeiten mit Gamepad oder Tastatur.",
    keywords: "reaktionszeit test, reflex test online, f1 reaktionstest, reaktionsgeschwindigkeit",
    heroBadge: "Millisekunden-Telemetrie",
    heroHeading: "Menschlicher Reaktionszeit-Benchmark",
    heroSub: "Messen Sie Ihre Reaktions- und Entscheidungsgeschwindigkeit mit Sub-Millisekunden-Genauigkeit.",
    modesHeading: "Reflex-Diagnosemodi",
    modesCards: [
      { tag: "01", title: "F1 Startampel-Modus", desc: "Reagieren Sie auf das Erlöschen der 5 roten Startlichter der Formel 1." },
      { tag: "02", title: "Entscheidungs-Matrix", desc: "Testet die kognitive Reaktionszeit bei verschiedenen Tastenbefehlen." },
      { tag: "03", title: "Akustischer Reflex", desc: "Misst die Reaktionszeit auf Tonsignale." }
    ],
    rankingBadge: "Reflex-Rangliste",
    rankingHeading: "Reaktionszeit-Bewertungsskala",
    rankingSub: "Vergleichen Sie Ihre Reaktionszeit mit E-Sport-Profis und F1-Piloten.",
    rankingTiers: localizedRankingTiers['de'],
    scienceBadge: "Neurowissenschaft",
    scienceHeading: "Die Wissenschaft Menschlicher Reflexe",
    scienceCards: localizedScienceCards['de'],
    trainingBadge: "Trainingstipps",
    trainingHeading: "So Verbessern Sie Ihre Reaktionszeit",
    trainingTips: localizedTrainingTips['de'],
    faqHeading: "Reaktionszeit Wissensdatenbank",
    faqSub: "Häufig Gestellte Fragen",
    faqs: localizedReactionMatrixFaqs['de']
  },
  pt: {
    title: "Teste de Tempo de Reação & Reflexos | ControllerTesters.com",
    description: "Teste de reflexos online gratuito. Meça o seu tempo de reação visual e velocidade de decisão com comando, rato ou teclado.",
    keywords: "teste de reflexos, tempo de reacao teste, reflexos f1, reflexo comando",
    heroBadge: "Telemetria de Reflexos",
    heroHeading: "Teste de Tempo de Reação Humana",
    heroSub: "Avalie a sua velocidade de reação visual com temporizadores de alta precisão.",
    modesHeading: "Modos de Diagnóstico",
    modesCards: [
      { tag: "01", title: "Luzes de Partida F1", desc: "Simula o apagamento das luzes de partida da Fórmula 1." },
      { tag: "02", title: "Matriz de Escolha Múltipla", desc: "Avalia a decisão rápida entre botões do comando." },
      { tag: "03", title: "Reflexo Auditivo", desc: "Testa a velocidade de reação a sinais sonoros." }
    ],
    rankingBadge: "Classificação",
    rankingHeading: "Tabela de Níveis de Reação",
    rankingSub: "Compare a sua velocidade em milissegundos com pilotos profissionais.",
    rankingTiers: localizedRankingTiers['pt'],
    scienceBadge: "Neurociência",
    scienceHeading: "A Ciência dos Reflexos e Latência",
    scienceCards: localizedScienceCards['pt'],
    trainingBadge: "Guia de Treino",
    trainingHeading: "Como Melhorar a Sua Velocidade de Reação",
    trainingTips: localizedTrainingTips['pt'],
    faqHeading: "Base de Conhecimento Reflexos",
    faqSub: "Perguntas Frequentes",
    faqs: localizedReactionMatrixFaqs['pt']
  },
  ko: {
    title: "반응속도 테스트 & 반사신경 벤치마크 | ControllerTesters.com",
    description: "무료 온라인 인간 반응속도 테스트. F1 출발 신호 및 게임패드 다중 선택 반응속도를 밀리초 단위로 측정.",
    keywords: "반응속도 테스트, 반사신경 측정, f1 반응속도, 게임패드 반응 테스트",
    heroBadge: "밀리초 반사신경 텔레메트리",
    heroHeading: "인간 반응속도 벤치마크",
    heroSub: "초정밀 타이머로 시각적 반응속도와 게임패드 다중 선택 반응 시간을 측정하세요.",
    modesHeading: "반사신경 진단 모드",
    modesCards: [
      { tag: "01", title: "F1 출발 신호등 모드", desc: "포뮬러 1 출발 신호등 5개가 소등되는 순간 반응하는 시각 테스트." },
      { tag: "02", title: "선택 반응 매트릭스", desc: "화면에 지시된 버튼을 빠르게 판단하여 누르는 인지 속도 측정." },
      { tag: "03", title: "청각 반응 테스트", desc: "소리 신호에 반응하는 신경 전달 속도 측정." }
    ],
    rankingBadge: "반응속도 등급",
    rankingHeading: "인간 반응속도 등급표",
    rankingSub: "밀리초 반응속도를 프로게이머 및 F1 드라이버와 비교하세요.",
    rankingTiers: localizedRankingTiers['ko'],
    scienceBadge: "뇌신경과학",
    scienceHeading: "반사신경과 인지 지연의 과학",
    scienceCards: localizedScienceCards['ko'],
    trainingBadge: "향상 가이드",
    trainingHeading: "반응속도를 단축하고 향상하는 방법",
    trainingTips: localizedTrainingTips['ko'],
    faqHeading: "반응속도 지식 베이스",
    faqSub: "자주 묻는 질문",
    faqs: localizedReactionMatrixFaqs['ko']
  },
  it: {
    title: "Test Tempo di Reazione & Riflessi | ControllerTesters.com",
    description: "Test del tempo di reazione online gratuito. Misura la velocità di reazione visiva e decisionale con gamepad, mouse o tastiera.",
    keywords: "test tempo di reazione, test riflessi online, f1 reaction test, riflessi gamepad",
    heroBadge: "Telemetria dei Riflessi",
    heroHeading: "Test del Tempo di Reazione Umano",
    heroSub: "Valuta la tua velocità di reazione visiva e cognitiva con timer ad altissima precisione.",
    modesHeading: "Modalità di Diagnostica",
    modesCards: [
      { tag: "01", title: "Semaforo di Partenza F1", desc: "Simula lo spegnimento delle luci rosse della Formula 1." },
      { tag: "02", title: "Matrice di Scelta Multipla", desc: "Valuta la velocità di decisione tra diversi tasti del controller." },
      { tag: "03", title: "Riflesso Uditivo", desc: "Misura il tempo di risposta ai segnali sonori." }
    ],
    rankingBadge: "Classifica Riflessi",
    rankingHeading: "Scala di Valutazione dei Tempi di Reazione",
    rankingSub: "Confronta il tuo punteggio in millisecondi con i piloti professionisti.",
    rankingTiers: localizedRankingTiers['it'],
    scienceBadge: "Neuroscienze",
    scienceHeading: "La Scienza dei Riflessi e della Latenza",
    scienceCards: localizedScienceCards['it'],
    trainingBadge: "Guida all'Allenamento",
    trainingHeading: "Come Migliorare il Tuo Tempo di Reazione",
    trainingTips: localizedTrainingTips['it'],
    faqHeading: "Base di Conoscenza Riflessi",
    faqSub: "Domande Frequenti",
    faqs: localizedReactionMatrixFaqs['it']
  }
};
