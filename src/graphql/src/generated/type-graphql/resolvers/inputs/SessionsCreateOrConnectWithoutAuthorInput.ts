import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionsUncheckedCreateWithoutAuthorInput } from "../inputs/SessionsUncheckedCreateWithoutAuthorInput";
import { SessionsWhereUniqueInput } from "../inputs/SessionsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionsCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field(_type => SessionsWhereUniqueInput, {
    nullable: false
  })
  where!: SessionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SessionsUncheckedCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: SessionsUncheckedCreateWithoutAuthorInput;
}
