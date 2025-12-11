import { GridGallery } from "./GridGallery";
import { Search } from "./Search";

export const Gallery = () => {
    const arrayCategory = ['cats', 'anime', 'cars'];
  return (
    <>
    <h2>Imágenes de la galería</h2>
    <Search />
    {
        arrayCategory.map(() => {
            <GridGallery category />
        })
    }
    </>
  )
}
