import {
  integer,
  text,
  boolean,
  pgTable,
  varchar,
  uuid,
  pgEnum,
} from "drizzle-orm/pg-core";

export const ROLE_ENUM = pgEnum("role", ["USER", "ADMIN"]);

export const users = pgTable("users", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  status: ROLE_ENUM("role").default("USER"),
});
