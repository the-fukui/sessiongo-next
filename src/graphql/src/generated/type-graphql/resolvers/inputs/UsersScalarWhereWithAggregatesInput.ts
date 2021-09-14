import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UsersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  auth_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  user_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  name?: StringNullableWithAggregatesFilter | undefined;
}
