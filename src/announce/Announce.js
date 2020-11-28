import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Header from "../home/Header";
import Footer from "../home/Footer";
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'



const useStyles = makeStyles((theme) => ({
    root: {
            backgroundColor:"#f1f6f9",
            color:"#14274e",
    },
    content:{
        textAlign:"left",
    },
    signature:{
        textAlign:"right"
    }
}));

const markdown1 = `
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
9. 鉴于之前过往，公会各团不再接收四人及以上小团体；不再接收TN组合的夫妻档。
～～～～～～～～～～～～～

## 参团要求：
1. 开荒期间，一个人只能跟一个团活动。不支持一人多职业参加多团活动。
2. 后期伐木阶段，H团可以带公会新人休闲玩家，各团主力成员的小号允许参与，需要交付两组合计两组烹饪作为门票。
3. 伐木期间，一个人容许一个小号参加其他团PT/H团本，但其参与团队的成员有优先权。
4. 各团管理自行负责本团成员配置、首发等相关问题。确定人员后名单提交会长进行会阶调整。每月末团长与会长对接一次主力人员名单。
5. 各团有重大人员变动：如踢人、长时期请假，团长有权自行处理。处理结果提交会长备案。
6. 原则上不支持各团变更基础活动时间（加班除外），如确有需要，团长需提前在会长对接群报备并经会长、副会长核实批准。团长有义务对不能接受变更时间的团员进行妥善安排。
～～～～～～～～～～～～～

### 另：公会各团，进度也好、休闲也罢，只是时间、精力区别，不分高低，没有比较。请各团成员之间保持有爱，互帮互助，不攀比、不争论。

### 任何人对公会、对管理、对其他成员有任何问题、意见、建议，都可以随时找我来沟通，内容保密。

`
const markdown2 = `
再次感谢大家选择细水！爱你们的**秃头大胡子**会长致！  
2020.11.23日9.0前夜

`
function Announce() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header/>
            <Container maxWidth="lg">
                <ReactMarkdown plugins={[gfm]} className={classes.content}>{markdown1}</ReactMarkdown>
                <ReactMarkdown plugins={[gfm]} className={classes.signature}>{markdown2}</ReactMarkdown>
            </Container>
            <Footer/>
        </div>
    )
}

export default Announce;
