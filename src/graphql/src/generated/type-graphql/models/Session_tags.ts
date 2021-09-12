import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Sessions_session_tags } from "../models/Sessions_session_tags";
import { Session_tagsCount } from "../resolvers/outputs/Session_tagsCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Session_tags {
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

  sessions?: Sessions_session_tags[];

  @TypeGraphQL.Field(_type => Session_tagsCount, {
    nullable: true
  })
  _count?: Session_tagsCount | null;
}
