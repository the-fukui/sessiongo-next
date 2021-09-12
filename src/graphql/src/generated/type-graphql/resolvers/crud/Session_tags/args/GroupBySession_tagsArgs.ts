import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Session_tagsOrderByWithAggregationInput } from "../../../inputs/Session_tagsOrderByWithAggregationInput";
import { Session_tagsScalarWhereWithAggregatesInput } from "../../../inputs/Session_tagsScalarWhereWithAggregatesInput";
import { Session_tagsWhereInput } from "../../../inputs/Session_tagsWhereInput";
import { Session_tagsScalarFieldEnum } from "../../../../enums/Session_tagsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySession_tagsArgs {
  @TypeGraphQL.Field(_type => Session_tagsWhereInput, {
    nullable: true
  })
  where?: Session_tagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Session_tagsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Session_tagsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Session_tagsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "slug" | "created_at" | "updated_at" | "label">;

  @TypeGraphQL.Field(_type => Session_tagsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Session_tagsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
