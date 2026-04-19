import { db, Film, User, Vote } from 'astro:db';

export default async function() {
  // Insert test users
  await db.insert(User).values([
    { id: 1, username: "john_doe", email: "john@example.com" },
    { id: 2, username: "jane_smith", email: "jane@example.com" },
    { id: 3, username: "movie_fan", email: "fan@example.com" },
  ]);

  // Insert test films
  await db.insert(Film).values([
    {
      id: 1,
      title: "The Shawshank Redemption",
      link: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      releaseYear: 1994
    },
    {
      id: 2,
      title: "The Godfather",
      link: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      releaseYear: 1972
    },
    {
      id: 3,
      title: "Pulp Fiction",
      link: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
      releaseYear: 1994
    },
    {
      id: 4,
      title: "Inception",
      link: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      releaseYear: 2010
    },
  ]);

  // Insert test votes
  await db.insert(Vote).values([
    { id: 1, filmId: 1, userId: 1, rating: 5 },
    { id: 2, filmId: 1, userId: 2, rating: 4 },
    { id: 3, filmId: 2, userId: 1, rating: 5 },
    { id: 4, filmId: 2, userId: 3, rating: 5 },
    { id: 5, filmId: 3, userId: 2, rating: 4 },
    { id: 6, filmId: 3, userId: 3, rating: 3 },
    { id: 7, filmId: 4, userId: 1, rating: 5 },
    { id: 8, filmId: 4, userId: 2, rating: 4 },
    { id: 9, filmId: 4, userId: 3, rating: 5 },
  ]);
}