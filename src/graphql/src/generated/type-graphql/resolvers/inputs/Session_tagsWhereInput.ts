import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Sessions_session_tagsListRelationFilter } from "../inputs/Sessions_session_tagsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Session_tagsWhereInput {
  @TypeGraphQL.Field(_type => [Session_tagsWhereInput], {
    nullable: true
  })
  AND?: Session_tagsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Session_tagsWhereInput], {
    nullable: true
  })
  OR?: Session_tagsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Session_tagsWhereInput], {
    nullable: true
  })
  NOT?: Session_tagsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  label?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => Sessions_session_tagsListRelationFilter, {
    nullable: true
  })
  sessions?: Sessions_session_tagsListRelationFilter | undefined;
}
