import { Game } from "@/gameTypes";
import Image from "next/image";

type GameCardProps = {
  game: Game;
};

const GameCard = ({ game }: GameCardProps) => {
  const { id, name, price, released, background_image, platforms, genres } =
    game;

  const releasedDate = new Date(released).toLocaleDateString();
  const genreList = genres.map((genre) => genre.name).join(", ");
  const platformList = platforms.map((platform) => platform.platform.name).join(", ");

  return (
    <div className="bg-[#180000] inline-block rounded-b-3xl ">
      <Image src={background_image} alt={name} width={400} height={250} />
      <div className="p-2">
        <div className="flex justify-between">
{/*           <div className="text-sm font-medium text-gray-300">
            <p className="">{platformList}</p>
          </div> */}
        </div>
        <div className="text-sm font-medium text-gray-300">
          <h3 className="font-extrabold text-md">{name}</h3>
          <p className="">{releasedDate}</p>
          <p className="">{genreList}</p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;