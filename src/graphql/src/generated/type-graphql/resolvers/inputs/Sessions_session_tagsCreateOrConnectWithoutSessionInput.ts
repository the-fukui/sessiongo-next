import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sessions_session_tagsUncheckedCreateWithoutSessionInput } from "../inputs/Sessions_session_tagsUncheckedCreateWithoutSessionInput";
import { Sessions_session_tagsWhereUniqueInput } from "../inputs/Sessions_session_tagsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class Sessions_session_tagsCreateOrConnectWithoutSessionInput {
  @TypeGraphQL.Field(_type => Sessions_session_tagsWhereUniqueInput, {
    nullable: false
  })
  where!: Sessions_session_tagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Sessions_session_tagsUncheckedCreateWithoutSessionInput, {
    nullable: false
  })
  create!: Sessions_session_tagsUncheckedCreateWithoutSessionInput;
}
