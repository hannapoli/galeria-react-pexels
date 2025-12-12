import { Card } from "./Card"
import { Pagination } from "./Pagination"

export const GridGallery = (category) => {
    console.log(category, 'son las cat del gridGarelly')
    const photos = [
        {
            photo: 'url1',
            description: 'nananananna',
            url: 'http....'
        },
        {
            photo: 'url2',
            description: 'nananananna',
            url: 'http....'
        },
        {
            photo: 'url',
            description: 'nananananna',
            url: 'http....'
        }
    ]


    return (
        <>
            {
                photos.map((element) => (
                    <article key={element.photo}>
                        <Card {...element} />
                    </article>
                ))
            }
            <Pagination />

        </>
    )
}
