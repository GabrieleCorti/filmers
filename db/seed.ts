import { db, Film, User, Vote, Comment } from 'astro:db';

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
      link: "https://it.wikipedia.org/wiki/Pagina_principale",
      releaseYear: 1994,
      slug: "the-shawshank-redemption",
      insertBy: 1,
    },
    {
      id: 2,
      title: "The Godfather",
      link: "https://it.wikipedia.org/wiki/Pagina_principale",
      releaseYear: 1972,
      slug: "the-godfather",
      insertBy: 2,
    },
    {
      id: 3,
      title: "Pulp Fiction",
      link: "https://it.wikipedia.org/wiki/Pagina_principale",
      releaseYear: 1994,
      slug: "pulp-fiction",
      insertBy: 3,
    },
    {
      id: 4,
      title: "Inception",
      link: "https://it.wikipedia.org/wiki/Pagina_principale",
      releaseYear: 2010,
      slug: "inception",
      insertBy: 1,
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

  await db.insert(Comment).values([
    { id: 1, type: 'film', entityId: 1, userId: 1, content: "Amazing movie!" },
    { id: 2, type: 'film', entityId: 1, userId: 2, content: "A timeless classic." },
    { id: 3, type: 'film', entityId: 2, userId: 1, content: "Masterpiece." },
    { id: 4, type: 'film', entityId: 2, userId: 3, content: "One of the best films ever made." },
    { id: 5, type: 'film', entityId: 3, userId: 2, content: "Great dialogue and storytelling." },
    { id: 6, type: 'film', entityId: 3, userId: 3, content: "A bit overrated in my opinion." },]);
}