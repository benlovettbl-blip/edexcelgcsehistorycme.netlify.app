(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // questions.js
  var require_questions = __commonJS({
    "questions.js"(exports) {
      var QUIZ_DATA5 = [
        {
          id: "topic_1",
          title: "Key Topic 1: The birth of the state of Israel, 1945\u201363",
          subtopics: [
            {
              id: "subtopic_1_1",
              embedVideo: "https://youtu.be/PgnQeDoypO8",
              title: "Topic 1.1: The British withdrawal and the creation of Israel",
              standard: [
                {
                  id: "q_1_1_s1",
                  question: "What legal authority was Britain given by the League of Nations in 1920 to govern Palestine?",
                  answer: "The British Mandate",
                  explanation: "The League of Nations created this system to manage former Ottoman territories, though in Palestine, it became an impossible balancing act between protecting the rights of the Arab majority and supporting Jewish immigration.",
                  year: 1920
                },
                {
                  id: "q_1_1_s2",
                  question: "What was the name of the nationalist movement aiming to create a Jewish homeland in Palestine?",
                  answer: "Zionism",
                  explanation: "Originally a political movement founded in Europe in response to widespread anti-Semitism, it argued for the creation of a Jewish homeland in Palestine to ensure Jewish survival.",
                  year: 1897
                },
                {
                  id: "q_1_1_s3",
                  question: "Which 1917 British declaration originally promised to support the establishment of a Jewish national home?",
                  answer: "The Balfour Declaration",
                  explanation: "The 1917 Balfour Declaration was highly controversial because it promised a Jewish national home in a land where the vast majority of the population was Arab, laying the groundwork for decades of future conflict.",
                  year: 1917
                },
                {
                  id: "q_1_1_s4",
                  question: "The horrors of which event during the Second World War vastly increased global sympathy for a Jewish state?",
                  answer: "The Holocaust",
                  explanation: "The murder of six million European Jews generated immense international sympathy and moral pressure on Western nations, particularly the USA, to support a Jewish state as a safe haven.",
                  year: 1945
                },
                {
                  id: "q_1_1_s5",
                  question: "What was the name of the moderate Jewish defence force that helped smuggle immigrants into Palestine?",
                  answer: "The Haganah",
                  explanation: "Formed in the 1920s originally to defend Jewish settlements, it evolved into a highly organised military force that helped smuggle Holocaust survivors past the British blockade.",
                  year: 1920
                },
                {
                  id: "q_1_1_s6",
                  question: "Which extremist Jewish terrorist organisation bombed the British administrative headquarters in 1946?",
                  answer: "The Irgun",
                  explanation: "This right-wing paramilitary group believed that diplomacy had failed and that only armed force, sabotage, and acts of terror would force the British to abandon their control of Palestine.",
                  year: 1946
                },
                {
                  id: "q_1_1_s7",
                  question: "In which city was this bombed headquarters, the King David Hotel, located?",
                  answer: "Jerusalem",
                  explanation: "A city of profound religious significance, making its political status one of the most explosive issues, which is why the UN later proposed it be an international zone.",
                  year: 1946
                },
                {
                  id: "q_1_1_s8",
                  question: "Exactly how many people died in the King David Hotel bombing?",
                  answer: "91 people",
                  explanation: "The victims included Arabs, Britons, and Jews; the sheer scale of the death toll and the resulting negative publicity permanently destroyed British public morale to maintain the Mandate.",
                  year: 1946
                },
                {
                  id: "q_1_1_s9",
                  question: "What was the name of the ship carrying 4,500 Jewish refugees that the British notoriously turned back in 1947?",
                  answer: "SS Exodus",
                  explanation: "The highly publicised image of Holocaust survivors being forced back to Europe by the British Royal Navy was a massive public relations disaster for Britain and significantly boosted global support for Zionism.",
                  year: 1947
                },
                {
                  id: "q_1_1_s10",
                  question: "In February 1947, exhausted by the insurgency, Britain handed the Palestine problem to which international organisation?",
                  answer: "The United Nations (UN)",
                  explanation: "The newly formed United Nations was handed the Palestine problem in 1947 because the British had exhausted their military troops and financial resources trying to suppress the Jewish insurgency.",
                  year: 1947
                }
              ],
              depth: [
                {
                  id: "q_1_1_d1",
                  question: "What was the name of the Austrian Jewish journalist who published The Jewish State in 1896, sparking the political Zionist movement?",
                  answer: "Theodor Herzl",
                  explanation: "As the visionary father of modern political Zionism, his writings successfully shifted the Jewish focus from a purely religious connection to the Holy Land toward a highly organised, secular political campaign.",
                  year: 1896
                },
                {
                  id: "q_1_1_d2",
                  question: "What was the name of the 1937 British Commission that was the very first to recommend the partition of Palestine?",
                  answer: "The Peel Commission",
                  explanation: "The 1937 Peel Commission concluded that the mandate was fundamentally unworkable because the nationalist aspirations of the Arabs and Jews were entirely incompatible.",
                  year: 1937
                },
                {
                  id: "q_1_1_d3",
                  question: "Who was the British Foreign Secretary immediately after the Second World War who heavily clashed with Zionists?",
                  answer: "Ernest Bevin",
                  explanation: "Ernest Bevin was determined to maintain good relations with the Arab world to secure British access to vital Middle Eastern oil, causing bitter conflict over refugee quotas.",
                  year: 1945
                },
                {
                  id: "q_1_1_d4",
                  question: "Exactly what percentage of Palestinian land was allocated to the proposed Jewish state under the UN Resolution 181 partition plan?",
                  answer: "55 percent",
                  explanation: "Although Jews formed only about a third of the population, they were allocated the majority of the territory to provide enough space to absorb the anticipated influx of Holocaust survivors.",
                  year: 1947
                },
                {
                  id: "q_1_1_d5",
                  question: "What is the specific Hebrew term for the Jewish agricultural communal farms that often acted as fortified defensive outposts?",
                  answer: "Kibbutz",
                  explanation: "These highly socialist, collective farming communities were crucial not only for agricultural development but also acted as strategic military outposts that delayed Arab advances in 1948.",
                  year: 1910
                },
                {
                  id: "q_1_1_d6",
                  question: "Which prominent Palestinian leader and Grand Mufti of Jerusalem led the Arab Higher Committee in opposing Jewish immigration during the British Mandate?",
                  answer: "Haj Amin al-Husseini",
                  explanation: "Haj Amin al-Husseini was the Grand Mufti of Jerusalem who became the main leader of Arab opposition to Zionism and British rule. He led the Arab Higher Committee during the 1936\u201339 Arab Revolt, fiercely fighting Jewish immigration.",
                  year: 1936
                }
              ]
            },
            {
              id: "subtopic_1_2",
              embedVideo: "https://youtu.be/fXk_n_ww6GU",
              title: "Topic 1.2: Aftermath of the 1948\u201349 war",
              standard: [
                {
                  id: "q_1_2_s1",
                  question: "Which Arab country annexed the West Bank and East Jerusalem following the 1948\u201349 war?",
                  answer: "Jordan",
                  explanation: "King Abdullah formally annexed the territory in 1950 and granted Jordanian citizenship to its Palestinian residents, a move that angered other Arab nations.",
                  year: 1950
                },
                {
                  id: "q_1_2_s2",
                  question: "Which Arab country took military control over the Gaza Strip?",
                  answer: "Egypt",
                  explanation: "Unlike Jordan, Egypt did not annex the territory but retained it under a strict military administration, leaving the Palestinians there as stateless refugees.",
                  year: 1949
                },
                {
                  id: "q_1_2_s3",
                  question: "What colour was used to describe the 1949 armistice lines that formed Israel's new borders?",
                  answer: "The Green Line",
                  explanation: "These armistice lines constituted Israel's de facto borders with its Arab neighbours from 1949 until they were shattered during the June War of 1967.",
                  year: 1949
                },
                {
                  id: "q_1_2_s4",
                  question: "What Arabic phrase, meaning 'the catastrophe', do Palestinians use to describe their mass displacement in the 1948 war?",
                  answer: "Al-Nakba",
                  explanation: "This term encapsulates not just the military defeat, but the permanent loss of the Palestinian homeland and the fragmentation of their society.",
                  year: 1948
                },
                {
                  id: "q_1_2_s5",
                  question: "Exactly how many Palestinian Arabs fled or were driven from their homes?",
                  answer: "Over 700,000",
                  explanation: "Approximately 700,000 to 750,000 Palestinians became refugees, representing the vast majority of the Arab population that had lived in the territory that became Israel.",
                  year: 1948
                },
                {
                  id: "q_1_2_s6",
                  question: "What is the acronym of the UN agency created in December 1949 to provide camps and relief for these refugees?",
                  answer: "UNRWA",
                  explanation: "The United Nations Relief and Works Agency became a permanent fixture providing food, shelter, and education as the conflict dragged on.",
                  year: 1949
                },
                {
                  id: "q_1_2_s7",
                  question: "What is the name of the new unified national army created by David Ben-Gurion during the war?",
                  answer: "Israeli Defence Forces (IDF)",
                  explanation: "The Israeli Defence Forces were formed in May 1948 when Ben-Gurion unified the Haganah and smaller militant groups, ensuring the government had total control over a single military.",
                  year: 1948
                },
                {
                  id: "q_1_2_s8",
                  question: "To build up its military strength, what mandatory service did Israel introduce for all 18-year-old men and women?",
                  answer: "Compulsory conscription",
                  explanation: "By requiring men and women to serve and maintaining a lifelong reserve duty, Israel turned almost its entire adult population into a rapid-response military force.",
                  year: 1948
                },
                {
                  id: "q_1_2_s9",
                  question: "What 1950 Law gave any Jew worldwide the right to Israeli citizenship?",
                  answer: "The Law of Return",
                  explanation: "The Law of Return was the ultimate fulfilment of the Zionist dream, legally enshrining Israel as the homeland for the global Jewish diaspora and ensuring a rapid demographic expansion.",
                  year: 1950
                },
                {
                  id: "q_1_2_s10",
                  question: "What is the Arabic name for the Palestinian guerrilla fighters who launched raids into Israel from Egyptian-controlled Gaza?",
                  answer: "Fedayeen",
                  explanation: "Translating to 'those who sacrifice themselves', these fighters were viewed as terrorists by Israelis, but celebrated as resistance heroes across the Arab world.",
                  year: 1950
                }
              ],
              depth: [
                {
                  id: "q_1_2_d1",
                  question: "What was the specific military codename for the severe Israeli reprisal attack on the Egyptian army headquarters in Gaza on 28 February 1955?",
                  answer: "Operation Black Arrow",
                  explanation: "Operation Black Arrow was a massive turning point in Egyptian-Israeli relations, convincing Nasser that Egypt's military was too weak and prompting the Czech arms deal.",
                  year: 1955
                },
                {
                  id: "q_1_2_d2",
                  question: "Who was the Israeli commander of the Paratroopers Brigade that led this 1955 attack on Gaza, and who later became a highly controversial political figure?",
                  answer: "Ariel Sharon",
                  explanation: "Ariel Sharon's aggressive leadership established his reputation as a ruthless tactician, foreshadowing his later role in the 1982 invasion of Lebanon.",
                  year: 1955
                },
                {
                  id: "q_1_2_d3",
                  question: "What was the name of the Israeli southern port that was economically strangled by Egypt's blockade of the Straits of Tiran?",
                  answer: "Eilat",
                  explanation: "Because it was Israel's only gateway to the Red Sea, the economic strangulation of Eilat cut Israel off from vital trade routes to Asia and East Africa.",
                  year: 1949
                },
                {
                  id: "q_1_2_d4",
                  question: "Who was the Egyptian King overthrown in 1952, partly because of the army's anger over his failures in the 1948 war?",
                  answer: "King Farouk",
                  explanation: "The humiliating defeat deeply shamed the Egyptian military, prompting a group of 'Free Officers' to launch a revolution that paved the way for Nasser's rise to power.",
                  year: 1952
                },
                {
                  id: "q_1_2_d5",
                  question: "What was the name of the 1952 financial agreement in which West Germany agreed to pay compensation to Israel for the Holocaust?",
                  answer: "The Reparations Agreement",
                  explanation: "The Reparations Agreement provided Israel with hundreds of millions of dollars in vital foreign currency and equipment, essential for absorbing massive immigration.",
                  year: 1952
                },
                {
                  id: "q_1_2_d6",
                  question: "Which UN mediator, dispatched to negotiate a peace settlement during the 1948 Arab-Israeli War, was assassinated in Jerusalem by the extremist Jewish Stern Gang?",
                  answer: "Count Folke Bernadotte",
                  explanation: "Count Folke Bernadotte of Sweden was appointed by the UN Security Council as the mediator. He successfully arranged two truces but was shot in September 1948 by members of Lehi (the Stern Gang) who feared his peace plan would hand Jerusalem to Jordan.",
                  year: 1948
                }
              ]
            },
            {
              id: "subtopic_1_3",
              embedVideo: "https://youtu.be/PnZ2tG_PYpc",
              title: "Topic 1.3: Increased tension, 1955\u201363",
              standard: [
                {
                  id: "q_1_3_s1",
                  question: "Who is the Egyptian leader who became President in 1954 and championed Arab nationalism?",
                  answer: "Gamal Abdel Nasser",
                  explanation: "Gamal Abdel Nasser's charismatic leadership transformed Egypt into the dominant power in the Middle East, challenging both Israeli security and Western imperialism.",
                  year: 1954
                },
                {
                  id: "q_1_3_s2",
                  question: "What specific political ideology did this leader promote to unite Arabic-speaking nations against Western influence and Israel?",
                  answer: "Pan-Arabism",
                  explanation: "This movement sought to politically and economically unify the Arab world, presenting a severe strategic threat to Israel by attempting to surround it.",
                  year: 1954
                },
                {
                  id: "q_1_3_s3",
                  question: "In February 1955, the Israeli army launched a massive retaliation raid against the Egyptian military headquarters in which territory?",
                  answer: "Gaza",
                  explanation: "The severe IDF attack killed 38 Egyptian soldiers and was a turning point because the humiliation convinced Nasser that his army urgently needed modern weapons.",
                  year: 1955
                },
                {
                  id: "q_1_3_s4",
                  question: "From which Eastern Bloc country did Egypt sign a massive arms deal in September 1955 to bypass Western arms embargoes?",
                  answer: "Czechoslovakia",
                  explanation: "Acting as a proxy for the Soviet Union, Czechoslovakia provided Egypt with advanced jet fighters and tanks, fundamentally shifting the balance of military power.",
                  year: 1955
                },
                {
                  id: "q_1_3_s5",
                  question: "What major infrastructure project did Egypt plan to build on the River Nile to control flooding and provide hydroelectric power?",
                  answer: "The Aswan High Dam",
                  explanation: "The Aswan High Dam was Nasser's flagship domestic project, intended to modernize the Egyptian economy and alleviate poverty.",
                  year: 1955
                },
                {
                  id: "q_1_3_s6",
                  question: "Which global superpower famously withdrew its offer to fund this dam in July 1956 due to Egypt's growing ties with the Communist bloc?",
                  answer: "The USA",
                  explanation: "President Eisenhower withdrew the loan offer to punish Nasser for buying Soviet arms, demonstrating how Middle Eastern nations were used in Cold War rivalries.",
                  year: 1956
                },
                {
                  id: "q_1_3_s7",
                  question: "In retaliation for this withdrawn funding, what vital waterway did the Egyptian President nationalize in July 1956?",
                  answer: "The Suez Canal",
                  explanation: "By nationalising the canal to use its toll revenues, Nasser struck a massive blow against British and French imperial pride and their oil supply routes.",
                  year: 1956
                },
                {
                  id: "q_1_3_s8",
                  question: "What is the name of the secret agreement signed in October 1956 between Britain, France, and Israel to collude against Egypt?",
                  answer: "Protocol of S\xE8vres",
                  explanation: "The Protocol of S\xE8vres planned for Israel to invade Egypt, providing Britain and France with a manufactured 'excuse' to intervene militarily to seize the canal.",
                  year: 1956
                },
                {
                  id: "q_1_3_s9",
                  question: "On 29 October 1956, Israel invaded which Egyptian territory as the first stage of this secret military plan?",
                  answer: "The Sinai Peninsula",
                  explanation: "The IDF's rapid and stunning conquest of the Sinai Peninsula proved their military superiority, allowing them to destroy Fedayeen guerrilla bases.",
                  year: 1956
                },
                {
                  id: "q_1_3_s10",
                  question: "What acronym represents the United Nations peacekeeping force stationed on the Egyptian-Israeli border after the crisis?",
                  answer: "UNEF (United Nations Emergency Force)",
                  explanation: "The United Nations Emergency Force successfully acted as a buffer between Israel and Egypt, providing Israel with a decade of secure southern borders.",
                  year: 1956
                }
              ],
              depth: [
                {
                  id: "q_1_3_d1",
                  question: "What was the specific operational codename for the devastating Israeli attack on Syrian outposts near the Sea of Galilee in December 1955?",
                  answer: "Operation Kinneret (Olive Leaves)",
                  explanation: "Operation Kinneret was intended to stop Syrian troops firing on Israeli fishermen, but the ferocity of the attack pushed Syria closer to Egypt.",
                  year: 1955
                },
                {
                  id: "q_1_3_d2",
                  question: "Who was the moderate Israeli Prime Minister who preferred diplomacy but was overruled by hardliners in 1954-55?",
                  answer: "Moshe Sharett",
                  explanation: "Moshe Sharett's tenure was marked by a constant struggle against the aggressive, retaliatory defence policies championed by Moshe Dayan and David Ben-Gurion.",
                  year: 1954
                },
                {
                  id: "q_1_3_d3",
                  question: "What is the specific name of the Egyptian town located at the extreme southern tip of the Sinai Peninsula, captured by Israel in 1956 to break the naval blockade?",
                  answer: "Sharm el-Sheikh",
                  explanation: "Controlling this heavily fortified outpost was the only way to dominate the narrow Straits of Tiran, making its capture the ultimate strategic prize.",
                  year: 1956
                },
                {
                  id: "q_1_3_d4",
                  question: "What was the official Israeli military codename for their invasion of the Sinai Peninsula in October 1956?",
                  answer: "Operation Kadesh",
                  explanation: "Named after the biblical oasis, Operation Kadesh relied heavily on rapid armored thrusts and paratroop drops to overwhelm Egyptian forces.",
                  year: 1956
                },
                {
                  id: "q_1_3_d5",
                  question: "Under the secret Protocol of S\xE8vres, what specific diplomatic mechanism were Britain and France going to use as a false pretext to invade?",
                  answer: "An Anglo-French ultimatum",
                  explanation: "Britain and France issued a pre-planned 'ultimatum' demanding both sides withdraw from the canal, knowing Egypt would refuse on its own territory.",
                  year: 1956
                }
              ]
            }
          ]
        },
        {
          id: "topic_2",
          title: "Key Topic 2: The escalating conflict, 1964\u201373",
          subtopics: [
            {
              id: "subtopic_2_1",
              embedVideo: "https://youtu.be/W7KFi6ZmZdU",
              title: "Topic 2.1: The Six Day War, 1967",
              standard: [
                {
                  id: "q_2_1_s1",
                  question: "What was the location of the 1964 Arab League Conference that officially set an anti-Israel agenda?",
                  answer: "Cairo",
                  explanation: "The 1964 conference marked a turning point where Arab leaders officially sponsored Palestinian nationalism and agreed on a unified military strategy.",
                  year: 1964
                },
                {
                  id: "q_2_1_s2",
                  question: "What umbrella organisation was set up in 1964 to unite the Palestinian people?",
                  answer: "The PLO (Palestine Liberation Organisation)",
                  explanation: "The Palestine Liberation Organisation quickly became an umbrella for various independent guerrilla groups dedicated to armed struggle.",
                  year: 1964
                },
                {
                  id: "q_2_1_s3",
                  question: "What is the name of the Palestinian guerrilla group, founded by Yasser Arafat, that began raiding Israel in 1965?",
                  answer: "Fatah",
                  explanation: "Believing in using guerrilla warfare and sabotage against Israeli infrastructure, Fatah launched over 100 raids between 1965 and 1967.",
                  year: 1965
                },
                {
                  id: "q_2_1_s4",
                  question: "The diversion of which vital river by Syria and Lebanon caused major border tensions with Israel?",
                  answer: "The River Jordan",
                  explanation: "The Headwater Diversion Plan threatened to cut off Israel's fresh water supply, prompting Israel to use airstrikes to destroy the engineering works.",
                  year: 1964
                },
                {
                  id: "q_2_1_s5",
                  question: "What was the name of the West Bank village where the IDF launched a massive, destructive reprisal raid in November 1966?",
                  answer: "Samu",
                  explanation: "The IDF destroyed dozens of houses in retaliation for a Fatah landmine; the severity humiliated Jordan and drew international condemnation.",
                  year: 1966
                },
                {
                  id: "q_2_1_s6",
                  question: "What type of Soviet-made fighter jets did Israel shoot down six of over Damascus on 7 April 1967?",
                  answer: "Syrian MiGs",
                  explanation: "The shooting down of six Syrian MiG fighter jets was a major public escalation that humiliated Syria, forcing them to demand Egypt honour their defence pact.",
                  year: 1967
                },
                {
                  id: "q_2_1_s7",
                  question: "In May 1967, which global superpower deliberately gave Egypt false intelligence claiming Israel was massing troops?",
                  answer: "The USSR (Soviet Union)",
                  explanation: "The Soviets falsely warned Egypt that Israel was massing troops to invade Syria, a deliberate piece of misinformation that triggered the war.",
                  year: 1967
                },
                {
                  id: "q_2_1_s8",
                  question: "Which narrow waterway did Egypt blockade on 22 May 1967, cutting off Israel's vital trade route to the Red Sea?",
                  answer: "The Straits of Tiran",
                  explanation: "Nesser's closure of the Straits of Tiran cut off Israel's oil supply; Israel had explicitly warned that blockading this waterway would be treated as an act of war.",
                  year: 1967
                },
                {
                  id: "q_2_1_s9",
                  question: "What tactical advantage was crucial to the success of the initial Israeli attack on 5 June 1967?",
                  answer: "Total surprise",
                  explanation: "By attacking at 7:45 AM while Egyptian pilots were eating breakfast, Israel achieved total tactical surprise, destroying the Arab air forces within hours.",
                  year: 1967
                },
                {
                  id: "q_2_1_s10",
                  question: "What type of pre-emptive attack did Israel use to destroy the Egyptian air force on the ground?",
                  answer: "A pre-emptive airstrike",
                  explanation: "This devastating pre-emptive strike gave the IDF total air superiority, leaving Arab ground troops completely defenseless.",
                  year: 1967
                }
              ],
              depth: [
                {
                  id: "q_2_1_d1",
                  question: "Who was the Israeli Prime Minister who initially hesitated to go to war in May 1967, facing immense domestic criticism?",
                  answer: "Levi Eshkol",
                  explanation: "Levi Eshkol's cautious approach frustrated Israeli military leaders, forcing him to yield the Defence Ministry portfolio to Moshe Dayan.",
                  year: 1967
                },
                {
                  id: "q_2_1_d2",
                  question: "What specific Arab military alliance, formed between Egypt and Syria in November 1966, meant an attack on one would bring the other into war?",
                  answer: "The Egypt-Syria Defence Pact",
                  explanation: "The Egypt-Syria Defence Pact was a crucial tripwire, meaning border skirmishes with Syria threatened to drag the entire Egyptian army into conflict.",
                  year: 1966
                },
                {
                  id: "q_2_1_d3",
                  question: "What was the specific military codename for the highly secretive, pre-emptive Israeli airstrike on 5 June 1967?",
                  answer: "Operation Focus",
                  explanation: "Operation Focus relied on total radio silence and flying under Egyptian radar, resulting in the destruction of over 300 planes.",
                  year: 1967
                },
                {
                  id: "q_2_1_d4",
                  question: "How many Egyptian troops did Nasser move into the Sinai Peninsula by mid-May 1967 after receiving the false intelligence?",
                  answer: "100,000 troops",
                  explanation: "The sudden deployment of 100,000 Egyptian soldiers removed Israel's strategic depth, causing sheer panic and forcing a massive mobilisation.",
                  year: 1967
                },
                {
                  id: "q_2_1_d5",
                  question: "Who was the American President who suggested Israel wait for an international flotilla, a plan that failed?",
                  answer: "Lyndon B. Johnson",
                  explanation: "President Lyndon B. Johnson was bogged down in Vietnam and could only offer vague promises, leaving Israel to act alone.",
                  year: 1967
                }
              ]
            },
            {
              id: "subtopic_2_2",
              embedVideo: "https://youtu.be/hMOIIdnkrDY",
              title: "Topic 2.2: Aftermath of the 1967 war",
              standard: [
                {
                  id: "q_2_2_s1",
                  question: "What was the number of the UN Resolution passed in November 1967 that established the principle of 'land for peace'?",
                  answer: "UN Resolution 242",
                  explanation: "Although the cornerstone of future peace negotiations, its ambiguous wording allowed Israel to justify retaining captured land until treaties were signed.",
                  year: 1967
                },
                {
                  id: "q_2_2_s2",
                  question: "In which city did the Arab League meet in August 1967, issuing the famous 'Three Nos' (no peace, no recognition, no negotiation)?",
                  answer: "Khartoum",
                  explanation: "This defiant resolution convinced many Israelis that the Arab world was completely unwilling to compromise.",
                  year: 1967
                },
                {
                  id: "q_2_2_s3",
                  question: "What name is given to the prolonged artillery and aerial conflict (1967\u20131970) initiated by Egypt to wear down Israeli forces?",
                  answer: "The War of Attrition",
                  explanation: "President Nasser hoped this static war of constant shelling would break Israeli public morale and force a withdrawal from Sinai.",
                  year: 1967
                },
                {
                  id: "q_2_2_s4",
                  question: "Which occupied territory provided Israel with a massive physical military buffer zone against Egypt and contained valuable oil reserves?",
                  answer: "The Sinai Peninsula",
                  explanation: "Occupying the Sinai gave Israel immense strategic depth, meaning an Egyptian invasion would have to cross hundreds of miles of desert.",
                  year: 1967
                },
                {
                  id: "q_2_2_s5",
                  question: "Which elevated occupied territory provided crucial fresh water sources and stopped Syrian artillery attacks on Israeli farming communities?",
                  answer: "The Golan Heights",
                  explanation: "Controlling the Golan Heights completely shifted the tactical advantage, placing Israeli forces less than 40 miles from Damascus.",
                  year: 1967
                },
                {
                  id: "q_2_2_s6",
                  question: "The 1967 war created over 300,000 new Palestinian what, the vast majority of whom fled into neighbouring Jordan?",
                  answer: "Refugees",
                  explanation: "This second massive wave of displacement compounded the tragedy of the Nakba, overflowing UNRWA camps and creating recruiting grounds for militants.",
                  year: 1967
                },
                {
                  id: "q_2_2_s7",
                  question: "Realising conventional armies could not defeat Israel, Palestinian nationalist groups increasingly shifted to what violent tactic?",
                  answer: "International terrorism",
                  explanation: "Groups like Fatah and the PFLP adopted asymmetrical guerrilla warfare and international terror attacks to force the world to address their statelessness.",
                  year: 1968
                },
                {
                  id: "q_2_2_s8",
                  question: "Which radical Marxist Palestinian organisation, founded by George Habash, pioneered the hijacking of international civilian flights?",
                  answer: "The PFLP",
                  explanation: "The Popular Front for the Liberation of Palestine viewed attacking Western commercial airlines as a legitimate way to strike at Israel's supporters.",
                  year: 1967
                },
                {
                  id: "q_2_2_s9",
                  question: "At which Jordanian desert airfield did this group blow up three hijacked international passenger airliners in September 1970?",
                  answer: "Dawson's Field",
                  explanation: "The spectacular visual gained massive media attention but humiliated the Jordanian government by proving they lost control of their territory.",
                  year: 1970
                },
                {
                  id: "q_2_2_s10",
                  question: "In which West German city did the 'Black September' group strike during the highly publicised 1972 Olympic Games?",
                  answer: "Munich",
                  explanation: "The horrific reality of the hostage crisis playing out on live global television shocked the world and cast the PLO as a terrorist organisation.",
                  year: 1972
                }
              ],
              depth: [
                {
                  id: "q_2_2_d1",
                  question: "Who was the Swedish UN diplomat appointed in November 1967 to try and implement Resolution 242?",
                  answer: "Gunnar Jarring",
                  explanation: "Gunnar Jarring spent over three years attempting to find a compromise, but his mission collapsed due to the rigid stances of both sides.",
                  year: 1967
                },
                {
                  id: "q_2_2_d2",
                  question: "Who was the founder of the PFLP, a Palestinian Christian doctor who believed only Marxist revolution would liberate Palestine?",
                  answer: "George Habash",
                  explanation: "George Habash formed the PFLP in 1967, breaking away from Arafat's Fatah because he believed the PLO was too moderate.",
                  year: 1967
                },
                {
                  id: "q_2_2_d3",
                  question: "What was the official Israeli military codename for the covert assassination campaign launched to hunt down the Munich perpetrators?",
                  answer: "Operation Wrath of God",
                  explanation: "Operation Wrath of God involved Israeli intelligence tracking down operatives across Europe, demonstrating Israel's commitment to lethal deterrence.",
                  year: 1972
                },
                {
                  id: "q_2_2_d4",
                  question: "What was the name of the West German military airbase where the botched police rescue attempt resulted in the deaths of the Israeli hostages?",
                  answer: "F\xFCrstenfeldbruck",
                  explanation: "The disastrous outcome exposed severe flaws in counter-terrorism capabilities, prompting the creation of specialised hostage-rescue units globally.",
                  year: 1972
                },
                {
                  id: "q_2_2_d5",
                  question: "Who was the Israeli Prime Minister who ordered fierce military reprisals and the Mossad assassination campaign following Munich?",
                  answer: "Golda Meir",
                  explanation: "Golda Meir's unyielding 'iron lady' approach defined Israel's response to global terrorism, cementing a policy of absolute refusal to negotiate.",
                  year: 1972
                }
              ]
            },
            {
              id: "subtopic_2_3",
              embedVideo: "https://youtu.be/F4GGpOxJW7I",
              title: "Topic 2.3: Israel and Egypt, 1967\u201373",
              standard: [
                {
                  id: "q_2_3_s1",
                  question: "Who became the President of Egypt following the death of Nasser in September 1970?",
                  answer: "Anwar Sadat",
                  explanation: "Anwar Sadat was initially viewed as a weak, transitional figure, but proved to be a highly cunning strategist who drastically changed Egypt's geopolitical alignment.",
                  year: 1970
                },
                {
                  id: "q_2_3_s2",
                  question: "To encourage the USA to pressure Israel, how many Soviet military advisers did this new Egyptian President expel in 1972?",
                  answer: "15,000 advisers",
                  explanation: "Expelling the Soviets was a massive gamble to win American favour, leading Sadat to decide a limited war was his only remaining option.",
                  year: 1972
                },
                {
                  id: "q_2_3_s3",
                  question: "To secure its occupied territories, Israel built a massive defensive sand wall along the Suez Canal known as what?",
                  answer: "The Bar-Lev Line",
                  explanation: "The Bar Lev Line cost hundreds of millions and created a false sense of absolute security within the Israeli military establishment.",
                  year: 1971
                },
                {
                  id: "q_2_3_s4",
                  question: "What is the specific term for the Jewish communities built by Israel in the newly conquered territories to consolidate its control?",
                  answer: "Israeli settlements",
                  explanation: "Heavily subsidised by the government, these fortified towns were intended to create permanent 'facts on the ground'.",
                  year: 1967
                },
                {
                  id: "q_2_3_s5",
                  question: "On what specific Jewish holy day did Egypt and Syria launch a surprise coordinated attack in 1973?",
                  answer: "Yom Kippur",
                  explanation: "The holiest day in the Jewish calendar meant the country was at a complete standstill, allowing Arab armies to achieve total tactical surprise.",
                  year: 1973
                },
                {
                  id: "q_2_3_s6",
                  question: "What type of high-pressure weapon did Egyptian engineers innovatively use to blast through the Israeli sand walls?",
                  answer: "Water cannons",
                  explanation: "Using powerful water hoses to melt the sand banks was a stroke of Egyptian military genius, allowing quick crossings of the canal.",
                  year: 1973
                },
                {
                  id: "q_2_3_s7",
                  question: "What type of Soviet-built surface-to-air missiles successfully protected the initial Egyptian advance from Israeli fighter jets?",
                  answer: "SAM-3 missiles",
                  explanation: "These advanced anti-aircraft missiles created an 'umbrella' over the Suez Canal that effectively neutralized the Israeli Air Force.",
                  year: 1973
                },
                {
                  id: "q_2_3_s8",
                  question: "What global superpower organised a massive emergency airlift of military equipment to save Israel from defeat?",
                  answer: "The USA",
                  explanation: "President Nixon's $2.2 billion airlift of tanks, jets, and ammunition was crucial for Israel's survival, but infuriated the Arab world.",
                  year: 1973
                },
                {
                  id: "q_2_3_s9",
                  question: "What economic 'weapon' did Arab states use to punish the West for supplying Israel with weapons?",
                  answer: "The Oil Embargo",
                  explanation: "By drastically cutting production, Arab oil-producing nations triggered a massive global energy crisis, proving they possessed a devastating economic tool.",
                  year: 1973
                },
                {
                  id: "q_2_3_s10",
                  question: "What was the number of the United Nations Security Council Resolution that eventually brought the fighting to a ceasefire?",
                  answer: "Resolution 338",
                  explanation: "Passed jointly by the USA and USSR, Resolution 338 demanded a ceasefire and legally mandated the implementation of Resolution 242.",
                  year: 1973
                }
              ],
              depth: [
                {
                  id: "q_2_3_d1",
                  question: "What was the name of the official Israeli judicial commission of inquiry set up in November 1973 to investigate the intelligence failures?",
                  answer: "The Agranat Commission",
                  explanation: "The Agranat Commission absolved politicians of direct responsibility, placing the blame entirely on the military leadership, sparking massive public outrage.",
                  year: 1973
                },
                {
                  id: "q_2_3_d2",
                  question: "Who was the Chief of Staff of the Israeli Defence Forces (IDF) who was forced to resign as a direct result of this commission's findings?",
                  answer: "David 'Dado' Elazar",
                  explanation: "Lieutenant General David 'Dado' Elazar took the fall for the intelligence disaster despite having successfully commanded the counter-offensive.",
                  year: 1973
                },
                {
                  id: "q_2_3_d3",
                  question: "What was the specific name of the Soviet-built, wire-guided anti-tank missiles used by Egyptian infantry to devastate Israeli tanks?",
                  answer: "Sagger missiles",
                  explanation: "The portable Sagger missiles fundamentally changed tank warfare, destroying hundreds of charging, technologically superior Israeli tanks.",
                  year: 1973
                },
                {
                  id: "q_2_3_d4",
                  question: "What was the name of the Israeli intelligence assumption that Egypt would never attack without superior air power?",
                  answer: "'The Conception'",
                  explanation: "'The Conception' blinded Israeli military intelligence, causing them to interpret the massive Egyptian troop build-up as merely a training exercise.",
                  year: 1973
                },
                {
                  id: "q_2_3_d5",
                  question: "Who was the King of Jordan who secretly flew to Tel Aviv in September 1973 to personally warn Golda Meir of the impending Syrian attack?",
                  answer: "King Hussein",
                  explanation: "King Hussein's extraordinary secret meeting demonstrated complex back-channel relationships; he warned Israel to avoid destabilizing his own kingdom.",
                  year: 1973
                }
              ]
            }
          ]
        },
        {
          id: "topic_3",
          title: "Key Topic 3: Attempts at a solution, 1974\u201395",
          subtopics: [
            {
              id: "subtopic_3_1",
              embedVideo: "https://youtu.be/iK729p_-ZRg",
              title: "Topic 3.1: Diplomatic negotiations",
              standard: [
                {
                  id: "q_3_1_s1",
                  question: "What economic 'weapon' did Arab states use in 1973 to punish the West for supporting Israel?",
                  answer: "The Oil Embargo",
                  explanation: "The embargo quadrupled global fuel prices and created a severe economic crisis in the West, forcing the USA to actively intervene in the conflict.",
                  year: 1973
                },
                {
                  id: "q_3_1_s2",
                  question: "What acronym represents the organisation of Arab petroleum-exporting countries that imposed this embargo?",
                  answer: "OPEC",
                  explanation: "The Organization of the Petroleum Exporting Countries demonstrated unprecedented unity, forcing Western nations to adopt more neutral foreign policies.",
                  year: 1973
                },
                {
                  id: "q_3_1_s3",
                  question: "Which US Secretary of State engaged in intensive travel between Middle Eastern capitals to mediate peace agreements between 1974 and 1975?",
                  answer: "Henry Kissinger",
                  explanation: "Henry Kissinger actively sidelined the Soviet Union to ensure that the USA became the sole indispensable peace-broker in the Middle East.",
                  year: 1974
                },
                {
                  id: "q_3_1_s4",
                  question: "What specific term became famous to describe this process of the US mediator flying back and forth between hostile capitals?",
                  answer: "Shuttle Diplomacy",
                  explanation: "Because the Arab leaders completely refused to sit in the same room as the Israelis, 'shuttle diplomacy' was the only practical way to build trust.",
                  year: 1974
                },
                {
                  id: "q_3_1_s5",
                  question: "Which vital international waterway was officially reopened to global shipping in June 1975 following these diplomatic agreements?",
                  answer: "The Suez Canal",
                  explanation: "Reopening the canal after eight years of closure was a massive economic boost for Egypt and a symbolic victory for President Sadat.",
                  year: 1975
                },
                {
                  id: "q_3_1_s6",
                  question: "In November 1977, the Egyptian President made an unprecedented and historic visit to which city to offer peace?",
                  answer: "Jerusalem",
                  explanation: "By travelling to the heart of the Jewish state, Sadat shattered the immense psychological barrier of the Arab world's 'Three Nos'.",
                  year: 1977
                },
                {
                  id: "q_3_1_s7",
                  question: "What is the name of the Israeli parliament where the Egyptian President delivered his famous peace speech?",
                  answer: "The Knesset",
                  explanation: "Addressing the Israeli parliament directly allowed Sadat to bypass the politicians and speak straight to the Israeli public.",
                  year: 1977
                },
                {
                  id: "q_3_1_s8",
                  question: "Who was the US President who personally intervened to save the failing peace talks in 1978?",
                  answer: "Jimmy Carter",
                  explanation: "Driven by deep personal religious convictions and a strategic desire to stabilize the Middle East, Jimmy Carter staked his political reputation on achieving a treaty.",
                  year: 1978
                },
                {
                  id: "q_3_1_s9",
                  question: "What is the name of the secluded US presidential retreat in Maryland where the three leaders met in September 1978?",
                  answer: "Camp David",
                  explanation: "The isolation of Camp David was a deliberate tactic by Carter to cut the leaders off from domestic political pressures and the global press.",
                  year: 1978
                },
                {
                  id: "q_3_1_s10",
                  question: "In what month and year was the formal signing of the Egypt-Israel peace treaty in the US capital?",
                  answer: "March 1979 (Treaty of Washington)",
                  explanation: "The Treaty of Washington legally codified the Camp David Accords, with the USA cementing the deal by committing billions of dollars in aid.",
                  year: 1979
                }
              ],
              depth: [
                {
                  id: "q_3_1_d1",
                  question: "Which North African country's King hosted the highly secretive 1977 meetings between Israeli and Egyptian envoys?",
                  answer: "Morocco (King Hassan II)",
                  explanation: "King Hassan II facilitated clandestine meetings, proving that back-channel, secret diplomacy was essential before public breakthroughs.",
                  year: 1977
                },
                {
                  id: "q_3_1_d2",
                  question: "Who was the Egyptian Foreign Minister who dramatically resigned on the final day of the Camp David summit?",
                  answer: "Muhammad Ibrahim Kamel",
                  explanation: "Muhammad Ibrahim Kamel's resignation highlighted deep internal divisions; he believed Sadat had abandoned the Palestinian cause.",
                  year: 1978
                },
                {
                  id: "q_3_1_d3",
                  question: "In July 1978, the USA hosted secret preliminary talks between Israeli and Egyptian foreign ministers at which historic English castle?",
                  answer: "Leeds Castle",
                  explanation: "The Leeds Castle talks broke a dangerous diplomatic freeze and laid the groundwork for Carter's decision to invite leaders to Camp David.",
                  year: 1978
                },
                {
                  id: "q_3_1_d4",
                  question: "What Roman numeral is used to denote the September 1975 interim agreement, where Israel agreed to withdraw from strategic Sinai passes?",
                  answer: "Sinai II",
                  explanation: "The Sinai II agreement was a massive milestone as it included the first official statement that the conflict should not be resolved by military force.",
                  year: 1975
                },
                {
                  id: "q_3_1_d5",
                  question: "Who was the brilliant Israeli legal advisor who helped draft the deliberately ambiguous wording of the Camp David frameworks?",
                  answer: "Aharon Barak",
                  explanation: "Aharon Barak's legal genius allowed both Begin and Sadat to claim political victories to their home audiences without losing face.",
                  year: 1978
                },
                {
                  id: "q_3_1_d6",
                  question: "Which commander of the Egyptian Air Force during the Yom Kippur War succeeded Anwar Sadat as President of Egypt after Sadat's assassination in 1981?",
                  answer: "Hosni Mubarak",
                  explanation: "Hosni Mubarak served as Commander of the Air Force and Vice President, and assumed the presidency after Anwar Sadat was assassinated by Islamic extremists in 1981. He maintained the peace treaty with Israel and ruled Egypt for nearly 30 years.",
                  year: 1981
                }
              ]
            },
            {
              id: "subtopic_3_2",
              embedVideo: "https://youtu.be/-XkX1UUe7HQ",
              title: "Topic 3.2: The Palestinian issue",
              standard: [
                {
                  id: "q_3_2_s1",
                  question: `Who made a historic speech to the General Assembly in 1974, claiming to bear "an olive branch and a freedom fighter's gun"?`,
                  answer: "Yasser Arafat",
                  explanation: "Yasser Arafat's speech was a monumental diplomatic victory, successfully transforming his global image into an internationally recognised statesman.",
                  year: 1974
                },
                {
                  id: "q_3_2_s2",
                  question: "After being violently expelled from Jordan in 1970, to which neighbouring country did the PLO move its headquarters and guerrilla bases?",
                  answer: "Lebanon",
                  explanation: "Lebanon's weak central government and existing refugee population made it the perfect staging ground for the PLO to rebuild its military.",
                  year: 1970
                },
                {
                  id: "q_3_2_s3",
                  question: "The PLO's arrival upset a delicate religious demographic balance, contributing to the outbreak of a devastating 15-year conflict in 1975 known as what?",
                  answer: "The Lebanese Civil War",
                  explanation: "The Lebanese Civil War turned the country into a chaotic and bloody battleground, allowing the PLO to operate outside of government control.",
                  year: 1975
                },
                {
                  id: "q_3_2_s4",
                  question: "In March 1978, a deadly PLO bus hijacking triggered Israel to launch a limited 26,000-troop invasion known as what?",
                  answer: "Operation Litani",
                  explanation: "Operation Litani successfully pushed the PLO forces north of the Litani River, but international outrage forced Israel to withdraw relatively quickly.",
                  year: 1978
                },
                {
                  id: "q_3_2_s5",
                  question: "Following this 1978 invasion, what acronym represents the UN peacekeeping force deployed to patrol the border buffer zone?",
                  answer: "UNIFIL",
                  explanation: "The United Nations Interim Force in Lebanon was established to restore peace, but proved powerless to stop the PLO from continuing to infiltrate.",
                  year: 1978
                },
                {
                  id: "q_3_2_s6",
                  question: "In June 1982, the attempted assassination of the Israeli ambassador in London was used by Ariel Sharon to justify what?",
                  answer: "A full-scale invasion",
                  explanation: "Israel used the outrage as the perfect pretext to launch a long-planned, massive military offensive to destroy the PLO permanently.",
                  year: 1982
                },
                {
                  id: "q_3_2_s7",
                  question: "What was the official Israeli military codename for this 1982 invasion?",
                  answer: "Operation Peace for Galilee",
                  explanation: "Officially sold to the public as a limited 40km incursion to protect northern settlements, it rapidly expanded into a war to conquer the capital.",
                  year: 1982
                },
                {
                  id: "q_3_2_s8",
                  question: "Which Lebanese capital city was heavily bombarded, cutting off food and water to trap 15,000 PLO fighters inside?",
                  answer: "Beirut",
                  explanation: "By trapping Arafat and his fighters in West Beirut, the IDF achieved a tactical victory, but high civilian casualties caused a public relations disaster.",
                  year: 1982
                },
                {
                  id: "q_3_2_s9",
                  question: "In September 1982, Lebanese Christian Phalangist militias carried out a horrific two-day massacre of Palestinian refugees in the Shatila and which other camp?",
                  answer: "Sabra and Shatila",
                  explanation: "The Sabra and Shatila massacres resulted in the brutal murder of up to 3,000 unarmed civilians while the Israeli army guarded the perimeters.",
                  year: 1982
                },
                {
                  id: "q_3_2_s10",
                  question: "In December 1987, an Israeli army truck crashed into civilian cars in Gaza, sparking a massive, spontaneous uprising known as what?",
                  answer: "The First Intifada",
                  explanation: "Translating to 'shaking off', the grassroots Intifada took the military completely by surprise, shifting the conflict back to the occupied territories.",
                  year: 1987
                }
              ],
              depth: [
                {
                  id: "q_3_2_d1",
                  question: "What was the specific name of the 1978 Palestinian terror attack, where a hijacked bus resulted in 38 Israeli civilian deaths?",
                  answer: "The Coastal Road Massacre",
                  explanation: "The Coastal Road Massacre deeply traumatised the Israeli public and convinced the government that a buffer zone inside Lebanon was required.",
                  year: 1978
                },
                {
                  id: "q_3_2_d2",
                  question: "Who was the newly elected Lebanese Christian President whose assassination in September 1982 triggered the Phalangist militias' revenge?",
                  answer: "Bashir Gemayel",
                  explanation: "Bashir Gemayel was a close ally of Israel, and his sudden assassination shattered Ariel Sharon's strategic plan of a formal peace treaty.",
                  year: 1982
                },
                {
                  id: "q_3_2_d3",
                  question: "Who was the Israeli Prime Minister who authorised the 1982 invasion of Lebanon, but who resigned in deep depression?",
                  answer: "Menachem Begin",
                  explanation: "Menachem Begin, deeply affected by the mounting death toll of Israeli soldiers and the daily protests, stepped down in 1983.",
                  year: 1982
                },
                {
                  id: "q_3_2_d4",
                  question: "What was the specific Arabic acronym for the underground, grassroots leadership committee that coordinated the First Intifada?",
                  answer: "UNLU",
                  explanation: "The Unified National Leadership of the Uprising was highly effective because it decentralised the rebellion, making it impossible to decapitate.",
                  year: 1987
                },
                {
                  id: "q_3_2_d5",
                  question: 'Who was the Israeli Defence Minister during the First Intifada who controversially ordered troops to use "force, might and beatings"?',
                  answer: "Yitzhak Rabin",
                  explanation: "Yitzhak Rabin's 'Iron Fist' policy severely damaged his international image, but the exhaustion of fighting eventually convinced him to seek peace.",
                  year: 1987
                },
                {
                  id: "q_3_2_d6",
                  question: "Which former leader of the militant Stern Gang served as the hardline Prime Minister of Israel during the First Intifada and the 1991 Madrid Peace Conference?",
                  answer: "Yitzhak Shamir",
                  explanation: "Yitzhak Shamir was a hardline Likud politician who had previously co-led the underground Stern Gang. As Prime Minister, he strongly opposed territorial compromise and was pressured by the US to attend the 1991 Madrid Conference.",
                  year: 1991
                }
              ]
            },
            {
              id: "subtopic_3_3",
              embedVideo: "https://youtu.be/nXddsCeaCDw",
              title: "Topic 3.3: Attempts at a solution, 1974\u201395",
              standard: [
                {
                  id: "q_3_3_s1",
                  question: "In December 1988, Yasser Arafat made a historic speech renouncing terrorism at a special session of the UN General Assembly held in which Swiss city?",
                  answer: "Geneva",
                  explanation: "Arafat's public renunciation of terrorism successfully opened the door for direct dialogue with the American government.",
                  year: 1988
                },
                {
                  id: "q_3_3_s2",
                  question: "By renouncing terrorism, Arafat accepted the existence of Israel and officially endorsed a solution based on how many states?",
                  answer: "A two-state solution",
                  explanation: "By officially accepting UN Resolution 242 and the 'two-state solution', the PLO shifted its goal from the destruction of Israel to establishing a Palestinian state.",
                  year: 1988
                },
                {
                  id: "q_3_3_s3",
                  question: "Which global ideological conflict officially ended in December 1991, removing a major source of funding and weapons for the PLO and Arab states?",
                  answer: "The Cold War",
                  explanation: "The end of the Cold War left the USA as the undisputed global superpower, meaning Arab states could no longer rely on the USSR for protection.",
                  year: 1991
                },
                {
                  id: "q_3_3_s4",
                  question: "In August 1990, Iraqi dictator Saddam Hussein invaded which oil-rich neighbouring country, sparking a massive international crisis?",
                  answer: "Kuwait",
                  explanation: "Saddam Hussein's invasion split the Arab world; while most Arab states joined the US-led coalition, Arafat disastrously chose to support Saddam.",
                  year: 1990
                },
                {
                  id: "q_3_3_s5",
                  question: "What was the name of the 1991 conflict where a US-led coalition successfully expelled Iraqi forces from this invaded country?",
                  answer: "The Gulf War",
                  explanation: "The swift American victory in the 1991 Gulf War demonstrated total US military dominance, creating a window of opportunity for Washington to dictate peace terms.",
                  year: 1991
                },
                {
                  id: "q_3_3_s6",
                  question: "Emerging as the sole superpower, the USA co-sponsored a major Middle East peace conference in November 1991 in which Spanish capital city?",
                  answer: "Madrid",
                  explanation: "Co-sponsored by the US and the USSR, this 1991 conference was groundbreaking as it was the first time Israelis and Palestinians sat at the same table.",
                  year: 1991
                },
                {
                  id: "q_3_3_s7",
                  question: "Frustrated by the lack of progress in public talks, Israeli and PLO negotiators began secret, back-channel meetings in 1993 in which European capital city?",
                  answer: "Oslo",
                  explanation: "Secret back-channel talks in Norway allowed Israeli and PLO negotiators to speak frankly and make painful compromises away from the media spotlight.",
                  year: 1993
                },
                {
                  id: "q_3_3_s8",
                  question: "On the lawn of the White House in September 1993, what historic physical gesture did Rabin and Arafat share?",
                  answer: "A handshake",
                  explanation: "The highly televised handshake between former bitter enemies Yitzhak Rabin and Yasser Arafat symbolised mutual recognition.",
                  year: 1993
                },
                {
                  id: "q_3_3_s9",
                  question: "The 1993 agreement led to the creation of a new governing body to administer parts of the West Bank and Gaza; what was its name?",
                  answer: "Palestinian National Authority (PNA)",
                  explanation: "The Oslo Accords established the Palestinian National Authority (PNA) to provide limited self-government.",
                  year: 1993
                },
                {
                  id: "q_3_3_s10",
                  question: "In October 1994, becoming only the second Arab state to do so, which neighbouring country signed a full peace treaty with Israel?",
                  answer: "Jordan",
                  explanation: "Encouraged by the PLO's agreements and the promise of US debt relief, King Hussein signed a formal peace treaty with Israel.",
                  year: 1994
                }
              ],
              depth: [
                {
                  id: "q_3_3_d1",
                  question: "Who was the US Secretary of State who made eight intense diplomatic trips to force the parties to attend the 1991 Madrid Conference?",
                  answer: "James Baker",
                  explanation: "James Baker used the momentum of the Gulf War to aggressively pressure both Israelis and Arabs, demonstrating the sheer diplomatic force of the USA.",
                  year: 1991
                },
                {
                  id: "q_3_3_d2",
                  question: "Who was the Norwegian Foreign Minister who hosted and mediated the top-secret back-channel talks in 1992-1993?",
                  answer: "Johan J\xF8rgen Holst",
                  explanation: "Johan J\xF8rgen Holst provided the secluded, pressure-free environment in Norway absolutely essential for building personal trust.",
                  year: 1993
                },
                {
                  id: "q_3_3_d3",
                  question: "Under the 1995 Oslo II agreement, exactly what percentage of the West Bank was designated as 'Area A' (under full Palestinian civil and military control)?",
                  answer: "3 percent",
                  explanation: "This tiny fraction demonstrated how little physical territory Israel was initially willing to cede, fuelling massive Palestinian frustration.",
                  year: 1995
                },
                {
                  id: "q_3_3_d4",
                  question: "On the night he was assassinated in November 1995, what specific song had Yitzhak Rabin just finished singing to a crowd in Tel Aviv?",
                  answer: "The Song of Peace (Shir LaShalom)",
                  explanation: "Singing Shir LaShalom (Song of Peace) was a highly emotional moment for Rabin, making his murder moments later a traumatic national event.",
                  year: 1995
                },
                {
                  id: "q_3_3_d5",
                  question: "What was the surname of the Israeli religious extremist who assassinated Yitzhak Rabin?",
                  answer: "Yigal Amir",
                  explanation: "Yigal Amir's bullets shattered the Israeli political consensus, empowering hardliners and fundamentally derailing the Oslo Accords.",
                  year: 1995
                },
                {
                  id: "q_3_3_d6",
                  question: "Which Soviet leader's reforms ended the Cold War, halted military aid to Arab states, and co-sponsored the 1991 Madrid Peace Conference?",
                  answer: "Mikhail Gorbachev",
                  explanation: "Mikhail Gorbachev introduced glasnost and perestroika, ending the Cold War. As Soviet influence collapsed, the USSR cut off military funding to Arab states like Syria and co-sponsored the landmark 1991 Madrid Peace Conference with the USA.",
                  year: 1991
                },
                {
                  id: "q_3_3_d7",
                  question: "Which US President leveraged victory in the 1991 Gulf War and threatened to withhold $10 billion in loan guarantees to force Israel to attend the Madrid Peace Conference?",
                  answer: "George H.W. Bush",
                  explanation: "George H.W. Bush used the diplomatic capital gained from defeating Iraq in the Gulf War to push for a regional peace settlement. He took a tough stance against Israeli settlement expansion, forcing Prime Minister Yitzhak Shamir to the negotiating table in Madrid.",
                  year: 1991
                },
                {
                  id: "q_3_3_d8",
                  question: "Which founding member of Fatah and future Palestinian President was the key coordinator of the secret PLO negotiations in Norway that culminated in the 1993 Oslo Accords?",
                  answer: "Mahmoud Abbas (Abu Mazen)",
                  explanation: "Mahmoud Abbas (also known as Abu Mazen) was a key Fatah diplomat who directed the back-channel negotiations in Oslo behind the scenes, signing the Declaration of Principles alongside Shimon Peres in Washington.",
                  year: 1993
                }
              ]
            }
          ]
        }
      ];
      var EXAM_SKILLS_DATA4 = {
        "1.1a": {
          topicCode: "1.1",
          question: "Explain the importance of the bombing of the King David Hotel for the end of the British Mandate.",
          clue1: "Think about the impact on British public opinion and morale back home.",
          clue2: "Think about the financial/military cost and Britain's decision to hand the problem to the UN.",
          answer: "<strong>Point 1:</strong> The bombing was highly important because it destroyed British public morale. The death of 91 people, including British administrators, generated massive outrage back in Britain, leading to heavy domestic pressure on the government to bring their soldiers home rather than continuing to fight a bloody Jewish insurgency.<br><br><strong>Point 2:</strong> It was also important because it proved the Mandate was unworkable. The severity of the Irgun attack highlighted that the 100,000 British troops stationed there could not keep the peace, convincing the exhausted British government to give up and hand the Palestine problem over to the UN in February 1947."
        },
        "1.1b": {
          topicCode: "1.1",
          question: "Explain the importance of UN Resolution 181 for the creation of Israel.",
          clue1: "Think about the international legal recognition it gave to the Zionist cause.",
          clue2: "Think about how the Arab rejection of it triggered the 1948 civil war.",
          answer: "<strong>Point 1:</strong> UN Resolution 181 was important because it provided international legal backing for a Jewish state. By voting to partition Palestine and allocate 55% of the land to the Jews, the international community officially endorsed the Zionist dream, giving David Ben-Gurion the legitimacy to declare the State of Israel in May 1948.<br><br><strong>Point 2:</strong> It was also important because it directly triggered the 1948\u201349 Arab-Israeli War. Because the Arab states and Palestinian leadership completely rejected the partition plan as unfair, violence immediately broke out, forcing the Jewish forces to rapidly organise and conquer their designated territory to ensure the new state survived."
        },
        "1.2a": {
          topicCode: "1.2",
          question: "Explain the importance of the creation of the Israeli Defence Forces for the survival of the new state of Israel.",
          clue1: "Think about how it united divided paramilitary groups under one central command.",
          clue2: "Think about the role of conscription in fighting the Arab armies.",
          answer: "<strong>Point 1:</strong> The creation of the IDF was important because it united various rival Jewish paramilitary groups. By bringing together the Haganah, Irgun, and Lehi under a single, central command structure, David Ben-Gurion prevented an internal Jewish civil war and ensured Israel could fight a co-ordinated defence.<br><br><strong>Point 2:</strong> It was also important because it allowed Israel to rapidly mobilise its population. By introducing mandatory conscription for both men and women, the IDF grew its forces from around 35,000 to over 100,000 troops, giving Israel the numerical strength needed to ultimately defeat the five invading Arab armies in 1948-49."
        },
        "1.3a": {
          topicCode: "1.3",
          question: "Explain the importance of the Suez Crisis (1956) for Israel's security.",
          clue1: "Think about the destruction of Fedayeen bases in the Sinai and the arrival of UN peacekeepers.",
          clue2: "Think about the reopening of the Straits of Tiran for Israel's economy.",
          answer: "<strong>Point 1:</strong> The Suez Crisis was highly important for Israeli security because it successfully stopped cross-border terrorism for a decade. By rapidly conquering the Sinai Peninsula, the IDF destroyed the Fedayeen guerrilla bases; when Israel withdrew, the UN stationed peacekeeping troops (UNEF) on the border, creating a secure buffer zone.<br><br><strong>Point 2:</strong> It was also important because it secured Israel's economic survival. Egypt had previously blockaded the Straits of Tiran, but the outcome of the crisis forced the waterway to be reopened, allowing Israel to safely import vital goods like oil into its southern port of Eilat."
        },
        "2.1a": {
          topicCode: "2.1",
          question: "Explain the importance of the closure of the Straits of Tiran for the outbreak of the Six Day War.",
          clue1: "Think about the economic strangulation of Israel (oil).",
          clue2: "Think about how Israel had previously warned this would be treated as an act of war.",
          answer: "<strong>Point 1:</strong> Nasser's closure of the Straits was important because it threatened Israel with economic strangulation. The blockade cut off Israel's only southern route to the Red Sea via Eilat, stopping vital imports of Iranian oil, which convinced the Israeli government that their national survival was at immediate risk.<br><br><strong>Point 2:</strong> It was also important because it provided Israel with the absolute justification for a pre-emptive strike. Israel had explicitly warned the international community in 1956 that closing the Straits would be treated as an act of war, so when Nasser closed them in May 1967, it directly triggered the Israeli Air Force to launch their devastating surprise attack on June 5th."
        },
        "2.2a": {
          topicCode: "2.2",
          question: "Explain the importance of the occupied territories for Arab-Israeli relations after the Six Day War.",
          clue1: "Think about how the land provided Israel with defensive buffer zones.",
          clue2: "Think about the Arab League's reaction at the Khartoum conference (The 'Three Nos').",
          answer: "<strong>Point 1:</strong> The occupied territories were important because they drastically altered the strategic military balance. By holding the Sinai Peninsula and the Golan Heights, Israel gained massive physical buffer zones, meaning any future Arab invasion would have to cross heavily fortified, difficult terrain before reaching Israeli civilian centres.<br><br><strong>Point 2:</strong> They were also important because they permanently hardened Arab hostility towards Israel. Because Israel refused to return the lands (including the West Bank and Gaza) without a formal peace treaty, the Arab League issued the defiant 'Three Nos' at the Khartoum conference, ensuring decades of diplomatic stalemate and continued conflict."
        },
        "2.3a": {
          topicCode: "2.3",
          question: "Explain the importance of the Yom Kippur War (1973) for diplomatic negotiations in the Middle East.",
          clue1: "Think about how it shattered the myth of Israeli invincibility.",
          clue2: "Think about the involvement of the USA and the 'Oil Weapon'.",
          answer: "<strong>Point 1:</strong> The Yom Kippur War was important because it broke the psychological deadlock. Although Israel won militarily, the initial shock and heavy casualties shattered the myth of Israeli invincibility, while Egypt restored its national pride. This made both sides realise that military force alone could not guarantee permanent security, pushing them towards negotiations.<br><br><strong>Point 2:</strong> It was also important because it forced massive US intervention. The Arab use of the 'Oil Weapon' (the OPEC embargo) caused a global economic crisis, forcing US Secretary of State Henry Kissinger to urgently engage in 'shuttle diplomacy' to stabilise the region, paving the way for the Camp David Accords."
        },
        "3.1a": {
          topicCode: "3.1",
          question: "Explain the importance of Sadat's visit to Israel (1977) for the peace process.",
          clue1: "Think about how addressing the Knesset broke the psychological barrier.",
          clue2: "Think about how it led to the Camp David Accords.",
          answer: "<strong>Point 1:</strong> Sadat's visit was highly important because it shattered the psychological barrier between Arabs and Israelis. By becoming the first Arab leader to travel to Jerusalem and address the Israeli parliament (the Knesset), Sadat officially recognised Israel's right to exist, directly violating the Arab League's 'Three Nos'.<br><br><strong>Point 2:</strong> It was also important because it built the vital trust needed for a formal treaty. By proving to the deeply suspicious Israeli public that Egypt genuinely desired peace, Sadat laid the diplomatic groundwork that allowed US President Jimmy Carter to successfully mediate the Camp David Accords in 1978."
        },
        "3.2a": {
          topicCode: "3.2",
          question: "Explain the importance of PLO activities in Lebanon for Israeli security.",
          clue1: "Think about the creation of 'Fatahland' and cross-border rocket attacks.",
          clue2: "Think about how it provoked the massive 1982 invasion of Lebanon.",
          answer: "<strong>Point 1:</strong> PLO activities in Lebanon were highly important because they created an intolerable border threat for Israel. After being expelled from Jordan, the PLO set up a 'state within a state' in southern Lebanon, using it as a base to launch constant Katyusha rocket attacks and guerrilla raids into northern Israeli farming communities.<br><br><strong>Point 2:</strong> It was also important because it directly provoked full-scale war. The constant security threat, combined with the attempted assassination of an Israeli ambassador, gave Defence Minister Ariel Sharon the justification to launch 'Operation Peace for Galilee' in 1982, an invasion intended to destroy the PLO infrastructure permanently."
        },
        "3.3a": {
          topicCode: "3.3",
          question: "Explain the importance of the end of the Cold War for the peace process in the Middle East.",
          clue1: "Think about how it removed Soviet military and financial backing for Arab states and the PLO.",
          clue2: "Think about how it left the USA as the sole global superpower to broker talks.",
          answer: "<strong>Point 1:</strong> The end of the Cold War was highly important because it cut off vital superpower backing for the PLO and Arab states. With the collapse of the Soviet Union in 1991, Syria and the PLO could no longer rely on Moscow for military aid, financial loans, or diplomatic protection at the UN, forcing Yasser Arafat to adopt a much more pragmatic, peaceful stance.<br><br><strong>Point 2:</strong> It was also important because it left the USA as the unchallenged global superpower. This allowed Washington to aggressively pressure both Israel and Arab nations to attend the Madrid Peace Conference in November 1991, establishing the first direct, face-to-face negotiations between the parties in history."
        },
        "3.3b": {
          topicCode: "3.3",
          question: "Explain the importance of the Oslo Accords (1993) for attempts to find a solution to the conflict in the Middle East.",
          clue1: "Think about the mutual recognition between Israel and the PLO.",
          clue2: "Think about the establishment of the Palestinian National Authority and limited self-government.",
          answer: "<strong>Point 1:</strong> The Oslo Accords were highly important because they achieved historic mutual recognition. By signing the Accords, the government of Israel formally recognized the PLO as the legitimate representative of the Palestinian people, and the PLO recognized Israel's right to exist, ending decades of total rejectionism.<br><br><strong>Point 2:</strong> They were also important because they created the framework for Palestinian self-government. The Accords established the Palestinian National Authority (PNA) to administer civil affairs and security in Gaza and parts of the West Bank, moving the peace process from a theoretical debate to practical, on-the-ground self-rule."
        },
        "p_2018_q3_a": {
          question: "Explain the importance of Nasser for leadership of the Arab world.",
          clue1: "Explain his promotion of Pan-Arabism and how his nationalisation of the Suez Canal made him a hero.",
          clue2: "Explain how this led to the creation of the United Arab Republic (UAR) in 1958.",
          answer: "<strong>Point 1:</strong> Nasser's leadership was important because he championed Pan-Arabism, which aimed to unite Arab countries against Western influence. His bold stance against Western imperialism during the Suez Crisis, especially after nationalising the Suez Canal in 1956, made him a legendary figure across the Arab world.<br><br><strong>Point 2:</strong> It was also important because it led to concrete political unions. His popularity and influence were so great that Syria agreed to merge with Egypt to form the United Arab Republic (UAR) in 1958, demonstrating his role as the undisputed leader of the Arab national movement."
        },
        "p_2019_q3_b": {
          question: "Explain the importance of the actions of the USSR and the USA for the outbreak of the Six Day War (1967).",
          clue1: "Explain how the USSR falsely informed Syria that Israel was massing troops, triggering Nasser to act.",
          clue2: "Explain how US financial and military backing gave Israel confidence.",
          answer: "<strong>Point 1:</strong> The actions of the USSR were highly important because they triggered the immediate crisis. In May 1967, Soviet intelligence falsely informed Egypt and Syria that Israel was massing troops on the Syrian border, which prompted Nasser to mobilize 100,000 troops, expel UN peacekeepers, and blockade the Straits of Tiran.<br><br><strong>Point 2:</strong> The actions of the USA were also important because they shaped Israel's military readiness. While the US tried to resolve the blockade diplomatically, their extensive financial and military backing gave Israel the confidence that they could launch a pre-emptive strike without losing superpower support."
        },
        "p_2020_q3_b": {
          question: "Explain the importance of the Law of Return for the development of the state of Israel.",
          clue1: "Detail how granting citizenship to any Jew worldwide triggered massive demographic expansion.",
          clue2: "Explain how this immigration provided essential manpower for the economy and the IDF.",
          answer: "<strong>Point 1:</strong> The Law of Return (1950) was important because it sparked massive demographic growth. By granting any Jew in the world the legal right to settle in Israel and receive immediate citizenship, it attracted hundreds of thousands of immigrants, including Holocaust survivors and Jewish refugees expelled from Arab lands.<br><br><strong>Point 2:</strong> It was also important because it secured the country's military and economic survival. The influx of new citizens provided the essential manpower needed to build a viable economy, settle border areas, and fill the reserves of the newly created Israeli Defence Forces (IDF) for national defence."
        },
        "p_2020_q3_c": {
          question: "Explain the importance of Kissinger\u2019s \u2018shuttle diplomacy\u2019 for diplomatic negotiations in the Middle East.",
          clue1: "Explain how Kissinger flying between capitals secured disengagement treaties after the Yom Kippur War.",
          clue2: "Explain how this enabled the reopening of the Suez Canal and laid the groundwork for Camp David.",
          answer: "<strong>Point 1:</strong> Kissinger's shuttle diplomacy was important because it succeeded in separating hostile armies after the 1973 Yom Kippur War. By flying between Tel Aviv, Cairo, and Damascus, Kissinger brokered disengagement treaties (like Sinai I and Sinai II), reducing the risk of a new war.<br><br><strong>Point 2:</strong> It was also important because it brought Egypt into the American diplomatic orbit, bypassing the Soviets. This process reopened the Suez Canal in 1975 and established the trust and diplomatic channels that directly laid the groundwork for the 1978 Camp David Accords."
        },
        "p_2022_q3_a": {
          question: "Explain the importance of territorial changes in the aftermath of the 1948\u201349 war for Palestinians.",
          clue1: "Detail how Israel expanded beyond the UN partition borders, leaving no land for a Palestinian state.",
          clue2: "Detail how Jordan annexed the West Bank and Egypt took Gaza, creating 700,000 stateless refugees.",
          answer: "<strong>Point 1:</strong> The territorial changes were important because they completely prevented the creation of an independent Palestinian state. Israel captured 78% of former Palestine\u2014well beyond the 55% proposed by UN Resolution 181\u2014leaving no continuous territory under Palestinian control.<br><br><strong>Point 2:</strong> They were also important because they led to the fragmentation and displacement of the population. Jordan annexed the West Bank and East Jerusalem, Egypt occupied Gaza, and over 700,000 Palestinians became stateless refugees, scattered in camps across neighboring countries under UNRWA care."
        },
        "p_2022_q3_b": {
          question: "Explain the importance of the PFLP airplane hijacks (1970) for international attitudes towards the Palestine issue.",
          clue1: "Explain how blowing up international jets succeeded in forcing the world to look at the Palestinian cause.",
          clue2: "Explain how it deteriorated their reputation by associating them with global terrorism.",
          answer: "<strong>Point 1:</strong> The Dawson's Field hijackings were important because they dramatically forced the Palestinian issue onto the global stage. By blowing up three empty Western commercial jets on live television, the PFLP captured international media attention, making it impossible for the world to ignore the refugee crisis.<br><br><strong>Point 2:</strong> However, they were also important because they severely damaged international sympathy for their cause. The spectacular acts of violence associated the Palestinian national movement with global terrorism, alienating many Western governments and turning public opinion against the PLO."
        },
        "p_2022_q3_c": {
          question: "Explain the importance of the Yom Kippur War (1973) for Israel\u2019s relations with Egypt.",
          clue1: "Explain how the surprise Egyptian attack shattered the myth of Israeli invincibility.",
          clue2: "Explain how restoring Egyptian pride enabled Sadat to negotiate peace from a position of strength.",
          answer: "<strong>Point 1:</strong> The war was important because it shattered the myth of Israeli invincibility. Egypt's initial success in crossing the Suez Canal and breaching the Bar Lev Line shocked Israel, making them realize that military occupation of the Sinai could not guarantee security.<br><br><strong>Point 2:</strong> It was also important because it restored Egyptian military honour. This restored pride gave President Sadat the domestic and Arab backing to pursue diplomatic negotiations, enabling him to offer peace to Israel from a position of strength, which ultimately led to the 1979 peace treaty."
        },
        "p_2023_q3_a": {
          question: "Explain the importance of the end of the British Mandate (1948) for the creation of Israel.",
          clue1: "Explain how the exhausted British withdrawal created a sudden power vacuum.",
          clue2: "Explain how this allowed Ben-Gurion to declare the State of Israel, triggering the Arab invasion.",
          answer: "<strong>Point 1:</strong> The end of the Mandate was highly important because it created a sudden power vacuum in Palestine. As the last British troops withdrew on May 14, 1948, the legal and administrative authority vanished, leaving the Zionist leadership free to act.<br><br><strong>Point 2:</strong> It was also important because it allowed David Ben-Gurion to immediately declare the establishment of the State of Israel. This declaration was the official realization of the Zionist goal, but it also served as the immediate trigger for the invasion by five Arab armies the next day."
        },
        "p_2023_q3_b": {
          question: "Explain the importance of UN Resolution 242 (1967) for relations between Israel and the Arab world after the Six Day War.",
          clue1: "Explain the 'Land for Peace' formula, and how the ambiguous wording failed to secure peace.",
          clue2: "Explain how the Arab League responded with the 'Three Nos' at Khartoum.",
          answer: "<strong>Point 1:</strong> Resolution 242 was important because it established the 'Land for Peace' framework. It called for the withdrawal of Israeli forces in exchange for Arab recognition of Israel. However, its deliberate ambiguity (the English text omitted 'the' before 'territories') allowed both sides to interpret it differently, preventing a settlement.<br><br><strong>Point 2:</strong> It was also important because it highlighted the diplomatic deadlock. Instead of accepting the resolution, the Arab League issued the Khartoum Resolution ('Three Nos': no peace, no recognition, no negotiation), cementing a state of cold war for the next decade."
        },
        "p_2023_q3_c": {
          question: "Explain the importance of Arafat renouncing terrorism (1988) for attempts to find a solution in the Middle East.",
          clue1: "Detail how his historic speech in Geneva met the preconditions set by the USA.",
          clue2: "Explain how this enabled America to open official diplomatic channels with the PLO.",
          answer: "<strong>Point 1:</strong> Arafat's renunciation of terrorism was important because it marked a major shift in PLO policy. By publicly renouncing violence, recognizing Israel's right to exist, and accepting UN Resolutions 242 and 338, the PLO moved away from its militant past toward diplomacy.<br><br><strong>Point 2:</strong> It was also important because it met the strict preconditions required by the United States. This enabled the US government to open official diplomatic channels with the PLO, bringing the Palestinians into the international peace process, which led to the Oslo Accords."
        },
        "p_2024_q3_a": {
          question: "Explain the importance of Nasser for tension in the Middle East in the years 1955\u201363.",
          clue1: "Detail his signing of the Czech Arms Deal and his nationalisation of the Suez Canal.",
          clue2: "Explain how this enraged Western powers and escalated the Cold War proxy conflict.",
          answer: "<strong>Point 1:</strong> Nasser was highly important because his actions escalated regional military tension. By signing the Czech Arms Deal in 1955 and nationalising the Suez Canal in 1956, he challenged Western hegemony, which directly triggered the Suez Crisis (the joint British, French, and Israeli invasion of Egypt).<br><br><strong>Point 2:</strong> He was also important because he brought the Cold War directly into the Middle East. By aligning Egypt with the Soviet Union, he provoked the US to counter Soviet influence, escalating regional proxy conflicts and turning the Arab-Israeli dispute into a global superpower struggle."
        },
        "p_2024_q3_b": {
          question: "Explain the importance of the Six Day War (1967) for Israel\u2019s security.",
          clue1: "Explain how capturing the Sinai, West Bank, and Golan Heights eliminated immediate threats.",
          clue2: "Explain how these captured lands provided massive physical 'buffer zones' against future invasions.",
          answer: "<strong>Point 1:</strong> The Six Day War was highly important because it eliminated immediate military threats. Israel's pre-emptive air strike destroyed the Egyptian, Syrian, and Jordanian air forces on the ground, proving Israel's qualitative military superiority and securing its airspace.<br><br><strong>Point 2:</strong> It was also important because it gave Israel immense strategic depth. Capturing the Sinai, the West Bank, and the Golan Heights provided Israel with physical buffer zones. Hostile Arab armies were pushed hundreds of miles away from major Israeli cities, making a surprise invasion much harder."
        },
        "p_2024_q3_c": {
          question: "Explain the importance of the Israel-Jordan peace treaty (1994) for peace in the Middle East.",
          clue1: "Explain how it built on the momentum of the Oslo Accords, normalising relations.",
          clue2: "Explain how it secured Israel's longest eastern border, proving bilateral peace was possible.",
          answer: "<strong>Point 1:</strong> The 1994 treaty was important because it built on the momentum of the Oslo Accords. Following Israel's mutual recognition with the PLO, Jordan felt empowered to normalize relations, becoming only the second Arab nation to sign a peace treaty with Israel.<br><br><strong>Point 2:</strong> It was also important because it secured Israel's eastern flank. The treaty resolved long-standing land and water disputes and formally secured Israel's longest border, proving that stable, bilateral peace agreements could be reached between Israel and moderate Arab states."
        }
      };
      var CONSEQUENCE_SKILLS_DATA4 = {
        "1.1a": {
          topicCode: "1.1",
          question: "Explain one consequence of the bombing of the King David Hotel (1946).",
          clue: "Think about how it affected British public opinion and the decision to hand the Mandate to the UN.",
          answer: "One consequence was the end of British resolve to maintain the Mandate. The bombing by the Irgun killed 91 people, which caused massive outrage in Britain and created intense domestic pressure to withdraw troops, leading directly to Britain handing the Palestine problem to the UN in 1947."
        },
        "1.1b": {
          topicCode: "1.1",
          question: "Explain one consequence of UN Resolution 181 (1947).",
          clue: "Think about the outbreak of violence between Arab and Jewish populations.",
          answer: "One consequence was the outbreak of civil war in Palestine. Because the Arab higher committee and Arab states completely rejected the partition plan, immediate fighting broke out between Jewish and Arab communities, which escalated into the first Arab-Israeli War after the British withdrew."
        },
        "1.2a": {
          topicCode: "1.2",
          question: "Explain one consequence of the creation of the Israeli Defence Forces (1948).",
          clue: "Think about how it consolidated separate paramilitary groups under a single command.",
          answer: "One consequence was the consolidation and professionalization of Israel's military power. By merging separate Zionist paramilitary groups like the Haganah, Irgun, and Lehi into a single national army, it prevented internal conflict and enabled a coordinated, successful defence against the invading Arab armies."
        },
        "1.2b": {
          topicCode: "1.2",
          question: "Explain one consequence of the Law of Return (1950).",
          clue: "Think about the demographic shift and immigration into Israel.",
          answer: "One consequence was a massive demographic shift and expansion of Israel's population. By giving every Jew in the world the legal right to settle in Israel, it led to a huge wave of immigration (including Holocaust survivors and Jewish refugees from Arab nations) that rapidly built up Israel's economy and military reserves."
        },
        "1.3a": {
          topicCode: "1.3",
          question: "Explain one consequence of the Israeli raid on Gaza in 1955.",
          clue: "Think about how it affected President Nasser and his military alignment.",
          answer: "One consequence was that it pushed Egypt to seek Soviet arms. The devastating Israeli attack on Gaza exposed the weakness of Egypt's military under Nasser, convincing him that he could not rely on Western powers for defence and leading directly to the 1955 Czechoslovak/Soviet arms deal."
        },
        "1.3b": {
          topicCode: "1.3",
          question: "Explain one consequence of the Suez Crisis (1956).",
          clue: "Think about the deployment of UNEF peacekeepers and the reopening of shipping lanes.",
          answer: "One consequence was the temporary security of Israel's southern border. Following the conflict, United Nations peacekeepers (UNEF) were stationed in the Sinai Peninsula, which successfully deterred Palestinian Fedayeen raids and reopened the Straits of Tiran for Israeli shipping via Eilat."
        },
        "2.1a": {
          topicCode: "2.1",
          question: "Explain one consequence of the Cairo Conference (1964).",
          clue: "Think about the establishment of the PLO and the Syrian water diversion plan.",
          answer: "One consequence was the creation of the Palestinian Liberation Organisation (PLO). Arab leaders met in Cairo to coordinate opposition to Israel, which led directly to the establishment of the PLO to represent Palestinian national aspirations and launch guerrilla actions against Israel."
        },
        "2.1b": {
          topicCode: "2.1",
          question: "Explain one consequence of Israel's raid on Samu (1966).",
          clue: "Think about how it escalated tensions between Israel and Jordan, and mobilized Arab sentiment.",
          answer: "One consequence was the escalation of hostility and mobilization toward war. The destructive IDF reprisal raid on the West Bank village of Samu outraged the Jordanian population and severely embarrassed King Hussein, forcing him to sign a mutual defence pact with Egypt, which drew Jordan into the Six Day War."
        },
        "2.2a": {
          topicCode: "2.2",
          question: "Explain one consequence of UN Resolution 242 (1967).",
          clue: "Think about the 'land for peace' framework that became the basis of future talks.",
          answer: "One consequence was the establishment of the 'land for peace' diplomatic formula. By calling for the withdrawal of Israeli forces from occupied territories in exchange for Arab recognition of Israel's right to exist in secure borders, it became the foundation for all subsequent peace negotiations, including Camp David and Oslo."
        },
        "2.2b": {
          topicCode: "2.2",
          question: "Explain one consequence of the expulsion of the PLO from Jordan (1970).",
          clue: "Think about where the PLO moved its base of operations and the effect on that country.",
          answer: "One consequence was the destabilisation of Lebanon. Following 'Black September', the PLO moved its headquarters and armed fighters to southern Lebanon, where they established a 'state within a state' ('Fatahland'), dragging Lebanon into a bloody civil war in 1975."
        },
        "2.3a": {
          topicCode: "2.3",
          question: "Explain one consequence of Israel's consolidation of control of the occupied territories after 1967.",
          clue: "Think about the growth of Jewish settlements and the growth of Palestinian resistance.",
          answer: "One consequence was the growth of Jewish settlements in the West Bank and Gaza. By establishing permanent civilian outposts on occupied land, Israel consolidated its strategic hold but deeply angered the Palestinian population, creating a permanent obstacle to a two-state solution."
        },
        "2.3b": {
          topicCode: "2.3",
          question: "Explain one consequence of the Yom Kippur War (1973).",
          clue: "Think about how the initial Arab military success shattered the myth of Israeli invincibility and led to shuttle diplomacy.",
          answer: "One consequence was the start of diplomatic engagement and peace negotiations. Although Israel won militarily, the initial Egyptian and Syrian success shattered the myth of Israeli invincibility and restored Arab pride, forcing both sides to realize military face could not guarantee security and prompting the US to initiate 'shuttle diplomacy'."
        },
        "3.1a": {
          topicCode: "3.1",
          question: "Explain one consequence of the 1973 oil crisis.",
          clue: "Think about how OPEC used the oil embargo and its impact on Western economies.",
          answer: "One consequence was a global economic recession. In response to Western support for Israel during the Yom Kippur War, OPEC members implemented an oil embargo that quadrupled oil prices, causing severe inflation, fuel shortages, and economic hardship in the USA and Europe."
        },
        "3.1b": {
          topicCode: "3.1",
          question: "Explain one consequence of President Sadat's visit to Israel (1977).",
          clue: "Think about how it broke the diplomatic taboo and led to the Camp David Accords.",
          answer: "One consequence was the signing of the Camp David Accords. By travelling to Jerusalem and addressing the Knesset, Sadat broke the Arab taboo of refusing to recognize Israel, which built the trust necessary for US President Jimmy Carter to broker the 1978 peace accords."
        },
        "3.2a": {
          topicCode: "3.2",
          question: "Explain one consequence of the Israeli invasion of Lebanon (1982).",
          clue: "Think about the expulsion of the PLO from Beirut and the rise of Hezbollah.",
          answer: "One consequence was the rise of Hezbollah. Although Israel successfully forced Yasser Arafat and the PLO leadership to leave Beirut, the military occupation of southern Lebanon radicalized the local Shia population, leading directly to the creation of Hezbollah with Iranian backing."
        },
        "3.2b": {
          topicCode: "3.2",
          question: "Explain one consequence of the First Palestinian Intifada (1987\u201393).",
          clue: "Think about how it damaged Israel's international reputation and forced Rabin to seek peace.",
          answer: "One consequence was severe damage to Israel's international reputation. Television broadcasts showing heavily armed IDF soldiers using harsh measures against stone-throwing youths turned global opinion against the occupation, ultimately convincing Yitzhak Rabin that a military solution was impossible."
        },
        "3.3a": {
          topicCode: "3.3",
          question: "Explain one consequence of Yasser Arafat's renunciation of terrorism at the UN (1988).",
          clue: "Think about the opening of official dialogue with the USA.",
          answer: "One consequence was the opening of official dialogue with the USA. By renouncing terrorism and officially accepting the 'two-state solution', Arafat met the strict preconditions set by the American government, meaning the USA formally recognised the PLO as a legitimate negotiating partner for the first time."
        },
        "3.3b": {
          topicCode: "3.3",
          question: "Explain one consequence of the Oslo Accords (1993).",
          clue: "Think about what was set up for Palestinian self-government.",
          answer: "One consequence was the creation of the Palestinian National Authority (PNA). Israel agreed to withdraw its military from areas like Jericho and Gaza, allowing Yasser Arafat to return from exile and giving the Palestinians limited self-government for the first time."
        },
        "p_2018_q1": {
          topicCode: "1.2",
          question: "Explain one consequence of the territorial changes following the 1948-49 Arab-Israeli war.",
          clue: "Think about the impact on the Palestinian Arabs (the Nakba) and the refugee crisis, or Israel's expansion beyond the partition borders.",
          answer: "One consequence was the mass displacement of over 700,000 Palestinian Arabs (the Nakba), who fled their homes and became stateless refugees in neighbouring countries like Jordan and Lebanon. Additionally, Israel expanded its territory by capturing 78% of historic Palestine, while Jordan annexed the West Bank and Egypt took control of Gaza, leaving the Palestinians without a homeland."
        },
        "p_2019_q1": {
          topicCode: "3.3",
          question: "Explain one consequence of the Oslo Accords (1993).",
          clue: "Think about the diplomatic breakthrough (mutual recognition and the PNA) or the violent backlash from extremists.",
          answer: "One consequence was the historic mutual recognition between Israel and the PLO, which led directly to the creation of the Palestinian National Authority (PNA). This gave Palestinians limited self-rule in Gaza and Jericho for the first time, though it also triggered a violent backlash from Hamas suicide bombings and right-wing Jewish extremists who opposed the accords."
        },
        "p_2020_q1": {
          topicCode: "3.2",
          question: "Explain one consequence of the Palestinian Intifada (1987\u201393).",
          clue: "Think about the international condemnation of Israel's response, the rise of Hamas, or the push toward the Oslo negotiations.",
          answer: "One consequence was severe damage to Israel's international reputation, as global media broadcasted images of IDF soldiers using harsh 'Iron Fist' tactics against stone-throwing youths. This international pressure, combined with the rise of Hamas, ultimately forced both Israeli and PLO leadership to recognize a military stalemate and begin peace talks."
        },
        "p_2023_q1": {
          topicCode: "2.2",
          question: "Explain one consequence of the terrorist attack at the Munich Olympics (1972).",
          clue: "Think about the negative media attention for the Palestinian cause, or Israel's covert Mossad campaign (Operation Wrath of God).",
          answer: "One consequence was the launching of 'Operation Wrath of God' by Israel, a covert Mossad assassination campaign to track down and eliminate Black September operatives across Europe. Additionally, the attack shocked a live television audience of millions, bringing immense media attention to the Palestinian cause but heavily linking it to global terrorism."
        },
        "p_2024_q1": {
          topicCode: "3.1",
          question: "Explain one consequence of President Sadat of Egypt\u2019s visit to Israel (1977).",
          clue: "Think about breaking the psychological barrier and the 'Three Nos', or paving the way for the Camp David Accords.",
          answer: "One consequence was the breaking of the long-standing Arab diplomatic deadlock and the 'Three Nos' of Khartoum. By visiting Jerusalem and addressing the Knesset, Sadat officially recognized Israel, which built the trust necessary for US President Jimmy Carter to broker the Camp David Accords in 1978."
        }
      };
      var NARRATIVE_SKILLS_DATA4 = {
        "n1": {
          keywords: ["Resolution 181", "Deir Yassin", "British Mandate", "State of Israel", "civil war"],
          question: "Write a narrative account analysing the key events of 1947\u201348 that led to the outbreak of the Arab-Israeli War.",
          events: [
            "The British Mandate ends and the State of Israel is declared.",
            "UN Resolution 181 (1947) partitions Palestine.",
            "Civil war breaks out and the Deir Yassin massacre occurs."
          ],
          correct: [1, 2, 0],
          model: "In November 1947, the UN passed Resolution 181, which recommended the partition of Palestine into Jewish and Arab states. <span class='highlight-link'>This provoked</span> immense anger among the Arab population who rejected the plan. <span class='highlight-link'>As a direct consequence</span>, a civil war broke out within Palestine, characterized by fierce fighting and atrocities such as the attack on Deir Yassin by Irgun fighters in April 1948. The violence <span class='highlight-word'>intensified</span> the refugee crisis and hardened attitudes on both sides. <span class='highlight-link'>This ultimately led to</span> the neighboring Arab states invading Palestine on May 15, 1948, immediately after the British Mandate ended and David Ben-Gurion declared the creation of the State of Israel, <span class='highlight-word'>triggering</span> the first Arab-Israeli War."
        },
        "n2": {
          keywords: ["Gaza", "Czechoslovakia", "Aswan High Dam", "Suez Canal", "Protocol of S\xC3\xA8vres"],
          question: "Write a narrative account analysing the key events of 1955\u201356 that led to the Suez Crisis.",
          events: [
            "Nasser nationalises the Suez Canal, leading to the Protocol of S\xE8vres.",
            "The USA and Britain withdraw funding for the Aswan High Dam.",
            "Israeli attacks on Gaza (1955) prompt Nasser to buy Soviet arms."
          ],
          correct: [2, 1, 0],
          model: "In early 1955, Israel launched a severe attack on the Egyptian army headquarters in Gaza. <span class='highlight-link'>This convinced</span> President Nasser that his military was weak and <span class='highlight-word'>provoked</span> him to sign a massive arms deal with Czechoslovakia to secure Soviet weapons. <span class='highlight-link'>As a result</span> of Egypt allying with the Soviet bloc, the USA and Britain decided to withdraw their financial support for Nasser's flagship project, the Aswan High Dam. <span class='highlight-link'>In retaliation</span>, Nasser nationalised the Suez Canal in July 1956 to use its toll revenues to build the dam. This action severely <span class='highlight-word'>deteriorated</span> relations and threatened British and French interests, <span class='highlight-link'>leading directly to</span> them holding secret meetings with Israel (the Protocol of S\xE8vres) to plan a joint military invasion of Egypt, which <span class='highlight-word'>escalated</span> into the Suez Crisis."
        },
        "n3": {
          keywords: ["Black September", "Coastal Road Massacre", "Operation Litani", "Ariel Sharon", "Operation Peace for Galilee"],
          question: "Write a narrative account analysing the key events in the years 1970\u201382 that led to the Israeli invasion of Lebanon.",
          events: [
            "The PLO is expelled from Jordan and moves to Lebanon.",
            "The attempted assassination of the Israeli ambassador in London sparks Operation Peace for Galilee.",
            "PLO cross-border raids and the Coastal Road Massacre trigger Operation Litani."
          ],
          correct: [0, 2, 1],
          model: "Following the events of Black September in 1970, the PLO was <span class='highlight-word'>forced</span> out of Jordan and moved its headquarters to southern Lebanon. <span class='highlight-link'>This enabled</span> them to establish a 'state within a state' and launch constant cross-border rocket attacks and raids into northern Israel. <span class='highlight-link'>This escalated tensions</span>, culminating in the 1978 Coastal Road Massacre, which <span class='highlight-word'>provoked</span> Israel to launch Operation Litani to push the PLO back. Despite a UN buffer zone, PLO attacks persisted. <span class='highlight-link'>The final trigger occurred</span> when a Palestinian splinter group attempted to assassinate the Israeli ambassador in London in June 1982. <span class='highlight-link'>This provided</span> Israeli Defence Minister Ariel Sharon with the justification to launch a full-scale invasion of Lebanon, known as Operation Peace for Galilee, aiming to destroy the PLO permanently."
        },
        "n4": {
          keywords: ["Yasser Arafat", "Gulf War", "Yitzhak Rabin", "Norway", "Oslo Accords"],
          question: "Write a narrative account analysing the key events of 1988\u201393 that led to the Oslo Accords.",
          events: [
            "Arafat renounces terrorism and accepts a two-state solution at the UN (1988).",
            "Secret back-channel meetings in Norway lead to the Declaration of Principles.",
            "The Cold War ends and the USA emerges as the sole superpower pushing for peace."
          ],
          correct: [0, 2, 1],
          model: "In 1988, Yasser Arafat made a historic speech at the UN in Geneva where he renounced terrorism and accepted a two-state solution. <span class='highlight-link'>This enabled</span> the USA to officially open dialogue with the PLO for the first time. <span class='highlight-link'>This diplomatic shift was intensified</span> by the end of the Cold War and the 1991 Gulf War, which <span class='highlight-word'>resulted in</span> the PLO losing Soviet funding and Arab support. <span class='highlight-link'>As a consequence</span>, a weakened Arafat and a more pragmatic Israeli government (led by Yitzhak Rabin) were both <span class='highlight-word'>forced</span> to seek a compromise. <span class='highlight-link'>This ultimately led to</span> secret, back-channel negotiations in Norway, culminating in the historic 1993 Oslo Accords and the creation of the Palestinian National Authority."
        },
        "pn1": {
          keywords: ["Yom Kippur War", "Henry Kissinger", "Suez Canal", "Jerusalem", "Anwar Sadat"],
          question: "Write a narrative account analysing Egypt\u2019s relations with Israel in the years 1973-77.",
          events: [
            "Egypt and Syria launch the surprise Yom Kippur War (1973) against Israel.",
            "Henry Kissinger conducts 'shuttle diplomacy' to broker disengagement agreements.",
            "President Anwar Sadat makes his historic visit to Jerusalem to address the Knesset (1977)."
          ],
          correct: [0, 1, 2],
          model: "Relations between Egypt and Israel began in deep hostility when Sadat launched a surprise offensive in October 1973 (the Yom Kippur War). <span class='highlight-link'>Although Israel recovered militarily</span>, the early Arab successes restored Egyptian pride, which <span class='highlight-word'>enabled</span> future negotiations. The war threatened superpower conflict, which <span class='highlight-word'>forced</span> the USA to intervene, sending Henry Kissinger to conduct 'shuttle diplomacy'. <span class='highlight-link'>This resulted in</span> disengagement agreements and the reopening of the Suez Canal in 1975. <span class='highlight-link'>However, a diplomatic stalemate persisted</span>. To break the deadlock, President Sadat made his historic visit to Jerusalem in November 1977, addressing the Knesset. <span class='highlight-link'>This move broke the psychological barrier</span>, directly leading to the Camp David negotiations."
        },
        "pn2": {
          keywords: ["Dawson's Field", "King Hussein", "Black September", "Lebanon", "Munich Olympics"],
          question: "Write a narrative account analysing the key developments in the Palestinian issue in the years 1970\u201372.",
          events: [
            "PFLP hijackings at Dawson's Field trigger Black September in Jordan (1970).",
            "The PLO is expelled from Jordan and moves its headquarters to Lebanon.",
            "Black September terrorists attack the Munich Olympics, killing 11 Israelis (1972)."
          ],
          correct: [0, 1, 2],
          model: "In September 1970, the PFLP hijacked four international civilian aircraft and blew up three of them at Dawson's Field in Jordan. <span class='highlight-link'>This direct challenge</span> to Jordan's sovereignty <span class='highlight-word'>provoked</span> King Hussein to launch a massive military assault against PLO forces in his country, a conflict known as Black September. <span class='highlight-link'>As a result</span>, the PLO was expelled from Jordan and forced to move its headquarters to Lebanon. <span class='highlight-link'>Furious at their defeat</span>, extreme Palestinian factions formed the 'Black September' splinter group. Seeking to recapture global attention for the Palestinian cause, they launched the horrific attack on Israeli athletes at the 1972 Munich Olympics, which <span class='highlight-word'>resulted in</span> the deaths of 11 Israelis and shocked the international community."
        },
        "pn3": {
          keywords: ["Norway", "Yasser Arafat", "Yitzhak Rabin", "PNA", "Oslo II"],
          question: "Write a narrative account analysing the key developments in the negotiations between Israel and the Palestinians in the years 1993\u201395.",
          events: [
            "Secret back-channel talks are held in Norway.",
            "Arafat and Rabin sign the Oslo I Accord, creating the PNA (1993).",
            "The Oslo II Accord is signed, dividing the West Bank into Areas A, B, and C (1995)."
          ],
          correct: [0, 1, 2],
          model: "Negotiations began in secrecy during early 1993, when Israeli and PLO representatives bypassed public stalemates to hold back-channel talks in Norway. <span class='highlight-link'>These secret meetings built</span> the mutual trust that <span class='highlight-word'>enabled</span> the signing of the Oslo I Accords in September 1993, where Yasser Arafat and Yitzhak Rabin shared a historic handshake. <span class='highlight-link'>This agreement established</span> the Palestinian National Authority (PNA) for limited self-rule in Gaza and Jericho. <span class='highlight-link'>Building on this momentum</span>, the parties signed the Oslo II Accord in September 1995. This agreement <span class='highlight-word'>resulted in</span> dividing the West Bank into Areas A, B, and C with different levels of Palestinian and Israeli administrative and security control."
        },
        "pn4": {
          keywords: ["armistice", "IDF", "Law of Return", "immigration", "78%"],
          question: "Write a narrative account analysing the developments in Israel in the years 1949\u201354.",
          events: [
            "Israel gains territory from the 1948 war, creating long, hostile borders.",
            "Israel consolidates its military into the single Israeli Defence Forces (IDF).",
            "Israel passes the Law of Return, triggering mass Jewish immigration (1950)."
          ],
          correct: [0, 1, 2],
          model: "Following the armistice agreements of 1949, Israel emerged with 78% of former Palestine, significantly more territory than the UN partition plan had allocated. <span class='highlight-link'>However, these new borders</span> were long, poorly defined, and surrounded by hostile Arab nations, which <span class='highlight-word'>triggered</span> frequent cross-border infiltrations. <span class='highlight-link'>To secure this territory</span>, Israel rapidly consolidated its military, formally establishing the Israeli Defence Forces (IDF) under a single command. <span class='highlight-link'>To support the IDF</span> and build the state's population for defence, Israel passed the Law of Return in 1950. <span class='highlight-link'>This policy resulted in</span> massive immigration, adding hundreds of thousands of new citizens who provided essential manpower for both the economy and the IDF, enabling Israel to protect its new state."
        },
        "pn5": {
          keywords: ["Black September", "Fatahland", "Coastal Road Massacre", "Operation Litani", "Operation Peace for Galilee"],
          question: "Write a narrative account analysing the key developments of the PLO in Lebanon in the years 1970\u201382.",
          events: [
            "The PLO is expelled from Jordan and establishes 'Fatahland' in Lebanon.",
            "PLO cross-border rocket attacks and raids trigger conflicts like Operation Litani.",
            "The attempted assassination of the Israeli ambassador in London sparks Operation Peace for Galilee (1982)."
          ],
          correct: [0, 1, 2],
          model: "In 1970, following the Black September conflict, the PLO was expelled from Jordan. <span class='highlight-link'>This forced</span> Yasser Arafat and thousands of fighters to move their base to southern Lebanon, establishing a 'state within a state' known as 'Fatahland'. <span class='highlight-link'>From Lebanon, the PLO launched</span> cross-border rocket attacks and guerrilla raids into northern Israel, including the deadly 1978 Coastal Road Massacre. <span class='highlight-link'>These attacks escalated tensions</span> and provoked Israel's initial incursion (Operation Litani) in 1978. <span class='highlight-link'>As the threat persisted</span>, an attempted assassination of the Israeli ambassador in London in June 1982 served as the final trigger. This <span class='highlight-word'>provoked</span> Israel to launch Operation Peace for Galilee, a full-scale invasion of Lebanon that besieged Beirut and successfully forced the PLO to evacuate to Tunisia."
        }
      };
      var PAST_PAPERS_DATA2 = [
        {
          id: "2018_summer",
          title: "Summer 2018 Past Paper",
          year: "2018",
          q1: {
            type: "consequence_8",
            question: "Explain two consequences of the territorial changes following the 1948-49 Arab-Israeli war. (8 marks)",
            clue: "Think about the impact on the Palestinian Arabs (the Nakba) and the refugee crisis. Also think about the impact on the map, such as Israel's expansion and Jordan taking the West Bank.",
            model: "One consequence was the displacement of over 700,000 Palestinian Arabs (the Nakba), who became stateless refugees fleeing into neighbouring Jordan, Lebanon, and Gaza, creating a massive humanitarian crisis. Another consequence was the expansion of Israel's borders beyond the original UN partition boundaries, with Israel capturing 78% of Palestine, while Jordan annexed the West Bank and East Jerusalem, and Egypt took control of the Gaza Strip, leaving no territory for a Palestinian state."
          },
          q2: {
            type: "narrative",
            question: "Write a narrative account analysing Egypt\u2019s relations with Israel in the years 1973-77. (8 marks)",
            stimulus: ["Yom Kippur War (1973)", "President Sadat"],
            clue: "Start with the surprise attack of the Yom Kippur War. Explain how this led to US/Soviet intervention and Kissinger's 'shuttle diplomacy'. Link this to how the stalemate ultimately prompted Sadat\u2019s historic 1977 visit to Jerusalem to break the deadlock.",
            model: "Relations between Egypt and Israel began in deep hostility when Sadat launched a surprise offensive in October 1973 (the Yom Kippur War). <span class='highlight-link'>Although Israel recovered militarily</span>, the early Arab successes restored Egyptian pride, which <span class='highlight-word'>enabled</span> future negotiations. The war threatened superpower conflict, which <span class='highlight-word'>forced</span> the USA to intervene, sending Henry Kissinger to conduct 'shuttle diplomacy'. <span class='highlight-link'>This resulted in</span> disengagement agreements and the reopening of the Suez Canal in 1975. <span class='highlight-link'>However, a diplomatic stalemate persisted</span>. To break the deadlock, President Sadat made his historic visit to Jerusalem in November 1977, addressing the Knesset. <span class='highlight-link'>This move broke the psychological barrier</span>, directly leading to the Camp David negotiations."
          },
          q3: {
            type: "importance_choice",
            question: "Explain two of the following: (16 marks)",
            choices: [
              {
                id: "2018_q3_a",
                title: "The importance of Nasser for leadership of the Arab world.",
                clue: "Explain his promotion of Pan-Arabism and how his nationalisation of the Suez Canal made him a hero, leading to the creation of the UAR in 1958.",
                model: "<strong>Point 1:</strong> Nasser's leadership was important because he championed Pan-Arabism, which aimed to unite Arab countries against Western influence. His bold stance against Western imperialism during the Suez Crisis, especially after nationalising the Suez Canal in 1956, made him a legendary figure across the Arab world.<br><br><strong>Point 2:</strong> It was also important because it led to concrete political unions. His popularity and influence were so great that Syria agreed to merge with Egypt to form the United Arab Republic (UAR) in 1958, demonstrating his role as the undisputed leader of the Arab national movement."
              },
              {
                id: "2018_q3_b",
                title: "The importance of the occupied territories for Arab\u2013Israeli relations after the Six Day War (1967).",
                clue: "Explain how taking the West Bank, Gaza, and Golan Heights gave Israel a military buffer zone, but provoked the Arab League to issue the 'Three Nos' and demand 'Land for Peace' (UN Resolution 242).",
                model: "<strong>Point 1:</strong> The occupied territories were important because they fundamentally altered the military dynamic, giving Israel strategic buffer zones like the Sinai, West Bank, and Golan Heights. This enhanced Israel's security, but placed millions of Palestinians under Israeli military occupation, fueling resentment.<br><br><strong>Point 2:</strong> It was also important because it hardened Arab diplomatic resistance, prompting the Arab League to issue the 'Three Nos' (no peace, no negotiation, no recognition) at Khartoum, and leading to UN Resolution 242's 'Land for Peace' formula, which became the disputed basis for all future negotiations."
              },
              {
                id: "2018_q3_c",
                title: "The importance of the end of the Cold War for attempts to find a solution in the Middle East.",
                clue: "Explain how the collapse of the USSR stripped the PLO of its main source of funding and weapons, which forced Arafat to compromise and attend the US-led Madrid Conference.",
                model: "<strong>Point 1:</strong> The end of the Cold War was important because the collapse of the Soviet Union in 1991 stripped the PLO and Syria of their primary military, financial, and diplomatic backer, leaving them isolated and severely weakened.<br><br><strong>Point 2:</strong> It was also important because it left the USA as the sole global superpower, allowing Washington to exert immense diplomatic pressure on both Israel and Arab states, which forced Yasser Arafat to make compromises and participate in the landmark Madrid Peace Conference in 1991."
              }
            ]
          }
        },
        {
          id: "2019_summer",
          title: "Summer 2019 Past Paper",
          year: "2019",
          q1: {
            type: "consequence_8",
            question: "Explain two consequences of the Oslo Accords (1993). (8 marks)",
            clue: "Consequence 1: Think about the diplomatic breakthrough (mutual recognition between the PLO and Israel and the creation of the PNA). Consequence 2: Think about the violent backlash from extremists who felt betrayed (e.g., Hamas bombings and the assassination of Yitzhak Rabin).",
            model: "One consequence was a major diplomatic breakthrough, leading to mutual recognition between Israel and the PLO, and the creation of the Palestinian National Authority (PNA) to provide limited self-rule in Gaza and Jericho. Another consequence was a violent backlash from extremists on both sides; Palestinian militant groups like Hamas launched suicide bombings to derail the peace process, while a right-wing Jewish extremist assassinated Israeli Prime Minister Yitzhak Rabin in 1995."
          },
          q2: {
            type: "narrative",
            question: "Write a narrative account analysing the key developments of the Suez Crisis in 1956. (8 marks)",
            stimulus: ["Nasser", "British and French troops"],
            clue: "Start with Nasser nationalising the Suez Canal in July 1956. Explain how this led to Britain and France colluding with Israel at the Protocol of S\xE8vres. Describe the subsequent invasion of Sinai and the landing of British and French troops, and how international pressure from the USA and USSR ultimately forced a withdrawal, boosting Nasser's prestige.",
            model: "In July 1956, Egyptian President Gamal Abdel Nasser nationalised the Suez Canal, aiming to use its toll revenues to fund the Aswan High Dam after Western financing was withdrawn. <span class='highlight-link'>Enraged by this action</span>, Britain and France colluded with Israel in secret talks, signing the Protocol of S\xE8vres to plan a military response. <span class='highlight-link'>In October 1956</span>, Israel launched a pre-emptive invasion of the Sinai Peninsula. This <span class='highlight-word'>resulted in</span> a pretext for Britain and France to intervene, sending troops to seize the canal under the guise of separating the combatants. <span class='highlight-link'>However, the invasion provoked</span> immense international outrage. The USA, concerned about Cold War escalation, threatened to bankrupt the British economy, which <span class='highlight-word'>forced</span> a ceasefire and a humiliating Anglo-French withdrawal. <span class='highlight-link'>This outcome left</span> Nasser as a Pan-Arab hero and established the canal firmly under Egyptian control."
          },
          q3: {
            type: "importance_choice",
            question: "Explain two of the following: (16 marks)",
            choices: [
              {
                id: "2019_q3_a",
                title: "The importance of the establishment of the Israeli Defence Forces for the protection of the new state of Israel.",
                clue: "Detail how the IDF brought rival militias (like Haganah and Irgun) under a single command, and how the system of conscription gave Israel the troop numbers to survive the 1948 invasion.",
                model: "<strong>Point 1:</strong> The creation of the IDF was important because it united various rival Jewish paramilitary groups. By bringing together the Haganah, Irgun, and Lehi under a single, central command structure, David Ben-Gurion prevented an internal Jewish civil war and ensured Israel could fight a co-ordinated defence.<br><br><strong>Point 2:</strong> It was also important because it allowed Israel to rapidly mobilise its population. By introducing mandatory conscription for both men and women, the IDF grew its forces from around 35,000 to over 100,000 troops, giving Israel the numerical strength needed to ultimately defeat the five invading Arab armies in 1948-49."
              },
              {
                id: "2019_q3_b",
                title: "The importance of the actions of the USSR and the USA for the outbreak of the Six Day War (1967).",
                clue: "Explain how the USSR falsely informed Syria that Israel was massing troops, which triggered Nasser to act. Contrast this with the USA's financial and military backing of Israel.",
                model: "<strong>Point 1:</strong> Soviet actions were important because they triggered the immediate crisis. By falsely telling Egypt in May 1967 that Israel was massing troops on the Syrian border, the USSR provoked Nasser to move Egyptian troops into the Sinai, expel UN peacekeepers, and close the Straits of Tiran.<br><br><strong>Point 2:</strong> US actions were also important because their strong diplomatic and military alliance with Israel, combined with their failure to clear the blockade through international effort, convinced Israel that they had passive US backing to launch a pre-emptive strike on June 5th."
              },
              {
                id: "2019_q3_c",
                title: "The importance of PLO activities in Lebanon (1970-82) for Israeli security.",
                clue: "Explain how the PLO's creation of 'Fatahland' enabled cross-border rocket attacks and raids like the Coastal Road Massacre, which ultimately provoked Israel into launching Operation Peace for Galilee.",
                model: "<strong>Point 1:</strong> PLO activities in Lebanon were important because they created an intolerable border threat for Israel. After being expelled from Jordan, the PLO set up a 'state within a state' in southern Lebanon, using it as a base to launch constant Katyusha rocket attacks and guerrilla raids into northern Israeli farming communities.<br><br><strong>Point 2:</strong> It was also important because it directly provoked full-scale war. The constant security threat, combined with the attempted assassination of an Israeli ambassador, gave Defence Minister Ariel Sharon the justification to launch 'Operation Peace for Galilee' in 1982, an invasion intended to destroy the PLO infrastructure permanently."
              }
            ]
          }
        },
        {
          id: "2020_autumn",
          title: "Autumn 2020 Past Paper",
          year: "2020",
          q1: {
            type: "consequence_8",
            question: "Explain two consequences of the Palestinian Intifada (1987\u201393). (8 marks)",
            clue: "Consequence 1: Think about the international condemnation of Israel's harsh 'Iron Fist' response. Consequence 2: Think about how the grassroots uprising led to the emergence of radical groups like Hamas, or how it pressured both sides into the Oslo negotiations.",
            model: "One consequence was severe international condemnation of Israel's harsh military response, as global media broadcasted images of IDF soldiers using 'Iron Fist' tactics against unarmed Palestinian youths, which damaged Israel's reputation. Another consequence was the radicalisation of the resistance, leading to the founding of Hamas in 1987, but also pressuring Israeli and PLO leadership to recognize that a military stalemate existed, ultimately forcing them to start the secret negotiations that led to the 1993 Oslo Accords."
          },
          q2: {
            type: "narrative",
            question: "Write a narrative account analysing the key developments in the Palestinian issue in the years 1970\u201372. (8 marks)",
            stimulus: ["PFLP airplane hijacks (1970)", "Munich Olympics (1972)"],
            clue: "Explain how the Dawson's Field hijackings resulted in King Hussein expelling the PLO from Jordan (Black September). Link this to how the expelled militants formed extreme splinter groups to gain global attention, culminating in the Munich Olympics attack.",
            model: "In September 1970, the PFLP hijacked four international civilian aircraft and blew up three of them at Dawson's Field in Jordan. <span class='highlight-link'>This direct challenge</span> to Jordan's sovereignty <span class='highlight-word'>provoked</span> King Hussein to launch a massive military assault against PLO forces in his country, a conflict known as Black September. <span class='highlight-link'>As a result</span>, the PLO was expelled from Jordan and forced to move its headquarters to Lebanon. <span class='highlight-link'>Furious at their defeat</span>, extreme Palestinian factions formed the 'Black September' splinter group. Seeking to recapture global attention for the Palestinian cause, they launched the horrific attack on Israeli athletes at the 1972 Munich Olympics, which <span class='highlight-word'>resulted in</span> the deaths of 11 Israelis and shocked the international community."
          },
          q3: {
            type: "importance_choice",
            question: "Explain two of the following: (16 marks)",
            choices: [
              {
                id: "2020_q3_a",
                title: "The importance of UN Resolution 181 for the creation of Israel.",
                clue: "Explain how the partition plan gave the Zionist movement international legitimacy, but provoked immediate civil war because Arab states entirely rejected it.",
                model: "<strong>Point 1:</strong> UN Resolution 181 was important because it provided international legal backing for a Jewish state. By voting to partition Palestine and allocate 55% of the land to the Jews, the international community officially endorsed the Zionist dream, giving David Ben-Gurion the legitimacy to declare the State of Israel in May 1948.<br><br><strong>Point 2:</strong> It was also important because it directly triggered the 1948\u201349 Arab-Israeli War. Because the Arab states and Palestinian leadership completely rejected the partition plan as unfair, violence immediately broke out, forcing the Jewish forces to rapidly organise and conquer their designated territory to ensure the new state survived."
              },
              {
                id: "2020_q3_b",
                title: "The importance of the Law of Return for the development of the state of Israel.",
                clue: "Detail how granting citizenship to any Jew worldwide triggered massive demographic expansion, providing essential manpower for the economy and the IDF.",
                model: "<strong>Point 1:</strong> The Law of Return (1950) was important because it sparked massive demographic growth. By granting any Jew in the world the legal right to settle in Israel and receive immediate citizenship, it attracted hundreds of thousands of immigrants, including Holocaust survivors and Jewish refugees expelled from Arab lands.<br><br><strong>Point 2:</strong> It was also important because it secured the country's military and economic survival. The influx of new citizens provided the essential manpower needed to build a viable economy, settle border areas, and fill the reserves of the newly created Israeli Defence Forces (IDF) for national defence."
              },
              {
                id: "2020_q3_c",
                title: "The importance of Kissinger\u2019s \u2018shuttle diplomacy\u2019 for diplomatic negotiations in the Middle East.",
                clue: "Explain how Kissinger flying between capitals secured disengagement treaties after the Yom Kippur War, which enabled the reopening of the Suez Canal and laid the groundwork for Camp David.",
                model: "<strong>Point 1:</strong> Kissinger's shuttle diplomacy was important because it succeeded in separating hostile armies after the 1973 Yom Kippur War. By flying between Tel Aviv, Cairo, and Damascus, Kissinger brokered disengagement treaties (like Sinai I and Sinai II), reducing the risk of a new war.<br><br><strong>Point 2:</strong> It was also important because it brought Egypt into the American diplomatic orbit, bypassing the Soviets. This process reopened the Suez Canal in 1975 and established the trust and diplomatic channels that directly laid the groundwork for the 1978 Camp David Accords."
              }
            ]
          }
        },
        {
          id: "2022_summer",
          title: "Summer 2022 Past Paper",
          year: "2022",
          q1: {
            type: "consequence_8",
            question: "Explain two consequences of Syria\u2019s support for Fatah in the years 1964\u201367. (8 marks)",
            clue: "Think about how Syrian training and bases enabled Fatah to launch bomb attacks inside Israel, leading to Israeli border retaliation. Also consider how the support raised regional tensions, directly leading to major military clashes like the air battle over Damascus in April 1967 and setting the stage for the Six-Day War.",
            model: "One consequence of Syria's support for Fatah in the years 1964\u201367 was an increase in guerrilla raids and border violence. With Syrian military training, financing, and bases, Fatah was able to launch mines and bomb attacks against Israeli agricultural settlements, which provoked retaliatory Israeli reprisal raids and heightened border insecurity. Another consequence was the direct military escalation that led to the Six-Day War. The Syrian-Fatah alliance drew direct Israeli responses, resulting in major military clashes, such as the air battle of April 1967 where Israeli jets shot down six Syrian fighters over Damascus, driving both countries closer to full-scale mobilization and conflict."
          },
          q2: {
            type: "narrative",
            question: "Write a narrative account analysing the key developments in the negotiations between Israel and the Palestinians in the years 1993\u201395. (8 marks)",
            stimulus: ["Arafat", "Oslo II (1995)"],
            clue: "Start with the secret back-channel talks in Norway. Explain how this led to Arafat and Rabin shaking hands on Oslo I (creating the PNA). Link this to the subsequent Oslo II agreement, which divided the West Bank into Areas A, B, and C.",
            model: "Negotiations began in secrecy during early 1993, when Israeli and PLO representatives bypassed public stalemates to hold back-channel talks in Norway. <span class='highlight-link'>These secret meetings built</span> the mutual trust that <span class='highlight-word'>enabled</span> the signing of the Oslo I Accords in September 1993, where Yasser Arafat and Yitzhak Rabin shared a historic handshake. <span class='highlight-link'>This agreement established</span> the Palestinian National Authority (PNA) for limited self-rule in Gaza and Jericho. <span class='highlight-link'>Building on this momentum</span>, the parties signed the Oslo II Accord in September 1995. This agreement <span class='highlight-word'>resulted in</span> dividing the West Bank into Areas A, B, and C with different levels of Palestinian and Israeli administrative and security control."
          },
          q3: {
            type: "importance_choice",
            question: "Explain two of the following: (16 marks)",
            choices: [
              {
                id: "2022_q3_a",
                title: "The importance of territorial changes in the aftermath of the 1948\u201349 war for Palestinians.",
                clue: "Detail how Israel expanded beyond the UN partition borders, leaving no land for an independent Palestinian state and creating 700,000 stateless refugees.",
                model: "<strong>Point 1:</strong> The territorial changes were important because they completely prevented the creation of an independent Palestinian state. Israel captured 78% of former Palestine\u2014well beyond the 55% proposed by UN Resolution 181\u2014leaving no continuous territory under Palestinian control.<br><br><strong>Point 2:</strong> They were also important because they led to the fragmentation and displacement of the population. Jordan annexed the West Bank and East Jerusalem, Egypt occupied Gaza, and over 700,000 Palestinians became stateless refugees, scattered in camps across neighboring countries under UNRWA care."
              },
              {
                id: "2022_q3_b",
                title: "The importance of the PFLP airplane hijacks (1970) for international attitudes towards the Palestine issue.",
                clue: "Explain how blowing up international jets succeeded in forcing the world to look at the Palestinian cause, but severely deteriorated their reputation by associating them with global terrorism.",
                model: "<strong>Point 1:</strong> The Dawson's Field hijackings were important because they dramatically forced the Palestinian issue onto the global stage. By blowing up three empty Western commercial jets on live television, the PFLP captured international media attention, making it impossible for the world to ignore the refugee crisis.<br><br><strong>Point 2:</strong> However, they were also important because they severely damaged international sympathy for their cause. The spectacular acts of violence associated the Palestinian national movement with global terrorism, alienating many Western governments and turning public opinion against the PLO."
              },
              {
                id: "2022_q3_c",
                title: "The importance of the Yom Kippur War (1973) for Israel\u2019s relations with Egypt.",
                clue: "Explain how the surprise Egyptian attack shattered the myth of Israeli invincibility. This restored Egyptian pride, which enabled Sadat to negotiate peace from a position of strength.",
                model: "<strong>Point 1:</strong> The war was important because it shattered the myth of Israeli invincibility. Egypt's initial success in crossing the Suez Canal and breaching the Bar Lev Line shocked Israel, making them realize that military occupation of the Sinai could not guarantee security.<br><br><strong>Point 2:</strong> It was also important because it restored Egyptian military honour. This restored pride gave President Sadat the domestic and Arab backing to pursue diplomatic negotiations, enabling him to offer peace to Israel from a position of strength, which ultimately led to the 1979 peace treaty."
              }
            ]
          }
        },
        {
          id: "2023_summer",
          title: "Summer 2023 Past Paper",
          year: "2023",
          q1: {
            type: "consequence_8",
            question: "Explain two consequences of the terrorist attack at the Munich Olympics. (8 marks)",
            clue: "Consequence 1: Think about the massive (but highly negative) international media attention drawn to the Palestinian cause. Consequence 2: Think about Israel's fierce retaliation (Operation Wrath of God and airstrikes on Lebanon).",
            model: "One consequence was that the hostage crisis and deaths of 11 Israeli athletes played out on live television before a global audience of millions, bringing massive international attention to the Palestinian cause, though it heavily associated it with terrorism. Another consequence was Israel's fierce military and intelligence response, leading to airstrikes on PLO bases in Lebanon and Syria, and the launch of 'Operation Wrath of God'\u2014a covert Mossad campaign to track down and assassinate the Black September operatives across Europe."
          },
          q2: {
            type: "narrative",
            question: "Write a narrative account analysing the developments in Israel in the years 1949\u201354. (8 marks)",
            stimulus: ["territory", "Israeli Defence Forces (IDF)"],
            clue: "Start with the territorial gains from the 1948 war. Explain how this resulted in long, hostile borders, meaning Israel had to rapidly consolidate its military (the IDF) and pass the Law of Return to rapidly increase its population for defence.",
            model: "Following the armistice agreements of 1949, Israel emerged with 78% of former Palestine, significantly more territory than the UN partition plan had allocated. <span class='highlight-link'>However, these new borders</span> were long, poorly defined, and surrounded by hostile Arab nations, which <span class='highlight-word'>triggered</span> frequent cross-border infiltrations. <span class='highlight-link'>To secure this territory</span>, Israel rapidly consolidated its military, formally establishing the Israeli Defence Forces (IDF) under a single command. <span class='highlight-link'>To support the IDF</span> and build the state's population for defence, Israel passed the Law of Return in 1950. <span class='highlight-link'>This policy resulted in</span> massive immigration, adding hundreds of thousands of new citizens who provided essential manpower for both the economy and the IDF, enabling Israel to protect its new state."
          },
          q3: {
            type: "importance_choice",
            question: "Explain two of the following: (16 marks)",
            choices: [
              {
                id: "2023_q3_a",
                title: "The importance of the end of the British Mandate (1948) for the creation of Israel.",
                clue: "Explain how the exhausted British withdrawal created a sudden power vacuum, allowing David Ben-Gurion to instantly declare the State of Israel, which triggered the invasion by five Arab armies.",
                model: "<strong>Point 1:</strong> The end of the Mandate was highly important because it created a sudden power vacuum in Palestine. As the last British troops withdrew on May 14, 1948, the legal and administrative authority vanished, leaving the Zionist leadership free to act.<br><br><strong>Point 2:</strong> It was also important because it allowed David Ben-Gurion to immediately declare the establishment of the State of Israel. This declaration was the official realization of the Zionist goal, but it also served as the immediate trigger for the invasion by five Arab armies the next day."
              },
              {
                id: "2023_q3_b",
                title: "The importance of UN Resolution 242 (1967) for relations between Israel and the Arab world after the Six Day War.",
                clue: "Explain the 'Land for Peace' formula, and how the ambiguous wording failed to secure peace, leading the Arab League to respond with the 'Three Nos' at Khartoum.",
                model: "<strong>Point 1:</strong> Resolution 242 was important because it established the 'Land for Peace' framework. It called for the withdrawal of Israeli forces in exchange for Arab recognition of Israel. However, its deliberate ambiguity (the English text omitted 'the' before 'territories') allowed both sides to interpret it differently, preventing a settlement.<br><br><strong>Point 2:</strong> It was also important because it highlighted the diplomatic deadlock. Instead of accepting the resolution, the Arab League issued the Khartoum Resolution ('Three Nos': no peace, no recognition, no negotiation), cementing a state of cold war for the next decade."
              },
              {
                id: "2023_q3_c",
                title: "The importance of Arafat renouncing terrorism (1988) for attempts to find a solution in the Middle East.",
                clue: "Detail how his historic speech at the UN in Geneva finally met the preconditions set by the USA, which enabled America to open official diplomatic channels with the PLO for the first time.",
                model: "<strong>Point 1:</strong> Arafat's renunciation of terrorism was important because it marked a major shift in PLO policy. By publicly renouncing violence, recognizing Israel's right to exist, and accepting UN Resolutions 242 and 338, the PLO moved away from its militant past toward diplomacy.<br><br><strong>Point 2:</strong> It was also important because it met the strict preconditions required by the United States. This enabled the US government to open official diplomatic channels with the PLO, bringing the Palestinians into the international peace process, which led to the Oslo Accords."
              }
            ]
          }
        },
        {
          id: "2024_summer",
          title: "Summer 2024 Past Paper",
          year: "2024",
          q1: {
            type: "consequence_8",
            question: "Explain two consequences of President Sadat of Egypt\u2019s visit to Israel (1977). (8 marks)",
            clue: "Consequence 1: Think about how he broke the psychological barrier and the 'Three Nos', showing true intent for peace. Consequence 2: Think about how it paved the way for Jimmy Carter to host the Camp David Accords the following year.",
            model: "One consequence was the shattering of the long-standing diplomatic deadlock and the Arab League's 'Three Nos' policy. By travelling to Jerusalem and addressing the Knesset, Sadat officially recognized Israel, breaking the psychological barrier to negotiations. Another consequence was that this breakthrough paved the way for formal peace talks, enabling US President Jimmy Carter to invite Sadat and Prime Minister Begin to Camp David in 1978, which resulted in the historic Camp David Accords."
          },
          q2: {
            type: "narrative",
            question: "Write a narrative account analysing relations between Israel and Egypt in the years 1949\u201356. (8 marks)",
            stimulus: ["The abdication of King Farouk of Egypt (1952)", "The Suez Canal"],
            clue: "Start with the hostile borders established after the 1949 armistices. Explain how the Free Officers coup in 1952 and the abdication of King Farouk brought Nasser to power, escalating tensions. Link this to the rise of Fedayeen raids from Gaza and Israel's Gaza reprisal raid (1955). Describe how Nasser's nationalisation of the Suez Canal led to the 1956 Suez War.",
            model: "Following the armistice agreements of 1949, relations between Israel and Egypt were marked by deep mutual suspicion and border instability. In 1952, the Egyptian Free Officers coup led to the abdication of King Farouk, which eventually brought Gamal Abdel Nasser to power. <span class='highlight-link'>Nasser's rise to power</span> intensified hostilities, as he supported cross-border Fedayeen guerrilla raids into Israel from the Gaza Strip. <span class='highlight-link'>These constant raids provoked</span> a massive Israeli military reprisal in Gaza in February 1955, which humiliated Egypt. <span class='highlight-link'>To rebuild his military strength</span>, Nasser signed the Czech Arms Deal and subsequently nationalised the Suez Canal in July 1956. <span class='highlight-link'>This nationalisation threatened</span> British and French interests and led to collusion with Israel. Ultimately, this collusion <span class='highlight-word'>provoked</span> Israel's pre-emptive invasion of Sinai in October 1956, culminating in the Suez War."
          },
          q3: {
            type: "importance_choice",
            question: "Explain two of the following: (16 marks)",
            choices: [
              {
                id: "2024_q3_a",
                title: "The importance of Nasser for tension in the Middle East in the years 1955\u201363.",
                clue: "Detail his signing of the Czech Arms Deal and his nationalisation of the Suez Canal, which enraged Britain/France and dramatically escalated the Cold War proxy conflict in the region.",
                model: "<strong>Point 1:</strong> Nasser was highly important because his actions escalated regional military tension. By signing the Czech Arms Deal in 1955 and nationalising the Suez Canal in 1956, he challenged Western hegemony, which directly triggered the Suez Crisis (the joint British, French, and Israeli invasion of Egypt).<br><br><strong>Point 2:</strong> He was also important because he brought the Cold War directly into the Middle East. By aligning Egypt with the Soviet Union, he provoked the US to counter Soviet influence, escalating regional proxy conflicts and turning the Arab-Israeli dispute into a global superpower struggle."
              },
              {
                id: "2024_q3_b",
                title: "The importance of the Six Day War (1967) for Israel\u2019s security.",
                clue: "Explain how capturing the Sinai, Gaza, West Bank, and Golan Heights eliminated immediate threats and provided Israel with massive physical 'buffer zones' against future invasions.",
                model: "<strong>Point 1:</strong> The Six Day War was highly important because it eliminated immediate military threats. Israel's pre-emptive air strike destroyed the Egyptian, Syrian, and Jordanian air forces on the ground, proving Israel's qualitative military superiority and securing its airspace.<br><br><strong>Point 2:</strong> It was also important because it gave Israel immense strategic depth. Capturing the Sinai, the West Bank, and the Golan Heights provided Israel with physical buffer zones. Hostile Arab armies were pushed hundreds of miles away from major Israeli cities, making a surprise invasion much harder."
              },
              {
                id: "2024_q3_c",
                title: "The importance of the Israel-Jordan peace treaty (1994) for peace in the Middle East.",
                clue: "Explain how it built on the momentum of the Oslo Accords, normalising relations and securing Israel's longest eastern border, proving that bilateral peace between Israel and Arab states was possible.",
                model: "<strong>Point 1:</strong> The 1994 treaty was important because it built on the momentum of the Oslo Accords. Following Israel's mutual recognition with the PLO, Jordan felt empowered to normalize relations, becoming only the second Arab nation to sign a peace treaty with Israel.<br><br><strong>Point 2:</strong> It was also important because it secured Israel's eastern flank. The treaty resolved long-standing land and water disputes and formally secured Israel's longest border, proving that stable, bilateral peace agreements could be reached between Israel and moderate Arab states."
              }
            ]
          }
        },
        {
          id: "2025_summer",
          title: "Summer 2025 Past Paper",
          year: "2025",
          q1: {
            type: "consequence_split_4",
            question: "Section A: Consequence sub-questions",
            subQuestions: [
              {
                id: "2025_q1_a",
                title: "Q1(a): Explain one consequence of the bombing of the King David Hotel (1946). (4 marks)",
                clue: "Think about the devastating effect on British morale and public opinion, forcing the government to hand the Mandate over to the UN.",
                model: "One consequence was the end of British resolve to maintain the Mandate. The bombing by the Irgun killed 91 people, which caused massive outrage in Britain and created intense domestic pressure to withdraw troops, leading directly to Britain handing the Palestine problem to the UN in 1947."
              },
              {
                id: "2025_q1_b",
                title: "Q1(b): Explain one consequence of territorial changes following the 1948\u201349 Arab-Israeli war. (4 marks)",
                clue: "Think about how the new borders meant no Palestinian state was created, leading to 700,000 stateless refugees.",
                model: "One consequence was the mass displacement of over 700,000 Palestinian Arabs (the Nakba), who fled their homes and became stateless refugees in neighbouring countries like Jordan and Lebanon. Additionally, Israel expanded its territory by capturing 78% of historic Palestine, while Jordan annexed the West Bank and Egypt took control of Gaza, leaving the Palestinians without a homeland."
              }
            ]
          },
          q2: {
            type: "narrative",
            question: "Write a narrative account analysing the key developments of the PLO in Lebanon in the years 1970\u201382. (8 marks)",
            stimulus: ["the expulsion of the PLO from Jordan (1970)", "Israel\u2019s \u2018Operation Peace for Galilee\u2019 (1982)"],
            clue: "Explain how the expulsion from Jordan forced the PLO into Lebanon where they built 'Fatahland'. Link this to their cross-border raids into Israel, which ultimately provoked Ariel Sharon into launching a full-scale invasion of Lebanon to destroy them.",
            model: "In 1970, following the Black September conflict, the PLO was expelled from Jordan. <span class='highlight-link'>This forced</span> Yasser Arafat and thousands of fighters to move their base to southern Lebanon, establishing a 'state within a state' known as 'Fatahland'. <span class='highlight-link'>From Lebanon, the PLO launched</span> cross-border rocket attacks and guerrilla raids into northern Israel, including the deadly 1978 Coastal Road Massacre. <span class='highlight-link'>These attacks escalated tensions</span> and provoked Israel's initial incursion (Operation Litani) in 1978. <span class='highlight-link'>As the threat persisted</span>, an attempted assassination of the Israeli ambassador in London in June 1982 served as the final trigger. This <span class='highlight-word'>provoked</span> Israel to launch Operation Peace for Galilee, a full-scale invasion of Lebanon that besieged Beirut and successfully forced the PLO to evacuate to Tunisia."
          },
          q3: {
            type: "importance_choice",
            question: "Explain two of the following: (16 marks)",
            choices: [
              {
                id: "2025_q3_a",
                title: "The importance of the Suez Crisis (1956) for Egypt\u2019s status in the Arab world.",
                clue: "Explain how standing up to the British, French, and Israeli invasion made Nasser a Pan-Arab hero, increasing his influence and leadership across the Arab world.",
                model: "<strong>Point 1:</strong> Nasser's leadership was important because it transformed him into an undisputed hero of Arab nationalism (Pan-Arabism). By politically surviving the tripartite invasion of 1956, he was seen as the first Arab leader to successfully defy Western imperial powers, which dramatically elevated Egypt's prestige across the Middle East.<br><br><strong>Point 2:</strong> It was also important because it established Egypt as the undisputed leader of the Arab world. Nasser's newfound popularity and status enabled Egypt to pursue concrete political unions, leading directly to the merger with Syria to form the United Arab Republic (UAR) in 1958 and cementing Egyptian influence over regional politics."
              },
              {
                id: "2025_q3_b",
                title: "The importance of the Yom Kippur War (1973) for superpower involvement in the Middle East.",
                clue: "Explain how the threat of direct conflict between the USA and USSR forced both to negotiate a ceasefire, and how it brought Egypt into the US diplomatic sphere.",
                model: "<strong>Point 1:</strong> The war was important because it brought the USA and the Soviet Union to the brink of direct military confrontation. The massive superpower arms airlifts and the Soviet threat to intervene unilaterally to support Egypt forced both superpowers to coordinate on UN Resolution 338, establishing a joint diplomatic framework for a ceasefire.<br><br><strong>Point 2:</strong> It was also important because it enabled the United States to shut the Soviet Union out of future Middle Eastern peace talks. US Secretary of State Henry Kissinger used 'shuttle diplomacy' to negotiate disengagement treaties, successfully bringing Egypt into the US diplomatic orbit and making the US the sole mediator in subsequent peace processes."
              },
              {
                id: "2025_q3_c",
                title: "The importance of the Camp David Accords (1978) for attempts to find a solution to the Arab-Israeli conflict.",
                clue: "Detail how it led to the first formal peace treaty between Israel and an Arab nation (Egypt), but divided the Arab world because it ignored the Palestinian issue.",
                model: "<strong>Point 1:</strong> The Accords were important because they resulted in the historic 1979 Egypt-Israel Peace Treaty, the first peace agreement between Israel and an Arab nation. This treaty ended decades of hostility, returned the Sinai Peninsula to Egypt, and permanently secured Israel's southern border.<br><br><strong>Point 2:</strong> However, they were also important because they isolated Egypt and divided the Arab world. Because the Accords failed to secure a clear path for Palestinian self-determination or statehood, the PLO and other Arab nations rejected the agreement, and Egypt was expelled from the Arab League, which hardened diplomatic resistance elsewhere."
              }
            ]
          }
        }
      ];
      if (typeof exports !== "undefined") {
        exports.QUIZ_DATA = QUIZ_DATA5;
        exports.EXAM_SKILLS_DATA = EXAM_SKILLS_DATA4;
        exports.CONSEQUENCE_SKILLS_DATA = CONSEQUENCE_SKILLS_DATA4;
        exports.NARRATIVE_SKILLS_DATA = NARRATIVE_SKILLS_DATA4;
        exports.PAST_PAPERS_DATA = PAST_PAPERS_DATA2;
      } else if (typeof window !== "undefined") {
        window.QUIZ_DATA = QUIZ_DATA5;
        window.EXAM_SKILLS_DATA = EXAM_SKILLS_DATA4;
        window.CONSEQUENCE_SKILLS_DATA = CONSEQUENCE_SKILLS_DATA4;
        window.NARRATIVE_SKILLS_DATA = NARRATIVE_SKILLS_DATA4;
        window.PAST_PAPERS_DATA = PAST_PAPERS_DATA2;
      }
    }
  });

  // src/state.js
  var state = {
    currentView: "dashboard",
    // 'dashboard' | 'classic' | 'flashcards' | 'exam' | 'timeline' | 'bookmarks'
    selectedSubtopicId: null,
    // Active sub-topic ID (e.g. 'subtopic_1_1')
    currentMode: "lessons",
    // 'lessons' | 'classic' | 'flashcards' (sub-topic study modes)
    mastery: {},
    // { questionId: boolean }
    bookmarks: [],
    // Array of questionIds
    soundEnabled: true,
    theme: "desert",
    // Flashcard Session State
    flashcardSession: {
      deck: [],
      activeIndex: 0,
      originalLength: 0,
      masteredCount: 0
    },
    // Quiz Generator State
    examSession: {
      isActive: false,
      questions: [],
      activeIndex: 0,
      answers: {},
      // { questionId: string (written answer) }
      grades: {},
      // { questionId: boolean (self-graded correct) }
      startTime: null,
      timerInterval: null,
      timeRemaining: 0,
      timeLimit: 0,
      timeElapsed: 0,
      scope: "all",
      length: 15
    },
    // Cache flattened questions list for quick access
    allQuestions: [],
    // Past Exam Session State
    pastPaperSession: {
      activePaperId: null,
      activePaperData: null,
      answers: {},
      // { questionId: string }
      completedQuestions: []
      // Array of questionIds
    },
    // Crisis Hotline: 1973 Game State
    crisisGameSession: {
      currentStep: 0,
      metrics: { tension: 50, arab: 50, israel: 50, oil: 50 }
    },
    // Chronological Tug-of-War Game State
    tugGameSession: {
      score: 0,
      streak: 0,
      defcon: 5,
      currentEvent: null,
      gameEvents: []
    },
    // Jet Set Willy: The War Room Game State
    jswGameSession: {
      score: 0,
      lives: 3,
      loopActive: false,
      player: { x: 50, y: 200, width: 16, height: 24, vx: 0, vy: 0, isJumping: false, color: "#ffff00" },
      platforms: [
        { x: 0, y: 260, width: 600, height: 40, color: "#0000ff" },
        { x: 120, y: 190, width: 140, height: 12, color: "#00ff00" },
        { x: 340, y: 190, width: 140, height: 12, color: "#00ff00" },
        { x: 200, y: 120, width: 200, height: 12, color: "#ff0000" }
      ],
      items: [
        { x: 180, y: 160, collected: false, spec: "OPERATION NICKEL GRASS: Massive US airlift helps stabilize IDF lines in October 1973." },
        { x: 400, y: 160, collected: false, spec: "OPEC OIL EMBARGO: Arab oil ministers use production cuts as economic leverage against the West." },
        { x: 300, y: 80, collected: false, spec: "UN RESOLUTION 338: Superpower-brokered ceasefire calls for immediate end to hostilities." },
        { x: 50, y: 230, collected: false, spec: "DEFCON 3 ALERT: High strategic readiness level triggered during US-Soviet brinkmanship." }
      ],
      hazards: [
        { x: 200, y: 104, width: 16, height: 16, vx: 2, rangeMin: 200, rangeMax: 380, color: "#ff00ff", label: "\u2622" },
        { x: 150, y: 174, width: 12, height: 16, vx: 1.5, rangeMin: 120, rangeMax: 240, color: "#00ffff", label: "\u260E" }
      ]
    }
  };

  // src/storage.js
  var import_questions6 = __toESM(require_questions());

  // src/audio.js
  var AudioEngine = {
    ctx: null,
    init() {
      if (!this.ctx) {
        try {
          const AudioContextClass = window.AudioContext || window.webkitAudioContext;
          if (AudioContextClass) {
            this.ctx = new AudioContextClass();
          }
        } catch (e) {
          console.warn("Could not initialize AudioContext:", e);
        }
      }
    },
    play(type) {
      if (!state.soundEnabled) return;
      try {
        this.init();
        if (!this.ctx) return;
        const ctx = this.ctx;
        if (ctx.state === "suspended") {
          ctx.resume().catch((e) => console.warn("Failed to resume AudioContext:", e));
        }
        const now = ctx.currentTime;
        if (type === "click") {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.frequency.setValueAtTime(600, now);
          osc.frequency.exponentialRampToValueAtTime(150, now + 0.04);
          gain.gain.setValueAtTime(0.04, now);
          gain.gain.linearRampToValueAtTime(0, now + 0.04);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.04);
        } else if (type === "flip") {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(280, now);
          osc.frequency.exponentialRampToValueAtTime(140, now + 0.12);
          gain.gain.setValueAtTime(0.06, now);
          gain.gain.linearRampToValueAtTime(0, now + 0.12);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.12);
        } else if (type === "success") {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(523.25, now);
          osc.frequency.setValueAtTime(659.25, now + 0.08);
          osc.frequency.setValueAtTime(783.99, now + 0.16);
          gain.gain.setValueAtTime(0.05, now);
          gain.gain.setValueAtTime(0.05, now + 0.08);
          gain.gain.setValueAtTime(0.05, now + 0.16);
          gain.gain.exponentialRampToValueAtTime(1e-3, now + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.35);
        } else if (type === "fail") {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(180, now);
          osc.frequency.linearRampToValueAtTime(90, now + 0.2);
          gain.gain.setValueAtTime(0.06, now);
          gain.gain.exponentialRampToValueAtTime(1e-3, now + 0.2);
          const filter = ctx.createBiquadFilter();
          filter.type = "lowpass";
          filter.frequency.setValueAtTime(450, now);
          osc.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.2);
        } else if (type === "cheer") {
          const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
          notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, now + idx * 0.06);
            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(0.04, now + idx * 0.06 + 0.02);
            gain.gain.exponentialRampToValueAtTime(1e-3, now + idx * 0.06 + 0.3);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + idx * 0.06);
            osc.stop(now + idx * 0.06 + 0.3);
          });
        }
      } catch (e) {
        console.warn("Audio Context synth error:", e);
      }
    }
  };

  // src/confetti.js
  var Confetti = {
    canvas: null,
    ctx: null,
    particles: [],
    animationId: null,
    init() {
      this.canvas = document.getElementById("confetti-canvas");
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext("2d");
      this.resize();
      window.removeEventListener("resize", this.resizeBound);
      this.resizeBound = () => this.resize();
      window.addEventListener("resize", this.resizeBound);
    },
    resize() {
      if (this.canvas) {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
      }
    },
    spawn(count = 80) {
      this.init();
      if (!this.ctx) return;
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
      this.particles = [];
      const colors = ["#a855f7", "#6366f1", "#06b6d4", "#10b981", "#f43f5e", "#facc15"];
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * -this.canvas.height - 20,
          size: Math.random() * 8 + 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: Math.random() * 4 - 2,
          speedY: Math.random() * 4 + 4,
          rotation: Math.random() * 360,
          rotationSpeed: Math.random() * 6 - 3,
          opacity: 1
        });
      }
      this.loop();
    },
    loop() {
      const ctx = this.ctx;
      if (!ctx) return;
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      let active = false;
      this.particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;
        if (p.y > this.canvas.height - 20) {
          p.opacity -= 0.015;
        }
        if (p.opacity > 0) {
          active = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation * Math.PI / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.opacity;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });
      if (active) {
        this.animationId = requestAnimationFrame(() => this.loop());
      } else {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  };

  // src/views.js
  var import_questions = __toESM(require_questions());

  // src/lessons_data.js
  var LESSONS_DATA = {
    "subtopic_1_1": {
      "specChecklist": [
        "Conflicting interests and demands of Jews and Arabs within the British Mandate.",
        "Key events leading to the end of the British Mandate, partition and the creation of Israel, including the significance of the bombing of the King David Hotel and UN Resolution 181.",
        "Key events of the Arab-Israeli war (1948\u201349)."
      ],
      "headerTitle": '<i class="fa-solid fa-book-open"></i>\r\n        \u{1F393} GCSE CORE MASTERY: Key Topic 1.1 - British Withdrawal & Creation of Israel (1945\u20131949)',
      "headerIntro": "To achieve top marks in this topic, you cannot just tell a story. You need to know the exact names, dates, and statistics that caused the British to flee Palestine and led to the violent birth of Israel.",
      "steps": [
        {
          "title": "Step 1: The Conflicting Demands",
          "isSplit": false,
          "bodyHtml": "<p>After the Second World War, the British Mandate became impossible to govern. Britain was caught between two opposing forces:</p>\r\n        <ul>\r\n          <li><strong>The Jewish/Zionist Demand:</strong> Following the <strong>Holocaust</strong>, Zionists demanded a safe Jewish homeland in Palestine and immediate, unlimited immigration for Jewish refugees stranded in Europe.</li>\r\n          <li><strong>The Palestinian Arab Demand:</strong> Led by figures like the Grand Mufti of Jerusalem, <strong>Haj Amin al-Husseini</strong>, the Arab majority demanded independence and self-rule. They completely opposed mass Jewish immigration, fearing they would lose their land and be outnumbered.</li>\r\n          <li><strong>The British Dilemma:</strong> Exhausted and bankrupt after <strong>WWII</strong>, Britain restricted Jewish immigration to a strict quota of just <strong>1,500</strong> people a month to avoid sparking an Arab civil war and to protect their access to Middle Eastern oil.</li>\r\n        </ul>"
        },
        {
          "title": "Step 2: The Jewish Insurgency & The King David Hotel",
          "isSplit": true,
          "bodyHtml": `<div class="mastery-text-column">\r
          <div class="mastery-card-body card-content">\r
            <p>Furious at the immigration restrictions, Jewish paramilitary groups (the <strong>Haganah</strong>, <strong>Irgun</strong>, and <strong>Lehi</strong>) launched a violent uprising against the British.</p>\r
            <ul>\r
              <li><strong>The King David Hotel Bombing (July 1946):</strong> The extreme group <strong>Irgun</strong> blew up the southern wing of the King David Hotel in Jerusalem, which housed the British military and administrative headquarters.</li>\r
              <li><strong>The Devastating Impact:</strong> The blast killed <strong>91</strong> people. It shattered British morale, caused massive outrage among the British public, and made the Mandate far too expensive and dangerous to run.</li>\r
              <li><strong>The Breaking Point:</strong> In <strong>February 1947</strong>, a broken Britain officially handed the problem over to the newly formed United Nations.</li>\r
            </ul>\r
            \r
            <div class="examiner-tip-box">\r
              <span class="tip-icon">\u{1F4A1}</span>\r
              <div>\r
                <strong>Examiner Tip:</strong> Use the exact statistic of <strong>91</strong> deaths to guarantee top marks in a 4-mark 'Explain one consequence of the King David Hotel bombing' question!\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="mastery-media-column">\r
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">\r
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">\u{1F4DD} Source A: Irgun Communiqu\xE9 (1946)</strong>\r
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">\r
              "We targeted the British administrative headquarters to make it clear that the occupier cannot reside in peace. The King David Hotel was warned, but the authorities refused to evacuate, leading to this tragic, necessary cost of liberation."\r
            </p>\r
          </div>\r
        </div>`,
          "scholarlyDepth": {
            "title": "Scholarly Perspective: The Warning Controversy",
            "body": "Historians debate whether the British authorities received adequate warning of the King David Hotel bombing. The Irgun claimed they telephoned three warning calls 25 minutes prior to the blast. British officials denied receiving direct warning or dismissed it as a hoax, which resulted in the high casualty count of 91 deaths."
          }
        },
        {
          "title": "Step 3: UN Resolution 181 (The Partition Plan)",
          "isSplit": true,
          "bodyHtml": `<div class="mastery-text-column">\r
          <div class="mastery-card-body card-content">\r
            <p>In <strong>November 1947</strong>, the UN passed <strong>Resolution 181</strong>, which recommended dividing Palestine into two separate states.</p>\r
            <ul>\r
              <li><strong>The Terms:</strong> Palestine would be partitioned. <strong>Jerusalem</strong> and <strong>Bethlehem</strong> would become an 'international zone' controlled by neither side.</li>\r
              <li><strong>The Jewish Reaction:</strong> Most Jews reluctantly accepted the plan because it gave them international recognition for a sovereign state, even though they were disappointed <strong>Jerusalem</strong> was excluded.</li>\r
              <li><strong>The Arab Reaction:</strong> Arab leaders furiously rejected the plan. They felt the UN had no right to give away their land, especially since the proposed Jewish state was awarded over half (<strong>55%</strong>) of the territory even though Jews only made up one third (<strong>33%</strong>) of the total population.</li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="mastery-media-column">\r
          <div class="map-vector-box" style="padding: 0;">\r
            <img id="map-image-placeholder" class="map-image-display" src="assets/sources/un_partition_plan_1947.svg" alt="UN Partition Plan" style="width: 100%; height: 100%; object-fit: contain; display: block; border-radius: var(--border-radius-md);">\r
          </div>\r
          <div class="map-toggles">\r
            <button class="map-toggle-btn active" id="btn-map-partition">[1947 UN Partition Plan]</button>\r
            <button class="map-toggle-btn" id="btn-map-borders">[1949 Armistice Borders]</button>\r
          </div>\r
        </div>`
        },
        {
          "title": "Step 4: The 1948\u201349 Arab-Israeli War",
          "isSplit": true,
          "bodyHtml": `<div class="mastery-text-column">\r
          <div class="mastery-card-body card-content">\r
            <p>On <strong>14 May 1948</strong>, the British Mandate officially ended and <strong>David Ben-Gurion</strong> immediately declared the creation of the State of Israel.</p>\r
            <ul>\r
              <li><strong>The Invasion:</strong> The very next day, armies from five Arab nations (<strong>Egypt</strong>, <strong>Syria</strong>, <strong>Transjordan</strong>, <strong>Lebanon</strong>, and <strong>Iraq</strong>) invaded Israel.</li>\r
              <li><strong>Why did Israel win?</strong>\r
                <ul>\r
                  <li><strong>Arab Disunity:</strong> The Arab armies had no single commander and different goals.</li>\r
                  <li><strong>The First UN Truce (June 1948):</strong> Israel used a crucial month-long ceasefire to reorganise and illegally import massive amounts of modern weapons from <strong>Czechoslovakia</strong>.</li>\r
                  <li><strong>The IDF:</strong> During the truce, Israel reorganised its rival militias into a single, unified army: the <strong>Israeli Defence Forces (IDF)</strong>. Through mandatory conscription, their troop numbers doubled from about <strong>35,000</strong> to <strong>108,000</strong> by the end of 1948, allowing them to outnumber the Arab forces.</li>\r
                </ul>\r
              </li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="mastery-media-column">\r
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">\r
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">\u{1F4DD} Source B: From David Ben-Gurion's Diary (July 1948)</strong>\r
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">\r
              "The truce was a godsend. It has given us the precious weeks we needed to coordinate our defense under a single flag, consolidate our forces into the IDF, and bring in the modern equipment needed to secure our borders."\r
            </p>\r
          </div>\r
        </div>`,
          "scholarlyDepth": {
            "title": "Scholarly Perspective: The Czech Arms Lifeline",
            "body": "Historian Avi Shlaim argues that the first UN ceasefire in June 1948 was the turning point of the war. While Arab armies remained disorganized and failed to resupply, Israel negotiated a secret arms deal with Czechoslovakia, importing modern rifles and ammunition to outclass the invaders."
          }
        }
      ],
      "dualPerspective": null,
      "narrativeChain": {
        "chainData": [
          {
            "id": "chain_un",
            "value": "un",
            "label": "UN Resolution 181"
          },
          {
            "id": "chain_war",
            "value": "war",
            "label": "The 1948-49 Arab-Israeli War"
          },
          {
            "id": "chain_bombing",
            "value": "bombing",
            "label": "The King David Hotel Bombing"
          }
        ],
        "correctOrder": [
          "bombing",
          "un",
          "war"
        ],
        "successText": "Excellent! You have built a chronological sequence: The bombing made the mandate unworkable, leading the UN to partition the land, which triggered the Arab invasion.",
        "failText": "Timeline out of order! Chronological flow: Bombing (1946) -> Partition (1947) -> War (1948). Click the highlighted blocks to reset."
      },
      "knowledgeCheck": [],
      "importanceAnalyser": null,
      "questionVault": [
        {
          "question": "Explain one consequence of the King David Hotel bombing (1946). (4 marks)",
          "answer": "<strong>Model Consequence:</strong> One consequence of the King David Hotel bombing was that it shattered British political will to maintain the Mandate. The loss of 91 personnel made the administration extremely dangerous and costly to run, leading directly to Britain's decision to announce its withdrawal and hand the territory over to the UN."
        },
        {
          "question": "Write a narrative account analysing the key events of 1947\u201348 that led to the outbreak of the Arab-Israeli War. (8 marks)",
          "answer": '<strong>Narrative Key Points:</strong>\r\n            <ol style="margin-left: 20px; margin-top: 8px;">\r\n              <li>In November 1947, the UN passed Resolution 181 to partition Palestine, which was accepted by the Jews but rejected by the Arabs, sparking immediate civil violence.</li>\r\n              <li>As violence escalated, the British officially declared they would end their mandate on 14 May 1948, creating a power vacuum.</li>\r\n              <li>On 14 May 1948, David Ben-Gurion declared the creation of the State of Israel, which immediately provoked the invasion by five Arab nations the very next day.</li>\r\n            </ol>'
        }
      ],
      "doNowStarter": null,
      "causalLinks": {
        "question": "Explain why Britain decided to withdraw from the Palestine Mandate in 1947.",
        "successText": "Excellent! You matched the key causes of the British withdrawal: violent insurgency, international pressure, and public relations disasters.",
        "factors": [
          {
            "id": "factor_bombing",
            "title": "The King David Hotel Bombing",
            "linkageText": "Shattered British political morale, making the mandate too costly and dangerous to administer."
          },
          {
            "id": "factor_holocaust",
            "title": "The Holocaust in Europe",
            "linkageText": "Generated overwhelming global sympathy for a Jewish state, making British immigration restrictions politically indefensible."
          },
          {
            "id": "factor_exodus",
            "title": "The SS Exodus Incident",
            "linkageText": "Created a massive public relations disaster for Britain as Holocaust survivors were turned back by the Royal Navy."
          }
        ]
      }
    },
    "subtopic_1_2": {
      "specChecklist": [
        "Territorial changes and their impact.",
        "The refugee status of Palestinian Arabs.",
        "The creation of the Israeli Defence Forces and the Law of Return.",
        "US aid to Israel.",
        "Israel's relations with Egypt."
      ],
      "headerTitle": '<i class="fa-solid fa-book-open"></i>\r\n        \u{1F393} GCSE CORE MASTERY: Key Topic 1.2 - The Aftermath of the 1948\u201349 War',
      "headerIntro": "To achieve top marks in this topic, you need to understand how the 1948\u201349 war completely redrew the map of the Middle East, created a massive refugee crisis, and shaped Israel's aggressive security and immigration policies.",
      "steps": [
        {
          "title": "Step 1: Territorial Changes and the New Map",
          "isSplit": true,
          "bodyHtml": `<div class="mastery-text-column">\r
          <div class="mastery-card-body card-content">\r
            <p>As a result of the war, the proposed independent Arab state was completely wiped off the map.</p>\r
            <ul>\r
              <li><strong>Israel's Expansion:</strong> Israel captured significantly more land than the UN originally allocated, expanding its territory to cover <strong>79%</strong> of mandate Palestine.</li>\r
              <li><strong>Jordan and Egypt:</strong> Transjordan occupied and later annexed the <strong>West Bank</strong> and East Jerusalem. Egypt took military control of the <strong>Gaza Strip</strong>.</li>\r
              <li><strong>The Green Line:</strong> The new borders were defined by the 1949 Armistice Agreements and became known as the <strong>Green Line</strong>.</li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="mastery-media-column">\r
          <div class="map-vector-box" style="padding: 0;">\r
            <img id="map-image-placeholder" class="map-image-display" src="assets/sources/1949_armistice_map.png" alt="1949 Armistice Borders" style="width: 100%; height: 100%; object-fit: contain; display: block; border-radius: var(--border-radius-md);">\r
          </div>\r
          <div class="map-toggles">\r
            <button class="map-toggle-btn" id="btn-map-partition">[1947 UN Partition Plan]</button>\r
            <button class="map-toggle-btn active" id="btn-map-borders">[1949 Post-War Borders]</button>\r
          </div>\r
        </div>`
        },
        {
          "title": "Step 2: The Palestinian Refugee Crisis (The Nakba)",
          "isSplit": true,
          "bodyHtml": `<div class="mastery-text-column">\r
          <div class="mastery-card-body card-content">\r
            <p>The war was a disaster for Palestinian Arabs, who refer to the events of 1948 as the <strong>Nakba</strong> ('The Catastrophe').</p>\r
            <ul>\r
              <li><strong>The Exodus:</strong> Over <strong>700,000</strong> Palestinians fled or were forcibly expelled from their homes in the territory that became Israel.</li>\r
              <li><strong>The Camps:</strong> Most fled to squalid, overcrowded refugee camps in the Gaza Strip, West Bank, Lebanon, Syria, and Jordan. Israel strictly refused to allow the refugees to return home.</li>\r
              <li><strong>UNRWA:</strong> In December 1949, the UN established the United Nations Relief and Works Agency (<strong>UNRWA</strong>) to provide emergency food, health care, and schooling in these camps.</li>\r
            </ul>\r
            \r
            <div class="examiner-tip-box">\r
              <span class="tip-icon">\u{1F4A1}</span>\r
              <div>\r
                <strong>Examiner Tip:</strong> When answering a 4-mark consequence question on the 1948-49 war, always use the Arabic term <strong>Nakba</strong> and the specific statistic of <strong>700,000</strong> refugees to secure top marks for your AO1 knowledge!\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="mastery-media-column">\r
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">\r
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">\u{1F4DD} Source A: UN Refugee Report (1949)</strong>\r
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">\r
              "Hundreds of thousands of Arab families are housed in makeshift tents without sanitation. The situation in the Gaza and West Bank areas requires immediate international intervention to avert total famine."\r
            </p>\r
          </div>\r
        </div>`,
          "scholarlyDepth": {
            "title": "Scholarly Perspective: Causes of the Palestinian Flight",
            "body": "The causes of the 1948 exodus remain highly contested. 'New Historian' Benny Morris argues that the flight was caused by a combination of fears, military pressure, and localized expulsions (e.g. at Lydda and Ramle), rather than a pre-meditated Zionist master plan. Traditional Arab history stresses systematic expulsions, while traditional Israeli history points to Arab leaders urging citizens to flee temporarily."
          }
        },
        {
          "title": "Step 3: Consolidating the State of Israel",
          "isSplit": true,
          "bodyHtml": `<div class="mastery-text-column">\r
          <div class="mastery-card-body card-content">\r
            <ul>\r
              <li><strong>The Law of Return (1950):</strong> This Israeli law gave any Jew in the world the right to immigrate and become a citizen. As a result of this, Israel's population almost doubled within three years as Holocaust survivors and Middle Eastern Jews arrived.</li>\r
              <li><strong>The IDF:</strong> Prime Minister David Ben-Gurion united rival militias into the <strong>Israeli Defence Forces (IDF)</strong>. Strict conscription (30 months for men, 18 for women) integrated new immigrants and created a massive reserve army.</li>\r
              <li><strong>US Aid:</strong> The USA provided crucial financial aid (including a $65 million grant) which resulted in Israel being able to feed and house the massive influx of new immigrants.</li>\r
              <li><strong>UN Mediation & Bernadotte:</strong> During the war, UN mediator <strong>Count Folke Bernadotte</strong> was sent to negotiate peace and truces, but he was assassinated in Jerusalem in September 1948 by the extremist Stern Gang.</li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="mastery-media-column">\r
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">\r
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">\u{1F4DD} Source B: Israeli Government Statement (1950)</strong>\r
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">\r
              "This state will be open for Jewish immigration and for the Ingathering of the Exiles. It will promote the development of the country for the benefit of all its inhabitants."\r
            </p>\r
          </div>\r
        </div>`,
          "scholarlyDepth": {
            "title": "Scholarly Perspective: The Economic Strains of Absorption",
            "body": "The Law of Return in 1950 caused massive population growth but also extreme economic strain. Prime Minister David Ben-Gurion prioritized 'Ingathering of Exiles' over economic stability. To keep the state afloat, Israel implemented a strict austerity regime (Tzena) with food rationing, heavily reliant on US loans and German Holocaust reparations."
          }
        },
        {
          "title": "Step 4: Hostile Relations with Egypt",
          "isSplit": true,
          "bodyHtml": `<div class="mastery-text-column">\r
          <div class="mastery-card-body card-content">\r
            <p>Relations between Israel and its Arab neighbours remained incredibly tense, particularly with Egypt.</p>\r
            <ul>\r
              <li><strong>Economic Blockade:</strong> Egypt blocked Israeli shipping from using the <strong>Suez Canal</strong> and the Straits of Tiran, attempting to strangle the Israeli economy.</li>\r
              <li><strong>The Fedayeen:</strong> Palestinian refugees in Egyptian-controlled Gaza formed guerrilla groups called the <strong>Fedayeen</strong> ('those who sacrifice themselves').</li>\r
              <li><strong>The Cycle of Violence:</strong> The Fedayeen launched constant cross-border raids into Israel to attack settlements. This provoked Israel into launching fierce, disproportionate military reprisal attacks, steadily escalating the tension.</li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="mastery-media-column">\r
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">\r
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">\u{1F4DD} Source C: From an Egyptian Radio Broadcast (1953)</strong>\r
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">\r
              "The Fedayeen will strike at the Zionist settlements day and night until our brothers' lands are returned. Let the enemy know there is no security on stolen land."\r
            </p>\r
          </div>\r
        </div>`
        }
      ],
      "dualPerspective": {
        "leftHeadline": "A Necessary Defensive Haven",
        "leftText": "Israel was created to ensure Jewish survival after the Holocaust. The Law of Return was essential to gather the exiles. Borders had to be defended aggressively against hostile neighbors who openly refused to recognize the state's existence.",
        "rightHeadline": "The Catastrophic Nakba",
        "rightText": "The creation of Israel resulted in the permanent displacement of over 700,000 Palestinians, who were forced into exile and denied their right of return. The new borders represented illegal territorial expansion beyond the UN boundaries.",
        "neutralTitle": "\u2696\uFE0F Dual Interpretation: The Consolidation of 1948\u201349",
        "tipHtml": '<div class="examiner-tip-box" style="margin-top: 18px; margin-bottom: 0;">\r\n        <span class="tip-icon">\u{1F4A1}</span>\r\n        <div>\r\n          <strong>AO2 Exam Skill:</strong> Underline process words to trace cause and effect directly. Reflecting dual viewpoints yields top marks!\r\n        </div>'
      },
      "narrativeChain": {
        "chainData": [
          {
            "id": "chain_war_end",
            "value": "war_end",
            "label": "Israel wins the 1948-49 war"
          },
          {
            "id": "chain_refugees",
            "value": "refugees",
            "label": "700,000 Palestinians displaced (Nakba)"
          },
          {
            "id": "chain_fedayeen",
            "value": "fedayeen",
            "label": "Fedayeen form in Gaza to launch raids"
          }
        ],
        "correctOrder": [
          "war_end",
          "refugees",
          "fedayeen"
        ],
        "successText": "Excellent! You mapped the narrative: Israel's war victory displaced 700,000 refugees, who then organized into Fedayeen groups in Gaza to launch raids.",
        "failText": "Timeline out of order! Chronological flow: War ends (1949) -> Refugees settle (1949) -> Fedayeen raids escalate (1950s). Click the highlighted blocks to reset."
      },
      "knowledgeCheck": [],
      "importanceAnalyser": null,
      "questionVault": [
        {
          "question": "Explain one consequence of the Israeli Law of Return (1950). (4 marks)",
          "answer": "<strong>Model Consequence:</strong> One consequence of the Law of Return was a massive, rapid demographic expansion of the State of Israel. By granting every Jew worldwide the right to immigrate, it allowed hundreds of thousands of Holocaust survivors and Middle Eastern Jews to settle, doubling the population in three years and consolidating its civilian defense reserves."
        },
        {
          "question": "Explain the importance of the Palestinian refugee crisis for Arab-Israeli relations in the years 1948\u201356. (8 marks)",
          "answer": "<strong>Importance Analysis:</strong> The refugee crisis was highly important because it formed an insurmountable barrier to peace negotiations. Over 700,000 displaced Palestinians settled in camps in Gaza and the West Bank, where frustration led to the creation of the Fedayeen. Their cross-border raids provoked heavy Israeli military reprisals, escalating tensions that ultimately led to the 1956 Suez Crisis."
        }
      ],
      "doNowStarter": {
        "prevSubtopicId": "subtopic_1_1",
        "prevSubtopicTitle": "Topic 1.1: British Withdrawal and Creation of Israel",
        "image": "assets/sources/palestinian_refugees_1948.jpg",
        "sourceUrl": "https://en.wikipedia.org/wiki/1948_Palestinian_expulsion_and_flight",
        "provenance": "Palestinian refugees fleeing Galilee during the 1948 Arab-Israeli War.",
        "seeThinkWonder": {
          "see": "Observe families carrying their basic belongings on foot away from their villages.",
          "think": "Why did Israel refuse to allow these refugees to return once the armistice agreements were signed?",
          "wonder": "How did the displacement of 700,000 people affect the demographics of neighboring countries like Jordan?"
        },
        "recallQuestions": [
          {
            "question": "Which League of Nations agreement gave Britain control of Palestine in 1920?",
            "answer": "The British Mandate."
          },
          {
            "question": "Which Zionist paramilitary group bombed the British headquarters at the King David Hotel in 1946?",
            "answer": "The Irgun."
          },
          {
            "question": "How many people died in the King David Hotel bombing?",
            "answer": "91 people."
          },
          {
            "question": "What was the name of the ship carrying Jewish refugees that Britain turned back in 1947?",
            "answer": "SS Exodus."
          },
          {
            "question": "On what exact date did David Ben-Gurion proclaim the establishment of the State of Israel?",
            "answer": "14 May 1948."
          }
        ]
      },
      "causalLinks": {
        "question": "Explain the consequences of the 1948\u201349 Arab-Israeli War.",
        "successText": "Fantastic! You linked the war's outcomes to their territorial, demographic, and legal consequences.",
        "factors": [
          {
            "id": "factor_green",
            "title": "The Green Line Armistice",
            "linkageText": "Established Israel's de facto borders, expanding its territory to cover 79% of mandate Palestine."
          },
          {
            "id": "factor_nakba",
            "title": "The Palestinian Refugee Crisis (Nakba)",
            "linkageText": "Displaced over 700,000 Arab residents into crowded UNRWA camps in Gaza, the West Bank, and Jordan."
          },
          {
            "id": "factor_return",
            "title": "The Israeli Law of Return (1950)",
            "linkageText": "Triggered a massive influx of Jewish immigrants, doubling the state's population in three years."
          }
        ]
      }
    },
    "subtopic_1_3": {
      "specChecklist": [
        "Nasser and Egypt's leadership of the Arab world.",
        "The events and significance of Israeli attacks on Gaza in 1955 and Sinai in 1956.",
        "The events and significance of the Suez Crisis (1956), including the formation of the UAR in 1958."
      ],
      "headerTitle": '<i class="fa-solid fa-book-open"></i>\r\n        \u{1F393} GCSE CORE MASTERY: Key Topic 1.3 - Increased Tension, 1955\u201363',
      "headerIntro": "To achieve top marks in this topic, you must understand how Suez became a major Cold War flashpoint, why Nasser nationalised the canal, and how Britain, France, and Israel colluded to invade Egypt.",
      "steps": [
        {
          "title": "Step 1: Rise of Nasser and Pan-Arabism",
          "isSplit": false,
          "bodyHtml": "<ul>\r\n          <li><strong>Rise of Nasser (1954):</strong> Colonel Gamal Abdel Nasser overthrew the corrupt King Farouk in a coup. He championed <strong>Pan-Arabism</strong>, a movement to politically unify Arab nations, protect Middle Eastern oil resources, and destroy the State of Israel.</li>\r\n          <li><strong>The Gaza Raid (February 1955):</strong> The turning point in relations occurred when Israeli forces launched a fierce attack on Egyptian-controlled <strong>Gaza</strong>, killing <strong>38</strong> Egyptian soldiers. This humiliating defeat exposed Egypt's military weakness.</li>\r\n          <li><strong>The Czech Arms Deal (September 1955):</strong> Humiliated by the Gaza raid, Nasser sought to modernise his military. When Western powers refused to sell him weapons, he signed the <strong>Czech Arms Deal</strong>, importing modern Soviet fighter jets, tanks, and bombers, which shattered the balance of power in the region and alarmed Israel.</li>\r\n        </ul>"
        },
        {
          "title": "Step 2: Nationalisation of the Suez Canal (July 1956)",
          "isSplit": true,
          "bodyHtml": `<div class="mastery-text-column">\r
          <div class="mastery-card-body card-content">\r
            <p>Nasser wanted to build the massive <strong>Aswan High Dam</strong> on the River Nile to modernise Egypt's economy. In July 1956, after the USA and Britain abruptly withdrew their financial loans to punish Egypt for its ties to the Soviet bloc, Nasser retaliated immediately:</p>\r
            <ul>\r
              <li><strong>The Nationalisation:</strong> Nasser seized and nationalised the British and French-owned <strong>Suez Canal Company</strong>, declaring that Egypt would use the canal's transit tolls to fund the Aswan Dam.</li>\r
              <li><strong>Western Fury:</strong> Britain and France were outraged. They viewed the canal as a vital imperial lifeline for their oil shipping and saw Nasser as a dangerous dictator who had to be deposed.</li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="mastery-media-column">\r
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">\r
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">\u{1F4DD} Source A: Speech by Nasser (July 1956)</strong>\r
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">\r
              "The Suez Canal belongs to Egypt, dug by Egyptian hands. We shall run the canal ourselves, and the annual revenue of 100 million dollars will go toward building the Aswan Dam. We will not look to the West for charity!"\r
            </p>\r
          </div>\r
        </div>`
        },
        {
          "title": "Step 3: The Protocol of S\xE8vres Collusion",
          "isSplit": false,
          "bodyHtml": "<ul>\r\n          <li><strong>The Secret Plan:</strong> In October 1956, Britain, France, and Israel met secretly in France and signed the **Protocol of S\xE8vres**, a conspiracy to capture the canal and overthrow Nasser.</li>\r\n          <li><strong>The Pretext:</strong> Under the plan, Israel would launch a surprise invasion of the Sinai Peninsula. Britain and France would then pretend to act as 'peacekeepers', ordering both sides to withdraw from the canal, and immediately invade to take control of it when Nasser refused.</li>\r\n        </ul>"
        },
        {
          "title": "Step 4: Invasion and Superpower Intervention",
          "isSplit": true,
          "bodyHtml": `<div class="mastery-text-column">\r
          <div class="mastery-card-body card-content">\r
            <p>On 29 October 1956, Israel launched the attack. The plan succeeded militarily, but resulted in a total political disaster for the West:</p>\r
            <ul>\r
              <li><strong>US Opposition:</strong> U.S. President Eisenhower was furious that his allies had launched a war without consulting him during a critical presidential election. He threatened to crash the British pound and cut off oil supplies if they did not withdraw.</li>\r
              <li><strong>UN Ceasefire:</strong> The UN condemned the invasion and forced Britain, France, and Israel to withdraw, replacing them with a peacekeeping buffer force: the **United Nations Emergency Force (UNEF)**.</li>\r
              <li><strong>The Consequences:</strong>\r
                <ul>\r
                  <li><strong>British/French Humiliation:</strong> The crisis marked the end of Britain and France's status as global superpowers.</li>\r
                  <li><strong>Nasser's Triumph:</strong> Nasser emerged as a massive hero of the Arab world for standing up to the West.</li>\r
                  <li><strong>Israel's Gain:</strong> Israel withdrew from Sinai, but secured the deployment of UNEF peacekeepers on its border, stopping Fedayeen raids and reopening shipping through the Straits of Tiran.</li>\r
                </ul>\r
              </li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="mastery-media-column">\r
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">\r
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">\u{1F4DD} Source B: UN General Assembly Resolution (Nov 1956)</strong>\r
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">\r
              "The General Assembly... urges the immediate ceasefire of hostilities and demands the prompt withdrawal of all foreign forces from Egyptian territory, to be replaced by an international UN Emergency Force."\r
            </p>\r
          </div>\r
        </div>`
        },
        {
          "title": "Step 5: The United Arab Republic (UAR) and Pan-Arab Peak (1958\u20131963)",
          "isSplit": false,
          "bodyHtml": "<ul>\r\n          <li><strong>The UAR Union (February 1958):</strong> At the height of his popularity, Nasser formed a political union between <strong>Egypt</strong> and <strong>Syria</strong>, named the <strong>United Arab Republic (UAR)</strong>. This union represented the practical peak of <strong>Pan-Arabism</strong>, aiming to create a single, unified Arab state to confront Israel.</li>\r\n          <li><strong>Israel's Fear of Encirclement:</strong> The creation of the UAR caused severe security anxiety in Israel, which now faced a single united political entity on both its southern (Egypt) and northern (Syria) borders.</li>\r\n          <li><strong>Collapse of the Union (1961):</strong> The UAR dissolved in 1961 after a military coup in Syria, but the anti-Israel rhetoric and the regional drive for Pan-Arab leadership remained high, keeping borders highly militarized until 1963.</li>\r\n        </ul>",
          "scholarlyDepth": {
            "title": "Scholarly Perspective: The Imperial Echoes",
            "body": "Nasser's UAR union was ultimately undermined by Egyptian domination over Syrian political and economic life. Syrian military officers grew frustrated at being sidelined by Cairo, leading to a coup in 1961 that dissolved the union. However, the UAR succeeded in convincing Israel that a united Arab military front was the primary existential threat it had to prepare for."
          }
        }
      ],
      "dualPerspective": null,
      "narrativeChain": {
        "chainData": [
          {
            "id": "chain_loans",
            "value": "loans",
            "label": "US and Britain withdraw Aswan Dam loans"
          },
          {
            "id": "chain_canal_seized",
            "value": "canal_seized",
            "label": "Nasser nationalises the Suez Canal"
          },
          {
            "id": "chain_sevres",
            "value": "sevres",
            "label": "Britain, France, and Israel sign S\xE8vres Protocol"
          }
        ],
        "correctOrder": [
          "loans",
          "canal_seized",
          "sevres"
        ],
        "successText": "Excellent! The withdrawal of Western loans provoked Nasser into nationalising the canal, leading directly to the secret Protocol of S\xE8vres collusion.",
        "failText": "Timeline out of order! Chronological flow: Loans withdrawn (July 1956) -> Suez nationalised (July 1956) -> Protocol signed (Oct 1956). Click the highlighted blocks to reset."
      },
      "knowledgeCheck": [],
      "importanceAnalyser": null,
      "questionVault": [
        {
          "question": "Explain one consequence of the nationalisation of the Suez Canal (1956). (4 marks)",
          "answer": "<strong>Model Consequence:</strong> One consequence of the nationalisation of the Suez Canal was the Protocol of S\xE8vres conspiracy. The seizure of the canal outraged Britain and France, leading them to form a secret alliance with Israel to launch a coordinated invasion of Egypt to depose Nasser and reclaim the waterway."
        },
        {
          "question": "Explain the importance of superpower intervention in the Suez Crisis for British and French global influence. (8 marks)",
          "answer": "<strong>Importance Analysis:</strong> Superpower intervention was highly important because it exposed the decline of British and French imperial power. President Eisenhower's threat to crash the British pound forced an immediate, humiliating withdrawal, proving that European colonial powers could no longer pursue independent foreign policies in the Middle East without U.S. approval."
        }
      ],
      "doNowStarter": {
        "prevSubtopicId": "subtopic_1_2",
        "prevSubtopicTitle": "Topic 1.2: Aftermath of the 1948\u201349 War",
        "image": "assets/sources/nasser_nationalizing_suez_1956.jpg",
        "sourceUrl": "https://en.wikipedia.org/wiki/Suez_Crisis",
        "provenance": "President Gamal Abdel Nasser announcing the nationalisation of the Suez Canal to a cheering crowd in Alexandria, July 1956.",
        "seeThinkWonder": {
          "see": "Observe the cheerful and proud expression on Nasser's face as he addresses the public.",
          "think": "Why did nationalising the canal instantly make Nasser a hero of Pan-Arabism?",
          "wonder": "How would Britain and France respond to their commercial assets being seized by a Middle Eastern government?"
        },
        "recallQuestions": [
          {
            "question": "What percentage of mandate Palestine was allocated to the Jewish state under the 1947 UN Partition Plan?",
            "answer": "55 percent."
          },
          {
            "question": "What is the Arabic term meaning 'the catastrophe' used to describe the 1948 Palestinian displacement?",
            "answer": "Al-Nakba."
          },
          {
            "question": "Approximately how many Palestinian refugees fled or were expelled during the 1948 war?",
            "answer": "Over 700,000."
          },
          {
            "question": "What was the name of the armistice border line established after the 1948\u201349 war?",
            "answer": "The Green Line."
          },
          {
            "question": "Which 1950 Israeli law granted any Jew in the world the right to claim immediate citizenship?",
            "answer": "The Law of Return."
          }
        ]
      },
      "causalLinks": {
        "question": "Explain why the Suez Crisis of 1956 broke out.",
        "successText": "Brilliant! You mapped the escalation to Suez: nationalization, secret treaties, and border reprisal loops.",
        "factors": [
          {
            "id": "factor_nasser",
            "title": "Nasser nationalises the Suez Canal",
            "linkageText": "Threatened British and French imperial influence and security of Western oil supply routes."
          },
          {
            "id": "factor_sevres",
            "title": "The Protocol of S\xE8vres",
            "linkageText": "Created a secret collusion pact between Britain, France, and Israel to launch a coordinated invasion of Egypt."
          },
          {
            "id": "factor_raids",
            "title": "Fedayeen border raids from Gaza",
            "linkageText": "Provoked Israel into launching a preemptive invasion of the Sinai Peninsula to secure its shipping rights."
          }
        ]
      }
    },
    "subtopic_2_1": {
      "specChecklist": [
        "The significance of the Cairo Conference (1964).",
        "Escalating tension between Israel, Syria and Jordan: Syria's support for Fatah, Israel's raid on Samu and events of 7 April 1967.",
        "The actions of the USSR, Nasser and the USA in the period leading to war.",
        "Key events of the war."
      ],
      "headerTitle": '<i class="fa-solid fa-book-open"></i>\r\n        \u{1F393} GCSE CORE MASTERY: Key Topic 2.1 - The Six Day War, 1967',
      "headerIntro": "To achieve top marks in this topic, you need to understand how the diversion of the River Jordan, border skirmishes with Syria, false Soviet intelligence, and the blockade of the Straits of Tiran led directly to Israel's pre-emptive strike on 5 June 1967.",
      "steps": [
        {
          "title": "Step 1: The Cairo Conference and Jordan Water Crisis (1964)",
          "isSplit": false,
          "bodyHtml": "<ul>\r\n          <li><strong>The Cairo Conference (January 1964):</strong> Arab League leaders met in Cairo. This summit was highly significant because it resulted in the creation of the <strong>Palestine Liberation Organisation (PLO)</strong> to coordinate resistance, and approved a plan to divert the headwaters of the <strong>River Jordan</strong> to cut off Israel's water supply.</li>\r\n          <li><strong>The Airstrikes:</strong> Israel viewed water as an existential necessity and launched repeated air strikes to destroy the Arab diversion works, initiating a period of intense border conflicts.</li>\r\n        </ul>"
        },
        {
          "title": "Step 2: Border Skirmishes and the Samu Raid (1966\u20131967)",
          "isSplit": false,
          "bodyHtml": "<ul>\r\n          <li><strong>Fatah Raids:</strong> Syria actively supported Yasser Arafat's guerrilla group, <strong>Fatah</strong>, which launched cross-border sabotage raids into Israel.</li>\r\n          <li><strong>The Samu Raid (November 1966):</strong> Following a Fatah landmine attack that killed three Israeli soldiers, the IDF launched a massive armored raid on the Jordanian-controlled West Bank village of <strong>Samu</strong>. The IDF destroyed 125 houses and clashed with the Jordanian army, leaving 18 Jordanian soldiers dead. This raid humiliated Jordan's King Hussein and pushed him into a defense pact with Egypt.</li>\r\n          <li><strong>Dogfight of 7 April 1967:</strong> Border clashes with Syria peaked when Israeli farming in the Demilitarized Zone led to a massive artillery duel. During the dogfight, Israeli jets shot down six Syrian <strong>MiG-21</strong> fighter aircraft over Damascus.</li>\r\n        </ul>"
        },
        {
          "title": "Step 3: Superpower Actions and the Straits Blockade (May 1967)",
          "isSplit": false,
          "bodyHtml": "<ul>\r\n          <li><strong>Soviet Actions:</strong> The <strong>Soviet Union</strong> provided Egyptian President Nasser with false intelligence reports claiming Israel was massing forces to invade Syria.</li>\r\n          <li><strong>Nasser's Actions:</strong> Seeking to assert his leadership, Nasser mobilized <strong>100,000</strong> troops in Sinai, expelled the UN buffer force (UNEF), and closed the <strong>Straits of Tiran</strong> (cutting off Israel's southern port of Eilat).</li>\r\n          <li><strong>USA Actions:</strong> U.S. President Johnson tried to defuse the blockade by proposing an international naval coalition (the **'Regatta'** plan) to escort ships through the Straits. When this failed due to international hesitation, the US gave Israel a tacit 'amber light' that it would support Israeli pre-emptive action.</li>\r\n        </ul>"
        },
        {
          "title": "Step 4: Operation Focus (5 June 1967)",
          "isSplit": true,
          "bodyHtml": '<div class="mastery-text-column">\r\n          <div class="mastery-card-body card-content">\r\n            <p>Israel had warned that blockading the Straits of Tiran was a direct act of war. On the morning of <strong>5 June 1967</strong>, Israel launched a devastating preemptive strike called <strong>Operation Focus</strong>:</p>\r\n            <ul>\r\n              <li><strong>Total Surprise:</strong> Nearly the entire Israeli Air Force flew low over the Mediterranean under radar coverage, striking at 7:45 AM when Egyptian pilots were on breakfast break.</li>\r\n              <li><strong>Destruction of Arab Air Forces:</strong> Within three hours, Israel destroyed <strong>338</strong> Egyptian aircraft on the ground, securing complete air superiority before ground troops even crossed the borders.</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class="mastery-media-column">\r\n          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">\r\n            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">\u{1F4DD} Source A: Israeli Cabinet Statement (5 June 1967)</strong>\r\n            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">\r\n              "Faced with Egyptian troop concentrations on our borders, the blockade of the Straits of Tiran, and the withdrawal of the UN forces, Israel has acted in self-defense to neutralize the imminent threat of destruction."\r\n            </p>\r\n          </div>\r\n        </div>'
        },
        {
          "title": "Step 5: The Ground Campaigns on Three Fronts (5\u201310 June 1967)",
          "isSplit": false,
          "bodyHtml": "<ul>\r\n          <li><strong>The Sinai & Gaza Front:</strong> Israeli ground forces breached Egyptian defenses, reaching the Suez Canal by 8 June and trapping the Egyptian army.</li>\r\n          <li><strong>The West Bank & Jerusalem Front:</strong> After Jordan opened fire, the IDF counter-attacked, capturing the entire <strong>West Bank</strong> and <strong>East Jerusalem</strong> (including the Western Wall) by 7 June, reunifying the city.</li>\r\n          <li><strong>The Golan Heights Front:</strong> On 9 June, Israeli troops scaled the steep volcanic cliffs of the <strong>Golan Heights</strong>, defeating the Syrian defenders and securing the border before a UN ceasefire on 10 June.</li>\r\n        </ul>"
        }
      ],
      "dualPerspective": null,
      "narrativeChain": {
        "chainData": [
          {
            "id": "chain_false_intel",
            "value": "false_intel",
            "label": "Soviets give Egypt false intelligence of Israeli mobilization"
          },
          {
            "id": "chain_blockade_un",
            "value": "blockade_un",
            "label": "Egypt expels UN troops & blockades Straits of Tiran"
          },
          {
            "id": "chain_focus",
            "value": "focus",
            "label": "Israel launches preemptive airstrike (Operation Focus)"
          }
        ],
        "correctOrder": [
          "false_intel",
          "blockade_un",
          "focus"
        ],
        "successText": "Excellent! The false Soviet intelligence provoked Nasser into mobilizing troops and blockading the Straits, triggering Israel's pre-emptive strike.",
        "failText": "Timeline out of order! Chronological flow: False intelligence (May 1967) -> Straits blockaded (22 May) -> Preemptive strike (5 June). Click the highlighted blocks to reset."
      },
      "knowledgeCheck": [],
      "importanceAnalyser": null,
      "questionVault": [
        {
          "question": "Explain one consequence of Nasser's blockade of the Straits of Tiran (May 1967). (4 marks)",
          "answer": "<strong>Model Consequence:</strong> One consequence was that it acted as the direct trigger for the outbreak of the Six Day War. Israel had previously declared that blockading the Straits\u2014which cut off its southern port of Eilat\u2014would be treated as an act of war, leading directly to their decision to launch pre-emptive airstrikes on 5 June."
        },
        {
          "question": "Write a narrative account analysing how the actions of Egypt and Israel in May-June 1967 led to the outbreak of the Six Day War. (8 marks)",
          "answer": `<strong>Narrative Key Points:</strong>\r
            <ol style="margin-left: 20px; margin-top: 8px;">\r
              <li>In mid-May 1967, receiving false Soviet reports of Israeli troop concentrations, Nasser mobilized 100,000 soldiers into the Sinai and expelled UNEF peacekeepers.</li>\r
              <li>On 22 May, Egypt escalated the crisis by blockading the Straits of Tiran, cutting off Israel's oil port of Eilat and creating a diplomatic deadlock.</li>\r
              <li>Viewing this blockade as a direct act of war, Israel launched a surprise preemptive airstrike (Operation Focus) on 5 June, starting the Six Day War.</li>\r
            </ol>`
        }
      ],
      "doNowStarter": {
        "prevSubtopicId": "subtopic_1_3",
        "prevSubtopicTitle": "Topic 1.3: Increased Tension, 1955\u201363",
        "image": "assets/sources/straits_of_tiran.jpg",
        "sourceUrl": "https://en.wikipedia.org/wiki/Straits_of_Tiran",
        "provenance": "The narrow Straits of Tiran at the mouth of the Gulf of Aqaba, blockaded by Egypt in May 1967.",
        "seeThinkWonder": {
          "see": "Observe the narrow shipping lanes surrounded by mountainous coastlines.",
          "think": "Why was the blockade of this specific channel considered a direct act of war by Israel?",
          "wonder": "How did the blockade affect Israel's trade and oil imports from Asian and African partners?"
        },
        "recallQuestions": [
          {
            "question": "Who became the charismatic President of Egypt in 1954 and championed Pan-Arabism?",
            "answer": "Gamal Abdel Nasser."
          },
          {
            "question": "Which country did Egypt sign a massive arms deal with in 1955 to bypass Western embargoes?",
            "answer": "Czechoslovakia."
          },
          {
            "question": "In what year did President Nasser nationalise the Suez Canal, sparking a global crisis?",
            "answer": "1956."
          },
          {
            "question": "What was the name of the secret treaty signed between Britain, France, and Israel to collude against Egypt?",
            "answer": "Protocol of S\xE8vres."
          },
          {
            "question": "What acronym represents the UN peacekeeping force stationed as a buffer after the 1956 war?",
            "answer": "UNEF."
          }
        ]
      },
      "causalLinks": {
        "question": "Explain why Israel launched a preemptive strike in June 1967.",
        "successText": "Correct! The pre-emptive strike was triggered by false intelligence, border blockades, and buffer removal.",
        "factors": [
          {
            "id": "factor_intel",
            "title": "False Soviet troop intelligence",
            "linkageText": "Convinced Egypt that Israel was planning to invade Syria, triggering mobilisations in the Sinai."
          },
          {
            "id": "factor_blockade",
            "title": "Nasser blockades Straits of Tiran",
            "linkageText": "Cut off Israel's only southern port of Eilat, which Israel had warned would be treated as an act of war."
          },
          {
            "id": "factor_unef",
            "title": "Expulsion of UNEF peacekeepers",
            "linkageText": "Removed the UN buffer force, leaving the Egyptian army directly facing Israel's southern border."
          }
        ]
      }
    },
    "subtopic_2_2": {
      "specChecklist": [
        "UN Resolution 242 and continued dispute over the Suez Canal.",
        "Palestinian refugees and the significance of the occupied territories: Golan Heights, Gaza Strip, West Bank, Sinai and East Jerusalem.",
        "The use of terrorism, Israel's response and international attitudes towards the Palestine issue: the PFLP airplane hijacks of 1970; Black September and the Munich Olympics.",
        "The expulsion of the PLO from Jordan (1970)."
      ],
      "headerTitle": '<i class="fa-solid fa-book-open"></i>\r\n        \u{1F393} GCSE CORE MASTERY: Key Topic 2.2 - The Six Day War (1967) and its aftermath',
      "headerIntro": "To achieve top marks in this topic, you need to know how Israel won the Six Day War, the massive territorial changes that followed, and how this crushing Arab defeat pushed Palestinian groups towards international terrorism.",
      "steps": [
        {
          "title": "Step 1: The Captured Territories & Refugee Crisis",
          "isSplit": false,
          "bodyHtml": "<ul>\r\n          <li><strong>The Occupied Territories:</strong> During the war, Israel captured vast territories: the <strong>Sinai Peninsula</strong> and <strong>Gaza Strip</strong> from Egypt, the <strong>West Bank</strong> and <strong>East Jerusalem</strong> from Jordan, and the <strong>Golan Heights</strong> from Syria.</li>\r\n          <li><strong>The Significance:</strong> These territories were highly significant: the **Golan Heights** controlled vital water headwaters; the **Sinai** and **Gaza** acted as security buffer zones; the **West Bank** provided strategic depth; and **East Jerusalem** held the holiest sites in Judaism (the Western Wall).</li>\r\n          <li><strong>New Refugee Wave:</strong> The conquest triggered a second massive Palestinian refugee crisis, with over <strong>300,000</strong> Palestinians fleeing the West Bank and Gaza, mostly into Jordan, placing huge social and economic strains on neighboring Arab countries.</li>\r\n        </ul>",
          "scholarlyDepth": {
            "title": "Scholarly Perspective: Operation Focus (Moked)",
            "body": "Israel's preemptive airstrike on 5 June 1967 is studied as one of the most successful air campaigns in history. Devised by General Ezer Weizman, the plan took years to refine, mapping every Egyptian runway. The IDF flew at extremely low altitudes to evade radar, destroying 338 Egyptian planes in 3 hours."
          }
        },
        {
          "title": "Step 2: UN Resolution 242 & The War of Attrition (1967\u201370)",
          "isSplit": true,
          "bodyHtml": `<div class="mastery-text-column">\r
          <div class="mastery-card-body card-content">\r
            <ul>\r
              <li><strong>UN Resolution 242 (November 1967):</strong> The UN Security Council passed a resolution calling for Israel's withdrawal from territories occupied in the conflict in exchange for Arab states recognizing Israel's right to exist in peace (the 'Land for Peace' formula).</li>\r
              <li><strong>The Khartoum Summit:</strong> In August 1967, Arab leaders issued the 'Three Nos': no peace, no recognition, and no negotiations with Israel, causing a total diplomatic deadlock.</li>\r
              <li><strong>The War of Attrition (1967\u20131970):</strong> This deadlock led to a continued dispute over the Suez Canal. Egyptian President Nasser launched a low-intensity war of attrition, involving heavy artillery bombardment, commando raids, and aerial dogfights. The canal remained closed to global shipping, draining resources and leading to Soviet pilots flying combat missions for Egypt.</li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="mastery-media-column">\r
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">\r
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">\u{1F4DD} Source A: Khartoum Resolution (1967)</strong>\r
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">\r
              \\"The Arab Heads of State have agreed to unite their political efforts to secure the withdrawal of Israeli forces... This will be done within the framework of no peace, no recognition, and no negotiations with the Zionist state.\\"\r
            </p>\r
          </div>\r
        </div>`,
          "scholarlyDepth": {
            "title": "Scholarly Perspective: The Ambiguity of Resolution 242",
            "body": "The wording of UN Resolution 242 was deliberately ambiguous. The English text calls for withdrawal from 'territories occupied in the recent conflict,' whereas the French version reads 'des territoires' (implying *all* territories). Lord Caradon, the British diplomat who drafted it, admitted this was necessary to achieve consensus."
          }
        },
        {
          "title": "Step 3: PFLP Hijackings & Expulsion from Jordan (1970)",
          "isSplit": false,
          "bodyHtml": "<ul>\r\n          <li><strong>A Shift to Terror:</strong> Frustrated by the military defeat of Arab states, the **PFLP** (Popular Front for the Liberation of Palestine) turned to international terrorism to force global attention onto the Palestinian issue.</li>\r\n          <li><strong>Dawson's Field Hijackings (September 1970):</strong> The PFLP hijacked four Western passenger aircraft and flew them to Dawson's Field in Jordan, blowing up three empty jets on live television.</li>\r\n          <li><strong>International Attitudes:</strong> The spectacular nature of these hijackings brought the Palestine issue onto the front pages of world news, raising global awareness of the refugee plight but also alienating Western public opinion due to the violence.</li>\r\n          <li><strong>Black September & PLO Expulsion:</strong> Outraged by this challenge to his sovereignty, Jordan's King Hussein launched a brutal military crackdown in September 1970. The Jordanian army expelled the PLO, killing thousands of fighters and forcing the PLO to relocate its headquarters to Lebanon.</li>\r\n        </ul>"
        },
        {
          "title": "Step 4: The Munich Olympics Massacre (1972)",
          "isSplit": true,
          "bodyHtml": '<div class="mastery-text-column">\r\n          <div class="mastery-card-body card-content">\r\n            <ul>\r\n              <li><strong>The Attack:</strong> A radical Palestinian splinter group named <strong>Black September</strong> broke into the Olympic Village during the 1972 Munich games and took the Israeli athletic team hostage.</li>\r\n              <li><strong>The Outcome:</strong> A botched German rescue attempt led to the deaths of all 11 Israeli athletes.</li>\r\n              <li><strong>The Repercussions:</strong> The massacre succeeded in gaining massive global publicity for the Palestinian cause, but it horrified the world and resulted in Israel launching fierce, targeted reprisal assassinations (Operation Wrath of God).</li>\r\n            </ul>\r\n            \r\n            <div class="examiner-tip-box">\r\n              <span class="tip-icon">\u{1F4A1}</span>\r\n              <div>\r\n                <strong>Examiner Tip:</strong> For a 4-mark consequence question on Munich, mention both the global media attention drawn to the Palestinian cause AND the fierce Israeli retaliation!\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="mastery-media-column">\r\n          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">\r\n            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">\u{1F4DD} Source B: Black September Statement (1972)</strong>\r\n            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">\r\n              \\"We have not come to kill, but to liberate our brothers held in Zionist jails. The world has ignored us for twenty-four years; Munich has forced them to see that we still exist.\\"\r\n            </p>\r\n          </div>\r\n        </div>'
        }
      ],
      "dualPerspective": {
        "leftHeadline": "Securing the Promised Land (Keep It)",
        "leftText": "Israel must keep the territories. They provide a vital military 'buffer zone' to protect Israel from future invasions. Furthermore, places like East Jerusalem contain the holiest sites in Judaism, and the land was promised to the Jewish people by God.",
        "rightHeadline": "An Illegal Military Occupation (Give It Back)",
        "rightText": "Taking land by force is completely illegal under international law. Under UN Resolution 242, Israel must withdraw its armed forces and return this stolen land to its rightful Arab owners in exchange for a lasting peace.",
        "neutralTitle": "\u2696\uFE0F Dual Interpretation: The Post-1967 Captured Territories",
        "tipHtml": '<div class="examiner-tip-box" style="margin-top: 18px; margin-bottom: 0;">\r\n        <span class="tip-icon">\u{1F4A1}</span>\r\n        <div>\r\n          <strong>AO2 Exam Skill:</strong> Examiners award top marks when you can explain why different groups reacted completely differently to the exact same event!\r\n        </div>'
      },
      "narrativeChain": {
        "chainData": [
          {
            "id": "chain_victory",
            "value": "victory",
            "label": "Israel wins the 1967 Six Day War"
          },
          {
            "id": "chain_hijackings",
            "value": "hijackings",
            "label": "PFLP airplane hijackings (Dawson's Field)"
          },
          {
            "id": "chain_black_sep",
            "value": "black_sep",
            "label": "King Hussein expels PLO (Black September)"
          }
        ],
        "correctOrder": [
          "victory",
          "hijackings",
          "black_sep"
        ],
        "successText": "Excellent! Israel's 1967 victory pushed the Palestinians to use terrorism, such as the 1970 airplane hijackings, which provoked King Hussein into expelling the PLO from Jordan.",
        "failText": "Timeline out of order! Chronological flow: Six Day War (1967) -> Dawson's Field Hijackings (1970) -> Black September PLO expulsion (1970\u201371). Click the highlighted blocks to reset."
      },
      "knowledgeCheck": [],
      "importanceAnalyser": null,
      "questionVault": [
        {
          "question": "Explain one consequence of the terrorist attack at the Munich Olympics. (4 marks)",
          "answer": "<strong>Model Consequence:</strong> One consequence of the Munich massacre was that it provoked a fierce, years-long retaliation campaign by Israel. Under Prime Minister Golda Meir, Israel launched 'Operation Wrath of God', a series of targeted covert assassinations by the Mossad to track down and kill the planners of the attack across Europe and the Middle East."
        },
        {
          "question": "Explain the importance of the occupied territories for Arab\u2013Israeli relations after the Six Day War (1967). (8 marks)",
          "answer": "<strong>Importance Analysis:</strong> The occupied territories became the main obstacle to peace. For Arab states, reclaiming the Sinai, Golan Heights, and West Bank was a matter of national pride, leading to the Khartoum Summit's refusal to compromise. For Israel, these areas provided vital defensive buffers, meaning they would not withdraw without security guarantees, causing a total diplomatic deadlock."
        }
      ],
      "doNowStarter": {
        "prevSubtopicId": "subtopic_2_1",
        "prevSubtopicTitle": "Topic 2.1: The Build-up to the Six Day War",
        "image": "assets/sources/western_wall_1967.jpg",
        "sourceUrl": "https://en.wikipedia.org/wiki/Paratroopers_at_the_Western_Wall",
        "provenance": "Israeli soldiers at the Western Wall in East Jerusalem immediately after capturing it during the Six Day War, June 1967.",
        "seeThinkWonder": {
          "see": "Observe the emotional expressions of the soldiers standing in front of the ancient stone wall.",
          "think": "What was the religious and political significance of capturing East Jerusalem for the State of Israel?",
          "wonder": "How did the rapid defeat of three Arab armies affect the morale of the Palestinian population in the occupied territories?"
        },
        "recallQuestions": [
          {
            "question": "What nationalist group was founded in Cairo in 1964 as an umbrella for Palestinian resistance?",
            "answer": "The PLO."
          },
          {
            "question": "Which Palestinian guerrilla group was founded by Yasser Arafat and began launching raids in 1965?",
            "answer": "Fatah."
          },
          {
            "question": "Which global superpower provided false intelligence to Egypt in May 1967 claiming Israel was massing troops?",
            "answer": "The Soviet Union (USSR)."
          },
          {
            "question": "Which narrow waterway did Nasser blockade in May 1967, cutting off Israel's southern port of Eilat?",
            "answer": "The Straits of Tiran."
          },
          {
            "question": "On what exact date did Israel launch its preemptive airstrikes, beginning the Six-Day War?",
            "answer": "5 June 1967."
          }
        ]
      },
      "causalLinks": {
        "question": "Explain the consequences of the Six Day War (1967) for the Middle East.",
        "successText": "Great job! You linked the 1967 war to military occupation, diplomatic blockades, and international terror.",
        "factors": [
          {
            "id": "factor_occ",
            "title": "Capture of East Jerusalem and West Bank",
            "linkageText": "Brought over a million Palestinians under direct Israeli military occupation, fueling long-term resistance."
          },
          {
            "id": "factor_khartoum",
            "title": "The Khartoum Summit 'Three Nos'",
            "linkageText": "Rejected peace, recognition, or negotiation with Israel, causing a total diplomatic deadlock."
          },
          {
            "id": "factor_terror",
            "title": "Rise of PFLP airline hijackings",
            "linkageText": "Shifted Palestinian resistance tactics toward international terrorism to force global attention."
          }
        ]
      }
    },
    "subtopic_2_3": {
      "specChecklist": [
        "Egyptian relations with Israel, the USA, the USSR and other Arab states.",
        "Israel's consolidation of control of the occupied territories.",
        "Key events of the Yom Kippur War (1973) and its aftermath."
      ],
      "headerTitle": '<i class="fa-solid fa-book-open"></i>\r\n        \u{1F393} GCSE CORE MASTERY: Key Topic 2.3 - Israel and Egypt, 1967\u201373',
      "headerIntro": "To achieve top marks in this topic, you must understand why Anwar Sadat decided to launch a surprise attack on Yom Kippur in 1973, how the superpowers intervened, and how the OPEC oil embargo triggered a global economic crisis.",
      "steps": [
        {
          "title": "Step 1: Relations and Consolidation (1967\u201373)",
          "isSplit": false,
          "bodyHtml": "<ul>\r\n          <li><strong>Sadat's Realignment:</strong> Anwar Sadat succeeded Nasser in 1970. To court the <strong>USA</strong> and force a diplomatic solution, he expelled <strong>15,000</strong> Soviet military advisers in 1972. He secretly rebuilt relations with other <strong>Arab states</strong>, coordinating with Syria for a two-front war and securing Saudi commitment to use oil as a diplomatic weapon.</li>\r\n          <li><strong>Israel's Consolidation:</strong> Israel consolidated its control of the occupied territories. It built the **Bar-Lev Line** (a massive 25-metre sand wall fortification along the Suez Canal) and established the first civilian Jewish settlements in the Sinai, West Bank, and Golan Heights to assert long-term control.</li>\r\n        </ul>"
        },
        {
          "title": "Step 2: Coordinated Surprise & Canal Crossing (October 1973)",
          "isSplit": true,
          "bodyHtml": `<div class="mastery-text-column">\r
          <div class="mastery-card-body card-content">\r
            <ul>\r
              <li><strong>Coordinated Attack:</strong> On <strong>6 October 1973</strong>, Egypt and Syria launched a surprise assault on <strong>Yom Kippur</strong> (the holiest day in Judaism), catching Israel unprepared.</li>\r
              <li><strong>Breaching the Canal:</strong> Egyptian troops crossed the Suez Canal, using high-pressure **water cannons** to blast holes in the sand wall.</li>\r
              <li><strong>Missile Defense:</strong> Soviet-supplied surface-to-air missiles (SAMs) shot down Israeli jets, shielding the Egyptian bridgehead from counter-attacks.</li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="mastery-media-column">\r
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">\r
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">\u{1F4DD} Source A: Egyptian War Communiqu\xE9 (Oct 1973)</strong>\r
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">\r
              "Our heroic forces have crossed the Suez Canal in force, seized the enemy's fortifications along the Bar-Lev Line, and established secure bridgeheads. The myth of Zionist invincibility is shattered!"\r
            </p>\r
          </div>\r
        </div>`
        },
        {
          "title": "Step 3: Superpower Confrontation & IDF Counter-Offensive",
          "isSplit": true,
          "bodyHtml": '<div class="mastery-text-column">\r\n          <div class="mastery-card-body card-content">\r\n            <p>The local war escalated into a dangerous Cold War superpower crisis:</p>\r\n            <ul>\r\n              <li><strong>The Airlifts:</strong> When Israel suffered massive tank and aircraft losses, U.S. President Nixon launched a huge emergency airlift (<strong>Operation Nickel Grass</strong>). The **USSR** launched a matching supply lift to Egypt and Syria.</li>\r\n              <li><strong>Israeli Counter-Crossing:</strong> Armed with U.S. supplies, the IDF counter-attacked. Israeli divisions led by Ariel Sharon crossed the Suez Canal into Egypt, surrounding the Egyptian Third Army. This prompted a tense superpower standoff, leading the US to put its nuclear forces on alert (DEFCON 3).</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class="mastery-media-column">\r\n          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">\r\n            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">\u{1F4DD} Source B: OPEC Announcement (October 1973)</strong>\r\n            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">\r\n              "We have decided to cease oil shipments to the United States and other countries supporting the Israeli aggression. This embargo will remain until occupied Arab territories are restored and Palestinian rights are secured."\r\n            </p>\r\n          </div>\r\n        </div>'
        },
        {
          "title": "Step 4: The OPEC Oil Crisis and Ceasefire (1973)",
          "isSplit": false,
          "bodyHtml": "<ul>\r\n          <li><strong>The Oil Embargo:</strong> Furious at U.S. military support for Israel, Arab oil ministers cut production and embargoed oil exports to the West, quadrupling prices. This caused fuel shortages, electricity rationing, and recession in the USA and Europe.</li>\r\n          <li><strong>UN Resolution 338:</strong> To avoid direct conflict, the USA and USSR jointly negotiated a ceasefire under **Resolution 338**.</li>\r\n          <li><strong>The Aftermath:</strong> Egypt held its canal positions, restoring Arab pride, while Israel realized its security could not rely purely on military force. This paved the way for future peace negotiations.</li>\r\n        </ul>"
        }
      ],
      "dualPerspective": null,
      "narrativeChain": {
        "chainData": [
          {
            "id": "chain_surprise",
            "value": "surprise",
            "label": "Egypt and Syria launch surprise Yom Kippur attack"
          },
          {
            "id": "chain_airlift",
            "value": "airlift",
            "label": "US launches Operation Nickel Grass airlift to Israel"
          },
          {
            "id": "chain_embargo",
            "value": "embargo",
            "label": "OPEC imposes oil embargo on Western supporters"
          }
        ],
        "correctOrder": [
          "surprise",
          "airlift",
          "embargo"
        ],
        "successText": "Excellent! The surprise attack triggered the U.S. airlift, which then provoked the Arab oil embargo against Western nations.",
        "failText": "Timeline out of order! Chronological flow: Surprise attack (6 Oct) -> US Airlift (mid-Oct) -> Oil Embargo (17 Oct). Click the highlighted blocks to reset."
      },
      "knowledgeCheck": [],
      "importanceAnalyser": null,
      "questionVault": [
        {
          "question": "Explain one consequence of the OPEC oil embargo (1973). (4 marks)",
          "answer": "<strong>Model Consequence:</strong> One consequence of the OPEC oil embargo was a severe global energy and economic crisis in Western nations. By quadrupling oil prices, it caused runaway inflation, fuel rationing, and industrial recession in the USA and Europe, forcing Western governments to adopt more neutral foreign policies in the Middle East."
        },
        {
          "question": "Explain the importance of the Yom Kippur War (1973) for Arab-Israeli relations. (8 marks)",
          "answer": "<strong>Importance Analysis:</strong> The war was highly important because it restored Arab military pride and broke the post-1967 diplomatic deadlock. By successfully breaching the Bar-Lev Line and holding canal positions, Sadat proved that Israel was not militarily invincible. This forced the U.S. to actively broker negotiations, leading directly to Kissinger's shuttle diplomacy and the eventual Camp David Accords."
        }
      ],
      "doNowStarter": {
        "prevSubtopicId": "subtopic_2_2",
        "prevSubtopicTitle": "Topic 2.2: The Aftermath of the 1967 War",
        "image": "assets/sources/egyptian_crossing_1973.jpg",
        "sourceUrl": "https://en.wikipedia.org/wiki/Yom_Kippur_War",
        "provenance": "Egyptian infantry crossing the Suez Canal during the opening stages of the Yom Kippur War, October 1973.",
        "seeThinkWonder": {
          "see": "Observe the soldiers crossing the canal in small boats and scrambling up the steep sandy banks.",
          "think": "How did the surprise timing of the attack on Yom Kippur benefit the Egyptian and Syrian forces?",
          "wonder": "What role did Soviet-supplied surface-to-air missiles play in shielding these crossings from the Israeli Air Force?"
        },
        "recallQuestions": [
          {
            "question": "Which occupied territories did Israel capture from Egypt during the Six-Day War?",
            "answer": "The Sinai Peninsula and Gaza Strip."
          },
          {
            "question": "Which elevated occupied territory was captured by Israel from Syria?",
            "answer": "The Golan Heights."
          },
          {
            "question": "What was the number of the UN Security Council Resolution passed in November 1967 to introduce 'Land for Peace'?",
            "answer": "UN Resolution 242."
          },
          {
            "question": "What famous 'Three Nos' did Arab leaders issue at the Khartoum Summit in August 1967?",
            "answer": "No peace, no recognition, and no negotiation with Israel."
          },
          {
            "question": "What is the acronym of the radical Marxist Palestinian group that pioneered aircraft hijackings in the late 1960s?",
            "answer": "The PFLP."
          }
        ]
      },
      "causalLinks": {
        "question": "Explain why the Yom Kippur War of 1973 had a major global impact.",
        "successText": "Well done! You connected the battlefield events of 1973 to superpower brinkmanship and global economic shockwaves.",
        "factors": [
          {
            "id": "factor_bar",
            "title": "Breaching of the Bar-Lev Line",
            "linkageText": "Shattered the myth of Israeli military invincibility, restoring Arab military pride."
          },
          {
            "id": "factor_airlift",
            "title": "US airlift Operation Nickel Grass",
            "linkageText": "Saved Israel from heavy armor losses but provoked Arab oil ministers into taking economic reprisals."
          },
          {
            "id": "factor_embargo",
            "title": "The OPEC Oil Embargo",
            "linkageText": "Quadrupled global oil prices, triggering a severe energy crisis and recession in Western nations."
          }
        ]
      }
    },
    "subtopic_3_1": {
      "specChecklist": [
        "The significance of the oil crisis and the involvement of the USA and the USSR.",
        "Kissinger, 'shuttle diplomacy' and the reopening of the Suez Canal.",
        "Sadat's visit to Israel (1977), Begin's visit to Egypt (1977), US President Carter and Camp David (1978) and the Treaty of Washington (1979)."
      ],
      "headerTitle": '<i class="fa-solid fa-book-open"></i>\r\n        \u{1F393} GCSE CORE MASTERY: Key Topic 3.1 - Diplomatic negotiations',
      "headerIntro": "To achieve top marks in this topic, you need to understand how the Yom Kippur War forced the USA to intervene, leading to Henry Kissinger's shuttle diplomacy, Anwar Sadat's Knesset speech, and the historic Camp David Accords.",
      "steps": [
        {
          "title": "Step 1: The Global Oil Crisis & Superpower Rivalry",
          "isSplit": false,
          "bodyHtml": "<ul>\r\n          <li><strong>The Global Impact:</strong> The OPEC oil embargo of 1973 quadrupled oil prices, causing severe inflation, energy shortages, and recession in Western economies. This crisis made stabilizing the Middle East a critical priority for the West.</li>\r\n          <li><strong>Superpower Involvement:</strong> The Cold War rivals played opposing roles. The **Soviet Union** backed Arab regimes with weapons to expand its influence. In contrast, the **USA** took the diplomatic lead to protect Western oil supplies, exclude the Soviets, and bring Egypt into the American sphere of influence.</li>\r\n        </ul>"
        },
        {
          "title": "Step 2: Kissinger's Shuttle Diplomacy (1974\u201375)",
          "isSplit": false,
          "bodyHtml": "<ul>\r\n          <li><strong>The Mediator:</strong> U.S. Secretary of State **Henry Kissinger** conducted intensive travel between Middle Eastern capitals to broker agreements. Because Arab states refused to sit in the same room as Israelis, Kissinger literally flew back and forth (hence **Shuttle Diplomacy**).</li>\r\n          <li><strong>Early Success:</strong> He successfully negotiated disengagement agreements, separating the armies. This led to Egypt reopening the **Suez Canal** to global shipping in June 1975.</li>\r\n        </ul>"
        },
        {
          "title": "Step 3: The Reciprocal Visits: Jerusalem & Ismailia (1977)",
          "isSplit": true,
          "bodyHtml": `<div class="mastery-text-column">\r
          <div class="mastery-card-body card-content">\r
            <p>Frustrated by the slow pace of diplomacy, President Sadat made a bold, historic gamble in November 1977:</p>\r
            <ul>\r
              <li><strong>Sadat in Jerusalem (Nov 1977):</strong> Sadat traveled to Jerusalem and addressed the **Knesset** (Israeli Parliament), offering peace in exchange for occupied lands. He became the first Arab leader to recognize Israel, breaking the Khartoum 'Three Nos'.</li>\r
              <li><strong>Begin in Egypt (Dec 1977):</strong> Prime Minister **Menachem Begin** reciprocated by visiting Sadat in Ismailia, Egypt. This return visit proved that bilateral negotiations had replaced direct military hostility.</li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="mastery-media-column">\r
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">\r
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">\u{1F4DD} Source A: Anwar Sadat's Knesset Speech (1977)</strong>\r
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">\r
              \\"I have come to you today on solid ground, to shape a new life, to establish peace. We all live on this land, and we must learn to exist in peace. I declare that we accept to live with you in permanent peace and justice.\\</p>\r
          </div>\r
        </div>`
        },
        {
          "title": "Step 4: The Camp David Accords (September 1978)",
          "isSplit": true,
          "bodyHtml": `<div class="mastery-text-column">\r
          <div class="mastery-card-body card-content">\r
            <p>U.S. President **Jimmy Carter** invited Sadat and Menachem Begin to the secluded Maryland retreat, **Camp David**, for secret negotiations:</p>\r
            <ul>\r
              <li><strong>The Accord:</strong> After 13 days of intense, isolated negotiations, the leaders signed the Camp David Accords.</li>\r
              <li><strong>The Terms:</strong>\r
                <ul>\r
                  <li><strong>Sinai for Peace:</strong> Israel agreed to return the entire Sinai Peninsula to Egypt in exchange for a formal peace treaty.</li>\r
                  <li><strong>Palestinian Framework:</strong> A plan was established to grant self-government to Palestinians in the West Bank and Gaza.</li>\r
                </ul>\r
              </li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="mastery-media-column">\r
          <div class="map-vector-box" style="padding: 0;">\r
            <img class="map-image-display" src="assets/sources/sadat_carter_begin_1978.jpg" onerror="if (this.src !== 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Sadat_and_Begin_clean3.jpg') { this.referrerPolicy = 'no-referrer'; this.src = 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Sadat_and_Begin_clean3.jpg'; }" alt="Camp David Accords" style="width: 100%; height: 100%; object-fit: contain; display: block; border-radius: var(--border-radius-md);">\r
          </div>\r
        </div>`,
          "scholarlyDepth": {
            "title": "Scholarly Perspective: Carter's Personal Diplomacy",
            "body": "Jimmy Carter's personal intervention was highly important because he isolated the Israeli and Egyptian delegations from the media at the secluded Camp David retreat, preventing public grandstanding. Furthermore, Carter personally drafted and revised over 20 versions of the treaty text, resolving disputes over Sinai settlements and Palestinian autonomy, which kept Begin and Sadat from walking out of the talks."
          }
        },
        {
          "title": "Step 5: The Treaty of Washington (March 1979)",
          "isSplit": true,
          "bodyHtml": `<div class="mastery-text-column">\r
          <div class="mastery-card-body card-content">\r
            <p>The Accords culminated in the signing of the formal **Treaty of Washington** (March 1979):</p>\r
            <ul>\r
              <li><strong>Historic Peace:</strong> Egypt became the very first Arab state to sign a peace treaty and recognize Israel, in exchange for complete Sinai withdrawal.</li>\r
              <li><strong>The Backlash:</strong> Egypt was expelled from the Arab League, and Sadat was denounced as a traitor. In October 1981, Sadat was assassinated by Islamic extremists in Cairo.</li>\r
              <li><strong>Mubarak's Rule:</strong> Sadat's successor, <strong>Hosni Mubarak</strong>, assumed the presidency, preserving the peace treaty with Israel and ruling Egypt for three decades.</li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="mastery-media-column">\r
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">\r
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">\u{1F4DD} Source B: The Treaty of Washington (1979)</strong>\r
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">\r
              "The state of war between the Parties will be terminated and peace will be established between them... Israel will withdraw all its armed forces and civilians from the Sinai, and Egypt will recognize Israel's sovereign rights."\r
            </p>\r
          </div>\r
        </div>`
        }
      ],
      "dualPerspective": null,
      "narrativeChain": {
        "chainData": [
          {
            "id": "chain_knesset",
            "value": "knesset",
            "label": "Anwar Sadat visits Jerusalem and Knesset"
          },
          {
            "id": "chain_camp_david",
            "value": "camp_david",
            "label": "Begin and Sadat sign Camp David Accords"
          },
          {
            "id": "chain_treaty_1979",
            "value": "treaty_1979",
            "label": "Egypt-Israel Peace Treaty signed in Washington"
          }
        ],
        "correctOrder": [
          "knesset",
          "camp_david",
          "treaty_1979"
        ],
        "successText": "Excellent! Sadat's Knesset speech paved the way for the 1978 Camp David Accords, culminating in the 1979 formal peace treaty.",
        "failText": "Timeline out of order! Chronological flow: Knesset Speech (1977) -> Camp David Accords (1978) -> Peace Treaty (1979). Click the highlighted blocks to reset."
      },
      "knowledgeCheck": [],
      "importanceAnalyser": null,
      "questionVault": [
        {
          "question": "Explain one consequence of Anwar Sadat's visit to Jerusalem in 1977. (4 marks)",
          "answer": "<strong>Model Consequence:</strong> One consequence of Anwar Sadat's visit to Jerusalem was that it shattered the Khartoum Summit's 'Three Nos' policy. By speaking directly at the Knesset, Sadat broke the psychological taboo of Arab non-recognition of Israel, leading directly to the bilateral peace talks at Camp David."
        },
        {
          "question": "Explain the importance of the Camp David Accords (1978) for Arab-Israeli relations. (8 marks)",
          "answer": "<strong>Importance Analysis:</strong> The Camp David Accords were highly important because they provided the framework for the first-ever peace treaty between Israel and an Arab state. In exchange for the complete withdrawal of Israeli troops and settlers from the Sinai, Egypt formally recognized Israel, removing the most powerful Arab military threat and structurally dividing the Arab alliance against Israel."
        }
      ],
      "doNowStarter": {
        "prevSubtopicId": "subtopic_2_3",
        "prevSubtopicTitle": "Topic 2.3: Israel and Egypt, 1967\u201373",
        "image": "assets/sources/sadat_carter_begin_1978.jpg",
        "sourceUrl": "https://en.wikipedia.org/wiki/Camp_David_Accords",
        "provenance": "Anwar Sadat, Jimmy Carter, and Menachem Begin at the Camp David peace retreat, September 1978.",
        "seeThinkWonder": {
          "see": "Observe the relaxed posture and smiles of the three leaders standing outside in a woodsy setting.",
          "think": "What compromises did Begin and Sadat make to secure this historic diplomatic breakthrough?",
          "wonder": "How did other Arab nations react to Egypt signing a separate peace treaty with Israel?"
        },
        "recallQuestions": [
          {
            "question": "Who succeeded Gamal Abdel Nasser as President of Egypt in 1970?",
            "answer": "Anwar Sadat."
          },
          {
            "question": "What was the name of the heavily fortified sand wall built by Israel along the Suez Canal?",
            "answer": "The Bar-Lev Line."
          },
          {
            "question": "On which Jewish holy day did Egypt and Syria launch their surprise coordinated attack in 1973?",
            "answer": "Yom Kippur."
          },
          {
            "question": "What was the name of the massive U.S. military airlift that supplied Israel during the 1973 war?",
            "answer": "Operation Nickel Grass."
          },
          {
            "question": "What economic 'weapon' did OPEC use in 1973 to punish Western supporters of Israel?",
            "answer": "An oil embargo."
          }
        ]
      },
      "causalLinks": {
        "question": "Explain why Egypt and Israel signed a peace treaty in 1979.",
        "successText": "Excellent! You mapped the progression of peace: Knesset breakthrough, Maryland isolation, and Sinai withdrawal.",
        "factors": [
          {
            "id": "factor_knesset",
            "title": "Sadat's 1977 Knesset Speech",
            "linkageText": "Broke the psychological barrier of the Khartoum 'Three Nos' by offering peace directly in Jerusalem."
          },
          {
            "id": "factor_carter",
            "title": "Jimmy Carter's Camp David Mediation",
            "linkageText": "Forced Begin and Sadat into 13 days of isolated talks to draft a 'Land for Peace' framework."
          },
          {
            "id": "factor_sinai",
            "title": "Israeli withdrawal from Sinai",
            "linkageText": "Returned occupied Egyptian land in exchange for Egypt recognizing Israel's right to exist in peace."
          }
        ]
      }
    },
    "subtopic_3_2": {
      "specChecklist": [
        "Arafat's speech to the UN (1974).",
        "The significance of PLO activities in Lebanon.",
        "Israeli reprisals, the invasion of Lebanon (1982) and the results.",
        "The Israeli occupied territories and the First Palestinian Intifada (1987\u201393)."
      ],
      "headerTitle": '<i class="fa-solid fa-book-open"></i>\r\n        \u{1F393} GCSE CORE MASTERY: Key Topic 3.2 - The Palestinian Issue, Lebanon, and the Intifada (1974\u20131993)',
      "headerIntro": "To achieve top marks in this topic, you need to understand how the PLO operated in Lebanon, why Israel launched a massive invasion in 1982, and how the frustration of Palestinian civilians led to the eruption of the First Intifada.",
      "steps": [
        {
          "title": "Step 1: Arafat at the UN & 'Fatahland'",
          "isSplit": false,
          "bodyHtml": "<ul>\r\n          <li><strong>The Olive Branch:</strong> In 1974, Yasser Arafat addressed the UN, famously stating he had come bearing an olive branch and a freedom fighter's gun. This resulted in the PLO gaining international recognition and UN observer status.</li>\r\n          <li><strong>Lebanon:</strong> After being expelled from Jordan in 1970, the PLO moved its headquarters to Lebanon. They established a 'state within a state' (nicknamed <strong>Fatahland</strong>) in southern Lebanon, where they launched rocket attacks and raids into northern Israel.</li>\r\n          <li><strong>Escalation:</strong> The PLO's presence upset the balance of power in Lebanon, which contributed to the outbreak of the Lebanese Civil War in 1975, and provoked frequent Israeli air strike reprisals.</li>\r\n        </ul>"
        },
        {
          "title": "Step 2: The Invasion of Lebanon (1982)",
          "isSplit": false,
          "bodyHtml": "<ul>\r\n          <li><strong>The Trigger:</strong> In June 1982, following an assassination attempt on the Israeli ambassador in London by a Palestinian splinter group, Israel launched a massive invasion called <strong>Operation Peace for Galilee</strong>.</li>\r\n          <li><strong>Sharon's Plan:</strong> The official aim was to push the PLO back 40km to create a buffer zone for northern Israel, but Defence Minister <strong>Ariel Sharon</strong> secretly planned to destroy the PLO completely and install a friendly Christian government in Beirut.</li>\r\n          <li><strong>The Siege of Beirut:</strong> The IDF rapidly bypassed UN peacekeepers and surrounded the Lebanese capital. Israel subjected West Beirut to a devastating two-month bombardment, cutting off food and water. This forced the PLO to agree to evacuate; Arafat and approximately 14,000 fighters were exiled to <strong>Tunis</strong> under international supervision.</li>\r\n        </ul>",
          "scholarlyDepth": {
            "title": "Scholarly Perspective: The Sabra and Shatila Investigation",
            "body": "The 1982 invasion of Lebanon culminated in a massive domestic crisis for Israel. Following the massacre of hundreds of Palestinian refugees in Beirut by Israeli-allied Christian Phalangists, the Kahan Commission found Defense Minister Ariel Sharon 'personally responsible' for failing to prevent the slaughter, forcing his resignation."
          }
        },
        {
          "title": "Step 3: The Sabra and Shatila Massacres (1982)",
          "isSplit": true,
          "bodyHtml": `<div class="mastery-text-column">\r
          <div class="mastery-card-body card-content">\r
            <ul>\r
              <li><strong>The Atrocity:</strong> In September 1982, following the assassination of the Lebanese President, Lebanese Christian Phalangist militias entered the <strong>Sabra and Shatila</strong> refugee camps and brutally massacred hundreds of Palestinian and Lebanese civilians over three days.</li>\r
              <li><strong>Israel's Complicity:</strong> Although the Phalangists carried out the killings, the IDF controlled the area and had allowed the militias into the camps.</li>\r
              <li><strong>The Fallout:</strong> Israel\u2019s own <strong>Kahan Commission</strong> found the government indirectly responsible. This resulted in massive anti-war protests inside Israel, forced Ariel Sharon to resign as Defence Minister, and severely damaged Israel's international reputation.</li>\r
            </ul>\r
            <div class="examiner-tip-box">\r
              <span class="tip-icon">\u{1F4A1}</span>\r
              <div>\r
                <strong>Examiner Tip:</strong> For an 8-mark 'Narrative Account' question on the PLO in Lebanon, use the expulsion to Tunis and the Sabra/Shatila massacres as your powerful end-point!\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="mastery-media-column">\r
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">\r
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">\u{1F4DD} Source A: KAHAN COMMISSION FINDINGS (1983)</strong>\r
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">\r
              "The decision to allow the Phalangists into the refugee camps was made without consideration of the danger... Ariel Sharon bears personal responsibility for ignoring the danger of acts of vengeance and bloodshed."\r
            </p>\r
          </div>\r
        </div>`,
          "scholarlyDepth": {
            "title": "Scholarly Perspective: The Grassroots Intifada",
            "body": "Historians emphasize that the First Intifada in 1987 was a grassroots, local movement that took Yasser Arafat's PLO leadership in Tunis completely by surprise. It led to the formation of Hamas as a direct rival to Fatah, claiming that Fatah's diplomatic efforts were ineffective in ending the military occupation."
          }
        },
        {
          "title": "Step 4: The First Intifada (1987\u201393)",
          "isSplit": true,
          "bodyHtml": `<div class="mastery-text-column">\r
          <div class="mastery-card-body card-content">\r
            <ul>\r
              <li><strong>The Spark:</strong> In December 1987, spontaneous mass protests broke out after an Israeli army truck killed four Palestinians in Gaza. Decades of frustration under Israeli occupation exploded into a grassroots uprising known as the <strong>Intifada</strong> (meaning 'shaking off').</li>\r
              <li><strong>David vs. Goliath:</strong> Palestinian youths famously fought heavily armed Israeli soldiers by throwing stones and petrol bombs. The uprising also featured mass civil disobedience, strikes, and boycotts of Israeli goods.</li>\r
              <li><strong>The Iron Fist:</strong> Under the government of Likud Prime Minister <strong>Yitzhak Shamir</strong>, Israel's Defence Minister Yitzhak Rabin responded with a harsh <strong>'Iron Fist' policy</strong> (using tear gas, beatings, and live ammunition) to suppress the uprising, drawing massive international condemnation.</li>\r
              <li><strong>Rise of Hamas:</strong> The uprising led to the emergence of a new, radical Islamic militant group called <strong>Hamas</strong>, which challenged the PLO's leadership and rejected compromise.</li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="mastery-media-column">\r
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">\r
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">\u{1F4DD} Source B: PALESTINIAN INTIFADA LEAFLET (1988)</strong>\r
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">\r
              "We throw stones because we have no other voice. The occupation has taken our lands and our youth. We will strike and boycott their markets until they leave our homes and recognize our state."\r
            </p>\r
          </div>\r
        </div>`
        }
      ],
      "dualPerspective": null,
      "narrativeChain": {
        "chainData": [
          {
            "id": "chain_rocket_attacks",
            "value": "rocket_attacks",
            "label": "PLO 'Fatahland' rocket attacks from Lebanon"
          },
          {
            "id": "chain_peace_galilee",
            "value": "peace_galilee",
            "label": "Israel launches Operation Peace for Galilee"
          },
          {
            "id": "chain_siege_expelled",
            "value": "siege_expelled",
            "label": "Siege of Beirut & expulsion of PLO to Tunis"
          }
        ],
        "correctOrder": [
          "rocket_attacks",
          "peace_galilee",
          "siege_expelled"
        ],
        "successText": "Excellent! The PLO's cross-border raids provoked Israel into launching a massive invasion in 1982, which ultimately resulted in the Siege of Beirut and the expulsion of Arafat to Tunis.",
        "failText": "Timeline out of order! Chronological flow: Rocket Attacks / Fatahland (1970s) -> Invasion (June 1982) -> Beirut Siege & Expulsion (August 1982). Click the highlighted blocks to reset."
      },
      "knowledgeCheck": [],
      "importanceAnalyser": null,
      "questionVault": [
        {
          "question": "Explain one consequence of the Sabra and Shatila massacre (1982). (4 marks)",
          "answer": "<strong>Model Consequence:</strong> One consequence of the Sabra and Shatila massacre was severe political fallout and protests inside Israel. Public outrage over IDF complicity forced the government to set up the Kahan Commission, which found Defence Minister Ariel Sharon personally responsible for ignoring the danger, forcing his resignation and severely damaging Israel's international standing."
        },
        {
          "question": "Explain the importance of PLO activities in Lebanon (1970\u201382) for Israeli security. (8 marks)",
          "answer": "<strong>Importance Analysis:</strong> PLO activities in Lebanon were important because they posed a direct threat to civilian settlements in northern Israel. The creation of a militarized 'Fatahland' enclave allowed rocket attacks and border raids to occur routinely, eroding Israel's border security and eventually provoking the massive 1982 pre-emptive land invasion."
        }
      ],
      "doNowStarter": {
        "prevSubtopicId": "subtopic_3_1",
        "prevSubtopicTitle": "Topic 3.1: The Camp David Accords & Peace Treaty",
        "image": "assets/sources/intifada_palestine_1987.jpg",
        "sourceUrl": "https://en.wikipedia.org/wiki/First_Intifada",
        "provenance": "A Palestinian youth throwing a stone at an Israeli military vehicle in Gaza during the First Intifada, December 1987.",
        "seeThinkWonder": {
          "see": "Observe the young boy in a civilian area throwing a rock at a heavily armored military vehicle.",
          "think": "How does the stone represent both the frustration of the population and the asymmetrical nature of the conflict?",
          "wonder": "What role did local grassroots committees play in organizing the Intifada without PLO leadership?"
        },
        "recallQuestions": [
          {
            "question": "What term describes Henry Kissinger's mediation process of flying back and forth between Middle Eastern capitals?",
            "answer": "Shuttle Diplomacy."
          },
          {
            "question": "In what year did the Suez Canal officially reopen to international shipping after 8 years of closure?",
            "answer": "1975."
          },
          {
            "question": "Which Israeli parliament building did Egyptian President Anwar Sadat address during his historic 1977 visit?",
            "answer": "The Knesset."
          },
          {
            "question": "At which secluded Maryland retreat did Jimmy Carter host peace talks in September 1978?",
            "answer": "Camp David."
          },
          {
            "question": "In what year did Egypt and Israel sign their formal peace treaty in Washington?",
            "answer": "1979."
          }
        ]
      },
      "causalLinks": {
        "question": "Explain the consequences of the 1982 Lebanon War.",
        "successText": "Correct! The Lebanon invasion displaced the PLO, triggered political crisis in Israel, and shifted resistance inside the territories.",
        "factors": [
          {
            "id": "factor_exile",
            "title": "Siege of Beirut by Ariel Sharon",
            "linkageText": "Forced Yasser Arafat and the PLO leadership to evacuate and relocate their base of operations to Tunisia."
          },
          {
            "id": "factor_massacre",
            "title": "Sabra and Shatila massacres",
            "linkageText": "Triggered international outrage and massive domestic protests in Tel Aviv against the Defence Minister."
          },
          {
            "id": "factor_tunis",
            "title": "Relocation of PLO to Tunis",
            "linkageText": "Distanced the leadership from the streets, paving the way for the local, grassroots First Intifada in 1987."
          }
        ]
      }
    },
    "subtopic_3_3": {
      "specChecklist": [
        "The significance of Arafat's renunciation of terrorism in a speech at the UN (1988).",
        "Changing superpower policies in the Middle East: US involvement in the Gulf War (1991), and the end of the Cold War.",
        "Arafat, Rabin and the Oslo Accords (1993); the setting up of the Palestinian National Authority; Israel-Jordan peace treaty (1994); Oslo II (1995)."
      ],
      "headerTitle": '<i class="fa-solid fa-book-open"></i>\r\n        \u{1F393} GCSE CORE MASTERY: Key Topic 3.3 - The Oslo Peace Process and Attempts at a Solution (1988\u20131995)',
      "headerIntro": "To achieve top marks in this topic, you need to understand how the end of the Cold War and the Gulf War forced the PLO and Israel to the negotiating table, leading to the historic Oslo Accords and the tragic assassination of Yitzhak Rabin.",
      "steps": [
        {
          "title": "Step 1: Arafat Renounces Terrorism (1988)",
          "isSplit": false,
          "bodyHtml": "<ul>\r\n          <li><strong>The Speech:</strong> Yasser Arafat addressed the UN in <strong>Geneva</strong> and announced a massive shift in PLO policy. He formally recognised Israel's right to exist, accepted UN Resolution 242 (the 'Land for Peace' formula), and officially renounced the use of terrorism.</li>\r\n          <li><strong>The Impact:</strong> This major concession resulted in the USA agreeing to open diplomatic dialogue with the PLO for the first time, breaking a long-standing political deadlock.</li>\r\n        </ul>",
          "scholarlyDepth": {
            "title": "Scholarly Perspective: The Gulf War Impact on the PLO",
            "body": "Arafat's decision to support Saddam Hussein's 1990 invasion of Kuwait was a catastrophic diplomatic blunder. In retaliation, Kuwait expelled 400,000 Palestinian workers and Gulf states cut off all funding to the PLO, bringing the organization to near-bankruptcy and forcing them to accept the secret Oslo talks."
          }
        },
        {
          "title": "Step 2: Changing Superpower Policies (1989\u20131991)",
          "isSplit": false,
          "bodyHtml": "<ul>\r\n          <li><strong>End of the Cold War:</strong> Soviet reforms under <strong>Mikhail Gorbachev</strong> ended the Cold War, and the collapse of the <strong>USSR</strong> meant the PLO lost its main supplier of weapons and funding. Meanwhile, 200,000 Soviet Jews migrated to Israel, increasing pressure on Palestinian land. Global events severely weakened the PLO's bargaining position and forced them to negotiate.</li>\r\n          <li><strong>The Gulf War (1991):</strong> Arafat disastrously supported Saddam Hussein's invasion of Kuwait. This caused angry Arab states (like Saudi Arabia and Kuwait) to cut off all financial aid to the PLO, leaving them bankrupt.</li>\r\n          <li><strong>The Madrid Conference:</strong> U.S. President <strong>George H.W. Bush</strong> emerged from the 1991 Gulf War as the leader of the sole remaining superpower and used this leverage (including threatening to withhold $10 billion in loan guarantees) to force Yitzhak Shamir and Arab nations to negotiate at the <strong>Madrid Peace Conference</strong>.</li>\r\n        </ul>"
        },
        {
          "title": "Step 3: The Oslo I Accords (1993)",
          "isSplit": true,
          "bodyHtml": `<div class="mastery-text-column">\r
          <div class="mastery-card-body card-content">\r
            <ul>\r
              <li><strong>Secret Talks:</strong> Guided by key PLO negotiator <strong>Mahmoud Abbas</strong>, highly secret back-channel negotiations in Norway led Israeli Prime Minister <strong>Yitzhak Rabin</strong> and Yasser Arafat to sign the Oslo I Accords in Washington in September 1993.</li>\r
              <li><strong>Mutual Recognition:</strong> The PLO formally recognised the State of Israel, and Israel recognised the PLO as the legitimate representative of the Palestinian people.</li>\r
              <li><strong>The PNA:</strong> The agreement created the <strong>Palestinian National Authority (PNA)</strong>, giving Palestinians limited self-rule, initially in the Gaza Strip and the West Bank town of Jericho.</li>\r
              <li><strong>Peace with Jordan:</strong> The optimism of Oslo led to <strong>Jordan</strong> becoming the second Arab state to sign a full peace treaty with Israel in 1994.</li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div class="mastery-media-column">\r
          <div class="lesson-image-wrapper">\r
            <img class="lesson-source-img" src="assets/sources/rabin_clinton_arafat.jpg" onerror="if (this.src !== 'https://upload.wikimedia.org/wikipedia/commons/7/73/Oslo-Accordsmaxresdefault-1.jpg') { this.referrerPolicy = 'no-referrer'; this.src = 'https://upload.wikimedia.org/wikipedia/commons/7/73/Oslo-Accordsmaxresdefault-1.jpg'; }" alt="Rabin, Clinton, Arafat handshake" style="width: 100%; border-radius: var(--border-radius-sm);">\r
            <div class="lesson-image-caption">\r
              <strong>Source:</strong> Rabin, Clinton, and Arafat shaking hands on the White House lawn (13 Sept 1993).\r
              <a href="https://en.wikipedia.org/wiki/Oslo_I_Accord" target="_blank" style="color: var(--primary); text-decoration: underline; display: inline-flex; align-items: center; gap: 4px; margin-top: 4px;"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Original Webpage</a>\r
            </div>\r
          </div>\r
          <div class="examiner-tip-box" style="margin: 0; background: var(--bg-app); border-left: 4px solid var(--primary); font-size: 0.85rem; padding: 14px;">\r
            <strong style="display: block; margin-bottom: 6px; color: var(--primary);">\u{1F4DD} Source A: Yitzhak Rabin's Oslo Speech (1993)</strong>\r
            <p style="font-style: italic; line-height: 1.4; color: var(--text-muted); margin: 0;">\r
              "We say to you today in a loud and clear voice: Enough of blood and tears. Enough! We harbor no hatred toward you... We, like you, are people who want to build a home, to plant a tree, to love..."\r
            </p>\r
          </div>\r
        </div>`
        },
        {
          "title": "Step 4: Oslo II (1995) and the Collapse of Peace",
          "isSplit": false,
          "bodyHtml": `<ul>\r
          <li><strong>Oslo II:</strong> In 1995, the second Oslo agreement divided the West Bank into <strong>Areas A, B, and C</strong>, giving the PNA varying levels of control and preparing for democratic Palestinian elections.</li>\r
          <li><strong>Hamas Opposition:</strong> Radical Islamic militant groups like <strong>Hamas</strong> completely rejected the peace deal and launched devastating suicide bombings inside Israel to derail it.</li>\r
          <li><strong>Israeli Opposition:</strong> Right-wing Israelis and settlers were furious at the prospect of giving up 'Promised Land' to the Palestinians. They viewed Prime Minister Rabin as a traitor.</li>\r
          <li><strong>Rabin's Assassination:</strong> In November 1995, Yitzhak Rabin was assassinated at a peace rally by an Israeli religious extremist, <strong>Yigal Amir</strong>. This horrific event shattered the optimism of the Oslo Accords and brought the peace process to a grinding halt.</li>\r
        </ul>\r
        <div class="examiner-tip-box">\r
          <span class="tip-icon">\u{1F4A1}</span>\r
          <div>\r
            <strong>Examiner Tip:</strong> For an 8-mark 'Narrative Account' question on the peace process, use Rabin's assassination by Yigal Amir in 1995 as your endpoint to show how the peace process was ultimately derailed!\r
          </div>\r
        </div>`,
          "scholarlyDepth": {
            "title": "Scholarly Perspective: The Assassin's Motive",
            "body": "Prime Minister Yitzhak Rabin was assassinated on 4 November 1995 by Yigal Amir, a right-wing Jewish law student. Amir stated he acted under 'din rodef' (the law of the pursuer), believing that ceding land to the Palestinians violated Jewish law and endangered Jewish lives, exposing the deep polarization inside Israeli society."
          }
        }
      ],
      "dualPerspective": null,
      "narrativeChain": {
        "chainData": [
          {
            "id": "chain_cold_gulf_war",
            "value": "cold_gulf_war",
            "label": "The End of the Cold War & Gulf War"
          },
          {
            "id": "chain_secret_norway",
            "value": "secret_norway",
            "label": "Secret talks in Norway"
          },
          {
            "id": "chain_oslo_accords",
            "value": "oslo_accords",
            "label": "The signing of the Oslo Accords"
          }
        ],
        "correctOrder": [
          "cold_gulf_war",
          "secret_norway",
          "oslo_accords"
        ],
        "successText": "Excellent! The collapse of Soviet funding and the fallout from the Gulf War weakened the PLO, forcing Arafat into secret talks in Norway that ultimately resulted in the historic Oslo Accords.",
        "failText": "Timeline out of order! Chronological flow: End of Cold War / Gulf War (1989\u201391) -> Secret Norway Talks (1992\u201393) -> Signing of Oslo Accords (Sept 1993). Click the highlighted blocks to reset."
      },
      "knowledgeCheck": [],
      "importanceAnalyser": null,
      "questionVault": [
        {
          "question": "Explain one consequence of Arafat's renunciation of terrorism (1988). (4 marks)",
          "answer": "<strong>Model Consequence:</strong> One consequence was that the USA agreed to open a direct diplomatic dialogue with the PLO for the first time. By renouncing violence, recognizing Israel's right to exist, and accepting UN Resolution 242, Arafat met long-standing US pre-conditions, bypassing Israeli objections and breaking a decades-old diplomatic quarantine."
        },
        {
          "question": "Explain the importance of the Oslo Accords (1993) for relations between Israel and the Palestinians. (8 marks)",
          "answer": "<strong>Importance Analysis:</strong> The Oslo Accords were important because they established formal mutual recognition between the state of Israel and the PLO, replacing warfare with diplomacy. It created the PNA to provide Palestinians with limited self-governance in the West Bank and Gaza, laying the administrative foundation for a future two-state solution."
        }
      ],
      "doNowStarter": {
        "prevSubtopicId": "subtopic_3_2",
        "prevSubtopicTitle": "Topic 3.2: Lebanon Invasion & First Intifada",
        "image": "assets/sources/rabin_clinton_arafat.jpg",
        "sourceUrl": "https://en.wikipedia.org/wiki/Oslo_I_Accord",
        "provenance": "Yitzhak Rabin, Bill Clinton, and Yasser Arafat sharing a historic handshake on the White House lawn during the Oslo I Accord signing, September 1993.",
        "seeThinkWonder": {
          "see": "Observe Clinton's open arms encouraging the handshake, and the slightly hesitant expressions of Rabin and Arafat.",
          "think": "Why was Yitzhak Rabin willing to shake hands with Arafat, a leader Israel had branded a terrorist for decades?",
          "wonder": "How did right-wing opposition in both societies eventually undermine the peace process initiated at Oslo?"
        },
        "recallQuestions": [
          {
            "question": "What nickname was given to the militarized enclave established by the PLO in southern Lebanon in the 1970s?",
            "answer": "Fatahland."
          },
          {
            "question": "What was the operational name of the massive Israeli land invasion of Lebanon in June 1982?",
            "answer": "Operation Peace for Galilee."
          },
          {
            "question": "To which North African city was Yasser Arafat and the PLO leadership exiled after the 1982 siege of Beirut?",
            "answer": "Tunis (Tunisia)."
          },
          {
            "question": "What was the name of the grassroots Palestinian civilian uprising that erupted in Gaza in December 1987?",
            "answer": "The First Intifada."
          },
          {
            "question": "What name was given to Defence Minister Yitzhak Rabin's harsh military response policy to the Intifada?",
            "answer": "The 'Iron Fist' policy."
          }
        ]
      },
      "causalLinks": {
        "question": "Explain why the Oslo Accords did not lead to a permanent peace by 1995.",
        "successText": "Perfect! You identified the core spoilers of the peace process: political assassination, extremist violence, and ongoing settlement expansion.",
        "factors": [
          {
            "id": "factor_assassination",
            "title": "Assassination of Yitzhak Rabin",
            "linkageText": "Removed the key Israeli partner committed to the peace process, leading to political instability."
          },
          {
            "id": "factor_hamas",
            "title": "Hamas suicide bombing campaigns",
            "linkageText": "Deranged the Israeli public's trust in security, fueling support for right-wing political opposition."
          },
          {
            "id": "factor_settlements",
            "title": "Expansion of Israeli settlements",
            "linkageText": "Convinced Palestinians that Israel was not genuinely committed to establishing a viable independent state."
          }
        ]
      }
    }
  };

  // src/mastery_data.js
  var MASTERY_DATA = {
    "subtopic_1_1": {
      title: "1.1: British Withdrawal and Creation of Israel",
      items: [
        {
          term: "British Mandate",
          definition: "League of Nations authority giving Britain control of Palestine (1920).",
          defendQuestion: "What was the name of the British governing authority?",
          defendOptions: ["British Mandate", "Zionist Accord", "UN Charter", "Syrian Covenant"],
          defendAnswer: "British Mandate"
        },
        {
          term: "Zionism",
          definition: "Nationalist movement aiming to create a Jewish homeland in Palestine.",
          defendQuestion: "What name is given to the homeland movement?",
          defendOptions: ["Pan-Arabism", "Socialism", "Zionism", "Imperialism"],
          defendAnswer: "Zionism"
        },
        {
          term: "Balfour Declaration",
          definition: "1917 British promise to support a Jewish national home.",
          defendQuestion: "Which 1917 document promised support?",
          defendOptions: ["Balfour Declaration", "S\xE8vres Protocol", "Sykes-Picot Accord", "White Paper"],
          defendAnswer: "Balfour Declaration"
        },
        {
          term: "King David Hotel",
          definition: "British administrative headquarters bombed by the Irgun in 1946.",
          defendQuestion: "Which headquarters was bombed in Jerusalem?",
          defendOptions: ["Knesset", "King David Hotel", "Suez Office", "Embassy"],
          defendAnswer: "King David Hotel"
        },
        {
          term: "Resolution 181",
          definition: "1947 UN Partition Plan allocating 55% of land to Jewish state.",
          defendQuestion: "Which UN resolution proposed partition?",
          defendOptions: ["Resolution 242", "Resolution 181", "Resolution 338", "Resolution 194"],
          defendAnswer: "Resolution 181"
        }
      ]
    },
    "subtopic_1_2": {
      title: "1.2: Aftermath of the 1948\u201349 War",
      items: [
        {
          term: "Green Line",
          definition: "The 1949 armistice borders that expanded Israel's territory to 79%.",
          defendQuestion: "What name is given to the 1949 armistice borders?",
          defendOptions: ["Green Line", "Bar-Lev Line", "Sinai Border", "UN Partition Line"],
          defendAnswer: "Green Line"
        },
        {
          term: "Al-Nakba",
          definition: "Catastrophe referring to the displacement of over 700,000 Palestinian Arabs.",
          defendQuestion: "What Arabic term describes the refugee crisis?",
          defendOptions: ["Al-Nakba", "Fedayeen", "Intifada", "Kibbutz"],
          defendAnswer: "Al-Nakba"
        },
        {
          term: "Law of Return",
          definition: "1950 Israeli law granting global Jews immediate citizenship.",
          defendQuestion: "Which law allows any Jew to claim citizenship?",
          defendOptions: ["Law of Return", "Zionist Charter", "Reparations Act", "Meredith Plan"],
          defendAnswer: "Law of Return"
        },
        {
          term: "Fedayeen",
          definition: "Guerrilla fighters launching raids into Israel from Gaza Strip.",
          defendQuestion: "What is the term for these guerrilla fighters?",
          defendOptions: ["Haganah", "Fedayeen", "Dixiecrats", "PFLP"],
          defendAnswer: "Fedayeen"
        },
        {
          term: "King Farouk",
          definition: "Egyptian monarch overthrown by Free Officers in 1952.",
          defendQuestion: "Who was the Egyptian King overthrown in 1952?",
          defendOptions: ["King Hussein", "King Farouk", "Anwar Sadat", "King Faisal"],
          defendAnswer: "King Farouk"
        }
      ]
    },
    "subtopic_1_3": {
      title: "1.3: Increased Tension, 1955\u201363",
      items: [
        {
          term: "Pan-Arabism",
          definition: "Ideology seeking to unify Arab states against Western influence and Israel.",
          defendQuestion: "What ideology did President Nasser champion?",
          defendOptions: ["Zionism", "Pan-Arabism", "Socialism", "Containment"],
          defendAnswer: "Pan-Arabism"
        },
        {
          term: "Czech Arms Deal",
          definition: "1955 Soviet-backed weapons transaction that bypassed Western embargoes.",
          defendQuestion: "From which country did Nasser buy Soviet arms?",
          defendOptions: ["Czechoslovakia", "Syria", "West Germany", "Jordan"],
          defendAnswer: "Czechoslovakia"
        },
        {
          term: "Suez Canal",
          definition: "waterway nationalised by Nasser in July 1956.",
          defendQuestion: "Which waterway did Nasser nationalise?",
          defendOptions: ["Straits of Tiran", "Suez Canal", "River Jordan", "Gulf of Aqaba"],
          defendAnswer: "Suez Canal"
        },
        {
          term: "Protocol of S\xE8vres",
          definition: "Secret collusion treaty signed by Britain, France, and Israel.",
          defendQuestion: "What was the name of the secret collusion pact?",
          defendOptions: ["Protocol of S\xE8vres", "UN Resolution 181", "Balfour Accord", "Suez Pact"],
          defendAnswer: "Protocol of S\xE8vres"
        },
        {
          term: "UNEF",
          definition: "UN peacekeepers deployed as buffer forces after the Suez Crisis.",
          defendQuestion: "Which buffer force was deployed on the borders?",
          defendOptions: ["UNRWA", "UNEF", "IDF", "ARVN"],
          defendAnswer: "UNEF"
        }
      ]
    },
    "subtopic_2_1": {
      title: "2.1: The Six Day War, 1967",
      items: [
        {
          term: "The PLO",
          definition: "Umbrella organization representing Palestinian nationalists (founded 1964).",
          defendQuestion: "Which umbrella group was formed at Cairo in 1964?",
          defendOptions: ["The PLO", "Fatah", "PFLP", "UNRWA"],
          defendAnswer: "The PLO"
        },
        {
          term: "River Jordan",
          definition: "Water source diverted by Syria, triggering military skirmishes.",
          defendQuestion: "Which river was at the center of the water diversion dispute?",
          defendOptions: ["Suez Canal", "River Jordan", "Nile River", "Euphrates"],
          defendAnswer: "River Jordan"
        },
        {
          term: "Samu Raid",
          definition: "IDF reprisal attack on a Jordanian border village in 1966.",
          defendQuestion: "Which village did Israel raid in November 1966?",
          defendOptions: ["Deir Yassin", "Samu", "Munich", "Beirut"],
          defendAnswer: "Samu"
        },
        {
          term: "Straits of Tiran",
          definition: "Blockaded waterway that cut off Israel's southern port of Eilat.",
          defendQuestion: "Which waterway did Nasser blockade in May 1967?",
          defendOptions: ["Straits of Tiran", "Suez Canal", "Bosphorus", "Straits of Hormuz"],
          defendAnswer: "Straits of Tiran"
        },
        {
          term: "Pre-emptive strike",
          definition: "Surprise airstrike that destroyed the Egyptian air force on 5 June.",
          defendQuestion: "What type of attack did Israel initiate in 1967?",
          defendOptions: ["Pre-emptive strike", "Naval blockade", "Shuttle diplomacy", "Platform jump"],
          defendAnswer: "Pre-emptive strike"
        }
      ]
    },
    "subtopic_2_2": {
      title: "2.2: Aftermath of the 1967 War",
      items: [
        {
          term: "Resolution 242",
          definition: "UN resolution introducing the 'Land for Peace' formula.",
          defendQuestion: "Which resolution established 'Land for Peace'?",
          defendOptions: ["Resolution 181", "Resolution 242", "Resolution 338", "Resolution 194"],
          defendAnswer: "Resolution 242"
        },
        {
          term: "The 'Three Nos'",
          definition: "Khartoum Conference decision: No peace, no recognition, no negotiation.",
          defendQuestion: "What policy did the Khartoum Conference issue?",
          defendOptions: ["The 'Three Nos'", "Land for Peace", "Oslo Accords", "Eisenhower Veto"],
          defendAnswer: "The 'Three Nos'"
        },
        {
          term: "PFLP",
          definition: "Radical Palestinian group that pioneered aircraft hijackings.",
          defendQuestion: "Which group hijacked planes to Dawson's Field?",
          defendOptions: ["Fatah", "PFLP", "Hamas", "Irgun"],
          defendAnswer: "PFLP"
        },
        {
          term: "Black September",
          definition: "Extremist group that attacked Israeli athletes at the 1972 Olympics.",
          defendQuestion: "Which group carried out the Munich attack?",
          defendOptions: ["Black September", "PFLP", "Haganah", "Fatah"],
          defendAnswer: "Black September"
        },
        {
          term: "Wrath of God",
          definition: "Israeli Mossad covert assassination campaign targeting Munich attackers.",
          defendQuestion: "What was the name of the Israeli assassination campaign?",
          defendOptions: ["Operation Focus", "Operation Kadesh", "Wrath of God", "Peace for Galilee"],
          defendAnswer: "Wrath of God"
        }
      ]
    },
    "subtopic_2_3": {
      title: "2.3: Israel and Egypt, 1967\u201373",
      items: [
        {
          term: "Anwar Sadat",
          definition: "Nasser's successor who expelled Soviet advisers and planned the 1973 attack.",
          defendQuestion: "Who became Egyptian President in 1970?",
          defendOptions: ["King Farouk", "Anwar Sadat", "Gamal Nasser", "Yasser Arafat"],
          defendAnswer: "Anwar Sadat"
        },
        {
          term: "Bar-Lev Line",
          definition: "Fortified sand wall built by Israel along the Suez Canal.",
          defendQuestion: "What was the name of the Israeli Suez defensive line?",
          defendOptions: ["Bar-Lev Line", "Green Line", "DEFCON Line", "Sinai Wall"],
          defendAnswer: "Bar-Lev Line"
        },
        {
          term: "Yom Kippur",
          definition: "Holy day in October 1973 when Egypt and Syria launched their surprise assault.",
          defendQuestion: "On which Jewish holy day did the war start?",
          defendOptions: ["Yom Kippur", "Passover", "Rosh Hashanah", "Hanukkah"],
          defendAnswer: "Yom Kippur"
        },
        {
          term: "Nickel Grass",
          definition: "U.S. airlift operation supplying military equipment to Israel.",
          defendQuestion: "What was the name of the U.S. airlift?",
          defendOptions: ["Operation Focus", "Nickel Grass", "Black Arrow", "S\xE8vres Airlift"],
          defendAnswer: "Nickel Grass"
        },
        {
          term: "Oil Embargo",
          definition: "OPEC tactic of cutting oil production to punish Israel's supporters.",
          defendQuestion: "What economic weapon did OPEC use in 1973?",
          defendOptions: ["Oil Embargo", "Suez blockade", "Bank freeze", "Trade tariff"],
          defendAnswer: "Oil Embargo"
        }
      ]
    },
    "subtopic_3_1": {
      title: "3.1: Diplomatic Negotiations",
      items: [
        {
          term: "Henry Kissinger",
          definition: "U.S. Secretary of State who mediated early peace disengagements.",
          defendQuestion: "Who conducted shuttle diplomacy in 1974-75?",
          defendOptions: ["Henry Kissinger", "Jimmy Carter", "Leonid Brezhnev", "Richard Nixon"],
          defendAnswer: "Henry Kissinger"
        },
        {
          term: "Shuttle Diplomacy",
          definition: "Kissinger's process of flying between hostile capitals to negotiate.",
          defendQuestion: "What is the term for this flying mediation process?",
          defendOptions: ["Shuttle Diplomacy", "Nikkei Grass", "S\xE8vres Collusion", "Oslo channel"],
          defendAnswer: "Shuttle Diplomacy"
        },
        {
          term: "Knesset Speech",
          definition: "Historic 1977 address by Anwar Sadat offering peace in Jerusalem.",
          defendQuestion: "Where did Sadat deliver his peace proposal speech?",
          defendOptions: ["White House lawn", "The Knesset", "Khartoum summit", "Camp David"],
          defendAnswer: "The Knesset"
        },
        {
          term: "Camp David",
          definition: "Maryland retreat where Carter mediated 13 days of secret talks (1978).",
          defendQuestion: "At which retreat were the 1978 accords mediated?",
          defendOptions: ["Camp David", "Geneva", "Oslo", "Munich"],
          defendAnswer: "Camp David"
        },
        {
          term: "Peace Treaty",
          definition: "1979 Washington agreement formalizing diplomatic relations.",
          defendQuestion: "In what year was the Egypt-Israel Peace Treaty signed?",
          defendOptions: ["1973", "1978", "1979", "1993"],
          defendAnswer: "1979"
        }
      ]
    },
    "subtopic_3_2": {
      title: "3.2: Lebanon and the First Intifada",
      items: [
        {
          term: "Peace for Galilee",
          definition: "1982 Israeli invasion of Lebanon targeting the PLO.",
          defendQuestion: "What was the operational name of the 1982 Lebanon invasion?",
          defendOptions: ["Peace for Galilee", "Operation Focus", "Operation Kadesh", "Nickel Grass"],
          defendAnswer: "Peace for Galilee"
        },
        {
          term: "Ariel Sharon",
          definition: "Israeli Defence Minister who planned the controversial march to Beirut.",
          defendQuestion: "Who planned the 1982 siege of Beirut?",
          defendOptions: ["Moshe Sharett", "Ariel Sharon", "Yitzhak Rabin", "David Elazar"],
          defendAnswer: "Ariel Sharon"
        },
        {
          term: "First Intifada",
          definition: "Grassroots civilian uprising in Occupied Territories (1987-1993).",
          defendQuestion: "What name describes the 1987 Palestinian uprising?",
          defendOptions: ["Al-Nakba", "First Intifada", "Fedayeen", "Black September"],
          defendAnswer: "First Intifada"
        },
        {
          term: "Iron Fist",
          definition: "Yitzhak Rabin's harsh military response policy to the Intifada.",
          defendQuestion: "What was Israel's Intifada response policy called?",
          defendOptions: ["Iron Fist", "Land for Peace", "Conception", "Wrath of God"],
          defendAnswer: "Iron Fist"
        },
        {
          term: "Tunisia",
          definition: "Country where Arafat and the PLO were exiled after Beirut (1982).",
          defendQuestion: "To which country did the PLO evacuate in 1982?",
          defendOptions: ["Jordan", "Syria", "Tunisia", "Egypt"],
          defendAnswer: "Tunisia"
        }
      ]
    },
    "subtopic_3_3": {
      title: "3.3: Attempts at a Solution, 1974\u201395",
      items: [
        {
          term: "Oslo I Accords",
          definition: "1993 agreements introducing Palestinian self-government in occupied zones.",
          defendQuestion: "Which accords were signed in September 1993?",
          defendOptions: ["Oslo I Accords", "Camp David Accords", "Geneva Treaties", "S\xE8vres Accords"],
          defendAnswer: "Oslo I Accords"
        },
        {
          term: "PNA",
          definition: "Palestinian National Authority, created to govern Gaza and parts of West Bank.",
          defendQuestion: "What governing body was created by the Oslo Accords?",
          defendOptions: ["PNA", "PLO", "UNRWA", "Arab League"],
          defendAnswer: "PNA"
        },
        {
          term: "Yitzhak Rabin",
          definition: "Israeli Prime Minister assassinated in 1995 for signing the peace deal.",
          defendQuestion: "Which Prime Minister was assassinated in 1995?",
          defendOptions: ["Yitzhak Rabin", "Menachem Begin", "Ariel Sharon", "Benjamin Netanyahu"],
          defendAnswer: "Yitzhak Rabin"
        },
        {
          term: "Hamas",
          definition: "Militant group that launched suicide bombings to derail the peace process.",
          defendQuestion: "Which group launched bombings in the 1990s opposing Oslo?",
          defendOptions: ["Fatah", "Hamas", "PFLP", "Irgun"],
          defendAnswer: "Hamas"
        },
        {
          term: "Assassination",
          definition: "Tragic shooting of Rabin by a right-wing Jewish extremist, Yigal Amir.",
          defendQuestion: "Who assassinated Yitzhak Rabin in 1995?",
          defendOptions: ["A right-wing Jewish extremist", "A Hamas member", "A Syrian agent", "A PLO sniper"],
          defendAnswer: "A right-wing Jewish extremist"
        }
      ]
    }
  };

  // src/decisions_data.js
  var DECISIONS_DATA = [
    {
      id: "game_1",
      title: "The Proclamation of Independence",
      series: "Diplomatic Hotline",
      topic: "Key Topic 1: The birth of the state of Israel, 1945\u201363",
      role: "Prime Minister David Ben-Gurion (May 1948)",
      icon: "fa-solid fa-flag",
      crisis: "The British Mandate expires tonight. You must decide whether to officially proclaim the independent State of Israel now, even though five Arab armies are massing on your borders, threatening an immediate full-scale invasion.",
      phase1: {
        choiceA: {
          text: "Delay the proclamation to seek a diplomatic truce mediated by the US.",
          fallout: "The US State Department is relieved, but the Zionist Executive is furious. British troops withdraw, leaving a power vacuum. Arab forces seize strategic border posts unopposed.",
          choice1: {
            text: "Declare independence later under military occupation.",
            verdict: "Total collapse of strategic positions. Israel starts the war from a position of severe weakness without global recognition or control of Jerusalem.",
            isHistorical: false
          },
          choice2: {
            text: "Agree to a temporary UN trusteeship over Palestine.",
            verdict: "The Zionist dream is suspended indefinitely. You lose the momentum of Holocaust sympathy, and the territory remains under international control.",
            isHistorical: false
          }
        },
        choiceB: {
          text: "Officially declare the State of Israel immediately.",
          fallout: "President Truman recognizes Israel instantly, but five Arab armies launch a coordinated invasion. The newly formed IDF must defend the borders with limited weapons.",
          choice1: {
            text: "Focus all forces on defending border settlements.",
            verdict: "The Arab armies cut off Jerusalem. The Old City falls, and the capital is lost, resulting in a fractured state.",
            isHistorical: false
          },
          choice2: {
            text: "Secure the Jerusalem corridor and launch counter-offensives.",
            verdict: "Historical Path: The IDF successfully holds off the initial assault, establishes the Jerusalem corridor, and subsequently expands its territory, resulting in the 1949 Armistice agreements.",
            isHistorical: true
          }
        }
      }
    },
    {
      id: "game_2",
      title: "The Suez Canal Stand",
      series: "Diplomatic Hotline",
      topic: "Key Topic 1: The birth of the state of Israel, 1945\u201363",
      role: "President Gamal Abdel Nasser (July 1956)",
      icon: "fa-solid fa-water",
      crisis: "The United States has abruptly withdrawn its funding for the Aswan High Dam. Your prestige is on the line, and you need to secure funding to modernise Egypt. You are considering nationalising the Suez Canal Company, which is owned by British and French shareholders.",
      phase1: {
        choiceA: {
          text: "Negotiate with the West and accept alternative loans with strict conditions.",
          fallout: "The USA and Britain offer a smaller loan, but demand oversight of Egypt's national budget and foreign policy.",
          choice1: {
            text: "Accept the conditions to ensure the dam is built safely.",
            verdict: "Your popularity collapses. The Egyptian military views you as a Western puppet, and you are overthrown in a coup.",
            isHistorical: false
          },
          choice2: {
            text: "Reject the loans and cancel the Aswan Dam project.",
            verdict: "Egypt's industrialization fails. Siltation and floods continue to ravage the Nile valley, damaging your economic legacy.",
            isHistorical: false
          }
        },
        choiceB: {
          text: "Nationalise the Suez Canal Company immediately.",
          fallout: "Britain, France, and Israel launch a secret joint military invasion, capturing Port Said and the Sinai Peninsula.",
          choice1: {
            text: "Wage a conventional military battle against the invaders.",
            verdict: "Egypt's army is completely destroyed. You are forced to surrender, the canal is returned to the West, and your presidency ends in defeat.",
            isHistorical: false
          },
          choice2: {
            text: "Block the canal by sinking ships and appeal to the US and UN.",
            verdict: "Historical Path: President Eisenhower is furious at the Anglo-French action and pressures them financially. The UN orders a ceasefire, and the invaders withdraw in humiliation, making you a hero of Pan-Arabism.",
            isHistorical: true
          }
        }
      }
    },
    {
      id: "game_3",
      title: "The Yom Kippur Surprise",
      series: "Diplomatic Hotline",
      topic: "Key Topic 2: The escalating conflict, 1964\u201373",
      role: "President Anwar Sadat (October 1973)",
      icon: "fa-solid fa-plane-up",
      crisis: "Geopolitical diplomacy is stalled, and Israel refuses to negotiate over the Sinai Peninsula. You must decide whether to launch a high-risk coordinated surprise attack across the Suez Canal on the Jewish holy day of Yom Kippur.",
      phase1: {
        choiceA: {
          text: "Wait for a diplomatic solution through UN and US mediation.",
          fallout: "No progress is made. Israel continues to build permanent settlements in Sinai, and your military commanders plot a coup to remove you for inaction.",
          choice1: {
            text: "Launch a desperate unilateral assault without Syria.",
            verdict: "The IDF easily repels the uncoordinated attack. Cairo is threatened, and Egypt faces total defeat.",
            isHistorical: false
          },
          choice2: {
            text: "Accept the status quo and focus on domestic affairs.",
            verdict: "Egypt remains economically stagnant and isolated in the Arab world, and the Sinai is permanently integrated into Israel.",
            isHistorical: false
          }
        },
        choiceB: {
          text: "Launch a coordinated surprise assault with Syria on Yom Kippur.",
          fallout: "Your forces successfully cross the canal and breach the Bar-Lev Line. However, the US launches a massive airlift to supply Israel, and the IDF launches a counter-attack.",
          choice1: {
            text: "Order your tanks to advance deep into the Sinai desert beyond your missile cover.",
            verdict: "Disaster. The Israeli Air Force destroys your armor in the open desert, and the IDF crosses the canal, threatening Cairo.",
            isHistorical: false
          },
          choice2: {
            text: "Dig in under your SAM-missile umbrella and demand ceasefire talks.",
            verdict: "Historical Path: You hold your positions, proving Egypt can fight. The superpower ceasefire (Resolution 338) is signed. Your military success forces the US to broker peace negotiations, leading to the Camp David Accords.",
            isHistorical: true
          }
        }
      }
    },
    {
      id: "game_4",
      title: "The Oslo Breakthrough",
      series: "Diplomatic Hotline",
      topic: "Key Topic 3: Attempts at a solution, 1974\u201395",
      role: "Prime Minister Yitzhak Rabin (September 1993)",
      icon: "fa-solid fa-handshake",
      crisis: "Months of secret back-channel negotiations in Norway have resulted in the Oslo I Accords. To achieve peace, you must agree to recognize the PLO (which many Israelis view as a terrorist group) and grant Palestinians self-rule in Gaza and Jericho.",
      phase1: {
        choiceA: {
          text: "Refuse the Oslo Accords to appease conservative Israeli politicians.",
          fallout: "The secret talks leak. The First Intifada continues to escalate, and international criticism of Israel's military response grows.",
          choice1: {
            text: "Escalate the military suppression of the Intifada.",
            verdict: "Israel becomes a global pariah. Economic boycotts severely damage your economy, and the cycle of violence worsens.",
            isHistorical: false
          },
          choice2: {
            text: "Negotiate only with moderate local Palestinian leaders, bypassing Arafat.",
            verdict: "Arafat and the PLO denounce the local leaders as collaborators. The talks collapse, and radical factions seize control of the streets.",
            isHistorical: false
          }
        },
        choiceB: {
          text: "Sign the Oslo Accords and shake hands with Yasser Arafat.",
          fallout: "You receive the Nobel Peace Prize, but face massive protests from right-wing Israelis and settler movements, while Hamas launches suicide bombings.",
          choice1: {
            text: "Halt the peace process and freeze all withdrawals.",
            verdict: "The PLO resumes armed struggle. The accords are declared dead, and you lose all international goodwill.",
            isHistorical: false
          },
          choice2: {
            text: "Continue implementation of the Accords despite the violence.",
            verdict: "Historical Path: You courageously push forward to Oslo II. However, the domestic hostility reaches a boiling point, and you are assassinated by a right-wing Jewish extremist in November 1995. The peace process stalls, but the PNA structure remains.",
            isHistorical: true
          }
        }
      }
    }
  ];

  // src/mindmap_data.js
  var MINDMAP_DATA = {
    "subtopic_1_1": {
      title: "The British Withdrawal and the Creation of Israel",
      nodes: [
        "Palestine governed under British League of Nations Mandate",
        "Horrors of the Holocaust increase global sympathy for a Jewish state",
        "Jewish insurgency actions like the Irgun bombing of the King David Hotel",
        "SS Exodus turned back in 1947, creating a public relations disaster",
        "UN Partition Plan (Resolution 181) allocates 55% of land to Jewish state",
        "Proclamation of the State of Israel by David Ben-Gurion in May 1948"
      ]
    },
    "subtopic_1_2": {
      title: "Aftermath of the 1948\u201349 War",
      nodes: [
        "Israel wins war, expanding territory to 79% of Mandate Palestine",
        "Jordan annexes the West Bank; Egypt takes military control of Gaza",
        "Refugee crisis (Al-Nakba) displaces over 700,000 Palestinian Arabs",
        "UNRWA established in 1949 to provide refugee relief camps",
        "Israel passes Law of Return in 1950 granting global Jewish citizenship",
        "Fedayeen launch guerrilla raids into Israel from the Gaza Strip"
      ]
    },
    "subtopic_1_3": {
      title: "Increased Tension, 1955\u201363",
      nodes: [
        "Rise of President Nasser in Egypt and the ideology of Pan-Arabism",
        "Gaza border raids and Czech Arms Deal shift military balance",
        "Nasser nationalises the Suez Canal to fund the Aswan High Dam",
        "Secret Protocol of S\xE8vres collusion between Britain, France, and Israel",
        "Israel invades Sinai (October 1956) during the Suez Crisis",
        "UN UNEF peacekeepers deployed as buffer forces on borders"
      ]
    },
    "subtopic_2_1": {
      title: "The Six Day War, 1967",
      nodes: [
        "Cairo Conference sponsors creation of PLO and Fatah border raids",
        "Conflicts over Syria's Headwater Diversion Plan on the River Jordan",
        "Samu reprisal raid in Jordan and shooting down of Syrian MiG jets",
        "Soviet Union provides false intelligence of Israeli troop build-ups",
        "Nasser blockades Straits of Tiran, cutting off Israel's southern port",
        "Israel launches pre-emptive airstrikes destroying Arab air forces"
      ]
    },
    "subtopic_2_2": {
      title: "Aftermath of the 1967 War",
      nodes: [
        "Israel occupies Sinai, Gaza, West Bank, East Jerusalem, and Golan Heights",
        "UN Resolution 242 introduces 'Land for Peace' formula",
        "Arab League issues defiant 'Three Nos' at Khartoum Conference",
        "Palestinian resistance shifts to international terror hijacking campaigns",
        "PFLP blows up three hijacked passenger planes at Dawson's Field",
        "Munich Olympic Games hostage crisis by Black September group"
      ]
    },
    "subtopic_2_3": {
      title: "Israel and Egypt, 1967\u201373",
      nodes: [
        "Anwar Sadat becomes Egyptian President and expels Soviet advisers",
        "Israel builds the heavily fortified Bar-Lev Line sand wall",
        "Egypt and Syria launch surprise attack on Yom Kippur (October 1973)",
        "US airlift operation Nickel Grass saves Israel from armored losses",
        "OPEC imposes oil embargo on West, triggering energy crisis",
        "UN Resolution 338 enforces joint ceasefire and demands negotiations"
      ]
    },
    "subtopic_3_1": {
      title: "Diplomatic Negotiations",
      nodes: [
        "US Secretary of State Henry Kissinger conducts shuttle diplomacy",
        "Suez Canal reopened to international shipping in 1975",
        "Anwar Sadat makes historic visit to Jerusalem and Knesset",
        "Jimmy Carter mediates secret talks at Camp David in September 1978",
        "Signing of the formal Egypt-Israel Peace Treaty in Washington"
      ]
    },
    "subtopic_3_2": {
      title: "The Palestinian Issue",
      nodes: [
        "PLO bases in Lebanon trigger Israeli invasion (Operation Peace for Galilee)",
        "Ariel Sharon commands siege of Beirut; PLO exiled to Tunis",
        "Outbreak of First Intifada grassroots civilian uprising (1987)",
        "Youth target Israeli troops with stones, petrol bombs, and boycotts",
        "Israel responds with harsh military 'Iron Fist' policy"
      ]
    },
    "subtopic_3_3": {
      title: "Attempts at a Solution, 1974\u201395",
      nodes: [
        "Secret peace negotiations in Norway lead to Oslo I Accords (1993)",
        "Handshake between Rabin and Arafat on White House lawn",
        "Establishment of Palestinian National Authority in Occupied Territories",
        "Assassination of Prime Minister Rabin by right-wing Jewish extremist",
        "Peace process stalls amidst rise of Hamas suicide bombing campaigns"
      ]
    }
  };

  // src/image_fallback.js
  var WIKIMEDIA_MAPPING = {
    "assets/sources/portraits/grand_mufti.jpg": "https://upload.wikimedia.org/wikipedia/commons/0/03/Mohammed_Amin_al-Husseini-MJ.jpg",
    "assets/sources/intifada_palestine_1987.jpg": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Intifada_in_Gaza_Strip_%28FL45884441%29.jpg",
    "assets/sources/portraits/yasser_arafat.jpg": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Bundesarchiv_Bild_183-1982-0310-027%2C_Berlin%2C_Yasser_Arafat%2C_Erich_Honecker.jpg",
    "assets/sources/portraits/abdullah_i.jpg": "https://upload.wikimedia.org/wikipedia/commons/8/88/Abdullah_I_of_Jordan_portrait.jpg",
    "assets/sources/portraits/king_hussein.jpg": "https://upload.wikimedia.org/wikipedia/commons/3/3e/King-Hussein-bin-Talal-al-Hashemi-of-Jordan-with-an-automatic-weapon-352047190570.jpg",
    "assets/sources/portraits/mahmoud_abbas.jpg": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Sugiono_and_Mahmoud_Abbas_at_the_2024_BRICS_Summit_-_02.jpg",
    "assets/sources/portraits/golda_meir.jpg": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golda_Meir_%281964%29.jpg",
    "assets/sources/portraits/ariel_sharon.jpg": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Ariel_Sharon_official_portrait_2001.webp",
    "assets/sources/portraits/moshe_dayan.jpg": "https://upload.wikimedia.org/wikipedia/commons/1/14/Ludwig_Blum_-_Moshe_Dayan%2C_1949.JPG",
    "assets/sources/portraits/yitzhak_rabin.jpg": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Yitzhak_Rabin_1994_Portrait_%283x4_cropped%29.jpg",
    "assets/sources/portraits/ernest_bevin.jpg": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ernest_Bevin_MP.jpg",
    "assets/sources/portraits/yitzhak_shamir.jpg": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Premier_Lubbers_ontvangt_premier_Shamir_van_Israel_op_Catshuis%2C_Bestanddeelnr_932-8773_%28cropped%29.jpg",
    "assets/sources/portraits/henry_kissinger.jpg": "https://upload.wikimedia.org/wikipedia/commons/9/97/President_Trump_Meets_with_Henry_Kissinger_%2833787724293%29.jpg",
    "assets/sources/portraits/jimmy_carter.jpg": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Jimmy_Carter_1971_a.jpg",
    "assets/sources/portraits/menachem_begin.jpg": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Begin%2C_Carter_and_Sadat_at_Camp_David_1978.jpg",
    "assets/sources/palestinian_refugees_1948.jpg": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Palestinian_refugees_in_Ein_El_Hilweh_refugee_camp_in_Lebanon.jpg",
    "assets/sources/portraits/gamal_abdel_nasser.jpg": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Gamal_Abdel_Nasser_%28c._1960s%29.jpg",
    "assets/sources/portraits/george_habash.jpg": "https://upload.wikimedia.org/wikipedia/commons/8/8c/George_Habash_Portrait.jpg",
    "assets/sources/portraits/anwar_sadat.jpg": "https://upload.wikimedia.org/wikipedia/commons/b/be/Anwar_Sadat_official_portrait.jpg",
    "assets/sources/portraits/mikhail_gorbachev.jpg": "https://upload.wikimedia.org/wikipedia/commons/8/80/V%C3%A4ter_der_Einheit.jpg",
    "assets/sources/rabin_clinton_arafat.jpg": "https://upload.wikimedia.org/wikipedia/commons/7/73/Oslo-Accordsmaxresdefault-1.jpg",
    "assets/sources/egyptian_crossing_1973.jpg": "https://upload.wikimedia.org/wikipedia/commons/0/08/Egyptian_forces_crossing_the_Suez_Canal.jpg",
    "assets/sources/portraits/hosni_mubarak.jpg": "https://upload.wikimedia.org/wikipedia/commons/3/30/Hosni_Mubarak_illustration.png",
    "assets/sources/portraits/levi_eshkol.jpg": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Portrait_of_prime_minister_Levy_Eshkol._August_1963._D699-070.jpg",
    "assets/sources/straits_of_tiran.jpg": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Tiran_R01.jpg",
    "assets/sources/un_partition_plan_1947.svg": "https://upload.wikimedia.org/wikipedia/commons/b/bd/UN_Palestine_Partition_Versions_1947.jpg",
    "assets/sources/portraits/saddam_hussein.jpg": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Kurdish_fighters_and_a_destroyed_portrait_of_dictator_Saddam_Hussein_during_the_1991_Iraqi_uprisings.jpg",
    "assets/sources/western_wall_1967.jpg": "https://upload.wikimedia.org/wikipedia/commons/6/62/%D7%A6%D7%A0%D7%97%D7%A0%D7%99%D7%9D_%D7%91%D7%9B%D7%95%D7%AA%D7%9C_%D7%94%D7%9E%D7%A2%D7%A8%D7%91%D7%99.jpg",
    "assets/sources/portraits/folke_bernadotte.jpg": "https://upload.wikimedia.org/wikipedia/commons/9/99/Folke_Bernadotte%2C_Count_of_Wisborg.png",
    "assets/sources/portraits/bill_clinton.jpg": "https://upload.wikimedia.org/wikipedia/commons/4/49/44_Bill_Clinton_3x4.jpg",
    "assets/sources/sadat_carter_begin_1978.jpg": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Sadat_and_Begin_clean3.jpg",
    "assets/sources/portraits/hafez_al_assad.jpg": "https://upload.wikimedia.org/wikipedia/commons/9/95/Portrait_of_Hafez_al-Assad_in_1990s.jpg",
    "assets/sources/portraits/david_ben_gurion.jpg": "https://upload.wikimedia.org/wikipedia/commons/a/a9/David_Ben-Gurion_in_1952.jpg",
    "assets/sources/1949_armistice_map.png": "https://upload.wikimedia.org/wikipedia/commons/5/59/Members_of_Israeli_Delegation_to_Armistice_talks_in_Rhodes%2C_January_1949.jpg",
    "assets/sources/nasser_nationalizing_suez_1956.jpg": "https://upload.wikimedia.org/wikipedia/commons/2/23/Al-Ahram_Newspaper_Publish_Suez_Canal_Nationalization.jpg",
    "assets/sources/portraits/george_h_w_bush.jpg": "https://upload.wikimedia.org/wikipedia/commons/a/ac/George_and_Barbara_Bush_with_their_first_born_child_George_W._Bush%2C_while_Bush_was_a_student_at_Yale.jpg"
  };
  function getFallbackUrl(localPath) {
    if (!localPath) return null;
    const normPath = localPath.replace(/\\/g, "/");
    return WIKIMEDIA_MAPPING[normPath] || null;
  }

  // src/views.js
  function renderSidebarNav() {
    const container = document.getElementById("topics-nav-list");
    container.innerHTML = "";
    import_questions.QUIZ_DATA.forEach((topic) => {
      const section = document.createElement("div");
      section.style.marginBottom = "6px";
      const title = document.createElement("span");
      title.className = "nav-section-title";
      title.style.fontSize = "0.7rem";
      title.style.color = "var(--text-muted)";
      title.textContent = topic.title.split(":")[0];
      section.appendChild(title);
      topic.subtopics.forEach((sub) => {
        const a = document.createElement("a");
        a.className = "nav-item";
        a.id = `nav-subtopic-${sub.id}`;
        a.title = sub.title;
        const numCode = sub.title.match(/Topic\s(\d\.\d)/);
        const shortName = numCode ? numCode[1] : sub.title;
        const subDescText = sub.title.split(":").slice(1).join(":").trim() || "";
        const subQuestions = state.allQuestions.filter((q) => q.subtopicId === sub.id);
        const mastered = subQuestions.filter((q) => state.mastery[q.id]);
        const pct = subQuestions.length > 0 ? Math.round(mastered.length / subQuestions.length * 100) : 0;
        a.innerHTML = `
        <span class="nav-item-content" style="flex-shrink: 0; font-weight: 600;">
          <span class="topic-prefix">Topic </span>${shortName}
        </span>
        <span class="nav-item-desc" style="flex: 1; min-width: 0; margin: 0 8px; font-size: 0.72rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-align: left; opacity: 0.85;">
          ${subDescText}
        </span>
        <span class="nav-item-progress" id="nav-pct-${sub.id}" style="flex-shrink: 0;">${pct}%</span>
      `;
        a.addEventListener("click", () => {
          AudioEngine.play("click");
          switchView("subtopic", sub.id);
        });
        section.appendChild(a);
      });
      container.appendChild(section);
    });
    updateBookmarksUI();
  }
  function updateBookmarksUI() {
    const badge = document.getElementById("bookmarks-count-badge");
    if (badge) badge.textContent = state.bookmarks.length;
    const sideCount = document.getElementById("bookmarks-count-display");
    if (sideCount) sideCount.textContent = `${state.bookmarks.length} card${state.bookmarks.length === 1 ? "" : "s"} bookmarked`;
  }
  function updateGlobalStats() {
    const total = state.allQuestions.length;
    const totalMastered = state.allQuestions.filter((q) => state.mastery[q.id]).length;
    const overallPct = total > 0 ? Math.round(totalMastered / total * 100) : 0;
    const standardQuestions = state.allQuestions.filter((q) => q.type === "standard");
    const standardMastered = standardQuestions.filter((q) => state.mastery[q.id]).length;
    const standardPct = standardQuestions.length > 0 ? Math.round(standardMastered / standardQuestions.length * 100) : 0;
    const depthQuestions = state.allQuestions.filter((q) => q.type === "depth");
    const depthMastered = depthQuestions.filter((q) => state.mastery[q.id]).length;
    const depthPct = depthQuestions.length > 0 ? Math.round(depthMastered / depthQuestions.length * 100) : 0;
    document.getElementById("stat-overall-progress").textContent = `${overallPct}%`;
    document.getElementById("stat-overall-progress-bar").style.width = `${overallPct}%`;
    document.getElementById("stat-overall-fraction").textContent = `${totalMastered} / ${total}`;
    document.getElementById("stat-standard-progress").textContent = `${standardPct}%`;
    document.getElementById("stat-standard-progress-bar").style.width = `${standardPct}%`;
    document.getElementById("stat-standard-fraction").textContent = `${standardMastered} / ${standardQuestions.length}`;
    document.getElementById("stat-depth-progress").textContent = `${depthPct}%`;
    document.getElementById("stat-depth-progress-bar").style.width = `${depthPct}%`;
    document.getElementById("stat-depth-fraction").textContent = `${depthMastered} / ${depthQuestions.length}`;
    import_questions.QUIZ_DATA.forEach((topic) => {
      topic.subtopics.forEach((sub) => {
        const subQuestions = state.allQuestions.filter((q) => q.subtopicId === sub.id);
        const mastered = subQuestions.filter((q) => state.mastery[q.id]);
        const pct = subQuestions.length > 0 ? Math.round(mastered.length / subQuestions.length * 100) : 0;
        const badge = document.getElementById(`nav-pct-${sub.id}`);
        if (badge) badge.textContent = `${pct}%`;
      });
    });
  }
  function renderDashboard2() {
    const container = document.getElementById("dashboard-topics-list");
    container.innerHTML = "";
    import_questions.QUIZ_DATA.forEach((topic) => {
      const card = document.createElement("div");
      card.className = "topic-list-card";
      const topicQuestions = state.allQuestions.filter((q) => q.topicId === topic.id);
      const mastered = topicQuestions.filter((q) => state.mastery[q.id]);
      const pct = topicQuestions.length > 0 ? Math.round(mastered.length / topicQuestions.length * 100) : 0;
      let subtopicsHTML = "";
      topic.subtopics.forEach((sub) => {
        const subQs = state.allQuestions.filter((q) => q.subtopicId === sub.id);
        const subMastered = subQs.filter((q) => state.mastery[q.id]).length;
        const subPct = subQs.length > 0 ? Math.round(subMastered / subQs.length * 100) : 0;
        subtopicsHTML += `
        <div style="margin-top: 10px; padding-left: 12px; border-left: 2px solid var(--border-glass);">
          <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px;">
            <span style="color: var(--text-main); font-weight: 500;">${sub.title.replace(/^Topic \d\.\d:\s*/, "")}</span>
            <span style="color: var(--primary); font-weight: 600;">${subMastered}/${subQs.length} Secured</span>
          </div>
          <div class="topic-list-progress-bar" style="height: 3px;">
            <div class="topic-list-progress-fill" style="width: ${subPct}%;"></div>
          </div>
        </div>
      `;
      });
      card.innerHTML = `
      <div class="topic-list-info">
        <span class="topic-list-name" style="font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700;">${topic.title}</span>
        <span class="nav-item-progress" style="font-size: 0.8rem;">${pct}% Secured</span>
      </div>
      <div class="topic-list-progress-bar">
        <div class="topic-list-progress-fill" style="width: ${pct}%;"></div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${subtopicsHTML}
      </div>
    `;
      card.addEventListener("click", (e) => {
        if (e.target.closest("a") || e.target.closest("button")) return;
        AudioEngine.play("click");
        switchView("subtopic", topic.subtopics[0].id);
      });
      container.appendChild(card);
    });
  }
  async function renderFireflyView() {
    const textarea = document.getElementById("firefly-code-textarea");
    if (!textarea) return;
    textarea.value = "Loading compiled Firefly HTML Export...";
    try {
      const res = await fetch("firefly_embed.html");
      if (res.ok) {
        const code = await res.text();
        textarea.value = code;
      } else {
        throw new Error();
      }
    } catch (e) {
      textarea.value = '<!-- Standalone Firefly Export -->\n<!-- The fully-featured offline SPA is compiled directly to firefly_embed.html in your project folder. -->\n<!-- If you are running on a local web server, the compiled code will load here automatically. -->\n<!-- Please locate "firefly_embed.html" on your disk to copy the full HTML code. -->';
    }
  }
  function renderExamSkillsView() {
    const consSelect = document.getElementById("consequence-topic-select");
    if (consSelect) consSelect.value = "";
    document.getElementById("consequence-question-card").style.display = "none";
    document.getElementById("consequence-input-area").style.display = "none";
    document.getElementById("consequence-clue-box").style.display = "none";
    document.getElementById("consequence-answer-box").style.display = "none";
    for (let i = 1; i <= 4; i++) {
      const chk = document.getElementById(`chk-consequence-rubric-${i}`);
      if (chk) chk.checked = false;
    }
    const narSelect = document.getElementById("narrative-topic-select");
    if (narSelect) narSelect.value = "";
    document.getElementById("narrative-question-card").style.display = "none";
    document.getElementById("narrative-sorter-area").style.display = "none";
    document.getElementById("narrative-input-area").style.display = "none";
    document.getElementById("narrative-answer-box").style.display = "none";
    document.getElementById("seq-select-1").innerHTML = '<option value="" disabled selected>-- Choose Event --</option>';
    document.getElementById("seq-select-2").innerHTML = '<option value="" disabled selected>-- Choose Event --</option>';
    document.getElementById("seq-select-3").innerHTML = '<option value="" disabled selected>-- Choose Event --</option>';
    document.getElementById("seq-row-1").className = "sequence-item-container";
    document.getElementById("seq-row-2").className = "sequence-item-container";
    document.getElementById("seq-row-3").className = "sequence-item-container";
    document.getElementById("sequence-status-msg").innerHTML = "Select all three events to verify chronology.";
    document.getElementById("narrative-user-answer").value = "";
    document.querySelectorAll(".process-word").forEach((chip) => chip.classList.remove("used"));
    for (let i = 1; i <= 4; i++) {
      const chk = document.getElementById(`chk-narrative-rubric-${i}`);
      if (chk) chk.checked = false;
    }
    const impSelect = document.getElementById("importance-topic-select");
    if (impSelect) impSelect.value = "";
    document.getElementById("importance-question-card").style.display = "none";
    document.getElementById("importance-input-area").style.display = "none";
    document.getElementById("importance-clue-box").style.display = "none";
    document.getElementById("importance-answer-box").style.display = "none";
    for (let i = 1; i <= 4; i++) {
      const chk = document.getElementById(`chk-importance-rubric-${i}`);
      if (chk) chk.checked = false;
    }
    document.querySelectorAll(".exam-panel-content").forEach((p) => p.style.display = "block");
  }
  var activeClassicFilter = "all";
  function setActiveClassicFilter(val) {
    activeClassicFilter = val;
  }
  function renderClassicView() {
    const container = document.getElementById("classic-list-container");
    container.innerHTML = "";
    const subtopicId = state.selectedSubtopicId;
    let questions = state.allQuestions.filter((q) => q.subtopicId === subtopicId);
    if (activeClassicFilter === "standard") {
      questions = questions.filter((q) => q.type === "standard");
    } else if (activeClassicFilter === "depth") {
      questions = questions.filter((q) => q.type === "depth");
    } else if (activeClassicFilter === "unmastered") {
      questions = questions.filter((q) => !state.mastery[q.id]);
    }
    document.getElementById("subtopic-count-display").textContent = `${questions.length} question${questions.length === 1 ? "" : "s"} displayed`;
    if (questions.length === 0) {
      container.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-box-open"></i>
        <h3>No Questions Found</h3>
        <p>Try changing your filter settings or complete more study cards to populate this list.</p>
      </div>
    `;
      return;
    }
    questions.forEach((q, idx) => {
      const isMastered = !!state.mastery[q.id];
      const isBookmarked = state.bookmarks.includes(q.id);
      const details = document.createElement("details");
      details.className = "quiz-card-details";
      details.id = `accordion-${q.id}`;
      details.innerHTML = `
      <summary class="quiz-card-summary">
        <div class="summary-content">
          <span class="summary-num">${idx + 1}</span>
          <span class="summary-text">${q.question}</span>
        </div>
        <div class="summary-badges">
          <span class="badge ${q.type === "standard" ? "badge-standard" : "badge-depth"}">${q.type === "standard" ? "Standard" : "Top Tier Trivia"}</span>
          <span class="badge badge-year">${q.year}</span>
          <div class="mastery-checkbox-container ${isMastered ? "mastered" : ""}" data-qid="${q.id}" title="Mark as Mastered">
            <i class="fa-solid fa-check"></i>
          </div>
          <i class="fa-solid fa-chevron-down summary-arrow"></i>
        </div>
      </summary>
      <div class="details-content">
        <div class="answer-header">
          <i class="fa-solid fa-circle-check"></i> Correct Key Term / Answer
        </div>
        <div class="answer-value">${q.answer}</div>
        <div class="explanation-value">${q.explanation}</div>
      </div>
    `;
      const checkBtn = details.querySelector(".mastery-checkbox-container");
      checkBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const nextState = !checkBtn.classList.contains("mastered");
        setMastered(q.id, nextState);
        checkBtn.classList.toggle("mastered", nextState);
        if (nextState) {
          AudioEngine.play("success");
        } else {
          AudioEngine.play("click");
        }
      });
      details.addEventListener("toggle", () => {
        if (details.open) {
          AudioEngine.play("flip");
        }
      });
      container.appendChild(details);
    });
  }
  function startFlashcardSession(subtopicId) {
    const questions = state.allQuestions.filter((q) => q.subtopicId === subtopicId);
    state.flashcardSession.deck = [...questions].sort(() => Math.random() - 0.5);
    state.flashcardSession.activeIndex = 0;
    state.flashcardSession.originalLength = questions.length;
    state.flashcardSession.masteredCount = 0;
    renderFlashcard();
  }
  function renderFlashcard() {
    const deck = state.flashcardSession.deck;
    const idx = state.flashcardSession.activeIndex;
    document.getElementById("flashcard-counter-text").textContent = `Card ${idx + 1} of ${deck.length}`;
    const masteryPct = deck.length > 0 ? Math.round(state.flashcardSession.masteredCount / state.flashcardSession.originalLength * 100) : 0;
    document.getElementById("flashcard-mastery-text").textContent = `${masteryPct}% resolved this session`;
    document.getElementById("flashcard-progress-bar-fill").style.width = `${Math.min(100, Math.round(idx / deck.length * 100))}%`;
    if (idx >= deck.length) {
      showFlashcardCompletion();
      return;
    }
    const q = deck[idx];
    const isBookmarked = state.bookmarks.includes(q.id);
    const frontBadge = document.getElementById("card-front-badge");
    frontBadge.textContent = q.type === "standard" ? "Standard" : "Top Tier Trivia";
    frontBadge.className = `badge ${q.type === "standard" ? "badge-standard" : "badge-depth"}`;
    const backBadge = document.getElementById("card-back-badge");
    backBadge.textContent = q.type === "standard" ? "Standard" : "Top Tier Trivia";
    backBadge.className = `badge ${q.type === "standard" ? "badge-standard" : "badge-depth"}`;
    document.getElementById("card-front-question").textContent = q.question;
    document.getElementById("card-back-answer").textContent = q.answer;
    document.getElementById("card-back-explanation").textContent = q.explanation;
    const frontBkmk = document.getElementById("card-front-bookmark");
    const backBkmk = document.getElementById("card-back-bookmark");
    [frontBkmk, backBkmk].forEach((b) => {
      b.setAttribute("data-qid", q.id);
      b.className = `bookmark-icon-container ${isBookmarked ? "bookmarked" : ""}`;
      b.querySelector("i").className = isBookmarked ? "fa-solid fa-star" : "fa-regular fa-star";
    });
    const cardEl = document.getElementById("flashcard-card");
    cardEl.classList.remove("flipped");
    cardEl.className = "flashcard-card";
    document.getElementById("btn-flashcard-reveal").style.display = "flex";
    document.getElementById("flashcard-self-grade-actions").style.display = "none";
  }
  function handleFlashcardGrade(correct) {
    if (state.flashcardSession.activeIndex >= state.flashcardSession.deck.length) return;
    const cardEl = document.getElementById("flashcard-card");
    if (cardEl.classList.contains("swipe-right") || cardEl.classList.contains("swipe-left")) return;
    const deck = state.flashcardSession.deck;
    const idx = state.flashcardSession.activeIndex;
    const q = deck[idx];
    if (correct) {
      setMastered(q.id, true);
      state.flashcardSession.masteredCount++;
      AudioEngine.play("success");
      cardEl.classList.add("swipe-right");
      setTimeout(() => {
        state.flashcardSession.activeIndex++;
        renderFlashcard();
      }, 300);
    } else {
      setMastered(q.id, false);
      AudioEngine.play("fail");
      cardEl.classList.add("swipe-left");
      setTimeout(() => {
        state.flashcardSession.deck.push(q);
        state.flashcardSession.activeIndex++;
        renderFlashcard();
      }, 300);
    }
  }
  function showFlashcardCompletion() {
    AudioEngine.play("cheer");
    Confetti.spawn(100);
    const container = document.getElementById("view-flashcards");
    container.innerHTML = `
    <div class="empty-state" style="padding: 60px 20px;">
      <div class="results-grade-circle" style="width: 90px; height: 90px; font-size: 2.2rem; margin: 0 auto 20px; animation: pulse 2s infinite;">
        <i class="fa-solid fa-flag-checkered" style="color: var(--text-inverse);"></i>
      </div>
      <h3>Study Deck Resolved!</h3>
      <p>Excellent active recall training. You finished all flashcards in this subtopic.</p>
      <div style="display: flex; gap: 16px; margin-top: 24px; justify-content: center; width: 100%; max-width: 400px; margin-left: auto; margin-right: auto;">
        <button class="btn-secondary" id="btn-fc-restart">Study Again</button>
        <button class="btn-primary" id="btn-fc-finish">Return Dashboard</button>
      </div>
    </div>
  `;
    document.getElementById("btn-fc-restart").addEventListener("click", () => {
      AudioEngine.play("click");
      restoreFlashcardSkeleton();
      startFlashcardSession(state.selectedSubtopicId);
    });
    document.getElementById("btn-fc-finish").addEventListener("click", () => {
      AudioEngine.play("click");
      restoreFlashcardSkeleton();
      switchView("dashboard");
    });
  }
  function restoreFlashcardSkeleton() {
    const container = document.getElementById("view-flashcards");
    container.innerHTML = `
    <div class="flashcard-view-container">
      <div class="flashcard-progress-header">
        <span id="flashcard-counter-text">Card 1 of 15</span>
        <span id="flashcard-mastery-text">0% resolved this session</span>
      </div>
      <div class="flashcard-progress-bar">
        <div class="flashcard-progress-fill" id="flashcard-progress-bar-fill"></div>
      </div>
      <div class="flashcard-stage" id="flashcard-stage">
        <div class="flashcard-card" id="flashcard-card">
          <div class="flashcard-face flashcard-front">
            <div class="card-top">
              <span class="badge" id="card-front-badge">Standard</span>
              <span class="bookmark-icon-container" id="card-front-bookmark"><i class="fa-regular fa-star"></i></span>
            </div>
            <div class="card-body"><h3 class="card-question" id="card-front-question"></h3></div>
            <div class="card-bottom"><i class="fa-solid fa-rotate"></i> Click card to flip and reveal answer</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="card-top">
              <span class="badge badge-standard" id="card-back-badge">Standard</span>
              <span class="bookmark-icon-container" id="card-back-bookmark"><i class="fa-regular fa-star"></i></span>
            </div>
            <div class="card-body">
              <span class="card-answer-label">Correct Answer</span>
              <h2 class="card-answer-text" id="card-back-answer"></h2>
              <p class="card-explanation-text" id="card-back-explanation"></p>
            </div>
            <div class="card-bottom"><i class="fa-solid fa-rotate"></i> Click card to flip back</div>
          </div>
        </div>
      </div>
      <div class="flashcard-controls">
        <button class="btn-secondary" id="btn-flashcard-reveal"><i class="fa-solid fa-rotate"></i> Flip Card</button>
        <div id="flashcard-self-grade-actions" style="display: none; width: 100%; gap: 16px;">
          <button class="btn-incorrect" id="btn-flashcard-incorrect"><i class="fa-solid fa-xmark"></i> Study Again</button>
          <button class="btn-correct" id="btn-flashcard-correct"><i class="fa-solid fa-check"></i> Got It!</button>
        </div>
      </div>
    </div>
  `;
    document.getElementById("flashcard-stage").addEventListener("click", flipFlashcard);
    document.getElementById("btn-flashcard-reveal").addEventListener("click", flipFlashcard);
    document.getElementById("btn-flashcard-incorrect").addEventListener("click", () => handleFlashcardGrade(false));
    document.getElementById("btn-flashcard-correct").addEventListener("click", () => handleFlashcardGrade(true));
    const bkmks = [document.getElementById("card-front-bookmark"), document.getElementById("card-back-bookmark")];
    bkmks.forEach((b) => {
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleBookmark(b.getAttribute("data-qid"));
      });
    });
  }
  function flipFlashcard() {
    const card = document.getElementById("flashcard-card");
    card.classList.toggle("flipped");
    AudioEngine.play("flip");
    const isFlipped = card.classList.contains("flipped");
    const revealBtn = document.getElementById("btn-flashcard-reveal");
    const actionBtns = document.getElementById("flashcard-self-grade-actions");
    if (isFlipped) {
      revealBtn.style.display = "none";
      actionBtns.style.display = "flex";
    } else {
      revealBtn.style.display = "flex";
      actionBtns.style.display = "none";
    }
  }
  var KEY_FIGURES_BIO = {
    "david ben-gurion": {
      name: "David Ben-Gurion",
      role: "First Prime Minister of Israel & Zionist Leader",
      bio: "The indispensable leader of the Zionist movement who officially declared the creation of the State of Israel in May 1948 and served as its first Prime Minister.",
      image: "assets/sources/portraits/david_ben_gurion.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/David_Ben-Gurion"
    },
    "ben-gurion": {
      name: "David Ben-Gurion",
      role: "First Prime Minister of Israel & Zionist Leader",
      bio: "The indispensable leader of the Zionist movement who officially declared the creation of the State of Israel in May 1948 and served as its first Prime Minister.",
      image: "assets/sources/portraits/david_ben_gurion.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/David_Ben-Gurion"
    },
    "menachem begin": {
      name: "Menachem Begin",
      role: "Prime Minister of Israel (1977\u20131983)",
      bio: "Originally the leader of the militant Irgun group (which carried out the King David Hotel bombing and the Deir Yassin massacre), he later founded the right-wing Likud party, became Prime Minister, and signed the historic Camp David Accords and the 1979 peace treaty with Egypt.",
      image: "assets/sources/portraits/menachem_begin.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Menachem_Begin"
    },
    "begin": {
      name: "Menachem Begin",
      role: "Prime Minister of Israel (1977\u20131983)",
      bio: "Originally the leader of the militant Irgun group (which carried out the King David Hotel bombing and the Deir Yassin massacre), he later founded the right-wing Likud party, became Prime Minister, and signed the historic Camp David Accords and the 1979 peace treaty with Egypt.",
      image: "assets/sources/portraits/menachem_begin.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Menachem_Begin"
    },
    "yitzhak rabin": {
      name: "Yitzhak Rabin",
      role: "Prime Minister of Israel (1974\u201377, 1992\u201395)",
      bio: "A prominent IDF commander during the 1948 and 1967 wars who later served as Prime Minister. He implemented the harsh 'Iron Fist' policy during the First Intifada, but later famously shook hands with Yasser Arafat to sign the Oslo Accords in 1993, for which he won the Nobel Peace Prize. He was assassinated in 1995 by an Israeli right-wing extremist, Yigal Amir.",
      image: "assets/sources/portraits/yitzhak_rabin.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Yitzhak_Rabin"
    },
    "rabin": {
      name: "Yitzhak Rabin",
      role: "Prime Minister of Israel (1974\u201377, 1992\u201395)",
      bio: "A prominent IDF commander during the 1948 and 1967 wars who later served as Prime Minister. He implemented the harsh 'Iron Fist' policy during the First Intifada, but later famously shook hands with Yasser Arafat to sign the Oslo Accords in 1993, for which he won the Nobel Peace Prize. He was assassinated in 1995 by an Israeli right-wing extremist, Yigal Amir.",
      image: "assets/sources/portraits/yitzhak_rabin.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Yitzhak_Rabin"
    },
    "golda meir": {
      name: "Golda Meir",
      role: "Prime Minister of Israel (1969\u20131974)",
      bio: "Israel's first and only female Prime Minister (1969\u20131974), who led the country during the shock of the 1973 Yom Kippur War and subsequently ordered 'Operation Wrath of God' to hunt down the Munich Olympics terrorists.",
      image: "assets/sources/portraits/golda_meir.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Golda_Meir"
    },
    "meir": {
      name: "Golda Meir",
      role: "Prime Minister of Israel (1969\u20131974)",
      bio: "Israel's first and only female Prime Minister (1969\u20131974), who led the country during the shock of the 1973 Yom Kippur War and subsequently ordered 'Operation Wrath of God' to hunt down the Munich Olympics terrorists.",
      image: "assets/sources/portraits/golda_meir.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Golda_Meir"
    },
    "moshe dayan": {
      name: "Moshe Dayan",
      role: "Israeli Defense Minister & General",
      bio: "A highly recognizable Israeli military commander and Defense Minister (known for his eye patch) who played a pivotal role in the Suez Crisis, the Six Day War, and the Yom Kippur War.",
      image: "assets/sources/portraits/moshe_dayan.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Moshe_Dayan"
    },
    "dayan": {
      name: "Moshe Dayan",
      role: "Israeli Defense Minister & General",
      bio: "A highly recognizable Israeli military commander and Defense Minister (known for his eye patch) who played a pivotal role in the Suez Crisis, the Six Day War, and the Yom Kippur War.",
      image: "assets/sources/portraits/moshe_dayan.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Moshe_Dayan"
    },
    "ariel sharon": {
      name: "Ariel Sharon",
      role: "Israeli General & Defense Minister",
      bio: "A ruthless and controversial Israeli general and Defense Minister who spearheaded the 1982 invasion of Lebanon (Operation Peace for Galilee), driving the IDF all the way to Beirut to expel the PLO.",
      image: "assets/sources/portraits/ariel_sharon.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Ariel_Sharon"
    },
    "sharon": {
      name: "Ariel Sharon",
      role: "Israeli General & Defense Minister",
      bio: "A ruthless and controversial Israeli general and Defense Minister who spearheaded the 1982 invasion of Lebanon (Operation Peace for Galilee), driving the IDF all the way to Beirut to expel the PLO.",
      image: "assets/sources/portraits/ariel_sharon.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Ariel_Sharon"
    },
    "levi eshkol": {
      name: "Levi Eshkol",
      role: "Prime Minister of Israel (1963\u20131969)",
      bio: "The Israeli Prime Minister who led the country through the escalating tensions and outbreak of the 1967 Six Day War.",
      image: "assets/sources/portraits/levi_eshkol.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Levi_Eshkol"
    },
    "eshkol": {
      name: "Levi Eshkol",
      role: "Prime Minister of Israel (1963\u20131969)",
      bio: "The Israeli Prime Minister who led the country through the escalating tensions and outbreak of the 1967 Six Day War.",
      image: "assets/sources/portraits/levi_eshkol.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Levi_Eshkol"
    },
    "yitzhak shamir": {
      name: "Yitzhak Shamir",
      role: "Prime Minister of Israel (1983\u201384, 1986\u201392)",
      bio: "A former leader of the militant Stern Gang who later became a hardline Israeli Prime Minister during the First Intifada and the 1991 Madrid Conference.",
      image: "assets/sources/portraits/yitzhak_shamir.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Yitzhak_Shamir"
    },
    "shamir": {
      name: "Yitzhak Shamir",
      role: "Prime Minister of Israel (1983\u201384, 1986\u201392)",
      bio: "A former leader of the militant Stern Gang who later became a hardline Israeli Prime Minister during the First Intifada and the 1991 Madrid Conference.",
      image: "assets/sources/portraits/yitzhak_shamir.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Yitzhak_Shamir"
    },
    "yasser arafat": {
      name: "Yasser Arafat",
      role: "Chairman of the PLO & Fatah Founder",
      bio: "The Chairman of the Palestine Liberation Organisation (PLO) and founder of Fatah. He spoke at the UN in 1974 bearing a 'gun and an olive branch', formally renounced terrorism in 1988, and signed the 1993 Oslo Accords, becoming the head of the newly formed Palestinian National Authority.",
      image: "assets/sources/portraits/yasser_arafat.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Yasser_Arafat"
    },
    "arafat": {
      name: "Yasser Arafat",
      role: "Chairman of the PLO & Fatah Founder",
      bio: "The Chairman of the Palestine Liberation Organisation (PLO) and founder of Fatah. He spoke at the UN in 1974 bearing a 'gun and an olive branch', formally renounced terrorism in 1988, and signed the 1993 Oslo Accords, becoming the head of the newly formed Palestinian National Authority.",
      image: "assets/sources/portraits/yasser_arafat.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Yasser_Arafat"
    },
    "george habash": {
      name: "George Habash",
      role: "Founder of the PFLP",
      bio: "The founder of the Popular Front for the Liberation of Palestine (PFLP), a radical Marxist group that pioneered international terrorism, including the 1970 Dawson's Field airplane hijackings.",
      image: "assets/sources/portraits/george_habash.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/George_Habash"
    },
    "habash": {
      name: "George Habash",
      role: "Founder of the PFLP",
      bio: "The founder of the Popular Front for the Liberation of Palestine (PFLP), a radical Marxist group that pioneered international terrorism, including the 1970 Dawson's Field airplane hijackings.",
      image: "assets/sources/portraits/george_habash.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/George_Habash"
    },
    "mahmoud abbas": {
      name: "Mahmoud Abbas (Abu Mazen)",
      role: "Founding Member of Fatah & negotiator",
      bio: "A founding member of Fatah who managed the PLO's secret negotiations with Israel that led to the Oslo Accords, later becoming Prime Minister and President of the Palestinian Authority.",
      image: "assets/sources/portraits/mahmoud_abbas.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Mahmoud_Abbas"
    },
    "abu mazen": {
      name: "Mahmoud Abbas (Abu Mazen)",
      role: "Founding Member of Fatah & negotiator",
      bio: "A founding member of Fatah who managed the PLO's secret negotiations with Israel that led to the Oslo Accords, later becoming Prime Minister and President of the Palestinian Authority.",
      image: "assets/sources/portraits/mahmoud_abbas.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Mahmoud_Abbas"
    },
    "abbas": {
      name: "Mahmoud Abbas (Abu Mazen)",
      role: "Founding Member of Fatah & negotiator",
      bio: "A founding member of Fatah who managed the PLO's secret negotiations with Israel that led to the Oslo Accords, later becoming Prime Minister and President of the Palestinian Authority.",
      image: "assets/sources/portraits/mahmoud_abbas.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Mahmoud_Abbas"
    },
    "haj amin al-husseini": {
      name: "Haj Amin al-Husseini",
      role: "Grand Mufti of Jerusalem",
      bio: "The Grand Mufti of Jerusalem and leader of the Arab Higher Committee, who fiercely opposed Jewish immigration during the British Mandate.",
      image: "assets/sources/portraits/grand_mufti.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Amin_al-Husseini"
    },
    "al-husseini": {
      name: "Haj Amin al-Husseini",
      role: "Grand Mufti of Jerusalem",
      bio: "The Grand Mufti of Jerusalem and leader of the Arab Higher Committee, who fiercely opposed Jewish immigration during the British Mandate.",
      image: "assets/sources/portraits/grand_mufti.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Amin_al-Husseini"
    },
    "gamal abdel nasser": {
      name: "Gamal Abdel Nasser",
      role: "President of Egypt & Pan-Arab Champion",
      bio: "The charismatic President of Egypt and champion of Pan-Arabism. He nationalised the Suez Canal in 1956, formed the United Arab Republic, and his aggressive posturing (such as closing the Straits of Tiran) directly triggered the Six Day War.",
      image: "assets/sources/portraits/gamal_abdel_nasser.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Gamal_Abdel_Nasser"
    },
    "nasser": {
      name: "Gamal Abdel Nasser",
      role: "President of Egypt & Pan-Arab Champion",
      bio: "The charismatic President of Egypt and champion of Pan-Arabism. He nationalised the Suez Canal in 1956, formed the United Arab Republic, and his aggressive posturing (such as closing the Straits of Tiran) directly triggered the Six Day War.",
      image: "assets/sources/portraits/gamal_abdel_nasser.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Gamal_Abdel_Nasser"
    },
    "anwar sadat": {
      name: "Anwar Sadat",
      role: "President of Egypt (1970\u20131981)",
      bio: "Nasser's successor who launched the surprise attack on Israel in the 1973 Yom Kippur War to force diplomatic negotiations. He stunned the world by visiting the Israeli Knesset in 1977, leading to the Camp David Accords and the 1979 peace treaty, for which he won the Nobel Peace Prize.",
      image: "assets/sources/portraits/anwar_sadat.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Anwar_Sadat"
    },
    "sadat": {
      name: "Anwar Sadat",
      role: "President of Egypt (1970\u20131981)",
      bio: "Nasser's successor who launched the surprise attack on Israel in the 1973 Yom Kippur War to force diplomatic negotiations. He stunned the world by visiting the Israeli Knesset in 1977, leading to the Camp David Accords and the 1979 peace treaty, for which he won the Nobel Peace Prize.",
      image: "assets/sources/portraits/anwar_sadat.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Anwar_Sadat"
    },
    "hosni mubarak": {
      name: "Hosni Mubarak",
      role: "President of Egypt (1981\u20132011)",
      bio: "Commander of the Egyptian Air Force during the Yom Kippur War who became President of Egypt following Sadat's assassination in 1981.",
      image: "assets/sources/portraits/hosni_mubarak.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Hosni_Mubarak"
    },
    "mubarak": {
      name: "Hosni Mubarak",
      role: "President of Egypt (1981\u20132011)",
      bio: "Commander of the Egyptian Air Force during the Yom Kippur War who became President of Egypt following Sadat's assassination in 1981.",
      image: "assets/sources/portraits/hosni_mubarak.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Hosni_Mubarak"
    },
    "king hussein": {
      name: "King Hussein of Jordan",
      role: "King of Jordan (1952\u20131999)",
      bio: "Ruled Jordan for decades, fighting Israel in 1967 but later expelling the PLO from his country during the brutal 'Black September' conflict in 1970. He signed a formal peace treaty with Israel in 1994.",
      image: "assets/sources/portraits/king_hussein.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Hussein_of_Jordan"
    },
    "king abdullah": {
      name: "King Abdullah I of Transjordan",
      role: "King of Transjordan (1946\u20131951)",
      bio: "King Hussein's grandfather, who held secret talks with the Jewish Agency before 1948 but ultimately joined the Arab invasion, successfully capturing the West Bank and East Jerusalem with his Arab Legion forces.",
      image: "assets/sources/portraits/abdullah_i.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Abdullah_I_of_Jordan"
    },
    "abdullah i": {
      name: "King Abdullah I of Transjordan",
      role: "King of Transjordan (1946\u20131951)",
      bio: "King Hussein's grandfather, who held secret talks with the Jewish Agency before 1948 but ultimately joined the Arab invasion, successfully capturing the West Bank and East Jerusalem with his Arab Legion forces.",
      image: "assets/sources/portraits/abdullah_i.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Abdullah_I_of_Jordan"
    },
    "transjordan": {
      name: "King Abdullah I of Transjordan",
      role: "King of Transjordan (1946\u20131951)",
      bio: "King Hussein's grandfather, who held secret talks with the Jewish Agency before 1948 but ultimately joined the Arab invasion, successfully capturing the West Bank and East Jerusalem with his Arab Legion forces.",
      image: "assets/sources/portraits/abdullah_i.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Abdullah_I_of_Jordan"
    },
    "hafez al-assad": {
      name: "Hafez al-Assad",
      role: "President of Syria (1971\u20132000)",
      bio: "The President of Syria who coordinated the surprise two-front attack with Egypt against Israel in the 1973 Yom Kippur War.",
      image: "assets/sources/portraits/hafez_al_assad.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Hafez_al-Assad"
    },
    "assad": {
      name: "Hafez al-Assad",
      role: "President of Syria (1971\u20132000)",
      bio: "The President of Syria who coordinated the surprise two-front attack with Egypt against Israel in the 1973 Yom Kippur War.",
      image: "assets/sources/portraits/hafez_al_assad.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Hafez_al-Assad"
    },
    "saddam hussein": {
      name: "Saddam Hussein",
      role: "President of Iraq (1979\u20132003)",
      bio: "The President of Iraq. While not a direct party to the Arab-Israeli wars, his 1990 invasion of Kuwait (the Gulf War) had massive repercussions, as Yasser Arafat's decision to support him caused wealthy Arab states to cut off all funding to the PLO, forcing them to the negotiating table.",
      image: "assets/sources/portraits/saddam_hussein.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Saddam_Hussein"
    },
    "saddam": {
      name: "Saddam Hussein",
      role: "President of Iraq (1979\u20132003)",
      bio: "The President of Iraq. While not a direct party to the Arab-Israeli wars, his 1990 invasion of Kuwait (the Gulf War) had massive repercussions, as Yasser Arafat's decision to support him caused wealthy Arab states to cut off all funding to the PLO, forcing them to the negotiating table.",
      image: "assets/sources/portraits/saddam_hussein.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Saddam_Hussein"
    },
    "henry kissinger": {
      name: "Henry Kissinger",
      role: "US Secretary of State & Diplomat",
      bio: "The US Secretary of State famous for his exhaustive 'shuttle diplomacy' (flying back and forth between Middle Eastern capitals) to secure disengagement agreements after the 1973 Yom Kippur War.",
      image: "assets/sources/portraits/henry_kissinger.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Henry_Kissinger"
    },
    "kissinger": {
      name: "Henry Kissinger",
      role: "US Secretary of State & Diplomat",
      bio: "The US Secretary of State famous for his exhaustive 'shuttle diplomacy' (flying back and forth between Middle Eastern capitals) to secure disengagement agreements after the 1973 Yom Kippur War.",
      image: "assets/sources/portraits/henry_kissinger.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Henry_Kissinger"
    },
    "jimmy carter": {
      name: "Jimmy Carter",
      role: "39th President of the United States (1977\u20131981)",
      bio: "The US President who personally mediated the 13 days of secret talks between Begin and Sadat at the Camp David presidential retreat in 1978.",
      image: "assets/sources/portraits/jimmy_carter.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Jimmy_Carter"
    },
    "carter": {
      name: "Jimmy Carter",
      role: "39th President of the United States (1977\u20131981)",
      bio: "The US President who personally mediated the 13 days of secret talks between Begin and Sadat at the Camp David presidential retreat in 1978.",
      image: "assets/sources/portraits/jimmy_carter.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Jimmy_Carter"
    },
    "bill clinton": {
      name: "Bill Clinton",
      role: "42nd President of the United States (1993\u20132001)",
      bio: "The US President who hosted the historic handshake between Yitzhak Rabin and Yasser Arafat on the White House lawn during the signing of the Oslo Accords in 1993.",
      image: "assets/sources/portraits/bill_clinton.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Bill_Clinton"
    },
    "clinton": {
      name: "Bill Clinton",
      role: "42nd President of the United States (1993\u20132001)",
      bio: "The US President who hosted the historic handshake between Yitzhak Rabin and Yasser Arafat on the White House lawn during the signing of the Oslo Accords in 1993.",
      image: "assets/sources/portraits/bill_clinton.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Bill_Clinton"
    },
    "mikhail gorbachev": {
      name: "Mikhail Gorbachev",
      role: "Leader of the Soviet Union (1985\u20131991)",
      bio: "The leader of the Soviet Union whose reforms ended the Cold War, cutting off Soviet military aid to Arab states and paving the way for the 1991 Madrid Peace Conference.",
      image: "assets/sources/portraits/mikhail_gorbachev.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Mikhail_Gorbachev"
    },
    "gorbachev": {
      name: "Mikhail Gorbachev",
      role: "Leader of the Soviet Union (1985\u20131991)",
      bio: "The leader of the Soviet Union whose reforms ended the Cold War, cutting off Soviet military aid to Arab states and paving the way for the 1991 Madrid Peace Conference.",
      image: "assets/sources/portraits/mikhail_gorbachev.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Mikhail_Gorbachev"
    },
    "george h.w. bush": {
      name: "George H.W. Bush",
      role: "41st President of the United States (1989\u20131993)",
      bio: "The US President who emerged from the 1991 Gulf War as the leader of the sole remaining superpower, using this leverage to force Israel and Arab nations to negotiate at the Madrid Conference.",
      image: "assets/sources/portraits/george_h_w_bush.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/George_H._W._Bush"
    },
    "george bush": {
      name: "George H.W. Bush",
      role: "41st President of the United States (1989\u20131993)",
      bio: "The US President who emerged from the 1991 Gulf War as the leader of the sole remaining superpower, using this leverage to force Israel and Arab nations to negotiate at the Madrid Conference.",
      image: "assets/sources/portraits/george_h_w_bush.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/George_H._W._Bush"
    },
    "bush": {
      name: "George H.W. Bush",
      role: "41st President of the United States (1989\u20131993)",
      bio: "The US President who emerged from the 1991 Gulf War as the leader of the sole remaining superpower, using this leverage to force Israel and Arab nations to negotiate at the Madrid Conference.",
      image: "assets/sources/portraits/george_h_w_bush.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/George_H._W._Bush"
    },
    "ernest bevin": {
      name: "Ernest Bevin",
      role: "British Foreign Secretary (1945\u20131951)",
      bio: "The British Foreign Secretary who ultimately decided to hand the 'unworkable' Palestine Mandate over to the United Nations in 1947.",
      image: "assets/sources/portraits/ernest_bevin.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Ernest_Bevin"
    },
    "bevin": {
      name: "Ernest Bevin",
      role: "British Foreign Secretary (1945\u20131951)",
      bio: "The British Foreign Secretary who ultimately decided to hand the 'unworkable' Palestine Mandate over to the United Nations in 1947.",
      image: "assets/sources/portraits/ernest_bevin.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Ernest_Bevin"
    },
    "count folke bernadotte": {
      name: "Count Folke Bernadotte",
      role: "UN Mediator in Palestine",
      bio: "The UN mediator dispatched to negotiate a truce during the 1948 war, who was assassinated by the Jewish extremist Stern Gang.",
      image: "assets/sources/portraits/folke_bernadotte.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Folke_Bernadotte"
    },
    "bernadotte": {
      name: "Count Folke Bernadotte",
      role: "UN Mediator in Palestine",
      bio: "The UN mediator dispatched to negotiate a truce during the 1948 war, who was assassinated by the Jewish extremist Stern Gang.",
      image: "assets/sources/portraits/folke_bernadotte.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Folke_Bernadotte"
    },
    "folke bernadotte": {
      name: "Count Folke Bernadotte",
      role: "UN Mediator in Palestine",
      bio: "The UN mediator dispatched to negotiate a truce during the 1948 war, who was assassinated by the Jewish extremist Stern Gang.",
      image: "assets/sources/portraits/folke_bernadotte.jpg",
      sourceUrl: "https://en.wikipedia.org/wiki/Folke_Bernadotte"
    }
  };
  var TIMELINE_IMAGES = [
    {
      keywords: ["partition plan", "resolution 181", "partition map"],
      imageSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="150" style="background:#090d16; border-radius:4px;"><rect width="120" height="120" fill="#0b132b" /><path d="M 40,5 L 55,5 L 62,35 L 75,60 L 68,90 L 52,112 L 44,115 L 43,90 L 41,70 L 32,50 Z" fill="#1c2541" stroke="#3a506b" stroke-width="1" /><path d="M 40,5 L 55,5 L 60,20 L 44,20 Z" fill="#ffedd5" stroke="#f97316" stroke-width="0.5" /><path d="M 41,20 L 48,20 L 48,60 L 41,70 L 32,50 Z" fill="#ffedd5" stroke="#f97316" stroke-width="0.5" /><path d="M 41,70 L 50,70 L 52,112 L 44,115 L 43,90 Z" fill="#ffedd5" stroke="#f97316" stroke-width="0.5" /><path d="M 48,20 L 62,35 L 75,60 L 58,60 L 48,45 Z" fill="#dcfce7" stroke="#22c55e" stroke-width="0.5" /><path d="M 58,60 L 75,60 L 68,90 L 50,70 Z" fill="#dcfce7" stroke="#22c55e" stroke-width="0.5" /><circle cx="51" cy="58" r="3" fill="#ef4444" /><text x="56" y="60" font-family="sans-serif" font-size="4" fill="#ef4444">UN Zone</text><text x="80" y="30" font-family="sans-serif" font-size="5" font-weight="bold" fill="#f97316">Jewish State</text><text x="80" y="40" font-family="sans-serif" font-size="5" font-weight="bold" fill="#22c55e">Arab State</text></svg>`,
      provenance: "UN Partition Plan map showing the proposed division of Palestine in November 1947."
    },
    {
      keywords: ["suez canal", "nationalise the suez", "suez crisis", "nationalised the suez"],
      imageSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="150" style="background:#090d16; border-radius:4px;"><rect width="120" height="120" fill="#0b132b" /><path d="M 50,0 Q 45,60 50,120 L 70,120 Q 75,60 70,0 Z" fill="#0284c7" opacity="0.3" /><path d="M 52,0 Q 47,60 52,120 M 68,120 Q 73,60 68,0" fill="none" stroke="#0284c7" stroke-width="1.5" /><rect x="52" y="45" width="16" height="30" rx="3" fill="#ef4444" stroke="#ffffff" stroke-width="0.5" /><polygon points="60,35 60,45 56,45" fill="#f97316" /><text x="10" y="60" font-family="sans-serif" font-size="5" font-weight="bold" fill="#0284c7">Suez Canal</text><text x="75" y="60" font-family="sans-serif" font-size="5" font-weight="bold" fill="#ef4444">Nationalised ship</text></svg>`,
      provenance: "The Suez Canal in Egypt, a strategic trade link nationalised by President Nasser in July 1956."
    },
    {
      keywords: ["yom kippur war", "bar-lev", "bar lev", "crossed the suez"],
      imageSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="150" style="background:#090d16; border-radius:4px;"><rect width="120" height="120" fill="#0b132b" /><path d="M 0,90 L 120,90 L 120,120 L 0,120 Z" fill="#0284c7" opacity="0.3" /><path d="M 0,90 L 120,90" stroke="#0284c7" stroke-width="2" /><path d="M 80,40 L 95,90 L 120,90 L 120,20 Z" fill="#eab308" opacity="0.5" /><path d="M 80,40 L 95,90" stroke="#eab308" stroke-width="3" /><path d="M 20,90 Q 50,50 82,45" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="3,3" /><text x="10" y="30" font-family="sans-serif" font-size="5" font-weight="bold" fill="#38bdf8">High-pressure Water</text><text x="85" y="30" font-family="sans-serif" font-size="5" font-weight="bold" fill="#eab308">Bar-Lev Sand Wall</text></svg>`,
      provenance: "Egyptian soldiers crossing the Suez Canal and using high-pressure water hoses to breach the Bar-Lev Line, October 1973."
    },
    {
      keywords: ["oslo accords", "oslo i", "handshake", "oslo agreement"],
      imageSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="150" style="background:#090d16; border-radius:4px;"><rect width="120" height="120" fill="#0b132b" /><circle cx="60" cy="60" r="30" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="4,4" /><path d="M 30,70 L 45,55 L 55,65 M 90,70 L 75,55 L 65,65 M 50,60 L 70,60 M 45,55 C 45,55 52,50 58,55 C 64,60 70,55 70,55" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /><text x="35" y="25" font-family="sans-serif" font-size="5" font-weight="bold" fill="#22c55e">Oslo Peace Handshake</text><text x="45" y="105" font-family="sans-serif" font-size="4" fill="#cbd5e1">Rabin &amp; Arafat 1993</text></svg>`,
      provenance: "Historic handshake between Yitzhak Rabin and Yasser Arafat on the White House lawn, September 1993."
    },
    {
      keywords: ["ben-gurion declared", "birth of israel", "14 may 1948", "creation of the state", "creation of israel"],
      imageSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="150" style="background:#090d16; border-radius:4px;"><rect width="120" height="120" fill="#0b132b" /><rect x="20" y="30" width="80" height="50" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.5" /><rect x="20" y="38" width="80" height="6" fill="#0038b8" /><rect x="20" y="66" width="80" height="6" fill="#0038b8" /><polygon points="60,46 64,56 54,50 66,50 56,56" stroke="#0038b8" stroke-width="1.5" fill="none" /><text x="35" y="95" font-family="sans-serif" font-size="5" font-weight="bold" fill="#0038b8">State of Israel Proclaimed</text></svg>`,
      provenance: "The proclamation of the State of Israel by David Ben-Gurion under the portrait of Theodor Herzl, Tel Aviv, 14 May 1948."
    }
  ];
  function showFigureBioModal(figureKey) {
    const figure = KEY_FIGURES_BIO[figureKey];
    if (!figure) return;
    AudioEngine.play("flip");
    let modal = document.getElementById("timeline-bio-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "timeline-bio-modal";
      modal.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 10000; padding: 20px; box-sizing: border-box;";
      document.body.appendChild(modal);
    }
    const parenMatch = figure.name.match(/\(([^)]+)\)/);
    let initials = "";
    if (parenMatch) {
      initials = parenMatch[1].toUpperCase();
    } else {
      const cleanName = figure.name.replace(/Jr\.|Chief Justice|General|Dr\./gi, "").trim();
      const parts = cleanName.split(/\s+/).filter((p) => p.length > 0);
      if (parts.length >= 3) {
        initials = (parts[0][0] + parts[1][0] + parts[2][0]).toUpperCase();
      } else if (parts.length === 2) {
        initials = (parts[0][0] + parts[1][0]).toUpperCase();
      } else if (parts.length === 1) {
        initials = parts[0].substring(0, 2).toUpperCase();
      }
    }
    initials = initials.substring(0, 3);
    modal.innerHTML = `
    <div class="bio-modal-card" style="background: var(--bg-sidebar); border: 2px solid var(--accent); border-radius: var(--border-radius-lg); width: 100%; max-width: 480px; padding: 24px; box-shadow: var(--shadow-lg); animation: scaleIn 0.3s ease-out; position: relative; color: var(--text-main); box-sizing: border-box;">
      <button id="btn-close-bio-modal" style="position: absolute; top: 12px; right: 12px; background: none; border: none; color: var(--text-muted); font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; transition: color 0.2s;"><i class="fa-solid fa-xmark"></i></button>
      
      <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 16px;">
        <div style="width: 70px; height: 70px; border-radius: 50%; border: 2px solid var(--accent); flex-shrink: 0; overflow: hidden; display: flex; align-items: center; justify-content: center; background: var(--gradient-primary); box-shadow: var(--shadow-sm);">
          ${figure.image ? `
            <img src="${figure.image}" alt="${figure.name}" style="width: 100%; height: 100%; object-fit: cover;" 
              onerror="const fallback = '${getFallbackUrl(figure.image) || ""}'; if (fallback && this.src !== fallback) { this.referrerPolicy = 'no-referrer'; this.src = fallback; } else { this.style.display='none'; this.nextElementSibling.style.display='flex'; }">
            <span style="display: none; font-size: 1.4rem; font-weight: 800; color: #fff; font-family: var(--font-heading); text-shadow: 0 1px 3px rgba(0,0,0,0.3);">${initials}</span>
          ` : `
            <span style="font-size: 1.4rem; font-weight: 800; color: #fff; font-family: var(--font-heading); text-shadow: 0 1px 3px rgba(0,0,0,0.3);">${initials}</span>
          `}
        </div>
        <div>
          <h3 style="margin: 0; font-family: var(--font-heading); color: var(--text-main); font-size: 1.25rem; font-weight: 700; letter-spacing: -0.2px;">${figure.name}</h3>
          <span style="font-size: 0.82rem; color: var(--accent); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; display: inline-block; margin-top: 2px;">${figure.role}</span>
          ${figure.sourceUrl ? `
            <div style="margin-top: 4px;">
              <a href="${figure.sourceUrl}" target="_blank" style="font-size: 0.72rem; color: var(--primary); text-decoration: underline; display: inline-flex; align-items: center; gap: 4px;"><i class="fa-solid fa-arrow-up-right-from-square"></i> Portrait Source</a>
            </div>
          ` : ""}
        </div>
      </div>
      
      <div style="font-size: 0.95rem; line-height: 1.6; color: var(--text-main); margin-bottom: 24px; border-top: 1px solid var(--border-glass); padding-top: 16px; box-sizing: border-box;">
        <strong style="color: var(--accent); display: block; margin-bottom: 8px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">GCSE Biography & Significance:</strong>
        <p style="margin: 0; font-style: normal; color: var(--text-main); font-weight: 400; line-height: 1.6;">${figure.bio}</p>
      </div>
      
      <button id="btn-ok-bio-modal" class="mastery-btn" style="width: 100%; justify-content: center; background: var(--gradient-primary); border: none; color: white; padding: 12px; font-weight: bold; border-radius: var(--border-radius-sm); cursor: pointer; transition: transform 0.2s, opacity 0.2s;">Got it!</button>
    </div>
  `;
    if (!document.getElementById("bio-modal-styles")) {
      const styleEl = document.createElement("style");
      styleEl.id = "bio-modal-styles";
      styleEl.textContent = `
      @keyframes scaleIn {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      #btn-close-bio-modal:hover {
        color: var(--accent) !important;
      }
      #btn-ok-bio-modal:hover {
        opacity: 0.9;
        transform: translateY(-1px);
      }
    `;
      document.head.appendChild(styleEl);
    }
    modal.style.display = "flex";
    const close = () => {
      modal.style.display = "none";
    };
    document.getElementById("btn-close-bio-modal").addEventListener("click", close);
    document.getElementById("btn-ok-bio-modal").addEventListener("click", close);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) close();
    });
  }
  function renderTimelineView() {
    const wrapper = document.getElementById("timeline-items-wrapper");
    wrapper.innerHTML = "";
    const eraFilter = document.getElementById("timeline-era-select").value;
    const searchInputEl = document.getElementById("timeline-search-input");
    const searchQuery = searchInputEl ? searchInputEl.value.trim().toLowerCase() : "";
    const filterPeopleBtn = document.getElementById("btn-timeline-filter-people");
    const peopleOnlyActive = filterPeopleBtn ? filterPeopleBtn.classList.contains("active") : false;
    let questions = [...state.allQuestions];
    if (eraFilter !== "all") {
      questions = questions.filter((q) => q.topicId === eraFilter);
    }
    if (searchQuery) {
      questions = questions.filter((q) => {
        const yearStr = (q.year || "").toString();
        const questionText = (q.question || "").toLowerCase();
        const answerText = (q.answer || "").toLowerCase();
        const explanationText = (q.explanation || "").toLowerCase();
        return yearStr.includes(searchQuery) || questionText.includes(searchQuery) || answerText.includes(searchQuery) || explanationText.includes(searchQuery);
      });
    }
    if (peopleOnlyActive) {
      const figureKeys = Object.keys(KEY_FIGURES_BIO);
      questions = questions.filter((q) => {
        const textToSearch = `${q.question} ${q.answer} ${q.explanation || ""}`.toLowerCase();
        return figureKeys.some((key) => textToSearch.includes(key));
      });
    }
    questions.sort((a, b) => a.year - b.year);
    document.getElementById("timeline-count-display").textContent = `${questions.length} chronological milestone${questions.length === 1 ? "" : "s"} mapped`;
    if (questions.length === 0) {
      wrapper.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-timeline"></i>
        <h3>No milestones found</h3>
      </div>
    `;
      return;
    }
    TIMELINE_IMAGES.forEach((ti) => ti.used = false);
    questions.forEach((q) => {
      const item = document.createElement("div");
      item.className = "timeline-item";
      item.setAttribute("data-subtopic", q.subtopicId);
      let topicName = "Key Topic 1";
      if (q.topicId === "topic_2") topicName = "Key Topic 2";
      if (q.topicId === "topic_3") topicName = "Key Topic 3";
      const textToSearch = `${q.question} ${q.answer} ${q.explanation || ""}`.toLowerCase();
      let visualHtml = "";
      const matchedImg = TIMELINE_IMAGES.find((ti) => !ti.used && ti.keywords.some((kw) => textToSearch.includes(kw)));
      if (matchedImg) {
        matchedImg.used = true;
        const base64Svg = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(matchedImg.imageSvg)));
        visualHtml = `
        <div class="timeline-image-wrapper" style="margin-top: 10px; margin-bottom: 8px; border-radius: var(--border-radius-sm); overflow: hidden; background: #000; max-height: 200px; display: flex; align-items: center; justify-content: center;">
          <img src="${base64Svg}" alt="Visual Source" style="max-width: 100%; max-height: 200px; object-fit: contain; opacity: 0.9;">
        </div>
        <div class="timeline-image-provenance" style="font-size: 0.75rem; color: #cbd5e1; font-weight: 500; background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); padding: 8px 10px; border-radius: 4px; margin-bottom: 10px; line-height: 1.4; box-sizing: border-box;">
          <strong style="color: inherit;">Source Provenance:</strong> ${matchedImg.provenance}
        </div>
      `;
      }
      let figureButtonsHtml = "";
      const figureKeys = Object.keys(KEY_FIGURES_BIO);
      const matchedFigures = /* @__PURE__ */ new Set();
      figureKeys.forEach((key) => {
        if (textToSearch.includes(key)) {
          matchedFigures.add(KEY_FIGURES_BIO[key].name);
        }
      });
      let buttons = "";
      if (matchedFigures.size > 0) {
        buttons = Array.from(matchedFigures).map((name) => {
          const key = figureKeys.find((k) => KEY_FIGURES_BIO[k].name === name);
          const fig = KEY_FIGURES_BIO[key];
          const initials = name.split(/\s+/).map((n) => n[0]).join("").substring(0, 2).toUpperCase();
          return `
          <button class="timeline-bio-btn" data-figure="${key}" style="margin-right: 6px; margin-top: 6px; padding: 2px 10px 2px 4px; font-size: 0.72rem; border-radius: 16px; background: rgba(245, 158, 11, 0.1); border: 1px solid var(--accent); color: var(--accent); font-weight: bold; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
            <div style="width: 20px; height: 20px; border-radius: 50%; overflow: hidden; display: flex; align-items: center; justify-content: center; background: var(--gradient-primary); border: 1px solid var(--accent); flex-shrink: 0;">
              ${fig.image ? `
                <img src="${fig.image}" alt="${name}" style="width: 100%; height: 100%; object-fit: cover;" 
                  onerror="const fallback = '${getFallbackUrl(fig.image) || ""}'; if (fallback && this.src !== fallback) { this.referrerPolicy = 'no-referrer'; this.src = fallback; } else { this.style.display='none'; this.nextElementSibling.style.display='flex'; }">
                <span style="display: none; font-size: 0.5rem; font-weight: 800; color: #fff;">${initials}</span>
              ` : `
                <span style="font-size: 0.5rem; font-weight: 800; color: #fff;">${initials}</span>
              `}
            </div>
            <span>Figure: ${name}</span>
          </button>
        `;
        }).join("");
      }
      const lessonButton = `<button class="timeline-lesson-btn" data-subtopic="${q.subtopicId}" style="margin-right: 6px; margin-top: 6px; padding: 4px 10px; font-size: 0.72rem; border-radius: 12px; background: rgba(59, 130, 246, 0.1); border: 1px solid var(--primary); color: var(--primary); font-weight: bold; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;"><i class="fa-solid fa-book-open"></i> Go to Lesson</button>`;
      const combinedButtonsHtml = `<div class="timeline-buttons-row" style="margin-top: 8px; display: flex; flex-wrap: wrap;">${lessonButton}${buttons}</div>`;
      item.innerHTML = `
      <div class="timeline-marker"></div>
      <div class="timeline-year">${q.year}</div>
      <div class="timeline-content-card" style="cursor: pointer;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
          <span style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted);">${topicName}</span>
          <span class="badge ${q.type === "standard" ? "badge-standard" : "badge-depth"}">${q.type === "standard" ? "Standard" : "Top Tier Trivia"}</span>
        </div>
        <div class="timeline-q-title" style="font-weight: bold; line-height: 1.4;">${q.question}</div>
        
        <div class="timeline-reveal-panel">
          ${visualHtml}
          <div class="timeline-a-box" style="margin-top: 8px;">
            <div class="timeline-a-text" style="color: var(--primary); font-weight: bold;">${q.answer}</div>
            <p class="timeline-exp" style="margin-top: 4px; font-size: 0.85rem; color: var(--text-muted); line-height: 1.4;">${q.explanation}</p>
          </div>
        </div>
        ${combinedButtonsHtml}
      </div>
    `;
      const card = item.querySelector(".timeline-content-card");
      card.addEventListener("click", (e) => {
        if (e.target.closest(".timeline-bio-btn") || e.target.closest(".timeline-lesson-btn")) return;
        AudioEngine.play("click");
        card.classList.toggle("revealed");
      });
      const bioBtns = item.querySelectorAll(".timeline-bio-btn");
      bioBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const figKey = btn.getAttribute("data-figure");
          showFigureBioModal(figKey);
        });
      });
      const lessonBtns = item.querySelectorAll(".timeline-lesson-btn");
      lessonBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          AudioEngine.play("click");
          const subtopicId = btn.getAttribute("data-subtopic");
          state.currentMode = "lessons";
          switchView("subtopic", subtopicId);
        });
      });
      wrapper.appendChild(item);
    });
  }
  function evaluateStudentAnswer(type, questionObj, userAnswer) {
    const cleanAns = (userAnswer || "").trim().toLowerCase();
    const wordCount = cleanAns.split(/\s+/).filter((w) => w.length > 0).length;
    const hasMinLength = wordCount >= 10;
    const connectives = ["led to", "resulted in", "caused", "forced", "provoked", "as a result", "consequently", "because", "this meant", "this caused", "therefore"];
    const matchedConnectives = connectives.filter((c) => cleanAns.includes(c));
    const hasCausal = matchedConnectives.length > 0;
    let keywords = [];
    if (questionObj.keywords && questionObj.keywords.length > 0) {
      keywords = questionObj.keywords;
    } else {
      const answerText = questionObj.answer || questionObj.model || "";
      const modelWords = answerText.replace(/<[^>]*>/g, "").split(/\s+/);
      modelWords.forEach((w) => {
        const cleanW = w.replace(/[^a-zA-Z0-9]/g, "");
        if (cleanW.length > 2) {
          const isNum = !isNaN(cleanW);
          const isCap = cleanW[0] === cleanW[0].toUpperCase() && cleanW[0] !== cleanW[0].toLowerCase();
          if (isNum || isCap) {
            const lower = cleanW.toLowerCase();
            const skip = ["the", "and", "one", "this", "that", "was", "for", "with", "from", "after", "israel", "palestine", "arab", "jewish", "egypt", "jordan", "syria", "zionist"];
            if (!skip.includes(lower) && !keywords.includes(cleanW)) {
              keywords.push(cleanW);
            }
          }
        }
      });
    }
    const matchedKeywords = keywords.filter((kw) => cleanAns.includes(kw.toLowerCase()));
    const hasKeywords = matchedKeywords.length >= (type === "consequence" ? 1 : 2);
    let scoreRules = [false, false, false, false];
    let feedbackHtml = "";
    if (type === "consequence") {
      scoreRules[0] = wordCount >= 8;
      scoreRules[1] = hasKeywords;
      scoreRules[2] = hasCausal;
      scoreRules[3] = wordCount >= 30 && matchedConnectives.length >= 1;
      const missed = [];
      if (!scoreRules[0]) missed.push("State a clear, direct consequence at the beginning.");
      if (!scoreRules[1]) missed.push(`Include more specific historical details (e.g., matching keywords like: ${keywords.slice(0, 4).join(", ")})`);
      if (!scoreRules[2]) missed.push("Use causal connectives (e.g., 'resulted in', 'led to', 'consequently') to link your points.");
      if (!scoreRules[3]) missed.push("Expand your explanation to trace the full cause-and-effect chain (aim for at least 30-40 words).");
      if (missed.length === 0) {
        feedbackHtml = `<span style="color: var(--success); font-weight: bold;"><i class="fa-solid fa-circle-check"></i> Excellent Critique!</span> Your response meets all mark scheme criteria. It is well-structured, detailed, and utilizes causal links.`;
      } else {
        feedbackHtml = `<strong style="color: var(--accent); display: block; margin-bottom: 6px;"><i class="fa-solid fa-triangle-exclamation"></i> Examiner Feedback & Recommendations:</strong>
      <ul style="margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 4px;">
        ${missed.map((m) => `<li>${m}</li>`).join("")}
      </ul>`;
      }
    } else if (type === "narrative") {
      scoreRules[0] = wordCount >= 30;
      scoreRules[1] = matchedConnectives.length >= 2;
      scoreRules[2] = matchedKeywords.length >= 3;
      const processWords = ["forced", "provoked", "led to", "caused", "resulted in"];
      const matchedProcess = processWords.filter((pw) => cleanAns.includes(pw));
      scoreRules[3] = matchedProcess.length >= 1;
      const missed = [];
      if (!scoreRules[0]) missed.push("Expand your narrative to fully cover the chronological sequence of events.");
      if (!scoreRules[1]) missed.push("Clearly link the events using transitional connectives showing how one event triggered the next.");
      if (!scoreRules[2]) missed.push(`Add more precise historical facts (e.g. key terms like: ${keywords.slice(0, 5).join(", ")})`);
      if (!scoreRules[3]) missed.push("Integrate at least one core Edexcel process word (e.g., 'forced', 'provoked', 'resulted in') to elevate your academic tone.");
      if (missed.length === 0) {
        feedbackHtml = `<span style="color: var(--success); font-weight: bold;"><i class="fa-solid fa-circle-check"></i> Excellent Critique!</span> Your narrative account effectively links events chronologically and uses solid analytical process terminology.`;
      } else {
        feedbackHtml = `<strong style="color: var(--accent); display: block; margin-bottom: 6px;"><i class="fa-solid fa-triangle-exclamation"></i> Examiner Feedback & Recommendations:</strong>
      <ul style="margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 4px;">
        ${missed.map((m) => `<li>${m}</li>`).join("")}
      </ul>`;
      }
    } else if (type === "importance") {
      const paragraphs = userAnswer.split(/\n+/).map((p) => p.trim()).filter((p) => p.length > 20);
      scoreRules[0] = paragraphs.length >= 2;
      scoreRules[1] = matchedKeywords.length >= 3;
      scoreRules[2] = wordCount >= 50 && hasCausal;
      scoreRules[3] = matchedConnectives.length >= 2;
      const missed = [];
      if (!scoreRules[0]) missed.push("Structure your answer into two distinct paragraphs (use double-enter to separate them), each dealing with a different aspect of importance.");
      if (!scoreRules[1]) missed.push(`Include more specific historical facts (e.g., keywords like: ${keywords.slice(0, 5).join(", ")})`);
      if (!scoreRules[2]) missed.push("Explicitly explain the outcomes and 'what difference the event made' rather than just describing the event itself.");
      if (!scoreRules[3]) missed.push("Use multiple analytical connectives (e.g., 'this meant that', 'consequently') to clearly outline the long-term impact.");
      if (missed.length === 0) {
        feedbackHtml = `<span style="color: var(--success); font-weight: bold;"><i class="fa-solid fa-circle-check"></i> Excellent Critique!</span> Your response is well-structured in two distinct paragraphs and highlights the historical significance of the event with precise detail.`;
      } else {
        feedbackHtml = `<strong style="color: var(--accent); display: block; margin-bottom: 6px;"><i class="fa-solid fa-triangle-exclamation"></i> Examiner Feedback & Recommendations:</strong>
      <ul style="margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 4px;">
        ${missed.map((m) => `<li>${m}</li>`).join("")}
      </ul>`;
      }
    }
    return { scores: scoreRules, feedback: feedbackHtml, keywords, matchedKeywords };
  }
  function renderBookmarksView() {
    const container = document.getElementById("bookmarks-list-container");
    container.innerHTML = "";
    const bookmarkedQs = state.allQuestions.filter((q) => state.bookmarks.includes(q.id));
    if (bookmarkedQs.length === 0) {
      container.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-star" style="color: var(--scrollbar-thumb);"></i>
        <h3>No bookmarked cards</h3>
        <p>Click the star icon in Accordions or Flashcards to compile a custom deck of hard questions here.</p>
      </div>
    `;
      return;
    }
    bookmarkedQs.forEach((q, idx) => {
      const isMastered = !!state.mastery[q.id];
      const details = document.createElement("details");
      details.className = "quiz-card-details";
      details.innerHTML = `
      <summary class="quiz-card-summary">
        <div class="summary-content">
          <span class="summary-num">${idx + 1}</span>
          <span class="summary-text">${q.question}</span>
        </div>
        <div class="summary-badges">
          <span class="badge ${q.type === "standard" ? "badge-standard" : "badge-depth"}">${q.type === "standard" ? "Standard" : "Top Tier Trivia"}</span>
          <span class="badge badge-year">${q.year}</span>
          <div class="bookmark-icon-container bookmarked" data-qid="${q.id}" title="Remove Bookmark">
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="mastery-checkbox-container ${isMastered ? "mastered" : ""}" data-qid="${q.id}" title="Mark as Mastered">
            <i class="fa-solid fa-check"></i>
          </div>
          <i class="fa-solid fa-chevron-down summary-arrow"></i>
        </div>
      </summary>
      <div class="details-content">
        <div class="answer-header">
          <i class="fa-solid fa-circle-check"></i> Correct Key Term
        </div>
        <div class="answer-value">${q.answer}</div>
        <div class="explanation-value">${q.explanation}</div>
      </div>
    `;
      details.querySelector(".bookmark-icon-container").addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleBookmark(q.id);
        renderBookmarksView();
      });
      const checkBtn = details.querySelector(".mastery-checkbox-container");
      checkBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const nextState = !checkBtn.classList.contains("mastered");
        setMastered(q.id, nextState);
        checkBtn.classList.toggle("mastered", nextState);
        if (nextState) AudioEngine.play("success");
        else AudioEngine.play("click");
      });
      details.addEventListener("toggle", () => {
        if (details.open) {
          AudioEngine.play("flip");
        }
      });
      container.appendChild(details);
    });
  }
  function closeVideoModal() {
    const modal = document.getElementById("video-modal-overlay");
    const iframe = document.getElementById("video-modal-iframe");
    if (!modal || !iframe) return;
    iframe.src = "";
    modal.style.display = "none";
    AudioEngine.play("click");
  }
  var GOOGLE_SHEET_WEBAPP_URL = "";
  function getMissedTerms() {
    try {
      const list = localStorage.getItem("antigravity_mastery_missed_terms");
      return list ? JSON.parse(list) : [];
    } catch (e) {
      return [];
    }
  }
  function recordMissedTerm(term) {
    try {
      const list = getMissedTerms();
      if (!list.includes(term)) {
        list.push(term);
        localStorage.setItem("antigravity_mastery_missed_terms", JSON.stringify(list));
      }
    } catch (e) {
    }
  }
  function resolveMissedTerm(term) {
    try {
      let list = getMissedTerms();
      list = list.filter((t) => t !== term);
      localStorage.setItem("antigravity_mastery_missed_terms", JSON.stringify(list));
    } catch (e) {
    }
  }
  var chronoState = {
    selectedEvents: [],
    shuffledEvents: [],
    placedEvents: [null, null, null, null, null],
    score: 0,
    hasChecked: false
  };
  var masteryState = {
    unitId: null,
    items: [],
    selectedTermCard: null,
    selectedDefCard: null,
    score: 0,
    timerVal: 60,
    timerInterval: null,
    isSpeedRun: false,
    matchedCount: 0
  };
  var mindmapState = {
    subtopicId: null,
    nodes: [],
    shuffledNodes: [],
    placedCount: 0,
    score: 0,
    timerVal: 60,
    timerInterval: null,
    isSpeedRun: false
  };
  var CHRONOLOGY_EVENTS = {};
  function populateChronologyEvents() {
    if (Object.keys(CHRONOLOGY_EVENTS).length > 0) return;
    import_questions.QUIZ_DATA.forEach((topic) => {
      const topicId = topic.id;
      CHRONOLOGY_EVENTS[topicId] = [];
      topic.subtopics.forEach((sub) => {
        const subtopicId = sub.id;
        CHRONOLOGY_EVENTS[subtopicId] = [];
        const subQuestions = [
          ...sub.standard || [],
          ...sub.depth || []
        ].filter((q) => q.year && q.answer && q.question);
        subQuestions.forEach((q) => {
          const ev = {
            id: `chrono_${q.id}`,
            year: q.year,
            answer: q.answer,
            question: q.question
          };
          CHRONOLOGY_EVENTS[subtopicId].push(ev);
          CHRONOLOGY_EVENTS[topicId].push(ev);
        });
      });
    });
  }
  function playCausalGame(subtopicId) {
    const container = document.getElementById("causal-game-play-area");
    if (!container) return;
    const data = LESSONS_DATA[subtopicId];
    if (!data || !data.causalLinks) return;
    const causalLinks = data.causalLinks;
    const totalFactors = causalLinks.factors.length;
    const linkedFactors = /* @__PURE__ */ new Set();
    const pooledLinks = causalLinks.factors.map((factor) => factor.linkageText);
    let factorsHtml = "";
    causalLinks.factors.forEach((f, idx) => {
      const correctIdx = pooledLinks.indexOf(f.linkageText);
      const optionsMarkup = pooledLinks.map((linkText, lIdx) => {
        return `<option value="${lIdx}">${linkText}</option>`;
      }).join("");
      factorsHtml += `
      <div class="causal-factor-card" id="causal-game-factor-card-${f.id}" style="padding: 16px; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-glass); border-radius: var(--border-radius-sm); margin-bottom: 16px; transition: all 0.3s;">
        <div class="causal-factor-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span style="font-weight: 600; font-size: 0.95rem; color: var(--text-main);">Factor ${idx + 1}: ${f.title}</span>
          <span class="causal-status-badge" id="causal-game-status-${f.id}" style="font-size: 0.7rem; font-weight: 700; padding: 4px 8px; border-radius: 4px; background: rgba(239, 68, 68, 0.1); color: #f87171;">UNLINKED</span>
        </div>
        <div class="causal-select-wrapper" id="causal-game-select-wrapper-${f.id}">
          <label style="font-size: 0.75rem; color: var(--text-muted); display: block; margin-bottom: 6px;">Select the correct analytical consequence / evidence link:</label>
          <select class="causal-select" id="causal-game-select-${f.id}" data-factor-id="${f.id}" data-correct="${correctIdx}" style="width: 100%; padding: 10px; background: rgba(0,0,0,0.3); border: 1px solid var(--border-glass); border-radius: 4px; color: var(--text-main); font-size: 0.88rem; outline: none; cursor: pointer;">
            <option value="" disabled selected>-- Match the consequence link --</option>
            ${optionsMarkup}
          </select>
        </div>
        <div class="causal-link-result" id="causal-game-result-${f.id}" style="display: none; margin-top: 10px; padding: 10px; background: rgba(16, 185, 129, 0.1); border-left: 3px solid #10b981; border-radius: 0 4px 4px 0; font-size: 0.88rem; color: #a7f3d0; line-height: 1.4;">
          <strong>\u2713 Consequence Link:</strong> ${f.linkageText}
        </div>
      </div>
    `;
    });
    container.innerHTML = `
    <div class="causal-connector-container" style="background: var(--bg-card); padding: 24px; border: 1px solid var(--border-glass); border-radius: var(--border-radius-md); box-shadow: var(--shadow-md);">
      <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-top: 0; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
        <i class="fa-solid fa-link" style="color: var(--primary);"></i> Causal Link Builder
      </h3>
      <p style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.5; margin: 0 0 16px 0;">
        Revision essays require you to link specific factors to their historical consequences. Select the correct link for each factor.
      </p>
      <div class="causal-question" style="background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.2); padding: 16px; border-radius: var(--border-radius-sm); margin-bottom: 20px; font-size: 0.92rem; line-height: 1.5; color: var(--text-main);">
        <strong style="color: var(--primary);">Essay Question:</strong> &nbsp;${causalLinks.question}
      </div>
      <div class="causal-factors-grid">
        ${factorsHtml}
      </div>
      <div class="causal-success-panel" id="causal-game-success-panel" style="display: none; text-align: center; margin-top: 24px; padding: 24px; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--border-radius-md); transition: all 0.3s;">
        <h4 style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 700; color: #34d399; margin: 0 0 8px 0; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <i class="fa-solid fa-trophy"></i> Causation Mastered!
        </h4>
        <p style="font-size: 0.92rem; line-height: 1.5; color: #a7f3d0; margin: 0;">${causalLinks.successText}</p>
      </div>
    </div>
  `;
    causalLinks.factors.forEach((f) => {
      const select = document.getElementById(`causal-game-select-${f.id}`);
      if (select) {
        select.addEventListener("change", (e) => {
          const selectedVal = parseInt(e.target.value);
          const correctVal = parseInt(select.getAttribute("data-correct"));
          const card = document.getElementById(`causal-game-factor-card-${f.id}`);
          const status = document.getElementById(`causal-game-status-${f.id}`);
          const result = document.getElementById(`causal-game-result-${f.id}`);
          const wrapper = document.getElementById(`causal-game-select-wrapper-${f.id}`);
          if (selectedVal === correctVal) {
            AudioEngine.play("success");
            card.style.borderColor = "rgba(16, 185, 129, 0.4)";
            card.style.background = "rgba(16, 185, 129, 0.03)";
            status.textContent = "LINKED!";
            status.style.background = "rgba(16, 185, 129, 0.15)";
            status.style.color = "#34d399";
            wrapper.style.display = "none";
            result.style.display = "block";
            linkedFactors.add(f.id);
            if (linkedFactors.size === totalFactors) {
              AudioEngine.play("cheer");
              Confetti.spawn();
              const panel = document.getElementById("causal-game-success-panel");
              if (panel) panel.style.display = "block";
            }
          } else {
            AudioEngine.play("fail");
            card.style.transform = "translateX(-6px)";
            setTimeout(() => card.style.transform = "translateX(6px)", 60);
            setTimeout(() => card.style.transform = "translateX(-4px)", 120);
            setTimeout(() => card.style.transform = "translateX(4px)", 180);
            setTimeout(() => card.style.transform = "translateX(0)", 240);
            select.value = "";
          }
        });
      }
    });
  }
  function initChronologyGame() {
    populateChronologyEvents();
    const container = document.getElementById("chronology-game-play-area");
    if (!container) return;
    const topicSelect = document.getElementById("chrono-game-topic-select");
    const topicId = topicSelect ? topicSelect.value : "topic_1";
    const pool = CHRONOLOGY_EVENTS[topicId] || [];
    if (pool.length === 0) {
      container.innerHTML = `
      <div class="empty-state" style="text-align: center; padding: 40px 20px;">
        <i class="fa-solid fa-hourglass-empty" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 12px;"></i>
        <h3 style="color: var(--text-main); margin-bottom: 8px;">No Chronological Events Found</h3>
        <p style="color: var(--text-muted); font-size: 0.88rem;">Try selecting a different topic unit from the dropdown above.</p>
      </div>
    `;
      return;
    }
    const selected = [...pool].sort(() => 0.5 - Math.random()).slice(0, 5);
    chronoState.selectedEvents = [...selected].sort((a, b) => a.year - b.year);
    chronoState.shuffledEvents = [...selected].sort(() => 0.5 - Math.random());
    chronoState.placedEvents = [null, null, null, null, null];
    chronoState.hasChecked = false;
    renderChronologyGameUI();
  }
  function renderChronologyGameUI() {
    const container = document.getElementById("chronology-game-play-area");
    if (!container) return;
    let slotsHtml = "";
    chronoState.placedEvents.forEach((placedEvent, idx) => {
      if (idx > 0) {
        slotsHtml += `
        <div class="mindmap-arrow" id="chrono-arrow-${idx}" style="opacity: 0.25; display: flex; align-items: center; justify-content: center;">
          <i class="fa-solid fa-arrow-right horizontal-arrow" style="color: var(--primary); font-size: 1.1rem;"></i>
          <i class="fa-solid fa-arrow-down vertical-arrow" style="color: var(--primary); font-size: 1.1rem; margin: 4px 0;"></i>
        </div>
      `;
      }
      if (placedEvent) {
        slotsHtml += `
        <div class="chrono-slot filled" id="chrono-slot-${idx}" data-index="${idx}">
          <span class="chrono-slot-label">Step ${idx + 1}</span>
          <div class="chrono-card-content">
            <strong>${placedEvent.answer}</strong>
            <p>${placedEvent.question}</p>
          </div>
        </div>
      `;
      } else {
        slotsHtml += `
        <div class="chrono-slot" id="chrono-slot-${idx}" data-index="${idx}">
          <span class="chrono-slot-label">Step ${idx + 1}</span>
          <div class="chrono-slot-placeholder-text">Empty Slot</div>
        </div>
      `;
      }
    });
    let optionsHtml = chronoState.shuffledEvents.map((q) => {
      const isPlaced = chronoState.placedEvents.some((p) => p && p.id === q.id);
      const cleanId = `chrono-opt-${q.id}`;
      return `
      <div class="chrono-option-card ${isPlaced ? "placed" : ""}" id="${cleanId}" data-qid="${q.id}">
        <strong style="color: var(--primary); font-size: 0.88rem; display: block; margin-bottom: 2px; line-height: 1.25;">${q.answer}</strong>
        <p style="font-size: 0.72rem; line-height: 1.35; color: var(--text-muted); margin: 0; font-style: italic;">Clue: ${q.question}</p>
      </div>
    `;
    }).join("");
    const isAllFilled = chronoState.placedEvents.every((p) => p !== null);
    container.innerHTML = `
    <div class="causal-connector-container" style="background: var(--bg-card); padding: 24px; border: 1px solid var(--border-glass); border-radius: var(--border-radius-md); box-shadow: var(--shadow-md);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin: 0; display: flex; align-items: center; gap: 8px;">
          <i class="fa-solid fa-hourglass-half" style="color: var(--primary);"></i> Chronology Challenge
        </h3>
        <span style="font-weight: 700; font-size: 0.95rem; color: var(--success);" id="chrono-score-display">Score: ${chronoState.score}</span>
      </div>
      <p style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.5; margin: 0 0 20px 0;">
        Chronological sequence is vital. Tap option cards below to place them in the timeline. Tapping a placed event removes it back to the options. Arrange all 5 in the correct chronological sequence (earliest to latest) and verify!
      </p>

      <!-- Chronology slots panel (Top viewport) -->
      <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">Chronology Timeline</div>
      <div class="chrono-slots-container">
        ${slotsHtml}
      </div>

      <!-- Success panel placed right underneath the timeline slots -->
      <div class="causal-success-panel" id="chrono-success-panel" style="display: none; text-align: center; margin-top: 16px; padding: 20px; background: rgba(16, 185, 129, 0.05); border: 1px solid var(--success); border-radius: var(--border-radius-md);">
        <h4 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--success); margin: 0 0 8px 0; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <i class="fa-solid fa-medal"></i> Chronology Mastered!
        </h4>
        <p style="font-size: 0.9rem; line-height: 1.5; color: var(--text-main); margin-bottom: 16px;">
          Outstanding work! You successfully ordered all 5 milestones in their correct chronological sequence.
        </p>
        <div id="chrono-narrative-container" style="margin-bottom: 20px;"></div>
        <button class="btn-primary" id="btn-chrono-play-again" style="padding: 10px 20px; font-weight: 600; font-size: 0.9rem; border-radius: 4px; cursor: pointer;">
          <i class="fa-solid fa-rotate-right"></i> Play Again (New Events)
        </button>
      </div>

      <div id="chrono-play-controls-area">
        <!-- Shuffled event cards shelf (Bottom viewport) -->
        <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">Timeline Event Options</div>
        <div class="chrono-options-container">
          ${optionsHtml}
        </div>

        <!-- Clue Feedback box -->
        <div id="chrono-feedback-message" style="display: none; font-size: 0.82rem; line-height: 1.45; padding: 10px 14px; border-radius: var(--border-radius-sm); margin-top: 16px; font-weight: 600; text-align: center;"></div>

        <!-- Action buttons -->
        <div style="display: flex; gap: 12px; margin-top: 24px; justify-content: center; align-items: center; flex-wrap: wrap;">
          <button class="btn-primary" id="btn-chrono-check" ${isAllFilled ? "" : "disabled"} style="padding: 10px 20px; font-weight: 600; font-size: 0.9rem; border-radius: 4px; cursor: ${isAllFilled ? "pointer" : "not-allowed"}; opacity: ${isAllFilled ? "1" : "0.5"}; display: ${chronoState.hasChecked ? "none" : "inline-flex"}; align-items: center; gap: 6px;">
            <i class="fa-solid fa-clipboard-check"></i> Verify Sequence
          </button>
          <button class="btn-secondary" id="btn-chrono-reset" style="padding: 10px 20px; font-weight: 600; font-size: 0.9rem; border-radius: 4px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
            <i class="fa-solid fa-arrow-rotate-left"></i> Clear All
          </button>
        </div>
      </div>
    </div>
  `;
    bindChronologyEvents();
  }
  function bindChronologyEvents() {
    const container = document.getElementById("game-chronology-container");
    if (!container) return;
    container.querySelectorAll(".chrono-option-card").forEach((card) => {
      card.addEventListener("click", () => {
        if (chronoState.hasChecked) return;
        const qid = card.getAttribute("data-qid");
        const eventObj = chronoState.shuffledEvents.find((e) => e.id === qid);
        if (!eventObj) return;
        const emptyIdx = chronoState.placedEvents.indexOf(null);
        if (emptyIdx > -1) {
          AudioEngine.play("click");
          chronoState.placedEvents[emptyIdx] = eventObj;
          renderChronologyGameUI();
        }
      });
    });
    container.querySelectorAll(".chrono-slot.filled").forEach((slot) => {
      slot.addEventListener("click", () => {
        const idx = parseInt(slot.getAttribute("data-index"));
        AudioEngine.play("click");
        chronoState.placedEvents[idx] = null;
        chronoState.hasChecked = false;
        renderChronologyGameUI();
      });
    });
    const checkBtn = document.getElementById("btn-chrono-check");
    if (checkBtn) {
      checkBtn.addEventListener("click", () => {
        verifyChronologySequence();
      });
    }
    const resetBtn = document.getElementById("btn-chrono-reset");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        AudioEngine.play("click");
        chronoState.placedEvents = [null, null, null, null, null];
        chronoState.hasChecked = false;
        renderChronologyGameUI();
      });
    }
    const playAgainBtn = document.getElementById("btn-chrono-play-again");
    if (playAgainBtn) {
      playAgainBtn.addEventListener("click", () => {
        AudioEngine.play("click");
        initChronologyGame();
      });
    }
  }
  function generateChronoNarrativeParagraph(events) {
    const parts = events.map((e, idx) => {
      const qText = e.question.trim();
      const ansText = e.answer.trim();
      if (idx === 0) {
        return `In <strong>${e.year}</strong>, the <strong>${ansText}</strong> occurred (${qText})`;
      } else if (idx === 1) {
        return `this was followed in <strong>${e.year}</strong> by the <strong>${ansText}</strong> (${qText})`;
      } else if (idx === 2) {
        return `subsequently, in <strong>${e.year}</strong>, the <strong>${ansText}</strong> took place (${qText})`;
      } else if (idx === 3) {
        return `next, in <strong>${e.year}</strong>, the <strong>${ansText}</strong> happened (${qText})`;
      } else {
        return `and finally, in <strong>${e.year}</strong>, this story culminated in the <strong>${ansText}</strong> (${qText})`;
      }
    });
    let narrative = parts.join("; ");
    narrative = narrative.charAt(0).toUpperCase() + narrative.slice(1);
    if (!narrative.endsWith(".")) {
      narrative += ".";
    }
    return `
    <div style="text-align: left; background: rgba(16, 185, 129, 0.05); border-left: 4px solid var(--success); padding: 14px 18px; border-radius: var(--border-radius-sm); margin-top: 16px;">
      <strong style="color: var(--success); display: block; margin-bottom: 6px; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;">
        <i class="fa-solid fa-book-open"></i> Historical Narrative:
      </strong>
      <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-main); margin: 0; font-style: italic;">
        ${narrative}
      </p>
    </div>
`;
  }
  function getChronologyClue() {
    const incorrectIndices = [];
    chronoState.placedEvents.forEach((event, idx) => {
      const expectedEvent2 = chronoState.selectedEvents[idx];
      if (!event || event.id !== expectedEvent2.id) {
        incorrectIndices.push(idx);
      }
    });
    if (incorrectIndices.length === 0) return "";
    const firstWrongIdx = incorrectIndices[0];
    const expectedEvent = chronoState.selectedEvents[firstWrongIdx];
    return `Consider the timing of **${expectedEvent.answer}**. It belongs in the sequence at **Step ${firstWrongIdx + 1}**! Check your order and try again.`;
  }
  function verifyChronologySequence() {
    const container = document.getElementById("chronology-game-play-area");
    if (!container) return;
    chronoState.hasChecked = true;
    let allCorrect = true;
    chronoState.placedEvents.forEach((event, idx) => {
      const expectedEvent = chronoState.selectedEvents[idx];
      const slot = document.getElementById(`chrono-slot-${idx}`);
      if (!slot) return;
      if (event && event.id === expectedEvent.id) {
        slot.classList.remove("incorrect");
        slot.classList.add("correct");
      } else {
        slot.classList.remove("correct");
        slot.classList.add("incorrect");
        allCorrect = false;
      }
    });
    if (allCorrect) {
      AudioEngine.play("cheer");
      if (typeof Confetti !== "undefined" && typeof Confetti.spawn === "function") {
        Confetti.spawn(100);
      }
      chronoState.score += 20;
      const scoreDisplay = document.getElementById("chrono-score-display");
      if (scoreDisplay) scoreDisplay.textContent = `Score: ${chronoState.score}`;
      chronoState.placedEvents.forEach((event, idx) => {
        const slot = document.getElementById(`chrono-slot-${idx}`);
        if (slot) {
          const content = slot.querySelector(".chrono-card-content");
          if (content) {
            content.innerHTML = `
            <div class="chrono-slot-year-badge">${event.year}</div>
            <strong>${event.answer}</strong>
            <p>${event.question}</p>
          `;
          }
        }
      });
      const successPanel = document.getElementById("chrono-success-panel");
      if (successPanel) {
        successPanel.style.display = "block";
      }
      const narrativeContainer = document.getElementById("chrono-narrative-container");
      if (narrativeContainer) {
        narrativeContainer.innerHTML = generateChronoNarrativeParagraph(chronoState.placedEvents);
      }
      const feedbackMsg = document.getElementById("chrono-feedback-message");
      if (feedbackMsg) {
        feedbackMsg.style.display = "none";
      }
      const checkBtn = document.getElementById("btn-chrono-check");
      if (checkBtn) checkBtn.style.display = "none";
      const playControls = document.getElementById("chrono-play-controls-area");
      if (playControls) playControls.style.display = "none";
    } else {
      AudioEngine.play("fail");
      chronoState.score = Math.max(0, chronoState.score - 5);
      const scoreDisplay = document.getElementById("chrono-score-display");
      if (scoreDisplay) scoreDisplay.textContent = `Score: ${chronoState.score}`;
      const feedbackMsg = document.getElementById("chrono-feedback-message");
      if (feedbackMsg) {
        feedbackMsg.style.display = "block";
        feedbackMsg.style.background = "rgba(239, 68, 68, 0.1)";
        feedbackMsg.style.color = "var(--accent)";
        feedbackMsg.style.borderLeft = "3px solid var(--accent)";
        feedbackMsg.innerHTML = `<i class="fa-solid fa-lightbulb"></i> ${getChronologyClue()}`;
      }
    }
  }
  function getHighScores(unitId) {
    const key = `mastery_highscores_${unitId}`;
    let scores = localStorage.getItem(key);
    if (!scores) {
      scores = [
        { name: "Alex", yearGroup: "Year 9", score: 45, date: "2026-05-28" },
        { name: "Sarah", yearGroup: "Year 10", score: 40, date: "2026-05-29" },
        { name: "James", yearGroup: "Year 8", score: 35, date: "2026-05-27" },
        { name: "Emily", yearGroup: "Year 11", score: 25, date: "2026-05-29" },
        { name: "Thomas", yearGroup: "Year 7", score: 15, date: "2026-05-26" }
      ];
      localStorage.setItem(key, JSON.stringify(scores));
    } else {
      scores = JSON.parse(scores);
    }
    return scores.sort((a, b) => b.score - a.score).slice(0, 5);
  }
  function saveHighScoreLocal(unitId, name, yearGroup, score) {
    const scores = getHighScores(unitId);
    const dateStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    scores.push({ name: name || "Anonymous", yearGroup: yearGroup || "", score, date: dateStr });
    scores.sort((a, b) => b.score - a.score);
    localStorage.setItem(`mastery_highscores_${unitId}`, JSON.stringify(scores.slice(0, 5)));
  }
  function renderMasteryLeaderboard(unitId) {
    const container = document.getElementById("mastery-leaderboard-container");
    if (!container) return;
    const localScores = getHighScores(unitId);
    renderTable(localScores);
    if (GOOGLE_SHEET_WEBAPP_URL) {
      fetch(`${GOOGLE_SHEET_WEBAPP_URL}?type=mastery&unitId=${unitId}`).then((res) => res.json()).then((scores) => {
        if (Array.isArray(scores)) {
          renderTable(scores);
        }
      }).catch((err) => console.error("Error loading remote mastery leaderboard:", err));
    }
    function renderTable(scoresList) {
      let rowsHtml = scoresList.map((s, idx) => {
        let medal = "";
        if (idx === 0) medal = "\u{1F947} ";
        else if (idx === 1) medal = "\u{1F948} ";
        else if (idx === 2) medal = "\u{1F949} ";
        const yrText = s.yearGroup ? ` <span style="font-size: 0.72rem; color: var(--text-muted);">(${s.yearGroup})</span>` : "";
        return `
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.82rem;">
          <td style="padding: 8px 4px; font-weight: bold; color: var(--primary);">${medal}${idx + 1}</td>
          <td style="padding: 8px 4px; color: var(--text-main);">${s.name}${yrText}</td>
          <td style="padding: 8px 4px; font-weight: 700; color: var(--success); text-align: right;">${s.score} pts</td>
          <td style="padding: 8px 4px; color: var(--text-muted); text-align: right; font-size: 0.72rem;">${s.date}</td>
        </tr>
      `;
      }).join("");
      container.innerHTML = `
      <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--border-glass);">
        <h4 style="font-family: var(--font-heading); font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin: 0 0 12px 0; display: flex; align-items: center; gap: 6px;">
          <i class="fa-solid fa-ranking-star" style="color: var(--accent);"></i> Top High Scores (Unit Leaderboard)
        </h4>
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <thead>
            <tr style="border-bottom: 1px solid var(--border-glass); color: var(--text-muted); font-size: 0.72rem; text-transform: uppercase;">
              <th style="padding: 4px; font-weight: 600;">Rank</th>
              <th style="padding: 4px; font-weight: 600;">Student</th>
              <th style="padding: 4px; font-weight: 600; text-align: right;">Score</th>
              <th style="padding: 4px; font-weight: 600; text-align: right;">Date</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
    }
  }
  function renderResultsLeaderboard(unitId) {
    const container = document.getElementById("mastery-results-leaderboard");
    if (!container) return;
    const localScores = getHighScores(unitId);
    renderResults(localScores);
    if (GOOGLE_SHEET_WEBAPP_URL) {
      fetch(`${GOOGLE_SHEET_WEBAPP_URL}?type=mastery&unitId=${unitId}`).then((res) => res.json()).then((scores) => {
        if (Array.isArray(scores)) {
          renderResults(scores);
        }
      }).catch((err) => console.error("Error loading remote mastery results leaderboard:", err));
    }
    function renderResults(scoresList) {
      let rowsHtml = scoresList.map((s, idx) => {
        let medal = "";
        if (idx === 0) medal = "\u{1F947} ";
        else if (idx === 1) medal = "\u{1F948} ";
        else if (idx === 2) medal = "\u{1F949} ";
        const yrText = s.yearGroup ? ` <span style="font-size: 0.72rem; color: var(--text-muted);">(${s.yearGroup})</span>` : "";
        return `
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.03);">
          <span style="color: var(--primary); font-weight: bold;">${medal}${idx + 1}. ${s.name}${yrText}</span>
          <span style="color: var(--success); font-weight: 700;">${s.score} pts</span>
        </div>
      `;
      }).join("");
      container.innerHTML = `
      <h4 style="font-family: var(--font-heading); font-size: 0.88rem; margin: 12px 0 8px; color: var(--text-main); text-align: left;">
        <i class="fa-solid fa-ranking-star" style="color: var(--accent);"></i> Leaderboard Rankings:
      </h4>
      <div style="text-align: left; background: rgba(0,0,0,0.1); padding: 8px 12px; border-radius: 4px; border: 1px solid var(--border-glass);">
        ${rowsHtml}
      </div>
    `;
    }
  }
  function getMindMapHighScores(subtopicId) {
    const key = `mindmap_highscores_${subtopicId}`;
    let scores = localStorage.getItem(key);
    if (!scores) {
      scores = [
        { name: "Alex", yearGroup: "Year 9", score: 45, date: "2026-05-28" },
        { name: "Sarah", yearGroup: "Year 10", score: 40, date: "2026-05-29" },
        { name: "James", yearGroup: "Year 8", score: 35, date: "2026-05-27" },
        { name: "Emily", yearGroup: "Year 11", score: 25, date: "2026-05-29" },
        { name: "Thomas", yearGroup: "Year 7", score: 15, date: "2026-05-26" }
      ];
      localStorage.setItem(key, JSON.stringify(scores));
    } else {
      scores = JSON.parse(scores);
    }
    return scores.sort((a, b) => b.score - a.score).slice(0, 5);
  }
  function saveMindMapHighScoreLocal(subtopicId, name, yearGroup, score) {
    const scores = getMindMapHighScores(subtopicId);
    const dateStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    scores.push({ name: name || "Anonymous", yearGroup: yearGroup || "", score, date: dateStr });
    scores.sort((a, b) => b.score - a.score);
    localStorage.setItem(`mindmap_highscores_${subtopicId}`, JSON.stringify(scores.slice(0, 5)));
  }
  function renderMindMapLeaderboard(subtopicId) {
    const container = document.getElementById("mindmap-leaderboard-container");
    if (!container) return;
    const localScores = getMindMapHighScores(subtopicId);
    renderTable(localScores);
    if (GOOGLE_SHEET_WEBAPP_URL) {
      fetch(`${GOOGLE_SHEET_WEBAPP_URL}?type=mindmap&subtopicId=${subtopicId}`).then((res) => res.json()).then((scores) => {
        if (Array.isArray(scores)) {
          renderTable(scores);
        }
      }).catch((err) => console.error("Error loading remote mindmap leaderboard:", err));
    }
    function renderTable(scoresList) {
      let rowsHtml = scoresList.map((s, idx) => {
        let medal = "";
        if (idx === 0) medal = "\u{1F947} ";
        else if (idx === 1) medal = "\u{1F948} ";
        else if (idx === 2) medal = "\u{1F949} ";
        const yrText = s.yearGroup ? ` <span style="font-size: 0.72rem; color: var(--text-muted);">(${s.yearGroup})</span>` : "";
        return `
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.82rem;">
          <td style="padding: 8px 4px; font-weight: bold; color: var(--primary);">${medal}${idx + 1}</td>
          <td style="padding: 8px 4px; color: var(--text-main);">${s.name}${yrText}</td>
          <td style="padding: 8px 4px; font-weight: 700; color: var(--success); text-align: right;">${s.score} pts</td>
          <td style="padding: 8px 4px; color: var(--text-muted); text-align: right; font-size: 0.72rem;">${s.date}</td>
        </tr>
      `;
      }).join("");
      container.innerHTML = `
      <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--border-glass);">
        <h4 style="font-family: var(--font-heading); font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin: 0 0 12px 0; display: flex; align-items: center; gap: 6px;">
          <i class="fa-solid fa-ranking-star" style="color: var(--accent);"></i> Top High Scores (Topic Leaderboard)
        </h4>
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <thead>
            <tr style="border-bottom: 1px solid var(--border-glass); color: var(--text-muted); font-size: 0.72rem; text-transform: uppercase;">
              <th style="padding: 4px; font-weight: 600;">Rank</th>
              <th style="padding: 4px; font-weight: 600;">Student</th>
              <th style="padding: 4px; font-weight: 600; text-align: right;">Score</th>
              <th style="padding: 4px; font-weight: 600; text-align: right;">Date</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
    }
  }
  function renderMindMapResultsLeaderboard(subtopicId) {
    const container = document.getElementById("mindmap-results-leaderboard");
    if (!container) return;
    const localScores = getMindMapHighScores(subtopicId);
    renderResults(localScores);
    if (GOOGLE_SHEET_WEBAPP_URL) {
      fetch(`${GOOGLE_SHEET_WEBAPP_URL}?type=mindmap&subtopicId=${subtopicId}`).then((res) => res.json()).then((scores) => {
        if (Array.isArray(scores)) {
          renderResults(scores);
        }
      }).catch((err) => console.error("Error loading remote mindmap results leaderboard:", err));
    }
    function renderResults(scoresList) {
      let rowsHtml = scoresList.map((s, idx) => {
        let medal = "";
        if (idx === 0) medal = "\u{1F947} ";
        else if (idx === 1) medal = "\u{1F948} ";
        else if (idx === 2) medal = "\u{1F949} ";
        const yrText = s.yearGroup ? ` <span style="font-size: 0.72rem; color: var(--text-muted);">(${s.yearGroup})</span>` : "";
        return `
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.03);">
          <span style="color: var(--primary); font-weight: bold;">${medal}${idx + 1}. ${s.name}${yrText}</span>
          <span style="color: var(--success); font-weight: 700;">${s.score} pts</span>
        </div>
      `;
      }).join("");
      container.innerHTML = `
      <h4 style="font-family: var(--font-heading); font-size: 0.88rem; margin: 12px 0 8px; color: var(--text-main); text-align: left;">
        <i class="fa-solid fa-ranking-star" style="color: var(--accent);"></i> Leaderboard Rankings:
      </h4>
      <div style="text-align: left; background: rgba(0,0,0,0.1); padding: 8px 12px; border-radius: 4px; border: 1px solid var(--border-glass);">
        ${rowsHtml}
      </div>
    `;
    }
  }
  function initMasteryMatchGame() {
    const container = document.getElementById("mastery-game-play-area");
    if (!container) return;
    let optionsHtml = "";
    Object.keys(MASTERY_DATA).forEach((unitId) => {
      optionsHtml += `<option value="${unitId}">${MASTERY_DATA[unitId].title}</option>`;
    });
    container.innerHTML = `
    <div class="causal-connector-container" style="background: var(--bg-card); padding: 24px; border: 1px solid var(--border-glass); border-radius: var(--border-radius-md); box-shadow: var(--shadow-md);">
      <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-top: 0; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
        <i class="fa-solid fa-trophy" style="color: var(--primary);"></i> Mastery Match
      </h3>
      <p style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.5; margin: 0 0 20px 0;">
        Match specification-level terms to their definitions. Correct pairings trigger a quick "Defend" bonus question!
      </p>

      <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px;">
        <div class="form-group" style="display: flex; flex-direction: column; gap: 6px;">
          <label style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--text-muted);">Select Topic Unit</label>
          <select class="select-input" id="mastery-setup-unit" style="width: 100%; padding: 12px 16px; background: rgba(0, 0, 0, 0.2); border: 1px solid var(--border-glass); border-radius: var(--border-radius-sm); color: var(--text-main); font-size: 0.95rem; outline: none; cursor: pointer;">
            ${optionsHtml}
          </select>
        </div>

        <div style="display: flex; align-items: center; gap: 10px; padding: 10px 0;">
          <input type="checkbox" id="mastery-setup-speedrun" checked style="width: 18px; height: 18px; cursor: pointer; accent-color: var(--primary);">
          <label for="mastery-setup-speedrun" style="font-size: 0.88rem; font-weight: 500; cursor: pointer; color: var(--text-main);">
            Enable Speed Run Mode (60-second Timer)
          </label>
        </div>
      </div>

      <button class="btn-primary" id="btn-mastery-start" style="width: 100%; padding: 12px; font-weight: 700; font-size: 1rem; border-radius: var(--border-radius-sm); cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
        <i class="fa-solid fa-play"></i> Start Matching
      </button>

      <!-- Leaderboard Container -->
      <div id="mastery-leaderboard-container"></div>
    </div>
  `;
    const unitSelect = document.getElementById("mastery-setup-unit");
    if (unitSelect) {
      renderMasteryLeaderboard(unitSelect.value);
      unitSelect.addEventListener("change", () => {
        renderMasteryLeaderboard(unitSelect.value);
      });
    }
    document.getElementById("btn-mastery-start").addEventListener("click", () => {
      AudioEngine.play("click");
      const unitId = document.getElementById("mastery-setup-unit").value;
      const isSpeedRun = document.getElementById("mastery-setup-speedrun").checked;
      startMasteryMatch(unitId, isSpeedRun);
    });
  }
  function startMasteryMatch(unitId, isSpeedRun) {
    const container = document.getElementById("mastery-game-play-area");
    if (!container) return;
    const data = MASTERY_DATA[unitId];
    if (!data) return;
    if (masteryState.timerInterval) clearInterval(masteryState.timerInterval);
    masteryState.unitId = unitId;
    masteryState.score = 0;
    masteryState.isSpeedRun = isSpeedRun;
    masteryState.timerVal = 60;
    masteryState.matchedCount = 0;
    masteryState.selectedTermCard = null;
    masteryState.selectedDefCard = null;
    const missed = getMissedTerms();
    const allItems = [...data.items];
    allItems.sort((a, b) => {
      const aMissed = missed.includes(a.term) ? 1 : 0;
      const bMissed = missed.includes(b.term) ? 1 : 0;
      return bMissed - aMissed;
    });
    const roundItems = allItems.slice(0, 5);
    masteryState.items = roundItems;
    const shuffledTerms = [...roundItems].sort(() => Math.random() - 0.5);
    const shuffledDefs = [...roundItems].sort(() => Math.random() - 0.5);
    let timerHtml = "";
    if (isSpeedRun) {
      timerHtml = `
      <div style="margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 600; color: var(--text-muted); margin-bottom: 6px;">
          <span>Time Remaining</span>
          <span id="mastery-timer-text">60s</span>
        </div>
        <div style="height: 6px; background: rgba(255, 255, 255, 0.05); border-radius: 3px; overflow: hidden;">
          <div id="mastery-timer-fill" style="height: 100%; width: 100%; background: var(--gradient-main); transition: width 1s linear;"></div>
        </div>
      </div>
    `;
    }
    container.innerHTML = `
    <div class="causal-connector-container" style="background: var(--bg-card); padding: 24px; border: 1px solid var(--border-glass); border-radius: var(--border-radius-md); box-shadow: var(--shadow-md);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--primary); letter-spacing: 0.5px;">Mastery Match: ${data.title}</span>
        <span style="font-weight: 700; font-size: 0.95rem; color: var(--success);" id="mastery-score-display">Score: 0</span>
      </div>

      ${timerHtml}

      <div class="mastery-match-grid">
        <!-- Terms Column -->
        <div class="mastery-column">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 4px;">Terms</div>
          ${shuffledTerms.map((item) => `
            <div class="mastery-match-card" data-type="term" data-term="${item.term.replace(/"/g, "&quot;")}" id="mastery-term-${item.term.replace(/\s+/g, "-").replace(/[^\w-]/g, "")}">
              ${item.term}
            </div>
          `).join("")}
        </div>

        <!-- Definitions Column -->
        <div class="mastery-column">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 4px;">Definitions</div>
          ${shuffledDefs.map((item) => `
            <div class="mastery-match-card" data-type="def" data-def="${item.definition.replace(/"/g, "&quot;")}" id="mastery-def-${item.term.replace(/\s+/g, "-").replace(/[^\w-]/g, "")}">
              ${item.definition}
            </div>
          `).join("")}
        </div>
      </div>
    </div>
    
    <div id="mastery-defend-overlay" class="defend-overlay" style="display: none;"></div>
  `;
    container.querySelectorAll(".mastery-match-card").forEach((card) => {
      card.addEventListener("click", () => {
        handleMasteryCardClick(card);
      });
    });
    if (isSpeedRun) {
      masteryState.timerInterval = setInterval(() => {
        masteryState.timerVal--;
        const text = document.getElementById("mastery-timer-text");
        const fill = document.getElementById("mastery-timer-fill");
        if (text) text.textContent = `${masteryState.timerVal}s`;
        if (fill) fill.style.width = `${masteryState.timerVal / 60 * 100}%`;
        if (masteryState.timerVal <= 0) {
          clearInterval(masteryState.timerInterval);
          endMasteryGame(false);
        }
      }, 1e3);
    }
  }
  function handleMasteryCardClick(card) {
    if (card.classList.contains("matched")) return;
    AudioEngine.play("click");
    const type = card.getAttribute("data-type");
    if (type === "term") {
      if (masteryState.selectedTermCard) {
        masteryState.selectedTermCard.classList.remove("selected");
      }
      if (masteryState.selectedTermCard === card) {
        masteryState.selectedTermCard = null;
      } else {
        masteryState.selectedTermCard = card;
        card.classList.add("selected");
      }
    } else {
      if (masteryState.selectedDefCard) {
        masteryState.selectedDefCard.classList.remove("selected");
      }
      if (masteryState.selectedDefCard === card) {
        masteryState.selectedDefCard = null;
      } else {
        masteryState.selectedDefCard = card;
        card.classList.add("selected");
      }
    }
    if (masteryState.selectedTermCard && masteryState.selectedDefCard) {
      const selectedTerm = masteryState.selectedTermCard.getAttribute("data-term");
      const selectedDef = masteryState.selectedDefCard.getAttribute("data-def");
      const matchedItem = masteryState.items.find((item) => item.term === selectedTerm);
      if (matchedItem && matchedItem.definition === selectedDef) {
        const termCard = masteryState.selectedTermCard;
        const defCard = masteryState.selectedDefCard;
        termCard.classList.remove("selected");
        defCard.classList.remove("selected");
        termCard.classList.add("matched");
        defCard.classList.add("matched");
        masteryState.selectedTermCard = null;
        masteryState.selectedDefCard = null;
        triggerDefendTwist(matchedItem, termCard, defCard);
      } else {
        AudioEngine.play("fail");
        recordMissedTerm(selectedTerm);
        if (matchedItem) {
          recordMissedTerm(matchedItem.term);
        }
        const termCard = masteryState.selectedTermCard;
        const defCard = masteryState.selectedDefCard;
        termCard.classList.remove("selected");
        defCard.classList.remove("selected");
        [termCard, defCard].forEach((c) => {
          c.style.transform = "translateX(-6px)";
          setTimeout(() => c.style.transform = "translateX(6px)", 60);
          setTimeout(() => c.style.transform = "translateX(-4px)", 120);
          setTimeout(() => c.style.transform = "translateX(4px)", 180);
          setTimeout(() => c.style.transform = "translateX(0)", 240);
        });
        masteryState.selectedTermCard = null;
        masteryState.selectedDefCard = null;
      }
    }
  }
  function triggerDefendTwist(item, termCard, defCard) {
    const overlay = document.getElementById("mastery-defend-overlay");
    if (!overlay) return;
    const shuffledOptions = [...item.defendOptions].sort(() => Math.random() - 0.5);
    overlay.innerHTML = `
    <div class="defend-content">
      <div class="defend-header">
        <i class="fa-solid fa-shield-halved"></i> DEFEND YOUR MATCH!
      </div>
      <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">
        Match confirmed: <strong>${item.term}</strong>
      </div>
      <div class="defend-question">${item.defendQuestion}</div>
      <div class="defend-options-list">
        ${shuffledOptions.map((opt) => `
          <button class="defend-option-btn" data-value="${opt.replace(/"/g, "&quot;")}">${opt}</button>
        `).join("")}
      </div>
    </div>
  `;
    overlay.style.display = "flex";
    overlay.querySelectorAll(".defend-option-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const selectedVal = btn.getAttribute("data-value");
        const correctVal = item.defendAnswer;
        overlay.querySelectorAll(".defend-option-btn").forEach((b) => b.disabled = true);
        if (selectedVal === correctVal) {
          AudioEngine.play("success");
          btn.classList.add("correct");
          masteryState.score += 10;
          document.getElementById("mastery-score-display").textContent = `Score: ${masteryState.score}`;
          resolveMissedTerm(item.term);
          setTimeout(() => {
            overlay.style.display = "none";
            checkMasteryRoundStatus();
          }, 1e3);
        } else {
          AudioEngine.play("fail");
          btn.classList.add("incorrect");
          overlay.querySelectorAll(".defend-option-btn").forEach((b) => {
            if (b.getAttribute("data-value") === correctVal) {
              b.classList.add("correct");
            }
          });
          masteryState.score = Math.max(0, masteryState.score - 5);
          document.getElementById("mastery-score-display").textContent = `Score: ${masteryState.score}`;
          recordMissedTerm(item.term);
          setTimeout(() => {
            overlay.style.display = "none";
            checkMasteryRoundStatus();
          }, 1800);
        }
      });
    });
  }
  function checkMasteryRoundStatus() {
    masteryState.matchedCount++;
    if (masteryState.matchedCount === 5) {
      if (masteryState.timerInterval) clearInterval(masteryState.timerInterval);
      endMasteryGame(true);
    }
  }
  function endMasteryGame(success) {
    const container = document.getElementById("mastery-game-play-area");
    if (!container) return;
    if (success) {
      AudioEngine.play("cheer");
      Confetti.spawn(100);
    } else {
      AudioEngine.play("fail");
    }
    let grade = "Novice";
    let gradeColor = "var(--text-muted)";
    if (masteryState.score >= 40) {
      grade = "Historical Master";
      gradeColor = "var(--success)";
    } else if (masteryState.score >= 25) {
      grade = "Scholar";
      gradeColor = "var(--primary)";
    }
    container.innerHTML = `
    <div class="causal-connector-container" style="background: var(--bg-card); padding: 32px; border: 1px solid var(--border-glass); border-radius: var(--border-radius-md); box-shadow: var(--shadow-md); text-align: center;">
      <div class="results-grade-circle" style="width: 80px; height: 80px; font-size: 2.2rem; margin: 0 auto 20px; background: ${success ? "var(--success-glow)" : "var(--accent-glow)"}; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 2px solid ${success ? "var(--success)" : "var(--accent)"};">
        <i class="${success ? "fa-solid fa-trophy" : "fa-solid fa-hourglass-end"}" style="color: ${success ? "var(--success)" : "var(--accent)"};"></i>
      </div>

      <h3 style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">
        ${success ? "Mastery Match Completed!" : "Speed Run Timed Out!"}
      </h3>
      <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; margin: 0 0 24px 0;">
        ${success ? "Excellent job! You successfully matched all specification terms and defended your pairings." : "Time ran out before you could match and defend all active key terms."}
      </p>

      <div style="display: grid; grid-template-columns: 1fr; gap: 16px; margin: 0 auto 24px; max-width: 180px;">
        <div style="background: rgba(0,0,0,0.15); padding: 12px; border: 1px solid var(--border-glass); border-radius: var(--border-radius-sm);">
          <span style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 4px;">Rank</span>
          <span style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 800; color: ${gradeColor}; line-height: 1.5;">${grade}</span>
        </div>
      </div>

      <div id="mastery-highscore-input-box" style="margin-bottom: 24px; padding: 16px; background: rgba(0,0,0,0.15); border: 1px solid var(--border-glass); border-radius: var(--border-radius-sm); max-width: 380px; margin-left: auto; margin-right: auto; text-align: center;">
        <label style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 12px;">Save your score to the topic leaderboard!</label>
        <div style="display: flex; gap: 8px; justify-content: center; align-items: center; flex-wrap: wrap;">
          <input type="text" id="mastery-highscore-initials" placeholder="AAA" maxlength="3" style="padding: 8px; font-size: 0.85rem; border: 1px solid var(--border-glass); border-radius: 4px; background: rgba(0,0,0,0.3); color: var(--text-main); width: 68px; text-align: center; text-transform: uppercase; outline: none;" required>
          
          <select id="mastery-highscore-year" style="padding: 8px; font-size: 0.85rem; border: 1px solid var(--border-glass); border-radius: 4px; background: rgba(0,0,0,0.3); color: var(--text-main); outline: none; cursor: pointer;" required>
            <option value="" disabled selected>Year</option>
            <option value="Year 7">Year 7</option>
            <option value="Year 8">Year 8</option>
            <option value="Year 9">Year 9</option>
            <option value="Year 10">Year 10</option>
            <option value="Year 11">Year 11</option>
          </select>
          
          <button class="btn-primary" id="btn-submit-highscore" style="padding: 8px 16px; font-size: 0.85rem; border-radius: 4px;">Submit</button>
        </div>
      </div>
      
      <div id="mastery-results-leaderboard" style="max-width: 360px; margin: 0 auto 24px;"></div>

      <div style="display: flex; gap: 12px; justify-content: center;">
        <button class="btn-secondary" id="btn-mastery-return" style="padding: 10px 20px; font-weight: 600; font-size: 0.9rem; border-radius: 4px; cursor: pointer;">
          <i class="fa-solid fa-rotate-left"></i> Setup Screen
        </button>
        <button class="btn-primary" id="btn-mastery-play-again" style="padding: 10px 20px; font-weight: 600; font-size: 0.9rem; border-radius: 4px; cursor: pointer;">
          <i class="fa-solid fa-rotate-right"></i> Play Again (Same Topic)
        </button>
      </div>
    </div>
  `;
    renderResultsLeaderboard(masteryState.unitId);
    const submitBtn = document.getElementById("btn-submit-highscore");
    if (submitBtn) {
      submitBtn.addEventListener("click", () => {
        const initialsInput = document.getElementById("mastery-highscore-initials");
        const yearInput = document.getElementById("mastery-highscore-year");
        let initials = initialsInput ? initialsInput.value.trim().toUpperCase() : "";
        let yearGroup = yearInput ? yearInput.value : "";
        if (initials.length !== 3 || !/^[A-Z]{3}$/.test(initials)) {
          alert("Please enter exactly 3 letters for your initials (e.g. ABC).");
          return;
        }
        if (!yearGroup) {
          alert("Please select your Year Group.");
          return;
        }
        const name = initials;
        saveHighScoreLocal(masteryState.unitId, name, yearGroup, masteryState.score);
        AudioEngine.play("success");
        if (GOOGLE_SHEET_WEBAPP_URL) {
          const payload = {
            type: "mastery",
            unitId: masteryState.unitId,
            name,
            yearGroup,
            score: masteryState.score,
            date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
          };
          fetch(GOOGLE_SHEET_WEBAPP_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          }).catch((err) => console.error("Error saving remote mastery score:", err));
        }
        const inputBox = document.getElementById("mastery-highscore-input-box");
        if (inputBox) inputBox.style.display = "none";
        renderResultsLeaderboard(masteryState.unitId);
        renderMasteryLeaderboard(masteryState.unitId);
      });
    }
    document.getElementById("btn-mastery-return").addEventListener("click", () => {
      AudioEngine.play("click");
      initMasteryMatchGame();
    });
    document.getElementById("btn-mastery-play-again").addEventListener("click", () => {
      AudioEngine.play("click");
      startMasteryMatch(masteryState.unitId, masteryState.isSpeedRun);
    });
  }
  function initMindMapGame() {
    const container = document.getElementById("mindmap-game-play-area");
    if (!container) return;
    let optionsHtml = "";
    Object.keys(MINDMAP_DATA).forEach((subtopicId) => {
      const match = subtopicId.match(/subtopic_(\d)_(\d)/);
      let friendlyName = MINDMAP_DATA[subtopicId].title;
      if (friendlyName.length > 55) {
        friendlyName = friendlyName.slice(0, 52) + "...";
      }
      if (match) {
        friendlyName = `Topic ${match[1]}.${match[2]}: ${friendlyName}`;
      }
      optionsHtml += `<option value="${subtopicId}">${friendlyName}</option>`;
    });
    container.innerHTML = `
    <div class="causal-connector-container" style="background: var(--bg-card); padding: 24px; border: 1px solid var(--border-glass); border-radius: var(--border-radius-md); box-shadow: var(--shadow-md);">
      <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-top: 0; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
        <i class="fa-solid fa-network-wired" style="color: var(--primary);"></i> Concept Connector
      </h3>
      <p style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.5; margin: 0 0 20px 0;">
        Reassemble the historical cause-and-effect flowcharts in chronological sequence. Tap options from the bottom card shelf to assign them into place!
      </p>

      <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px;">
        <div class="form-group" style="display: flex; flex-direction: column; gap: 6px;">
          <label style="font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--text-muted);">Select Flowchart Topic</label>
          <select class="select-input" id="mindmap-setup-topic" style="width: 100%; padding: 12px 16px; background: rgba(0, 0, 0, 0.2); border: 1px solid var(--border-glass); border-radius: var(--border-radius-sm); color: var(--text-main); font-size: 0.95rem; outline: none; cursor: pointer;">
            ${optionsHtml}
          </select>
        </div>

        <div style="display: flex; align-items: center; gap: 10px; padding: 10px 0;">
          <input type="checkbox" id="mindmap-setup-speedrun" checked style="width: 18px; height: 18px; cursor: pointer; accent-color: var(--primary);">
          <label for="mindmap-setup-speedrun" style="font-size: 0.88rem; font-weight: 500; cursor: pointer; color: var(--text-main);">
            Enable Speed Run Mode (60-second Timer)
          </label>
        </div>
      </div>

      <button class="btn-primary" id="btn-mindmap-start" style="width: 100%; padding: 12px; font-weight: 700; font-size: 1rem; border-radius: var(--border-radius-sm); cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
        <i class="fa-solid fa-play"></i> Start Linking
      </button>

      <!-- Leaderboard Container -->
      <div id="mindmap-leaderboard-container"></div>
    </div>
  `;
    const topicSelect = document.getElementById("mindmap-setup-topic");
    if (topicSelect) {
      renderMindMapLeaderboard(topicSelect.value);
      topicSelect.addEventListener("change", () => {
        renderMindMapLeaderboard(topicSelect.value);
      });
    }
    document.getElementById("btn-mindmap-start").addEventListener("click", () => {
      AudioEngine.play("click");
      const subtopicId = document.getElementById("mindmap-setup-topic").value;
      const isSpeedRun = document.getElementById("mindmap-setup-speedrun").checked;
      startMindMapGame(subtopicId, isSpeedRun);
    });
  }
  function startMindMapGame(subtopicId, isSpeedRun) {
    const container = document.getElementById("mindmap-game-play-area");
    if (!container) return;
    const data = MINDMAP_DATA[subtopicId];
    if (!data) return;
    if (mindmapState.timerInterval) clearInterval(mindmapState.timerInterval);
    mindmapState.subtopicId = subtopicId;
    mindmapState.score = 0;
    mindmapState.isSpeedRun = isSpeedRun;
    mindmapState.timerVal = 60;
    mindmapState.placedCount = 0;
    mindmapState.nodes = [...data.nodes];
    mindmapState.shuffledNodes = [...data.nodes].sort(() => Math.random() - 0.5);
    let timerHtml = "";
    if (isSpeedRun) {
      timerHtml = `
      <div style="margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 600; color: var(--text-muted); margin-bottom: 6px;">
          <span>Time Remaining</span>
          <span id="mindmap-timer-text">60s</span>
        </div>
        <div style="height: 6px; background: rgba(255, 255, 255, 0.05); border-radius: 3px; overflow: hidden;">
          <div id="mindmap-timer-fill" style="height: 100%; width: 100%; background: var(--gradient-main); transition: width 1s linear;"></div>
        </div>
      </div>
    `;
    }
    let slotsHtml = "";
    mindmapState.nodes.forEach((nodeText, idx) => {
      if (idx > 0) {
        slotsHtml += `
        <div class="mindmap-arrow" id="mindmap-arrow-${idx}" style="opacity: 0.15; transition: opacity 0.3s ease;">
          <i class="fa-solid fa-arrow-right horizontal-arrow"></i>
          <i class="fa-solid fa-arrow-down vertical-arrow"></i>
        </div>
      `;
      }
      slotsHtml += `
      <div class="mindmap-slot ${idx === 0 ? "active-target" : ""}" id="mindmap-slot-${idx}" data-index="${idx}">
        <span style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Step ${idx + 1}</span>
      </div>
    `;
    });
    let optionsHtml = mindmapState.shuffledNodes.map((nodeText, idx) => {
      const safeId = `mindmap-opt-${idx}`;
      return `
      <div class="mindmap-option-card" id="${safeId}" data-text="${nodeText.replace(/"/g, "&quot;")}">
        ${nodeText}
      </div>
    `;
    }).join("");
    container.innerHTML = `
    <div class="causal-connector-container" style="background: var(--bg-card); padding: 24px; border: 1px solid var(--border-glass); border-radius: var(--border-radius-md); box-shadow: var(--shadow-md);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--primary); letter-spacing: 0.5px;">Concept Connector: ${data.title}</span>
        <span style="font-weight: 700; font-size: 0.95rem; color: var(--success);" id="mindmap-score-display">Score: 0</span>
      </div>

      ${timerHtml}

      <!-- Flowchart slots panel (Top viewport) -->
      <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">Flowchart Chain</div>
      <div class="mindmap-slots-container">
        ${slotsHtml}
      </div>

      <!-- Shuffled option cards shelf (Bottom viewport, lower third for thumb ergonomics) -->
      <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">Card Options Shelf (Tap correct event in sequence)</div>
      <div class="mindmap-options-container">
        ${optionsHtml}
      </div>
    </div>
  `;
    if (isSpeedRun) {
      mindmapState.timerInterval = setInterval(() => {
        mindmapState.timerVal--;
        const text = document.getElementById("mindmap-timer-text");
        const fill = document.getElementById("mindmap-timer-fill");
        if (text) text.textContent = `${mindmapState.timerVal}s`;
        if (fill) fill.style.width = `${mindmapState.timerVal / 60 * 100}%`;
        if (mindmapState.timerVal <= 0) {
          clearInterval(mindmapState.timerInterval);
          endMindMapGame(false);
        }
      }, 1e3);
    }
    container.querySelectorAll(".mindmap-option-card").forEach((card) => {
      card.addEventListener("click", () => {
        handleMindMapCardClick(card);
      });
    });
  }
  function handleMindMapCardClick(card) {
    if (card.classList.contains("correct-placed") || card.classList.contains("incorrect")) return;
    const text = card.getAttribute("data-text");
    const nextExpectedIndex = mindmapState.placedCount;
    const expectedText = mindmapState.nodes[nextExpectedIndex];
    if (text === expectedText) {
      AudioEngine.play("success");
      mindmapState.score += 10;
      const scoreDisplay = document.getElementById("mindmap-score-display");
      if (scoreDisplay) scoreDisplay.textContent = `Score: ${mindmapState.score}`;
      card.classList.add("correct-placed");
      const slot = document.getElementById(`mindmap-slot-${nextExpectedIndex}`);
      if (slot) {
        slot.classList.remove("active-target");
        slot.classList.add("filled");
        slot.innerHTML = `
        <div style="font-family: var(--font-heading); font-weight: 700; color: var(--primary); margin-bottom: 4px; font-size: 0.72rem;">STEP ${nextExpectedIndex + 1}</div>
        <div style="font-size: 0.82rem; line-height: 1.3;">${text}</div>
      `;
      }
      if (nextExpectedIndex > 0) {
        const arrow = document.getElementById(`mindmap-arrow-${nextExpectedIndex}`);
        if (arrow) arrow.style.opacity = "1";
      }
      mindmapState.placedCount++;
      if (mindmapState.placedCount < mindmapState.nodes.length) {
        const nextSlot = document.getElementById(`mindmap-slot-${mindmapState.placedCount}`);
        if (nextSlot) nextSlot.classList.add("active-target");
      } else {
        if (mindmapState.timerInterval) clearInterval(mindmapState.timerInterval);
        setTimeout(() => endMindMapGame(true), 600);
      }
    } else {
      AudioEngine.play("fail");
      mindmapState.score = Math.max(0, mindmapState.score - 5);
      const scoreDisplay = document.getElementById("mindmap-score-display");
      if (scoreDisplay) scoreDisplay.textContent = `Score: ${mindmapState.score}`;
      card.classList.add("incorrect");
      setTimeout(() => {
        card.classList.remove("incorrect");
      }, 450);
    }
  }
  function endMindMapGame(success) {
    const container = document.getElementById("mindmap-game-play-area");
    if (!container) return;
    if (success) {
      AudioEngine.play("cheer");
      Confetti.spawn(100);
    } else {
      AudioEngine.play("fail");
    }
    let grade = "Novice";
    let gradeColor = "var(--text-muted)";
    if (mindmapState.score >= 40) {
      grade = "Historical Master";
      gradeColor = "var(--success)";
    } else if (mindmapState.score >= 25) {
      grade = "Scholar";
      gradeColor = "var(--primary)";
    }
    container.innerHTML = `
    <div class="causal-connector-container" style="background: var(--bg-card); padding: 32px; border: 1px solid var(--border-glass); border-radius: var(--border-radius-md); box-shadow: var(--shadow-md); text-align: center;">
      <div class="results-grade-circle" style="width: 80px; height: 80px; font-size: 2.2rem; margin: 0 auto 20px; background: ${success ? "var(--success-glow)" : "var(--accent-glow)"}; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 2px solid ${success ? "var(--success)" : "var(--accent)"};">
        <i class="${success ? "fa-solid fa-trophy" : "fa-solid fa-hourglass-end"}" style="color: ${success ? "var(--success)" : "var(--accent)"};"></i>
      </div>

      <h3 style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">
        ${success ? "Flowchart Sequenced Successfully!" : "Speed Run Timed Out!"}
      </h3>
      <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; margin: 0 0 24px 0;">
        ${success ? "Outstanding! You correctly connected the cause-and-effect mind map nodes in historical order." : "Time ran out before you could sequence the flowchart. Keep reviewing your key topics!"}
      </p>

      <div style="display: grid; grid-template-columns: 1fr; gap: 16px; margin: 0 auto 24px; max-width: 180px;">
        <div style="background: rgba(0,0,0,0.15); padding: 12px; border: 1px solid var(--border-glass); border-radius: var(--border-radius-sm);">
          <span style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 4px;">Rank</span>
          <span style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 800; color: ${gradeColor}; line-height: 1.5;">${grade}</span>
        </div>
      </div>


      <!-- High Score Input Box -->
      <div id="mindmap-highscore-input-box" style="margin-bottom: 24px; padding: 16px; background: rgba(0,0,0,0.15); border: 1px solid var(--border-glass); border-radius: var(--border-radius-sm); max-width: 380px; margin-left: auto; margin-right: auto; text-align: center;">
        <label style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 12px;">Save your score to the topic leaderboard!</label>
        <div style="display: flex; gap: 8px; justify-content: center; align-items: center; flex-wrap: wrap;">
          <input type="text" id="mindmap-highscore-initials" placeholder="AAA" maxlength="3" style="padding: 8px; font-size: 0.85rem; border: 1px solid var(--border-glass); border-radius: 4px; background: rgba(0,0,0,0.3); color: var(--text-main); width: 68px; text-align: center; text-transform: uppercase; outline: none;" required>
          
          <select id="mindmap-highscore-year" style="padding: 8px; font-size: 0.85rem; border: 1px solid var(--border-glass); border-radius: 4px; background: rgba(0,0,0,0.3); color: var(--text-main); outline: none; cursor: pointer;" required>
            <option value="" disabled selected>Year</option>
            <option value="Year 7">Year 7</option>
            <option value="Year 8">Year 8</option>
            <option value="Year 9">Year 9</option>
            <option value="Year 10">Year 10</option>
            <option value="Year 11">Year 11</option>
          </select>
          
          <button class="btn-primary" id="btn-submit-mindmap-highscore" style="padding: 8px 16px; font-size: 0.85rem; border-radius: 4px;">Submit</button>
        </div>
      </div>
      
      <!-- Results Leaderboard Rankings -->
      <div id="mindmap-results-leaderboard" style="max-width: 360px; margin: 0 auto 24px;"></div>

      <div style="display: flex; gap: 12px; justify-content: center;">
        <button class="btn-secondary" id="btn-mindmap-return" style="padding: 10px 20px; font-weight: 600; font-size: 0.9rem; border-radius: 4px; cursor: pointer;">
          <i class="fa-solid fa-rotate-left"></i> Setup Screen
        </button>
        <button class="btn-primary" id="btn-mindmap-play-again" style="padding: 10px 20px; font-weight: 600; font-size: 0.9rem; border-radius: 4px; cursor: pointer;">
          <i class="fa-solid fa-rotate-right"></i> Play Again (Same Topic)
        </button>
      </div>
    </div>
  `;
    renderMindMapResultsLeaderboard(mindmapState.subtopicId);
    const submitBtn = document.getElementById("btn-submit-mindmap-highscore");
    if (submitBtn) {
      submitBtn.addEventListener("click", () => {
        const initialsInput = document.getElementById("mindmap-highscore-initials");
        const yearInput = document.getElementById("mindmap-highscore-year");
        let initials = initialsInput ? initialsInput.value.trim().toUpperCase() : "";
        let yearGroup = yearInput ? yearInput.value : "";
        if (initials.length !== 3 || !/^[A-Z]{3}$/.test(initials)) {
          alert("Please enter exactly 3 letters for your initials (e.g. ABC).");
          return;
        }
        if (!yearGroup) {
          alert("Please select your Year Group.");
          return;
        }
        const name = initials;
        saveMindMapHighScoreLocal(mindmapState.subtopicId, name, yearGroup, mindmapState.score);
        AudioEngine.play("success");
        if (GOOGLE_SHEET_WEBAPP_URL) {
          const payload = {
            type: "mindmap",
            subtopicId: mindmapState.subtopicId,
            name,
            yearGroup,
            score: mindmapState.score,
            date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
          };
          fetch(GOOGLE_SHEET_WEBAPP_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          }).catch((err) => console.error("Error saving remote mindmap score:", err));
        }
        const inputBox = document.getElementById("mindmap-highscore-input-box");
        if (inputBox) inputBox.style.display = "none";
        renderMindMapResultsLeaderboard(mindmapState.subtopicId);
      });
    }
    document.getElementById("btn-mindmap-return").addEventListener("click", () => {
      AudioEngine.play("click");
      initMindMapGame();
    });
    document.getElementById("btn-mindmap-play-again").addEventListener("click", () => {
      AudioEngine.play("click");
      startMindMapGame(mindmapState.subtopicId, mindmapState.isSpeedRun);
    });
  }
  function initDecisionsGame() {
    const container = document.getElementById("decisions-game-play-area");
    if (!container) return;
    const hotlineGames = DECISIONS_DATA.filter((g) => g.series === "Diplomatic Hotline");
    const makeCard = (g) => `
    <div class="decision-card" id="dec-card-${g.id}">
      <div class="decision-card-header">
        <span class="decision-card-topic">${g.topic}</span>
        <i class="${g.icon}" style="font-size: 1.1rem; color: var(--primary);"></i>
      </div>
      <h4 class="decision-card-title">${g.title}</h4>
      <div class="decision-card-role"><strong>Role:</strong> ${g.role}</div>
      <p style="font-size: 0.8rem; line-height: 1.4; color: var(--text-muted); margin: 6px 0 0 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">
        ${g.crisis}
      </p>
    </div>
  `;
    container.innerHTML = `
    <div class="causal-connector-container" style="background: var(--bg-card); padding: 24px; border: 1px solid var(--border-glass); border-radius: var(--border-radius-md); box-shadow: var(--shadow-md); margin-bottom: 24px;">
      <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-main); margin-top: 0; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
        <i class="fa-solid fa-phone-volume" style="color: var(--primary);"></i> Decision Simulator
      </h3>
      <p style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.5; margin: 0 0 20px 0;">
        Put yourself in the shoes of historical figures. Face critical crises and decide which path to take!
      </p>
      
      <h4 style="font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: var(--accent); margin: 20px 0 10px 0;">
        \u{1F4DE} The 'Diplomatic Hotline' Series
      </h4>
      <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0 0 12px 0;">Oval Office and Cabinet decisions during major Middle East turning points.</p>
      <div class="decisions-grid">
        ${hotlineGames.map(makeCard).join("")}
      </div>
    </div>
  `;
    DECISIONS_DATA.forEach((g) => {
      const card = document.getElementById(`dec-card-${g.id}`);
      if (card) {
        card.addEventListener("click", () => {
          AudioEngine.play("click");
          playDecisionsScenario(g.id);
        });
      }
    });
  }
  function playDecisionsScenario(gameId) {
    const container = document.getElementById("decisions-game-play-area");
    if (!container) return;
    const g = DECISIONS_DATA.find((x) => x.id === gameId);
    if (!g) return;
    container.innerHTML = `
    <div class="decision-play-pane">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-glass); padding-bottom: 12px;">
        <span style="font-size: 0.72rem; text-transform: uppercase; font-weight: 700; color: var(--primary); letter-spacing: 0.5px;">Phase 1: Initial Response</span>
        <button class="btn-secondary" id="btn-dec-back" style="padding: 6px 12px; font-size: 0.75rem; border-radius: 4px;">
          <i class="fa-solid fa-arrow-left"></i> Scenario Menu
        </button>
      </div>

      <h2 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--text-main); margin: 10px 0 0 0;">
        ${g.title}
      </h2>
      
      <div class="decision-role-banner">
        <strong>Active Role:</strong> ${g.role}
      </div>

      <div class="decision-crisis-box">
        <h4 style="font-family: var(--font-heading); font-size: 1rem; font-weight: 700; color: var(--accent); margin-top: 0; margin-bottom: 8px;">
          \u{1F6A8} THE CRISIS:
        </h4>
        ${g.crisis}
      </div>

      <div style="margin-top: 10px;">
        <h4 style="font-family: var(--font-heading); font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 12px;">
          Select Your Response:
        </h4>
        <div class="decision-options-container">
          <button class="btn-decision" id="btn-dec-choice-a">
            <span class="btn-decision-label">Choice A</span>
            <span>${g.phase1.choiceA.text}</span>
          </button>
          <button class="btn-decision" id="btn-dec-choice-b">
            <span class="btn-decision-label">Choice B</span>
            <span>${g.phase1.choiceB.text}</span>
          </button>
        </div>
      </div>
    </div>
  `;
    document.getElementById("btn-dec-back").addEventListener("click", () => {
      AudioEngine.play("click");
      initDecisionsGame();
    });
    document.getElementById("btn-dec-choice-a").addEventListener("click", () => {
      AudioEngine.play("click");
      playDecisionsPhase2(gameId, "A");
    });
    document.getElementById("btn-dec-choice-b").addEventListener("click", () => {
      AudioEngine.play("click");
      playDecisionsPhase2(gameId, "B");
    });
  }
  function playDecisionsPhase2(gameId, choiceLetter) {
    const container = document.getElementById("decisions-game-play-area");
    if (!container) return;
    const g = DECISIONS_DATA.find((x) => x.id === gameId);
    if (!g) return;
    const selectedChoice = choiceLetter === "A" ? g.phase1.choiceA : g.phase1.choiceB;
    container.innerHTML = `
    <div class="decision-play-pane">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-glass); padding-bottom: 12px;">
        <span style="font-size: 0.72rem; text-transform: uppercase; font-weight: 700; color: var(--primary); letter-spacing: 0.5px;">Phase 2: The Fallout</span>
        <button class="btn-secondary" id="btn-dec-back" style="padding: 6px 12px; font-size: 0.75rem; border-radius: 4px;">
          <i class="fa-solid fa-arrow-left"></i> Scenario Menu
        </button>
      </div>

      <h2 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--text-main); margin: 10px 0 0 0;">
        ${g.title}
      </h2>
      
      <div class="decision-role-banner">
        <strong>Active Role:</strong> ${g.role}
      </div>

      <div style="background: rgba(0,0,0,0.12); border: 1px solid var(--border-glass); padding: 12px; border-radius: var(--border-radius-sm); font-size: 0.88rem; color: var(--text-muted); line-height: 1.45;">
        <strong>Your Choice:</strong> ${selectedChoice.text}
      </div>

      <div class="decision-crisis-box" style="border-left-color: var(--secondary);">
        <h4 style="font-family: var(--font-heading); font-size: 1rem; font-weight: 700; color: var(--secondary); margin-top: 0; margin-bottom: 8px;">
          \u{1F32A}\uFE0F THE FALLOUT:
        </h4>
        ${selectedChoice.fallout}
      </div>

      <div style="margin-top: 10px;">
        <h4 style="font-family: var(--font-heading); font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 12px;">
          Select Your Next Step:
        </h4>
        <div class="decision-options-container">
          <button class="btn-decision" id="btn-dec-subchoice-1">
            <span class="btn-decision-label">Choice ${choiceLetter}1</span>
            <span>${selectedChoice.choice1.text}</span>
          </button>
          <button class="btn-decision" id="btn-dec-subchoice-2">
            <span class="btn-decision-label">Choice ${choiceLetter}2</span>
            <span>${selectedChoice.choice2.text}</span>
          </button>
        </div>
      </div>
    </div>
  `;
    document.getElementById("btn-dec-back").addEventListener("click", () => {
      AudioEngine.play("click");
      initDecisionsGame();
    });
    document.getElementById("btn-dec-subchoice-1").addEventListener("click", () => {
      playDecisionsPhase3(gameId, choiceLetter, "1");
    });
    document.getElementById("btn-dec-subchoice-2").addEventListener("click", () => {
      playDecisionsPhase3(gameId, choiceLetter, "2");
    });
  }
  function playDecisionsPhase3(gameId, choiceLetter, subChoice) {
    const container = document.getElementById("decisions-game-play-area");
    if (!container) return;
    const g = DECISIONS_DATA.find((x) => x.id === gameId);
    if (!g) return;
    const selectedChoice = choiceLetter === "A" ? g.phase1.choiceA : g.phase1.choiceB;
    const finalChoice = subChoice === "1" ? selectedChoice.choice1 : selectedChoice.choice2;
    if (finalChoice.isHistorical) {
      AudioEngine.play("success");
      Confetti.spawn(60);
    } else {
      AudioEngine.play("fail");
    }
    const bgCol = finalChoice.isHistorical ? "rgba(16, 185, 129, 0.05)" : "rgba(244, 63, 94, 0.05)";
    const borderCol = finalChoice.isHistorical ? "rgba(16, 185, 129, 0.3)" : "rgba(244, 63, 94, 0.3)";
    const pillCol = finalChoice.isHistorical ? "var(--success)" : "var(--accent)";
    const pillText = finalChoice.isHistorical ? "\u2705 ACTUAL HISTORY" : "\u274C ALTERNATE HISTORY";
    container.innerHTML = `
    <div class="decision-play-pane" style="background: ${bgCol}; border-color: ${borderCol};">
      <div style="border-bottom: 1px solid var(--border-glass); padding-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
        <span class="decision-outcome-pill" style="background: ${pillCol}; color: #fff; margin: 0; font-weight: 800; font-size: 0.75rem; letter-spacing: 0.5px; border-radius: 4px; padding: 4px 8px;">
          ${pillText}
        </span>
        <span style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">Role: ${g.role}</span>
      </div>

      <h2 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--text-main); margin-top: 10px; margin-bottom: 6px;">
        ${g.title}
      </h2>

      <div style="background: rgba(0,0,0,0.12); border: 1px solid var(--border-glass); padding: 14px; border-radius: var(--border-radius-sm); font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; display: flex; flex-direction: column; gap: 8px;">
        <div><strong>Phase 1 Decision:</strong> ${selectedChoice.text}</div>
        <div style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 8px;"><strong>Phase 2 Response:</strong> ${finalChoice.text}</div>
      </div>

      <div class="decision-consequence-card" style="border: 1px solid ${borderCol}; background: rgba(0,0,0,0.18); margin: 0; padding: 20px;">
        <h4 style="font-family: var(--font-heading); font-size: 1.05rem; font-weight: 700; color: ${finalChoice.isHistorical ? "var(--success)" : "var(--accent)"}; margin-top: 0; margin-bottom: 8px;">
          <i class="${finalChoice.isHistorical ? "fa-solid fa-circle-check" : "fa-solid fa-code-fork"}"></i> The Final Verdict:
        </h4>
        <p style="font-size: 0.98rem; line-height: 1.6; color: var(--text-main); margin: 0;">
          ${finalChoice.verdict}
        </p>
      </div>

      <div style="display: flex; gap: 12px; justify-content: center; border-top: 1px solid var(--border-glass); padding-top: 18px;">
        <button class="btn-secondary" id="btn-dec-menu" style="padding: 10px 20px; font-weight: 600; font-size: 0.9rem; border-radius: 4px; cursor: pointer;">
          <i class="fa-solid fa-rotate-left"></i> Scenario Menu
        </button>
        <button class="btn-primary" id="btn-dec-retry" style="padding: 10px 20px; font-weight: 600; font-size: 0.9rem; border-radius: 4px; cursor: pointer;">
          <i class="fa-solid fa-rotate-right"></i> Try Alternative Path
        </button>
      </div>
    </div>
  `;
    document.getElementById("btn-dec-menu").addEventListener("click", () => {
      AudioEngine.play("click");
      initDecisionsGame();
    });
    document.getElementById("btn-dec-retry").addEventListener("click", () => {
      AudioEngine.play("click");
      playDecisionsScenario(gameId);
    });
  }
  function renderGamesView() {
    const causalSelect = document.getElementById("causal-game-topic-select");
    if (!causalSelect) return;
    if (causalSelect.children.length <= 1) {
      let optionsHtml = '<option value="" disabled selected>-- Select a Topic --</option>';
      import_questions.QUIZ_DATA.forEach((topic) => {
        topic.subtopics.forEach((sub) => {
          if (LESSONS_DATA[sub.id] && LESSONS_DATA[sub.id].causalLinks) {
            const numCode = sub.title.match(/Topic\s(\d\.\d)/);
            const name = numCode ? `Topic ${numCode[1]}: ${sub.title.replace(/^Topic \d\.\d:\s*/, "")}` : sub.title;
            optionsHtml += `<option value="${sub.id}">${name}</option>`;
          }
        });
      });
      causalSelect.innerHTML = optionsHtml;
      causalSelect.addEventListener("change", (e) => {
        AudioEngine.play("click");
        playCausalGame(e.target.value);
      });
    }
    const chronoSelect = document.getElementById("chrono-game-topic-select");
    if (chronoSelect && chronoSelect.children.length <= 1) {
      let optionsHtml = '<option value="" disabled selected>-- Select a Topic --</option>';
      import_questions.QUIZ_DATA.forEach((topic) => {
        const cleanTitle = topic.title.replace(/^Key Topic \d:\s*/, "");
        optionsHtml += `<optgroup label="Key Topic ${topic.id.replace("topic_", "")}: ${cleanTitle}">`;
        optionsHtml += `<option value="${topic.id}">Full Key Topic ${topic.id.replace("topic_", "")}</option>`;
        topic.subtopics.forEach((sub) => {
          const cleanSubTitle = sub.title.replace(/^Topic \d\.\d:\s*/, "");
          optionsHtml += `<option value="${sub.id}">${cleanSubTitle}</option>`;
        });
        optionsHtml += `</optgroup>`;
      });
      chronoSelect.innerHTML = optionsHtml;
      const firstOption = chronoSelect.querySelector('option[value^="topic_"]');
      if (firstOption) {
        firstOption.selected = true;
      }
      chronoSelect.addEventListener("change", () => {
        AudioEngine.play("click");
        initChronologyGame();
      });
    }
    const tabs = {
      causal: document.getElementById("btn-tab-game-causal"),
      chronology: document.getElementById("btn-tab-game-chronology"),
      mastery: document.getElementById("btn-tab-game-mastery"),
      mindmap: document.getElementById("btn-tab-game-mindmap"),
      decisions: document.getElementById("btn-tab-game-decisions"),
      crisis: document.getElementById("btn-tab-game-crisis"),
      tug: document.getElementById("btn-tab-game-tug"),
      jsw: document.getElementById("btn-tab-game-jsw")
    };
    const panes = {
      causal: document.getElementById("game-causal-container"),
      chronology: document.getElementById("game-chronology-container"),
      mastery: document.getElementById("game-mastery-container"),
      mindmap: document.getElementById("game-mindmap-container"),
      decisions: document.getElementById("game-decisions-container"),
      crisis: document.getElementById("game-crisis-container"),
      tug: document.getElementById("game-tug-container"),
      jsw: document.getElementById("game-jsw-container")
    };
    const cleanUpGames = () => {
      stopJswLoop();
      if (state.tugGameSession && state.tugGameSession.timeoutId) {
        clearTimeout(state.tugGameSession.timeoutId);
        state.tugGameSession.timeoutId = null;
      }
      if (masteryState.timerInterval) {
        clearInterval(masteryState.timerInterval);
        masteryState.timerInterval = null;
      }
      if (mindmapState.timerInterval) {
        clearInterval(mindmapState.timerInterval);
        mindmapState.timerInterval = null;
      }
    };
    const showTab = (tabName) => {
      cleanUpGames();
      Object.keys(tabs).forEach((name) => {
        const t = tabs[name];
        if (!t) return;
        if (name === tabName) {
          t.classList.add("active");
          t.style.borderColor = "var(--primary)";
          t.style.color = "var(--primary)";
          t.style.background = "rgba(59, 130, 246, 0.1)";
        } else {
          t.classList.remove("active");
          t.style.borderColor = "var(--border-glass)";
          t.style.color = "var(--text-muted)";
          t.style.background = "rgba(255, 255, 255, 0.03)";
        }
      });
      Object.keys(panes).forEach((name) => {
        const p = panes[name];
        if (p) {
          p.style.display = name === tabName ? "block" : "none";
        }
      });
      if (tabName === "causal") {
        const val = causalSelect.value;
        if (val) playCausalGame(val);
      } else if (tabName === "chronology") {
        initChronologyGame();
      } else if (tabName === "mastery") {
        initMasteryMatchGame();
      } else if (tabName === "mindmap") {
        initMindMapGame();
      } else if (tabName === "decisions") {
        initDecisionsGame();
      } else if (tabName === "crisis") {
        initCrisisGame();
      } else if (tabName === "tug") {
        initTugGame();
      } else if (tabName === "jsw") {
        initJswGame();
      }
    };
    Object.keys(tabs).forEach((name) => {
      const t = tabs[name];
      if (t) {
        t.addEventListener("click", (e) => {
          e.preventDefault();
          AudioEngine.play("click");
          showTab(name);
        });
      }
    });
    const activeTab = Object.keys(tabs).find((name) => tabs[name] && tabs[name].classList.contains("active"));
    showTab(activeTab || "causal");
  }
  function getExamHighScores(scope) {
    const key = `exam_highscores_${scope}`;
    let scores = localStorage.getItem(key);
    if (!scores) return [];
    try {
      return JSON.parse(scores);
    } catch (e) {
      return [];
    }
  }
  function saveExamHighScoreLocal(scope, name, yearGroup, score) {
    const scores = getExamHighScores(scope);
    scores.push({
      name,
      yearGroup,
      score,
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    });
    scores.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
    localStorage.setItem(`exam_highscores_${scope}`, JSON.stringify(scores.slice(0, 5)));
  }
  function renderExamResultsLeaderboard(scope) {
    const container = document.getElementById("exam-results-leaderboard");
    if (!container) return;
    const localScores = getExamHighScores(scope);
    renderResults(localScores);
    if (GOOGLE_SHEET_WEBAPP_URL) {
      fetch(`${GOOGLE_SHEET_WEBAPP_URL}?type=exam&subtopicId=${scope}`).then((res) => res.json()).then((scores) => {
        if (Array.isArray(scores)) {
          renderResults(scores);
        }
      }).catch((err) => console.error("Error loading remote exam results leaderboard:", err));
    }
    function renderResults(scoresList) {
      let rowsHtml = scoresList.map((s, idx) => {
        let medal = "";
        if (idx === 0) medal = "\u{1F947} ";
        else if (idx === 1) medal = "\u{1F948} ";
        else if (idx === 2) medal = "\u{1F949} ";
        const yrText = s.yearGroup ? ` <span style="font-size: 0.72rem; color: var(--text-muted);">(${s.yearGroup})</span>` : "";
        return `
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.03);">
          <span style="color: var(--primary); font-weight: bold;">${medal}${idx + 1}. ${s.name}${yrText}</span>
          <span style="color: var(--success); font-weight: 700;">${s.score} pts</span>
        </div>
      `;
      }).join("");
      container.innerHTML = `
      <h4 style="font-family: var(--font-heading); font-size: 0.88rem; margin: 12px 0 8px; color: var(--text-main); text-align: left;">
        <i class="fa-solid fa-ranking-star" style="color: var(--accent);"></i> Leaderboard Rankings:
      </h4>
      <div style="text-align: left; background: rgba(0,0,0,0.1); padding: 8px 12px; border-radius: 4px; border: 1px solid var(--border-glass);">
        ${rowsHtml || '<div style="font-size: 0.8rem; color: var(--text-muted); text-align: center; padding: 4px 0;">No scores submitted yet. Be the first!</div>'}
      </div>
    `;
    }
  }
  function initExamLeaderboard(scope, pct) {
    const points = Math.round(pct * 10);
    const inputBox = document.getElementById("exam-highscore-input-box");
    if (inputBox) {
      inputBox.style.display = "block";
    }
    const initialsInput = document.getElementById("exam-highscore-initials");
    const yearInput = document.getElementById("exam-highscore-year");
    if (initialsInput) {
      initialsInput.value = "";
    }
    if (yearInput) {
      yearInput.selectedIndex = 0;
    }
    renderExamResultsLeaderboard(scope);
    const submitBtn = document.getElementById("btn-submit-exam-highscore");
    if (submitBtn) {
      const newSubmitBtn = submitBtn.cloneNode(true);
      submitBtn.parentNode.replaceChild(newSubmitBtn, submitBtn);
      newSubmitBtn.addEventListener("click", () => {
        const initials = (initialsInput.value || "").trim().toUpperCase();
        const yearGroup = yearInput.value;
        if (!/^[A-Z]{3}$/.test(initials)) {
          alert("Please enter exactly 3 uppercase letters for your initials.");
          return;
        }
        if (!yearGroup) {
          alert("Please select your Year Group.");
          return;
        }
        saveExamHighScoreLocal(scope, initials, yearGroup, points);
        AudioEngine.play("success");
        if (GOOGLE_SHEET_WEBAPP_URL) {
          const payload = {
            type: "exam",
            subtopicId: scope,
            name: initials,
            yearGroup,
            score: points,
            date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
          };
          fetch(GOOGLE_SHEET_WEBAPP_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          }).catch((err) => console.error("Error saving remote exam score:", err));
        }
        if (inputBox) inputBox.style.display = "none";
        renderExamResultsLeaderboard(scope);
      });
    }
  }

  // src/games.js
  var import_questions2 = __toESM(require_questions());
  var CRISIS_SCENARIOS = [
    {
      text: "FLASHPOINT I [6 Oct 1973]: Egypt and Syria have launched a surprise assault on Yom Kippur. The Pentagon reports heavy armor losses. The Joint Chiefs want to send tanks immediately, but doing so might upset the delicate balance of global energy stocks.",
      choices: [
        {
          text: "DENY KNOWLEDGE: Inform Prime Minister Golda Meir that the US Switchboard is down for scheduled maintenance until next Tuesday.",
          effects: { tension: -10, oil: 15, arab: 10, israel: -25 }
        },
        {
          text: "SABOTAGE NEGOTIATIONS: Order a massive, highly visible military transport airlift (Nickel Grass) directly into the warzone to see how much smoke the Kremlin breathes.",
          effects: { tension: 25, oil: -20, arab: -15, israel: 30 }
        }
      ]
    },
    {
      text: "FLASHPOINT II [17 Oct 1973]: King Faisal and OAPEC are furious about the US airlift. They threaten to cut off the West's petroleum supply entirely, plunging civilization into a pre-industrial horse-and-carriage era.",
      choices: [
        {
          text: "PANIC BUYING: Ration domestic fuel to 3 drops per citizen. Mandate that all American commuters must roller-skate to work to preserve industrial vitality.",
          effects: { tension: -5, oil: 25, arab: 15, israel: -10 }
        },
        {
          text: "DOUBLE DOWN: Inform OPEC that we have invented a secret nuclear-powered automobile and do not require their organic dinosaur fluids anyway.",
          effects: { tension: 15, oil: -35, arab: -20, israel: 5 }
        }
      ]
    },
    {
      text: "FLASHPOINT III [22 Oct 1973]: UN Resolution 338 demands a truce, but Israel's General Sharon has fully encircled Egypt's Third Army. Leonid Brezhnev sends an angry telegram threatening to deploy Soviet paratroopers to Cairo.",
      choices: [
        {
          text: "DEFCON 3 BLUFF: Crank the global military alert scale to DEFCON 3. Order strategic bombers to circle the North Pole while playing high-volume jazz over the radio frequencies to confuse Russian radar.",
          effects: { tension: 35, oil: -10, arab: -15, israel: 25 }
        },
        {
          text: "DIPLOMATIC SURRENDER: Apologize profusely, demand Israel surrender the Sinai, and offer Brezhnev a signed portrait of President Nixon as a peace offering.",
          effects: { tension: -30, oil: 10, arab: 20, israel: -35 }
        }
      ]
    }
  ];
  function formatDoomsdayTime(pct) {
    if (pct >= 90) return "11:59 PM (ALARM)";
    if (pct <= 10) return "11:40 PM (ICE AGE)";
    let mins = 60 - Math.floor(pct / 2);
    return `11:${mins < 10 ? "0" : ""}${mins} PM`;
  }
  function getCrisisColor(value) {
    if (value > 80 || value < 20) return "var(--accent)";
    if (value > 65 || value < 35) return "#f59e0b";
    return "var(--primary)";
  }
  function initCrisisGame() {
    state.crisisGameSession.currentStep = 0;
    state.crisisGameSession.metrics = { tension: 50, oil: 50, arab: 50, israel: 50 };
    const panel = document.getElementById("crisis-game-panel");
    if (panel) {
      panel.innerHTML = `
      <div class="crisis-header">
        <h2 class="crisis-title">STRATEGIC AIR COMMAND: 1973</h2>
        <p class="crisis-subtitle">CLASSIFICATION: TOP SECRET // NOFORN // KISSINGER EYE ONLY</p>
      </div>

      <div class="meters-grid">
        <div class="meter-card">
          <div class="meter-label"><span>DOOMSDAY CLOCK</span><span id="val-tension">11:50 PM</span></div>
          <div class="meter-bg"><div id="bar-tension" class="meter-fill"></div></div>
        </div>
        <div class="meter-card">
          <div class="meter-label"><span>OIL LEVERAGE RATIO</span><span id="val-oil">50%</span></div>
          <div class="meter-bg"><div id="bar-oil" class="meter-fill"></div></div>
        </div>
        <div class="meter-card">
          <div class="meter-label"><span>SADAT ALLIANCE UNITY</span><span id="val-arab">50%</span></div>
          <div class="meter-bg"><div id="bar-arab" class="meter-fill"></div></div>
        </div>
        <div class="meter-card">
          <div class="meter-label"><span>MINESHAFTS RESERVED</span><span id="val-israel">50%</span></div>
          <div class="meter-bg"><div id="bar-israel" class="meter-fill"></div></div>
        </div>
      </div>

      <div class="scenario-box" style="margin-bottom: 24px;">
        <p id="crisis-scenario-text" class="scenario-text"></p>
      </div>

      <div class="choices-container" id="crisis-choices-box"></div>
    `;
    }
    updateCrisisUI();
    renderCrisisScenario();
  }
  function updateCrisisUI() {
    const session = state.crisisGameSession;
    const tensionEl = document.getElementById("val-tension");
    const tensionBar = document.getElementById("bar-tension");
    if (tensionEl) tensionEl.innerText = formatDoomsdayTime(session.metrics.tension);
    if (tensionBar) {
      tensionBar.style.width = `${session.metrics.tension}%`;
      tensionBar.style.backgroundColor = getCrisisColor(session.metrics.tension);
    }
    const metrics = ["oil", "arab", "israel"];
    metrics.forEach((m) => {
      const val = session.metrics[m];
      const valEl = document.getElementById(`val-${m}`);
      const barEl = document.getElementById(`bar-${m}`);
      if (valEl) valEl.innerText = `${val}%`;
      if (barEl) {
        barEl.style.width = `${val}%`;
        barEl.style.backgroundColor = getCrisisColor(val);
      }
    });
  }
  function checkCrisisGameOver() {
    const m = state.crisisGameSession.metrics;
    if (m.tension >= 100) return "MUTUAL ASSURED DESTRUCTION VALIDATED: The Doomsday Clock strikes midnight. Strategic missiles launched. There is no recovery program for Paper 2.";
    if (m.tension <= 0) return "GEOPOLITICAL ERASURE: The US surrenders global relevance. Washington is converted into a collective wheat farm for the Eastern Bloc.";
    if (m.israel <= 0) return "STRATEGIC SURRENDER: The Israeli front collapses completely. The Joint Chiefs must now book alternative vacation properties.";
    if (m.oil <= 0) return "ECONOMIC EXTINCTION: Global oil drops to zero. Wall Street closes forever; the President is traded for three barrels of crude and an old bicycle.";
    if (m.arab <= 0) return "TOTAL REGIONAL ANARCHY: The Arab Alliance shatters into a billion decentralized factions, making subsequent exam answers impossibly complicated.";
    return null;
  }
  function selectCrisisChoice(index) {
    const session = state.crisisGameSession;
    const choice = CRISIS_SCENARIOS[session.currentStep].choices[index];
    for (let key in choice.effects) {
      session.metrics[key] = Math.max(0, Math.min(100, session.metrics[key] + choice.effects[key]));
    }
    updateCrisisUI();
    const failMessage = checkCrisisGameOver();
    if (failMessage) {
      AudioEngine.play("click");
      endCrisisGame(failMessage, false);
      return;
    }
    session.currentStep++;
    if (session.currentStep >= CRISIS_SCENARIOS.length) {
      AudioEngine.play("success");
      endCrisisGame("CONGRATULATIONS: You successfully completed the 1973 October Crisis without triggering an accidental global nuclear holocaust. The Prime Minister is marginally pleased.", true);
    } else {
      AudioEngine.play("flip");
      renderCrisisScenario();
    }
  }
  function renderCrisisScenario() {
    const session = state.crisisGameSession;
    const current = CRISIS_SCENARIOS[session.currentStep];
    const textEl = document.getElementById("crisis-scenario-text");
    const boxEl = document.getElementById("crisis-choices-box");
    if (textEl) textEl.innerText = current.text;
    if (boxEl) {
      boxEl.innerHTML = "";
      current.choices.forEach((c, idx) => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.innerText = c.text;
        btn.onclick = () => selectCrisisChoice(idx);
        boxEl.appendChild(btn);
      });
    }
  }
  function endCrisisGame(msg, isWin) {
    const panel = document.getElementById("crisis-game-panel");
    if (!panel) return;
    panel.innerHTML = `
    <div class="game-over-screen">
      <div class="game-over-title ${isWin ? "win" : "fail"}">${isWin ? "WAR COMPLETED" : "GLOBAL TERMINATION"}</div>
      <p class="scenario-text" style="margin-bottom: 20px; max-width: 500px; color: var(--accent);">${msg}</p>
      <div class="history-link-box">
        <strong>MEMORANDUM FOR EDEXCEL REVISION:</strong> Despite the absurdity, remember the real historical anchors here: the sheer risk of the US airlift (**Operation Nickel Grass**), the crippling weaponization of fuel via the **OPEC Embargo**, and the terrifying geopolitical pressure that led directly to **UN Resolution 338**.
      </div>
      <button class="restart-btn" id="btn-restart-crisis">RE-INITIALIZE COMPUTER</button>
    </div>
  `;
    const restartBtn = document.getElementById("btn-restart-crisis");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        AudioEngine.play("click");
        initCrisisGame();
      });
    }
  }
  var TUG_HISTORICAL_POOL = [
    { text: "1947: The UN votes on the Partition Plan (Resolution 181) to divide Palestine.", type: "deescalation" },
    { text: "1948: David Ben-Gurion officially proclaims the establishment of the State of Israel.", type: "escalation" },
    { text: "1956: President Nasser nationalises the Suez Canal Company.", type: "escalation" },
    { text: "1967: Israel launches preemptive air strikes destroying the Egyptian air force (Six-Day War).", type: "escalation" },
    { text: "1967: The UN Security Council passes Resolution 242 introducing 'Land for Peace'.", type: "deescalation" },
    { text: "1970: King Hussein orders the military expulsion of the PLO from Jordan (Black September).", type: "escalation" },
    { text: "1973: Egypt and Syria launch a coordinated surprise assault on the festival of Yom Kippur.", type: "escalation" },
    { text: "1978: Anwar Sadat and Menachem Begin sign the Camp David Accords.", type: "deescalation" },
    { text: "1987: The First Intifada breaks out in the Gaza Strip and West Bank.", type: "escalation" },
    { text: "1993: Yitzhak Rabin and Yasser Arafat shake hands on the White House lawn over the Oslo I Accord.", type: "deescalation" },
    { text: "1950: Israel passes the Law of Return, granting Jews worldwide the right to immigrate.", type: "escalation" },
    { text: "1979: The formal Egypt-Israel Peace Treaty is signed in Washington DC.", type: "deescalation" }
  ];
  function initTugGame() {
    if (state.tugGameSession.timeoutId) {
      clearTimeout(state.tugGameSession.timeoutId);
      state.tugGameSession.timeoutId = null;
    }
    state.tugGameSession.score = 0;
    state.tugGameSession.streak = 0;
    state.tugGameSession.defcon = 5;
    state.tugGameSession.gameEvents = [...TUG_HISTORICAL_POOL].sort(() => Math.random() - 0.5);
    const panel = document.getElementById("tug-game-panel");
    if (panel) {
      panel.innerHTML = `
      <div class="game-header">
        <h2 class="game-title">CHRONOLOGICAL TUG-OF-WAR</h2>
        <div style="font-size: 0.75rem; color: #22c55e; margin-top: 4px; font-weight: bold; letter-spacing: 0.05em;">OPERATION: TIMELINE INTERCEPT</div>
      </div>

      <div class="stats-banner">
        <div>INTERCEPTS SECURED: <span id="stat-score">0</span></div>
        <div>STREAK: <span id="stat-streak">0</span></div>
        <div>SECURITY LEVEL: <span id="stat-lives">DEFCON 5</span></div>
      </div>

      <div class="intercept-card-zone">
        <div class="intercept-label">Incoming Telemetry Intercept</div>
        <p id="event-display" class="event-text">INITIALIZING TIMELINE RADAR...</p>
      </div>

      <div class="control-grid">
        <button class="action-btn btn-escalate" id="btn-escalate">\u25C4 ESCALATION (Conflict)</button>
        <button class="action-btn btn-deescalate" id="btn-deescalate">DE-ESCALATION (Peace) \u25BA</button>
      </div>

      <div id="feedback-display" class="feedback-overlay"></div>
    `;
      document.getElementById("btn-escalate").addEventListener("click", () => processTugIntercept("escalation"));
      document.getElementById("btn-deescalate").addEventListener("click", () => processTugIntercept("deescalation"));
    }
    updateTugUI();
    nextTugEvent();
  }
  function updateTugUI() {
    const session = state.tugGameSession;
    const scoreEl = document.getElementById("stat-score");
    const streakEl = document.getElementById("stat-streak");
    const livesEl = document.getElementById("stat-lives");
    if (scoreEl) scoreEl.innerText = session.score;
    if (streakEl) streakEl.innerText = session.streak;
    if (livesEl) {
      livesEl.innerText = `DEFCON ${session.defcon}`;
      livesEl.className = "";
      if (session.defcon === 2) {
        livesEl.classList.add("alarm-text");
        livesEl.style.color = "#f97316";
      } else if (session.defcon === 1) {
        livesEl.classList.add("alarm-text");
        livesEl.style.color = "#ef4444";
      } else {
        livesEl.style.color = "#22c55e";
      }
    }
  }
  function nextTugEvent() {
    if (state.tugGameSession.timeoutId) {
      clearTimeout(state.tugGameSession.timeoutId);
      state.tugGameSession.timeoutId = null;
    }
    if (state.currentView !== "tug-game") {
      return;
    }
    const session = state.tugGameSession;
    if (session.gameEvents.length === 0) {
      endTugGame(true);
      return;
    }
    const btnEsc = document.getElementById("btn-escalate");
    const btnDeesc = document.getElementById("btn-deescalate");
    if (btnEsc) btnEsc.disabled = false;
    if (btnDeesc) btnDeesc.disabled = false;
    session.currentEvent = session.gameEvents.pop();
    const eventEl = document.getElementById("event-display");
    const feedbackEl = document.getElementById("feedback-display");
    if (eventEl) eventEl.innerText = session.currentEvent.text;
    if (feedbackEl) feedbackEl.innerText = "";
  }
  function processTugIntercept(playerChoice) {
    const session = state.tugGameSession;
    const feedback = document.getElementById("feedback-display");
    const btnEsc = document.getElementById("btn-escalate");
    const btnDeesc = document.getElementById("btn-deescalate");
    if (btnEsc) btnEsc.disabled = true;
    if (btnDeesc) btnDeesc.disabled = true;
    if (playerChoice === session.currentEvent.type) {
      session.score += 10 + session.streak * 2;
      session.streak++;
      AudioEngine.play("success");
      if (feedback) {
        feedback.style.color = "#22c55e";
        feedback.innerText = "\u2713 INTERCEPT VALIDATED: DATA ALIGNED CORRECTLY.";
      }
    } else {
      session.streak = 0;
      session.defcon--;
      AudioEngine.play("fail");
      if (feedback) {
        feedback.style.color = "#ef4444";
        feedback.innerText = "\u2717 SECURITY BREACH: Misclassified timeline vector.";
      }
      if (session.defcon <= 1) {
        updateTugUI();
        endTugGame(false);
        return;
      }
    }
    updateTugUI();
    state.tugGameSession.timeoutId = setTimeout(nextTugEvent, 900);
  }
  function endTugGame(isWin) {
    if (state.tugGameSession.timeoutId) {
      clearTimeout(state.tugGameSession.timeoutId);
      state.tugGameSession.timeoutId = null;
    }
    const panel = document.getElementById("tug-game-panel");
    if (!panel) return;
    AudioEngine.play(isWin ? "cheer" : "fail");
    if (isWin) {
      panel.innerHTML = `
      <div style="padding: 20px 0;">
        <h3 style="color:#22c55e; font-size:1.8rem; margin-bottom:10px; font-weight:800; font-family:'Courier New', Courier, monospace;">TIMELINE RESTORED</h3>
        <p style="color:#fff; line-height: 1.5; font-size: 0.95rem;">Excellent processing speed. You have mapped the dialectical rhythm of Paper 2 perfectly.</p>
        <div class="history-box">
          <strong>Narrative Architecture Note:</strong> Notice how periods of explosive escalation (1948, 1967, 1973) are consistently countered by fragile superpower-brokered de-escalation vectors (Resolution 242, Camp David, Oslo). Remembering this oscillation helps structure any <strong>8-mark Narrative Account</strong> question.
        </div>
        <button class="restart-btn" id="btn-restart-tug">RELOAD SIMULATOR</button>
      </div>
    `;
    } else {
      panel.innerHTML = `
      <div style="padding: 20px 0;">
        <h3 style="color:#ef4444; font-size:1.8rem; margin-bottom:10px; font-weight:800; font-family:'Courier New', Courier, monospace;">SYSTEM LOCKDOWN</h3>
        <p style="color:#fff; line-height: 1.5; font-size: 0.95rem;">DEFCON 1 reached. The timeline has collapsed into unresolvable chronological anomalies.</p>
        <div class="history-box">
          <strong>Review Vector:</strong> Make sure you aren't confusing structural flashpoints with diplomacy. For example, sorting the <em>Suez Crisis</em> or <em>First Intifada</em> as de-escalation will consistently compromise your essay structures.
        </div>
        <button class="restart-btn" id="btn-restart-tug">RE-INITIALIZE RADAR</button>
      </div>
    `;
    }
    const restartBtn = document.getElementById("btn-restart-tug");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        AudioEngine.play("click");
        initTugGame();
      });
    }
  }
  var jswKeys = {};
  window.addEventListener("keydown", (e) => {
    if (state.currentView === "jsw-game") {
      const keysToPrevent = ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "KeyW", "KeyA", "KeyS", "KeyD"];
      if (keysToPrevent.includes(e.code)) {
        e.preventDefault();
      }
    }
    jswKeys[e.code] = true;
  });
  window.addEventListener("keyup", (e) => {
    jswKeys[e.code] = false;
  });
  function initJswGame() {
    const session = state.jswGameSession;
    session.score = 0;
    session.lives = 3;
    session.isGameOver = false;
    session.isGameWon = false;
    session.player.x = 50;
    session.player.y = 200;
    session.player.vx = 0;
    session.player.vy = 0;
    session.player.isJumping = false;
    session.items.forEach((i) => i.collected = false);
    session.hazards[0].x = 200;
    session.hazards[0].vx = 2;
    session.hazards[1].x = 150;
    session.hazards[1].vx = 1.5;
    const scoreEl = document.getElementById("jsw-score");
    const itemsEl = document.getElementById("jsw-items");
    const livesEl = document.getElementById("jsw-lives");
    const reviewEl = document.getElementById("jsw-review");
    if (scoreEl) scoreEl.innerText = "00000";
    if (itemsEl) itemsEl.innerText = "4";
    if (livesEl) livesEl.innerText = "\u2605\u2605\u2605";
    if (reviewEl) reviewEl.innerHTML = `<strong>INTELLIGENCE FEED:</strong> Collect the 4 floating white spec dispatch cubes to decrypt critical Paper 2 data files. Avoid moving hazards and structural dead zones.`;
    const btnLeft = document.getElementById("jsw-btn-left");
    const btnRight = document.getElementById("jsw-btn-right");
    const btnJump = document.getElementById("jsw-btn-jump");
    if (btnLeft && btnRight && btnJump && !btnLeft.dataset.bound) {
      btnLeft.dataset.bound = "true";
      const startLeft = (e) => {
        e.preventDefault();
        jswKeys["ArrowLeft"] = true;
      };
      const stopLeft = (e) => {
        e.preventDefault();
        jswKeys["ArrowLeft"] = false;
      };
      btnLeft.addEventListener("pointerdown", startLeft);
      btnLeft.addEventListener("pointerup", stopLeft);
      btnLeft.addEventListener("pointerleave", stopLeft);
      btnLeft.addEventListener("touchstart", startLeft);
      btnLeft.addEventListener("touchend", stopLeft);
      const startRight = (e) => {
        e.preventDefault();
        jswKeys["ArrowRight"] = true;
      };
      const stopRight = (e) => {
        e.preventDefault();
        jswKeys["ArrowRight"] = false;
      };
      btnRight.addEventListener("pointerdown", startRight);
      btnRight.addEventListener("pointerup", stopRight);
      btnRight.addEventListener("pointerleave", stopRight);
      btnRight.addEventListener("touchstart", startRight);
      btnRight.addEventListener("touchend", stopRight);
      const startJump = (e) => {
        e.preventDefault();
        jswKeys["Space"] = true;
      };
      const stopJump = (e) => {
        e.preventDefault();
        jswKeys["Space"] = false;
      };
      btnJump.addEventListener("pointerdown", startJump);
      btnJump.addEventListener("pointerup", stopJump);
      btnJump.addEventListener("touchstart", startJump);
      btnJump.addEventListener("touchend", stopJump);
    }
    startJswLoop();
  }
  function stopJswLoop() {
    state.jswGameSession.loopActive = false;
  }
  function startJswLoop() {
    if (state.jswGameSession.loopActive) return;
    state.jswGameSession.loopActive = true;
    requestAnimationFrame(jswGameLoop);
  }
  function jswGameLoop() {
    const session = state.jswGameSession;
    if (!session.loopActive || state.currentView !== "jsw-game") {
      session.loopActive = false;
      return;
    }
    updateJswGame();
    drawJswGame();
    requestAnimationFrame(jswGameLoop);
  }
  function updateJswGame() {
    const session = state.jswGameSession;
    const player = session.player;
    if (session.isGameOver || session.isGameWon) {
      if (jswKeys["Space"]) {
        AudioEngine.play("click");
        initJswGame();
      }
      return;
    }
    if (jswKeys["KeyA"] || jswKeys["ArrowLeft"]) player.vx = -3;
    else if (jswKeys["KeyD"] || jswKeys["ArrowRight"]) player.vx = 3;
    else player.vx = 0;
    if ((jswKeys["Space"] || jswKeys["ArrowUp"] || jswKeys["KeyW"]) && !player.isJumping) {
      player.vy = -7.5;
      player.isJumping = true;
      AudioEngine.play("click");
    }
    player.vy += 0.4;
    player.x += player.vx;
    player.y += player.vy;
    player.isJumping = true;
    for (let plat of session.platforms) {
      if (player.x < plat.x + plat.width && player.x + player.width > plat.x && player.y < plat.y + plat.height && player.y + player.height > plat.y) {
        if (player.vy > 0 && player.y + player.height - player.vy <= plat.y + 4) {
          player.y = plat.y - player.height;
          player.vy = 0;
          player.isJumping = false;
        }
      }
    }
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > 600) player.x = 600 - player.width;
    if (player.y > 300) {
      handleJswDeath();
      return;
    }
    for (let haz of session.hazards) {
      haz.x += haz.vx;
      if (haz.x > haz.rangeMax || haz.x < haz.rangeMin) {
        haz.vx *= -1;
      }
      if (player.x < haz.x + haz.width && player.x + player.width > haz.x && player.y < haz.y + haz.height && player.y + player.height > haz.y) {
        handleJswDeath();
        return;
      }
    }
    for (let item of session.items) {
      if (!item.collected && player.x < item.x + 12 && player.x + player.width > item.x && player.y < item.y + 12 && player.y + player.height > item.y) {
        item.collected = true;
        session.score += 250;
        AudioEngine.play("success");
        const scoreEl = document.getElementById("jsw-score");
        const reviewEl = document.getElementById("jsw-review");
        const itemsEl = document.getElementById("jsw-items");
        if (scoreEl) scoreEl.innerText = String(session.score).padStart(5, "0");
        if (reviewEl) reviewEl.innerHTML = `<strong>DECRYPTED DATA:</strong> ${item.spec}`;
        const remaining = session.items.filter((i) => !i.collected).length;
        if (itemsEl) itemsEl.innerText = remaining;
        if (remaining === 0) {
          handleJswVictory();
          return;
        }
      }
    }
  }
  function handleJswDeath() {
    const session = state.jswGameSession;
    session.lives--;
    const livesEl = document.getElementById("jsw-lives");
    if (livesEl) livesEl.innerText = "\u2605".repeat(session.lives).padEnd(3, " ");
    session.player.x = 50;
    session.player.y = 200;
    session.player.vx = 0;
    session.player.vy = 0;
    if (session.lives <= 0) {
      AudioEngine.play("fail");
      session.isGameOver = true;
    } else {
      AudioEngine.play("fail");
    }
  }
  function handleJswVictory() {
    const session = state.jswGameSession;
    AudioEngine.play("cheer");
    session.isGameWon = true;
  }
  function drawJswGame() {
    const canvas = document.getElementById("jswCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const session = state.jswGameSession;
    const player = session.player;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let plat of session.platforms) {
      ctx.fillStyle = plat.color;
      ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1;
      ctx.strokeRect(plat.x, plat.y, plat.width, plat.height);
    }
    for (let item of session.items) {
      if (!item.collected) {
        ctx.fillStyle = Math.floor(Date.now() / 200) % 2 === 0 ? "#ffffff" : "#ffff00";
        ctx.fillRect(item.x, item.y, 10, 10);
      }
    }
    for (let haz of session.hazards) {
      ctx.fillStyle = haz.color;
      ctx.font = "bold 14px Courier New";
      ctx.fillText(haz.label, haz.x, haz.y + 12);
    }
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(player.x - 2, player.y, player.width + 4, 4);
    if (session.isGameOver) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.85)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ef4444";
      ctx.font = "bold 22px Courier New";
      ctx.fillText("GAME OVER: TIMELINE DESTABILIZED", 90, 110);
      ctx.fillStyle = "#ffff00";
      ctx.font = "14px Courier New";
      ctx.fillText("The Big Board has gone dark.", 180, 150);
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 14px Courier New";
      ctx.fillText("PRESS [SPACE] TO RE-INITIALIZE COMPUTER", 130, 200);
    } else if (session.isGameWon) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.85)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#22c55e";
      ctx.font = "bold 22px Courier New";
      ctx.fillText("GEOPOLITICAL ORDER RESTORED!", 110, 110);
      ctx.fillStyle = "#00ffff";
      ctx.font = "14px Courier New";
      ctx.fillText("All dispatches successfully decrypted.", 140, 150);
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 14px Courier New";
      ctx.fillText("PRESS [SPACE] TO RE-START RADAR", 170, 200);
    }
  }

  // src/exam.js
  function showExamSetup2() {
    document.getElementById("exam-setup-panel").style.display = "flex";
    document.getElementById("exam-runner-panel").style.display = "none";
    document.getElementById("exam-results-panel").style.display = "none";
    state.examSession.isActive = false;
    if (state.examSession.timerInterval) {
      clearInterval(state.examSession.timerInterval);
    }
  }
  function startExam(scope, length, timeLimit) {
    state.examSession.isActive = true;
    state.examSession.scope = scope;
    state.examSession.length = parseInt(length);
    state.examSession.timeLimit = parseInt(timeLimit);
    state.examSession.timeRemaining = parseInt(timeLimit);
    state.examSession.timeElapsed = 0;
    state.examSession.activeIndex = 0;
    state.examSession.answers = {};
    state.examSession.grades = {};
    state.examSession.startTime = Date.now();
    let pool = [...state.allQuestions];
    if (scope !== "all") {
      if (scope.startsWith("subtopic_")) {
        pool = pool.filter((q) => q.subtopicId === scope);
      } else {
        pool = pool.filter((q) => q.topicId === scope);
      }
    }
    if (state.examSession.length > pool.length) {
      state.examSession.length = pool.length;
    }
    const standardPool = pool.filter((q) => q.type === "standard");
    const depthPool = pool.filter((q) => q.type === "depth");
    let stdCount = Math.round(state.examSession.length * (2 / 3));
    let depthCount = state.examSession.length - stdCount;
    if (standardPool.length < stdCount) {
      const diff = stdCount - standardPool.length;
      stdCount = standardPool.length;
      depthCount += diff;
    }
    if (depthPool.length < depthCount) {
      const diff = depthCount - depthPool.length;
      depthCount = depthPool.length;
      stdCount += diff;
    }
    stdCount = Math.min(stdCount, standardPool.length);
    depthCount = Math.min(depthCount, depthPool.length);
    const shuffledStd = [...standardPool].sort(() => Math.random() - 0.5);
    const shuffledDepth = [...depthPool].sort(() => Math.random() - 0.5);
    const selection = [
      ...shuffledStd.slice(0, stdCount),
      ...shuffledDepth.slice(0, depthCount)
    ];
    const sortOrder = document.getElementById("exam-order-select").value;
    if (sortOrder === "chronological") {
      selection.sort((a, b) => a.year - b.year);
    } else {
      selection.sort(() => Math.random() - 0.5);
    }
    state.examSession.questions = selection;
    document.getElementById("exam-setup-panel").style.display = "none";
    document.getElementById("exam-runner-panel").style.display = "flex";
    if (state.examSession.timerInterval) {
      clearInterval(state.examSession.timerInterval);
    }
    updateExamTimerDisplay();
    state.examSession.timerInterval = setInterval(() => {
      if (state.examSession.timeLimit > 0) {
        state.examSession.timeRemaining--;
        updateExamTimerDisplay();
        if (state.examSession.timeRemaining <= 0) {
          clearInterval(state.examSession.timerInterval);
          AudioEngine.play("fail");
          alert("Time is up! Submitting your recall test.");
          finishExam();
        }
      } else {
        state.examSession.timeElapsed = Math.floor((Date.now() - state.examSession.startTime) / 1e3);
        updateExamTimerDisplay(true);
      }
    }, 1e3);
    displayExamQuestion();
  }
  function updateExamTimerDisplay(incrementing = false) {
    const display = document.getElementById("exam-timer-text");
    if (incrementing) {
      const elapsed = state.examSession.timeElapsed;
      const mins = Math.floor(elapsed / 60).toString().padStart(2, "0");
      const secs = (elapsed % 60).toString().padStart(2, "0");
      display.textContent = `${mins}:${secs}`;
      display.style.color = "var(--text-main)";
    } else {
      const remaining = state.examSession.timeRemaining;
      const mins = Math.floor(remaining / 60).toString().padStart(2, "0");
      const secs = (remaining % 60).toString().padStart(2, "0");
      display.textContent = `${mins}:${secs}`;
      if (remaining < 60) {
        display.style.color = "var(--accent)";
      } else {
        display.style.color = "var(--secondary)";
      }
    }
  }
  function getMultipleChoiceOptions(q) {
    const correct = q.answer.trim();
    const pool = state.allQuestions.map((other) => other.answer.trim()).filter((ans) => ans.toLowerCase() !== correct.toLowerCase() && ans.length > 0);
    const uniquePool = Array.from(new Set(pool));
    const shuffled = uniquePool.sort(() => Math.random() - 0.5);
    const distractors = shuffled.slice(0, 3);
    const options = [correct, ...distractors].sort(() => Math.random() - 0.5);
    return options;
  }
  function displayExamQuestion() {
    const index = state.examSession.activeIndex;
    const questions = state.examSession.questions;
    const q = questions[index];
    document.getElementById("exam-progress-text").textContent = `Question ${index + 1} of ${questions.length}`;
    const gradesMap = Object.values(state.examSession.grades);
    const correctCount = gradesMap.filter((g) => g === true).length;
    const gradedQuestionsCount = gradesMap.length;
    const scoreRatio = gradedQuestionsCount > 0 ? correctCount / gradedQuestionsCount : 1;
    document.getElementById("exam-current-mastery").textContent = getGcseLevel(scoreRatio * 100) + " Est.";
    const badge = document.getElementById("exam-q-badge");
    badge.textContent = q.type === "standard" ? "Standard" : "Top Tier Trivia";
    badge.className = `badge ${q.type === "standard" ? "badge-standard" : "badge-depth"}`;
    document.getElementById("exam-q-text").textContent = q.question;
    document.getElementById("exam-input-section").style.display = "flex";
    document.getElementById("exam-review-section").style.display = "none";
    const options = getMultipleChoiceOptions(q);
    const container = document.getElementById("exam-mcq-options-container");
    container.innerHTML = "";
    const letters = ["A", "B", "C", "D"];
    options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "mcq-option-btn";
      btn.innerHTML = `<span class="mcq-option-prefix">${letters[i]}</span> <span>${opt}</span>`;
      btn.addEventListener("click", () => {
        selectMCQOption(opt);
      });
      container.appendChild(btn);
    });
  }
  function selectMCQOption(optionText) {
    const index = state.examSession.activeIndex;
    const questions = state.examSession.questions;
    const q = questions[index];
    const isCorrect = optionText === q.answer.trim();
    state.examSession.answers[q.id] = optionText;
    state.examSession.grades[q.id] = isCorrect;
    AudioEngine.play(isCorrect ? "success" : "fail");
    document.getElementById("exam-correct-term").textContent = q.answer;
    document.getElementById("exam-correct-exp").textContent = q.explanation;
    const reviewAnswer = document.getElementById("exam-review-user-answer");
    reviewAnswer.textContent = optionText;
    reviewAnswer.style.color = isCorrect ? "var(--success)" : "var(--accent)";
    const banner = document.getElementById("exam-result-banner");
    if (banner) {
      if (isCorrect) {
        banner.className = "exam-result-banner correct";
        banner.innerHTML = '<i class="fa-solid fa-circle-check"></i> Correct Choice! (+1 Point)';
      } else {
        banner.className = "exam-result-banner incorrect";
        banner.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Incorrect Choice!';
      }
    }
    document.getElementById("exam-input-section").style.display = "none";
    document.getElementById("exam-review-section").style.display = "flex";
  }
  function nextExamQuestion() {
    const questions = state.examSession.questions;
    state.examSession.activeIndex++;
    if (state.examSession.activeIndex >= questions.length) {
      finishExam();
    } else {
      displayExamQuestion();
    }
  }
  function finishExam() {
    clearInterval(state.examSession.timerInterval);
    state.examSession.isActive = false;
    const questions = state.examSession.questions;
    const grades = state.examSession.grades;
    let score = 0;
    questions.forEach((q) => {
      if (grades[q.id] === true) score++;
    });
    const pct = Math.round(score / questions.length * 100);
    const grade = getLetterGrade(pct);
    let timeStr = "N/A";
    if (state.examSession.timeLimit > 0) {
      const elapsed = state.examSession.timeLimit - state.examSession.timeRemaining;
      const mins = Math.floor(elapsed / 60).toString().padStart(2, "0");
      const secs = (elapsed % 60).toString().padStart(2, "0");
      timeStr = `${mins}:${secs}`;
    } else {
      const elapsed = state.examSession.timeElapsed;
      const mins = Math.floor(elapsed / 60).toString().padStart(2, "0");
      const secs = (elapsed % 60).toString().padStart(2, "0");
      timeStr = `${mins}:${secs}`;
    }
    document.getElementById("results-grade").textContent = grade;
    document.getElementById("results-score").textContent = `${score} / ${questions.length}`;
    document.getElementById("results-percent").textContent = `${pct}%`;
    document.getElementById("results-time").textContent = timeStr;
    initExamLeaderboard(state.examSession.scope || "all", pct);
    const feedbackEl = document.getElementById("results-feedback-text");
    const gcseGrade = getGcseLevel(pct);
    if (pct >= 85) {
      feedbackEl.innerHTML = `<strong>Estimated Grade: ${gcseGrade}</strong><br><br>Superb historical recall! You demonstrated excellent command of key terms and deep analysis. Keep this standard up!`;
      AudioEngine.play("cheer");
      Confetti.spawn(120);
    } else if (pct >= 70) {
      feedbackEl.innerHTML = `<strong>Estimated Grade: ${gcseGrade}</strong><br><br>Strong performance. You recalled most key events, but reviewing the details-explanations will push your grades higher.`;
      AudioEngine.play("cheer");
      Confetti.spawn(50);
    } else if (pct >= 50) {
      feedbackEl.innerHTML = `<strong>Estimated Grade: ${gcseGrade}</strong><br><br>Pass standard met. Spend more time in Flashcards Study mode to build active recall on key years and organizations.`;
    } else {
      feedbackEl.innerHTML = `<strong>Estimated Grade: ${gcseGrade}</strong><br><br>Focus required. Revise the timeline and study standard recall definitions before re-attempting the quiz generator.`;
    }
    const breakdownList = document.getElementById("exam-results-breakdown-list");
    breakdownList.innerHTML = "";
    questions.forEach((q, idx) => {
      const correct = grades[q.id] === true;
      const item = document.createElement("div");
      item.className = "topic-list-card";
      item.style.cursor = "default";
      item.style.borderColor = correct ? "rgba(16, 185, 129, 0.2)" : "rgba(244, 63, 94, 0.2)";
      item.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px;">
        <span style="font-weight: 600; font-size: 0.85rem;">Q${idx + 1}: ${q.question}</span>
        <span style="font-size: 1rem; color: ${correct ? "var(--success)" : "var(--accent)"};">
          <i class="fa-solid ${correct ? "fa-circle-check" : "fa-circle-xmark"}"></i>
        </span>
      </div>
      <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
        <div><strong>Your Answer:</strong> <span style="font-style: italic;">${state.examSession.answers[q.id]}</span></div>
        <div style="margin-top: 2px;"><strong>Correct Term:</strong> <span style="color: var(--success); font-weight: 600;">${q.answer}</span></div>
      </div>
    `;
      breakdownList.appendChild(item);
    });
    document.getElementById("exam-runner-panel").style.display = "none";
    document.getElementById("exam-results-panel").style.display = "flex";
  }
  function getLetterGrade(percentage) {
    if (percentage >= 90) return "A*";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    if (percentage >= 50) return "D";
    if (percentage >= 40) return "E";
    return "U";
  }
  function getGcseLevel(percentage) {
    if (percentage >= 90) return "Grade 9";
    if (percentage >= 80) return "Grade 8";
    if (percentage >= 70) return "Grade 7";
    if (percentage >= 60) return "Grade 6";
    if (percentage >= 50) return "Grade 5";
    if (percentage >= 40) return "Grade 4";
    return "Below Grade 4";
  }

  // src/past_papers.js
  var import_questions3 = __toESM(require_questions());
  function updateDraftFeedback(qId, value, questionObj) {
    const badge = document.getElementById(`feedback-badge-${qId}`);
    const fill = document.getElementById(`feedback-fill-${qId}`);
    const connTags = document.getElementById(`connective-tags-${qId}`);
    const keyTags = document.getElementById(`keyword-tags-${qId}`);
    const keyRow = document.getElementById(`keyword-feedback-row-${qId}`);
    if (!badge || !fill) return;
    const text = (value || "").toLowerCase().trim();
    const connectives = ["because", "as a result", "led to", "resulted in", "provoked", "consequently", "enabled", "intensified", "forced", "therefore"];
    const matchedConnectives = connectives.filter((c) => text.includes(c));
    const keywords = getKeywordsForQuestion(questionObj);
    const matchedKeywords = keywords.filter((k) => text.includes(k.toLowerCase()));
    const connectivesScore = Math.min(50, matchedConnectives.length * 10);
    const keywordsScore = keywords.length > 0 ? Math.min(50, matchedKeywords.length * (50 / keywords.length)) : 50;
    const totalScore = Math.round(connectivesScore + keywordsScore);
    fill.style.width = `${totalScore}%`;
    badge.className = "feedback-badge";
    if (totalScore <= 20) {
      badge.textContent = "Structure: Drafting";
    } else if (totalScore <= 50) {
      badge.textContent = "Structure: Developing";
      badge.classList.add("status-developing");
    } else if (totalScore <= 80) {
      badge.textContent = "Structure: Strong";
      badge.classList.add("status-strong");
    } else {
      badge.textContent = "Structure: Exam-Ready";
      badge.classList.add("status-outstanding");
    }
    if (connTags) {
      connTags.innerHTML = connectives.map((c) => {
        const matched = matchedConnectives.includes(c);
        return `<span class="feedback-tag ${matched ? "matched" : ""}">${matched ? "\u2714 " : ""}${c}</span>`;
      }).join("");
    }
    if (keywords.length > 0) {
      if (keyRow) keyRow.style.display = "block";
      if (keyTags) {
        keyTags.innerHTML = keywords.map((k) => {
          const matched = matchedKeywords.includes(k);
          return `<span class="feedback-tag ${matched ? "matched" : ""}">${matched ? "\u2714 " : ""}${k}</span>`;
        }).join("");
      }
    } else {
      if (keyRow) keyRow.style.display = "none";
    }
  }
  function renderPastPapersView() {
    const container = document.getElementById("past-paper-sheet-container");
    if (state.pastPaperSession.activePaperId) {
      renderExamSheet();
      if (container) container.style.display = "block";
    } else {
      if (container) container.style.display = "none";
    }
  }
  function startPastPaper(paperId) {
    const paper = import_questions3.PAST_PAPERS_DATA.find((p) => p.id === paperId);
    if (!paper) return;
    state.pastPaperSession.activePaperId = paperId;
    state.pastPaperSession.activePaperData = paper;
    if (!state.pastPaperSession.answers[paperId]) {
      state.pastPaperSession.answers[paperId] = {};
    }
    renderExamSheet();
    const sheetContainer = document.getElementById("past-paper-sheet-container");
    if (sheetContainer) sheetContainer.style.display = "block";
  }
  function generateMockExam() {
    const consequenceKeys = Object.keys(import_questions3.CONSEQUENCE_SKILLS_DATA);
    const randomC1 = consequenceKeys[Math.floor(Math.random() * consequenceKeys.length)];
    const randomC2 = consequenceKeys.filter((k) => k !== randomC1)[Math.floor(Math.random() * (consequenceKeys.length - 1))];
    const narrativeKeys = Object.keys(import_questions3.NARRATIVE_SKILLS_DATA);
    const randomN = narrativeKeys[Math.floor(Math.random() * narrativeKeys.length)];
    const importanceKeys = Object.keys(import_questions3.EXAM_SKILLS_DATA);
    const selectedImp = [];
    while (selectedImp.length < 3) {
      const rKey = importanceKeys[Math.floor(Math.random() * importanceKeys.length)];
      if (!selectedImp.includes(rKey)) {
        selectedImp.push(rKey);
      }
    }
    const paper = {
      id: "mock_random_" + Date.now(),
      title: "Random Mock Exam",
      year: "Mock",
      q1: {
        type: "consequence_split_4",
        question: "Section A: Consequence sub-questions",
        subQuestions: [
          {
            id: randomC1,
            title: `Q1(a): ${import_questions3.CONSEQUENCE_SKILLS_DATA[randomC1].question} (4 marks)`,
            clue: import_questions3.CONSEQUENCE_SKILLS_DATA[randomC1].clue,
            model: import_questions3.CONSEQUENCE_SKILLS_DATA[randomC1].answer
          },
          {
            id: randomC2,
            title: `Q1(b): ${import_questions3.CONSEQUENCE_SKILLS_DATA[randomC2].question} (4 marks)`,
            clue: import_questions3.CONSEQUENCE_SKILLS_DATA[randomC2].clue,
            model: import_questions3.CONSEQUENCE_SKILLS_DATA[randomC2].answer
          }
        ]
      },
      q2: {
        type: "narrative",
        question: import_questions3.NARRATIVE_SKILLS_DATA[randomN].question + " (8 marks)",
        stimulus: import_questions3.NARRATIVE_SKILLS_DATA[randomN].events.slice(0, 2),
        clue: "Verify the correct chronological order, then write the narrative. Integrate analytical process words (intensified, provoked, resulted in, enabled).",
        model: import_questions3.NARRATIVE_SKILLS_DATA[randomN].model
      },
      q3: {
        type: "importance_choice",
        question: "Explain two of the following: (16 marks)",
        choices: selectedImp.map((key, idx) => {
          const letter = ["a", "b", "c"][idx];
          return {
            id: key,
            title: `The importance of ${import_questions3.EXAM_SKILLS_DATA[key].question.replace("Explain the importance of ", "").replace(" for ", " for the ").replace("?", "")}.`,
            clue: `${import_questions3.EXAM_SKILLS_DATA[key].clue1} ${import_questions3.EXAM_SKILLS_DATA[key].clue2}`,
            model: import_questions3.EXAM_SKILLS_DATA[key].answer
          };
        })
      }
    };
    state.pastPaperSession.activePaperId = paper.id;
    state.pastPaperSession.activePaperData = paper;
    state.pastPaperSession.answers[paper.id] = {};
    renderExamSheet();
    const sheetContainer = document.getElementById("past-paper-sheet-container");
    if (sheetContainer) sheetContainer.style.display = "block";
  }
  function togglePastClue(qId) {
    const box = document.getElementById(`past-clue-box-${qId}`);
    if (!box) return;
    const isHidden = box.style.display === "none";
    box.style.display = isHidden ? "block" : "none";
    AudioEngine.play(isHidden ? "flip" : "click");
  }
  function togglePastAnswer(qId) {
    const box = document.getElementById(`past-answer-box-${qId}`);
    if (!box) return;
    const isHidden = box.style.display === "none";
    box.style.display = isHidden ? "block" : "none";
    AudioEngine.play(isHidden ? "success" : "click");
  }
  function togglePastQuestionComplete(qId, checked) {
    const session = state.pastPaperSession;
    if (checked) {
      if (!session.completedQuestions.includes(qId)) {
        session.completedQuestions.push(qId);
        AudioEngine.play("success");
      }
    } else {
      const idx = session.completedQuestions.indexOf(qId);
      if (idx > -1) {
        session.completedQuestions.splice(idx, 1);
        AudioEngine.play("click");
      }
    }
    saveProgress();
  }
  function renderExamSheet() {
    const session = state.pastPaperSession;
    const paper = session.activePaperData;
    const container = document.getElementById("past-paper-sheet-container");
    if (!paper || !container) return;
    const questionsList = [];
    if (paper.q1) {
      if (paper.q1.type === "consequence_split_4") {
        questionsList.push(paper.q1.subQuestions[0].id, paper.q1.subQuestions[1].id);
      } else if (paper.q1.type === "consequence_8") {
        questionsList.push(paper.id + "_q1");
      }
    }
    if (paper.q2 && paper.q2.type !== "none") {
      questionsList.push(paper.id + "_q2");
    }
    if (paper.q3 && paper.q3.type !== "none") {
      paper.q3.choices.forEach((c) => questionsList.push(c.id));
    }
    const completedCount = questionsList.filter((id) => session.completedQuestions.includes(id)).length;
    const pct = questionsList.length > 0 ? Math.round(completedCount / questionsList.length * 100) : 0;
    let html = `
    <div class="exam-sheet">
      <div class="exam-sheet-header">
        <h3>${paper.title}</h3>
        <div class="exam-metadata">
          <span><i class="fa-solid fa-calendar"></i> Year: ${paper.year}</span>
          <span><i class="fa-solid fa-check-double"></i> Complete: ${completedCount}/${questionsList.length} (${pct}%)</span>
        </div>
      </div>
  `;
    if (paper.q1) {
      html += `<div class="exam-sheet-section">`;
      if (paper.q1.type === "consequence_split_4") {
        html += `<h4>Section A: Consequence Questions (8 marks total)</h4>`;
        paper.q1.subQuestions.forEach((sq) => {
          html += renderPastQuestionMarkup(sq.id, sq.title, sq.clue, sq.model, 4);
        });
      } else if (paper.q1.type === "consequence_8") {
        html += `<h4>Section A: Consequence Question (8 marks)</h4>`;
        html += renderPastQuestionMarkup(paper.id + "_q1", paper.q1.question, paper.q1.clue, paper.q1.model, 8);
      } else {
        html += `<h4>Section A: Consequence Question</h4><p style="font-style: italic; color: var(--text-muted);">${paper.q1.question}</p>`;
      }
      html += `</div>`;
    }
    if (paper.q2) {
      html += `<div class="exam-sheet-section">`;
      if (paper.q2.type === "narrative") {
        html += `<h4>Section B: Narrative Account (8 marks)</h4>`;
        html += renderPastQuestionMarkup(paper.id + "_q2", paper.q2.question, paper.q2.clue, paper.q2.model, 8, paper.q2.stimulus);
      } else {
        html += `<h4>Section B: Narrative Account</h4><p style="font-style: italic; color: var(--text-muted);">${paper.q2.question}</p>`;
      }
      html += `</div>`;
    }
    if (paper.q3) {
      html += `<div class="exam-sheet-section">`;
      if (paper.q3.type === "importance_choice") {
        html += `<h4>Section C: Importance Choice (16 marks total, answer TWO of three)</h4>`;
        html += `<p style="font-size: 0.9rem; margin-bottom: 12px; font-weight: bold; color: var(--primary);">Choose any two questions to answer:</p>`;
        paper.q3.choices.forEach((choice, idx) => {
          const indexStr = ["a", "b", "c"][idx];
          const titleText = `Q3(${indexStr}): ${choice.title} (8 marks)`;
          html += renderPastQuestionMarkup(choice.id, titleText, choice.clue, choice.model, 8);
        });
      } else {
        html += `<h4>Section C: Importance Question</h4><p style="font-style: italic; color: var(--text-muted);">${paper.q3.question}</p>`;
      }
      html += `</div>`;
    }
    html += `
      <div style="display: flex; justify-content: flex-end; margin-top: 16px;">
        <button class="btn-secondary" id="btn-close-exam-sheet" style="font-weight: 600;">
          Close Paper & Save Draft
        </button>
      </div>
    </div>
  `;
    container.innerHTML = html;
    questionsList.forEach((qId) => {
      let qObj = null;
      if (paper.q1) {
        if (paper.q1.type === "consequence_split_4") {
          qObj = paper.q1.subQuestions.find((sq) => sq.id === qId);
        } else if (paper.id + "_q1" === qId) {
          qObj = paper.q1;
        }
      }
      if (!qObj && paper.q2 && paper.id + "_q2" === qId) {
        qObj = paper.q2;
      }
      if (!qObj && paper.q3 && paper.q3.type === "importance_choice") {
        qObj = paper.q3.choices.find((c) => c.id === qId);
      }
      const textarea = document.getElementById(`past-textarea-${qId}`);
      if (textarea && qObj) {
        textarea.value = session.answers[paper.id][qId] || "";
        updateDraftFeedback(qId, textarea.value, qObj);
        textarea.addEventListener("input", (e) => {
          session.answers[paper.id][qId] = e.target.value;
          updateDraftFeedback(qId, e.target.value, qObj);
          saveProgress();
        });
      }
      const chk = document.getElementById(`past-chk-${qId}`);
      if (chk) {
        chk.checked = session.completedQuestions.includes(qId);
        chk.addEventListener("change", (e) => {
          togglePastQuestionComplete(qId, e.target.checked);
          renderExamSheetStats();
        });
      }
      const btnClue = document.getElementById(`past-btn-clue-${qId}`);
      if (btnClue) {
        btnClue.addEventListener("click", () => togglePastClue(qId));
      }
      const btnCheck = document.getElementById(`past-btn-check-${qId}`);
      if (btnCheck) {
        btnCheck.addEventListener("click", () => togglePastAnswer(qId));
      }
    });
    const closeBtn = document.getElementById("btn-close-exam-sheet");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        AudioEngine.play("click");
        state.pastPaperSession.activePaperId = null;
        state.pastPaperSession.activePaperData = null;
        container.style.display = "none";
        const selectEl = document.getElementById("past-paper-select");
        if (selectEl) selectEl.value = "";
      });
    }
  }
  function renderPastQuestionMarkup(qId, questionText, clue, modelAnswer, marks, stimulus = null) {
    let stimulusHTML = "";
    if (stimulus && stimulus.length > 0) {
      stimulusHTML = `
      <div class="stimulus-container">
        <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--text-muted); display: flex; align-items: center;">Stimulus:</span>
        ${stimulus.map((s) => `<span class="stimulus-item">${s}</span>`).join("")}
      </div>
    `;
    }
    return `
    <div class="exam-question-block" id="exam-q-block-${qId}">
      <div class="exam-question-header">
        <h5 class="exam-question-title">${questionText}</h5>
        <span class="exam-question-marks">${marks} Marks</span>
      </div>
      ${stimulusHTML}
      <textarea class="exam-textarea" id="past-textarea-${qId}" placeholder="Draft your answer here..." style="min-height: 120px;"></textarea>
      
      <!-- Live feedback card -->
      <div class="draft-feedback-card" id="draft-feedback-${qId}">
        <div class="feedback-stats">
          <div class="feedback-badge" id="feedback-badge-${qId}">Structure: Drafting</div>
          <div class="feedback-progress-bar">
            <div class="feedback-progress-fill" id="feedback-fill-${qId}" style="width: 0%;"></div>
          </div>
        </div>
        <div class="feedback-checklist">
          <div class="feedback-item">
            <strong>Causal Connectives:</strong>
            <div class="feedback-tags" id="connective-tags-${qId}"></div>
          </div>
          <div class="feedback-item" id="keyword-feedback-row-${qId}">
            <strong>Key Terms:</strong>
            <div class="feedback-tags" id="keyword-tags-${qId}"></div>
          </div>
        </div>
      </div>

      <div class="exam-sheet-actions">
        <button class="btn-secondary" id="past-btn-clue-${qId}" style="flex: 1; min-width: 130px; font-size: 0.85rem; padding: 8px 12px;">
          <i class="fa-solid fa-lightbulb"></i> Educator Clue
        </button>
        <button class="btn-primary" id="past-btn-check-${qId}" style="flex: 2; min-width: 180px; font-size: 0.85rem; padding: 8px 12px;">
          <i class="fa-solid fa-clipboard-check"></i> Self-Check Answer
        </button>
      </div>

      <div class="past-clue-box" id="past-clue-box-${qId}" style="display: none;">
        <strong>Clue:</strong> ${clue}
      </div>

      <div class="past-model-answer" id="past-answer-box-${qId}" style="display: none;">
        <div class="past-model-answer-title"><i class="fa-solid fa-star"></i> Level 3/4 Model Answer</div>
        <div class="past-model-answer-content">${modelAnswer}</div>
      </div>

      <label class="completion-check-row">
        <input type="checkbox" id="past-chk-${qId}">
        Mark this question as complete
      </label>
    </div>
  `;
  }
  function renderExamSheetStats() {
    const session = state.pastPaperSession;
    const paper = session.activePaperData;
    if (!paper) return;
    const questionsList = [];
    if (paper.q1) {
      if (paper.q1.type === "consequence_split_4") {
        questionsList.push(paper.q1.subQuestions[0].id, paper.q1.subQuestions[1].id);
      } else if (paper.q1.type === "consequence_8") {
        questionsList.push(paper.id + "_q1");
      }
    }
    if (paper.q2 && paper.q2.type !== "none") {
      questionsList.push(paper.id + "_q2");
    }
    if (paper.q3 && paper.q3.type !== "none") {
      paper.q3.choices.forEach((c) => questionsList.push(c.id));
    }
    const completedCount = questionsList.filter((id) => session.completedQuestions.includes(id)).length;
    const pct = questionsList.length > 0 ? Math.round(completedCount / questionsList.length * 100) : 0;
    const metaEl = document.querySelector(".exam-sheet-header .exam-metadata");
    if (metaEl) {
      metaEl.innerHTML = `
      <span><i class="fa-solid fa-calendar"></i> Year: ${paper.year}</span>
      <span><i class="fa-solid fa-check-double"></i> Complete: ${completedCount}/${questionsList.length} (${pct}%)</span>
    `;
    }
  }

  // src/lessons.js
  var import_questions4 = __toESM(require_questions());

  // src/videos_data.js
  var VIDEOS_DATA = {
    "subtopic_1_1": {
      "video_title": "1947: Palestine Population & Jewish Immigration",
      "youtube_url": "https://www.youtube.com/watch?v=2yBolHdMejM",
      "duration": "04:02",
      "production_source": "Dr. Joshua Landis (Janux)",
      "questions": [
        "What was the purpose of the 1947 UN Partition Plan (Resolution 181)?",
        "Which paramilitary group bombed the British administrative headquarters (King David Hotel) in 1946?",
        "How did the British blockade affect Jewish refugee immigration after WWII?"
      ]
    },
    "subtopic_1_2": {
      "video_title": "1948: Israel's Battle for Independence",
      "youtube_url": "https://www.youtube.com/watch?v=wjysy7ONisA",
      "duration": "06:58",
      "production_source": "Unpacked",
      "questions": [
        "Which territories did Jordan and Egypt take control of after the 1949 armistice?",
        "What is the meaning of the Palestinian term 'Al-Nakba' and how many fled?",
        "What was the purpose of the Law of Return passed by Israel in 1950?"
      ]
    },
    "subtopic_1_3": {
      "video_title": "The 1956 Suez Crisis",
      "youtube_url": "https://www.youtube.com/watch?v=xICnObSHU0M",
      "duration": "03:55",
      "production_source": "History Matters",
      "questions": [
        "Why did President Nasser nationalise the Suez Canal in July 1956?",
        "What was the secret Protocol of S\xE8vres, and who signed it?",
        "Why did the USA force Britain, France, and Israel to withdraw from Egypt?"
      ]
    },
    "subtopic_2_1": {
      "video_title": "The Six-Day War Explained",
      "youtube_url": "https://www.youtube.com/watch?v=ud42QqmzM7o",
      "duration": "05:08",
      "production_source": "Unpacked",
      "questions": [
        "What pre-emptive air strike did Israel launch on 5 June 1967?",
        "Which territories did Israel capture from Egypt, Syria, and Jordan?",
        "Why did the Soviet Union provide false troop concentration intelligence to Egypt?"
      ]
    },
    "subtopic_2_2": {
      "video_title": "The Munich Massacre",
      "youtube_url": "https://www.youtube.com/watch?v=D3K9VJ6dhNQ",
      "duration": "05:44",
      "production_source": "Unpacked",
      "questions": [
        "What is the 'Land for Peace' formula outlined in UN Security Council Resolution 242?",
        "What were the 'Three Nos' issued by Arab leaders at the Khartoum Conference?",
        "How did the PFLP hijackings at Dawson's Field affect Jordan's government?"
      ]
    },
    "subtopic_2_3": {
      "video_title": "The War Israel Wasn't Supposed to Survive",
      "youtube_url": "https://www.youtube.com/watch?v=F4GGpOxJW7I",
      "duration": "16:15",
      "production_source": "Unpacked",
      "questions": [
        "Why did Anwar Sadat decide to launch a surprise attack on Yom Kippur?",
        "How did Egyptian engineers overcome the Bar-Lev Line sand wall fortifications?",
        "What was the oil embargo, and how did it affect Western supporters of Israel?"
      ]
    },
    "subtopic_3_1": {
      "video_title": "How the Camp David Accords Impacted the Middle East",
      "youtube_url": "https://www.youtube.com/watch?v=mbc9ElB5vfQ",
      "duration": "04:32",
      "production_source": "HISTORY Channel",
      "questions": [
        "What was Henry Kissinger's 'shuttle diplomacy' in 1974-75?",
        "Why was Anwar Sadat's 1977 visit to Jerusalem and speech at the Knesset historic?",
        "What were the key terms of the 1979 Egypt-Israel Peace Treaty?"
      ]
    },
    "subtopic_3_2": {
      "video_title": "The 1st Intifada: When Non-Violent Protests Turned Violent",
      "youtube_url": "https://www.youtube.com/watch?v=G6zftP9yJy8",
      "duration": "05:48",
      "production_source": "Unpacked",
      "questions": [
        "Why did Israel launch Operation 'Peace for Galilee' to invade Lebanon in 1982?",
        "What were the consequences of the 1982 war for Yasser Arafat and the PLO?",
        "What was the 'Iron Fist' policy used by Israel in response to the First Intifada?"
      ]
    },
    "subtopic_3_3": {
      "video_title": "The Life and Assassination of Yitzhak Rabin",
      "youtube_url": "https://www.youtube.com/watch?v=TDHYHuGFnao",
      "duration": "05:58",
      "production_source": "Unpacked",
      "questions": [
        "What was the significance of the 1993 Oslo I Accords handshake?",
        "What governing authority did the Oslo Accords grant to the Palestinian National Authority?",
        "Why did a right-wing Jewish extremist assassinate Prime Minister Yitzhak Rabin in 1995?"
      ]
    }
  };

  // src/lesson_extensions.js
  var LESSON_EXTENSIONS = {
    "subtopic_1_1": {
      "wrapUpSummary": [
        "<strong>Opposing Demands:</strong> Post-WWII Britain was caught in an impossible squeeze between Zionist demands for immediate mass immigration (heightened by the Holocaust) and Arab demands for independence and an end to land sales.",
        "<strong>Jewish Insurgency:</strong> Frustrated by British quotas (1,500/month), Jewish paramilitary groups launched a violent campaign. The Irgun's bombing of the <strong>King David Hotel</strong> in July 1946 (91 deaths) shattered British morale and forced them to hand Palestine to the UN.",
        "<strong>UN Partition (Resolution 181):</strong> In November 1947, the UN proposed dividing the land. Jews accepted, but Arabs rejected it as unfair since the Jewish state got 55% of the land despite Jews making up only 33% of the population.",
        "<strong>1948\u201349 War:</strong> Following the declaration of Israel on 14 May 1948, five Arab states invaded. Israel survived and won due to Arab disunity, the creation of a unified IDF, and importing Soviet-bloc weapons from Czechoslovakia during a crucial June ceasefire."
      ],
      "revisionQuestions": [
        {
          "number": 1,
          "difficulty": "Level 1: Recall",
          "question": "What was the monthly British quota on Jewish immigration into Palestine in 1945?",
          "answer": "The British restricted Jewish immigration to a strict quota of just <strong>1,500 people per month</strong> to avoid provoking an Arab rebellion and to protect Western oil interests."
        },
        {
          "number": 2,
          "difficulty": "Level 2: Recall",
          "question": "Which Jewish militant group carried out the King David Hotel bombing in July 1946?",
          "answer": "The bombing was carried out by the <strong>Irgun</strong> (a Zionist paramilitary organization led by Menachem Begin)."
        },
        {
          "number": 3,
          "difficulty": "Level 3: Fact Check",
          "question": "How many people were killed in the King David Hotel bombing?",
          "answer": "The blast killed <strong>91 people</strong>, including British officials, Arab staff, and Jewish workers. It is a vital statistic for 4-mark consequence questions."
        },
        {
          "number": 4,
          "difficulty": "Level 4: Concept",
          "question": "What did UN Resolution 181 propose for the future of the Palestine Mandate?",
          "answer": "It proposed <strong>partitioning Palestine into separate Jewish and Arab states</strong>, with Jerusalem and Bethlehem designated as an international zone under UN administration."
        },
        {
          "number": 5,
          "difficulty": "Level 5: Analysis",
          "question": "Why did Palestinian Arab leaders reject the 1947 UN Partition Plan?",
          "answer": "They rejected it because they felt the UN had no right to give away their land, and they pointed out that the Jewish state was allocated <strong>55% of the territory</strong> even though Jews only made up <strong>33% of the population</strong>."
        },
        {
          "number": 6,
          "difficulty": "Level 6: Fact Check",
          "question": "On what date did the British Mandate officially end and David Ben-Gurion declare the creation of Israel?",
          "answer": "The declaration of the state of Israel was made on <strong>14 May 1948</strong>, as the last British troops departed."
        },
        {
          "number": 7,
          "difficulty": "Level 7: Recall",
          "question": "Which five Arab nations launched a coordinated invasion of Israel on 15 May 1948?",
          "answer": "The invading forces came from <strong>Egypt, Transjordan, Syria, Lebanon, and Iraq</strong>."
        },
        {
          "number": 8,
          "difficulty": "Level 8: Analysis",
          "question": "Explain how the first UN ceasefire in June 1948 benefited the Israeli forces.",
          "answer": "The month-long truce allowed Israel to reorganize its disparate militias, conscript new soldiers, and crucially import modern weapons (such as aircraft and rifles) from <strong>Czechoslovakia</strong>, tipping the balance of military power."
        },
        {
          "number": 9,
          "difficulty": "Level 9: Concept",
          "question": "What unified military force was created by Prime Minister Ben-Gurion during the 1948 war?",
          "answer": "The <strong>Israeli Defence Forces (IDF)</strong> was created to replace competing paramilitary groups (Haganah, Irgun, and Lehi) and enforce a single military command structure."
        },
        {
          "number": 10,
          "difficulty": "Level 10: Challenge",
          "question": "Analyze the impact of the 1948\u201349 war on the political existence of a Palestinian Arab state.",
          "answer": "The proposed independent Palestinian Arab state was completely aborted. Israel expanded its borders to cover <strong>79% of the Mandate</strong>, while Transjordan occupied and annexed the <strong>West Bank</strong>, and Egypt took military control of the <strong>Gaza Strip</strong>."
        }
      ]
    },
    "subtopic_1_2": {
      "wrapUpSummary": [
        "<strong>Territorial Changes:</strong> Israel captured 79% of the mandate land (including West Jerusalem). Jordan annexed the West Bank and East Jerusalem, and Egypt took control of the Gaza Strip, wiping the proposed Arab state off the map.",
        "<strong>The Nakba (Refugee Crisis):</strong> Over 700,000 Palestinian Arabs fled or were expelled, creating a massive refugee crisis. Squalid camps arose, and in 1949, the UN set up UNRWA to provide vital aid.",
        "<strong>Consolidation & Laws:</strong> Israel consolidated using the <strong>Law of Return (1950)</strong>, allowing all Jews to immigrate. This doubled the population, straining the economy and forcing a strict rationing regime (Tzena), funded by US loans and German reparations.",
        "<strong>Border Tensions:</strong> Hostilities persisted as Egypt blockaded the Suez Canal and Straits of Tiran, while Palestinian <strong>Fedayeen</strong> launched cross-border raids, triggering disproportionate Israeli reprisal attacks."
      ],
      "revisionQuestions": [
        {
          "number": 1,
          "difficulty": "Level 1: Recall",
          "question": "What name is given to the 1949 armistice lines that defined Israel's borders?",
          "answer": "The armistice borders are known as the <strong>Green Line</strong>."
        },
        {
          "number": 2,
          "difficulty": "Level 2: Recall",
          "question": "What Arabic term is used to describe the flight and displacement of Palestinians in 1948?",
          "answer": "It is called the <strong>Nakba</strong> (meaning 'The Catastrophe')."
        },
        {
          "number": 3,
          "difficulty": "Level 3: Fact Check",
          "question": "Approximately how many Palestinian refugees fled or were expelled during the 1948\u201349 war?",
          "answer": "Over <strong>700,000 Palestinian Arabs</strong> became refugees, moving into camps in Gaza, the West Bank, and surrounding Arab countries."
        },
        {
          "number": 4,
          "difficulty": "Level 4: Concept",
          "question": "What was the primary function of UNRWA, established in December 1949?",
          "answer": "The United Nations Relief and Works Agency (<strong>UNRWA</strong>) was created to provide emergency food, healthcare, housing, and education to Palestinian refugees in the camps."
        },
        {
          "number": 5,
          "difficulty": "Level 5: Analysis",
          "question": "What rights did the 1950 Law of Return grant, and what was its impact on Israel?",
          "answer": "It gave <strong>any Jew in the world the right to immigrate and become a citizen</strong>. This caused the population to double within three years, creating massive integration challenges and economic strain."
        },
        {
          "number": 6,
          "difficulty": "Level 6: Fact Check",
          "question": "Which UN peace mediator was assassinated in Jerusalem in September 1948?",
          "answer": "<strong>Count Folke Bernadotte</strong> of Sweden was assassinated by the Jewish extremist group the Stern Gang (Lehi) because of his proposals to modify the partition boundaries."
        },
        {
          "number": 7,
          "difficulty": "Level 7: Recall",
          "question": "What was the name of the Palestinian refugee guerrilla groups who launched raids into Israel?",
          "answer": "They were called the <strong>Fedayeen</strong> ('those who sacrifice themselves')."
        },
        {
          "number": 8,
          "difficulty": "Level 8: Analysis",
          "question": "How did Egypt attempt to economically damage Israel between 1949 and 1956?",
          "answer": "Egypt implemented an <strong>economic blockade</strong>, refusing to allow Israeli shipping to use the Suez Canal and blocking the Straits of Tiran, which closed off Israel's southern port of Eilat."
        },
        {
          "number": 9,
          "difficulty": "Level 9: Concept",
          "question": "What was the 'Tzena' in Israel, and how was it kept afloat?",
          "answer": "The Tzena was a strict <strong>austerity and rationing regime</strong> (1949\u20131953) for food and fuel. It was kept afloat through massive financial grants from the USA ($65 million) and Holocaust reparations from West Germany."
        },
        {
          "number": 10,
          "difficulty": "Level 10: Challenge",
          "question": "Explain how cross-border clashes between Fedayeen and the IDF escalated regional tension.",
          "answer": "Fedayeen raids killed Israeli civilians, prompting Prime Minister Ben-Gurion to launch <strong>disproportionate reprisal attacks</strong> by the IDF. These military clashes humiliated Arab governments, particularly Egypt, driving them to militarize and prepare for further conflict."
        }
      ]
    },
    "subtopic_1_3": {
      "wrapUpSummary": [
        "<strong>Nasser's Rise:</strong> Colonel Gamal Abdel Nasser seized power in Egypt in 1954. He championed <strong>Pan-Arabism</strong>, aiming to unify Arab states and dismantle Israel.",
        "<strong>The Gaza Raid & Soviet Arms:</strong> After Israel killed 38 Egyptian soldiers in the Gaza Raid (Feb 1955), Nasser realized Egypt's weakness. Rejected by the West, he signed the <strong>Czech Arms Deal</strong> in September 1955 to buy Soviet aircraft and tanks, upsetting the regional power balance.",
        "<strong>Canal Nationalisation:</strong> In July 1956, after the US and Britain cancelled funding for the Aswan High Dam to punish his Soviet ties, Nasser nationalised the British and French-owned <strong>Suez Canal</strong> to fund the project.",
        "<strong>S\xE8vres Collusion & Invasion:</strong> Britain, France, and Israel secretly signed the **Protocol of S\xE8vres** to invade Egypt. Israel captured Sinai, but US President Eisenhower forced a withdrawal by threatening the British economy, leaving Nasser as a Pan-Arab hero. Egypt and Syria formed the UAR (1958\u20131961) in response."
      ],
      "revisionQuestions": [
        {
          "number": 1,
          "difficulty": "Level 1: Recall",
          "question": "Who became the leader of Egypt in 1954 and promoted Pan-Arabism?",
          "answer": "Colonel <strong>Gamal Abdel Nasser</strong> overthrew the Egyptian monarchy and took control of the state."
        },
        {
          "number": 2,
          "difficulty": "Level 2: Fact Check",
          "question": "How many Egyptian soldiers were killed in the Israeli Gaza Raid of February 1955?",
          "answer": "Israeli forces killed <strong>38 Egyptian soldiers</strong> in the raid, humiliating Nasser and exposing Egypt's military weakness."
        },
        {
          "number": 3,
          "difficulty": "Level 3: Recall",
          "question": "What major arms agreement did Nasser sign in September 1955, and why?",
          "answer": "He signed the <strong>Czech Arms Deal</strong> with the Soviet bloc to obtain modern weaponry, bypass Western arms embargoes, and deter further Israeli attacks."
        },
        {
          "number": 4,
          "difficulty": "Level 4: Concept",
          "question": "Why did Nasser decide to nationalise the Suez Canal in July 1956?",
          "answer": "Nasser needed to fund the construction of the <strong>Aswan High Dam</strong>. After the US and UK cancelled their loans to punish his Soviet ties, he nationalised the canal to use its toll revenues to finance the dam."
        },
        {
          "number": 5,
          "difficulty": "Level 5: Fact Check",
          "question": "What secret agreement did Britain, France, and Israel make to invade Egypt?",
          "answer": "They signed the <strong>Protocol of S\xE8vres</strong> in October 1956, plotting a coordinated attack where Israel would invade Sinai, and Britain/France would intervene as 'peacekeepers' to seize the canal."
        },
        {
          "number": 6,
          "difficulty": "Level 6: Recall",
          "question": "What international UN force was created to secure the peace after the Suez Crisis?",
          "answer": "The <strong>United Nations Emergency Force (UNEF)</strong> was deployed as peacekeepers along the Egypt-Israel border."
        },
        {
          "number": 7,
          "difficulty": "Level 7: Fact Check",
          "question": "Which US President opposed the Suez invasion and forced the allies to withdraw?",
          "answer": "President <strong>Dwight D. Eisenhower</strong> forced the withdrawal by threatening to crash the British pound and withhold financial support."
        },
        {
          "number": 8,
          "difficulty": "Level 8: Concept",
          "question": "What political union did Egypt and Syria form in February 1958?",
          "answer": "They formed the <strong>United Arab Republic (UAR)</strong>, representing the peak of Pan-Arabism."
        },
        {
          "number": 9,
          "difficulty": "Level 9: Analysis",
          "question": "Why did the creation of the UAR in 1958 cause extreme security anxiety in Israel?",
          "answer": "It placed a single, hostile, Soviet-armed political state on <strong>both Israel's northern border (Syria) and southern border (Egypt)</strong>, raising immediate fears of military encirclement."
        },
        {
          "number": 10,
          "difficulty": "Level 10: Challenge",
          "question": "Assess the political outcomes of the Suez Crisis for Gamal Abdel Nasser.",
          "answer": "Nasser achieved a massive <strong>political victory</strong>. Despite suffering military defeat, he successfully nationalised the canal, forced the withdrawal of European imperialists, and became the undisputed hero of the Arab world, accelerating the decline of British and French global power."
        }
      ]
    },
    "subtopic_2_1": {
      "wrapUpSummary": [
        "<strong>Origins:</strong> The 1964 Cairo Conference created the PLO and triggered the Jordan Water Crisis as Arab states tried to divert the Jordan River. Border skirmishes escalated, leading to the Israeli Samu Raid in Jordan (Nov 1966).",
        "<strong>The May Crisis:</strong> In May 1967, false Soviet warnings of an Israeli buildup on the Syrian border led Nasser to expel UNEF peacekeepers, mobilize Egypt's army, and close the Straits of Tiran, blockading Israel's port of Eilat.",
        "<strong>Operation Focus:</strong> On 5 June 1967, Israel launched a pre-emptive air strike, destroying 90% of the Egyptian air force on the ground and establishing absolute air supremacy.",
        "<strong>Three Fronts:</strong> In six days of rapid ground campaigns, the IDF routed the Egyptian forces (capturing Sinai/Gaza), the Jordanian forces (capturing the West Bank/East Jerusalem), and the Syrian forces (capturing the Golan Heights)."
      ],
      "revisionQuestions": [
        {
          "number": 1,
          "difficulty": "Level 1: Recall",
          "question": "What are the exact start and end dates of the Six-Day War?",
          "answer": "The war began on <strong>5 June 1967</strong> and ended with a ceasefire on <strong>10 June 1967</strong>."
        },
        {
          "number": 2,
          "difficulty": "Level 2: Recall",
          "question": "What organization was founded in 1964 to coordinate Palestinian national activities?",
          "answer": "The <strong>Palestine Liberation Organization (PLO)</strong> was established at the Cairo Arab League Conference."
        },
        {
          "number": 3,
          "difficulty": "Level 3: Recall",
          "question": "What was the cause of the Jordan Water Crisis of 1964\u201365?",
          "answer": "Tensions rose over Israel's construction of the <strong>National Water Carrier</strong> and subsequent Arab League attempts to divert headwaters of the Jordan River in Syria and Lebanon."
        },
        {
          "number": 4,
          "difficulty": "Level 4: Fact Check",
          "question": "What was the Samu Raid of November 1966 and what did it lead to?",
          "answer": "It was a major Israeli cross-border assault into the Jordanian-controlled West Bank in reprisal for Fatah landmine attacks. It humiliated King Hussein and drove Jordan to sign a <strong>mutual defense pact with Egypt</strong> in May 1967."
        },
        {
          "number": 5,
          "difficulty": "Level 5: Concept",
          "question": "How did false intelligence from the Soviet Union in May 1967 trigger the war?",
          "answer": "The Soviets falsely informed Egypt that Israel was <strong>massing 10 to 12 brigades on the Syrian border</strong>. This prompted Nasser to mobilize troops and expel UNEF peacekeepers from Sinai."
        },
        {
          "number": 6,
          "difficulty": "Level 6: Fact Check",
          "question": "What waterway did Nasser block in May 1967, and why was it considered a casus belli by Israel?",
          "answer": "Nasser blocked the <strong>Straits of Tiran</strong>, closing off Israel's only southern sea route to Asia and East Africa via Eilat. Israel had declared in 1957 that blockading this waterway would be considered an act of war."
        },
        {
          "number": 7,
          "difficulty": "Level 7: Recall",
          "question": "What was the 'Regatta' force proposed by US President Lyndon Johnson?",
          "answer": "It was an unsuccessful US proposal to organize an <strong>international naval task force</strong> to escort merchant ships and break the Egyptian blockade of the Straits of Tiran without starting a war."
        },
        {
          "number": 8,
          "difficulty": "Level 8: Concept",
          "question": "Describe the pre-emptive military action launched by Israel on 5 June 1967.",
          "answer": "Israel launched <strong>Operation Focus (Moked)</strong>, a surprise air strike that destroyed nearly the entire Egyptian air force on the ground within three hours, ensuring total Israeli air supremacy."
        },
        {
          "number": 9,
          "difficulty": "Level 9: Analysis",
          "question": "Why did Jordan enter the 1967 war, and what was the immediate consequence?",
          "answer": "Jordan entered due to its defense treaty with Egypt and false reports from Cairo claiming Egyptian victories. As a result, Israeli forces launched a counter-offensive and captured the entire <strong>West Bank and East Jerusalem</strong>."
        },
        {
          "number": 10,
          "difficulty": "Level 10: Challenge",
          "question": "List all the territories captured by Israel during the Six-Day War, along with the countries they were taken from.",
          "answer": "Israel captured the <strong>Sinai Peninsula and Gaza Strip</strong> from Egypt, the <strong>West Bank and East Jerusalem</strong> from Jordan, and the <strong>Golan Heights</strong> from Syria."
        }
      ]
    },
    "subtopic_2_2": {
      "wrapUpSummary": [
        "<strong>Territorial Occupation:</strong> Israel's capture of the West Bank, Gaza, Sinai, and Golan Heights placed over 1 million Palestinians under military occupation and created 300,000+ new refugees.",
        "<strong>Diplomatic Standoff:</strong> UN Resolution 242 established the 'Land for Peace' formula. Arab nations rejected this at the Khartoum Conference, declaring the <strong>'Three Nos'</strong> (No peace, No recognition, No negotiations).",
        "<strong>War of Attrition:</strong> Between 1967 and 1970, Egypt and Israel engaged in a low-intensity artillery and air war across the Suez Canal, causing heavy casualties and destroying cities along the canal but leaving borders unchanged.",
        "<strong>Rise of Militancy:</strong> Frustrated by conventional military defeats, Palestinian factions turned to hijackings (PFLP) and terrorism. Tensions in Jordan erupted in <strong>Black September (1970)</strong>, with King Hussein expelling the PLO to Lebanon. The militant group Black September carried out the 1972 Munich Olympics Massacre."
      ],
      "revisionQuestions": [
        {
          "number": 1,
          "difficulty": "Level 1: Recall",
          "question": "Name the five territories occupied by Israel as a result of the Six-Day War.",
          "answer": "The territories were the <strong>West Bank, East Jerusalem, the Gaza Strip, the Sinai Peninsula, and the Golan Heights</strong>."
        },
        {
          "number": 2,
          "difficulty": "Level 2: Recall",
          "question": "Approximately how many new Palestinian refugees were displaced by the 1967 war?",
          "answer": "Over <strong>300,000 Palestinians</strong> fled the West Bank and Gaza, many becoming double-refugees who had already fled in 1948."
        },
        {
          "number": 3,
          "difficulty": "Level 3: Recall",
          "question": "What is the core formula established in UN Security Council Resolution 242?",
          "answer": "The formula is <strong>'Land for Peace'</strong>: Israel should withdraw its armed forces from territories occupied in the recent conflict in exchange for Arab states recognizing its sovereignty and right to live in peace."
        },
        {
          "number": 4,
          "difficulty": "Level 4: Concept",
          "question": "What were the 'Three Nos' of the August 1967 Khartoum Arab League Summit?",
          "answer": "They were: <strong>No peace</strong> with Israel, <strong>no recognition</strong> of Israel, and <strong>no negotiations</strong> with Israel."
        },
        {
          "number": 5,
          "difficulty": "Level 5: Fact Check",
          "question": "What was the War of Attrition (1967\u201370) and who fought it?",
          "answer": "It was a low-intensity conflict between <strong>Egypt and Israel</strong> involving heavy artillery shelling, commando raids, and air battles along the Suez Canal, aimed at wearing down the IDF's occupation."
        },
        {
          "number": 6,
          "difficulty": "Level 6: Concept",
          "question": "Which Palestinian faction became notorious for hijacking Western airliners to publicize their cause?",
          "answer": "The <strong>Popular Front for the Liberation of Palestine (PFLP)</strong>, led by George Habash."
        },
        {
          "number": 7,
          "difficulty": "Level 7: Recall",
          "question": "What was the 'Black September' conflict in 1970?",
          "answer": "It was a civil war in Jordan where <strong>King Hussein's army crushed the PLO</strong> and expelled Yasser Arafat and his guerrilla fighters, who threatened Jordanian sovereignty."
        },
        {
          "number": 8,
          "difficulty": "Level 8: Fact Check",
          "question": "Where did the PLO establish its main military bases after being expelled from Jordan in 1970\u201371?",
          "answer": "They relocated to <strong>Lebanon</strong>, establishing a 'state-within-a-state' in Beirut and southern Lebanon."
        },
        {
          "number": 9,
          "difficulty": "Level 9: Recall",
          "question": "Describe the tragic events of the September 1972 Munich Olympics.",
          "answer": "A Palestinian militant group called Black September took 11 members of the <strong>Israeli Olympic team hostage</strong>. All 11 hostages and a German police officer were killed during a failed rescue attempt at a military airfield."
        },
        {
          "number": 10,
          "difficulty": "Level 10: Challenge",
          "question": "Explain how Israel responded to the Munich Olympics massacre under Prime Minister Golda Meir.",
          "answer": "Prime Minister Meir authorized <strong>Operation Wrath of God</strong>, a secret Mossad campaign to track down and assassinate key members of Black September and the PLO across Europe and the Middle East."
        }
      ]
    },
    "subtopic_2_3": {
      "wrapUpSummary": [
        "<strong>Preparations:</strong> Anwar Sadat took power in Egypt in 1970, determined to recover the Sinai. Knowing diplomatic channels were deadlocked, he prepared for a coordinated surprise attack with Syrian President Hafez al-Assad.",
        "<strong>Surprise Attack:</strong> On 6 October 1973 (Yom Kippur and Ramadan), Egyptian troops crossed the Suez Canal, breaching the Bar Lev Line, while Syrian tanks attacked the Golan Heights, catching the IDF off guard.",
        "<strong>Superpower Involvement:</strong> After initial defeats, Israel counter-attacked. The US airlifted supplies to Israel, and the USSR supplied the Arabs. The IDF crossed the Suez Canal, encircling the Egyptian Third Army and causing a major US-Soviet nuclear standoff.",
        "<strong>The Oil Weapon & Ceasefire:</strong> OPEC Arab nations cut oil production and embargoed the West, causing a global energy crisis. A ceasefire was secured under UN Resolution 338. The war restored Egyptian military pride, enabling future peace talks."
      ],
      "revisionQuestions": [
        {
          "number": 1,
          "difficulty": "Level 1: Recall",
          "question": "In what month and year did the Yom Kippur War break out?",
          "answer": "The war began on <strong>6 October 1973</strong>."
        },
        {
          "number": 2,
          "difficulty": "Level 2: Recall",
          "question": "Who was the leader of Egypt during the 1973 Yom Kippur War?",
          "answer": "<strong>Anwar Sadat</strong>, who succeeded Nasser in 1970."
        },
        {
          "number": 3,
          "difficulty": "Level 3: Recall",
          "question": "Which two religious holidays coincided on the day of the joint Arab surprise attack?",
          "answer": "The Jewish day of atonement, <strong>Yom Kippur</strong>, and the Muslim holy month of <strong>Ramadan</strong>."
        },
        {
          "number": 4,
          "difficulty": "Level 4: Concept",
          "question": "What was the 'Bar Lev Line' and how did Egyptian forces overcome it?",
          "answer": "It was a massive line of sand fortifications built by Israel along the Suez Canal. Egypt used <strong>high-pressure water hoses</strong> imported from Germany to blast breaches in the sand wall, allowing tanks to cross."
        },
        {
          "number": 5,
          "difficulty": "Level 5: Fact Check",
          "question": "Which strategic plateau on the Syrian border did Israel fight desperately to hold?",
          "answer": "The <strong>Golan Heights</strong>, where Syrian forces initially advanced with 1,200 tanks before being repelled by Israeli armor."
        },
        {
          "number": 6,
          "difficulty": "Level 6: Recall",
          "question": "What was the name of the emergency US military supply operation to Israel?",
          "answer": "It was called <strong>Operation Nickel Grass</strong>, launched by President Nixon to replace Israel's heavy weapons losses."
        },
        {
          "number": 7,
          "difficulty": "Level 7: Fact Check",
          "question": "What military maneuver did General Ariel Sharon lead on the Suez front?",
          "answer": "He led Israeli forces across to the west bank of the Suez Canal, <strong>encircling the Egyptian Third Army</strong> and cutting off their supply lines."
        },
        {
          "number": 8,
          "difficulty": "Level 8: Concept",
          "question": "How did Arab oil-producing nations intervene economically during the war?",
          "answer": "Members of <strong>OPEC</strong> implemented an oil embargo and production cuts targeting countries that supported Israel, causing global oil prices to quadruple."
        },
        {
          "number": 9,
          "difficulty": "Level 9: Recall",
          "question": "Which UN Resolution called for an immediate ceasefire and direct negotiations to implement Resolution 242?",
          "answer": "<strong>UN Resolution 338</strong>, passed on 22 October 1973."
        },
        {
          "number": 10,
          "difficulty": "Level 10: Challenge",
          "question": "Explain why the Yom Kippur War was considered a political and psychological victory for Egypt.",
          "answer": "It shattered the myth of <strong>Israeli invincibility</strong>, proved that Arab armies could execute complex military plans, and restored Egyptian national honor, which gave Sadat the domestic legitimacy needed to pursue a peace treaty with Israel."
        }
      ]
    },
    "subtopic_3_1": {
      "wrapUpSummary": [
        "<strong>Diplomatic Re-alignment:</strong> The 1973 oil crisis made Middle Eastern stability a US security priority. US Secretary of State Kissinger conducted **shuttle diplomacy** (1974\u201375) to negotiate troop separation agreements.",
        "<strong>Peace Breakthrough:</strong> In November 1977, Anwar Sadat made a stunning trip to Jerusalem, addressing the Knesset. Israeli PM Menachem Begin paid a reciprocal visit to Egypt, shattering decades of diplomatic deadlocks.",
        "<strong>Camp David Accords (1978):</strong> US President Jimmy Carter hosted Sadat and Begin at Camp David for 13 days of secret talks. They agreed on a framework returning Sinai to Egypt and establishing limited self-rule for Palestinians.",
        "<strong>Treaty of Washington (1979):</strong> They signed a formal peace treaty in March 1979. While it secured Egypt's borders, it led to Egypt being expelled from the Arab League, and Sadat was assassinated by Islamist extremists in Cairo in 1981."
      ],
      "revisionQuestions": [
        {
          "number": 1,
          "difficulty": "Level 1: Recall",
          "question": "What is the term for Henry Kissinger's diplomacy of flying between Middle Eastern capitals?",
          "answer": "It is called <strong>shuttle diplomacy</strong>."
        },
        {
          "number": 2,
          "difficulty": "Level 2: Recall",
          "question": "Who was the first Arab leader to visit Israel and address the Knesset?",
          "answer": "Egyptian President <strong>Anwar Sadat</strong> in November 1977."
        },
        {
          "number": 3,
          "difficulty": "Level 3: Recall",
          "question": "Who was the Prime Minister of Israel during the Camp David negotiations?",
          "answer": "<strong>Menachem Begin</strong>, leader of the right-wing Likud party."
        },
        {
          "number": 4,
          "difficulty": "Level 4: Fact Check",
          "question": "Which US President mediated the Camp David peace talks in September 1978?",
          "answer": "President <strong>Jimmy Carter</strong> hosted the summit."
        },
        {
          "number": 5,
          "difficulty": "Level 5: Concept",
          "question": "How long did the secret negotiations at Camp David last?",
          "answer": "The talks lasted for <strong>13 days</strong> of intense, isolated negotiations."
        },
        {
          "number": 6,
          "difficulty": "Level 6: Concept",
          "question": "What land swap formula was used to return the Sinai Peninsula to Egypt?",
          "answer": "The <strong>'Land for Peace'</strong> formula, where Israel returned territory in exchange for recognition and a formal peace treaty."
        },
        {
          "number": 7,
          "difficulty": "Level 7: Fact Check",
          "question": "What was the name of the formal peace treaty signed in March 1979?",
          "answer": "The <strong>Treaty of Washington</strong>."
        },
        {
          "number": 8,
          "difficulty": "Level 8: Recall",
          "question": "How did the Arab League respond to Egypt signing the Treaty of Washington?",
          "answer": "They condemned Egypt, <strong>expelled it from the Arab League</strong>, and relocated the League's headquarters from Cairo to Tunis."
        },
        {
          "number": 9,
          "difficulty": "Level 9: Recall",
          "question": "What was the ultimate fate of Anwar Sadat following the peace treaty?",
          "answer": "He was <strong>assassinated in October 1981</strong> by Islamist members of the Egyptian military who opposed the peace treaty with Israel."
        },
        {
          "number": 10,
          "difficulty": "Level 10: Challenge",
          "question": "Explain the major shortcoming of the Camp David Accords regarding the Palestinian issue.",
          "answer": "It proposed a vague framework for <strong>Palestinian autonomy</strong> in the West Bank and Gaza, but it was negotiated without Palestinian representation, did not halt Jewish settlements, and failed to guarantee a sovereign Palestinian state."
        }
      ]
    },
    "subtopic_3_2": {
      "wrapUpSummary": [
        "<strong>PLO in Lebanon:</strong> Expelled from Jordan, the PLO established base camps in southern Lebanon ('Fatahland'), launching cross-border rocket attacks and guerrilla raids into northern Israel.",
        "<strong>1982 Invasion:</strong> Israel launched **Operation Peace for Galilee** in June 1982, besieging West Beirut. The siege forced Yasser Arafat and the PLO leadership to evacuate their headquarters to Tunis.",
        "<strong>Sabra & Shatila Massacres:</strong> In September 1982, pro-Israeli Lebanese Christian Phalangist militias massacred hundreds of Palestinian refugees. Israel's Kahan Commission held Defense Minister Ariel Sharon indirectly responsible, forcing his resignation.",
        "<strong>First Intifada (1987\u201393):</strong> A traffic accident in Gaza sparked a massive grassroots uprising across the occupied territories. Handled with Yitzhak Rabin's harsh **'Iron Fist'** policy, the images of stone-throwing youth facing tanks drew international sympathy for Palestinians."
      ],
      "revisionQuestions": [
        {
          "number": 1,
          "difficulty": "Level 1: Recall",
          "question": "What nickname was given to southern Lebanon when it was controlled by the PLO?",
          "answer": "It was known as <strong>Fatahland</strong>."
        },
        {
          "number": 2,
          "difficulty": "Level 2: Recall",
          "question": "In what year did Israel launch its full-scale invasion of Lebanon?",
          "answer": "Israel invaded in <strong>1982</strong>."
        },
        {
          "number": 3,
          "difficulty": "Level 3: Fact Check",
          "question": "What was the official military code name for the 1982 Lebanon invasion?",
          "answer": "It was called <strong>Operation Peace for Galilee</strong>."
        },
        {
          "number": 4,
          "difficulty": "Level 4: Concept",
          "question": "To which city was the PLO forced to move its headquarters in 1982?",
          "answer": "The PLO was forced to flee to <strong>Tunis, Tunisia</strong>."
        },
        {
          "number": 5,
          "difficulty": "Level 5: Fact Check",
          "question": "Which Lebanese group carried out the Sabra and Shatila massacres?",
          "answer": "The <strong>Phalangist Christian militia</strong>, allied with Israel."
        },
        {
          "number": 6,
          "difficulty": "Level 6: Recall",
          "question": "What was the name of the Israeli commission that investigated the massacres, and what was its ruling?",
          "answer": "The <strong>Kahan Commission</strong>. It ruled that Israeli military officials bore indirect responsibility, forcing Defense Minister <strong>Ariel Sharon</strong> to resign."
        },
        {
          "number": 7,
          "difficulty": "Level 7: Recall",
          "question": "What does the Arabic word 'Intifada' mean?",
          "answer": "It translates to <strong>uprising</strong> or 'shaking off'."
        },
        {
          "number": 8,
          "difficulty": "Level 8: Fact Check",
          "question": "What incident in December 1987 sparked the First Intifada in Gaza?",
          "answer": "An Israeli military transport vehicle <strong>collided with civilian cars</strong>, killing four Palestinian workers at the Erez checkpoint."
        },
        {
          "number": 9,
          "difficulty": "Level 9: Concept",
          "question": "What was the 'Iron Fist' policy implemented by Yitzhak Rabin during the Intifada?",
          "answer": "It was a policy of using <strong>harsh physical force</strong>, mass arrests, house demolitions, and curfews to break the will of the protesters, which attracted international condemnation."
        },
        {
          "number": 10,
          "difficulty": "Level 10: Challenge",
          "question": "Explain how the First Intifada differed from previous military conflicts between Israelis and Arabs.",
          "answer": "It was a <strong>spontaneous grassroots civil rebellion</strong> led by local committees inside the occupied territories, relying on strikes, boycotts, and youth throwing stones, rather than conventional armies or external guerrilla raids."
        }
      ]
    },
    "subtopic_3_3": {
      "wrapUpSummary": [
        "<strong>PLO's Realignment:</strong> In 1988, Yasser Arafat declared a Palestinian state in exile, officially renounced terrorism, and recognized Israel's right to exist, opening paths to peace.",
        "<strong>End of Cold War:</strong> The collapse of the Soviet Union cut off military aid to Syria and Iraq, leaving the US as the sole superpower. The US used this leverage to organize the <strong>Madrid Peace Conference (1991)</strong>.",
        "<strong>Oslo I Accord (1993):</strong> Secret talks in Norway led to the Oslo Accords. Arafat and Rabin shook hands at the White House. The **Palestinian Authority (PA)** was created, providing limited self-rule in Gaza and Jericho.",
        "<strong>Oslo II & Collapse:</strong> The 1995 Oslo II accord divided the West Bank into Areas A, B, and C. Hardliners on both sides opposed the treaty, and the peace process was derailed in November 1995 when right-wing extremist Yigal Amir assassinated PM Yitzhak Rabin."
      ],
      "revisionQuestions": [
        {
          "number": 1,
          "difficulty": "Level 1: Recall",
          "question": "In what year did Yasser Arafat officially renounce terrorism and recognize Israel's right to exist?",
          "answer": "Arafat made this historic declaration in <strong>December 1988</strong> at a UN General Assembly meeting."
        },
        {
          "number": 2,
          "difficulty": "Level 2: Recall",
          "question": "What international conference in October 1991 first brought Israel and Arab nations face-to-face?",
          "answer": "The <strong>Madrid Peace Conference</strong>, co-sponsored by the US and USSR."
        },
        {
          "number": 3,
          "difficulty": "Level 3: Concept",
          "question": "How did the collapse of the Soviet Union influence the peace process?",
          "answer": "It left Arab states without their primary <strong>military and financial benefactor</strong>, forcing them to participate in US-led peace negotiations."
        },
        {
          "number": 4,
          "difficulty": "Level 4: Fact Check",
          "question": "In which city did the secret peace talks of 1992\u201393 take place?",
          "answer": "The secret negotiations occurred in <strong>Oslo, Norway</strong>."
        },
        {
          "number": 5,
          "difficulty": "Level 5: Recall",
          "question": "Which two leaders shook hands on the White House lawn to seal the Oslo I Accord in September 1993?",
          "answer": "Israeli Prime Minister <strong>Yitzhak Rabin</strong> and PLO Chairman <strong>Yasser Arafat</strong>, witnessed by US President Bill Clinton."
        },
        {
          "number": 6,
          "difficulty": "Level 6: Concept",
          "question": "What governing administration was created under the Oslo Accords to manage the occupied territories?",
          "answer": "The <strong>Palestinian Authority (PA)</strong>, led by Yasser Arafat."
        },
        {
          "number": 7,
          "difficulty": "Level 7: Fact Check",
          "question": "Which two occupied regions were the first to receive self-government under the Oslo Accords in 1994?",
          "answer": "The West Bank town of <strong>Jericho</strong> and the <strong>Gaza Strip</strong>."
        },
        {
          "number": 8,
          "difficulty": "Level 8: Concept",
          "question": "Name the three divisions of the West Bank under the 1995 Oslo II Accord.",
          "answer": "<strong>Area A</strong> (full Palestinian control), <strong>Area B</strong> (Palestinian civil, Israeli security control), and <strong>Area C</strong> (full Israeli security and administrative control)."
        },
        {
          "number": 9,
          "difficulty": "Level 9: Recall",
          "question": "Who assassinated Yitzhak Rabin in November 1995, and why?",
          "answer": "Rabin was assassinated by <strong>Yigal Amir</strong>, an ultranationalist Israeli student who opposed the Oslo Accords and did not want to yield land to Palestinians."
        },
        {
          "number": 10,
          "difficulty": "Level 10: Challenge",
          "question": "List the four major 'final status' issues that the Oslo Accords postponed for future negotiations.",
          "answer": "The final status of <strong>Jerusalem</strong>, the right of return for <strong>Palestinian refugees</strong>, the future of <strong>Jewish settlements</strong>, and the final <strong>borders</strong> of a sovereign Palestinian state."
        }
      ]
    }
  };

  // src/spec_checklist_data.js
  var SPEC_CHECKLIST_DATA = {
    "subtopic_1_1": [
      {
        "point": "Conflicting interests and demands of Jews and Arabs within the British Mandate.",
        "keyFacts": [
          "<strong>Zionist Demands:</strong> Mass immigration for Holocaust survivors and the creation of a sovereign Jewish state to guarantee safety.",
          "<strong>Palestinian Arab Demands:</strong> National independence, self-rule under the Arab majority, and an end to mass Jewish immigration and land sales.",
          "<strong>British Position:</strong> Bankrupt after WWII, Britain tried to restrict Jewish immigration to 1,500/month to appease Arab nations and secure Middle Eastern oil access, satisfying neither side."
        ]
      },
      {
        "point": "Key events leading to the end of the British Mandate, partition and the creation of Israel, including the significance of the bombing of the King David Hotel and UN Resolution 181.",
        "keyFacts": [
          "<strong>King David Hotel Bombing (July 1946):</strong> Zionist militant group Irgun blew up the British headquarters in Jerusalem, killing 91 people, destroying Britain's political will to maintain the Mandate.",
          "<strong>UN Resolution 181 (Nov 1947):</strong> The UN Partition Plan proposed dividing Palestine into Jewish (55% land) and Arab (45% land) states. Accepted by Jews; rejected by Arabs as unjust due to demographic disparity (Jews were only 33% of the population).",
          "<strong>Declaration of Statehood:</strong> On 14 May 1948, the British withdrew and David Ben-Gurion declared the sovereign State of Israel."
        ]
      },
      {
        "point": "Key events of the Arab-Israeli war (1948\u201349).",
        "keyFacts": [
          "<strong>Arab Invasion:</strong> On 15 May 1948, five Arab states (Egypt, Transjordan, Syria, Lebanon, Iraq) invaded Israel to dismantle the new state.",
          "<strong>Ceasefire & Truce (June 1948):</strong> A crucial UN-mandated month-long ceasefire allowed Israel to reorganize militias and secretly import Soviet-bloc arms from Czechoslovakia.",
          "<strong>Creation of the IDF:</strong> Rival Jewish militias (Haganah, Irgun, Lehi) unified under single command. Troop levels doubled to 108,000, enabling Israel to win."
        ]
      }
    ],
    "subtopic_1_2": [
      {
        "point": "Territorial changes and their impact.",
        "keyFacts": [
          "<strong>Israeli Expansion:</strong> Israel expanded its territory to cover 79% of mandate Palestine, far exceeding the 55% allocated by the UN Partition Plan.",
          "<strong>Arab Control:</strong> The proposed Palestinian state was aborted; Transjordan annexed the West Bank and East Jerusalem, and Egypt took military control of the Gaza Strip.",
          "<strong>The Green Line:</strong> Established the new armistice borders, consolidating Israel's gains and entrenching divisions."
        ]
      },
      {
        "point": "The refugee status of Palestinian Arabs.",
        "keyFacts": [
          "<strong>The Nakba ('The Catastrophe'):</strong> Over 700,000 Palestinian Arabs fled or were expelled from their homes during the war.",
          "<strong>Right of Return Denied:</strong> Israel refused to allow refugees to return, citing demographic threats to its Jewish majority, creating permanent exile.",
          "<strong>UNRWA:</strong> The UN established the relief agency in 1949 to build and run camps, providing food, healthcare, and schooling."
        ]
      },
      {
        "point": "The creation of the Israeli Defence Forces and the Law of Return.",
        "keyFacts": [
          "<strong>Law of Return (1950):</strong> Granted every Jew in the world the right to immigrate to Israel and receive automatic citizenship, doubling the population.",
          "<strong>IDF Conscription:</strong> Ben-Gurion united rival militias into a unified army, introducing mandatory military conscription to integrate immigrants.",
          "<strong>Count Bernadotte:</strong> UN peace mediator Count Folke Bernadotte was assassinated by the Zionist Stern Gang (Lehi) in September 1948 for proposing border changes."
        ]
      },
      {
        "point": "US aid to Israel.",
        "keyFacts": [
          "<strong>Economic Survival:</strong> The US provided a vital $65 million grant and loans to help Israel feed and house the flood of new immigrants.",
          "<strong>Tzena (Austerity):</strong> Severe food and resource rationing in the early 1950s was mitigated by US loans and German Holocaust reparations."
        ]
      },
      {
        "point": "Israel's relations with Egypt.",
        "keyFacts": [
          "<strong>Blockade:</strong> Egypt blocked Israeli shipping from using the Suez Canal and closed the Straits of Tiran, closing off Eilat.",
          "<strong>Guerrilla Raids:</strong> Palestinian Fedayeen launched border raids from Gaza, provoking disproportionate Israeli IDF military reprisal attacks."
        ]
      }
    ],
    "subtopic_1_3": [
      {
        "point": "Nasser and Egypt's leadership of the Arab world.",
        "keyFacts": [
          "<strong>Gamal Abdel Nasser:</strong> Seized power in 1954, promoting Pan-Arabism (unifying Arab states, nationalising resources, and opposing Western imperialism and Israel).",
          "<strong>Soviet Influence:</strong> Seeking weapons after Western refusal, Nasser signed the Czech Arms Deal (Sept 1955) for modern Soviet jets and tanks, shifting the regional balance."
        ]
      },
      {
        "point": "The events and significance of Israeli attacks on Gaza in 1955 and Sinai in 1956.",
        "keyFacts": [
          "<strong>Gaza Raid (Feb 1955):</strong> An Israeli reprisal raid killed 38 Egyptian soldiers, exposing Egypt's military weakness and driving Nasser to Soviet arms.",
          "<strong>Sinai Invasion (Oct 1956):</strong> Israel launched a swift invasion of Sinai, capturing the peninsula as part of a secret pact with Britain and France."
        ]
      },
      {
        "point": "The events and significance of the Suez Crisis (1956), including the formation of the UAR in 1958.",
        "keyFacts": [
          "<strong>Canal Nationalisation:</strong> Nasser nationalised the Suez Canal in July 1956 to fund the Aswan Dam after the US and UK cancelled loans.",
          "<strong>Protocol of S\xE8vres:</strong> Secret collusion between UK, France, and Israel to invade Egypt. Although a military success, it was a political disaster as US President Eisenhower forced a withdrawal.",
          "<strong>United Arab Republic (UAR):</strong> A political union between Egypt and Syria (1958-61) representing the peak of Pan-Arabism, creating Israeli encirclement anxieties."
        ]
      }
    ],
    "subtopic_2_1": [
      {
        "point": "The significance of the Cairo Conference (1964).",
        "keyFacts": [
          "<strong>Creation of the PLO:</strong> The Palestine Liberation Organization was founded to coordinate resistance under Arab League control.",
          "<strong>Jordan Water Diverting:</strong> Arab states agreed to divert the headwaters of the Jordan River to deny water to Israel's National Water Carrier, sparking border skirmishes."
        ]
      },
      {
        "point": "Escalating tension between Israel, Syria and Jordan: Syria's support for Fatah, Israel's raid on Samu and events of 7 April 1967.",
        "keyFacts": [
          "<strong>Syrian Fatah Support:</strong> Syria backed Arafat's Fatah group, providing bases to launch sabotage raids into northern Israel.",
          "<strong>Samu Raid (Nov 1966):</strong> Israeli force raided Jordanian West Bank in reprisal, causing Hussein to sign a military pact with Egypt in May 1967.",
          "<strong>7 April 1967 Clashes:</strong> Israeli fighter jets shot down 6 Syrian MiG fighters over Damascus during escalated border artillery duels."
        ]
      },
      {
        "point": "The actions of the USSR, Nasser and the USA in the period leading to war.",
        "keyFacts": [
          "<strong>Soviet Warnings:</strong> The USSR falsely warned Egypt in May 1967 that Israel was massing troops to invade Syria.",
          "<strong>Nasser's Mobilization:</strong> Expelled UNEF peacekeepers, sent 100,000 troops into Sinai, and blockaded the Straits of Tiran, closing Eilat.",
          "<strong>US Diplomacy:</strong> US President Johnson attempted to organize the 'Regatta' force to break the blockade, but failed to secure international allies."
        ]
      },
      {
        "point": "Key events of the war.",
        "keyFacts": [
          "<strong>Operation Focus (5 June):</strong> Israeli pre-emptive air strike destroyed 90% of the Egyptian air force on the ground, securing air supremacy.",
          "<strong>Ground War Fronts:</strong> Israel fought on three fronts: Sinai/Gaza (Egypt), West Bank/East Jerusalem (Jordan), and the Golan Heights (Syria), capturing all in 6 days."
        ]
      }
    ],
    "subtopic_2_2": [
      {
        "point": "UN Resolution 242 and continued dispute over the Suez Canal.",
        "keyFacts": [
          "<strong>UN Resolution 242:</strong> Introduced 'Land for Peace' (withdrawing from occupied land for recognition). Rejected by Arabs who issued the 'Three Nos' at Khartoum.",
          "<strong>War of Attrition (1967\u201370):</strong> Low-intensity war of artillery shelling and air strikes across the closed Suez Canal, causing heavy casualties."
        ]
      },
      {
        "point": "Palestinian refugees and the significance of the occupied territories: Golan Heights, Gaza Strip, West Bank, Sinai and East Jerusalem.",
        "keyFacts": [
          "<strong>New Refugees:</strong> Over 300,000 Palestinians fled occupied areas into Jordan, compounding the pre-existing 1948 refugee crisis.",
          "<strong>Occupied Territories:</strong> Capture of West Bank/Gaza put 1 million Palestinians under military rule. Golan provided a strategic buffer; Sinai had oil; East Jerusalem was annexed."
        ]
      },
      {
        "point": "The use of terrorism, Israel's response and international attitudes towards the Palestine issue: the PFLP airplane hijacks of 1970; Black September and the Munich Olympics.",
        "keyFacts": [
          "<strong>PFLP Hijackings (1970):</strong> Radical faction hijacked planes to Dawson's Field to publicize the cause, blowing up empty aircraft.",
          "<strong>Munich Olympics (1972):</strong> Black September militants killed 11 Israeli athletes. Israel retaliated with Mossad assassinations (Operation Wrath of God).",
          "<strong>International Impact:</strong> Horrified Western public opinion but forced governments to recognize the unresolved Palestinian national issue."
        ]
      },
      {
        "point": "The expulsion of the PLO from Jordan (1970).",
        "keyFacts": [
          "<strong>Black September Civil War:</strong> King Hussein crushed the PLO state-within-a-state in Jordan after plane hijackings threatened his rule.",
          "<strong>Lebanon Relocation:</strong> Expelled PLO relocated its headquarters to Lebanon, establishing bases in Beirut and South Lebanon ('Fatahland')."
        ]
      }
    ],
    "subtopic_2_3": [
      {
        "point": "Egyptian relations with Israel, the USA, the USSR and other Arab states.",
        "keyFacts": [
          "<strong>Sadat's Realignment:</strong> Succeeded Nasser in 1970. To court the US, he expelled 15,000 Soviet advisors in 1972.",
          "<strong>Arab Front:</strong> Rebuilt ties with Syria for a coordinated two-front war, and secured Saudi commitments to use the oil weapon."
        ]
      },
      {
        "point": "Israel's consolidation of control of the occupied territories.",
        "keyFacts": [
          "<strong>Bar-Lev Line:</strong> Israel built a massive 25-meter sand fortification along the Suez Canal to prevent Egyptian crossings.",
          "<strong>Jewish Settlements:</strong> Israel established the first civilian settlements in Sinai, West Bank, and Golan Heights to assert permanent physical control."
        ]
      },
      {
        "point": "Key events of the Yom Kippur War (1973) and its aftermath.",
        "keyFacts": [
          "<strong>Surprise Attack (6 Oct):</strong> Egypt crossed the Suez Canal using water cannons, while Syria attacked Golan Heights, catching Israel off guard.",
          "<strong>Superpower Brinkmanship:</strong> US airlifted supplies (Operation Nickel Grass) and USSR supplied Arabs. IDF crossed Suez, encircling Egypt's Third Army.",
          "<strong>OPEC Oil Embargo:</strong> OPEC cut production and embargoed Western supporters of Israel, quadrupling global prices and forcing a ceasefire (Resolution 338)."
        ]
      }
    ],
    "subtopic_3_1": [
      {
        "point": "The significance of the oil crisis and the involvement of the USA and the USSR.",
        "keyFacts": [
          "<strong>Global Shock:</strong> The OPEC embargo and the US-Soviet airlift proved Middle Eastern war could cause global inflation and nuclear escalation.",
          "<strong>Superpower Intervention:</strong> The US and USSR pressured their allies into ceasefires, recognizing regional peace was a vital economic and geopolitical necessity."
        ]
      },
      {
        "point": "Kissinger, 'shuttle diplomacy' and the reopening of the Suez Canal.",
        "keyFacts": [
          "<strong>Shuttle Diplomacy:</strong> US Secretary of State Henry Kissinger flew between capitals to broker troop disengagement agreements (1974-75).",
          "<strong>Suez Canal Reopened:</strong> Disengagement treaties returned Suez Canal banks to Egyptian control, allowing it to reopen to global shipping in June 1975."
        ]
      },
      {
        "point": "Sadat's visit to Israel (1977), Begin's visit to Egypt (1977), US President Carter and Camp David (1978) and the Treaty of Washington (1979).",
        "keyFacts": [
          "<strong>Reciprocal Visits:</strong> Sadat addressed the Knesset in Jerusalem in 1977; Menachem Begin visited Ismailia, Egypt, breaking diplomatic deadlocks.",
          "<strong>Camp David Accords (1978):</strong> President Jimmy Carter mediated 13 days of secret talks. Israel returned Sinai; a framework for Palestinian autonomy was drafted.",
          "<strong>Treaty of Washington (1979):</strong> Formal peace treaty signed. Egypt was expelled from the Arab League, and Sadat was assassinated by Islamist extremists in 1981."
        ]
      }
    ],
    "subtopic_3_2": [
      {
        "point": "Arafat's speech to the UN (1974).",
        "keyFacts": [
          "<strong>Olive Branch & Gun:</strong> Arafat addressed the UN, stating he carried an olive branch and a freedom fighter's gun, warning against dropping the branch.",
          "<strong>Observer Status:</strong> Secured UN recognition of the PLO as the sole legitimate representative of the Palestinian people."
        ]
      },
      {
        "point": "The significance of PLO activities in Lebanon.",
        "keyFacts": [
          "<strong>Fatahland:</strong> The PLO established a state-within-a-state in South Lebanon, launching rocket attacks and cross-border raids into northern Israel.",
          "<strong>Lebanese Civil War:</strong> PLO military presence destabilized Lebanon's fragile sectarian balance, dragging the country into civil war in 1975."
        ]
      },
      {
        "point": "Israeli reprisals, the invasion of Lebanon (1982) and the results.",
        "keyFacts": [
          "<strong>Operation Peace for Galilee (1982):</strong> Israel invaded Lebanon to crush the PLO, besieging West Beirut and forcing the PLO to relocate to Tunis.",
          "<strong>Sabra & Shatila Massacres:</strong> Allied Christian Phalangist militia killed hundreds of refugees in camps under Israeli control. Ariel Sharon resigned after the Kahan Commission found him indirectly responsible."
        ]
      },
      {
        "point": "The Israeli occupied territories and the First Palestinian Intifada (1987\u201393).",
        "keyFacts": [
          "<strong>Grassroots Uprising:</strong> Sparked in Gaza in December 1987. Featured civil disobedience, boycotts, and youth throwing stones at IDF tanks.",
          "<strong>Iron Fist Policy:</strong> Defense Minister Rabin ordered the IDF to suppress protests with physical force ('Iron Fist'), drawing international condemnation and shifting global opinion."
        ]
      }
    ],
    "subtopic_3_3": [
      {
        "point": "The significance of Arafat's renunciation of terrorism in a speech at the UN (1988).",
        "keyFacts": [
          "<strong>Renunciation & Recognition:</strong> Yasser Arafat renounced terrorism and recognized Israel's right to exist in a Geneva speech, opening direct US-PLO dialogue.",
          "<strong>Two-State Acceptance:</strong> The PLO declared statehood in exile, accepting a two-state solution based on 1967 borders."
        ]
      },
      {
        "point": "Changing superpower policies in the Middle East: US involvement in the Gulf War (1991), and the end of the Cold War.",
        "keyFacts": [
          "<strong>Gulf War (1991):</strong> PLO backed Saddam Hussein, isolating Arafat and cutting off Gulf financial aid, forcing the PLO toward compromise.",
          "<strong>Cold War End:</strong> Soviet collapse cut off aid to Arab states. The US, as sole superpower, used leverage to bring both sides to the Madrid Conference (1991)."
        ]
      },
      {
        "point": "Arafat, Rabin and the Oslo Accords (1993); the setting up of the Palestinian National Authority; Israel-Jordan peace treaty (1994); Oslo II (1995).",
        "keyFacts": [
          "<strong>Oslo I (1993):</strong> Secret talks in Norway led to the Declaration of Principles and Arafat-Rabin handshake. Created the Palestinian Authority for Gaza/Jericho self-rule.",
          "<strong>Oslo II (1995):</strong> Divided the West Bank into Areas A, B, and C.",
          "<strong>Rabin's Assassination:</strong> In November 1995, Prime Minister Rabin was assassinated by right-wing Israeli extremist Yigal Amir, halting the peace process."
        ]
      }
    ]
  };

  // src/scholarly_extensions.js
  var SCHOLARLY_EXTENSIONS = {
    "subtopic_1_1": [
      {
        "title": "British Policy Divergence",
        "body": "Historians debate whether British policy in Palestine from 1945 to 1947 was driven by ideological bias or absolute economic necessity. Exhausted and bankrupt after World War II, Britain struggled to maintain a military force of 100,000 soldiers in Palestine. Scholars like William Roger Louis argue that Britain's primary goal was preserving its post-war alliance with Arab oil-producing nations, which necessitated strict immigration quotas, even at the cost of violent Zionist opposition."
      },
      {
        "title": "The Warning Controversy",
        "body": "Historians debate whether the British authorities received adequate warning of the King David Hotel bombing. The Irgun claimed they telephoned three warning calls 25 minutes prior to the blast. British officials denied receiving direct warning or dismissed it as a hoax, which resulted in the high casualty count of 91 deaths."
      },
      {
        "title": "Legitimacy of Partition",
        "body": "Scholars of international law debate whether the UN had the legal authority under its Charter to partition a territory against the explicit wishes of the majority of its inhabitants. Revisionist historians highlight that Resolution 181 was a recommendation, not a binding treaty, and argue that heavy U.S. diplomatic pressure on small nations (like Haiti and Liberia) was critical to securing the necessary two-thirds majority."
      },
      {
        "title": "The Czech Arms Lifeline",
        "body": "Historian Avi Shlaim argues that the first UN ceasefire in June 1948 was the turning point of the war. While Arab armies remained disorganized and failed to resupply, Israel negotiated a secret arms deal with Czechoslovakia, importing modern rifles and ammunition to outclass the invaders."
      }
    ],
    "subtopic_1_2": [
      {
        "title": "The Collapsed Arab State",
        "body": "Historians debate whether the annexation of the West Bank by Jordan and the control of Gaza by Egypt were acts of solidarity or expansionism. Some scholars argue that King Abdullah of Jordan colluded with Israeli leadership to divide Palestine between themselves, deliberately preventing the establishment of an independent Palestinian state as proposed under UN Resolution 181."
      },
      {
        "title": "Causes of the Palestinian Flight",
        "body": "The causes of the 1948 exodus remain highly contested. 'New Historian' Benny Morris argues that the flight was caused by a combination of fears, military pressure, and localized expulsions (e.g. at Lydda and Ramle), rather than a pre-meditated Zionist master plan. Traditional Arab history stresses systematic expulsions, while traditional Israeli history points to Arab leaders urging citizens to flee temporarily."
      },
      {
        "title": "The Economic Strains of Absorption",
        "body": "The Law of Return in 1950 caused massive population growth but also extreme economic strain. Prime Minister David Ben-Gurion prioritized 'Ingathering of Exiles' over economic stability. To keep the state afloat, Israel implemented a strict austerity regime (Tzena) with food rationing, heavily reliant on US loans and German Holocaust reparations."
      },
      {
        "title": "The Fedayeen Conundrum",
        "body": "Historians debate the extent of Egyptian control over the Gaza Fedayeen. While Israel viewed Fedayeen raids as state-sponsored warfare by Nasser to destroy the Jewish state, some military historians argue that Nasser initially struggled to control local refugee initiatives, using them as diplomatic leverage only after Israel's devastating Gaza Raid in 1955."
      }
    ],
    "subtopic_1_3": [
      {
        "title": "Nasser's Hegemonic Ambition",
        "body": "Scholars of Pan-Arabism debate whether Nasser's leadership of the Arab world was driven by genuine anti-colonial idealism or Egyptian regional dominance. Avi Shlaim suggests that Nasser utilized the Palestinian issue to marginalize rival Arab regimes (such as the Iraqi monarchy) and cement Egypt's position as the hegemon of the Middle East."
      },
      {
        "title": "Nationalisation and Sovereign Rights",
        "body": "International lawyers debate the legality of Nasser's nationalisation of the Suez Canal Company. While Britain and France claimed it was an illegal seizure of international property, Nasser argued that the company was an Egyptian corporation operating under Egyptian law, and that full compensation was offered to shareholders, making it a legitimate act of national sovereignty."
      },
      {
        "title": "The Morality of S\xE8vres Collusion",
        "body": "Historians view the Protocol of S\xE8vres as one of the most notorious conspiracies in modern diplomatic history. Scholars argue that British and French collusion with Israel destroyed their remaining moral authority in the Arab world, casting them as untrustworthy imperialists and accelerating the rise of radical Arab nationalism."
      },
      {
        "title": "The Imperial Shift",
        "body": "The Suez Crisis is widely interpreted by historians as the definitive end of British and French status as global superpowers. By forcing a humiliating withdrawal, US President Eisenhower demonstrated that European powers could no longer act independently in the Middle East without U.S. strategic approval."
      },
      {
        "title": "The Imperial Echoes",
        "body": "Nasser's UAR union was ultimately undermined by Egyptian domination over Syrian political and economic life. Syrian military officers grew frustrated at being sidelined by Cairo, leading to a coup in 1961 that dissolved the union. However, the UAR succeeded in convincing Israel that a united Arab military front was the primary existential threat it had to prepare for."
      }
    ],
    "subtopic_2_1": [
      {
        "title": "Water Wars and Geopolitics",
        "body": "Historians debate whether the Jordan River Water Crisis of 1964 was the primary cause of the Six-Day War. Some scholars, such as Moshe Shemesh, argue that the Arab League's diversion scheme was a direct existential threat to Israel's economy, while others argue it was a political maneuver by Arab states to show anti-Zionist credentials without provoking a direct military clash."
      },
      {
        "title": "The Escalation Spiral",
        "body": "Analysis of the Samu Raid suggests it was a critical tactical error by Israeli leadership. Historians argue that by attacking Jordan (a relatively moderate regime that was secretly cooperating with Israel on security), Israel undermined King Hussein, forcing him to sign a mutual defense pact with Egypt to protect his throne, which ensured Jordan's entry into the 1967 war."
      },
      {
        "title": "Superpower Crisis Mismanagement",
        "body": "Historians debate the Soviet Union's role in fabricating the May 1967 warnings of Israeli troop buildups. Some scholars argue it was a deliberate attempt to draw Egypt into a defensive alliance to protect the Syrian regime, while others suggest it was an intelligence blunder that triggered an uncontrollable escalation spiral that neither Washington nor Moscow wanted."
      },
      {
        "title": "Pre-emptive Strike vs. Aggression",
        "body": "The legality of Operation Focus remains a major debate. Israeli historians defend the strike as a classic case of pre-emptive self-defense under international law, citing the blockade of Tiran and mobilization of Egyptian forces. Palestinian and revisionist historians argue it was a pre-meditated act of expansionist aggression, pointing out that U.S. intelligence had assured Israel that Egypt was not planning an imminent attack."
      },
      {
        "title": "Three-Front Blitzkrieg",
        "body": "Military analysts highlight that the speed of the Israeli ground campaign was due to absolute air supremacy and the demoralization of Egyptian forces following the destruction of their air force. The lack of coordination between Egypt, Syria, and Jordan allowed the IDF to defeat each army sequentially, transforming the regional map in just 144 hours."
      }
    ],
    "subtopic_2_2": [
      {
        "title": "Operation Focus (Moked)",
        "body": "Historians view the pre-emptive air strike on 5 June 1967 as a military masterpiece that decided the war before the ground campaigns began. By destroying the Egyptian Air Force on the ground, Israel secured complete air supremacy, allowing the IDF to operate without threat of air attack and decimate Arab armored columns in the open desert."
      },
      {
        "title": "The Ambiguity of Resolution 242",
        "body": "The drafting of UN Resolution 242 is celebrated as a masterpiece of diplomatic ambiguity. Historians note that the omission of the definite article 'the' before 'territories' in the English version ('withdrawal of Israel armed forces from territories occupied') allowed Israel to argue it was not required to withdraw from all territories, while the French version ('des territoires') implied a complete withdrawal, ensuring decades of conflicting interpretations."
      },
      {
        "title": "Globalizing the Palestinian Struggle",
        "body": "Sociologists and historians argue that the PFLP's airliner hijackings in 1970 represented a tactical shift to asymmetric warfare. Deprived of a state military, Palestinian groups targeted international civilian aviation to force the Western public to acknowledge their refugee grievances, effectively putting the Palestinian issue on the global agenda at the cost of moral condemnation."
      },
      {
        "title": "Black September and State Sovereignty",
        "body": "Historians view the Black September civil war of 1970 as a clash of state sovereignty. King Hussein could not tolerate a armed 'state-within-a-state' that conducted its own foreign policy and hijacked foreign planes on Jordanian soil. The expulsion of the PLO to Lebanon shifted the geopolitical crisis, leading directly to the destabilization of Beirut and the Lebanese Civil War."
      }
    ],
    "subtopic_2_3": [
      {
        "title": "Sadat's Diplomatic Pivot",
        "body": "Historians debate Sadat's motivation for expelling 15,000 Soviet military advisers in July 1972. Traditional Cold War scholars saw it as a blunder that weakened Egypt's military. However, Middle East specialists argue it was a brilliant diplomatic pivot designed to signal to the United States that Egypt was willing to leave the Soviet orbit, forcing Washington to engage in peace negotiations."
      },
      {
        "title": "The Intelligence 'Concept' Failure",
        "body": "The Yom Kippur surprise is studied as a classic intelligence failure. Israeli military intelligence operated under 'The Concept'\u2014the firm belief that Egypt would not attack until it acquired long-range Scud missiles to hit Israeli cities. This dogmatic assumption caused analysts to dismiss massive troop movements along the Suez Canal as routine exercises."
      },
      {
        "title": "Superpower Nuclear Alert",
        "body": "The Yom Kippur War brought the US and USSR closer to direct military confrontation than at any point since the Cuban Missile Crisis. When the USSR threatened to send troops unilaterally to enforce a ceasefire and save the encircled Egyptian Third Army, the US raised its military alert status to DEFCON 3, demonstrating how Middle Eastern conflicts could trigger global nuclear brinkmanship."
      },
      {
        "title": "The Rise of Oil Weaponry",
        "body": "The 1973 oil embargo marked a fundamental shift in global economic power. Historians argue that OPEC successfully demonstrated that control over energy resources could override Western military dominance, forcing European nations and Japan to adopt pro-Arab foreign policies to secure oil supplies, permanently altering Western diplomatic stances."
      }
    ],
    "subtopic_3_1": [
      {
        "title": "Energy Dependence and Diplomacy",
        "body": "Scholars argue that the 1973 global energy crisis forced a revolution in U.S. foreign policy. Before 1973, the US tolerated the Israeli occupation of Arab lands. After the oil shock, the Nixon and Ford administrations realized that Middle Eastern war threatened the Western capitalist economy, making diplomatic mediation a vital national security priority."
      },
      {
        "title": "Kissinger's Step-by-Step Diplomacy",
        "body": "Historians assess Henry Kissinger's 'step-by-step' shuttle diplomacy as both a brilliant stabilizing action and a structural limitation. While he successfully separated the armies and reopened the Suez Canal, critics argue he deliberately excluded the Soviet Union and ignored the core Palestinian issue, creating a separate peace that left wider regional grievances unresolved."
      },
      {
        "title": "Sadat's Address: Peace or Betrayal?",
        "body": "Anwar Sadat's historic trip to Jerusalem in 1977 remains highly polarized in Middle Eastern historiography. In the West and Israel, it is celebrated as an act of immense courage. In the Arab world, it was widely condemned as a betrayal of Arab solidarity and a separate peace that abandoned the Palestinians in exchange for recovering the Sinai Peninsula."
      },
      {
        "title": "Carter's Personal Diplomacy",
        "body": "Jimmy Carter's personal intervention was highly important because he isolated the Israeli and Egyptian delegations from the media at the secluded Camp David retreat, preventing public grandstanding. Furthermore, Carter personally drafted and revised over 20 versions of the treaty text, resolving disputes over Sinai settlements and Palestinian autonomy, which kept Begin and Sadat from walking out of the talks."
      },
      {
        "title": "The Assassin's Motive",
        "body": "The Treaty of Washington (1979) created a deep domestic crisis in Egypt. Historians argue that Sadat's marginalization of Islamic and nationalist groups, combined with his peace treaty, led directly to his assassination in 1981 by army officers affiliated with Egyptian Islamic Jihad, illustrating the high personal cost of Middle Eastern peacemaking."
      }
    ],
    "subtopic_3_2": [
      {
        "title": "The PLO's International Status",
        "body": "Arafat's 1974 UN address is viewed as a landmark in diplomatic history. Scholars argue that by presenting himself with both the 'olive branch' and the 'freedom fighter's gun,' Arafat successfully forced the UN to transition the Palestinian issue from a mere 'refugee problem' into a legitimate national self-determination movement."
      },
      {
        "title": "The Fatahland Destabilization",
        "body": "Historians debate the PLO's role in the outbreak of the Lebanese Civil War in 1975. Some scholars argue that the PLO's heavily armed presence in southern Lebanon ('Fatahland') acted as a catalyst, upsetting the delicate Christian-Muslim sectarian balance and drawing Israeli reprisal strikes that devastated Lebanese sovereignty."
      },
      {
        "title": "The Sabra and Shatila Investigation",
        "body": "The Kahan Commission's findings of 'indirect responsibility' against Ariel Sharon are highly debated by historians. Critical scholars argue that the Israeli military had surrounded the camps and illuminated them with flares, suggesting a higher level of awareness and complicity in the Phalangist atrocities than the official report admitted."
      },
      {
        "title": "The Grassroots Intifada",
        "body": "Historians emphasize that the First Intifada was a spontaneous, internal uprising that caught the exiled PLO leadership in Tunis completely by surprise. The uprising shifted the center of gravity of Palestinian resistance from external guerrilla warfare back to the local population in the West Bank and Gaza, forcing the PLO to seek a diplomatic settlement."
      }
    ],
    "subtopic_3_3": [
      {
        "title": "Arafat's Decisive Shift",
        "body": "Arafat's 1988 renunciation of terrorism in Geneva is interpreted by historians as a pragmatic surrender to geopolitical reality. Realizing the First Intifada could not achieve independence through stone-throwing alone, Arafat recognized Israel to open direct talks with the US, effectively accepting the two-state solution."
      },
      {
        "title": "The Gulf War Impact on the PLO",
        "body": "Arafat's support for Saddam Hussein during the 1991 Gulf War is widely considered his greatest diplomatic error. Historians note that this choice isolated the PLO, led to the expulsion of 300,000 Palestinians from Kuwait, and cut off vital financial subsidies from Gulf states, forcing a near-bankrupt PLO to accept Israel's terms at Oslo."
      },
      {
        "title": "The Oslo Framework Flaws",
        "body": "Scholars like Edward Said have heavily criticized the Oslo Accords as a 'Palestinian Versailles.' They argue the accords created a fragmented, non-contiguous authority under Israeli security control while deferring the most critical 'final status' issues (Jerusalem, refugees, settlements), which allowed Israel to double its settlement population during the peace process."
      },
      {
        "title": "The Assassin's Motive",
        "body": "Rabin's assassination in November 1995 by right-wing extremist Yigal Amir is viewed by political scientists as a tragic demonstration of veto violence. Amir successfully vetoed the peace process by killing its primary Israeli architect, proving that small, violent extremist factions on either side could derail regional diplomatic breakthroughs."
      }
    ]
  };

  // src/contemporary_sources.js
  var CONTEMPORARY_SOURCES = {
    "subtopic_1_1": {
      "title": "Source A: The Balfour Declaration (2 November 1917)",
      "excerpt": "\u201CHis Majesty's Government view with favour the establishment in Palestine of a national home for the Jewish people, and will use their best endeavours to facilitate the achievement of this object, it being clearly understood that nothing shall be done which may prejudice the civil and religious rights of existing non-Jewish communities in Palestine...\u201D",
      "type": "Official British Diplomatic Letter",
      "insight": "This document laid the foundation for the British Mandate's core conflict. By promising support for a Jewish national home while simultaneously pledging to protect the rights of the existing Arab majority, Britain created a dual obligation that proved impossible to reconcile, leading to violent clashes and the ultimate British withdrawal in 1948."
    },
    "subtopic_1_2": {
      "title": "Source B: UN General Assembly Resolution 194, Article 11 (11 December 1948)",
      "excerpt": "\u201CResolves that the refugees wishing to return to their homes and live at peace with their neighbours should be permitted to do so at the earliest practicable date, and that compensation should be paid for the property of those choosing not to return and for loss of or damage to property...\u201D",
      "type": "United Nations Resolution",
      "insight": "This resolution established the international legal framework for the Palestinian refugee 'Right of Return'. While Palestinians and Arab nations cited it as an absolute right for over 700,000 refugees displaced by the war, Israel rejected mass return, arguing it would destroy the Jewish majority of the state, leaving the refugees as a permanent, stateless population in camps."
    },
    "subtopic_1_3": {
      "title": "Source C: President Gamal Abdel Nasser's Nationalisation Speech (26 July 1956)",
      "excerpt": "\u201CThe Suez Canal is an Egyptian canal built by Egyptians... Today, we nationalise the Suez Canal Company. We shall run the Canal ourselves, for the benefit of Egypt. We will build the Aswan High Dam with our own funds, and we will not accept Western dictate or humiliation. The canal will be ours, run by our own hands...\u201D",
      "type": "Public Broadcast Speech",
      "insight": "Nasser's speech was a direct challenge to British and French colonial authority. By nationalising the canal to fund the Aswan High Dam, Nasser asserted Egyptian sovereignty and Pan-Arab pride, which provoked Britain, France, and Israel into the secret S\xE8vres collusion and subsequent military invasion."
    },
    "subtopic_2_1": {
      "title": "Source D: Prime Minister Levi Eshkol's Knesset Address on the War's Outbreak (12 June 1967)",
      "excerpt": "\u201CThe state of Israel stood alone in a struggle for its very survival against a coalition of Arab nations seeking our complete destruction. The blockade of the Straits of Tiran and the mobilization of Egyptian forces in Sinai left us no choice. Today, the borders have changed, Jerusalem is reunited, and the IDF stands on secure lines...\u201D",
      "type": "Parliamentary Address",
      "insight": "This speech reflects the official Israeli perspective framing the Six-Day War as a pre-emptive strike of self-defense against existential threats. The capture of Sinai, Gaza, the West Bank, and the Golan Heights transformed the regional balance of power, creating new military buffer zones that Israel declared essential for national security."
    },
    "subtopic_2_2": {
      "title": "Source E: UN Security Council Resolution 242 (22 November 1967)",
      "excerpt": "\u201CEmphasizing the inadmissibility of the acquisition of territory by war and the need to work for a just and lasting peace... Affirms that the fulfillment of Charter principles requires: (i) Withdrawal of Israel armed forces from territories occupied in the recent conflict; (ii) Respect for and acknowledgment of the sovereignty, territorial integrity and political independence of every State...\u201D",
      "type": "UN Security Council Resolution",
      "insight": "Resolution 242 created the famous 'Land for Peace' formula that dominated all future peace talks. However, its deliberate omission of the word 'the' before 'territories' in the English version allowed Israel to argue it did not have to return all lands, while Arab states demanded complete withdrawal, leading to decades of diplomatic standoff."
    },
    "subtopic_2_3": {
      "title": "Source F: President Anwar Sadat's Radio and TV Address to the Nation (6 October 1973)",
      "excerpt": "\u201COur armed forces have crossed the Suez Canal and breached the Bar Lev Line. This is the day we restore our national dignity and reclaim our occupied lands in Sinai. For six years, we have endured the humiliation of occupation while the world remained silent. Today, we show that the Egyptian soldier is capable of fighting...\u201D",
      "type": "War-Time National Broadcast",
      "insight": "Sadat's war speech aimed to shatter the myth of Israeli invincibility and restore Egyptian pride. Even though the military campaign ended in a stalemate, the initial success of crossing the Suez Canal gave Sadat the domestic legitimacy and diplomatic leverage needed to negotiate from a position of strength, eventually leading to peace talks."
    },
    "subtopic_3_1": {
      "title": "Source G: President Anwar Sadat's Address to the Israeli Knesset (20 November 1977)",
      "excerpt": "\u201CI come to you today on solid ground, to shape a new life, to establish peace... I tell you quite frankly, there can be no peace with the occupation of our land. We do not seek a separate peace between Egypt and Israel. We seek a just peace that restores all Arab lands and guarantees the rights of the Palestinian people to self-determination...\u201D",
      "type": "Historic Legislative Speech",
      "insight": "Sadat's unprecedented speech directly to the Israeli parliament bypassed decades of Arab boycotts. While Begin and the Israeli public welcomed the gesture, Sadat's demand for full withdrawal and Palestinian rights clashed with Begin's Likud ideology, setting the stage for the intense, isolated compromise mediated by Jimmy Carter at Camp David."
    },
    "subtopic_3_2": {
      "title": "Source H: Unified National Leadership of the Intifada, Communiqu\xE9 No. 1 (January 1988)",
      "excerpt": "\u201CO people of the stones, people of the strike and the demonstrations! We call upon you to rise up against the Zionist occupiers. Let us close our shops, boycott Israeli goods, refuse to pay taxes to the military administration, and throw stones at their patrol vehicles. We will not stop until our independent Palestinian state is established...\u201D",
      "type": "Underground Grassroots Leaflet",
      "insight": "This communiqu\xE9 highlights the grassroots, localized nature of the First Intifada. By organizing strikes, tax boycotts, and unarmed stone-throwing, local Palestinian committees bypassed the exiled PLO leadership in Tunis and forced the world (and Israel) to confront the realities of the occupation, shifting the dynamic of the conflict."
    },
    "subtopic_3_3": {
      "title": "Source I: The Oslo Letters of Mutual Recognition (9 September 1993)",
      "excerpt": "\u201CDear Mr. Prime Minister, the PLO recognizes the right of the State of Israel to exist in peace and security... / Dear Mr. Chairman, the Government of Israel has decided to recognize the PLO as the representative of the Palestinian people and commence negotiations...\u201D",
      "type": "Formal Diplomatic Correspondence",
      "insight": "These letters exchanged between Yasser Arafat and Yitzhak Rabin were the diplomatic foundation of the Oslo Accords. By recognizing each other's legitimacy for the first time, they ended decades of mutual denial (where Israel labeled the PLO a terror group and the PLO denied Israel's right to exist), enabling the signing of the Declaration of Principles."
    }
  };

  // src/lessons.js
  function renderSpecChecklistCard(subtopicId, checklist) {
    if (!checklist || checklist.length === 0) return "";
    let checkedStates = {};
    try {
      const saved = localStorage.getItem("edexcel_spec_checklist");
      if (saved) {
        checkedStates = JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    const itemsHtml = checklist.map((item, idx) => {
      const key = `${subtopicId}_${idx}`;
      const isChecked = checkedStates[key] || false;
      const keyFactsHtml = item.keyFacts.map((fact) => `
      <li style="margin-bottom: 8px; font-size: 0.88rem; line-height: 1.5; color: var(--text-muted); position: relative; padding-left: 18px; list-style-type: none;">
        <span style="position: absolute; left: 0; top: 0; color: var(--primary); font-size: 1.1rem; line-height: 1;">&bull;</span>
        ${fact}
      </li>
    `).join("");
      return `
      <div class="spec-checklist-item ${isChecked ? "checked" : ""}" data-key="${key}">
        <div class="spec-checklist-main" style="display: flex; align-items: flex-start; gap: 12px; width: 100%;">
          <div class="spec-checklist-checkbox">
            <i class="fa-solid fa-check"></i>
          </div>
          <div class="spec-checklist-text" style="font-weight: 600; font-size: 0.95rem; color: var(--text-main);">${item.point}</div>
        </div>
        <div class="spec-checklist-expansion">
          <ul style="margin: 0; padding: 0;">
            ${keyFactsHtml}
          </ul>
        </div>
      </div>
    `;
    }).join("");
    return `
    <div class="spec-checklist-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <h4 class="spec-checklist-title" style="display: flex; align-items: center; gap: 8px;">
        <i class="fa-solid fa-clipboard-list" style="color: var(--primary);"></i> Official Spec Checklist: Topic study goals
      </h4>
      <p class="spec-checklist-subtitle" style="margin-top: 6px; font-size: 0.85rem; color: var(--text-muted); line-height: 1.4;">
        Tick each official Edexcel specification point to expand the key facts you need for the exam:
      </p>
      <div class="spec-checklist-items">
        ${itemsHtml}
      </div>
    </div>
  `;
  }
  function renderMasteryView(subtopicId) {
    const container = document.getElementById("mastery-content-container");
    if (!container) return;
    const data = LESSONS_DATA[subtopicId];
    if (!data) {
      container.innerHTML = `
      <div class="mastery-card" style="text-align: center; padding: 40px;">
        <i class="fa-solid fa-person-digging" style="font-size: 3rem; color: var(--primary); margin-bottom: 20px;"></i>
        <h3 class="mastery-card-title" style="border: none;">Lessons In Development</h3>
        <p class="mastery-card-body" style="color: var(--text-muted);">
          Lesson content is currently being drafted for this Key Topic. 
          Please navigate to <strong>Topic 1.1: The British withdrawal and the creation of Israel</strong> or <strong>Topic 1.2: Aftermath of the 1948-49 war</strong> in the sidebar to test the active prototypes!
        </p>
      </div>
    `;
      return;
    }
    let doNowHtml = "";
    if (data.doNowStarter) {
      const dn = data.doNowStarter;
      let prevLessonLinkHtml = "";
      if (dn.prevSubtopicId && dn.prevSubtopicTitle) {
        prevLessonLinkHtml = `
        <div style="margin-bottom: 14px; font-size: 0.88rem;">
          <i class="fa-solid fa-arrow-left" style="color: var(--primary);"></i> 
          Prior Topic Retrieval: 
          <button class="do-now-prev-link-btn" data-prev-id="${dn.prevSubtopicId}" style="background: none; border: none; color: var(--primary); font-weight: 700; text-decoration: underline; cursor: pointer; padding: 0; font-size: 0.88rem;">
            ${dn.prevSubtopicTitle}
          </button>
        </div>
      `;
      } else {
        prevLessonLinkHtml = `
        <div style="margin-bottom: 14px; font-size: 0.88rem; color: var(--accent); font-weight: 700;">
          <i class="fa-solid fa-star"></i> Course Introduction Retrieval
        </div>
      `;
      }
      doNowHtml = `
      <div class="mastery-card do-now-card" style="max-width: 800px; margin: 18px auto 24px auto; border-top: 4px solid var(--accent); position: relative; padding: 24px; overflow: visible !important;">
        <div style="position: absolute; top: -12px; left: 16px; background: var(--accent); color: #000; font-size: 0.68rem; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 12px; letter-spacing: 0.8px; box-shadow: var(--shadow-sm); z-index: 10;">
          \u26A1 DO NOW starter (5-10 MINS)
        </div>
        
        <div class="mastery-card-body" style="padding-top: 8px; margin: 0;">
          ${prevLessonLinkHtml}
          
          <div class="do-now-split-container" style="display: flex; gap: 24px; flex-wrap: wrap;">
            
            <!-- Left Side: Visual Source & See-Think-Wonder -->
            <div class="do-now-left-col" style="flex: 1; min-width: 280px; display: flex; flex-direction: column; gap: 12px;">
              <div>
                <div style="background: #000; border-radius: var(--border-radius-sm); overflow: hidden; padding: 8px; border: 1px solid var(--border-glass); text-align: center;">
                  <img src="${dn.image}" alt="Starter Image" style="max-width: 100%; max-height: 170px; object-fit: contain; border-radius: var(--border-radius-sm);" 
                    onerror="const fallback = '${getFallbackUrl(dn.image) || ""}'; if (fallback && this.src !== fallback) { this.referrerPolicy = 'no-referrer'; this.src = fallback; } else { this.style.display='none'; }">
                  <div class="do-now-provenance-box" style="font-size: 0.72rem; color: #f8fafc; font-weight: 500; font-style: normal; margin-top: 8px; text-align: left; background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); padding: 8px 10px; border-radius: var(--border-radius-sm); line-height: 1.4;">
                    <strong style="color: #cbd5e1;">Source Provenance:</strong> ${dn.provenance}
                    ${dn.sourceUrl ? `
                      <div style="margin-top: 6px; border-top: 1px dashed var(--border-glass); padding-top: 4px;">
                        <a href="${dn.sourceUrl}" target="_blank" style="color: var(--primary); text-decoration: underline; display: inline-flex; align-items: center; gap: 4px;"><i class="fa-solid fa-arrow-up-right-from-square"></i> View Original Webpage</a>
                      </div>
                    ` : ""}
                  </div>
                </div>
                
                <!-- See Think Wonder Prompt Box -->
                <div style="background: rgba(245, 158, 11, 0.04); border: 1px dashed rgba(245, 158, 11, 0.2); padding: 10px; border-radius: var(--border-radius-sm); font-size: 0.78rem; line-height: 1.35; margin-top: 10px;">
                  <strong style="color: var(--accent); display: block; margin-bottom: 4px; font-size: 0.8rem;"><i class="fa-solid fa-lightbulb"></i> Inference: See, Think, Wonder</strong>
                  <ul style="margin: 0; padding-left: 14px; color: var(--text-muted); display: flex; flex-direction: column; gap: 2px;">
                    <li><strong>See:</strong> ${dn.seeThinkWonder.see}</li>
                    <li><strong>Think:</strong> ${dn.seeThinkWonder.think}</li>
                    <li><strong>Wonder:</strong> ${dn.seeThinkWonder.wonder}</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- Right Side: 5 Factual Recall Questions -->
            <div class="do-now-right-col" style="flex: 1.2; min-width: 300px; display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; flex-direction: column; gap: 10px;">
                <div style="font-size: 0.78rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; border-bottom: 1px solid var(--border-glass); padding-bottom: 4px; margin-bottom: 2px;">
                  \u26A1 Factual Recall Challenge
                </div>
                <ol class="do-now-questions-list" style="margin: 0; padding-left: 20px; color: var(--text-main); display: flex; flex-direction: column; gap: 8px;">
                  ${dn.recallQuestions.map((q, idx) => `
                    <li style="font-size: 0.88rem; line-height: 1.45;">
                      ${q.question}
                    </li>
                  `).join("")}
                </ol>
              </div>
            </div>
            
          </div>
          
          <!-- Bottom Section: Reveal Do Now Answers Button Row -->
          <div style="margin-top: 16px; border-top: 1px solid var(--border-glass); padding-top: 16px;">
            <button class="mastery-btn do-now-reveal-btn" style="background: rgba(245, 158, 11, 0.1); border: 1px solid var(--accent); color: var(--accent); font-weight: bold; font-size: 0.82rem; padding: 8px 16px; border-radius: 16px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
              <i class="fa-solid fa-graduation-cap"></i> Reveal Do Now Guide Answers
            </button>
            
            <!-- Hidden structured responses drawer -->
            <div class="do-now-answers-drawer" style="display: none; margin-top: 16px; padding: 16px; background: rgba(34, 197, 94, 0.04); border-left: 4px solid var(--success); border-radius: var(--border-radius-sm); border-top: 1px solid var(--border-glass); border-right: 1px solid var(--border-glass); border-bottom: 1px solid var(--border-glass);">
              <h4 style="margin: 0 0 12px 0; color: var(--success); font-size: 0.95rem; display: flex; align-items: center; gap: 6px;"><i class="fa-solid fa-circle-check"></i> Retrieval Answer Key:</h4>
              <div style="display: flex; flex-direction: column; gap: 12px; font-size: 0.88rem; line-height: 1.45;">
                ${dn.recallQuestions.map((q, idx) => `
                  <div>
                    <strong style="color: var(--success); display: block; font-size: 0.82rem;">Answer ${idx + 1}:</strong>
                    <p style="margin: 4px 0 0 0; color: var(--text-base);">${q.answer}</p>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    `;
    } else if (subtopicId === "subtopic_1_1") {
      doNowHtml = `
      <div class="mastery-card background-context-card" style="max-width: 800px; margin: 18px auto 24px auto; border-left: 4px solid var(--primary); background: rgba(59, 130, 246, 0.03); position: relative; padding: 24px; overflow: visible !important;">
        <div style="position: absolute; top: -12px; left: 16px; background: var(--primary); color: var(--text-inverse); font-size: 0.68rem; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 12px; letter-spacing: 0.8px; box-shadow: var(--shadow-sm); z-index: 10;">
          \u{1F4D6} Prior Context & Background (Pre-1945)
        </div>
        <div class="mastery-card-body" style="padding-top: 8px; margin: 0; font-size: 0.92rem; line-height: 1.55; color: var(--text-base);">
          <p style="margin: 0 0 12px 0;">
            To understand the crisis in 1945, you must know what happened under the British Mandate since the end of the First World War. In <strong>1917</strong>, Britain issued the <strong>Balfour Declaration</strong>, promising to support a 'national home for the Jewish people' in Palestine. Following the collapse of the Ottoman Empire, the <strong>League of Nations (1922)</strong> granted Britain official administrative control (the Mandate) over the territory.
          </p>
          <p style="margin: 0;">
            Throughout the 1920s and 1930s, escalating Jewish immigration (driven by rising European antisemitism) caused intense Palestinian Arab fear of displacement, culminating in the <strong>Arab Revolt (1936\u201339)</strong>. To restore order, Britain issued the <strong>1939 White Paper</strong>, which placed a strict limit on Jewish immigration (75,000 over five years) and restricted land sales. Consequently, by 1945, Britain was caught in an impossible trap: Zionists were furious that immigration was blocked during the Holocaust, while Arab leaders demanded immediate independence and an end to all Zionist expansion.
          </p>
        </div>
      </div>
    `;
    }
    let stepsHtml = "";
    const matchedFigures = /* @__PURE__ */ new Set();
    data.steps.forEach((step, index) => {
      const processedBodyHtml = injectInlineBios(step.bodyHtml, matchedFigures);
      let scholarlyHtml = "";
      const dbScholarly = SCHOLARLY_EXTENSIONS[subtopicId]?.[index];
      const scholarlyDepth = dbScholarly || step.scholarlyDepth;
      if (scholarlyDepth) {
        let scholarlyImgHtml = "";
        if (scholarlyDepth.image) {
          let provenanceHtml = "";
          if (scholarlyDepth.imageProvenance) {
            provenanceHtml = `
            <div class="scholarly-image-provenance" style="font-size: 0.8rem; color: #cbd5e1; margin-top: 8px; font-weight: 500; line-height: 1.4; max-width: 600px; margin-left: auto; margin-right: auto; text-align: center; background: rgba(0,0,0,0.3); border: 1px solid var(--border-glass); padding: 8px 12px; border-radius: 4px; box-sizing: border-box;">
              <strong style="color: inherit;">Provenance:</strong> ${scholarlyDepth.imageProvenance}
            </div>
          `;
          }
          scholarlyImgHtml = `
          <div class="scholarly-image-wrapper" style="margin-bottom: 16px; text-align: center;">
            <img src="${scholarlyDepth.image}" alt="${scholarlyDepth.imageAlt || "Scholarly Source"}" class="scholarly-source-img" style="max-width: 100%; max-height: 300px; object-fit: contain; border-radius: var(--border-radius-sm); border: 1px solid var(--border-glass); box-shadow: var(--shadow-sm);" 
              onerror="const fallback = '${getFallbackUrl(scholarlyDepth.image) || ""}'; if (fallback && this.src !== fallback) { this.referrerPolicy = 'no-referrer'; this.src = fallback; } else { this.style.display='none'; }">
            ${provenanceHtml}
          </div>
        `;
        }
        let scholarlySourceHtml = "";
        if (scholarlyDepth.vietnameseSource) {
          const vs = scholarlyDepth.vietnameseSource;
          scholarlySourceHtml = `
          <div class="scholarly-vietnamese-source" style="margin-top: 16px; padding: 14px; background: rgba(0, 0, 0, 0.2); border-left: 4px solid var(--accent); border-radius: var(--border-radius-sm);">
            <strong style="display: block; margin-bottom: 6px; color: var(--accent); font-size: 0.85rem; text-transform: uppercase;">
              <i class="fa-solid fa-language"></i> Authentic Perspective: ${vs.perspective}
            </strong>
            <p class="vietnamese-text" style="font-family: inherit; font-size: 0.9rem; color: var(--text-base); margin: 0 0 8px 0; font-style: normal; line-height: 1.4;">
              "${vs.originalText}"
            </p>
            <p class="english-translation" style="font-size: 0.85rem; color: var(--text-muted); margin: 0 0 8px 0; font-style: italic; line-height: 1.4; border-top: 1px dashed var(--border-glass); padding-top: 8px;">
              <strong style="color: inherit;">Translation:</strong> "${vs.translation}"
            </p>
            <p class="source-analysis" style="font-size: 0.82rem; color: var(--text-muted); margin: 0; line-height: 1.45;">
              <strong style="color: inherit;">Historical Context:</strong> ${vs.analysis}
            </p>
          </div>
        `;
        }
        scholarlyHtml = `
        <details class="scholarly-extension" style="margin-top: 16px;">
          <summary class="scholarly-summary">
            <i class="fa-solid fa-graduation-cap"></i> Scholarly Perspective
          </summary>
          <div class="scholarly-content" style="margin-top: 12px; font-size: 0.88rem; line-height: 1.5; color: var(--text-muted);">
            ${scholarlyImgHtml}
            <strong style="display: block; margin-bottom: 6px; color: var(--primary); font-size: 0.95rem;">${scholarlyDepth.title.replace(/^(Scholarly Perspective|Scholarly Insight|Perspective):\s*/i, "")}</strong>
            <p style="margin: 0 0 12px 0; font-style: italic;">${scholarlyDepth.body}</p>
            ${scholarlySourceHtml}
          </div>
        </details>
      `;
      }
      if (step.isSplit) {
        stepsHtml += `
        <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
          <h3 class="mastery-card-title">${step.title}</h3>
          <div class="mastery-split-layout">
            ${processedBodyHtml}
          </div>
          ${scholarlyHtml}
        </div>
      `;
      } else {
        stepsHtml += `
        <div class="mastery-card" style="max-width: 800px; margin: 0 auto 20px auto;">
          <h3 class="mastery-card-title">${step.title}</h3>
          <div class="mastery-card-body card-content">
            ${processedBodyHtml}
          </div>
          ${scholarlyHtml}
        </div>
      `;
      }
    });
    let dualHtml = "";
    if (data.dualPerspective) {
      dualHtml = `
      <div class="dual-perspective-card left-active"
           data-left-headline="${data.dualPerspective.leftHeadline}"
           data-left-text="${data.dualPerspective.leftText}"
           data-right-headline="${data.dualPerspective.rightHeadline}"
           data-right-text="${data.dualPerspective.rightText}">
         <h3 class="dual-perspective-neutral-title">${data.dualPerspective.neutralTitle}</h3>
        <div class="dual-perspective-narrative-box">
          <h4 class="dual-perspective-headline">${data.dualPerspective.leftHeadline}</h4>
          <p class="dual-perspective-text">${data.dualPerspective.leftText}</p>
        </div>
        <div class="dual-perspective-slider-row">
          <span class="perspective-label label-left active">
            <svg class="flag-icon" viewBox="0 0 220 160" style="width: 20px; height: 14px; border-radius: 2px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 1px 3px rgba(0,0,0,0.2); display: inline-block; vertical-align: middle; margin-right: 6px;">
              <rect width="220" height="160" fill="white"/>
              <rect y="15" width="220" height="25" fill="#0038b8"/>
              <rect y="120" width="220" height="25" fill="#0038b8"/>
              <polygon points="110,48 128,80 92,80" fill="none" stroke="#0038b8" stroke-width="5.5"/>
              <polygon points="110,92 128,60 92,60" fill="none" stroke="#0038b8" stroke-width="5.5"/>
            </svg>
            Israeli Perspective
          </span>
          <div class="slider-wrapper">
            <input type="range" class="perspective-range-slider" min="0" max="100" value="0">
          </div>
          <span class="perspective-label label-right">
            <span style="display: inline-flex; align-items: center; gap: 4px; vertical-align: middle; margin-right: 6px;">
              <svg class="flag-icon" viewBox="0 0 24 12" style="width: 20px; height: 14px; border-radius: 2px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 1px 3px rgba(0,0,0,0.2); display: inline-block;">
                <rect width="24" height="12" fill="#007a3d"/>
                <rect width="24" height="8" fill="#fff"/>
                <rect width="24" height="4" fill="#000"/>
                <polygon points="0,0 0,12 8,6" fill="#e4312b"/>
              </svg>
              <span style="color: var(--text-muted); font-size: 0.8rem;">/</span>
              <svg class="flag-icon" viewBox="0 0 24 12" style="width: 20px; height: 14px; border-radius: 2px; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 1px 3px rgba(0,0,0,0.2); display: inline-block;">
                <rect width="24" height="4" fill="#c00"/>
                <rect y="4" width="24" height="4" fill="#fff"/>
                <rect y="8" width="24" height="4" fill="#000"/>
                <polygon points="12,5 13,6.5 12.5,7.5 11.5,7.5 11,6.5" fill="#c90"/>
              </svg>
            </span>
            Arab Perspective
          </span>
        </div>
        ${data.dualPerspective.tipHtml || ""}
      </div>
    `;
    }
    let chainHtml = "";
    if (data.narrativeChain) {
      chainHtml = `
      <div class="narrative-chain-container" style="max-width: 800px; margin: 0 auto 24px auto;">
        <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">\u26D3\uFE0F Build the Narrative Chain</h3>
        <p class="chain-instruction">Edexcel examiners look for causal connections. Click the blocks in chronological order to build a perfect historical chain!</p>
        
        <div class="chain-boxes" id="narrative-chain-boxes">
          <!-- Scrambled blocks populated programmatically -->
        </div>
        
        <div class="chain-feedback" id="narrative-chain-feedback"></div>
      </div>
    `;
    }
    let kcQuestionsHtml = "";
    data.knowledgeCheck.forEach((q, index) => {
      kcQuestionsHtml += `
      <div class="quiz-question-item">
        <div class="quiz-question-text">${index + 1}. ${q.question}</div>
        <div class="quiz-answer-text" id="ans-${index + 1}">Answer: ${q.answer}</div>
      </div>
    `;
    });
    let kcHtml = "";
    if (data.knowledgeCheck.length > 0) {
      kcHtml = `
      <div class="mastery-card" id="mastery-quiz-card" style="max-width: 800px; margin: 0 auto 24px auto;">
        <h3 class="mastery-card-title">Knowledge Check</h3>
        <div class="mastery-card-body">
          <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
            Test your memory on the exact facts examiners are looking for!
          </p>
          
          <div class="quiz-questions-list">
            ${kcQuestionsHtml}
          </div>
        </div>
      </div>
    `;
    }
    let impHtml = "";
    if (data.importanceAnalyser) {
      impHtml = `
      <div class="mastery-card" style="max-width: 800px; margin: 0 auto 24px auto;">
        <h3 class="mastery-card-title">\u{1F50D} 8-Mark Skill: The Importance Analyser</h3>
        <p style="font-style: italic; margin-top: 0; margin-bottom: 20px; color: var(--text-muted);">
          Click the card below to flip it and view the examiner's model analysis.
        </p>
        
        <div class="importance-flip-card" id="importance-analyser-card">
          <div class="importance-card-inner">
            <div class="importance-card-front">
              <i class="fa-solid fa-rotate" style="font-size: 2rem; color: var(--primary); margin-bottom: 12px;"></i>
              <strong>Question:</strong> ${data.importanceAnalyser.question}
              <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 12px;">(Click Card to Flip)</span>
            </div>
            <div class="importance-card-back">
              <strong>Examiner Analysis:</strong> ${data.importanceAnalyser.answer}
            </div>
          </div>
        </div>
      </div>
    `;
    }
    let vaultItemsHtml = "";
    data.questionVault.forEach((q, index) => {
      vaultItemsHtml += `
      <div class="vault-item">
        <button class="vault-question-btn" data-vault-idx="${index}">
          <span>${q.question}</span>
          <i class="fa-solid fa-chevron-down"></i>
        </button>
        <div class="vault-answer-panel">
          ${q.answer}
        </div>
      </div>
    `;
    });
    let vaultHtml = "";
    if (data.questionVault.length > 0) {
      vaultHtml = `
      <div class="exam-question-vault" style="max-width: 800px; margin: 0 auto 24px auto;">
        <h3 class="mastery-card-title" style="border: none; margin-bottom: 6px;">\u{1F4DD} Test Your Knowledge (Exam Question Vault)</h3>
        <p style="font-style: italic; margin-top: 0; margin-bottom: 16px; color: var(--text-muted);">
          Click each question to view the model response blueprint.
        </p>
        <div class="vault-items">
          ${vaultItemsHtml}
        </div>
      </div>
    `;
    }
    const video = VIDEOS_DATA[subtopicId];
    let videoHtml = "";
    if (video) {
      const cleanDuration = video.duration.startsWith("0") ? video.duration.slice(1) : video.duration;
      const questionsList2 = video.questions.map((q) => `<li>${q}</li>`).join("");
      videoHtml = `
      <div class="lesson-video-wrapper" style="margin-top: 14px; border-top: 1px dashed var(--border-glass); padding-top: 12px;">
        <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-main); margin: 0 0 10px 0;">
          <i class="fa-brands fa-youtube" style="color: #ef4444; font-size: 1.1rem; margin-right: 6px; vertical-align: middle;"></i>
          Watch this YouTube video on "${data.headerTitle.split(":").pop().trim()}" by ${video.production_source}: 
          <a href="${video.youtube_url}" target="_blank" style="color: var(--primary); font-weight: bold; text-decoration: underline; transition: color var(--transition-fast);" onmouseover="this.style.color='var(--primary-hover)'" onmouseout="this.style.color='var(--primary)'">
            "${video.video_title}"
          </a> (${cleanDuration} mins).
        </p>
        
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-glass); border-radius: var(--border-radius-sm); padding: 10px 14px;">
          <strong style="font-size: 0.75rem; color: var(--accent); display: block; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;">
            <i class="fa-solid fa-clipboard-question"></i> Video Study Questions:
          </strong>
          <ul style="margin: 0; padding-left: 20px; font-size: 0.8rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 4px; line-height: 1.45;">
            ${questionsList2}
          </ul>
        </div>
      </div>
    `;
    }
    let summaryHtml = "";
    let revisionQuestionsHtml = "";
    const extensionData = LESSON_EXTENSIONS[subtopicId];
    if (extensionData) {
      if (extensionData.wrapUpSummary && extensionData.wrapUpSummary.length > 0) {
        const summaryItems = extensionData.wrapUpSummary.map((item) => `
        <li style="margin-bottom: 10px; line-height: 1.5; font-size: 0.9rem; position: relative; padding-left: 24px; list-style-type: none;">
          <span style="position: absolute; left: 0; top: 2px; color: var(--accent);"><i class="fa-solid fa-circle-check"></i></span>
          ${item}
        </li>
      `).join("");
        summaryHtml = `
        <div class="mastery-card wrap-up-card" style="max-width: 800px; margin: 0 auto 24px auto; border-left: 4px solid var(--accent); background: rgba(245, 158, 11, 0.03);">
          <h3 class="mastery-card-title" style="display: flex; align-items: center; gap: 8px; border: none; margin-bottom: 0;">
            <i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> What have you learned today?
          </h3>
          <div class="mastery-card-body" style="padding-top: 12px; margin-top: 0;">
            <ul style="margin: 0; padding: 0;">
              ${summaryItems}
            </ul>
          </div>
        </div>
      `;
      }
      if (extensionData.revisionQuestions && extensionData.revisionQuestions.length > 0) {
        let questionsListHtml = "";
        extensionData.revisionQuestions.forEach((q) => {
          let badgeColor = "rgba(34, 197, 94, 0.2)";
          let textColor = "var(--success)";
          if (q.number > 7) {
            badgeColor = "rgba(239, 68, 68, 0.2)";
            textColor = "#f87171";
          } else if (q.number > 4) {
            badgeColor = "rgba(245, 158, 11, 0.2)";
            textColor = "var(--accent)";
          }
          questionsListHtml += `
          <div class="revision-question-item">
            <div class="revision-question-header">
              <span class="revision-question-title">Question ${q.number}</span>
              <span class="revision-difficulty-badge" style="background: ${badgeColor}; color: ${textColor};">
                ${q.difficulty}
              </span>
            </div>
            <div class="revision-question-text">${q.question}</div>
            
            <div class="revision-answer-text">
              <strong style="color: var(--success); display: block; margin-bottom: 4px;"><i class="fa-solid fa-lightbulb"></i> Answer Guide:</strong>
              ${q.answer}
            </div>
          </div>
        `;
        });
        revisionQuestionsHtml = `
        <div class="mastery-card revision-questions-card" style="max-width: 800px; margin: 0 auto 24px auto;">
          <h3 class="mastery-card-title">\u{1F6E1}\uFE0F 10-Step Unit Mastery Journey</h3>
          <div class="mastery-card-body">
            <p style="font-style: italic; margin-top: 0; margin-bottom: 16px; color: var(--text-muted); font-size: 0.85rem;">
              Missed this lesson or need a thorough refresh? Click through these 10 structured questions (ranging from basic recall to expert challenge) to master the unit!
            </p>
            <div class="revision-questions-list">
              ${questionsListHtml}
            </div>
          </div>
        </div>
      `;
      }
    }
    let sourceCardHtml = "";
    const sourceData = CONTEMPORARY_SOURCES[subtopicId];
    if (sourceData) {
      sourceCardHtml = `
      <div class="mastery-card contemporary-source-card" style="max-width: 800px; margin: 0 auto 24px auto; border-left: 4px solid var(--accent); background: rgba(245, 158, 11, 0.02); position: relative; padding: 24px;">
        <h3 class="mastery-card-title" style="display: flex; align-items: center; gap: 8px; border: none; margin-bottom: 12px; font-size: 1.1rem; color: var(--accent);">
          <i class="fa-solid fa-scroll"></i> Contemporary Historical Source
        </h3>
        <div style="background: rgba(0, 0, 0, 0.15); border: 1px solid var(--border-glass); border-radius: var(--border-radius-sm); padding: 16px; margin-bottom: 14px;">
          <strong style="display: block; margin-bottom: 8px; font-size: 0.95rem; color: var(--text-main);">${sourceData.title}</strong>
          <span style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; display: inline-block; background: rgba(245, 158, 11, 0.1); padding: 2px 8px; border-radius: 4px; margin-bottom: 10px; letter-spacing: 0.5px;">
            ${sourceData.type}
          </span>
          <p style="margin: 0; font-family: Georgia, serif; font-size: 1rem; line-height: 1.5; color: var(--text-main); font-style: italic;">
            ${sourceData.excerpt}
          </p>
        </div>
        <div style="font-size: 0.88rem; line-height: 1.5; color: var(--text-muted);">
          <strong style="color: var(--accent); display: block; margin-bottom: 4px;"><i class="fa-solid fa-lightbulb"></i> Source Insight & Context:</strong>
          ${sourceData.insight}
        </div>
      </div>
    `;
    }
    container.innerHTML = `
    ${doNowHtml}

    <!-- Header Card -->
    <div class="mastery-header-card" style="max-width: 800px; margin: 0 auto 24px auto;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 12px; flex-wrap: wrap;">
        <h2 class="mastery-header-title" style="margin: 0; flex: 1; min-width: 250px;">
          ${data.headerTitle}
        </h2>
        <button class="mastery-btn view-in-timeline-btn" data-subtopic="${subtopicId}" style="background: rgba(59, 130, 246, 0.1); border: 1px solid var(--primary); color: var(--primary); font-weight: bold; font-size: 0.8rem; padding: 6px 12px; border-radius: 12px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; margin-top: 4px;">
          <i class="fa-solid fa-timeline"></i> View in Timeline
        </button>
      </div>
      <p class="mastery-header-intro" style="margin-bottom: ${videoHtml ? "16px" : "0"};">
        ${data.headerIntro}
      </p>
      ${videoHtml}
    </div>

    <!-- Specification Checklist Card -->
    ${renderSpecChecklistCard(subtopicId, SPEC_CHECKLIST_DATA[subtopicId])}

    <!-- Interactive Legend and Switch -->
    <div class="mastery-controls" style="max-width: 800px; margin: 0 auto 20px auto;">
      <div class="legend-box">
        <span class="legend-highlight">Process Word</span> Legend: Underlined process words show cause and effect\u2014use these in your exam answers!
      </div>
      <label class="toggle-wrapper" id="mastery-toggle-wrapper">
        <span>\u{1F9E0} Hard Mode (Hide Key Facts)</span>
        <div class="toggle-switch">
          <input type="checkbox" id="mastery-hard-mode-toggle">
          <span class="toggle-slider"></span>
        </div>
      </label>
    </div>

    ${sourceCardHtml}

    ${stepsHtml}
    
    ${dualHtml}
    
    ${chainHtml}
    
    ${revisionQuestionsHtml}
    
    ${kcHtml}
    
    ${impHtml}
    
    ${vaultHtml}
    
    ${summaryHtml}

    <!-- Mastery Progress Button -->
    <div style="max-width: 800px; margin: 0 auto 40px auto; padding: 0 10px;">
      <button class="mastery-btn mastery-btn-success" id="btn-mark-mastery-mastered">
        \u2713 Mark Topic ${subtopicId.replace("subtopic_", "").replace("_", ".")} as Mastered
      </button>
    </div>
  `;
    const viewTimelineBtn = container.querySelector(".view-in-timeline-btn");
    if (viewTimelineBtn) {
      viewTimelineBtn.addEventListener("click", () => {
        AudioEngine.play("click");
        const subtopicId2 = viewTimelineBtn.getAttribute("data-subtopic");
        const eraSelect = document.getElementById("timeline-era-select");
        if (eraSelect) {
          eraSelect.value = "all";
        }
        switchView("timeline");
        setTimeout(() => {
          const targetMilestone = document.querySelector(`.timeline-item[data-subtopic="${subtopicId2}"]`);
          if (targetMilestone) {
            targetMilestone.scrollIntoView({ behavior: "smooth", block: "center" });
            const card = targetMilestone.querySelector(".timeline-content-card");
            if (card) {
              if (!card.classList.contains("revealed")) {
                card.classList.add("revealed");
              }
              const originalBorder = card.style.border;
              card.style.border = "2px solid var(--accent)";
              card.style.boxShadow = "0 0 15px rgba(245, 158, 11, 0.4)";
              card.style.transition = "border 0.3s, box-shadow 0.3s";
              setTimeout(() => {
                card.style.border = originalBorder;
                card.style.boxShadow = "";
              }, 3e3);
            }
          }
        }, 100);
      });
    }
    const doNowCard = container.querySelector(".do-now-card");
    if (doNowCard) {
      const prevLink = doNowCard.querySelector(".do-now-prev-link-btn");
      if (prevLink) {
        prevLink.addEventListener("click", () => {
          AudioEngine.play("click");
          const prevId = prevLink.getAttribute("data-prev-id");
          switchView("subtopic", prevId);
        });
      }
      const revealAnswersBtn = doNowCard.querySelector(".do-now-reveal-btn");
      if (revealAnswersBtn) {
        revealAnswersBtn.addEventListener("click", () => {
          AudioEngine.play("click");
          const drawer = doNowCard.querySelector(".do-now-answers-drawer");
          if (drawer) {
            const isHidden = drawer.style.display === "none" || !drawer.style.display;
            if (isHidden) {
              drawer.style.display = "block";
              revealAnswersBtn.innerHTML = `<i class="fa-solid fa-eye-slash"></i> Hide Do Now Answers`;
            } else {
              drawer.style.display = "none";
              revealAnswersBtn.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> Reveal Do Now Guide Answers`;
            }
          }
        });
      }
    }
    const bioButtons = container.querySelectorAll(".inline-bio-btn");
    bioButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        AudioEngine.play("click");
        const targetId = btn.getAttribute("data-bio-target");
        const drawer = container.querySelector(`#${targetId}`);
        if (drawer) {
          const isActive = drawer.classList.contains("active");
          if (isActive) {
            drawer.classList.remove("active");
            btn.classList.remove("active");
          } else {
            drawer.classList.add("active");
            btn.classList.add("active");
          }
        }
      });
    });
    const checklistItems = container.querySelectorAll(".spec-checklist-item");
    checklistItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target.closest(".spec-checklist-expansion")) {
          return;
        }
        AudioEngine.play("click");
        const key = item.getAttribute("data-key");
        const isChecked = item.classList.contains("checked");
        if (isChecked) {
          item.classList.remove("checked");
        } else {
          item.classList.add("checked");
        }
        try {
          let checkedStates = {};
          const saved = localStorage.getItem("edexcel_spec_checklist");
          if (saved) {
            checkedStates = JSON.parse(saved);
          }
          checkedStates[key] = !isChecked;
          localStorage.setItem("edexcel_spec_checklist", JSON.stringify(checkedStates));
        } catch (e2) {
          console.error(e2);
        }
      });
    });
    const hardModeToggle = document.getElementById("mastery-hard-mode-toggle");
    if (hardModeToggle) {
      hardModeToggle.addEventListener("change", () => {
        AudioEngine.play("click");
        const isHard = hardModeToggle.checked;
        const cardContents = container.querySelectorAll(".card-content");
        cardContents.forEach((content) => {
          if (isHard) {
            content.classList.add("hard-mode-active");
          } else {
            content.classList.remove("hard-mode-active");
          }
        });
        setupHardModeKeywords(container);
      });
    }
    container.addEventListener("click", (e) => {
      if (e.target.classList.contains("hard-mode-blank")) {
        const strongEl = e.target;
        const parentCard = strongEl.closest(".card-content");
        if (parentCard && parentCard.classList.contains("hard-mode-active")) {
          AudioEngine.play("success");
          strongEl.classList.toggle("revealed");
        }
      }
    });
    const questionsList = container.querySelector(".quiz-questions-list");
    if (questionsList) {
      questionsList.addEventListener("click", (e) => {
        const item = e.target.closest(".quiz-question-item");
        if (item) {
          AudioEngine.play("click");
          item.classList.toggle("revealed");
        }
      });
    }
    const revisionQuestionsList = container.querySelector(".revision-questions-list");
    if (revisionQuestionsList) {
      revisionQuestionsList.addEventListener("click", (e) => {
        const item = e.target.closest(".revision-question-item");
        if (item) {
          AudioEngine.play("click");
          item.classList.toggle("revealed");
        }
      });
    }
    const btnPartition = document.getElementById("btn-map-partition");
    const btnBorders = document.getElementById("btn-map-borders");
    const mapImg = document.getElementById("map-image-placeholder");
    if (mapImg && btnPartition && btnBorders) {
      const map1Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect x="0" y="0" width="100" height="120" fill="#f8fafc" /><path d="M 40,5 L 55,5 L 62,35 L 75,60 L 68,90 L 52,112 L 44,115 L 43,90 L 41,70 L 32,50 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5" /><path d="M 40,5 L 55,5 L 60,20 L 44,20 Z" fill="#ffedd5" stroke="#f97316" stroke-width="0.5" /><path d="M 41,20 L 48,20 L 48,60 L 41,70 L 32,50 Z" fill="#ffedd5" stroke="#f97316" stroke-width="0.5" /><path d="M 41,70 L 50,70 L 52,112 L 44,115 L 43,90 Z" fill="#ffedd5" stroke="#f97316" stroke-width="0.5" /><path d="M 48,20 L 62,35 L 75,60 L 58,60 L 48,45 Z" fill="#dcfce7" stroke="#22c55e" stroke-width="0.5" /><path d="M 58,60 L 75,60 L 68,90 L 50,70 Z" fill="#dcfce7" stroke="#22c55e" stroke-width="0.5" /><circle cx="51" cy="58" r="4" fill="#ef4444" stroke="#ffffff" stroke-width="1" /><text x="58" y="60" font-family="sans-serif" font-size="5" font-weight="bold" fill="#ef4444">UN Zone</text><text x="10" y="15" font-family="sans-serif" font-size="6" font-weight="bold" fill="#f97316">Jewish State</text><text x="10" y="23" font-family="sans-serif" font-size="6" font-weight="bold" fill="#22c55e">Arab State</text><text x="35" y="112" font-family="sans-serif" font-size="5" fill="#94a3b8">1947 Plan</text></svg>`;
      const map2Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect x="0" y="0" width="100" height="120" fill="#f8fafc" /><path d="M 40,5 L 55,5 L 62,35 L 75,60 L 68,90 L 52,112 L 44,115 L 43,90 L 41,70 L 32,50 Z" fill="#ffedd5" stroke="#f97316" stroke-width="1.5" /><path d="M 46,35 L 60,35 L 70,60 L 65,80 L 52,75 L 46,55 Z" fill="#dcfce7" stroke="#22c55e" stroke-width="1" stroke-dasharray="2,2" /><text x="50" y="55" font-family="sans-serif" font-size="5" font-weight="bold" fill="#166534">West Bank</text><text x="50" y="61" font-family="sans-serif" font-size="4" fill="#166534">(Jordan)</text><path d="M 32,50 L 37,50 L 40,65 L 35,65 Z" fill="#fef9c3" stroke="#eab308" stroke-width="1" stroke-dasharray="2,2" /><text x="21" y="62" font-family="sans-serif" font-size="4" font-weight="bold" fill="#854d0e">Gaza</text><circle cx="48" cy="53" r="2.5" fill="#ef4444" stroke="#ffffff" stroke-width="0.5" /><text x="10" y="15" font-family="sans-serif" font-size="6" font-weight="bold" fill="#f97316">Israel</text><text x="35" y="112" font-family="sans-serif" font-size="5" fill="#94a3b8">1949 Armistice</text></svg>`;
      const map1DataUrl = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(map1Svg)));
      const map2DataUrl = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(map2Svg)));
      const handleImgError = () => {
        const src = mapImg.src;
        if (src.includes("un_partition_plan_1947") || src.includes("Partition_Plan") || src.includes("1947")) {
          mapImg.src = map1DataUrl;
        } else if (src.includes("1949_armistice_map") || src.includes("Armistice_Agreements") || src.includes("1949")) {
          mapImg.src = map2DataUrl;
        }
      };
      mapImg.addEventListener("error", handleImgError);
      if (mapImg.complete && mapImg.naturalWidth === 0) {
        handleImgError();
      }
      btnPartition.addEventListener("click", () => {
        AudioEngine.play("click");
        btnPartition.classList.add("active");
        btnBorders.classList.remove("active");
        mapImg.src = "assets/sources/un_partition_plan_1947.svg";
        setTimeout(() => {
          if (mapImg.naturalWidth === 0) {
            mapImg.src = map1DataUrl;
          }
        }, 60);
      });
      btnBorders.addEventListener("click", () => {
        AudioEngine.play("click");
        btnBorders.classList.add("active");
        btnPartition.classList.remove("active");
        mapImg.src = "assets/sources/1949_armistice_map.png";
        setTimeout(() => {
          if (mapImg.naturalWidth === 0) {
            mapImg.src = map2DataUrl;
          }
        }, 60);
      });
    }
    if (data.narrativeChain) {
      const selectedChain = [];
      const boxesContainer = document.getElementById("narrative-chain-boxes");
      const feedbackEl = document.getElementById("narrative-chain-feedback");
      const renderChainBoxes = () => {
        if (!boxesContainer) return;
        boxesContainer.innerHTML = "";
        data.narrativeChain.chainData.forEach((item) => {
          const div = document.createElement("div");
          div.className = "chain-box";
          div.id = item.id;
          div.innerText = item.label;
          const selectIdx = selectedChain.indexOf(item.value);
          if (selectIdx > -1) {
            div.classList.add("selected");
            const badge = document.createElement("div");
            badge.className = "chain-number-badge";
            badge.innerText = selectIdx + 1;
            div.appendChild(badge);
          }
          div.addEventListener("click", () => {
            AudioEngine.play("click");
            const idx = selectedChain.indexOf(item.value);
            if (idx > -1) {
              selectedChain.splice(idx, 1);
            } else {
              selectedChain.push(item.value);
            }
            renderChainBoxes();
            checkChainResult();
          });
          boxesContainer.appendChild(div);
        });
      };
      const checkChainResult = () => {
        if (!feedbackEl) return;
        if (selectedChain.length === 0) {
          feedbackEl.innerHTML = "";
          return;
        }
        if (selectedChain.length < data.narrativeChain.correctOrder.length) {
          feedbackEl.innerHTML = `
          <div style="display: flex; justify-content: center; margin-top: 8px;">
            <button class="btn-secondary" id="btn-reset-narrative-chain" style="padding: 6px 12px; font-size: 0.8rem; font-family: var(--font-body); display: flex; align-items: center; gap: 6px; border-color: rgba(255,255,255,0.1);">
              <i class="fa-solid fa-rotate-left"></i> Reset Sequence
            </button>
          </div>
        `;
          const resetBtn = document.getElementById("btn-reset-narrative-chain");
          if (resetBtn) {
            resetBtn.addEventListener("click", () => {
              AudioEngine.play("click");
              selectedChain.length = 0;
              renderChainBoxes();
              feedbackEl.innerHTML = "";
            });
          }
          return;
        }
        const isCorrect = selectedChain.every((val, index) => val === data.narrativeChain.correctOrder[index]);
        if (isCorrect) {
          AudioEngine.play("success");
          feedbackEl.style.color = "var(--success)";
          feedbackEl.innerHTML = `
          <span style="font-size: 1.05rem; display: block; margin-bottom: 4px; font-weight: bold;">\u2713 CORRECT CHRONOLOGY!</span>
          ${data.narrativeChain.successText}
        `;
        } else {
          AudioEngine.play("fail");
          feedbackEl.style.color = "var(--accent)";
          feedbackEl.innerHTML = `
          <span style="font-size: 1.05rem; display: block; margin-bottom: 4px; font-weight: bold;">\u2717 INCORRECT SEQUENCE</span>
          ${data.narrativeChain.failText}
          <div style="margin-top: 12px; display: flex; justify-content: center;">
            <button class="btn-secondary" id="btn-reset-narrative-chain" style="padding: 6px 12px; font-size: 0.8rem; font-family: var(--font-body); display: flex; align-items: center; gap: 6px;">
              <i class="fa-solid fa-rotate-left"></i> Reset Sequence
            </button>
          </div>
        `;
          const resetBtn = document.getElementById("btn-reset-narrative-chain");
          if (resetBtn) {
            resetBtn.addEventListener("click", () => {
              AudioEngine.play("click");
              selectedChain.length = 0;
              renderChainBoxes();
              feedbackEl.innerHTML = "";
            });
          }
        }
      };
      renderChainBoxes();
    }
    const sliderCards = container.querySelectorAll(".dual-perspective-card");
    sliderCards.forEach((card) => {
      const slider = card.querySelector(".perspective-range-slider");
      const labelLeft = card.querySelector(".perspective-label.label-left");
      const labelRight = card.querySelector(".perspective-label.label-right");
      const headline = card.querySelector(".dual-perspective-headline");
      const text = card.querySelector(".dual-perspective-text");
      if (!slider || !labelLeft || !labelRight || !headline || !text) return;
      const sliderRow = card.querySelector(".dual-perspective-slider-row");
      if (sliderRow && !card.querySelector(".slider-hint")) {
        const hint = document.createElement("div");
        hint.className = "slider-hint";
        hint.style.cssText = "text-align: center; font-size: 0.7rem; color: var(--text-muted); margin-top: 8px; font-style: italic; display: flex; align-items: center; justify-content: center; gap: 4px; opacity: 0.8;";
        hint.innerHTML = `<i class="fa-solid fa-arrows-left-right"></i> Drag slider or click labels to compare perspectives`;
        sliderRow.after(hint);
      }
      const leftHeadline = card.getAttribute("data-left-headline");
      const leftText = card.getAttribute("data-left-text");
      const rightHeadline = card.getAttribute("data-right-headline");
      const rightText = card.getAttribute("data-right-text");
      let currentPerspective = "left";
      slider.addEventListener("input", () => {
        const val = parseInt(slider.value);
        const isRight = val >= 50;
        const newPerspective = isRight ? "right" : "left";
        if (newPerspective !== currentPerspective) {
          AudioEngine.play("click");
          currentPerspective = newPerspective;
          const narrativeBox = card.querySelector(".dual-perspective-narrative-box");
          if (narrativeBox) {
            narrativeBox.classList.remove("perspective-fade");
            void narrativeBox.offsetWidth;
            narrativeBox.classList.add("perspective-fade");
          }
          if (isRight) {
            card.classList.remove("left-active");
            card.classList.add("right-active");
            labelLeft.classList.remove("active");
            labelRight.classList.add("active");
            headline.innerText = rightHeadline;
            text.innerText = rightText;
          } else {
            card.classList.remove("right-active");
            card.classList.add("left-active");
            labelRight.classList.remove("active");
            labelLeft.classList.add("active");
            headline.innerText = leftHeadline;
            text.innerText = leftText;
          }
        }
      });
      labelLeft.addEventListener("click", () => {
        if (slider.value != 0) {
          slider.value = 0;
          slider.dispatchEvent(new Event("input"));
        }
      });
      labelRight.addEventListener("click", () => {
        if (slider.value != 100) {
          slider.value = 100;
          slider.dispatchEvent(new Event("input"));
        }
      });
    });
    const flipCard = document.getElementById("importance-analyser-card");
    if (flipCard) {
      flipCard.addEventListener("click", () => {
        AudioEngine.play("flip");
        flipCard.classList.toggle("flipped");
      });
    }
    const vaultQuestionBtns = container.querySelectorAll(".vault-question-btn");
    vaultQuestionBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        AudioEngine.play("click");
        const panel = btn.nextElementSibling;
        const isVisible = panel.classList.contains("active");
        container.querySelectorAll(".vault-answer-panel").forEach((p) => p.classList.remove("active"));
        container.querySelectorAll(".vault-question-btn i").forEach((icon) => {
          icon.className = "fa-solid fa-chevron-down";
        });
        if (!isVisible) {
          panel.classList.add("active");
          btn.querySelector("i").className = "fa-solid fa-chevron-up";
        }
      });
    });
    const btnMark = document.getElementById("btn-mark-mastery-mastered");
    if (btnMark) {
      btnMark.addEventListener("click", () => {
        AudioEngine.play("cheer");
        btnMark.classList.add("clicked");
        btnMark.disabled = true;
        btnMark.innerText = "Mastered! Returning to Menu...";
        import_questions4.QUIZ_DATA.forEach((topic) => {
          topic.subtopics.forEach((sub) => {
            if (sub.id === subtopicId) {
              const subQuestions = state.allQuestions.filter((q) => q.subtopicId === sub.id);
              subQuestions.forEach((q) => {
                state.mastery[q.id] = true;
              });
            }
          });
        });
        saveProgress();
        renderSidebarNav();
        updateGlobalStats();
        setTimeout(() => {
          switchView("dashboard");
        }, 1500);
      });
    }
    formatVaultImportanceAnswers(container);
  }
  function setupHardModeKeywords(container) {
    const blocks = container.querySelectorAll(".card-content li, .card-content p, .mastery-card-body li, .mastery-card-body p");
    blocks.forEach((block) => {
      const strongs = Array.from(block.querySelectorAll("strong"));
      let keywordCount = 0;
      strongs.forEach((strong) => {
        const text = strong.textContent.trim();
        const nextSibling = strong.nextSibling;
        const nextText = nextSibling && nextSibling.nodeType === Node.TEXT_NODE ? nextSibling.textContent.trim() : "";
        const isBeforeColon = text.endsWith(":") || nextText.startsWith(":");
        if (isBeforeColon) {
          strong.classList.remove("hard-mode-blank");
        } else {
          if (keywordCount < 2) {
            strong.classList.add("hard-mode-blank");
            keywordCount++;
          } else {
            strong.classList.remove("hard-mode-blank");
          }
        }
      });
    });
  }
  function formatVaultImportanceAnswers(container) {
    const vaultItems = container.querySelectorAll(".vault-item");
    vaultItems.forEach((item) => {
      const questionSpan = item.querySelector(".vault-question-btn span");
      if (!questionSpan) return;
      const questionText = questionSpan.textContent || "";
      if (questionText.toLowerCase().includes("explain the importance")) {
        const panel = item.querySelector(".vault-answer-panel");
        if (!panel) return;
        let html = panel.innerHTML;
        html = html.replace(/<strong>Importance Analysis:<\/strong>/i, "").trim();
        html = html.replace(/Importance Analysis:/i, "").trim();
        const sentences = html.replace(/([\.\?])\s+(?=[A-Z])/g, "$1|").split("|");
        if (sentences.length >= 2) {
          const reason1 = sentences[0];
          const reason2 = sentences.slice(1).join(" ");
          panel.innerHTML = `
          <div class="model-answer-split">
            <p style="margin: 0 0 10px 0; line-height: 1.45;"><strong>Reason 1:</strong> ${reason1}</p>
            <p style="margin: 0; line-height: 1.45;"><strong>Reason 2:</strong> ${reason2}</p>
          </div>
        `;
        }
      }
    });
  }
  function injectInlineBios(htmlString, matchedFigures) {
    if (!htmlString) return htmlString;
    if (typeof DOMParser === "undefined") return htmlString;
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const keys = Object.keys(KEY_FIGURES_BIO).sort((a, b) => b.length - a.length);
    function walk(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.nodeValue;
        for (const key of keys) {
          const figure = KEY_FIGURES_BIO[key];
          if (matchedFigures.has(figure.name)) {
            continue;
          }
          const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const regex = new RegExp("\\b" + escapedKey + "\\b", "i");
          const match = regex.exec(text);
          if (match) {
            const matchIndex = match.index;
            const matchedText = match[0];
            const rightNode = node.splitText(matchIndex);
            const remainingNode = rightNode.splitText(matchedText.length);
            const button = doc.createElement("button");
            button.className = "inline-bio-btn";
            const bioId = `bio-drawer-${key.replace(/\s+/g, "-")}-${Math.random().toString(36).substr(2, 9)}`;
            button.setAttribute("data-bio-target", bioId);
            button.innerHTML = `${matchedText} <i class="fa-solid fa-address-card" style="font-size: 0.85em; opacity: 0.85;"></i>`;
            const drawer = doc.createElement("div");
            drawer.className = "inline-bio-drawer";
            drawer.id = bioId;
            drawer.innerHTML = `
            <div class="inline-bio-drawer-content">
              <img src="${figure.image}" alt="${figure.name}" class="inline-bio-img" 
                onerror="const fallback = '${getFallbackUrl(figure.image) || ""}'; if (fallback && this.src !== fallback) { this.referrerPolicy = 'no-referrer'; this.src = fallback; } else { this.style.display='none'; }">
              <div class="inline-bio-info">
                <h4 class="inline-bio-name">${figure.name}</h4>
                <div class="inline-bio-role">${figure.role}</div>
                <p class="inline-bio-text">${figure.bio}</p>
                <a href="${figure.sourceUrl}" target="_blank" class="inline-bio-source-link">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Read full biography on Wikipedia
                </a>
              </div>
            </div>
          `;
            node.parentNode.replaceChild(button, rightNode);
            let blockAncestor = button.parentElement;
            while (blockAncestor && blockAncestor !== doc.body) {
              const tag = blockAncestor.tagName.toUpperCase();
              if (tag === "P" || tag === "LI" || tag === "DIV" || tag === "BLOCKQUOTE") {
                break;
              }
              blockAncestor = blockAncestor.parentElement;
            }
            if (!blockAncestor || blockAncestor === doc.body) {
              button.parentNode.insertBefore(drawer, button.nextSibling);
            } else {
              blockAncestor.parentNode.insertBefore(drawer, blockAncestor.nextSibling);
            }
            matchedFigures.add(figure.name);
            walk(remainingNode);
            return;
          }
        }
      } else {
        const tag = node.tagName ? node.tagName.toUpperCase() : "";
        if (tag !== "A" && tag !== "BUTTON" && !node.classList.contains("inline-bio-drawer")) {
          const children = Array.from(node.childNodes);
          for (let i = 0; i < children.length; i++) {
            walk(children[i]);
          }
        }
      }
    }
    walk(doc.body);
    return doc.body.innerHTML;
  }

  // src/brand_config.js
  var BRAND_CONFIG = {
    units: {
      "conflict_middle_east": {
        brandHeader: "Fareham Chimney Sweep Inc.",
        quotes: [
          "Because unblocking a chimney is tough, but untangling the origins of the Arab-Israeli conflict is a whole different level of messy.",
          "Clearing out soot since 2013, because a blocked flue is bad, but confusing the McMahon-Hussein Correspondence with the Balfour Declaration is catastrophic.",
          "Sweeping away the historical fog. Keeping your chimneys clear and your knowledge on the 1948 Arab-Israeli War crystal clear.",
          "Because a chimney fire causes smoke, but the Suez Crisis of 1956 caused an absolute international geopolitical meltdown.",
          "We handle the dust, you handle the drama. Sweeping through everything from the Camp David Accords to the Oslo Peace Process.",
          "Because a clogged chimney cuts off the draft, but the 1973 Oil Crisis cut off the entire Western world.",
          "From the streets of Fareham to the borders of the Levant: we sweep the flues so you can master the causes of the Six-Day War.",
          "Because cleaning a fireplace takes grit, but parsing the shifting borders of the Sykes-Picot Agreement takes a total miracle.",
          "Sweeping away the confusion. Because a blocked chimney ruins your living room, but forgetting the roles of Nasser and Ben-Gurion ruins your 12-mark exam answer.",
          "We scrape out the creosote so you can scrape together top marks on the causes and consequences of the Six-Day War.",
          "Because a chimney sweep faces major blockages, but nothing quite like the diplomatic stalemate of the UN Resolution 242.",
          "From Fareham flues to the Sinai Peninsula: making sure your chimneys draw perfectly and your timeline of the Yom Kippur War is absolutely flawless.",
          "Because a chimney sweep knows how to handle a breakdown, but the collapse of the 2000 Camp David Summit was an entirely different kind of disaster.",
          "Keeping the drafts flowing and the history glowing\u2014because a chimney needs a clear exit, just like the British needed one from the Palestine Mandate in 1948.",
          "Because an unswept chimney accumulates soot, but the Gaza Strip and West Bank accumulated decades of complex geopolitical tension."
        ]
      }
    }
  };
  var brandBannerTimeout = null;
  var brandBannerHideTimeout = null;
  var brandBannerPinned = false;
  var bannerListenerInitialized = false;
  function startBannerDismiss(delay) {
    if (brandBannerTimeout) clearTimeout(brandBannerTimeout);
    if (brandBannerHideTimeout) clearTimeout(brandBannerHideTimeout);
    const banner = document.getElementById("brand-subheader-banner");
    if (!banner) return;
    brandBannerTimeout = setTimeout(() => {
      banner.classList.add("fade-out");
      brandBannerHideTimeout = setTimeout(() => {
        banner.style.display = "none";
      }, 500);
    }, delay);
  }
  function updateBrandBanner() {
    const banner = document.getElementById("brand-subheader-banner");
    const quoteEl = document.getElementById("brand-subheader-quote");
    const titleEl = document.getElementById("brand-subheader-title");
    if (!banner || !quoteEl || !titleEl) return;
    brandBannerPinned = false;
    banner.style.borderLeft = "";
    banner.classList.remove("fade-out");
    if (!bannerListenerInitialized) {
      banner.style.cursor = "pointer";
      banner.title = "Click to pin/unpin this message";
      banner.addEventListener("click", () => {
        brandBannerPinned = !brandBannerPinned;
        AudioEngine.play("click");
        if (brandBannerPinned) {
          if (brandBannerTimeout) clearTimeout(brandBannerTimeout);
          if (brandBannerHideTimeout) clearTimeout(brandBannerHideTimeout);
          banner.classList.remove("fade-out");
          banner.style.borderLeft = "4px solid var(--accent)";
        } else {
          banner.style.borderLeft = "";
          startBannerDismiss(5e3);
        }
      });
      bannerListenerInitialized = true;
    }
    const unitKey = "conflict_middle_east";
    const config = BRAND_CONFIG.units[unitKey];
    if (config) {
      titleEl.textContent = config.brandHeader;
      const randomIndex = Math.floor(Math.random() * config.quotes.length);
      quoteEl.textContent = `"${config.quotes[randomIndex]}"`;
      banner.style.display = "flex";
      startBannerDismiss(5e3);
    } else {
      banner.style.display = "none";
    }
  }

  // src/navigation.js
  var INQUIRY_QUESTIONS = {
    "subtopic_1_1": "Inquiry: How did the British withdrawal lead to the creation of Israel, 1945\u201348?",
    "subtopic_1_2": "Inquiry: What were the causes and consequences of the 1948\u201349 Arab-Israeli War?",
    "subtopic_1_3": "Inquiry: Why did the nationalisation of the Suez Canal spark a major international crisis in 1956?",
    "subtopic_2_1": "Inquiry: How did tensions escalate to cause the outbreak and swift outcome of the 1967 Six Day War?",
    "subtopic_2_2": "Inquiry: Why did Palestinian nationalism grow and what impact did it have on the conflict?",
    "subtopic_2_3": "Inquiry: Why did the Yom Kippur War break out in 1973 and how did it change the balance of power?",
    "subtopic_3_1": "Inquiry: How was a historic peace accord achieved between Egypt and Israel at Camp David?",
    "subtopic_3_2": "Inquiry: What were the causes and consequences of the Israeli invasion of Lebanon and the First Intifada?",
    "subtopic_3_3": "Inquiry: How did the Oslo Accords attempt to resolve the conflict, and why did they ultimately stall?"
  };
  function switchView(viewName, subtopicId = null) {
    state.currentView = viewName;
    stopJswLoop();
    const inquiryEl = document.getElementById("header-inquiry-question");
    if (inquiryEl) {
      inquiryEl.style.display = "none";
    }
    if (state.tugGameSession && state.tugGameSession.timeoutId) {
      clearTimeout(state.tugGameSession.timeoutId);
      state.tugGameSession.timeoutId = null;
    }
    document.querySelectorAll(".sidebar-nav .nav-item").forEach((item) => {
      item.classList.remove("active");
    });
    const headerModeSwitcher = document.getElementById("subtopic-mode-switcher");
    if (viewName === "dashboard") {
      const dashboardNav = document.getElementById("nav-dashboard");
      if (dashboardNav) dashboardNav.classList.add("active");
      if (headerModeSwitcher) headerModeSwitcher.style.display = "none";
      const viewTitle = document.getElementById("current-view-title");
      if (viewTitle) viewTitle.textContent = "Study Dashboard";
      state.selectedSubtopicId = null;
      renderDashboard2();
    } else if (viewName === "bookmarks") {
      const bookmarksNav = document.getElementById("nav-bookmarks");
      if (bookmarksNav) bookmarksNav.classList.add("active");
      if (headerModeSwitcher) headerModeSwitcher.style.display = "none";
      const viewTitle = document.getElementById("current-view-title");
      if (viewTitle) viewTitle.textContent = "Bookmarked Deck";
      state.selectedSubtopicId = null;
      renderBookmarksView();
    } else if (viewName === "timeline") {
      const timelineNav = document.getElementById("nav-timeline");
      if (timelineNav) timelineNav.classList.add("active");
      if (headerModeSwitcher) headerModeSwitcher.style.display = "none";
      const viewTitle = document.getElementById("current-view-title");
      if (viewTitle) viewTitle.textContent = "Chronology Timeline";
      state.selectedSubtopicId = null;
      renderTimelineView();
    } else if (viewName === "exam") {
      const examNav = document.getElementById("nav-exam-sim");
      if (examNav) examNav.classList.add("active");
      if (headerModeSwitcher) headerModeSwitcher.style.display = "none";
      const viewTitle = document.getElementById("current-view-title");
      if (viewTitle) viewTitle.textContent = "Quiz Generator";
      state.selectedSubtopicId = null;
      if (!state.examSession.isActive) {
        showExamSetup2();
      }
    } else if (viewName === "exam-skills") {
      const skillsNav = document.getElementById("nav-exam-skills");
      if (skillsNav) skillsNav.classList.add("active");
      if (headerModeSwitcher) headerModeSwitcher.style.display = "none";
      const viewTitle = document.getElementById("current-view-title");
      if (viewTitle) viewTitle.textContent = "Exam Practice (Q1-Q3)";
      state.selectedSubtopicId = null;
      renderExamSkillsView();
    } else if (viewName === "past-papers") {
      const papersNav = document.getElementById("nav-past-papers");
      if (papersNav) papersNav.classList.add("active");
      if (headerModeSwitcher) headerModeSwitcher.style.display = "none";
      const viewTitle = document.getElementById("current-view-title");
      if (viewTitle) viewTitle.textContent = "Past Exam Papers";
      state.selectedSubtopicId = null;
      renderPastPapersView();
    } else if (viewName === "games") {
      const gamesNav = document.getElementById("nav-games");
      if (gamesNav) gamesNav.classList.add("active");
      if (headerModeSwitcher) headerModeSwitcher.style.display = "none";
      const viewTitle = document.getElementById("current-view-title");
      if (viewTitle) viewTitle.textContent = "Revision Games Hub";
      state.selectedSubtopicId = null;
      renderGamesView();
    } else if (viewName === "firefly") {
      const fireflyNav = document.getElementById("nav-firefly");
      if (fireflyNav) fireflyNav.classList.add("active");
      if (headerModeSwitcher) headerModeSwitcher.style.display = "none";
      const viewTitle = document.getElementById("current-view-title");
      if (viewTitle) viewTitle.textContent = "Firefly HTML Export";
      state.selectedSubtopicId = null;
      renderFireflyView();
    } else if (viewName === "subtopic" && subtopicId) {
      state.selectedSubtopicId = subtopicId;
      if (headerModeSwitcher) headerModeSwitcher.style.display = "flex";
      const subNavBtn = document.getElementById(`nav-subtopic-${subtopicId}`);
      if (subNavBtn) subNavBtn.classList.add("active");
      const subtopic = state.allQuestions.find((q) => q.subtopicId === subtopicId);
      const viewTitle = document.getElementById("current-view-title");
      if (viewTitle) {
        viewTitle.textContent = subtopic ? subtopic.subtopicTitle.replace(/^Topic \d\.\d:\s*/, "") : "Study Mode";
      }
      if (inquiryEl && INQUIRY_QUESTIONS[subtopicId]) {
        inquiryEl.textContent = INQUIRY_QUESTIONS[subtopicId];
        inquiryEl.style.display = "block";
      }
      switchSubtopicMode(state.currentMode);
    }
    const viewIdMap = {
      "dashboard": "view-dashboard",
      "bookmarks": "view-bookmarks",
      "timeline": "view-timeline",
      "exam": "view-exam",
      "classic": "view-classic",
      "flashcards": "view-flashcards",
      "lessons": "view-mastery",
      "firefly": "view-firefly",
      "exam-skills": "view-exam-skills",
      "past-papers": "view-past-papers",
      "games": "view-games"
    };
    const targetViewId = viewName === "subtopic" ? viewIdMap[state.currentMode] : viewIdMap[viewName];
    document.querySelectorAll(".content-view").forEach((view) => {
      view.classList.remove("active");
    });
    const targetView = document.getElementById(targetViewId);
    if (targetView) targetView.classList.add("active");
    closeMobileSidebar();
    updateBrandBanner();
  }
  function switchSubtopicMode(mode) {
    state.currentMode = mode;
    document.querySelectorAll("#subtopic-mode-switcher .mode-btn").forEach((btn) => {
      if (btn.getAttribute("data-mode") === mode) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
    document.querySelectorAll(".content-view").forEach((view) => {
      view.classList.remove("active");
    });
    if (mode === "lessons") {
      const masteryView = document.getElementById("view-mastery");
      if (masteryView) masteryView.classList.add("active");
      renderMasteryView(state.selectedSubtopicId);
    } else if (mode === "classic") {
      const classicView = document.getElementById("view-classic");
      if (classicView) classicView.classList.add("active");
      renderClassicView();
    } else if (mode === "flashcards") {
      const flashcardsView = document.getElementById("view-flashcards");
      if (flashcardsView) flashcardsView.classList.add("active");
      startFlashcardSession(state.selectedSubtopicId);
    }
    updateBrandBanner();
  }

  // src/layout.js
  var import_questions5 = __toESM(require_questions());
  function toggleMobileSidebar() {
    if (window.innerWidth <= 768) {
      document.getElementById("sidebar").classList.toggle("active");
      document.getElementById("sidebar-overlay").classList.toggle("active");
    } else {
      document.querySelector(".app-container").classList.toggle("collapsed-sidebar");
    }
  }
  function closeMobileSidebar() {
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("sidebar-overlay").classList.remove("active");
  }
  function updateSoundBtnUI() {
    const btn = document.getElementById("sound-toggle-btn");
    if (state.soundEnabled) {
      btn.innerHTML = `<i class="fa-solid fa-volume-high"></i> Sound Effects: On`;
    } else {
      btn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i> Sound Effects: Off`;
    }
  }
  function bindEvents() {
    document.getElementById("nav-dashboard").addEventListener("click", () => {
      AudioEngine.play("click");
      switchView("dashboard");
    });
    document.getElementById("nav-bookmarks").addEventListener("click", () => {
      AudioEngine.play("click");
      switchView("bookmarks");
    });
    document.getElementById("nav-timeline").addEventListener("click", () => {
      AudioEngine.play("click");
      switchView("timeline");
    });
    document.getElementById("nav-exam-sim").addEventListener("click", () => {
      AudioEngine.play("click");
      switchView("exam");
    });
    document.getElementById("nav-firefly").addEventListener("click", () => {
      AudioEngine.play("click");
      switchView("firefly");
    });
    document.getElementById("shortcut-timeline").addEventListener("click", () => {
      AudioEngine.play("click");
      switchView("timeline");
    });
    document.getElementById("shortcut-exam-sim").addEventListener("click", () => {
      AudioEngine.play("click");
      switchView("exam");
    });
    document.getElementById("shortcut-exam-skills").addEventListener("click", () => {
      AudioEngine.play("click");
      switchView("exam-skills");
    });
    document.getElementById("menu-toggle").addEventListener("click", toggleMobileSidebar);
    document.getElementById("sidebar-overlay").addEventListener("click", closeMobileSidebar);
    const fullscreenBtn = document.getElementById("fullscreen-btn");
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener("click", () => {
        AudioEngine.play("click");
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch((err) => {
            console.error(`Error attempting to enable fullscreen: ${err.message}`);
          });
        } else {
          document.exitFullscreen();
        }
      });
    }
    document.addEventListener("fullscreenchange", () => {
      const btn = document.getElementById("fullscreen-btn");
      const container = document.querySelector(".app-container");
      if (document.fullscreenElement) {
        if (btn) {
          btn.innerHTML = `<i class="fa-solid fa-compress"></i>`;
          btn.setAttribute("title", "Exit Fullscreen");
        }
        if (container) {
          container.classList.add("fullscreen-active");
        }
      } else {
        if (btn) {
          btn.innerHTML = `<i class="fa-solid fa-expand"></i>`;
          btn.setAttribute("title", "Toggle Fullscreen");
        }
        if (container) {
          container.classList.remove("fullscreen-active");
        }
      }
    });
    document.querySelectorAll("#subtopic-mode-switcher .mode-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        AudioEngine.play("click");
        switchSubtopicMode(btn.getAttribute("data-mode"));
      });
    });
    document.querySelectorAll(".filter-btn-group .filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        AudioEngine.play("click");
        document.querySelectorAll(".filter-btn-group .filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        setActiveClassicFilter(btn.getAttribute("data-filter"));
        renderClassicView();
      });
    });
    document.getElementById("flashcard-stage").addEventListener("click", flipFlashcard);
    document.getElementById("btn-flashcard-reveal").addEventListener("click", (e) => {
      e.stopPropagation();
      flipFlashcard();
    });
    document.getElementById("btn-flashcard-incorrect").addEventListener("click", (e) => {
      e.stopPropagation();
      handleFlashcardGrade(false);
    });
    document.getElementById("btn-flashcard-correct").addEventListener("click", (e) => {
      e.stopPropagation();
      handleFlashcardGrade(true);
    });
    document.getElementById("timeline-era-select").addEventListener("change", () => {
      AudioEngine.play("click");
      renderTimelineView();
    });
    const searchInput = document.getElementById("timeline-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        renderTimelineView();
      });
    }
    const filterAllBtn = document.getElementById("btn-timeline-filter-all");
    const filterPeopleBtn = document.getElementById("btn-timeline-filter-people");
    if (filterAllBtn && filterPeopleBtn) {
      filterAllBtn.addEventListener("click", () => {
        AudioEngine.play("click");
        filterAllBtn.classList.add("active");
        filterPeopleBtn.classList.remove("active");
        renderTimelineView();
      });
      filterPeopleBtn.addEventListener("click", () => {
        AudioEngine.play("click");
        filterPeopleBtn.classList.add("active");
        filterAllBtn.classList.remove("active");
        renderTimelineView();
      });
    }
    document.getElementById("btn-quick-exam-start").addEventListener("click", () => {
      AudioEngine.play("click");
      const scope = document.getElementById("quick-exam-scope").value;
      const len = document.getElementById("quick-exam-count").value;
      switchView("exam");
      startExam(scope, len, 600);
    });
    document.getElementById("btn-exam-start").addEventListener("click", () => {
      AudioEngine.play("click");
      const scope = document.getElementById("exam-scope-select").value;
      const len = document.getElementById("exam-length-select").value;
      const limit = document.getElementById("exam-timer-select").value;
      startExam(scope, len, limit);
    });
    document.getElementById("btn-exam-skip").addEventListener("click", () => {
      if (state.examSession.activeIndex >= state.examSession.questions.length) return;
      const q = state.examSession.questions[state.examSession.activeIndex];
      state.examSession.answers[q.id] = "(Skipped)";
      state.examSession.grades[q.id] = false;
      AudioEngine.play("fail");
      state.examSession.activeIndex++;
      if (state.examSession.activeIndex >= state.examSession.questions.length) {
        finishExam();
      } else {
        displayExamQuestion();
      }
    });
    document.getElementById("btn-exam-next").addEventListener("click", () => {
      AudioEngine.play("click");
      nextExamQuestion();
    });
    document.getElementById("btn-exam-quit").addEventListener("click", () => {
      AudioEngine.play("click");
      if (confirm("Are you sure you want to stop this recall test? Your progress will be lost.")) {
        showExamSetup();
      }
    });
    document.getElementById("btn-results-finish").addEventListener("click", () => {
      AudioEngine.play("click");
      showExamSetup();
      switchView("dashboard");
    });
    document.getElementById("sound-toggle-btn").addEventListener("click", () => {
      state.soundEnabled = !state.soundEnabled;
      localStorage.setItem("edexcel_sound", JSON.stringify(state.soundEnabled));
      updateSoundBtnUI();
      AudioEngine.play("click");
    });
    document.getElementById("theme-selector").addEventListener("change", (e) => {
      const nextTheme = e.target.value;
      state.theme = nextTheme;
      localStorage.setItem("edexcel_theme", nextTheme);
      document.documentElement.setAttribute("data-theme", nextTheme);
      AudioEngine.play("click");
    });
    document.getElementById("reset-progress-btn").addEventListener("click", () => {
      if (confirm("WARNING: This will completely erase all your mastery stats. Bookmarks will be kept. Proceed?")) {
        state.mastery = {};
        saveProgress();
        renderSidebarNav();
        updateGlobalStats();
        if (state.currentView === "dashboard") {
          renderDashboard();
        } else if (state.currentView === "classic") {
          renderClassicView();
        }
        AudioEngine.play("fail");
      }
    });
    document.getElementById("btn-copy-firefly-code").addEventListener("click", () => {
      const textarea = document.getElementById("firefly-code-textarea");
      textarea.select();
      try {
        document.execCommand("copy");
        const btn = document.getElementById("btn-copy-firefly-code");
        btn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
        AudioEngine.play("success");
        setTimeout(() => {
          btn.innerHTML = `<i class="fa-solid fa-copy"></i> Copy to Clipboard`;
        }, 2e3);
      } catch (err) {
        alert("Failed to copy code. Please select all text and copy manually.");
      }
    });
    document.getElementById("nav-exam-skills").addEventListener("click", () => {
      AudioEngine.play("click");
      switchView("exam-skills");
    });
    document.querySelectorAll(".exam-tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        AudioEngine.play("click");
        const targetPanel = btn.getAttribute("data-panel");
        document.querySelectorAll(".exam-tab-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        document.querySelectorAll(".exam-panel-content").forEach((panel) => {
          panel.style.display = "none";
        });
        document.getElementById(`panel-${targetPanel}`).style.display = "block";
      });
    });
    const consequenceSelect = document.getElementById("consequence-topic-select");
    consequenceSelect.addEventListener("change", (e) => {
      const topicId = e.target.value;
      if (!topicId || !import_questions5.CONSEQUENCE_SKILLS_DATA[topicId]) return;
      AudioEngine.play("click");
      const data = import_questions5.CONSEQUENCE_SKILLS_DATA[topicId];
      document.getElementById("consequence-question-text").textContent = data.question;
      document.getElementById("consequence-question-card").style.display = "block";
      document.getElementById("consequence-user-answer").value = "";
      document.getElementById("consequence-clue-box").style.display = "none";
      document.getElementById("consequence-answer-box").style.display = "none";
      document.getElementById("draft-feedback-consequence").style.display = "none";
      for (let i = 1; i <= 4; i++) {
        const chk = document.getElementById(`chk-consequence-rubric-${i}`);
        if (chk) chk.checked = false;
      }
      document.getElementById("consequence-clue-text").innerHTML = `<strong>Clue:</strong> ${data.clue}`;
      document.getElementById("consequence-model-answer-text").innerHTML = highlightCausalConnectives(data.answer);
      document.getElementById("consequence-input-area").style.display = "none";
      const mcqArea = document.getElementById("consequence-mcq-area");
      mcqArea.style.display = "block";
      const mcqRow = document.getElementById("consequence-mcq-row");
      mcqRow.className = "sequence-item-container";
      const statusMsg = document.getElementById("consequence-mcq-status-msg");
      statusMsg.innerHTML = "Choose the correct starter sentence to unlock the writing zone.";
      const correctOpener = data.answer.split(".")[0].trim() + ".";
      const allOtherOpeners = [];
      for (const [key, item] of Object.entries(import_questions5.CONSEQUENCE_SKILLS_DATA)) {
        if (key !== topicId) {
          const opener = item.answer.split(".")[0].trim() + ".";
          if (opener && !allOtherOpeners.includes(opener)) {
            allOtherOpeners.push(opener);
          }
        }
      }
      const shuffledDistractors = allOtherOpeners.sort(() => 0.5 - Math.random());
      const distractor1 = shuffledDistractors[0];
      const distractor2 = shuffledDistractors[1];
      const choices = [correctOpener, distractor1, distractor2];
      const shuffledChoices = choices.sort(() => 0.5 - Math.random());
      const mcqSelect = document.getElementById("consequence-mcq-select");
      mcqSelect.innerHTML = '<option value="" disabled selected>-- Choose the correct starter sentence --</option>';
      shuffledChoices.forEach((choice) => {
        mcqSelect.innerHTML += `<option value="${choice === correctOpener ? "correct" : "incorrect"}">${choice}</option>`;
      });
    });
    document.getElementById("btn-consequence-mcq-verify").addEventListener("click", () => {
      const topicId = consequenceSelect.value;
      if (!topicId || !import_questions5.CONSEQUENCE_SKILLS_DATA[topicId]) return;
      const mcqSelect = document.getElementById("consequence-mcq-select");
      const selectedValue = mcqSelect.value;
      const statusMsg = document.getElementById("consequence-mcq-status-msg");
      const mcqRow = document.getElementById("consequence-mcq-row");
      if (!selectedValue) {
        AudioEngine.play("fail");
        statusMsg.innerHTML = '<span style="color: var(--accent);">Please choose an option before verifying.</span>';
        return;
      }
      mcqRow.className = "sequence-item-container";
      if (selectedValue === "correct") {
        AudioEngine.play("success");
        mcqRow.classList.add("correct-sequence");
        statusMsg.innerHTML = '<span style="color: var(--success);"><i class="fa-solid fa-circle-check"></i> Correct! Opener Verified. Step 2 Unlocked.</span>';
        document.getElementById("consequence-input-area").style.display = "flex";
        document.getElementById("consequence-user-answer").focus();
        document.getElementById("draft-feedback-consequence").style.display = "block";
        updateRealTimeFeedback("consequence", "", import_questions5.CONSEQUENCE_SKILLS_DATA[topicId], topicId);
      } else {
        AudioEngine.play("fail");
        mcqRow.classList.add("incorrect-sequence");
        statusMsg.innerHTML = '<span style="color: var(--accent);"><i class="fa-solid fa-circle-xmark"></i> Incorrect. That did not happen as a result of this event. Try again!</span>';
        document.getElementById("consequence-input-area").style.display = "none";
      }
    });
    document.getElementById("btn-consequence-clue").addEventListener("click", () => {
      const box = document.getElementById("consequence-clue-box");
      const isHidden = box.style.display === "none";
      box.style.display = isHidden ? "block" : "none";
      if (isHidden) {
        AudioEngine.play("flip");
        box.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        AudioEngine.play("click");
      }
    });
    document.getElementById("btn-consequence-selfcheck").addEventListener("click", () => {
      const box = document.getElementById("consequence-answer-box");
      const isHidden = box.style.display === "none";
      if (isHidden) {
        const topicId = document.getElementById("consequence-topic-select").value;
        const questionObj = import_questions5.CONSEQUENCE_SKILLS_DATA[topicId];
        const userAnswer = document.getElementById("consequence-user-answer").value;
        if (questionObj) {
          const evaluation = evaluateStudentAnswer("consequence", questionObj, userAnswer);
          for (let i = 1; i <= 4; i++) {
            const chk = document.getElementById(`chk-consequence-rubric-${i}`);
            if (chk) chk.checked = evaluation.scores[i - 1];
          }
          const feedbackContainer = document.getElementById("consequence-heuristic-feedback");
          if (feedbackContainer) {
            feedbackContainer.innerHTML = evaluation.feedback;
            feedbackContainer.style.display = "block";
          }
        }
        box.style.display = "block";
        AudioEngine.play("success");
        box.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        box.style.display = "none";
        const feedbackContainer = document.getElementById("consequence-heuristic-feedback");
        if (feedbackContainer) feedbackContainer.style.display = "none";
        AudioEngine.play("click");
      }
    });
    document.getElementById("btn-consequence-reset").addEventListener("click", () => {
      AudioEngine.play("click");
      document.getElementById("consequence-user-answer").value = "";
      document.getElementById("consequence-clue-box").style.display = "none";
      document.getElementById("consequence-answer-box").style.display = "none";
      document.getElementById("draft-feedback-consequence").style.display = "none";
      const feedbackContainer = document.getElementById("consequence-heuristic-feedback");
      if (feedbackContainer) {
        feedbackContainer.innerHTML = "";
        feedbackContainer.style.display = "none";
      }
      for (let i = 1; i <= 4; i++) {
        const chk = document.getElementById(`chk-consequence-rubric-${i}`);
        if (chk) chk.checked = false;
      }
    });
    document.getElementById("consequence-user-answer").addEventListener("input", (e) => {
      const topicId = consequenceSelect.value;
      if (topicId && import_questions5.CONSEQUENCE_SKILLS_DATA[topicId]) {
        updateRealTimeFeedback("consequence", e.target.value, import_questions5.CONSEQUENCE_SKILLS_DATA[topicId], topicId);
      }
    });
    const narrativeSelect = document.getElementById("narrative-topic-select");
    const nSelect1 = document.getElementById("seq-select-1");
    const nSelect2 = document.getElementById("seq-select-2");
    const nSelect3 = document.getElementById("seq-select-3");
    narrativeSelect.addEventListener("change", (e) => {
      const topicId = e.target.value;
      if (!topicId || !import_questions5.NARRATIVE_SKILLS_DATA[topicId]) return;
      AudioEngine.play("click");
      const data = import_questions5.NARRATIVE_SKILLS_DATA[topicId];
      document.getElementById("narrative-question-text").textContent = data.question;
      document.getElementById("narrative-question-card").style.display = "block";
      document.getElementById("narrative-sorter-area").style.display = "block";
      document.getElementById("narrative-input-area").style.display = "none";
      document.getElementById("narrative-answer-box").style.display = "none";
      const kwFeedbackContainer = document.getElementById("narrative-keyword-feedback");
      if (kwFeedbackContainer) {
        kwFeedbackContainer.innerHTML = "";
        kwFeedbackContainer.style.display = "none";
      }
      const optionsHtml = `
      <option value="" disabled selected>-- Choose Event --</option>
      ${data.events.map((evt, idx) => `<option value="${idx}">${evt}</option>`).join("")}
    `;
      nSelect1.innerHTML = optionsHtml;
      nSelect2.innerHTML = optionsHtml;
      nSelect3.innerHTML = optionsHtml;
      document.getElementById("seq-row-1").className = "sequence-item-container";
      document.getElementById("seq-row-2").className = "sequence-item-container";
      document.getElementById("seq-row-3").className = "sequence-item-container";
      document.getElementById("sequence-status-msg").innerHTML = "Select all three events to verify chronology.";
      document.getElementById("narrative-user-answer").value = "";
      document.querySelectorAll(".process-word").forEach((chip) => chip.classList.remove("used"));
      document.getElementById("draft-feedback-narrative").style.display = "none";
      for (let i = 1; i <= 4; i++) {
        const chk = document.getElementById(`chk-narrative-rubric-${i}`);
        if (chk) chk.checked = false;
      }
    });
    document.getElementById("btn-narrative-verify").addEventListener("click", () => {
      const topicId = narrativeSelect.value;
      if (!topicId || !import_questions5.NARRATIVE_SKILLS_DATA[topicId]) return;
      const data = import_questions5.NARRATIVE_SKILLS_DATA[topicId];
      const v1 = parseInt(nSelect1.value);
      const v2 = parseInt(nSelect2.value);
      const v3 = parseInt(nSelect3.value);
      const statusMsg = document.getElementById("sequence-status-msg");
      if (isNaN(v1) || isNaN(v2) || isNaN(v3)) {
        AudioEngine.play("fail");
        statusMsg.innerHTML = "Please select all three events before verifying.";
        return;
      }
      const isCorrect = v1 === data.correct[0] && v2 === data.correct[1] && v3 === data.correct[2];
      const r1 = document.getElementById("seq-row-1");
      const r2 = document.getElementById("seq-row-2");
      const r3 = document.getElementById("seq-row-3");
      r1.className = "sequence-item-container";
      r2.className = "sequence-item-container";
      r3.className = "sequence-item-container";
      if (isCorrect) {
        AudioEngine.play("success");
        r1.classList.add("correct-sequence");
        r2.classList.add("correct-sequence");
        r3.classList.add("correct-sequence");
        statusMsg.innerHTML = '<span style="color: var(--success);"><i class="fa-solid fa-circle-check"></i> Chronology Verified! Step 2 Unlocked.</span>';
        document.getElementById("narrative-input-area").style.display = "flex";
        document.getElementById("draft-feedback-narrative").style.display = "block";
        updateRealTimeFeedback("narrative", "", data, topicId);
      } else {
        AudioEngine.play("fail");
        r1.classList.add("incorrect-sequence");
        r2.classList.add("incorrect-sequence");
        r3.classList.add("incorrect-sequence");
        statusMsg.innerHTML = '<span style="color: var(--accent);"><i class="fa-solid fa-circle-xmark"></i> Incorrect sequence. Check chronology and try again.</span>';
        document.getElementById("narrative-input-area").style.display = "none";
      }
    });
    document.getElementById("narrative-user-answer").addEventListener("input", (e) => {
      const text = e.target.value.toLowerCase();
      const wordMappings = {
        "pw-intensified": "intensified",
        "pw-triggered": "triggered",
        "pw-escalated": "escalated",
        "pw-forced": "forced",
        "pw-deteriorated": "deteriorated",
        "pw-provoked": "provoked",
        "pw-resulted": "resulted",
        "pw-enabled": "enabled"
      };
      for (const [id, word] of Object.entries(wordMappings)) {
        const chip = document.getElementById(id);
        if (chip) {
          if (text.includes(word)) {
            chip.classList.add("used");
          } else {
            chip.classList.remove("used");
          }
        }
      }
      const topicId = narrativeSelect.value;
      if (topicId && import_questions5.NARRATIVE_SKILLS_DATA[topicId]) {
        updateRealTimeFeedback("narrative", e.target.value, import_questions5.NARRATIVE_SKILLS_DATA[topicId], topicId);
      }
    });
    function highlightKeywords(text, keywords) {
      let escaped = (text || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
      if (!keywords || keywords.length === 0) return escaped;
      const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
      const placeholders = [];
      sortedKeywords.forEach((kw) => {
        const escapedKw = kw.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        const regex = new RegExp(`\\b${escapedKw}\\b`, "gi");
        escaped = escaped.replace(regex, (match) => {
          const placeholder = `___KEYWORD_PLACEHOLDER_${placeholders.length}___`;
          placeholders.push({
            placeholder,
            content: `<span class="highlight-word" style="font-weight: 600;">${match}</span>`
          });
          return placeholder;
        });
        if (!/\w/.test(kw[0]) || !/\w/.test(kw[kw.length - 1])) {
          const fallbackRegex = new RegExp(escapedKw, "gi");
          escaped = escaped.replace(fallbackRegex, (match) => {
            const placeholder = `___KEYWORD_PLACEHOLDER_${placeholders.length}___`;
            placeholders.push({
              placeholder,
              content: `<span class="highlight-word" style="font-weight: 600;">${match}</span>`
            });
            return placeholder;
          });
        }
      });
      for (let i = placeholders.length - 1; i >= 0; i--) {
        escaped = escaped.replace(placeholders[i].placeholder, placeholders[i].content);
      }
      return escaped;
    }
    document.getElementById("btn-narrative-selfcheck").addEventListener("click", () => {
      const topicId = narrativeSelect.value;
      if (!topicId || !import_questions5.NARRATIVE_SKILLS_DATA[topicId]) return;
      const box = document.getElementById("narrative-answer-box");
      const isHidden = box.style.display === "none";
      if (isHidden) {
        const questionObj = import_questions5.NARRATIVE_SKILLS_DATA[topicId];
        const userAnswer = document.getElementById("narrative-user-answer").value;
        const evaluation = evaluateStudentAnswer("narrative", questionObj, userAnswer);
        for (let i = 1; i <= 4; i++) {
          const chk = document.getElementById(`chk-narrative-rubric-${i}`);
          if (chk) chk.checked = evaluation.scores[i - 1];
        }
        const feedbackContainer = document.getElementById("narrative-heuristic-feedback");
        if (feedbackContainer) {
          feedbackContainer.innerHTML = evaluation.feedback;
          feedbackContainer.style.display = "block";
        }
        const kwFeedbackContainer = document.getElementById("narrative-keyword-feedback");
        if (kwFeedbackContainer) {
          const keywords = evaluation.keywords || [];
          const matchedKeywords = evaluation.matchedKeywords || [];
          const highlightedUserAns = highlightKeywords(userAnswer, matchedKeywords);
          let kwHtml = `
          <div style="font-weight: 700; font-size: 0.9rem; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; color: var(--primary);">
            <i class="fa-solid fa-magnifying-glass"></i> Historical Keyword Spotter
          </div>
          <p style="font-size: 0.85rem; margin-bottom: 12px; color: var(--text-muted);">
            Matched keywords are highlighted in your response below:
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px;">
        `;
          keywords.forEach((kw) => {
            const isMatched = matchedKeywords.some((m) => m.toLowerCase() === kw.toLowerCase());
            const statusClass = isMatched ? "matched" : "missed";
            const icon = isMatched ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-solid fa-circle-xmark"></i>';
            kwHtml += `<span class="keyword-tag ${statusClass}">${icon} ${kw}</span>`;
          });
          kwHtml += `
          </div>
          <div class="user-highlighted-answer" style="padding: 12px; background: rgba(255, 255, 255, 0.05); border-left: 3px solid var(--primary); border-radius: var(--border-radius-sm); font-size: 0.9rem; line-height: 1.5; color: var(--text-main); font-style: italic; overflow-wrap: break-word;">
            ${highlightedUserAns || '<span style="color: var(--text-muted);">[No answer provided]</span>'}
          </div>
        `;
          kwFeedbackContainer.innerHTML = kwHtml;
          kwFeedbackContainer.style.display = "block";
        }
        box.style.display = "block";
        AudioEngine.play("success");
        document.getElementById("narrative-model-answer-text").innerHTML = import_questions5.NARRATIVE_SKILLS_DATA[topicId].model;
        box.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        box.style.display = "none";
        const feedbackContainer = document.getElementById("narrative-heuristic-feedback");
        if (feedbackContainer) feedbackContainer.style.display = "none";
        const kwFeedbackContainer = document.getElementById("narrative-keyword-feedback");
        if (kwFeedbackContainer) kwFeedbackContainer.style.display = "none";
        AudioEngine.play("click");
      }
    });
    document.getElementById("btn-narrative-reset").addEventListener("click", () => {
      AudioEngine.play("click");
      document.getElementById("narrative-user-answer").value = "";
      document.getElementById("narrative-answer-box").style.display = "none";
      document.querySelectorAll(".process-word").forEach((chip) => chip.classList.remove("used"));
      document.getElementById("draft-feedback-narrative").style.display = "none";
      const feedbackContainer = document.getElementById("narrative-heuristic-feedback");
      if (feedbackContainer) {
        feedbackContainer.innerHTML = "";
        feedbackContainer.style.display = "none";
      }
      const kwFeedbackContainer = document.getElementById("narrative-keyword-feedback");
      if (kwFeedbackContainer) {
        kwFeedbackContainer.innerHTML = "";
        kwFeedbackContainer.style.display = "none";
      }
      for (let i = 1; i <= 4; i++) {
        const chk = document.getElementById(`chk-narrative-rubric-${i}`);
        if (chk) chk.checked = false;
      }
    });
    const importanceSelect = document.getElementById("importance-topic-select");
    importanceSelect.addEventListener("change", (e) => {
      const topicId = e.target.value;
      if (!topicId || !import_questions5.EXAM_SKILLS_DATA[topicId]) return;
      AudioEngine.play("click");
      const data = import_questions5.EXAM_SKILLS_DATA[topicId];
      document.getElementById("importance-question-text").textContent = data.question;
      document.getElementById("importance-question-card").style.display = "block";
      document.getElementById("importance-user-answer").value = "";
      document.getElementById("importance-clue-box").style.display = "none";
      document.getElementById("importance-answer-box").style.display = "none";
      document.getElementById("draft-feedback-importance").style.display = "none";
      for (let i = 1; i <= 4; i++) {
        const chk = document.getElementById(`chk-importance-rubric-${i}`);
        if (chk) chk.checked = false;
      }
      document.getElementById("importance-clue-text").innerHTML = `<strong>Clue 1:</strong> ${data.clue1}<br><br><strong>Clue 2:</strong> ${data.clue2}`;
      document.getElementById("importance-model-answer-text").innerHTML = data.answer;
      document.getElementById("importance-input-area").style.display = "flex";
      document.getElementById("importance-user-answer").focus();
      document.getElementById("draft-feedback-importance").style.display = "block";
      updateRealTimeFeedback("importance", "", data, topicId);
    });
    document.getElementById("btn-importance-clue").addEventListener("click", () => {
      const box = document.getElementById("importance-clue-box");
      const isHidden = box.style.display === "none";
      box.style.display = isHidden ? "block" : "none";
      if (isHidden) {
        AudioEngine.play("flip");
        box.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        AudioEngine.play("click");
      }
    });
    document.getElementById("btn-importance-selfcheck").addEventListener("click", () => {
      const box = document.getElementById("importance-answer-box");
      const isHidden = box.style.display === "none";
      if (isHidden) {
        const topicId = document.getElementById("importance-topic-select").value;
        const questionObj = import_questions5.EXAM_SKILLS_DATA[topicId];
        const userAnswer = document.getElementById("importance-user-answer").value;
        if (questionObj) {
          const evaluation = evaluateStudentAnswer("importance", questionObj, userAnswer);
          for (let i = 1; i <= 4; i++) {
            const chk = document.getElementById(`chk-importance-rubric-${i}`);
            if (chk) chk.checked = evaluation.scores[i - 1];
          }
          const feedbackContainer = document.getElementById("importance-heuristic-feedback");
          if (feedbackContainer) {
            feedbackContainer.innerHTML = evaluation.feedback;
            feedbackContainer.style.display = "block";
          }
        }
        box.style.display = "block";
        AudioEngine.play("success");
        box.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        box.style.display = "none";
        const feedbackContainer = document.getElementById("importance-heuristic-feedback");
        if (feedbackContainer) feedbackContainer.style.display = "none";
        AudioEngine.play("click");
      }
    });
    document.getElementById("btn-importance-reset").addEventListener("click", () => {
      AudioEngine.play("click");
      document.getElementById("importance-user-answer").value = "";
      document.getElementById("importance-clue-box").style.display = "none";
      document.getElementById("importance-answer-box").style.display = "none";
      document.getElementById("draft-feedback-importance").style.display = "none";
      const feedbackContainer = document.getElementById("importance-heuristic-feedback");
      if (feedbackContainer) {
        feedbackContainer.innerHTML = "";
        feedbackContainer.style.display = "none";
      }
      for (let i = 1; i <= 4; i++) {
        const chk = document.getElementById(`chk-importance-rubric-${i}`);
        if (chk) chk.checked = false;
      }
    });
    document.getElementById("shortcut-past-papers").addEventListener("click", () => {
      AudioEngine.play("click");
      switchView("past-papers");
    });
    document.getElementById("nav-past-papers").addEventListener("click", () => {
      AudioEngine.play("click");
      switchView("past-papers");
    });
    const navGames = document.getElementById("nav-games");
    if (navGames) {
      navGames.addEventListener("click", () => {
        AudioEngine.play("click");
        switchView("games");
      });
    }
    const shortcutGames = document.getElementById("shortcut-games");
    if (shortcutGames) {
      shortcutGames.addEventListener("click", () => {
        AudioEngine.play("click");
        switchView("games");
      });
    }
    document.getElementById("btn-start-past-paper").addEventListener("click", () => {
      const val = document.getElementById("past-paper-select").value;
      if (!val) return;
      AudioEngine.play("click");
      startPastPaper(val);
    });
    document.getElementById("btn-generate-mock").addEventListener("click", () => {
      AudioEngine.play("click");
      generateMockExam();
    });
    document.getElementById("importance-user-answer").addEventListener("input", (e) => {
      const topicId = importanceSelect.value;
      if (topicId && import_questions5.EXAM_SKILLS_DATA[topicId]) {
        updateRealTimeFeedback("importance", e.target.value, import_questions5.EXAM_SKILLS_DATA[topicId], topicId);
      }
    });
  }
  function extractKeywordsFromAnswer(htmlAnswer) {
    if (!htmlAnswer) return [];
    const cleanText = htmlAnswer.replace(/<[^>]*>/g, " ");
    const candidates = [];
    const propReg = /\b[A-Z][a-zA-Z]*(?:\s+[A-Z][a-zA-Z]*)*\b/g;
    let match;
    while ((match = propReg.exec(cleanText)) !== null) {
      const term = match[0].trim();
      if (term.length > 2 && !candidates.includes(term)) {
        candidates.push(term);
      }
    }
    const numReg = /\b\d{2,4}\b/g;
    while ((match = numReg.exec(cleanText)) !== null) {
      const term = match[0].trim();
      if (!candidates.includes(term)) {
        candidates.push(term);
      }
    }
    const stopWords = ["One", "This", "The", "Following", "Point", "It", "By", "In", "Explain", "Both", "To", "Arab", "Jewish", "Israel", "Israeli", "Egypt", "Egyptian", "Palestine", "Palestinian", "Jordan", "Syria", "Syrian", "British", "Britain"];
    const filtered = candidates.filter((term) => {
      return !stopWords.includes(term);
    });
    return filtered.slice(0, 5);
  }
  function getKeywordsForQuestion(type, questionId, questionObj) {
    if (!questionObj) return [];
    if (questionObj.keywords && Array.isArray(questionObj.keywords)) {
      return questionObj.keywords;
    }
    const predefined = {
      consequence: {
        "1.1a": ["Irgun", "91 deaths", "UN", "1947", "Mandate"],
        "1.1b": ["Resolution 181", "civil war", "partition plan", "invading Arab armies"],
        "1.2a": ["IDF", "Haganah", "Irgun", "Lehi", "coordinated defence"],
        "1.2b": ["Law of Return", "immigration", "refugees", "demographic shift"],
        "1.3a": ["Gaza", "Nasser", "Soviet arms", "Czechoslovak arms deal"],
        "1.3b": ["UNEF", "Sinai Peninsula", "Straits of Tiran", "Fedayeen raids"],
        "2.1a": ["Cairo Conference", "PLO", "Arab leaders", "national aspirations"],
        "2.1b": ["water diversion", "Fatah raids", "demilitarised zones", "Syria"],
        "2.2a": ["UN Resolution 242", "territories", "peace for land", "diplomatic deadlock"],
        "2.2b": ["refugee crisis", "Six Day War", "Gaza Strip", "West Bank"],
        "2.3a": ["October War", "Suez Canal", "air defense", "surprise attack"],
        "2.3b": ["oil weapon", "embargo", "OPEC", "inflation"],
        "3.1a": ["Sadat visit", "Jerusalem", "Knesset speech", "psychological barrier"],
        "3.1b": ["Camp David Accords", "peace treaty", "Sinai", "recognition of Israel"],
        "3.2a": ["invasion of Lebanon", "Operation Peace for Galilee", "Ariel Sharon", "Sabra and Shatila"],
        "3.2b": ["First Intifada", "stone-throwing", "civil disobedience", "Iron Fist policy"],
        "3.3a": ["Oslo Accords", "Yasser Arafat", "Yitzhak Rabin", "PNA", "mutual recognition"],
        "3.3b": ["assassination of Rabin", "nationalist extremist", "peace rally", "interim agreements"]
      },
      importance: {
        "1.1a": ["King David Hotel", "British morale", "91 deaths", "UN hand-over", "1947"],
        "1.1b": ["UN Resolution 181", "Jewish state", "partition plan", "civil war", "legitimacy"],
        "1.2a": ["IDF", "co-ordinated defence", "conscription", "invading Arab armies"],
        "1.3a": ["Suez Crisis", "Fedayeen bases", "UNEF", "Straits of Tiran", "Eilat"],
        "2.1a": ["Straits of Tiran", "blockade", "Eilat", "Iranian oil", "pre-emptive strike"],
        "2.2a": ["occupied territories", "buffer zones", "peace for land", "Resolution 242"],
        "2.3a": ["Yom Kippur War", "Suez Canal", "Kissinger shuttle diplomacy", "Sadat visit"],
        "3.1a": ["Sadat Knesset speech", "Menachem Begin", "psychological barrier", "Camp David"],
        "3.2a": ["Hebron", "Oslo Accords", "Likud opposition", "settler violence"],
        "3.3a": ["Oslo Accords", "Yasser Arafat", "Yitzhak Rabin", "PNA", "mutual recognition"],
        "3.3b": ["peace treaty with Jordan", "King Hussein", "Rabin", "normalized relations"]
      }
    };
    if (predefined[type] && predefined[type][questionId]) {
      return predefined[type][questionId];
    }
    return extractKeywordsFromAnswer(questionObj.answer || "");
  }
  function updateRealTimeFeedback(type, value, questionObj, questionId) {
    const feedbackCard = document.getElementById(`draft-feedback-${type}`);
    if (!feedbackCard) return;
    feedbackCard.style.display = "flex";
    const text = (value || "").toLowerCase();
    const connectives = ["as a result", "consequently", "this led to", "therefore"];
    const matchedConnectives = [];
    const connectiveTagsContainer = document.getElementById(`connective-tags-${type}`);
    if (connectiveTagsContainer) {
      connectiveTagsContainer.innerHTML = "";
      connectives.forEach((conn) => {
        const isMatched = text.includes(conn.toLowerCase());
        if (isMatched) matchedConnectives.push(conn);
        const tag = document.createElement("span");
        tag.className = `feedback-tag ${isMatched ? "matched" : ""}`;
        tag.innerHTML = isMatched ? `<i class="fa-solid fa-check"></i> ${conn}` : conn;
        connectiveTagsContainer.appendChild(tag);
      });
    }
    const keywords = getKeywordsForQuestion(type, questionId, questionObj);
    const matchedKeywords = [];
    const keywordTagsContainer = document.getElementById(`keyword-tags-${type}`);
    const keywordRow = document.getElementById(`keyword-feedback-row-${type}`);
    if (keywords && keywords.length > 0) {
      if (keywordRow) keywordRow.style.display = "block";
      if (keywordTagsContainer) {
        keywordTagsContainer.innerHTML = "";
        keywords.forEach((kw) => {
          const isMatched = text.includes(kw.toLowerCase());
          if (isMatched) matchedKeywords.push(kw);
          const tag = document.createElement("span");
          tag.className = `feedback-tag ${isMatched ? "matched" : ""}`;
          tag.innerHTML = isMatched ? `<i class="fa-solid fa-check"></i> ${kw}` : kw;
          keywordTagsContainer.appendChild(tag);
        });
      }
    } else {
      if (keywordRow) keywordRow.style.display = "none";
    }
    const totalItems = connectives.length + keywords.length;
    const matchedItems = matchedConnectives.length + matchedKeywords.length;
    const pct = totalItems > 0 ? Math.round(matchedItems / totalItems * 100) : 0;
    const fillEl = document.getElementById(`feedback-fill-${type}`);
    if (fillEl) {
      fillEl.style.width = `${pct}%`;
    }
    const badgeEl = document.getElementById(`feedback-badge-${type}`);
    if (badgeEl) {
      badgeEl.className = "feedback-badge";
      if (pct === 100) {
        badgeEl.classList.add("status-outstanding");
        badgeEl.textContent = "Structure: Outstanding";
      } else if (pct >= 70) {
        badgeEl.classList.add("status-strong");
        badgeEl.textContent = "Structure: Strong";
      } else if (pct >= 30) {
        badgeEl.classList.add("status-developing");
        badgeEl.textContent = "Structure: Developing";
      } else {
        badgeEl.textContent = "Structure: Drafting";
      }
    }
  }

  // src/storage.js
  function initData() {
    state.allQuestions = [];
    import_questions6.QUIZ_DATA.forEach((topic) => {
      topic.subtopics.forEach((subtopic) => {
        subtopic.standard.forEach((q) => {
          state.allQuestions.push({
            ...q,
            type: "standard",
            topicId: topic.id,
            topicTitle: topic.title,
            subtopicId: subtopic.id,
            subtopicTitle: subtopic.title
          });
        });
        subtopic.depth.forEach((q) => {
          state.allQuestions.push({
            ...q,
            type: "depth",
            topicId: topic.id,
            topicTitle: topic.title,
            subtopicId: subtopic.id,
            subtopicTitle: subtopic.title
          });
        });
      });
    });
    try {
      const storedMastery = localStorage.getItem("edexcel_mastery") || localStorage.getItem("firefly_mastery");
      const storedBookmarks = localStorage.getItem("edexcel_bookmarks") || localStorage.getItem("firefly_bookmarks");
      const storedSound = localStorage.getItem("edexcel_sound") || localStorage.getItem("firefly_sound");
      const storedTheme = localStorage.getItem("edexcel_theme") || localStorage.getItem("firefly_theme");
      const storedPastAnswers = localStorage.getItem("edexcel_past_answers");
      const storedPastCompleted = localStorage.getItem("edexcel_past_completed");
      if (storedMastery) state.mastery = JSON.parse(storedMastery);
      if (storedBookmarks) state.bookmarks = JSON.parse(storedBookmarks);
      if (storedSound) state.soundEnabled = JSON.parse(storedSound);
      if (storedTheme) state.theme = storedTheme;
      if (storedPastAnswers) state.pastPaperSession.answers = JSON.parse(storedPastAnswers);
      if (storedPastCompleted) state.pastPaperSession.completedQuestions = JSON.parse(storedPastCompleted);
    } catch (e) {
      console.error("LocalStorage load error:", e);
    }
    document.documentElement.setAttribute("data-theme", state.theme);
    const themeSelector = document.getElementById("theme-selector");
    if (themeSelector) themeSelector.value = state.theme;
    updateSoundBtnUI();
  }
  function saveProgress() {
    try {
      localStorage.setItem("edexcel_mastery", JSON.stringify(state.mastery));
      localStorage.setItem("edexcel_bookmarks", JSON.stringify(state.bookmarks));
      localStorage.setItem("edexcel_past_answers", JSON.stringify(state.pastPaperSession.answers));
      localStorage.setItem("edexcel_past_completed", JSON.stringify(state.pastPaperSession.completedQuestions));
    } catch (e) {
      console.error("LocalStorage save error:", e);
    }
    updateGlobalStats();
  }
  function setMastered(questionId, isMastered) {
    const previousStatus = !!state.mastery[questionId];
    if (previousStatus === isMastered) return;
    state.mastery[questionId] = isMastered;
    saveProgress();
    if (isMastered) {
      const question = state.allQuestions.find((q) => q.id === questionId);
      if (question) {
        const subtopicQuestions = state.allQuestions.filter((q) => q.subtopicId === question.subtopicId);
        const masteredInSubtopic = subtopicQuestions.filter((q) => state.mastery[q.id]);
        if (masteredInSubtopic.length === subtopicQuestions.length) {
          AudioEngine.play("cheer");
          Confetti.spawn(100);
        }
      }
    }
  }
  function toggleBookmark(questionId) {
    const idx = state.bookmarks.indexOf(questionId);
    if (idx > -1) {
      state.bookmarks.splice(idx, 1);
    } else {
      state.bookmarks.push(questionId);
    }
    saveProgress();
    updateBookmarksUI();
    AudioEngine.play("click");
  }

  // src/main.js
  window.addEventListener("DOMContentLoaded", () => {
    initData();
    renderSidebarNav();
    updateGlobalStats();
    bindEvents();
    window.switchView = switchView;
    const closeBtn = document.getElementById("video-modal-close-btn");
    if (closeBtn) {
      const handleClose = (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeVideoModal();
      };
      closeBtn.addEventListener("click", handleClose);
      closeBtn.addEventListener("touchend", handleClose);
    }
    const modalOverlay = document.getElementById("video-modal-overlay");
    if (modalOverlay) {
      modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
          e.preventDefault();
          e.stopPropagation();
          closeVideoModal();
        }
      });
      modalOverlay.addEventListener("touchend", (e) => {
        if (e.target === modalOverlay) {
          e.preventDefault();
          e.stopPropagation();
          closeVideoModal();
        }
      });
    }
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalOverlay && modalOverlay.style.display === "flex") {
        closeVideoModal();
      }
    });
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (a && a.getAttribute("target") === "_blank") {
        const href = a.getAttribute("href");
        if (href && href !== "#") {
          e.preventDefault();
          if (window.Capacitor && window.Capacitor.platform !== "web") {
            window.open(href, "_system");
          } else {
            window.open(href, "_blank");
          }
        }
      }
    });
    switchView("dashboard");
  });
})();
