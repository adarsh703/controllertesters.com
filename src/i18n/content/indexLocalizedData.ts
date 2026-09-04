import type { SupportedLang } from '../languages';
import type { MatrixPlatform, MeasurementSpec, MaintenanceStep } from './indexContent';

export const localizedMatrixPlatforms: Record<SupportedLang, MatrixPlatform[]> = {
  en: [
    { platform: "Microsoft Xbox", desc: "Xbox Wireless Controller (Series X|S), Xbox One S/X, Xbox 360, Xbox Elite Series 1 & 2. Native XInput standard mapping with full trigger telemetry.", color: "text-m-blue-light" },
    { platform: "Sony PlayStation", desc: "DualSense (PS5), DualSense Edge, DualShock 4 (PS4), and DualShock 3 (PS3). DirectInput Bluetooth and USB HID with dual-motor vibration testing.", color: "text-m-blue-dark" },
    { platform: "Nintendo & Handhelds", desc: "Nintendo Switch Pro Controller, Joy-Cons (L/R pairs), Valve Steam Deck, ASUS ROG Ally, Lenovo Legion Go, and MSI Claw handheld systems.", color: "text-[#0fa336]" },
    { platform: "Custom & Esports", desc: "SCUF, 8BitDo Ultimate/Pro 2, Razer Wolverine/Kitsune, Flydigi Vader/Apex, GameSir G7/T4, Logitech G, and all generic USB/Bluetooth HID controllers.", color: "text-m-red" }
  ],
  'pt-br': [
    { platform: "Microsoft Xbox", desc: "Xbox Wireless Controller (Series X|S), Xbox One S/X, Xbox 360, Xbox Elite 1 e 2. Mapeamento padrão XInput com telemetria total dos gatilhos.", color: "text-m-blue-light" },
    { platform: "Sony PlayStation", desc: "DualSense (PS5), DualSense Edge, DualShock 4 (PS4) e DualShock 3 (PS3). Bluetooth e USB DirectInput com teste de vibração dual-motor.", color: "text-m-blue-dark" },
    { platform: "Nintendo e Portáteis", desc: "Nintendo Switch Pro, Joy-Cons (par E/D), Valve Steam Deck, ASUS ROG Ally, Lenovo Legion Go e MSI Claw.", color: "text-[#0fa336]" },
    { platform: "Personalizados e Esports", desc: "SCUF, 8BitDo Ultimate/Pro 2, Razer Wolverine/Kitsune, Flydigi Vader/Apex, GameSir G7/T4, Logitech G e controles genéricos USB/Bluetooth.", color: "text-m-red" }
  ],
  tr: [
    { platform: "Microsoft Xbox", desc: "Xbox Kablosuz Kol (Series X|S), Xbox One S/X, Xbox 360, Xbox Elite 1 ve 2. Tam tetik telemetrili yerel XInput standart eşlemesi.", color: "text-m-blue-light" },
    { platform: "Sony PlayStation", desc: "DualSense (PS5), DualSense Edge, DualShock 4 (PS4) ve DualShock 3 (PS3). Çift motorlu titreşim testli DirectInput Bluetooth ve USB HID.", color: "text-m-blue-dark" },
    { platform: "Nintendo ve El Konsolları", desc: "Nintendo Switch Pro Kolu, Joy-Con (Sol/Sağ), Valve Steam Deck, ASUS ROG Ally, Lenovo Legion Go ve MSI Claw cihazları.", color: "text-[#0fa336]" },
    { platform: "Özel ve Espor Kolları", desc: "SCUF, 8BitDo Ultimate/Pro 2, Razer Wolverine/Kitsune, Flydigi Vader/Apex, GameSir G7/T4, Logitech G ve tüm genel USB/Bluetooth kollar.", color: "text-m-red" }
  ],
  ar: [
    { platform: "مايكروسوفت إكس بوكس", desc: "يد تحكم Xbox اللاسلكية (Series X|S) و Xbox One و Xbox 360 و Xbox Elite 1 و 2. توافق كامل مع معيار XInput وقياس المحفزات.", color: "text-m-blue-light" },
    { platform: "سوني بلايستيشن", desc: "أذرع DualSense (PS5) و DualSense Edge و DualShock 4 (PS4) و DualShock 3 عبر البلوتوث و USB مع اختبار الاهتزاز الثنائي.", color: "text-m-blue-dark" },
    { platform: "نينتندو والأجهزة المحمولة", desc: "يد تحكم Nintendo Switch Pro و Joy-Cons و Steam Deck و ASUS ROG Ally و Lenovo Legion Go و MSI Claw.", color: "text-[#0fa336]" },
    { platform: "أذرع احترافية ومخصصة", desc: "أذرع SCUF و 8BitDo و Razer Wolverine و Flydigi و GameSir و Logitech وكافة أذرع التحكم عبر USB و Bluetooth.", color: "text-m-red" }
  ],
  es: [
    { platform: "Microsoft Xbox", desc: "Mando Inalámbrico Xbox (Series X|S), Xbox One S/X, Xbox 360, Xbox Elite Series 1 y 2. Mapeo estándar XInput con telemetría de gatillos.", color: "text-m-blue-light" },
    { platform: "Sony PlayStation", desc: "DualSense (PS5), DualSense Edge, DualShock 4 (PS4) y DualShock 3 (PS3). DirectInput Bluetooth y USB HID con prueba de vibración de doble motor.", color: "text-m-blue-dark" },
    { platform: "Nintendo y Portátiles", desc: "Mando Nintendo Switch Pro, Joy-Cons (L/R), Valve Steam Deck, ASUS ROG Ally, Lenovo Legion Go y MSI Claw.", color: "text-[#0fa336]" },
    { platform: "Personalizados y Esports", desc: "SCUF, 8BitDo Ultimate/Pro 2, Razer Wolverine/Kitsune, Flydigi Vader/Apex, GameSir G7/T4, Logitech G y todos los mandos genéricos USB/Bluetooth.", color: "text-m-red" }
  ],
  ja: [
    { platform: "マイクロソフト Xbox", desc: "Xbox ワイヤレス コントローラー (Series X|S)、Xbox One S/X、Xbox 360、Xbox Elite シリーズ 1 & 2。トリガー完全対応のネイティブXInputマッピング。", color: "text-m-blue-light" },
    { platform: "ソニー プレイステーション", desc: "DualSense (PS5)、DualSense Edge、DualShock 4 (PS4)、DualShock 3 (PS3)。デュアルモーター振動テスト対応のBluetooth & USB DirectInput。", color: "text-m-blue-dark" },
    { platform: "任天堂 & ポータブル機", desc: "Nintendo Switch Proコントローラー、Joy-Con (L/R)、Steam Deck、ASUS ROG Ally、Lenovo Legion Go、MSI ClawポータブルゲーミングPC。", color: "text-[#0fa336]" },
    { platform: "カスタム & プロeスポーツ", desc: "SCUF、8BitDo Ultimate/Pro 2、Razer Wolverine/Kitsune、Flydigi Vader/Apex、GameSir G7/T4、Logicool G、その他汎用USB/Bluetoothコントローラー。", color: "text-m-red" }
  ],
  fr: [
    { platform: "Microsoft Xbox", desc: "Manette sans fil Xbox (Series X|S), Xbox One S/X, Xbox 360, Xbox Elite 1 & 2. Mappage XInput natif avec télémétrie complète des gâchettes.", color: "text-m-blue-light" },
    { platform: "Sony PlayStation", desc: "DualSense (PS5), DualSense Edge, DualShock 4 (PS4) et DualShock 3 (PS3). DirectInput Bluetooth et USB HID avec test de vibration double moteur.", color: "text-m-blue-dark" },
    { platform: "Nintendo & Consoles Portables", desc: "Manette Nintendo Switch Pro, Joy-Cons (G/D), Steam Deck, ASUS ROG Ally, Lenovo Legion Go et MSI Claw.", color: "text-[#0fa336]" },
    { platform: "Manettes Personnalisées & Esports", desc: "SCUF, 8BitDo Ultimate/Pro 2, Razer Wolverine/Kitsune, Flydigi Vader/Apex, GameSir G7/T4, Logitech G et toutes les manettes USB/Bluetooth génériques.", color: "text-m-red" }
  ],
  de: [
    { platform: "Microsoft Xbox", desc: "Xbox Wireless Controller (Series X|S), Xbox One S/X, Xbox 360, Xbox Elite 1 & 2. Natives XInput-Standard-Mapping mit voller Trigger-Telemetrie.", color: "text-m-blue-light" },
    { platform: "Sony PlayStation", desc: "DualSense (PS5), DualSense Edge, DualShock 4 (PS4) und DualShock 3 (PS3). DirectInput Bluetooth und USB HID mit Dual-Motor-Vibrationstest.", color: "text-m-blue-dark" },
    { platform: "Nintendo & Handhelds", desc: "Nintendo Switch Pro Controller, Joy-Cons (L/R), Valve Steam Deck, ASUS ROG Ally, Lenovo Legion Go und MSI Claw Handheld-Systeme.", color: "text-[#0fa336]" },
    { platform: "Custom & E-Sport", desc: "SCUF, 8BitDo Ultimate/Pro 2, Razer Wolverine/Kitsune, Flydigi Vader/Apex, GameSir G7/T4, Logitech G und alle generischen USB/Bluetooth-Controller.", color: "text-m-red" }
  ],
  pt: [
    { platform: "Microsoft Xbox", desc: "Comando sem fios Xbox (Series X|S), Xbox One S/X, Xbox 360, Xbox Elite 1 e 2. Mapeamento padrão XInput com telemetria total dos gatilhos.", color: "text-m-blue-light" },
    { platform: "Sony PlayStation", desc: "DualSense (PS5), DualSense Edge, DualShock 4 (PS4) e DualShock 3 (PS3). Bluetooth e USB DirectInput com teste de vibração de motor duplo.", color: "text-m-blue-dark" },
    { platform: "Nintendo e Consolas Portáteis", desc: "Comando Nintendo Switch Pro, Joy-Cons (E/D), Steam Deck, ASUS ROG Ally, Lenovo Legion Go e MSI Claw.", color: "text-[#0fa336]" },
    { platform: "Personalizados e Esports", desc: "SCUF, 8BitDo Ultimate/Pro 2, Razer Wolverine/Kitsune, Flydigi Vader/Apex, GameSir G7/T4, Logitech G e comandos genéricos USB/Bluetooth.", color: "text-m-red" }
  ],
  ko: [
    { platform: "마이크로소프트 Xbox", desc: "Xbox 무선 컨트롤러 (Series X|S), Xbox One S/X, Xbox 360, Xbox Elite 1 & 2. 트리거 압력 텔레메트리가 완벽 지원되는 네이티브 XInput 표준 매핑.", color: "text-m-blue-light" },
    { platform: "소니 플레이스테이션", desc: "DualSense (PS5), DualSense Edge, DualShock 4 (PS4), DualShock 3 (PS3). 듀얼 모터 진동 테스트가 지원되는 DirectInput 블루투스 및 USB HID.", color: "text-m-blue-dark" },
    { platform: "닌텐도 & 핸드헬드 기기", desc: "Nintendo Switch Pro 컨트롤러, Joy-Con (좌/우), Valve Steam Deck, ASUS ROG Ally, Lenovo Legion Go, MSI Claw 휴대용 콘솔.", color: "text-[#0fa336]" },
    { platform: "커스텀 & e스포츠 패드", desc: "SCUF, 8BitDo Ultimate/Pro 2, Razer Wolverine/Kitsune, Flydigi Vader/Apex, GameSir G7/T4, Logitech G 및 모든 범용 USB/블루투스 게임패드.", color: "text-m-red" }
  ],
  it: [
    { platform: "Microsoft Xbox", desc: "Controller Wireless Xbox (Series X|S), Xbox One S/X, Xbox 360, Xbox Elite 1 e 2. Mappatura standard XInput con telemetria completa dei grilletti.", color: "text-m-blue-light" },
    { platform: "Sony PlayStation", desc: "DualSense (PS5), DualSense Edge, DualShock 4 (PS4) e DualShock 3 (PS3). Bluetooth e USB DirectInput con test vibrazione a doppio motore.", color: "text-m-blue-dark" },
    { platform: "Nintendo e Portatili", desc: "Controller Nintendo Switch Pro, Joy-Con (S/D), Steam Deck, ASUS ROG Ally, Lenovo Legion Go e MSI Claw.", color: "text-[#0fa336]" },
    { platform: "Personalizzati ed Esports", desc: "SCUF, 8BitDo Ultimate/Pro 2, Razer Wolverine/Kitsune, Flydigi Vader/Apex, GameSir G7/T4, Logitech G e controller generici USB/Bluetooth.", color: "text-m-red" }
  ]
};

export const localizedSpecs: Record<SupportedLang, MeasurementSpec[]> = {
  en: [
    { tag: "01 // Sampling Latency", title: "Polling Rate Telemetry", desc: "Measures exact hardware reporting rate up to 1000Hz. Standard connections report at 125Hz (8ms latency), 250Hz (4ms), 500Hz (2ms), and 1000Hz (1ms esports overclocking) to eliminate input lag." },
    { tag: "02 // Sensor Fidelity", title: "Hall Effect vs Potentiometer", desc: "Carbon film potentiometers wear down physically, causing resting drift and jitter. Modern contactless Hall Effect and TMR magnetic sensors eliminate wear and deliver permanent 0.00% deadzone accuracy." },
    { tag: "03 // Force Feedback", title: "Dual-Motor Vibration Actuators", desc: "Tests dual-motor haptic actuators: low-frequency heavy eccentric rotating mass (ERM) motors on the left for heavy impacts, and high-frequency light motors on the right for subtle tactical vibration cues." },
    { tag: "04 // Analog Travel", title: "Trigger Linearity & Pressure", desc: "Analyzes 256-level progressive trigger depression for LT/RT and L2/R2. Verifies smooth acceleration ramps, mechanical bottom-out actuation (1.00000), and detects potentiometer dead zones." },
    { tag: "05 // Polar Mapping", title: "64-Sector Stick Circularity", desc: "Traces outer thumbstick physical gating to compute average circularity error percentage. Ideal spherical joysticks score between 5% and 12%, while clipped square gates exceed 18%." },
    { tag: "06 // Input Integrity", title: "18-Button Digital Mapping", desc: "Full diagnostic matrix covering Face Buttons (A/B/X/Y), Bumpers (LB/RB, L1/R1), Stick Clicks (L3/R3), D-Pad directional switches, Start/Select/Options/Share, and Home Guide buttons." }
  ],
  'pt-br': [
    { tag: "01 // Latência de Amostragem", title: "Telemetria de Polling Rate", desc: "Mede a taxa exata de transmissão até 1000Hz. Conexões operam a 125Hz (8ms), 250Hz (4ms), 500Hz (2ms) e 1000Hz (1ms em e-sports) para eliminar o atraso de comando." },
    { tag: "02 // Fidelidade de Sensores", title: "Hall Effect vs Potenciômetro", desc: "Potenciômetros de carbono sofrem desgaste e drift. Sensores magnéticos Hall Effect e TMR eliminam o desgaste e garantem 0.00% de zona morta permanente." },
    { tag: "03 // Retorno de Força", title: "Atuadores de Vibração Dual-Motor", desc: "Testa motores hápticos: motor pesado de baixa frequência à esquerda para impactos fortes e motor leve de alta frequência à direita para vibrações táticas sutis." },
    { tag: "04 // Curso Analógico", title: "Linearidade e Pressão dos Gatilhos", desc: "Analisa 256 níveis progressivos de pressão em LT/RT e L2/R2, verificando aceleração suave, fim de curso (1.00000) e zonas mortas." },
    { tag: "05 // Mapeamento Polar", title: "Circularidade em 64 Setores", desc: "Mapeia o limite físico da rotação dos analógicos para calcular a porcentagem de erro de circularidade. Valores ideais ficam entre 5% e 12%." },
    { tag: "06 // Integridade de Entrada", title: "Mapeamento Digital de 18 Botões", desc: "Matriz completa com botões de ação (A/B/X/Y), botões de ombro (LB/RB, L1/R1), cliques analógicos (L3/R3), direcional D-Pad e botões Menu/Home." }
  ],
  tr: [
    { tag: "01 // Örnekleme Gecikmesi", title: "Polling Rate Telemetrisi", desc: "1000Hz'e kadar donanım iletim hızını ölçer. Standart bağlantılar 125Hz (8ms), 250Hz (4ms), 500Hz (2ms) ve espor için 1000Hz (1ms) değerlerinde gecikmesiz çalışır." },
    { tag: "02 // Sensör Doğruluğu", title: "Hall Effect ve Potansiyometre", desc: "Karbon film potansiyometreler aşınarak drift yapar. Temassız manyetik Hall Effect ve TMR sensörleri aşınmayı önler ve kalıcı %0.00 ölü bölge hassasiyeti sunar." },
    { tag: "03 // Titreşim Geri Bildirimi", title: "Çift Motorlu Titreşim Aktüatörleri", desc: "Sol taraftaki düşük frekanslı ağır vuruş motoru ile sağ taraftaki yüksek frekanslı hafif taktiksel titreşim motorunu test eder." },
    { tag: "04 // Analog Hareket", title: "Tetik Doğrusallığı ve Basınç", desc: "LT/RT ve L2/R2 için 256 kademeli kademeli basış kontrolü. Pürüzsüz hızlanma rampalarını ve tam basış noktasını (1.00000) doğrular." },
    { tag: "05 // Kutupsal Haritalama", title: "64 Sektörlü Çubuk Daireselliği", desc: "Analog çubuğun dış sınırını takip ederek ortalama dairesellik hata yüzdesini hesaplar. İdeal küresel joystikler %5 ile %12 arasında skor alır." },
    { tag: "06 // Giriş Bütünlüğü", title: "18 Tuşlu Dijital Eşleme", desc: "Eylem tuşları (A/B/X/Y), omuz tuşları (LB/RB, L1/R1), çubuk tıklamaları (L3/R3), D-Pad yön tuşları ve Menü/Home tuşlarını kapsayan tanı matrisi." }
  ],
  ar: [
    { tag: "01 // زمن الاستجابة", title: "قياس معدل الإرسال Polling Rate", desc: "يقيس سرعة إرسال الإشارات حتى 1000Hz. تعمل الأجهزة بمعدل 125Hz (8ms) و 250Hz (4ms) و 500Hz (2ms) و 1000Hz (1ms) لإلغاء أي تأخير في الألعاب التنافسية." },
    { tag: "02 // دقة الحساسات", title: "مقارنة Hall Effect بالمقاومات العادية", desc: "تتآكل المقاومات الكربونية مسببة انحراف الأنالوج، بينما تمنع الحساسات المغناطيسية Hall Effect و TMR التآكل وتوفر دقة 0.00% دائمة." },
    { tag: "03 // الاهتزاز التفاعلي", title: "محركات الاهتزاز المزدوجة", desc: "يفحص محركات الاهتزاز: المحرك الثقيل منخفض التردد على اليسار للصدمات القوية، والمحرك الخفيف عالي التردد على اليمين للمؤثرات الدقيقة." },
    { tag: "04 // مسار المحفزات", title: "خطية وضغط المحفزات التماثلية", desc: "يحلل 256 مستوى لضغط أزرار LT/RT و L2/R2 للتأكد من سلاسة التدرج والوصول للضغط الكامل (1.00000) دون أي مناطق ميتة." },
    { tag: "05 // الرادار الدائري", title: "دائرية الأنالوج عبر 64 قطاعاً", desc: "يتتبع الحدود الخارجية لدوران الأنالوج لحساب نسبة الخطأ الدائري، حيث تتراوح النسبة المثالية بين 5% و 12%." },
    { tag: "06 // سلامة الأزرار", title: "فحص مصفوفة الأزرار الـ 18", desc: "مصفوفة فحص متكاملة تشمل الأزرار الرئيسية (A/B/X/Y) وأزرار الكتف (LB/RB, L1/R1) وضغطات الأنالوج (L3/R3) والأسهم وزر الهوم." }
  ],
  es: [
    { tag: "01 // Latencia de Muestreo", title: "Telemetría de Polling Rate", desc: "Mide la frecuencia de informe del hardware hasta 1000Hz. Conexiones a 125Hz (8ms), 250Hz (4ms), 500Hz (2ms) y 1000Hz (1ms para esports) eliminan el retraso de entrada." },
    { tag: "02 // Fidelidad del Sensor", title: "Hall Effect vs Potenciómetro", desc: "Los potenciómetros de carbono sufren desgaste físico y deriva. Los sensores magnéticos Hall Effect y TMR eliminan el desgaste y ofrecen 0.00% de zona muerta permanente." },
    { tag: "03 // Respuesta Háptica", title: "Actuadores de Vibración Dual-Motor", desc: "Prueba actuadores duales: motor pesado de baja frecuencia a la izquierda para impactos fuertes y motor ligero de alta frecuencia a la derecha para vibraciones tácticas sutiles." },
    { tag: "04 // Recorrido Analógico", title: "Linealidad y Presión de Gatillos", desc: "Analiza 256 niveles de presión progresiva en LT/RT y L2/R2. Verifica rampas de aceleración suaves, pulsación al 100% (1.00000) y zonas muertas." },
    { tag: "05 // Mapeo Polar", title: "Circularidad en 64 Sectores", desc: "Rastrea el perímetro exterior de los joysticks para calcular el error de circularidad. Los joysticks ideales puntúan entre un 5% y un 12%." },
    { tag: "06 // Integridad de Entrada", title: "Mapeo Digital de 18 Botones", desc: "Matriz completa con botones frontales (A/B/X/Y), superiores (LB/RB, L1/R1), clics de stick (L3/R3), cruceta D-Pad y botones Menú/Inicio." }
  ],
  ja: [
    { tag: "01 // サンプリング遅延", title: "ポーリングレート測定 (Hz)", desc: "最大1000Hzのデータ転送レートを計測。標準の125Hz (8ms)、250Hz (4ms)、500Hz (2ms)、eスポーツ向けの1000Hz (1ms) で入力遅延を極限まで排除します。" },
    { tag: "02 // センサー精度", title: "ホールエフェクト vs 従来型", desc: "従来のカーボン抵抗体は摩耗によりドリフトが発生します。最新のホール効果＆TMR磁気センサーは摩耗ゼロで永久に0.00%のデッドゾーン精度を維持します。" },
    { tag: "03 // 触覚フィードバック", title: "デュアルモーター振動テスト", desc: "左側の重衝撃用低周波モーターと、右側の繊細な戦術振動用高周波モーターの動作を個別に診断します。" },
    { tag: "04 // アナログストローク", title: "トリガーの線形性と押し込み圧", desc: "LT/RTおよびL2/R2の256段階アナログ押し込み深度を解析。スムーズな加速曲線と完全底打ち（1.00000）をリアルタイムで確認。" },
    { tag: "05 // 極座標マッピング", title: "64セクター・スティック円形度", desc: "スティック外周の回転軌道を追跡して平均円形度エラー率を算出。理想的な真円スティックは5%〜12%の範囲に収まります。" },
    { tag: "06 // ボタン入力確認", title: "18ボタン・デジタルマッピング", desc: "前面ボタン (A/B/X/Y)、ショルダー (LB/RB, L1/R1)、スティック押し込み (L3/R3)、十字キー、スタート/セレクト/ホームボタンの完全診断。" }
  ],
  fr: [
    { tag: "01 // Latence d'Échantillonnage", title: "Télémétrie de Polling Rate", desc: "Mesure la fréquence de rapport jusqu'à 1000Hz. Fonctionne à 125Hz (8ms), 250Hz (4ms), 500Hz (2ms) et 1000Hz (1ms en e-sport) pour éliminer l'input lag." },
    { tag: "02 // Précision des Capteurs", title: "Hall Effect vs Potentiomètres", desc: "Les pistes en carbone s'usent avec le temps. Les capteurs magnétiques Hall Effect et TMR éliminent tout frottement et garantissent une deadzone à 0.00%." },
    { tag: "03 // Retour de Force", title: "Moteurs de Vibration Dual-Motor", desc: "Teste les moteurs haptiques : moteur lourd basse fréquence à gauche pour les explosions et moteur léger haute fréquence à droite pour les vibrations subtiles." },
    { tag: "04 // Course Analogique", title: "Linéarité et Pression des Gâchettes", desc: "Analyse 256 niveaux de progression sur LT/RT et L2/R2. Vérifie la fluidité de l'accélération, la butée mécanique (1.00000) et les zones mortes." },
    { tag: "05 // Cartographie Polaire", title: "Circularité sur 64 Secteurs", desc: "Trace le contour physique des sticks pour calculer l'erreur de circularité. Un joystick bien calibré obtient entre 5% et 12%." },
    { tag: "06 // Intégrité des Entrées", title: "Mappage Numérique 18 Boutons", desc: "Matrice de test couvrant les boutons d'action (A/B/X/Y), gâchettes hautes (LB/RB, L1/R1), clics de stick (L3/R3), croix D-Pad et boutons Système." }
  ],
  de: [
    { tag: "01 // Abtast-Latenz", title: "Polling-Rate-Telemetrie", desc: "Misst die Übertragungsrate bis 1000Hz. Unterstützt 125Hz (8ms), 250Hz (4ms), 500Hz (2ms) und 1000Hz (1ms E-Sport-Overclocking) gegen Eingabeverzögerung." },
    { tag: "02 // Sensor-Präzision", title: "Hall-Effekt vs. Potenziometer", desc: "Herkömmliche Schleifkontakte nutzen sich ab. Kontaktlose Hall-Effekt- und TMR-Magnetsensoren verhindern Verschleiß und garantieren dauerhaft 0.00% Deadzone-Präzision." },
    { tag: "03 // Force-Feedback", title: "Dual-Motor Vibrationsantriebe", desc: "Testet haptische Motoren: Schwerer Niederfrequenzmotor links für starke Einschläge und leichter Hochfrequenzmotor rechts für feine Vibrationseffekte." },
    { tag: "04 // Analoger Hubweg", title: "Trigger-Linearität & Druckstufen", desc: "Analysiert 256 Druckstufen für LT/RT und L2/R2. Prüft gleichmäßige Beschleunigung, vollen Anschlag (1.00000) und erkennt tote Zonen." },
    { tag: "05 // Polardiagramm", title: "64-Sektoren-Stick-Zirkularität", desc: "Erfasst die äußere Drehbegrenzung zur Berechnung des Zirkularitätsfehlers. Perfekt kalibrierte Sticks liegen zwischen 5% und 12%." },
    { tag: "06 // Tastenintegrität", title: "Digitales 18-Tasten-Mapping", desc: "Vollständige Diagnosematrix für Aktionstasten (A/B/X/Y), Schultertasten (LB/RB, L1/R1), Stick-Klicks (L3/R3), D-Pad und Menü-/Home-Tasten." }
  ],
  pt: [
    { tag: "01 // Latência de Amostragem", title: "Telemetria de Polling Rate", desc: "Mede a taxa de transmissão até 1000Hz. Suporta 125Hz (8ms), 250Hz (4ms), 500Hz (2ms) e 1000Hz (1ms em e-sports) para eliminar qualquer atraso." },
    { tag: "02 // Precisão dos Sensores", title: "Hall Effect vs Potenciómetros", desc: "Pistas resistivas de carbono desgastam-se fisicamente. Sensores magnéticos Hall Effect e TMR eliminam o atrito com 0.00% de zona morta permanente." },
    { tag: "03 // Resposta de Vibração", title: "Motores de Vibração Dual-Motor", desc: "Avalia atuadores hápticos: motor pesado de baixa frequência à esquerda para impactos fortes e motor leve de alta frequência à direita para vibrações táticas." },
    { tag: "04 // Curso Analógico", title: "Linearidade e Pressão dos Gatilhos", desc: "Analisa 256 níveis de pressão progressiva em LT/RT e L2/R2. Confirma a progressão contínua e o curso total (1.00000) sem zonas mortas." },
    { tag: "05 // Mapeamento Polar", title: "Circularidade em 64 Setores", desc: "Mapeia o limite exterior dos manípulos para calcular o erro médio de circularidade. Valores entre 5% e 12% representam o padrão de fábrica ideal." },
    { tag: "06 // Integridade de Entrada", title: "Mapeamento Digital de 18 Botões", desc: "Matriz completa com botões frontais (A/B/X/Y), botões de ombro (LB/RB, L1/R1), cliques analógicos (L3/R3), direcional D-Pad e botões de sistema." }
  ],
  ko: [
    { tag: "01 // 샘플링 지연 시간", title: "폴링레이트 텔레메트리 (Hz)", desc: "최대 1000Hz 하드웨어 전송 속도를 정밀 측정합니다. 125Hz (8ms), 250Hz (4ms), 500Hz (2ms), e스포츠 1000Hz (1ms) 초저지연 상태를 검증합니다." },
    { tag: "02 // 센서 정밀도", title: "홀 이펙트(Hall Effect) vs 탄소 피막", desc: "기존 가변저항은 마모로 인해 쏠림이 발생합니다. 최신 비접촉 자기장 홀 센서 및 TMR 센서는 마모 없이 영구적인 0.00% 데드존 정밀도를 유지합니다." },
    { tag: "03 // 햅틱 피드백", title: "듀얼 모터 진동 액추에이터", desc: "강한 타격감을 위한 좌측 저주파 대형 모터와 섬세한 전술 진동을 위한 우측 고주파 소형 모터의 동작 상태를 정밀 진단합니다." },
    { tag: "04 // 아날로그 압력", title: "트리거 선형성 및 가압 깊이", desc: "LT/RT 및 L2/R2의 256단계 압력 감지를 분석하여 부드러운 가속 곡선, 100% 완전 입력(1.00000) 및 불감 대역 여부를 확인합니다." },
    { tag: "05 // 극좌표 매핑", title: "64섹터 아날로그 스틱 원형도", desc: "스틱 외곽 회전 궤적을 실시간으로 추적하여 원형도 오차율을 계산합니다. 이상적인 원형 스틱은 5%~12% 범위 내에 분포합니다." },
    { tag: "06 // 버튼 입력 무결성", title: "18버튼 디지털 매핑 매트릭스", desc: "전면 액션 버튼(A/B/X/Y), 범퍼(LB/RB, L1/R1), 스틱 클릭(L3/R3), D-패드 방향키, 스타트/선택 및 홈 버튼을 전수 진단합니다." }
  ],
  it: [
    { tag: "01 // Latenza di Campionamento", title: "Telemetria Polling Rate", desc: "Misura la frequenza di campionamento fino a 1000Hz. Supporta 125Hz (8ms), 250Hz (4ms), 500Hz (2ms) e 1000Hz (1ms per esports) per eliminare l'input lag." },
    { tag: "02 // Fedeltà del Sensore", title: "Hall Effect vs Potenziometro", desc: "I potenziometri tradizionali si usurano e causano drift. I sensori magnetici Hall Effect e TMR eliminano l'usura e garantiscono una deadzone dello 0.00% permanente." },
    { tag: "03 // Feedback Aptico", title: "Attuatori di Vibrazione Dual-Motor", desc: "Verifica i motori aptici: motore pesante a bassa frequenza a sinistra per impatti duri e motore leggero ad alta frequenza a destra per vibrazioni tattiche sottili." },
    { tag: "04 // Corsa Analogica", title: "Linearità e Pressione Grilletti", desc: "Analizza 256 livelli di pressione progressiva per LT/RT e L2/R2. Verifica rampe di accelerazione fluide, finecorsa (1.00000) e zone morte." },
    { tag: "05 // Mappatura Polare", title: "Circolarità su 64 Settori", desc: "Traccia il perimetro esterno delle levette per calcolare l'errore di circolarità. Levette ben calibrate ottengono punteggi tra il 5% e il 12%." },
    { tag: "06 // Integrità degli Ingressi", title: "Mappatura Digitale 18 Pulsanti", desc: "Matrice di test completa con pulsanti frontali (A/B/X/Y), dorsali (LB/RB, L1/R1), clic levette (L3/R3), D-Pad e tasti Menu/Home." }
  ]
};

export const localizedMaintenanceSteps: Record<SupportedLang, MaintenanceStep[]> = {
  en: [
    { step: "Step 01 // Cleaning", title: "Potentiometer Wipe", desc: "Over 60% of minor stick drift is caused by conductive carbon dust accumulation. Use compressed air around the joystick sphere, or apply 2 drops of 99% Isopropyl Alcohol (IPA) to dissolve grime without leaving residue." },
    { step: "Step 02 // Calibration", title: "OS Deadzone Recalibration", desc: "On Windows, open the joy.cpl game controller wizard to center analog axes. In Steam Controller Settings or in-game options, set inner deadzone to 5%–8% to mask minor potentiometer drift." },
    { step: "Step 03 // Latency", title: "Eliminate Input Jitter", desc: "For esports gaming, use direct USB 2.0/3.0 ports on your motherboard rather than unpowered USB hubs. If using Bluetooth, ensure your PC uses Bluetooth 5.0+ with line-of-sight to prevent wireless packet drops." }
  ],
  'pt-br': [
    { step: "Passo 01 // Limpeza", title: "Limpeza com Álcool Isopropílico", desc: "Mais de 60% dos casos de drift são causados por poeira de carbono. Use ar comprimido ao redor da esfera do analógico ou aplique 2 gotas de álcool isopropílico 99% para dissolver resíduos." },
    { step: "Passo 02 // Calibração", title: "Ajuste de Deadzone no Windows/Steam", desc: "Abra o utilitário joy.cpl no Windows para centrar os eixos. Nas configurações da Steam ou no menu do jogo, defina a zona morta entre 5% e 8% para mascarar pequenos desvios." },
    { step: "Passo 03 // Latência", title: "Eliminação de Jitter e Interferência", desc: "Em jogos competitivos, conecte o controle diretamente nas portas USB da placa-mãe. No Bluetooth, utilize adaptadores 5.0+ com linha de visão direta." }
  ],
  tr: [
    { step: "Adım 01 // Temizlik", title: "Potansiyometre Temizliği", desc: "Hafif drift sorunlarının %60'ından fazlası karbon tozundan kaynaklanır. Analog yuvasına basınçlı hava sıkın veya %99 izopropil alkol damlatarak tortuları temizleyin." },
    { step: "Adım 02 // Kalibrasyon", title: "İşletim Sistemi Ölü Bölge Ayarı", desc: "Windows'ta joy.cpl sihirbazını açarak eksenleri sıfırlayın. Steam veya oyun ayarlarından iç ölü bölgeyi %5-%8 seviyesine getirerek kaymayı telafi edin." },
    { step: "Adım 03 // Gecikme", title: "Giriş Jitter'ını Ortadan Kaldırma", desc: "Espor oyunlarında USB çoklayıcı yerine doğrudan anakart USB portlarını kullanın. Bluetooth'ta paket kaybını önlemek için 5.0+ adaptör tercih edin." },
  ],
  ar: [
    { step: "الخطوة 01 // التنظيف", title: "تنظيف مسارات المقاومة", desc: "أكثر من 60% من حالات الدرفت سببها تراكم غبار الكربون. استخدم الهواء المضغوط حول كرة الأنالوج أو ضع نقطتين من الكحول الآيزوبروبيلي 99% لإذابة الأوساخ." },
    { step: "الخطوة 02 // المعايرة", title: "إعادة ضبط منطقة الموت Deadzone", desc: "على نظام ويندوز افتح أداة joy.cpl لمعايرة المحاور، وفي إعدادات اللعبة أو Steam اضبط Deadzone بين 5% و 8% لإخفاء الانحراف البسيط." },
    { step: "الخطوة 03 // الاستقرار", title: "التخلص من تذبذب الإشارة", desc: "في ألعاب البطولات، قم بتوصيل اليد مباشرة بمنافذ USB الخاصة باللوحة الأم، وعند استخدام البلوتوث احرص على استخدام إصدار 5.0+ بدون حواجز." }
  ],
  es: [
    { step: "Paso 01 // Limpieza", title: "Limpieza del Potenciómetro", desc: "Más del 60% del drift leve se debe a polvo de carbono acumulado. Usa aire comprimido o aplica 2 gotas de alcohol isopropílico al 99% para disolver impurezas sin dejar residuos." },
    { step: "Paso 02 // Calibración", title: "Recalibración de Deadzones en el SO", desc: "En Windows, abre el asistente joy.cpl para centrar los ejes. En Steam o en el juego, ajusta la zona muerta interior al 5%–8% para compensar desviaciones." },
    { step: "Paso 03 // Latencia", title: "Eliminar Jitter e Inestabilidad", desc: "Para juegos competitivos, usa puertos USB directos de la placa base en vez de concentradores. En Bluetooth, asegúrate de contar con Bluetooth 5.0+ con línea de visión." }
  ],
  ja: [
    { step: "ステップ 01 // 清掃", title: "ポテンショメータの洗浄", desc: "軽度のスティックドリフトの60%以上は内部のカーボン粉塵が原因です。エアダスターを使用するか、無水エタノール（IPA 99%）を2滴垂らして汚れを溶かします。" },
    { step: "ステップ 02 // 調整", title: "OS＆ゲーム内デッドゾーン設定", desc: "Windowsの「joy.cpl」を開いて中心軸を再調整します。ゲーム設定やSteamでインナーデッドゾーンを5%〜8%に設定し、わずかな傾きを相殺します。" },
    { step: "ステップ 03 // 安定化", title: "入力遅延とジッターの排除", desc: "競技ゲームではUSBハブを避け、マザーボード直結のUSBポートを使用してください。Bluetooth接続時はBluetooth 5.0以上を使用しパケット落ちを防ぎます。" }
  ],
  fr: [
    { step: "Étape 01 // Nettoyage", title: "Nettoyage du Potentiomètre", desc: "Plus de 60% des drifts mineurs sont dus à la poussière de carbone. Utilisez une bombe d'air sec ou 2 gouttes d'alcool isopropylique 99% pour dissoudre les résidus." },
    { step: "Étape 02 // Calibrage", title: "Réglage de la Zone Morte (OS & Jeux)", desc: "Sous Windows, ouvrez l'outil joy.cpl pour recentrer les axes. Dans les options du jeu ou Steam, réglez la zone morte entre 5% et 8% pour masquer les légers écarts." },
    { step: "Étape 03 // Latence", title: "Élimination du Jitter et des Pertes", desc: "Pour les jeux compétitifs, branchez la manette directement sur les ports USB de la carte mère. En Bluetooth, privilégiez le Bluetooth 5.0+ avec vue dégagée." }
  ],
  de: [
    { step: "Schritt 01 // Reinigung", title: "Potenziometer-Reinigung", desc: "Über 60% kleinerer Drift-Probleme entstehen durch Kohlenstaub. Verwenden Sie Druckluft oder 2 Tropfen 99% Isopropanol (IPA), um Ablagerungen rückstandsfrei zu lösen." },
    { step: "Schritt 02 // Kalibrierung", title: "Deadzone-Neukalibrierung im OS", desc: "Öffnen Sie unter Windows joy.cpl zur Zentrierung der Achsen. Stellen Sie in den Spieloptionen oder in Steam die innere Deadzone auf 5%–8% ein." },
    { step: "Schritt 03 // Latenz", title: "Eingabe-Jitter & Drops Eliminieren", desc: "Verbinden Sie den Controller für E-Sport direkt mit den Mainboard-USB-Ports. Stellen Sie bei Bluetooth eine Sichtverbindung mit Bluetooth 5.0+ sicher." }
  ],
  pt: [
    { step: "Passo 01 // Limpeza", title: "Limpeza do Potenciómetro", desc: "Mais de 60% dos casos de drift leve resultam de pó de carbono. Utilize ar comprimido na base do manípulo ou aplique 2 gotas de álcool isopropílico a 99% para dissolver resíduos." },
    { step: "Passo 02 // Calibração", title: "Ajuste de Deadzone no Sistema/Steam", desc: "Abra o joy.cpl no Windows para centrar os eixos analógicos. Nas opções do jogo ou Steam, defina a zona morta entre 5% e 8% para anular pequenos desvios." },
    { step: "Passo 03 // Estabilidade", title: "Eliminação de Jitter de Sinal", desc: "Em jogos competitivos, utilize portas USB diretas da placa principal. No Bluetooth, utilize Bluetooth 5.0+ com linha de visão direta sem obstáculos." }
  ],
  ko: [
    { step: "1단계 // 세척", title: "가변저항 탄소 피막 세척", desc: "경미한 스틱 쏠림의 60% 이상은 내부 탄소 가루 축적으로 발생합니다. 스틱 모듈 틈새에 에어스프레이를 분사하거나 99% 이소프로필 알코올(IPA) 2방울을 흘려 잔여물을 용해하세요." },
    { step: "2단계 // 보정", title: "OS 및 게임 내 데드존 재보정", desc: "Windows joy.cpl 마법사에서 아날로그 중심축을 정렬하고, 게임 또는 Steam 설정에서 내부 데드존을 5%~8%로 설정하여 미세 편차를 상쇄합니다." },
    { step: "3단계 // 안정화", title: "입력 지연 및 패킷 손실 차단", desc: "e스포츠 게이밍 시 무전원 USB 허브 대신 메인보드 직결 USB 포트를 사용하세요. 블루투스 이용 시 패킷 드롭 방지를 위해 블루투스 5.0 이상 수신기를 사용합니다." }
  ],
  it: [
    { step: "Passo 01 // Pulizia", title: "Pulizia del Potenziometro", desc: "Oltre il 60% dei casi di drift lieve è causato da polvere di grafite. Usa aria compressa o 2 gocce di alcool isopropilico al 99% per sciogliere i residui senza lasciare tracce." },
    { step: "Passo 02 // Calibrazione", title: "Ricalibrazione Deadzone nel Sistema", desc: "Su Windows apri l'utilità joy.cpl per centrare gli assi. Nelle opzioni di gioco o Steam imposta la deadzone interna al 5%–8% per mascherare i lievi disallineamenti." },
    { step: "Passo 03 // Latenza", title: "Eliminazione del Jitter di Segnale", desc: "Negli esports collega il controller direttamente alle porte USB della scheda madre. Con il Bluetooth assicurati di avere il Bluetooth 5.0+ con linea visiva diretta." }
  ]
};
