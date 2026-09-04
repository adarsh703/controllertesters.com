import type { SupportedLang } from '../languages';
import type { FAQItem } from './indexContent';

export const localizedIndexFaqs: Record<SupportedLang, FAQItem[]> = {
  en: [
    {
      q: "What is ControllerTesters.com and is this online gamepad tester free to use?",
      a: "ControllerTesters.com is a free browser-based diagnostic utility that inspects game controllers, joysticks, fight sticks, and racing wheels without requiring software downloads. It provides instant button tests, stick drift analysis, analog trigger telemetry, dual-motor vibration testing, and polling rate diagnostics across Windows, macOS, Linux, Android, and iOS."
    },
    {
      q: "How to test if a controller is working or bad?",
      a: "Connect your gamepad via USB or Bluetooth and press any button. Inspect each button highlight on the 3D visualizer, verify that thumbstick coordinates rest near 0.00000 with under 5% drift, confirm both analog triggers smoothly reach 1.00000 at full press, and trigger the Rumble test to diagnose hardware motors."
    },
    {
      q: "Why is my gamepad or controller not recognized by the browser?",
      a: "1) Press any button — browsers keep Gamepad APIs dormant until user input. 2) Ensure your browser supports HTML5 Gamepad API (Chrome, Edge, Opera, Brave, Firefox, Safari). 3) On Windows, close Steam or third-party remappers (DS4Windows, JoyToKey) that grab exclusive HID hooks. 4) Try a direct USB cable connection."
    },
    {
      q: "How do I test stick drift on PS5 DualSense, Xbox, or Switch Pro controllers?",
      a: "Place the controller flat on a table without touching the sticks. Observe the Left and Right Stick coordinate readouts. If resting coordinates deviate beyond ±0.05 (5%) or the center point wanders randomly, the potentiometer is exhibiting stick drift. For deep deadzone curves, visit our dedicated Stick Drift Test page."
    },
    {
      q: "What is Polling Rate (Hz) and why is high polling rate important for gaming?",
      a: "Polling rate (measured in Hertz) represents how many times per second your controller sends updated position and button data to your PC or console. A standard 125Hz connection updates every 8ms, 250Hz updates every 4ms, 500Hz every 2ms, and 1000Hz esports overclocking updates every 1ms for near-instantaneous reflex response."
    },
    {
      q: "How can I test Dual-Motor Vibration Rumble on my controller?",
      a: "Click the Rumble Test button in the dashboard. The browser sends a DualRumble command through the Gamepad Haptic API, engaging both strong low-frequency heavy weights and weak high-frequency buzz motors. If rumble fails, ensure your browser has vibration permissions enabled and your USB/Bluetooth driver supports force feedback."
    },
    {
      q: "Does this tester support PS5 DualSense, PS4 DualShock, Xbox Wireless, and Nintendo Switch Pro controllers?",
      a: "Yes! ControllerTesters.com natively recognizes standard DirectInput and XInput controller layouts including Sony PS5 DualSense / PS4 DualShock 4, Microsoft Xbox Series X|S / Xbox One / Xbox 360, Nintendo Switch Pro & Joy-Cons, Logitech, 8BitDo, Razer, SCUF, and generic HID USB gamepads."
    },
    {
      q: "How to connect a controller via Bluetooth on Windows, Mac, or mobile?",
      a: "For Xbox: Hold the top Pairing button for 3 seconds until the Xbox logo flashes rapidly. For PS5 / PS4: Hold the Create/Share button + PS Button simultaneously until the light bar flashes in bursts. Then open your device's Bluetooth settings, select 'Wireless Controller', and press any button on this page."
    },
    {
      q: "Why are my analog triggers (L2/R2, LT/RT) showing values between 0.00 and 1.00?",
      a: "Modern gaming triggers use pressure-sensitive analog potentiometers or Hall Effect magnetic sensors rather than simple digital on/off switches. A value of 0.00 represents unpressed resting state, while 1.00 represents 100% mechanical bottom-out actuation (essential for throttle control in racing games and progressive aiming in shooters)."
    },
    {
      q: "What is Circularity Error and how do I test stick accuracy?",
      a: "Circularity Error measures how closely your thumbstick's outer physical travel boundary matches a perfect mathematical circle (1.000 radius). Rotate your stick smoothly in full 360° circles to view your Average Circularity Error. Well-calibrated sticks score between 5% and 12%, while clipped square-gated sticks score above 18%."
    },
    {
      q: "How to fix controller stick drift and buttons not registering?",
      a: "1) Clean gimbal potentiometers by blowing compressed air or applying 2 drops of 99% Isopropyl Alcohol around the stick ball. 2) Increase inner deadzone in game settings (e.g. 5%–10%). 3) Recalibrate joystick centering via Windows 'joy.cpl' or Steam Controller Settings. 4) For permanent immunity, upgrade to contactless Hall Effect joysticks."
    },
    {
      q: "Is any software download or driver installation required to test my gamepad?",
      a: "No downloads or plugins are needed. ControllerTesters.com operates 100% client-side in your modern web browser using the native W3C Gamepad API, ensuring zero privacy risk, zero installation overhead, and immediate diagnostic speed."
    }
  ],
  'pt-br': [
    {
      q: "O ControllerTesters.com é gratuito?",
      a: "Sim, o ControllerTesters.com é um utilitário de diagnóstico 100% gratuito que funciona diretamente no navegador, sem necessidade de baixar programas ou drivers."
    },
    {
      q: "Como testar se o controle está funcionando ou com defeito?",
      a: "Conecte o controle via USB ou Bluetooth e aperte qualquer botão. Verifique os botões no visualizador, se os analógicos repousam perto de 0.00 e se os gatilhos chegam a 1.00 ao pressionar até o fim."
    },
    {
      q: "Por que meu controle não é reconhecido pelo navegador?",
      a: "1) Pressione qualquer botão para acordar a API do navegador. 2) Certifique-se de que seu navegador suporta a API Gamepad. 3) Feche a Steam ou programas remapeadores (DS4Windows) que bloqueiam o controle."
    },
    {
      q: "Como testar stick drift no DualSense do PS5, Xbox ou Switch Pro?",
      a: "Deixe o controle parado sobre a mesa. Observe as coordenadas dos analógicos esquerdo e direito. Se houver desvio superior a ±0.05 (5%), há presença de stick drift."
    },
    {
      q: "O que é taxa de polling (Hz) e por que ela é importante?",
      a: "A taxa de polling (medida em Hertz) é a frequência com que o controle envia dados ao PC ou console. 125Hz atualiza a cada 8ms, 500Hz a cada 2ms e 1000Hz a cada 1ms para respostas ultrarrápidas."
    },
    {
      q: "Como testar a vibração (rumble) do controle?",
      a: "Clique no botão 'Testar Vibração'. O navegador enviará um comando DualRumble ativando os motores de baixa e alta frequência do controle."
    },
    {
      q: "O site suporta controles de PS5, PS4, Xbox e Nintendo Switch?",
      a: "Sim! Suporta nativamente controles oficiais e compatíveis de PS5, PS4, Xbox Series, Xbox One, Nintendo Switch Pro, Joy-Cons, 8BitDo, Razer, SCUF e controles genéricos."
    },
    {
      q: "Como conectar o controle via Bluetooth no PC ou celular?",
      a: "No Xbox: segure o botão de emparelhamento por 3s. No PS5/PS4: segure Create/Share + botão PS até piscar. Em seguida, selecione 'Wireless Controller' no Bluetooth do dispositivo."
    },
    {
      q: "Por que os gatilhos analógicos (L2/R2, LT/RT) variam de 0.00 a 1.00?",
      a: "Gatilhos modernos usam sensores analógicos de pressão progressiva. 0.00 significa solto e 1.00 significa pressão máxima, essencial em jogos de corrida e tiro."
    },
    {
      q: "O que é erro de circularidade e como testar?",
      a: "Mede o quanto a rotação física do analógico se aproxima de um círculo perfeito. Gire 360° para ver o erro médio. Valores entre 5% e 12% são normais para controles de fábrica."
    },
    {
      q: "Como consertar stick drift e botões falhando?",
      a: "1) Aplique 2 gotas de álcool isopropílico 99% na base do analógico. 2) Aumente a zona morta (deadzone) nas configurações do jogo para 5%–10%. 3) Recalibre pelo Windows 'joy.cpl' ou Steam."
    },
    {
      q: "É preciso instalar algum programa para usar o site?",
      a: "Nenhum download ou plugin é necessário. Tudo funciona de forma 100% segura no cliente via API padrão W3C HTML5."
    }
  ],
  tr: [
    { q: "ControllerTesters.com ücretsiz mi?", a: "Evet, hiçbir program indirmeye gerek kalmadan tarayıcınızda çalışan tamamen ücretsiz bir oyun kolu test aracıdır." },
    { q: "Oyun kolumun sağlam olduğunu nasıl anlarım?", a: "Kolu bağlayıp tuşlara basın. Tuşların ekranda yandığını, analog çubukların 0.00 civarında durduğunu ve tetiklerin 1.00 değerine ulaştığını kontrol edin." },
    { q: "Oyun kolu neden tarayıcı tarafından algılanmıyor?", a: "1) Tarayıcının Gamepad API'sini uyandırmak için herhangi bir tuşa basın. 2) Steam veya DS4Windows gibi çakışan uygulamaları kapatın." },
    { q: "PS5, Xbox veya Switch kolunda stick drift nasıl test edilir?", a: "Kolu masaya bırakın ve analoglara dokunmayın. Koordinatlar merkezden ±0.05'ten fazla sapıyorsa drift vardır." },
    { q: "Polling Rate (Hz) nedir ve neden önemlidir?", a: "Polling rate, kolun bilgisayara saniyede kaç kez veri ilettiğini belirtir. 1000Hz (1ms), gecikmesiz rekabetçi oyun deneyimi sunar." },
    { q: "Titreşim motorlarını nasıl test edebilirim?", a: "Kontrol panelindeki 'Titreşim Testi' butonuna tıklayın. Tarayıcı sol ve sağ motorlara titreşim komutu gönderecektir." },
    { q: "Hangi oyun kolları destekleniyor?", a: "PS5 DualSense, PS4, Xbox Series X|S, Xbox One, Switch Pro, 8BitDo, Razer, SCUF ve tüm USB/Bluetooth HID kollar desteklenir." },
    { q: "Oyun kolu Bluetooth ile nasıl bağlanır?", a: "Xbox için üstteki eşleme tuşuna 3 saniye basılı tutun. PS5/PS4 için Share + PS tuşlarına ışık yanıp sönene kadar basılı tutun." },
    { q: "Analog tetikler (L2/R2, LT/RT) neden 0.00 ile 1.00 arasında değer gösteriyor?", a: "Tetikler basınca duyarlı analog sensörlere sahiptir. 0.00 basılmamış, 1.00 tam basılmış durumu gösterir." },
    { q: "Dairesellik hatası (Circularity Error) nedir?", a: "Analog çubuğun dış sınırının dairesel geometriden sapma oranını ölçer. %5 ile %12 arası standart fabrika toleransıdır." },
    { q: "Stick drift nasıl düzeltilir?", a: "1) İzopropil alkol (%99) veya basınçlı hava ile potansiyometreyi temizleyin. 2) Oyun içi ölü bölgeyi (deadzone) %5-%10 seviyesine yükseltin." },
    { q: "Herhangi bir yazılım yüklemem gerekiyor mu?", a: "Hayır, W3C HTML5 Gamepad API sayesinde tamamen tarayıcı içinde %100 yerel olarak çalışır." }
  ],
  ar: [
    { q: "هل موقع ControllerTesters.com مجاني للاستخدام؟", a: "نعم، موقع ControllerTesters.com مجاني تماماً 100% ويعمل مباشرة داخل المتصفح دون الحاجة لتثبيت أي برامج أو تعريفات." },
    { q: "كيف أتأكد من أن يد التحكم تعمل بشكل سليم؟", a: "قم بتوصيل اليد واضغط على أي زر. تحقق من إضاءة الأزرار وتأكد من ثبات الأنالوج حول 0.00000 ووصول المحفزات (L2/R2) إلى 1.00000." },
    { q: "لماذا لا يتعرف المتصفح على يد التحكم؟", a: "1) اضغط على أي زر لتنشيط Gamepad API. 2) أغلق البرامج التي تحتكر الاتصال مثل Steam أو DS4Windows." },
    { q: "كيف أقوم بفحص انحراف الأنالوج (Stick Drift)؟", a: "اترك يد التحكم مستقرة على الطاولة دون لمسها وراقب الإحداثيات. إذا كان هناك انحراف يتجاوز ±0.05، فالأنالوج يعاني من درفت." },
    { q: "ما هو معدل الاستجابة Polling Rate ولماذا هو مهم؟", a: "هو عدد مرات إرسال البيانات من اليد إلى الجهاز في الثانية. معدل 1000Hz يرسل البيانات كل 1 مللي ثانية لسرعة استجابة فائقة." },
    { q: "كيف أختبر اهتزاز يد التحكم (Rumble)؟", a: "اضغط على زر 'اختبار الاهتزاز' وسيقوم المتصفح بإرسال إشارة لتشغيل محركات الاهتزاز الثقيلة والخفيفة." },
    { q: "هل يدعم الموقع أذرع سوني واكس بوكس ونينتندو؟", a: "نعم! يدعم جميع أذرع PS5 DualSense و PS4 و Xbox Series/One و Switch Pro و 8BitDo و Razer وكافة أذرع USB/Bluetooth." },
    { q: "كيف أربط يد التحكم بالبلوتوث؟", a: "لاكس بوكس: اضغط زر الاقتران لـ 3 ثوانٍ. لـ PS5/PS4: اضغط زر Share + PS معاً حتى يومض الضوء، ثم اختر اليد في إعدادات البلوتوث." },
    { q: "لماذا تظهر أزرار المحفزات (L2/R2, LT/RT) قيماً بين 0.00 و 1.00؟", a: "لأنها أزرار تماثلية تقيس قوة الضغط التدريجي، وهو أمر أساسي في ألعاب سباق السيارات والتصويب." },
    { q: "ما هو خطأ الدائرية Circularity Error؟", a: "يقيس مدى تطابق مسار دوران الأنالوج الخارجي مع دائرة مثالية. النسبة المثالية بين 5% و 12%." },
    { q: "كيف يمكن إصلاح درفت الأنالوج؟", a: "1) تنظيف المقاومات بـ 2 قطرة من الكحول الآيزوبروبيلي 99%. 2) رفع منطقة الموت Deadzone في اللعبة إلى 5%–10%." },
    { q: "هل أحتاج لتثبيت أي برامج؟", a: "لا، الموقع يعمل بالكامل 100% داخل المتصفح عبر معيار W3C HTML5 Gamepad API الآمن." }
  ],
  es: [
    { q: "¿Es gratis ControllerTesters.com?", a: "Sí, es una utilidad de diagnóstico 100% gratuita que funciona en tu navegador web sin descargas ni controladores adicionales." },
    { q: "¿Cómo probar si un mando funciona bien o está roto?", a: "Conecta tu mando y pulsa cualquier botón. Comprueba los botones en pantalla, que los joysticks descansen cerca de 0.00 y que los gatillos alcancen 1.00." },
    { q: "¿Por qué el navegador no detecta mi mando?", a: "1) Pulsa cualquier botón para activar la API Gamepad. 2) Cierra aplicaciones como Steam o DS4Windows que pueden bloquear el acceso exclusivo." },
    { q: "¿Cómo comprobar el stick drift en mandos de PS5, Xbox o Switch?", a: "Deja el mando sobre la mesa sin tocar los sticks. Si las coordenadas se desvían más de ±0.05 (5%), el joystick presenta stick drift." },
    { q: "¿Qué es el Polling Rate (Hz) y por qué importa?", a: "Es la frecuencia con la que el mando envía datos al PC. Una tasa de 1000Hz actualiza cada 1ms para una respuesta competitiva sin retardo." },
    { q: "¿Cómo probar la vibración del mando?", a: "Haz clic en 'Probar Vibración'. El navegador enviará una orden DualRumble para activar los motores de alta y baja frecuencia." },
    { q: "¿Es compatible con mandos de PS5, PS4, Xbox y Nintendo Switch?", a: "Sí, es compatible de forma nativa con PS5 DualSense, PS4, Xbox Series X|S, Xbox One, Switch Pro, Joy-Cons, 8BitDo, Razer y mandos genéricos." },
    { q: "¿Cómo conectar un mando por Bluetooth?", a: "Xbox: mantén el botón de emparejamiento 3 segundos. PS5/PS4: mantén Share + botón PS hasta que parpadee. Luego conéctalo desde Ajustes de Bluetooth." },
    { q: "¿Por qué los gatillos (L2/R2, LT/RT) muestran valores de 0.00 a 1.00?", a: "Porque son potenciómetros analógicos progresivos. 0.00 es sin pulsar y 1.00 es pulsación al 100% (ideal para acelerar en juegos de carreras)." },
    { q: "¿Qué es el error de circularidad y cómo se mide?", a: "Mide cómo de cerca está el recorrido del joystick de un círculo perfecto. Rota en 360° para ver el error medio. Entre 5% y 12% es normal." },
    { q: "¿Cómo solucionar el stick drift?", a: "1) Limpia con alcohol isopropílico al 99% la base del stick. 2) Sube la zona muerta (deadzone) en el juego al 5%–10%. 3) Recalibra desde Windows joy.cpl." },
    { q: "¿Requiere descargas o programas?", a: "No, opera al 100% en el lado del cliente a través del estándar W3C HTML5 Gamepad API con total privacidad." }
  ],
  ja: [
    { q: "ControllerTesters.comは無料ですか？", a: "はい、ソフトウェアのダウンロード不要でブラウザ上で動作する完全無料の診断ツールです。" },
    { q: "コントローラーが正常に動いているか確認する方法は？", a: "コントローラーを接続し、いずれかのボタンを押してください。各ボタンの点灯、スティックの0.00静止、トリガーの1.00到達を確認します。" },
    { q: "コントローラーがブラウザに認識されない原因は？", a: "1) いずれかのボタンを押してGamepad APIを起動してください。2) SteamやDS4Windowsなどの競合アプリを終了してください。" },
    { q: "PS5、Xbox、Switchのスティックドリフトの確認方法は？", a: "スティックに触れずにコントローラーを机に置きます。座標が±0.05（5%）以上ズレている場合はスティックドリフトが発生しています。" },
    { q: "ポーリングレート（Hz）とは？", a: "コントローラーがPCに入力データを送信する頻度です。1000Hzでは1ミリ秒ごとに入力が更新され、超低遅延で操作できます。" },
    { q: "コントローラーの振動テスト方法は？", a: "ダッシュボードの「振動テスト」をクリックすると、左右のデュアルモーターが動作してフィードバックをテストします。" },
    { q: "PS5 DualSense、Xbox、Switch Proコントローラーに対応していますか？", a: "はい。PS5、PS4、Xbox Series/One、Nintendo Switch Pro、Joy-Con、8BitDo、Razerなどすべての標準HIDコントローラーに対応しています。" },
    { q: "Bluetoothでの接続方法は？", a: "Xboxはペアリングボタンを3秒長押し、PS5/PS4はクリエイト/シェアボタン＋PSボタンを同時に長押ししてペアリングします。" },
    { q: "トリガー（L2/R2、LT/RT）が0.00〜1.00で表示される理由は？", a: "現代のトリガーは押し込み圧力を測定するアナログセンサーのため、深さに応じて0.00（未入力）から1.00（最大入力）まで変化します。" },
    { q: "円形度エラー（Circularity Error）とは？", a: "スティックの外周可動範囲が正円にどれだけ近いかを測定する指標です。一般的な純正品は5%〜12%の範囲に収まります。" },
    { q: "スティックドリフトの直し方は？", a: "1) 無水エタノール（IPA 99%）を少量滴下して内部を清掃する。2) ゲーム設定でデッドゾーンを5%〜10%に拡大する。3) Windows joy.cplで再調整する。" },
    { q: "ソフトウェアのインストールは必要ですか？", a: "インストールは一切不要です。W3C HTML5 Gamepad APIによりブラウザ内で100%安全かつ瞬時に動作します。" }
  ],
  fr: [
    { q: "ControllerTesters.com est-il gratuit ?", a: "Oui, c'est un outil de diagnostic 100% gratuit fonctionnant directement dans votre navigateur web sans aucun téléchargement." },
    { q: "Comment tester si ma manette fonctionne correctement ?", a: "Connectez votre manette et appuyez sur un bouton. Vérifiez l'allumage des touches, la position centrale des joysticks à 0.00 et la course des gâchettes à 1.00." },
    { q: "Pourquoi ma manette n'est-elle pas détectée ?", a: "1) Appuyez sur n'importe quel bouton pour activer l'API du navigateur. 2) Fermez Steam ou les applications comme DS4Windows qui monopolisent la manette." },
    { q: "Comment tester le stick drift sur DualSense, Xbox ou Switch ?", a: "Posez la manette à plat sans toucher aux joysticks. Si les coordonnées dévient de plus de ±0.05 (5%), il y a du stick drift." },
    { q: "Qu'est-ce que le Polling Rate (Hz) et pourquoi est-il crucial ?", a: "Le polling rate représente la fréquence d'envoi des données vers le PC. Une fréquence de 1000Hz (1ms) garantit une réactivité e-sport maximale." },
    { q: "Comment tester les vibrations de la manette ?", a: "Cliquez sur 'Test de Vibration'. Le navigateur activera les moteurs gauche et droit pour tester le retour haptique." },
    { q: "Le site est-il compatible avec les manettes PS5, PS4, Xbox et Switch ?", a: "Oui ! Le site prend en charge nativement les manettes PS5 DualSense, PS4, Xbox Series/One, Switch Pro, Joy-Cons, 8BitDo, Razer et SCUF." },
    { q: "Comment connecter une manette en Bluetooth ?", a: "Pour Xbox : maintenez le bouton d'association 3s. Pour PS5/PS4 : maintenez Partager + bouton PS jusqu'au clignotement, puis associez dans les réglages." },
    { q: "Pourquoi les gâchettes affichent des valeurs de 0.00 à 1.00 ?", a: "Les gâchettes modernes utilisent des capteurs analogiques progressifs. 0.00 correspond au repos et 1.00 à l'enfoncement total." },
    { q: "Qu'est-ce que l'erreur de circularité ?", a: "Elle mesure la précision du contour extérieur du joystick par rapport à un cercle parfait. Un score entre 5% et 12% est normal pour une manette d'origine." },
    { q: "Comment réparer le stick drift ?", a: "1) Nettoyez avec 2 gouttes d'alcool isopropylique 99%. 2) Augmentez la zone morte (deadzone) en jeu à 5%–10%. 3) Recalibrez avec Windows joy.cpl." },
    { q: "Faut-il installer un logiciel ?", a: "Aucune installation n'est requise. Tout fonctionne en local et en toute sécurité via l'API standard W3C HTML5." }
  ],
  de: [
    { q: "Ist ControllerTesters.com kostenlos?", a: "Ja, ControllerTesters.com ist ein 100% kostenloses Online-Diagnoseprogramm, das ohne Downloads direkt im Browser funktioniert." },
    { q: "Wie prüfe ich, ob mein Gamepad einwandfrei funktioniert?", a: "Schließen Sie das Gamepad an und drücken Sie eine Taste. Prüfen Sie Tastenreaktion, Stick-Zentrierung bei 0.00 und Trigger-Vollausschlag bei 1.00." },
    { q: "Warum wird mein Controller nicht erkannt?", a: "1) Drücken Sie eine beliebige Taste, um die Gamepad-API aufzuwecken. 2) Schließen Sie Programme wie Steam oder DS4Windows, die den Zugriff blockieren." },
    { q: "Wie teste ich Stick-Drift bei PS5 DualSense, Xbox oder Switch Pro?", a: "Legen Sie den Controller flach auf den Tisch. Wenn die Koordinaten der Analogsticks um mehr als ±0.05 (5%) abweichen, liegt Stick-Drift vor." },
    { q: "Was ist die Polling-Rate (Hz) und warum ist sie wichtig?", a: "Sie gibt an, wie oft pro Sekunde Daten an den PC gesendet werden. 1000Hz entspricht 1ms Latenz für maximale E-Sport-Reaktionsgeschwindigkeit." },
    { q: "Wie teste ich die Vibration meines Controllers?", a: "Klicken Sie auf 'Vibrationstest'. Der Browser steuert die haptischen Motoren für schwere und feine Vibrationen an." },
    { q: "Werden PS5, PS4, Xbox und Switch Pro Controller unterstützt?", a: "Ja, alle gängigen Controller von Sony, Microsoft, Nintendo, 8BitDo, Razer, SCUF und generische USB/Bluetooth-Gamepads werden nativ unterstützt." },
    { q: "Wie verbinde ich einen Controller über Bluetooth?", a: "Xbox: Kopplungstaste 3s gedrückt halten. PS5/PS4: Share + PS-Taste gedrückt halten, bis die Leiste blinkt. Dann in den Bluetooth-Einstellungen koppeln." },
    { q: "Warum zeigen die analogen Trigger Werte von 0.00 bis 1.00?", a: "Moderne Trigger messen den progressiven Druckweg stufenlos. 0.00 bedeutet unbetätigt, 1.00 vollständiger Anschlag (wichtig für Rennspiele)." },
    { q: "Was ist der Zirkularitätsfehler (Circularity Error)?", a: "Er misst, wie genau die maximale Auslenkung einem perfekten Kreis entspricht. Werte zwischen 5% und 12% sind bei Werkseinstellungen normal." },
    { q: "Wie kann man Stick-Drift beheben?", a: "1) Reinigen Sie den Stick mit 2 Tropfen 99% Isopropylalkohol. 2) Erhöhen Sie die Deadzone im Spiel auf 5%–10%. 3) Kalibrieren Sie über Windows joy.cpl neu." },
    { q: "Muss eine Software installiert werden?", a: "Nein, das Tool läuft zu 100% sicher und lokal im Browser über die standardisierte W3C HTML5 Gamepad API." }
  ],
  pt: [
    { q: "O ControllerTesters.com é gratuito?", a: "Sim, o ControllerTesters.com é um utilitário de diagnóstico 100% gratuito que funciona diretamente no browser sem downloads." },
    { q: "Como testar se o comando está a funcionar corretamente?", a: "Ligue o comando e prima qualquer botão. Verifique os botões no ecrã, a centragem dos manípulos a 0.00 e a pressão dos gatilhos até 1.00." },
    { q: "Por que razão o meu comando não é reconhecido?", a: "1) Prima qualquer botão para ativar a API do browser. 2) Feche aplicações como a Steam ou DS4Windows que bloqueiam o comando." },
    { q: "Como testar stick drift no DualSense, Xbox ou Switch?", a: "Deixe o comando pousado na mesa sem tocar nos manípulos. Se as coordenadas variarem mais de ±0.05 (5%), existe stick drift." },
    { q: "O que é a taxa de polling (Hz) e qual a sua importância?", a: "Mede a frequência com que o comando envia dados ao PC. Uma taxa de 1000Hz atualiza a cada 1ms para respostas instantâneas em jogos." },
    { q: "Como testar a vibração do comando?", a: "Clique em 'Testar Vibração'. O browser enviará um sinal DualRumble para acionar os motores de retorno tátil." },
    { q: "O site suporta comandos de PS5, PS4, Xbox e Nintendo Switch?", a: "Sim! Suporta comandos oficiais e compatíveis de PS5 DualSense, PS4, Xbox Series/One, Switch Pro, 8BitDo, Razer e comandos genéricos." },
    { q: "Como emparelhar o comando por Bluetooth?", a: "Xbox: mantenha premido o botão de emparelhamento por 3s. PS5/PS4: prima Share + botão PS até a luz piscar. Depois ligue nas definições de Bluetooth." },
    { q: "Por que razão os gatilhos mostram valores entre 0.00 e 1.00?", a: "Os gatilhos modernos utilizam sensores analógicos de pressão progressiva. 0.00 representa solto e 1.00 pressão total." },
    { q: "O que é o erro de circularidade?", a: "Avalia a proximidade da rotação exterior do manípulo em relação a um círculo perfeito. Valores entre 5% e 12% são normais de fábrica." },
    { q: "Como resolver stick drift e falhas nos botões?", a: "1) Limpe com 2 gotas de álcool isopropílico a 99%. 2) Aumente a zona morta (deadzone) no jogo para 5%–10%. 3) Recalibre no Windows joy.cpl." },
    { q: "É necessário instalar algum programa?", a: "Não, todo o processamento decorre a 100% no seu browser através da API standard W3C HTML5." }
  ],
  ko: [
    { q: "ControllerTesters.com은 무료인가요?", a: "네, 프로그램 설치 없이 웹 브라우저에서 바로 실행할 수 있는 100% 무료 게임패드 진단 도구입니다." },
    { q: "컨트롤러 정상 작동 여부를 어떻게 확인하나요?", a: "컨트롤러를 연결하고 아무 버튼이나 누릅니다. 화면에서 버튼 인식, 스틱 중심 0.00 유지, 트리거 1.00 도달을 확인하세요." },
    { q: "컨트롤러가 브라우저에서 인식되지 않는 이유는?", a: "1) 아무 버튼이나 눌러 Gamepad API를 깨우세요. 2) Steam이나 DS4Windows 등 컨트롤러를 독점하는 프로그램을 종료하세요." },
    { q: "PS5 듀얼센스, 엑스박스, 스위치 스틱 쏠림은 어떻게 테스트하나요?", a: "스틱에 손을 대지 않고 책상 위에 평평하게 둔 뒤 좌표를 확인합니다. ±0.05(5%) 이상 벗어나면 스틱 쏠림이 있는 것입니다." },
    { q: "폴링레이트(Hz)란 무엇이며 왜 중요한가요?", a: "초당 컨트롤러가 PC로 데이터를 전송하는 횟수입니다. 1000Hz(1ms)는 e스포츠 게이밍에서 초저지연 반응을 제공합니다." },
    { q: "컨트롤러 진동 모터는 어떻게 테스트하나요?", a: "대시보드의 '진동 테스트' 버튼을 클릭하면 브라우저가 좌우 듀얼 모터를 작동시켜 햅틱 피드백을 진단합니다." },
    { q: "PS5, PS4, Xbox, 닌텐도 스위치 패드를 모두 지원하나요?", a: "네! PS5 듀얼센스, PS4, 엑스박스 시리즈/원, 스위치 프로콘, 조이콘, 8BitDo, 레이저, SCUF 등 모든 표준 컨트롤러를 지원합니다." },
    { q: "블루투스로 컨트롤러를 연결하는 방법은?", a: "Xbox: 상단 페어링 버튼을 3초간 누릅니다. PS5/PS4: Share + PS 버튼을 라이트 바가 깜빡일 때까지 동시에 누른 뒤 페어링합니다." },
    { q: "아날로그 트리거(L2/R2, LT/RT) 값이 0.00~1.00으로 표시되는 이유는?", a: "압력 감지 아날로그 센서가 적용되어 있어 누른 깊이에 따라 0.00(미입력)부터 1.00(완전 입력)까지 정밀 측정됩니다." },
    { q: "원형도 오차(Circularity Error)란 무엇인가요?", a: "아날로그 스틱의 최대 가동 범위가 완벽한 원형에 얼마나 일치하는지 측정합니다. 일반적인 공장 출고 제품은 5%~12% 오차를 보입니다." },
    { q: "스틱 쏠림(Drift)을 고치는 방법은?", a: "1) 99% 이소프로필 알코올(IPA)로 스틱 모듈을 세척합니다. 2) 게임 내 데드존을 5%~10%로 높입니다. 3) Windows joy.cpl에서 보정합니다." },
    { q: "소프트웨어 다운로드가 필요한가요?", a: "전혀 필요 없습니다. W3C HTML5 Gamepad API를 통해 브라우저 로컬에서 안전하고 즉각적으로 작동합니다." }
  ],
  it: [
    { q: "ControllerTesters.com è gratuito?", a: "Sì, è un software di diagnostica 100% gratuito che funziona direttamente nel tuo browser web senza alcun download." },
    { q: "Come verificare se un gamepad funziona correttamente?", a: "Collega il gamepad e premi qualsiasi tasto. Verifica l'illuminazione dei tasti, la centratura delle levette a 0.00 e la corsa dei grilletti a 1.00." },
    { q: "Perché il controller non viene rilevato dal browser?", a: "1) Premi un tasto per attivare l'API Gamepad. 2) Chiudi programmi come Steam o DS4Windows che potrebbero bloccare l'accesso esclusivo." },
    { q: "Come testare lo stick drift su PS5 DualSense, Xbox o Switch?", a: "Lascia il controller sul tavolo senza toccare le levette. Se le coordinate deviano di oltre ±0.05 (5%), è presente stick drift." },
    { q: "Cos'è il Polling Rate (Hz) e perché è importante?", a: "Rappresenta la frequenza con cui il controller invia dati al PC. 1000Hz (1ms) garantisce una reattività ultraveloce per i giochi competitivi." },
    { q: "Come posso testare la vibrazione del controller?", a: "Clicca su 'Test Vibrazione'. Il browser invierà un comando DualRumble per azionare i motori aptici ad alta e bassa frequenza." },
    { q: "Il sito supporta controller PS5, PS4, Xbox e Nintendo Switch?", a: "Sì! Supporta nativamente PS5 DualSense, PS4, Xbox Series/One, Switch Pro, Joy-Con, 8BitDo, Razer, SCUF e gamepad generici." },
    { q: "Come collegare il controller via Bluetooth?", a: "Per Xbox: tieni premuto il tasto di accoppiamento per 3s. Per PS5/PS4: tieni premuto Share + tasto PS fino al lampeggio. Poi associalo nelle impostazioni Bluetooth." },
    { q: "Perché i grilletti (L2/R2, LT/RT) mostrano valori da 0.00 a 1.00?", a: "Perché utilizzano potenziometri analogici a pressione progressiva. 0.00 è non premuto e 1.00 è finecorsa (fondamentale nei giochi di guida)." },
    { q: "Cos'è l'errore di circolarità?", a: "Misura quanto il bordo esterno della levetta si avvicina a un cerchio perfetto. Un valore tra il 5% e il 12% è normale per i controller di fabbrica." },
    { q: "Come risolvere lo stick drift?", a: "1) Pulisci con 2 gocce di alcool isopropilico al 99%. 2) Aumenta la deadzone nei giochi al 5%–10%. 3) Ricalibra da Windows joy.cpl." },
    { q: "È necessario installare software o driver?", a: "Nessun download richiesto. Funziona al 100% in locale e in totale privacy grazie all'API standard W3C HTML5." }
  ]
};
