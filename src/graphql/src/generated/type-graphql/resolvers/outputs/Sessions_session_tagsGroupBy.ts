import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sessions_session_tagsAvgAggregate } from "../outputs/Sessions_session_tagsAvgAggregate";
import { Sessions_session_tagsCountAggregate } from "../outputs/Sessions_session_tagsCountAggregate";
import { Sessions_session_tagsMaxAggregate } from "../outputs/Sessions_session_tagsMaxAggregate";
import { Sessions_session_tagsMinAggregate } from "../outputs/Sessions_session_tagsMinAggregate";
import { Sessions_session_tagsSumAggregate } from "../outputs/Sessions_session_tagsSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Sessions_session_tagsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  session_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tag_id!: number;

  @TypeGraphQL.Field(_type => Sessions_session_tagsCountAggregate, {
    nullable: true
  })
  _count!: Sessions_session_tagsCountAggregate | null;

  @TypeGraphQL.Field(_type => Sessions_session_tagsAvgAggregate, {
    nullable: true
  })
  _avg!: Sessions_session_tagsAvgAggregate | null;

  @TypeGraphQL.Field(_type => Sessions_session_tagsSumAggregate, {
    nullable: true
  })
  _sum!: Sessions_session_tagsSumAggregate | null;

  @TypeGraphQL.Field(_type => Sessions_session_tagsMinAggregate, {
    nullable: true
  })
  _min!: Sessions_session_tagsMinAggregate | null;

  @TypeGraphQL.Field(_type => Sessions_session_tagsMaxAggregate, {
    nullable: true
  })
  _max!: Sessions_session_tagsMaxAggregate | null;
}
