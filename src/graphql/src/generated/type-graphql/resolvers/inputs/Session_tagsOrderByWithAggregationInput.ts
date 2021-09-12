import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Session_tagsAvgOrderByAggregateInput } from "../inputs/Session_tagsAvgOrderByAggregateInput";
import { Session_tagsCountOrderByAggregateInput } from "../inputs/Session_tagsCountOrderByAggregateInput";
import { Session_tagsMaxOrderByAggregateInput } from "../inputs/Session_tagsMaxOrderByAggregateInput";
import { Session_tagsMinOrderByAggregateInput } from "../inputs/Session_tagsMinOrderByAggregateInput";
import { Session_tagsSumOrderByAggregateInput } from "../inputs/Session_tagsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Session_tagsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  label?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Session_tagsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Session_tagsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Session_tagsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Session_tagsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Session_tagsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Session_tagsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Session_tagsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Session_tagsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Session_tagsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Session_tagsSumOrderByAggregateInput | undefined;
}
