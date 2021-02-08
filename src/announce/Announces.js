import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
import Container from '@material-ui/core/Container';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: "#f1f6f9",
        // color: "#14274e",
    },
    card: {
        // backgroundColor: "#9ba4b4",
        marginBottom:10,
        paddingLeft:30,
        height: "auto",
        textAlign:"left",
    },
}));
const announceDataList = [
    {
        id: "1123",
        title: "2020.11.23 致9.0前夕 [公会的总体规章制度] [2021.01.27日更新]",
        content: `
## 首先：欢迎来到我们“细水长流一世安”这个大家庭！

### 请大家养成关注游戏日历和随时刷新官网的习惯，公会活动会大致备注在日历上：具体细则全部转至公会官方网站。
～～～～～～～～～～～～～
### 感谢“不稳定先生”、“塞巴斯、喵”和“湿熟肋眼”对网站的大力付出。官网征集活动现在开启：任何随感、风景图、自己的游戏攻略，以及公会娱乐活动建议等，都可以来投稿，一经采纳会给予丰厚奖励。
～～～～～～～～～～～～～
## 以下各规则要求每个团队均适用，各团团长可根据实际情况制定各自团队的具体细则。
～～～～～～～～～～～～～～
## 首先声明：我们不是海外公会、不是海外公会！我们只是一些还愿意留在国服的海外玩家恰好聚在这里，我们有超过五分之三的成员是国内玩家。我们只是一个拥有近千名成员，由于时差原因可以多时间在线的24小时公会而已。
～～～～～～～～～～～～～～

## 各群要求：
1. 不要在群里发跟游戏无关的链接、图片、二维码！发现直接飞。
2. 不要谈论时政、金币、角本、色情（包括擦边）等敏感话题。不要引发争论，一次警告两次飞。
3. 游戏ID不要使用广告、羞辱、谩骂等与游戏无关或容易引发争执的名字。
4. 群里和游戏内均严禁使用粗口黄暴词汇、严禁涉及挑逗、辱骂等攻击性词汇，凡涉嫌此类不一一列举，以上均不需警告直接剔除。
5. 发言发图请使用正能量，一个人一次发图不要超过三张，一次警告两次飞。
6. 总之群里遵守一切国家规定、成人规范、道德准则、微信群规、暴雪要求。我们是个多元化的公会，成员来着五湖四海，尊重大家也是尊重我们自己，切切。
7. 再次强调：我们虽然是有时差的公会，但国内玩家占很大比例，我们使用的是国内的平台，请遵守国内平台一切规定，并为照顾国内玩家，在各群内不发、不传海外一切链接、APP，诸如此类不一一列举，谢谢！
8. 公会坚决不支持线下活动，任何想组织线下聚会等活动的，不得在游戏、各群公开组织；公会对所有线下行为不承担任何责任！
9. 公会不支持任何金币、现金的往来活动，诸如此类不得在游戏、各群公开讨论；公会对由此产生的任何纠纷绝不容忍。
～～～～～～～～～～～～～


## 各团队新版本开荒要求：（仅使用于各团团本成员，休闲玩家请无视）
1. 稳定的出勤：版本内没有AFK计划，能合理有效安排自身游戏时间，不会被工作学习生活困扰。
2. 良好的心态：能够经受挫折，能够在遇到困难的时候保持冷静，不狂躁不沮丧不传播负能量。
3. 职业的坚守：对所玩职业有足够的热爱，不会三天打鱼 两天晒网，职业稳定位置才稳定。
4. 端正的态度：能够认真研究手法、天赋，在开荒前，能够主动做好功课，看好攻略视频，至少做到能够了解boss机制与应对机制。附魔宝石齐全。
5. 优秀的执行力：进到副本里，一切行动听从团长指挥安排，有问题提前沟通或者事后总结。开荒过程中服从命令，不争执不甩锅。
6. 积极的沟通：会长微信24小时在线，任何问题可以随时沟通。特别是团队成员如有消费不能参加活动请提前说明。
7. 首发与副职：各团成员均只保留一个首发角色。
8. 基本原则：人品第一、稳定第二；不秀过往，爱团、爱公会。
9. 鉴于之前过往，公会各团不再接收四人及以上小团体；不再接收TN组合的夫妻档。更禁止为进度吸收非本公会人员参与团队活动。
～～～～～～～～～～～～～

## 参团要求：
1. 开荒期间，一个人只能跟一个团活动。不支持一人多职业参加多团活动。
2. 后期伐木阶段，H团可以带公会新人休闲玩家，各团主力成员的小号允许参与，需要交付两组合计两组烹饪作为门票。
3. 伐木期间，一个人容许一个小号参加其他团PT/H团本，但其参与团队的成员有优先权。
4. 各团管理自行负责本团成员配置、首发等相关问题。确定人员后名单提交会长进行会阶调整。每月末团长与会长对接一次主力人员名单。
5. 各团有重大人员变动：如踢人、长时期请假，团长有权自行处理。处理结果提交会长备案。
6. 原则上不支持各团变更基础活动时间（加班除外），如确有需要，团长需提前在会长对接群报备并经会长、副会长核实批准。团长有义务对不能接受变更时间的团员进行妥善安排。
7. 各团主力人员尽量不要换团，如确有需要，由原团长出面找会长或新团长申请，个人私下联系无效。每人仅支持一次因个人原因的换团申请。
～～～～～～～～～～～～～


再次重申，公会不支持跨服，不报销机票，不设置招募群，请有信心加入公会再申请,谢谢合作！


另：每个人每个阶段对这个游戏的追求不同，没有对错，只有是否适合自己，对于现阶段的我们来讲，进度和装备只是一时的，我们所希望的就是能够尽自己的力量完成到最好。


公会严禁G币交易、严禁工作室行为；大米钥匙、装绑交易请AH或集合石。任何与消费、交易有关行为一经发现直接踢出公会。


搞GZS的、钥匙交易的、什么都不干天天群里吹牛的、自己不好好玩却给团本传播负能量的；对自己的职业没有情怀，人云亦云，每天职业换来换去的；顺风的时候参加团队，逆风的时候找理由；有需求的时候就准时报到，没有需求就各种失踪的；喜欢攀比过度自负的；在其他公会其他服务器其他阵营有帐号，每天炫耀却从来不对公会有任何贡献的；天天念叨自己车队，角色职业全以车队需求为主，对公会对团队没有任何感情的：总之诸如此类的请你不要来，进了我也会踢的呀……


我们这里是一个比较多元化的公会，有欧洲、美洲、澳洲、国内和其他亚洲玩家；有多个版本回归的大佬，也不乏从怀旧回来的，和一些刚刚踏入魔兽世界的新朋友，希望每一个人都可以彼此真诚相待，不骄不躁，踏实热情，为了艾泽拉斯的和平，和睦相处。

`,
        signature: `
再次感谢大家选择细水！爱你们的秃头大胡子致。  
2020.11.23日9.0前夜  
2020.12.07日更新  
2020.12.16日更新  
2021.01.27日更新  
`
    },
    {
        id: "1205",
        title: "2020.12.07 致开团在即",
        content: `
## 致大家：

### 首先感谢大家这两个星期以来的辛勤努力，为了团队的开荒成功，每个人不仅提升自己，也在不断地去帮助别人，去捐赠公会。真的非常感动！

### 随着各团团长相继在开团前准备了动员大会，我想提醒各位报了团又已经进了各自团群的朋友，请你积极回应团长在群内的各种通知，请尽量抽出时间来和你的团员们交流、熟悉。特别是在进度团的，如果团长的通知你都无法按时执行，我们怎么能确信未来开荒的时候你可以令行禁止。

### 我们距离团本开荒最近的活动时间还有五天，希望大家紧张筹备的时候，也能保证快乐的游戏。同时请尽可能地多抽出一些时间来了解团本攻略。我们有各团进组的装等专精要求，同时必须强调附魔宝石等装备齐全。

### 这里我要感谢欧洲一团的团长“希序弗斯”，他在欧洲二团暂时无法成团的时候，愿意带领二团成员一起开荒。

### 而我对所有参与各团活动的成员们要说的是，无论你在休闲团还是进度团，只是时间精力的差别，各团之间不用去比较。特别是开团之后我们公会官网会公布每个团的进度情况，说白了这是给外人看的，也是给大家一个鼓励，所以也请各团团长确保你的团员正确看待，不骄傲、不气馁。

### 最后一个新的规定如下：开团在即，如果有团队成员想换团的，被找到的团长请不要直接答复，让他找原团长，确保原团长知晓此事后再说。原则上我们只支持一次有理由的换团，同一个人第二次提出换团要求很肯能会失去任何参团机会，请谨慎选择。

### 在此感谢各位团长的辛苦，他们每天都在努力带领大家提升装备。而我们的团员也在努力的跟上大家的脚步，让我们一起加油吧！我会尽我所能做好大家坚实的后盾，也希望任何人如果遇事请多来与我沟通，我们的团队既是独立的队伍，又是公会的一个整体；每个团既有自己的特色，又要保证全公会的平稳统一。只有这样我们这个庞大的家庭才能有凝聚力、才能越来越好、才会稳定持久。再次感谢大家！也非常高兴更多休闲玩家也选择了我们，也喜欢这里。未来的细水在团本，大米之外，也会逐步开展其他活动，以便能让休闲玩家也更多的参与进来。我们一起努力吧！

### 最最后，提前预祝各团开荒顺利！祈祷欧洲二团尽快建团成功，也期待美东团首个开荒开门红！请记住：我是红色一块砖，哪团需要哪团搬！


`,
        signature: `
至此。爱你们的秃头大胡子致！  
2020.12.05  
`
    },
    {
        id:"1215",
        title:"2020.12.15 年末事宜及装绑处理原则",
        content:`
## 通知：

### 细水的伙伴们：我因为临近月底搬家，最近忙着装箱，可能很少能上线了，正式回归要到元旦之后。咱们公会八个团差不多一个CD也都打完了，团长和团员之间也熟悉磨合的差不多了。非常感谢八个团长的辛苦。因为有你们在，我才可以安心去忙我搬家的事情。

### 所以在此期间，大家遇到什么问题，团队的可以找各自团长，休闲玩家可以微信找我。各团活动期间都或多或少有人员变动，请团长不要心急，招人找茹茹，切忌三人及以上小团体；切忌坦克治疗组合的夫妻档。这是公会收人第一准则，不要因为急于招募就放弃要求，后患无穷。

### 还有一件事就是关于装绑。我们公会游戏体验是第一位的，出了装绑，优先有提升的使用，同甲支持PY，需求的人多可R，就像我们以前一样。公会坚决不支持出了装绑无论是否可用都要上交的情况。公会不会也从来没有收取非捐赠目的的装绑提成。装备虽然值钱，但团队体验更宝贵，切切。以上。

### 另外，考虑到我们公会有很多海外玩家，临近圣诞、元旦，在此时间段有活动的团队，如有必要可以暂停活动，现实生活永远高于游戏。
`,
        signature: `
这里璟行行芷提前祝大家圣诞快乐，游戏愉快。  
2020.12.15
        `
    },
    {
        id:"1216",
        title: "2020.12.16 关于神韵地煞私自离开公会的说明和公会不再保留下午团建制的通告",
        content: `
## 关于神韵地煞私自离开公会的说明和公会不再保留下午团建制的通告：

### 今天是服务器时间的周三，新CD的前一天。神韵地煞，闲园午后团团长，在没有跟任何人打招呼的情况下，突然离开公会，并同时退出下午团群和团长对接群。

### 跟我们走过8.3末期的老成员，对神韵应该都是熟悉的，他在版本最后几天时间里，带公会两个团拿到了全通。对于每一个成员，他都悉心指导，每一次犯错，他都耐心讲解。甚至他还帮公会培养出了一个进度团的团长。所以新版本开始，他成为了公会副会长，并负责主抓公会各团进度。他也表示过，哪个团需要他，他即使打黑工也会去帮忙。很多跟着他一路走过来的人，对于神韵地煞这个名字，都是赞叹甚至崇拜的。

### 这里先说一下他的下午团吧。公会建立初期，是为了照顾和我一样，身在海外却还想玩国服的玩家。所以我们公会的时间都是迎合了海外时差党们的，我常常开玩笑说，我们是没有正经活动时间的正经公会。而下午时间，是完全不在公会计划之中的。因为无论欧洲北美都不适合这个时间段。

### 神韵曾经多次跟我提出他想开一个下午时间的团，因为他在网络上工作，时间非常充足。但我一直没有同意，因为作为会长，公会里有一个团，我几乎完全没有时间能看到她，是很奇怪的存在。但是当我们成立了第七个团的时候，神韵再一次找到我，并一再表示他可以对团队完全负责。出于信任，我同意了，我们达成的协议是下午团他来负责，我来考量下午团存在是否合理。所以下午团尽管有超多玩家来咨询，我都没有开第二个团。

### 新版本开团本之前，各个团都相继开了动员大会，我除了下午团没有办法参与，其他团都旁听了。神韵也参与了一部分。他在美西一团的会议中，提出了团队安排各辅助职业，要求制造业自己升级，要求采集业每天必须上缴公会一定数量的草药和矿石。我当时就有疑问，既然是为团队学习制造业，为什么升级要自己去升而不是公会提供材料？但因为被安排的人没有异议，我没有继续提出质疑。

### 开团本的第一天，神韵要求找各团长开会，要求公会开公修，要求给各团提供食物和大锅，要求各个团上缴装绑来支持公会这些费用。有团长表示自己团已经安排大锅和食物了，不需要公会提供，装绑也会以个人提升为主。他就此跟团长发生争执。我听的一头雾水，本身装绑问题：团本新开，出了哪件都是提升，为什么会说没有用都要上缴？各团既然已经安排食物大锅，为什么却要强制必须还要使用公会提供？

### 这些疑问在我心里出现的时候，发生了业之子团长退出公会的事情。起因是神韵地煞说自己做了五个大锅，两个留给下午团，剩下三个可以卖给其他团，但需要他进团使用，同时告诉我一个锅的成本是三万，我给了他十万金，买了这三个锅，然后通知各团长，谁需要可以联系神韵，公会出资算是福利。最终业之子联系了神韵，却在开团的时候联系不上神韵。

### 神韵的三个锅最后谁也没给，我买锅的十万金在他声称会还、忘了、明天吧的循环中跟着他的突然离开也无法追回了。当我在下午团通知团长已经离开的时候，我才接到了团员间可以相互佐证的其他事件：

1. 神韵附魔大锅的材料均来自公会银行和团员强行要求上缴，没有花一金来采购；
2. 神韵对下午团的装备除个别人外都强行要求上缴，并打着贴补公会的名义说个人40%公会60%，实际上两边都没有拿到这笔分成，而根据团队成员陈述至少有四件装绑是他强行拿走的。
3. 我曾经对他团队里四十多个成员提出疑问，他一再强调需要打几次才能优胜劣汰，但实际上不符合标准的他会收取进团费用。
4. 神韵曾经要求各团长在团员犯错的时候罚款惩罚，他也发过罚款的微信截图，但我询问此事的时候他说他只是吓唬并没有罚款，实际证明他不仅罚了而且金额不低。
5. 在公会要求不能有小团体的情况下，他不仅分批次把自己的人带进团队，还在开荒期间包庇亲友。
6. 他曾多次表示哪个团需要他可以去帮忙，但在某个团长因为加班两次联系他，他答应后直接爽约不来，不做任何解释。
7. 神韵开通了一个直播间，用的公会的名字，说是利于宣传公会，同时可以给其他团长团员以借鉴。但是他却背着我联系直播间运营机构，搞什么双赢项目。这件事因为运营商误以为我是神韵而宣布流产。
8. 在公会一再强调禁止金币交易禁止与金有关的一切行为的规定下，神韵试图开公会金团，并仍然打着给公会提成的旗号。在我多次拒绝并禁止后，开始消极怠工，不再积极上线。

### 以上各条都有对话截图可查。

### 我们无法计算附魔、大锅、装绑等这些他打着公会旗号究竟私吞了多少金币。但无论多少，都无法与他所带来的感情流失所衡量。我今天问过下午团的团员，出了这样的事情，你们为什么没有一个人来告诉我呢？他们都说，虽然规定不合理，但神韵说都是为了公会，他们既然是给公会的，他们都是愿意的。所以，其实我们公会的捐赠名单上应该还有很多人，下午团的成员们捐了很多材料和很多装绑，以及捐了他们虽然委屈却仍然愿意等对公会的爱心！

### 对于下午团的成员，我只能在这里说句抱歉，因为时差的原因，下午团成为一个独立存在的特体，团员和会长之间，也没有任何沟通。长远来看，这对团队的发展，也是不利的。所以再三考虑，公会决定不再保留下午团。对于团队成员，如果有其他时间合适的团队，各团团长会尽力接收，我们已经有部分团员找到了新的团队，非常感谢各位团长的支持。对于那些时间实在无法契合，不得不离开公会的成员，如果你之前遭到神韵的克扣，可以来找我，公会会替神韵承担赔偿。我们会保留下午团的会阶至这个周末，其后取消会阶进入团队储备。对此再次给下午团成员说一声抱歉。

### 我想借此再次强调，公会是一个拥有超过三分之一海外玩家的多元化公会，成员来自五湖四海，我们建公会的原则就是人品第一，快乐游戏。我们鼓励团队去追求极致的进度体验，但我们也会照顾每一个想体验团本、大米或其他项目的休闲玩家。云筏不许千金诺，细水长流一世安。我们是一个希望大家都体会到爱的24小时时差公会！

### 对于神韵地煞，公会不会主动追究他的责任，公会会记得在新建初期他所给公会带来的极大帮助。只希望来日方长，永不再见。
        `,
        signature: `
以上。会长 景行行芷  
2020.12.16

        `
    },
    {
        id: "1217",
        title: "2020.12.17 圣诞节放假通知和活动安排",
        content:
            `
## 细水长流一世安公会圣诞节放假通知和活动安排：

### 各位细水的小伙伴们，因为我们公会有超过三分之一的玩家为身在海外的时差党，圣诞节临近，对于海外玩家来说，如同我们的春节一样重要，所以在节日期间有团本活动的团队，可以视情况调整活动时间或暂停活动。节日期间官网不更新进度，不做招募。

### 凡在圣诞节期间有美丽的装扮、或开心的聚会、或路边的随想，都可以发图片给我，放到我们的官网展示版面。所有参与活动的童鞋都会获得小礼物哦！
        `,
        signature:
            `
提前祝大家圣诞快乐！爱你们的秃头大胡子  
2020.12.17
        `
    },
    {
        id:"0101",
        title:"2021.01.01 元旦公告",
        content:
        `
## 细水家人们大家元旦快乐！

### 首先要先跟大家道个歉，因为第一次在美国跨州搬家，导致很长时间不能上游戏，很感谢各团团长和其他管理都在帮我维护公会。

### 遗憾的是新美西二团在经历了第二次重组后仍然无法继续与我们走过2021年。种种原因公会暂时不再保留美西二团编制。

### 我预计在元月十日左右回归，届时第一件事就是开始整顿工作。之前有违反任何公会规章的，既往不咎，但从我回归日开始，凡我见到或听到再有违反者，直接移出公会不再通知个人或团长。

### 公会大群同样为公会专用群，在元月十日之前，请大家备注好各自游戏名字，凡不在公会人员，我回归日起会移出大群。各团团长也请整顿一下各自小群，尽量做到团群人数与参与活动人数相一致。

### 最后 第无数次重申，公会严禁任何形式的金币、现金交易；严禁任何工作室行为。有以此为目的进入公会的人员，请好自为之。
        `,
        signature:
        `
会长 璟航行芷 于2021.1.1
        `
    },
    {
        id:"0208",
        title:"2021.02.08 一份由公修引发的感动",
        content:
        `
## 这是一份由公修引发的感动

### 春节就快到了，提前跟大家拜个早年！距离我们公会集体大合影活动还有11小时，所有曾经、现在、或者未来会在公会的小伙伴，都欢迎你来！

### 说起公修，虽然每次有人捐款，都会在群里公布并且感谢，但心里的感动跟感激，真是说多少谢谢都表达不出来的。

### 有一天忘记了什么原因，翻看了一下公会捐款记录，前两行是2020年8月18号前后，距离公会成立仅仅五天时间。那是我刚建公会的时候，第一个加入进来的满级大号。他换了徽章买了一件幻化，剩下的全部都捐给了银行。我记得我把这份惊喜也记在了我的招募帖子里。那是公会第一次收到捐款，也是最让我难忘的记忆。正是他的支持，让我这个初出茅庐的会长更有信心走下去。

### 细细看过来每一份捐款记录，都能回忆起当时的情景，而每一次回忆，又都会给我增加一次坚持的动力。有些捐款的朋友只是休闲玩家，并不在任何团队中，他们的会阶是没有开通公修的，他们的捐赠足以表明他们对公会的热爱，和对公会活动的支持。真的非常非常感谢！

### 昨天收到一份大额捐赠，捐赠人用六个徽章换了金币捐给团队。因为要求匿名，所以我只在公会银行记录了他留给公会的30万金公修款，其他用于开荒的费用直接转给了团队。也是因为捐款人要求匿名，所以我也只在官员群里简单说了一下，有人直呼：我们公会真是每一个人都在用爱发电啊！

### 可能很多人不知道，公会刚成立的时候，来过一个很会吹嘘的人，他每天嘴里也是口口声声的用爱发电，但其实是个满口谎言的人。所以我一度对这个词很是敏感，但是今天，我真正体会到了这个爱的电力有多么十足。因为今天公会又相继接到一百万金和五十万金两笔捐款，其中一百万金捐赠也慷慨地将团队专用改成公会公修，所以其他几个团队的伙伴们不要辜负这份支持，大家一起加油呀！

### 我们公会到今天成立不过半年时间，但是我们拥有了五个稳定的团队，我们有了领先的M进度，我们有自掏腰包为公会建立官方网站的维护人员，还有热心的招募官员，和很多很多用各种方式奉献爱心的伙伴。真的，感谢你们！

### 可能很多人都知道会长好久没有稳定上过线了，也知道会长很久没有参与团本活动了。之前我一直没有说明原因，但是看着每次上线大家都那么积极的喊我打本带我低保，有时候觉得盛情难却的惭愧，特别是公会先后走了两个老人，我问他们的时候，他们都会表露出对我不上线的失望。

### 所以我还是跟大家简单说明一下原因吧，我真不是一个不负责的会长呀：我的妈妈因高血压转化老年痴呆症，从去年年底开始明显，除了记忆和思维衰退，还会半夜起来当作白天一样洗漱要求吃早餐。也曾忘记关卫生间的水龙头然后在淹水的卧室里看电视而不知道喊人...所以我和老公不得不倒班来守着她，而我也暂时无法安心坐在电脑前几个小时而不去管她。

### 相信未来我们会找到她的规律来慢慢适应她，也会让我们的生活逐渐回归正轨。所以之前让大家失望真是很抱歉，但除了暂时没有办法参与团队活动，你们的会长还是可以一如既往的招募新人、一如既往地不放弃一切机会来敲诈搜刮公会捐款。更会一如既往地盯着每一个团队不许金币交易、不许GZS行为；不许在团本里甩锅互怼、傲慢不羁。

### 请大家再多给我一些时间 也一定要相信我胡汉三 肯定会回来的！
        `,
        signature:
        `
爱你们的秃头大胡子写于收到三百五十万捐款的某一天        
        `
    }
]

const AnnounceCard = ({announceId, title}) => {
    const classes = useStyles();

    return (

        <Card className={classes.card}>
            <Link to={`/announce/${announceId}`} style={{textDecoration:"none"}}>
                <CardActionArea>
                    <h1>{title}</h1>
                </CardActionArea>
            </Link>
        </Card>

    )
}

function Announces() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header/>
            <Container maxWidth="lg">
                <h1>公告列表</h1>
                {
                    announceDataList.slice(0).reverse().map((a) => {
                        return (<AnnounceCard key={a.id} announceId={a.id} title={a.title}/>)
                    })
                }
            </Container>
            <Footer/>
        </div>
    )
}

export {Announces, announceDataList};
