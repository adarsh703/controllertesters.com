import type { SupportedLang } from '../languages';
import type { FAQItem } from './indexContent';
import { localizedF1Faqs } from './f1Faqs';
import { localizedDriverScores, localizedTechniques, localizedRulesSteps } from './f1LocalizedData';

export interface F1DriverScore {
  driver: string;
  team: string;
  reactionTime: string;
  status: string;
}

export interface F1PageContent {
  title: string;
  description: string;
  keywords: string;
  heroBadge: string;
  heroHeading: string;
  heroSub: string;
  techniquesHeading: string;
  techniquesCards: Array<{ title: string; desc: string; tag: string }>;
  driversBadge: string;
  driversHeading: string;
  driversSub: string;
  driverScores: F1DriverScore[];
  rulesBadge: string;
  rulesHeading: string;
  rulesSteps: Array<{ step: string; title: string; desc: string }>;
  faqHeading: string;
  faqSub: string;
  faqs: FAQItem[];
}

export const f1Content: Record<SupportedLang, F1PageContent> = {
  en: {
    title: "F1 Reaction Time Test | Formula 1 Start Lights Reflex Simulator",
    description: "Free online F1 reaction time test and start lights simulator. Test your launch reaction time with a gamepad trigger, mouse click, or spacebar. Compare with Bottas & Verstappen.",
    keywords: "f1 reaction time test, formula 1 reaction test, f1 start lights simulator, f1 lights out test, reflex test online, controller reaction test, reaction time test, f1 reaction time",
    heroBadge: "FIA Standard Starting Telemetry",
    heroHeading: "F1 Start Lights Reaction Simulator",
    heroSub: "Train your launch reflexes against the official 5-red-light FIA starting gantry with randomized 0.2s to 3.0s computerized blackout holds.",
    techniquesHeading: "Formula 1 Reflex Conditioning Protocols",
    techniquesCards: localizedTechniques['en'],
    driversBadge: "Driver Leaderboard",
    driversHeading: "F1 Drivers Official Reaction Benchmarks",
    driversSub: "Benchmark your reaction speed against real telemetry records from modern Formula 1 drivers.",
    driverScores: localizedDriverScores['en'],
    rulesBadge: "FIA Sporting Regulations",
    rulesHeading: "Official Formula 1 Start Procedure",
    rulesSteps: localizedRulesSteps['en'],
    faqHeading: "Motorsport Knowledge Base",
    faqSub: "F1 Start Procedure & Reaction FAQ",
    faqs: localizedF1Faqs['en']
  },
  'pt-br': {
    title: "Teste de Tempo de Reação F1 | Simulador de Largada da Fórmula 1",
    description: "Teste seu tempo de reação no simulador oficial de largada da F1. Compare seu reflexo com Max Verstappen, Lewis Hamilton e Valtteri Bottas.",
    keywords: "teste de reacao f1, simulador de largada f1, tempo de reacao formula 1, reflexo f1",
    heroBadge: "Telemetria Padrão FIA",
    heroHeading: "Simulador de Largada de Fórmula 1",
    heroSub: "Treine seus reflexos contra o pórtico oficial de 5 luzes vermelhas da FIA com apagamento aleatório entre 0.2s e 3.0s.",
    techniquesHeading: "Técnicas de Reflexo dos Pilotos de F1",
    techniquesCards: localizedTechniques['pt-br'],
    driversBadge: "Tabela de Pilotos",
    driversHeading: "Benchmarks Oficiais de Pilotos de F1",
    driversSub: "Compare sua velocidade de reação com os tempos reais dos melhores pilotos do grid.",
    driverScores: localizedDriverScores['pt-br'],
    rulesBadge: "Regulamento da FIA",
    rulesHeading: "Procedimento Oficial de Largada na F1",
    rulesSteps: localizedRulesSteps['pt-br'],
    faqHeading: "Base de Conhecimento F1",
    faqSub: "Perguntas Frequentes",
    faqs: localizedF1Faqs['pt-br']
  },
  tr: {
    title: "F1 Reaksiyon Süresi Testi | Formula 1 Başlangıç Işıkları",
    description: "Ücretsiz online F1 reaksiyon süresi testi ve başlangıç ışıkları simülatörü. Verstappen ve Hamilton ile reflekslerinizi karşılaştırın.",
    keywords: "f1 reaksiyon testi, formula 1 tepki testi, f1 kalkış testi, f1 başlangıç simülatörü",
    heroBadge: "FIA Standart Telemetrisi",
    heroHeading: "F1 Başlangıç Işıkları Reaksiyon Simülatörü",
    heroSub: "FIA 5 kırmızı ışık başlangıç sistemine karşı reflekslerinizi test edin.",
    techniquesHeading: "F1 Pilotlarının Refleks Teknikleri",
    techniquesCards: localizedTechniques['tr'],
    driversBadge: "Pilot Dereceleri",
    driversHeading: "F1 Pilotları Reaksiyon Skorları",
    driversSub: "Skorunuzu gerçek Formula 1 pilotlarının verileriyle kıyaslayın.",
    driverScores: localizedDriverScores['tr'],
    rulesBadge: "FIA Kuralları",
    rulesHeading: "Resmi Formula 1 Başlangıç Prosedürü",
    rulesSteps: localizedRulesSteps['tr'],
    faqHeading: "F1 Bilgi Bankası",
    faqSub: "Sıkça Sorulan Sorular",
    faqs: localizedF1Faqs['tr']
  },
  ar: {
    title: "اختبار رد الفعل لإشارات انطلاق الفورمولا 1 | ControllerTesters.com",
    description: "اختبار سرعة الانطلاق في الفورمولا 1 ومحاكاة انطفاء أضواء البداية. قارن سرعتك مع ماكس فيرستابن ولويس هاميلتون.",
    keywords: "اختبار رد الفعل f1, محاكاة انطلاق فورمولا 1, قياس سرعة انطلاق f1, اختبار سرعة رد الفعل",
    heroBadge: "معايير الاتحاد الدولي للسيارات FIA",
    heroHeading: "محاكي انطلاق إشارات الفورمولا 1",
    heroSub: "اختبر سرعة رد فعلك مع أضواء الانطلاق الرسمية لسباقات الفورمولا 1 بدقة متناهية.",
    techniquesHeading: "أساليب تدريب سائقي الفورمولا 1",
    techniquesCards: localizedTechniques['ar'],
    driversBadge: "قائمة السائقين",
    driversHeading: "أرقام رد الفعل الرسمية لسائقي F1",
    driversSub: "قارن سرعتك بالمللي ثانية مع أسرع سائقي العالم.",
    driverScores: localizedDriverScores['ar'],
    rulesBadge: "لوائح FIA",
    rulesHeading: "إجراءات الانطلاق الرسمية في الفورمولا 1",
    rulesSteps: localizedRulesSteps['ar'],
    faqHeading: "قاعدة معرفة الفورمولا 1",
    faqSub: "الأسئلة الشائعة",
    faqs: localizedF1Faqs['ar']
  },
  es: {
    title: "Test de Tiempo de Reacción F1 | Simulador de Salida de Fórmula 1",
    description: "Test de salida de F1 online gratis. Mide tu tiempo de reacción con las 5 luces rojas y compárate con Verstappen, Alonso y Hamilton.",
    keywords: "test reaccion f1, simulador salida f1, tiempo de reaccion f1, luces salida formula 1",
    heroBadge: "Telemetría Oficial FIA",
    heroHeading: "Simulador de Salida de Fórmula 1",
    heroSub: "Entrena tus reflejos con el semáforo oficial de 5 luces rojas de la FIA y salida aleatoria.",
    techniquesHeading: "Técnicas de Reflejo de Pilotos de F1",
    techniquesCards: localizedTechniques['es'],
    driversBadge: "Récords de Pilotos",
    driversHeading: "Marcas Oficiales de Pilotos de F1",
    driversSub: "Compara tu marca con los tiempos de reacción de los mejores pilotos del mundo.",
    driverScores: localizedDriverScores['es'],
    rulesBadge: "Reglamento FIA",
    rulesHeading: "Procedimiento Oficial de Salida de F1",
    rulesSteps: localizedRulesSteps['es'],
    faqHeading: "Base de Conocimiento F1",
    faqSub: "Preguntas Frecuentes",
    faqs: localizedF1Faqs['es']
  },
  ja: {
    title: "F1スタート反射神経テスト | フォーミュラ1 反応速度測定",
    description: "無料のF1スタートライト反射テスト。5連レッドシグナル消灯時のスタートダッシュ反応速度を測定。フェルスタッペンやハミルトンと比較。",
    keywords: "f1反応速度テスト, f1スタートシミュレーター, フォーミュラ1反射テスト, f1リアクションテスト",
    heroBadge: "FIA公式規格テレメトリ",
    heroHeading: "F1スタートシグナル 反射シミュレーター",
    heroSub: "0.2秒〜3.0秒のランダム消灯に対応するFIA公式5連レッドシグナルで反射神経を鍛えましょう。",
    techniquesHeading: "F1ドライバーの反射トレーニング",
    techniquesCards: localizedTechniques['ja'],
    driversBadge: "ドライバー記録",
    driversHeading: "F1ドライバー公式 反応速度記録",
    driversSub: "トップドライバーの実走テレメトリデータとあなたの記録を比較。",
    driverScores: localizedDriverScores['ja'],
    rulesBadge: "FIA競技規則",
    rulesHeading: "F1公式スタート手順とルール",
    rulesSteps: localizedRulesSteps['ja'],
    faqHeading: "F1 ナレッジベース",
    faqSub: "よくある質問",
    faqs: localizedF1Faqs['ja']
  },
  fr: {
    title: "Test de Temps de Réaction F1 | Simulateur de Départ Formule 1",
    description: "Simulateur de départ officiel de Formule 1. Mesurez votre temps de réaction à l'extinction des 5 feux rouges de la FIA.",
    keywords: "test reaction f1, simulateur depart f1, temps de reaction f1, reflexe f1",
    heroBadge: "Télémétrie Officielle FIA",
    heroHeading: "Simulateur de Départ de Formule 1",
    heroSub: "Entraînez vos réflexes avec le portique officiel FIA à 5 feux rouges et extinction aléatoire.",
    techniquesHeading: "Techniques des Pilotes de F1",
    techniquesCards: localizedTechniques['fr'],
    driversBadge: "Temps des Pilotes",
    driversHeading: "Temps de Réaction des Pilotes de F1",
    driversSub: "Comparez vos résultats avec les pilotes du championnat du monde.",
    driverScores: localizedDriverScores['fr'],
    rulesBadge: "Règlement FIA",
    rulesHeading: "Procédure Officielle de Départ en F1",
    rulesSteps: localizedRulesSteps['fr'],
    faqHeading: "Base de Connaissances F1",
    faqSub: "Foire Aux Questions",
    faqs: localizedF1Faqs['fr']
  },
  de: {
    title: "F1 Reaktionszeit-Test | Formel 1 Startampel Reflex-Simulator",
    description: "Kostenloser F1-Startampel-Simulator. Testen Sie Ihre Reaktionszeit beim Erlöschen der 5 roten Startlichter und vergleichen Sie sich mit Verstappen.",
    keywords: "f1 reaktionszeit test, formel 1 startampel simulator, f1 reaktionstest",
    heroBadge: "FIA-Standard Telemetrie",
    heroHeading: "F1 Startampel Reaktions-Simulator",
    heroSub: "Reagieren Sie auf die offizielle FIA-Startampel mit zufälliger Haltedauer zwischen 0.2s und 3.0s.",
    techniquesHeading: "Reflex-Techniken der F1-Piloten",
    techniquesCards: localizedTechniques['de'],
    driversBadge: "Fahrertabelle",
    driversHeading: "Reaktionszeiten der F1-Fahrer",
    driversSub: "Vergleichen Sie Ihre Messwerte mit echten Formel-1-Profis.",
    driverScores: localizedDriverScores['de'],
    rulesBadge: "FIA-Reglement",
    rulesHeading: "Offizielles F1-Startverfahren",
    rulesSteps: localizedRulesSteps['de'],
    faqHeading: "F1 Wissensdatenbank",
    faqSub: "Häufig Gestellte Fragen",
    faqs: localizedF1Faqs['de']
  },
  pt: {
    title: "Teste de Tempo de Reação F1 | Simulador de Partida de Fórmula 1",
    description: "Teste o seu tempo de reação no simulador oficial de partida da F1. Compare os seus reflexos com Verstappen, Hamilton e Bottas.",
    keywords: "teste de reacao f1, simulador de partida f1, tempo de reacao formula 1, reflexos f1",
    heroBadge: "Telemetria Padrão FIA",
    heroHeading: "Simulador de Partida de Fórmula 1",
    heroSub: "Treine os seus reflexos contra o semáforo oficial de 5 luzes vermelhas da FIA.",
    techniquesHeading: "Técnicas de Reflexos dos Pilotos de F1",
    techniquesCards: localizedTechniques['pt'],
    driversBadge: "Tabela de Pilotos",
    driversHeading: "Tempos Oficiais de Pilotos de F1",
    driversSub: "Compare o seu tempo de reação com pilotos do campeonato mundial.",
    driverScores: localizedDriverScores['pt'],
    rulesBadge: "Regulamento FIA",
    rulesHeading: "Procedimento Oficial de Partida na F1",
    rulesSteps: localizedRulesSteps['pt'],
    faqHeading: "Base de Conhecimento F1",
    faqSub: "Perguntas Frequentes",
    faqs: localizedF1Faqs['pt']
  },
  ko: {
    title: "F1 반응속도 테스트 | 포뮬러 1 출발 신호등 시뮬레이터",
    description: "무료 온라인 F1 출발 신호등 반응속도 테스트. 5개 적색 신호등이 꺼지는 순간 반응하여 베르스타펜, 해밀턴과 비교해보세요.",
    keywords: "f1 반응속도 테스트, 포뮬러 1 출발 시뮬레이터, f1 반사신경 테스트, f1 출발 반응",
    heroBadge: "FIA 공식 규격 텔레메트리",
    heroHeading: "F1 출발 신호등 반응속도 시뮬레이터",
    heroSub: "0.2초에서 3.0초 사이 무작위로 소등되는 FIA 공식 5개 적색등 신호에 맞춰 출발 반응속도를 측정하세요.",
    techniquesHeading: "F1 드라이버의 반사신경 훈련법",
    techniquesCards: localizedTechniques['ko'],
    driversBadge: "드라이버 순위표",
    driversHeading: "F1 드라이버 공식 반응속도 벤치마크",
    driversSub: "세계 최고 F1 드라이버들의 실제 반응속도 데이터와 비교해보세요.",
    driverScores: localizedDriverScores['ko'],
    rulesBadge: "FIA 규정",
    rulesHeading: "공식 포뮬러 1 출발 절차",
    rulesSteps: localizedRulesSteps['ko'],
    faqHeading: "F1 지식 베이스",
    faqSub: "자주 묻는 질문",
    faqs: localizedF1Faqs['ko']
  },
  it: {
    title: "Test Tempo di Reazione F1 | Simulatore Partenza Formula 1",
    description: "Simulatore di partenza di Formula 1 online gratuito. Misura il tempo di reazione allo spegnimento dei 5 semafori rossi FIA.",
    keywords: "test reazione f1, simulatore partenza f1, tempo di reazione f1, riflessi f1",
    heroBadge: "Telemetria Ufficiale FIA",
    heroHeading: "Simulatore di Partenza di Formula 1",
    heroSub: "Allena i tuoi riflessi contro il semaforo ufficiale FIA a 5 luci rosse con spegnimento casuale.",
    techniquesHeading: "Tecniche dei Piloti di F1",
    techniquesCards: localizedTechniques['it'],
    driversBadge: "Classifica Piloti",
    driversHeading: "Tempi Ufficiali dei Piloti di F1",
    driversSub: "Confronta il tuo tempo di reazione con i migliori piloti di Formula 1.",
    driverScores: localizedDriverScores['it'],
    rulesBadge: "Regolamento FIA",
    rulesHeading: "Procedura Ufficiale di Partenza in F1",
    rulesSteps: localizedRulesSteps['it'],
    faqHeading: "Base di Conoscenza F1",
    faqSub: "Domande Frequenti",
    faqs: localizedF1Faqs['it']
  }
};
