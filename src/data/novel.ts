import { Novel } from '@/types/novel';

// @ts-expect-error - Novel data structure is being dynamically built
export const novels: Novel[] = [
  {
    id: 'chamomile-tea',
    title: {
      en: 'Waiting For The Chamomile Tea To Get Cold',
      ko: '카모마일 차가 식기를 기다리며',
    },
    author: 'Midnightly1',
    description: {
      en: 'Two people who are rebuilding themselves - not through grand confessions or miracles, but by simply being seen. The story isn\'t about "falling in love," but about learning to exist again after love, burnout, or disillusionment.',
      ko: '웅장한 고백이나 기적이 아니라 단순히 보여지는 것으로 자신을 재건하는 두 사람. 이 이야기는 "사랑에 빠지는 것"이 아니라 사랑, 번아웃 또는 환멸 후에 다시 존재하는 법을 배우는 것에 관한 것입니다.',
    },
    genre: {
      en: 'Slice of Life / Drama / Romance',
      ko: '일상 / 드라마 / 로맨스',
    },
    status: {
      en: 'Ongoing',
      ko: '연재중',
    },
    lastUpdated: '2025-10-12',
    chapters: [
      {
        id: '1',
        number: 1,
        title: {
          en: 'The Color of Exhaustion',
          ko: '지친 색',
        },
        publishDate: '2025-10-12',
        content: {
          en: `At closing, the cafe looked like it had yawned. Chairs tipped onto tables like tired elbows, floor brushed with footprints that had melted from salt to dark gray circles. Heather snapped the deadbolt and watched her reflection waver in the glass.

Ghosted by streetlight, a smear of taxi yellow moving across her face as if color were something that only passed through.

Outside, the kind of rain that didn't commit fell sideways in the wind. Soft, persistent, a continuation of snow that had run out of faith. Steam rose from the manhole at the corner, the city's exhale. She tucked her chin into her scarf and stepped into the gray.

The key was still warm in her palm. The notebook in her pocket was warmer. She had been on her feet seven hours and still felt like she hadn't arrived anywhere. The bell above the door had chimed at least two hundred times. Her hands remembered each order in little muscle memory signatures: tap the portafilter, turn the pitcher, breathe. She'd made three cappuccinos with hearts so crooked they looked like they were trying to fall out of love. The regular who smelled faintly of library dust had ordered chamomile and left it untouched again, waiting it out.

In the notebook she had written, in small slanted letters: *There's a man who orders chamomile tea but never drinks it until it's cold.*

Outside, tires painted the street in long, reflective strokes. Her boots squeaked once on the wet crosswalk paint, then found asphalt. The cafe's neon sign cut off with the building's timer, and the block dimmed a measure, like a song moving into its bridge.

Heather liked the city best like this, half-asleep, honest.

Down the stairs, the subway held its breath. The tile walls wore their age without apology: hairline cracks branching like small rivers; posters for shows that promised the world. The turnstile groaned. The OMNY pad creaked. Somewhere a busker's saxophone tried to remember a melody and gave up unwillingly.

On the platform, people arranged themselves in shapes of weariness. Two teens sat too close, trying to fit both their laughter and their knees into the same square of bench. A construction worker rubbed his eyes with a gloved hand and left a crescent of dust on his cheek.

Heather hovered at the yellow line and didn't look down. She took out the notebook instead. The pencil she used was bitten more than sharpened. She liked how graphite tasted. At least then, she could feel something.

First the wind, then the smell, then the breaks, wanting to be heart over even the best noise canceling headphones. Brakes expressed themselves in a long metallic vowel that held the whole station in it. Doors opened with their familiar, patient annoyance. She stepped in and found a spot by the pole, the car's fluorescent light making everyone look like they belonged to the same family of fish.

She thought about the café and how it held her without holding her. The smell of citrus cleaner and coffee oils, the dim patch near the register where paint had peeled back like a scab and never been repainted. The regular who always said, "Surprise me," and then flinched when she actually did. The espresso shot that ran blond too quickly and looked like it had given up on being itself. Her own voice turning automatic somewhere around hour four: next please, receipt in the bag, have a good night—phrases worn smooth like a stone she kept in her pocket and forgot to feel.

She touched the notebook again, the soft corners. It was easier to write down the city than it was to feel anything in it.

Across from her, a man in a wool coat fell asleep mid-text, phone balanced on his thigh. The train swayed and didn't disturb his guiltless nap. Beside him, there was someone with a sketchbook open, pencil moving in small, careful motions—clicks of wrist, soot of shadow. Heather didn't look long enough to make it mean anything; she was careful with her eyes. She wrote instead:

*Hands tell on us—baristas with coffee moons, students with ink knuckles, winter hands red at the joints. Artists move their wrists like they're dirtying water.*

The train lurched. An ad across the car promised sleep in three weeks if you bought the right mattress. She remembered her own bed, the way the sheet had pulled at the corners like it wanted to become something else—a sail, a quiet flag. Her apartment had one good window that faced a brick wall and a sliver of sky that changed colors like mood lighting for pigeons. She liked it most when the radiator ticked and made the place sound like an old watch still working.

The car thinned out at Union Square. A woman with a plant held it close, leaves shivering each time the doors shut. Heather imagined roots waking at night, listening.

She let her head rest against the cool metal. When she closed her eyes, she could still see the café's milk steaming into a white fog and hear Heather-from-four-hours-ago say, What can I get started for you? It was a kind voice. It didn't belong to her.

At 14th Street a man in a navy cap asked if the seat next to her was taken. She moved her bag and felt the zipper graze her wrist. "Thanks," he said. She nodded. Dialogue done. The city loved efficient exchanges—it kept the night from unraveling.

The train carried them all—students, nurses, someone crying politely into a scarf, a couple mapping their future in low voices and cheap promises—through a city that had decided to be wet for a while. The windows were dark mirrors, and Heather's reflection doubled, then tripled, as if the world were testing versions of her.

She thought of the short story she had published once, the one nobody read except a professor with a generous heart and a small audience who liked sentences about winter light. It had been a door she'd cracked open, then shut carefully, like letting out steam from a pot you weren't ready to smell.

Her phone was at eight percent. She didn't open the story file. She didn't want to meet the person who had written it.

The train slowed for her stop with a sigh that sounded almost parental. She stepped onto the platform and felt the cold move through her coat like a familiar. Up the stairs, the night and its gentle rain resumed. Buildings here were less certain of themselves. Windows made little theaters of other people's lives—some lit, some dark, some blue with TV oceans.

Her hallway smelled like laundry and something sweet she could never place. In the apartment, she flicked on one lamp and let the light settle without ambition. The succulent on the sill had given up last week; she hadn't thrown it away. Its soil held the small hollow where water had been.

Heather plugged in her phone and stood a moment, listening to her place remember being quiet. Then she sat at the small table, opened the notebook, and stared at the last page she'd used. The graphite glimmered faintly where her hand had pressed too hard.

She tried to write a sentence that was about herself and not the city. The pencil hovered, then pressed.

*I am tired in a way that sleep doesn't negotiate with.*

She looked at it. It looked back, simple and accurate as a receipt. She added nothing. The sentence was enough honesty for the day.

The radiator ticked once, then again, a metronome returning. Outside, somebody laughed on the sidewalk and it rose through the thin window glass like a small, welcome mistake. Heather closed the notebook, palmed its warmth, and imagined the café tomorrow—peeling paint, regulars lined up with their rehearsed needs, the chamomile cooling next to the tip jar.

She thought maybe the city didn't sleep. Maybe it just sighed between breaths.

Heather turned off the lamp. The room grayed. Rain wrote soft cursive against the glass. The last train rattled somewhere beneath the street, carrying strangers home like commas in a long sentence that would finish itself eventually.`,
          ko: `마감 시간, 카페는 막 하품이라도 한 듯했다. 의자들은 테이블 위에 거꾸로 올려져 있었고, 바닥에는 소금기 묻은 발자국이 녹아 어두운 회색 얼룩을 만들고 있었다. 헤더는 데드볼트를 탁 잠그고, 유리에 흔들리는 자신의 얼굴을 바라보았다.

가로등 아래, 유령 같은 얼굴 위로 택시의 노란빛이 한 번 스쳐 지나갔다. 색이란 건 지나가기만 하는 것 같았다.

밖에는 결심하지 못한 비가 바람을 타고 비스듬히 내렸다. 부드럽고 끈질겼다. 믿음을 다 써버린 눈의 연장선 같았다. 모퉁이 맨홀에서는 김이 올랐다. 도시가 내쉬는 숨이었다. 그녀는 목도리를 턱까지 끌어올리고 회색 속으로 걸음을 옮겼다.

열쇠는 아직 손바닥의 온기를 품고 있었다. 주머니 속 공책은 더 따뜻했다. 일곱 시간을 서 있었지만 어디에도 도착한 느낌이 없었다. 문종은 이백 번쯤 울렸을 것이다. 손은 주문마다 기억하는 동작이 있었다—포타필터를 두드리고, 피처를 돌리고, 숨을 들이쉬고. 삐딱한 하트가 사랑에서 빠져나오려는 듯 보이는 카푸치노를 세 잔 만들었다. 도서관 먼지 냄새가 나는 단골은 캐모마일을 또 주문해놓고, 이번에도 손도 대지 않은 채 두었다.

공책에는 작게 기울어진 글씨로 이렇게 적혀 있었다. “차가 식을 때까지 캐모마일을 마시지 않는 남자가 있다.”

밖에서는 타이어가 반사선을 그리듯 거리를 칠했다. 횡단보도 페인트 위에서 부츠가 한 번 끽 소리를 내고, 다시 아스팔트를 찾았다. 건물 타이머와 함께 카페 네온이 꺼지자 골목은 한 박자 낮아졌다. 마치 노래가 간주로 넘어가듯.

헤더는 도시가 이렇게 반쯤 잠들어 솔직해질 때가 가장 좋았다.

계단을 내려가자 지하철은 숨을 멈춘 듯 고요했다. 타일 벽은 나이를 숨기지 않았다. 잔금은 작은 강처럼 뻗었고, 공연 포스터는 세상을 약속했다. 회전문이 끼익거렸다. OMNY 패드가 짧게 ‘삑’ 하고 울렸다. 어딘가에서 버스커의 색소폰이 선율을 더듬다가 말듯 포기하는 소리를 냈다.

승강장에는 사람들이 각자의 피로한 모양으로 몸을 접었다. 십대 둘은 무릎과 웃음을 한 칸의 벤치에 욱여넣듯 바짝 붙어 앉아 있었고, 한 건설 노동자는 장갑 낀 손으로 눈을 비비다가 뺨에 먼지 초승달을 남겼다.

헤더는 노란 선 가장자리에서 아래를 보지 않았다. 대신 공책을 꺼냈다. 그녀의 연필은 깎인 자국보다 씹힌 자국이 더 많았다. 흑연의 맛이 좋았다. 그럴 때만 뭔가 느껴지는 것 같아서.

먼저 바람. 그다음 냄새. 그리고 브레이크—최고급 노이즈 캔슬링도 뚫고 들어오는, 길고 금속성의 울림. 문은 익숙하고도 참을성 있는 짜증을 내며 열렸다. 그녀는 열차에 올라 기둥 옆에 섰다. 형광등은 모두를 같은 종류의 물고기처럼 보이게 했다.

그녀는 자신을 붙잡지도 놓아주지도 않는 카페를 떠올렸다. 시트러스 세제와 커피 오일 냄새, 계산대 근처에 딱지처럼 벗겨진 페인트 자국이 다시 칠해지지 않은 채 남아 있는 곳. 늘 “서프라이즈요”라고 했다가 막상 놀라면 얼굴을 찡그리는 단골. 너무 빨리 연해져 버린 에스프레소 샷. 네 시간쯤 지나면 자동으로 켜지는 자신의 목소리—다음 분이요, 영수증은 봉투에, 좋은 밤 보내세요. 주머니에 넣어두고 더는 만지지 않는, 매끈한 조약돌 같은 말들.

그녀는 다시 공책의 부드러운 모서리를 만졌다. 도시를 적어두는 게, 그 안에서 무언가를 느끼는 것보다 쉬웠다.

맞은편에서 모직 코트를 입은 남자가 문자를 쓰다 그대로 잠들었다. 전화기는 그의 허벅지 위에 간신히 균형을 잡았다. 열차가 흔들려도 그는 미동도 하지 않았다. 그 옆에는 스케치북을 펼친 사람이 있었고, 연필은 사각사각, 손목의 작은 튕김과 함께 그을음 같은 음영을 얹고 있었다. 헤더는 의미를 만들 만큼 오래 보지 않았다. 그녀는 눈을 아껴 썼다. 대신 이렇게 적었다.

“손은 우리를 들킨다—바리스타의 손톱 아래엔 커피의 초승달, 학생들의 손등엔 잉크 자국, 겨울 손은 마디가 벌겋다. 예술가의 손목은 물을 흐리듯 움직인다.”

열차가 툭, 하고 덜컹였다. 맞은편 광고는 “올바른 매트리스를 사면 3주 안에 숙면”을 약속한다고 했다. 그녀는 자기 침대를 떠올렸다. 시트가 모서리를 끌어당겨 다른 것이 되려는—돛, 혹은 조용한 깃발—모양이었다. 그녀의 아파트에는 벽돌담과 비둘기 기분에 따라 색이 바뀌는 하늘 조각이 보이는, 그럭저럭 괜찮은 창이 하나 있었다. 라디에이터가 똑딱거리면 오래된 시계가 아직 작동하는 소리 같아서 그때가 가장 좋았다.

유니언 스퀘어에서 사람들은 빗살 빠지듯 흩어졌다. 화분을 안은 여자는 문이 닫힐 때마다 떨리는 잎을 더 꼭 끌어안았다. 헤더는 밤이면 뿌리도 깨어나 귀를 기울일 것이라 상상했다.

그녀는 차가운 금속에 머리를 기댔다. 눈을 감아도 카페의 우유가 하얀 안개로 피어오르는 모습이 보였고, 네 시간 전의 헤더가 “무엇으로 시작해드릴까요?”라고 말하는 소리가 들렸다. 상냥한 목소리였다. 하지만 그녀의 것은 아니었다.

14번가에서 네이비색 모자를 쓴 남자가 옆자리에 사람 있냐고 물었다. 그녀는 가방을 옮겼고, 지퍼가 손목을 스쳤다. “감사합니다.” 그녀는 고개를 끄덕였다. 대화 끝. 도시는 효율적인 교환을 사랑했다. 그래야 밤이 흐트러지지 않았다.

열차는 학생, 간호사, 목도리에 조심스레 얼굴을 묻고 우는 사람, 낮은 목소리와 값싼 약속으로 미래를 그리는 연인을 태우고, 한동안 젖어 있기로 한 도시를 가로질렀다. 창문은 어두운 거울이 되었고, 헤더의 반사는 두 겹, 세 겹으로 겹쳐졌다. 마치 세상이 그녀의 버전을 시험하는 것처럼.

그녀는 한 번 출간했던 단편을 떠올렸다. 그 작품을 읽은 이는 마음씨 좋은 교수와 겨울빛 같은 문장을 좋아하는 소수의 독자뿐이었다. 살짝 열었다가 천천히 닫아버린 문 같았다. 아직 맡을 준비가 안 된 냄비의 김을 잠깐 빼듯이.

휴대폰 배터리는 8%였다. 그녀는 파일을 열지 않았다. 그걸 썼던 사람과 마주치고 싶지 않았다.

열차는 그녀의 역 앞에서 낮게 한숨 쉬듯 속도를 줄였다. 플랫폼에 내리자 차가움이, 늘 그랬듯 코트를 뚫고 스며들었다. 계단을 오르자 밤과 그 온순한 비가 다시 시작되었다. 이 동네의 건물들은 어딘가 망설이는 듯했다. 창문들은 남의 삶을 위한 작은 극장이 되었다. 어떤 창은 불이 켜져 있고, 어떤 창은 꺼져 있고, 어떤 창은 TV의 푸른 바다빛으로 잠겨 있었다.

복도에는 빨래 냄새와 정체 모를 달큰한 냄새가 섞여 났다. 집에 들어와 불 하나를 켰다. 야심 없는 빛이 자리를 잡았다. 창턱의 다육이는 지난주에 포기해버렸다. 그녀는 아직 치우지 않았다. 흙에는 물이 있던 작은 오목함만 남아 있었다.

헤더는 휴대폰을 꽂아 충전하고, 잠시 서서 집이 다시 조용해지는 소리를 들었다. 작은 탁자에 앉아 공책을 펼치고 마지막으로 쓴 페이지를 바라보았다. 흑연은 그녀의 손이 너무 세게 눌렸던 자리에서 은근히 반짝였다.

그녀는 도시가 아닌 자신에 관한 문장을 써보려 했다. 연필이 머뭇거리다 눌렸다.

“잠과는 흥정이 통하지 않는 종류의 피로가 내 안에 있다.”

그녀는 그 문장을 보았다. 그 문장도 그녀를 응시했다. 영수증처럼 단순하고 정확했다. 더하지 않았다. 오늘은 그 정도의 정직이면 충분했다.

라디에이터가 한 번, 그리고 다시 한 번 똑딱거렸다. 메트로놈이 다시 맞춰지는 소리. 인도에서 누군가가 웃었고, 그 웃음은 얇은 창을 타고 작은, 반가운 실수처럼 올라왔다. 헤더는 공책을 덮고 그 온기를 손바닥으로 감쌌다. 내일의 카페가 떠올랐다. 벗겨진 페인트, 암기한 주문들로 줄을 선 단골들, 팁 통 옆에서 식어가는 캐모마일.

어쩌면 도시는 잠들지 않는 게 아닐지도 모른다. 그저 숨과 숨 사이에서 한숨을 쉬는 것일 뿐.

헤더는 스탠드 불을 껐다. 방은 회색으로 가라앉았다. 비는 유리 위에 부드러운 필기체를 썼다. 어딘가 지하에서는 막차가 덜컹거리며, 긴 문장의 사이사이에 찍히는 쉼표처럼 낯선 이들을 집으로 데려가고 있었다.`,
        },
      },
      {
        id: '2',
        number: 2,
        title: {
          en: 'Same Seat, Same Face',
          ko: '같은 자리, 같은 얼굴',
        },
        publishDate: '2025-10-12',
        content: {
          en: `The next night looked like the last one with slightly different weather. The city couldn't decide between snow and rain, so it wore both for a while. Heather closed the café, folded the rag one more time than necessary, and let the bell's final chime fade into the hallway air. Down the stairs, into the tiled throat of the station, she joined the small migration of people who had already used up their day's words.

The platform had its usual grammar: a busker trying to coax a love song out of the cold, the overhead screens making promises they couldn't keep, a draft that belonged to no season. Heather stood near the column with the old sticker that read YOU ARE HERE in a way that felt slightly threatening. She opened her notebook, then closed it again.

The wind came first, then the smell, then the brakes—wanting to be heard over even the best noise-canceling headphones. A long metallic vowel held the station in its mouth. The doors opened with their familiar, patient annoyance.

She found a standing spot by the pole and wrapped her hand around it. The car wore the smell of wet wool and carried the clatter of tired shoes. She saw him then—same seat, same face—near the door that didn't always open, a half-step turned away from the aisle as if he could become part of the wall on request.

He had a sketchbook on his knee. Not new. The corners softened like a favorite shirt; a strip of tape held the spine where the cardboard had given up, its edge lifting at one corner. He drew without being precious about it: small, quick marks; a hush of graphite; a kneaded eraser traveling like a little cloud. The inside of his thumb was shadowed gray. His coat tried to be serious; his scarf had lost the argument with the weather.

Heather looked for three seconds, then two, then broke it into deniable fragments. She watched his hand more than his face. Hands tell the truth faster. His moved like he was stirring water, testing the temperature.

Across from him, a man in a hard hat slept with an ease Heather envied. Beside him, a woman read a paperback with the intensity of someone building a bridge by hand. The car reorganized itself each stop: bodies in, bodies out, the page turning.

Heather felt for her pencil without taking her eyes off an ad for a miracle mattress. On the top corner of her paper, small enough to be mistaken for nothing, she wrote:
*He draws so he doesn't have to say hello.*

The train hooked around a bend, her shoulder brushed a stranger's coat, and the car steadied. She let out a breath she hadn't committed to. She told herself she was noting a person, not a person pointed at her. That was the deal with observation: she could look without being there.

At 8th Street, two tourists clung to a map like it had betrayed them. At Prince Street, a guitarist got on and got off, hopeful in another car. At Canal, a woman boarded cradling a plant whose leaves quivered each time the doors shut. The man with the sketchbook turned a page. Heather caught a quick ghost of what he'd been drawing: hands cupped around a paper cup, steam suggested in three spare lines.

She wondered if he drew faces or if faces looked back too hard. He seemed like someone who saved the hardest shapes for later.

The nights arranged themselves in a row after that, beads on a string.

On Tuesday the car was crowded enough that strangers turned into furniture. Heather took the spot by the route map, where the announcement was louder and still not clear: "Downtown service is… sorry about everything." He was there again, same seat, sketchbook balanced, pencil making a rhythm she could find even through the noise. He drew shoes this time—scuffed boots, careful laces, a heel lifted mid-step. He looked up only when the train lurched, keeping a finger on the place he'd made, like a person who didn't trust the world not to move when he wasn't looking.

*Where you sit tells on you,* she wrote. *He sits where leaving is easy.*

On Wednesday the station was warm in the way basements are warm. The busker had traded love songs for scales. Heather's hair kept the day's coffee smell like stubborn perfume. She spotted him before she found the pole—coat, scarf, the slight fold of his posture as if protecting the page from weather that could happen inside a train. A kid nearby watched him with the reverence reserved for magicians and snack vendors. When the kid leaned too close, his hand hovered, then moved again, slower. Not hiding—just not offering.

Heather tried a sentence about herself and failed, then wrote one about him and felt relief ring in her chest:
*He doesn't trace outlines; he negotiates with them.*

On Thursday the train was late enough to make strangers allies. The platform angled toward the edge with a shared impatience, and when the car shrieked into view, everyone pretended not to rush. Heather ended up standing near his seat. She could see the paper clearly now—thick, toothy; a nick on the cover where a sticker had been and then hadn't. He was drawing the reflection in the window—the second, paler car made from everyone inside it. He sketched a woman with a soft hat cradling a plant. He sketched a man nodding off without embarrassment. He sketched, quickly, the curve of a cheekbone and the flare of a nostril belonging to someone who looked like him if he were braver or more tired.

The train jerked. His pencil slid, rolled. Heather's shoe stopped it. She nudged it back. They both reached; both retreated—the polite wrong. The pencil found his palm anyway. He glanced up—just a breath of a glance—eyes gray in the car's indifferent light. A nod: thanks, or nothing. Heather answered with the city's thin smile: you are seen, and you are safe.

Friday tried to snow and gave up. The car was emptier than usual. He sat where he always sat. Heather took the seat across, the one you choose when you're tired of standing for your life. Parallel lines, pulled a little closer. He'd changed pencils; this one made a softer sound. He drew the corner of the advertisement by the door, but not the face on it—as if refusing to sell anyone anything even on paper.

Chamomile would be cooling by the tip jar whether she was there or not. The thought arrived like a small, familiar weight and then left her alone.

She let the train's sway move her and, against her better rules, imagined the inside of his head the way he knew the inside of his sketchbook. Not the drama—just the inventory: tins of graphite with dented lids, pages torn and folded once, the tape on the spine lifting at one corner, the way he carried the whole thing like a small animal that needed warmth.

She wrote, and the line startled her with how easy it was:
*There's a man who draws like he's remembering someone he hasn't met yet.*

On a Sunday night that had borrowed weather from March, the busker found the melody he'd been missing all week. The station gathered itself to listen without pretending not to. Heather waited at the yellow line. The train rolled in, impatient and relieved. She stepped into the car, and there he was: same seat, same face, sketchbook open to a blank page.

For a second, his pencil didn't move.

He looked up to confirm the world was still the world. His eyes passed, paused, returned. Heather didn't smile. She let herself exist inside his field of vision and not just as a passenger in his drawing. She counted to three. She broke the stare first and wrote, small enough to be deniable:

*[Last Train, #1]*
*Being seen is not the same as being known. But it is more than disappearing.*

She closed the notebook on that. The sentence carried the shape of a beginning. Somewhere under the street, the last train for someone else rattled by, moving a few faces closer to the places they pretended to be heading. Heather watched the reflection assemble and unassemble in the window. Beyond it, the tunnel made a soft, endless mouth.

He turned his page. His pencil began again. The sound was small, like rain deciding to fall.`,
          ko: `다음 날 밤도 전날과 비슷했다. 달라진 건 날씨뿐이었다. 도시는 눈과 비 사이를 맴돌다 잠시 둘 다를 걸쳤다. 헤더는 카페 문을 잠그고, 걸레를 필요 이상 한 번 더 접은 뒤, 마지막 종소리가 복도 공기 속으로 사라지게 두었다. 계단을 내려가 타일로 마감된 좁은 통로로 들어서며, 이미 하루치 말을 다 써버린 사람들의 작은 행렬에 섞였다.

승강장에도 늘 그곳만의 문법이 있었다. 찬 공기에서 사랑 노래를 끌어내려 애쓰는 버스커, 지킬 수 없는 약속을 내거는 전광판, 계절을 잃어버린 틈바람. 헤더는 ‘YOU ARE HERE’라 적힌 오래된 스티커가 어쩐지 협박처럼 느껴지는 기둥 곁에 섰다. 공책을 열었다가 다시 닫았다.

먼저 바람, 그다음 냄새, 그리고 브레이크 소리—노이즈 캔슬링 헤드폰도 뚫고 들어왔다. 긴 금속성 모음 하나가 역 전체를 입안에 머금은 듯 늘어졌다. 문은 늘 그렇듯 인내 어린 짜증으로 열렸다.

그녀는 기둥을 잡았다. 칸 안에는 젖은 모직 냄새가 배어 있었고, 지친 구두 소리가 달그락거렸다. 그때 그가 보였다—같은 자리, 같은 얼굴. 가끔 열리지 않는 문 옆, 통로에서 반걸음 비켜 서서, 마음먹으면 벽에 스며들 수 있을 듯했다.

그의 무릎 위엔 스케치북이 있었다. 새것은 아니었다. 오래 입은 셔츠처럼 모서리가 부드러웠고, 하드보드가 포기한 등쪽엔 테이프가 붙어 한쪽 끝이 살짝 들려 있었다. 그는 그것을 애지중지하지 않았다. 짧고 빠른 선, 흑연의 낮은 속삭임, 말랑한 찰흙 지우개가 작은 구름처럼 페이지 사이를 오갔다. 엄지 안쪽은 회색으로 물들어 있었다. 코트는 진지한 체했고, 목도리는 날씨와의 싸움에서 이미 졌다.

헤더는 세 초, 두 초. 결국 스스로도 부인할 수 있을 만큼 잘게 쪼갠 눈길만 주었다. 그녀는 얼굴보다 손을 보았다. 손이 먼저 진실을 말한다. 그의 손은 물 온도를 재듯 살짝 저으며 움직였다.

맞은편에선 안전모 쓴 남자가 부럽도록 쉽게 잠들어 있었다. 그 옆의 여자는 책 한 권을, 맨손으로 다리를 놓듯 집중해 읽었다. 정차 때마다 칸은 다시 배열됐다. 사람들이 들고나며 페이지가 넘어갔다.

헤더는 ‘기적의 매트리스’ 광고에서 눈을 떼지 않은 채 손끝으로 연필을 더듬었다. 아무것도 아닌 것처럼 작게, 종이 모서리에 적었다.
그는 인사를 하지 않기 위해 그린다.

열차가 굽이를 돌 때 그녀의 어깨가 낯선 이의 코트를 스쳤다. 곧 차가 다시 안정되자 붙들고 있던 숨을 조용히 풀었다. 그녀는 스스로에게 말했다. 사람 하나를 기록할 뿐, 나를 겨냥한 이가 아니다. 관찰과 맺은 거래였다. 보기만 하고, 들어가지 않는 것.

8번가에서는 두 관광객이 지도에 매달리듯 달라붙어 있었다. 프린스 스트리트에서는 기타 연주자가 탔다가 내려, 다른 칸에서 희망을 이어 가기로 했다. 커낼 스트리트에서는 문이 닫힐 때마다 잎사귀가 떨리는 화분을 안은 여자가 올라탔다. 남자는 페이지를 넘겼다. 헤더는 방금 전 그림의 잔상을 힐끗 보았다. 종이컵을 감싼 한 쌍의 손. 김은 세 줄로만 암시돼 있었다.

그가 얼굴을 그리는지, 아니면 얼굴이 너무 강하게 되돌아보는지 궁금했다. 그는 어려운 형태는 나중으로 미루는 사람처럼 보였다.

그 뒤로 밤들이 염주알처럼 줄줄이 꿰였다.

화요일엔 낯선 이들이 가구가 될 만큼 붐볐다. 헤더는 노선도 옆 자리를 골랐다. 거기선 안내 방송이 더 컸지만 여전히 또렷하진 않았다. “다운타운 행 열차는… 죄송합니다, 전부 다요.” 그는 또 있었다. 같은 자리, 무릎 위 스케치북, 소음 속에서도 찾아 들을 수 있는 연필의 리듬. 이번에는 신발을 그리고 있었다—닳은 부츠, 정성스러운 끈, 반걸음 들린 뒤꿈치. 열차가 흔들릴 때만 잠깐 고개를 들었고, 그래도 손가락 하나를 페이지 위에 얹어, 세상이 자신이 안 보는 사이 움직이지 않도록 못이라도 박듯 버텼다.

어디에 앉는지가 사람을 말해 준다, 그녀는 썼다. 그는 떠나기 쉬운 자리에 앉는다.

수요일, 역은 지하실 같은 온기로 따뜻했다. 버스커는 사랑 노래를 음계 연습으로 바꿔 놓았다. 헤더의 머리카락에는 하루 내내 밴 커피 냄새가 완고한 향수처럼 남아 있었다. 그녀는 기둥을 찾기 전에 그를 먼저 봤다—코트, 목도리, 차 안에서도 날씨가 들이닥칠 수 있기에 페이지를 지키려 몸을 살짝 접은 자세. 근처 아이 하나가 마술사나 간식 장수를 보듯 경외심으로 그를 바라봤다. 아이가 너무 가까이 다가오자 그의 손이 잠깐 허공에 머물렀다가, 더 느리게 다시 움직였다. 숨기는 건 아니다—내주지 않을 뿐.

헤더는 자기 이야기를 한 문장 쓰려다 실패했고, 그에 대한 문장을 쓰자 가슴 한쪽에서 안도의 종소리가 맑게 울렸다.
그는 선을 따라 덧그리지 않는다. 선과 흥정한다.

목요일, 열차가 늦자 낯선 이들이 동맹이 되었다. 모두가 조금씩 승강장 가장자리로 기울었고, 열차가 비명을 지르듯 들어와도 아무도 서두르지 않는 척했다. 헤더는 그의 자리 가까이에 섰다. 종이는 두툼하고 결이 거칠었다. 스티커가 있었다가 떼어져 남은 작은 흠집도 보였다. 그는 창에 비친 두 번째, 더 옅은 객차를 그리고 있었다—칸 안의 모두로 만들어진 그림자 같은 열차. 부드러운 모자를 쓰고 화분을 안은 여자. 부끄러움 없이 꾸벅꾸벅 조는 남자. 그리고 더 용감하거나 더 지쳐 보이는 자신을 닮은 누군가의 광대뼈 곡선과 콧망울을 빠르게 스케치했다.

열차가 급히 흔들렸다. 그의 연필이 미끄러져 굴렀다. 헤더의 신발이 그것을 멈췄다. 그녀는 발끝으로 살짝 밀어 되돌려 주었다. 둘은 동시에 손을 뻗다가 동시에 멈췄다—예의가 만든 엇박자. 그래도 연필은 그의 손바닥으로 돌아갔다. 그는 잠깐, 정말 한숨만큼 고개를 들었다. 차 안의 무심한 조명 아래 그의 눈은 회색이었다. 고갯짓 하나—고맙다는 뜻일 수도, 아무 의미도 아닐 수도. 헤더는 도시가 쓰는 얇은 미소로 답했다. 당신은 보였고, 당신은 안전하다.

금요일은 눈을 내려다 말았다. 칸은 평소보다 한산했다. 그는 늘 앉던 자리에 있었다. 헤더는 맞은편에 앉았다. 더는 서서 하루를 버틸 힘이 없을 때 고르는 자리였다. 조금 가까워진 평행선. 그는 연필을 바꿨다. 이번 건 소리가 더 부드러웠다. 그는 문 옆 광고의 모서리를 그렸지만, 그 안의 얼굴은 그리지 않았다—종이 위에서도 누구에게도 아무것도 팔지 않으려는 듯.

그녀가 없어도 캐모마일은 팁 통 옆에서 식고 있을 것이다. 익숙한 작은 무게처럼 떠올랐다가 이내 사라졌다.

그녀는 열차의 흔들림에 몸을 맡기고, 스스로의 규칙을 깨고서, 그의 머릿속을—그가 스케치북 안을 아는 것처럼—상상해 보았다. 드라마가 아니라 목록. 찌그러진 뚜껑의 흑연 통, 한 번만 접어 떼어낸 종이들, 한쪽이 살짝 들린 등쪽을 감은 테이프, 그리고 그 모든 것을 작은 짐승처럼 품고 다니는 버릇.

그녀는 썼다. 너무 쉽게 흘러나와 스스로도 놀랄 만큼.
아직 만나지 않은 누군가를 기억하듯 그림을 그리는 남자가 있다.

3월에서 빌려 온 듯한 일요일 밤, 버스커는 일주일 내내 헤매던 멜로디를 마침내 찾았다. 역은 괜히 무심한 척하지 않고 조용히 모여 들었다. 헤더는 노란 선 앞에 섰다. 열차가 성급하면서도 안도한 듯 들어왔다. 그녀가 칸에 오르자 그가 있었다. 같은 자리, 같은 얼굴, 빈 페이지를 펼쳐 둔 스케치북.

잠깐, 그의 연필은 움직이지 않았다.

그는 세상이 아직도 세상인지 확인하듯 고개를 들었다. 그녀의 얼굴을 스치고, 멈추고, 다시 돌아왔다. 헤더는 웃지 않았다. 자신을 그의 그림 속 승객이 아니라 그의 시야 속 사람으로 두었다. 셋까지 셌다. 시선을 먼저 거두고, 변명할 수 있을 만큼 작게 적었다.

［라스트 트레인, #1］
보이는 것과 아는 것은 다르다. 그래도 사라지는 것보다는 낫다.

그 문장을 덮었다. 시작의 모양을 한 문장이었다. 어딘가 지하의 어둠 속에선 누군가에게 마지막 열차가 덜컹거리며 지나가고 있었다. 몇몇 얼굴을, 그들이 향한다고 믿는 곳에 조금 더 가까이 밀어 주면서. 헤더는 창에 모였다 흩어지는 반사를 보았다. 그 너머로 터널은 부드럽고 끝도 없는 입처럼 이어졌다.

그는 페이지를 넘겼다. 연필이 다시 시작했다. 아주 작은 소리. 막 비가 내리기로 마음먹는 순간 같은.`,
        },
      },
      {
        id: '3',
        number: 3,
        title: {
          en: 'Extra Shot',
          ko: '엑스트라 샷',
        },
        publishDate: '2025-10-12',
        content: {
          en: `The café's air felt heavier after nine. Heather's wrists ached from tamping—the dull pulse that came from doing something almost right a hundred times. The rag in her hand had stopped being white hours ago. She wiped the counter anyway, the smell of citrus cleaner mixing with milk and rain through the cracked window. The radio murmured something indecisive between jazz and static. It was the hour when caffeine meant survival, not comfort.

She cleaned the drip tray with a practiced cloth fold and watched a thin line of water run to the corner like a thought escaping. It was the slow hour when even the grinder seemed embarrassed to make noise.

The bell above the door made a soft, well-behaved ring.

He stepped in with a coat that had learned rain and forgotten it. Not dramatic—just precise. He paused at the door to pat his pockets for nothing in particular, the way polite people buy time. His scarf held the memory of outside.

Heather's body answered before her mind did. Paper cup, sleeve, chamomile tea bag. She tugged ice from the bin—three cubes, a habit shaped like certainty. The cup fogged at the rim.

He read the menu not to decide, but to stall.

"Chamomile, please," he said. "Hot."

She felt the cold through the paper. "Right." The word landed crooked. "I—Ah—"

"Cold?" His mouth accepted the mistake without needing it to be funny. "I let it get there."

The receipt printer chirped a small bird of agreement. Heather dumped the iced cup and started again. Mug, teabag, kettle. She poured carefully, spiral from edge to middle, the string doing a slow waltz. Steam drifted up with that hay-sweet, apple-adjacent smell and made a curtain between them that didn't last.

"Sorry," she said. "My hands get ahead of me."

He watched the steam, not her. "Happens. Mine take notes I don't mean to keep."

"Artist's problem?"

"Human one," he said, almost apologizing for the elevation.

The radio slipped into a sax solo that didn't need to prove itself. Heather set the mug on the counter and felt the heat move through ceramic into wood, a small kindness traveling. He wrapped both hands around it and didn't drink yet, as if the first sip was better as a possibility.

A delivery guy shouldered in with a squeak of boxes and the smell of cardboard and rain. "Milk," he announced to no one. He wedged a flat onto the floor, signed his own clipboard, and left a dramatic shoeprint that would become tomorrow's problem. Heather carried two gallons to the cooler and returned, cheeks touched by refrigerator air.

He was still there, still holding the mug. He had moved an inch to the left to let the boxes pass. Consideration has a posture.

"Do you want a lid?" she asked.

"Not if it will talk me into forgetting."

She nodded. "It starts better hot."

"It ends honest," he said. He met her eyes for the first time—not long, not invasive—then looked back at the mug. "Thank you."

He found a table against the wall where the paint had bubbled and flattened years ago. The café's fluorescent buzz negotiated with the sax—neither winning, both present. He blew across the rim once, a measured concession, and finally took a sip. The kind that asks the heat a question and accepts its answer.

Heather checked the hopper, toggled the rinse cycle, wiped the counter in practiced arcs. She heard the ceramic click back to the saucer each time he set the mug down, a soft metronome. A pair of students barged in with backpacks and whispered arguments about whether to split a cookie. They left with one cookie and two napkins. The receipt printer asked for attention again and was ignored.

On the back counter, a circle of water appeared where she'd set the iced cup before abandoning it. Heather pressed a fingertip into it and came away damp. The small evidence of an assumption. She reached for her notebook, and wrote:
*Assumptions cool faster than tea.*

She added, after a beat:
*Ask first.*

When she looked up, he was turning his mug slow enough to make the handle a clock hand. A sketchbook peeked from his bag—the fabric edge, the elastic's tired stretch—but he didn't take it out. Maybe it belonged to a different hour. Maybe he was letting his hands rest.

The door opened again; a gust of street air carried in a damp umbrella and a regular who ordered fast and lived faster. Heather pulled a shot that ran true, tamped habit right, and sent a small heart onto milk that wasn't expecting kindness. The regular left with a half-thanks and a look that bounced off everything. The bell reset itself to neutral.

He brought the empty mug back with two hands, as if escorting the last of its warmth. He didn't push it across; he set it down and waited for the sound to happen—porcelain to saucer, a click that behaved.

"Thanks," he said.

"For the hot water I should've poured the first time?"

"For the second chance." He glanced at the ring his mug had left, faint and immediate. "I don't often take them."

She could have said a dozen things and didn't. "Any time," she said, and meant it the way baristas mean it when they want you to feel like a person, not a line item.

He almost gave a name. She could see it reach his mouth and reconsider. Instead, he nodded—not the city's thin politeness, not quite—then stepped out. The bell negotiated a quiet exit. Rain had dialed back to suggestion.

Heather considered the ring on the table. Fresh circle beside an older, paler ghost that the wood had kept from some other night. She traced the new one lightly with the rag, didn't erase it.

She wrote one more line before the hour tipped:
*Comfort is warmer when it's offered, not guessed.*

Closing came without ceremony. Chairs climbed. The mop earned its keep. The delivery shoeprint gave up under two careful passes. She snapped the deadbolt and let the window show her a flattened version of herself, then stopped looking.

Down the block, the bus stop's glass had caught a film of mist that turned headlights into watercolor. She didn't check her phone. The train would be there or it wouldn't; the platform would draft ankles and promise schedules that weren't promises. She walked the corner, heard the city's low machinery under the sidewalk, and took the stairs because she always did.

On the platform, she did not rehearse him. She stood under the map and tried to read neighborhoods without thinking of coffee.

The train arrived with an ordinary approach—no drama, just mass and schedule. She boarded, found the bar with her palm, and let the car's sway make small decisions for her. When she saw him—it was brief, almost an accident. He was seated farther down this time, near the advertisement for a museum that never closed. A paper cup sleeve peeked from his bag, already empty of meaning.

He looked up because movement attracts eyes. Their gaze met in the middle distance where strangers are allowed to meet. No smile. Not necessary. A small nod.

She returned it.

The car carried everyone forward in that collective compromise of balance. At the next stop she didn't look for him. She let the moment sit where it belonged: not a spark, a mark.

At home, the notebook waited where she'd put it on the table. The page had dried with a slight ripple from her damp hand. She added a last sentence in the corner:
*Start warm. It's okay if it cools.*

She closed the cover and left her palm there a second, claiming the heat she could keep.`,
          ko: `카페 안 공기는 아홉 시가 지나자 조금 눅눅해졌다.
헤더의 손목엔 하루 종일 커피를 눌러 담은 자국 같은 피로가 맴돌았다.
손에 쥔 행주는 이미 오래전에 하얀색을 잃었지만, 그녀는 그래도 한 번 더 닦았다.
시트러스 세제 향이 우유 냄새, 창틈으로 들어온 빗내와 뒤섞였다.
라디오에서는 재즈와 잡음이 엉켜 흐르고 있었다.
이 시간의 카페인에는 위로보다 버티는 힘에 가까운 무언가가 있었다.

익숙한 손놀림으로 드립 트레이를 닦았다. 물 한 줄기가 모서리로 흘러가며, 도망치는 생각처럼 가늘게 흔들렸다.
기계조차 소리를 내기 조심스러운 느린 시간이었다.
그때, 문 위의 종이 얌전하게 울렸다.

그가 들어왔다. 비를 배웠다가 잊은 듯한 코트를 걸치고 있었다.
과장된 기색은 없었고, 그저 조심스러웠다.
그는 문가에 서서 주머니를 한 번 두드렸다. 찾는 건 없어 보였다.
다만 예의 바른 사람들이 시간을 버는 방식일 뿐이었다.
목도리에는 아직 바깥 공기의 냄새가 남아 있었다.

헤더의 몸이 생각보다 먼저 움직였다. 종이컵, 슬리브, 캐모마일 티백.
그녀는 얼음통에서 세 개를 꺼냈다. 습관이 만들어 낸 확신 같은 동작이었다.
컵 가장자리에 희미한 김이 맺혔다.

그는 메뉴를 고르기보단, 시간을 조금 벌기 위해 읽었다.
"캐모마일 주세요." 그가 말했다. "뜨겁게요."
헤더는 손끝으로 종이컵의 차가움을 느꼈다.
"네." 말이 어딘가 비뚤게 흘렀다. "아, 그게…"
"차게요?"
그의 입매는 실수를 농담으로 돌리지 않고, 그냥 받아들였다.
"그냥… 식을 때까지 두는 편이에요."

영수증 프린터가 짧게 짹, 하고 울었다. 마치 동의라도 하듯이.
헤더는 얼음이 든 컵을 버리고 다시 시작했다. 머그컵, 티백, 주전자.
물을 가장자리에서부터 조심스레 부었다. 실이 느린 왈츠를 추듯 빙글 돌았다.
건초에 사과 향이 섞인 듯한 따뜻한 냄새가 피어올라, 둘 사이에 잠시 커튼처럼 걸렸다가 사라졌다.

"죄송해요." 그녀가 말했다. "손이 먼저 움직여서요."
그는 그녀가 아닌, 김이 피어오르는 찻잔을 바라봤다.
"그럴 때 있죠. 저도… 의도하지 않은 걸 자꾸 메모하곤 해요."
"예술가의 버릇인가요?"
"사람이라면 다 그렇지 않나요." 말끝엔 괜한 미안함이 묻어 있었다.

라디오는 굳이 증명할 필요 없는 색소폰 솔로로 넘어갔다.
헤더는 머그컵을 카운터 위에 올려놓으며, 열기가 도자기를 지나 나무로 스며드는 걸 느꼈다.
작은 온기가 이동하는 듯했다.
그는 두 손으로 컵을 감싸 쥔 채, 아직 마시지 않았다.
첫 모금이 가능성일 때가 더 좋다는 듯이.

배달원이 상자 몇 개를 들이밀며 들어왔다.
비 냄새와 젖은 골판지 냄새가 함께 따라왔다. "우유요." 그가 말했다.
그는 바닥에 상자를 내려놓고 스스로 전표에 서명했다.
남겨진 신발자국이 내일의 문제로 남았다.
헤더는 우유 두 통을 냉장고에 옮겨놓고 돌아왔다. 냉장고 바람이 볼을 스쳤다.

그는 여전히 거기 있었다. 상자를 피하듯 한 걸음 옆으로 비켜서 있었다.
배려에는 자세가 있었다.

"뚜껑 드릴까요?"
"괜찮아요. 덮어두면, 잊어버릴 것 같아서요."
"뜨거울 때가 제일 좋죠."
"그래도 결국 식는 게 정직하잖아요."
그는 그렇게 말하며 처음으로 그녀를 바라봤다. 짧고 부드럽게.
그리고 다시 찻잔으로 시선을 돌렸다. "고마워요."

그는 벽 쪽 낡은 테이블에 앉았다. 오래된 페인트는 부풀었다 눌린 자국을 남기고 있었다.
형광등의 윙윙거림과 색소폰 소리가 서로 양보하듯 얽혔다.
그는 찻잔 가장자리에 살짝 입김을 불었다. 조심스러운 타협처럼.
그리고 첫 모금을 마셨다. 열기에게 질문을 던지고, 그 답을 받아들이는 모양이었다.

헤더는 호퍼를 확인하고, 린스 버튼을 누르고, 카운터를 익숙한 동선으로 닦았다.
그가 찻잔을 내려놓을 때마다 도자기와 받침이 부딪히는 소리가 들렸다.
조용한 메트로놈처럼.
학생 둘이 배낭을 메고 들어와 쿠키를 나눠 먹을지 말지를 속삭였다.
결국 쿠키 하나와 냅킨 두 장을 들고 나갔다.
프린터는 또 짹 하고 울었지만, 아무도 신경 쓰지 않았다.

뒤쪽 카운터에는 버려둔 아이스컵이 남긴 물자국이 남아 있었다.
헤더는 손가락끝으로 눌러보았다. 손끝이 젖었다.
잘못된 확신의 작은 증거였다.
그녀는 노트를 꺼내 적었다.
가정은 차보다 빨리 식는다.
그리고 잠시 후 한 줄을 덧붙였다.
먼저 물어볼 것.

고개를 들었을 때, 그는 컵 손잡이를 천천히 돌리고 있었다. 마치 시침처럼.
가방 틈으로 스케치북이 살짝 보였다. 천 커버의 낡은 모서리, 느슨해진 고무 밴드.
그는 꺼내지 않았다.
아마 오늘의 시간이 아닌 것 같았다.
손을 쉬게 두는 시간일지도 몰랐다.

문이 다시 열렸다. 축축한 우산 냄새와 함께 단골 손님이 들어왔다.
말보다 주문이 빨랐다.
헤더는 습관처럼 정확히 샷을 내리고, 거품 위에 작은 하트를 그렸다.
그 하트는 뜻밖의 다정함처럼 컵 위에 남았다.
단골은 반쯤 인사만 하고 나갔다. 종소리는 다시 제자리를 찾았다.

그는 빈 컵을 두 손으로 감싸 들고 다가왔다.
남은 온기를 배웅하듯 천천히.
그는 컵을 밀지 않고, 조심스레 받침 위에 내려놓았다.
도자기와 받침이 맞부딪히며 내는 소리가, 제자리의 소리처럼 울렸다.

"감사합니다."
"처음부터 뜨거웠어야 하는 걸요."
"두 번째 기회를 주셔서요."
그는 컵이 남긴 물자국을 바라보며 말했다.
"이런 기회는 자주 안 오거든요."

헤더는 수많은 말을 떠올렸다가 아무 말도 하지 않았다.
"언제든요." 그렇게 말했다.
그 말에는 형식보다 마음이 조금 더 있었다.

그는 이름을 말하려다 멈췄다.
입술에서 멈춘 이름 대신, 가볍게 고개를 끄덕였다.
도시의 얇은 예의와는 조금 다른, 진짜 고개짓이었다.
그가 나가자, 종소리가 한결 조용히 울렸다.
밖의 비는 제 생각을 바꾼 듯, 이제는 그냥 흩날렸다.

헤더는 테이블 위의 자국을 바라봤다.
새로 생긴 원은 오래된 희미한 얼룩 옆에 있었다.
그녀는 손끝으로 살짝 문질렀다.
지우지 않았다.

그리고 노트에 한 줄을 더 썼다.
위로는 추측이 아니라 건네는 것.

마감은 특별할 것 없었다.
의자들이 테이블 위로 올라가고, 대걸레는 제 몫을 다했다.
남겨진 신발자국은 두 번의 닦임 끝에 사라졌다.
헤더는 문을 잠그고, 유리에 비친 납작한 자신의 얼굴을 잠시 바라보다가 시선을 거뒀다.

버스정류장 유리에는 안개가 내려앉아 헤드라이트를 수채화처럼 번지게 했다.
헤더는 휴대폰을 꺼내지 않았다.
기차는 있거나 없거나, 플랫폼의 바람은 언제나 발목을 스쳤다.
그녀는 모퉁이를 돌아 계단으로 향했다.
늘 그랬듯이.

플랫폼에서 그는 떠올리지 않으려 했다.
지도 아래 서서 동네 이름을 읽었다. 커피 생각은 하지 않으려 했다.

기차는 예고 없는 속도로 들어왔다.
드라마도 없고, 그저 약속된 질량으로.
헤더는 손으로 봉을 잡고, 열차의 흔들림에 몸을 맡겼다.
그를 본 건 거의 우연이었다.
이번엔 조금 멀리, '24시간 열려 있는 미술관' 광고 옆 자리였다.
가방 틈 사이로 종이컵 슬리브가 보였다. 이미 식은 의미처럼.

그는 움직임에 시선이 끌려 고개를 들었다.
둘의 눈길이 중간 어딘가에서 닿았다.
웃음은 없었다. 그럴 필요도 없었다.
짧은 고개짓 하나.

헤더도 고개를 끄덕였다.

열차는 모두를 앞으로 밀어냈다. 균형을 위한 타협처럼.
다음 역에서 그녀는 그를 찾지 않았다.
순간을 제자리에 두었다.
불꽃이 아니라, 흔적으로.

집에 돌아왔을 때, 노트가 테이블 위에 있었다.
손끝이 젖은 채로 넘긴 페이지가 살짝 울어 있었다.
그녀는 구석에 한 줄을 더 적었다.
따뜻하게 시작해도 괜찮다. 식어도 괜찮다.

노트를 덮고, 잠시 손바닥을 올려두었다.
남은 온기를 조금이라도 붙잡듯이.
방 안엔 조용한 기계음과 불빛이 섞여 있었다.
밖의 비는, 결국 생각을 바꾸지 않았다.
그대로 내리고 있었다.`,
        },
      },
      {
        id: '4',
        number: 4,
        title: {
          en: 'Ghost Drafts',
          ko: '유령 원고',
        },
        publishDate: '2025-10-12',
        content: {
          en: `He left the café with heat in his hands and needed motion more than sleep.

The studio kept different weather than the street: radiator ticking, lamp laying down a tight circle. Ian hung his coat on the chair. A drop slid off the cuff, found a floorboard seam, and chose it. He liked when water chose a line.

He slid a poster proof from under newsprint and squared it to the desk. Three pencil dots to anchor, a nudge, a breath—two millimeters by eye until the headline stopped arguing with the image. He counted space with a knuckle: one, two, hairline. Too perfect. He brushed a fingertip of charcoal along the margin—introduced a millimeter of wrong—so no one asked how fast it happened.

Tracing paper. One ring, clean: center mark, an ellipse that remembered pressure. Two faint construction strokes. Proof existed; he slid it under the stack. Enough.

His hands were quieter tonight. Left palm up: the small polished callus where the pencil lived. "You two," he said, "behave." New sheet. Three strokes that were almost a hand—cloth edge, index ridge, weight at the heel. He reached for a fourth and stopped. Four lies. He taped a card to the lamp stem: *Rule 12: one honest line per day*—unposted.

From the flat file he drew a manila folder marked *words*. Torn pages, clipped paragraphs. The one he'd saved months ago: *Some nights people don't want what they order; they want what it lets them hold until it cools.* One word out of place would collapse it; none were. In pencil at the corner: *source unknown*. He slid it back. The line sat in him like a coin.

He didn't open the old chat. He didn't have to. The last thing said still lived: a screenshot of his work and one word with teeth. *Derivative*. He dimmed the lamp a click and let the edges soften.

Under the newsprint, a subway map worked as a cutting mat he never cut. He tapped its corner twice, pocketed a stub pencil, and went.

Outside wasn't mood; it was direction. Wind ran off the river and learned the avenue—fast mid-lane, slack at the curb. Steam rose from grates in clean columns until a cross-draft folded them. The air held brake dust and wet stone. Salt crusted in seams where plows had thrown it; boots ground it back to powder. He mapped by utility—light pool, corner, grate heat—and moved.

Platform draft organized into lanes between columns. Sequence: pressure wave, brake squeal, doors unsealing. Inside: wet wool, metal, citrus cleaner cafés lend to coats. He set a hand to the pole, checked the tolerance of his grip, and let the sway pick his stance.

A MetroCard skittered. He pinned it with his shoe and nudged it back. A nod. Enough.

His phone buzzed: the quiet account—the place he posted raw without a name—had a message. He lifted the screen, saw just enough to read *curator*, and opened a reply box instead of the note. *Thank you—* He watched the two words sit there, then deleted them. Pocketed the phone. Ignoring still counted.

He saw her as an angle before a person—far end, seated where ads turn into mirrors. Two planes—cheekbone, scarf line—and the shoulder's small change you get when someone listens to something unspoken. He looked once, counted: two beats. Strangers get two beats. No more.

He pulled a receipt and drew three lines with the stub: triangle for the strap, a soft circle that could become a hand later, a diagonal for weight. A tiny cross where the shoulder had shifted. He folded the receipt and slid it back into the warm pocket like a small promise.

Cold air climbed aboard at the next stop; the car recalibrated. An ad panel flickered a shade off; he corrected it in his head and let it go.

The studio took him the way rooms take people who return the same way every time. Radiator. Lamp. He drank what was left in the cup; it had cooled to truth.

He pinned the three-line hand to the wall with a strip of tape torn by teeth. Graphite didn't apologize. Under it he wrote with the stub: *Second chances: take one (small)*.

He turned the tracing paper so desk and drawing agreed. He left the cup where it had made its mark. He washed nothing.

On the way to bed he touched the subway map with two fingers, the way you test paper grain. Rooms didn't need goodnights. He checked the window latch, the kettle switch, the card on the lamp. Rule 12 did its job, small and plain.

Across the room the folder of words stayed closed. Somewhere inside, the uncredited line held its heat better than tea. He didn't think about why. He didn't connect the author to anyone. He didn't go looking.

The studio thinned to hums. He lay down and let the day flatten—no layers, no masks—one sheet, unshared.`,
          ko: `그는 손에 남은 온기를 쥔 채 카페를 나왔다. 잠보다 움직임이 더 필요했다.

스튜디오는 거리와는 다른 날씨를 지녔다. 라디에이터가 또각거리고, 스탠드 조명이 작은 원을 고요히 깔렸다. 이안은 코트를 의자에 걸었다. 소매 끝에서 떨어진 물방울 하나가 마룻장 틈을 찾아 들어갔다. 물이 선을 고르는 순간이 좋았다.

그는 신문지 밑에 둔 포스터 시안을 꺼내 책상 모서리에 반듯이 맞췄다. 연필 점 셋으로 기준을 잡고, 한 번 숨 쉬고, 눈대중으로 두어 밀리미터 밀어 제목이 이미지와 부딪히지 않게 했다. 손마디로 간격을 셌다. 하나, 둘, 가느다란 한 칸. 너무 완벽했다. 손끝에 숯가루를 묻혀 여백을 살짝 문질렀다. 얼마나 빨리 했는지 묻지 못하게 하려는, 아주 작은 어긋남.

트레이싱 페이퍼. 원 하나, 단순하게. 중심을 찍고, 컵이 눌렀던 힘이 남아 있는 타원을 잡았다. 보조선 두 줄을 얇게 그은 다음, 종이를 들어 빛에 비춰 확인했다. 증거는 충분했다. 종이는 다시 더미 아래로 밀어 넣었다. 됐다.

오늘은 손이 조용했다. 왼손바닥을 뒤집으니 연필이 닿던 매끈한 굳은살이 잡혔다. "너희 둘, 얌전히." 관객은 필요 없었다. 새 종이. 손에 가까운 세 줄—천 조각의 가장자리, 집게손가락의 능선, 손바닥 끝의 무게. 네 번째 선은 그리지 않았다. 네 번째 선은 거짓이니까. 그는 카드를 하나 뽑아 스탠드 기둥에 붙였다. 규칙 12: 하루에 한 줄, 정직한 선—업로드 금지.

평판 서랍에서 'WORDS'라고 적힌 마닐라 폴더를 꺼냈다. 찢긴 페이지, 오려 붙인 문장들이 클립과 테이프 사이에 눌려 있었다. 몇 달 전 저장해 둔 문장을 찾았다. 작고 평범한 글꼴, 이름 없는 출처. 사람들은 때로 주문한 걸 원하는 게 아니라, 식을 때까지 손에 쥐고 있을 수 있는 걸 원한다. 단어 하나만 어긋나도 무너질 문장이었다. 아무것도 어긋나 있지 않았다. 모서리에 연필로 적어 둔 작은 글씨: 출처 미상. 그는 종이를 다시 넣었다. 그 문장은 주머니 속 동전처럼 몸에 남았다.

열어 보지 않아도 되는 채팅이 있었다. 마지막 문장은 화면 없이도 떠올랐다. 자신의 작업 스크린샷, 그리고 이를 문장 하나로 물어뜯던 단어. "파생적." 그는 스탠드 밝기를 한 칸 낮추고, 가장자리가 부드러워지는 걸 보았다. 그 정도면 충분했다.

신문지 밑에는 재단 매트 대신 지하철 노선도가 깔려 있었다. 모서리를 손가락으로 두 번 두드리고, 짧은 연필 한 자루를 주머니에 넣고서, 그는 밖으로 나갔다.

바깥은 기분이 아니라 방향이었다. 강변에서 밀려온 바람이 애비뉴의 법칙을 배웠다. 중앙은 빠르고, 가장자리는 느렸다. 맨홀에서 올라오는 김은 반듯한 기둥을 이루다 교차바람에 접혔다. 공기에는 브레이크 가루의 마른 금속 냄새와 젖은 돌 냄새가 섞였다. 제설제가 던져진 자리엔 소금이 틈새에 딱딱하게 달라붙었고, 부츠는 그것을 다시 가루로 만들었다. 그는 빛이 모이는 자리, 모퉁이, 환기구의 따뜻함 같은 쓸모를 따라 길을 그리듯 걸었다.

승강장의 기류는 기둥 사이로 차선처럼 정리되어 흘렀다. 순서: 압력의 물결, 브레이크의 비명, 문이 풀리며 내는 짧은 숨. 안은 젖은 모직과 금속, 카페에서 옮아온 시트러스 세제가 희미하게 났다. 그는 봉을 잡고, 손과 금속 사이의 오차를 확인한 뒤, 객차의 흔들림에 자세를 맡겼다.

메트로카드가 바닥을 긁으며 미끄러졌다. 그는 발끝으로 눌러 멈춘 뒤, 주인에게 톡 밀어 돌려줬다. 고개가 한번 끄덕여졌다. 그걸로 충분했다.

주머니 속 폰이 짧게 떨렸다. 이름을 숨긴 채 거친 스케치를 올려 두는 조용한 계정이었다. 메시지 미리보기엔 큐레이터라는 단어가 보였다. 그는 메시지를 열지 않고 답장 창을 켰다. 감사합니다— 두 단어가 화면에 앉는 걸 보다가 지웠다. 휴대폰을 주머니에 넣었다. 외면도 선택이다.

그녀를 사람보다 각도로 먼저 봤다. 광고가 거울로 바뀌는 창 틈 옆, 객차 끝에 앉아 있었다. 두 개의 면—광대뼈, 목도리 선—그리고 말로 하지 않는 소리를 듣고 있을 때 어깨에 생기는 아주 작은 변화. 그는 한 번만 보고, 두 박자를 속으로 셌다. 낯선 사이는 두 박자까지. 더는 없다.

그는 영수증을 꺼내 짧은 연필로 선 세 개를 그었다. 손잡이 끈을 위한 삼각형, 나중에 손이 될 수 있는 부드러운 원 하나, 무게를 위한 비스듬한 선. 어깨가 옮겨간 자리에는 작은 십자 표시. 종이를 접어 따뜻한 주머니로 다시 넣었다. 작은 약속처럼.

다음 역에서 차가운 공기가 훅 들어오자 객차는 스스로 균형을 다시 잡았다. 광고판 하나가 색이 미묘하게 어긋나며 깜빡였다. 그는 머릿속으로 보정하고, 스스로를 살짝 비웃고는 놓아버렸다.

스튜디오는 늘 같은 방식으로 돌아오는 사람을 같은 방식으로 받아들였다. 라디에이터. 스탠드. 컵에 남은 것은 식어 있었고, 식은 대로의 맛이 났다.

그는 세 줄짜리 손 스케치를 벽에 붙였다. 이로 뜯은 테이프 한 조각으로. 흑연 선은 담담했다. 아래에 짧은 연필로 적었다. 두 번째 기회: 아주 작은 거 하나는 받기.

트레이싱 페이퍼를 돌려 책상과 그림의 방향을 맞췄다. 컵은 자국이 남은 자리에 그대로 뒀다. 아무것도 씻지 않았다.

침대로 가는 길에 그는 지하철 노선도를 두 손가락으로 살짝 만졌다. 종이 결을 확인하듯. 방은 인사를 필요로 하지 않는다. 그는 창문 걸쇠, 주전자 스위치, 스탠드에 붙은 카드를 차례로 확인했다. 규칙 12는 작고 분명하게 제 역할을 했다.

맞은편에 둔 'WORDS' 폴더는 닫혀 있었다. 그 안 어딘가의, 이름 없는 그 문장은 차보다 오래 열을 지키고 있었다. 이유는 생각하지 않았다. 그 문장을 누구와도 연결하지 않았다. 찾으려 하지도 않았다.

스튜디오는 다시 작은 소음들만 남겼다. 그는 몸을 눕혀 하루를 납작하게 폈다. 겹도, 가림도 없이. 종이 한 장. 공유하지 않음.`,
        },
      },
      {
        id: '5',
        number: 5,
        title: {
          en: "People Who Don't Speak",
          ko: '말하지 않는 사람들',
        },
        publishDate: '2025-10-13',
        content: {
          en: `Ten minutes to close, the owner started talking the way he always did when the room thinned—hands making patient circles over the counter, voice softened by steam that had already been shut off.

"You read her yet?" he asked Heather, as if they'd been mid-conversation. "Came out of nowhere. Two bestsellers, then she vanished. No jacket photo. Pen name. A ghost, but the good kind."

He didn't wait for her answer. "There's this line I keep thinking about—something like, 'A man who taps the table twice before speaking, to check if it can hold his words.' I swear I see him in here sometimes. Not him-him, just…someone like that." He smiled at the empty seats. "Feels like she wrote this place."

Heather smoothed a stack of lids that didn't need smoothing. "Sounds good," she said.

"What do you think happens to a writer like that?" he went on. "Burned out? Or sitting in a café somewhere, recharging by watching us?" He shrugged. "Either way, she knows people."

She smiled like it belonged to someone else. "Maybe she's just quiet."

When he moved off to check the back door, Heather wrote in her pocket notebook and bracketed it so it wouldn't count:

[Last Train, #2] Some books leave on purpose. Some writers too.

She killed the lights in sections and let the bell use up its last small voice. The café had a recessed doorway, a little pocket that kept air longer than it should. On the threshold, the wood frame held the day's smells in layers: citrus cleaner, espresso, paper. Something else skimmed the edge—clean cedar with a bright thread she couldn't name. Familiar, for no reason she could explain. It lifted as she stepped out, like it had only just been passing through.

Down the stairs, into the tiled throat. The screen promised two minutes, meaning anywhere from one to four. Wind came first, then the long metal vowel that turns into a train if you trust it. She stepped into the car and into the same rectangle of air—two shoes from the pole, one tile off the door seam.

Same seat, same face. He had the short end seat by the door that only sometimes opened. The sketchbook rested open on his knee, a pencil sleeping across the seam like a bridge he hadn't decided to cross. A graphite crescent lived under his thumbnail, the kind you earn by drawing the day.

The car tilted. The pencil slid across his knee toward the aisle. Her glove found it before gravity could finish its thought and stopped it with the unshowy authority of wool.

He looked up because gravity asked him to. She didn't look down because that would have been an admission. They let go at the same beat, a practiced handoff with no rehearsal. She adjusted her wrist so it wouldn't brush his knee. That narrow adjustment was the entire conversation.

—

The week learned them.

On Monday, he nudged his bag under the seat to his left, clearing the triangle of floor by the pole she liked to claim—an ordinary kindness pretending to be logistics. Without looking up, he checked the door light; his shoe tapped twice, a habit from a book he's read more than once.

On Tuesday, the ad panel threw a ghost car onto the window so their faces met only in glass, almost aligned in that other train while the real them kept their parallel angles.

On Wednesday, as the car pulled out of Prince toward Canal, a tourist under the route map asked, "Does this stop at Canal?" and they both said "Yeah" at the same time. The brake squeal ate the sound before anyone could hear it—even them. Each stepped half a shoe back, as if giving the word its own space to cool.

—

Thursday rearranged everything by doing nothing.

A suitcase apology at the staircase took longer than the suitcase. Heather missed her usual car and boarded one that smelled like too much cologne and someone losing an argument quietly. She held a pole no one had warmed yet and tried not to perform absence.

On his car, he stayed seated, and set his bag left anyway. His eyes kept returning to the saved inch of metal where a glove should have been. When the doors breathed at Prince, his shoulders half-turned—then settled, like a question put back on the shelf. He opened the sketchbook on his knee and drew the margin—the clean-neglected strip of pole where palms get edited out. He set the point down and lifted it again, leaving a single dot where a hand should start. He drew the air around a missing wrist, the span his thumb had started to measure without permission. Negative space said the thing the pencil didn't know how to. When Canal's curve asked the car to lean, he breathed as if to speak and let the breath pass. The three-line receipt disappeared deeper into his coat pocket. Rule 12 kept its promise.

That night, Heather wrote nothing. The owner's earlier voice drifted up when the apartment went quiet—no photo, pen name—and then dropped away. She fell asleep with a sentence still moving.

—

Friday fixed nothing. It didn't try. That felt merciful.

They shared the train with the careful neutrality of people who had successfully pretended not to miss each other. At Prince, his knee moved one degree; at Canal, she tipped her shoulder so the strap wouldn't swipe his coat. Their diplomacy lived in millimeters. No one thanked anyone. It was perfect.

—

Sunday made a small new sound.

At closing, a couple built the scaffolding of a fight with a muffin as the central pillar and handed the ruins back to Heather to throw away. On the far wall, a flake of bubbled paint had curled at the edges, considering gravity. She turned the sign. The recessed doorway kept smells like a pocket; cedar with something bright hung there a beat longer than the street allowed. Not the café, not her. Familiar, without a memory attached. She let it pass and took the stairs with the lightness people confuse with ease.

The screen's promises improved to "arriving," then reconsidered. When the train finally sighed open, the car had already learned her outline. He moved his bag beneath his feet, and the rectangle of floor by the pole was hers again. She stepped into it. The doors closed with their patient annoyance.

For two stops their breathing matched by accident. When the car tilted, they tilted. When it steadied, they steadied. It was like standing on a boat with someone and trusting them not to point it out.

The ad panel above them reflected their silhouettes onto the opposite window—a ghost car keeping pace. In that moving mirror, their faces almost faced. In the real car, they looked at the same not-quite thing. He wiped a thin line of graphite off his thumb onto his jeans, a diagonal comma no one would read.

He cleared his throat because bodies require noise. She adjusted her scarf because hands require errands. The movement bounced their attention off each other and away again. Not a smile, not exactly—a rehearsal that decided against opening night.

At 14th, the car performed a small shuffle as everyone organized themselves toward different futures. He stood first, not urgently, leaving space behind him that could be followed without being taken. She stayed until the last second the doors would allow and then chose the farther exit. Parallel departures are still a kind of together.

Back at street level, the city was the same shade everywhere. She walked past her own window and saw the bubbled paint catching a weak square of light. Inside, napkins waited under the register—square, blank, more dangerous than they looked.

[Last Train, #5] I don't know his name. I know where he breathes when the car turns.

She didn't post it. She closed the notebook and let her thigh remember the weight.

Across town, a desk lamp clicked off. A pencil settled across the seam of a closed book like a bridge kept ready. Somewhere between stations, air learned the shape of two people who hadn't spoken and still said something. The train kept the grammar for them, safe and mechanical, until they were ready to hear it.`,
          ko: `영업 종료 10분 전, 가게가 한산해지면 늘 그러듯, 주인은 카운터 위에서 손으로 느릿한 원을 그리며, 이미 꺼 둔 스팀의 잔열처럼 낮아진 목소리로 말을 꺼냈다.

“그 작가 읽어봤어?” 그가 헤더에게, 마치 이야기 도중이기라도 한 듯 물었다. “갑자기 나타나서 베스트셀러 두 권 내고는 사라졌지. 표지 사진도 없고, 필명. 유령 같아. 좋은 쪽으로.”

그는 대답을 기다리지 않았다. “자꾸 생각나는 문장이 있어. ‘말하기 전에 탁자를 두 번 두드린다. 자기 말의 무게를 버틸 수 있는지 확인하듯.’ 가끔 이 안에서 그 사람이 보여. 그 사람 그대로가 아니라, 그냥… 그런 느낌의 누군가.” 그는 빈 의자들을 보며 웃었다. “이 가게를 그 사람이 쓴 것 같아.”

헤더는 다듬을 필요도 없는 뚜껑 더미를 매끈하게 맞췄다. “좋은데요,” 하고 말했다.

“그런 작가는 나중에 어떻게 될까?” 그는 말을 이었다. “번아웃? 아니면 어딘가 카페에 앉아 우리 구경하면서 충전 중? 뭐 어쨌든, 사람을 아는 사람이더라.”

헤더는 자기 것 같지 않은 미소를 지었다. “아마 그냥 조용한 사람일지도요.”

그가 뒷문을 확인하러 물러나자, 헤더는 주머니 노트를 꺼내 한 줄 적고, 진짜가 되지 않도록 괄호로 감쌌다:

[Last Train, #2] 어떤 책들은 일부러 떠난다. 어떤 작가들도.

불을 구역마다 끄고, 종이 마지막 작은 목소리를 다 써 버리도록 내버려 두었다. 카페 입구는 안으로 움푹 들어가 있어, 공기를 필요 이상 오래 붙잡는 작은 주머니 같았다. 문턱의 나무 틀엔 하루의 냄새가 층층이 남아 있었다. 시트러스 세제, 에스프레소, 종이. 그 끝에 다른 것이 스쳤다—깨끗한 삼나무에 밝은 실 한 올. 이유 없이 익숙하고, 설명할 수 없이 편안했다. 막 지나가던 것처럼, 그녀가 한 발 나서자 그 냄새는 가볍게 풀렸다.

계단을 내려가, 타일로 된 목구멍 속으로. 전광판은 ‘2분’을 약속했지만, 그건 1에서 4 사이 어디쯤을 뜻했다. 먼저 바람이 오고, 믿어 주면 기차가 되는 긴 금속 모음이 뒤따랐다. 그녀는 칸에 올라, 늘 그 사각형의 공기 속으로 섰다—기둥에서 두 발, 문 이음새에서 타일 한 칸.

같은 자리, 같은 얼굴. 그는 가끔만 열리는 문 옆 끝자리에 앉아 있었다. 스케치북이 그의 무릎 위에 펼쳐져 있었고, 미정의 다리처럼 접힌 선 위에 연필이 누워 있었다. 엄지손톱 아래엔 하루를 그린 사람에게 생기는, 초승달 모양의 흑연 자국이 살고 있었다.

열차가 한쪽으로 기울었다. 연필이 그의 무릎을 타고 통로 쪽으로 미끄러졌다. 그녀의 장갑이, 중력의 생각이 끝나기도 전에 그 움직임을 가만히 멈췄다. 요란하지 않은 양모의 권위로.

그는 중력의 요청 때문에 올려다봤다. 그녀는 고개를 내리지 않았다. 그건 인정이 될 것 같아서. 둘은 같은 박자에 놓았다. 리허설 없이도 맞춰지는 바통 터치처럼. 그녀는 손목을 조금 틀어 그의 무릎에 스치지 않게 했다. 그 좁은 조정이 전부였다. 대화의 전부.

—

한 주가 그들을 익혔다.

월요일, 그는 왼쪽 좌석 아래로 가방을 밀어 넣어, 그녀가 좋아하는 기둥 옆 삼각형 바닥을 비워 두었다—물류인 척하는 평범한 친절. 그는 고개도 들지 않고 문 불빛을 확인했고, 신발이 두 번, ‘탁 탁’ 소리를 냈다. 여러 번 읽은 책에서 배어든 습관처럼.

화요일, 광고 패널이 창에 유령 같은 또 한 대의 열차를 비춰, 그 속에서만 두 사람의 얼굴이 거의 겹쳤다. 현실의 그들은 각자의 각도를 그대로 지켰다.

수요일, 열차가 프린스에서 캐널로 빠져나갈 때, 노선도 아래 서 있던 관광객이 물었다. “여기서 캐널 가요?” 두 사람은 동시에 “네”라고 답했다. 브레이크의 비명이 그 겹친 소리를—그들 스스로조차—삼켜 버렸다. 둘은 반 발씩 물러섰다. 하나의 단어가 식을 자리를 내주듯.

—

목요일은 아무것도 하지 않음으로써 모든 것을 바꿨다.

계단에서 캐리어를 끌던 이가 연신 “죄송해요” 하며 길을 막았다. 사과가 캐리어보다 더 오래 걸렸다. 헤더는 늘 타는 칸을 놓치고, 향수가 과한 데다 누군가 조용히 다투는 냄새가 배인 다른 칸에 올랐다. 아직 누구의 손도 데우지 않은 기둥을 잡고, 부재를 공연하지 않으려 했다.

그의 칸에서 그는 그대로 앉아, 그래도 가방을 왼쪽으로 밀어 두었다. 그의 시선은 자꾸 그 한 치 남겨 둔 금속으로 돌아갔다. 그곳엔 장갑 낀 손이 있어야 했다. 프린스에 닿아 문이 숨을 들이쉴 때, 그의 어깨가 반쯤 돌아갔다가—선반에 올려둔 질문처럼—다시 가라앉았다. 그는 무릎 위 스케치북을 열고 여백을 그렸다—손바닥들이 늘 지워지는, 기둥 옆 깨끗-방치된 띠. 그는 펜촉을 한 번 찍고 들어 올려, 손이 시작될 자리에 점 하나를 남겼다. 보이지 않는 손목 둘레의 공기를 그렸고, 어느새 엄지가 허락도 없이 재기 시작한 그 너비를 그렸다. 부재가, 연필이 알지 못하는 말을 대신해 주었다. 캐널로 도는 곡선이 객차를 기울게 했을 때, 그는 마치 말을 꺼낼 듯 숨을 들이켰다가 흘려보냈다. 세 줄짜리 영수증은 코트 주머니 깊숙이 더 사라졌다. 규칙 12는 약속을 지켰다.

그날 밤, 헤더는 아무것도 쓰지 않았다. 집이 조용해지자, 주인의 낮은 목소리가—사진도 없고, 필명—하고 떠올랐다가 가라앉았다. 그녀는 아직 진행 중인 문장과 함께 잠들었다.

—

금요일은 아무것도 고치지 않았다. 그럴 생각도 없었다. 그래서 오히려 자비로웠다.

둘은 서로 그리워하지 않은 척 성공한 사람들처럼 조심스러운 중립으로 같은 열차를 탔다. 프린스에서 그의 무릎이 한 도 만큼 옆으로 움직이고, 캐널에서 그녀가 어깨를 비껴 가방 끈이 그의 코트를 스치지 않게 했다. 외교는 밀리미터 단위로 진행됐다. 누구도 아무에게도 고맙다고 하지 않았다. 완벽했다.

—

일요일은 작은 새로운 소리를 냈다.

마감 직전, 한 커플이 머핀을 기둥 삼아 싸움의 비계를 세웠다가, 그 잔해를 헤더에게 건네며 버려 달라고 했다. 맞은편 벽의 부풀어 오른 페인트 조각은 모서리가 말려, 중력을 생각하는 중이었다. 그녀는 사인을 돌렸다. 움푹 들어간 문간은 냄새를 주머니처럼 붙잡았고, 삼나무에 밝은 한 줄기가 얹힌 향이 거리보다 한 박자 더 머물렀다. 카페도, 그녀도 아닌 냄새. 기억과 연결되지 않은 익숙함. 그녀는 그대로 지나치고, 사람들이 종종 ‘편안함’과 혼동하는 가벼움으로 계단을 내려갔다.

전광판의 약속은 ‘도착’에 가까워졌다가, 다시 생각을 바꿨다. 마침내 기차가 한숨처럼 문을 열었을 때, 칸은 이미 그녀의 윤곽을 기억하고 있었다. 그는 발밑으로 가방을 밀어 넣었고, 기둥 곁 사각형 바닥은 다시 그녀의 자리가 됐다. 그녀는 그 안으로 섰다. 문은 늘 그렇듯 참을성 있게 짜증을 냈다.

두 정거장 동안, 두 사람의 호흡이 우연히 맞았다. 칸이 기울면 함께 기울고, 바로 서면 함께 바로 섰다. 누군가와 배 위에 서 있으면서, 굳이 말하지 않기로 서로를 믿는 느낌이었다.

머리 위 광고 패널이 반대쪽 창에 그들의 실루엣을 비쳤다—속도를 맞추는 유령 열차. 그 움직이는 거울 속에서, 두 얼굴은 거의 마주 보는 듯했다. 현실 속의 그들은 같은 ‘거의’를 바라봤다. 그는 엄지의 가느다란 흑연 자국을 청바지에 문질러 지웠다. 아무도 읽지 못할 대각선의 쉼표.

몸은 가끔 소음을 필요로 해서, 그는 가볍게 헛기침을 했다. 손도 심부름이 필요해서, 그녀는 목도리를 만졌다. 그 움직임은 서로를 스쳐, 다시 멀어지게 했다. 웃음은 아니었다. 정확히 말하면—개막을 미룬 리허설 같았다.

14번가에서, 사람들 각자의 미래를 향해 정리하듯 칸이 작은 몸놀림을 했다. 그는 먼저 일어섰지만 서두르지 않았고, 뒤를 따를 수도 있고 그냥 둘 수도 있는 간격을 남겼다. 그녀는 문이 허락하는 마지막 순간까지 있다가 더 먼 출구를 골랐다. 나란히 떠나는 것도 함께의 한 형태다.

지상으로 올라오니, 도시의 색은 어디나 같았다. 그녀는 자기 가게 창을 지나며, 약하게 떨어지는 사각빛을 잡아먹는 부풀어진 페인트 조각을 보았다. 계산대 아래, 네모난 냅킨들이 기다리고 있었다—하얗고, 빈칸이고, 보기보다 위험한 것들.

[Last Train, #5] 나는 그의 이름을 모른다. 열차가 돌아설 때 그가 어디에서 숨 쉬는지만 안다.

그녀는 올리지 않았다. 노트를 닫고, 허벅지가 그 무게를 기억하게 했다.

도시 반대편 어딘가에서, 책상 조명이 ‘딸깍’ 꺼졌다. 닫힌 책의 접힌 선 위로 연필이 다리처럼 얹혀 제자리를 찾았다. 역과 역 사이 어딘가에서, 말하지 않은 두 사람의 모양을 공기가 먼저 배웠다. 기차는 그들의 문법을, 그들이 들을 준비가 될 때까지, 안전하고 기계적으로 보관해 주었다.`,
        },
      },
      {
        id: '6',
        number: 6,
        title: {
          en: 'The Napkin',
          ko: '그 냅킨',
        },
        publishDate: '2025-10-14',
        content: {
          en: `The café thinned to edges.

The last regular left his newspaper folded to the crossword, three downs unsolved. Heather knew they'd stay that way—he never touched weekend puzzles, only left them for whoever cleaned tables. The radiator's tick slowed from allegro to largo, then stopped, and a particular quiet took the room—the kind that only arrives after heat quits trying.

The fridge compressor surrendered with a soft shutoff. Without its hum, the city came through the glass: not loud, just present, like someone breathing in the next room. She dried a square on the counter where a cup had lived all afternoon. A faint coaster shadow remained, refusing the towel's instructions. The OPEN sign's red tipped toward a tired pink over the tile by the door; the stainless edge of the counter held its strip of cold blue and returned her hands in thin, nervous halves.

She stacked lids into a column that didn't need straightening. A delivery crate settled in the back with a small, finished thud. The faucet gave one apologetic drip and then behaved. She liked this hour—the room done asking.

The door hissed at the seal.
He stepped in with an exact politeness of gait—space left for a person who might be leaving, shoulders arranged to calm a coat that wanted to flare. He set his umbrella against the wall; it didn't slide. Dark wool, cuff a shade darker where the elbow learns tables. His scarf carried a single white thread like a tally mark. His eyes did a fast inventory, then let go of it.

"Chamomile, hot?" she asked.

"Please."

Heather worked by muscle and sight. Paper cup, sleeve, tag kept from slipping with a finger. She watched for the small things she trusted more than talk: his wallet opening with notes squared; his left hand resting on the counter with the thumb kept off the metal, as if smudges were a kind of rudeness; the card returned to its lane, face the same way as the others. When the kettle thinned to a line, she followed the thread of gold until it pooled. She set the lid until the faint click said it intended to stay.

The receipt printer chirped and cut. He didn't reach for it. He placed a coin on the counter he didn't owe and nudged it nearer to square. Along the side of his index finger, the faint shine of graphite—like another task had already happened where no one could see it.

She slid the cup. "Careful."

"Thanks."

He took a napkin from the jar, one of the heavier kraft squares, and something changed radius around him. A stub pencil came out of his jacket the way a tool lives where it belongs. The sound, when it touched paper, drew a circle—dry, tidy, the noise of making room for a line.

He didn't draw a face. He drew what the room had already agreed to be.
First, the corner of the folded newspaper: a small grid of dark and light, three blanks left vertical like missing teeth. He added tiny clue numbers—3, 12, 17—so small they almost hid. Below it, the counter's edge, a single firm stroke. Inside that angle, he shaded a pale square: the coaster shadow she'd failed to erase, made visible on purpose. Across the bottom margin he pulled a soft band, a horizontal wash that stood in for the window's tired pink on tile. Near the band, he wrote nothing, only broke the line into dashes where the light breaks against grout. In the upper right, he mis-registered the letters of the window sign just enough to suggest them backwards without spelling anything smug. He paused, made one correction with a quiet eraser thup, and brushed the crumb aside with the back of his knuckle. The graphite along his finger deepened a shade.

Heather wiped a clean place that didn't require it. Her mind tried to sprint ahead—portrait? critique?—and then tripped on the coaster square. Was that a note to clean better? The three blanks in the crossword—were those hers, the pieces she keeps refusing to fill? The band of light—was he watching that closely, down to color? She didn't tilt her head. She made the spoon handles in the rack line up and let the picture keep making itself without her help.

He paid. Coins landed without clatter. He lifted the cup. For a fraction he considered the napkin. He left it where a saucer would have gone if saucers were still a thing here. His jacket zipper closed with a neat rasp. The door's rubber lip sighed around him, and the pink from the window walked across his shoulder and left.

She finished the list. Mats up. Chairs. Lights to half. A rag folded into a smaller square than necessary. She reached the counter last, and the napkin gave a dry whisper into her palm. Graphite found her thumb, a faint crescent. Up close, the drawing refused performance. The crossword corner was only a corner. The three blanks were just blanks. The coaster square looked exactly like a coaster square and not a moral. She held it over the trash and the room did not vote.

She folded once along a line that wasn't there, careful not to drag through the grid, and slid the square into her apron pocket. Paper touched seam with mild insistence. The choice made a small, useful click inside her—like a switch that doesn't power anything yet but admits there will be power later.

She turned the sign, locked the door, and rested her forehead near the glass a breath. The city's presence returned—delivery van beeper somewhere far off, a scooter's thin whine, a storefront gate brought down slowly so it wouldn't start a fight it couldn't finish. Across the way, the bone-white figure in the crosswalk flashed at a tempo that wanted cooperation, not obedience.

Down the stairwell, the old handrail kept its splinters on the underside where only truth touches. The vestibule smelled faintly of citrus and cardboard. She checked her pocket because she wanted to—not as a guard, as a proof. The napkin held its shape and reminded her where her hip was. Outside, the pharmacy's green spill washed the pavement without meaning anything. She walked the two blocks with her knees steady and her head quiet, not counting, letting the square of paper reset the size of attention.

Up four flights, the bulbs argued, then committed. The door gave its usual resistance to the second turn and then relented. Keys to the metal dish—small argument, quick settlement. The heater offered a practical sigh and stayed out of it.
She untied her apron and set it on the counter. The napkin came out warmer than she liked admitting. She flattened the fold with the side of her hand. The lines behaved better than the paper deserved.

Now the image was unmistakable: the newspaper corner (tiny numbers, three blanks), the counter edge, the stubborn coaster square, the low stripe of light. Up close, the three blanks were not perfect; each had a soft hook where the pencil first touched down. The pink band wasn't pink—of course it wasn't—but the way he broke the line into small dashes felt right for light that can't commit to being solid. The almost-letters in the corner didn't spell anything. They only suggested that words exist on the other side of glass.

She tried a few places on the fridge. Too high announced itself. Too low apologized. She taped it at the height you meet when you pour water at two in the morning. Blue painter's tape, pressed from center to edge with two fingers. The napkin rasped under her palm; the graphite flashed and went quiet as the kitchen light shifted when the fridge found its hum again.

She judged the coaster square first because that was honest—was this a dig? Then she stood closer. No, it wasn't a dig. It was a fact. He had drawn what was there: the hour, not the person. The three blanks did their small work on her anyway. Not accusation—permission to leave something unfinished and still call the picture complete.

Across town, a glove thudded on a small hallway table. Ian wiped a gray sheen from his index finger and watched it transfer to his thumb without metaphor. He redrew the corner of the grid in his head and considered whether the band of light had needed the broken line. He knew there wouldn't be a version two tonight. He felt for where the napkin would have been and decided the absence was the exact size he meant to leave in the world. That was enough for a day.

Back in the kitchen, the tape lifted a hair at the top right and she pressed it down. The paper warmed under her palm, then cooled. The grid's tiny numbers held the room's rhythm better than the clock ever had. She set a glass beside the napkin and liked the blunt sound it made—no pretty chime, just contact. When she leaned, the pencil caught the light one stroke at a time—dull, then bright, then dull—like a row of small nods in agreement.

She rinsed her thumb; the crescent didn't quite leave. Reasonable tax. She stood without doing dishes. The coaster square was still only a square. The blanks were still blanks. She let them be. She turned off the overhead and left the under-cabinet strip to keep watch. The drawing settled into a respectful gray.

On her way to bed she pressed the center once—the way you check whether tape intends to stay. The paper held. The graphite answered with a brief, ordinary shine. That was all she asked of it. That was plenty.
`,
          ko: `카페는 가장자리만 남은 듯 얇아졌다.

마지막 단골은 신문을 십자말풀이 면으로 접어 두고 갔다. 세 칸짜리 세로 문제가 비어 있었다. 헤더는 그 칸들이 그대로 남을 거라는 걸 알았다—그는 주말 퍼즐에는 손대지 않고, 테이블 치우는 사람을 위해 남겨두곤 했다. 라디에이터의 똑딱임은 알레그로에서 라르고로, 그리고 완전히 멈췄다. 열이 노력하길 그만둔 뒤에야 오는, 그 특유의 고요가 방을 채웠다.

냉장고 압축기가 작은 체념과 함께 멈췄다. 웅음이 사라지자 유리 너머의 도시가 들려왔다. 시끄럽지 않되 분명한 존재감—옆방에서 누군가 숨 쉬는 정도. 그녀는 오후 내내 컵이 자리했던 카운터의 한 사각을 말렸다. 희미한 코스터 자국이 수건의 지시를 거부하듯 남아 있었다. 문가 타일 위로는 OPEN 표지의 빨강이 지친 분홍으로 번졌고, 스테인리스 가장자리는 차가운 푸른 선을 유지한 채, 잘려나간 듯 반쪽짜리로 떨리는 그녀의 손을 되비쳤다.

필요도 없는 뚜껑들을 곧게 쌓았다. 뒤쪽에서는 배달 상자가 작은 “끝” 소리와 함께 자리를 잡았다. 수도꼭지가 미안하다는 듯 한 번 똑 떨어지고 얌전해졌다. 그녀는 이 시간을 좋아했다—방이 더 이상 요구하지 않는 시간.

문 고무 패킹이 스스륵 숨을 쉬었다.

그가 들어왔다. 나가려는 사람을 위한 공간을 남기고, 퍼지려는 코트를 진정시키는 어깨—정확하게 예의 바른 걸음새였다. 그는 우산을 벽에 기대어 뒀다. 미끄러지지 않았다. 짙은 모직, 테이블을 배운 팔꿈치 근처만 한 톤 더 어두웠다. 목도리에는 계산처럼 보이는 하얀 실 한 올이 걸려 있었다. 그의 시선이 빠르게 방을 세고는, 곧 놓아주었다.

“캐모마일, 뜨거운 거요?”

“네, 부탁해요.”

헤더의 손은 근육과 눈으로 일했다. 종이컵, 슬리브, 실이 미끄러지지 않게 손가락으로 잡기. 그녀는 말보다 믿는 작은 것들을 살폈다. 지폐 모서리가 맞춰진 지갑, 금속에 지문을 남기지 않으려는 듯 카운터 모서리에 엄지만 떼고 올려둔 왼손, 같은 방향으로 다시 꽂히는 카드. 주전자 물줄기가 가늘게 선으로 변하자, 금빛 실이 작은 웅덩이가 될 때까지 따라갔다. “딸깍” 하고 의지를 밝히는 작은 소리까지 뚜껑을 밀어 맞췄다.

영수증 프린터가 짹 하고 찍고 잘랐다. 그는 손을 뻗지 않았다. 내지 않아도 되는 동전을 카운터 위에 올려놓고 정사각에 더 가깝게 밀어두었다. 집게손가락 옆면에는 그래파이트가 은은히 번들거렸다—어디선가, 남에게 들키지 않은 다른 일이 이미 진행된 흔적처럼.

그녀가 컵을 밀었다. “조심하세요.”

“감사합니다.”

그는 두꺼운 크래프트 냅킨을 하나 꺼냈다. 그를 중심으로 반경이 달라졌다. 재킷 속에서 짧은 연필이 제자리에서 꺼내진다—도구가 있어야 할 곳에 있다는 태도. 종이에 닿자 소리가 생겼다. 마른, 단정한, 선 하나를 위해 공간을 비우는 소리.

얼굴을 그리진 않았다. 이 방이 이미 동의하고 있던 풍경을 그렸다.

먼저, 접혀 있는 신문의 모서리. 어둠과 밝음이 만든 작은 격자, 빠진 이빨처럼 세 칸의 빈칸이 세로로 섰다. 그는 아주 작은 글씨로 단서 번호—3, 12, 17—를 적었다. 눈에 띄지 않을 만큼 작게. 그 아래에는 카운터 모서리를 단호한 한 획으로 그었다. 그 각 안쪽에는 연한 사각형을 깔아 음영을 줬다. 그녀가 지우지 못한, 고의로 드러낸 코스터 자리. 아래 여백에는 부드러운 띠를 길게 긋고, 문가 타일 위로 번진 지친 분홍빛을 대신했다. 그 근처에 글자는 쓰지 않고, 줄을 잘게 끊어 타일 줄눈에서 빛이 깨지는 느낌만 남겼다. 오른쪽 위에는 창문 글자의 역상처럼 보이게 일부러 살짝 어긋나게 스케치했다. 잘난 척은 없는 정도로만. 그는 잠깐 멈춰 조용한 지우개 ‘툭’ 한 번으로 각도를 고쳤고, 주먹 등으로 가루를 쓸어냈다. 그의 손가락 옆면의 그래파이트는 한 톤 더 짙어졌다.

헤더는 깨끗한 곳을 괜히 한 번 더 닦았다. 마음은 앞질러 달리려 했다—초상화? 비평?—그러다 코스터 사각에 걸려 넘어졌다. 더 잘 닦으라는 암시일까? 십자말풀이의 세 칸—그건 내 이야기일까, 내가 계속 비워두는 조각들? 그 빛의 띠—색감까지 보고 있었던 걸까? 그녀는 고개를 기울이지 않았다. 레일의 숟가락 손잡이를 나란히 맞춰두고, 그림이 그녀의 도움 없이 스스로 계속 만들어지게 두었다.

그는 값을 치렀다. 동전이 소리 없이 내려앉았다. 컵을 들었다. 아주 짧은 순간, 그는 냅킨을 생각했다. 이곳에 접시가 있었다면 놓였을 자리—그 자리에 냅킨을 남겼다. 재킷 지퍼가 정확한 소리로 닫혔다. 문턱의 고무 립이 그를 감싸듯 한숨 쉬었고, 창가의 분홍빛이 그의 어깨를 스쳐 나갔다.

그녀는 체크리스트를 끝냈다. 매트 올리고. 의자 올리고. 조명 절반. 걸레는 필요 이상으로 작은 정사각이 되도록 접었다. 마지막에 카운터로 돌아오자, 냅킨이 그녀의 손바닥에 마른 속삭임을 남겼다. 엄지에 초승달 같은 회색이 묻었다. 가까이서 보니, 그림은 공연을 거부했다. 십자말풀이의 모서리는 그냥 모서리였다. 세 칸의 빈칸은 그냥 빈칸이었다. 코스터 사각형도 도덕이 아니고, 그저 코스터 자리였다. 그녀는 그것을 쓰레기통 위로 들어 올렸고, 방은 아무 의견도 내지 않았다.

그녀는 없는 선을 따라 한 번 접었다. 격자를 문지르지 않도록 조심하며, 사각을 앞치마 주머니로 밀어 넣었다. 종이가 솔기에 닿으며 은근히 자리를 주장했다. 그 선택이 안쪽 어딘가에서 작고 유용한 ‘딸칵’을 냈다—아직 아무것도 켜지지 않지만, 언젠가 전기가 통할 것을 인정하는 스위치처럼.

표지판을 돌리고, 문을 잠그고, 유리 가까이 이마를 잠깐 댔다. 도시의 존재감이 돌아왔다—어디 먼 데서 들리는 배달차의 경고음, 얇게 우는 스쿠터, 괜한 싸움을 만들지 않으려 천천히 내려오는 셔터 소리. 길 건너, 횡단보도의 하얀 사람 표시는 복종이 아니라 협력을 원할 때의 박자로 깜박였다.

계단참을 내려가자, 오래된 난간은 진실만 닿는 아랫면에만 가시를 감췄다. 현관은 미약한 시트러스와 골판지 냄새가 섞여 있었다. 그녀는 확인하고 싶어서—경계가 아니라 증명으로—주머니를 짚었다. 냅킨은 모양을 유지했고, 그녀의 엉덩이가 어디 있는지 상기시켰다. 바깥에서는 약국의 초록빛이 아무 의미 없이 보도를 씻었다. 그녀는 무릎을 고르게, 머릿속을 조용히 두 블록을 걸었다. 숫자를 세지 않고, 종이 사각형이 주의의 크기를 다시 맞추게 하면서.

네 층을 올라가며 전구가 잠깐 옥신각신하다가, 결국 마음을 정했다. 문은 두 번째 회전에 늘 그렇듯 작은 저항을 보이다가 물러났다. 열쇠는 금속 그릇에—소소한 언쟁, 빠른 합의. 히터는 실용적인 한숨을 쉬고 대화 밖에 머물렀다.

앞치마 매듭을 풀어 카운터에 내려놓았다. 냅킨은 그녀가 인정하고 싶지 않을 만큼 따뜻했다. 그녀는 손날로 접힌 자리를 펼쳤다. 종이 수준보다 선들이 더 점잖게 굴었다.

이제 그림은 분명했다. 신문 모서리(작은 숫자들, 세 개의 빈칸), 카운터의 모, 억지로 남아 있던 코스터 사각, 낮게 깔린 빛의 띠. 가까이 보니 빈칸들은 완벽한 사각이 아니었다. 연필이 처음 닿던 자리마다 작은 갈고리가 있었다. 분홍 띠는—당연히—분홍이 아니었지만, 선을 잘게 끊어놓은 방식이, 단단함을 끝내 결정하지 못하는 빛의 성질과 잘 맞았다. 모서리의 거의-글자들은 아무 말도 쓰지 않았다. 다만 유리 건너편에 단어들이 존재한다는 사실만 암시했다.

그녀는 냉장고 위 몇 자리를 시험했다. 너무 높으면 스스로 알렸다. 너무 낮으면 미안해 보였다. 새벽 두 시에 물을 따를 때 눈이 맞을 높이에 붙였다. 파란 마스킹테이프를 중앙에서 바깥으로 두 손가락으로 밀어 눌렀다. 종이가 손바닥 아래서 사각거렸다. 냉장고가 다시 웅 하고 숨을 찾자, 부엌 불빛에 그래파이트가 반짝였다가 잠잠해졌다.

그녀는 먼저 코스터 사각을 판단했다. 그게 솔직하니까—빈정거림일까? 한 걸음 더 다가섰다. 아니다, 빈정거림이 아니다. 사실이다. 그가 그린 건 거기 있던 것들—사람이 아니라 시간. 그래도 세 개의 빈칸은 그녀에게 작은 일을 했다. 책망이 아니라 허락. 미완으로 남겨도 그림은 완성될 수 있다는 허락.

도시 반대편, 작은 현관 탁자에 장갑이 툭 떨어졌다. 이안은 집게손가락의 회색 윤기를 엄지로 훑어 옮기는 걸 보았다. 비유는 필요 없었다. 그는 머릿속에서 그 격자의 모퉁이를 다시 그려보며, 빛의 띠에 그 끊어진 선이 꼭 필요했는지 생각했다. 오늘 밤엔 2번 버전이 없을 것을 알고 있었다. 그는 냅킨이 있을 자리를 더듬었고, 세상에 남겨 두려 했던 빈자리의 정확한 크기가 지금의 부재와 같다고 결론냈다. 오늘로는 충분했다.

부엌으로 돌아와 보니, 테이프 오른쪽 위가 머리카락 한 올만큼 들떠 있었다. 그녀는 눌러 붙였다. 종이는 손바닥 아래서 따뜻해졌다가 식었다. 격자의 작은 숫자들이 시계보다 더 정확하게 방의 리듬을 붙들었다. 그녀는 냅킨 옆에 유리컵을 내려놓았고, 그 둔탁한 소리가 마음에 들었다—예쁜 맑음이 아니라, 그저 맞닿는 소리. 몸을 기울이자 연필 자국이 한 획씩 빛을 받았다—무디고, 반짝이고, 다시 무딘—작은 끄덕임들이 줄지어 서로에게 응답하는 것처럼.

그녀는 엄지를 씻었다. 초승달은 완전히 지워지지 않았다. 타당한 세금. 설거지는 미뤄둔 채 서 있었다. 코스터 사각은 여전히 사각형일 뿐이었다. 빈칸들은 여전히 빈칸이었다. 그녀는 그대로 두기로 했다. 천장등을 끄고 하부 조명만 남겼다. 그림은 예의 바른 회색으로 가라앉았다.

침대로 가는 길에 그녀는 한 번 중앙을 눌렀다—테이프가 머물 뜻이 있는지 확인하듯. 종이는 버텼다. 연필 가루가 잠깐, 평범한 빛으로 대답했다. 그녀가 그것에게 바란 건 그 정도였다. 충분했다.`,
        },
      },
      {
        id: '7',
        number: 7,
        title: {
          en: 'The People I See on the Last Train',
          ko: '막차에서 마주한 사람들',
        },
        publishDate: '2025-10-14',
        content: {
          en: `The napkin lived on Heather's fridge like a small, obedient window. The café was there in graphite lines: the scar on the counter, the tilt of the bell by the door, the light that fell wrong in late evening. No caption. No theory. Just what was.

At 11 p.m., Wednesday, she stood barefoot on the cold tile, drinking from a glass that kept fogging her lip. The apartment was the kind that sounded bigger after midnight. Heat knocked in the radiators and then thought better of it. Outside, someone's radio played a song that remembered it was winter only in the chorus.

Her thumb still carried a faint gray where she'd folded the napkin earlier, a smudge that made her hand look briefly like it belonged to a different life. She leaned into the fridge's light and let it make a white square on her face.

On the table, her notebook lay open to the page where she bracketed the things she wasn't allowed to say out loud. She ran a nail under one set of brackets—[Last Train, #5]—and pressed until the graphite broke a little. Then she erased the corners and read the sentence without its armor.

I don't know his name. I know where he breathes when the car turns.

It looked naked like that. Honest, and therefore dangerous.

She closed her eyes and, unhelpfully, saw bookstore windows: stacks of her novels in neat, confident towers, the jackets glossy enough to throw back the city. She had watched strangers read them on trains, watched mouths lift at a sentence, watched brows pull at a turn. She had sat three feet away and been no one. That was the part she liked, before everything got big enough to tilt. That was the part she ran from.

Now even anonymous felt exposed.
She slid the notebook closer, smoothed the page, and left the unbracketed line there, like a person standing without a coat.

The laptop took longer than it needed to remember her. She put it on the kitchen table and sat in the chair that always made one knee fall asleep. The screen came up in blue, then in the kind of white that made her eyes feel like they had been braided too tight.

While the new-blog page spun its polite circle, another window tried to open in her head. A publisher's site—her pen name in gold, the kind of gold that knew about marketing. A banner that had once announced sales with a number that didn't fit in her mouth: 2.3 million. She closed the thought with a practiced hand.

Then she could write five thousand words the way people walk a route they've memorized—eyes half on the world, half inside the body doing the moving. Now her fingers hovered like the keys were hot. The cursor blinked the way a small animal breathes when it isn't sure you're safe.

She typed a username and deleted it. Another, and deleted. Each one was a character she'd retired, refusing to go quietly. She forced herself to pick a handle that meant nothing, a word she would forget until the site emailed her with it.

Field: Title.

Her brain flipped to its other training and laid out a tray of options that would travel well: Midnight Confessions. Urban Portraits. The Strangers We Share. She could feel, as surely as coffee cooling beside her, how each one would sit on a screen, how a certain part of the internet would climb onto it and make a little camp.

She typed: The People I See on the Last Train.

No keyword. No hook. A title designed to disappear. Perfect.

Field: About.

She wrote a sentence and erased it, wrote two and erased both. She sat with her right hand under her thigh until sensation returned and then, slowly, typed:

Observations from the last car. No names. No stories. Just what I see.

Her writing hand went numb again. She shook it out and took a sip of coffee that had lost the day. It was a small punishment, and she took it.
She began the first entry the way you touch a bruise to see if it's still there. She started with him—same seat, same face—but the words came with an intimacy that made her skin heat. Delete.

Second try: a man from weeks ago, the one whose sleep belonged to a different schedule than his life.

Her fingers moved on their own: His dreams leak out in small twitches, Morse code from a country he'll forget by morning.

She froze. That was the voice reviewers quoted. The one The Times said made the mundane feel like mythology. She heard the sentence the way you hear your name in a crowd: proven, and therefore unusable.

Delete.

She tried again, hauling language down to plain weight. There's a man who sleeps through his stop every Thursday. When he dreams, his fingers move.

Better. Safer. She pared it even further.

His phone balances on his thigh. When the conductor calls "Last stop," he wakes with practiced surprise.

No metaphors. No mythology. Not her. The words went down like cold water. They sat clean on the page, refusing any shine.

She swallowed, or tried to. It felt like a small pill had lodged at the base of her throat. She put the cursor away from the sentence and opened the notebook again, touched the newly unbracketed line with the side of her hand, then closed the cover.

Thursday poured itself into the city like tea forgotten on a counter—shallow warmth, then a mild chill. She walked to the station in a coat that had learned how to live near her shoulders. The platform held its usual grammar: the busker whose guitar believed him more than his voice did, a flyer with tabs like missing teeth, the digital boards promising trains that had other plans. The sticker on the pillar still said YOU ARE HERE in letters that had started to crack from the edges.
She stood close enough to the yellow line to feel the first announcement in her ankles. Wind, then the long vowel of brakes. When the car opened, it had the smell of wet wool and something more metallic, a kind of hard weather that belonged to rails.

She found her space and took it—a hand to the pole, a shoulder to air. She was seeing differently now, as if someone else might one day look through her eyes and need the details to hold.

He was there. Same corner seat. His sketchbook open to what looked like nothing until it didn't—the pattern of wear on the handrails where hands became habit. He drew the tired shine of it, the places where the metal had learned the shape of the city's grip.

When he finished a page, he tore it out with the care people reserve for things that break easily. He folded it into a square that would pass inspection, and then slipped it into the inner pocket of his jacket, a small taxonomy of paper above his heart.

The space between them did what space does when both people know it is real: it held. She could have reached it with her scarf if she left it loose, but she had wrapped it twice.

She wrote, in the notebook balanced on the heel of her hand, Artists categorize empty space like grief—

She stopped. The sentence sounded like an old coat that still smelled like last winter's rain. She crossed it out. Ink bled slightly into the page, an ordinary wound.

On trains, we practice leaving space. The kind measured in inches.

She left it at that.

Across the aisle, a woman with a paper bag held at the chest like a small animal stood with her feet at the exact width of train-safety. Green leaves peered through the top—fern or something fern-shaped. When the car went under the river and the signal died, the woman lowered her head and whispered a few careful words to the leaves, like the dark would be easier for both of them if someone said something soft. Heather didn't write the words down. She didn't need to. She put a small check mark beside the moment, the way you do when your body is making a list inside your body.

The conductor's voice came cracked and official. "Last stop."

The sleeping man near the door woke with practiced surprise, patted his thigh for a phone that hadn't moved, then nodded at no one like he and his life had found a way to meet at a corner and keep going.

Back home, the apartment had the smell of whatever the building had cooked as a group decision. The living room was just dark enough to make the laptop a face in the air. She put it on the table and sat the way people sit before tests.
She changed a word she didn't need to change. Artist became commuter, and the paragraph unhooked itself from a particular man and walked toward a crowd.

She could feel the tunnel start in the edges of her vision, the way it had begun to do whenever she accidentally stood too long in front of a store that had once stacked her life in a window. Her right hand went numb, and she willed it back, shaking out the pins like flies.

She remembered a younger version of herself, on a different train, reading over a shoulder. The reader's mouth had made a slow shape of surprise, and the younger version had wanted, for an ugly second, to say I wrote that and then, for a larger mercy, had said nothing at all and gotten off two stops early.

Now there was a button and the word was Publish.

For a moment, the old noise started up—the nominations, the lists, the panels where she'd spoken into a room and measured the distance between her voice and her sense of truth. Then she put a finger on the trackpad and made a decision small enough to be a click.

The post existed. To no one.

The stats page said: Views: 1. Subscribers: 0.

A small exhaustion ran through her like she'd jogged in place for too long and forgotten to stop. She closed the laptop with both palms, as if it might argue. Her body felt like it had raised its hand in a room and not been called on.

She lay down still wearing the day—socks, scarf, the elastic trace on her wrist where a hair tie had been. Her heart beat with the alertness that follows doing something illicit, even when it isn't. She stared at the ceiling long enough to notice a hairline crack that had been there the whole time.

She thought of two million books. She thought of seventy-three words.

She let them weigh the bed in opposite directions until both felt like the same number.

Across town, light from a phone moved across Ian's face in a way that made him look younger and then not. He scrolled through the slow river of other people's work—gallery shots with white walls proud of themselves, sketches posted with captions that explained too much, long essays about process written by people who sounded like they were auditioning for themselves.

He was tired in his wrists and in the part of his head that had done angles all day. He visited the sites he visited when he couldn't name what he was missing. A sidebar offered New Blogs and a list of titles that tried too hard. His thumb hovered and then kept going. He added a page about zine design to a folder that didn't need more pages and put the phone down like a tool he didn't trust.

The apartment returned to itself. The radiator ticked the slow math of sleeping.

In the quiet that finally took the room, the blog floated in a digital nowhere, a message still tucked in a hand on shore. No lists would track it. No reviews would dismantle it in public. No one would say her name, which had never been her name.

On the fridge, the napkin kept doing what it had done from the start: showing a room without telling it what it meant.

On her table, the notebook held a single sentence without brackets.

In bed, Heather let her eyes close around the fact of it. She had written again. She had stayed hidden. Both victories. Both defeats.

She slept with her thumb still faintly gray.
`,
          ko: `냅킨은 헤더의 냉장고에 작은 얌전한 창처럼 붙어 있었다. 카페는 흑연 선으로 거기 있었다: 카운터의 흉터, 문가 종의 기울기, 늦은 저녁에만 빗겨 드는 빛. 설명도 없고, 이론도 없었다. 그냥 거기 있는 것.

수요일 밤 11시, 그녀는 맨발로 차가운 타일 위에 서서 금세 입김으로 흐려지는 유리잔을 들었다. 이 아파트는 자정이 지나야 더 크게 들리는 집이었다. 라디에이터는 두드리다 그쳤고, 밖에서는 누군가의 라디오가 후렴에서만 겨울을 기억하는 노래를 틀고 있었다.

아까 냅킨을 접을 때 묻은 옅은 회색이 아직 엄지에 남아 있었고, 그 얼룩은 잠깐 그녀의 손이 다른 삶에 속한 것처럼 보이게 했다. 그녀는 냉장고 불빛 앞으로 몸을 기울여 얼굴에 하얀 사각형을 얹히게 했다.

탁자 위에는 소리 내고 싶지 않은 말들을 대괄호로 묶어두던 노트가 펼쳐져 있었다. 그녀는 [Last Train, #5]라는 괄호 밑을 손톱으로 쓸어, 흑연이 살짝 부러지게 했다. 모서리를 지우고, 갑옷을 벗긴 문장을 읽었다.

나는 그의 이름을 모른다. 열차가 방향을 틀 때 그가 어디서 숨 쉬는지는 안다.

이렇게 두니 벌거벗은 것 같았다. 솔직했고, 그래서 위험했다.

그녀는 눈을 감았고, 도움이 되지 않게도 서점 진열창이 떠올랐다: 반들반들 도시를 되비추는 재킷들, 가지런하고 자신만만한 탑처럼 쌓인 자기 소설들. 그녀는 지하철에서 낯선 이들이 그것을 읽는 걸 지켜본 적이 있었다. 문장에 입꼬리가 살짝 오르고, 어느 대목에서 이마가 찌푸려지는 것까지. 세 걸음 옆에 앉아 있으면서도 아무도 아니었다. 그것이 좋았다, 모든 것이 기울기 전까지. 그게 그녀가 도망친 이유였다.

이제는 익명조차 노출처럼 느껴졌다.

그녀는 노트를 끌어당겨 페이지를 매만지고, 괄호를 벗은 그 한 줄을 외투 없이 서 있는 사람처럼 그대로 두었다.

노트북은 필요 이상 오래 그녀를 기억해내지 못했다. 그녀는 부엌 테이블에 그것을 올려놓고, 늘 한쪽 무릎을 저리게 만드는 의자에 앉았다. 화면은 푸른빛으로 떴다가, 머릿속을 너무 촘촘히 땋아놓은 듯한 흰빛으로 바뀌었다.

새 블로그 페이지가 공손하게 빙글도는 동안, 머릿속 다른 창이 열리려 했다. 출판사 사이트—마케팅을 아는 종류의 금색으로 표기된 필명. 한때 입 밖으로 내기 어려운 숫자를 자랑하던 배너: 230만 부. 그녀는 익숙한 손짓으로 그 생각을 닫았다.

그때의 그녀는 오천 자를, 사람들이 외워 걷는 길처럼 썼다—눈은 반쯤 바깥에, 반쯤은 움직이는 몸 안에. 지금 그녀의 손가락은 뜨거운 건반 위에 머무는 듯 맴돌았다. 커서는 작은 동물이, 안전한지 살피며 내쉬는 숨처럼 깜빡였다.

사용자 이름을 쳤다가 지웠다. 또 쳤다가 지웠다. 하나하나가 얌전히 은퇴하기를 거부하는 옛 등장인물들이었다. 그녀는 아무 뜻도 없는 조합을 억지로 골랐다. 알림 메일이 오기 전엔 기억하지 못할 단어.

항목: 제목.

뇌는 다른 훈련으로 뒤집혔고, 잘 팔릴 만한 후보 트레이를 내밀었다: Midnight Confessions, Urban Portraits, The Strangers We Share. 어느 제목이 화면에서 어떻게 앉고, 인터넷의 어느 구역이 올라타 작은 캠프를 칠지, 식어 가는 커피만큼이나 또렷이 느껴졌다.

그녀는 이렇게 쳤다: The People I See on the Last Train.

키워드도, 훅도 없다. 사라지라고 만든 듯한 제목. 완벽했다.

항목: 소개.

문장을 하나 쓰고 지웠다. 둘을 쓰고 둘 다 지웠다. 그녀는 오른손을 허벅지 밑에 넣어 감각을 되살리고, 천천히 이렇게 쳤다.

마지막 칸에서의 관찰. 이름은 없다. 이야기도 없다. 내가 본 것만.

글쓰는 손이 다시 저려왔다. 그녀는 손을 털고, 하루의 맛이 다 빠진 커피를 한 모금 마셨다. 작은 벌이었다, 그리고 기꺼이 받았다.

첫 번째 글은 멍을 눌러보듯 시작했다. 그—늘 같은 자리, 같은 얼굴—로 시작했지만, 단어들이 너무 가까워져 피부가 뜨거워졌다. 삭제.

두 번째 시도: 몇 주 전의 남자, 삶과 다른 시간표를 가진 잠.

손가락이 저절로 움직였다. 그의 꿈은 작은 경련으로 새어 나왔다, 아침이면 잊을 나라에서 온 모스부호처럼.

그녀는 굳었다. 평론가들이 인용하던 목소리였다. 일간지에서 말하던, 평범을 신화처럼 보이게 만드는 비유. 군중 속에서 자기 이름을 듣는 순간처럼 들렸다. 증명된, 그러므로 쓸 수 없는.

삭제.

그녀는 다시 시도했다. 언어를 순수한 무게까지 끌어내리며. 매주 목요일, 역을 지나쳐 자는 남자가 있다. 꿈을 꾸면 손가락이 움직인다.

더 낫다. 더 안전하다. 그녀는 더 깎아냈다.

그의 폰은 허벅지 위에서 균형을 잡는다. 차장이 ‘종착역입니다’라고 말하면, 그는 숙련된 놀람으로 깨어난다.

비유 없음. 신화 없음. 그녀답지 않다. 단어들은 찬물처럼 내려가, 어떤 반짝임도 허락하지 않은 채 깨끗이 앉았다.

그녀는 삼키려 했다, 잘 되지 않았다. 목 밑바닥에 작은 알약이 걸린 느낌. 그녀는 커서를 문장에서 치워 두고, 괄호를 벗긴 그 한 줄을 손날로 만진 뒤, 노트를 덮었다.

목요일은 카운터 위에 잊힌 차처럼 도시로 부어졌다—얕은 온기, 곧 미세한 냉기. 그녀는 어깨에 잘 사는 코트를 입고 역으로 걸었다. 플랫폼은 늘 그 문법이었다: 목소리보다 기타가 그를 더 믿는 버스커, 이가 빠진 전단의 탭, 다른 계획을 가진 전광판. 기둥의 스티커는 여전히 YOU ARE HERE라 적혀 있었고, 글자 가장자리부터 금이 가기 시작했다.

노란 선 가까이에 서면 첫 알림이 발목으로 올라왔다. 바람, 그리고 긴 모음처럼 늘어지는 제동음. 문이 열리자 객차에는 젖은 모직 냄새와 금속성의 더 단단한 날씨가 섞여 있었다—레일의 냄새였다.

그녀는 자기 자리를 찾아—폴에 한 손, 어깨에는 공기—차지했다. 언젠가 누군가가 이 눈을 통해 볼지 모른다고 생각하며, 버틸 수 있는 디테일을 모으듯 다르게 보기 시작했다.

그가 있었다. 늘 같은 모서리 좌석. 스케치북은 처음엔 아무것도 아닌 듯하다가, 곧 손잡이가 손을 습관으로 만드는 마모의 패턴을 드러냈다. 그는 그 지친 광택을, 금속이 도시의 잡는 법을 배운 자리를 그렸다.

한 페이지가 끝나면, 쉽게 부서질 것들을 다룰 때 쓰는 배려로 그는 종이를 뜯었다. 검사를 통과할 만한 정사각형으로 접어, 재킷 안주머니에 넣었다. 심장 위, 종이의 작은 분류학.

둘 사이의 공간은 둘 다 그것이 진짜임을 아는 사이의 공간이 하는 일을 했다: 버텼다. 스카프를 느슨히 했다면 닿을 수 있었겠지만, 그녀는 두 번 감아 두었다.

그녀는 손꿈치에 노트를 얹고 썼다. 예술가들은 빈 공간을 슬픔처럼 분류한다—

그녀는 멈췄다. 그 문장은 지난겨울 비를 머금은 낡은 코트 같은 냄새가 났다. 그녀는 줄을 그었다. 잉크가 페이지에 살짝 번졌다. 일상의 상처처럼.

기차에서는 우리는 거리를 남기는 연습을 한다. 몇 센티로 재는 종류의 거리.

그녀는 거기서 멈췄다.

맞은편 통로에서는 종이봉투를 가슴께에 품은 여자가, 기차 안전자세의 정확한 폭으로 두 발을 벌리고 서 있었다. 봉투 위로 초록 잎이 고개를 내밀었다—양치류, 혹은 양치류처럼 생긴 것. 열차가 강 아래로 들어가 신호가 죽자, 여자는 고개를 낮추고 잎에게 몇 마디 조심스러운 말을 건넸다. 어둠이, 누군가 부드럽게 무엇을 말해 준다면, 둘 다에게 조금 쉬울 것처럼. 헤더는 그 말을 적지 않았다. 필요하지 않았다. 몸속에 또 다른 몸이 목록을 만들 듯, 그 순간 옆에 작은 체크 표시만 했다.

차장의 목소리는 갈라졌지만 공적이었다. “종착역입니다.”

문 옆에서 잠들어 있던 남자는 숙련된 놀람으로 깨어나, 한 번도 움직이지 않은 폰을 허벅지에서 더듬었다. 그리고 아무도 없는 쪽을 향해 고개를 끄덕였다. 자기와 자기 삶이 모퉁이에서 만나 계속 가기로 합의한 것처럼.

집에 돌아오니, 아파트에는 건물 사람들이 단체로 조리한 무엇의 냄새가 났다. 거실은 노트북이 공중에 떠 있는 얼굴처럼 보일 만큼만 어두웠다. 그녀는 그것을 테이블 위에 올리고, 시험을 앞둔 사람처럼 앉았다.

바꿀 필요 없는 단어를 하나 바꿨다. ‘예술가’는 ‘통근자’가 되었고, 문단은 특정한 남자에게서 풀려나 군중 쪽으로 걸어갔다.

시야 가장자리에서 터널이 시작되는 게 느껴졌다. 한때 자신의 책이 진열되던 가게 앞에 너무 오래 서 있으면 종종 찾아오던 그 느낌. 그녀의 오른손이 저려왔고, 그녀는 파리 떼를 털 듯 손끝의 바늘감을 털어냈다.

그녀는 더 어린 자신을 기억했다. 다른 열차, 다른 어깨 위. 독자의 입이 천천히 놀라움의 모양을 만드는 것을 보며, 그녀는 못나게도 잠깐 이렇게 말하고 싶었다—나 그거 썼어요. 그리고 더 큰 자비로, 아무 말도 하지 않고 두 정거장 먼저 내렸다.

이제 하나의 버튼이 있었다. 그 옆에는 이렇게 적혀 있었다—Publish.

잠시, 옛 소음이 다시 켜졌다—후보 지명, 목록, 자신의 목소리와 진실감 사이의 거리를 재던 패널들. 그녀는 트랙패드 위에 손가락을 얹고, 클릭이라 부르기에도 작은 결심을 했다.

그 글은 존재했다. 아무에게도 아닌 채.

통계 페이지에는 이렇게 적혔다: 조회수 1. 구독자 0.

가볍지만 지치는 피로가 몸을 훑었다. 한 자리에 오래 제자리달리기를 해놓고 멈추는 걸 잊었을 때 같은. 그녀는 두 손바닥으로 노트북을 덮었다. 반박이라도 할까 봐.

그녀는 하루를 입은 채로 누웠다—양말, 스카프, 머리끈이 남긴 손목의 얇은 자국까지. 하지도 않은 어떤 위법 뒤에 오는 경계심이 심장에서 뛰었다. 그녀는 천장을 오래 바라보다, 처음부터 있었던 가느다란 금을 알아챘다.

그녀는 이백만 권을 떠올렸다. 그리고 일흔세 단어를 떠올렸다.

그 둘이 침대를 서로 다른 방향으로 눌렀다. 그리고 결국 같은 무게처럼 느껴질 때까지.

도심 반대편에서, 휴대전화 불빛이 이안의 얼굴을 가로지르며 그를 한순간 젊게, 다음 순간엔 그렇지 않게 만들었다. 그는 다른 사람들의 작업이 흐르는 느린 강을 스크롤했다—스스로를 자랑스러워하는 하얀 벽의 갤러리 사진들, 설명이 지나친 캡션들과 함께 올라온 스케치들, 자신에게 오디션을 보는 사람처럼 들리는 긴 작업 에세이들.

손목과, 하루 종일 각도를 계산하던 머릿속 한 구석이 피곤했다. 그는 이름 붙일 수 없는 결핍을 느낄 때 찾는 사이트들을 돌았다. 사이드바에는 New Blogs와 너무 애쓰는 제목들의 목록이 있었다. 그의 엄지는 잠깐 머물다, 그냥 지나쳤다. 그는 진(zine) 디자인에 대한 페이지 하나를, 더는 필요 없는 폴더에 추가하고, 믿기 어려운 도구처럼 휴대폰을 내려놓았다.

아파트는 제 모습으로 돌아왔다. 라디에이터가 잠의 느린 셈을 톡톡 셌다.

마침내 방을 차지한 고요 속에서, 그 블로그는 디지털의 아무데도 아닌 곳을 떠돌았다. 아직 물에 닿지 못한 병 속 편지처럼. 어떤 목록도 그것을 추적하지 않을 것이다. 어떤 리뷰도 공개적으로 그것을 해체하지 않을 것이다. 누구도 그녀의 이름—애초에 그녀의 이름이 아니었던—을 말하지 않을 것이다.

냉장고 위에선, 냅킨이 처음부터 하던 일을 계속했다. 방을 보여주되, 의미를 강요하지 않는 일.

탁자 위 노트에는 괄호가 없는 한 문장만 남아 있었다.

침대에서, 헤더는 그 사실을 품고 눈을 감았다. 그녀는 다시 썼다. 그리고 숨었다. 둘 다 승리. 둘 다 패배.

그녀는 엄지에 희미한 회색을 남긴 채 잠들었다.`,
        },
      },
    ],
  },
  {
    id: 'gather-wisdom',
    title: {
      en: "What's so Weird About that?",
      ko: '이게 왜 이상해요?',
    },
    author: 'hae',
    description: {
      en: 'A story about someone who sees the world in their own way.',
      ko: '세상을 자기 방식으로 이해하는 사람의 이야기.',
    },
    genre: {
      en: 'Slice of Life / Comedy',
      ko: '일상 / 코미디',
    },
    status: {
      en: 'Ongoing',
      ko: '연재중',
    },
    lastUpdated: '2025-10-12',
    chapters: [
      {
        id: '1',
        number: 1,
        title: {
          en: "I've Always Been Kind of That Way",
          ko: '나, 원래 좀 그런 애였다',
        },
        publishDate: '2025-10-12',
        content: {
          en: `My name is Ji-hye Choe.
It means “gather in a wise place.”
Cute meaning, unfortunate irony.
Wisdom clearly forgot to show up when I did.

Mom says I’m the kind of person whose body works harder than her brain.
“Ji-hye, think before you move,” she used to sigh.
But by the time I start thinking, I’ve already moved.
That’s me—impulsive first, reflective never on time.

⸻

My earliest memory is from kindergarten.
That morning, both of my sisters didn’t have school.
Mom was visibly exhausted and clearly wanted one peaceful day off from parenting.
She asked, “Ji-hye, what if you skip kindergarten today?”
I said, “No! I’m going.”
She tried again. “Really?”
“Mom, I already said I’m going. Why are you asking again?”

Mom thought I was decisive.
I was just literal.

⸻

That trait never left me.
By elementary school, I was known as the human static channel—always slightly off frequency.

Once, a friend said, “Let’s go to the library tomorrow,”
so I showed up in gym clothes.
“How was I supposed to know we weren’t working out?”

⸻

Then middle school came, and the family’s genetic hearing problems became undeniable.

I told Dad, “Can you pick up some soap on your way home?”
He came back proudly carrying soup mix.
“Got what you asked for!” he said.

Later, I told Grandpa the story, thinking it’d make him laugh.
“Grandpa, Dad heard ‘soap’ and bought ‘soup’ instead!”
He frowned, genuinely concerned.
“Still,” he said, “what kind of man buys a suit just because his daughter asked for one?”

That’s when I realized it wasn’t just me.
It was hereditary.

⸻

I’m the youngest of three sisters—the cozy one, the cold one, and me:
the lazy-but-polite one.

I like people, just not for long.
That’s why I’m always the listener.
People tell me, “Ji-hye, you’re such a good listener.”
I used to think that was a compliment.
Now I know it really means,
“You’re easy to talk to… because I’m not trying to date you.”

⸻

Then, sometime after twenty, I learned something new:
I’m not stupid.
I just have a slightly different version of common sense.

One day, my sister and I were eating cup noodles.
I bent the lid back and started drinking from the folded edge.
Hot broth dripped all over my hand.

“Why does this keep leaking?” I said.
My sister stared.
“Ji-hye… you’re drinking from the folded side.”
“So?”
“That’s why it’s leaking!”
“How would I know that?”
“Everyone knows that!”

To this day, I stand by what I said next:
If they make the lid fold that way, it shouldn’t leak.
That’s logic. Perfectly sound logic.

⸻

Still, I learned how to survive.
With a strict dad and two intimidating sisters,
I mastered the art of looking harmless while negotiating mercy.

People call me “a nice girl.”
They’re wrong.
I’m just tired but polite.
Inside, I’m always thinking,
Ugh… fine, I’ll listen.

⸻

Now I’m twenty-eight.
London degree, New York rent, zero relationships.

Mom says, “Maybe it’s because I had you at thirty.”
Mom, people have babies at thirty now. Try again.

So what’s wrong with me?
I have no idea.
That’s why I decided to write this.

The main character is me—Ji-hye Choe.
As a kid, I misheard things.
As an adult, my logic just runs on a different operating system.
And right now… I’m a slightly lonely New Yorker.

Still, I can’t help believing that someday,
someone might finally tune in to my frequency.
Or maybe, like my cup noodles,
I’ll just keep spilling until I learn.`,
          ko: `내 이름은 최지회다.
'지혜로운 곳에 모여라'라는 뜻이란다.
근데 세상은 왜 나만 피해 가는 걸까.
모여라 하면 다 도망간다.

어릴 때부터 나는 머리가 나빠서 몸이 고생하는 스타일이었다.
엄마가 늘 말했다.
"지회야, 생각 좀 하고 움직여."
근데 그게 쉽나.
생각을 하면 이미 늦었다.
나는 그런 사람이다 — 일단 저지르고, 나중에 후회하는 스타일.

첫 기억은 유치원 때다.
그날은 언니들이 다 학교가 쉬는 날이었다.
엄마는 하루라도 늦잠 자고 싶은 눈치였다.
그래서 나에게 물었다.
"지회야, 오늘은 유치원 안 가면 안 될까?"
"안 돼! 나 유치원 갈 건데."
"그래? 진짜로?"
"엄마, 나 아까 간다고 했잖아. 왜 또 물어봐?"

사실 엄마는 그냥 나 준비시키기 귀찮아서 물어본 거였는데,
나는 그걸 몰랐다.
그때부터였다.
엄마가 나를 '주관이 뚜렷한 아이'라고 착각하기 시작한 게.
사실은… 말귀를 곧이곧대로 알아들은 것뿐이었다.

그때부터 내 별명은 사오정이었다.
말을 잘못 알아듣는 게 습관이었다.

초등학교 때 친구가
"지회야, 내일 도서관 갈래?"
했는데 나는 체육복 입고 나갔다.
"운동하러 가는 거 아니었어?"
그날부터 별명이 'FM 라디오 고장남'이 됐다.

그리고 결정타는 중학교 때 터졌다.

그날, 내가 아빠한테 말했다.
"아빠, 퇴근할 때 데톨 좀 사와요."
근데 아빠가 잘못 알아듣고,
백도를 사오셨다.
복숭아. 그것도 한 상자.

그게 너무 웃겨서, 나중에 할아버지를 뵈었을 때
그냥 에피소드처럼 웃으시라고 말씀드렸다.
"할아버지, 아빠가 제가 데톨 사오라니까 백도 사왔어요!"
그랬더니 할아버지가 잠시 생각하시더니,
진지하게 말씀하셨다.
"그래도 그렇지, 딸이 벽돌 사오라 했다 해서 그걸 사다주는 아비가 어딨냐."

그날 깨달았다.
이건 내 잘못도, 아빠 잘못도 아니다.
유전이다.

우리 집은 딸만 셋이다.
첫째 언니는 포근하고,
둘째 언니는 냉철하고,
나는… 귀찮지만 착한 척은 해야 한다고 믿는 사람.

사람을 좋아하지만 오래 있으면 피곤하다.
그래서 늘 들어주는 쪽이었다.
사람들이 말했다.
"지회는 말보단 들어주는 게 매력이야."
그게 칭찬인 줄 알았다.
근데 지금 생각해보면 그냥
"넌 친구로 딱이야"의 예쁜 버전이었다.

그리고 20살이 넘은 어느 날,
내가 사오정을 넘어서 상식이 좀 다른 사람이란 사실이 공식 인증됐다.

언니랑 컵라면을 먹는데,
나는 접힌 뚜껑을 반으로 젖혀 국물을 떠먹고 있었다.
그런데 국물이 계속 손에 흘렀다.
"이상하다… 왜 자꾸 새지?"
언니가 젓가락을 내려놓고 웃었다.
"지회야… 너 접힌 쪽으로 먹고 있잖아."
"그게 뭐 어때서?"
"그쪽으로 먹으면 새지!!"
"그걸 누가 알아?"
"모두."

그날 언니가 말했다.
"지회야, 네 머리 속은 진짜 별세상에 있나봐."
솔직히 아직도 이해 안 된다.
컵라면이 접히게 만들어졌으면, 안 새게 만들던가. 그게 진짜 상식 아닌가?

그래도 나는 눈치 빠른 막내였다.
무서운 아빠, 까칠한 언니들 사이에서
'귀엽게 실수하고, 은근히 얻는 법'을 배웠다.
이게 내 생존 기술이다.

사람들은 날 '착한 애'라고 부른다.
아니요.
나는 그냥 피곤한 걸 겉으로 안 내는 애다.
속으론 늘 이렇다.
"아 귀찮다… 그래도 들어줄게…"

그리고 지금, 스물여덟 살.
런던 유학까지 마치고, 뉴욕에 살고 있다.
근데 아직도 연애 한 번 못 해봤다.

엄마는 말한다.
"지회는 내가 서른에 낳아서 그런가 봐."
엄마, 요즘 사람들은 서른에 결혼도 안 해요.
그럼 내 문제는 뭐예요?

모르겠다.
그래서 써보기로 했다.
이건 내 이야기다.

주인공은 나, 최지회.
어릴 땐 사오정,
커서는 상식이 조금 다른 사람,
지금은… 약간 외로운 뉴요커.

그래도 한 번쯤은
나도 누군가에게 사랑받을 수 있지 않을까?
아니면, 또 컵라면처럼 새버릴까.`,
        },
      },
    ],
  },
  {
    id: 'kids-of-cuba',
    title: {
      en: 'Kids of Cuba',
    },
    author: 'Chachacha',
    description: {
      en: 'Little lives that shine, fade, and remind us that love itself might be the only evidence of God.',
    },
    genre: {
      en: 'Spiritual Memoir',
    },
    status: {
      en: 'Ongoing',
    },
    lastUpdated: '2025-10-14',
    chapters: [
      {
        id: '1',
        number: 1,
        title: {
          en: 'Anthony',
        },
        publishDate: '2025-10-14',
        content: {
          en: `On a school roof, a fork rested halfway through rice. Decision already made. Grilled chicken cooling in the sun. Steam lifted and thinned. Around him: the sound of children's forks on plastic; his silence.

He pushed the plate toward his friends—practiced generosity. Avocado browned at the edges.

"Do you like soccer?" someone asked.

"Messi," he said, voice traveling no farther than a shoulder's width.

Plenty sat differently in him than in others. Being well-off in San Miguel del Padrón had weight. He knew how to give away what he had but didn't need. He thought of his sister at home, probably finishing everything on her plate. The fork in his hand felt like a line between hunger and something else he didn't yet know how to name.

The church was familiar: a quiet nave, wooden chairs worn smooth, afternoon light across the floor. Then the yard.

His sister ran—straight lines, sudden circles. Ten minutes apart could feel long. Other children were loud; Anthony stayed near. He followed her, close enough to catch, far enough to let her run. "Ven acá," he called—not to stop her, but to keep the distance where safety lived.

He adjusted where he stood: nearer if she wobbled, back if she didn't, ready if laughter turned sharp. Someone older took over for a while—an aunt, a cousin, a neighbor. He exhaled. The line moved; his post shifted. She ran until her face brightened with breath. When she barreled back at him, he moved without thinking and lifted her. For a moment there was only her small weight and the feel of her hair in his hand. Then the yard returned to noise and routine, and he watched again.

People who didn't know him mistook the quiet. He wasn't indifferent. He opened slowly. What stayed closed protected what mattered. It wasn't a lack of trust; it was time. His voice had a radius: shoulder, sometimes elbow, never farther. Questions about himself ended in a silence that held decisions.

Inside: stillness. Outside: dust and sun. His sister's hair between his fingers. His low voice. Distant play. Light across the floor.

The bus home held him while the barrio moved. Diesel in the air. Windows flashing light. The city slid by; he stayed still.

"¿Qué piensas?" a visitor's Spanish asked—words shaped like questions even when they weren't.

"Mi hermana," he said. Always his sister at home.

The composition of love arranged itself, quiet and exact:
Dios > mi hermana > todo lo demás.

"I need to think about it," he added—big questions saved like coins.

He knew the line everyone told him: "Dios te ama." He also knew the difference between knowing about and knowing. Love had weight even when he couldn't lift the reason for it. Fall air pushed through the latch. Something was burning somewhere; something usually was.

"Eres muy callado," the voice said. You're very quiet.

He watched the glass more than the street: laundry, a boy pacing a bicycle he never mounted, a dog in the shade. In the window he saw himself thinking about her—his sister as center, everything else moving around that.

The day's thread stayed simple:
"What are you thinking about?"
"My sister."
"God loves you."
"I know."

The equation held because it worked. God > sister > himself. The one he could recite and the one he lived were close. Love multiplied in careful hands. He said less and watched more.`,
        },
      },
    ],
  },
];
