import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionsUncheckedUpdateWithoutAuthorInput } from "../inputs/SessionsUncheckedUpdateWithoutAuthorInput";
import { SessionsWhereUniqueInput } from "../inputs/SessionsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionsUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => SessionsWhereUniqueInput, {
    nullable: false
  })
  where!: SessionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SessionsUncheckedUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: SessionsUncheckedUpdateWithoutAuthorInput;
}
