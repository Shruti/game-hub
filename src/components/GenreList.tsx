import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
    <Heading marginBottom={3} fontSize='2xl'>Genres</Heading>
    <List>
      {data.map((genre) =>
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image src={getCroppedImageUrl(genre.image_background)} boxSize='32px' borderRadius={8} objectFit="cover"/>
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} whiteSpace='normal' textAlign='left' onClick={() => onSelectGenre(genre)} fontSize='lg' variant='Link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      )}
    </List>
    </>
  )
}

export default GenreList;