import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sessions_session_tagsAvgOrderByAggregateInput } from "../inputs/Sessions_session_tagsAvgOrderByAggregateInput";
import { Sessions_session_tagsCountOrderByAggregateInput } from "../inputs/Sessions_session_tagsCountOrderByAggregateInput";
import { Sessions_session_tagsMaxOrderByAggregateInput } from "../inputs/Sessions_session_tagsMaxOrderByAggregateInput";
import { Sessions_session_tagsMinOrderByAggregateInput } from "../inputs/Sessions_session_tagsMinOrderByAggregateInput";
import { Sessions_session_tagsSumOrderByAggregateInput } from "../inputs/Sessions_session_tagsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Sessions_session_tagsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  session_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tag_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Sessions_session_tagsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Sessions_session_tagsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sessions_session_tagsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Sessions_session_tagsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sessions_session_tagsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Sessions_session_tagsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sessions_session_tagsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Sessions_session_tagsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sessions_session_tagsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Sessions_session_tagsSumOrderByAggregateInput | undefined;
}
