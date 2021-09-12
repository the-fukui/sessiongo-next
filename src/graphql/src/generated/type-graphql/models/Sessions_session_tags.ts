import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Session_tags } from "../models/Session_tags";
import { Sessions } from "../models/Sessions";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Sessions_session_tags {
  session?: Sessions;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  session_id!: number;

  tag?: Session_tags;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tag_id!: number;
}
