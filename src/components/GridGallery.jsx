import { Card } from "./Card"
import { Pagination } from "./Pagination"

export const GridGallery = (category) => {
    category = [
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
            photo: 'url3',
            description: 'nananananna',
            url: 'http....'
        }
    ]
    return (
        <>
            <div>GridGallery</div>
            <Card />{/* tiene que ser llamado dentro del map y pinta cada elemento  */}
            <Pagination />
        </>
    )
}
