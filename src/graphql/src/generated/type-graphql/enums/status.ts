import * as TypeGraphQL from "type-graphql";

export enum status {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED"
}
TypeGraphQL.registerEnumType(status, {
  name: "status",
  description: undefined,
});
