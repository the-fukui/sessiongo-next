import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Session_tagsAvgAggregate } from "../outputs/Session_tagsAvgAggregate";
import { Session_tagsCountAggregate } from "../outputs/Session_tagsCountAggregate";
import { Session_tagsMaxAggregate } from "../outputs/Session_tagsMaxAggregate";
import { Session_tagsMinAggregate } from "../outputs/Session_tagsMinAggregate";
import { Session_tagsSumAggregate } from "../outputs/Session_tagsSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Session_tagsGroupBy {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  label!: string;

  @TypeGraphQL.Field(_type => Session_tagsCountAggregate, {
    nullable: true
  })
  _count!: Session_tagsCountAggregate | null;

  @TypeGraphQL.Field(_type => Session_tagsAvgAggregate, {
    nullable: true
  })
  _avg!: Session_tagsAvgAggregate | null;

  @TypeGraphQL.Field(_type => Session_tagsSumAggregate, {
    nullable: true
  })
  _sum!: Session_tagsSumAggregate | null;

  @TypeGraphQL.Field(_type => Session_tagsMinAggregate, {
    nullable: true
  })
  _min!: Session_tagsMinAggregate | null;

  @TypeGraphQL.Field(_type => Session_tagsMaxAggregate, {
    nullable: true
  })
  _max!: Session_tagsMaxAggregate | null;
}
