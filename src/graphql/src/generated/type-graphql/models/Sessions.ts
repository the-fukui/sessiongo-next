import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Sessions_session_tags } from "../models/Sessions_session_tags";
import { Users } from "../models/Users";
import { status } from "../enums/status";
import { SessionsCount } from "../resolvers/outputs/SessionsCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Sessions {
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
  ended_at?: Date | null;

  @TypeGraphQL.Field(_type => status, {
    nullable: false
  })
  status!: "DRAFT" | "PUBLISHED";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  author?: Users;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  author_id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  tags?: Sessions_session_tags[];

  @TypeGraphQL.Field(_type => SessionsCount, {
    nullable: true
  })
  _count?: SessionsCount | null;
}
