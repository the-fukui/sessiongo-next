import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SessionsOrderByWithAggregationInput } from "../../../inputs/SessionsOrderByWithAggregationInput";
import { SessionsScalarWhereWithAggregatesInput } from "../../../inputs/SessionsScalarWhereWithAggregatesInput";
import { SessionsWhereInput } from "../../../inputs/SessionsWhereInput";
import { SessionsScalarFieldEnum } from "../../../../enums/SessionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySessionsArgs {
  @TypeGraphQL.Field(_type => SessionsWhereInput, {
    nullable: true
  })
  where?: SessionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SessionsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SessionsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "slug" | "created_at" | "updated_at" | "started_at" | "ended_at" | "status" | "title" | "author_id" | "content">;

  @TypeGraphQL.Field(_type => SessionsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SessionsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
