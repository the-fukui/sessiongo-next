import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { status } from "../../enums/status";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class SessionsMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  slug!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  started_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  ended_at!: Date | null;

  @TypeGraphQL.Field(_type => status, {
    nullable: true
  })
  status!: "DRAFT" | "PUBLISHED" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  author_id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content!: string | null;
}
