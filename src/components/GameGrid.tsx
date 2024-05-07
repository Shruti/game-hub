import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
interface Props {
    selectedGenre: Genre | null ;
}

const GameGrid = ({selectedGenre} : Props) => {
   const {data, error, isLoading} = useGames(selectedGenre);
   const skeletons = [1, 2, 3, 4, 5];
    return (      
         <SimpleGrid columns = {{sm: 1, md: 2, lg:3, xl: 5}} spacing={4} padding={10}>
            {error && <Text>{error}</Text>}
            {isLoading && 
            skeletons.map(skeleton => 
            <GameCardContainer key = {skeleton}>
            <GameCardSkeleton/>
            </GameCardContainer>
            )}
           
                {data && data.map ((game)=> (
                    <GameCardContainer key={game.id}>
                    <GameCard game={game}/>
                    </GameCardContainer>
                ))}
            </SimpleGrid>
      
        
    )
}

export default GameGrid;