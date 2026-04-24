import { defineDb, defineTable, column } from 'astro:db';

const Film = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    link: column.text(),
    releaseYear: column.number({optional: true}),
    createdAt: column.date({ default: new Date() }),
    slug: column.text({ unique: true }),
    insertBy: column.number({ references: () => User.columns.id }),
  }
});

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    username: column.text(),
    email: column.text(),
    createdAt: column.date({ default: new Date() }),
  }
});

const Vote = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    filmId: column.number({ references: () => Film.columns.id }),
    userId: column.number({ references: () => User.columns.id }),
    rating: column.number(),
    createdAt: column.date({ default: new Date() }),
  }
});

const Comment = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    type: column.text({enum: ['film', 'cigar']}),
    entityId: column.number({ references: () => Film.columns.id }),
    userId: column.number({ references: () => User.columns.id }),
    content: column.text(),
    createdAt: column.date({ default: new Date() }),
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { Film, User, Vote, Comment },
});