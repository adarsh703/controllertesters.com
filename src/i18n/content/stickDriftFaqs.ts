import type { SupportedLang } from '../languages';
import type { FAQItem } from './indexContent';

export const localizedStickDriftFaqs: Record<SupportedLang, FAQItem[]> = {
  en: [
    {
      q: "What exactly is stick drift and what causes left or right stick drift?",
      a: "Stick drift is an unwanted analog input registration where a thumbstick sends movement signals while resting in center. It is caused by carbon track friction wear from sprint clicking (L3/R3), graphite dust distorting potentiometer resistance, and mechanical centering spring tension loss."
    },
    {
      q: "How can I test for stick drift and axis jitter online?",
      a: "Connect your controller via USB or Bluetooth, leave it resting flat on a desk, and observe the live coordinate reticle and circularity polar plot on this page. It reveals resting drift percentage, coordinate displacement, and axis jitter noise in real time."
    },
    {
      q: "Is small resting drift normal on brand new controllers?",
      a: "Yes. Brand new PS5 DualSense, Xbox Wireless, and Switch Pro controllers typically exhibit 0.50% to 3.00% resting drift right out of the box due to mechanical centering spring tolerances. In-game default deadzones (usually 5% to 10%) absorb this factory variance completely."
    },
    {
      q: "What is the difference between Jitter Noise and Resting Drift?",
      a: "Resting Drift is a static offset where the joystick rests at a non-zero coordinate (e.g. +0.06 Y-axis). Jitter Noise is rapid high-frequency erratic coordinate fluctuations caused by electrical noise, dirty carbon wipers, or loose sensor gimbals."
    },
    {
      q: "What is Circularity Error and what is a good percentage?",
      a: "Circularity Error measures how closely your joystick's 360° outer movement matches a perfect mathematical circle. Scores between 5% and 12% represent standard factory calibration. Hall Effect sticks score 0%–5%, while clipped square gates exceed 18%."
    },
    {
      q: "Can stick drift be fixed without opening the controller?",
      a: "Yes! 1) Increase your in-game inner deadzone to 5%–10%. 2) Recalibrate joystick centering via Windows 'joy.cpl' or Steam Controller Settings. 3) Blow compressed air or apply 2 drops of 99% Isopropyl Alcohol around the stick ball."
    }
  ],
  'pt-br': [
    {
      q: "O que é stick drift e o que causa o desvio no analógico?",
      a: "Stick drift é o registro de movimento involuntário quando o analógico está em repouso no centro. É causado pelo desgaste por atrito nas trilhas de carbono (ao correr pressionando L3/R3), acúmulo de pó condutivo e perda de tensão na mola central."
    },
    {
      q: "Como testar stick drift e jitter no analógico online?",
      a: "Conecte o controle via USB ou Bluetooth, deixe-o imóvel sobre a mesa e acompanhe o retículo de coordenadas e o gráfico polar nesta página. O teste exibe o desvio em repouso e ruídos de sinal em tempo real."
    },
    {
      q: "Um pequeno drift em repouso é normal em controles novos?",
      a: "Sim. Controles novos de PS5 DualSense, Xbox e Switch Pro costumam apresentar entre 0.5% e 3.0% de desvio de fábrica devido à tolerância mecânica das molas. As zonas mortas padrão dos jogos (5% a 10%) absorvem isso perfeitamente."
    },
    {
      q: "Qual a diferença entre Ruído de Jitter e Drift em Repouso?",
      a: "Drift em Repouso é um deslocamento fixo para um dos lados. Ruído de Jitter são oscilações rápidas e instáveis nos eixos causadas por sujeira ou oxidação nos contatos elétricos."
    },
    {
      q: "O que é Erro de Circularidade e qual porcentagem é considerada boa?",
      a: "Mede o quanto a rotação máxima do analógico se aproxima de um círculo perfeito. Valores entre 5% e 12% são ideais para controles originais. Analógicos Hall Effect chegam a 0%–5%."
    },
    {
      q: "É possível consertar stick drift sem abrir o controle?",
      a: "Sim! 1) Aumente a zona morta (deadzone) nos jogos para 5%–10%. 2) Recalibre pelo 'joy.cpl' no Windows ou configurações da Steam. 3) Aplique 2 gotas de álcool isopropílico 99% na esfera do analógico."
    }
  ],
  tr: [
    { q: "Stick drift nedir ve analog kaymasına ne sebep olur?", a: "Stick drift, analog çubuğa dokunulmadığı halde kendi kendine hareket sinyali göndermesidir. Karbon temas yüzeylerinin aşınması ve merkezleme yayının esnekliğini kaybetmesi nedeniyle oluşur." },
    { q: "Analog kayması ve jitter online nasıl test edilir?", a: "Kolu bağlayıp masaya bırakın. Bu sayfadaki canlı koordinat göstergesi ve dairesellik grafiği sapma oranını ve gürültüyü anlık olarak gösterir." },
    { q: "Sıfır kollarda küçük bir kayma normal midir?", a: "Evet, sıfır PS5, Xbox ve Switch kollarında mekanik yay toleransı nedeniyle %0.5 ile %3.0 arası sapma normaldir. Oyun içi %5-%10 ölü bölge bunu dengeler." },
    { q: "Jitter gürültüsü ile statik drift arasındaki fark nedir?", a: "Statik drift koordinatın sabit bir yöne kaymasıdır. Jitter ise temas noktalarındaki kirden kaynaklanan hızlı ve düzensiz titreşimlerdir." },
    { q: "Dairesellik hatası nedir ve ideal oran kaçtır?", a: "Analog çubuğun hareket sınırının daireye uygunluğunu ölçer. %5 ile %12 arası mükemmel fabrika kalibrasyonudur." },
    { q: "Kolu açmadan stick drift düzelir mi?", a: "Evet! 1) Oyun içi ölü bölgeyi (deadzone) %5–%10 yapın. 2) Windows joy.cpl üzerinden kalibre edin. 3) İzopropil alkolle analog yuvasını temizleyin." }
  ],
  ar: [
    { q: "ما هو درفت الأنالوج (Stick Drift) وما الذي يسببه؟", a: "هو إرسال إشارات حركة وهمية أثناء وجود الأنالوج في المنتصف. يحدث بسبب تآكل مسارات الكربون الناتجة عن الضغط أثناء الجري (L3/R3) وضعف السبرينغ الداخلي." },
    { q: "كيف أقوم باختبار درفت الأنالوج واهتزاز المحاور أونلاين؟", a: "قم بتوصيل يد التحكم واتركها مستقرة على الطاولة، راقب المؤشر المباشر والرادار الدائري على هذه الصفحة لمعرفة نسبة الخطأ والاهتزاز فوراً." },
    { q: "هل وجود نسبة درفت بسيطة في يد تحكم جديدة أمر طبيعي؟", a: "نعم، أذرع PS5 و Xbox الجديدة تظهر نسبة انحراف بين 0.5% و 3.0% بسبب التفاوت الميكانيكي للمصنع، ويتم امتصاص ذلك عبر الـ Deadzone الافتراضي للألعاب." },
    { q: "ما الفرق بين الاهتزاز العشوائي (Jitter) والدرفت الثابت؟", a: "الدرفت الثابت هو انحراف دائم نحو جهة معينة، أما Jitter فهو تذبذب سريع ومتقطع في الإحداثيات نتيجة تراكم الأتربة على المقاومات." },
    { q: "ما هو خطأ الدائرية وما هي النسبة الجيدة؟", a: "يقيس مدى تطابق حدود دوران الأنالوج مع دائرة مثالية. النسبة الجيدة للمصنع تتراوح بين 5% و 12%." },
    { q: "هل يمكن إصلاح درفت الأنالوج دون فتح يد التحكم؟", a: "نعم! 1) رفع Deadzone في اللعبة إلى 5%–10%. 2) إعادة المعايرة عبر Windows joy.cpl. 3) تنظيف المقاومة بقطرات من كحول 99%." }
  ],
  es: [
    { q: "¿Qué es el stick drift y qué lo causa?", a: "El stick drift es el registro de movimiento no deseado cuando el joystick está en el centro. Se produce por desgaste en las pistas de carbono (al pulsar L3/R3), polvo acumulado y fatiga en el muelle de centrado." },
    { q: "¿Cómo probar stick drift y jitter online?", a: "Conecta el mando, déjalo inmóvil en la mesa y observa la retícula y el gráfico de circularidad. Revela la deriva en reposo y el ruido de señal al instante." },
    { q: "¿Es normal tener algo de drift en un mando nuevo?", a: "Sí, mandos nuevos de PS5, Xbox y Switch suelen tener entre 0.5% y 3.0% de desviación por tolerancias mecánicas. La zona muerta de los juegos (5% a 10%) lo absorbe sin problemas." },
    { q: "¿Cuál es la diferencia entre ruido de Jitter y Deriva en reposo?", a: "La deriva es un desvío constante hacia un lado; el jitter son fluctuaciones rápidas e inestables por suciedad en los contactos eléctricos." },
    { q: "¿Qué es el error de circularidad y qué porcentaje es óptimo?", a: "Mide cómo de cerca está el recorrido del stick de un círculo perfecto. Entre 5% y 12% es la tolerancia normal de fábrica." },
    { q: "¿Se puede arreglar el stick drift sin abrir el mando?", a: "¡Sí! 1) Sube la zona muerta en el juego al 5%–10%. 2) Recalibra desde Windows joy.cpl. 3) Aplica 2 gotas de alcohol isopropílico al 99% en la bola del stick." }
  ],
  ja: [
    { q: "スティックドリフトとは何ですか？原因は？", a: "スティックに触れていないのに勝手に入力信号が送信される現象です。L3/R3押し込みによるカーボン摩耗やゴミの混入、バネの劣化が主な原因です。" },
    { q: "スティックドリフトとジッターのテスト方法は？", a: "コントローラーを机に置いて触れずにこのページの座標レティクルと円形度プロットを確認します。リアルタイムでズレとブレを検出します。" },
    { q: "新品のコントローラーでも微小なドリフトは正常ですか？", a: "はい。新品のPS5やXboxコントローラーでも機械的公差により0.5%〜3.0%程度のズレがあり、ゲーム内の初期デッドゾーン（5%〜10%）で相殺されます。" },
    { q: "ジッターノイズと中心ドリフトの違いは？", a: "中心ドリフトは一定方向へのズレ、ジッターノイズは接点の接触不良による小刻みな座標のブレです。" },
    { q: "円形度エラーとは？適正値は？", a: "外周を回転させた際の真円度を測定します。純正品では5%〜12%が標準的な良好値です。" },
    { q: "分解せずにドリフトを直す方法はありますか？", a: "1) ゲーム内のデッドゾーンを5%〜10%に設定する。2) Windows joy.cplで再調整する。3) 無水エタノール（99% IPA）を少量垂らして清掃する。" }
  ],
  fr: [
    { q: "Qu'est-ce que le stick drift et quelle en est la cause ?", a: "Le stick drift est un mouvement involontaire enregistré alors que le joystick est au centre. Il est causé par l'usure des pistes en carbone, la poussière conductrice et la fatigue du ressort de rappel." },
    { q: "Comment tester le stick drift et le jitter en ligne ?", a: "Connectez votre manette, laissez-la immobile sur une table et observez le réticule de coordonnées. Il affiche la dérive au repos et les oscillations en direct." },
    { q: "Une légère dérive est-elle normale sur une manette neuve ?", a: "Oui, les manettes neuves PS5, Xbox et Switch ont généralement entre 0.5% et 3.0% de dérive due aux tolérances d'usine, compensée par les deadzones des jeux (5% à 10%)." },
    { q: "Quelle est la différence entre le Jitter et le Drift statique ?", a: "Le drift statique est un décalage fixe dans une direction. Le jitter est un tremblement rapide causé par des contacts encrassés." },
    { q: "Qu'est-ce que l'erreur de circularité et quel est un bon score ?", a: "Elle mesure la conformité du contour du joystick par rapport à un cercle parfait. Un score entre 5% et 12% est excellent pour une manette d'origine." },
    { q: "Peut-on corriger le stick drift sans ouvrir la manette ?", a: "Oui ! 1) Augmentez la zone morte en jeu à 5%–10%. 2) Recalibrez via Windows joy.cpl. 3) Nettoyez avec 2 gouttes d'alcool isopropylique 99%." }
  ],
  de: [
    { q: "Was ist Stick-Drift und was verursacht ihn?", a: "Stick-Drift bezeichnet unerwünschte Eingaben im Ruhezustand. Ursachen sind Abrieb der Kohleschicht (L3/R3-Klicks), Staubpartikel und nachlassende Federspannung." },
    { q: "Wie teste ich Stick-Drift und Jitter online?", a: "Verbinden Sie den Controller, legen Sie ihn flach hin und beobachten Sie das Fadenkreuz und das Polardiagramm auf dieser Seite in Echtzeit." },
    { q: "Ist ein leichter Ruhedrift bei neuen Controllern normal?", a: "Ja, fabrikneue PS5- und Xbox-Controller weisen fertigungsbedingt oft 0,5% bis 3,0% Abweichung auf, die von standardmäßigen 5%–10% In-Game-Deadzones absorbiert wird." },
    { q: "Was ist der Unterschied zwischen Jitter und statischem Drift?", a: "Statischer Drift ist ein konstanter Versatz in eine Richtung. Jitter ist ein hochfrequentes Zittern der Koordinaten durch Kontaktverschmutzung." },
    { q: "Was ist der Zirkularitätsfehler und welcher Wert ist gut?", a: "Er misst die Kreisgenauigkeit des Sticks am Anschlag. Werte zwischen 5% und 12% gelten als optimal für Standard-Controller." },
    { q: "Kann man Stick-Drift ohne Öffnen beheben?", a: "Ja! 1) Deadzone im Spiel auf 5%–10% erhöhen. 2) Unter Windows joy.cpl neu kalibrieren. 3) Mit 2 Tropfen 99% Isopropanol reinigen." }
  ],
  pt: [
    { q: "O que é stick drift e o que o causa?", a: "Stick drift é o registo de movimento quando o manípulo está ao centro. Resulta do desgaste nas pistas de carbono, acumulação de pó condutor e perda de força da mola central." },
    { q: "Como testar stick drift e ruído nos eixos online?", a: "Ligue o comando, pouse-o na mesa e observe a mira de coordenadas e o gráfico polar em tempo real nesta página." },
    { q: "Um pequeno desvio é normal em comandos novos?", a: "Sim, comandos novos de PS5 e Xbox costumam apresentar 0.5% a 3.0% de desvio por tolerâncias mecânicas de fábrica, absorvidas pelas deadzones dos jogos (5% a 10%)." },
    { q: "Qual a diferença entre Jitter e Drift em repouso?", a: "Drift em repouso é um desvio constante para um lado. Jitter são oscilações rápidas causadas por sujidade nos contactos elétricos." },
    { q: "O que é o erro de circularidade?", a: "Mede o quanto a rotação máxima do manípulo se aproxima de um círculo perfeito. Valores entre 5% e 12% são padrão de fábrica." },
    { q: "Como resolver o stick drift sem abrir o comando?", a: "1) Aumente a zona morta (deadzone) no jogo para 5%–10%. 2) Recalibre no Windows joy.cpl. 3) Aplique 2 gotas de álcool isopropílico 99%." }
  ],
  ko: [
    { q: "스틱 쏠림(Drift)이란 무엇이며 원인은 무엇인가요?", a: "스틱을 조작하지 않아도 캐릭터나 시점이 저절로 움직이는 현상입니다. 달리기(L3/R3) 클릭으로 인한 탄소 피막 마모, 내부 이물질, 복원 스프링 장력 약화가 주원인입니다." },
    { q: "온라인에서 스틱 쏠림과 지터 노이즈를 어떻게 테스트하나요?", a: "컨트롤러를 연결하고 책상 위에 평평하게 둔 뒤 이 페이지의 실시간 좌표 및 원형도 레이더를 확인하면 오차율과 지터를 즉시 파악할 수 있습니다." },
    { q: "새 제품에서도 미세한 쏠림이 발생하는 것이 정상인가요?", a: "네, 공장 제조 공차로 인해 새 듀얼센스나 엑스박스 패드도 0.5%~3.0% 수준의 초기 오차가 발생하며, 게임 기본 데드존(5%~10%)이 이를 완벽히 상쇄합니다." },
    { q: "지터 노이즈와 정지 상태 쏠림의 차이는 무엇인가요?", a: "정지 쏠림은 좌표가 특정 방향으로 치우쳐 있는 상태이며, 지터 노이즈는 접점 이물질로 인해 좌표가 잘게 떨리는 현상입니다." },
    { q: "원형도 오차(Circularity Error)란 무엇이며 적정 수준은?", a: "스틱을 외곽으로 회전시켰을 때 원형 궤적과의 일치도를 측정합니다. 일반 정품 컨트롤러는 5%~12% 범위가 정상입니다." },
    { q: "컨트롤러를 분해하지 않고 스틱 쏠림을 고칠 수 있나요?", a: "네! 1) 게임 내 데드존을 5%~10%로 상향 조정합니다. 2) Windows joy.cpl에서 중심을 재보정합니다. 3) 99% 이소프로필 알코올 2방울을 흘려 세척합니다." }
  ],
  it: [
    { q: "Cos'è lo stick drift e cosa lo causa?", a: "Lo stick drift è il movimento involontario registrato quando la levetta è al centro. È causato dall'usura delle piste di grafite (premendo L3/R3), polvere conduttiva e perdita di tensione della molla." },
    { q: "Come testare lo stick drift e il jitter online?", a: "Collega il gamepad, lascialo fermo sul tavolo e osserva il mirino delle coordinate e il grafico di circolarità su questa pagina in tempo reale." },
    { q: "Una leggera deviazione a riposo è normale nei controller nuovi?", a: "Sì, i controller nuovi di PS5 e Xbox mostrano solitamente tra lo 0.5% e il 3.0% di deviazione per tolleranze di fabbrica, assorbita dalle deadzone dei giochi (5%-10%)." },
    { q: "Qual è la differenza tra Jitter e Drift statico?", a: "Il drift statico è uno spostamento costante verso una direzione. Il jitter è un tremolio rapido delle coordinate causato da contatti sporchi." },
    { q: "Cos'è l'errore di circolarità?", a: "Misura quanto l'escursione massima della levetta si avvicina a un cerchio perfetto. Un valore tra il 5% e il 12% è standard per i controller originali." },
    { q: "È possibile risolvere lo stick drift senza aprire il controller?", a: "Sì! 1) Aumenta la deadzone nei giochi al 5%–10%. 2) Ricalibra tramite Windows joy.cpl. 3) Pulisci con 2 gocce di alcool isopropilico al 99%." }
  ]
};
