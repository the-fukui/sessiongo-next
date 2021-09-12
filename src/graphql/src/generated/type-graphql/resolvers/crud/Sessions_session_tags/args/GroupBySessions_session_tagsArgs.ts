import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sessions_session_tagsOrderByWithAggregationInput } from "../../../inputs/Sessions_session_tagsOrderByWithAggregationInput";
import { Sessions_session_tagsScalarWhereWithAggregatesInput } from "../../../inputs/Sessions_session_tagsScalarWhereWithAggregatesInput";
import { Sessions_session_tagsWhereInput } from "../../../inputs/Sessions_session_tagsWhereInput";
import { Sessions_session_tagsScalarFieldEnum } from "../../../../enums/Sessions_session_tagsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySessions_session_tagsArgs {
  @TypeGraphQL.Field(_type => Sessions_session_tagsWhereInput, {
    nullable: true
  })
  where?: Sessions_session_tagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Sessions_session_tagsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Sessions_session_tagsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"session_id" | "tag_id">;

  @TypeGraphQL.Field(_type => Sessions_session_tagsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Sessions_session_tagsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
