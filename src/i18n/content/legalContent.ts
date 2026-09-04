import type { SupportedLang } from '../languages';

export interface LegalPageContent {
  title: string;
  description: string;
  badge: string;
  heading: string;
  lastUpdated: string;
  sections: {
    title: string;
    content: string[];
  }[];
}

export const aboutContent: Record<SupportedLang, {
  title: string;
  description: string;
  badge: string;
  heading: string;
  sub: string;
  missionTitle: string;
  missionText: string;
  pillars: { tag: string; title: string; desc: string }[];
  specsTitle: string;
  specs: { label: string; value: string }[];
}> = {
  en: {
    title: "About Us – ControllerTesters.com | Gamepad Precision Diagnostic Suite",
    description: "Learn about ControllerTesters.com, our mission to provide zero-latency web-based controller diagnostics, circularity benchmarking, and human reflex tools.",
    badge: "Precision Gamepad Telemetry",
    heading: "About ControllerTesters.com",
    sub: "Engineering the world's most responsive, browser-native gamepad diagnostic suite and cognitive reflex benchmarking platform.",
    missionTitle: "Our Mission",
    missionText: "ControllerTesters.com was built to eliminate the need for shady third-party driver downloads and bloated software just to check if a game controller is working properly. Leveraging modern W3C HTML5 Gamepad APIs and high-precision performance timers, we provide instant, zero-latency hardware diagnostics directly in your web browser across Windows, macOS, Linux, Android, iOS, and ChromeOS.",
    pillars: [
      {
        tag: "01 // Precision",
        title: "Sub-Millisecond Polling Telemetry",
        desc: "We measure exact hardware polling rate up to 1000Hz with sub-millisecond precision timing so you can test USB overclocking and wireless jitter."
      },
      {
        tag: "02 // Analysis",
        title: "Polar Stick Drift & Deadzone Radar",
        desc: "Our 64-sector circular boundary mapping calculates real-time average circularity error, centering deviation, and potentiometer degradation."
      },
      {
        tag: "03 // Privacy",
        title: "100% Client-Side & Zero Installation",
        desc: "All gamepad signals are processed locally on your machine in real-time. No background telemetry is collected, no drivers required, and zero account sign-ups."
      }
    ],
    specsTitle: "Technical Architecture & Standards",
    specs: [
      { label: "Standard", value: "W3C HTML5 Gamepad API Specification" },
      { label: "Hardware Support", value: "DirectInput, XInput, HID USB, Bluetooth LE" },
      { label: "Supported Devices", value: "PS5 DualSense, PS4, Xbox Series/One, Switch Pro, Joy-Cons, SCUF, Razer, 8BitDo" },
      { label: "Haptic Actuation", value: "DualRumble Haptic Force-Feedback Actuators" },
      { label: "Hosting & CDN", value: "Global Edge Network (< 25ms TTFB worldwide)" },
      { label: "Data Security", value: "Zero server storage; 100% client-side execution" }
    ]
  },
  'pt-br': {
    title: "Sobre Nós – ControllerTesters.com | Suíte de Diagnóstico de Controles",
    description: "Conheça o ControllerTesters.com, nossa missão de fornecer testes de controles sem lag, análise de drift no analógico e benchmarks de reflexos.",
    badge: "Telemetria de Precisão",
    heading: "Sobre o ControllerTesters.com",
    sub: "Desenvolvendo a suíte de diagnóstico de controles mais rápida e precisa da web.",
    missionTitle: "Nossa Missão",
    missionText: "O ControllerTesters.com foi criado para eliminar a necessidade de baixar programas suspeitos para testar controles. Utilizando a API HTML5 Gamepad nativa e timers de alta precisão, oferecemos diagnósticos instantâneos no navegador para Windows, Mac, Linux, Android e iOS.",
    pillars: [
      { tag: "01 // Precisão", title: "Taxa de Polling Sub-Milissegundo", desc: "Medição de taxas de atualização de até 1000Hz para testar overclock e estabilidade de conexão." },
      { tag: "02 // Análise", title: "Radar Polar de Stick Drift", desc: "Mapeamento em 64 setores que calcula erro de circularidade e desvio de centro dos analógicos." },
      { tag: "03 // Privacidade", title: "100% no Navegador & Sem Instalação", desc: "Processamento local no seu dispositivo sem coleta de dados nem necessidade de cadastro." }
    ],
    specsTitle: "Arquitetura Técnica",
    specs: [
      { label: "Padrão", value: "W3C HTML5 Gamepad API" },
      { label: "Protocolos", value: "DirectInput, XInput, HID USB, Bluetooth" },
      { label: "Compatibilidade", value: "PS5, PS4, Xbox Series/One, Switch Pro, 8BitDo, Razer" },
      { label: "Feedback", value: "Motores DualRumble de alta e baixa frequência" },
      { label: "Segurança", value: "Execução 100% no cliente, sem registro de dados" }
    ]
  },
  tr: {
    title: "Hakkımızda – ControllerTesters.com | Oyun Kolu Tanılama Paketi",
    description: "ControllerTesters.com hakkında bilgi edinin. Gecikmesiz tarayıcı tabanlı oyun kolu testleri ve refleks analizleri.",
    badge: "Hassas Oyun Kolu Tanılama",
    heading: "ControllerTesters.com Hakkında",
    sub: "Dünyanın en duyarlı ve hassas tarayıcı tabanlı oyun kolu tanılama platformu.",
    missionTitle: "Misyonumuz",
    missionText: "ControllerTesters.com, oyun kolunuzu test etmek için üçüncü taraf yazılımlar indirme zorunluluğunu ortadan kaldırmak için kuruldu.",
    pillars: [
      { tag: "01 // Hassasiyet", title: "Milisaniye Altı Polling Rate", desc: "1000Hz'e kadar anlık iletim hızını ve gecikmeyi ölçer." },
      { tag: "02 // Analiz", title: "Stick Drift ve Dairesellik Radarı", desc: "Analog çubukların sapma ve dairesellik hatalarını hesaplar." },
      { tag: "03 // Gizlilik", title: "100% İstemci Tarafı & Kuruluma Gerek Yok", desc: "Hiçbir veri sunucuya iletilmez, tamamen tarayıcınızda çalışır." }
    ],
    specsTitle: "Teknik Standartlar",
    specs: [
      { label: "Standart", value: "W3C HTML5 Gamepad API" },
      { label: "Protokoller", value: "DirectInput, XInput, HID USB, Bluetooth" },
      { label: "Desteklenen Cihazlar", value: "PS5, PS4, Xbox Series/One, Switch Pro, Razer, 8BitDo" },
      { label: "Güvenlik", value: "Sıfır veri kaydı, 100% yerel çalıştırma" }
    ]
  },
  ar: {
    title: "من نحن – ControllerTesters.com | منصة فحص واختبار أذرع التحكم",
    description: "تعرف على موقع ControllerTesters.com ورسالتنا في توفير أدوات فحص دقيقة لأذرع التحكم دون برامج.",
    badge: "قياسات دقيقة لوحدات التحكم",
    heading: "عن ControllerTesters.com",
    sub: "تطوير المنصة الأكثر دقة وسرعة لفحص واختبار أذرع التحكم عبر المتصفح مباشرة.",
    missionTitle: "رسالتنا",
    missionText: "تم إنشاء ControllerTesters.com لتوفير تجربة فورية لفحص أذرع التحكم دون الحاجة لتثبيت برامج أو تعريفات مشبوهة.",
    pillars: [
      { tag: "01 // دقة فائقة", title: "معدل استجابة بالمللي ثانية", desc: "قياس سرعة النقل حتى 1000Hz بدقة متناهية." },
      { tag: "02 // تشخيص شامل", title: "رادار فحص انحراف الأنالوج", desc: "رسم مسار الأنالوج وحساب نسبة الخطأ والدائرية بدقة." },
      { tag: "03 // خصوصية تامة", title: "معالجة محلية 100% بدون تثبيت", desc: "تتم جميع الحسابات داخل المتصفح دون إرسال أي بيانات لخوادم خارجية." }
    ],
    specsTitle: "المواصفات التقنية",
    specs: [
      { label: "المعيار", value: "W3C HTML5 Gamepad API" },
      { label: "البروتوكولات", value: "DirectInput, XInput, HID USB, Bluetooth" },
      { label: "الأجهزة المدعومة", value: "PS5, PS4, Xbox Series/One, Switch Pro, 8BitDo, Razer" },
      { label: "الأمان", value: "تشغيل محلي 100% دون تخزين أي بيانات" }
    ]
  },
  es: {
    title: "Sobre Nosotros – ControllerTesters.com | Suite de Diagnóstico de Mandos",
    description: "Conoce ControllerTesters.com y nuestra misión de ofrecer pruebas de mandos online sin programas ni descargas.",
    badge: "Telemetría de Precisión",
    heading: "Sobre ControllerTesters.com",
    sub: "Diseñando la suite de diagnóstico de mandos y análisis de reflejos más precisa de la web.",
    missionTitle: "Nuestra Misión",
    missionText: "ControllerTesters.com nació para eliminar la necesidad de instalar programas de terceros para probar mandos de juego.",
    pillars: [
      { tag: "01 // Precisión", title: "Polling Rate Sub-Milisegundo", desc: "Mide tasas de hasta 1000Hz para verificar overclock y estabilidad." },
      { tag: "02 // Análisis", title: "Radar de Stick Drift y Circularidad", desc: "Calcula el error de circularidad y deriva de los joysticks en tiempo real." },
      { tag: "03 // Privacidad", title: "100% en Navegador Sin Descargas", desc: "Toda la telemetría se procesa en tu equipo de forma segura." }
    ],
    specsTitle: "Arquitectura Técnica",
    specs: [
      { label: "Estándar", value: "W3C HTML5 Gamepad API" },
      { label: "Compatibilidad", value: "PS5, PS4, Xbox Series/One, Switch Pro, Razer, 8BitDo" },
      { label: "Seguridad", value: "Ejecución 100% del lado del cliente" }
    ]
  },
  ja: {
    title: "当サイトについて – ControllerTesters.com | コントローラー診断スイート",
    description: "ControllerTesters.comの理念、高速なブラウザ完結型ゲームパッド診断と反射神経測定機能について。",
    badge: "高精度ゲームパッド診断",
    heading: "ControllerTesters.com について",
    sub: "ブラウザ上で完全動作する最高精度のゲームパッド診断と反射神経テストツール。",
    missionTitle: "私たちのミッション",
    missionText: "怪しいソフトウェアやドライバをインストールすることなく、安全にゲームパッドをテストできる環境を提供します。",
    pillars: [
      { tag: "01 // 精度", title: "サブミリ秒 ポーリングレート計測", desc: "最大1000Hzまでの入力更新レートを正確に測定。" },
      { tag: "02 // 解析", title: "スティックドリフト＆円形度レーダー", desc: "64セクター分割による詳細な偏り測定と中心ズレの可視化。" },
      { tag: "03 // プライバシー", title: "完全クライアントサイド実行", desc: "データ送信なし、ダウンロード不要で即座に動作。" }
    ],
    specsTitle: "技術仕様",
    specs: [
      { label: "標準規格", value: "W3C HTML5 Gamepad API" },
      { label: "対応デバイス", value: "PS5 DualSense, PS4, Xbox Series, Switch Pro 他" },
      { label: "セキュリティ", value: "完全ローカル実行・サーバー保存ゼロ" }
    ]
  },
  fr: {
    title: "À Propos – ControllerTesters.com | Diagnostic de Manette de Précision",
    description: "Découvrez ControllerTesters.com, votre outil de diagnostic de manette et de mesure de réflexes en ligne sans installation.",
    badge: "Télémétrie de Précision",
    heading: "À Propos de ControllerTesters.com",
    sub: "La suite de diagnostic de manettes et de test de réflexes la plus performante sur le web.",
    missionTitle: "Notre Mission",
    missionText: "Éliminer le besoin de logiciels tiers pour tester et calibrer vos manettes de jeu.",
    pillars: [
      { tag: "01 // Précision", title: "Polling Rate Sub-Milliseconde", desc: "Mesure de fréquence de transmission jusqu'à 1000Hz." },
      { tag: "02 // Analyse", title: "Radar de Stick Drift et Circularité", desc: "Cartographie polaire et calcul d'erreur en temps réel." },
      { tag: "03 // Sécurité", title: "100% Côté Client", desc: "Aucune installation requise, sécurité et confidentialité maximales." }
    ],
    specsTitle: "Spécifications Techniques",
    specs: [
      { label: "Standard", value: "W3C HTML5 Gamepad API" },
      { label: "Compatibilité", value: "PS5, PS4, Xbox Series/One, Switch Pro, Razer, 8BitDo" },
      { label: "Confidentialité", value: "Exécution locale sans collecte de données" }
    ]
  },
  de: {
    title: "Über Uns – ControllerTesters.com | Gamepad-Diagnosesuite",
    description: "Erfahren Sie mehr über ControllerTesters.com – die professionelle webbasierte Gamepad-Diagnose ohne Software-Installation.",
    badge: "Präzisions-Gamepad-Telemetrie",
    heading: "Über ControllerTesters.com",
    sub: "Die reaktionsschnellste browserbasierte Gamepad-Diagnosesuite im Netz.",
    missionTitle: "Unsere Mission",
    missionText: "Wir machen das Testen von Gamepads einfach, sicher und extrem präzise direkt im Browser.",
    pillars: [
      { tag: "01 // Präzision", title: "Sub-Millisekunden Polling-Rate", desc: "Genaue Frequenzmessung bis zu 1000Hz." },
      { tag: "02 // Analyse", title: "Stick-Drift & Zirkularitäts-Radar", desc: "64-Sektoren-Analyse zur Erkennung von Potentiometer-Verschleiß." },
      { tag: "03 // Datenschutz", title: "100% Client-Seitig", desc: "Keine Software, keine Registrierung, maximale Privatsphäre." }
    ],
    specsTitle: "Technische Daten",
    specs: [
      { label: "Standard", value: "W3C HTML5 Gamepad API" },
      { label: "Unterstützung", value: "PS5, PS4, Xbox Series/One, Switch Pro, Logitech, SCUF" },
      { label: "Sicherheit", value: "100% lokale Ausführung im Browser" }
    ]
  },
  pt: {
    title: "Sobre Nós – ControllerTesters.com | Ferramenta de Diagnóstico de Comandos",
    description: "Saiba mais sobre o ControllerTesters.com e a nossa tecnologia de diagnóstico de comandos e testes de reflexos online.",
    badge: "Telemetria de Precisão",
    heading: "Sobre o ControllerTesters.com",
    sub: "A solução mais rápida e precisa para diagnosticar comandos no browser.",
    missionTitle: "A Nossa Missão",
    missionText: "Permitir o teste rigoroso de comandos de jogo sem necessidade de instalar programas externos.",
    pillars: [
      { tag: "01 // Precisão", title: "Polling Rate Sub-Milissegundo", desc: "Medição de taxas de resposta até 1000Hz." },
      { tag: "02 // Análise", title: "Radar de Stick Drift", desc: "Mapeamento em tempo real do desgaste dos manípulos." },
      { tag: "03 // Privacidade", title: "100% no Browser", desc: "Processamento seguro no seu dispositivo sem registo de dados." }
    ],
    specsTitle: "Arquitetura Técnica",
    specs: [
      { label: "Norma", value: "W3C HTML5 Gamepad API" },
      { label: "Dispositivos", value: "PS5, PS4, Xbox Series/One, Switch Pro, Razer, 8BitDo" },
      { label: "Segurança", value: "Execução 100% local sem recolha de informação" }
    ]
  },
  ko: {
    title: "소개 – ControllerTesters.com | 컨트롤러 진단 스위트",
    description: "ControllerTesters.com 소개 및 설치 없는 웹 기반 컨트롤러 진단 기술과 반응속도 벤치마크 안내.",
    badge: "초정밀 컨트롤러 텔레메트리",
    heading: "ControllerTesters.com 소개",
    sub: "웹 브라우저에서 바로 실행되는 세계 최고 수준의 게임패드 진단 플랫폼.",
    missionTitle: "우리의 미션",
    missionText: "의심스러운 프로그램 설치 없이 브라우저에서 안전하고 정확하게 게임패드를 테스트할 수 있도록 지원합니다.",
    pillars: [
      { tag: "01 // 정밀도", title: "서브 밀리초 폴링레이트 측정", desc: "최대 1000Hz까지 전송 주기와 지연 시간을 측정합니다." },
      { tag: "02 // 분석", title: "스틱 쏠림 및 원형도 레이더", desc: "64개 섹터 극좌표 맵핑으로 아날로그 스틱 편차를 분석합니다." },
      { tag: "03 // 개인정보 보호", title: "100% 클라이언트 사이드 실행", desc: "데이터 전송 없이 기기 내부에서 안전하게 실행됩니다." }
    ],
    specsTitle: "기술 사양",
    specs: [
      { label: "표준", value: "W3C HTML5 Gamepad API" },
      { label: "지원 기기", value: "PS5 DualSense, PS4, Xbox Series, Switch Pro 등" },
      { label: "보안", value: "서버 저장 없는 100% 브라우저 로컬 연산" }
    ]
  },
  it: {
    title: "Chi Siamo – ControllerTesters.com | Suite di Diagnostica per Gamepad",
    description: "Scopri ControllerTesters.com, la nostra missione e gli strumenti di test per controller senza installazione.",
    badge: "Telemetria di Precisione",
    heading: "Chi Siamo – ControllerTesters.com",
    sub: "La suite di diagnostica per controller e test di riflessi più reattiva del web.",
    missionTitle: "La Nostra Missione",
    missionText: "Fornire una diagnostica immediata e affidabile per controller senza download o programmi invasivi.",
    pillars: [
      { tag: "01 // Precisione", title: "Polling Rate Sub-Millisecondo", desc: "Misurazione esatta della frequenza di risposta fino a 1000Hz." },
      { tag: "02 // Analisi", title: "Radar Stick Drift & Circolarità", desc: "Analisi dettagliata della deviazione delle levette analogiche." },
      { tag: "03 // Privacy", title: "100% nel Browser", desc: "Nessun dato inviato a server esterni, massima trasparenza." }
    ],
    specsTitle: "Specifiche Tecniche",
    specs: [
      { label: "Standard", value: "W3C HTML5 Gamepad API" },
      { label: "Compatibilità", value: "PS5, PS4, Xbox Series/One, Switch Pro, Razer, 8BitDo" },
      { label: "Sicurezza", value: "Esecuzione 100% lato client" }
    ]
  }
};

export const privacyContent: Record<SupportedLang, LegalPageContent> = {
  en: {
    title: "Privacy Policy – ControllerTesters.com",
    description: "Privacy policy for ControllerTesters.com. We prioritize user privacy with 100% client-side gamepad telemetry processing.",
    badge: "Privacy & Data Protection",
    heading: "Privacy Policy",
    lastUpdated: "Last Updated: September 1, 2026",
    sections: [
      {
        title: "1. Overview & 100% Client-Side Processing",
        content: [
          "At ControllerTesters.com, we believe your gaming peripherals and personal telemetry belong strictly to you. Our entire diagnostic suite executes 100% client-side inside your web browser via the standard W3C HTML5 Gamepad API.",
          "We do NOT transmit, record, intercept, or store any gamepad button presses, joystick coordinate telemetry, vibration triggers, or hardware identifiers on our servers."
        ]
      },
      {
        title: "2. Information We Collect & Analytics",
        content: [
          "ControllerTesters.com does not require user accounts, email registration, or personal profiles to use any of our diagnostic utilities.",
          "Like most standard web services, we may collect aggregated, non-personally identifiable server logs (such as browser type, referring URL, general geographic region, and timestamps) solely for operational uptime monitoring and security.",
          "We may use privacy-compliant web analytics (such as Google Analytics) to analyze aggregate website traffic patterns and improve performance."
        ]
      },
      {
        title: "3. Cookies & Local Storage",
        content: [
          "We use browser localStorage strictly to store your interface theme preference (Light Mode vs. Dark Mode) and language selection so your preference is remembered between visits.",
          "No tracking cookies or marketing identifiers are created by our core diagnostic tools."
        ]
      },
      {
        title: "4. Third-Party Links & Advertising",
        content: [
          "Our website may display non-intrusive contextual advertising to support server infrastructure costs. Third-party ad networks (such as Google AdSense) may use cookies to serve relevant ads based on prior visits.",
          "You can opt out of personalized advertising by visiting Google Ad Settings (www.google.com/settings/ads) or www.aboutads.info."
        ]
      },
      {
        title: "5. Contact & Privacy Inquiries",
        content: [
          "If you have questions regarding this Privacy Policy or our client-side architecture, please contact us at support@controllertesters.com."
        ]
      }
    ]
  },
  'pt-br': {
    title: "Política de Privacidade – ControllerTesters.com",
    description: "Política de privacidade do ControllerTesters.com. Garantia de processamento 100% local no navegador.",
    badge: "Privacidade e Proteção de Dados",
    heading: "Política de Privacidade",
    lastUpdated: "Última atualização: 1 de setembro de 2026",
    sections: [
      {
        title: "1. Processamento 100% no Navegador",
        content: [
          "No ControllerTesters.com, sua privacidade é prioridade absoluta. Toda a telemetria do controle é processada 100% no seu navegador através da API HTML5 Gamepad.",
          "Nenhum botão pressionado, coordenada de analógico ou identificador de hardware é enviado ou gravado em nossos servidores."
        ]
      },
      {
        title: "2. Dados Coletados",
        content: [
          "Não exigimos criação de conta nem dados pessoais. Utilizamos apenas métricas agregadas de tráfego para garantir a estabilidade do site."
        ]
      },
      {
        title: "3. Armazenamento Local (localStorage)",
        content: [
          "Usamos o localStorage do navegador apenas para lembrar sua preferência de tema (Claro/Escuro) e idioma selecionado."
        ]
      },
      {
        title: "4. Contato",
        content: ["Para dúvidas sobre privacidade, envie um e-mail para support@controllertesters.com."]
      }
    ]
  },
  tr: {
    title: "Gizlilik Politikası – ControllerTesters.com",
    description: "ControllerTesters.com gizlilik politikası. %100 tarayıcı içi istemci tarafı gamepad işleme.",
    badge: "Gizlilik ve Veri Güvenliği",
    heading: "Gizlilik Politikası",
    lastUpdated: "Son Güncelleme: 1 Eylül 2026",
    sections: [
      {
        title: "1. %100 İstemci Tarafı Çalışma",
        content: ["Tüm oyun kolu sinyalleri tarayıcınızda yerel olarak işlenir. Hiçbir giriş verisi sunucularımıza kaydedilmez."]
      },
      {
        title: "2. Çerezler ve Yerel Depolama",
        content: ["Yalnızca tema (Koyu/Açık mod) ve dil tercihlerinizi hatırlamak için localStorage kullanılır."]
      },
      {
        title: "3. İletişim",
        content: ["Sorularınız için support@controllertesters.com adresinden bize ulaşabilirsiniz."]
      }
    ]
  },
  ar: {
    title: "سياسة الخصوصية – ControllerTesters.com",
    description: "سياسة الخصوصية لموقع ControllerTesters.com وحماية بيانات المستخدم.",
    badge: "الخصوصية وحماية البيانات",
    heading: "سياسة الخصوصية",
    lastUpdated: "آخر تحديث: 1 سبتمبر 2026",
    sections: [
      {
        title: "1. معالجة محلية 100% داخل المتصفح",
        content: ["تتم جميع عمليات فحص يد التحكم محلياً داخل متصفحك عبر Gamepad API دون إرسال أي إشارات لخوادمنا."]
      },
      {
        title: "2. التخزين المحلي",
        content: ["نستخدم localStorage فقط لحفظ اختيارك للوضع الليلي واللغة المفضلة."]
      },
      {
        title: "3. التواصل",
        content: ["لأي استفسار يرجى مراسلتنا عبر support@controllertesters.com."]
      }
    ]
  },
  es: {
    title: "Política de Privacidad – ControllerTesters.com",
    description: "Política de privacidad de ControllerTesters.com. Procesamiento 100% seguro en el navegador.",
    badge: "Privacidad y Seguridad",
    heading: "Política de Privacidad",
    lastUpdated: "Última actualización: 1 de septiembre de 2026",
    sections: [
      {
        title: "1. Procesamiento 100% en el Cliente",
        content: ["Toda la telemetría del mando se procesa localmente en su navegador sin transmisión a servidores."]
      },
      {
        title: "2. Almacenamiento Local",
        content: ["Se utiliza localStorage exclusivamente para recordar el modo visual y el idioma."]
      },
      {
        title: "3. Contacto",
        content: ["Contáctenos en support@controllertesters.com para cualquier consulta."]
      }
    ]
  },
  ja: {
    title: "プライバシーポリシー – ControllerTesters.com",
    description: "ControllerTesters.com のプライバシーポリシー。完全クライアント側処理による個人情報保護。",
    badge: "プライバシーとデータ保護",
    heading: "プライバシーポリシー",
    lastUpdated: "最終更新日: 2026年9月1日",
    sections: [
      {
        title: "1. 完全ローカル処理",
        content: ["すべてのコントローラー入力信号はブラウザ内でローカル処理され、サーバーに送信されることは一切ありません。"]
      },
      {
        title: "2. ローカルストレージの使用",
        content: ["テーマ設定（ダーク/ライトモード）および言語選択の保存にのみ localStorage を使用します。"]
      },
      {
        title: "3. お問い合わせ",
        content: ["プライバシーに関するお問い合わせは support@controllertesters.com までお願いいたします。"]
      }
    ]
  },
  fr: {
    title: "Politique de Confidentialité – ControllerTesters.com",
    description: "Politique de confidentialité de ControllerTesters.com. Traitement 100% côté client de vos manettes.",
    badge: "Confidentialité & Données",
    heading: "Politique de Confidentialité",
    lastUpdated: "Dernière mise à jour: 1er septembre 2026",
    sections: [
      {
        title: "1. Traitement 100% Côté Client",
        content: ["Tous les signaux de votre manette sont analysés directement dans votre navigateur via l'API Gamepad sans aucun transfert serveur."]
      },
      {
        title: "2. Stockage Local",
        content: ["Le localStorage est uniquement utilisé pour sauvegarder vos préférences de thème et de langue."]
      },
      {
        title: "3. Contact",
        content: ["Contactez-nous à support@controllertesters.com pour toute question."]
      }
    ]
  },
  de: {
    title: "Datenschutzerklärung – ControllerTesters.com",
    description: "Datenschutzerklärung für ControllerTesters.com. 100% clientseitige Verarbeitung Ihrer Gamepad-Signale.",
    badge: "Datenschutz & Sicherheit",
    heading: "Datenschutzerklärung",
    lastUpdated: "Zuletzt aktualisiert: 1. September 2026",
    sections: [
      {
        title: "1. 100% Clientseitige Ausführung",
        content: ["Alle Tasteneingaben und Joystick-Werte werden ausschließlich lokal in Ihrem Webbrowser verarbeitet."]
      },
      {
        title: "2. Lokale Speicherung",
        content: ["localStorage wird nur verwendet, um das Farbthema und die ausgewählte Sprache zu speichern."]
      },
      {
        title: "3. Kontakt",
        content: ["Bei Fragen wenden Sie sich bitte an support@controllertesters.com."]
      }
    ]
  },
  pt: {
    title: "Política de Privacidade – ControllerTesters.com",
    description: "Política de privacidade do ControllerTesters.com. Processamento 100% local no browser.",
    badge: "Privacidade e Segurança",
    heading: "Política de Privacidade",
    lastUpdated: "Última atualização: 1 de setembro de 2026",
    sections: [
      {
        title: "1. Processamento Local no Browser",
        content: ["Todas as informações do comando são processadas 100% no seu dispositivo."]
      },
      {
        title: "2. Armazenamento",
        content: ["O localStorage serve unicamente para memorizar o tema e o idioma."]
      },
      {
        title: "3. Contacto",
        content: ["Dúvidas podem ser enviadas para support@controllertesters.com."]
      }
    ]
  },
  ko: {
    title: "개인정보처리방침 – ControllerTesters.com",
    description: "ControllerTesters.com 개인정보처리방침. 100% 브라우저 로컬 연산으로 완벽한 개인정보 보호.",
    badge: "개인정보 보호",
    heading: "개인정보처리방침",
    lastUpdated: "최종 업데이트: 2026년 9월 1일",
    sections: [
      {
        title: "1. 100% 브라우저 로컬 연산",
        content: ["컨트롤러의 모든 입력 신호는 브라우저 내부에서만 처리되며 외부 서버로 전송되지 않습니다."]
      },
      {
        title: "2. 로컬 스토리지 활용",
        content: ["다크/라이트 모드 테마 및 언어 설정 유지 목적으로만 localStorage를 사용합니다."]
      },
      {
        title: "3. 문의처",
        content: ["개인정보 관련 문의: support@controllertesters.com"]
      }
    ]
  },
  it: {
    title: "Informativa sulla Privacy – ControllerTesters.com",
    description: "Informativa sulla privacy di ControllerTesters.com. Elaborazione 100% lato client.",
    badge: "Privacy & Protezione Dati",
    heading: "Informativa sulla Privacy",
    lastUpdated: "Ultimo aggiornamento: 1 settembre 2026",
    sections: [
      {
        title: "1. Elaborazione 100% Lato Client",
        content: ["Tutti i dati di telemetria del gamepad vengono elaborati esclusivamente nel tuo browser."]
      },
      {
        title: "2. Archiviazione Locale",
        content: ["localStorage viene utilizzato solo per memorizzare le impostazioni di tema e lingua."]
      },
      {
        title: "3. Contatti",
        content: ["Scrivici a support@controllertesters.com per qualsiasi domanda."]
      }
    ]
  }
};

export const termsContent: Record<SupportedLang, LegalPageContent> = {
  en: {
    title: "Terms and Conditions – ControllerTesters.com",
    description: "Terms and conditions of use for ControllerTesters.com online gamepad diagnostic utilities.",
    badge: "Legal Terms & Service Use",
    heading: "Terms & Conditions",
    lastUpdated: "Last Updated: September 1, 2026",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: [
          "By accessing and using ControllerTesters.com (the 'Service'), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the website."
        ]
      },
      {
        title: "2. Permitted Use & Disclaimer of Diagnostic Warranties",
        content: [
          "ControllerTesters.com is provided as a free informational and diagnostic utility. All diagnostic readings, stick drift radar calculations, circularity error percentages, trigger values, vibration actuation tests, and polling rate statistics are generated based on data received from your operating system and browser Gamepad API.",
          "The Service is provided on an 'AS IS' and 'AS AVAILABLE' basis without warranties of any kind. ControllerTesters.com does not perform hardware repairs and is not responsible for physical wear, firmware modifications, hardware disassembly, or manufacturer warranty voids carried out by users."
        ]
      },
      {
        title: "3. Intellectual Property",
        content: [
          "All website code, branding, visualizers, SVG assets, logos, and custom styling on ControllerTesters.com are the exclusive intellectual property of ControllerTesters.com.",
          "PlayStation, DualSense, and DualShock are registered trademarks of Sony Interactive Entertainment Inc. Xbox is a registered trademark of Microsoft Corp. Nintendo Switch and Joy-Con are trademarks of Nintendo Co., Ltd. ControllerTesters.com is an independent diagnostic tool and is not affiliated with, endorsed by, or sponsored by Sony, Microsoft, Nintendo, or any hardware manufacturer."
        ]
      },
      {
        title: "4. Limitation of Liability",
        content: [
          "In no event shall ControllerTesters.com or its operators be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the Service."
        ]
      },
      {
        title: "5. Modifications to Service",
        content: [
          "We reserve the right to modify, update, or discontinue any feature of ControllerTesters.com at any time without notice."
        ]
      }
    ]
  },
  'pt-br': {
    title: "Termos e Condições – ControllerTesters.com",
    description: "Termos e condições de uso do ControllerTesters.com.",
    badge: "Termos Legais",
    heading: "Termos e Condições",
    lastUpdated: "Última atualização: 1 de setembro de 2026",
    sections: [
      {
        title: "1. Aceitação dos Termos",
        content: ["Ao utilizar o ControllerTesters.com, você concorda com estes termos de serviço."]
      },
      {
        title: "2. Isenção de Responsabilidade",
        content: ["O serviço é fornecido 'como está' para fins de diagnóstico e referência informativa."]
      },
      {
        title: "3. Marcas e Propriedade Intelectual",
        content: ["PlayStation, Xbox e Nintendo Switch são marcas registradas de seus respectivos proprietários. O ControllerTesters.com é uma ferramenta independente."]
      }
    ]
  },
  tr: {
    title: "Şartlar ve Koşullar – ControllerTesters.com",
    description: "ControllerTesters.com kullanım şartları ve yasal koşullar.",
    badge: "Kullanım Şartları",
    heading: "Şartlar ve Koşullar",
    lastUpdated: "Son Güncelleme: 1 Eylül 2026",
    sections: [
      {
        title: "1. Şartların Kabulü",
        content: ["ControllerTesters.com'u kullanarak bu kullanım koşullarını kabul etmiş sayılırsınız."]
      },
      {
        title: "2. Sorumluluk Reddi",
        content: ["Tanılama araçları bilgilendirme amaçlıdır ve 'olduğu gibi' sunulmaktadır."]
      }
    ]
  },
  ar: {
    title: "الشروط والأحكام – ControllerTesters.com",
    description: "شروط وأحكام استخدام موقع ControllerTesters.com.",
    badge: "الشروط القانونية",
    heading: "الشروط والأحكام",
    lastUpdated: "آخر تحديث: 1 سبتمبر 2026",
    sections: [
      {
        title: "1. قبول الشروط",
        content: ["باستخدامك لموقع ControllerTesters.com، فإنك توافق على الالتزام بهذه الشروط والأحكام."]
      },
      {
        title: "2. إخلاء المسؤولية",
        content: ["يتم توفير أدوات الفحص للأغراض التشخيصية والمعلوماتية فقط."]
      }
    ]
  },
  es: {
    title: "Términos y Condiciones – ControllerTesters.com",
    description: "Términos y condiciones de uso de ControllerTesters.com.",
    badge: "Términos Legales",
    heading: "Términos y Condiciones",
    lastUpdated: "Última actualización: 1 de septiembre de 2026",
    sections: [
      {
        title: "1. Aceptación de Términos",
        content: ["Al acceder a este sitio web, usted acepta cumplir con estos términos y condiciones."]
      },
      {
        title: "2. Exención de Responsabilidad",
        content: ["Las herramientas de diagnóstico se proporcionan 'tal cual' con fines informativos."]
      }
    ]
  },
  ja: {
    title: "利用規約 – ControllerTesters.com",
    description: "ControllerTesters.com の利用規約および免責事項。",
    badge: "利用規約",
    heading: "利用規約",
    lastUpdated: "最終更新日: 2026年9月1日",
    sections: [
      {
        title: "1. 規約への同意",
        content: ["ControllerTesters.com をご利用いただくことで、本利用規約に同意したものとみなされます。"]
      },
      {
        title: "2. 免責事項",
        content: ["当サイトの診断ツールは現状有姿で提供され、情報提供および診断のみを目的としています。"]
      }
    ]
  },
  fr: {
    title: "Conditions Générales – ControllerTesters.com",
    description: "Conditions d'utilisation de ControllerTesters.com.",
    badge: "Mentions Légales",
    heading: "Conditions Générales d'Utilisation",
    lastUpdated: "Dernière mise à jour: 1er septembre 2026",
    sections: [
      {
        title: "1. Acceptation des Conditions",
        content: ["L'utilisation de ce site implique l'acceptation sans réserve des présentes conditions."]
      },
      {
        title: "2. Avertissement",
        content: ["Les diagnostics sont fournis à titre indicatif et sans garantie de réparation."]
      }
    ]
  },
  de: {
    title: "Nutzungsbedingungen – ControllerTesters.com",
    description: "Nutzungsbedingungen und Haftungsausschluss für ControllerTesters.com.",
    badge: "Nutzungsbedingungen",
    heading: "Nutzungsbedingungen",
    lastUpdated: "Zuletzt aktualisiert: 1. September 2026",
    sections: [
      {
        title: "1. Geltungsbereich",
        content: ["Mit der Nutzung von ControllerTesters.com erklären Sie sich mit diesen Bedingungen einverstanden."]
      },
      {
        title: "2. Haftungsausschluss",
        content: ["Die Diagnoseergebnisse werden 'wie besehen' rein zur Information bereitgestellt."]
      }
    ]
  },
  pt: {
    title: "Termos e Condições – ControllerTesters.com",
    description: "Termos e condições de utilização do ControllerTesters.com.",
    badge: "Termos de Utilização",
    heading: "Termos e Condições",
    lastUpdated: "Última atualização: 1 de setembro de 2026",
    sections: [
      {
        title: "1. Aceitação",
        content: ["A navegação no website pressupõe a aceitação das presentes condições."]
      },
      {
        title: "2. Limitação de Responsabilidade",
        content: ["As ferramentas de diagnóstico destinam-se exclusivamente a fins informativos."]
      }
    ]
  },
  ko: {
    title: "이용약관 – ControllerTesters.com",
    description: "ControllerTesters.com 서비스 이용약관 및 면책조항.",
    badge: "이용약관",
    heading: "이용약관",
    lastUpdated: "최종 업데이트: 2026년 9월 1일",
    sections: [
      {
        title: "1. 약관의 동의",
        content: ["ControllerTesters.com을 이용함으로써 본 이용약관에 동의하는 것으로 간주됩니다."]
      },
      {
        title: "2. 면책조항",
        content: ["본 서비스에서 제공되는 진단 데이터는 참고용으로 제공됩니다."]
      }
    ]
  },
  it: {
    title: "Termini e Condizioni – ControllerTesters.com",
    description: "Termini e condizioni d'uso di ControllerTesters.com.",
    badge: "Termini d'Uso",
    heading: "Termini e Condizioni",
    lastUpdated: "Ultimo aggiornamento: 1 settembre 2026",
    sections: [
      {
        title: "1. Accettazione dei Termini",
        content: ["L'utilizzo del sito costituisce espressa accettazione dei presenti termini."]
      },
      {
        title: "2. Esclusione di Garanzia",
        content: ["Gli strumenti di diagnostica sono forniti a scopo puramente informativo."]
      }
    ]
  }
};

export const contactContent: Record<SupportedLang, {
  title: string;
  description: string;
  badge: string;
  heading: string;
  sub: string;
  emailLabel: string;
  email: string;
  timeframeLabel: string;
  timeframe: string;
  channels: { title: string; desc: string; icon: string }[];
  formTitle: string;
  nameLabel: string;
  emailInputLabel: string;
  topicLabel: string;
  topics: string[];
  messageLabel: string;
  submitLabel: string;
}> = {
  en: {
    title: "Contact Us – ControllerTesters.com | Support & Hardware Feedback",
    description: "Get in touch with the ControllerTesters.com team for bug reports, hardware controller compatibility questions, and feature suggestions.",
    badge: "Direct Engineering Support",
    heading: "Contact Our Team",
    sub: "Have feedback on a controller layout, detected an unrecognized gamepad, or want to suggest a new diagnostic tool? We'd love to hear from you.",
    emailLabel: "Primary Support Email",
    email: "support@controllertesters.com",
    timeframeLabel: "Typical Response Time",
    timeframe: "Within 24 to 48 hours",
    channels: [
      {
        title: "Bug Reports & Compatibility",
        desc: "Found an issue with button mapping, polling calculation, or stick drift circularity? Send us your Gamepad ID string and browser version.",
        icon: "bug"
      },
      {
        title: "Feature & Benchmark Requests",
        desc: "Want additional reflex modes, customizable deadzone graphs, or fight stick SOCD cleaner diagnostic tools? Let us know!",
        icon: "feature"
      },
      {
        title: "Partnerships & Licensing",
        desc: "For esports tournament organizers, controller manufacturers, and hardware reviewers interested in telemetry integrations.",
        icon: "partner"
      }
    ],
    formTitle: "Send a Message",
    nameLabel: "Your Name",
    emailInputLabel: "Email Address",
    topicLabel: "Topic",
    topics: ["Bug Report / Mapping Issue", "Hardware Compatibility Request", "Feature Suggestion", "General Inquiry"],
    messageLabel: "Message / Controller Details",
    submitLabel: "Send Message"
  },
  'pt-br': {
    title: "Contato – ControllerTesters.com | Suporte e Feedback",
    description: "Entre em contato com a equipe do ControllerTesters.com para relatar erros ou sugerir novas ferramentas.",
    badge: "Suporte Técnico",
    heading: "Fale Conosco",
    sub: "Tem sugestões de melhoria ou encontrou algum problema com o seu controle? Envie sua mensagem.",
    emailLabel: "E-mail Principal",
    email: "support@controllertesters.com",
    timeframeLabel: "Tempo de Resposta",
    timeframe: "Em até 24 a 48 horas",
    channels: [
      { title: "Relatório de Bugs", desc: "Problemas no mapeamento de botões ou stick drift.", icon: "bug" },
      { title: "Sugestões de Recursos", desc: "Ideias para novos modos de reflexo e calibração.", icon: "feature" },
      { title: "Parcerias", desc: "Contatos comerciais e eventos de e-sports.", icon: "partner" }
    ],
    formTitle: "Enviar Mensagem",
    nameLabel: "Seu Nome",
    emailInputLabel: "Seu E-mail",
    topicLabel: "Assunto",
    topics: ["Relatório de Bug", "Compatibilidade de Controle", "Sugestão de Recurso", "Outro"],
    messageLabel: "Mensagem",
    submitLabel: "Enviar Mensagem"
  },
  tr: {
    title: "İletişim – ControllerTesters.com | Destek ve Geri Bildirim",
    description: "ControllerTesters.com ekibiyle iletişime geçin. Hata bildirimleri ve öneriler.",
    badge: "Doğrudan Destek",
    heading: "Bizimle İletişime Geçin",
    sub: "Öneri, hata bildirimi veya yeni özellik talepleri için bize yazın.",
    emailLabel: "Destek E-postası",
    email: "support@controllertesters.com",
    timeframeLabel: "Yanıt Süresi",
    timeframe: "24 - 48 saat içinde",
    channels: [
      { title: "Hata Bildirimi", desc: "Tuş ataması veya drift tespiti ile ilgili sorunlar.", icon: "bug" },
      { title: "Özellik Talepleri", desc: "Yeni test modları ve özellik önerileri.", icon: "feature" },
      { title: "İş Birlikleri", desc: "Turnuva ve e-spor organizasyonları.", icon: "partner" }
    ],
    formTitle: "Mesaj Gönderin",
    nameLabel: "Adınız",
    emailInputLabel: "E-posta Adresiniz",
    topicLabel: "Konu",
    topics: ["Hata Bildirimi", "Cihaz Uyumluluğu", "Özellik Önerisi", "Genel"],
    messageLabel: "Mesajınız",
    submitLabel: "Gönder"
  },
  ar: {
    title: "اتصل بنا – ControllerTesters.com | الدعم الفني",
    description: "تواصل مع فريق ControllerTesters.com للإبلاغ عن مشكلات أو تقديم اقتراحات.",
    badge: "الدعم الفني المباشر",
    heading: "تواصل معنا",
    sub: "هل لديك ملاحظات أو تواجه مشكلة في التعرف على يد التحكم الخاصة بك؟ يسعدنا تواصلك معنا.",
    emailLabel: "البريد الإلكتروني للدعم",
    email: "support@controllertesters.com",
    timeframeLabel: "زمن الاستجابة المتوقع",
    timeframe: "خلال 24 إلى 48 ساعة",
    channels: [
      { title: "الإبلاغ عن الأعطال", desc: "مشكلات في توافق الأزرار أو فحص الأنالوج.", icon: "bug" },
      { title: "اقتراح ميزات جديدة", desc: "أفكار لتطوير أدوات القياس وسرعة الاستجابة.", icon: "feature" },
      { title: "الشراكات", desc: "التعاون مع منظمي بطولات الألعاب الإلكترونية.", icon: "partner" }
    ],
    formTitle: "إرسال رسالة",
    nameLabel: "الاسم",
    emailInputLabel: "البريد الإلكتروني",
    topicLabel: "الموضوع",
    topics: ["الإبلاغ عن خطأ", "طلب دعم جهاز جديد", "اقتراح ميزة", "استفسار عام"],
    messageLabel: "نص الرسالة",
    submitLabel: "إرسال"
  },
  es: {
    title: "Contacto – ControllerTesters.com | Soporte y Feedback",
    description: "Contacta con el equipo de ControllerTesters.com para reportar errores o sugerir mejoras.",
    badge: "Soporte Técnico Directo",
    heading: "Contáctanos",
    sub: "¿Tienes sugerencias o detectaste un mando no compatible? Nos encantará ayudarte.",
    emailLabel: "Correo Electrónico de Soporte",
    email: "support@controllertesters.com",
    timeframeLabel: "Tiempo de Respuesta",
    timeframe: "En 24 a 48 horas",
    channels: [
      { title: "Reporte de Errores", desc: "Problemas con botones o detección de drift.", icon: "bug" },
      { title: "Sugerencias", desc: "Propuestas para nuevos tests o herramientas.", icon: "feature" },
      { title: "Alianzas", desc: "Colaboraciones con torneos y creadores.", icon: "partner" }
    ],
    formTitle: "Enviar Mensaje",
    nameLabel: "Tu Nombre",
    emailInputLabel: "Correo Electrónico",
    topicLabel: "Asunto",
    topics: ["Reporte de Error", "Compatibilidad de Mando", "Sugerencia", "Consulta General"],
    messageLabel: "Mensaje",
    submitLabel: "Enviar"
  },
  ja: {
    title: "お問い合わせ – ControllerTesters.com | サポート＆フィードバック",
    description: "ControllerTesters.com への不具合報告、新機能のご要望、お問い合わせ窓口。",
    badge: "サポート窓口",
    heading: "お問い合わせ",
    sub: "ご意見、コントローラーの認識に関する不具合報告、新機能のリクエストをお待ちしております。",
    emailLabel: "サポート用メールアドレス",
    email: "support@controllertesters.com",
    timeframeLabel: "返信目安",
    timeframe: "24〜48時間以内",
    channels: [
      { title: "不具合・誤動作の報告", desc: "ボタン割り当てやドリフト測定の不具合。", icon: "bug" },
      { title: "新機能のリクエスト", desc: "新しい反射神経テストや診断機能の提案。", icon: "feature" },
      { title: "パートナーシップ", desc: "eスポーツ大会や周辺機器レビューに関するお問い合わせ。", icon: "partner" }
    ],
    formTitle: "メッセージを送信",
    nameLabel: "お名前",
    emailInputLabel: "メールアドレス",
    topicLabel: "お問い合わせ項目",
    topics: ["不具合報告", "コントローラー対応リクエスト", "機能改善の提案", "その他"],
    messageLabel: "メッセージ内容",
    submitLabel: "送信する"
  },
  fr: {
    title: "Contact – ControllerTesters.com | Support & Retours",
    description: "Contactez l'équipe de ControllerTesters.com pour toute question ou suggestion.",
    badge: "Support Direct",
    heading: "Contactez-Nous",
    sub: "Une suggestion, un bug à signaler ou une demande de compatibilité ? Écrivez-nous.",
    emailLabel: "E-mail de Support",
    email: "support@controllertesters.com",
    timeframeLabel: "Délai de Réponse",
    timeframe: "Sous 24 à 48 heures",
    channels: [
      { title: "Signalement de Bug", desc: "Problème d'assignation ou de test de drift.", icon: "bug" },
      { title: "Suggestions", desc: "Idées de nouveaux outils de test.", icon: "feature" },
      { title: "Partenariats", desc: "Organisations esport et collaborations.", icon: "partner" }
    ],
    formTitle: "Envoyer un Message",
    nameLabel: "Votre Nom",
    emailInputLabel: "Adresse E-mail",
    topicLabel: "Sujet",
    topics: ["Rapport de Bug", "Demande de Compatibilité", "Suggestion de Fonctionnalité", "Autre"],
    messageLabel: "Message",
    submitLabel: "Envoyer"
  },
  de: {
    title: "Kontakt – ControllerTesters.com | Support & Feedback",
    description: "Kontaktieren Sie das ControllerTesters.com Team für Support, Fehlerberichte und Vorschläge.",
    badge: "Direkter Support",
    heading: "Kontaktieren Sie Uns",
    sub: "Haben Sie Feedback, Kompatibilitätsfragen oder Anregungen? Wir freuen uns über Ihre Nachricht.",
    emailLabel: "Support-E-Mail",
    email: "support@controllertesters.com",
    timeframeLabel: "Antwortzeit",
    timeframe: "Innerhalb von 24 bis 48 Stunden",
    channels: [
      { title: "Fehlerberichte", desc: "Probleme bei Tastenbelegung oder Drift-Analyse.", icon: "bug" },
      { title: "Funktionswünsche", desc: "Vorschläge für neue Test-Modi.", icon: "feature" },
      { title: "Partnerschaften", desc: "Kooperationen für E-Sport-Turniere.", icon: "partner" }
    ],
    formTitle: "Nachricht Senden",
    nameLabel: "Ihr Name",
    emailInputLabel: "E-Mail-Adresse",
    topicLabel: "Thema",
    topics: ["Fehlerbericht", "Gamepad-Kompatibilität", "Funktionsvorschlag", "Allgemeine Anfrage"],
    messageLabel: "Ihre Nachricht",
    submitLabel: "Absenden"
  },
  pt: {
    title: "Contacto – ControllerTesters.com | Suporte e Sugestões",
    description: "Entre em contacto com o ControllerTesters.com para suporte ou sugestões de novas funcionalidades.",
    badge: "Suporte Técnico",
    heading: "Fale Connosco",
    sub: "Tem sugestões de melhoria ou encontrou alguma anomalia? Envie a sua mensagem.",
    emailLabel: "E-mail de Suporte",
    email: "support@controllertesters.com",
    timeframeLabel: "Tempo de Resposta",
    timeframe: "Em 24 a 48 horas",
    channels: [
      { title: "Relatório de Erros", desc: "Problemas na leitura de botões ou manípulos.", icon: "bug" },
      { title: "Sugestões", desc: "Ideias para novos testes.", icon: "feature" },
      { title: "Parcerias", desc: "Eventos de e-sports e colaborações.", icon: "partner" }
    ],
    formTitle: "Enviar Mensagem",
    nameLabel: "O Seu Nome",
    emailInputLabel: "Endereço de E-mail",
    topicLabel: "Assunto",
    topics: ["Relatório de Erro", "Compatibilidade de Comando", "Sugestão", "Geral"],
    messageLabel: "Mensagem",
    submitLabel: "Enviar"
  },
  ko: {
    title: "문의하기 – ControllerTesters.com | 고객지원 및 피드백",
    description: "ControllerTesters.com 팀에 문의, 버그 제보 및 새로운 기능 제안을 남겨주세요.",
    badge: "엔지니어링 지원",
    heading: "문의하기",
    sub: "컨트롤러 인식 오류 제보, 기능 개선 제안 등 사용자 여러분의 소중한 의견을 기다립니다.",
    emailLabel: "고객지원 이메일",
    email: "support@controllertesters.com",
    timeframeLabel: "답변 소요시간",
    timeframe: "24~48시간 이내",
    channels: [
      { title: "버그 제보 및 호환성 문의", desc: "버튼 매핑 오류나 스틱 쏠림 측정 이상 제보.", icon: "bug" },
      { title: "기능 추가 요청", desc: "새로운 반응속도 모드나 그래프 분석 제안.", icon: "feature" },
      { title: "파트너십", desc: "e스포츠 대회 및 하드웨어 제조사 협업.", icon: "partner" }
    ],
    formTitle: "문의 작성",
    nameLabel: "성함",
    emailInputLabel: "이메일 주소",
    topicLabel: "문의 유형",
    topics: ["버그 제보", "기기 호환성 요청", "기능 제안", "일반 문의"],
    messageLabel: "문의 내용",
    submitLabel: "보내기"
  },
  it: {
    title: "Contattaci – ControllerTesters.com | Supporto e Feedback",
    description: "Contatta il team di ControllerTesters.com per segnalazioni di bug e suggerimenti.",
    badge: "Supporto Diretto",
    heading: "Contatta il Nostro Team",
    sub: "Hai suggerimenti o riscontri problemi con il tuo gamepad? Scrivici subito.",
    emailLabel: "Email di Supporto",
    email: "support@controllertesters.com",
    timeframeLabel: "Tempo di Risposta",
    timeframe: "Entro 24-48 ore",
    channels: [
      { title: "Segnalazione Bug", desc: "Problemi di mappatura o test di drift.", icon: "bug" },
      { title: "Suggerimenti", desc: "Proposte per nuovi strumenti diagnostici.", icon: "feature" },
      { title: "Partnership", desc: "Collaborazioni ed eventi e-sport.", icon: "partner" }
    ],
    formTitle: "Invia un Messaggio",
    nameLabel: "Il Tuo Nome",
    emailInputLabel: "Indirizzo Email",
    topicLabel: "Argomento",
    topics: ["Segnalazione Bug", "Compatibilità Gamepad", "Suggerimento", "Altro"],
    messageLabel: "Messaggio",
    submitLabel: "Invia"
  }
};
