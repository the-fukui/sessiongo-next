import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumstatusWithAggregatesFilter } from "../inputs/EnumstatusWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SessionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SessionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SessionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SessionsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  slug?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  started_at?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  ended_at?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumstatusWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumstatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  author_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  content?: StringWithAggregatesFilter | undefined;
}
