import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumstatusFilter } from "../inputs/EnumstatusFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Sessions_session_tagsListRelationFilter } from "../inputs/Sessions_session_tagsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UsersRelationFilter } from "../inputs/UsersRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionsWhereInput {
  @TypeGraphQL.Field(_type => [SessionsWhereInput], {
    nullable: true
  })
  AND?: SessionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionsWhereInput], {
    nullable: true
  })
  OR?: SessionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionsWhereInput], {
    nullable: true
  })
  NOT?: SessionsWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  started_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  ended_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumstatusFilter, {
    nullable: true
  })
  status?: EnumstatusFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UsersRelationFilter, {
    nullable: true
  })
  author?: UsersRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  author_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => Sessions_session_tagsListRelationFilter, {
    nullable: true
  })
  tags?: Sessions_session_tagsListRelationFilter | undefined;
}
