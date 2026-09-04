import type { SupportedLang } from '../languages';
import type { FAQItem } from './indexContent';
import { localizedStickDriftFaqs } from './stickDriftFaqs';
import { localizedCircularityTiers, localizedCauses, localizedFixes } from './stickDriftLocalizedData';

export interface CircularityTier {
  range: string;
  grade: string;
  desc: string;
  statusColor: string;
}

export interface StickDriftPageContent {
  title: string;
  description: string;
  keywords: string;
  heroBadge: string;
  heroHeading: string;
  heroSub: string;
  diagnosticsHeading: string;
  diagnosticsCards: Array<{ title: string; desc: string; tag: string }>;
  circularityBadge: string;
  circularityHeading: string;
  circularitySub: string;
  circularityTiers: CircularityTier[];
  causesBadge: string;
  causesHeading: string;
  causes: Array<{ title: string; desc: string; tag: string }>;
  fixesBadge: string;
  fixesHeading: string;
  fixesSteps: Array<{ step: string; title: string; desc: string }>;
  faqHeading: string;
  faqSub: string;
  faqs: FAQItem[];
}

export const stickDriftContent: Record<SupportedLang, StickDriftPageContent> = {
  en: {
    title: "Stick Drift Test Online | Controller Drift & Circularity Benchmark",
    description: "Free online stick drift test and circularity benchmark. Measure resting drift, deadzone offset, axis jitter, and 360° circularity error for PS5 DualSense, Xbox, Switch, and PC.",
    keywords: "stick drift test, controller drift test, test stick drift online, ps5 stick drift test, xbox stick drift test, joystick drift test, hall effect stick test, deadzone tester",
    heroBadge: "High-Precision Potentiometer Telemetry",
    heroHeading: "Stick Drift & Deadzone Benchmark",
    heroSub: "Measure resting drift percentage, center coordinate displacement, jitter noise, and 360° circular error on left and right analog thumbsticks.",
    diagnosticsHeading: "Drift Diagnostic Protocols",
    diagnosticsCards: [
      { tag: "01", title: "Resting Center Drift", desc: "Leave sticks untouched for 3 seconds to measure spring return tolerance and potentiometer offset deviation." },
      { tag: "02", title: "High-Frequency Jitter Noise", desc: "Detect rapid coordinate fluctuations and electrical noise caused by carbon track debris or loose contact wipers." },
      { tag: "03", title: "360° Polar Circularity Error", desc: "Rotate thumbsticks along the outer gate to plot circularity distortion, gate clipping, and cardinal bias." }
    ],
    circularityBadge: "Circularity Analysis",
    circularityHeading: "360° Circularity Error Rating Scale",
    circularitySub: "Benchmark your analog stick boundary geometry against factory tolerances and esports standards.",
    circularityTiers: localizedCircularityTiers['en'],
    causesBadge: "Hardware Anatomy",
    causesHeading: "What Causes Controller Stick Drift?",
    causes: localizedCauses['en'],
    fixesBadge: "Troubleshooting Guide",
    fixesHeading: "How to Fix Stick Drift & Calibrate Deadzones",
    fixesSteps: localizedFixes['en'],
    faqHeading: "Stick Drift Diagnostic Knowledge Base",
    faqSub: "Frequently Asked Questions",
    faqs: localizedStickDriftFaqs['en']
  },
  'pt-br': {
    title: "Teste de Stick Drift Online | Medição de Drift e Circularidade",
    description: "Teste online grátis de stick drift e circularidade no analógico. Meça o drift em repouso, desvio de zona morta e erro de circularidade para PS5, Xbox e PC.",
    keywords: "teste de stick drift, teste de drift controle, testar drift controle ps5, teste drift analógico",
    heroBadge: "Telemetria de Alta Precisão",
    heroHeading: "Teste de Stick Drift e Zona Morta",
    heroSub: "Meça a porcentagem de drift em repouso, deslocamento do ponto central, ruído de jitter e erro de circularidade em 360°.",
    diagnosticsHeading: "Protocolos de Diagnóstico de Drift",
    diagnosticsCards: [
      { tag: "01", title: "Drift em Repouso", desc: "Deixe os analógicos parados para medir a tolerância da mola central e o desvio do potenciômetro." },
      { tag: "02", title: "Ruído de Jitter", desc: "Detecta oscilações rápidas causadas por poeira de grafite nas trilhas resistivas." },
      { tag: "03", title: "Erro de Circularidade 360°", desc: "Gire os analógicos na borda para mapear distorções no formato do círculo." }
    ],
    circularityBadge: "Análise de Circularidade",
    circularityHeading: "Escala de Erro de Circularidade 360°",
    circularitySub: "Compare a precisão geométrica dos seus analógicos com os padrões oficiais de fábrica.",
    circularityTiers: localizedCircularityTiers['pt-br'],
    causesBadge: "Anatomia do Hardware",
    causesHeading: "O que Causa Stick Drift no Controle?",
    causes: localizedCauses['pt-br'],
    fixesBadge: "Guia de Solução",
    fixesHeading: "Como Corrigir Stick Drift e Ajustar Deadzones",
    fixesSteps: localizedFixes['pt-br'],
    faqHeading: "Base de Conhecimento sobre Stick Drift",
    faqSub: "Perguntas Frequentes",
    faqs: localizedStickDriftFaqs['pt-br']
  },
  tr: {
    title: "Stick Drift Testi Online | Kol Drift ve Dairesellik Ölçümü",
    description: "Ücretsiz online stick drift ve dairesellik testi. PS5, Xbox ve PC kolları için analog kayması ve ölü bölge ölçümü.",
    keywords: "stick drift testi, analog kayması testi, ps5 stick drift testi, xbox drift testi",
    heroBadge: "Hassas Potansiyometre Telemetrisi",
    heroHeading: "Stick Drift ve Ölü Bölge Testi",
    heroSub: "Analog çubukların merkez kaymasını, jitter gürültüsünü ve 360° dairesellik hatasını ölçün.",
    diagnosticsHeading: "Drift Tanılama Protokolleri",
    diagnosticsCards: [
      { tag: "01", title: "Boşta Merkez Kayması", desc: "Analog çubukları dokunmadan bırakarak merkezleme sapmasını ölçün." },
      { tag: "02", title: "Yüksek Frekanslı Jitter", desc: "Karbon temas yüzeyindeki aşınmalardan kaynaklanan parazitleri tespit edin." },
      { tag: "03", title: "360° Dairesellik Hatası", desc: "Dairesellik sınırını çizerek sapma oranını hesaplayın." }
    ],
    circularityBadge: "Dairesellik Analizi",
    circularityHeading: "360° Dairesellik Hata Derecelendirmesi",
    circularitySub: "Analog çubuklarınızın doğruluğunu fabrika standartlarıyla karşılaştırın.",
    circularityTiers: localizedCircularityTiers['tr'],
    causesBadge: "Donanım Yapısı",
    causesHeading: "Stick Drift Neden Oluşur?",
    causes: localizedCauses['tr'],
    fixesBadge: "Sorun Giderme",
    fixesHeading: "Stick Drift Nasıl Düzeltilir ve Kalibre Edilir?",
    fixesSteps: localizedFixes['tr'],
    faqHeading: "Stick Drift Bilgi Bankası",
    faqSub: "Sıkça Sorulan Sorular",
    faqs: localizedStickDriftFaqs['tr']
  },
  ar: {
    title: "اختبار انحراف الأنالوج Stick Drift أونلاين | فحص دقة يد التحكم",
    description: "اختبار مجاني أونلاين لقياس درفت الأنالوج وانحراف المحور وحساب نسبة الخطأ الدائري لـ PS5 و Xbox و PC.",
    keywords: "فحص درفت الانالوج, اختبار stick drift, فحص يد سوني 5 درفت, اختبار يد التحكم",
    heroBadge: "قياسات دقيقة لحركة الأنالوج",
    heroHeading: "فحص درفت الأنالوج ونسبة الدائرية",
    heroSub: "قياس نسبة الانحراف في وضع السكون والاهتزاز العشوائي والخطأ الدائري في الأنالوج الأيمن والأيسر.",
    diagnosticsHeading: "بروتوكولات فحص الدرفت",
    diagnosticsCards: [
      { tag: "01", title: "الانحراف في وضع السكون", desc: "اترك الأنالوج بدون لمس لقياس مدى عودة السبرينغ للمركز بدقة." },
      { tag: "02", title: "الاهتزاز العشوائي Jitter", desc: "كشف التذبذبات السريعة الناتجة عن تراكم الغبار على مسارات المقاومة." },
      { tag: "03", title: "الخطأ الدائري 360 درجة", desc: "تدوير الأنالوج على الحافة الخارجية لحساب نسبة التشوه الدائري." }
    ],
    circularityBadge: "تحليل الدائرية",
    circularityHeading: "مقياس جودة الدائرية 360 درجة",
    circularitySub: "مقارنة هندسة حركة الأنالوج مع معايير المصنع وبطولات الألعاب الإلكترونية.",
    circularityTiers: localizedCircularityTiers['ar'],
    causesBadge: "أسباب المشكلة",
    causesHeading: "ما الذي يسبب درفت الأنالوج في يد التحكم؟",
    causes: localizedCauses['ar'],
    fixesBadge: "دليل الصيانة",
    fixesHeading: "كيفية إصلاح درفت الأنالوج وضبط منطقة الموت Deadzone",
    fixesSteps: localizedFixes['ar'],
    faqHeading: "قاعدة معرفة درفت الأنالوج",
    faqSub: "الأسئلة الشائعة",
    faqs: localizedStickDriftFaqs['ar']
  },
  es: {
    title: "Test de Stick Drift Online | Medición de Deriva y Circularidad",
    description: "Test online gratuito de stick drift y circularidad de joysticks. Mide la deriva en reposo y el error de circularidad para PS5, Xbox y PC.",
    keywords: "test stick drift, medir drift mando, test deriva joystick, stick drift ps5",
    heroBadge: "Telemetría de Precisión",
    heroHeading: "Test de Stick Drift y Zona Muerta",
    heroSub: "Mide el porcentaje de deriva en reposo, desplazamiento central, ruido de jitter y error de circularidad 360°.",
    diagnosticsHeading: "Protocolos de Diagnóstico de Drift",
    diagnosticsCards: [
      { tag: "01", title: "Deriva en Reposo", desc: "Deja los joysticks sin tocar para medir la tolerancia del muelle central." },
      { tag: "02", title: "Ruido de Jitter", desc: "Detecta oscilaciones erráticas por suciedad en las pistas de carbono." },
      { tag: "03", title: "Error de Circularidad 360°", desc: "Gira el stick por el borde exterior para evaluar la deformación circular." }
    ],
    circularityBadge: "Análisis de Circularidad",
    circularityHeading: "Escala de Error de Circularidad 360°",
    circularitySub: "Compara la geometría de tus sticks con los estándares de fábrica.",
    circularityTiers: localizedCircularityTiers['es'],
    causesBadge: "Causas del Hardware",
    causesHeading: "¿Qué Causa el Stick Drift en los Mandos?",
    causes: localizedCauses['es'],
    fixesBadge: "Guía de Reparación",
    fixesHeading: "Cómo Solucionar el Stick Drift y Ajustar Deadzones",
    fixesSteps: localizedFixes['es'],
    faqHeading: "Base de Conocimiento de Stick Drift",
    faqSub: "Preguntas Frecuentes",
    faqs: localizedStickDriftFaqs['es']
  },
  ja: {
    title: "スティックドリフト測定オンライン | コントローラーの偏り診断",
    description: "無料のオンラインスティックドリフト測定＆円形度ベンチマーク。PS5、Xbox、Switchのドリフトと中心ズレを測定。",
    keywords: "スティックドリフト測定, コントローラードリフト確認, スティック勝手に動く, ドリフト診断",
    heroBadge: "高精度ポテンショメータ診断",
    heroHeading: "スティックドリフト＆デッドゾーン測定",
    heroSub: "静止時のドリフト率、中心座標のズレ、ジッターノイズ、360度円形度エラーを正確に計測。",
    diagnosticsHeading: "ドリフト診断プロトコル",
    diagnosticsCards: [
      { tag: "01", title: "静止時中心ドリフト", desc: "スティックに触れずにスプリングの復元精度とズレを測定。" },
      { tag: "02", title: "ジッターノイズ検出", desc: "カーボン粉塵や接触不良による微細な座標のブレを検出。" },
      { tag: "03", title: "360度円形度エラー", desc: "外周をなぞるように回して入力範囲の歪みを可視化。" }
    ],
    circularityBadge: "円形度解析",
    circularityHeading: "360度円形度エラー評価基準",
    circularitySub: "アナログスティックの入力限界精度をメーカー標準値と比較します。",
    circularityTiers: localizedCircularityTiers['ja'],
    causesBadge: "ハードウェア構造",
    causesHeading: "スティックドリフトの原因とは？",
    causes: localizedCauses['ja'],
    fixesBadge: "改善ガイド",
    fixesHeading: "スティックドリフトの対処法とデッドゾーン調整",
    fixesSteps: localizedFixes['ja'],
    faqHeading: "スティックドリフト ナレッジベース",
    faqSub: "よくある質問",
    faqs: localizedStickDriftFaqs['ja']
  },
  fr: {
    title: "Test de Stick Drift en Ligne | Mesure du Drift et de la Circularité",
    description: "Test de stick drift en ligne gratuit. Mesurez le drift au repos, le décalage de zone morte et l'erreur de circularité 360° pour manettes PS5, Xbox et PC.",
    keywords: "test stick drift, tester drift manette, stick drift ps5, joystick drift test",
    heroBadge: "Télémétrie Haute Précision",
    heroHeading: "Test de Stick Drift & Zone Morte",
    heroSub: "Mesurez le pourcentage de drift au repos, le jitter et l'erreur de circularité 360° sur vos joysticks.",
    diagnosticsHeading: "Protocoles de Diagnostic de Drift",
    diagnosticsCards: [
      { tag: "01", title: "Drift au Repos", desc: "Laissez les joysticks immobiles pour mesurer la déviation du centre." },
      { tag: "02", title: "Bruit de Jitter", desc: "Détecte les micro-oscillations dues à l'usure des pistes résistives." },
      { tag: "03", title: "Erreur de Circularité 360°", desc: "Faites tourner les joysticks sur le contour extérieur pour évaluer la précision." }
    ],
    circularityBadge: "Analyse de Circularité",
    circularityHeading: "Échelle de Précision de Circularité 360°",
    circularitySub: "Évaluez la géométrie de vos joysticks par rapport aux normes d'usine.",
    circularityTiers: localizedCircularityTiers['fr'],
    causesBadge: "Causes Matérielles",
    causesHeading: "Qu'est-ce qui Provoque le Stick Drift ?",
    causes: localizedCauses['fr'],
    fixesBadge: "Guide de Dépannage",
    fixesHeading: "Comment Corriger le Stick Drift et Régler les Deadzones",
    fixesSteps: localizedFixes['fr'],
    faqHeading: "Base de Connaissances Stick Drift",
    faqSub: "Foire Aux Questions",
    faqs: localizedStickDriftFaqs['fr']
  },
  de: {
    title: "Stick Drift Test Online | Joystick Drift & Zirkularitätsmessung",
    description: "Kostenloser Online-Stick-Drift-Test. Messen Sie Ruhedrift, Deadzone-Abweichungen und 360°-Zirkularitätsfehler für PS5, Xbox und PC.",
    keywords: "stick drift test, controller drift testen, stick drift ps5, joystick drift messen",
    heroBadge: "Präzisions-Telemetrie",
    heroHeading: "Stick Drift & Deadzone Benchmark",
    heroSub: "Messen Sie den prozentualen Ruhedrift, die Zentrierungsabweichung und den Zirkularitätsfehler Ihrer Analogsticks.",
    diagnosticsHeading: "Drift-Diagnoseprotokolle",
    diagnosticsCards: [
      { tag: "01", title: "Ruhedrift-Messung", desc: "Messen Sie die Federückstellung ohne Berührung des Sticks." },
      { tag: "02", title: "Jitter-Rauschen", desc: "Erkennt schnelle Spannungsschwankungen durch Kohlenstaub auf den Leiterbahnen." },
      { tag: "03", title: "360° Zirkularitätsfehler", desc: "Rotieren Sie den Stick außen, um Geometrie-Abweichungen darzustellen." }
    ],
    circularityBadge: "Zirkularitäts-Analyse",
    circularityHeading: "360° Zirkularitäts-Bewertungsskala",
    circularitySub: "Vergleichen Sie Ihre Stick-Präzision mit den Werkstoleranzen.",
    circularityTiers: localizedCircularityTiers['de'],
    causesBadge: "Hardware-Ursachen",
    causesHeading: "Was Verursacht Stick Drift bei Gamepads?",
    causes: localizedCauses['de'],
    fixesBadge: "Reparaturanleitung",
    fixesHeading: "Stick Drift Beheben & Deadzones Einstellen",
    fixesSteps: localizedFixes['de'],
    faqHeading: "Stick Drift Wissensdatenbank",
    faqSub: "Häufig Gestellte Fragen",
    faqs: localizedStickDriftFaqs['de']
  },
  pt: {
    title: "Teste de Stick Drift Online | Análise de Manípulos e Circularidade",
    description: "Teste de stick drift online gratuito. Meça o desvio em repouso, ruído nos eixos e erro de circularidade 360° para comandos PS5, Xbox e PC.",
    keywords: "teste de stick drift, teste drift comando, comando a puxar para o lado, stick drift ps5",
    heroBadge: "Telemetria de Alta Precisão",
    heroHeading: "Teste de Stick Drift e Zonas Mortas",
    heroSub: "Meça a percentagem de drift em repouso, o desvio do ponto central e o erro de circularidade em 360°.",
    diagnosticsHeading: "Protocolos de Diagnóstico de Drift",
    diagnosticsCards: [
      { tag: "01", title: "Drift em Repouso", desc: "Deixe os manípulos imóveis para avaliar o retorno da mola central." },
      { tag: "02", title: "Ruído de Jitter", desc: "Deteta oscilações rápidas causadas por desgaste no potenciómetro." },
      { tag: "03", title: "Erro de Circularidade 360°", desc: "Gire os manípulos no limite exterior para avaliar a deformação do círculo." }
    ],
    circularityBadge: "Análise de Circularidade",
    circularityHeading: "Escala de Avaliação de Circularidade 360°",
    circularitySub: "Compare a precisão dos seus manípulos com os padrões de fábrica.",
    circularityTiers: localizedCircularityTiers['pt'],
    causesBadge: "Causas do Problema",
    causesHeading: "O que Provoca Stick Drift nos Comandos?",
    causes: localizedCauses['pt'],
    fixesBadge: "Guia de Soluções",
    fixesHeading: "Como Resolver Stick Drift e Ajustar Deadzones",
    fixesSteps: localizedFixes['pt'],
    faqHeading: "Base de Conhecimento Stick Drift",
    faqSub: "Perguntas Frequentes",
    faqs: localizedStickDriftFaqs['pt']
  },
  ko: {
    title: "스틱 쏠림(Drift) 테스트 온라인 | 컨트롤러 원형도 벤치마크",
    description: "무료 온라인 스틱 쏠림 및 원형도 테스트. PS5, Xbox, Switch 컨트롤러의 아날로그 스틱 쏠림, 데드존 오차, 360도 원형도 측정.",
    keywords: "스틱 쏠림 테스트, 컨트롤러 드리프트 테스트, 조이스틱 쏠림, ps5 스틱 쏠림, xbox 패드 쏠림",
    heroBadge: "초정밀 아날로그 텔레메트리",
    heroHeading: "스틱 쏠림(Drift) 및 데드존 측정",
    heroSub: "아날로그 스틱의 정지 시 쏠림 비율, 중심축 편차, 지터 노이즈 및 360도 원형도 왜곡을 정밀 측정합니다.",
    diagnosticsHeading: "스틱 쏠림 진단 프로토콜",
    diagnosticsCards: [
      { tag: "01", title: "정지 상태 쏠림 측정", desc: "스틱에 손을 대지 않고 3초간 중심 복원력과 편차를 측정합니다." },
      { tag: "02", title: "고주파 지터 노이즈", desc: "탄소 피막 마모 및 이물질로 인한 미세 좌표 떨림을 감지합니다." },
      { tag: "03", title: "360도 극좌표 원형도", desc: "외곽 테두리를 따라 회전하며 원형 왜곡률을 분석합니다." }
    ],
    circularityBadge: "원형도 분석",
    circularityHeading: "360도 원형도 오차 등급 기준",
    circularitySub: "사용 중인 컨트롤러의 아날로그 기하학적 정밀도를 공장 기준과 비교하세요.",
    circularityTiers: localizedCircularityTiers['ko'],
    causesBadge: "하드웨어 구조",
    causesHeading: "컨트롤러 스틱 쏠림이 발생하는 원인은?",
    causes: localizedCauses['ko'],
    fixesBadge: "해결 가이드",
    fixesHeading: "스틱 쏠림 해결 및 데드존 보정 방법",
    fixesSteps: localizedFixes['ko'],
    faqHeading: "스틱 쏠림 진단 지식 베이스",
    faqSub: "자주 묻는 질문",
    faqs: localizedStickDriftFaqs['ko']
  },
  it: {
    title: "Test Stick Drift Online | Calibrazione e Circolarità Gamepad",
    description: "Test stick drift online gratuito. Misura il drift a riposo, la deviazione della deadzone e l'errore di circolarità 360° per PS5, Xbox e PC.",
    keywords: "test stick drift, controller drift test, stick drift ps5, levetta che si muove da sola",
    heroBadge: "Telemetria ad Alta Precisione",
    heroHeading: "Test Stick Drift & Zona Morta",
    heroSub: "Misura la percentuale di drift a riposo, lo spostamento delle coordinate centrali e l'errore di circolarità a 360°.",
    diagnosticsHeading: "Protocolli di Diagnostica Drift",
    diagnosticsCards: [
      { tag: "01", title: "Drift a Riposo", desc: "Lascia le levette ferme per misurare la tolleranza della molla di ritorno." },
      { tag: "02", title: "Rumore di Jitter", desc: "Rileva oscillazioni anomale causate da detriti sulle piste conduttive." },
      { tag: "03", title: "Errore di Circolarità 360°", desc: "Ruota la levetta lungo il perimetro per calcolare la distorsione." }
    ],
    circularityBadge: "Analisi Circolarità",
    circularityHeading: "Scala di Valutazione Circolarità 360°",
    circularitySub: "Verifica la geometria delle tue levette rispetto agli standard di fabbrica.",
    circularityTiers: localizedCircularityTiers['it'],
    causesBadge: "Cause Hardware",
    causesHeading: "Cosa Causa lo Stick Drift nei Controller?",
    causes: localizedCauses['it'],
    fixesBadge: "Guida alla Risoluzione",
    fixesHeading: "Come Risolvere lo Stick Drift e Calibrare le Deadzone",
    fixesSteps: localizedFixes['it'],
    faqHeading: "Base di Conoscenza Stick Drift",
    faqSub: "Domande Frequenti",
    faqs: localizedStickDriftFaqs['it']
  }
};
