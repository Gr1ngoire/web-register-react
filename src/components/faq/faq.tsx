import {FC} from "react";
import {QuestionItemDto} from "../../common/types/types";

import styles from './styles.module.css'
import {QuestionAnswerSection} from "./components/components";

const Faq: FC = () => {

    const mockedQuestionAnswers: QuestionItemDto[] = [
        {
            id: 1,
            content: "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus accusantium amet architecto aspernatur, autem beatae commodi consequuntur delectus deserunt dignissimos eaque eos et facilis fugit id incidunt iste magni, maiores molestias mollitia natus nesciunt nostrum quasi quibusdam quidem quis quo quos recusandae rem repellat sunt temporibus ut vel veritatis, voluptatem voluptatibus. Accusantium animi assumenda autem commodi deleniti dolores enim exercitationem explicabo facilis harum ipsum laboriosam laborum maxime molestiae nihil, obcaecati omnis porro possimus provident quae ratione recusandae repudiandae sint sit suscipit velit voluptate voluptates. Animi architecto asperiores consequatur excepturi itaque non vitae voluptates! Consequuntur doloribus id magni quas suscipit!?",
            postDate: "02.10.2022",
            answer: {
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, molestiae.",
                postDate: "02.10.2022"
            }
        },
        {
            id: 2,
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, molestiae?",
            postDate: "02.10.2022",
            answer: null
        },
        {
            id: 3,
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, molestiae?",
            postDate: "02.10.2022",
            answer: {
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, molestiae.",
                postDate: "02.10.2022"
            }
        },
        {
            id: 4,
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur at autem blanditiis debitis dignissimos doloribus hic labore, maxime modi, molestiae nihil non nostrum quo sint, ut voluptatibus? Consequatur distinctio ex harum hic itaque magnam maiores modi nobis omnis quam quidem recusandae rem, rerum sequi similique suscipit tenetur ut? Alias consequatur cupiditate distinctio esse facilis fuga ipsam iure obcaecati quod, rerum tempore unde vero. Dolorem inventore laboriosam minus modi, nemo nobis perspiciatis quam tenetur? A consequuntur dolorem, dolorum esse nisi non omnis quae qui quidem quisquam repellat reprehenderit sint vitae voluptas voluptatibus. Cum, obcaecati, voluptas. Deserunt earum esse, excepturi pariatur ratione repudiandae similique soluta! A ab aperiam atque, ea earum eius eos esse eum expedita facere inventore ipsam laborum maiores minima modi nihil officia omnis quasi quod recusandae rerum, sed sequi totam ullam vel, veniam voluptates voluptatum! Accusamus adipisci aliquid assumenda commodi deleniti dolorum earum ex impedit, iusto modi mollitia numquam provident quam quas qui quidem quo reiciendis repudiandae sapiente sunt, tempora unde voluptates voluptatibus. Accusantium aliquam consequatur dolorem earum est ex iste iure mollitia natus nobis, officiis quidem. Aperiam asperiores aspernatur assumenda cum dicta et excepturi labore laudantium minima mollitia, nihil nisi, obcaecati quas quasi quod, totam unde! Amet dicta repudiandae saepe. A adipisci beatae facilis hic ipsa ipsum iure laboriosam libero nesciunt nulla, numquam sed, sint soluta tempora veritatis. Ab at est ex possimus tenetur. Aspernatur molestias nihil quos saepe sint. Aliquid dolorum id maxime nobis quo quod temporibus? Cupiditate esse iste laboriosam magni natus officia optio! Accusantium, adipisci atque aut beatae commodi consequuntur dicta ea eveniet exercitationem impedit incidunt iste laudantium, libero maiores nam necessitatibus numquam odit praesentium qui quidem quisquam quod similique soluta tempora tenetur ullam voluptates. Deserunt dolores eaque est, expedita illum minus nesciunt non optio soluta vel. Adipisci aperiam culpa cum deserunt earum ipsa perferendis praesentium quos voluptatibus? Ab alias consequuntur cum delectus deleniti deserunt doloribus eligendi eveniet ex, facere harum illo itaque iure magni minus molestiae nam nulla numquam placeat quibusdam quod reiciendis repellendus temporibus ut voluptate voluptatibus, voluptatum! Aperiam aspernatur culpa deserunt doloribus eum facilis, laudantium nam nemo quaerat ullam. A assumenda, cumque cupiditate, debitis delectus deleniti deserunt distinctio eaque enim facere in incidunt iure iusto labore laboriosam magnam minus necessitatibus nemo non numquam odit pariatur quas quibusdam recusandae repellendus rerum sequi sunt temporibus ullam ut. Ad alias amet aperiam consectetur consequatur ducimus ea eaque ex excepturi exercitationem incidunt iste magnam minus non officiis provident quas, qui quidem repellendus sapiente sint sit vel voluptates voluptatibus voluptatum. Blanditiis dolorum eligendi eos illum ipsum quibusdam temporibus unde vitae? Ab accusantium alias, asperiores aut distinctio doloremque dolorum hic inventore maxime perspiciatis qui, repellat soluta voluptatem? Accusamus assumenda autem blanditiis earum enim error esse, et exercitationem hic magnam necessitatibus nisi numquam, optio porro repellat rerum sed? Architecto ea illo impedit odit quas, sequi tempore voluptatibus voluptatum. Aliquid beatae consequuntur, ducimus ea esse fugit neque perspiciatis provident recusandae rerum, sed soluta! Cumque dolorem unde voluptatum. Architecto aspernatur assumenda dolor dolores eaque enim expedita fuga incidunt inventore iure nam nesciunt nisi obcaecati odit porro, quia quis recusandae, reiciendis saepe sequi sint totam ut! At commodi esse, harum illo labore quae velit! Animi asperiores cumque delectus ducimus numquam quae rem sunt. Accusamus alias corporis debitis iure labore omnis possimus sequi, vitae voluptatibus! Adipisci atque cumque delectus, dicta error excepturi exercitationem fugiat incidunt ipsa, ipsam molestiae nam odio odit perferendis perspiciatis quis temporibus voluptatibus voluptatum. Aperiam dolore eaque inventore ipsa non nulla numquam quisquam velit! A ab ad commodi cumque dignissimos dolorem eveniet harum, minus modi nihil perspiciatis quos suscipit. A ab ad cum cupiditate ducimus eum ex fuga inventore, magnam nobis officia quia reiciendis velit. A alias aliquam architecto, blanditiis, est facere ipsam nesciunt obcaecati quae recusandae rerum, tempora vero voluptatem! Dolorem excepturi facilis ipsa labore necessitatibus nisi quae repudiandae saepe. Asperiores consequatur dolor doloremque eaque error, expedita facere facilis fuga fugit harum hic id illo illum iusto labore laudantium maiores maxime necessitatibus nemo nihil non officiis pariatur quia rerum saepe, similique sint tempore tenetur ut voluptates. Adipisci aliquid asperiores beatae blanditiis cupiditate debitis deserunt dolor doloribus enim explicabo id ipsa ipsum laudantium maxime natus nihil nisi nulla obcaecati perferendis, porro possimus provident quaerat quos ratione, recusandae rerum similique sunt tenetur ullam unde veniam voluptate voluptatem voluptatibus? Consectetur corporis cum doloribus earum esse est illum impedit magnam mollitia nam nostrum officia optio porro qui quia, quisquam quos reiciendis suscipit voluptate voluptatibus! Asperiores assumenda culpa fugit impedit officiis qui quia ut? Ab ad amet animi aspernatur consectetur cum eaque error, esse facere fugiat ipsam itaque iure magni modi nulla obcaecati quod quos reprehenderit rerum saepe suscipit temporibus voluptate voluptatum! Corporis dicta dignissimos ipsa iure, nam neque odio temporibus velit? Ad alias aspernatur, atque beatae consectetur consequuntur cumque dicta eaque enim ex expedita fugiat hic inventore ipsam labore magni molestiae officiis perferendis perspiciatis placeat porro quam quod, quos reprehenderit saepe sequi sint sit temporibus ullam vero. Beatae earum minus odio quasi ullam veritatis? A aliquid amet atque aut consectetur corporis dolor dolorum ea eligendi enim facilis illum itaque laborum magni maiores modi nam necessitatibus neque optio perspiciatis porro, quasi quidem quisquam repellat sapiente temporibus veniam vitae voluptas voluptates voluptatum? Adipisci eligendi id itaque molestiae repudiandae. Asperiores at aut esse fuga pariatur provident quasi sint vel veritatis. Aliquam consequuntur corporis deleniti dolore maxime non perspiciatis qui ratione sint voluptatem. Accusantium atque blanditiis dicta dolor dolores, expedita illo impedit ipsum maiores natus nesciunt officia officiis optio quidem quod temporibus ullam. Commodi cupiditate iure perferendis perspiciatis recusandae. Ab blanditiis consectetur dignissimos dolor expedita facere impedit, itaque iure libero nam officiis quae quasi quos ratione ut velit voluptatibus! Culpa eius necessitatibus nobis placeat quidem temporibus. Dolorum eum laboriosam modi nemo omnis rem similique tempore. A accusantium adipisci amet aut cumque cupiditate debitis delectus, distinctio doloribus ducimus eaque error eum eveniet exercitationem facilis, impedit in inventore ipsam iste libero maiores molestiae nobis nulla obcaecati, officiis qui quibusdam quidem quisquam soluta sunt tempora temporibus ut voluptatem. Animi cum deleniti eius est illo illum impedit incidunt pariatur repudiandae.?",
            postDate: "02.10.2022",
            answer: {
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, molestiae.",
                postDate: "02.10.2022"
            }
        },
    ]

    return <div className={styles.faqWrapper}>
        <div className={styles.answersQuestionsSection}>
            {mockedQuestionAnswers.map(({id, content, postDate, answer}) =>
                <div className={styles.answersQuestionsWrapper} key={id}>
                    <QuestionAnswerSection
                        question={content}
                        questionPostDate={postDate}
                        answer={answer?.content}
                        answerPostDate={answer?.postDate}/>
                </div>
            )}
        </div>
    </div>
}

export {Faq}