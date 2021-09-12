import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Session_tagsUncheckedCreateWithoutSessionsInput } from "../inputs/Session_tagsUncheckedCreateWithoutSessionsInput";
import { Session_tagsUncheckedUpdateWithoutSessionsInput } from "../inputs/Session_tagsUncheckedUpdateWithoutSessionsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Session_tagsUpsertWithoutSessionsInput {
  @TypeGraphQL.Field(_type => Session_tagsUncheckedUpdateWithoutSessionsInput, {
    nullable: false
  })
  update!: Session_tagsUncheckedUpdateWithoutSessionsInput;

  @TypeGraphQL.Field(_type => Session_tagsUncheckedCreateWithoutSessionsInput, {
    nullable: false
  })
  create!: Session_tagsUncheckedCreateWithoutSessionsInput;
}
