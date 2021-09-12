import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionsCreateManyAuthorInput } from "../inputs/SessionsCreateManyAuthorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionsCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [SessionsCreateManyAuthorInput], {
    nullable: false
  })
  data!: SessionsCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
