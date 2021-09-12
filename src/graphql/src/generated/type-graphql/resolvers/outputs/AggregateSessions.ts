import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionsAvgAggregate } from "../outputs/SessionsAvgAggregate";
import { SessionsCountAggregate } from "../outputs/SessionsCountAggregate";
import { SessionsMaxAggregate } from "../outputs/SessionsMaxAggregate";
import { SessionsMinAggregate } from "../outputs/SessionsMinAggregate";
import { SessionsSumAggregate } from "../outputs/SessionsSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateSessions {
  @TypeGraphQL.Field(_type => SessionsCountAggregate, {
    nullable: true
  })
  _count!: SessionsCountAggregate | null;

  @TypeGraphQL.Field(_type => SessionsAvgAggregate, {
    nullable: true
  })
  _avg!: SessionsAvgAggregate | null;

  @TypeGraphQL.Field(_type => SessionsSumAggregate, {
    nullable: true
  })
  _sum!: SessionsSumAggregate | null;

  @TypeGraphQL.Field(_type => SessionsMinAggregate, {
    nullable: true
  })
  _min!: SessionsMinAggregate | null;

  @TypeGraphQL.Field(_type => SessionsMaxAggregate, {
    nullable: true
  })
  _max!: SessionsMaxAggregate | null;
}
