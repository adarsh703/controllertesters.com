import type { SupportedLang } from '../languages';
import type { F1DriverScore } from './f1Content';

export const localizedDriverScores: Record<SupportedLang, F1DriverScore[]> = {
  en: [
    { driver: "Valtteri Bottas", team: "Mercedes-AMG (2017 Austrian GP)", reactionTime: "165ms", status: "All-Time F1 Record // Legal Start" },
    { driver: "Max Verstappen", team: "Red Bull Racing", reactionTime: "185ms", status: "Elite World Champion Tier" },
    { driver: "Lewis Hamilton", team: "Ferrari / Mercedes", reactionTime: "190ms", status: "Elite 7-Time Champion Tier" },
    { driver: "Charles Leclerc", team: "Scuderia Ferrari", reactionTime: "195ms", status: "Pro Driver Reflex Tier" },
    { driver: "Lando Norris", team: "McLaren F1", reactionTime: "192ms", status: "Pro Driver Reflex Tier" },
    { driver: "Fernando Alonso", team: "Aston Martin", reactionTime: "205ms", status: "Veteran Master Launch Tier" }
  ],
  'pt-br': [
    { driver: "Valtteri Bottas", team: "Mercedes-AMG (GP da Áustria 2017)", reactionTime: "165ms", status: "Recorde Histórico da F1 // Largada Legal" },
    { driver: "Max Verstappen", team: "Red Bull Racing", reactionTime: "185ms", status: "Nível Campeão Mundial de Elite" },
    { driver: "Lewis Hamilton", team: "Ferrari / Mercedes", reactionTime: "190ms", status: "Nível Heptacampeão Mundial" },
    { driver: "Charles Leclerc", team: "Scuderia Ferrari", reactionTime: "195ms", status: "Nível Piloto Profissional" },
    { driver: "Lando Norris", team: "McLaren F1", reactionTime: "192ms", status: "Nível Piloto Profissional" },
    { driver: "Fernando Alonso", team: "Aston Martin", reactionTime: "205ms", status: "Nível Mestre Veterano em Largadas" }
  ],
  tr: [
    { driver: "Valtteri Bottas", team: "Mercedes-AMG (2017 Avusturya GP)", reactionTime: "165ms", status: "F1 Tarihinin En İyisi // Yasal Kalkış" },
    { driver: "Max Verstappen", team: "Red Bull Racing", reactionTime: "185ms", status: "Elit Dünya Şampiyonu Seviyesi" },
    { driver: "Lewis Hamilton", team: "Ferrari / Mercedes", reactionTime: "190ms", status: "Elit 7 Kez Şampiyon Seviyesi" },
    { driver: "Charles Leclerc", team: "Scuderia Ferrari", reactionTime: "195ms", status: "Pro Pilot Refleks Seviyesi" },
    { driver: "Lando Norris", team: "McLaren F1", reactionTime: "192ms", status: "Pro Pilot Refleks Seviyesi" },
    { driver: "Fernando Alonso", team: "Aston Martin", reactionTime: "205ms", status: "Veteran Usta Kalkış Seviyesi" }
  ],
  ar: [
    { driver: "فالتيري بوتاس", team: "مرسيدس (سباق النمسا 2017)", reactionTime: "165ms", status: "الرقم القياسي التاريخي // انطلاقة قانونية" },
    { driver: "ماكس فيرستابن", team: "ريد بول ريسينغ", reactionTime: "185ms", status: "مستوى بطل العالم النخبوي" },
    { driver: "لويس هاميلتون", team: "فيراري / مرسيدس", reactionTime: "190ms", status: "مستوى بطل العالم 7 مرات" },
    { driver: "شارل لوكلير", team: "سكوديريا فيراري", reactionTime: "195ms", status: "مستوى سائق محترف" },
    { driver: "لاندو نوريس", team: "مكلارين F1", reactionTime: "192ms", status: "مستوى سائق محترف" },
    { driver: "فرناندو ألونسو", team: "أستون مارتن", reactionTime: "205ms", status: "مستوى أستاذ الانطلاقات الخبير" }
  ],
  es: [
    { driver: "Valtteri Bottas", team: "Mercedes-AMG (GP Austria 2017)", reactionTime: "165ms", status: "Récord Histórico de F1 // Salida Legal" },
    { driver: "Max Verstappen", team: "Red Bull Racing", reactionTime: "185ms", status: "Nivel Campeón Mundial Élite" },
    { driver: "Lewis Hamilton", team: "Ferrari / Mercedes", reactionTime: "190ms", status: "Nivel Heptacampeón Élite" },
    { driver: "Charles Leclerc", team: "Scuderia Ferrari", reactionTime: "195ms", status: "Nivel Piloto Profesional" },
    { driver: "Lando Norris", team: "McLaren F1", reactionTime: "192ms", status: "Nivel Piloto Profesional" },
    { driver: "Fernando Alonso", team: "Aston Martin", reactionTime: "205ms", status: "Nivel Maestro Veterano en Salidas" }
  ],
  ja: [
    { driver: "バルテリ・ボッタス", team: "メルセデスAMG (2017 オーストリアGP)", reactionTime: "165ms", status: "F1歴代最速公式記録 // 正当スタート" },
    { driver: "マックス・フェルスタッペン", team: "レッドブル・レーシング", reactionTime: "185ms", status: "世界チャンピオン級エリート" },
    { driver: "ルイス・ハミルトン", team: "フェラーリ / メルセデス", reactionTime: "190ms", status: "7タイム王者クラス" },
    { driver: "シャルル・ルクレール", team: "スクーデリア・フェラーリ", reactionTime: "195ms", status: "トッププロドライバー級" },
    { driver: "ランド・ノリス", team: "マクラーレンF1", reactionTime: "192ms", status: "トッププロドライバー級" },
    { driver: "フェルナンド・アロンソ", team: "アストンマーティン", reactionTime: "205ms", status: "歴戦のマスタースタート級" }
  ],
  fr: [
    { driver: "Valtteri Bottas", team: "Mercedes-AMG (GP d'Autriche 2017)", reactionTime: "165ms", status: "Record Historique F1 // Départ Légal" },
    { driver: "Max Verstappen", team: "Red Bull Racing", reactionTime: "185ms", status: "Niveau Champion du Monde Élite" },
    { driver: "Lewis Hamilton", team: "Ferrari / Mercedes", reactionTime: "190ms", status: "Niveau 7 Fois Champion du Monde" },
    { driver: "Charles Leclerc", team: "Scuderia Ferrari", reactionTime: "195ms", status: "Niveau Pilote Professionnel" },
    { driver: "Lando Norris", team: "McLaren F1", reactionTime: "192ms", status: "Niveau Pilote Professionnel" },
    { driver: "Fernando Alonso", team: "Aston Martin", reactionTime: "205ms", status: "Niveau Maître des Départs Vétéran" }
  ],
  de: [
    { driver: "Valtteri Bottas", team: "Mercedes-AMG (Österreich GP 2017)", reactionTime: "165ms", status: "F1-Rekord aller Zeiten // Legaler Start" },
    { driver: "Max Verstappen", team: "Red Bull Racing", reactionTime: "185ms", status: "Elite Weltmeister-Niveau" },
    { driver: "Lewis Hamilton", team: "Ferrari / Mercedes", reactionTime: "190ms", status: "Elite 7-facher Weltmeister" },
    { driver: "Charles Leclerc", team: "Scuderia Ferrari", reactionTime: "195ms", status: "Profi-Fahrer Reflex-Niveau" },
    { driver: "Lando Norris", team: "McLaren F1", reactionTime: "192ms", status: "Profi-Fahrer Reflex-Niveau" },
    { driver: "Fernando Alonso", team: "Aston Martin", reactionTime: "205ms", status: "Routinierter Meister-Start-Rang" }
  ],
  pt: [
    { driver: "Valtteri Bottas", team: "Mercedes-AMG (GP da Áustria 2017)", reactionTime: "165ms", status: "Recorde Histórico da F1 // Partida Legal" },
    { driver: "Max Verstappen", team: "Red Bull Racing", reactionTime: "185ms", status: "Nível Campeão Mundial de Elite" },
    { driver: "Lewis Hamilton", team: "Ferrari / Mercedes", reactionTime: "190ms", status: "Nível Heptacampeão Mundial" },
    { driver: "Charles Leclerc", team: "Scuderia Ferrari", reactionTime: "195ms", status: "Nível Piloto Profissional" },
    { driver: "Lando Norris", team: "McLaren F1", reactionTime: "192ms", status: "Nível Piloto Profissional" },
    { driver: "Fernando Alonso", team: "Aston Martin", reactionTime: "205ms", status: "Nível Mestre Experiente em Partidas" }
  ],
  ko: [
    { driver: "발테리 보타스", team: "메르세데스-AMG (2017 오스트리아 GP)", reactionTime: "165ms", status: "F1 역대 최속 공식 기록 // 합법 출발" },
    { driver: "막스 베르스타펜", team: "레드불 레이싱", reactionTime: "185ms", status: "엘리트 월드 챔피언 등급" },
    { driver: "루이스 해밀턴", team: "페라리 / 메르세데스", reactionTime: "190ms", status: "7회 챔피언 엘리트 등급" },
    { driver: "샤를 르클레르", team: "스쿠데리아 페라리", reactionTime: "195ms", status: "탑 프로 드라이버 반사신경 등급" },
    { driver: "랜도 노리스", team: "맥라렌 F1", reactionTime: "192ms", status: "탑 프로 드라이버 반사신경 등급" },
    { driver: "페르난도 알론소", team: "애스턴 마틴", reactionTime: "205ms", status: "베테랑 마스터 스타트 등급" }
  ],
  it: [
    { driver: "Valtteri Bottas", team: "Mercedes-AMG (GP Austria 2017)", reactionTime: "165ms", status: "Record Storico F1 // Partenza Regolare" },
    { driver: "Max Verstappen", team: "Red Bull Racing", reactionTime: "185ms", status: "Livello Campione del Mondo Élite" },
    { driver: "Lewis Hamilton", team: "Ferrari / Mercedes", reactionTime: "190ms", status: "Livello 7 Volte Campione del Mondo" },
    { driver: "Charles Leclerc", team: "Scuderia Ferrari", reactionTime: "195ms", status: "Livello Pilota Professionista" },
    { driver: "Lando Norris", team: "McLaren F1", reactionTime: "192ms", status: "Livello Pilota Professionista" },
    { driver: "Fernando Alonso", team: "Aston Martin", reactionTime: "205ms", status: "Livello Maestro Esperto nelle Partenze" }
  ]
};

export const localizedTechniques: Record<SupportedLang, Array<{ title: string; desc: string; tag: string }>> = {
  en: [
    { tag: "01", title: "Peripheral Reaction Walls", desc: "Drivers train on 180° Batak light boards, extinguishing randomly illuminated targets in under 200ms to maximize peripheral awareness." },
    { tag: "02", title: "Soft Peripheral Focus", desc: "Rather than fixating on a single bulb, drivers use a relaxed gaze taking in all 5 columns to let retinal magnocellular pathways detect blackout instantly." },
    { tag: "03", title: "Motor Cortex Priming", desc: "During the 5-light sequence, drivers isometric-tension finger muscles to bypass resting slack and dump the clutch paddle upon lights out." }
  ],
  'pt-br': [
    { tag: "01", title: "Painéis de Visão Periférica", desc: "Pilotos treinam em painéis Batak de 180°, apagando luzes aleatórias em menos de 200ms para expandir o campo de percepção." },
    { tag: "02", title: "Foco Visual Global", desc: "Em vez de olhar para uma única luz, mantêm o olhar relaxado em todas as 5 colunas para detectar o apagamento instantaneamente." },
    { tag: "03", title: "Pré-Ativação Muscular", desc: "Durante o acendimento das 5 luzes, pré-tensionam os dedos nas borboletas de embreagem para soltar sem folga motora." }
  ],
  tr: [
    { tag: "01", title: "Periferik Görüş Panoları", desc: "Pilotlar, çevresel farkındalığı artırmak için 180° Batak ışık panolarında 200ms altında hedeflere vurarak çalışır." },
    { tag: "02", title: "Yumuşak Geniş Görüş Odaklanması", desc: "Tek bir lambaya kilitlenmek yerine 5 sütunun tamamını kapsayan rahat bir bakışla sönme anını anında yakalarlar." },
    { tag: "03", title: "Motor Korteks Hazırlığı", desc: "5 ışık yanarken parmak kaslarını ön gerilimde tutarak ışıklar söndüğü an debriyajı sıfır gecikmeyle bırakırlar." }
  ],
  ar: [
    { tag: "01", title: "لوحات التدريب المحيطية", desc: "يتدرب السائقون على لوحات Batak بزاوية 180 درجة لإطفاء الأهداف العشوائية في أقل من 200 مللي ثانية." },
    { tag: "02", title: "التركيز البصري الشامل", desc: "بدلاً من التحديق في مصباح واحد، ينظر السائق بنظرة شاملة لكافة الأعمدة الخمسة لرصد لحظة الانطفاء فوراً." },
    { tag: "03", title: "التهيئة العضلية المسبقة", desc: "أثناء تسلسل إضاءة المصابيح الخمسة، يشد السائق أصابعه على قابض الكلتش لإطلاقه دون أي ارتخاء عضلي." }
  ],
  es: [
    { tag: "01", title: "Paneles de Visión Periférica", desc: "Los pilotos entrenan en paneles Batak de 180° apagando luces aleatorias en menos de 200ms para maximizar el campo visual." },
    { tag: "02", title: "Enfoque Visual Global", desc: "En lugar de fijarse en una sola luz, mantienen una mirada amplia sobre las 5 columnas para detectar el apagado al instante." },
    { tag: "03", title: "Pre-Activación Muscular", desc: "Durante el encendido de las 5 luces, mantienen los dedos en tensión sobre las levas de embrague para soltar sin retardo." }
  ],
  ja: [
    { tag: "01", title: "周辺視野リアクションボード", desc: "180度の視野角を持つBatakライトボードで、200ミリ秒未満で点灯するターゲットを叩く訓練を行い周辺視野を鍛えます。" },
    { tag: "02", title: "ソフトフォーカス全体視野", desc: "1つのランプを凝視するのではなく、5本のシグナル列全体を包み込むように視界に入れ、消灯の瞬間を網膜で即座に検知します。" },
    { tag: "03", title: "運動皮質の予備緊張", desc: "5つのシグナルが順に点灯する間、クラッチパドルを握る指の筋肉を等尺性緊張させておき、消灯と同時に瞬時に解放します。" }
  ],
  fr: [
    { tag: "01", title: "Murs de Lumière Périphériques", desc: "Les pilotes s'exercent sur des panneaux Batak à 180°, éteignant des cibles aléatoires en moins de 200ms pour élargir leur vision." },
    { tag: "02", title: "Focus Visuel Global", desc: "Plutôt que de fixer une ampoule, ils adoptent un regard élargi sur les 5 colonnes pour capter l'extinction immédiatement." },
    { tag: "03", title: "Pré-Tension Motrice", desc: "Pendant la séquence des 5 feux, ils pré-activent les muscles des doigts sur la palette d'embrayage pour un lâcher instantané." }
  ],
  de: [
    { tag: "01", title: "Peripheres Lichtwand-Training", desc: "Fahrer trainieren an 180°-Batak-Wänden und löschen zufällige Lichtziele unter 200ms zur Steigerung der Reaktionsbreite." },
    { tag: "02", title: "Weitwinkliger Weichfokus", desc: "Statt auf eine Lampe zu starren, erfassen Fahrer alle 5 Ampelsäulen ganzheitlich, um das Erlöschen unmittelbar zu erkennen." },
    { tag: "03", title: "Muskuläre Voraktivierung", desc: "Während des 5-Lichter-Aufbaus spannen Fahrer die Fingermuskeln an den Kupplungswippen vor, um sofort ohne Spiel auszulösen." }
  ],
  pt: [
    { tag: "01", title: "Painéis de Visão Periférica", desc: "Os pilotos treinam em painéis Batak de 180°, apagando luzes em menos de 200ms para expandir a perceção periférica." },
    { tag: "02", title: "Foco Visual Global", desc: "Em vez de fixar uma única luz, mantêm um olhar amplo sobre as 5 colunas para detetar o apagamento num instante." },
    { tag: "03", title: "Pré-Tensão Muscular", desc: "Durante o acendimento das 5 luzes, mantêm os dedos pré-tensionados nas patilhas de embraiagem para soltar sem folgas." }
  ],
  ko: [
    { tag: "01", title: "주변 시야 반응 보드 훈련", desc: "드라이버들은 180도 Batak 라이트 보드에서 200ms 이내에 점등되는 표적을 타격하며 주변 시야 인지력을 극대화합니다." },
    { tag: "02", title: "소프트 포커스 전체 시야", desc: "특정 전구 하나를 응시하지 않고 5개 기둥 전체를 시야에 편안하게 담아 소등의 순간을 망막 신경으로 즉각 포착합니다." },
    { tag: "03", title: "운동 피질 사전 긴장", desc: "5개의 적색등이 켜지는 동안 클러치 패들 위의 손가락 근육을 등척성 긴장 상태로 유지하여 소등 시 지체 없이 릴리즈합니다." }
  ],
  it: [
    { tag: "01", title: "Tabelloni Visivi Periferici", desc: "I piloti si allenano su pannelli Batak a 180°, colpendo bersagli casuali in meno di 200ms per espandere la visione periferica." },
    { tag: "02", title: "Focus Visivo Globale", desc: "Invece di fissare una sola luce, osservano complessivamente le 5 colonne per rilevare lo spegnimento istantaneo." },
    { tag: "03", title: "Pre-Attivazione Motoria", desc: "Durante la sequenza delle 5 luci, pre-tendono i muscoli delle dita sulle palette della frizione per un rilascio a gioco zero." }
  ]
};

export const localizedRulesSteps: Record<SupportedLang, Array<{ step: string; title: string; desc: string }>> = {
  en: [
    { step: "Phase 01 // Staging", title: "5-Red-Light Sequential Illumination", desc: "The FIA gantry illuminates 5 red lights sequentially at precise 1.0-second intervals (Light 1 to Light 5), signaling drivers to hold throttle and pre-engage clutch paddles." },
    { step: "Phase 02 // Random Hold", title: "Computerized 0.2s – 3.0s Hold", desc: "Once all 5 lights illuminate, an automated random computer timer holds the lights for between 0.2 and 3.0 seconds to eliminate rhythmic human anticipation." },
    { step: "Phase 03 // Launch", title: "Lights Out & Jump Start Detection", desc: "The instant all 5 lights extinguish simultaneously, drivers dump the clutch. Transponders detect if car wheels move before 100ms, triggering automated Drive-Through penalties." }
  ],
  'pt-br': [
    { step: "Fase 01 // Preparação", title: "Acendimento Sequencial das 5 Luzes", desc: "O pórtico da FIA acende 5 luzes vermelhas em intervalos exatos de 1.0 segundo (Luz 1 a 5), sinalizando a aceleração e embreagem armada." },
    { step: "Fase 02 // Espera Aleatória", title: "Espera Computadorizada de 0.2s a 3.0s", desc: "Com as 5 luzes acesas, um temporizador digital aleatório segura o sistema entre 0.2s e 3.0s para impedir previsões rítmicas." },
    { step: "Fase 03 // Largada", title: "Apagamento e Sensor de Queima", desc: "No instante em que as 5 luzes apagam juntas, os pilotos soltam a embreagem. Sensores na pista detectam movimentos antes de 100ms e punem queimas de largada." }
  ],
  tr: [
    { step: "Aşama 01 // Hazırlık", title: "5 Kırmızı Işığın Sırayla Yanması", desc: "FIA başlangıç sistemi 1.0 saniye aralıklarla 5 kırmızı ışığı sırayla yakar ve pilotlar debriyajı hazırda tutar." },
    { step: "Aşama 02 // Rastgele Bekleme", title: "0.2s – 3.0s Bilgisayarlı Bekleme", desc: "5 ışık yandıktan sonra bilgisayar 0.2 ile 3.0 saniye arasında rastgele bir süre bekleyerek tahminleri engeller." },
    { step: "Aşama 03 // Kalkış", title: "Işıkların Sönmesi ve Erken Kalkış Tespiti", desc: "5 ışık aynı anda söndüğü an pilotlar kalkar. 100ms'den önce hareket eden araçlar sensörlerle tespit edilip cezalandırılır." }
  ],
  ar: [
    { step: "المرحلة 01 // الاصطفاف", title: "إضاءة المصابيح الخمسة بالتتابع", desc: "تضيء إشارات FIA المصابيح الحمراء الخمسة بمعدل مصباح كل ثانية واحدة لإعلام السائقين برفع دورات المحرك وتجهيز الكلتش." },
    { step: "المرحلة 02 // الانتظار العشوائي", title: "فترة انتظار محوسبة بين 0.2 و 3.0 ثانية", desc: "بعد اكتمال المصابيح الخمسة، يختار الكمبيوتر زمناً عشوائياً بين 0.2 و 3.0 ثانية لمنع أي تخمين مسبق." },
    { step: "المرحلة 03 // الانطلاق", title: "انطفاء الأضواء ورصد الانطلاقة الخاطئة", desc: "تنطفئ الأضواء معاً فينطلق السائقون فوراً، وترصد الحساسات أي حركة قبل 100ms لتطبيق عقوبة المرور بخط الصيانة." }
  ],
  es: [
    { step: "Fase 01 // Preparación", title: "Encendido Secuencial de las 5 Luces", desc: "El semáforo FIA enciende 5 luces rojas a intervalos de 1.0 segundo (de la 1 a la 5), preparando acelerador y embrague." },
    { step: "Fase 02 // Espera Aleatoria", title: "Espera Aleatoria de 0.2s a 3.0s", desc: "Con las 5 luces encendidas, un ordenador mantiene el semáforo entre 0.2 y 3.0 segundos para evitar la anticipación." },
    { step: "Fase 03 // Salida", title: "Apagado y Detección de Salida en Falso", desc: "Al apagarse las 5 luces, los pilotos sueltan el embrague. Los sensores ópticos sancionan movimientos antes de los 100ms." }
  ],
  ja: [
    { step: "フェーズ 01 // スタンバイ", title: "5連レッドシグナルの順次点灯", desc: "FIA公式ガントリーが1.0秒間隔で5つの赤色シグナルを順次点灯させ、ドライバーはスロットルとクラッチをスタンバイさせます。" },
    { step: "フェーズ 02 // ランダム待機", title: "0.2秒〜3.0秒のランダム消灯ホールド", desc: "5つすべて点灯後、コンピューターが0.2秒〜3.0秒のランダムな時間ホールドし、リズム予測スタートを防止します。" },
    { step: "フェーズ 03 // スタート", title: "シグナル消灯＆フライング検知", desc: "5連ランプが一斉に消灯した瞬間にクラッチを解放。100ms未満で車両が動いた場合はセンサーが検知しペナルティが科されます。" }
  ],
  fr: [
    { step: "Phase 01 // Préparation", title: "Allumage Séquentiel des 5 Feux", desc: "Le portique FIA allume 5 feux rouges à 1.0 seconde d'intervalle, signalant aux pilotes d'engager les palettes d'embrayage." },
    { step: "Phase 02 // Maintien Aléatoire", title: "Attente Informatique de 0.2s à 3.0s", desc: "Une fois les 5 feux allumés, le système retient le départ de façon aléatoire entre 0.2s et 3.0s pour éviter toute anticipation." },
    { step: "Phase 03 // Départ", title: "Extinction & Détection de Faux Départ", desc: "À l'extinction simultanée des 5 feux, les pilotes démarrent. Tout mouvement détecté avant 100ms est pénalisé par la FIA." }
  ],
  de: [
    { step: "Phase 01 // Aufstellung", title: "Sequenzielles Aufleuchten der 5 Ampellichter", desc: "Die FIA-Startampel schaltet 5 rote Lichter im 1,0-Sekunden-Takt ein, damit Fahrer Gas und Kupplungswippen scharfstellen." },
    { step: "Phase 02 // Zufällige Haltezeit", title: "0.2s – 3.0s Computergesteuerter Hold", desc: "Sind alle 5 Lichter aktiv, hält ein Zufallsgenerator die Ampel zwischen 0,2s und 3,0s, um Rhythmuszählen zu verhindern." },
    { step: "Phase 03 // Start", title: "Ampelaus & Frühstart-Sensorik", desc: "Erlöschen alle 5 Lichter zeitgleich, erfolgt der Start. Sensoren erkennen Bewegungen vor 100ms und verhängen Strafen." }
  ],
  pt: [
    { step: "Fase 01 // Preparação", title: "Acendimento Sequencial das 5 Luzes", desc: "O semáforo da FIA acende 5 luzes vermelhas em intervalos precisos de 1.0 segundo, alertando para acelerar e engatar a embraiagem." },
    { step: "Fase 02 // Espera Aleatória", title: "Pausa Aleatória de 0.2s a 3.0s", desc: "Com as 5 luzes acesas, o sistema computorizado aguarda entre 0.2s e 3.0s para impedir adivinhações rítmicas." },
    { step: "Fase 03 // Partida", title: "Apagamento das Luzes e Falsa Partida", desc: "No instante do apagamento conjunto, os pilotos arrancam. Sensores na pista detetam arranques abaixo de 100ms para penalização." }
  ],
  ko: [
    { step: "1단계 // 대기 및 점등", title: "5개 적색 신호등 순차 점등", desc: "FIA 공식 그리드 신호등이 1.0초 간격으로 5개의 적색등을 순차 점등하여 드라이버에게 스로틀과 클러치 준비를 알립니다." },
    { step: "2단계 // 무작위 지연", title: "컴퓨터 제어 0.2초~3.0초 랜덤 홀드", desc: "5개 신호등이 모두 켜지면 컴퓨터 자동 타이머가 0.2초에서 3.0초 사이 무작위 시간 동안 점등 상태를 유지하여 예측 출발을 방지합니다." },
    { step: "3단계 // 출발", title: "동시 소등 및 부정출발 감지", desc: "5개 신호등이 일제히 꺼지는 순간 클러치를 릴리즈합니다. 100ms 이내에 차량이 움직이면 트랜스폰더가 부정출발로 감지하여 페널티를 부과합니다." }
  ],
  it: [
    { step: "Fase 01 // Schieramento", title: "Accensione Sequenziale delle 5 Luci", desc: "Il semaforo FIA accende 5 luci rosse a intervalli di 1.0 secondo esatto, segnalando ai piloti di armare frizione e acceleratore." },
    { step: "Fase 02 // Attesa Casuale", title: "Attesa Elettronica tra 0.2s e 3.0s", desc: "Con le 5 luci accese, un timer digitale casuale trattiene il semaforo per 0.2–3.0 secondi per impedire partenze anticipate a tempo." },
    { step: "Fase 03 // Partenza", title: "Spegnimento e Rilevamento Falsa Partenza", desc: "Allo spegnimento simultaneo i piloti scattano. I sensori nell'asfalto rilevano movimenti sotto i 100ms sanzionando le false partenze." }
  ]
};
