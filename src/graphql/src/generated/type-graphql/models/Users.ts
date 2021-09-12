import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Sessions } from "../models/Sessions";
import { UsersCount } from "../resolvers/outputs/UsersCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Users {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  sessions?: Sessions[];

  @TypeGraphQL.Field(_type => UsersCount, {
    nullable: true
  })
  _count?: UsersCount | null;
}
