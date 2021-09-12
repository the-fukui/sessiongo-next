import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Session_tagsUncheckedCreateWithoutSessionsInput } from "../inputs/Session_tagsUncheckedCreateWithoutSessionsInput";
import { Session_tagsWhereUniqueInput } from "../inputs/Session_tagsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Session_tagsCreateOrConnectWithoutSessionsInput {
  @TypeGraphQL.Field(_type => Session_tagsWhereUniqueInput, {
    nullable: false
  })
  where!: Session_tagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Session_tagsUncheckedCreateWithoutSessionsInput, {
    nullable: false
  })
  create!: Session_tagsUncheckedCreateWithoutSessionsInput;
}
