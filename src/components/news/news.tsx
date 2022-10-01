import {FC} from "react";
import {NewsItemDto} from "../../common/types/types";

import styles from './styles.module.css'
import {NewsCard} from "./components/components";

const News: FC = () => {
    const mockedNews: NewsItemDto[] = [
        {
            id: 1,
            title: "Test news 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores iusto laudantium praesentium sapiente. Asperiores at dolore et maiores maxime neque nihil obcaecati vitae. Aliquam animi asperiores aspernatur at beatae culpa cum cupiditate dolorem enim eos esse eum ex hic ipsam labore maiores minima nihil nobis non officia officiis placeat quaerat quasi quibusdam quisquam quos reiciendis rem, sit voluptates voluptatibus.",
            postDate: "22.09.2022",
            imgUrl: "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
        },
        {
            id: 2,
            title: "Test news 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores iusto laudantium praesentium sapiente. Asperiores at dolore et maiores maxime neque nihil obcaecati vitae. Aliquam animi asperiores aspernatur at beatae culpa cum cupiditate dolorem enim eos esse eum ex hic ipsam labore maiores minima nihil nobis non officia officiis placeat quaerat quasi quibusdam quisquam quos reiciendis rem, sit voluptates voluptatibus.",
            postDate: "22.09.2022",
            imgUrl: "https://media.istockphoto.com/photos/beautiful-emeraldcolored-glacial-rivers-of-iceland-taken-from-a-picture-id1202227531?k=20&m=1202227531&s=612x612&w=0&h=FT4gvrElP5uwyQGWo0a2c7Pk1L_16lfj5rIrFJtQ150="
        },
        {
            id: 3,
            title: "Test news 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores iusto laudantium praesentium sapiente. Asperiores at dolore et maiores maxime neque nihil obcaecati vitae. Aliquam animi asperiores aspernatur at beatae culpa cum cupiditate dolorem enim eos esse eum ex hic ipsam labore maiores minima nihil nobis non officia officiis placeat quaerat quasi quibusdam quisquam quos reiciendis rem, sit voluptates voluptatibus.",
            postDate: "22.09.2022",
            imgUrl: "https://media.istockphoto.com/photos/magical-fairytale-forest-picture-id1082411378?k=20&m=1082411378&s=612x612&w=0&h=GalnNnhN5wVYqKXee-qy8AYrdOUDxEnkJlqC8T0q9dY="
        },
        {
            id: 4,
            title: "Test news 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores iusto laudantium praesentium sapiente. Asperiores at dolore et maiores maxime neque nihil obcaecati vitae. Aliquam animi asperiores aspernatur at beatae culpa cum cupiditate dolorem enim eos esse eum ex hic ipsam labore maiores minima nihil nobis non officia officiis placeat quaerat quasi quibusdam quisquam quos reiciendis rem, sit voluptates voluptatibus.",
            postDate: "22.09.2022",
            imgUrl: "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY="
        },
        {
            id: 5,
            title: "Test news 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores iusto laudantium praesentium sapiente. Asperiores at dolore et maiores maxime neque nihil obcaecati vitae. Aliquam animi asperiores aspernatur at beatae culpa cum cupiditate dolorem enim eos esse eum ex hic ipsam labore maiores minima nihil nobis non officia officiis placeat quaerat quasi quibusdam quisquam quos reiciendis rem, sit voluptates voluptatibus.",
            postDate: "22.09.2022",
            imgUrl: "https://media.istockphoto.com/photos/woman-standing-and-looking-at-lago-di-carezza-in-dolomites-picture-id1038870630?k=20&m=1038870630&s=612x612&w=0&h=08QhQgRJ6A5rDmRm4nFziOiumOzWwJ8UQR15CyxxKfo="
        },
        {
            id: 6,
            title: "Test news 6",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores iusto laudantium praesentium sapiente. Asperiores at dolore et maiores maxime neque nihil obcaecati vitae. Aliquam animi asperiores aspernatur at beatae culpa cum cupiditate dolorem enim eos esse eum ex hic ipsam labore maiores minima nihil nobis non officia officiis placeat quaerat quasi quibusdam quisquam quos reiciendis rem, sit voluptates voluptatibus.",
            postDate: "22.09.2022",
            imgUrl: "https://media.istockphoto.com/photos/young-woman-in-spiritual-pose-holding-the-light-picture-id1267497795?k=20&m=1267497795&s=612x612&w=0&h=lYZv6svmoUf4WNFYM5X3egYXSkpelyE218xhepqKoOA="
        }
    ]

    return <div className={styles.newsWrapper}>
        {mockedNews.map(({id, title, description, postDate, imgUrl}) =>
            <NewsCard key={id} imgUrl={imgUrl} postDate={postDate} title={title} description={description}/>
        )}
    </div>
}

export {News}