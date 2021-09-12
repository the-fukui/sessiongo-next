import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionsAvgAggregate } from "../outputs/SessionsAvgAggregate";
import { SessionsCountAggregate } from "../outputs/SessionsCountAggregate";
import { SessionsMaxAggregate } from "../outputs/SessionsMaxAggregate";
import { SessionsMinAggregate } from "../outputs/SessionsMinAggregate";
import { SessionsSumAggregate } from "../outputs/SessionsSumAggregate";
import { status } from "../../enums/status";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class SessionsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updated_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  started_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  ended_at!: Date | null;

  @TypeGraphQL.Field(_type => status, {
    nullable: false
  })
  status!: "DRAFT" | "PUBLISHED";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  author_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

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
