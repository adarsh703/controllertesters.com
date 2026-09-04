import type { SupportedLang } from '../languages';
import { localizedIndexFaqs } from './allFaqs';
import { localizedMatrixPlatforms, localizedSpecs, localizedMaintenanceSteps } from './indexLocalizedData';

export interface FAQItem {
  q: string;
  a: string;
}

export interface MatrixPlatform {
  platform: string;
  desc: string;
  color: string;
}

export interface MaintenanceStep {
  step: string;
  title: string;
  desc: string;
}

export interface MeasurementSpec {
  tag: string;
  title: string;
  desc: string;
}

export interface PageContent {
  title: string;
  description: string;
  keywords: string;
  heroBadge: string;
  heroHeading: string;
  heroSub: string;
  instructionsHeading: string;
  instructionsSteps: string[];
  matrixBadge: string;
  matrixHeading: string;
  matrixStandard: string;
  matrixPlatforms: MatrixPlatform[];
  specsBadge: string;
  specsHeading: string;
  specs: MeasurementSpec[];
  maintenanceBadge: string;
  maintenanceHeading: string;
  maintenanceSteps: MaintenanceStep[];
  faqHeading: string;
  faqSub: string;
  faqs: FAQItem[];
}

export const indexContent: Record<SupportedLang, PageContent> = {
  en: {
    title: "Gamepad Tester & Controller Tester Online | ControllerTesters.com",
    description: "Free online gamepad tester & controller tester. Test stick drift, buttons, vibration rumble, analog triggers, and polling rate for PS5, Xbox, Switch, and PC controllers.",
    keywords: "gamepad tester, controller tester, online controller tester, xbox controller tester, ps5 controller tester, html5 gamepad tester, stick drift test, pc controller tester, gamepad tester online, windows gamepad tester, game controller tester",
    heroBadge: "Zero Latency Gamepad Telemetry",
    heroHeading: "Online Controller Tester & Gamepad Diagnostics",
    heroSub: "Connect any USB or Bluetooth gamepad to inspect button responsiveness, stick drift, analog trigger travel, vibration rumble, and live polling rate.",
    instructionsHeading: "How to Test Your Controller Online",
    instructionsSteps: [
      "Plug your gamepad via USB cable or pair it via Bluetooth to your PC, Mac, Android, or iOS device.",
      "Press any button or move a thumbstick to wake up the browser HTML5 Gamepad API.",
      "Test all 17+ digital buttons, D-pad directions, triggers (L2/R2, LT/RT), and thumbsticks in real-time."
    ],
    matrixBadge: "Universal Support",
    matrixHeading: "Universal Hardware Compatibility Matrix",
    matrixStandard: "Standard HTML5 W3C Protocol",
    matrixPlatforms: localizedMatrixPlatforms['en'],
    specsBadge: "Diagnostic Principles",
    specsHeading: "Hardware Telemetry & Measurement Specifications",
    specs: localizedSpecs['en'],
    maintenanceBadge: "Maintenance Guide",
    maintenanceHeading: "Controller Troubleshooting & Stick Drift Fix Guide",
    maintenanceSteps: localizedMaintenanceSteps['en'],
    faqHeading: "Controller Diagnostic Knowledge Base",
    faqSub: "Frequently Asked Questions",
    faqs: localizedIndexFaqs['en']
  },
  'pt-br': {
    title: "Gamepad Tester & Teste de Controle Online | ControllerTesters.com",
    description: "Teste de controle e gamepad online grátis. Teste stick drift, botões, vibração rumble, gatilhos analógicos e taxa de polling para controles PS5, Xbox, Switch e PC.",
    keywords: "gamepad tester, teste de controle, testar controle online, teste controle xbox, teste controle ps5, teste de drift controle, gamepad tester brasil, testar joystick online",
    heroBadge: "Telemetria de Gamepad com Zero Latência",
    heroHeading: "Teste de Controle e Gamepad Online",
    heroSub: "Conecte qualquer controle USB ou Bluetooth para verificar a resposta dos botões, drift analógico, curso dos gatilhos, vibração e taxa de polling em tempo real.",
    instructionsHeading: "Como Testar seu Controle Online",
    instructionsSteps: [
      "Conecte seu controle via cabo USB ou emparelhe via Bluetooth no PC, Mac, Android ou iOS.",
      "Pressione qualquer botão ou mova um analógico para ativar a API HTML5 Gamepad do navegador.",
      "Teste todos os botões digitais, direcionais (D-pad), gatilhos (L2/R2, LT/RT) e analógicos em tempo real."
    ],
    matrixBadge: "Compatibilidade Universal",
    matrixHeading: "Matriz de Compatibilidade de Hardware",
    matrixStandard: "Protocolo W3C HTML5 Padrão",
    matrixPlatforms: localizedMatrixPlatforms['pt-br'],
    specsBadge: "Princípios de Diagnóstico",
    specsHeading: "Especificações de Telemetria e Medição",
    specs: localizedSpecs['pt-br'],
    maintenanceBadge: "Guia de Manutenção",
    maintenanceHeading: "Como Resolver Stick Drift e Calibrar",
    maintenanceSteps: localizedMaintenanceSteps['pt-br'],
    faqHeading: "Base de Conhecimento e Diagnóstico de Controles",
    faqSub: "Perguntas Frequentes",
    faqs: localizedIndexFaqs['pt-br']
  },
  tr: {
    title: "Gamepad Tester & Kol Testi Online | ControllerTesters.com",
    description: "Ücretsiz çevrimiçi gamepad ve kol testi. PS5, Xbox, Switch ve PC kolları için stick drift, tuşlar, titreşim ve polling rate testi.",
    keywords: "gamepad tester, kol testi, online kol testi, xbox kol testi, ps5 kol testi, stick drift testi, oyun kolu testi",
    heroBadge: "Sıfır Gecikmeli Kol Telemetrisi",
    heroHeading: "Online Oyun Kolu ve Gamepad Testi",
    heroSub: "Herhangi bir USB veya Bluetooth oyun kolunu bağlayarak tuş hassasiyetini, stick drifti, tetik hareketini ve iletim hızını test edin.",
    instructionsHeading: "Oyun Kolunuzu Nasıl Test Edebilirsiniz?",
    instructionsSteps: [
      "Oyun kolunuzu USB kablosuyla bağlayın veya Bluetooth ile eşleştirin.",
      "Tarayıcının HTML5 Gamepad API'sini etkinleştirmek için herhangi bir tuşa basın.",
      "Tüm tuşları, D-pad yönlerini, tetikleri ve analog çubukları test edin."
    ],
    matrixBadge: "Evrensel Destek",
    matrixHeading: "Donanım Uyumluluk Matrisi",
    matrixStandard: "W3C HTML5 Standart Protokolü",
    matrixPlatforms: localizedMatrixPlatforms['tr'],
    specsBadge: "Tanılama İlkeleri",
    specsHeading: "Telemetri ve Ölçüm Özellikleri",
    specs: localizedSpecs['tr'],
    maintenanceBadge: "Bakım Rehberi",
    maintenanceHeading: "Stick Drift Sorun Giderme ve Çözüm",
    maintenanceSteps: localizedMaintenanceSteps['tr'],
    faqHeading: "Oyun Kolu Tanılama Bilgi Bankası",
    faqSub: "Sıkça Sorulan Sorular",
    faqs: localizedIndexFaqs['tr']
  },
  ar: {
    title: "فحص يد التحكم وقياس استجابة الأذرع أونلاين | ControllerTesters.com",
    description: "أداة مجانية لفحص أذرع التحكم عبر المتصفح. اختبار انحراف الأنالوج والأزرار والاهتزاز وسرعة الاستجابة لـ PS5 و Xbox و PC.",
    keywords: "فحص يد التحكم, اختبار يد سوني, اختبار يد اكس بوكس, فحص درفت الانالوج, gamepad tester ar",
    heroBadge: "قياسات دقيقة بدون تأخير",
    heroHeading: "فحص واختبار أذرع التحكم أونلاين",
    heroSub: "قم بتوصيل يد التحكم عبر USB أو البلوتوث لفحص الأزرار وانحراف الأنالوج وقوة الاهتزاز وسرعة الإرسال مباشرة.",
    instructionsHeading: "كيفية فحص يد التحكم أونلاين",
    instructionsSteps: [
      "قم بتوصيل يد التحكم عبر كابل USB أو عبر البلوتوث بالكمبيوتر أو الهاتف.",
      "اضغط على أي زر لتنشيط واجهة Gamepad API في المتصفح.",
      "اختبر جميع الأزرار والأسهم والأنالوج والمحفزات في الوقت الفعلي."
    ],
    matrixBadge: "دعم شامل",
    matrixHeading: "جدول توافق الأجهزة ووحدات التحكم",
    matrixStandard: "معيار W3C HTML5",
    matrixPlatforms: localizedMatrixPlatforms['ar'],
    specsBadge: "مبادئ الفحص",
    specsHeading: "المواصفات التقنية وقياسات الأداء",
    specs: localizedSpecs['ar'],
    maintenanceBadge: "دليل الصيانة",
    maintenanceHeading: "حل مشكلة درفت الأنالوج ومعايرة اليد",
    maintenanceSteps: localizedMaintenanceSteps['ar'],
    faqHeading: "قاعدة معرفة فحص أذرع التحكم",
    faqSub: "الأسئلة الشائعة",
    faqs: localizedIndexFaqs['ar']
  },
  es: {
    title: "Gamepad Tester & Test de Mando Online | ControllerTesters.com",
    description: "Herramienta online gratuita para probar mandos. Test de stick drift, botones, vibración, gatillos analógicos y polling rate para PS5, Xbox, Switch y PC.",
    keywords: "gamepad tester, test de mando, probar mando online, test mando ps5, test mando xbox, stick drift mando",
    heroBadge: "Telemetría de Mando sin Latencia",
    heroHeading: "Test de Mando y Gamepad Online",
    heroSub: "Conecta cualquier mando USB o Bluetooth para inspeccionar la respuesta de los botones, stick drift, gatillos y vibración en tiempo real.",
    instructionsHeading: "Cómo Probar tu Mando Online",
    instructionsSteps: [
      "Conecta tu mando por cable USB o emparéjalo por Bluetooth a tu PC, Mac o móvil.",
      "Presiona cualquier botón para activar la API Gamepad del navegador.",
      "Prueba todos los botones, D-pad, gatillos y joysticks en tiempo real."
    ],
    matrixBadge: "Compatibilidad Universal",
    matrixHeading: "Matriz de Compatibilidad de Hardware",
    matrixStandard: "Estándar W3C HTML5",
    matrixPlatforms: localizedMatrixPlatforms['es'],
    specsBadge: "Principios de Diagnóstico",
    specsHeading: "Especificaciones de Telemetría y Rendimiento",
    specs: localizedSpecs['es'],
    maintenanceBadge: "Guía de Mantenimiento",
    maintenanceHeading: "Cómo Solucionar el Stick Drift y Calibrar",
    maintenanceSteps: localizedMaintenanceSteps['es'],
    faqHeading: "Base de Conocimiento de Mandos",
    faqSub: "Preguntas Frecuentes",
    faqs: localizedIndexFaqs['es']
  },
  ja: {
    title: "コントローラーテスター & ゲームパッド診断 | ControllerTesters.com",
    description: "無料のオンラインコントローラーテスター。PS5、Xbox、Switch、PCのスティックドリフト、ボタン、振動、ポーリングレートを測定。",
    keywords: "コントローラーテスター, ゲームパッドテスト, スティックドリフト確認, ps5コントローラー診断, xboxコントローラーテスト",
    heroBadge: "遅延ゼロのコントローラー診断",
    heroHeading: "オンラインコントローラーテスター",
    heroSub: "USBまたはBluetoothでゲームパッドを接続し、ボタンの応答性、ドリフト、トリガー、振動をリアルタイムに診断。",
    instructionsHeading: "コントローラーのテスト方法",
    instructionsSteps: [
      "USBケーブルまたはBluetoothでコントローラーをPCやスマホに接続します。",
      "いずれかのボタンを押してブラウザのGamepad APIを起動します。",
      "ボタン、十字キー、アナログスティック、トリガーをテストします。"
    ],
    matrixBadge: "対応デバイス",
    matrixHeading: "ハードウェア対応マトリックス",
    matrixStandard: "W3C HTML5 標準プロトコル",
    matrixPlatforms: localizedMatrixPlatforms['ja'],
    specsBadge: "診断基準",
    specsHeading: "テレメトリ測定仕様",
    specs: localizedSpecs['ja'],
    maintenanceBadge: "メンテナンス",
    maintenanceHeading: "スティックドリフトの対処法と調整",
    maintenanceSteps: localizedMaintenanceSteps['ja'],
    faqHeading: "コントローラー診断ナレッジベース",
    faqSub: "よくある質問",
    faqs: localizedIndexFaqs['ja']
  },
  fr: {
    title: "Gamepad Tester & Test de Manette en Ligne | ControllerTesters.com",
    description: "Test de manette en ligne gratuit. Testez le stick drift, les boutons, les gâchettes et le polling rate pour manettes PS5, Xbox, Switch et PC.",
    keywords: "gamepad tester, test de manette, tester manette ps5, tester manette xbox, stick drift test",
    heroBadge: "Télémétrie Sans Latence",
    heroHeading: "Test de Manette et Gamepad en Ligne",
    heroSub: "Connectez votre manette USB ou Bluetooth pour vérifier la réponse des boutons, le drift des joysticks et les vibrations.",
    instructionsHeading: "Comment Tester Votre Manette en Ligne",
    instructionsSteps: [
      "Branchez votre manette en USB ou associez-la en Bluetooth.",
      "Appuyez sur un bouton pour activer l'API Gamepad du navigateur.",
      "Testez l'ensemble des boutons, joysticks et gâchettes en direct."
    ],
    matrixBadge: "Compatibilité Universelle",
    matrixHeading: "Matrice de Compatibilité Matérielle",
    matrixStandard: "Protocole Standard W3C HTML5",
    matrixPlatforms: localizedMatrixPlatforms['fr'],
    specsBadge: "Principes de Diagnostic",
    specsHeading: "Spécifications de Mesure et Télémétrie",
    specs: localizedSpecs['fr'],
    maintenanceBadge: "Guide de Maintenance",
    maintenanceHeading: "Comment Corriger le Stick Drift",
    maintenanceSteps: localizedMaintenanceSteps['fr'],
    faqHeading: "Base de Connaissances Manettes",
    faqSub: "Foire Aux Questions",
    faqs: localizedIndexFaqs['fr']
  },
  de: {
    title: "Gamepad Tester & Controller Test Online | ControllerTesters.com",
    description: "Kostenloser Online-Controller-Tester. Testen Sie Stick-Drift, Tasten, Vibration und Polling-Rate für PS5, Xbox, Switch und PC.",
    keywords: "gamepad tester, controller test, stick drift testen, ps5 controller test, xbox controller test",
    heroBadge: "Latenzfreie Gamepad-Telemetrie",
    heroHeading: "Online Gamepad & Controller Tester",
    heroSub: "Verbinden Sie Ihren Controller per USB oder Bluetooth, um Tastenreaktion, Stick-Drift und Vibration zu prüfen.",
    instructionsHeading: "So Testen Sie Ihren Controller Online",
    instructionsSteps: [
      "Verbinden Sie den Controller per USB oder koppeln Sie ihn via Bluetooth.",
      "Drücken Sie eine beliebige Taste, um die Gamepad-API zu aktivieren.",
      "Prüfen Sie alle Tasten, Analog-Sticks und Trigger in Echtzeit."
    ],
    matrixBadge: "Universelle Unterstützung",
    matrixHeading: "Hardware-Kompatibilitätsmatrix",
    matrixStandard: "W3C HTML5 Standardprotokoll",
    matrixPlatforms: localizedMatrixPlatforms['de'],
    specsBadge: "Diagnose-Prinzipien",
    specsHeading: "Telemetrie & Messspezifikationen",
    specs: localizedSpecs['de'],
    maintenanceBadge: "Wartungsanleitung",
    maintenanceHeading: "Stick-Drift Behebung & Kalibrierung",
    maintenanceSteps: localizedMaintenanceSteps['de'],
    faqHeading: "Controller Diagnose Wissensdatenbank",
    faqSub: "Häufig Gestellte Fragen",
    faqs: localizedIndexFaqs['de']
  },
  pt: {
    title: "Diagnóstico de Comando & Gamepad Tester | ControllerTesters.com",
    description: "Teste de comandos online gratuito. Teste stick drift, botões, gatilhos analógicos e polling rate para comandos PS5, Xbox e PC.",
    keywords: "gamepad tester, teste de comando, testar comando ps5, testar comando xbox, stick drift comando",
    heroBadge: "Telemetria com Zero Latência",
    heroHeading: "Diagnóstico e Teste de Comandos Online",
    heroSub: "Ligue qualquer comando por USB ou Bluetooth para analisar a resposta dos botões, drift dos manípulos e vibração.",
    instructionsHeading: "Como Testar o Seu Comando Online",
    instructionsSteps: [
      "Ligue o comando por cabo USB ou emparelhe por Bluetooth.",
      "Pressione qualquer botão para ativar a API do browser.",
      "Teste todos os botões, manípulos analógicos e gatilhos em tempo real."
    ],
    matrixBadge: "Compatibilidade Universal",
    matrixHeading: "Matriz de Compatibilidade de Comandos",
    matrixStandard: "Protocolo W3C HTML5",
    matrixPlatforms: localizedMatrixPlatforms['pt'],
    specsBadge: "Princípios de Diagnóstico",
    specsHeading: "Especificações de Telemetria",
    specs: localizedSpecs['pt'],
    maintenanceBadge: "Guia de Manutenção",
    maintenanceHeading: "Como Resolver Stick Drift nos Manípulos",
    maintenanceSteps: localizedMaintenanceSteps['pt'],
    faqHeading: "Base de Conhecimento de Comandos",
    faqSub: "Perguntas Frequentes",
    faqs: localizedIndexFaqs['pt']
  },
  ko: {
    title: "게임패드 테스터 & 컨트롤러 진단 온라인 | ControllerTesters.com",
    description: "무료 온라인 게임패드 테스터. PS5, Xbox, Switch, PC 컨트롤러의 스틱 쏠림(Drift), 버튼, 진동 및 폴링레이트 측정.",
    keywords: "게임패드 테스터, 컨트롤러 테스트, 스틱 쏠림 테스트, ps5 컨트롤러 테스트, xbox 패드 테스트",
    heroBadge: "초정밀 컨트롤러 텔레메트리",
    heroHeading: "온라인 게임패드 & 컨트롤러 진단",
    heroSub: "USB 또는 블루투스로 게임패드를 연결하여 버튼 반응, 아날로그 스틱 쏠림, 트리거 압력 및 전송 주기를 실시간으로 진단하세요.",
    instructionsHeading: "컨트롤러 온라인 테스트 방법",
    instructionsSteps: [
      "USB 케이블로 컨트롤러를 연결하거나 블루투스로 페어링합니다.",
      "아무 버튼이나 눌러 브라우저의 HTML5 Gamepad API를 활성화합니다.",
      "모든 버튼, D-패드, 아날로그 스틱 및 트리거를 실시간으로 테스트합니다."
    ],
    matrixBadge: "호환성 안내",
    matrixHeading: "하드웨어 호환성 매트릭스",
    matrixStandard: "W3C HTML5 표준 프로토콜",
    matrixPlatforms: localizedMatrixPlatforms['ko'],
    specsBadge: "진단 원리",
    specsHeading: "하드웨어 텔레메트리 및 측정 사양",
    specs: localizedSpecs['ko'],
    maintenanceBadge: "유지보수 가이드",
    maintenanceHeading: "스틱 쏠림(Drift) 해결 및 보정 방법",
    maintenanceSteps: localizedMaintenanceSteps['ko'],
    faqHeading: "컨트롤러 진단 지식 베이스",
    faqSub: "자주 묻는 질문",
    faqs: localizedIndexFaqs['ko']
  },
  it: {
    title: "Gamepad Tester & Test Controller Online | ControllerTesters.com",
    description: "Test controller e gamepad online gratuito. Verifica stick drift, pulsanti, vibrazione, grilletti e polling rate per PS5, Xbox, Switch e PC.",
    keywords: "gamepad tester, test controller, stick drift test, test controller ps5, test controller xbox",
    heroBadge: "Telemetria Gamepad a Bassa Latenza",
    heroHeading: "Test Controller e Gamepad Online",
    heroSub: "Collega qualsiasi gamepad USB o Bluetooth per verificare la reattività dei tasti, lo stick drift e la vibrazione in tempo reale.",
    instructionsHeading: "Come Testare il Tuo Controller Online",
    instructionsSteps: [
      "Collega il controller tramite cavo USB o Bluetooth.",
      "Premi qualsiasi pulsante per attivare l'API Gamepad del browser.",
      "Verifica tutti i pulsanti, levette analogiche e grilletti in tempo reale."
    ],
    matrixBadge: "Supporto Universale",
    matrixHeading: "Matrice di Compatibilità Hardware",
    matrixStandard: "Protocollo Standard W3C HTML5",
    matrixPlatforms: localizedMatrixPlatforms['it'],
    specsBadge: "Principi Diagnostici",
    specsHeading: "Specifiche di Misurazione e Telemetria",
    specs: localizedSpecs['it'],
    maintenanceBadge: "Guida alla Manutenzione",
    maintenanceHeading: "Come Risolvere lo Stick Drift",
    maintenanceSteps: localizedMaintenanceSteps['it'],
    faqHeading: "Base di Conoscenza Controller",
    faqSub: "Domande Frequenti",
    faqs: localizedIndexFaqs['it']
  }
};
