import * as TypeGraphQL from "type-graphql";

export enum SessionsScalarFieldEnum {
  id = "id",
  slug = "slug",
  created_at = "created_at",
  updated_at = "updated_at",
  started_at = "started_at",
  ended_at = "ended_at",
  status = "status",
  title = "title",
  author_id = "author_id",
  content = "content"
}
TypeGraphQL.registerEnumType(SessionsScalarFieldEnum, {
  name: "SessionsScalarFieldEnum",
  description: undefined,
});
