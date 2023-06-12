'use client'
import Grid from '@/components/Grid';
import { Game } from '@/gameTypes';
import { gameDetails } from '@/rawg';
import { database, databaseId, getSessionData, getWishlist, userID, wishlistCol, wishlistData } from '@/utils/appwrite';
import { Query } from 'appwrite';
import React, { useEffect, useState } from 'react'

const Wish = () => {
  const [games, setGames] = useState<Game[] | null>(null);
  const [loading, setLoading] = useState(true); //TO DO: add loading animation react spinner

  //function to load games
  useEffect(() => {
    getWishlist();
    let gameIds: number[] = [];
    let gameDetailsPromises: Promise<Game>[];
    
    const getGameIds = () => {
        gameIds = wishlistData?.map((game) => game.game_id);
        //getting game details for each game id
        gameDetailsPromises = gameIds?.map((gameId) =>
          gameDetails({ id: gameId })
        );
        //setting games
        Promise.all(gameDetailsPromises).then((games) => {
          setGames(games);
        });
    };
    //TO-DO: temporary fix for reload userID undefined issue
    setTimeout(() => {
      getGameIds();
    }, 1000);
  }, []);

return (
  <div className="space-y-4">
    <h1 className='text-gray-300 font-extrabold text-3xl'>Wishlist</h1>
    {games ? (
      games.length ? (
        <Grid games={games} />
      ) : (
        <span className="text-white">No games found.</span>
      )
    ) : (
      <div className="text-white">Loading...</div>
    )}
  </div>
);
};

export default Wish