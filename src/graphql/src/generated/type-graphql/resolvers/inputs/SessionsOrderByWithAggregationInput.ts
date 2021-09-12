import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionsAvgOrderByAggregateInput } from "../inputs/SessionsAvgOrderByAggregateInput";
import { SessionsCountOrderByAggregateInput } from "../inputs/SessionsCountOrderByAggregateInput";
import { SessionsMaxOrderByAggregateInput } from "../inputs/SessionsMaxOrderByAggregateInput";
import { SessionsMinOrderByAggregateInput } from "../inputs/SessionsMinOrderByAggregateInput";
import { SessionsSumOrderByAggregateInput } from "../inputs/SessionsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionsOrderByWithAggregationInput {
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
  started_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ended_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  author_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SessionsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SessionsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SessionsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SessionsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SessionsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SessionsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SessionsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SessionsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SessionsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SessionsSumOrderByAggregateInput | undefined;
}
