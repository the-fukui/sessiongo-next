import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Session_tagsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Session_tagsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Session_tagsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Session_tagsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Session_tagsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Session_tagsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Session_tagsScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  label?: StringWithAggregatesFilter | undefined;
}
